// https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/workloads
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIllumioCoreWorkloadsConfig extends cdktf.TerraformMetaArguments {
  /**
  * FQDN of the PCE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/workloads#agent_active_pce_fqdn DataIllumioCoreWorkloads#agent_active_pce_fqdn}
  */
  readonly agentActivePceFqdn?: string;
  /**
  * List of container cluster URIs, encoded as a JSON string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/workloads#container_clusters DataIllumioCoreWorkloads#container_clusters}
  */
  readonly containerClusters?: string;
  /**
  * Description of workload(s) to return. Supports partial matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/workloads#description DataIllumioCoreWorkloads#description}
  */
  readonly description?: string;
  /**
  * Enforcement mode of workload(s) to return. Allowed values are "idle", "visibility_only", "full" and "selective"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/workloads#enforcement_mode DataIllumioCoreWorkloads#enforcement_mode}
  */
  readonly enforcementMode?: string;
  /**
  * A unique identifier within the external data source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/workloads#external_data_reference DataIllumioCoreWorkloads#external_data_reference}
  */
  readonly externalDataReference?: string;
  /**
  * The data source from which a resource originates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/workloads#external_data_set DataIllumioCoreWorkloads#external_data_set}
  */
  readonly externalDataSet?: string;
  /**
  * Hostname of workload(s) to return. Supports partial matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/workloads#hostname DataIllumioCoreWorkloads#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/workloads#id DataIllumioCoreWorkloads#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Include deleted workloads
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/workloads#include_deleted DataIllumioCoreWorkloads#include_deleted}
  */
  readonly includeDeleted?: string;
  /**
  * IP address of workload(s) to return. Supports partial matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/workloads#ip_address DataIllumioCoreWorkloads#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * List of lists of label URIs, encoded as a JSON string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/workloads#labels DataIllumioCoreWorkloads#labels}
  */
  readonly labels?: string;
  /**
  * Greater than or equal to value for last heartbeat on timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/workloads#last_heartbeat_on_gte DataIllumioCoreWorkloads#last_heartbeat_on_gte}
  */
  readonly lastHeartbeatOnGte?: string;
  /**
  * Less than or equal to value for last heartbeat on timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/workloads#last_heartbeat_on_lte DataIllumioCoreWorkloads#last_heartbeat_on_lte}
  */
  readonly lastHeartbeatOnLte?: string;
  /**
  * Whether we want to log traffic events from this workload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/workloads#log_traffic DataIllumioCoreWorkloads#log_traffic}
  */
  readonly logTraffic?: string;
  /**
  * Return managed or unmanaged workloads using this filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/workloads#managed DataIllumioCoreWorkloads#managed}
  */
  readonly managed?: string;
  /**
  * Indicates whether to return all partially-matching names or only exact matches. Allowed values are "partial" and "exact". Default value: "partial"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/workloads#match_type DataIllumioCoreWorkloads#match_type}
  */
  readonly matchType?: string;
  /**
  * Maximum number of workloads to return. The integer should be a non-zero positive integer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/workloads#max_results DataIllumioCoreWorkloads#max_results}
  */
  readonly maxResults?: string;
  /**
  * Name of workload(s) to return. Supports partial matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/workloads#name DataIllumioCoreWorkloads#name}
  */
  readonly name?: string;
  /**
  * Return online/offline workloads using this filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/workloads#online DataIllumioCoreWorkloads#online}
  */
  readonly online?: string;
  /**
  * Operating System of workload(s) to return. Supports partial matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/workloads#os_id DataIllumioCoreWorkloads#os_id}
  */
  readonly osId?: string;
  /**
  * Policy of health of workload(s) to return. Allowed values are "active", "warning", "error" and "suspended"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/workloads#policy_health DataIllumioCoreWorkloads#policy_health}
  */
  readonly policyHealth?: string;
  /**
  * Advanced search option for workload based on policy sync state. Allowed value: "staged"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/workloads#security_policy_sync_state DataIllumioCoreWorkloads#security_policy_sync_state}
  */
  readonly securityPolicySyncState?: string;
  /**
  * Advanced search option for workload based on security policy update mode. Allowed values are "static" and "adaptive"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/workloads#security_policy_update_mode DataIllumioCoreWorkloads#security_policy_update_mode}
  */
  readonly securityPolicyUpdateMode?: string;
  /**
  * URI of VEN to filter by
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/workloads#ven DataIllumioCoreWorkloads#ven}
  */
  readonly ven?: string;
  /**
  * Filter by visibility level. Allowed values are "flow_full_detail", "flow_summary", "flow_drops", "flow_off" and "enhanced_data_collection"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/workloads#visibility_level DataIllumioCoreWorkloads#visibility_level}
  */
  readonly visibilityLevel?: string;
  /**
  * Greater than or equal to value for vulnerability_exposure_score
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/workloads#vulnerability_summary_vulnerability_exposure_score_gte DataIllumioCoreWorkloads#vulnerability_summary_vulnerability_exposure_score_gte}
  */
  readonly vulnerabilitySummaryVulnerabilityExposureScoreGte?: string;
  /**
  * Less than or equal to value for vulnerability_exposure_score
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/workloads#vulnerability_summary_vulnerability_exposure_score_lte DataIllumioCoreWorkloads#vulnerability_summary_vulnerability_exposure_score_lte}
  */
  readonly vulnerabilitySummaryVulnerabilityExposureScoreLte?: string;
}
export interface DataIllumioCoreWorkloadsItemsContainerCluster {
}

