// https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/alert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/alert#additional_information Alert#additional_information}
  */
  readonly additionalInformation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/alert#alert_type Alert#alert_type}
  */
  readonly alertType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/alert#can_modify Alert#can_modify}
  */
  readonly canModify?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/alert#can_view Alert#can_view}
  */
  readonly canView?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/alert#condition Alert#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/alert#conditions Alert#conditions}
  */
  readonly conditions?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/alert#display_expression Alert#display_expression}
  */
  readonly displayExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/alert#id Alert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/alert#minutes Alert#minutes}
  */
  readonly minutes: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/alert#name Alert#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/alert#notification_resend_frequency_minutes Alert#notification_resend_frequency_minutes}
  */
  readonly notificationResendFrequencyMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/alert#process_rate_minutes Alert#process_rate_minutes}
  */
  readonly processRateMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/alert#resolve_after_minutes Alert#resolve_after_minutes}
  */
  readonly resolveAfterMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/alert#runbook_links Alert#runbook_links}
  */
  readonly runbookLinks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/alert#severity Alert#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/alert#tags Alert#tags}
  */
  readonly tags: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/alert#target Alert#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/alert#threshold_targets Alert#threshold_targets}
  */
  readonly thresholdTargets?: { [key: string]: string };
  /**
  * alert_triage_dashboards block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/alert#alert_triage_dashboards Alert#alert_triage_dashboards}
  */
  readonly alertTriageDashboards?: AlertAlertTriageDashboards[] | cdktf.IResolvable;
}
export interface AlertAlertTriageDashboardsParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/alert#constants Alert#constants}
  */
  readonly constants?: { [key: string]: string };
}

export function alertAlertTriageDashboardsParametersToTerraform(struct?: AlertAlertTriageDashboardsParametersOutputReference | AlertAlertTriageDashboardsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constants: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.constants),
  }
}


export function alertAlertTriageDashboardsParametersToHclTerraform(struct?: AlertAlertTriageDashboardsParametersOutputReference | AlertAlertTriageDashboardsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    constants: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.constants),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertAlertTriageDashboardsParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertAlertTriageDashboardsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constants !== undefined) {
      hasAnyValues = true;
      internalValueResult.constants = this._constants;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertAlertTriageDashboardsParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._constants = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._constants = value.constants;
    }
  }

  // constants - computed: false, optional: true, required: false
  private _constants?: { [key: string]: string }; 
  public get constants() {
    return this.getStringMapAttribute('constants');
  }
  public set constants(value: { [key: string]: string }) {
    this._constants = value;
  }
  public resetConstants() {
    this._constants = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constantsInput() {
    return this._constants;
  }
}
export interface AlertAlertTriageDashboards {
  /**
  * Dashboard ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/alert#dashboard_id Alert#dashboard_id}
  */
  readonly dashboardId: string;
  /**
  * Dashboard Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/alert#description Alert#description}
  */
  readonly description: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/alert#parameters Alert#parameters}
  */
  readonly parameters?: AlertAlertTriageDashboardsParameters;
}

export function alertAlertTriageDashboardsToTerraform(struct?: AlertAlertTriageDashboards | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dashboard_id: cdktf.stringToTerraform(struct!.dashboardId),
    description: cdktf.stringToTerraform(struct!.description),
    parameters: alertAlertTriageDashboardsParametersToTerraform(struct!.parameters),
  }
}


