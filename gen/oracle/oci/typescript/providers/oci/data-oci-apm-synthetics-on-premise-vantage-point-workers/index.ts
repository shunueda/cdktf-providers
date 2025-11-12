// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciApmSyntheticsOnPremiseVantagePointWorkersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#apm_domain_id DataOciApmSyntheticsOnPremiseVantagePointWorkers#apm_domain_id}
  */
  readonly apmDomainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#capability DataOciApmSyntheticsOnPremiseVantagePointWorkers#capability}
  */
  readonly capability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#display_name DataOciApmSyntheticsOnPremiseVantagePointWorkers#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#id DataOciApmSyntheticsOnPremiseVantagePointWorkers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#name DataOciApmSyntheticsOnPremiseVantagePointWorkers#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#on_premise_vantage_point_id DataOciApmSyntheticsOnPremiseVantagePointWorkers#on_premise_vantage_point_id}
  */
  readonly onPremiseVantagePointId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#status DataOciApmSyntheticsOnPremiseVantagePointWorkers#status}
  */
  readonly status?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#filter DataOciApmSyntheticsOnPremiseVantagePointWorkers#filter}
  */
  readonly filter?: DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter[] | cdktf.IResolvable;
}
export interface DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfo {
}

export function dataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoToTerraform(struct?: DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoToHclTerraform(struct?: DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apm_short_id - computed: true, optional: false, required: false
  public get apmShortId() {
    return this.getStringAttribute('apm_short_id');
  }

  // collector_end_point - computed: true, optional: false, required: false
  public get collectorEndPoint() {
    return this.getStringAttribute('collector_end_point');
  }

  // region_name - computed: true, optional: false, required: false
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
}

export class DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference {
    return new DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStruct {
}

export function dataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructToTerraform(struct?: DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructToHclTerraform(struct?: DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_run_now - computed: true, optional: false, required: false
  public get isRunNow() {
    return this.getBooleanAttribute('is_run_now');
  }

  // monitor_type - computed: true, optional: false, required: false
  public get monitorType() {
    return this.getStringAttribute('monitor_type');
  }

  // time_assigned - computed: true, optional: false, required: false
  public get timeAssigned() {
    return this.getStringAttribute('time_assigned');
  }
}

export class DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference {
    return new DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetails {
}

export function dataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsToTerraform(struct?: DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsToHclTerraform(struct?: DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // latest_version - computed: true, optional: false, required: false
  public get latestVersion() {
    return this.getStringAttribute('latest_version');
  }

  // min_supported_version - computed: true, optional: false, required: false
  public get minSupportedVersion() {
    return this.getStringAttribute('min_supported_version');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference {
    return new DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItems {
}

export function dataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsToTerraform(struct?: DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsToHclTerraform(struct?: DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apm_domain_id - computed: true, optional: false, required: false
  public get apmDomainId() {
    return this.getStringAttribute('apm_domain_id');
  }

  // configuration_details - computed: true, optional: false, required: false
  public get configurationDetails() {
    return this.getStringAttribute('configuration_details');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // geo_info - computed: true, optional: false, required: false
  public get geoInfo() {
    return this.getStringAttribute('geo_info');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_info - computed: true, optional: false, required: false
  private _identityInfo = new DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoList(this, "identity_info", false);
  public get identityInfo() {
    return this._identityInfo;
  }

  // monitor_list - computed: true, optional: false, required: false
  private _monitorList = new DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructList(this, "monitor_list", false);
  public get monitorList() {
    return this._monitorList;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // on_premise_vantage_point_id - computed: true, optional: false, required: false
  public get onPremiseVantagePointId() {
    return this.getStringAttribute('on_premise_vantage_point_id');
  }

  // opvp_id - computed: true, optional: false, required: false
  public get opvpId() {
    return this.getStringAttribute('opvp_id');
  }

  // opvp_name - computed: true, optional: false, required: false
  public get opvpName() {
    return this.getStringAttribute('opvp_name');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // resource_principal_token_public_key - computed: true, optional: false, required: false
  public get resourcePrincipalTokenPublicKey() {
    return this.getStringAttribute('resource_principal_token_public_key');
  }

  // runtime_id - computed: true, optional: false, required: false
  public get runtimeId() {
    return this.getStringAttribute('runtime_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_last_sync_up - computed: true, optional: false, required: false
  public get timeLastSyncUp() {
    return this.getStringAttribute('time_last_sync_up');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // version_details - computed: true, optional: false, required: false
  private _versionDetails = new DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsList(this, "version_details", false);
  public get versionDetails() {
    return this._versionDetails;
  }

  // worker_type - computed: true, optional: false, required: false
  public get workerType() {
    return this.getStringAttribute('worker_type');
  }
}

export class DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference {
    return new DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollection {
}

export function dataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionToTerraform(struct?: DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionToHclTerraform(struct?: DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference {
    return new DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#name DataOciApmSyntheticsOnPremiseVantagePointWorkers#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#regex DataOciApmSyntheticsOnPremiseVantagePointWorkers#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#values DataOciApmSyntheticsOnPremiseVantagePointWorkers#values}
  */
  readonly values: string[];
}

export function dataOciApmSyntheticsOnPremiseVantagePointWorkersFilterToTerraform(struct?: DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciApmSyntheticsOnPremiseVantagePointWorkersFilterToHclTerraform(struct?: DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter | cdktf.IResolvable): any {
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
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference {
    return new DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers oci_apm_synthetics_on_premise_vantage_point_workers}
*/
export class DataOciApmSyntheticsOnPremiseVantagePointWorkers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_apm_synthetics_on_premise_vantage_point_workers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciApmSyntheticsOnPremiseVantagePointWorkers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciApmSyntheticsOnPremiseVantagePointWorkers to import
  * @param importFromId The id of the existing DataOciApmSyntheticsOnPremiseVantagePointWorkers that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciApmSyntheticsOnPremiseVantagePointWorkers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_apm_synthetics_on_premise_vantage_point_workers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers oci_apm_synthetics_on_premise_vantage_point_workers} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciApmSyntheticsOnPremiseVantagePointWorkersConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciApmSyntheticsOnPremiseVantagePointWorkersConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_apm_synthetics_on_premise_vantage_point_workers',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apmDomainId = config.apmDomainId;
    this._capability = config.capability;
    this._displayName = config.displayName;
    this._id = config.id;
    this._name = config.name;
    this._onPremiseVantagePointId = config.onPremiseVantagePointId;
    this._status = config.status;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apm_domain_id - computed: false, optional: false, required: true
  private _apmDomainId?: string; 
  public get apmDomainId() {
    return this.getStringAttribute('apm_domain_id');
  }
  public set apmDomainId(value: string) {
    this._apmDomainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apmDomainIdInput() {
    return this._apmDomainId;
  }

  // capability - computed: false, optional: true, required: false
  private _capability?: string; 
  public get capability() {
    return this.getStringAttribute('capability');
  }
  public set capability(value: string) {
    this._capability = value;
  }
  public resetCapability() {
    this._capability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityInput() {
    return this._capability;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // on_premise_vantage_point_id - computed: false, optional: false, required: true
  private _onPremiseVantagePointId?: string; 
  public get onPremiseVantagePointId() {
    return this.getStringAttribute('on_premise_vantage_point_id');
  }
  public set onPremiseVantagePointId(value: string) {
    this._onPremiseVantagePointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremiseVantagePointIdInput() {
    return this._onPremiseVantagePointId;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // worker_collection - computed: true, optional: false, required: false
  private _workerCollection = new DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionList(this, "worker_collection", false);
  public get workerCollection() {
    return this._workerCollection;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apm_domain_id: cdktf.stringToTerraform(this._apmDomainId),
      capability: cdktf.stringToTerraform(this._capability),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      on_premise_vantage_point_id: cdktf.stringToTerraform(this._onPremiseVantagePointId),
      status: cdktf.stringToTerraform(this._status),
      filter: cdktf.listMapper(dataOciApmSyntheticsOnPremiseVantagePointWorkersFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apm_domain_id: {
        value: cdktf.stringToHclTerraform(this._apmDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capability: {
        value: cdktf.stringToHclTerraform(this._capability),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_premise_vantage_point_id: {
        value: cdktf.stringToHclTerraform(this._onPremiseVantagePointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciApmSyntheticsOnPremiseVantagePointWorkersFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
