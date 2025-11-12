// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_worker
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciApmSyntheticsOnPremiseVantagePointWorkerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_worker#apm_domain_id DataOciApmSyntheticsOnPremiseVantagePointWorker#apm_domain_id}
  */
  readonly apmDomainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_worker#on_premise_vantage_point_id DataOciApmSyntheticsOnPremiseVantagePointWorker#on_premise_vantage_point_id}
  */
  readonly onPremiseVantagePointId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_worker#worker_id DataOciApmSyntheticsOnPremiseVantagePointWorker#worker_id}
  */
  readonly workerId: string;
}
export interface DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo {
}

export function dataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoToTerraform(struct?: DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoToHclTerraform(struct?: DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo | undefined) {
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

export class DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference {
    return new DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct {
}

export function dataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructToTerraform(struct?: DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructToHclTerraform(struct?: DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct | undefined) {
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

export class DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference {
    return new DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetails {
}

export function dataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsToTerraform(struct?: DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsToHclTerraform(struct?: DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetails | undefined) {
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

export class DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference {
    return new DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_worker oci_apm_synthetics_on_premise_vantage_point_worker}
*/
export class DataOciApmSyntheticsOnPremiseVantagePointWorker extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_apm_synthetics_on_premise_vantage_point_worker";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciApmSyntheticsOnPremiseVantagePointWorker resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciApmSyntheticsOnPremiseVantagePointWorker to import
  * @param importFromId The id of the existing DataOciApmSyntheticsOnPremiseVantagePointWorker that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_worker#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciApmSyntheticsOnPremiseVantagePointWorker to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_apm_synthetics_on_premise_vantage_point_worker", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_worker oci_apm_synthetics_on_premise_vantage_point_worker} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciApmSyntheticsOnPremiseVantagePointWorkerConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciApmSyntheticsOnPremiseVantagePointWorkerConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_apm_synthetics_on_premise_vantage_point_worker',
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
    this._onPremiseVantagePointId = config.onPremiseVantagePointId;
    this._workerId = config.workerId;
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
  private _identityInfo = new DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList(this, "identity_info", false);
  public get identityInfo() {
    return this._identityInfo;
  }

  // monitor_list - computed: true, optional: false, required: false
  private _monitorList = new DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList(this, "monitor_list", false);
  public get monitorList() {
    return this._monitorList;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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
  private _versionDetails = new DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList(this, "version_details", false);
  public get versionDetails() {
    return this._versionDetails;
  }

  // worker_id - computed: false, optional: false, required: true
  private _workerId?: string; 
  public get workerId() {
    return this.getStringAttribute('worker_id');
  }
  public set workerId(value: string) {
    this._workerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workerIdInput() {
    return this._workerId;
  }

  // worker_type - computed: true, optional: false, required: false
  public get workerType() {
    return this.getStringAttribute('worker_type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apm_domain_id: cdktf.stringToTerraform(this._apmDomainId),
      on_premise_vantage_point_id: cdktf.stringToTerraform(this._onPremiseVantagePointId),
      worker_id: cdktf.stringToTerraform(this._workerId),
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
      on_premise_vantage_point_id: {
        value: cdktf.stringToHclTerraform(this._onPremiseVantagePointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      worker_id: {
        value: cdktf.stringToHclTerraform(this._workerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