export function alertAlertTriageDashboardsToHclTerraform(struct?: AlertAlertTriageDashboards | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dashboard_id: {
      value: cdktf.stringToHclTerraform(struct!.dashboardId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: alertAlertTriageDashboardsParametersToHclTerraform(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "AlertAlertTriageDashboardsParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertAlertTriageDashboardsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertAlertTriageDashboards | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dashboardId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboardId = this._dashboardId;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertAlertTriageDashboards | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dashboardId = undefined;
      this._description = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dashboardId = value.dashboardId;
      this._description = value.description;
      this._parameters.internalValue = value.parameters;
    }
  }

  // dashboard_id - computed: false, optional: false, required: true
  private _dashboardId?: string; 
  public get dashboardId() {
    return this.getStringAttribute('dashboard_id');
  }
  public set dashboardId(value: string) {
    this._dashboardId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardIdInput() {
    return this._dashboardId;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new AlertAlertTriageDashboardsParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: AlertAlertTriageDashboardsParameters) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}

export class AlertAlertTriageDashboardsList extends cdktf.ComplexList {
  public internalValue? : AlertAlertTriageDashboards[] | cdktf.IResolvable

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
  public get(index: number): AlertAlertTriageDashboardsOutputReference {
    return new AlertAlertTriageDashboardsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/alert wavefront_alert}
*/
export class Alert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "wavefront_alert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Alert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Alert to import
  * @param importFromId The id of the existing Alert that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/alert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Alert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "wavefront_alert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/alert wavefront_alert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertConfig
  */
  public constructor(scope: Construct, id: string, config: AlertConfig) {
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
    this._additionalInformation = config.additionalInformation;
    this._alertType = config.alertType;
    this._canModify = config.canModify;
    this._canView = config.canView;
    this._condition = config.condition;
    this._conditions = config.conditions;
    this._displayExpression = config.displayExpression;
    this._id = config.id;
    this._minutes = config.minutes;
    this._name = config.name;
    this._notificationResendFrequencyMinutes = config.notificationResendFrequencyMinutes;
    this._processRateMinutes = config.processRateMinutes;
    this._resolveAfterMinutes = config.resolveAfterMinutes;
    this._runbookLinks = config.runbookLinks;
    this._severity = config.severity;
    this._tags = config.tags;
    this._target = config.target;
    this._thresholdTargets = config.thresholdTargets;
    this._alertTriageDashboards.internalValue = config.alertTriageDashboards;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_information - computed: false, optional: true, required: false
  private _additionalInformation?: string; 
  public get additionalInformation() {
    return this.getStringAttribute('additional_information');
  }
  public set additionalInformation(value: string) {
    this._additionalInformation = value;
  }
  public resetAdditionalInformation() {
    this._additionalInformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalInformationInput() {
    return this._additionalInformation;
  }

  // alert_type - computed: false, optional: true, required: false
  private _alertType?: string; 
  public get alertType() {
    return this.getStringAttribute('alert_type');
  }
  public set alertType(value: string) {
    this._alertType = value;
  }
  public resetAlertType() {
    this._alertType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertTypeInput() {
    return this._alertType;
  }

  // can_modify - computed: true, optional: true, required: false
  private _canModify?: string[]; 
  public get canModify() {
    return cdktf.Fn.tolist(this.getListAttribute('can_modify'));
  }
  public set canModify(value: string[]) {
    this._canModify = value;
  }
  public resetCanModify() {
    this._canModify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canModifyInput() {
    return this._canModify;
  }

  // can_view - computed: false, optional: true, required: false
  private _canView?: string[]; 
  public get canView() {
    return cdktf.Fn.tolist(this.getListAttribute('can_view'));
  }
  public set canView(value: string[]) {
    this._canView = value;
  }
  public resetCanView() {
    this._canView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canViewInput() {
    return this._canView;
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions?: { [key: string]: string }; 
  public get conditions() {
    return this.getStringMapAttribute('conditions');
  }
  public set conditions(value: { [key: string]: string }) {
    this._conditions = value;
  }
  public resetConditions() {
    this._conditions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions;
  }

  // display_expression - computed: false, optional: true, required: false
  private _displayExpression?: string; 
  public get displayExpression() {
    return this.getStringAttribute('display_expression');
  }
  public set displayExpression(value: string) {
    this._displayExpression = value;
  }
  public resetDisplayExpression() {
    this._displayExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayExpressionInput() {
    return this._displayExpression;
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

  // minutes - computed: false, optional: false, required: true
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
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

  // notification_resend_frequency_minutes - computed: false, optional: true, required: false
  private _notificationResendFrequencyMinutes?: number; 
  public get notificationResendFrequencyMinutes() {
    return this.getNumberAttribute('notification_resend_frequency_minutes');
  }
  public set notificationResendFrequencyMinutes(value: number) {
    this._notificationResendFrequencyMinutes = value;
  }
  public resetNotificationResendFrequencyMinutes() {
    this._notificationResendFrequencyMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationResendFrequencyMinutesInput() {
    return this._notificationResendFrequencyMinutes;
  }

  // process_rate_minutes - computed: false, optional: true, required: false
  private _processRateMinutes?: number; 
  public get processRateMinutes() {
    return this.getNumberAttribute('process_rate_minutes');
  }
  public set processRateMinutes(value: number) {
    this._processRateMinutes = value;
  }
  public resetProcessRateMinutes() {
    this._processRateMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processRateMinutesInput() {
    return this._processRateMinutes;
  }

  // resolve_after_minutes - computed: false, optional: true, required: false
  private _resolveAfterMinutes?: number; 
  public get resolveAfterMinutes() {
    return this.getNumberAttribute('resolve_after_minutes');
  }
  public set resolveAfterMinutes(value: number) {
    this._resolveAfterMinutes = value;
  }
  public resetResolveAfterMinutes() {
    this._resolveAfterMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveAfterMinutesInput() {
    return this._resolveAfterMinutes;
  }

  // runbook_links - computed: false, optional: true, required: false
  private _runbookLinks?: string[]; 
  public get runbookLinks() {
    return this.getListAttribute('runbook_links');
  }
  public set runbookLinks(value: string[]) {
    this._runbookLinks = value;
  }
  public resetRunbookLinks() {
    this._runbookLinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runbookLinksInput() {
    return this._runbookLinks;
  }

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // tags - computed: false, optional: false, required: true
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // threshold_targets - computed: false, optional: true, required: false
  private _thresholdTargets?: { [key: string]: string }; 
  public get thresholdTargets() {
    return this.getStringMapAttribute('threshold_targets');
  }
  public set thresholdTargets(value: { [key: string]: string }) {
    this._thresholdTargets = value;
  }
  public resetThresholdTargets() {
    this._thresholdTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdTargetsInput() {
    return this._thresholdTargets;
  }

  // alert_triage_dashboards - computed: false, optional: true, required: false
  private _alertTriageDashboards = new AlertAlertTriageDashboardsList(this, "alert_triage_dashboards", false);
  public get alertTriageDashboards() {
    return this._alertTriageDashboards;
  }
  public putAlertTriageDashboards(value: AlertAlertTriageDashboards[] | cdktf.IResolvable) {
    this._alertTriageDashboards.internalValue = value;
  }
  public resetAlertTriageDashboards() {
    this._alertTriageDashboards.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertTriageDashboardsInput() {
    return this._alertTriageDashboards.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_information: cdktf.stringToTerraform(this._additionalInformation),
      alert_type: cdktf.stringToTerraform(this._alertType),
      can_modify: cdktf.listMapper(cdktf.stringToTerraform, false)(this._canModify),
      can_view: cdktf.listMapper(cdktf.stringToTerraform, false)(this._canView),
      condition: cdktf.stringToTerraform(this._condition),
      conditions: cdktf.hashMapper(cdktf.stringToTerraform)(this._conditions),
      display_expression: cdktf.stringToTerraform(this._displayExpression),
      id: cdktf.stringToTerraform(this._id),
      minutes: cdktf.numberToTerraform(this._minutes),
      name: cdktf.stringToTerraform(this._name),
      notification_resend_frequency_minutes: cdktf.numberToTerraform(this._notificationResendFrequencyMinutes),
      process_rate_minutes: cdktf.numberToTerraform(this._processRateMinutes),
      resolve_after_minutes: cdktf.numberToTerraform(this._resolveAfterMinutes),
      runbook_links: cdktf.listMapper(cdktf.stringToTerraform, false)(this._runbookLinks),
      severity: cdktf.stringToTerraform(this._severity),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      target: cdktf.stringToTerraform(this._target),
      threshold_targets: cdktf.hashMapper(cdktf.stringToTerraform)(this._thresholdTargets),
      alert_triage_dashboards: cdktf.listMapper(alertAlertTriageDashboardsToTerraform, true)(this._alertTriageDashboards.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_information: {
        value: cdktf.stringToHclTerraform(this._additionalInformation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alert_type: {
        value: cdktf.stringToHclTerraform(this._alertType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      can_modify: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._canModify),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      can_view: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._canView),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      condition: {
        value: cdktf.stringToHclTerraform(this._condition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conditions: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._conditions),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_expression: {
        value: cdktf.stringToHclTerraform(this._displayExpression),
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
      minutes: {
        value: cdktf.numberToHclTerraform(this._minutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_resend_frequency_minutes: {
        value: cdktf.numberToHclTerraform(this._notificationResendFrequencyMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      process_rate_minutes: {
        value: cdktf.numberToHclTerraform(this._processRateMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resolve_after_minutes: {
        value: cdktf.numberToHclTerraform(this._resolveAfterMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      runbook_links: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._runbookLinks),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      target: {
        value: cdktf.stringToHclTerraform(this._target),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      threshold_targets: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._thresholdTargets),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      alert_triage_dashboards: {
        value: cdktf.listMapperHcl(alertAlertTriageDashboardsToHclTerraform, true)(this._alertTriageDashboards.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertAlertTriageDashboardsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
