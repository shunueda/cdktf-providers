import * as cdktf from 'cdktf';
import { DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityNodeAffinity,
dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityNodeAffinityToTerraform,
dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityNodeAffinityToHclTerraform,
DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityNodeAffinityOutputReference,
DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAffinity,
dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAffinityToTerraform,
dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAffinityToHclTerraform,
DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAffinityOutputReference,
DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecPatroni,
dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecPatroniToTerraform,
dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecPatroniToHclTerraform,
DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecPatroniOutputReference,
DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecProxy,
dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecProxyToTerraform,
dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecProxyToHclTerraform,
DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecProxyOutputReference,
DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecReplicaService,
dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecReplicaServiceToTerraform,
dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecReplicaServiceToHclTerraform,
DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecReplicaServiceOutputReference,
DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecService,
dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecServiceToTerraform,
dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecServiceToHclTerraform,
DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecServiceOutputReference,
DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecStandby,
dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecStandbyToTerraform,
dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecStandbyToHclTerraform,
DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecStandbyOutputReference } from './structs1200'
import { DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecBackups,
dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecBackupsToTerraform,
dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecBackupsToHclTerraform,
DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecBackupsOutputReference,
DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecConfig,
dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecConfigToTerraform,
dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecConfigToHclTerraform,
DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecConfigOutputReference,
DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecCustomReplicationTlsSecret,
dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecCustomReplicationTlsSecretToTerraform,
dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecCustomReplicationTlsSecretToHclTerraform,
DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecCustomReplicationTlsSecretOutputReference,
DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecCustomTlsSecret,
dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecCustomTlsSecretToTerraform,
dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecCustomTlsSecretToHclTerraform,
DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecCustomTlsSecretOutputReference } from './structs400'
import { DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecDataSource,
dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecDataSourceToTerraform,
dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecDataSourceToHclTerraform,
DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecDataSourceOutputReference,
DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecDatabaseInitSql,
dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecDatabaseInitSqlToTerraform,
dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecDatabaseInitSqlToHclTerraform,
DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecDatabaseInitSqlOutputReference,
DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecImagePullSecrets,
dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecImagePullSecretsToTerraform,
dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecImagePullSecretsToHclTerraform,
DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecImagePullSecretsList,
DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecInstances,
dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecInstancesToTerraform,
dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecInstancesToHclTerraform,
DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecInstancesList,
DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecMetadata,
dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecMetadataToTerraform,
dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecMetadataToHclTerraform,
DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecMetadataOutputReference,
DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecMonitoring,
dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecMonitoringToTerraform,
dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecMonitoringToHclTerraform,
DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecMonitoringOutputReference } from './structs800'
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#key DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#operator DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#values DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#match_expressions DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#match_labels DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList",
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#key DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#operator DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#values DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#match_expressions DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#match_labels DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList",
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#label_selector DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /**
  * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'labelSelector' as 'key in (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both matchLabelKeys and labelSelector. Also, matchLabelKeys cannot be set when labelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#match_label_keys DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'labelSelector' as 'key notin (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both mismatchLabelKeys and labelSelector. Also, mismatchLabelKeys cannot be set when labelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#mismatch_label_keys DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means 'this pod's namespace'. An empty selector ({}) matches all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#namespace_selector DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
  /**
  * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means 'this pod's namespace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#namespaces DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#topology_key DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector",
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
      value: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector",
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined) {
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
  private _labelSelector = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector) {
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
  private _namespaceSelector = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector) {
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
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Required. A pod affinity term, associated with the corresponding weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#pod_affinity_term DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#pod_affinity_term}
  */
  readonly podAffinityTerm: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
  /**
  * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#weight DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_affinity_term: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_affinity_term: {
      value: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct!.podAffinityTerm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm",
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
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
  private _podAffinityTerm = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference(this, "pod_affinity_term");
  public get podAffinityTerm() {
    return this._podAffinityTerm;
  }
  public putPodAffinityTerm(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm) {
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#key DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#operator DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#values DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#match_expressions DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#match_labels DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#key DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#operator DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#values DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#match_expressions DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#match_labels DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList",
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#label_selector DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'labelSelector' as 'key in (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both matchLabelKeys and labelSelector. Also, matchLabelKeys cannot be set when labelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#match_label_keys DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'labelSelector' as 'key notin (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both mismatchLabelKeys and labelSelector. Also, mismatchLabelKeys cannot be set when labelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#mismatch_label_keys DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means 'this pod's namespace'. An empty selector ({}) matches all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#namespace_selector DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
  /**
  * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means 'this pod's namespace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#namespaces DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#topology_key DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector",
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
      value: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector",
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
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
  private _labelSelector = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
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
  private _namespaceSelector = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector) {
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinity {
  /**
  * The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding 'weight' to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#preferred_during_scheduling_ignored_during_execution DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#required_during_scheduling_ignored_during_execution DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinity | cdktf.IResolvable | undefined) {
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
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
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
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
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
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinity {
  /**
  * Describes node affinity scheduling rules for the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#node_affinity DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#node_affinity}
  */
  readonly nodeAffinity?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityNodeAffinity;
  /**
  * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#pod_affinity DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#pod_affinity}
  */
  readonly podAffinity?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAffinity;
  /**
  * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#pod_anti_affinity DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinity;
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityNodeAffinityToTerraform(struct!.nodeAffinity),
    pod_affinity: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAffinityToTerraform(struct!.podAffinity),
    pod_anti_affinity: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityToTerraform(struct!.podAntiAffinity),
  }
}


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_affinity: {
      value: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityNodeAffinityToHclTerraform(struct!.nodeAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityNodeAffinity",
    },
    pod_affinity: {
      value: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAffinityToHclTerraform(struct!.podAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAffinity",
    },
    pod_anti_affinity: {
      value: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityToHclTerraform(struct!.podAntiAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinity",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinity | cdktf.IResolvable | undefined) {
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
  private _nodeAffinity = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityNodeAffinityOutputReference(this, "node_affinity");
  public get nodeAffinity() {
    return this._nodeAffinity;
  }
  public putNodeAffinity(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityNodeAffinity) {
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
  private _podAffinity = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAffinityOutputReference(this, "pod_affinity");
  public get podAffinity() {
    return this._podAffinity;
  }
  public putPodAffinity(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAffinity) {
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
  private _podAntiAffinity = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinityOutputReference(this, "pod_anti_affinity");
  public get podAntiAffinity() {
    return this._podAntiAffinity;
  }
  public putPodAntiAffinity(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityPodAntiAffinity) {
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
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesClusterTrustBundleLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#key DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#operator DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#values DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesClusterTrustBundleLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesClusterTrustBundleLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesClusterTrustBundleLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesClusterTrustBundleLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesClusterTrustBundleLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesClusterTrustBundleLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesClusterTrustBundleLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesClusterTrustBundleLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesClusterTrustBundleLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesClusterTrustBundleLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesClusterTrustBundleLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesClusterTrustBundleLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#match_expressions DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesClusterTrustBundleLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#match_labels DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesClusterTrustBundleLabelSelectorToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesClusterTrustBundleLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesClusterTrustBundleLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesClusterTrustBundleLabelSelectorToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesClusterTrustBundleLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesClusterTrustBundleLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesClusterTrustBundleLabelSelectorMatchExpressionsList",
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesClusterTrustBundleLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesClusterTrustBundleLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesClusterTrustBundleLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesClusterTrustBundleLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesClusterTrustBundleLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesClusterTrustBundle {
  /**
  * Select all ClusterTrustBundles that match this label selector. Only has effect if signerName is set. Mutually-exclusive with name. If unset, interpreted as 'match nothing'. If set but empty, interpreted as 'match everything'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#label_selector DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesClusterTrustBundleLabelSelector;
  /**
  * Select a single ClusterTrustBundle by object name. Mutually-exclusive with signerName and labelSelector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#name DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * If true, don't block pod startup if the referenced ClusterTrustBundle(s) aren't available. If using name, then the named ClusterTrustBundle is allowed not to exist. If using signerName, then the combination of signerName and labelSelector is allowed to match zero ClusterTrustBundles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#optional DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Relative path from the volume root to write the bundle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#path DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#path}
  */
  readonly path: string;
  /**
  * Select all ClusterTrustBundles that match this signer name. Mutually-exclusive with name. The contents of all selected ClusterTrustBundles will be unified and deduplicated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#signer_name DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#signer_name}
  */
  readonly signerName?: string;
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesClusterTrustBundleToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesClusterTrustBundle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesClusterTrustBundleLabelSelectorToTerraform(struct!.labelSelector),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
    path: cdktf.stringToTerraform(struct!.path),
    signer_name: cdktf.stringToTerraform(struct!.signerName),
  }
}


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesClusterTrustBundleToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesClusterTrustBundle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesClusterTrustBundleLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesClusterTrustBundleLabelSelector",
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesClusterTrustBundleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesClusterTrustBundle | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesClusterTrustBundle | cdktf.IResolvable | undefined) {
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
  private _labelSelector = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesClusterTrustBundleLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesClusterTrustBundleLabelSelector) {
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
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesConfigMapItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#key DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#mode DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#path DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesConfigMapItemsToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesConfigMapItems | cdktf.IResolvable): any {
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


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesConfigMapItemsToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesConfigMapItems | cdktf.IResolvable): any {
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesConfigMapItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesConfigMapItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesConfigMapItems | cdktf.IResolvable | undefined) {
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesConfigMapItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesConfigMapItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesConfigMapItemsOutputReference {
    return new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesConfigMapItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesConfigMap {
  /**
  * items if unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#items DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#items}
  */
  readonly items?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesConfigMapItems[] | cdktf.IResolvable;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#name DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * optional specify whether the ConfigMap or its keys must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#optional DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesConfigMapToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesConfigMapItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesConfigMapToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesConfigMapItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesConfigMapItemsList",
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesConfigMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesConfigMap | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesConfigMapItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesConfigMapItems[] | cdktf.IResolvable) {
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
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiItemsFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#api_version DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#field_path DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiItemsFieldRefToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiItemsFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiItemsFieldRefToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiItemsFieldRef | cdktf.IResolvable): any {
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiItemsFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiItemsFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiItemsFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiItemsResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#container_name DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#divisor DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#resource DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiItemsResourceFieldRefToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiItemsResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiItemsResourceFieldRefToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiItemsResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiItemsResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiItemsResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiItemsResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiItems {
  /**
  * Required: Selects a field of the pod: only annotations, labels, name, namespace and uid are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#field_ref DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiItemsFieldRef;
  /**
  * Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#mode DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Required: Path is the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#path DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#path}
  */
  readonly path: string;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#resource_field_ref DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiItemsResourceFieldRef;
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiItemsToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_ref: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiItemsFieldRefToTerraform(struct!.fieldRef),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    resource_field_ref: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiItemsResourceFieldRefToTerraform(struct!.resourceFieldRef),
  }
}


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiItemsToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_ref: {
      value: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiItemsFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiItemsFieldRef",
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
      value: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiItemsResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiItemsResourceFieldRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiItems | cdktf.IResolvable | undefined) {
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
  private _fieldRef = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiItemsFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiItemsFieldRef) {
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
  private _resourceFieldRef = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiItemsResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiItemsResourceFieldRef) {
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiItemsOutputReference {
    return new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApi {
  /**
  * Items is a list of DownwardAPIVolume file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#items DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#items}
  */
  readonly items?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiItems[] | cdktf.IResolvable;
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiItemsToTerraform, false)(struct!.items),
  }
}


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApi | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApi | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiItems[] | cdktf.IResolvable) {
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
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesSecretItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#key DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#mode DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#path DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesSecretItemsToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesSecretItems | cdktf.IResolvable): any {
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


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesSecretItemsToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesSecretItems | cdktf.IResolvable): any {
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesSecretItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesSecretItems | cdktf.IResolvable | undefined) {
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesSecretItemsOutputReference {
    return new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesSecret {
  /**
  * items if unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#items DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#items}
  */
  readonly items?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesSecretItems[] | cdktf.IResolvable;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#name DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * optional field specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#optional DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesSecretToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesSecretItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesSecretToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesSecretItemsList",
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesSecret | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesSecretItems[] | cdktf.IResolvable) {
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
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesServiceAccountToken {
  /**
  * audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#audience DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#audience}
  */
  readonly audience?: string;
  /**
  * expirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#expiration_seconds DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#expiration_seconds}
  */
  readonly expirationSeconds?: number;
  /**
  * path is the path relative to the mount point of the file to project the token into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#path DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesServiceAccountTokenToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesServiceAccountToken | cdktf.IResolvable): any {
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


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesServiceAccountTokenToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesServiceAccountToken | cdktf.IResolvable): any {
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesServiceAccountTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesServiceAccountToken | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesServiceAccountToken | cdktf.IResolvable | undefined) {
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
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFiles {
  /**
  * ClusterTrustBundle allows a pod to access the '.spec.trustBundle' field of ClusterTrustBundle objects in an auto-updating file. Alpha, gated by the ClusterTrustBundleProjection feature gate. ClusterTrustBundle objects can either be selected by name, or by the combination of signer name and a label selector. Kubelet performs aggressive normalization of the PEM contents written into the pod filesystem. Esoteric PEM features such as inter-block comments and block headers are stripped. Certificates are deduplicated. The ordering of certificates within the file is arbitrary, and Kubelet may change the order over time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#cluster_trust_bundle DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#cluster_trust_bundle}
  */
  readonly clusterTrustBundle?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesClusterTrustBundle;
  /**
  * configMap information about the configMap data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#config_map DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#config_map}
  */
  readonly configMap?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesConfigMap;
  /**
  * downwardAPI information about the downwardAPI data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#downward_api DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#downward_api}
  */
  readonly downwardApi?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApi;
  /**
  * secret information about the secret data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#secret DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#secret}
  */
  readonly secret?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesSecret;
  /**
  * serviceAccountToken is information about the serviceAccountToken data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#service_account_token DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#service_account_token}
  */
  readonly serviceAccountToken?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesServiceAccountToken;
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_trust_bundle: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesClusterTrustBundleToTerraform(struct!.clusterTrustBundle),
    config_map: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesConfigMapToTerraform(struct!.configMap),
    downward_api: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiToTerraform(struct!.downwardApi),
    secret: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesSecretToTerraform(struct!.secret),
    service_account_token: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesServiceAccountTokenToTerraform(struct!.serviceAccountToken),
  }
}


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_trust_bundle: {
      value: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesClusterTrustBundleToHclTerraform(struct!.clusterTrustBundle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesClusterTrustBundle",
    },
    config_map: {
      value: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesConfigMap",
    },
    downward_api: {
      value: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiToHclTerraform(struct!.downwardApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApi",
    },
    secret: {
      value: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesSecret",
    },
    service_account_token: {
      value: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesServiceAccountTokenToHclTerraform(struct!.serviceAccountToken),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesServiceAccountToken",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFiles | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFiles | cdktf.IResolvable | undefined) {
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
  private _clusterTrustBundle = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesClusterTrustBundleOutputReference(this, "cluster_trust_bundle");
  public get clusterTrustBundle() {
    return this._clusterTrustBundle;
  }
  public putClusterTrustBundle(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesClusterTrustBundle) {
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
  private _configMap = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesConfigMap) {
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
  private _downwardApi = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApiOutputReference(this, "downward_api");
  public get downwardApi() {
    return this._downwardApi;
  }
  public putDownwardApi(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesDownwardApi) {
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
  private _secret = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesSecret) {
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
  private _serviceAccountToken = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesServiceAccountTokenOutputReference(this, "service_account_token");
  public get serviceAccountToken() {
    return this._serviceAccountToken;
  }
  public putServiceAccountToken(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesServiceAccountToken) {
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesList extends cdktf.ComplexList {
  public internalValue? : DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFiles[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesOutputReference {
    return new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigLdapBindPassword {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#key DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#name DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#optional DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigLdapBindPasswordToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigLdapBindPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigLdapBindPasswordToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigLdapBindPassword | cdktf.IResolvable): any {
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigLdapBindPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigLdapBindPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigLdapBindPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfig {
  /**
  * Files allows the user to mount projected volumes into the pgAdmin container so that files can be referenced by pgAdmin as needed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#files DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#files}
  */
  readonly files?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFiles[] | cdktf.IResolvable;
  /**
  * A Secret containing the value for the LDAP_BIND_PASSWORD setting. More info: https://www.pgadmin.org/docs/pgadmin4/latest/ldap.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#ldap_bind_password DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#ldap_bind_password}
  */
  readonly ldapBindPassword?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigLdapBindPassword;
  /**
  * Settings for the pgAdmin server process. Keys should be uppercase and values must be constants. More info: https://www.pgadmin.org/docs/pgadmin4/latest/config_py.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#settings DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#settings}
  */
  readonly settings?: { [key: string]: string };
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    files: cdktf.listMapper(dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesToTerraform, false)(struct!.files),
    ldap_bind_password: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigLdapBindPasswordToTerraform(struct!.ldapBindPassword),
    settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.settings),
  }
}


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    files: {
      value: cdktf.listMapperHcl(dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesToHclTerraform, false)(struct!.files),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesList",
    },
    ldap_bind_password: {
      value: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigLdapBindPasswordToHclTerraform(struct!.ldapBindPassword),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigLdapBindPassword",
    },
    settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.settings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._files?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.files = this._files?.internalValue;
    }
    if (this._ldapBindPassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapBindPassword = this._ldapBindPassword?.internalValue;
    }
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._files.internalValue = undefined;
      this._ldapBindPassword.internalValue = undefined;
      this._settings = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._files.internalValue = value.files;
      this._ldapBindPassword.internalValue = value.ldapBindPassword;
      this._settings = value.settings;
    }
  }

  // files - computed: false, optional: true, required: false
  private _files = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFilesList(this, "files", false);
  public get files() {
    return this._files;
  }
  public putFiles(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigFiles[] | cdktf.IResolvable) {
    this._files.internalValue = value;
  }
  public resetFiles() {
    this._files.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesInput() {
    return this._files.internalValue;
  }

  // ldap_bind_password - computed: false, optional: true, required: false
  private _ldapBindPassword = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigLdapBindPasswordOutputReference(this, "ldap_bind_password");
  public get ldapBindPassword() {
    return this._ldapBindPassword;
  }
  public putLdapBindPassword(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigLdapBindPassword) {
    this._ldapBindPassword.internalValue = value;
  }
  public resetLdapBindPassword() {
    this._ldapBindPassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapBindPasswordInput() {
    return this._ldapBindPassword.internalValue;
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: { [key: string]: string }; 
  public get settings() {
    return this.getStringMapAttribute('settings');
  }
  public set settings(value: { [key: string]: string }) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }
}
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecDataSource {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#api_group DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#kind DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#name DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecDataSourceToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecDataSource | cdktf.IResolvable): any {
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


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecDataSourceToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecDataSource | cdktf.IResolvable): any {
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecDataSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecDataSource | cdktf.IResolvable | undefined) {
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
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecDataSourceRef {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#api_group DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#kind DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#name DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of resource being referenced Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#namespace DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecDataSourceRefToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecDataSourceRef | cdktf.IResolvable): any {
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


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecDataSourceRefToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecDataSourceRef | cdktf.IResolvable): any {
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecDataSourceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecDataSourceRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecDataSourceRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecResources {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#limits DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#requests DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecResourcesToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecResourcesToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecResources | cdktf.IResolvable): any {
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecResources | cdktf.IResolvable | undefined) {
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
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#key DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#operator DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#values DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecSelectorMatchExpressionsToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecSelectorMatchExpressionsToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecSelectorMatchExpressionsOutputReference {
    return new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#match_expressions DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#match_labels DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecSelectorToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecSelectorToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecSelectorMatchExpressionsList",
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpec {
  /**
  * accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#access_modes DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#access_modes}
  */
  readonly accessModes?: string[];
  /**
  * dataSource field can be used to specify either: * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) * An existing PVC (PersistentVolumeClaim) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef, and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified. If the namespace is specified, then dataSourceRef will not be copied to dataSource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#data_source DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#data_source}
  */
  readonly dataSource?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecDataSource;
  /**
  * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the dataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, when namespace isn't specified in dataSourceRef, both fields (dataSource and dataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. When namespace is specified in dataSourceRef, dataSource isn't set to the same value and must be empty. There are three important differences between dataSource and dataSourceRef: * While dataSource only allows two specific types of objects, dataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects. * While dataSource ignores disallowed values (dropping them), dataSourceRef preserves all values, and generates an error if a disallowed value is specified. * While dataSource only allows local objects, dataSourceRef allows objects in any namespaces. (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled. (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#data_source_ref DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#data_source_ref}
  */
  readonly dataSourceRef?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecDataSourceRef;
  /**
  * resources represents the minimum resources the volume should have. If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements that are lower than previous value but must still be higher than capacity recorded in the status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#resources DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#resources}
  */
  readonly resources?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecResources;
  /**
  * selector is a label query over volumes to consider for binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#selector DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#selector}
  */
  readonly selector?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecSelector;
  /**
  * storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#storage_class_name DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#storage_class_name}
  */
  readonly storageClassName?: string;
  /**
  * volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim. If specified, the CSI driver will create or update the volume with the attributes defined in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName, it can be changed after the claim is created. An empty string value means that no VolumeAttributesClass will be applied to the claim but it's not allowed to reset this field to empty string once it is set. If unspecified and the PersistentVolumeClaim is unbound, the default VolumeAttributesClass will be set by the persistentvolume controller if it exists. If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource exists. More info: https://kubernetes.io/docs/concepts/storage/volume-attributes-classes/ (Alpha) Using this field requires the VolumeAttributesClass feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#volume_attributes_class_name DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#volume_attributes_class_name}
  */
  readonly volumeAttributesClassName?: string;
  /**
  * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#volume_mode DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#volume_mode}
  */
  readonly volumeMode?: string;
  /**
  * volumeName is the binding reference to the PersistentVolume backing this claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#volume_name DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#volume_name}
  */
  readonly volumeName?: string;
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessModes),
    data_source: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecDataSourceToTerraform(struct!.dataSource),
    data_source_ref: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecDataSourceRefToTerraform(struct!.dataSourceRef),
    resources: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecResourcesToTerraform(struct!.resources),
    selector: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecSelectorToTerraform(struct!.selector),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
    volume_attributes_class_name: cdktf.stringToTerraform(struct!.volumeAttributesClassName),
    volume_mode: cdktf.stringToTerraform(struct!.volumeMode),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpec | cdktf.IResolvable): any {
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
      value: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecDataSourceToHclTerraform(struct!.dataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecDataSource",
    },
    data_source_ref: {
      value: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecDataSourceRefToHclTerraform(struct!.dataSourceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecDataSourceRef",
    },
    resources: {
      value: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecResources",
    },
    selector: {
      value: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecSelector",
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpec | cdktf.IResolvable | undefined) {
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
  private _dataSource = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecDataSourceOutputReference(this, "data_source");
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecDataSource) {
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
  private _dataSourceRef = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecDataSourceRefOutputReference(this, "data_source_ref");
  public get dataSourceRef() {
    return this._dataSourceRef;
  }
  public putDataSourceRef(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecDataSourceRef) {
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
  private _resources = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecResources) {
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
  private _selector = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecSelector) {
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
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#annotations DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#labels DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminMetadataToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminMetadataToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
}
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#name DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminResourcesClaimsToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminResourcesClaimsToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminResourcesClaimsOutputReference {
    return new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#claims DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#claims}
  */
  readonly claims?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#limits DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#requests DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminResourcesToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminResourcesToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminResourcesClaimsList",
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminServiceMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#annotations DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#labels DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminServiceMetadataToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminServiceMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminServiceMetadataToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminServiceMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminServiceMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminServiceMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminServiceMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
}
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminService {
  /**
  * More info: https://kubernetes.io/docs/concepts/services-networking/service/#traffic-policies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#external_traffic_policy DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#external_traffic_policy}
  */
  readonly externalTrafficPolicy?: string;
  /**
  * More info: https://kubernetes.io/docs/concepts/services-networking/service/#traffic-policies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#internal_traffic_policy DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#internal_traffic_policy}
  */
  readonly internalTrafficPolicy?: string;
  /**
  * Metadata contains metadata for custom resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#metadata DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#metadata}
  */
  readonly metadata?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminServiceMetadata;
  /**
  * The port on which this service is exposed when type is NodePort or LoadBalancer. Value must be in-range and not in use or the operation will fail. If unspecified, a port will be allocated if this Service requires one. - https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#node_port DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#node_port}
  */
  readonly nodePort?: number;
  /**
  * More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#type DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminServiceToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_traffic_policy: cdktf.stringToTerraform(struct!.externalTrafficPolicy),
    internal_traffic_policy: cdktf.stringToTerraform(struct!.internalTrafficPolicy),
    metadata: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminServiceMetadataToTerraform(struct!.metadata),
    node_port: cdktf.numberToTerraform(struct!.nodePort),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminServiceToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_traffic_policy: {
      value: cdktf.stringToHclTerraform(struct!.externalTrafficPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internal_traffic_policy: {
      value: cdktf.stringToHclTerraform(struct!.internalTrafficPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminServiceMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminServiceMetadata",
    },
    node_port: {
      value: cdktf.numberToHclTerraform(struct!.nodePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalTrafficPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalTrafficPolicy = this._externalTrafficPolicy;
    }
    if (this._internalTrafficPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalTrafficPolicy = this._internalTrafficPolicy;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._nodePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePort = this._nodePort;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalTrafficPolicy = undefined;
      this._internalTrafficPolicy = undefined;
      this._metadata.internalValue = undefined;
      this._nodePort = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalTrafficPolicy = value.externalTrafficPolicy;
      this._internalTrafficPolicy = value.internalTrafficPolicy;
      this._metadata.internalValue = value.metadata;
      this._nodePort = value.nodePort;
      this._type = value.type;
    }
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

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminServiceMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminServiceMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
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
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#effect DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#key DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#operator DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#toleration_seconds DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#value DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTolerationsToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTolerations | cdktf.IResolvable): any {
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


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTolerationsToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTolerations | cdktf.IResolvable): any {
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTolerations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTolerations | cdktf.IResolvable | undefined) {
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTolerationsOutputReference {
    return new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraintsLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#key DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#operator DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#values DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraintsLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraintsLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraintsLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraintsLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#match_expressions DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#match_labels DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraintsLabelSelectorToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraintsLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraintsLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraintsLabelSelectorToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraintsLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraintsLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraintsLabelSelectorMatchExpressionsList",
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraintsLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraintsLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraintsLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraintsLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraints {
  /**
  * LabelSelector is used to find matching pods. Pods that match this label selector are counted to determine the number of pods in their corresponding topology domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#label_selector DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraintsLabelSelector;
  /**
  * MatchLabelKeys is a set of pod label keys to select the pods over which spreading will be calculated. The keys are used to lookup values from the incoming pod labels, those key-value labels are ANDed with labelSelector to select the group of existing pods over which spreading will be calculated for the incoming pod. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. MatchLabelKeys cannot be set when LabelSelector isn't set. Keys that don't exist in the incoming pod labels will be ignored. A null or empty list means only match against labelSelector. This is a beta field and requires the MatchLabelKeysInPodTopologySpread feature gate to be enabled (enabled by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#match_label_keys DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * MaxSkew describes the degree to which pods may be unevenly distributed. When 'whenUnsatisfiable=DoNotSchedule', it is the maximum permitted difference between the number of matching pods in the target topology and the global minimum. The global minimum is the minimum number of matching pods in an eligible domain or zero if the number of eligible domains is less than MinDomains. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 2/2/1: In this case, the global minimum is 1. | zone1 | zone2 | zone3 | | P P | P P | P | - if MaxSkew is 1, incoming pod can only be scheduled to zone3 to become 2/2/2; scheduling it onto zone1(zone2) would make the ActualSkew(3-1) on zone1(zone2) violate MaxSkew(1). - if MaxSkew is 2, incoming pod can be scheduled onto any zone. When 'whenUnsatisfiable=ScheduleAnyway', it is used to give higher precedence to topologies that satisfy it. It's a required field. Default value is 1 and 0 is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#max_skew DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#max_skew}
  */
  readonly maxSkew: number;
  /**
  * MinDomains indicates a minimum number of eligible domains. When the number of eligible domains with matching topology keys is less than minDomains, Pod Topology Spread treats 'global minimum' as 0, and then the calculation of Skew is performed. And when the number of eligible domains with matching topology keys equals or greater than minDomains, this value has no effect on scheduling. As a result, when the number of eligible domains is less than minDomains, scheduler won't schedule more than maxSkew Pods to those domains. If value is nil, the constraint behaves as if MinDomains is equal to 1. Valid values are integers greater than 0. When value is not nil, WhenUnsatisfiable must be DoNotSchedule. For example, in a 3-zone cluster, MaxSkew is set to 2, MinDomains is set to 5 and pods with the same labelSelector spread as 2/2/2: | zone1 | zone2 | zone3 | | P P | P P | P P | The number of domains is less than 5(MinDomains), so 'global minimum' is treated as 0. In this situation, new pod with the same labelSelector cannot be scheduled, because computed skew will be 3(3 - 0) if new Pod is scheduled to any of the three zones, it will violate MaxSkew.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#min_domains DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#min_domains}
  */
  readonly minDomains?: number;
  /**
  * NodeAffinityPolicy indicates how we will treat Pod's nodeAffinity/nodeSelector when calculating pod topology spread skew. Options are: - Honor: only nodes matching nodeAffinity/nodeSelector are included in the calculations. - Ignore: nodeAffinity/nodeSelector are ignored. All nodes are included in the calculations. If this value is nil, the behavior is equivalent to the Honor policy. This is a beta-level feature default enabled by the NodeInclusionPolicyInPodTopologySpread feature flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#node_affinity_policy DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#node_affinity_policy}
  */
  readonly nodeAffinityPolicy?: string;
  /**
  * NodeTaintsPolicy indicates how we will treat node taints when calculating pod topology spread skew. Options are: - Honor: nodes without taints, along with tainted nodes for which the incoming pod has a toleration, are included. - Ignore: node taints are ignored. All nodes are included. If this value is nil, the behavior is equivalent to the Ignore policy. This is a beta-level feature default enabled by the NodeInclusionPolicyInPodTopologySpread feature flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#node_taints_policy DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#node_taints_policy}
  */
  readonly nodeTaintsPolicy?: string;
  /**
  * TopologyKey is the key of node labels. Nodes that have a label with this key and identical values are considered to be in the same topology. We consider each <key, value> as a 'bucket', and try to put balanced number of pods into each bucket. We define a domain as a particular instance of a topology. Also, we define an eligible domain as a domain whose nodes meet the requirements of nodeAffinityPolicy and nodeTaintsPolicy. e.g. If TopologyKey is 'kubernetes.io/hostname', each Node is a domain of that topology. And, if TopologyKey is 'topology.kubernetes.io/zone', each zone is a domain of that topology. It's a required field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#topology_key DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#topology_key}
  */
  readonly topologyKey: string;
  /**
  * WhenUnsatisfiable indicates how to deal with a pod if it doesn't satisfy the spread constraint. - DoNotSchedule (default) tells the scheduler not to schedule it. - ScheduleAnyway tells the scheduler to schedule the pod in any location, but giving higher precedence to topologies that would help reduce the skew. A constraint is considered 'Unsatisfiable' for an incoming pod if and only if every possible node assignment for that pod would violate 'MaxSkew' on some topology. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 3/1/1: | zone1 | zone2 | zone3 | | P P P | P | P | If WhenUnsatisfiable is set to DoNotSchedule, incoming pod can only be scheduled to zone2(zone3) to become 3/2/1(3/1/2) as ActualSkew(2-1) on zone2(zone3) satisfies MaxSkew(1). In other words, the cluster can still be imbalanced, but scheduler won't make it *more* imbalanced. It's a required field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#when_unsatisfiable DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#when_unsatisfiable}
  */
  readonly whenUnsatisfiable: string;
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraintsToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraintsLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    max_skew: cdktf.numberToTerraform(struct!.maxSkew),
    min_domains: cdktf.numberToTerraform(struct!.minDomains),
    node_affinity_policy: cdktf.stringToTerraform(struct!.nodeAffinityPolicy),
    node_taints_policy: cdktf.stringToTerraform(struct!.nodeTaintsPolicy),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    when_unsatisfiable: cdktf.stringToTerraform(struct!.whenUnsatisfiable),
  }
}


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraintsToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraintsLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraintsLabelSelector",
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraints | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraints | cdktf.IResolvable | undefined) {
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
  private _labelSelector = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraintsLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraintsLabelSelector) {
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraintsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraintsOutputReference {
    return new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdmin {
  /**
  * Scheduling constraints of a pgAdmin pod. Changing this value causes pgAdmin to restart. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#affinity DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#affinity}
  */
  readonly affinity?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinity;
  /**
  * Configuration settings for the pgAdmin process. Changes to any of these values will be loaded without validation. Be careful, as you may put pgAdmin into an unusable state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#config DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#config}
  */
  readonly config?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfig;
  /**
  * Defines a PersistentVolumeClaim for pgAdmin data. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#data_volume_claim_spec DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#data_volume_claim_spec}
  */
  readonly dataVolumeClaimSpec: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpec;
  /**
  * Name of a container image that can run pgAdmin 4. Changing this value causes pgAdmin to restart. The image may also be set using the RELATED_IMAGE_PGADMIN environment variable. More info: https://kubernetes.io/docs/concepts/containers/images
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#image DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#image}
  */
  readonly image?: string;
  /**
  * Metadata contains metadata for custom resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#metadata DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#metadata}
  */
  readonly metadata?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminMetadata;
  /**
  * Priority class name for the pgAdmin pod. Changing this value causes pgAdmin to restart. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#priority_class_name DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#priority_class_name}
  */
  readonly priorityClassName?: string;
  /**
  * Number of desired pgAdmin pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#replicas DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Compute resources of a pgAdmin container. Changing this value causes pgAdmin to restart. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#resources DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#resources}
  */
  readonly resources?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminResources;
  /**
  * Specification of the service that exposes pgAdmin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#service DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#service}
  */
  readonly service?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminService;
  /**
  * Tolerations of a pgAdmin pod. Changing this value causes pgAdmin to restart. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#tolerations DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTolerations[] | cdktf.IResolvable;
  /**
  * Topology spread constraints of a pgAdmin pod. Changing this value causes pgAdmin to restart. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#topology_spread_constraints DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#topology_spread_constraints}
  */
  readonly topologySpreadConstraints?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraints[] | cdktf.IResolvable;
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdmin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityToTerraform(struct!.affinity),
    config: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigToTerraform(struct!.config),
    data_volume_claim_spec: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecToTerraform(struct!.dataVolumeClaimSpec),
    image: cdktf.stringToTerraform(struct!.image),
    metadata: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminMetadataToTerraform(struct!.metadata),
    priority_class_name: cdktf.stringToTerraform(struct!.priorityClassName),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resources: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminResourcesToTerraform(struct!.resources),
    service: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminServiceToTerraform(struct!.service),
    tolerations: cdktf.listMapper(dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTolerationsToTerraform, false)(struct!.tolerations),
    topology_spread_constraints: cdktf.listMapper(dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraintsToTerraform, false)(struct!.topologySpreadConstraints),
  }
}


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdmin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinity",
    },
    config: {
      value: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfig",
    },
    data_volume_claim_spec: {
      value: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecToHclTerraform(struct!.dataVolumeClaimSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpec",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminMetadata",
    },
    priority_class_name: {
      value: cdktf.stringToHclTerraform(struct!.priorityClassName),
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
      value: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminResources",
    },
    service: {
      value: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminServiceToHclTerraform(struct!.service),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminService",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTolerationsList",
    },
    topology_spread_constraints: {
      value: cdktf.listMapperHcl(dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraintsToHclTerraform, false)(struct!.topologySpreadConstraints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraintsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdmin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._dataVolumeClaimSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataVolumeClaimSpec = this._dataVolumeClaimSpec?.internalValue;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._priorityClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityClassName = this._priorityClassName;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
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

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdmin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._config.internalValue = undefined;
      this._dataVolumeClaimSpec.internalValue = undefined;
      this._image = undefined;
      this._metadata.internalValue = undefined;
      this._priorityClassName = undefined;
      this._replicas = undefined;
      this._resources.internalValue = undefined;
      this._service.internalValue = undefined;
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
      this._config.internalValue = value.config;
      this._dataVolumeClaimSpec.internalValue = value.dataVolumeClaimSpec;
      this._image = value.image;
      this._metadata.internalValue = value.metadata;
      this._priorityClassName = value.priorityClassName;
      this._replicas = value.replicas;
      this._resources.internalValue = value.resources;
      this._service.internalValue = value.service;
      this._tolerations.internalValue = value.tolerations;
      this._topologySpreadConstraints.internalValue = value.topologySpreadConstraints;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // config - computed: false, optional: true, required: false
  private _config = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // data_volume_claim_spec - computed: false, optional: false, required: true
  private _dataVolumeClaimSpec = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpecOutputReference(this, "data_volume_claim_spec");
  public get dataVolumeClaimSpec() {
    return this._dataVolumeClaimSpec;
  }
  public putDataVolumeClaimSpec(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminDataVolumeClaimSpec) {
    this._dataVolumeClaimSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataVolumeClaimSpecInput() {
    return this._dataVolumeClaimSpec.internalValue;
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

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // priority_class_name - computed: false, optional: true, required: false
  private _priorityClassName?: string; 
  public get priorityClassName() {
    return this.getStringAttribute('priority_class_name');
  }
  public set priorityClassName(value: string) {
    this._priorityClassName = value;
  }
  public resetPriorityClassName() {
    this._priorityClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityClassNameInput() {
    return this._priorityClassName;
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

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // service - computed: false, optional: true, required: false
  private _service = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminService) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTolerations[] | cdktf.IResolvable) {
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
  private _topologySpreadConstraints = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraintsList(this, "topology_spread_constraints", false);
  public get topologySpreadConstraints() {
    return this._topologySpreadConstraints;
  }
  public putTopologySpreadConstraints(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminTopologySpreadConstraints[] | cdktf.IResolvable) {
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
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterface {
  /**
  * Defines a pgAdmin user interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#pg_admin DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#pg_admin}
  */
  readonly pgAdmin: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdmin;
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfaceToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pg_admin: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminToTerraform(struct!.pgAdmin),
  }
}


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfaceToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pg_admin: {
      value: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminToHclTerraform(struct!.pgAdmin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdmin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pgAdmin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgAdmin = this._pgAdmin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pgAdmin.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pgAdmin.internalValue = value.pgAdmin;
    }
  }

  // pg_admin - computed: false, optional: false, required: true
  private _pgAdmin = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdminOutputReference(this, "pg_admin");
  public get pgAdmin() {
    return this._pgAdmin;
  }
  public putPgAdmin(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfacePgAdmin) {
    this._pgAdmin.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pgAdminInput() {
    return this._pgAdmin.internalValue;
  }
}
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUsersPassword {
  /**
  * Type of password to generate. Defaults to ASCII. Valid options are ASCII and AlphaNumeric. 'ASCII' passwords contain letters, numbers, and symbols from the US-ASCII character set. 'AlphaNumeric' passwords contain letters and numbers from the US-ASCII character set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#type DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUsersPasswordToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUsersPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUsersPasswordToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUsersPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUsersPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUsersPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUsersPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUsers {
  /**
  * Databases to which this user can connect and create objects. Removing a database from this list does NOT revoke access. This field is ignored for the 'postgres' user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#databases DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#databases}
  */
  readonly databases?: string[];
  /**
  * The name of this PostgreSQL user. The value may contain only lowercase letters, numbers, and hyphen so that it fits into Kubernetes metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#name DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * ALTER ROLE options except for PASSWORD. This field is ignored for the 'postgres' user. More info: https://www.postgresql.org/docs/current/role-attributes.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#options DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#options}
  */
  readonly options?: string;
  /**
  * Properties of the password generated for this user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#password DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#password}
  */
  readonly password?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUsersPassword;
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUsersToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    databases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.databases),
    name: cdktf.stringToTerraform(struct!.name),
    options: cdktf.stringToTerraform(struct!.options),
    password: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUsersPasswordToTerraform(struct!.password),
  }
}


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUsersToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    databases: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.databases),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.stringToHclTerraform(struct!.options),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUsersPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUsersPassword",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databases !== undefined) {
      hasAnyValues = true;
      internalValueResult.databases = this._databases;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databases = undefined;
      this._name = undefined;
      this._options = undefined;
      this._password.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databases = value.databases;
      this._name = value.name;
      this._options = value.options;
      this._password.internalValue = value.password;
    }
  }

  // databases - computed: false, optional: true, required: false
  private _databases?: string[]; 
  public get databases() {
    return this.getListAttribute('databases');
  }
  public set databases(value: string[]) {
    this._databases = value;
  }
  public resetDatabases() {
    this._databases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databasesInput() {
    return this._databases;
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

  // options - computed: false, optional: true, required: false
  private _options?: string; 
  public get options() {
    return this.getStringAttribute('options');
  }
  public set options(value: string) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // password - computed: false, optional: true, required: false
  private _password = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUsersPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUsersPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }
}

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUsersList extends cdktf.ComplexList {
  public internalValue? : DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUsers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUsersOutputReference {
    return new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpec {
  /**
  * PostgreSQL backup configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#backups DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#backups}
  */
  readonly backups?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecBackups;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#config DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#config}
  */
  readonly config?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecConfig;
  /**
  * The secret containing the replication client certificates and keys for secure connections to the PostgreSQL server. It will need to contain the client TLS certificate, TLS key and the Certificate Authority certificate with the data keys set to tls.crt, tls.key and ca.crt, respectively. NOTE: If CustomReplicationClientTLSSecret is provided, CustomTLSSecret MUST be provided and the ca.crt provided must be the same.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#custom_replication_tls_secret DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#custom_replication_tls_secret}
  */
  readonly customReplicationTlsSecret?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecCustomReplicationTlsSecret;
  /**
  * The secret containing the Certificates and Keys to encrypt PostgreSQL traffic will need to contain the server TLS certificate, TLS key and the Certificate Authority certificate with the data keys set to tls.crt, tls.key and ca.crt, respectively. It will then be mounted as a volume projection to the '/pgconf/tls' directory. For more information on Kubernetes secret projections, please see https://k8s.io/docs/concepts/configuration/secret/#projection-of-secret-keys-to-specific-paths NOTE: If CustomTLSSecret is provided, CustomReplicationClientTLSSecret MUST be provided and the ca.crt provided must be the same.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#custom_tls_secret DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#custom_tls_secret}
  */
  readonly customTlsSecret?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecCustomTlsSecret;
  /**
  * Specifies a data source for bootstrapping the PostgreSQL cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#data_source DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#data_source}
  */
  readonly dataSource?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecDataSource;
  /**
  * DatabaseInitSQL defines a ConfigMap containing custom SQL that will be run after the cluster is initialized. This ConfigMap must be in the same namespace as the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#database_init_sql DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#database_init_sql}
  */
  readonly databaseInitSql?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecDatabaseInitSql;
  /**
  * Whether or not the PostgreSQL cluster should use the defined default scheduling constraints. If the field is unset or false, the default scheduling constraints will be used in addition to any custom constraints provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#disable_default_pod_scheduling DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#disable_default_pod_scheduling}
  */
  readonly disableDefaultPodScheduling?: boolean | cdktf.IResolvable;
  /**
  * The image name to use for PostgreSQL containers. When omitted, the value comes from an operator environment variable. For standard PostgreSQL images, the format is RELATED_IMAGE_POSTGRES_{postgresVersion}, e.g. RELATED_IMAGE_POSTGRES_13. For PostGIS enabled PostgreSQL images, the format is RELATED_IMAGE_POSTGRES_{postgresVersion}_GIS_{postGISVersion}, e.g. RELATED_IMAGE_POSTGRES_13_GIS_3.1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#image DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#image}
  */
  readonly image?: string;
  /**
  * ImagePullPolicy is used to determine when Kubernetes will attempt to pull (download) container images. More info: https://kubernetes.io/docs/concepts/containers/images/#image-pull-policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#image_pull_policy DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * The image pull secrets used to pull from a private registry Changing this value causes all running pods to restart. https://k8s.io/docs/tasks/configure-pod-container/pull-image-private-registry/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#image_pull_secrets DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecImagePullSecrets[] | cdktf.IResolvable;
  /**
  * Specifies one or more sets of PostgreSQL pods that replicate data for this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#instances DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#instances}
  */
  readonly instances: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecInstances[] | cdktf.IResolvable;
  /**
  * Metadata contains metadata for custom resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#metadata DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#metadata}
  */
  readonly metadata?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecMetadata;
  /**
  * The specification of monitoring tools that connect to PostgreSQL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#monitoring DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#monitoring}
  */
  readonly monitoring?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecMonitoring;
  /**
  * Whether or not the PostgreSQL cluster is being deployed to an OpenShift environment. If the field is unset, the operator will automatically detect the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#openshift DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#openshift}
  */
  readonly openshift?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#patroni DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#patroni}
  */
  readonly patroni?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecPatroni;
  /**
  * Suspends the rollout and reconciliation of changes made to the PostgresCluster spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#paused DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * The port on which PostgreSQL should listen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#port DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#port}
  */
  readonly port?: number;
  /**
  * The PostGIS extension version installed in the PostgreSQL image. When image is not set, indicates a PostGIS enabled image will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#post_gis_version DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#post_gis_version}
  */
  readonly postGisVersion?: string;
  /**
  * The major version of PostgreSQL installed in the PostgreSQL image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#postgres_version DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#postgres_version}
  */
  readonly postgresVersion: number;
  /**
  * The specification of a proxy that connects to PostgreSQL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#proxy DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#proxy}
  */
  readonly proxy?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecProxy;
  /**
  * Specification of the service that exposes PostgreSQL replica instances
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#replica_service DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#replica_service}
  */
  readonly replicaService?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecReplicaService;
  /**
  * Specification of the service that exposes the PostgreSQL primary instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#service DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#service}
  */
  readonly service?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecService;
  /**
  * Whether or not the PostgreSQL cluster should be stopped. When this is true, workloads are scaled to zero and CronJobs are suspended. Other resources, such as Services and Volumes, remain in place.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#shutdown DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
  /**
  * Run this cluster as a read-only copy of an existing cluster or archive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#standby DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#standby}
  */
  readonly standby?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecStandby;
  /**
  * A list of group IDs applied to the process of a container. These can be useful when accessing shared file systems with constrained permissions. More info: https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#security-context
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#supplemental_groups DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#supplemental_groups}
  */
  readonly supplementalGroups?: string[];
  /**
  * The specification of a user interface that connects to PostgreSQL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#user_interface DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#user_interface}
  */
  readonly userInterface?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterface;
  /**
  * Users to create inside PostgreSQL and the databases they should access. The default creates one user that can access one database matching the PostgresCluster name. An empty list creates no users. Removing a user from this list does NOT drop the user nor revoke their access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/postgres_operator_crunchydata_com_postgres_cluster_v1beta1_manifest#users DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1Manifest#users}
  */
  readonly users?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUsers[] | cdktf.IResolvable;
}

export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecToTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backups: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecBackupsToTerraform(struct!.backups),
    config: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecConfigToTerraform(struct!.config),
    custom_replication_tls_secret: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecCustomReplicationTlsSecretToTerraform(struct!.customReplicationTlsSecret),
    custom_tls_secret: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecCustomTlsSecretToTerraform(struct!.customTlsSecret),
    data_source: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecDataSourceToTerraform(struct!.dataSource),
    database_init_sql: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecDatabaseInitSqlToTerraform(struct!.databaseInitSql),
    disable_default_pod_scheduling: cdktf.booleanToTerraform(struct!.disableDefaultPodScheduling),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    image_pull_secrets: cdktf.listMapper(dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecImagePullSecretsToTerraform, false)(struct!.imagePullSecrets),
    instances: cdktf.listMapper(dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecInstancesToTerraform, false)(struct!.instances),
    metadata: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecMetadataToTerraform(struct!.metadata),
    monitoring: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecMonitoringToTerraform(struct!.monitoring),
    openshift: cdktf.booleanToTerraform(struct!.openshift),
    patroni: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecPatroniToTerraform(struct!.patroni),
    paused: cdktf.booleanToTerraform(struct!.paused),
    port: cdktf.numberToTerraform(struct!.port),
    post_gis_version: cdktf.stringToTerraform(struct!.postGisVersion),
    postgres_version: cdktf.numberToTerraform(struct!.postgresVersion),
    proxy: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecProxyToTerraform(struct!.proxy),
    replica_service: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecReplicaServiceToTerraform(struct!.replicaService),
    service: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecServiceToTerraform(struct!.service),
    shutdown: cdktf.booleanToTerraform(struct!.shutdown),
    standby: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecStandbyToTerraform(struct!.standby),
    supplemental_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.supplementalGroups),
    user_interface: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfaceToTerraform(struct!.userInterface),
    users: cdktf.listMapper(dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUsersToTerraform, false)(struct!.users),
  }
}


export function dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backups: {
      value: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecBackupsToHclTerraform(struct!.backups),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecBackups",
    },
    config: {
      value: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecConfig",
    },
    custom_replication_tls_secret: {
      value: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecCustomReplicationTlsSecretToHclTerraform(struct!.customReplicationTlsSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecCustomReplicationTlsSecret",
    },
    custom_tls_secret: {
      value: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecCustomTlsSecretToHclTerraform(struct!.customTlsSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecCustomTlsSecret",
    },
    data_source: {
      value: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecDataSourceToHclTerraform(struct!.dataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecDataSource",
    },
    database_init_sql: {
      value: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecDatabaseInitSqlToHclTerraform(struct!.databaseInitSql),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecDatabaseInitSql",
    },
    disable_default_pod_scheduling: {
      value: cdktf.booleanToHclTerraform(struct!.disableDefaultPodScheduling),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.imagePullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_secrets: {
      value: cdktf.listMapperHcl(dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecImagePullSecretsToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecImagePullSecretsList",
    },
    instances: {
      value: cdktf.listMapperHcl(dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecInstancesToHclTerraform, false)(struct!.instances),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecInstancesList",
    },
    metadata: {
      value: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecMetadata",
    },
    monitoring: {
      value: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecMonitoringToHclTerraform(struct!.monitoring),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecMonitoring",
    },
    openshift: {
      value: cdktf.booleanToHclTerraform(struct!.openshift),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    patroni: {
      value: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecPatroniToHclTerraform(struct!.patroni),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecPatroni",
    },
    paused: {
      value: cdktf.booleanToHclTerraform(struct!.paused),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    post_gis_version: {
      value: cdktf.stringToHclTerraform(struct!.postGisVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postgres_version: {
      value: cdktf.numberToHclTerraform(struct!.postgresVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy: {
      value: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecProxyToHclTerraform(struct!.proxy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecProxy",
    },
    replica_service: {
      value: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecReplicaServiceToHclTerraform(struct!.replicaService),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecReplicaService",
    },
    service: {
      value: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecServiceToHclTerraform(struct!.service),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecService",
    },
    shutdown: {
      value: cdktf.booleanToHclTerraform(struct!.shutdown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    standby: {
      value: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecStandbyToHclTerraform(struct!.standby),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecStandby",
    },
    supplemental_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.supplementalGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    user_interface: {
      value: dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfaceToHclTerraform(struct!.userInterface),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterface",
    },
    users: {
      value: cdktf.listMapperHcl(dataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUsersToHclTerraform, false)(struct!.users),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUsersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backups = this._backups?.internalValue;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._customReplicationTlsSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customReplicationTlsSecret = this._customReplicationTlsSecret?.internalValue;
    }
    if (this._customTlsSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTlsSecret = this._customTlsSecret?.internalValue;
    }
    if (this._dataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource?.internalValue;
    }
    if (this._databaseInitSql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseInitSql = this._databaseInitSql?.internalValue;
    }
    if (this._disableDefaultPodScheduling !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableDefaultPodScheduling = this._disableDefaultPodScheduling;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._imagePullSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecrets = this._imagePullSecrets?.internalValue;
    }
    if (this._instances?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._monitoring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoring = this._monitoring?.internalValue;
    }
    if (this._openshift !== undefined) {
      hasAnyValues = true;
      internalValueResult.openshift = this._openshift;
    }
    if (this._patroni?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patroni = this._patroni?.internalValue;
    }
    if (this._paused !== undefined) {
      hasAnyValues = true;
      internalValueResult.paused = this._paused;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._postGisVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.postGisVersion = this._postGisVersion;
    }
    if (this._postgresVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresVersion = this._postgresVersion;
    }
    if (this._proxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy?.internalValue;
    }
    if (this._replicaService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaService = this._replicaService?.internalValue;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    if (this._shutdown !== undefined) {
      hasAnyValues = true;
      internalValueResult.shutdown = this._shutdown;
    }
    if (this._standby?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.standby = this._standby?.internalValue;
    }
    if (this._supplementalGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.supplementalGroups = this._supplementalGroups;
    }
    if (this._userInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userInterface = this._userInterface?.internalValue;
    }
    if (this._users?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backups.internalValue = undefined;
      this._config.internalValue = undefined;
      this._customReplicationTlsSecret.internalValue = undefined;
      this._customTlsSecret.internalValue = undefined;
      this._dataSource.internalValue = undefined;
      this._databaseInitSql.internalValue = undefined;
      this._disableDefaultPodScheduling = undefined;
      this._image = undefined;
      this._imagePullPolicy = undefined;
      this._imagePullSecrets.internalValue = undefined;
      this._instances.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._monitoring.internalValue = undefined;
      this._openshift = undefined;
      this._patroni.internalValue = undefined;
      this._paused = undefined;
      this._port = undefined;
      this._postGisVersion = undefined;
      this._postgresVersion = undefined;
      this._proxy.internalValue = undefined;
      this._replicaService.internalValue = undefined;
      this._service.internalValue = undefined;
      this._shutdown = undefined;
      this._standby.internalValue = undefined;
      this._supplementalGroups = undefined;
      this._userInterface.internalValue = undefined;
      this._users.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backups.internalValue = value.backups;
      this._config.internalValue = value.config;
      this._customReplicationTlsSecret.internalValue = value.customReplicationTlsSecret;
      this._customTlsSecret.internalValue = value.customTlsSecret;
      this._dataSource.internalValue = value.dataSource;
      this._databaseInitSql.internalValue = value.databaseInitSql;
      this._disableDefaultPodScheduling = value.disableDefaultPodScheduling;
      this._image = value.image;
      this._imagePullPolicy = value.imagePullPolicy;
      this._imagePullSecrets.internalValue = value.imagePullSecrets;
      this._instances.internalValue = value.instances;
      this._metadata.internalValue = value.metadata;
      this._monitoring.internalValue = value.monitoring;
      this._openshift = value.openshift;
      this._patroni.internalValue = value.patroni;
      this._paused = value.paused;
      this._port = value.port;
      this._postGisVersion = value.postGisVersion;
      this._postgresVersion = value.postgresVersion;
      this._proxy.internalValue = value.proxy;
      this._replicaService.internalValue = value.replicaService;
      this._service.internalValue = value.service;
      this._shutdown = value.shutdown;
      this._standby.internalValue = value.standby;
      this._supplementalGroups = value.supplementalGroups;
      this._userInterface.internalValue = value.userInterface;
      this._users.internalValue = value.users;
    }
  }

  // backups - computed: false, optional: true, required: false
  private _backups = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecBackupsOutputReference(this, "backups");
  public get backups() {
    return this._backups;
  }
  public putBackups(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecBackups) {
    this._backups.internalValue = value;
  }
  public resetBackups() {
    this._backups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupsInput() {
    return this._backups.internalValue;
  }

  // config - computed: false, optional: true, required: false
  private _config = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // custom_replication_tls_secret - computed: false, optional: true, required: false
  private _customReplicationTlsSecret = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecCustomReplicationTlsSecretOutputReference(this, "custom_replication_tls_secret");
  public get customReplicationTlsSecret() {
    return this._customReplicationTlsSecret;
  }
  public putCustomReplicationTlsSecret(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecCustomReplicationTlsSecret) {
    this._customReplicationTlsSecret.internalValue = value;
  }
  public resetCustomReplicationTlsSecret() {
    this._customReplicationTlsSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customReplicationTlsSecretInput() {
    return this._customReplicationTlsSecret.internalValue;
  }

  // custom_tls_secret - computed: false, optional: true, required: false
  private _customTlsSecret = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecCustomTlsSecretOutputReference(this, "custom_tls_secret");
  public get customTlsSecret() {
    return this._customTlsSecret;
  }
  public putCustomTlsSecret(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecCustomTlsSecret) {
    this._customTlsSecret.internalValue = value;
  }
  public resetCustomTlsSecret() {
    this._customTlsSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTlsSecretInput() {
    return this._customTlsSecret.internalValue;
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecDataSourceOutputReference(this, "data_source");
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecDataSource) {
    this._dataSource.internalValue = value;
  }
  public resetDataSource() {
    this._dataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource.internalValue;
  }

  // database_init_sql - computed: false, optional: true, required: false
  private _databaseInitSql = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecDatabaseInitSqlOutputReference(this, "database_init_sql");
  public get databaseInitSql() {
    return this._databaseInitSql;
  }
  public putDatabaseInitSql(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecDatabaseInitSql) {
    this._databaseInitSql.internalValue = value;
  }
  public resetDatabaseInitSql() {
    this._databaseInitSql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInitSqlInput() {
    return this._databaseInitSql.internalValue;
  }

  // disable_default_pod_scheduling - computed: false, optional: true, required: false
  private _disableDefaultPodScheduling?: boolean | cdktf.IResolvable; 
  public get disableDefaultPodScheduling() {
    return this.getBooleanAttribute('disable_default_pod_scheduling');
  }
  public set disableDefaultPodScheduling(value: boolean | cdktf.IResolvable) {
    this._disableDefaultPodScheduling = value;
  }
  public resetDisableDefaultPodScheduling() {
    this._disableDefaultPodScheduling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableDefaultPodSchedulingInput() {
    return this._disableDefaultPodScheduling;
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

  // image_pull_policy - computed: false, optional: true, required: false
  private _imagePullPolicy?: string; 
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }
  public set imagePullPolicy(value: string) {
    this._imagePullPolicy = value;
  }
  public resetImagePullPolicy() {
    this._imagePullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullPolicyInput() {
    return this._imagePullPolicy;
  }

  // image_pull_secrets - computed: false, optional: true, required: false
  private _imagePullSecrets = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }
  public putImagePullSecrets(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecImagePullSecrets[] | cdktf.IResolvable) {
    this._imagePullSecrets.internalValue = value;
  }
  public resetImagePullSecrets() {
    this._imagePullSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretsInput() {
    return this._imagePullSecrets.internalValue;
  }

  // instances - computed: false, optional: false, required: true
  private _instances = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecInstancesList(this, "instances", false);
  public get instances() {
    return this._instances;
  }
  public putInstances(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecInstances[] | cdktf.IResolvable) {
    this._instances.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // monitoring - computed: false, optional: true, required: false
  private _monitoring = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecMonitoringOutputReference(this, "monitoring");
  public get monitoring() {
    return this._monitoring;
  }
  public putMonitoring(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecMonitoring) {
    this._monitoring.internalValue = value;
  }
  public resetMonitoring() {
    this._monitoring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringInput() {
    return this._monitoring.internalValue;
  }

  // openshift - computed: false, optional: true, required: false
  private _openshift?: boolean | cdktf.IResolvable; 
  public get openshift() {
    return this.getBooleanAttribute('openshift');
  }
  public set openshift(value: boolean | cdktf.IResolvable) {
    this._openshift = value;
  }
  public resetOpenshift() {
    this._openshift = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openshiftInput() {
    return this._openshift;
  }

  // patroni - computed: false, optional: true, required: false
  private _patroni = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecPatroniOutputReference(this, "patroni");
  public get patroni() {
    return this._patroni;
  }
  public putPatroni(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecPatroni) {
    this._patroni.internalValue = value;
  }
  public resetPatroni() {
    this._patroni.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patroniInput() {
    return this._patroni.internalValue;
  }

  // paused - computed: false, optional: true, required: false
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // post_gis_version - computed: false, optional: true, required: false
  private _postGisVersion?: string; 
  public get postGisVersion() {
    return this.getStringAttribute('post_gis_version');
  }
  public set postGisVersion(value: string) {
    this._postGisVersion = value;
  }
  public resetPostGisVersion() {
    this._postGisVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postGisVersionInput() {
    return this._postGisVersion;
  }

  // postgres_version - computed: false, optional: false, required: true
  private _postgresVersion?: number; 
  public get postgresVersion() {
    return this.getNumberAttribute('postgres_version');
  }
  public set postgresVersion(value: number) {
    this._postgresVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresVersionInput() {
    return this._postgresVersion;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecProxyOutputReference(this, "proxy");
  public get proxy() {
    return this._proxy;
  }
  public putProxy(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecProxy) {
    this._proxy.internalValue = value;
  }
  public resetProxy() {
    this._proxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy.internalValue;
  }

  // replica_service - computed: false, optional: true, required: false
  private _replicaService = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecReplicaServiceOutputReference(this, "replica_service");
  public get replicaService() {
    return this._replicaService;
  }
  public putReplicaService(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecReplicaService) {
    this._replicaService.internalValue = value;
  }
  public resetReplicaService() {
    this._replicaService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaServiceInput() {
    return this._replicaService.internalValue;
  }

  // service - computed: false, optional: true, required: false
  private _service = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecService) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // shutdown - computed: false, optional: true, required: false
  private _shutdown?: boolean | cdktf.IResolvable; 
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }
  public set shutdown(value: boolean | cdktf.IResolvable) {
    this._shutdown = value;
  }
  public resetShutdown() {
    this._shutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownInput() {
    return this._shutdown;
  }

  // standby - computed: false, optional: true, required: false
  private _standby = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecStandbyOutputReference(this, "standby");
  public get standby() {
    return this._standby;
  }
  public putStandby(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecStandby) {
    this._standby.internalValue = value;
  }
  public resetStandby() {
    this._standby.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyInput() {
    return this._standby.internalValue;
  }

  // supplemental_groups - computed: false, optional: true, required: false
  private _supplementalGroups?: string[]; 
  public get supplementalGroups() {
    return this.getListAttribute('supplemental_groups');
  }
  public set supplementalGroups(value: string[]) {
    this._supplementalGroups = value;
  }
  public resetSupplementalGroups() {
    this._supplementalGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supplementalGroupsInput() {
    return this._supplementalGroups;
  }

  // user_interface - computed: false, optional: true, required: false
  private _userInterface = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterfaceOutputReference(this, "user_interface");
  public get userInterface() {
    return this._userInterface;
  }
  public putUserInterface(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUserInterface) {
    this._userInterface.internalValue = value;
  }
  public resetUserInterface() {
    this._userInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInterfaceInput() {
    return this._userInterface.internalValue;
  }

  // users - computed: false, optional: true, required: false
  private _users = new DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUsersList(this, "users", false);
  public get users() {
    return this._users;
  }
  public putUsers(value: DataK8SPostgresOperatorCrunchydataComPostgresClusterV1Beta1ManifestSpecUsers[] | cdktf.IResolvable) {
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
