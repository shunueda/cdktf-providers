// https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/data-sources/alert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataWavefrontAlertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/data-sources/alert#id DataWavefrontAlert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/data-sources/alert#targets DataWavefrontAlert#targets}
  */
  readonly targets?: { [key: string]: string };
}
export interface DataWavefrontAlertAlertTriageDashboardsParameters {
}

export function dataWavefrontAlertAlertTriageDashboardsParametersToTerraform(struct?: DataWavefrontAlertAlertTriageDashboardsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataWavefrontAlertAlertTriageDashboardsParametersToHclTerraform(struct?: DataWavefrontAlertAlertTriageDashboardsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataWavefrontAlertAlertTriageDashboardsParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataWavefrontAlertAlertTriageDashboardsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWavefrontAlertAlertTriageDashboardsParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // constants - computed: true, optional: false, required: false
  private _constants = new cdktf.StringMap(this, "constants");
  public get constants() {
    return this._constants;
  }
}

export class DataWavefrontAlertAlertTriageDashboardsParametersList extends cdktf.ComplexList {

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
  public get(index: number): DataWavefrontAlertAlertTriageDashboardsParametersOutputReference {
    return new DataWavefrontAlertAlertTriageDashboardsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataWavefrontAlertAlertTriageDashboards {
}

export function dataWavefrontAlertAlertTriageDashboardsToTerraform(struct?: DataWavefrontAlertAlertTriageDashboards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataWavefrontAlertAlertTriageDashboardsToHclTerraform(struct?: DataWavefrontAlertAlertTriageDashboards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataWavefrontAlertAlertTriageDashboardsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataWavefrontAlertAlertTriageDashboards | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWavefrontAlertAlertTriageDashboards | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dashboard_id - computed: true, optional: false, required: false
  public get dashboardId() {
    return this.getStringAttribute('dashboard_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new DataWavefrontAlertAlertTriageDashboardsParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
}

export class DataWavefrontAlertAlertTriageDashboardsList extends cdktf.ComplexList {

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
  public get(index: number): DataWavefrontAlertAlertTriageDashboardsOutputReference {
    return new DataWavefrontAlertAlertTriageDashboardsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataWavefrontAlertFailingHostLabelPairs {
}

export function dataWavefrontAlertFailingHostLabelPairsToTerraform(struct?: DataWavefrontAlertFailingHostLabelPairs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataWavefrontAlertFailingHostLabelPairsToHclTerraform(struct?: DataWavefrontAlertFailingHostLabelPairs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataWavefrontAlertFailingHostLabelPairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataWavefrontAlertFailingHostLabelPairs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWavefrontAlertFailingHostLabelPairs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // firing - computed: true, optional: false, required: false
  public get firing() {
    return this.getNumberAttribute('firing');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }
}

export class DataWavefrontAlertFailingHostLabelPairsList extends cdktf.ComplexList {

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
  public get(index: number): DataWavefrontAlertFailingHostLabelPairsOutputReference {
    return new DataWavefrontAlertFailingHostLabelPairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataWavefrontAlertInMaintenanceHostLabelPairs {
}

export function dataWavefrontAlertInMaintenanceHostLabelPairsToTerraform(struct?: DataWavefrontAlertInMaintenanceHostLabelPairs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataWavefrontAlertInMaintenanceHostLabelPairsToHclTerraform(struct?: DataWavefrontAlertInMaintenanceHostLabelPairs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataWavefrontAlertInMaintenanceHostLabelPairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataWavefrontAlertInMaintenanceHostLabelPairs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWavefrontAlertInMaintenanceHostLabelPairs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // firing - computed: true, optional: false, required: false
  public get firing() {
    return this.getNumberAttribute('firing');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }
}

export class DataWavefrontAlertInMaintenanceHostLabelPairsList extends cdktf.ComplexList {

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
  public get(index: number): DataWavefrontAlertInMaintenanceHostLabelPairsOutputReference {
    return new DataWavefrontAlertInMaintenanceHostLabelPairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/data-sources/alert wavefront_alert}
*/
export class DataWavefrontAlert extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "wavefront_alert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataWavefrontAlert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataWavefrontAlert to import
  * @param importFromId The id of the existing DataWavefrontAlert that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/data-sources/alert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataWavefrontAlert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "wavefront_alert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/data-sources/alert wavefront_alert} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataWavefrontAlertConfig
  */
  public constructor(scope: Construct, id: string, config: DataWavefrontAlertConfig) {
    super(scope, id, {
      terraformResourceType: 'wavefront_alert',
      terraformGeneratorMetadata: {
        providerName: 'wavefront',
        providerVersion: '5.1.0',
        providerVersionConstraint: '5.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._targets = config.targets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_information - computed: true, optional: false, required: false
  public get additionalInformation() {
    return this.getStringAttribute('additional_information');
  }

  // alert_triage_dashboards - computed: true, optional: false, required: false
  private _alertTriageDashboards = new DataWavefrontAlertAlertTriageDashboardsList(this, "alert_triage_dashboards", false);
  public get alertTriageDashboards() {
    return this._alertTriageDashboards;
  }

  // alert_type - computed: true, optional: false, required: false
  public get alertType() {
    return this.getStringAttribute('alert_type');
  }

  // can_modify - computed: true, optional: false, required: false
  public get canModify() {
    return this.getListAttribute('can_modify');
  }

  // can_view - computed: true, optional: false, required: false
  public get canView() {
    return this.getListAttribute('can_view');
  }

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // conditions - computed: true, optional: false, required: false
  private _conditions = new cdktf.StringMap(this, "conditions");
  public get conditions() {
    return this._conditions;
  }

  // display_expression - computed: true, optional: false, required: false
  public get displayExpression() {
    return this.getStringAttribute('display_expression');
  }

  // evaluate_realtime_data - computed: true, optional: false, required: false
  public get evaluateRealtimeData() {
    return this.getBooleanAttribute('evaluate_realtime_data');
  }

  // failing_host_label_pairs - computed: true, optional: false, required: false
  private _failingHostLabelPairs = new DataWavefrontAlertFailingHostLabelPairsList(this, "failing_host_label_pairs", false);
  public get failingHostLabelPairs() {
    return this._failingHostLabelPairs;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // in_maintenance_host_label_pairs - computed: true, optional: false, required: false
  private _inMaintenanceHostLabelPairs = new DataWavefrontAlertInMaintenanceHostLabelPairsList(this, "in_maintenance_host_label_pairs", false);
  public get inMaintenanceHostLabelPairs() {
    return this._inMaintenanceHostLabelPairs;
  }

  // include_obsolete_metrics - computed: true, optional: false, required: false
  public get includeObsoleteMetrics() {
    return this.getBooleanAttribute('include_obsolete_metrics');
  }

  // minutes - computed: true, optional: false, required: false
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // notification_resend_frequency_minutes - computed: true, optional: false, required: false
  public get notificationResendFrequencyMinutes() {
    return this.getNumberAttribute('notification_resend_frequency_minutes');
  }

  // process_rate_minutes - computed: true, optional: false, required: false
  public get processRateMinutes() {
    return this.getNumberAttribute('process_rate_minutes');
  }

  // resolve_after_minutes - computed: true, optional: false, required: false
  public get resolveAfterMinutes() {
    return this.getNumberAttribute('resolve_after_minutes');
  }

  // runbook_links - computed: true, optional: false, required: false
  public get runbookLinks() {
    return this.getListAttribute('runbook_links');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // severity_list - computed: true, optional: false, required: false
  public get severityList() {
    return this.getListAttribute('severity_list');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getListAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getStringAttribute('target');
  }

  // targets - computed: false, optional: true, required: false
  private _targets?: { [key: string]: string }; 
  public get targets() {
    return this.getStringMapAttribute('targets');
  }
  public set targets(value: { [key: string]: string }) {
    this._targets = value;
  }
  public resetTargets() {
    this._targets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      targets: cdktf.hashMapper(cdktf.stringToTerraform)(this._targets),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      targets: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._targets),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
