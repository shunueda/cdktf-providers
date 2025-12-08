import * as cdktf from 'cdktf';
import { DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution,
dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform,
dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform,
DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList,
DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementNodeAffinity,
dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementNodeAffinityToTerraform,
dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementNodeAffinityToHclTerraform,
DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementNodeAffinityOutputReference,
DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAffinity,
dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAffinityToTerraform,
dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAffinityToHclTerraform,
DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAffinityOutputReference,
DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPlacement,
dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPlacementToTerraform,
dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPlacementToHclTerraform,
DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPlacementOutputReference,
DataK8SCephRookIoCephClusterV1ManifestSpecStorageNodes,
dataK8SCephRookIoCephClusterV1ManifestSpecStorageNodesToTerraform,
dataK8SCephRookIoCephClusterV1ManifestSpecStorageNodesToHclTerraform,
DataK8SCephRookIoCephClusterV1ManifestSpecStorageNodesList,
DataK8SCephRookIoCephClusterV1ManifestSpecCephVersion,
dataK8SCephRookIoCephClusterV1ManifestSpecCephVersionToTerraform,
dataK8SCephRookIoCephClusterV1ManifestSpecCephVersionToHclTerraform,
DataK8SCephRookIoCephClusterV1ManifestSpecCephVersionOutputReference,
DataK8SCephRookIoCephClusterV1ManifestSpecCleanupPolicy,
dataK8SCephRookIoCephClusterV1ManifestSpecCleanupPolicyToTerraform,
dataK8SCephRookIoCephClusterV1ManifestSpecCleanupPolicyToHclTerraform,
DataK8SCephRookIoCephClusterV1ManifestSpecCleanupPolicyOutputReference,
DataK8SCephRookIoCephClusterV1ManifestSpecCrashCollector,
dataK8SCephRookIoCephClusterV1ManifestSpecCrashCollectorToTerraform,
dataK8SCephRookIoCephClusterV1ManifestSpecCrashCollectorToHclTerraform,
DataK8SCephRookIoCephClusterV1ManifestSpecCrashCollectorOutputReference,
DataK8SCephRookIoCephClusterV1ManifestSpecCsi,
dataK8SCephRookIoCephClusterV1ManifestSpecCsiToTerraform,
dataK8SCephRookIoCephClusterV1ManifestSpecCsiToHclTerraform,
DataK8SCephRookIoCephClusterV1ManifestSpecCsiOutputReference,
DataK8SCephRookIoCephClusterV1ManifestSpecDashboard,
dataK8SCephRookIoCephClusterV1ManifestSpecDashboardToTerraform,
dataK8SCephRookIoCephClusterV1ManifestSpecDashboardToHclTerraform,
DataK8SCephRookIoCephClusterV1ManifestSpecDashboardOutputReference,
DataK8SCephRookIoCephClusterV1ManifestSpecDisruptionManagement,
dataK8SCephRookIoCephClusterV1ManifestSpecDisruptionManagementToTerraform,
dataK8SCephRookIoCephClusterV1ManifestSpecDisruptionManagementToHclTerraform,
DataK8SCephRookIoCephClusterV1ManifestSpecDisruptionManagementOutputReference,
DataK8SCephRookIoCephClusterV1ManifestSpecExternal,
dataK8SCephRookIoCephClusterV1ManifestSpecExternalToTerraform,
dataK8SCephRookIoCephClusterV1ManifestSpecExternalToHclTerraform,
DataK8SCephRookIoCephClusterV1ManifestSpecExternalOutputReference,
DataK8SCephRookIoCephClusterV1ManifestSpecHealthCheck,
dataK8SCephRookIoCephClusterV1ManifestSpecHealthCheckToTerraform,
dataK8SCephRookIoCephClusterV1ManifestSpecHealthCheckToHclTerraform,
DataK8SCephRookIoCephClusterV1ManifestSpecHealthCheckOutputReference,
DataK8SCephRookIoCephClusterV1ManifestSpecLogCollector,
dataK8SCephRookIoCephClusterV1ManifestSpecLogCollectorToTerraform,
dataK8SCephRookIoCephClusterV1ManifestSpecLogCollectorToHclTerraform,
DataK8SCephRookIoCephClusterV1ManifestSpecLogCollectorOutputReference,
DataK8SCephRookIoCephClusterV1ManifestSpecMgr,
dataK8SCephRookIoCephClusterV1ManifestSpecMgrToTerraform,
dataK8SCephRookIoCephClusterV1ManifestSpecMgrToHclTerraform,
DataK8SCephRookIoCephClusterV1ManifestSpecMgrOutputReference,
DataK8SCephRookIoCephClusterV1ManifestSpecMon,
dataK8SCephRookIoCephClusterV1ManifestSpecMonToTerraform,
dataK8SCephRookIoCephClusterV1ManifestSpecMonToHclTerraform,
DataK8SCephRookIoCephClusterV1ManifestSpecMonOutputReference,
DataK8SCephRookIoCephClusterV1ManifestSpecMonitoring,
dataK8SCephRookIoCephClusterV1ManifestSpecMonitoringToTerraform,
dataK8SCephRookIoCephClusterV1ManifestSpecMonitoringToHclTerraform,
DataK8SCephRookIoCephClusterV1ManifestSpecMonitoringOutputReference,
DataK8SCephRookIoCephClusterV1ManifestSpecNetwork,
dataK8SCephRookIoCephClusterV1ManifestSpecNetworkToTerraform,
dataK8SCephRookIoCephClusterV1ManifestSpecNetworkToHclTerraform,
DataK8SCephRookIoCephClusterV1ManifestSpecNetworkOutputReference,
DataK8SCephRookIoCephClusterV1ManifestSpecSecurity,
dataK8SCephRookIoCephClusterV1ManifestSpecSecurityToTerraform,
dataK8SCephRookIoCephClusterV1ManifestSpecSecurityToHclTerraform,
DataK8SCephRookIoCephClusterV1ManifestSpecSecurityOutputReference } from './structs0'
export interface DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#key DataK8SCephRookIoCephClusterV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#operator DataK8SCephRookIoCephClusterV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#values DataK8SCephRookIoCephClusterV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#match_expressions DataK8SCephRookIoCephClusterV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#match_labels DataK8SCephRookIoCephClusterV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
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

export class DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#key DataK8SCephRookIoCephClusterV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#operator DataK8SCephRookIoCephClusterV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#values DataK8SCephRookIoCephClusterV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#match_expressions DataK8SCephRookIoCephClusterV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#match_labels DataK8SCephRookIoCephClusterV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList",
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

export class DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#label_selector DataK8SCephRookIoCephClusterV1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#match_label_keys DataK8SCephRookIoCephClusterV1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#mismatch_label_keys DataK8SCephRookIoCephClusterV1Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#namespace_selector DataK8SCephRookIoCephClusterV1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#namespaces DataK8SCephRookIoCephClusterV1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#topology_key DataK8SCephRookIoCephClusterV1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector",
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
      value: dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector",
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

export class DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
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
  private _labelSelector = new DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
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
  private _namespaceSelector = new DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector) {
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

export class DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#preferred_during_scheduling_ignored_during_execution DataK8SCephRookIoCephClusterV1Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#required_during_scheduling_ignored_during_execution DataK8SCephRookIoCephClusterV1Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityToTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityToHclTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinity | cdktf.IResolvable | undefined) {
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
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
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
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
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
export interface DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTolerations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#effect DataK8SCephRookIoCephClusterV1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#key DataK8SCephRookIoCephClusterV1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#operator DataK8SCephRookIoCephClusterV1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#toleration_seconds DataK8SCephRookIoCephClusterV1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#value DataK8SCephRookIoCephClusterV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTolerationsToTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTolerations | cdktf.IResolvable): any {
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


export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTolerationsToHclTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTolerations | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTolerations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTolerations | cdktf.IResolvable | undefined) {
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

export class DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTolerationsOutputReference {
    return new DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraintsLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#key DataK8SCephRookIoCephClusterV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#operator DataK8SCephRookIoCephClusterV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#values DataK8SCephRookIoCephClusterV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraintsLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraintsLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraintsLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraintsLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#match_expressions DataK8SCephRookIoCephClusterV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#match_labels DataK8SCephRookIoCephClusterV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraintsLabelSelectorToTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraintsLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraintsLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraintsLabelSelectorToHclTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraintsLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraintsLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraintsLabelSelectorMatchExpressionsList",
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

export class DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraintsLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraintsLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraintsLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraintsLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#label_selector DataK8SCephRookIoCephClusterV1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraintsLabelSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#match_label_keys DataK8SCephRookIoCephClusterV1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#max_skew DataK8SCephRookIoCephClusterV1Manifest#max_skew}
  */
  readonly maxSkew: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#min_domains DataK8SCephRookIoCephClusterV1Manifest#min_domains}
  */
  readonly minDomains?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#node_affinity_policy DataK8SCephRookIoCephClusterV1Manifest#node_affinity_policy}
  */
  readonly nodeAffinityPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#node_taints_policy DataK8SCephRookIoCephClusterV1Manifest#node_taints_policy}
  */
  readonly nodeTaintsPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#topology_key DataK8SCephRookIoCephClusterV1Manifest#topology_key}
  */
  readonly topologyKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#when_unsatisfiable DataK8SCephRookIoCephClusterV1Manifest#when_unsatisfiable}
  */
  readonly whenUnsatisfiable: string;
}

export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraintsToTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraintsLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    max_skew: cdktf.numberToTerraform(struct!.maxSkew),
    min_domains: cdktf.numberToTerraform(struct!.minDomains),
    node_affinity_policy: cdktf.stringToTerraform(struct!.nodeAffinityPolicy),
    node_taints_policy: cdktf.stringToTerraform(struct!.nodeTaintsPolicy),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    when_unsatisfiable: cdktf.stringToTerraform(struct!.whenUnsatisfiable),
  }
}


export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraintsToHclTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraintsLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraintsLabelSelector",
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

export class DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraints | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraints | cdktf.IResolvable | undefined) {
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
  private _labelSelector = new DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraintsLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraintsLabelSelector) {
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

export class DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraintsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraintsOutputReference {
    return new DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#node_affinity DataK8SCephRookIoCephClusterV1Manifest#node_affinity}
  */
  readonly nodeAffinity?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementNodeAffinity;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#pod_affinity DataK8SCephRookIoCephClusterV1Manifest#pod_affinity}
  */
  readonly podAffinity?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAffinity;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#pod_anti_affinity DataK8SCephRookIoCephClusterV1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinity;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#tolerations DataK8SCephRookIoCephClusterV1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTolerations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#topology_spread_constraints DataK8SCephRookIoCephClusterV1Manifest#topology_spread_constraints}
  */
  readonly topologySpreadConstraints?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraints[] | cdktf.IResolvable;
}

export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementToTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementNodeAffinityToTerraform(struct!.nodeAffinity),
    pod_affinity: dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAffinityToTerraform(struct!.podAffinity),
    pod_anti_affinity: dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityToTerraform(struct!.podAntiAffinity),
    tolerations: cdktf.listMapper(dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTolerationsToTerraform, false)(struct!.tolerations),
    topology_spread_constraints: cdktf.listMapper(dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraintsToTerraform, false)(struct!.topologySpreadConstraints),
  }
}