export function dataIllumioCoreWorkloadsItemsContainerClusterToTerraform(struct?: DataIllumioCoreWorkloadsItemsContainerCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreWorkloadsItemsContainerClusterToHclTerraform(struct?: DataIllumioCoreWorkloadsItemsContainerCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreWorkloadsItemsContainerClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIllumioCoreWorkloadsItemsContainerCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreWorkloadsItemsContainerCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataIllumioCoreWorkloadsItemsContainerClusterList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreWorkloadsItemsContainerClusterOutputReference {
    return new DataIllumioCoreWorkloadsItemsContainerClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesPortWideExposure {
}

export function dataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesPortWideExposureToTerraform(struct?: DataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesPortWideExposure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesPortWideExposureToHclTerraform(struct?: DataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesPortWideExposure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesPortWideExposureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesPortWideExposure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesPortWideExposure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // any - computed: true, optional: false, required: false
  public get any() {
    return this.getBooleanAttribute('any');
  }

  // ip_list - computed: true, optional: false, required: false
  public get ipList() {
    return this.getBooleanAttribute('ip_list');
  }
}

export class DataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesPortWideExposureList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesPortWideExposureOutputReference {
    return new DataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesPortWideExposureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesVulnerability {
}

export function dataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesVulnerabilityToTerraform(struct?: DataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesVulnerability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesVulnerabilityToHclTerraform(struct?: DataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesVulnerability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesVulnerabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesVulnerability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesVulnerability | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // score - computed: true, optional: false, required: false
  public get score() {
    return this.getNumberAttribute('score');
  }
}

export class DataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesVulnerabilityList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesVulnerabilityOutputReference {
    return new DataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesVulnerabilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesVulnerabilityReport {
}

export function dataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesVulnerabilityReportToTerraform(struct?: DataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesVulnerabilityReport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesVulnerabilityReportToHclTerraform(struct?: DataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesVulnerabilityReport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesVulnerabilityReportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesVulnerabilityReport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesVulnerabilityReport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }
}

export class DataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesVulnerabilityReportList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesVulnerabilityReportOutputReference {
    return new DataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesVulnerabilityReportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesWorkload {
}

export function dataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesWorkloadToTerraform(struct?: DataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesWorkload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesWorkloadToHclTerraform(struct?: DataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesWorkload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesWorkloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesWorkload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesWorkload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }
}

export class DataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesWorkloadList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesWorkloadOutputReference {
    return new DataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesWorkloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreWorkloadsItemsDetectedVulnerabilities {
}

export function dataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesToTerraform(struct?: DataIllumioCoreWorkloadsItemsDetectedVulnerabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesToHclTerraform(struct?: DataIllumioCoreWorkloadsItemsDetectedVulnerabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIllumioCoreWorkloadsItemsDetectedVulnerabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreWorkloadsItemsDetectedVulnerabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // port_exposure - computed: true, optional: false, required: false
  public get portExposure() {
    return this.getNumberAttribute('port_exposure');
  }

  // port_wide_exposure - computed: true, optional: false, required: false
  private _portWideExposure = new DataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesPortWideExposureList(this, "port_wide_exposure", false);
  public get portWideExposure() {
    return this._portWideExposure;
  }

  // proto - computed: true, optional: false, required: false
  public get proto() {
    return this.getNumberAttribute('proto');
  }

  // vulnerability - computed: true, optional: false, required: false
  private _vulnerability = new DataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesVulnerabilityList(this, "vulnerability", false);
  public get vulnerability() {
    return this._vulnerability;
  }

  // vulnerability_report - computed: true, optional: false, required: false
  private _vulnerabilityReport = new DataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesVulnerabilityReportList(this, "vulnerability_report", false);
  public get vulnerabilityReport() {
    return this._vulnerabilityReport;
  }

  // workload - computed: true, optional: false, required: false
  private _workload = new DataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesWorkloadList(this, "workload", false);
  public get workload() {
    return this._workload;
  }
}

export class DataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesOutputReference {
    return new DataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreWorkloadsItemsFirewallCoexistence {
}

export function dataIllumioCoreWorkloadsItemsFirewallCoexistenceToTerraform(struct?: DataIllumioCoreWorkloadsItemsFirewallCoexistence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreWorkloadsItemsFirewallCoexistenceToHclTerraform(struct?: DataIllumioCoreWorkloadsItemsFirewallCoexistence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreWorkloadsItemsFirewallCoexistenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIllumioCoreWorkloadsItemsFirewallCoexistence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreWorkloadsItemsFirewallCoexistence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // illumio_primary - computed: true, optional: false, required: false
  public get illumioPrimary() {
    return this.getBooleanAttribute('illumio_primary');
  }
}

export class DataIllumioCoreWorkloadsItemsFirewallCoexistenceList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreWorkloadsItemsFirewallCoexistenceOutputReference {
    return new DataIllumioCoreWorkloadsItemsFirewallCoexistenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreWorkloadsItemsInterfaces {
}

export function dataIllumioCoreWorkloadsItemsInterfacesToTerraform(struct?: DataIllumioCoreWorkloadsItemsInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreWorkloadsItemsInterfacesToHclTerraform(struct?: DataIllumioCoreWorkloadsItemsInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreWorkloadsItemsInterfacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIllumioCoreWorkloadsItemsInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreWorkloadsItemsInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // cidr_block - computed: true, optional: false, required: false
  public get cidrBlock() {
    return this.getNumberAttribute('cidr_block');
  }

  // default_gateway_address - computed: true, optional: false, required: false
  public get defaultGatewayAddress() {
    return this.getStringAttribute('default_gateway_address');
  }

  // friendly_name - computed: true, optional: false, required: false
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }

  // link_state - computed: true, optional: false, required: false
  public get linkState() {
    return this.getStringAttribute('link_state');
  }

  // loopback - computed: true, optional: false, required: false
  public get loopback() {
    return this.getBooleanAttribute('loopback');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network - computed: true, optional: false, required: false
  private _network = new cdktf.StringMap(this, "network");
  public get network() {
    return this._network;
  }

  // network_detection_mode - computed: true, optional: false, required: false
  public get networkDetectionMode() {
    return this.getStringAttribute('network_detection_mode');
  }
}

export class DataIllumioCoreWorkloadsItemsInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreWorkloadsItemsInterfacesOutputReference {
    return new DataIllumioCoreWorkloadsItemsInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreWorkloadsItemsLabels {
}

export function dataIllumioCoreWorkloadsItemsLabelsToTerraform(struct?: DataIllumioCoreWorkloadsItemsLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreWorkloadsItemsLabelsToHclTerraform(struct?: DataIllumioCoreWorkloadsItemsLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreWorkloadsItemsLabelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIllumioCoreWorkloadsItemsLabels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreWorkloadsItemsLabels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataIllumioCoreWorkloadsItemsLabelsList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreWorkloadsItemsLabelsOutputReference {
    return new DataIllumioCoreWorkloadsItemsLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreWorkloadsItemsSelectivelyEnforcedServices {
}

export function dataIllumioCoreWorkloadsItemsSelectivelyEnforcedServicesToTerraform(struct?: DataIllumioCoreWorkloadsItemsSelectivelyEnforcedServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreWorkloadsItemsSelectivelyEnforcedServicesToHclTerraform(struct?: DataIllumioCoreWorkloadsItemsSelectivelyEnforcedServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreWorkloadsItemsSelectivelyEnforcedServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIllumioCoreWorkloadsItemsSelectivelyEnforcedServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreWorkloadsItemsSelectivelyEnforcedServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // proto - computed: true, optional: false, required: false
  public get proto() {
    return this.getNumberAttribute('proto');
  }

  // to_port - computed: true, optional: false, required: false
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
}

export class DataIllumioCoreWorkloadsItemsSelectivelyEnforcedServicesList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreWorkloadsItemsSelectivelyEnforcedServicesOutputReference {
    return new DataIllumioCoreWorkloadsItemsSelectivelyEnforcedServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreWorkloadsItemsServicesOpenServicePorts {
}

export function dataIllumioCoreWorkloadsItemsServicesOpenServicePortsToTerraform(struct?: DataIllumioCoreWorkloadsItemsServicesOpenServicePorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreWorkloadsItemsServicesOpenServicePortsToHclTerraform(struct?: DataIllumioCoreWorkloadsItemsServicesOpenServicePorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreWorkloadsItemsServicesOpenServicePortsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIllumioCoreWorkloadsItemsServicesOpenServicePorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreWorkloadsItemsServicesOpenServicePorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // package - computed: true, optional: false, required: false
  public get package() {
    return this.getStringAttribute('package');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // process_name - computed: true, optional: false, required: false
  public get processName() {
    return this.getStringAttribute('process_name');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getNumberAttribute('protocol');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }

  // win_service_name - computed: true, optional: false, required: false
  public get winServiceName() {
    return this.getStringAttribute('win_service_name');
  }
}

export class DataIllumioCoreWorkloadsItemsServicesOpenServicePortsList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreWorkloadsItemsServicesOpenServicePortsOutputReference {
    return new DataIllumioCoreWorkloadsItemsServicesOpenServicePortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreWorkloadsItemsServices {
}

export function dataIllumioCoreWorkloadsItemsServicesToTerraform(struct?: DataIllumioCoreWorkloadsItemsServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreWorkloadsItemsServicesToHclTerraform(struct?: DataIllumioCoreWorkloadsItemsServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreWorkloadsItemsServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIllumioCoreWorkloadsItemsServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreWorkloadsItemsServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // open_service_ports - computed: true, optional: false, required: false
  private _openServicePorts = new DataIllumioCoreWorkloadsItemsServicesOpenServicePortsList(this, "open_service_ports", false);
  public get openServicePorts() {
    return this._openServicePorts;
  }

  // uptime_seconds - computed: true, optional: false, required: false
  public get uptimeSeconds() {
    return this.getNumberAttribute('uptime_seconds');
  }
}

export class DataIllumioCoreWorkloadsItemsServicesList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreWorkloadsItemsServicesOutputReference {
    return new DataIllumioCoreWorkloadsItemsServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreWorkloadsItemsVulnerabilitiesSummaryVulnerablePortWideExposure {
}

export function dataIllumioCoreWorkloadsItemsVulnerabilitiesSummaryVulnerablePortWideExposureToTerraform(struct?: DataIllumioCoreWorkloadsItemsVulnerabilitiesSummaryVulnerablePortWideExposure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreWorkloadsItemsVulnerabilitiesSummaryVulnerablePortWideExposureToHclTerraform(struct?: DataIllumioCoreWorkloadsItemsVulnerabilitiesSummaryVulnerablePortWideExposure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreWorkloadsItemsVulnerabilitiesSummaryVulnerablePortWideExposureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIllumioCoreWorkloadsItemsVulnerabilitiesSummaryVulnerablePortWideExposure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreWorkloadsItemsVulnerabilitiesSummaryVulnerablePortWideExposure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // any - computed: true, optional: false, required: false
  public get any() {
    return this.getBooleanAttribute('any');
  }

  // ip_list - computed: true, optional: false, required: false
  public get ipList() {
    return this.getBooleanAttribute('ip_list');
  }
}

export class DataIllumioCoreWorkloadsItemsVulnerabilitiesSummaryVulnerablePortWideExposureList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreWorkloadsItemsVulnerabilitiesSummaryVulnerablePortWideExposureOutputReference {
    return new DataIllumioCoreWorkloadsItemsVulnerabilitiesSummaryVulnerablePortWideExposureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreWorkloadsItemsVulnerabilitiesSummary {
}

export function dataIllumioCoreWorkloadsItemsVulnerabilitiesSummaryToTerraform(struct?: DataIllumioCoreWorkloadsItemsVulnerabilitiesSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreWorkloadsItemsVulnerabilitiesSummaryToHclTerraform(struct?: DataIllumioCoreWorkloadsItemsVulnerabilitiesSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreWorkloadsItemsVulnerabilitiesSummaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIllumioCoreWorkloadsItemsVulnerabilitiesSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreWorkloadsItemsVulnerabilitiesSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_vulnerability_score - computed: true, optional: false, required: false
  public get maxVulnerabilityScore() {
    return this.getNumberAttribute('max_vulnerability_score');
  }

  // num_vulnerabilities - computed: true, optional: false, required: false
  public get numVulnerabilities() {
    return this.getNumberAttribute('num_vulnerabilities');
  }

  // vulnerability_exposure_score - computed: true, optional: false, required: false
  public get vulnerabilityExposureScore() {
    return this.getNumberAttribute('vulnerability_exposure_score');
  }

  // vulnerability_score - computed: true, optional: false, required: false
  public get vulnerabilityScore() {
    return this.getNumberAttribute('vulnerability_score');
  }

  // vulnerable_port_exposure - computed: true, optional: false, required: false
  public get vulnerablePortExposure() {
    return this.getNumberAttribute('vulnerable_port_exposure');
  }

  // vulnerable_port_wide_exposure - computed: true, optional: false, required: false
  private _vulnerablePortWideExposure = new DataIllumioCoreWorkloadsItemsVulnerabilitiesSummaryVulnerablePortWideExposureList(this, "vulnerable_port_wide_exposure", false);
  public get vulnerablePortWideExposure() {
    return this._vulnerablePortWideExposure;
  }
}

export class DataIllumioCoreWorkloadsItemsVulnerabilitiesSummaryList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreWorkloadsItemsVulnerabilitiesSummaryOutputReference {
    return new DataIllumioCoreWorkloadsItemsVulnerabilitiesSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreWorkloadsItems {
}

export function dataIllumioCoreWorkloadsItemsToTerraform(struct?: DataIllumioCoreWorkloadsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreWorkloadsItemsToHclTerraform(struct?: DataIllumioCoreWorkloadsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreWorkloadsItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIllumioCoreWorkloadsItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreWorkloadsItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_to_pce_certificate_authentication_id - computed: true, optional: false, required: false
  public get agentToPceCertificateAuthenticationId() {
    return this.getStringAttribute('agent_to_pce_certificate_authentication_id');
  }

  // blocked_connection_action - computed: true, optional: false, required: false
  public get blockedConnectionAction() {
    return this.getStringAttribute('blocked_connection_action');
  }

  // caps - computed: true, optional: false, required: false
  public get caps() {
    return this.getListAttribute('caps');
  }

  // container_cluster - computed: true, optional: false, required: false
  private _containerCluster = new DataIllumioCoreWorkloadsItemsContainerClusterList(this, "container_cluster", false);
  public get containerCluster() {
    return this._containerCluster;
  }

  // containers_inherit_host_policy - computed: true, optional: false, required: false
  public get containersInheritHostPolicy() {
    return this.getBooleanAttribute('containers_inherit_host_policy');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  private _createdBy = new cdktf.StringMap(this, "created_by");
  public get createdBy() {
    return this._createdBy;
  }

  // data_center - computed: true, optional: false, required: false
  public get dataCenter() {
    return this.getStringAttribute('data_center');
  }

  // data_center_zone - computed: true, optional: false, required: false
  public get dataCenterZone() {
    return this.getStringAttribute('data_center_zone');
  }

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getBooleanAttribute('deleted');
  }

  // deleted_at - computed: true, optional: false, required: false
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
  }

  // deleted_by - computed: true, optional: false, required: false
  private _deletedBy = new cdktf.StringMap(this, "deleted_by");
  public get deletedBy() {
    return this._deletedBy;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // detected_vulnerabilities - computed: true, optional: false, required: false
  private _detectedVulnerabilities = new DataIllumioCoreWorkloadsItemsDetectedVulnerabilitiesList(this, "detected_vulnerabilities", false);
  public get detectedVulnerabilities() {
    return this._detectedVulnerabilities;
  }

  // distinguished_name - computed: true, optional: false, required: false
  public get distinguishedName() {
    return this.getStringAttribute('distinguished_name');
  }

  // enforcement_mode - computed: true, optional: false, required: false
  public get enforcementMode() {
    return this.getStringAttribute('enforcement_mode');
  }

  // external_data_reference - computed: true, optional: false, required: false
  public get externalDataReference() {
    return this.getStringAttribute('external_data_reference');
  }

  // external_data_set - computed: true, optional: false, required: false
  public get externalDataSet() {
    return this.getStringAttribute('external_data_set');
  }

  // firewall_coexistence - computed: true, optional: false, required: false
  private _firewallCoexistence = new DataIllumioCoreWorkloadsItemsFirewallCoexistenceList(this, "firewall_coexistence", false);
  public get firewallCoexistence() {
    return this._firewallCoexistence;
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // ignored_interface_names - computed: true, optional: false, required: false
  public get ignoredInterfaceNames() {
    return this.getListAttribute('ignored_interface_names');
  }

  // ike_authentication_certificate - computed: true, optional: false, required: false
  private _ikeAuthenticationCertificate = new cdktf.StringMap(this, "ike_authentication_certificate");
  public get ikeAuthenticationCertificate() {
    return this._ikeAuthenticationCertificate;
  }

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new DataIllumioCoreWorkloadsItemsInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new DataIllumioCoreWorkloadsItemsLabelsList(this, "labels", false);
  public get labels() {
    return this._labels;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // online - computed: true, optional: false, required: false
  public get online() {
    return this.getBooleanAttribute('online');
  }

  // os_detail - computed: true, optional: false, required: false
  public get osDetail() {
    return this.getStringAttribute('os_detail');
  }

  // os_id - computed: true, optional: false, required: false
  public get osId() {
    return this.getStringAttribute('os_id');
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // selectively_enforced_services - computed: true, optional: false, required: false
  private _selectivelyEnforcedServices = new DataIllumioCoreWorkloadsItemsSelectivelyEnforcedServicesList(this, "selectively_enforced_services", false);
  public get selectivelyEnforcedServices() {
    return this._selectivelyEnforcedServices;
  }

  // service_principal_name - computed: true, optional: false, required: false
  public get servicePrincipalName() {
    return this.getStringAttribute('service_principal_name');
  }

  // service_provider - computed: true, optional: false, required: false
  public get serviceProvider() {
    return this.getStringAttribute('service_provider');
  }

  // services - computed: true, optional: false, required: false
  private _services = new DataIllumioCoreWorkloadsItemsServicesList(this, "services", false);
  public get services() {
    return this._services;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  private _updatedBy = new cdktf.StringMap(this, "updated_by");
  public get updatedBy() {
    return this._updatedBy;
  }

  // ven - computed: true, optional: false, required: false
  private _ven = new cdktf.StringMap(this, "ven");
  public get ven() {
    return this._ven;
  }

  // visibility_level - computed: true, optional: false, required: false
  public get visibilityLevel() {
    return this.getStringAttribute('visibility_level');
  }

  // vulnerabilities_summary - computed: true, optional: false, required: false
  private _vulnerabilitiesSummary = new DataIllumioCoreWorkloadsItemsVulnerabilitiesSummaryList(this, "vulnerabilities_summary", false);
  public get vulnerabilitiesSummary() {
    return this._vulnerabilitiesSummary;
  }
}

export class DataIllumioCoreWorkloadsItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreWorkloadsItemsOutputReference {
    return new DataIllumioCoreWorkloadsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/workloads illumio-core_workloads}
*/
export class DataIllumioCoreWorkloads extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "illumio-core_workloads";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIllumioCoreWorkloads resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIllumioCoreWorkloads to import
  * @param importFromId The id of the existing DataIllumioCoreWorkloads that should be imported. Refer to the {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/workloads#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIllumioCoreWorkloads to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "illumio-core_workloads", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/workloads illumio-core_workloads} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIllumioCoreWorkloadsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIllumioCoreWorkloadsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'illumio-core_workloads',
      terraformGeneratorMetadata: {
        providerName: 'illumio-core',
        providerVersion: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agentActivePceFqdn = config.agentActivePceFqdn;
    this._containerClusters = config.containerClusters;
    this._description = config.description;
    this._enforcementMode = config.enforcementMode;
    this._externalDataReference = config.externalDataReference;
    this._externalDataSet = config.externalDataSet;
    this._hostname = config.hostname;
    this._id = config.id;
    this._includeDeleted = config.includeDeleted;
    this._ipAddress = config.ipAddress;
    this._labels = config.labels;
    this._lastHeartbeatOnGte = config.lastHeartbeatOnGte;
    this._lastHeartbeatOnLte = config.lastHeartbeatOnLte;
    this._logTraffic = config.logTraffic;
    this._managed = config.managed;
    this._matchType = config.matchType;
    this._maxResults = config.maxResults;
    this._name = config.name;
    this._online = config.online;
    this._osId = config.osId;
    this._policyHealth = config.policyHealth;
    this._securityPolicySyncState = config.securityPolicySyncState;
    this._securityPolicyUpdateMode = config.securityPolicyUpdateMode;
    this._ven = config.ven;
    this._visibilityLevel = config.visibilityLevel;
    this._vulnerabilitySummaryVulnerabilityExposureScoreGte = config.vulnerabilitySummaryVulnerabilityExposureScoreGte;
    this._vulnerabilitySummaryVulnerabilityExposureScoreLte = config.vulnerabilitySummaryVulnerabilityExposureScoreLte;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_active_pce_fqdn - computed: false, optional: true, required: false
  private _agentActivePceFqdn?: string; 
  public get agentActivePceFqdn() {
    return this.getStringAttribute('agent_active_pce_fqdn');
  }
  public set agentActivePceFqdn(value: string) {
    this._agentActivePceFqdn = value;
  }
  public resetAgentActivePceFqdn() {
    this._agentActivePceFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentActivePceFqdnInput() {
    return this._agentActivePceFqdn;
  }

  // container_clusters - computed: false, optional: true, required: false
  private _containerClusters?: string; 
  public get containerClusters() {
    return this.getStringAttribute('container_clusters');
  }
  public set containerClusters(value: string) {
    this._containerClusters = value;
  }
  public resetContainerClusters() {
    this._containerClusters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerClustersInput() {
    return this._containerClusters;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enforcement_mode - computed: false, optional: true, required: false
  private _enforcementMode?: string; 
  public get enforcementMode() {
    return this.getStringAttribute('enforcement_mode');
  }
  public set enforcementMode(value: string) {
    this._enforcementMode = value;
  }
  public resetEnforcementMode() {
    this._enforcementMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementModeInput() {
    return this._enforcementMode;
  }

  // external_data_reference - computed: false, optional: true, required: false
  private _externalDataReference?: string; 
  public get externalDataReference() {
    return this.getStringAttribute('external_data_reference');
  }
  public set externalDataReference(value: string) {
    this._externalDataReference = value;
  }
  public resetExternalDataReference() {
    this._externalDataReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDataReferenceInput() {
    return this._externalDataReference;
  }

  // external_data_set - computed: false, optional: true, required: false
  private _externalDataSet?: string; 
  public get externalDataSet() {
    return this.getStringAttribute('external_data_set');
  }
  public set externalDataSet(value: string) {
    this._externalDataSet = value;
  }
  public resetExternalDataSet() {
    this._externalDataSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDataSetInput() {
    return this._externalDataSet;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // include_deleted - computed: false, optional: true, required: false
  private _includeDeleted?: string; 
  public get includeDeleted() {
    return this.getStringAttribute('include_deleted');
  }
  public set includeDeleted(value: string) {
    this._includeDeleted = value;
  }
  public resetIncludeDeleted() {
    this._includeDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDeletedInput() {
    return this._includeDeleted;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataIllumioCoreWorkloadsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string; 
  public get labels() {
    return this.getStringAttribute('labels');
  }
  public set labels(value: string) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // last_heartbeat_on_gte - computed: false, optional: true, required: false
  private _lastHeartbeatOnGte?: string; 
  public get lastHeartbeatOnGte() {
    return this.getStringAttribute('last_heartbeat_on_gte');
  }
  public set lastHeartbeatOnGte(value: string) {
    this._lastHeartbeatOnGte = value;
  }
  public resetLastHeartbeatOnGte() {
    this._lastHeartbeatOnGte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastHeartbeatOnGteInput() {
    return this._lastHeartbeatOnGte;
  }

  // last_heartbeat_on_lte - computed: false, optional: true, required: false
  private _lastHeartbeatOnLte?: string; 
  public get lastHeartbeatOnLte() {
    return this.getStringAttribute('last_heartbeat_on_lte');
  }
  public set lastHeartbeatOnLte(value: string) {
    this._lastHeartbeatOnLte = value;
  }
  public resetLastHeartbeatOnLte() {
    this._lastHeartbeatOnLte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastHeartbeatOnLteInput() {
    return this._lastHeartbeatOnLte;
  }

  // log_traffic - computed: false, optional: true, required: false
  private _logTraffic?: string; 
  public get logTraffic() {
    return this.getStringAttribute('log_traffic');
  }
  public set logTraffic(value: string) {
    this._logTraffic = value;
  }
  public resetLogTraffic() {
    this._logTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTrafficInput() {
    return this._logTraffic;
  }

  // managed - computed: false, optional: true, required: false
  private _managed?: string; 
  public get managed() {
    return this.getStringAttribute('managed');
  }
  public set managed(value: string) {
    this._managed = value;
  }
  public resetManaged() {
    this._managed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInput() {
    return this._managed;
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // max_results - computed: false, optional: true, required: false
  private _maxResults?: string; 
  public get maxResults() {
    return this.getStringAttribute('max_results');
  }
  public set maxResults(value: string) {
    this._maxResults = value;
  }
  public resetMaxResults() {
    this._maxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultsInput() {
    return this._maxResults;
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

  // online - computed: false, optional: true, required: false
  private _online?: string; 
  public get online() {
    return this.getStringAttribute('online');
  }
  public set online(value: string) {
    this._online = value;
  }
  public resetOnline() {
    this._online = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlineInput() {
    return this._online;
  }

  // os_id - computed: false, optional: true, required: false
  private _osId?: string; 
  public get osId() {
    return this.getStringAttribute('os_id');
  }
  public set osId(value: string) {
    this._osId = value;
  }
  public resetOsId() {
    this._osId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osIdInput() {
    return this._osId;
  }

  // policy_health - computed: false, optional: true, required: false
  private _policyHealth?: string; 
  public get policyHealth() {
    return this.getStringAttribute('policy_health');
  }
  public set policyHealth(value: string) {
    this._policyHealth = value;
  }
  public resetPolicyHealth() {
    this._policyHealth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyHealthInput() {
    return this._policyHealth;
  }

  // security_policy_sync_state - computed: false, optional: true, required: false
  private _securityPolicySyncState?: string; 
  public get securityPolicySyncState() {
    return this.getStringAttribute('security_policy_sync_state');
  }
  public set securityPolicySyncState(value: string) {
    this._securityPolicySyncState = value;
  }
  public resetSecurityPolicySyncState() {
    this._securityPolicySyncState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicySyncStateInput() {
    return this._securityPolicySyncState;
  }

  // security_policy_update_mode - computed: false, optional: true, required: false
  private _securityPolicyUpdateMode?: string; 
  public get securityPolicyUpdateMode() {
    return this.getStringAttribute('security_policy_update_mode');
  }
  public set securityPolicyUpdateMode(value: string) {
    this._securityPolicyUpdateMode = value;
  }
  public resetSecurityPolicyUpdateMode() {
    this._securityPolicyUpdateMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyUpdateModeInput() {
    return this._securityPolicyUpdateMode;
  }

  // ven - computed: false, optional: true, required: false
  private _ven?: string; 
  public get ven() {
    return this.getStringAttribute('ven');
  }
  public set ven(value: string) {
    this._ven = value;
  }
  public resetVen() {
    this._ven = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get venInput() {
    return this._ven;
  }

  // visibility_level - computed: false, optional: true, required: false
  private _visibilityLevel?: string; 
  public get visibilityLevel() {
    return this.getStringAttribute('visibility_level');
  }
  public set visibilityLevel(value: string) {
    this._visibilityLevel = value;
  }
  public resetVisibilityLevel() {
    this._visibilityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityLevelInput() {
    return this._visibilityLevel;
  }

  // vulnerability_summary_vulnerability_exposure_score_gte - computed: false, optional: true, required: false
  private _vulnerabilitySummaryVulnerabilityExposureScoreGte?: string; 
  public get vulnerabilitySummaryVulnerabilityExposureScoreGte() {
    return this.getStringAttribute('vulnerability_summary_vulnerability_exposure_score_gte');
  }
  public set vulnerabilitySummaryVulnerabilityExposureScoreGte(value: string) {
    this._vulnerabilitySummaryVulnerabilityExposureScoreGte = value;
  }
  public resetVulnerabilitySummaryVulnerabilityExposureScoreGte() {
    this._vulnerabilitySummaryVulnerabilityExposureScoreGte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerabilitySummaryVulnerabilityExposureScoreGteInput() {
    return this._vulnerabilitySummaryVulnerabilityExposureScoreGte;
  }

  // vulnerability_summary_vulnerability_exposure_score_lte - computed: false, optional: true, required: false
  private _vulnerabilitySummaryVulnerabilityExposureScoreLte?: string; 
  public get vulnerabilitySummaryVulnerabilityExposureScoreLte() {
    return this.getStringAttribute('vulnerability_summary_vulnerability_exposure_score_lte');
  }
  public set vulnerabilitySummaryVulnerabilityExposureScoreLte(value: string) {
    this._vulnerabilitySummaryVulnerabilityExposureScoreLte = value;
  }
  public resetVulnerabilitySummaryVulnerabilityExposureScoreLte() {
    this._vulnerabilitySummaryVulnerabilityExposureScoreLte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerabilitySummaryVulnerabilityExposureScoreLteInput() {
    return this._vulnerabilitySummaryVulnerabilityExposureScoreLte;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_active_pce_fqdn: cdktf.stringToTerraform(this._agentActivePceFqdn),
      container_clusters: cdktf.stringToTerraform(this._containerClusters),
      description: cdktf.stringToTerraform(this._description),
      enforcement_mode: cdktf.stringToTerraform(this._enforcementMode),
      external_data_reference: cdktf.stringToTerraform(this._externalDataReference),
      external_data_set: cdktf.stringToTerraform(this._externalDataSet),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      include_deleted: cdktf.stringToTerraform(this._includeDeleted),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      labels: cdktf.stringToTerraform(this._labels),
      last_heartbeat_on_gte: cdktf.stringToTerraform(this._lastHeartbeatOnGte),
      last_heartbeat_on_lte: cdktf.stringToTerraform(this._lastHeartbeatOnLte),
      log_traffic: cdktf.stringToTerraform(this._logTraffic),
      managed: cdktf.stringToTerraform(this._managed),
      match_type: cdktf.stringToTerraform(this._matchType),
      max_results: cdktf.stringToTerraform(this._maxResults),
      name: cdktf.stringToTerraform(this._name),
      online: cdktf.stringToTerraform(this._online),
      os_id: cdktf.stringToTerraform(this._osId),
      policy_health: cdktf.stringToTerraform(this._policyHealth),
      security_policy_sync_state: cdktf.stringToTerraform(this._securityPolicySyncState),
      security_policy_update_mode: cdktf.stringToTerraform(this._securityPolicyUpdateMode),
      ven: cdktf.stringToTerraform(this._ven),
      visibility_level: cdktf.stringToTerraform(this._visibilityLevel),
      vulnerability_summary_vulnerability_exposure_score_gte: cdktf.stringToTerraform(this._vulnerabilitySummaryVulnerabilityExposureScoreGte),
      vulnerability_summary_vulnerability_exposure_score_lte: cdktf.stringToTerraform(this._vulnerabilitySummaryVulnerabilityExposureScoreLte),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_active_pce_fqdn: {
        value: cdktf.stringToHclTerraform(this._agentActivePceFqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_clusters: {
        value: cdktf.stringToHclTerraform(this._containerClusters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enforcement_mode: {
        value: cdktf.stringToHclTerraform(this._enforcementMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_data_reference: {
        value: cdktf.stringToHclTerraform(this._externalDataReference),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_data_set: {
        value: cdktf.stringToHclTerraform(this._externalDataSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_deleted: {
        value: cdktf.stringToHclTerraform(this._includeDeleted),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.stringToHclTerraform(this._labels),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_heartbeat_on_gte: {
        value: cdktf.stringToHclTerraform(this._lastHeartbeatOnGte),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_heartbeat_on_lte: {
        value: cdktf.stringToHclTerraform(this._lastHeartbeatOnLte),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_traffic: {
        value: cdktf.stringToHclTerraform(this._logTraffic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed: {
        value: cdktf.stringToHclTerraform(this._managed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_type: {
        value: cdktf.stringToHclTerraform(this._matchType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_results: {
        value: cdktf.stringToHclTerraform(this._maxResults),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      online: {
        value: cdktf.stringToHclTerraform(this._online),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_id: {
        value: cdktf.stringToHclTerraform(this._osId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_health: {
        value: cdktf.stringToHclTerraform(this._policyHealth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_policy_sync_state: {
        value: cdktf.stringToHclTerraform(this._securityPolicySyncState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_policy_update_mode: {
        value: cdktf.stringToHclTerraform(this._securityPolicyUpdateMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ven: {
        value: cdktf.stringToHclTerraform(this._ven),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      visibility_level: {
        value: cdktf.stringToHclTerraform(this._visibilityLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vulnerability_summary_vulnerability_exposure_score_gte: {
        value: cdktf.stringToHclTerraform(this._vulnerabilitySummaryVulnerabilityExposureScoreGte),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vulnerability_summary_vulnerability_exposure_score_lte: {
        value: cdktf.stringToHclTerraform(this._vulnerabilitySummaryVulnerabilityExposureScoreLte),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