export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementToHclTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_affinity: {
      value: dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementNodeAffinityToHclTerraform(struct!.nodeAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementNodeAffinity",
    },
    pod_affinity: {
      value: dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAffinityToHclTerraform(struct!.podAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAffinity",
    },
    pod_anti_affinity: {
      value: dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityToHclTerraform(struct!.podAntiAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinity",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTolerationsList",
    },
    topology_spread_constraints: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraintsToHclTerraform, false)(struct!.topologySpreadConstraints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraintsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacement | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeAffinity.internalValue = undefined;
      this._podAffinity.internalValue = undefined;
      this._podAntiAffinity.internalValue = undefined;
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
      this._nodeAffinity.internalValue = value.nodeAffinity;
      this._podAffinity.internalValue = value.podAffinity;
      this._podAntiAffinity.internalValue = value.podAntiAffinity;
      this._tolerations.internalValue = value.tolerations;
      this._topologySpreadConstraints.internalValue = value.topologySpreadConstraints;
    }
  }

  // node_affinity - computed: false, optional: true, required: false
  private _nodeAffinity = new DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementNodeAffinityOutputReference(this, "node_affinity");
  public get nodeAffinity() {
    return this._nodeAffinity;
  }
  public putNodeAffinity(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementNodeAffinity) {
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
  private _podAffinity = new DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAffinityOutputReference(this, "pod_affinity");
  public get podAffinity() {
    return this._podAffinity;
  }
  public putPodAffinity(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAffinity) {
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
  private _podAntiAffinity = new DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinityOutputReference(this, "pod_anti_affinity");
  public get podAntiAffinity() {
    return this._podAntiAffinity;
  }
  public putPodAntiAffinity(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementPodAntiAffinity) {
    this._podAntiAffinity.internalValue = value;
  }
  public resetPodAntiAffinity() {
    this._podAntiAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAntiAffinityInput() {
    return this._podAntiAffinity.internalValue;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTolerations[] | cdktf.IResolvable) {
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
  private _topologySpreadConstraints = new DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraintsList(this, "topology_spread_constraints", false);
  public get topologySpreadConstraints() {
    return this._topologySpreadConstraints;
  }
  public putTopologySpreadConstraints(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementTopologySpreadConstraints[] | cdktf.IResolvable) {
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
export interface DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#name DataK8SCephRookIoCephClusterV1Manifest#name}
  */
  readonly name: string;
  /**
  * Request is the name chosen for a request in the referenced claim. If empty, everything from the claim is made available, otherwise only the result of this request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#request DataK8SCephRookIoCephClusterV1Manifest#request}
  */
  readonly request?: string;
}

export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsResourcesClaimsToTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    request: cdktf.stringToTerraform(struct!.request),
  }
}


export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsResourcesClaimsToHclTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsResourcesClaims | cdktf.IResolvable): any {
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
    request: {
      value: cdktf.stringToHclTerraform(struct!.request),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsResourcesClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsResourcesClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._request = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._request = value.request;
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

  // request - computed: false, optional: true, required: false
  private _request?: string; 
  public get request() {
    return this.getStringAttribute('request');
  }
  public set request(value: string) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }
}

export class DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsResourcesClaimsOutputReference {
    return new DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#claims DataK8SCephRookIoCephClusterV1Manifest#claims}
  */
  readonly claims?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#limits DataK8SCephRookIoCephClusterV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#requests DataK8SCephRookIoCephClusterV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsResourcesToTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsResourcesToHclTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsResourcesClaimsList",
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

export class DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#annotations DataK8SCephRookIoCephClusterV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#finalizers DataK8SCephRookIoCephClusterV1Manifest#finalizers}
  */
  readonly finalizers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#labels DataK8SCephRookIoCephClusterV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#name DataK8SCephRookIoCephClusterV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#namespace DataK8SCephRookIoCephClusterV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesMetadataToTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesMetadata | cdktf.IResolvable): any {
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


export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesMetadataToHclTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesMetadata | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecDataSource {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#api_group DataK8SCephRookIoCephClusterV1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#kind DataK8SCephRookIoCephClusterV1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#name DataK8SCephRookIoCephClusterV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecDataSourceToTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecDataSource | cdktf.IResolvable): any {
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


export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecDataSourceToHclTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecDataSource | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecDataSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecDataSource | cdktf.IResolvable | undefined) {
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
export interface DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecDataSourceRef {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#api_group DataK8SCephRookIoCephClusterV1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#kind DataK8SCephRookIoCephClusterV1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#name DataK8SCephRookIoCephClusterV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of resource being referenced Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#namespace DataK8SCephRookIoCephClusterV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecDataSourceRefToTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecDataSourceRef | cdktf.IResolvable): any {
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


export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecDataSourceRefToHclTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecDataSourceRef | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecDataSourceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecDataSourceRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecDataSourceRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecResources {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#limits DataK8SCephRookIoCephClusterV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#requests DataK8SCephRookIoCephClusterV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecResourcesToTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecResourcesToHclTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecResources | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecResources | cdktf.IResolvable | undefined) {
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
export interface DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#key DataK8SCephRookIoCephClusterV1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#operator DataK8SCephRookIoCephClusterV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#values DataK8SCephRookIoCephClusterV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecSelectorMatchExpressionsToTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecSelectorMatchExpressionsOutputReference {
    return new DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#match_expressions DataK8SCephRookIoCephClusterV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#match_labels DataK8SCephRookIoCephClusterV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecSelectorToTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecSelectorToHclTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecSelectorMatchExpressionsList",
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

export class DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpec {
  /**
  * accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#access_modes DataK8SCephRookIoCephClusterV1Manifest#access_modes}
  */
  readonly accessModes?: string[];
  /**
  * dataSource field can be used to specify either: * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) * An existing PVC (PersistentVolumeClaim) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef, and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified. If the namespace is specified, then dataSourceRef will not be copied to dataSource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#data_source DataK8SCephRookIoCephClusterV1Manifest#data_source}
  */
  readonly dataSource?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecDataSource;
  /**
  * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the dataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, when namespace isn't specified in dataSourceRef, both fields (dataSource and dataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. When namespace is specified in dataSourceRef, dataSource isn't set to the same value and must be empty. There are three important differences between dataSource and dataSourceRef: * While dataSource only allows two specific types of objects, dataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects. * While dataSource ignores disallowed values (dropping them), dataSourceRef preserves all values, and generates an error if a disallowed value is specified. * While dataSource only allows local objects, dataSourceRef allows objects in any namespaces. (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled. (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#data_source_ref DataK8SCephRookIoCephClusterV1Manifest#data_source_ref}
  */
  readonly dataSourceRef?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecDataSourceRef;
  /**
  * resources represents the minimum resources the volume should have. If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements that are lower than previous value but must still be higher than capacity recorded in the status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#resources DataK8SCephRookIoCephClusterV1Manifest#resources}
  */
  readonly resources?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecResources;
  /**
  * selector is a label query over volumes to consider for binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#selector DataK8SCephRookIoCephClusterV1Manifest#selector}
  */
  readonly selector?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecSelector;
  /**
  * storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#storage_class_name DataK8SCephRookIoCephClusterV1Manifest#storage_class_name}
  */
  readonly storageClassName?: string;
  /**
  * volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim. If specified, the CSI driver will create or update the volume with the attributes defined in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName, it can be changed after the claim is created. An empty string value means that no VolumeAttributesClass will be applied to the claim but it's not allowed to reset this field to empty string once it is set. If unspecified and the PersistentVolumeClaim is unbound, the default VolumeAttributesClass will be set by the persistentvolume controller if it exists. If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource exists. More info: https://kubernetes.io/docs/concepts/storage/volume-attributes-classes/ (Beta) Using this field requires the VolumeAttributesClass feature gate to be enabled (off by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#volume_attributes_class_name DataK8SCephRookIoCephClusterV1Manifest#volume_attributes_class_name}
  */
  readonly volumeAttributesClassName?: string;
  /**
  * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#volume_mode DataK8SCephRookIoCephClusterV1Manifest#volume_mode}
  */
  readonly volumeMode?: string;
  /**
  * volumeName is the binding reference to the PersistentVolume backing this claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#volume_name DataK8SCephRookIoCephClusterV1Manifest#volume_name}
  */
  readonly volumeName?: string;
}

export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecToTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessModes),
    data_source: dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecDataSourceToTerraform(struct!.dataSource),
    data_source_ref: dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecDataSourceRefToTerraform(struct!.dataSourceRef),
    resources: dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecResourcesToTerraform(struct!.resources),
    selector: dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecSelectorToTerraform(struct!.selector),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
    volume_attributes_class_name: cdktf.stringToTerraform(struct!.volumeAttributesClassName),
    volume_mode: cdktf.stringToTerraform(struct!.volumeMode),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecToHclTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpec | cdktf.IResolvable): any {
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
      value: dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecDataSourceToHclTerraform(struct!.dataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecDataSource",
    },
    data_source_ref: {
      value: dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecDataSourceRefToHclTerraform(struct!.dataSourceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecDataSourceRef",
    },
    resources: {
      value: dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecResources",
    },
    selector: {
      value: dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecSelector",
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

export class DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpec | cdktf.IResolvable | undefined) {
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
  private _dataSource = new DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecDataSourceOutputReference(this, "data_source");
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecDataSource) {
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
  private _dataSourceRef = new DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecDataSourceRefOutputReference(this, "data_source_ref");
  public get dataSourceRef() {
    return this._dataSourceRef;
  }
  public putDataSourceRef(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecDataSourceRef) {
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
  private _resources = new DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecResources) {
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
  private _selector = new DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecSelector) {
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
export interface DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplates {
  /**
  * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#metadata DataK8SCephRookIoCephClusterV1Manifest#metadata}
  */
  readonly metadata?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesMetadata;
  /**
  * spec defines the desired characteristics of a volume requested by a pod author. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#spec DataK8SCephRookIoCephClusterV1Manifest#spec}
  */
  readonly spec?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpec;
}

export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesToTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesMetadataToTerraform(struct!.metadata),
    spec: dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecToTerraform(struct!.spec),
  }
}


export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesToHclTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesMetadata",
    },
    spec: {
      value: dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplates | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplates | cdktf.IResolvable | undefined) {
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
  private _metadata = new DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesMetadata) {
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
  private _spec = new DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpec) {
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

export class DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplates[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesOutputReference {
    return new DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSets {
  /**
  * Provider-specific device configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#config DataK8SCephRookIoCephClusterV1Manifest#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * Count is the number of devices in this set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#count DataK8SCephRookIoCephClusterV1Manifest#count}
  */
  readonly count: number;
  /**
  * Whether to encrypt the deviceSet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#encrypted DataK8SCephRookIoCephClusterV1Manifest#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Name is a unique identifier for the set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#name DataK8SCephRookIoCephClusterV1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#placement DataK8SCephRookIoCephClusterV1Manifest#placement}
  */
  readonly placement?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPlacement;
  /**
  * Portable represents OSD portability across the hosts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#portable DataK8SCephRookIoCephClusterV1Manifest#portable}
  */
  readonly portable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#prepare_placement DataK8SCephRookIoCephClusterV1Manifest#prepare_placement}
  */
  readonly preparePlacement?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacement;
  /**
  * ResourceRequirements describes the compute resource requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#resources DataK8SCephRookIoCephClusterV1Manifest#resources}
  */
  readonly resources?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsResources;
  /**
  * Scheduler name for OSD pod placement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#scheduler_name DataK8SCephRookIoCephClusterV1Manifest#scheduler_name}
  */
  readonly schedulerName?: string;
  /**
  * TuneSlowDeviceClass Tune the OSD when running on a slow Device Class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#tune_device_class DataK8SCephRookIoCephClusterV1Manifest#tune_device_class}
  */
  readonly tuneDeviceClass?: boolean | cdktf.IResolvable;
  /**
  * TuneFastDeviceClass Tune the OSD when running on a fast Device Class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#tune_fast_device_class DataK8SCephRookIoCephClusterV1Manifest#tune_fast_device_class}
  */
  readonly tuneFastDeviceClass?: boolean | cdktf.IResolvable;
  /**
  * VolumeClaimTemplates is a list of PVC templates for the underlying storage devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#volume_claim_templates DataK8SCephRookIoCephClusterV1Manifest#volume_claim_templates}
  */
  readonly volumeClaimTemplates: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplates[] | cdktf.IResolvable;
}

export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsToTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.config),
    count: cdktf.numberToTerraform(struct!.count),
    encrypted: cdktf.booleanToTerraform(struct!.encrypted),
    name: cdktf.stringToTerraform(struct!.name),
    placement: dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPlacementToTerraform(struct!.placement),
    portable: cdktf.booleanToTerraform(struct!.portable),
    prepare_placement: dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementToTerraform(struct!.preparePlacement),
    resources: dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsResourcesToTerraform(struct!.resources),
    scheduler_name: cdktf.stringToTerraform(struct!.schedulerName),
    tune_device_class: cdktf.booleanToTerraform(struct!.tuneDeviceClass),
    tune_fast_device_class: cdktf.booleanToTerraform(struct!.tuneFastDeviceClass),
    volume_claim_templates: cdktf.listMapper(dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesToTerraform, false)(struct!.volumeClaimTemplates),
  }
}


export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsToHclTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.config),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    encrypted: {
      value: cdktf.booleanToHclTerraform(struct!.encrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    placement: {
      value: dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPlacementToHclTerraform(struct!.placement),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPlacement",
    },
    portable: {
      value: cdktf.booleanToHclTerraform(struct!.portable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prepare_placement: {
      value: dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementToHclTerraform(struct!.preparePlacement),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacement",
    },
    resources: {
      value: dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsResources",
    },
    scheduler_name: {
      value: cdktf.stringToHclTerraform(struct!.schedulerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tune_device_class: {
      value: cdktf.booleanToHclTerraform(struct!.tuneDeviceClass),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tune_fast_device_class: {
      value: cdktf.booleanToHclTerraform(struct!.tuneFastDeviceClass),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volume_claim_templates: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesToHclTerraform, false)(struct!.volumeClaimTemplates),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._placement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placement = this._placement?.internalValue;
    }
    if (this._portable !== undefined) {
      hasAnyValues = true;
      internalValueResult.portable = this._portable;
    }
    if (this._preparePlacement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preparePlacement = this._preparePlacement?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._schedulerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulerName = this._schedulerName;
    }
    if (this._tuneDeviceClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.tuneDeviceClass = this._tuneDeviceClass;
    }
    if (this._tuneFastDeviceClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.tuneFastDeviceClass = this._tuneFastDeviceClass;
    }
    if (this._volumeClaimTemplates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeClaimTemplates = this._volumeClaimTemplates?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._count = undefined;
      this._encrypted = undefined;
      this._name = undefined;
      this._placement.internalValue = undefined;
      this._portable = undefined;
      this._preparePlacement.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._schedulerName = undefined;
      this._tuneDeviceClass = undefined;
      this._tuneFastDeviceClass = undefined;
      this._volumeClaimTemplates.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._count = value.count;
      this._encrypted = value.encrypted;
      this._name = value.name;
      this._placement.internalValue = value.placement;
      this._portable = value.portable;
      this._preparePlacement.internalValue = value.preparePlacement;
      this._resources.internalValue = value.resources;
      this._schedulerName = value.schedulerName;
      this._tuneDeviceClass = value.tuneDeviceClass;
      this._tuneFastDeviceClass = value.tuneFastDeviceClass;
      this._volumeClaimTemplates.internalValue = value.volumeClaimTemplates;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // encrypted - computed: false, optional: true, required: false
  private _encrypted?: boolean | cdktf.IResolvable; 
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean | cdktf.IResolvable) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
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

  // placement - computed: false, optional: true, required: false
  private _placement = new DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPlacementOutputReference(this, "placement");
  public get placement() {
    return this._placement;
  }
  public putPlacement(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPlacement) {
    this._placement.internalValue = value;
  }
  public resetPlacement() {
    this._placement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInput() {
    return this._placement.internalValue;
  }

  // portable - computed: false, optional: true, required: false
  private _portable?: boolean | cdktf.IResolvable; 
  public get portable() {
    return this.getBooleanAttribute('portable');
  }
  public set portable(value: boolean | cdktf.IResolvable) {
    this._portable = value;
  }
  public resetPortable() {
    this._portable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portableInput() {
    return this._portable;
  }

  // prepare_placement - computed: false, optional: true, required: false
  private _preparePlacement = new DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacementOutputReference(this, "prepare_placement");
  public get preparePlacement() {
    return this._preparePlacement;
  }
  public putPreparePlacement(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsPreparePlacement) {
    this._preparePlacement.internalValue = value;
  }
  public resetPreparePlacement() {
    this._preparePlacement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preparePlacementInput() {
    return this._preparePlacement.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
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

  // tune_device_class - computed: false, optional: true, required: false
  private _tuneDeviceClass?: boolean | cdktf.IResolvable; 
  public get tuneDeviceClass() {
    return this.getBooleanAttribute('tune_device_class');
  }
  public set tuneDeviceClass(value: boolean | cdktf.IResolvable) {
    this._tuneDeviceClass = value;
  }
  public resetTuneDeviceClass() {
    this._tuneDeviceClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tuneDeviceClassInput() {
    return this._tuneDeviceClass;
  }

  // tune_fast_device_class - computed: false, optional: true, required: false
  private _tuneFastDeviceClass?: boolean | cdktf.IResolvable; 
  public get tuneFastDeviceClass() {
    return this.getBooleanAttribute('tune_fast_device_class');
  }
  public set tuneFastDeviceClass(value: boolean | cdktf.IResolvable) {
    this._tuneFastDeviceClass = value;
  }
  public resetTuneFastDeviceClass() {
    this._tuneFastDeviceClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tuneFastDeviceClassInput() {
    return this._tuneFastDeviceClass;
  }

  // volume_claim_templates - computed: false, optional: false, required: true
  private _volumeClaimTemplates = new DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesList(this, "volume_claim_templates", false);
  public get volumeClaimTemplates() {
    return this._volumeClaimTemplates;
  }
  public putVolumeClaimTemplates(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsVolumeClaimTemplates[] | cdktf.IResolvable) {
    this._volumeClaimTemplates.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeClaimTemplatesInput() {
    return this._volumeClaimTemplates.internalValue;
  }
}

export class DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsOutputReference {
    return new DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephClusterV1ManifestSpecStorageStore {
  /**
  * Type of backend storage to be used while creating OSDs. If empty, then bluestore will be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#type DataK8SCephRookIoCephClusterV1Manifest#type}
  */
  readonly type?: string;
  /**
  * UpdateStore updates the backend store for existing OSDs. It destroys each OSD one at a time, cleans up the backing disk and prepares same OSD on that disk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#update_store DataK8SCephRookIoCephClusterV1Manifest#update_store}
  */
  readonly updateStore?: string;
}

export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageStoreToTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    update_store: cdktf.stringToTerraform(struct!.updateStore),
  }
}


export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageStoreToHclTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStore | cdktf.IResolvable): any {
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
    update_store: {
      value: cdktf.stringToHclTerraform(struct!.updateStore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephClusterV1ManifestSpecStorageStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephClusterV1ManifestSpecStorageStore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._updateStore !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateStore = this._updateStore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._updateStore = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._updateStore = value.updateStore;
    }
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

  // update_store - computed: false, optional: true, required: false
  private _updateStore?: string; 
  public get updateStore() {
    return this.getStringAttribute('update_store');
  }
  public set updateStore(value: string) {
    this._updateStore = value;
  }
  public resetUpdateStore() {
    this._updateStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateStoreInput() {
    return this._updateStore;
  }
}
export interface DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#annotations DataK8SCephRookIoCephClusterV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#finalizers DataK8SCephRookIoCephClusterV1Manifest#finalizers}
  */
  readonly finalizers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#labels DataK8SCephRookIoCephClusterV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#name DataK8SCephRookIoCephClusterV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#namespace DataK8SCephRookIoCephClusterV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesMetadataToTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesMetadata | cdktf.IResolvable): any {
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


export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesMetadataToHclTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesMetadata | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecDataSource {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#api_group DataK8SCephRookIoCephClusterV1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#kind DataK8SCephRookIoCephClusterV1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#name DataK8SCephRookIoCephClusterV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecDataSourceToTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecDataSource | cdktf.IResolvable): any {
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


export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecDataSourceToHclTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecDataSource | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecDataSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecDataSource | cdktf.IResolvable | undefined) {
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
export interface DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecDataSourceRef {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#api_group DataK8SCephRookIoCephClusterV1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#kind DataK8SCephRookIoCephClusterV1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#name DataK8SCephRookIoCephClusterV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of resource being referenced Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#namespace DataK8SCephRookIoCephClusterV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecDataSourceRefToTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecDataSourceRef | cdktf.IResolvable): any {
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


export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecDataSourceRefToHclTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecDataSourceRef | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecDataSourceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecDataSourceRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecDataSourceRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecResources {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#limits DataK8SCephRookIoCephClusterV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#requests DataK8SCephRookIoCephClusterV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecResourcesToTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecResourcesToHclTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecResources | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecResources | cdktf.IResolvable | undefined) {
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
export interface DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#key DataK8SCephRookIoCephClusterV1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#operator DataK8SCephRookIoCephClusterV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#values DataK8SCephRookIoCephClusterV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecSelectorMatchExpressionsToTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecSelectorMatchExpressionsOutputReference {
    return new DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#match_expressions DataK8SCephRookIoCephClusterV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#match_labels DataK8SCephRookIoCephClusterV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecSelectorToTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecSelectorToHclTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecSelectorMatchExpressionsList",
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

export class DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpec {
  /**
  * accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#access_modes DataK8SCephRookIoCephClusterV1Manifest#access_modes}
  */
  readonly accessModes?: string[];
  /**
  * dataSource field can be used to specify either: * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) * An existing PVC (PersistentVolumeClaim) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef, and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified. If the namespace is specified, then dataSourceRef will not be copied to dataSource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#data_source DataK8SCephRookIoCephClusterV1Manifest#data_source}
  */
  readonly dataSource?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecDataSource;
  /**
  * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the dataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, when namespace isn't specified in dataSourceRef, both fields (dataSource and dataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. When namespace is specified in dataSourceRef, dataSource isn't set to the same value and must be empty. There are three important differences between dataSource and dataSourceRef: * While dataSource only allows two specific types of objects, dataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects. * While dataSource ignores disallowed values (dropping them), dataSourceRef preserves all values, and generates an error if a disallowed value is specified. * While dataSource only allows local objects, dataSourceRef allows objects in any namespaces. (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled. (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#data_source_ref DataK8SCephRookIoCephClusterV1Manifest#data_source_ref}
  */
  readonly dataSourceRef?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecDataSourceRef;
  /**
  * resources represents the minimum resources the volume should have. If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements that are lower than previous value but must still be higher than capacity recorded in the status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#resources DataK8SCephRookIoCephClusterV1Manifest#resources}
  */
  readonly resources?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecResources;
  /**
  * selector is a label query over volumes to consider for binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#selector DataK8SCephRookIoCephClusterV1Manifest#selector}
  */
  readonly selector?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecSelector;
  /**
  * storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#storage_class_name DataK8SCephRookIoCephClusterV1Manifest#storage_class_name}
  */
  readonly storageClassName?: string;
  /**
  * volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim. If specified, the CSI driver will create or update the volume with the attributes defined in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName, it can be changed after the claim is created. An empty string value means that no VolumeAttributesClass will be applied to the claim but it's not allowed to reset this field to empty string once it is set. If unspecified and the PersistentVolumeClaim is unbound, the default VolumeAttributesClass will be set by the persistentvolume controller if it exists. If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource exists. More info: https://kubernetes.io/docs/concepts/storage/volume-attributes-classes/ (Beta) Using this field requires the VolumeAttributesClass feature gate to be enabled (off by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#volume_attributes_class_name DataK8SCephRookIoCephClusterV1Manifest#volume_attributes_class_name}
  */
  readonly volumeAttributesClassName?: string;
  /**
  * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#volume_mode DataK8SCephRookIoCephClusterV1Manifest#volume_mode}
  */
  readonly volumeMode?: string;
  /**
  * volumeName is the binding reference to the PersistentVolume backing this claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#volume_name DataK8SCephRookIoCephClusterV1Manifest#volume_name}
  */
  readonly volumeName?: string;
}

export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecToTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessModes),
    data_source: dataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecDataSourceToTerraform(struct!.dataSource),
    data_source_ref: dataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecDataSourceRefToTerraform(struct!.dataSourceRef),
    resources: dataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecResourcesToTerraform(struct!.resources),
    selector: dataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecSelectorToTerraform(struct!.selector),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
    volume_attributes_class_name: cdktf.stringToTerraform(struct!.volumeAttributesClassName),
    volume_mode: cdktf.stringToTerraform(struct!.volumeMode),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecToHclTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpec | cdktf.IResolvable): any {
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
      value: dataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecDataSourceToHclTerraform(struct!.dataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecDataSource",
    },
    data_source_ref: {
      value: dataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecDataSourceRefToHclTerraform(struct!.dataSourceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecDataSourceRef",
    },
    resources: {
      value: dataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecResources",
    },
    selector: {
      value: dataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecSelector",
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

export class DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpec | cdktf.IResolvable | undefined) {
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
  private _dataSource = new DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecDataSourceOutputReference(this, "data_source");
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecDataSource) {
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
  private _dataSourceRef = new DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecDataSourceRefOutputReference(this, "data_source_ref");
  public get dataSourceRef() {
    return this._dataSourceRef;
  }
  public putDataSourceRef(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecDataSourceRef) {
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
  private _resources = new DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecResources) {
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
  private _selector = new DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecSelector) {
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
export interface DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplates {
  /**
  * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#metadata DataK8SCephRookIoCephClusterV1Manifest#metadata}
  */
  readonly metadata?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesMetadata;
  /**
  * spec defines the desired characteristics of a volume requested by a pod author. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#spec DataK8SCephRookIoCephClusterV1Manifest#spec}
  */
  readonly spec?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpec;
}

export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesToTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesMetadataToTerraform(struct!.metadata),
    spec: dataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecToTerraform(struct!.spec),
  }
}


export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesToHclTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesMetadata",
    },
    spec: {
      value: dataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplates | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplates | cdktf.IResolvable | undefined) {
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
  private _metadata = new DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesMetadata) {
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
  private _spec = new DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesSpec) {
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

export class DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplates[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesOutputReference {
    return new DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephClusterV1ManifestSpecStorage {
  /**
  * Whether to allow updating the device class after the OSD is initially provisioned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#allow_device_class_update DataK8SCephRookIoCephClusterV1Manifest#allow_device_class_update}
  */
  readonly allowDeviceClassUpdate?: boolean | cdktf.IResolvable;
  /**
  * Whether Rook will resize the OSD CRUSH weight when the OSD PVC size is increased. This allows cluster data to be rebalanced to make most effective use of new OSD space. The default is false since data rebalancing can cause temporary cluster slowdown.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#allow_osd_crush_weight_update DataK8SCephRookIoCephClusterV1Manifest#allow_osd_crush_weight_update}
  */
  readonly allowOsdCrushWeightUpdate?: boolean | cdktf.IResolvable;
  /**
  * BackfillFullRatio is the ratio at which the cluster is too full for backfill. Backfill will be disabled if above this threshold. Default is 0.90.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#backfill_full_ratio DataK8SCephRookIoCephClusterV1Manifest#backfill_full_ratio}
  */
  readonly backfillFullRatio?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#config DataK8SCephRookIoCephClusterV1Manifest#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * A regular expression to allow more fine-grained selection of devices on nodes across the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#device_filter DataK8SCephRookIoCephClusterV1Manifest#device_filter}
  */
  readonly deviceFilter?: string;
  /**
  * A regular expression to allow more fine-grained selection of devices with path names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#device_path_filter DataK8SCephRookIoCephClusterV1Manifest#device_path_filter}
  */
  readonly devicePathFilter?: string;
  /**
  * List of devices to use as storage devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#devices DataK8SCephRookIoCephClusterV1Manifest#devices}
  */
  readonly devices?: { [key: string]: string };
  /**
  * FlappingRestartIntervalHours defines the time for which the OSD pods, that failed with zero exit code, will sleep before restarting. This is needed for OSD flapping where OSD daemons are marked down more than 5 times in 600 seconds by Ceph. Preventing the OSD pods to restart immediately in such scenarios will prevent Rook from marking OSD as 'up' and thus peering of the PGs mapped to the OSD. User needs to manually restart the OSD pod if they manage to fix the underlying OSD flapping issue before the restart interval. The sleep will be disabled if this interval is set to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#flapping_restart_interval_hours DataK8SCephRookIoCephClusterV1Manifest#flapping_restart_interval_hours}
  */
  readonly flappingRestartIntervalHours?: number;
  /**
  * FullRatio is the ratio at which the cluster is considered full and ceph will stop accepting writes. Default is 0.95.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#full_ratio DataK8SCephRookIoCephClusterV1Manifest#full_ratio}
  */
  readonly fullRatio?: number;
  /**
  * NearFullRatio is the ratio at which the cluster is considered nearly full and will raise a ceph health warning. Default is 0.85.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#near_full_ratio DataK8SCephRookIoCephClusterV1Manifest#near_full_ratio}
  */
  readonly nearFullRatio?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#nodes DataK8SCephRookIoCephClusterV1Manifest#nodes}
  */
  readonly nodes?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageNodes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#only_apply_osd_placement DataK8SCephRookIoCephClusterV1Manifest#only_apply_osd_placement}
  */
  readonly onlyApplyOsdPlacement?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#storage_class_device_sets DataK8SCephRookIoCephClusterV1Manifest#storage_class_device_sets}
  */
  readonly storageClassDeviceSets?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSets[] | cdktf.IResolvable;
  /**
  * OSDStore is the backend storage type used for creating the OSDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#store DataK8SCephRookIoCephClusterV1Manifest#store}
  */
  readonly store?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStore;
  /**
  * Whether to consume all the storage devices found on a machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#use_all_devices DataK8SCephRookIoCephClusterV1Manifest#use_all_devices}
  */
  readonly useAllDevices?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#use_all_nodes DataK8SCephRookIoCephClusterV1Manifest#use_all_nodes}
  */
  readonly useAllNodes?: boolean | cdktf.IResolvable;
  /**
  * PersistentVolumeClaims to use as storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#volume_claim_templates DataK8SCephRookIoCephClusterV1Manifest#volume_claim_templates}
  */
  readonly volumeClaimTemplates?: DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplates[] | cdktf.IResolvable;
}

export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageToTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_device_class_update: cdktf.booleanToTerraform(struct!.allowDeviceClassUpdate),
    allow_osd_crush_weight_update: cdktf.booleanToTerraform(struct!.allowOsdCrushWeightUpdate),
    backfill_full_ratio: cdktf.numberToTerraform(struct!.backfillFullRatio),
    config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.config),
    device_filter: cdktf.stringToTerraform(struct!.deviceFilter),
    device_path_filter: cdktf.stringToTerraform(struct!.devicePathFilter),
    devices: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.devices),
    flapping_restart_interval_hours: cdktf.numberToTerraform(struct!.flappingRestartIntervalHours),
    full_ratio: cdktf.numberToTerraform(struct!.fullRatio),
    near_full_ratio: cdktf.numberToTerraform(struct!.nearFullRatio),
    nodes: cdktf.listMapper(dataK8SCephRookIoCephClusterV1ManifestSpecStorageNodesToTerraform, false)(struct!.nodes),
    only_apply_osd_placement: cdktf.booleanToTerraform(struct!.onlyApplyOsdPlacement),
    storage_class_device_sets: cdktf.listMapper(dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsToTerraform, false)(struct!.storageClassDeviceSets),
    store: dataK8SCephRookIoCephClusterV1ManifestSpecStorageStoreToTerraform(struct!.store),
    use_all_devices: cdktf.booleanToTerraform(struct!.useAllDevices),
    use_all_nodes: cdktf.booleanToTerraform(struct!.useAllNodes),
    volume_claim_templates: cdktf.listMapper(dataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesToTerraform, false)(struct!.volumeClaimTemplates),
  }
}


export function dataK8SCephRookIoCephClusterV1ManifestSpecStorageToHclTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpecStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_device_class_update: {
      value: cdktf.booleanToHclTerraform(struct!.allowDeviceClassUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_osd_crush_weight_update: {
      value: cdktf.booleanToHclTerraform(struct!.allowOsdCrushWeightUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    backfill_full_ratio: {
      value: cdktf.numberToHclTerraform(struct!.backfillFullRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.config),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    device_filter: {
      value: cdktf.stringToHclTerraform(struct!.deviceFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_path_filter: {
      value: cdktf.stringToHclTerraform(struct!.devicePathFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    devices: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.devices),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    flapping_restart_interval_hours: {
      value: cdktf.numberToHclTerraform(struct!.flappingRestartIntervalHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    full_ratio: {
      value: cdktf.numberToHclTerraform(struct!.fullRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    near_full_ratio: {
      value: cdktf.numberToHclTerraform(struct!.nearFullRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nodes: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephClusterV1ManifestSpecStorageNodesToHclTerraform, false)(struct!.nodes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecStorageNodesList",
    },
    only_apply_osd_placement: {
      value: cdktf.booleanToHclTerraform(struct!.onlyApplyOsdPlacement),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_class_device_sets: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsToHclTerraform, false)(struct!.storageClassDeviceSets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsList",
    },
    store: {
      value: dataK8SCephRookIoCephClusterV1ManifestSpecStorageStoreToHclTerraform(struct!.store),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecStorageStore",
    },
    use_all_devices: {
      value: cdktf.booleanToHclTerraform(struct!.useAllDevices),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_all_nodes: {
      value: cdktf.booleanToHclTerraform(struct!.useAllNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volume_claim_templates: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesToHclTerraform, false)(struct!.volumeClaimTemplates),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephClusterV1ManifestSpecStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephClusterV1ManifestSpecStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowDeviceClassUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowDeviceClassUpdate = this._allowDeviceClassUpdate;
    }
    if (this._allowOsdCrushWeightUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOsdCrushWeightUpdate = this._allowOsdCrushWeightUpdate;
    }
    if (this._backfillFullRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.backfillFullRatio = this._backfillFullRatio;
    }
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._deviceFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceFilter = this._deviceFilter;
    }
    if (this._devicePathFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.devicePathFilter = this._devicePathFilter;
    }
    if (this._devices !== undefined) {
      hasAnyValues = true;
      internalValueResult.devices = this._devices;
    }
    if (this._flappingRestartIntervalHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.flappingRestartIntervalHours = this._flappingRestartIntervalHours;
    }
    if (this._fullRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullRatio = this._fullRatio;
    }
    if (this._nearFullRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.nearFullRatio = this._nearFullRatio;
    }
    if (this._nodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodes = this._nodes?.internalValue;
    }
    if (this._onlyApplyOsdPlacement !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlyApplyOsdPlacement = this._onlyApplyOsdPlacement;
    }
    if (this._storageClassDeviceSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassDeviceSets = this._storageClassDeviceSets?.internalValue;
    }
    if (this._store?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.store = this._store?.internalValue;
    }
    if (this._useAllDevices !== undefined) {
      hasAnyValues = true;
      internalValueResult.useAllDevices = this._useAllDevices;
    }
    if (this._useAllNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.useAllNodes = this._useAllNodes;
    }
    if (this._volumeClaimTemplates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeClaimTemplates = this._volumeClaimTemplates?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowDeviceClassUpdate = undefined;
      this._allowOsdCrushWeightUpdate = undefined;
      this._backfillFullRatio = undefined;
      this._config = undefined;
      this._deviceFilter = undefined;
      this._devicePathFilter = undefined;
      this._devices = undefined;
      this._flappingRestartIntervalHours = undefined;
      this._fullRatio = undefined;
      this._nearFullRatio = undefined;
      this._nodes.internalValue = undefined;
      this._onlyApplyOsdPlacement = undefined;
      this._storageClassDeviceSets.internalValue = undefined;
      this._store.internalValue = undefined;
      this._useAllDevices = undefined;
      this._useAllNodes = undefined;
      this._volumeClaimTemplates.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowDeviceClassUpdate = value.allowDeviceClassUpdate;
      this._allowOsdCrushWeightUpdate = value.allowOsdCrushWeightUpdate;
      this._backfillFullRatio = value.backfillFullRatio;
      this._config = value.config;
      this._deviceFilter = value.deviceFilter;
      this._devicePathFilter = value.devicePathFilter;
      this._devices = value.devices;
      this._flappingRestartIntervalHours = value.flappingRestartIntervalHours;
      this._fullRatio = value.fullRatio;
      this._nearFullRatio = value.nearFullRatio;
      this._nodes.internalValue = value.nodes;
      this._onlyApplyOsdPlacement = value.onlyApplyOsdPlacement;
      this._storageClassDeviceSets.internalValue = value.storageClassDeviceSets;
      this._store.internalValue = value.store;
      this._useAllDevices = value.useAllDevices;
      this._useAllNodes = value.useAllNodes;
      this._volumeClaimTemplates.internalValue = value.volumeClaimTemplates;
    }
  }

  // allow_device_class_update - computed: false, optional: true, required: false
  private _allowDeviceClassUpdate?: boolean | cdktf.IResolvable; 
  public get allowDeviceClassUpdate() {
    return this.getBooleanAttribute('allow_device_class_update');
  }
  public set allowDeviceClassUpdate(value: boolean | cdktf.IResolvable) {
    this._allowDeviceClassUpdate = value;
  }
  public resetAllowDeviceClassUpdate() {
    this._allowDeviceClassUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDeviceClassUpdateInput() {
    return this._allowDeviceClassUpdate;
  }

  // allow_osd_crush_weight_update - computed: false, optional: true, required: false
  private _allowOsdCrushWeightUpdate?: boolean | cdktf.IResolvable; 
  public get allowOsdCrushWeightUpdate() {
    return this.getBooleanAttribute('allow_osd_crush_weight_update');
  }
  public set allowOsdCrushWeightUpdate(value: boolean | cdktf.IResolvable) {
    this._allowOsdCrushWeightUpdate = value;
  }
  public resetAllowOsdCrushWeightUpdate() {
    this._allowOsdCrushWeightUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOsdCrushWeightUpdateInput() {
    return this._allowOsdCrushWeightUpdate;
  }

  // backfill_full_ratio - computed: false, optional: true, required: false
  private _backfillFullRatio?: number; 
  public get backfillFullRatio() {
    return this.getNumberAttribute('backfill_full_ratio');
  }
  public set backfillFullRatio(value: number) {
    this._backfillFullRatio = value;
  }
  public resetBackfillFullRatio() {
    this._backfillFullRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backfillFullRatioInput() {
    return this._backfillFullRatio;
  }

  // config - computed: false, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // device_filter - computed: false, optional: true, required: false
  private _deviceFilter?: string; 
  public get deviceFilter() {
    return this.getStringAttribute('device_filter');
  }
  public set deviceFilter(value: string) {
    this._deviceFilter = value;
  }
  public resetDeviceFilter() {
    this._deviceFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceFilterInput() {
    return this._deviceFilter;
  }

  // device_path_filter - computed: false, optional: true, required: false
  private _devicePathFilter?: string; 
  public get devicePathFilter() {
    return this.getStringAttribute('device_path_filter');
  }
  public set devicePathFilter(value: string) {
    this._devicePathFilter = value;
  }
  public resetDevicePathFilter() {
    this._devicePathFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicePathFilterInput() {
    return this._devicePathFilter;
  }

  // devices - computed: false, optional: true, required: false
  private _devices?: { [key: string]: string }; 
  public get devices() {
    return this.getStringMapAttribute('devices');
  }
  public set devices(value: { [key: string]: string }) {
    this._devices = value;
  }
  public resetDevices() {
    this._devices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices;
  }

  // flapping_restart_interval_hours - computed: false, optional: true, required: false
  private _flappingRestartIntervalHours?: number; 
  public get flappingRestartIntervalHours() {
    return this.getNumberAttribute('flapping_restart_interval_hours');
  }
  public set flappingRestartIntervalHours(value: number) {
    this._flappingRestartIntervalHours = value;
  }
  public resetFlappingRestartIntervalHours() {
    this._flappingRestartIntervalHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flappingRestartIntervalHoursInput() {
    return this._flappingRestartIntervalHours;
  }

  // full_ratio - computed: false, optional: true, required: false
  private _fullRatio?: number; 
  public get fullRatio() {
    return this.getNumberAttribute('full_ratio');
  }
  public set fullRatio(value: number) {
    this._fullRatio = value;
  }
  public resetFullRatio() {
    this._fullRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullRatioInput() {
    return this._fullRatio;
  }

  // near_full_ratio - computed: false, optional: true, required: false
  private _nearFullRatio?: number; 
  public get nearFullRatio() {
    return this.getNumberAttribute('near_full_ratio');
  }
  public set nearFullRatio(value: number) {
    this._nearFullRatio = value;
  }
  public resetNearFullRatio() {
    this._nearFullRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nearFullRatioInput() {
    return this._nearFullRatio;
  }

  // nodes - computed: false, optional: true, required: false
  private _nodes = new DataK8SCephRookIoCephClusterV1ManifestSpecStorageNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageNodes[] | cdktf.IResolvable) {
    this._nodes.internalValue = value;
  }
  public resetNodes() {
    this._nodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes.internalValue;
  }

  // only_apply_osd_placement - computed: false, optional: true, required: false
  private _onlyApplyOsdPlacement?: boolean | cdktf.IResolvable; 
  public get onlyApplyOsdPlacement() {
    return this.getBooleanAttribute('only_apply_osd_placement');
  }
  public set onlyApplyOsdPlacement(value: boolean | cdktf.IResolvable) {
    this._onlyApplyOsdPlacement = value;
  }
  public resetOnlyApplyOsdPlacement() {
    this._onlyApplyOsdPlacement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyApplyOsdPlacementInput() {
    return this._onlyApplyOsdPlacement;
  }

  // storage_class_device_sets - computed: false, optional: true, required: false
  private _storageClassDeviceSets = new DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSetsList(this, "storage_class_device_sets", false);
  public get storageClassDeviceSets() {
    return this._storageClassDeviceSets;
  }
  public putStorageClassDeviceSets(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStorageClassDeviceSets[] | cdktf.IResolvable) {
    this._storageClassDeviceSets.internalValue = value;
  }
  public resetStorageClassDeviceSets() {
    this._storageClassDeviceSets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassDeviceSetsInput() {
    return this._storageClassDeviceSets.internalValue;
  }

  // store - computed: false, optional: true, required: false
  private _store = new DataK8SCephRookIoCephClusterV1ManifestSpecStorageStoreOutputReference(this, "store");
  public get store() {
    return this._store;
  }
  public putStore(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageStore) {
    this._store.internalValue = value;
  }
  public resetStore() {
    this._store.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeInput() {
    return this._store.internalValue;
  }

  // use_all_devices - computed: false, optional: true, required: false
  private _useAllDevices?: boolean | cdktf.IResolvable; 
  public get useAllDevices() {
    return this.getBooleanAttribute('use_all_devices');
  }
  public set useAllDevices(value: boolean | cdktf.IResolvable) {
    this._useAllDevices = value;
  }
  public resetUseAllDevices() {
    this._useAllDevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAllDevicesInput() {
    return this._useAllDevices;
  }

  // use_all_nodes - computed: false, optional: true, required: false
  private _useAllNodes?: boolean | cdktf.IResolvable; 
  public get useAllNodes() {
    return this.getBooleanAttribute('use_all_nodes');
  }
  public set useAllNodes(value: boolean | cdktf.IResolvable) {
    this._useAllNodes = value;
  }
  public resetUseAllNodes() {
    this._useAllNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAllNodesInput() {
    return this._useAllNodes;
  }

  // volume_claim_templates - computed: false, optional: true, required: false
  private _volumeClaimTemplates = new DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplatesList(this, "volume_claim_templates", false);
  public get volumeClaimTemplates() {
    return this._volumeClaimTemplates;
  }
  public putVolumeClaimTemplates(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorageVolumeClaimTemplates[] | cdktf.IResolvable) {
    this._volumeClaimTemplates.internalValue = value;
  }
  public resetVolumeClaimTemplates() {
    this._volumeClaimTemplates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeClaimTemplatesInput() {
    return this._volumeClaimTemplates.internalValue;
  }
}
export interface DataK8SCephRookIoCephClusterV1ManifestSpec {
  /**
  * The annotations-related configuration to add/set on each Pod related object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#annotations DataK8SCephRookIoCephClusterV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Ceph Config options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#ceph_config DataK8SCephRookIoCephClusterV1Manifest#ceph_config}
  */
  readonly cephConfig?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable;
  /**
  * The version information that instructs Rook to orchestrate a particular version of Ceph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#ceph_version DataK8SCephRookIoCephClusterV1Manifest#ceph_version}
  */
  readonly cephVersion?: DataK8SCephRookIoCephClusterV1ManifestSpecCephVersion;
  /**
  * Indicates user intent when deleting a cluster; blocks orchestration and should not be set if cluster deletion is not imminent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#cleanup_policy DataK8SCephRookIoCephClusterV1Manifest#cleanup_policy}
  */
  readonly cleanupPolicy?: DataK8SCephRookIoCephClusterV1ManifestSpecCleanupPolicy;
  /**
  * ContinueUpgradeAfterChecksEvenIfNotHealthy defines if an upgrade should continue even if PGs are not clean
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#continue_upgrade_after_checks_even_if_not_healthy DataK8SCephRookIoCephClusterV1Manifest#continue_upgrade_after_checks_even_if_not_healthy}
  */
  readonly continueUpgradeAfterChecksEvenIfNotHealthy?: boolean | cdktf.IResolvable;
  /**
  * A spec for the crash controller
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#crash_collector DataK8SCephRookIoCephClusterV1Manifest#crash_collector}
  */
  readonly crashCollector?: DataK8SCephRookIoCephClusterV1ManifestSpecCrashCollector;
  /**
  * CSI Driver Options applied per cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#csi DataK8SCephRookIoCephClusterV1Manifest#csi}
  */
  readonly csi?: DataK8SCephRookIoCephClusterV1ManifestSpecCsi;
  /**
  * Dashboard settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#dashboard DataK8SCephRookIoCephClusterV1Manifest#dashboard}
  */
  readonly dashboard?: DataK8SCephRookIoCephClusterV1ManifestSpecDashboard;
  /**
  * The path on the host where config and data can be persisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#data_dir_host_path DataK8SCephRookIoCephClusterV1Manifest#data_dir_host_path}
  */
  readonly dataDirHostPath?: string;
  /**
  * A spec for configuring disruption management.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#disruption_management DataK8SCephRookIoCephClusterV1Manifest#disruption_management}
  */
  readonly disruptionManagement?: DataK8SCephRookIoCephClusterV1ManifestSpecDisruptionManagement;
  /**
  * Whether the Ceph Cluster is running external to this Kubernetes cluster mon, mgr, osd, mds, and discover daemons will not be created for external clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#external DataK8SCephRookIoCephClusterV1Manifest#external}
  */
  readonly external?: DataK8SCephRookIoCephClusterV1ManifestSpecExternal;
  /**
  * Internal daemon healthchecks and liveness probe
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#health_check DataK8SCephRookIoCephClusterV1Manifest#health_check}
  */
  readonly healthCheck?: DataK8SCephRookIoCephClusterV1ManifestSpecHealthCheck;
  /**
  * The labels-related configuration to add/set on each Pod related object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#labels DataK8SCephRookIoCephClusterV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Logging represents loggings settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#log_collector DataK8SCephRookIoCephClusterV1Manifest#log_collector}
  */
  readonly logCollector?: DataK8SCephRookIoCephClusterV1ManifestSpecLogCollector;
  /**
  * A spec for mgr related options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#mgr DataK8SCephRookIoCephClusterV1Manifest#mgr}
  */
  readonly mgr?: DataK8SCephRookIoCephClusterV1ManifestSpecMgr;
  /**
  * A spec for mon related options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#mon DataK8SCephRookIoCephClusterV1Manifest#mon}
  */
  readonly mon?: DataK8SCephRookIoCephClusterV1ManifestSpecMon;
  /**
  * Prometheus based Monitoring settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#monitoring DataK8SCephRookIoCephClusterV1Manifest#monitoring}
  */
  readonly monitoring?: DataK8SCephRookIoCephClusterV1ManifestSpecMonitoring;
  /**
  * Network related configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#network DataK8SCephRookIoCephClusterV1Manifest#network}
  */
  readonly network?: DataK8SCephRookIoCephClusterV1ManifestSpecNetwork;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#placement DataK8SCephRookIoCephClusterV1Manifest#placement}
  */
  readonly placement?: { [key: string]: string };
  /**
  * PriorityClassNames sets priority classes on components
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#priority_class_names DataK8SCephRookIoCephClusterV1Manifest#priority_class_names}
  */
  readonly priorityClassNames?: { [key: string]: string };
  /**
  * Remove the OSD that is out and safe to remove only if this option is true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#remove_os_ds_if_out_and_safe_to_remove DataK8SCephRookIoCephClusterV1Manifest#remove_os_ds_if_out_and_safe_to_remove}
  */
  readonly removeOsDsIfOutAndSafeToRemove?: boolean | cdktf.IResolvable;
  /**
  * Resources set resource requests and limits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#resources DataK8SCephRookIoCephClusterV1Manifest#resources}
  */
  readonly resources?: { [key: string]: string };
  /**
  * Security represents security settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#security DataK8SCephRookIoCephClusterV1Manifest#security}
  */
  readonly security?: DataK8SCephRookIoCephClusterV1ManifestSpecSecurity;
  /**
  * SkipUpgradeChecks defines if an upgrade should be forced even if one of the check fails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#skip_upgrade_checks DataK8SCephRookIoCephClusterV1Manifest#skip_upgrade_checks}
  */
  readonly skipUpgradeChecks?: boolean | cdktf.IResolvable;
  /**
  * A spec for available storage in the cluster and how it should be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#storage DataK8SCephRookIoCephClusterV1Manifest#storage}
  */
  readonly storage?: DataK8SCephRookIoCephClusterV1ManifestSpecStorage;
  /**
  * UpgradeOSDRequiresHealthyPGs defines if OSD upgrade requires PGs are clean. If set to 'true' OSD upgrade process won't start until PGs are healthy. This configuration will be ignored if 'skipUpgradeChecks' is 'true'. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#upgrade_osd_requires_healthy_p_gs DataK8SCephRookIoCephClusterV1Manifest#upgrade_osd_requires_healthy_p_gs}
  */
  readonly upgradeOsdRequiresHealthyPGs?: boolean | cdktf.IResolvable;
  /**
  * WaitTimeoutForHealthyOSDInMinutes defines the time the operator would wait before an OSD can be stopped for upgrade or restart. If the timeout exceeds and OSD is not ok to stop, then the operator would skip upgrade for the current OSD and proceed with the next one if 'continueUpgradeAfterChecksEvenIfNotHealthy' is 'false'. If 'continueUpgradeAfterChecksEvenIfNotHealthy' is 'true', then operator would continue with the upgrade of an OSD even if its not ok to stop after the timeout. This timeout won't be applied if 'skipUpgradeChecks' is 'true'. The default wait timeout is 10 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ceph_rook_io_ceph_cluster_v1_manifest#wait_timeout_for_healthy_osd_in_minutes DataK8SCephRookIoCephClusterV1Manifest#wait_timeout_for_healthy_osd_in_minutes}
  */
  readonly waitTimeoutForHealthyOsdInMinutes?: number;
}

export function dataK8SCephRookIoCephClusterV1ManifestSpecToTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    ceph_config: cdktf.hashMapper(cdktf.hashMapper(cdktf.stringToTerraform))(struct!.cephConfig),
    ceph_version: dataK8SCephRookIoCephClusterV1ManifestSpecCephVersionToTerraform(struct!.cephVersion),
    cleanup_policy: dataK8SCephRookIoCephClusterV1ManifestSpecCleanupPolicyToTerraform(struct!.cleanupPolicy),
    continue_upgrade_after_checks_even_if_not_healthy: cdktf.booleanToTerraform(struct!.continueUpgradeAfterChecksEvenIfNotHealthy),
    crash_collector: dataK8SCephRookIoCephClusterV1ManifestSpecCrashCollectorToTerraform(struct!.crashCollector),
    csi: dataK8SCephRookIoCephClusterV1ManifestSpecCsiToTerraform(struct!.csi),
    dashboard: dataK8SCephRookIoCephClusterV1ManifestSpecDashboardToTerraform(struct!.dashboard),
    data_dir_host_path: cdktf.stringToTerraform(struct!.dataDirHostPath),
    disruption_management: dataK8SCephRookIoCephClusterV1ManifestSpecDisruptionManagementToTerraform(struct!.disruptionManagement),
    external: dataK8SCephRookIoCephClusterV1ManifestSpecExternalToTerraform(struct!.external),
    health_check: dataK8SCephRookIoCephClusterV1ManifestSpecHealthCheckToTerraform(struct!.healthCheck),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    log_collector: dataK8SCephRookIoCephClusterV1ManifestSpecLogCollectorToTerraform(struct!.logCollector),
    mgr: dataK8SCephRookIoCephClusterV1ManifestSpecMgrToTerraform(struct!.mgr),
    mon: dataK8SCephRookIoCephClusterV1ManifestSpecMonToTerraform(struct!.mon),
    monitoring: dataK8SCephRookIoCephClusterV1ManifestSpecMonitoringToTerraform(struct!.monitoring),
    network: dataK8SCephRookIoCephClusterV1ManifestSpecNetworkToTerraform(struct!.network),
    placement: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.placement),
    priority_class_names: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.priorityClassNames),
    remove_os_ds_if_out_and_safe_to_remove: cdktf.booleanToTerraform(struct!.removeOsDsIfOutAndSafeToRemove),
    resources: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resources),
    security: dataK8SCephRookIoCephClusterV1ManifestSpecSecurityToTerraform(struct!.security),
    skip_upgrade_checks: cdktf.booleanToTerraform(struct!.skipUpgradeChecks),
    storage: dataK8SCephRookIoCephClusterV1ManifestSpecStorageToTerraform(struct!.storage),
    upgrade_osd_requires_healthy_p_gs: cdktf.booleanToTerraform(struct!.upgradeOsdRequiresHealthyPGs),
    wait_timeout_for_healthy_osd_in_minutes: cdktf.numberToTerraform(struct!.waitTimeoutForHealthyOsdInMinutes),
  }
}


export function dataK8SCephRookIoCephClusterV1ManifestSpecToHclTerraform(struct?: DataK8SCephRookIoCephClusterV1ManifestSpec | cdktf.IResolvable): any {
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
    ceph_config: {
      value: cdktf.hashMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform))(struct!.cephConfig),
      isBlock: false,
      type: "map",
      storageClassType: "stringMapMap",
    },
    ceph_version: {
      value: dataK8SCephRookIoCephClusterV1ManifestSpecCephVersionToHclTerraform(struct!.cephVersion),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecCephVersion",
    },
    cleanup_policy: {
      value: dataK8SCephRookIoCephClusterV1ManifestSpecCleanupPolicyToHclTerraform(struct!.cleanupPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecCleanupPolicy",
    },
    continue_upgrade_after_checks_even_if_not_healthy: {
      value: cdktf.booleanToHclTerraform(struct!.continueUpgradeAfterChecksEvenIfNotHealthy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    crash_collector: {
      value: dataK8SCephRookIoCephClusterV1ManifestSpecCrashCollectorToHclTerraform(struct!.crashCollector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecCrashCollector",
    },
    csi: {
      value: dataK8SCephRookIoCephClusterV1ManifestSpecCsiToHclTerraform(struct!.csi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecCsi",
    },
    dashboard: {
      value: dataK8SCephRookIoCephClusterV1ManifestSpecDashboardToHclTerraform(struct!.dashboard),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecDashboard",
    },
    data_dir_host_path: {
      value: cdktf.stringToHclTerraform(struct!.dataDirHostPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disruption_management: {
      value: dataK8SCephRookIoCephClusterV1ManifestSpecDisruptionManagementToHclTerraform(struct!.disruptionManagement),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecDisruptionManagement",
    },
    external: {
      value: dataK8SCephRookIoCephClusterV1ManifestSpecExternalToHclTerraform(struct!.external),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecExternal",
    },
    health_check: {
      value: dataK8SCephRookIoCephClusterV1ManifestSpecHealthCheckToHclTerraform(struct!.healthCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecHealthCheck",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    log_collector: {
      value: dataK8SCephRookIoCephClusterV1ManifestSpecLogCollectorToHclTerraform(struct!.logCollector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecLogCollector",
    },
    mgr: {
      value: dataK8SCephRookIoCephClusterV1ManifestSpecMgrToHclTerraform(struct!.mgr),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecMgr",
    },
    mon: {
      value: dataK8SCephRookIoCephClusterV1ManifestSpecMonToHclTerraform(struct!.mon),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecMon",
    },
    monitoring: {
      value: dataK8SCephRookIoCephClusterV1ManifestSpecMonitoringToHclTerraform(struct!.monitoring),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecMonitoring",
    },
    network: {
      value: dataK8SCephRookIoCephClusterV1ManifestSpecNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecNetwork",
    },
    placement: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.placement),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    priority_class_names: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.priorityClassNames),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    remove_os_ds_if_out_and_safe_to_remove: {
      value: cdktf.booleanToHclTerraform(struct!.removeOsDsIfOutAndSafeToRemove),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resources: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resources),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    security: {
      value: dataK8SCephRookIoCephClusterV1ManifestSpecSecurityToHclTerraform(struct!.security),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecSecurity",
    },
    skip_upgrade_checks: {
      value: cdktf.booleanToHclTerraform(struct!.skipUpgradeChecks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage: {
      value: dataK8SCephRookIoCephClusterV1ManifestSpecStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephClusterV1ManifestSpecStorage",
    },
    upgrade_osd_requires_healthy_p_gs: {
      value: cdktf.booleanToHclTerraform(struct!.upgradeOsdRequiresHealthyPGs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    wait_timeout_for_healthy_osd_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.waitTimeoutForHealthyOsdInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephClusterV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephClusterV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._cephConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.cephConfig = this._cephConfig;
    }
    if (this._cephVersion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cephVersion = this._cephVersion?.internalValue;
    }
    if (this._cleanupPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanupPolicy = this._cleanupPolicy?.internalValue;
    }
    if (this._continueUpgradeAfterChecksEvenIfNotHealthy !== undefined) {
      hasAnyValues = true;
      internalValueResult.continueUpgradeAfterChecksEvenIfNotHealthy = this._continueUpgradeAfterChecksEvenIfNotHealthy;
    }
    if (this._crashCollector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crashCollector = this._crashCollector?.internalValue;
    }
    if (this._csi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csi = this._csi?.internalValue;
    }
    if (this._dashboard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboard = this._dashboard?.internalValue;
    }
    if (this._dataDirHostPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDirHostPath = this._dataDirHostPath;
    }
    if (this._disruptionManagement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disruptionManagement = this._disruptionManagement?.internalValue;
    }
    if (this._external?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.external = this._external?.internalValue;
    }
    if (this._healthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck?.internalValue;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._logCollector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logCollector = this._logCollector?.internalValue;
    }
    if (this._mgr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mgr = this._mgr?.internalValue;
    }
    if (this._mon?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mon = this._mon?.internalValue;
    }
    if (this._monitoring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoring = this._monitoring?.internalValue;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    if (this._placement !== undefined) {
      hasAnyValues = true;
      internalValueResult.placement = this._placement;
    }
    if (this._priorityClassNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityClassNames = this._priorityClassNames;
    }
    if (this._removeOsDsIfOutAndSafeToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeOsDsIfOutAndSafeToRemove = this._removeOsDsIfOutAndSafeToRemove;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._security?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.security = this._security?.internalValue;
    }
    if (this._skipUpgradeChecks !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipUpgradeChecks = this._skipUpgradeChecks;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    if (this._upgradeOsdRequiresHealthyPGs !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeOsdRequiresHealthyPGs = this._upgradeOsdRequiresHealthyPGs;
    }
    if (this._waitTimeoutForHealthyOsdInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitTimeoutForHealthyOsdInMinutes = this._waitTimeoutForHealthyOsdInMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephClusterV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._cephConfig = undefined;
      this._cephVersion.internalValue = undefined;
      this._cleanupPolicy.internalValue = undefined;
      this._continueUpgradeAfterChecksEvenIfNotHealthy = undefined;
      this._crashCollector.internalValue = undefined;
      this._csi.internalValue = undefined;
      this._dashboard.internalValue = undefined;
      this._dataDirHostPath = undefined;
      this._disruptionManagement.internalValue = undefined;
      this._external.internalValue = undefined;
      this._healthCheck.internalValue = undefined;
      this._labels = undefined;
      this._logCollector.internalValue = undefined;
      this._mgr.internalValue = undefined;
      this._mon.internalValue = undefined;
      this._monitoring.internalValue = undefined;
      this._network.internalValue = undefined;
      this._placement = undefined;
      this._priorityClassNames = undefined;
      this._removeOsDsIfOutAndSafeToRemove = undefined;
      this._resources = undefined;
      this._security.internalValue = undefined;
      this._skipUpgradeChecks = undefined;
      this._storage.internalValue = undefined;
      this._upgradeOsdRequiresHealthyPGs = undefined;
      this._waitTimeoutForHealthyOsdInMinutes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._cephConfig = value.cephConfig;
      this._cephVersion.internalValue = value.cephVersion;
      this._cleanupPolicy.internalValue = value.cleanupPolicy;
      this._continueUpgradeAfterChecksEvenIfNotHealthy = value.continueUpgradeAfterChecksEvenIfNotHealthy;
      this._crashCollector.internalValue = value.crashCollector;
      this._csi.internalValue = value.csi;
      this._dashboard.internalValue = value.dashboard;
      this._dataDirHostPath = value.dataDirHostPath;
      this._disruptionManagement.internalValue = value.disruptionManagement;
      this._external.internalValue = value.external;
      this._healthCheck.internalValue = value.healthCheck;
      this._labels = value.labels;
      this._logCollector.internalValue = value.logCollector;
      this._mgr.internalValue = value.mgr;
      this._mon.internalValue = value.mon;
      this._monitoring.internalValue = value.monitoring;
      this._network.internalValue = value.network;
      this._placement = value.placement;
      this._priorityClassNames = value.priorityClassNames;
      this._removeOsDsIfOutAndSafeToRemove = value.removeOsDsIfOutAndSafeToRemove;
      this._resources = value.resources;
      this._security.internalValue = value.security;
      this._skipUpgradeChecks = value.skipUpgradeChecks;
      this._storage.internalValue = value.storage;
      this._upgradeOsdRequiresHealthyPGs = value.upgradeOsdRequiresHealthyPGs;
      this._waitTimeoutForHealthyOsdInMinutes = value.waitTimeoutForHealthyOsdInMinutes;
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

  // ceph_config - computed: false, optional: true, required: false
  private _cephConfig?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable; 
  public get cephConfig() {
    return this.interpolationForAttribute('ceph_config');
  }
  public set cephConfig(value: { [key: string]: { [key: string]: string } } | cdktf.IResolvable) {
    this._cephConfig = value;
  }
  public resetCephConfig() {
    this._cephConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cephConfigInput() {
    return this._cephConfig;
  }

  // ceph_version - computed: false, optional: true, required: false
  private _cephVersion = new DataK8SCephRookIoCephClusterV1ManifestSpecCephVersionOutputReference(this, "ceph_version");
  public get cephVersion() {
    return this._cephVersion;
  }
  public putCephVersion(value: DataK8SCephRookIoCephClusterV1ManifestSpecCephVersion) {
    this._cephVersion.internalValue = value;
  }
  public resetCephVersion() {
    this._cephVersion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cephVersionInput() {
    return this._cephVersion.internalValue;
  }

  // cleanup_policy - computed: false, optional: true, required: false
  private _cleanupPolicy = new DataK8SCephRookIoCephClusterV1ManifestSpecCleanupPolicyOutputReference(this, "cleanup_policy");
  public get cleanupPolicy() {
    return this._cleanupPolicy;
  }
  public putCleanupPolicy(value: DataK8SCephRookIoCephClusterV1ManifestSpecCleanupPolicy) {
    this._cleanupPolicy.internalValue = value;
  }
  public resetCleanupPolicy() {
    this._cleanupPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupPolicyInput() {
    return this._cleanupPolicy.internalValue;
  }

  // continue_upgrade_after_checks_even_if_not_healthy - computed: false, optional: true, required: false
  private _continueUpgradeAfterChecksEvenIfNotHealthy?: boolean | cdktf.IResolvable; 
  public get continueUpgradeAfterChecksEvenIfNotHealthy() {
    return this.getBooleanAttribute('continue_upgrade_after_checks_even_if_not_healthy');
  }
  public set continueUpgradeAfterChecksEvenIfNotHealthy(value: boolean | cdktf.IResolvable) {
    this._continueUpgradeAfterChecksEvenIfNotHealthy = value;
  }
  public resetContinueUpgradeAfterChecksEvenIfNotHealthy() {
    this._continueUpgradeAfterChecksEvenIfNotHealthy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueUpgradeAfterChecksEvenIfNotHealthyInput() {
    return this._continueUpgradeAfterChecksEvenIfNotHealthy;
  }

  // crash_collector - computed: false, optional: true, required: false
  private _crashCollector = new DataK8SCephRookIoCephClusterV1ManifestSpecCrashCollectorOutputReference(this, "crash_collector");
  public get crashCollector() {
    return this._crashCollector;
  }
  public putCrashCollector(value: DataK8SCephRookIoCephClusterV1ManifestSpecCrashCollector) {
    this._crashCollector.internalValue = value;
  }
  public resetCrashCollector() {
    this._crashCollector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crashCollectorInput() {
    return this._crashCollector.internalValue;
  }

  // csi - computed: false, optional: true, required: false
  private _csi = new DataK8SCephRookIoCephClusterV1ManifestSpecCsiOutputReference(this, "csi");
  public get csi() {
    return this._csi;
  }
  public putCsi(value: DataK8SCephRookIoCephClusterV1ManifestSpecCsi) {
    this._csi.internalValue = value;
  }
  public resetCsi() {
    this._csi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csiInput() {
    return this._csi.internalValue;
  }

  // dashboard - computed: false, optional: true, required: false
  private _dashboard = new DataK8SCephRookIoCephClusterV1ManifestSpecDashboardOutputReference(this, "dashboard");
  public get dashboard() {
    return this._dashboard;
  }
  public putDashboard(value: DataK8SCephRookIoCephClusterV1ManifestSpecDashboard) {
    this._dashboard.internalValue = value;
  }
  public resetDashboard() {
    this._dashboard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardInput() {
    return this._dashboard.internalValue;
  }

  // data_dir_host_path - computed: false, optional: true, required: false
  private _dataDirHostPath?: string; 
  public get dataDirHostPath() {
    return this.getStringAttribute('data_dir_host_path');
  }
  public set dataDirHostPath(value: string) {
    this._dataDirHostPath = value;
  }
  public resetDataDirHostPath() {
    this._dataDirHostPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDirHostPathInput() {
    return this._dataDirHostPath;
  }

  // disruption_management - computed: false, optional: true, required: false
  private _disruptionManagement = new DataK8SCephRookIoCephClusterV1ManifestSpecDisruptionManagementOutputReference(this, "disruption_management");
  public get disruptionManagement() {
    return this._disruptionManagement;
  }
  public putDisruptionManagement(value: DataK8SCephRookIoCephClusterV1ManifestSpecDisruptionManagement) {
    this._disruptionManagement.internalValue = value;
  }
  public resetDisruptionManagement() {
    this._disruptionManagement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disruptionManagementInput() {
    return this._disruptionManagement.internalValue;
  }

  // external - computed: false, optional: true, required: false
  private _external = new DataK8SCephRookIoCephClusterV1ManifestSpecExternalOutputReference(this, "external");
  public get external() {
    return this._external;
  }
  public putExternal(value: DataK8SCephRookIoCephClusterV1ManifestSpecExternal) {
    this._external.internalValue = value;
  }
  public resetExternal() {
    this._external.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external.internalValue;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck = new DataK8SCephRookIoCephClusterV1ManifestSpecHealthCheckOutputReference(this, "health_check");
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: DataK8SCephRookIoCephClusterV1ManifestSpecHealthCheck) {
    this._healthCheck.internalValue = value;
  }
  public resetHealthCheck() {
    this._healthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck.internalValue;
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

  // log_collector - computed: false, optional: true, required: false
  private _logCollector = new DataK8SCephRookIoCephClusterV1ManifestSpecLogCollectorOutputReference(this, "log_collector");
  public get logCollector() {
    return this._logCollector;
  }
  public putLogCollector(value: DataK8SCephRookIoCephClusterV1ManifestSpecLogCollector) {
    this._logCollector.internalValue = value;
  }
  public resetLogCollector() {
    this._logCollector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logCollectorInput() {
    return this._logCollector.internalValue;
  }

  // mgr - computed: false, optional: true, required: false
  private _mgr = new DataK8SCephRookIoCephClusterV1ManifestSpecMgrOutputReference(this, "mgr");
  public get mgr() {
    return this._mgr;
  }
  public putMgr(value: DataK8SCephRookIoCephClusterV1ManifestSpecMgr) {
    this._mgr.internalValue = value;
  }
  public resetMgr() {
    this._mgr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgrInput() {
    return this._mgr.internalValue;
  }

  // mon - computed: false, optional: true, required: false
  private _mon = new DataK8SCephRookIoCephClusterV1ManifestSpecMonOutputReference(this, "mon");
  public get mon() {
    return this._mon;
  }
  public putMon(value: DataK8SCephRookIoCephClusterV1ManifestSpecMon) {
    this._mon.internalValue = value;
  }
  public resetMon() {
    this._mon.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monInput() {
    return this._mon.internalValue;
  }

  // monitoring - computed: false, optional: true, required: false
  private _monitoring = new DataK8SCephRookIoCephClusterV1ManifestSpecMonitoringOutputReference(this, "monitoring");
  public get monitoring() {
    return this._monitoring;
  }
  public putMonitoring(value: DataK8SCephRookIoCephClusterV1ManifestSpecMonitoring) {
    this._monitoring.internalValue = value;
  }
  public resetMonitoring() {
    this._monitoring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringInput() {
    return this._monitoring.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new DataK8SCephRookIoCephClusterV1ManifestSpecNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: DataK8SCephRookIoCephClusterV1ManifestSpecNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // placement - computed: false, optional: true, required: false
  private _placement?: { [key: string]: string }; 
  public get placement() {
    return this.getStringMapAttribute('placement');
  }
  public set placement(value: { [key: string]: string }) {
    this._placement = value;
  }
  public resetPlacement() {
    this._placement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInput() {
    return this._placement;
  }

  // priority_class_names - computed: false, optional: true, required: false
  private _priorityClassNames?: { [key: string]: string }; 
  public get priorityClassNames() {
    return this.getStringMapAttribute('priority_class_names');
  }
  public set priorityClassNames(value: { [key: string]: string }) {
    this._priorityClassNames = value;
  }
  public resetPriorityClassNames() {
    this._priorityClassNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityClassNamesInput() {
    return this._priorityClassNames;
  }

  // remove_os_ds_if_out_and_safe_to_remove - computed: false, optional: true, required: false
  private _removeOsDsIfOutAndSafeToRemove?: boolean | cdktf.IResolvable; 
  public get removeOsDsIfOutAndSafeToRemove() {
    return this.getBooleanAttribute('remove_os_ds_if_out_and_safe_to_remove');
  }
  public set removeOsDsIfOutAndSafeToRemove(value: boolean | cdktf.IResolvable) {
    this._removeOsDsIfOutAndSafeToRemove = value;
  }
  public resetRemoveOsDsIfOutAndSafeToRemove() {
    this._removeOsDsIfOutAndSafeToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeOsDsIfOutAndSafeToRemoveInput() {
    return this._removeOsDsIfOutAndSafeToRemove;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: { [key: string]: string }; 
  public get resources() {
    return this.getStringMapAttribute('resources');
  }
  public set resources(value: { [key: string]: string }) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // security - computed: false, optional: true, required: false
  private _security = new DataK8SCephRookIoCephClusterV1ManifestSpecSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: DataK8SCephRookIoCephClusterV1ManifestSpecSecurity) {
    this._security.internalValue = value;
  }
  public resetSecurity() {
    this._security.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }

  // skip_upgrade_checks - computed: false, optional: true, required: false
  private _skipUpgradeChecks?: boolean | cdktf.IResolvable; 
  public get skipUpgradeChecks() {
    return this.getBooleanAttribute('skip_upgrade_checks');
  }
  public set skipUpgradeChecks(value: boolean | cdktf.IResolvable) {
    this._skipUpgradeChecks = value;
  }
  public resetSkipUpgradeChecks() {
    this._skipUpgradeChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipUpgradeChecksInput() {
    return this._skipUpgradeChecks;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new DataK8SCephRookIoCephClusterV1ManifestSpecStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: DataK8SCephRookIoCephClusterV1ManifestSpecStorage) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // upgrade_osd_requires_healthy_p_gs - computed: false, optional: true, required: false
  private _upgradeOsdRequiresHealthyPGs?: boolean | cdktf.IResolvable; 
  public get upgradeOsdRequiresHealthyPGs() {
    return this.getBooleanAttribute('upgrade_osd_requires_healthy_p_gs');
  }
  public set upgradeOsdRequiresHealthyPGs(value: boolean | cdktf.IResolvable) {
    this._upgradeOsdRequiresHealthyPGs = value;
  }
  public resetUpgradeOsdRequiresHealthyPGs() {
    this._upgradeOsdRequiresHealthyPGs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeOsdRequiresHealthyPGsInput() {
    return this._upgradeOsdRequiresHealthyPGs;
  }

  // wait_timeout_for_healthy_osd_in_minutes - computed: false, optional: true, required: false
  private _waitTimeoutForHealthyOsdInMinutes?: number; 
  public get waitTimeoutForHealthyOsdInMinutes() {
    return this.getNumberAttribute('wait_timeout_for_healthy_osd_in_minutes');
  }
  public set waitTimeoutForHealthyOsdInMinutes(value: number) {
    this._waitTimeoutForHealthyOsdInMinutes = value;
  }
  public resetWaitTimeoutForHealthyOsdInMinutes() {
    this._waitTimeoutForHealthyOsdInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitTimeoutForHealthyOsdInMinutesInput() {
    return this._waitTimeoutForHealthyOsdInMinutes;
  }
}
