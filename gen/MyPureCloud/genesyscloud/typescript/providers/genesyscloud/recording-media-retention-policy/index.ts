// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RecordingMediaRetentionPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description for the policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#description RecordingMediaRetentionPolicy#description}
  */
  readonly description?: string;
  /**
  * The policy will be enabled if true, otherwise it will be disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#enabled RecordingMediaRetentionPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#id RecordingMediaRetentionPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The policy name. Changing the policy_name attribute will cause the recording_media_retention_policy to be dropped and recreated with a new ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#name RecordingMediaRetentionPolicy#name}
  */
  readonly name: string;
  /**
  * The ordinal number for the policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#order RecordingMediaRetentionPolicy#order}
  */
  readonly order?: number;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#actions RecordingMediaRetentionPolicy#actions}
  */
  readonly actions?: RecordingMediaRetentionPolicyActions;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#conditions RecordingMediaRetentionPolicy#conditions}
  */
  readonly conditions?: RecordingMediaRetentionPolicyConditions;
  /**
  * media_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#media_policies RecordingMediaRetentionPolicy#media_policies}
  */
  readonly mediaPolicies?: RecordingMediaRetentionPolicyMediaPolicies;
  /**
  * policy_errors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#policy_errors RecordingMediaRetentionPolicy#policy_errors}
  */
  readonly policyErrors?: RecordingMediaRetentionPolicyPolicyErrors;
}
export interface RecordingMediaRetentionPolicyActionsAssignCalibrations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#calibrator_id RecordingMediaRetentionPolicy#calibrator_id}
  */
  readonly calibratorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#evaluation_form_id RecordingMediaRetentionPolicy#evaluation_form_id}
  */
  readonly evaluationFormId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#evaluator_ids RecordingMediaRetentionPolicy#evaluator_ids}
  */
  readonly evaluatorIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#expert_evaluator_id RecordingMediaRetentionPolicy#expert_evaluator_id}
  */
  readonly expertEvaluatorId?: string;
}

export function recordingMediaRetentionPolicyActionsAssignCalibrationsToTerraform(struct?: RecordingMediaRetentionPolicyActionsAssignCalibrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    calibrator_id: cdktf.stringToTerraform(struct!.calibratorId),
    evaluation_form_id: cdktf.stringToTerraform(struct!.evaluationFormId),
    evaluator_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.evaluatorIds),
    expert_evaluator_id: cdktf.stringToTerraform(struct!.expertEvaluatorId),
  }
}


export function recordingMediaRetentionPolicyActionsAssignCalibrationsToHclTerraform(struct?: RecordingMediaRetentionPolicyActionsAssignCalibrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    calibrator_id: {
      value: cdktf.stringToHclTerraform(struct!.calibratorId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evaluation_form_id: {
      value: cdktf.stringToHclTerraform(struct!.evaluationFormId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evaluator_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.evaluatorIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    expert_evaluator_id: {
      value: cdktf.stringToHclTerraform(struct!.expertEvaluatorId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyActionsAssignCalibrationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecordingMediaRetentionPolicyActionsAssignCalibrations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._calibratorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.calibratorId = this._calibratorId;
    }
    if (this._evaluationFormId !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationFormId = this._evaluationFormId;
    }
    if (this._evaluatorIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluatorIds = this._evaluatorIds;
    }
    if (this._expertEvaluatorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.expertEvaluatorId = this._expertEvaluatorId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyActionsAssignCalibrations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._calibratorId = undefined;
      this._evaluationFormId = undefined;
      this._evaluatorIds = undefined;
      this._expertEvaluatorId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._calibratorId = value.calibratorId;
      this._evaluationFormId = value.evaluationFormId;
      this._evaluatorIds = value.evaluatorIds;
      this._expertEvaluatorId = value.expertEvaluatorId;
    }
  }

  // calibrator_id - computed: false, optional: true, required: false
  private _calibratorId?: string; 
  public get calibratorId() {
    return this.getStringAttribute('calibrator_id');
  }
  public set calibratorId(value: string) {
    this._calibratorId = value;
  }
  public resetCalibratorId() {
    this._calibratorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calibratorIdInput() {
    return this._calibratorId;
  }

  // evaluation_form_id - computed: false, optional: true, required: false
  private _evaluationFormId?: string; 
  public get evaluationFormId() {
    return this.getStringAttribute('evaluation_form_id');
  }
  public set evaluationFormId(value: string) {
    this._evaluationFormId = value;
  }
  public resetEvaluationFormId() {
    this._evaluationFormId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationFormIdInput() {
    return this._evaluationFormId;
  }

  // evaluator_ids - computed: false, optional: true, required: false
  private _evaluatorIds?: string[]; 
  public get evaluatorIds() {
    return this.getListAttribute('evaluator_ids');
  }
  public set evaluatorIds(value: string[]) {
    this._evaluatorIds = value;
  }
  public resetEvaluatorIds() {
    this._evaluatorIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluatorIdsInput() {
    return this._evaluatorIds;
  }

  // expert_evaluator_id - computed: false, optional: true, required: false
  private _expertEvaluatorId?: string; 
  public get expertEvaluatorId() {
    return this.getStringAttribute('expert_evaluator_id');
  }
  public set expertEvaluatorId(value: string) {
    this._expertEvaluatorId = value;
  }
  public resetExpertEvaluatorId() {
    this._expertEvaluatorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expertEvaluatorIdInput() {
    return this._expertEvaluatorId;
  }
}

export class RecordingMediaRetentionPolicyActionsAssignCalibrationsList extends cdktf.ComplexList {
  public internalValue? : RecordingMediaRetentionPolicyActionsAssignCalibrations[] | cdktf.IResolvable

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
  public get(index: number): RecordingMediaRetentionPolicyActionsAssignCalibrationsOutputReference {
    return new RecordingMediaRetentionPolicyActionsAssignCalibrationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecordingMediaRetentionPolicyActionsAssignEvaluations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#evaluation_form_id RecordingMediaRetentionPolicy#evaluation_form_id}
  */
  readonly evaluationFormId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#user_id RecordingMediaRetentionPolicy#user_id}
  */
  readonly userId?: string;
}

export function recordingMediaRetentionPolicyActionsAssignEvaluationsToTerraform(struct?: RecordingMediaRetentionPolicyActionsAssignEvaluations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluation_form_id: cdktf.stringToTerraform(struct!.evaluationFormId),
    user_id: cdktf.stringToTerraform(struct!.userId),
  }
}


export function recordingMediaRetentionPolicyActionsAssignEvaluationsToHclTerraform(struct?: RecordingMediaRetentionPolicyActionsAssignEvaluations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    evaluation_form_id: {
      value: cdktf.stringToHclTerraform(struct!.evaluationFormId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_id: {
      value: cdktf.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyActionsAssignEvaluationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecordingMediaRetentionPolicyActionsAssignEvaluations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluationFormId !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationFormId = this._evaluationFormId;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyActionsAssignEvaluations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evaluationFormId = undefined;
      this._userId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evaluationFormId = value.evaluationFormId;
      this._userId = value.userId;
    }
  }

  // evaluation_form_id - computed: false, optional: true, required: false
  private _evaluationFormId?: string; 
  public get evaluationFormId() {
    return this.getStringAttribute('evaluation_form_id');
  }
  public set evaluationFormId(value: string) {
    this._evaluationFormId = value;
  }
  public resetEvaluationFormId() {
    this._evaluationFormId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationFormIdInput() {
    return this._evaluationFormId;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }
}

export class RecordingMediaRetentionPolicyActionsAssignEvaluationsList extends cdktf.ComplexList {
  public internalValue? : RecordingMediaRetentionPolicyActionsAssignEvaluations[] | cdktf.IResolvable

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
  public get(index: number): RecordingMediaRetentionPolicyActionsAssignEvaluationsOutputReference {
    return new RecordingMediaRetentionPolicyActionsAssignEvaluationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecordingMediaRetentionPolicyActionsAssignMeteredAssignmentByAgentTimeInterval {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#days RecordingMediaRetentionPolicy#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#hours RecordingMediaRetentionPolicy#hours}
  */
  readonly hours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#months RecordingMediaRetentionPolicy#months}
  */
  readonly months?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#weeks RecordingMediaRetentionPolicy#weeks}
  */
  readonly weeks?: number;
}

export function recordingMediaRetentionPolicyActionsAssignMeteredAssignmentByAgentTimeIntervalToTerraform(struct?: RecordingMediaRetentionPolicyActionsAssignMeteredAssignmentByAgentTimeIntervalOutputReference | RecordingMediaRetentionPolicyActionsAssignMeteredAssignmentByAgentTimeInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    hours: cdktf.numberToTerraform(struct!.hours),
    months: cdktf.numberToTerraform(struct!.months),
    weeks: cdktf.numberToTerraform(struct!.weeks),
  }
}


export function recordingMediaRetentionPolicyActionsAssignMeteredAssignmentByAgentTimeIntervalToHclTerraform(struct?: RecordingMediaRetentionPolicyActionsAssignMeteredAssignmentByAgentTimeIntervalOutputReference | RecordingMediaRetentionPolicyActionsAssignMeteredAssignmentByAgentTimeInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    months: {
      value: cdktf.numberToHclTerraform(struct!.months),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weeks: {
      value: cdktf.numberToHclTerraform(struct!.weeks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyActionsAssignMeteredAssignmentByAgentTimeIntervalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyActionsAssignMeteredAssignmentByAgentTimeInterval | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._months !== undefined) {
      hasAnyValues = true;
      internalValueResult.months = this._months;
    }
    if (this._weeks !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeks = this._weeks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyActionsAssignMeteredAssignmentByAgentTimeInterval | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
      this._hours = undefined;
      this._months = undefined;
      this._weeks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
      this._hours = value.hours;
      this._months = value.months;
      this._weeks = value.weeks;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // months - computed: false, optional: true, required: false
  private _months?: number; 
  public get months() {
    return this.getNumberAttribute('months');
  }
  public set months(value: number) {
    this._months = value;
  }
  public resetMonths() {
    this._months = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthsInput() {
    return this._months;
  }

  // weeks - computed: false, optional: true, required: false
  private _weeks?: number; 
  public get weeks() {
    return this.getNumberAttribute('weeks');
  }
  public set weeks(value: number) {
    this._weeks = value;
  }
  public resetWeeks() {
    this._weeks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeksInput() {
    return this._weeks;
  }
}
export interface RecordingMediaRetentionPolicyActionsAssignMeteredAssignmentByAgent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#evaluation_form_id RecordingMediaRetentionPolicy#evaluation_form_id}
  */
  readonly evaluationFormId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#evaluator_ids RecordingMediaRetentionPolicy#evaluator_ids}
  */
  readonly evaluatorIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#max_number_evaluations RecordingMediaRetentionPolicy#max_number_evaluations}
  */
  readonly maxNumberEvaluations?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#time_zone RecordingMediaRetentionPolicy#time_zone}
  */
  readonly timeZone?: string;
  /**
  * time_interval block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#time_interval RecordingMediaRetentionPolicy#time_interval}
  */
  readonly timeInterval?: RecordingMediaRetentionPolicyActionsAssignMeteredAssignmentByAgentTimeInterval;
}

export function recordingMediaRetentionPolicyActionsAssignMeteredAssignmentByAgentToTerraform(struct?: RecordingMediaRetentionPolicyActionsAssignMeteredAssignmentByAgent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluation_form_id: cdktf.stringToTerraform(struct!.evaluationFormId),
    evaluator_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.evaluatorIds),
    max_number_evaluations: cdktf.numberToTerraform(struct!.maxNumberEvaluations),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    time_interval: recordingMediaRetentionPolicyActionsAssignMeteredAssignmentByAgentTimeIntervalToTerraform(struct!.timeInterval),
  }
}


export function recordingMediaRetentionPolicyActionsAssignMeteredAssignmentByAgentToHclTerraform(struct?: RecordingMediaRetentionPolicyActionsAssignMeteredAssignmentByAgent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    evaluation_form_id: {
      value: cdktf.stringToHclTerraform(struct!.evaluationFormId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evaluator_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.evaluatorIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_number_evaluations: {
      value: cdktf.numberToHclTerraform(struct!.maxNumberEvaluations),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_interval: {
      value: recordingMediaRetentionPolicyActionsAssignMeteredAssignmentByAgentTimeIntervalToHclTerraform(struct!.timeInterval),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyActionsAssignMeteredAssignmentByAgentTimeIntervalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyActionsAssignMeteredAssignmentByAgentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecordingMediaRetentionPolicyActionsAssignMeteredAssignmentByAgent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluationFormId !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationFormId = this._evaluationFormId;
    }
    if (this._evaluatorIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluatorIds = this._evaluatorIds;
    }
    if (this._maxNumberEvaluations !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNumberEvaluations = this._maxNumberEvaluations;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    if (this._timeInterval?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeInterval = this._timeInterval?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyActionsAssignMeteredAssignmentByAgent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evaluationFormId = undefined;
      this._evaluatorIds = undefined;
      this._maxNumberEvaluations = undefined;
      this._timeZone = undefined;
      this._timeInterval.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evaluationFormId = value.evaluationFormId;
      this._evaluatorIds = value.evaluatorIds;
      this._maxNumberEvaluations = value.maxNumberEvaluations;
      this._timeZone = value.timeZone;
      this._timeInterval.internalValue = value.timeInterval;
    }
  }

  // evaluation_form_id - computed: false, optional: true, required: false
  private _evaluationFormId?: string; 
  public get evaluationFormId() {
    return this.getStringAttribute('evaluation_form_id');
  }
  public set evaluationFormId(value: string) {
    this._evaluationFormId = value;
  }
  public resetEvaluationFormId() {
    this._evaluationFormId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationFormIdInput() {
    return this._evaluationFormId;
  }

  // evaluator_ids - computed: false, optional: true, required: false
  private _evaluatorIds?: string[]; 
  public get evaluatorIds() {
    return this.getListAttribute('evaluator_ids');
  }
  public set evaluatorIds(value: string[]) {
    this._evaluatorIds = value;
  }
  public resetEvaluatorIds() {
    this._evaluatorIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluatorIdsInput() {
    return this._evaluatorIds;
  }

  // max_number_evaluations - computed: false, optional: true, required: false
  private _maxNumberEvaluations?: number; 
  public get maxNumberEvaluations() {
    return this.getNumberAttribute('max_number_evaluations');
  }
  public set maxNumberEvaluations(value: number) {
    this._maxNumberEvaluations = value;
  }
  public resetMaxNumberEvaluations() {
    this._maxNumberEvaluations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberEvaluationsInput() {
    return this._maxNumberEvaluations;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // time_interval - computed: false, optional: true, required: false
  private _timeInterval = new RecordingMediaRetentionPolicyActionsAssignMeteredAssignmentByAgentTimeIntervalOutputReference(this, "time_interval");
  public get timeInterval() {
    return this._timeInterval;
  }
  public putTimeInterval(value: RecordingMediaRetentionPolicyActionsAssignMeteredAssignmentByAgentTimeInterval) {
    this._timeInterval.internalValue = value;
  }
  public resetTimeInterval() {
    this._timeInterval.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeIntervalInput() {
    return this._timeInterval.internalValue;
  }
}

export class RecordingMediaRetentionPolicyActionsAssignMeteredAssignmentByAgentList extends cdktf.ComplexList {
  public internalValue? : RecordingMediaRetentionPolicyActionsAssignMeteredAssignmentByAgent[] | cdktf.IResolvable

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
  public get(index: number): RecordingMediaRetentionPolicyActionsAssignMeteredAssignmentByAgentOutputReference {
    return new RecordingMediaRetentionPolicyActionsAssignMeteredAssignmentByAgentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecordingMediaRetentionPolicyActionsAssignMeteredEvaluationsTimeInterval {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#days RecordingMediaRetentionPolicy#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#hours RecordingMediaRetentionPolicy#hours}
  */
  readonly hours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#months RecordingMediaRetentionPolicy#months}
  */
  readonly months?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#weeks RecordingMediaRetentionPolicy#weeks}
  */
  readonly weeks?: number;
}

export function recordingMediaRetentionPolicyActionsAssignMeteredEvaluationsTimeIntervalToTerraform(struct?: RecordingMediaRetentionPolicyActionsAssignMeteredEvaluationsTimeIntervalOutputReference | RecordingMediaRetentionPolicyActionsAssignMeteredEvaluationsTimeInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    hours: cdktf.numberToTerraform(struct!.hours),
    months: cdktf.numberToTerraform(struct!.months),
    weeks: cdktf.numberToTerraform(struct!.weeks),
  }
}


export function recordingMediaRetentionPolicyActionsAssignMeteredEvaluationsTimeIntervalToHclTerraform(struct?: RecordingMediaRetentionPolicyActionsAssignMeteredEvaluationsTimeIntervalOutputReference | RecordingMediaRetentionPolicyActionsAssignMeteredEvaluationsTimeInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    months: {
      value: cdktf.numberToHclTerraform(struct!.months),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weeks: {
      value: cdktf.numberToHclTerraform(struct!.weeks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyActionsAssignMeteredEvaluationsTimeIntervalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyActionsAssignMeteredEvaluationsTimeInterval | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._months !== undefined) {
      hasAnyValues = true;
      internalValueResult.months = this._months;
    }
    if (this._weeks !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeks = this._weeks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyActionsAssignMeteredEvaluationsTimeInterval | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
      this._hours = undefined;
      this._months = undefined;
      this._weeks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
      this._hours = value.hours;
      this._months = value.months;
      this._weeks = value.weeks;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // months - computed: false, optional: true, required: false
  private _months?: number; 
  public get months() {
    return this.getNumberAttribute('months');
  }
  public set months(value: number) {
    this._months = value;
  }
  public resetMonths() {
    this._months = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthsInput() {
    return this._months;
  }

  // weeks - computed: false, optional: true, required: false
  private _weeks?: number; 
  public get weeks() {
    return this.getNumberAttribute('weeks');
  }
  public set weeks(value: number) {
    this._weeks = value;
  }
  public resetWeeks() {
    this._weeks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeksInput() {
    return this._weeks;
  }
}
export interface RecordingMediaRetentionPolicyActionsAssignMeteredEvaluations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#assign_to_active_user RecordingMediaRetentionPolicy#assign_to_active_user}
  */
  readonly assignToActiveUser?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#evaluation_form_id RecordingMediaRetentionPolicy#evaluation_form_id}
  */
  readonly evaluationFormId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#evaluator_ids RecordingMediaRetentionPolicy#evaluator_ids}
  */
  readonly evaluatorIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#max_number_evaluations RecordingMediaRetentionPolicy#max_number_evaluations}
  */
  readonly maxNumberEvaluations?: number;
  /**
  * time_interval block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#time_interval RecordingMediaRetentionPolicy#time_interval}
  */
  readonly timeInterval?: RecordingMediaRetentionPolicyActionsAssignMeteredEvaluationsTimeInterval;
}

export function recordingMediaRetentionPolicyActionsAssignMeteredEvaluationsToTerraform(struct?: RecordingMediaRetentionPolicyActionsAssignMeteredEvaluations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_to_active_user: cdktf.booleanToTerraform(struct!.assignToActiveUser),
    evaluation_form_id: cdktf.stringToTerraform(struct!.evaluationFormId),
    evaluator_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.evaluatorIds),
    max_number_evaluations: cdktf.numberToTerraform(struct!.maxNumberEvaluations),
    time_interval: recordingMediaRetentionPolicyActionsAssignMeteredEvaluationsTimeIntervalToTerraform(struct!.timeInterval),
  }
}


export function recordingMediaRetentionPolicyActionsAssignMeteredEvaluationsToHclTerraform(struct?: RecordingMediaRetentionPolicyActionsAssignMeteredEvaluations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assign_to_active_user: {
      value: cdktf.booleanToHclTerraform(struct!.assignToActiveUser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    evaluation_form_id: {
      value: cdktf.stringToHclTerraform(struct!.evaluationFormId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evaluator_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.evaluatorIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_number_evaluations: {
      value: cdktf.numberToHclTerraform(struct!.maxNumberEvaluations),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_interval: {
      value: recordingMediaRetentionPolicyActionsAssignMeteredEvaluationsTimeIntervalToHclTerraform(struct!.timeInterval),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyActionsAssignMeteredEvaluationsTimeIntervalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyActionsAssignMeteredEvaluationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecordingMediaRetentionPolicyActionsAssignMeteredEvaluations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignToActiveUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignToActiveUser = this._assignToActiveUser;
    }
    if (this._evaluationFormId !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationFormId = this._evaluationFormId;
    }
    if (this._evaluatorIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluatorIds = this._evaluatorIds;
    }
    if (this._maxNumberEvaluations !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNumberEvaluations = this._maxNumberEvaluations;
    }
    if (this._timeInterval?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeInterval = this._timeInterval?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyActionsAssignMeteredEvaluations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignToActiveUser = undefined;
      this._evaluationFormId = undefined;
      this._evaluatorIds = undefined;
      this._maxNumberEvaluations = undefined;
      this._timeInterval.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assignToActiveUser = value.assignToActiveUser;
      this._evaluationFormId = value.evaluationFormId;
      this._evaluatorIds = value.evaluatorIds;
      this._maxNumberEvaluations = value.maxNumberEvaluations;
      this._timeInterval.internalValue = value.timeInterval;
    }
  }

  // assign_to_active_user - computed: false, optional: true, required: false
  private _assignToActiveUser?: boolean | cdktf.IResolvable; 
  public get assignToActiveUser() {
    return this.getBooleanAttribute('assign_to_active_user');
  }
  public set assignToActiveUser(value: boolean | cdktf.IResolvable) {
    this._assignToActiveUser = value;
  }
  public resetAssignToActiveUser() {
    this._assignToActiveUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignToActiveUserInput() {
    return this._assignToActiveUser;
  }

  // evaluation_form_id - computed: false, optional: true, required: false
  private _evaluationFormId?: string; 
  public get evaluationFormId() {
    return this.getStringAttribute('evaluation_form_id');
  }
  public set evaluationFormId(value: string) {
    this._evaluationFormId = value;
  }
  public resetEvaluationFormId() {
    this._evaluationFormId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationFormIdInput() {
    return this._evaluationFormId;
  }

  // evaluator_ids - computed: false, optional: true, required: false
  private _evaluatorIds?: string[]; 
  public get evaluatorIds() {
    return this.getListAttribute('evaluator_ids');
  }
  public set evaluatorIds(value: string[]) {
    this._evaluatorIds = value;
  }
  public resetEvaluatorIds() {
    this._evaluatorIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluatorIdsInput() {
    return this._evaluatorIds;
  }

  // max_number_evaluations - computed: false, optional: true, required: false
  private _maxNumberEvaluations?: number; 
  public get maxNumberEvaluations() {
    return this.getNumberAttribute('max_number_evaluations');
  }
  public set maxNumberEvaluations(value: number) {
    this._maxNumberEvaluations = value;
  }
  public resetMaxNumberEvaluations() {
    this._maxNumberEvaluations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberEvaluationsInput() {
    return this._maxNumberEvaluations;
  }

  // time_interval - computed: false, optional: true, required: false
  private _timeInterval = new RecordingMediaRetentionPolicyActionsAssignMeteredEvaluationsTimeIntervalOutputReference(this, "time_interval");
  public get timeInterval() {
    return this._timeInterval;
  }
  public putTimeInterval(value: RecordingMediaRetentionPolicyActionsAssignMeteredEvaluationsTimeInterval) {
    this._timeInterval.internalValue = value;
  }
  public resetTimeInterval() {
    this._timeInterval.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeIntervalInput() {
    return this._timeInterval.internalValue;
  }
}

export class RecordingMediaRetentionPolicyActionsAssignMeteredEvaluationsList extends cdktf.ComplexList {
  public internalValue? : RecordingMediaRetentionPolicyActionsAssignMeteredEvaluations[] | cdktf.IResolvable

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
  public get(index: number): RecordingMediaRetentionPolicyActionsAssignMeteredEvaluationsOutputReference {
    return new RecordingMediaRetentionPolicyActionsAssignMeteredEvaluationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecordingMediaRetentionPolicyActionsAssignSurveys {
  /**
  * The UUID reference to the flow associated with this survey.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#flow_id RecordingMediaRetentionPolicy#flow_id}
  */
  readonly flowId?: string;
  /**
  * An ISO 8601 repeated interval consisting of the number of repetitions, the start datetime, and the interval (e.g. R2/2018-03-01T13:00:00Z/P1M10DT2H30M). Total duration must not exceed 90 days. Defaults to `R1/P0M`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#invite_time_interval RecordingMediaRetentionPolicy#invite_time_interval}
  */
  readonly inviteTimeInterval?: string;
  /**
  * Validated email domain, required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#sending_domain RecordingMediaRetentionPolicy#sending_domain}
  */
  readonly sendingDomain: string;
  /**
  * User together with sendingDomain used to send email, null to use no-reply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#sending_user RecordingMediaRetentionPolicy#sending_user}
  */
  readonly sendingUser?: string;
  /**
  * The survey form used for this survey.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#survey_form_name RecordingMediaRetentionPolicy#survey_form_name}
  */
  readonly surveyFormName?: string;
}

export function recordingMediaRetentionPolicyActionsAssignSurveysToTerraform(struct?: RecordingMediaRetentionPolicyActionsAssignSurveys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flow_id: cdktf.stringToTerraform(struct!.flowId),
    invite_time_interval: cdktf.stringToTerraform(struct!.inviteTimeInterval),
    sending_domain: cdktf.stringToTerraform(struct!.sendingDomain),
    sending_user: cdktf.stringToTerraform(struct!.sendingUser),
    survey_form_name: cdktf.stringToTerraform(struct!.surveyFormName),
  }
}


export function recordingMediaRetentionPolicyActionsAssignSurveysToHclTerraform(struct?: RecordingMediaRetentionPolicyActionsAssignSurveys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flow_id: {
      value: cdktf.stringToHclTerraform(struct!.flowId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invite_time_interval: {
      value: cdktf.stringToHclTerraform(struct!.inviteTimeInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sending_domain: {
      value: cdktf.stringToHclTerraform(struct!.sendingDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sending_user: {
      value: cdktf.stringToHclTerraform(struct!.sendingUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    survey_form_name: {
      value: cdktf.stringToHclTerraform(struct!.surveyFormName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyActionsAssignSurveysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecordingMediaRetentionPolicyActionsAssignSurveys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flowId !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowId = this._flowId;
    }
    if (this._inviteTimeInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.inviteTimeInterval = this._inviteTimeInterval;
    }
    if (this._sendingDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendingDomain = this._sendingDomain;
    }
    if (this._sendingUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendingUser = this._sendingUser;
    }
    if (this._surveyFormName !== undefined) {
      hasAnyValues = true;
      internalValueResult.surveyFormName = this._surveyFormName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyActionsAssignSurveys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flowId = undefined;
      this._inviteTimeInterval = undefined;
      this._sendingDomain = undefined;
      this._sendingUser = undefined;
      this._surveyFormName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flowId = value.flowId;
      this._inviteTimeInterval = value.inviteTimeInterval;
      this._sendingDomain = value.sendingDomain;
      this._sendingUser = value.sendingUser;
      this._surveyFormName = value.surveyFormName;
    }
  }

  // flow_id - computed: false, optional: true, required: false
  private _flowId?: string; 
  public get flowId() {
    return this.getStringAttribute('flow_id');
  }
  public set flowId(value: string) {
    this._flowId = value;
  }
  public resetFlowId() {
    this._flowId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowIdInput() {
    return this._flowId;
  }

  // invite_time_interval - computed: false, optional: true, required: false
  private _inviteTimeInterval?: string; 
  public get inviteTimeInterval() {
    return this.getStringAttribute('invite_time_interval');
  }
  public set inviteTimeInterval(value: string) {
    this._inviteTimeInterval = value;
  }
  public resetInviteTimeInterval() {
    this._inviteTimeInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inviteTimeIntervalInput() {
    return this._inviteTimeInterval;
  }

  // sending_domain - computed: false, optional: false, required: true
  private _sendingDomain?: string; 
  public get sendingDomain() {
    return this.getStringAttribute('sending_domain');
  }
  public set sendingDomain(value: string) {
    this._sendingDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sendingDomainInput() {
    return this._sendingDomain;
  }

  // sending_user - computed: false, optional: true, required: false
  private _sendingUser?: string; 
  public get sendingUser() {
    return this.getStringAttribute('sending_user');
  }
  public set sendingUser(value: string) {
    this._sendingUser = value;
  }
  public resetSendingUser() {
    this._sendingUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendingUserInput() {
    return this._sendingUser;
  }

  // survey_form_name - computed: false, optional: true, required: false
  private _surveyFormName?: string; 
  public get surveyFormName() {
    return this.getStringAttribute('survey_form_name');
  }
  public set surveyFormName(value: string) {
    this._surveyFormName = value;
  }
  public resetSurveyFormName() {
    this._surveyFormName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get surveyFormNameInput() {
    return this._surveyFormName;
  }
}

export class RecordingMediaRetentionPolicyActionsAssignSurveysList extends cdktf.ComplexList {
  public internalValue? : RecordingMediaRetentionPolicyActionsAssignSurveys[] | cdktf.IResolvable

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
  public get(index: number): RecordingMediaRetentionPolicyActionsAssignSurveysOutputReference {
    return new RecordingMediaRetentionPolicyActionsAssignSurveysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecordingMediaRetentionPolicyActionsInitiateScreenRecordingArchiveRetention {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#days RecordingMediaRetentionPolicy#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#storage_medium RecordingMediaRetentionPolicy#storage_medium}
  */
  readonly storageMedium?: string;
}

export function recordingMediaRetentionPolicyActionsInitiateScreenRecordingArchiveRetentionToTerraform(struct?: RecordingMediaRetentionPolicyActionsInitiateScreenRecordingArchiveRetentionOutputReference | RecordingMediaRetentionPolicyActionsInitiateScreenRecordingArchiveRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    storage_medium: cdktf.stringToTerraform(struct!.storageMedium),
  }
}


export function recordingMediaRetentionPolicyActionsInitiateScreenRecordingArchiveRetentionToHclTerraform(struct?: RecordingMediaRetentionPolicyActionsInitiateScreenRecordingArchiveRetentionOutputReference | RecordingMediaRetentionPolicyActionsInitiateScreenRecordingArchiveRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_medium: {
      value: cdktf.stringToHclTerraform(struct!.storageMedium),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyActionsInitiateScreenRecordingArchiveRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyActionsInitiateScreenRecordingArchiveRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._storageMedium !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageMedium = this._storageMedium;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyActionsInitiateScreenRecordingArchiveRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
      this._storageMedium = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
      this._storageMedium = value.storageMedium;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // storage_medium - computed: false, optional: true, required: false
  private _storageMedium?: string; 
  public get storageMedium() {
    return this.getStringAttribute('storage_medium');
  }
  public set storageMedium(value: string) {
    this._storageMedium = value;
  }
  public resetStorageMedium() {
    this._storageMedium = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageMediumInput() {
    return this._storageMedium;
  }
}
export interface RecordingMediaRetentionPolicyActionsInitiateScreenRecordingDeleteRetention {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#days RecordingMediaRetentionPolicy#days}
  */
  readonly days?: number;
}

export function recordingMediaRetentionPolicyActionsInitiateScreenRecordingDeleteRetentionToTerraform(struct?: RecordingMediaRetentionPolicyActionsInitiateScreenRecordingDeleteRetentionOutputReference | RecordingMediaRetentionPolicyActionsInitiateScreenRecordingDeleteRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
  }
}


export function recordingMediaRetentionPolicyActionsInitiateScreenRecordingDeleteRetentionToHclTerraform(struct?: RecordingMediaRetentionPolicyActionsInitiateScreenRecordingDeleteRetentionOutputReference | RecordingMediaRetentionPolicyActionsInitiateScreenRecordingDeleteRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyActionsInitiateScreenRecordingDeleteRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyActionsInitiateScreenRecordingDeleteRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyActionsInitiateScreenRecordingDeleteRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }
}
export interface RecordingMediaRetentionPolicyActionsInitiateScreenRecording {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#record_acw RecordingMediaRetentionPolicy#record_acw}
  */
  readonly recordAcw?: boolean | cdktf.IResolvable;
  /**
  * archive_retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#archive_retention RecordingMediaRetentionPolicy#archive_retention}
  */
  readonly archiveRetention?: RecordingMediaRetentionPolicyActionsInitiateScreenRecordingArchiveRetention;
  /**
  * delete_retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#delete_retention RecordingMediaRetentionPolicy#delete_retention}
  */
  readonly deleteRetention?: RecordingMediaRetentionPolicyActionsInitiateScreenRecordingDeleteRetention;
}

export function recordingMediaRetentionPolicyActionsInitiateScreenRecordingToTerraform(struct?: RecordingMediaRetentionPolicyActionsInitiateScreenRecordingOutputReference | RecordingMediaRetentionPolicyActionsInitiateScreenRecording): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    record_acw: cdktf.booleanToTerraform(struct!.recordAcw),
    archive_retention: recordingMediaRetentionPolicyActionsInitiateScreenRecordingArchiveRetentionToTerraform(struct!.archiveRetention),
    delete_retention: recordingMediaRetentionPolicyActionsInitiateScreenRecordingDeleteRetentionToTerraform(struct!.deleteRetention),
  }
}


export function recordingMediaRetentionPolicyActionsInitiateScreenRecordingToHclTerraform(struct?: RecordingMediaRetentionPolicyActionsInitiateScreenRecordingOutputReference | RecordingMediaRetentionPolicyActionsInitiateScreenRecording): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    record_acw: {
      value: cdktf.booleanToHclTerraform(struct!.recordAcw),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    archive_retention: {
      value: recordingMediaRetentionPolicyActionsInitiateScreenRecordingArchiveRetentionToHclTerraform(struct!.archiveRetention),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyActionsInitiateScreenRecordingArchiveRetentionList",
    },
    delete_retention: {
      value: recordingMediaRetentionPolicyActionsInitiateScreenRecordingDeleteRetentionToHclTerraform(struct!.deleteRetention),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyActionsInitiateScreenRecordingDeleteRetentionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyActionsInitiateScreenRecordingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyActionsInitiateScreenRecording | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordAcw !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordAcw = this._recordAcw;
    }
    if (this._archiveRetention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveRetention = this._archiveRetention?.internalValue;
    }
    if (this._deleteRetention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteRetention = this._deleteRetention?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyActionsInitiateScreenRecording | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recordAcw = undefined;
      this._archiveRetention.internalValue = undefined;
      this._deleteRetention.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recordAcw = value.recordAcw;
      this._archiveRetention.internalValue = value.archiveRetention;
      this._deleteRetention.internalValue = value.deleteRetention;
    }
  }

  // record_acw - computed: false, optional: true, required: false
  private _recordAcw?: boolean | cdktf.IResolvable; 
  public get recordAcw() {
    return this.getBooleanAttribute('record_acw');
  }
  public set recordAcw(value: boolean | cdktf.IResolvable) {
    this._recordAcw = value;
  }
  public resetRecordAcw() {
    this._recordAcw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordAcwInput() {
    return this._recordAcw;
  }

  // archive_retention - computed: false, optional: true, required: false
  private _archiveRetention = new RecordingMediaRetentionPolicyActionsInitiateScreenRecordingArchiveRetentionOutputReference(this, "archive_retention");
  public get archiveRetention() {
    return this._archiveRetention;
  }
  public putArchiveRetention(value: RecordingMediaRetentionPolicyActionsInitiateScreenRecordingArchiveRetention) {
    this._archiveRetention.internalValue = value;
  }
  public resetArchiveRetention() {
    this._archiveRetention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveRetentionInput() {
    return this._archiveRetention.internalValue;
  }

  // delete_retention - computed: false, optional: true, required: false
  private _deleteRetention = new RecordingMediaRetentionPolicyActionsInitiateScreenRecordingDeleteRetentionOutputReference(this, "delete_retention");
  public get deleteRetention() {
    return this._deleteRetention;
  }
  public putDeleteRetention(value: RecordingMediaRetentionPolicyActionsInitiateScreenRecordingDeleteRetention) {
    this._deleteRetention.internalValue = value;
  }
  public resetDeleteRetention() {
    this._deleteRetention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteRetentionInput() {
    return this._deleteRetention.internalValue;
  }
}
export interface RecordingMediaRetentionPolicyActionsIntegrationExport {
  /**
  * The aws-s3-recording-bulk-actions-integration that the policy uses for exports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#integration_id RecordingMediaRetentionPolicy#integration_id}
  */
  readonly integrationId?: string;
  /**
  * True if the policy should export screen recordings in addition to the other conversation media. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#should_export_screen_recordings RecordingMediaRetentionPolicy#should_export_screen_recordings}
  */
  readonly shouldExportScreenRecordings?: boolean | cdktf.IResolvable;
}

export function recordingMediaRetentionPolicyActionsIntegrationExportToTerraform(struct?: RecordingMediaRetentionPolicyActionsIntegrationExportOutputReference | RecordingMediaRetentionPolicyActionsIntegrationExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    integration_id: cdktf.stringToTerraform(struct!.integrationId),
    should_export_screen_recordings: cdktf.booleanToTerraform(struct!.shouldExportScreenRecordings),
  }
}


export function recordingMediaRetentionPolicyActionsIntegrationExportToHclTerraform(struct?: RecordingMediaRetentionPolicyActionsIntegrationExportOutputReference | RecordingMediaRetentionPolicyActionsIntegrationExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    integration_id: {
      value: cdktf.stringToHclTerraform(struct!.integrationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    should_export_screen_recordings: {
      value: cdktf.booleanToHclTerraform(struct!.shouldExportScreenRecordings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyActionsIntegrationExportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyActionsIntegrationExport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._integrationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationId = this._integrationId;
    }
    if (this._shouldExportScreenRecordings !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldExportScreenRecordings = this._shouldExportScreenRecordings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyActionsIntegrationExport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._integrationId = undefined;
      this._shouldExportScreenRecordings = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._integrationId = value.integrationId;
      this._shouldExportScreenRecordings = value.shouldExportScreenRecordings;
    }
  }

  // integration_id - computed: false, optional: true, required: false
  private _integrationId?: string; 
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }
  public set integrationId(value: string) {
    this._integrationId = value;
  }
  public resetIntegrationId() {
    this._integrationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdInput() {
    return this._integrationId;
  }

  // should_export_screen_recordings - computed: false, optional: true, required: false
  private _shouldExportScreenRecordings?: boolean | cdktf.IResolvable; 
  public get shouldExportScreenRecordings() {
    return this.getBooleanAttribute('should_export_screen_recordings');
  }
  public set shouldExportScreenRecordings(value: boolean | cdktf.IResolvable) {
    this._shouldExportScreenRecordings = value;
  }
  public resetShouldExportScreenRecordings() {
    this._shouldExportScreenRecordings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldExportScreenRecordingsInput() {
    return this._shouldExportScreenRecordings;
  }
}
export interface RecordingMediaRetentionPolicyActionsMediaTranscriptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#display_name RecordingMediaRetentionPolicy#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#integration_id RecordingMediaRetentionPolicy#integration_id}
  */
  readonly integrationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#transcription_provider RecordingMediaRetentionPolicy#transcription_provider}
  */
  readonly transcriptionProvider?: string;
}

export function recordingMediaRetentionPolicyActionsMediaTranscriptionsToTerraform(struct?: RecordingMediaRetentionPolicyActionsMediaTranscriptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    integration_id: cdktf.stringToTerraform(struct!.integrationId),
    transcription_provider: cdktf.stringToTerraform(struct!.transcriptionProvider),
  }
}


export function recordingMediaRetentionPolicyActionsMediaTranscriptionsToHclTerraform(struct?: RecordingMediaRetentionPolicyActionsMediaTranscriptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    integration_id: {
      value: cdktf.stringToHclTerraform(struct!.integrationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transcription_provider: {
      value: cdktf.stringToHclTerraform(struct!.transcriptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyActionsMediaTranscriptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecordingMediaRetentionPolicyActionsMediaTranscriptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._integrationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationId = this._integrationId;
    }
    if (this._transcriptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.transcriptionProvider = this._transcriptionProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyActionsMediaTranscriptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._integrationId = undefined;
      this._transcriptionProvider = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._integrationId = value.integrationId;
      this._transcriptionProvider = value.transcriptionProvider;
    }
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

  // integration_id - computed: false, optional: true, required: false
  private _integrationId?: string; 
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }
  public set integrationId(value: string) {
    this._integrationId = value;
  }
  public resetIntegrationId() {
    this._integrationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdInput() {
    return this._integrationId;
  }

  // transcription_provider - computed: false, optional: true, required: false
  private _transcriptionProvider?: string; 
  public get transcriptionProvider() {
    return this.getStringAttribute('transcription_provider');
  }
  public set transcriptionProvider(value: string) {
    this._transcriptionProvider = value;
  }
  public resetTranscriptionProvider() {
    this._transcriptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transcriptionProviderInput() {
    return this._transcriptionProvider;
  }
}

export class RecordingMediaRetentionPolicyActionsMediaTranscriptionsList extends cdktf.ComplexList {
  public internalValue? : RecordingMediaRetentionPolicyActionsMediaTranscriptions[] | cdktf.IResolvable

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
  public get(index: number): RecordingMediaRetentionPolicyActionsMediaTranscriptionsOutputReference {
    return new RecordingMediaRetentionPolicyActionsMediaTranscriptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecordingMediaRetentionPolicyActionsRetentionDurationArchiveRetention {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#days RecordingMediaRetentionPolicy#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#storage_medium RecordingMediaRetentionPolicy#storage_medium}
  */
  readonly storageMedium?: string;
}

export function recordingMediaRetentionPolicyActionsRetentionDurationArchiveRetentionToTerraform(struct?: RecordingMediaRetentionPolicyActionsRetentionDurationArchiveRetentionOutputReference | RecordingMediaRetentionPolicyActionsRetentionDurationArchiveRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    storage_medium: cdktf.stringToTerraform(struct!.storageMedium),
  }
}


export function recordingMediaRetentionPolicyActionsRetentionDurationArchiveRetentionToHclTerraform(struct?: RecordingMediaRetentionPolicyActionsRetentionDurationArchiveRetentionOutputReference | RecordingMediaRetentionPolicyActionsRetentionDurationArchiveRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_medium: {
      value: cdktf.stringToHclTerraform(struct!.storageMedium),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyActionsRetentionDurationArchiveRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyActionsRetentionDurationArchiveRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._storageMedium !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageMedium = this._storageMedium;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyActionsRetentionDurationArchiveRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
      this._storageMedium = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
      this._storageMedium = value.storageMedium;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // storage_medium - computed: false, optional: true, required: false
  private _storageMedium?: string; 
  public get storageMedium() {
    return this.getStringAttribute('storage_medium');
  }
  public set storageMedium(value: string) {
    this._storageMedium = value;
  }
  public resetStorageMedium() {
    this._storageMedium = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageMediumInput() {
    return this._storageMedium;
  }
}
export interface RecordingMediaRetentionPolicyActionsRetentionDurationDeleteRetention {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#days RecordingMediaRetentionPolicy#days}
  */
  readonly days?: number;
}

export function recordingMediaRetentionPolicyActionsRetentionDurationDeleteRetentionToTerraform(struct?: RecordingMediaRetentionPolicyActionsRetentionDurationDeleteRetentionOutputReference | RecordingMediaRetentionPolicyActionsRetentionDurationDeleteRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
  }
}


export function recordingMediaRetentionPolicyActionsRetentionDurationDeleteRetentionToHclTerraform(struct?: RecordingMediaRetentionPolicyActionsRetentionDurationDeleteRetentionOutputReference | RecordingMediaRetentionPolicyActionsRetentionDurationDeleteRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyActionsRetentionDurationDeleteRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyActionsRetentionDurationDeleteRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyActionsRetentionDurationDeleteRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }
}
export interface RecordingMediaRetentionPolicyActionsRetentionDuration {
  /**
  * archive_retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#archive_retention RecordingMediaRetentionPolicy#archive_retention}
  */
  readonly archiveRetention?: RecordingMediaRetentionPolicyActionsRetentionDurationArchiveRetention;
  /**
  * delete_retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#delete_retention RecordingMediaRetentionPolicy#delete_retention}
  */
  readonly deleteRetention?: RecordingMediaRetentionPolicyActionsRetentionDurationDeleteRetention;
}

export function recordingMediaRetentionPolicyActionsRetentionDurationToTerraform(struct?: RecordingMediaRetentionPolicyActionsRetentionDurationOutputReference | RecordingMediaRetentionPolicyActionsRetentionDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_retention: recordingMediaRetentionPolicyActionsRetentionDurationArchiveRetentionToTerraform(struct!.archiveRetention),
    delete_retention: recordingMediaRetentionPolicyActionsRetentionDurationDeleteRetentionToTerraform(struct!.deleteRetention),
  }
}


export function recordingMediaRetentionPolicyActionsRetentionDurationToHclTerraform(struct?: RecordingMediaRetentionPolicyActionsRetentionDurationOutputReference | RecordingMediaRetentionPolicyActionsRetentionDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_retention: {
      value: recordingMediaRetentionPolicyActionsRetentionDurationArchiveRetentionToHclTerraform(struct!.archiveRetention),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyActionsRetentionDurationArchiveRetentionList",
    },
    delete_retention: {
      value: recordingMediaRetentionPolicyActionsRetentionDurationDeleteRetentionToHclTerraform(struct!.deleteRetention),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyActionsRetentionDurationDeleteRetentionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyActionsRetentionDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyActionsRetentionDuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveRetention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveRetention = this._archiveRetention?.internalValue;
    }
    if (this._deleteRetention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteRetention = this._deleteRetention?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyActionsRetentionDuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archiveRetention.internalValue = undefined;
      this._deleteRetention.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archiveRetention.internalValue = value.archiveRetention;
      this._deleteRetention.internalValue = value.deleteRetention;
    }
  }

  // archive_retention - computed: false, optional: true, required: false
  private _archiveRetention = new RecordingMediaRetentionPolicyActionsRetentionDurationArchiveRetentionOutputReference(this, "archive_retention");
  public get archiveRetention() {
    return this._archiveRetention;
  }
  public putArchiveRetention(value: RecordingMediaRetentionPolicyActionsRetentionDurationArchiveRetention) {
    this._archiveRetention.internalValue = value;
  }
  public resetArchiveRetention() {
    this._archiveRetention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveRetentionInput() {
    return this._archiveRetention.internalValue;
  }

  // delete_retention - computed: false, optional: true, required: false
  private _deleteRetention = new RecordingMediaRetentionPolicyActionsRetentionDurationDeleteRetentionOutputReference(this, "delete_retention");
  public get deleteRetention() {
    return this._deleteRetention;
  }
  public putDeleteRetention(value: RecordingMediaRetentionPolicyActionsRetentionDurationDeleteRetention) {
    this._deleteRetention.internalValue = value;
  }
  public resetDeleteRetention() {
    this._deleteRetention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteRetentionInput() {
    return this._deleteRetention.internalValue;
  }
}
export interface RecordingMediaRetentionPolicyActions {
  /**
  * true to delete the recording associated with the conversation regardless of the values of retainRecording or deleteRecording.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#always_delete RecordingMediaRetentionPolicy#always_delete}
  */
  readonly alwaysDelete?: boolean | cdktf.IResolvable;
  /**
  * true to delete the recording associated with the conversation. If retainRecording = true, this will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#delete_recording RecordingMediaRetentionPolicy#delete_recording}
  */
  readonly deleteRecording?: boolean | cdktf.IResolvable;
  /**
  * true to retain the recording associated with the conversation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#retain_recording RecordingMediaRetentionPolicy#retain_recording}
  */
  readonly retainRecording?: boolean | cdktf.IResolvable;
  /**
  * assign_calibrations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#assign_calibrations RecordingMediaRetentionPolicy#assign_calibrations}
  */
  readonly assignCalibrations?: RecordingMediaRetentionPolicyActionsAssignCalibrations[] | cdktf.IResolvable;
  /**
  * assign_evaluations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#assign_evaluations RecordingMediaRetentionPolicy#assign_evaluations}
  */
  readonly assignEvaluations?: RecordingMediaRetentionPolicyActionsAssignEvaluations[] | cdktf.IResolvable;
  /**
  * assign_metered_assignment_by_agent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#assign_metered_assignment_by_agent RecordingMediaRetentionPolicy#assign_metered_assignment_by_agent}
  */
  readonly assignMeteredAssignmentByAgent?: RecordingMediaRetentionPolicyActionsAssignMeteredAssignmentByAgent[] | cdktf.IResolvable;
  /**
  * assign_metered_evaluations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#assign_metered_evaluations RecordingMediaRetentionPolicy#assign_metered_evaluations}
  */
  readonly assignMeteredEvaluations?: RecordingMediaRetentionPolicyActionsAssignMeteredEvaluations[] | cdktf.IResolvable;
  /**
  * assign_surveys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#assign_surveys RecordingMediaRetentionPolicy#assign_surveys}
  */
  readonly assignSurveys?: RecordingMediaRetentionPolicyActionsAssignSurveys[] | cdktf.IResolvable;
  /**
  * initiate_screen_recording block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#initiate_screen_recording RecordingMediaRetentionPolicy#initiate_screen_recording}
  */
  readonly initiateScreenRecording?: RecordingMediaRetentionPolicyActionsInitiateScreenRecording;
  /**
  * integration_export block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#integration_export RecordingMediaRetentionPolicy#integration_export}
  */
  readonly integrationExport?: RecordingMediaRetentionPolicyActionsIntegrationExport;
  /**
  * media_transcriptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#media_transcriptions RecordingMediaRetentionPolicy#media_transcriptions}
  */
  readonly mediaTranscriptions?: RecordingMediaRetentionPolicyActionsMediaTranscriptions[] | cdktf.IResolvable;
  /**
  * retention_duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#retention_duration RecordingMediaRetentionPolicy#retention_duration}
  */
  readonly retentionDuration?: RecordingMediaRetentionPolicyActionsRetentionDuration;
}

export function recordingMediaRetentionPolicyActionsToTerraform(struct?: RecordingMediaRetentionPolicyActionsOutputReference | RecordingMediaRetentionPolicyActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always_delete: cdktf.booleanToTerraform(struct!.alwaysDelete),
    delete_recording: cdktf.booleanToTerraform(struct!.deleteRecording),
    retain_recording: cdktf.booleanToTerraform(struct!.retainRecording),
    assign_calibrations: cdktf.listMapper(recordingMediaRetentionPolicyActionsAssignCalibrationsToTerraform, true)(struct!.assignCalibrations),
    assign_evaluations: cdktf.listMapper(recordingMediaRetentionPolicyActionsAssignEvaluationsToTerraform, true)(struct!.assignEvaluations),
    assign_metered_assignment_by_agent: cdktf.listMapper(recordingMediaRetentionPolicyActionsAssignMeteredAssignmentByAgentToTerraform, true)(struct!.assignMeteredAssignmentByAgent),
    assign_metered_evaluations: cdktf.listMapper(recordingMediaRetentionPolicyActionsAssignMeteredEvaluationsToTerraform, true)(struct!.assignMeteredEvaluations),
    assign_surveys: cdktf.listMapper(recordingMediaRetentionPolicyActionsAssignSurveysToTerraform, true)(struct!.assignSurveys),
    initiate_screen_recording: recordingMediaRetentionPolicyActionsInitiateScreenRecordingToTerraform(struct!.initiateScreenRecording),
    integration_export: recordingMediaRetentionPolicyActionsIntegrationExportToTerraform(struct!.integrationExport),
    media_transcriptions: cdktf.listMapper(recordingMediaRetentionPolicyActionsMediaTranscriptionsToTerraform, true)(struct!.mediaTranscriptions),
    retention_duration: recordingMediaRetentionPolicyActionsRetentionDurationToTerraform(struct!.retentionDuration),
  }
}


export function recordingMediaRetentionPolicyActionsToHclTerraform(struct?: RecordingMediaRetentionPolicyActionsOutputReference | RecordingMediaRetentionPolicyActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    always_delete: {
      value: cdktf.booleanToHclTerraform(struct!.alwaysDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delete_recording: {
      value: cdktf.booleanToHclTerraform(struct!.deleteRecording),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retain_recording: {
      value: cdktf.booleanToHclTerraform(struct!.retainRecording),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    assign_calibrations: {
      value: cdktf.listMapperHcl(recordingMediaRetentionPolicyActionsAssignCalibrationsToHclTerraform, true)(struct!.assignCalibrations),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyActionsAssignCalibrationsList",
    },
    assign_evaluations: {
      value: cdktf.listMapperHcl(recordingMediaRetentionPolicyActionsAssignEvaluationsToHclTerraform, true)(struct!.assignEvaluations),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyActionsAssignEvaluationsList",
    },
    assign_metered_assignment_by_agent: {
      value: cdktf.listMapperHcl(recordingMediaRetentionPolicyActionsAssignMeteredAssignmentByAgentToHclTerraform, true)(struct!.assignMeteredAssignmentByAgent),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyActionsAssignMeteredAssignmentByAgentList",
    },
    assign_metered_evaluations: {
      value: cdktf.listMapperHcl(recordingMediaRetentionPolicyActionsAssignMeteredEvaluationsToHclTerraform, true)(struct!.assignMeteredEvaluations),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyActionsAssignMeteredEvaluationsList",
    },
    assign_surveys: {
      value: cdktf.listMapperHcl(recordingMediaRetentionPolicyActionsAssignSurveysToHclTerraform, true)(struct!.assignSurveys),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyActionsAssignSurveysList",
    },
    initiate_screen_recording: {
      value: recordingMediaRetentionPolicyActionsInitiateScreenRecordingToHclTerraform(struct!.initiateScreenRecording),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyActionsInitiateScreenRecordingList",
    },
    integration_export: {
      value: recordingMediaRetentionPolicyActionsIntegrationExportToHclTerraform(struct!.integrationExport),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyActionsIntegrationExportList",
    },
    media_transcriptions: {
      value: cdktf.listMapperHcl(recordingMediaRetentionPolicyActionsMediaTranscriptionsToHclTerraform, true)(struct!.mediaTranscriptions),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyActionsMediaTranscriptionsList",
    },
    retention_duration: {
      value: recordingMediaRetentionPolicyActionsRetentionDurationToHclTerraform(struct!.retentionDuration),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyActionsRetentionDurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alwaysDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysDelete = this._alwaysDelete;
    }
    if (this._deleteRecording !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteRecording = this._deleteRecording;
    }
    if (this._retainRecording !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainRecording = this._retainRecording;
    }
    if (this._assignCalibrations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignCalibrations = this._assignCalibrations?.internalValue;
    }
    if (this._assignEvaluations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignEvaluations = this._assignEvaluations?.internalValue;
    }
    if (this._assignMeteredAssignmentByAgent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignMeteredAssignmentByAgent = this._assignMeteredAssignmentByAgent?.internalValue;
    }
    if (this._assignMeteredEvaluations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignMeteredEvaluations = this._assignMeteredEvaluations?.internalValue;
    }
    if (this._assignSurveys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignSurveys = this._assignSurveys?.internalValue;
    }
    if (this._initiateScreenRecording?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initiateScreenRecording = this._initiateScreenRecording?.internalValue;
    }
    if (this._integrationExport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationExport = this._integrationExport?.internalValue;
    }
    if (this._mediaTranscriptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaTranscriptions = this._mediaTranscriptions?.internalValue;
    }
    if (this._retentionDuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionDuration = this._retentionDuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alwaysDelete = undefined;
      this._deleteRecording = undefined;
      this._retainRecording = undefined;
      this._assignCalibrations.internalValue = undefined;
      this._assignEvaluations.internalValue = undefined;
      this._assignMeteredAssignmentByAgent.internalValue = undefined;
      this._assignMeteredEvaluations.internalValue = undefined;
      this._assignSurveys.internalValue = undefined;
      this._initiateScreenRecording.internalValue = undefined;
      this._integrationExport.internalValue = undefined;
      this._mediaTranscriptions.internalValue = undefined;
      this._retentionDuration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alwaysDelete = value.alwaysDelete;
      this._deleteRecording = value.deleteRecording;
      this._retainRecording = value.retainRecording;
      this._assignCalibrations.internalValue = value.assignCalibrations;
      this._assignEvaluations.internalValue = value.assignEvaluations;
      this._assignMeteredAssignmentByAgent.internalValue = value.assignMeteredAssignmentByAgent;
      this._assignMeteredEvaluations.internalValue = value.assignMeteredEvaluations;
      this._assignSurveys.internalValue = value.assignSurveys;
      this._initiateScreenRecording.internalValue = value.initiateScreenRecording;
      this._integrationExport.internalValue = value.integrationExport;
      this._mediaTranscriptions.internalValue = value.mediaTranscriptions;
      this._retentionDuration.internalValue = value.retentionDuration;
    }
  }

  // always_delete - computed: false, optional: true, required: false
  private _alwaysDelete?: boolean | cdktf.IResolvable; 
  public get alwaysDelete() {
    return this.getBooleanAttribute('always_delete');
  }
  public set alwaysDelete(value: boolean | cdktf.IResolvable) {
    this._alwaysDelete = value;
  }
  public resetAlwaysDelete() {
    this._alwaysDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysDeleteInput() {
    return this._alwaysDelete;
  }

  // delete_recording - computed: false, optional: true, required: false
  private _deleteRecording?: boolean | cdktf.IResolvable; 
  public get deleteRecording() {
    return this.getBooleanAttribute('delete_recording');
  }
  public set deleteRecording(value: boolean | cdktf.IResolvable) {
    this._deleteRecording = value;
  }
  public resetDeleteRecording() {
    this._deleteRecording = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteRecordingInput() {
    return this._deleteRecording;
  }

  // retain_recording - computed: false, optional: true, required: false
  private _retainRecording?: boolean | cdktf.IResolvable; 
  public get retainRecording() {
    return this.getBooleanAttribute('retain_recording');
  }
  public set retainRecording(value: boolean | cdktf.IResolvable) {
    this._retainRecording = value;
  }
  public resetRetainRecording() {
    this._retainRecording = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainRecordingInput() {
    return this._retainRecording;
  }

  // assign_calibrations - computed: false, optional: true, required: false
  private _assignCalibrations = new RecordingMediaRetentionPolicyActionsAssignCalibrationsList(this, "assign_calibrations", false);
  public get assignCalibrations() {
    return this._assignCalibrations;
  }
  public putAssignCalibrations(value: RecordingMediaRetentionPolicyActionsAssignCalibrations[] | cdktf.IResolvable) {
    this._assignCalibrations.internalValue = value;
  }
  public resetAssignCalibrations() {
    this._assignCalibrations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignCalibrationsInput() {
    return this._assignCalibrations.internalValue;
  }

  // assign_evaluations - computed: false, optional: true, required: false
  private _assignEvaluations = new RecordingMediaRetentionPolicyActionsAssignEvaluationsList(this, "assign_evaluations", false);
  public get assignEvaluations() {
    return this._assignEvaluations;
  }
  public putAssignEvaluations(value: RecordingMediaRetentionPolicyActionsAssignEvaluations[] | cdktf.IResolvable) {
    this._assignEvaluations.internalValue = value;
  }
  public resetAssignEvaluations() {
    this._assignEvaluations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignEvaluationsInput() {
    return this._assignEvaluations.internalValue;
  }

  // assign_metered_assignment_by_agent - computed: false, optional: true, required: false
  private _assignMeteredAssignmentByAgent = new RecordingMediaRetentionPolicyActionsAssignMeteredAssignmentByAgentList(this, "assign_metered_assignment_by_agent", false);
  public get assignMeteredAssignmentByAgent() {
    return this._assignMeteredAssignmentByAgent;
  }
  public putAssignMeteredAssignmentByAgent(value: RecordingMediaRetentionPolicyActionsAssignMeteredAssignmentByAgent[] | cdktf.IResolvable) {
    this._assignMeteredAssignmentByAgent.internalValue = value;
  }
  public resetAssignMeteredAssignmentByAgent() {
    this._assignMeteredAssignmentByAgent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignMeteredAssignmentByAgentInput() {
    return this._assignMeteredAssignmentByAgent.internalValue;
  }

  // assign_metered_evaluations - computed: false, optional: true, required: false
  private _assignMeteredEvaluations = new RecordingMediaRetentionPolicyActionsAssignMeteredEvaluationsList(this, "assign_metered_evaluations", false);
  public get assignMeteredEvaluations() {
    return this._assignMeteredEvaluations;
  }
  public putAssignMeteredEvaluations(value: RecordingMediaRetentionPolicyActionsAssignMeteredEvaluations[] | cdktf.IResolvable) {
    this._assignMeteredEvaluations.internalValue = value;
  }
  public resetAssignMeteredEvaluations() {
    this._assignMeteredEvaluations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignMeteredEvaluationsInput() {
    return this._assignMeteredEvaluations.internalValue;
  }

  // assign_surveys - computed: false, optional: true, required: false
  private _assignSurveys = new RecordingMediaRetentionPolicyActionsAssignSurveysList(this, "assign_surveys", false);
  public get assignSurveys() {
    return this._assignSurveys;
  }
  public putAssignSurveys(value: RecordingMediaRetentionPolicyActionsAssignSurveys[] | cdktf.IResolvable) {
    this._assignSurveys.internalValue = value;
  }
  public resetAssignSurveys() {
    this._assignSurveys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignSurveysInput() {
    return this._assignSurveys.internalValue;
  }

  // initiate_screen_recording - computed: false, optional: true, required: false
  private _initiateScreenRecording = new RecordingMediaRetentionPolicyActionsInitiateScreenRecordingOutputReference(this, "initiate_screen_recording");
  public get initiateScreenRecording() {
    return this._initiateScreenRecording;
  }
  public putInitiateScreenRecording(value: RecordingMediaRetentionPolicyActionsInitiateScreenRecording) {
    this._initiateScreenRecording.internalValue = value;
  }
  public resetInitiateScreenRecording() {
    this._initiateScreenRecording.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initiateScreenRecordingInput() {
    return this._initiateScreenRecording.internalValue;
  }

  // integration_export - computed: false, optional: true, required: false
  private _integrationExport = new RecordingMediaRetentionPolicyActionsIntegrationExportOutputReference(this, "integration_export");
  public get integrationExport() {
    return this._integrationExport;
  }
  public putIntegrationExport(value: RecordingMediaRetentionPolicyActionsIntegrationExport) {
    this._integrationExport.internalValue = value;
  }
  public resetIntegrationExport() {
    this._integrationExport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationExportInput() {
    return this._integrationExport.internalValue;
  }

  // media_transcriptions - computed: false, optional: true, required: false
  private _mediaTranscriptions = new RecordingMediaRetentionPolicyActionsMediaTranscriptionsList(this, "media_transcriptions", false);
  public get mediaTranscriptions() {
    return this._mediaTranscriptions;
  }
  public putMediaTranscriptions(value: RecordingMediaRetentionPolicyActionsMediaTranscriptions[] | cdktf.IResolvable) {
    this._mediaTranscriptions.internalValue = value;
  }
  public resetMediaTranscriptions() {
    this._mediaTranscriptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaTranscriptionsInput() {
    return this._mediaTranscriptions.internalValue;
  }

  // retention_duration - computed: false, optional: true, required: false
  private _retentionDuration = new RecordingMediaRetentionPolicyActionsRetentionDurationOutputReference(this, "retention_duration");
  public get retentionDuration() {
    return this._retentionDuration;
  }
  public putRetentionDuration(value: RecordingMediaRetentionPolicyActionsRetentionDuration) {
    this._retentionDuration.internalValue = value;
  }
  public resetRetentionDuration() {
    this._retentionDuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDurationInput() {
    return this._retentionDuration.internalValue;
  }
}
export interface RecordingMediaRetentionPolicyConditionsDuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#duration_mode RecordingMediaRetentionPolicy#duration_mode}
  */
  readonly durationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#duration_operator RecordingMediaRetentionPolicy#duration_operator}
  */
  readonly durationOperator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#duration_range RecordingMediaRetentionPolicy#duration_range}
  */
  readonly durationRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#duration_target RecordingMediaRetentionPolicy#duration_target}
  */
  readonly durationTarget?: string;
}

export function recordingMediaRetentionPolicyConditionsDurationToTerraform(struct?: RecordingMediaRetentionPolicyConditionsDurationOutputReference | RecordingMediaRetentionPolicyConditionsDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration_mode: cdktf.stringToTerraform(struct!.durationMode),
    duration_operator: cdktf.stringToTerraform(struct!.durationOperator),
    duration_range: cdktf.stringToTerraform(struct!.durationRange),
    duration_target: cdktf.stringToTerraform(struct!.durationTarget),
  }
}


export function recordingMediaRetentionPolicyConditionsDurationToHclTerraform(struct?: RecordingMediaRetentionPolicyConditionsDurationOutputReference | RecordingMediaRetentionPolicyConditionsDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration_mode: {
      value: cdktf.stringToHclTerraform(struct!.durationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duration_operator: {
      value: cdktf.stringToHclTerraform(struct!.durationOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duration_range: {
      value: cdktf.stringToHclTerraform(struct!.durationRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duration_target: {
      value: cdktf.stringToHclTerraform(struct!.durationTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyConditionsDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyConditionsDuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._durationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationMode = this._durationMode;
    }
    if (this._durationOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationOperator = this._durationOperator;
    }
    if (this._durationRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationRange = this._durationRange;
    }
    if (this._durationTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationTarget = this._durationTarget;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyConditionsDuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._durationMode = undefined;
      this._durationOperator = undefined;
      this._durationRange = undefined;
      this._durationTarget = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._durationMode = value.durationMode;
      this._durationOperator = value.durationOperator;
      this._durationRange = value.durationRange;
      this._durationTarget = value.durationTarget;
    }
  }

  // duration_mode - computed: false, optional: true, required: false
  private _durationMode?: string; 
  public get durationMode() {
    return this.getStringAttribute('duration_mode');
  }
  public set durationMode(value: string) {
    this._durationMode = value;
  }
  public resetDurationMode() {
    this._durationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationModeInput() {
    return this._durationMode;
  }

  // duration_operator - computed: false, optional: true, required: false
  private _durationOperator?: string; 
  public get durationOperator() {
    return this.getStringAttribute('duration_operator');
  }
  public set durationOperator(value: string) {
    this._durationOperator = value;
  }
  public resetDurationOperator() {
    this._durationOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationOperatorInput() {
    return this._durationOperator;
  }

  // duration_range - computed: false, optional: true, required: false
  private _durationRange?: string; 
  public get durationRange() {
    return this.getStringAttribute('duration_range');
  }
  public set durationRange(value: string) {
    this._durationRange = value;
  }
  public resetDurationRange() {
    this._durationRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationRangeInput() {
    return this._durationRange;
  }

  // duration_target - computed: false, optional: true, required: false
  private _durationTarget?: string; 
  public get durationTarget() {
    return this.getStringAttribute('duration_target');
  }
  public set durationTarget(value: string) {
    this._durationTarget = value;
  }
  public resetDurationTarget() {
    this._durationTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationTargetInput() {
    return this._durationTarget;
  }
}
export interface RecordingMediaRetentionPolicyConditionsTimeAllowedTimeSlots {
  /**
  * Day for this time slot, Monday = 1 ... Sunday = 7
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#day RecordingMediaRetentionPolicy#day}
  */
  readonly day?: number;
  /**
  * start time in xx:xx:xx.xxx format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#start_time RecordingMediaRetentionPolicy#start_time}
  */
  readonly startTime?: string;
  /**
  * stop time in xx:xx:xx.xxx format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#stop_time RecordingMediaRetentionPolicy#stop_time}
  */
  readonly stopTime?: string;
}

export function recordingMediaRetentionPolicyConditionsTimeAllowedTimeSlotsToTerraform(struct?: RecordingMediaRetentionPolicyConditionsTimeAllowedTimeSlots | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.numberToTerraform(struct!.day),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    stop_time: cdktf.stringToTerraform(struct!.stopTime),
  }
}


export function recordingMediaRetentionPolicyConditionsTimeAllowedTimeSlotsToHclTerraform(struct?: RecordingMediaRetentionPolicyConditionsTimeAllowedTimeSlots | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.numberToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stop_time: {
      value: cdktf.stringToHclTerraform(struct!.stopTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyConditionsTimeAllowedTimeSlotsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecordingMediaRetentionPolicyConditionsTimeAllowedTimeSlots | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._stopTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopTime = this._stopTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyConditionsTimeAllowedTimeSlots | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._day = undefined;
      this._startTime = undefined;
      this._stopTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._day = value.day;
      this._startTime = value.startTime;
      this._stopTime = value.stopTime;
    }
  }

  // day - computed: false, optional: true, required: false
  private _day?: number; 
  public get day() {
    return this.getNumberAttribute('day');
  }
  public set day(value: number) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // stop_time - computed: false, optional: true, required: false
  private _stopTime?: string; 
  public get stopTime() {
    return this.getStringAttribute('stop_time');
  }
  public set stopTime(value: string) {
    this._stopTime = value;
  }
  public resetStopTime() {
    this._stopTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopTimeInput() {
    return this._stopTime;
  }
}

export class RecordingMediaRetentionPolicyConditionsTimeAllowedTimeSlotsList extends cdktf.ComplexList {
  public internalValue? : RecordingMediaRetentionPolicyConditionsTimeAllowedTimeSlots[] | cdktf.IResolvable

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
  public get(index: number): RecordingMediaRetentionPolicyConditionsTimeAllowedTimeSlotsOutputReference {
    return new RecordingMediaRetentionPolicyConditionsTimeAllowedTimeSlotsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecordingMediaRetentionPolicyConditionsTimeAllowed {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#empty RecordingMediaRetentionPolicy#empty}
  */
  readonly empty?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#time_zone_id RecordingMediaRetentionPolicy#time_zone_id}
  */
  readonly timeZoneId?: string;
  /**
  * time_slots block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#time_slots RecordingMediaRetentionPolicy#time_slots}
  */
  readonly timeSlots?: RecordingMediaRetentionPolicyConditionsTimeAllowedTimeSlots[] | cdktf.IResolvable;
}

export function recordingMediaRetentionPolicyConditionsTimeAllowedToTerraform(struct?: RecordingMediaRetentionPolicyConditionsTimeAllowedOutputReference | RecordingMediaRetentionPolicyConditionsTimeAllowed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    empty: cdktf.booleanToTerraform(struct!.empty),
    time_zone_id: cdktf.stringToTerraform(struct!.timeZoneId),
    time_slots: cdktf.listMapper(recordingMediaRetentionPolicyConditionsTimeAllowedTimeSlotsToTerraform, true)(struct!.timeSlots),
  }
}


export function recordingMediaRetentionPolicyConditionsTimeAllowedToHclTerraform(struct?: RecordingMediaRetentionPolicyConditionsTimeAllowedOutputReference | RecordingMediaRetentionPolicyConditionsTimeAllowed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    empty: {
      value: cdktf.booleanToHclTerraform(struct!.empty),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    time_zone_id: {
      value: cdktf.stringToHclTerraform(struct!.timeZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_slots: {
      value: cdktf.listMapperHcl(recordingMediaRetentionPolicyConditionsTimeAllowedTimeSlotsToHclTerraform, true)(struct!.timeSlots),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyConditionsTimeAllowedTimeSlotsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyConditionsTimeAllowedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyConditionsTimeAllowed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._empty !== undefined) {
      hasAnyValues = true;
      internalValueResult.empty = this._empty;
    }
    if (this._timeZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZoneId = this._timeZoneId;
    }
    if (this._timeSlots?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeSlots = this._timeSlots?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyConditionsTimeAllowed | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._empty = undefined;
      this._timeZoneId = undefined;
      this._timeSlots.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._empty = value.empty;
      this._timeZoneId = value.timeZoneId;
      this._timeSlots.internalValue = value.timeSlots;
    }
  }

  // empty - computed: false, optional: true, required: false
  private _empty?: boolean | cdktf.IResolvable; 
  public get empty() {
    return this.getBooleanAttribute('empty');
  }
  public set empty(value: boolean | cdktf.IResolvable) {
    this._empty = value;
  }
  public resetEmpty() {
    this._empty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyInput() {
    return this._empty;
  }

  // time_zone_id - computed: false, optional: true, required: false
  private _timeZoneId?: string; 
  public get timeZoneId() {
    return this.getStringAttribute('time_zone_id');
  }
  public set timeZoneId(value: string) {
    this._timeZoneId = value;
  }
  public resetTimeZoneId() {
    this._timeZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneIdInput() {
    return this._timeZoneId;
  }

  // time_slots - computed: false, optional: true, required: false
  private _timeSlots = new RecordingMediaRetentionPolicyConditionsTimeAllowedTimeSlotsList(this, "time_slots", false);
  public get timeSlots() {
    return this._timeSlots;
  }
  public putTimeSlots(value: RecordingMediaRetentionPolicyConditionsTimeAllowedTimeSlots[] | cdktf.IResolvable) {
    this._timeSlots.internalValue = value;
  }
  public resetTimeSlots() {
    this._timeSlots.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSlotsInput() {
    return this._timeSlots.internalValue;
  }
}
export interface RecordingMediaRetentionPolicyConditions {
  /**
  * This condition is to filter out conversation with and without customer participation.Valid values: YES, NO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#customer_participation RecordingMediaRetentionPolicy#customer_participation}
  */
  readonly customerParticipation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#date_ranges RecordingMediaRetentionPolicy#date_ranges}
  */
  readonly dateRanges?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#directions RecordingMediaRetentionPolicy#directions}
  */
  readonly directions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#for_queue_ids RecordingMediaRetentionPolicy#for_queue_ids}
  */
  readonly forQueueIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#for_user_ids RecordingMediaRetentionPolicy#for_user_ids}
  */
  readonly forUserIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#media_types RecordingMediaRetentionPolicy#media_types}
  */
  readonly mediaTypes?: string[];
  /**
  * Teams to match conversations against
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#team_ids RecordingMediaRetentionPolicy#team_ids}
  */
  readonly teamIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#wrapup_code_ids RecordingMediaRetentionPolicy#wrapup_code_ids}
  */
  readonly wrapupCodeIds?: string[];
  /**
  * duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#duration RecordingMediaRetentionPolicy#duration}
  */
  readonly duration?: RecordingMediaRetentionPolicyConditionsDuration;
  /**
  * time_allowed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#time_allowed RecordingMediaRetentionPolicy#time_allowed}
  */
  readonly timeAllowed?: RecordingMediaRetentionPolicyConditionsTimeAllowed;
}

export function recordingMediaRetentionPolicyConditionsToTerraform(struct?: RecordingMediaRetentionPolicyConditionsOutputReference | RecordingMediaRetentionPolicyConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customer_participation: cdktf.stringToTerraform(struct!.customerParticipation),
    date_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dateRanges),
    directions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.directions),
    for_queue_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.forQueueIds),
    for_user_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.forUserIds),
    media_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mediaTypes),
    team_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.teamIds),
    wrapup_code_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.wrapupCodeIds),
    duration: recordingMediaRetentionPolicyConditionsDurationToTerraform(struct!.duration),
    time_allowed: recordingMediaRetentionPolicyConditionsTimeAllowedToTerraform(struct!.timeAllowed),
  }
}


export function recordingMediaRetentionPolicyConditionsToHclTerraform(struct?: RecordingMediaRetentionPolicyConditionsOutputReference | RecordingMediaRetentionPolicyConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    customer_participation: {
      value: cdktf.stringToHclTerraform(struct!.customerParticipation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dateRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    directions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.directions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    for_queue_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.forQueueIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    for_user_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.forUserIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    media_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mediaTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    team_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.teamIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    wrapup_code_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.wrapupCodeIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    duration: {
      value: recordingMediaRetentionPolicyConditionsDurationToHclTerraform(struct!.duration),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyConditionsDurationList",
    },
    time_allowed: {
      value: recordingMediaRetentionPolicyConditionsTimeAllowedToHclTerraform(struct!.timeAllowed),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyConditionsTimeAllowedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customerParticipation !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerParticipation = this._customerParticipation;
    }
    if (this._dateRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateRanges = this._dateRanges;
    }
    if (this._directions !== undefined) {
      hasAnyValues = true;
      internalValueResult.directions = this._directions;
    }
    if (this._forQueueIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.forQueueIds = this._forQueueIds;
    }
    if (this._forUserIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.forUserIds = this._forUserIds;
    }
    if (this._mediaTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaTypes = this._mediaTypes;
    }
    if (this._teamIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.teamIds = this._teamIds;
    }
    if (this._wrapupCodeIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.wrapupCodeIds = this._wrapupCodeIds;
    }
    if (this._duration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration?.internalValue;
    }
    if (this._timeAllowed?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeAllowed = this._timeAllowed?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customerParticipation = undefined;
      this._dateRanges = undefined;
      this._directions = undefined;
      this._forQueueIds = undefined;
      this._forUserIds = undefined;
      this._mediaTypes = undefined;
      this._teamIds = undefined;
      this._wrapupCodeIds = undefined;
      this._duration.internalValue = undefined;
      this._timeAllowed.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customerParticipation = value.customerParticipation;
      this._dateRanges = value.dateRanges;
      this._directions = value.directions;
      this._forQueueIds = value.forQueueIds;
      this._forUserIds = value.forUserIds;
      this._mediaTypes = value.mediaTypes;
      this._teamIds = value.teamIds;
      this._wrapupCodeIds = value.wrapupCodeIds;
      this._duration.internalValue = value.duration;
      this._timeAllowed.internalValue = value.timeAllowed;
    }
  }

  // customer_participation - computed: false, optional: true, required: false
  private _customerParticipation?: string; 
  public get customerParticipation() {
    return this.getStringAttribute('customer_participation');
  }
  public set customerParticipation(value: string) {
    this._customerParticipation = value;
  }
  public resetCustomerParticipation() {
    this._customerParticipation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerParticipationInput() {
    return this._customerParticipation;
  }

  // date_ranges - computed: false, optional: true, required: false
  private _dateRanges?: string[]; 
  public get dateRanges() {
    return this.getListAttribute('date_ranges');
  }
  public set dateRanges(value: string[]) {
    this._dateRanges = value;
  }
  public resetDateRanges() {
    this._dateRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateRangesInput() {
    return this._dateRanges;
  }

  // directions - computed: false, optional: true, required: false
  private _directions?: string[]; 
  public get directions() {
    return this.getListAttribute('directions');
  }
  public set directions(value: string[]) {
    this._directions = value;
  }
  public resetDirections() {
    this._directions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionsInput() {
    return this._directions;
  }

  // for_queue_ids - computed: false, optional: true, required: false
  private _forQueueIds?: string[]; 
  public get forQueueIds() {
    return this.getListAttribute('for_queue_ids');
  }
  public set forQueueIds(value: string[]) {
    this._forQueueIds = value;
  }
  public resetForQueueIds() {
    this._forQueueIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forQueueIdsInput() {
    return this._forQueueIds;
  }

  // for_user_ids - computed: false, optional: true, required: false
  private _forUserIds?: string[]; 
  public get forUserIds() {
    return this.getListAttribute('for_user_ids');
  }
  public set forUserIds(value: string[]) {
    this._forUserIds = value;
  }
  public resetForUserIds() {
    this._forUserIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forUserIdsInput() {
    return this._forUserIds;
  }

  // media_types - computed: false, optional: true, required: false
  private _mediaTypes?: string[]; 
  public get mediaTypes() {
    return this.getListAttribute('media_types');
  }
  public set mediaTypes(value: string[]) {
    this._mediaTypes = value;
  }
  public resetMediaTypes() {
    this._mediaTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaTypesInput() {
    return this._mediaTypes;
  }

  // team_ids - computed: false, optional: true, required: false
  private _teamIds?: string[]; 
  public get teamIds() {
    return cdktf.Fn.tolist(this.getListAttribute('team_ids'));
  }
  public set teamIds(value: string[]) {
    this._teamIds = value;
  }
  public resetTeamIds() {
    this._teamIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdsInput() {
    return this._teamIds;
  }

  // wrapup_code_ids - computed: false, optional: true, required: false
  private _wrapupCodeIds?: string[]; 
  public get wrapupCodeIds() {
    return this.getListAttribute('wrapup_code_ids');
  }
  public set wrapupCodeIds(value: string[]) {
    this._wrapupCodeIds = value;
  }
  public resetWrapupCodeIds() {
    this._wrapupCodeIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wrapupCodeIdsInput() {
    return this._wrapupCodeIds;
  }

  // duration - computed: false, optional: true, required: false
  private _duration = new RecordingMediaRetentionPolicyConditionsDurationOutputReference(this, "duration");
  public get duration() {
    return this._duration;
  }
  public putDuration(value: RecordingMediaRetentionPolicyConditionsDuration) {
    this._duration.internalValue = value;
  }
  public resetDuration() {
    this._duration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration.internalValue;
  }

  // time_allowed - computed: false, optional: true, required: false
  private _timeAllowed = new RecordingMediaRetentionPolicyConditionsTimeAllowedOutputReference(this, "time_allowed");
  public get timeAllowed() {
    return this._timeAllowed;
  }
  public putTimeAllowed(value: RecordingMediaRetentionPolicyConditionsTimeAllowed) {
    this._timeAllowed.internalValue = value;
  }
  public resetTimeAllowed() {
    this._timeAllowed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeAllowedInput() {
    return this._timeAllowed.internalValue;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignCalibrations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#calibrator_id RecordingMediaRetentionPolicy#calibrator_id}
  */
  readonly calibratorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#evaluation_form_id RecordingMediaRetentionPolicy#evaluation_form_id}
  */
  readonly evaluationFormId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#evaluator_ids RecordingMediaRetentionPolicy#evaluator_ids}
  */
  readonly evaluatorIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#expert_evaluator_id RecordingMediaRetentionPolicy#expert_evaluator_id}
  */
  readonly expertEvaluatorId?: string;
}

export function recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignCalibrationsToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignCalibrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    calibrator_id: cdktf.stringToTerraform(struct!.calibratorId),
    evaluation_form_id: cdktf.stringToTerraform(struct!.evaluationFormId),
    evaluator_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.evaluatorIds),
    expert_evaluator_id: cdktf.stringToTerraform(struct!.expertEvaluatorId),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignCalibrationsToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignCalibrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    calibrator_id: {
      value: cdktf.stringToHclTerraform(struct!.calibratorId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evaluation_form_id: {
      value: cdktf.stringToHclTerraform(struct!.evaluationFormId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evaluator_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.evaluatorIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    expert_evaluator_id: {
      value: cdktf.stringToHclTerraform(struct!.expertEvaluatorId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignCalibrationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignCalibrations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._calibratorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.calibratorId = this._calibratorId;
    }
    if (this._evaluationFormId !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationFormId = this._evaluationFormId;
    }
    if (this._evaluatorIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluatorIds = this._evaluatorIds;
    }
    if (this._expertEvaluatorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.expertEvaluatorId = this._expertEvaluatorId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignCalibrations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._calibratorId = undefined;
      this._evaluationFormId = undefined;
      this._evaluatorIds = undefined;
      this._expertEvaluatorId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._calibratorId = value.calibratorId;
      this._evaluationFormId = value.evaluationFormId;
      this._evaluatorIds = value.evaluatorIds;
      this._expertEvaluatorId = value.expertEvaluatorId;
    }
  }

  // calibrator_id - computed: false, optional: true, required: false
  private _calibratorId?: string; 
  public get calibratorId() {
    return this.getStringAttribute('calibrator_id');
  }
  public set calibratorId(value: string) {
    this._calibratorId = value;
  }
  public resetCalibratorId() {
    this._calibratorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calibratorIdInput() {
    return this._calibratorId;
  }

  // evaluation_form_id - computed: false, optional: true, required: false
  private _evaluationFormId?: string; 
  public get evaluationFormId() {
    return this.getStringAttribute('evaluation_form_id');
  }
  public set evaluationFormId(value: string) {
    this._evaluationFormId = value;
  }
  public resetEvaluationFormId() {
    this._evaluationFormId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationFormIdInput() {
    return this._evaluationFormId;
  }

  // evaluator_ids - computed: false, optional: true, required: false
  private _evaluatorIds?: string[]; 
  public get evaluatorIds() {
    return this.getListAttribute('evaluator_ids');
  }
  public set evaluatorIds(value: string[]) {
    this._evaluatorIds = value;
  }
  public resetEvaluatorIds() {
    this._evaluatorIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluatorIdsInput() {
    return this._evaluatorIds;
  }

  // expert_evaluator_id - computed: false, optional: true, required: false
  private _expertEvaluatorId?: string; 
  public get expertEvaluatorId() {
    return this.getStringAttribute('expert_evaluator_id');
  }
  public set expertEvaluatorId(value: string) {
    this._expertEvaluatorId = value;
  }
  public resetExpertEvaluatorId() {
    this._expertEvaluatorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expertEvaluatorIdInput() {
    return this._expertEvaluatorId;
  }
}

export class RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignCalibrationsList extends cdktf.ComplexList {
  public internalValue? : RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignCalibrations[] | cdktf.IResolvable

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
  public get(index: number): RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignCalibrationsOutputReference {
    return new RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignCalibrationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignEvaluations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#evaluation_form_id RecordingMediaRetentionPolicy#evaluation_form_id}
  */
  readonly evaluationFormId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#user_id RecordingMediaRetentionPolicy#user_id}
  */
  readonly userId?: string;
}

export function recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignEvaluationsToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignEvaluations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluation_form_id: cdktf.stringToTerraform(struct!.evaluationFormId),
    user_id: cdktf.stringToTerraform(struct!.userId),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignEvaluationsToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignEvaluations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    evaluation_form_id: {
      value: cdktf.stringToHclTerraform(struct!.evaluationFormId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_id: {
      value: cdktf.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignEvaluationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignEvaluations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluationFormId !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationFormId = this._evaluationFormId;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignEvaluations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evaluationFormId = undefined;
      this._userId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evaluationFormId = value.evaluationFormId;
      this._userId = value.userId;
    }
  }

  // evaluation_form_id - computed: false, optional: true, required: false
  private _evaluationFormId?: string; 
  public get evaluationFormId() {
    return this.getStringAttribute('evaluation_form_id');
  }
  public set evaluationFormId(value: string) {
    this._evaluationFormId = value;
  }
  public resetEvaluationFormId() {
    this._evaluationFormId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationFormIdInput() {
    return this._evaluationFormId;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }
}

export class RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignEvaluationsList extends cdktf.ComplexList {
  public internalValue? : RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignEvaluations[] | cdktf.IResolvable

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
  public get(index: number): RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignEvaluationsOutputReference {
    return new RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignEvaluationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredAssignmentByAgentTimeInterval {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#days RecordingMediaRetentionPolicy#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#hours RecordingMediaRetentionPolicy#hours}
  */
  readonly hours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#months RecordingMediaRetentionPolicy#months}
  */
  readonly months?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#weeks RecordingMediaRetentionPolicy#weeks}
  */
  readonly weeks?: number;
}

export function recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredAssignmentByAgentTimeIntervalToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredAssignmentByAgentTimeIntervalOutputReference | RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredAssignmentByAgentTimeInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    hours: cdktf.numberToTerraform(struct!.hours),
    months: cdktf.numberToTerraform(struct!.months),
    weeks: cdktf.numberToTerraform(struct!.weeks),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredAssignmentByAgentTimeIntervalToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredAssignmentByAgentTimeIntervalOutputReference | RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredAssignmentByAgentTimeInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    months: {
      value: cdktf.numberToHclTerraform(struct!.months),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weeks: {
      value: cdktf.numberToHclTerraform(struct!.weeks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredAssignmentByAgentTimeIntervalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredAssignmentByAgentTimeInterval | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._months !== undefined) {
      hasAnyValues = true;
      internalValueResult.months = this._months;
    }
    if (this._weeks !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeks = this._weeks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredAssignmentByAgentTimeInterval | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
      this._hours = undefined;
      this._months = undefined;
      this._weeks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
      this._hours = value.hours;
      this._months = value.months;
      this._weeks = value.weeks;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // months - computed: false, optional: true, required: false
  private _months?: number; 
  public get months() {
    return this.getNumberAttribute('months');
  }
  public set months(value: number) {
    this._months = value;
  }
  public resetMonths() {
    this._months = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthsInput() {
    return this._months;
  }

  // weeks - computed: false, optional: true, required: false
  private _weeks?: number; 
  public get weeks() {
    return this.getNumberAttribute('weeks');
  }
  public set weeks(value: number) {
    this._weeks = value;
  }
  public resetWeeks() {
    this._weeks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeksInput() {
    return this._weeks;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredAssignmentByAgent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#evaluation_form_id RecordingMediaRetentionPolicy#evaluation_form_id}
  */
  readonly evaluationFormId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#evaluator_ids RecordingMediaRetentionPolicy#evaluator_ids}
  */
  readonly evaluatorIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#max_number_evaluations RecordingMediaRetentionPolicy#max_number_evaluations}
  */
  readonly maxNumberEvaluations?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#time_zone RecordingMediaRetentionPolicy#time_zone}
  */
  readonly timeZone?: string;
  /**
  * time_interval block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#time_interval RecordingMediaRetentionPolicy#time_interval}
  */
  readonly timeInterval?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredAssignmentByAgentTimeInterval;
}

export function recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredAssignmentByAgentToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredAssignmentByAgent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluation_form_id: cdktf.stringToTerraform(struct!.evaluationFormId),
    evaluator_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.evaluatorIds),
    max_number_evaluations: cdktf.numberToTerraform(struct!.maxNumberEvaluations),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    time_interval: recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredAssignmentByAgentTimeIntervalToTerraform(struct!.timeInterval),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredAssignmentByAgentToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredAssignmentByAgent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    evaluation_form_id: {
      value: cdktf.stringToHclTerraform(struct!.evaluationFormId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evaluator_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.evaluatorIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_number_evaluations: {
      value: cdktf.numberToHclTerraform(struct!.maxNumberEvaluations),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_interval: {
      value: recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredAssignmentByAgentTimeIntervalToHclTerraform(struct!.timeInterval),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredAssignmentByAgentTimeIntervalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredAssignmentByAgentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredAssignmentByAgent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluationFormId !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationFormId = this._evaluationFormId;
    }
    if (this._evaluatorIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluatorIds = this._evaluatorIds;
    }
    if (this._maxNumberEvaluations !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNumberEvaluations = this._maxNumberEvaluations;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    if (this._timeInterval?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeInterval = this._timeInterval?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredAssignmentByAgent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evaluationFormId = undefined;
      this._evaluatorIds = undefined;
      this._maxNumberEvaluations = undefined;
      this._timeZone = undefined;
      this._timeInterval.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evaluationFormId = value.evaluationFormId;
      this._evaluatorIds = value.evaluatorIds;
      this._maxNumberEvaluations = value.maxNumberEvaluations;
      this._timeZone = value.timeZone;
      this._timeInterval.internalValue = value.timeInterval;
    }
  }

  // evaluation_form_id - computed: false, optional: true, required: false
  private _evaluationFormId?: string; 
  public get evaluationFormId() {
    return this.getStringAttribute('evaluation_form_id');
  }
  public set evaluationFormId(value: string) {
    this._evaluationFormId = value;
  }
  public resetEvaluationFormId() {
    this._evaluationFormId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationFormIdInput() {
    return this._evaluationFormId;
  }

  // evaluator_ids - computed: false, optional: true, required: false
  private _evaluatorIds?: string[]; 
  public get evaluatorIds() {
    return this.getListAttribute('evaluator_ids');
  }
  public set evaluatorIds(value: string[]) {
    this._evaluatorIds = value;
  }
  public resetEvaluatorIds() {
    this._evaluatorIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluatorIdsInput() {
    return this._evaluatorIds;
  }

  // max_number_evaluations - computed: false, optional: true, required: false
  private _maxNumberEvaluations?: number; 
  public get maxNumberEvaluations() {
    return this.getNumberAttribute('max_number_evaluations');
  }
  public set maxNumberEvaluations(value: number) {
    this._maxNumberEvaluations = value;
  }
  public resetMaxNumberEvaluations() {
    this._maxNumberEvaluations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberEvaluationsInput() {
    return this._maxNumberEvaluations;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // time_interval - computed: false, optional: true, required: false
  private _timeInterval = new RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredAssignmentByAgentTimeIntervalOutputReference(this, "time_interval");
  public get timeInterval() {
    return this._timeInterval;
  }
  public putTimeInterval(value: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredAssignmentByAgentTimeInterval) {
    this._timeInterval.internalValue = value;
  }
  public resetTimeInterval() {
    this._timeInterval.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeIntervalInput() {
    return this._timeInterval.internalValue;
  }
}

export class RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredAssignmentByAgentList extends cdktf.ComplexList {
  public internalValue? : RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredAssignmentByAgent[] | cdktf.IResolvable

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
  public get(index: number): RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredAssignmentByAgentOutputReference {
    return new RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredAssignmentByAgentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredEvaluationsTimeInterval {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#days RecordingMediaRetentionPolicy#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#hours RecordingMediaRetentionPolicy#hours}
  */
  readonly hours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#months RecordingMediaRetentionPolicy#months}
  */
  readonly months?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#weeks RecordingMediaRetentionPolicy#weeks}
  */
  readonly weeks?: number;
}

export function recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredEvaluationsTimeIntervalToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredEvaluationsTimeIntervalOutputReference | RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredEvaluationsTimeInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    hours: cdktf.numberToTerraform(struct!.hours),
    months: cdktf.numberToTerraform(struct!.months),
    weeks: cdktf.numberToTerraform(struct!.weeks),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredEvaluationsTimeIntervalToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredEvaluationsTimeIntervalOutputReference | RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredEvaluationsTimeInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    months: {
      value: cdktf.numberToHclTerraform(struct!.months),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weeks: {
      value: cdktf.numberToHclTerraform(struct!.weeks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredEvaluationsTimeIntervalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredEvaluationsTimeInterval | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._months !== undefined) {
      hasAnyValues = true;
      internalValueResult.months = this._months;
    }
    if (this._weeks !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeks = this._weeks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredEvaluationsTimeInterval | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
      this._hours = undefined;
      this._months = undefined;
      this._weeks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
      this._hours = value.hours;
      this._months = value.months;
      this._weeks = value.weeks;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // months - computed: false, optional: true, required: false
  private _months?: number; 
  public get months() {
    return this.getNumberAttribute('months');
  }
  public set months(value: number) {
    this._months = value;
  }
  public resetMonths() {
    this._months = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthsInput() {
    return this._months;
  }

  // weeks - computed: false, optional: true, required: false
  private _weeks?: number; 
  public get weeks() {
    return this.getNumberAttribute('weeks');
  }
  public set weeks(value: number) {
    this._weeks = value;
  }
  public resetWeeks() {
    this._weeks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeksInput() {
    return this._weeks;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredEvaluations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#assign_to_active_user RecordingMediaRetentionPolicy#assign_to_active_user}
  */
  readonly assignToActiveUser?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#evaluation_form_id RecordingMediaRetentionPolicy#evaluation_form_id}
  */
  readonly evaluationFormId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#evaluator_ids RecordingMediaRetentionPolicy#evaluator_ids}
  */
  readonly evaluatorIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#max_number_evaluations RecordingMediaRetentionPolicy#max_number_evaluations}
  */
  readonly maxNumberEvaluations?: number;
  /**
  * time_interval block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#time_interval RecordingMediaRetentionPolicy#time_interval}
  */
  readonly timeInterval?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredEvaluationsTimeInterval;
}

export function recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredEvaluationsToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredEvaluations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_to_active_user: cdktf.booleanToTerraform(struct!.assignToActiveUser),
    evaluation_form_id: cdktf.stringToTerraform(struct!.evaluationFormId),
    evaluator_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.evaluatorIds),
    max_number_evaluations: cdktf.numberToTerraform(struct!.maxNumberEvaluations),
    time_interval: recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredEvaluationsTimeIntervalToTerraform(struct!.timeInterval),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredEvaluationsToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredEvaluations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assign_to_active_user: {
      value: cdktf.booleanToHclTerraform(struct!.assignToActiveUser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    evaluation_form_id: {
      value: cdktf.stringToHclTerraform(struct!.evaluationFormId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evaluator_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.evaluatorIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_number_evaluations: {
      value: cdktf.numberToHclTerraform(struct!.maxNumberEvaluations),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_interval: {
      value: recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredEvaluationsTimeIntervalToHclTerraform(struct!.timeInterval),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredEvaluationsTimeIntervalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredEvaluationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredEvaluations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignToActiveUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignToActiveUser = this._assignToActiveUser;
    }
    if (this._evaluationFormId !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationFormId = this._evaluationFormId;
    }
    if (this._evaluatorIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluatorIds = this._evaluatorIds;
    }
    if (this._maxNumberEvaluations !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNumberEvaluations = this._maxNumberEvaluations;
    }
    if (this._timeInterval?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeInterval = this._timeInterval?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredEvaluations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignToActiveUser = undefined;
      this._evaluationFormId = undefined;
      this._evaluatorIds = undefined;
      this._maxNumberEvaluations = undefined;
      this._timeInterval.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assignToActiveUser = value.assignToActiveUser;
      this._evaluationFormId = value.evaluationFormId;
      this._evaluatorIds = value.evaluatorIds;
      this._maxNumberEvaluations = value.maxNumberEvaluations;
      this._timeInterval.internalValue = value.timeInterval;
    }
  }

  // assign_to_active_user - computed: false, optional: true, required: false
  private _assignToActiveUser?: boolean | cdktf.IResolvable; 
  public get assignToActiveUser() {
    return this.getBooleanAttribute('assign_to_active_user');
  }
  public set assignToActiveUser(value: boolean | cdktf.IResolvable) {
    this._assignToActiveUser = value;
  }
  public resetAssignToActiveUser() {
    this._assignToActiveUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignToActiveUserInput() {
    return this._assignToActiveUser;
  }

  // evaluation_form_id - computed: false, optional: true, required: false
  private _evaluationFormId?: string; 
  public get evaluationFormId() {
    return this.getStringAttribute('evaluation_form_id');
  }
  public set evaluationFormId(value: string) {
    this._evaluationFormId = value;
  }
  public resetEvaluationFormId() {
    this._evaluationFormId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationFormIdInput() {
    return this._evaluationFormId;
  }

  // evaluator_ids - computed: false, optional: true, required: false
  private _evaluatorIds?: string[]; 
  public get evaluatorIds() {
    return this.getListAttribute('evaluator_ids');
  }
  public set evaluatorIds(value: string[]) {
    this._evaluatorIds = value;
  }
  public resetEvaluatorIds() {
    this._evaluatorIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluatorIdsInput() {
    return this._evaluatorIds;
  }

  // max_number_evaluations - computed: false, optional: true, required: false
  private _maxNumberEvaluations?: number; 
  public get maxNumberEvaluations() {
    return this.getNumberAttribute('max_number_evaluations');
  }
  public set maxNumberEvaluations(value: number) {
    this._maxNumberEvaluations = value;
  }
  public resetMaxNumberEvaluations() {
    this._maxNumberEvaluations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberEvaluationsInput() {
    return this._maxNumberEvaluations;
  }

  // time_interval - computed: false, optional: true, required: false
  private _timeInterval = new RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredEvaluationsTimeIntervalOutputReference(this, "time_interval");
  public get timeInterval() {
    return this._timeInterval;
  }
  public putTimeInterval(value: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredEvaluationsTimeInterval) {
    this._timeInterval.internalValue = value;
  }
  public resetTimeInterval() {
    this._timeInterval.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeIntervalInput() {
    return this._timeInterval.internalValue;
  }
}

export class RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredEvaluationsList extends cdktf.ComplexList {
  public internalValue? : RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredEvaluations[] | cdktf.IResolvable

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
  public get(index: number): RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredEvaluationsOutputReference {
    return new RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredEvaluationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignSurveys {
  /**
  * The UUID reference to the flow associated with this survey.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#flow_id RecordingMediaRetentionPolicy#flow_id}
  */
  readonly flowId?: string;
  /**
  * An ISO 8601 repeated interval consisting of the number of repetitions, the start datetime, and the interval (e.g. R2/2018-03-01T13:00:00Z/P1M10DT2H30M). Total duration must not exceed 90 days. Defaults to `R1/P0M`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#invite_time_interval RecordingMediaRetentionPolicy#invite_time_interval}
  */
  readonly inviteTimeInterval?: string;
  /**
  * Validated email domain, required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#sending_domain RecordingMediaRetentionPolicy#sending_domain}
  */
  readonly sendingDomain: string;
  /**
  * User together with sendingDomain used to send email, null to use no-reply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#sending_user RecordingMediaRetentionPolicy#sending_user}
  */
  readonly sendingUser?: string;
  /**
  * The survey form used for this survey.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#survey_form_name RecordingMediaRetentionPolicy#survey_form_name}
  */
  readonly surveyFormName?: string;
}

export function recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignSurveysToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignSurveys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flow_id: cdktf.stringToTerraform(struct!.flowId),
    invite_time_interval: cdktf.stringToTerraform(struct!.inviteTimeInterval),
    sending_domain: cdktf.stringToTerraform(struct!.sendingDomain),
    sending_user: cdktf.stringToTerraform(struct!.sendingUser),
    survey_form_name: cdktf.stringToTerraform(struct!.surveyFormName),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignSurveysToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignSurveys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flow_id: {
      value: cdktf.stringToHclTerraform(struct!.flowId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invite_time_interval: {
      value: cdktf.stringToHclTerraform(struct!.inviteTimeInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sending_domain: {
      value: cdktf.stringToHclTerraform(struct!.sendingDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sending_user: {
      value: cdktf.stringToHclTerraform(struct!.sendingUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    survey_form_name: {
      value: cdktf.stringToHclTerraform(struct!.surveyFormName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignSurveysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignSurveys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flowId !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowId = this._flowId;
    }
    if (this._inviteTimeInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.inviteTimeInterval = this._inviteTimeInterval;
    }
    if (this._sendingDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendingDomain = this._sendingDomain;
    }
    if (this._sendingUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendingUser = this._sendingUser;
    }
    if (this._surveyFormName !== undefined) {
      hasAnyValues = true;
      internalValueResult.surveyFormName = this._surveyFormName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignSurveys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flowId = undefined;
      this._inviteTimeInterval = undefined;
      this._sendingDomain = undefined;
      this._sendingUser = undefined;
      this._surveyFormName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flowId = value.flowId;
      this._inviteTimeInterval = value.inviteTimeInterval;
      this._sendingDomain = value.sendingDomain;
      this._sendingUser = value.sendingUser;
      this._surveyFormName = value.surveyFormName;
    }
  }

  // flow_id - computed: false, optional: true, required: false
  private _flowId?: string; 
  public get flowId() {
    return this.getStringAttribute('flow_id');
  }
  public set flowId(value: string) {
    this._flowId = value;
  }
  public resetFlowId() {
    this._flowId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowIdInput() {
    return this._flowId;
  }

  // invite_time_interval - computed: false, optional: true, required: false
  private _inviteTimeInterval?: string; 
  public get inviteTimeInterval() {
    return this.getStringAttribute('invite_time_interval');
  }
  public set inviteTimeInterval(value: string) {
    this._inviteTimeInterval = value;
  }
  public resetInviteTimeInterval() {
    this._inviteTimeInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inviteTimeIntervalInput() {
    return this._inviteTimeInterval;
  }

  // sending_domain - computed: false, optional: false, required: true
  private _sendingDomain?: string; 
  public get sendingDomain() {
    return this.getStringAttribute('sending_domain');
  }
  public set sendingDomain(value: string) {
    this._sendingDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sendingDomainInput() {
    return this._sendingDomain;
  }

  // sending_user - computed: false, optional: true, required: false
  private _sendingUser?: string; 
  public get sendingUser() {
    return this.getStringAttribute('sending_user');
  }
  public set sendingUser(value: string) {
    this._sendingUser = value;
  }
  public resetSendingUser() {
    this._sendingUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendingUserInput() {
    return this._sendingUser;
  }

  // survey_form_name - computed: false, optional: true, required: false
  private _surveyFormName?: string; 
  public get surveyFormName() {
    return this.getStringAttribute('survey_form_name');
  }
  public set surveyFormName(value: string) {
    this._surveyFormName = value;
  }
  public resetSurveyFormName() {
    this._surveyFormName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get surveyFormNameInput() {
    return this._surveyFormName;
  }
}

export class RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignSurveysList extends cdktf.ComplexList {
  public internalValue? : RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignSurveys[] | cdktf.IResolvable

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
  public get(index: number): RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignSurveysOutputReference {
    return new RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignSurveysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecordingArchiveRetention {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#days RecordingMediaRetentionPolicy#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#storage_medium RecordingMediaRetentionPolicy#storage_medium}
  */
  readonly storageMedium?: string;
}

export function recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecordingArchiveRetentionToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecordingArchiveRetentionOutputReference | RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecordingArchiveRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    storage_medium: cdktf.stringToTerraform(struct!.storageMedium),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecordingArchiveRetentionToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecordingArchiveRetentionOutputReference | RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecordingArchiveRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_medium: {
      value: cdktf.stringToHclTerraform(struct!.storageMedium),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecordingArchiveRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecordingArchiveRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._storageMedium !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageMedium = this._storageMedium;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecordingArchiveRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
      this._storageMedium = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
      this._storageMedium = value.storageMedium;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // storage_medium - computed: false, optional: true, required: false
  private _storageMedium?: string; 
  public get storageMedium() {
    return this.getStringAttribute('storage_medium');
  }
  public set storageMedium(value: string) {
    this._storageMedium = value;
  }
  public resetStorageMedium() {
    this._storageMedium = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageMediumInput() {
    return this._storageMedium;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecordingDeleteRetention {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#days RecordingMediaRetentionPolicy#days}
  */
  readonly days?: number;
}

export function recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecordingDeleteRetentionToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecordingDeleteRetentionOutputReference | RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecordingDeleteRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecordingDeleteRetentionToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecordingDeleteRetentionOutputReference | RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecordingDeleteRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecordingDeleteRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecordingDeleteRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecordingDeleteRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecording {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#record_acw RecordingMediaRetentionPolicy#record_acw}
  */
  readonly recordAcw?: boolean | cdktf.IResolvable;
  /**
  * archive_retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#archive_retention RecordingMediaRetentionPolicy#archive_retention}
  */
  readonly archiveRetention?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecordingArchiveRetention;
  /**
  * delete_retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#delete_retention RecordingMediaRetentionPolicy#delete_retention}
  */
  readonly deleteRetention?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecordingDeleteRetention;
}

export function recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecordingToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecordingOutputReference | RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecording): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    record_acw: cdktf.booleanToTerraform(struct!.recordAcw),
    archive_retention: recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecordingArchiveRetentionToTerraform(struct!.archiveRetention),
    delete_retention: recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecordingDeleteRetentionToTerraform(struct!.deleteRetention),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecordingToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecordingOutputReference | RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecording): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    record_acw: {
      value: cdktf.booleanToHclTerraform(struct!.recordAcw),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    archive_retention: {
      value: recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecordingArchiveRetentionToHclTerraform(struct!.archiveRetention),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecordingArchiveRetentionList",
    },
    delete_retention: {
      value: recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecordingDeleteRetentionToHclTerraform(struct!.deleteRetention),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecordingDeleteRetentionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecordingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecording | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordAcw !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordAcw = this._recordAcw;
    }
    if (this._archiveRetention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveRetention = this._archiveRetention?.internalValue;
    }
    if (this._deleteRetention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteRetention = this._deleteRetention?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecording | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recordAcw = undefined;
      this._archiveRetention.internalValue = undefined;
      this._deleteRetention.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recordAcw = value.recordAcw;
      this._archiveRetention.internalValue = value.archiveRetention;
      this._deleteRetention.internalValue = value.deleteRetention;
    }
  }

  // record_acw - computed: false, optional: true, required: false
  private _recordAcw?: boolean | cdktf.IResolvable; 
  public get recordAcw() {
    return this.getBooleanAttribute('record_acw');
  }
  public set recordAcw(value: boolean | cdktf.IResolvable) {
    this._recordAcw = value;
  }
  public resetRecordAcw() {
    this._recordAcw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordAcwInput() {
    return this._recordAcw;
  }

  // archive_retention - computed: false, optional: true, required: false
  private _archiveRetention = new RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecordingArchiveRetentionOutputReference(this, "archive_retention");
  public get archiveRetention() {
    return this._archiveRetention;
  }
  public putArchiveRetention(value: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecordingArchiveRetention) {
    this._archiveRetention.internalValue = value;
  }
  public resetArchiveRetention() {
    this._archiveRetention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveRetentionInput() {
    return this._archiveRetention.internalValue;
  }

  // delete_retention - computed: false, optional: true, required: false
  private _deleteRetention = new RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecordingDeleteRetentionOutputReference(this, "delete_retention");
  public get deleteRetention() {
    return this._deleteRetention;
  }
  public putDeleteRetention(value: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecordingDeleteRetention) {
    this._deleteRetention.internalValue = value;
  }
  public resetDeleteRetention() {
    this._deleteRetention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteRetentionInput() {
    return this._deleteRetention.internalValue;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsIntegrationExport {
  /**
  * The aws-s3-recording-bulk-actions-integration that the policy uses for exports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#integration_id RecordingMediaRetentionPolicy#integration_id}
  */
  readonly integrationId?: string;
  /**
  * True if the policy should export screen recordings in addition to the other conversation media. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#should_export_screen_recordings RecordingMediaRetentionPolicy#should_export_screen_recordings}
  */
  readonly shouldExportScreenRecordings?: boolean | cdktf.IResolvable;
}

export function recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsIntegrationExportToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsIntegrationExportOutputReference | RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsIntegrationExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    integration_id: cdktf.stringToTerraform(struct!.integrationId),
    should_export_screen_recordings: cdktf.booleanToTerraform(struct!.shouldExportScreenRecordings),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsIntegrationExportToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsIntegrationExportOutputReference | RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsIntegrationExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    integration_id: {
      value: cdktf.stringToHclTerraform(struct!.integrationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    should_export_screen_recordings: {
      value: cdktf.booleanToHclTerraform(struct!.shouldExportScreenRecordings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsIntegrationExportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsIntegrationExport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._integrationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationId = this._integrationId;
    }
    if (this._shouldExportScreenRecordings !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldExportScreenRecordings = this._shouldExportScreenRecordings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsIntegrationExport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._integrationId = undefined;
      this._shouldExportScreenRecordings = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._integrationId = value.integrationId;
      this._shouldExportScreenRecordings = value.shouldExportScreenRecordings;
    }
  }

  // integration_id - computed: false, optional: true, required: false
  private _integrationId?: string; 
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }
  public set integrationId(value: string) {
    this._integrationId = value;
  }
  public resetIntegrationId() {
    this._integrationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdInput() {
    return this._integrationId;
  }

  // should_export_screen_recordings - computed: false, optional: true, required: false
  private _shouldExportScreenRecordings?: boolean | cdktf.IResolvable; 
  public get shouldExportScreenRecordings() {
    return this.getBooleanAttribute('should_export_screen_recordings');
  }
  public set shouldExportScreenRecordings(value: boolean | cdktf.IResolvable) {
    this._shouldExportScreenRecordings = value;
  }
  public resetShouldExportScreenRecordings() {
    this._shouldExportScreenRecordings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldExportScreenRecordingsInput() {
    return this._shouldExportScreenRecordings;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsMediaTranscriptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#display_name RecordingMediaRetentionPolicy#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#integration_id RecordingMediaRetentionPolicy#integration_id}
  */
  readonly integrationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#transcription_provider RecordingMediaRetentionPolicy#transcription_provider}
  */
  readonly transcriptionProvider?: string;
}

export function recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsMediaTranscriptionsToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsMediaTranscriptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    integration_id: cdktf.stringToTerraform(struct!.integrationId),
    transcription_provider: cdktf.stringToTerraform(struct!.transcriptionProvider),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsMediaTranscriptionsToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsMediaTranscriptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    integration_id: {
      value: cdktf.stringToHclTerraform(struct!.integrationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transcription_provider: {
      value: cdktf.stringToHclTerraform(struct!.transcriptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsMediaTranscriptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsMediaTranscriptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._integrationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationId = this._integrationId;
    }
    if (this._transcriptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.transcriptionProvider = this._transcriptionProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsMediaTranscriptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._integrationId = undefined;
      this._transcriptionProvider = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._integrationId = value.integrationId;
      this._transcriptionProvider = value.transcriptionProvider;
    }
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

  // integration_id - computed: false, optional: true, required: false
  private _integrationId?: string; 
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }
  public set integrationId(value: string) {
    this._integrationId = value;
  }
  public resetIntegrationId() {
    this._integrationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdInput() {
    return this._integrationId;
  }

  // transcription_provider - computed: false, optional: true, required: false
  private _transcriptionProvider?: string; 
  public get transcriptionProvider() {
    return this.getStringAttribute('transcription_provider');
  }
  public set transcriptionProvider(value: string) {
    this._transcriptionProvider = value;
  }
  public resetTranscriptionProvider() {
    this._transcriptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transcriptionProviderInput() {
    return this._transcriptionProvider;
  }
}

export class RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsMediaTranscriptionsList extends cdktf.ComplexList {
  public internalValue? : RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsMediaTranscriptions[] | cdktf.IResolvable

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
  public get(index: number): RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsMediaTranscriptionsOutputReference {
    return new RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsMediaTranscriptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDurationArchiveRetention {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#days RecordingMediaRetentionPolicy#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#storage_medium RecordingMediaRetentionPolicy#storage_medium}
  */
  readonly storageMedium?: string;
}

export function recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDurationArchiveRetentionToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDurationArchiveRetentionOutputReference | RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDurationArchiveRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    storage_medium: cdktf.stringToTerraform(struct!.storageMedium),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDurationArchiveRetentionToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDurationArchiveRetentionOutputReference | RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDurationArchiveRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_medium: {
      value: cdktf.stringToHclTerraform(struct!.storageMedium),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDurationArchiveRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDurationArchiveRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._storageMedium !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageMedium = this._storageMedium;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDurationArchiveRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
      this._storageMedium = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
      this._storageMedium = value.storageMedium;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // storage_medium - computed: false, optional: true, required: false
  private _storageMedium?: string; 
  public get storageMedium() {
    return this.getStringAttribute('storage_medium');
  }
  public set storageMedium(value: string) {
    this._storageMedium = value;
  }
  public resetStorageMedium() {
    this._storageMedium = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageMediumInput() {
    return this._storageMedium;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDurationDeleteRetention {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#days RecordingMediaRetentionPolicy#days}
  */
  readonly days?: number;
}

export function recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDurationDeleteRetentionToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDurationDeleteRetentionOutputReference | RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDurationDeleteRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDurationDeleteRetentionToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDurationDeleteRetentionOutputReference | RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDurationDeleteRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDurationDeleteRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDurationDeleteRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDurationDeleteRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDuration {
  /**
  * archive_retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#archive_retention RecordingMediaRetentionPolicy#archive_retention}
  */
  readonly archiveRetention?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDurationArchiveRetention;
  /**
  * delete_retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#delete_retention RecordingMediaRetentionPolicy#delete_retention}
  */
  readonly deleteRetention?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDurationDeleteRetention;
}

export function recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDurationToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDurationOutputReference | RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_retention: recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDurationArchiveRetentionToTerraform(struct!.archiveRetention),
    delete_retention: recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDurationDeleteRetentionToTerraform(struct!.deleteRetention),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDurationToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDurationOutputReference | RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_retention: {
      value: recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDurationArchiveRetentionToHclTerraform(struct!.archiveRetention),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDurationArchiveRetentionList",
    },
    delete_retention: {
      value: recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDurationDeleteRetentionToHclTerraform(struct!.deleteRetention),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDurationDeleteRetentionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveRetention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveRetention = this._archiveRetention?.internalValue;
    }
    if (this._deleteRetention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteRetention = this._deleteRetention?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archiveRetention.internalValue = undefined;
      this._deleteRetention.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archiveRetention.internalValue = value.archiveRetention;
      this._deleteRetention.internalValue = value.deleteRetention;
    }
  }

  // archive_retention - computed: false, optional: true, required: false
  private _archiveRetention = new RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDurationArchiveRetentionOutputReference(this, "archive_retention");
  public get archiveRetention() {
    return this._archiveRetention;
  }
  public putArchiveRetention(value: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDurationArchiveRetention) {
    this._archiveRetention.internalValue = value;
  }
  public resetArchiveRetention() {
    this._archiveRetention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveRetentionInput() {
    return this._archiveRetention.internalValue;
  }

  // delete_retention - computed: false, optional: true, required: false
  private _deleteRetention = new RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDurationDeleteRetentionOutputReference(this, "delete_retention");
  public get deleteRetention() {
    return this._deleteRetention;
  }
  public putDeleteRetention(value: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDurationDeleteRetention) {
    this._deleteRetention.internalValue = value;
  }
  public resetDeleteRetention() {
    this._deleteRetention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteRetentionInput() {
    return this._deleteRetention.internalValue;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActions {
  /**
  * true to delete the recording associated with the conversation regardless of the values of retainRecording or deleteRecording.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#always_delete RecordingMediaRetentionPolicy#always_delete}
  */
  readonly alwaysDelete?: boolean | cdktf.IResolvable;
  /**
  * true to delete the recording associated with the conversation. If retainRecording = true, this will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#delete_recording RecordingMediaRetentionPolicy#delete_recording}
  */
  readonly deleteRecording?: boolean | cdktf.IResolvable;
  /**
  * true to retain the recording associated with the conversation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#retain_recording RecordingMediaRetentionPolicy#retain_recording}
  */
  readonly retainRecording?: boolean | cdktf.IResolvable;
  /**
  * assign_calibrations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#assign_calibrations RecordingMediaRetentionPolicy#assign_calibrations}
  */
  readonly assignCalibrations?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignCalibrations[] | cdktf.IResolvable;
  /**
  * assign_evaluations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#assign_evaluations RecordingMediaRetentionPolicy#assign_evaluations}
  */
  readonly assignEvaluations?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignEvaluations[] | cdktf.IResolvable;
  /**
  * assign_metered_assignment_by_agent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#assign_metered_assignment_by_agent RecordingMediaRetentionPolicy#assign_metered_assignment_by_agent}
  */
  readonly assignMeteredAssignmentByAgent?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredAssignmentByAgent[] | cdktf.IResolvable;
  /**
  * assign_metered_evaluations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#assign_metered_evaluations RecordingMediaRetentionPolicy#assign_metered_evaluations}
  */
  readonly assignMeteredEvaluations?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredEvaluations[] | cdktf.IResolvable;
  /**
  * assign_surveys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#assign_surveys RecordingMediaRetentionPolicy#assign_surveys}
  */
  readonly assignSurveys?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignSurveys[] | cdktf.IResolvable;
  /**
  * initiate_screen_recording block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#initiate_screen_recording RecordingMediaRetentionPolicy#initiate_screen_recording}
  */
  readonly initiateScreenRecording?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecording;
  /**
  * integration_export block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#integration_export RecordingMediaRetentionPolicy#integration_export}
  */
  readonly integrationExport?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsIntegrationExport;
  /**
  * media_transcriptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#media_transcriptions RecordingMediaRetentionPolicy#media_transcriptions}
  */
  readonly mediaTranscriptions?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsMediaTranscriptions[] | cdktf.IResolvable;
  /**
  * retention_duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#retention_duration RecordingMediaRetentionPolicy#retention_duration}
  */
  readonly retentionDuration?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDuration;
}

export function recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsOutputReference | RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always_delete: cdktf.booleanToTerraform(struct!.alwaysDelete),
    delete_recording: cdktf.booleanToTerraform(struct!.deleteRecording),
    retain_recording: cdktf.booleanToTerraform(struct!.retainRecording),
    assign_calibrations: cdktf.listMapper(recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignCalibrationsToTerraform, true)(struct!.assignCalibrations),
    assign_evaluations: cdktf.listMapper(recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignEvaluationsToTerraform, true)(struct!.assignEvaluations),
    assign_metered_assignment_by_agent: cdktf.listMapper(recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredAssignmentByAgentToTerraform, true)(struct!.assignMeteredAssignmentByAgent),
    assign_metered_evaluations: cdktf.listMapper(recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredEvaluationsToTerraform, true)(struct!.assignMeteredEvaluations),
    assign_surveys: cdktf.listMapper(recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignSurveysToTerraform, true)(struct!.assignSurveys),
    initiate_screen_recording: recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecordingToTerraform(struct!.initiateScreenRecording),
    integration_export: recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsIntegrationExportToTerraform(struct!.integrationExport),
    media_transcriptions: cdktf.listMapper(recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsMediaTranscriptionsToTerraform, true)(struct!.mediaTranscriptions),
    retention_duration: recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDurationToTerraform(struct!.retentionDuration),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsOutputReference | RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    always_delete: {
      value: cdktf.booleanToHclTerraform(struct!.alwaysDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delete_recording: {
      value: cdktf.booleanToHclTerraform(struct!.deleteRecording),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retain_recording: {
      value: cdktf.booleanToHclTerraform(struct!.retainRecording),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    assign_calibrations: {
      value: cdktf.listMapperHcl(recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignCalibrationsToHclTerraform, true)(struct!.assignCalibrations),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignCalibrationsList",
    },
    assign_evaluations: {
      value: cdktf.listMapperHcl(recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignEvaluationsToHclTerraform, true)(struct!.assignEvaluations),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignEvaluationsList",
    },
    assign_metered_assignment_by_agent: {
      value: cdktf.listMapperHcl(recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredAssignmentByAgentToHclTerraform, true)(struct!.assignMeteredAssignmentByAgent),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredAssignmentByAgentList",
    },
    assign_metered_evaluations: {
      value: cdktf.listMapperHcl(recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredEvaluationsToHclTerraform, true)(struct!.assignMeteredEvaluations),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredEvaluationsList",
    },
    assign_surveys: {
      value: cdktf.listMapperHcl(recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignSurveysToHclTerraform, true)(struct!.assignSurveys),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignSurveysList",
    },
    initiate_screen_recording: {
      value: recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecordingToHclTerraform(struct!.initiateScreenRecording),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecordingList",
    },
    integration_export: {
      value: recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsIntegrationExportToHclTerraform(struct!.integrationExport),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsIntegrationExportList",
    },
    media_transcriptions: {
      value: cdktf.listMapperHcl(recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsMediaTranscriptionsToHclTerraform, true)(struct!.mediaTranscriptions),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsMediaTranscriptionsList",
    },
    retention_duration: {
      value: recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDurationToHclTerraform(struct!.retentionDuration),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alwaysDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysDelete = this._alwaysDelete;
    }
    if (this._deleteRecording !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteRecording = this._deleteRecording;
    }
    if (this._retainRecording !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainRecording = this._retainRecording;
    }
    if (this._assignCalibrations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignCalibrations = this._assignCalibrations?.internalValue;
    }
    if (this._assignEvaluations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignEvaluations = this._assignEvaluations?.internalValue;
    }
    if (this._assignMeteredAssignmentByAgent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignMeteredAssignmentByAgent = this._assignMeteredAssignmentByAgent?.internalValue;
    }
    if (this._assignMeteredEvaluations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignMeteredEvaluations = this._assignMeteredEvaluations?.internalValue;
    }
    if (this._assignSurveys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignSurveys = this._assignSurveys?.internalValue;
    }
    if (this._initiateScreenRecording?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initiateScreenRecording = this._initiateScreenRecording?.internalValue;
    }
    if (this._integrationExport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationExport = this._integrationExport?.internalValue;
    }
    if (this._mediaTranscriptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaTranscriptions = this._mediaTranscriptions?.internalValue;
    }
    if (this._retentionDuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionDuration = this._retentionDuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alwaysDelete = undefined;
      this._deleteRecording = undefined;
      this._retainRecording = undefined;
      this._assignCalibrations.internalValue = undefined;
      this._assignEvaluations.internalValue = undefined;
      this._assignMeteredAssignmentByAgent.internalValue = undefined;
      this._assignMeteredEvaluations.internalValue = undefined;
      this._assignSurveys.internalValue = undefined;
      this._initiateScreenRecording.internalValue = undefined;
      this._integrationExport.internalValue = undefined;
      this._mediaTranscriptions.internalValue = undefined;
      this._retentionDuration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alwaysDelete = value.alwaysDelete;
      this._deleteRecording = value.deleteRecording;
      this._retainRecording = value.retainRecording;
      this._assignCalibrations.internalValue = value.assignCalibrations;
      this._assignEvaluations.internalValue = value.assignEvaluations;
      this._assignMeteredAssignmentByAgent.internalValue = value.assignMeteredAssignmentByAgent;
      this._assignMeteredEvaluations.internalValue = value.assignMeteredEvaluations;
      this._assignSurveys.internalValue = value.assignSurveys;
      this._initiateScreenRecording.internalValue = value.initiateScreenRecording;
      this._integrationExport.internalValue = value.integrationExport;
      this._mediaTranscriptions.internalValue = value.mediaTranscriptions;
      this._retentionDuration.internalValue = value.retentionDuration;
    }
  }

  // always_delete - computed: false, optional: true, required: false
  private _alwaysDelete?: boolean | cdktf.IResolvable; 
  public get alwaysDelete() {
    return this.getBooleanAttribute('always_delete');
  }
  public set alwaysDelete(value: boolean | cdktf.IResolvable) {
    this._alwaysDelete = value;
  }
  public resetAlwaysDelete() {
    this._alwaysDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysDeleteInput() {
    return this._alwaysDelete;
  }

  // delete_recording - computed: false, optional: true, required: false
  private _deleteRecording?: boolean | cdktf.IResolvable; 
  public get deleteRecording() {
    return this.getBooleanAttribute('delete_recording');
  }
  public set deleteRecording(value: boolean | cdktf.IResolvable) {
    this._deleteRecording = value;
  }
  public resetDeleteRecording() {
    this._deleteRecording = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteRecordingInput() {
    return this._deleteRecording;
  }

  // retain_recording - computed: false, optional: true, required: false
  private _retainRecording?: boolean | cdktf.IResolvable; 
  public get retainRecording() {
    return this.getBooleanAttribute('retain_recording');
  }
  public set retainRecording(value: boolean | cdktf.IResolvable) {
    this._retainRecording = value;
  }
  public resetRetainRecording() {
    this._retainRecording = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainRecordingInput() {
    return this._retainRecording;
  }

  // assign_calibrations - computed: false, optional: true, required: false
  private _assignCalibrations = new RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignCalibrationsList(this, "assign_calibrations", false);
  public get assignCalibrations() {
    return this._assignCalibrations;
  }
  public putAssignCalibrations(value: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignCalibrations[] | cdktf.IResolvable) {
    this._assignCalibrations.internalValue = value;
  }
  public resetAssignCalibrations() {
    this._assignCalibrations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignCalibrationsInput() {
    return this._assignCalibrations.internalValue;
  }

  // assign_evaluations - computed: false, optional: true, required: false
  private _assignEvaluations = new RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignEvaluationsList(this, "assign_evaluations", false);
  public get assignEvaluations() {
    return this._assignEvaluations;
  }
  public putAssignEvaluations(value: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignEvaluations[] | cdktf.IResolvable) {
    this._assignEvaluations.internalValue = value;
  }
  public resetAssignEvaluations() {
    this._assignEvaluations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignEvaluationsInput() {
    return this._assignEvaluations.internalValue;
  }

  // assign_metered_assignment_by_agent - computed: false, optional: true, required: false
  private _assignMeteredAssignmentByAgent = new RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredAssignmentByAgentList(this, "assign_metered_assignment_by_agent", false);
  public get assignMeteredAssignmentByAgent() {
    return this._assignMeteredAssignmentByAgent;
  }
  public putAssignMeteredAssignmentByAgent(value: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredAssignmentByAgent[] | cdktf.IResolvable) {
    this._assignMeteredAssignmentByAgent.internalValue = value;
  }
  public resetAssignMeteredAssignmentByAgent() {
    this._assignMeteredAssignmentByAgent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignMeteredAssignmentByAgentInput() {
    return this._assignMeteredAssignmentByAgent.internalValue;
  }

  // assign_metered_evaluations - computed: false, optional: true, required: false
  private _assignMeteredEvaluations = new RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredEvaluationsList(this, "assign_metered_evaluations", false);
  public get assignMeteredEvaluations() {
    return this._assignMeteredEvaluations;
  }
  public putAssignMeteredEvaluations(value: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignMeteredEvaluations[] | cdktf.IResolvable) {
    this._assignMeteredEvaluations.internalValue = value;
  }
  public resetAssignMeteredEvaluations() {
    this._assignMeteredEvaluations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignMeteredEvaluationsInput() {
    return this._assignMeteredEvaluations.internalValue;
  }

  // assign_surveys - computed: false, optional: true, required: false
  private _assignSurveys = new RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignSurveysList(this, "assign_surveys", false);
  public get assignSurveys() {
    return this._assignSurveys;
  }
  public putAssignSurveys(value: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsAssignSurveys[] | cdktf.IResolvable) {
    this._assignSurveys.internalValue = value;
  }
  public resetAssignSurveys() {
    this._assignSurveys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignSurveysInput() {
    return this._assignSurveys.internalValue;
  }

  // initiate_screen_recording - computed: false, optional: true, required: false
  private _initiateScreenRecording = new RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecordingOutputReference(this, "initiate_screen_recording");
  public get initiateScreenRecording() {
    return this._initiateScreenRecording;
  }
  public putInitiateScreenRecording(value: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsInitiateScreenRecording) {
    this._initiateScreenRecording.internalValue = value;
  }
  public resetInitiateScreenRecording() {
    this._initiateScreenRecording.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initiateScreenRecordingInput() {
    return this._initiateScreenRecording.internalValue;
  }

  // integration_export - computed: false, optional: true, required: false
  private _integrationExport = new RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsIntegrationExportOutputReference(this, "integration_export");
  public get integrationExport() {
    return this._integrationExport;
  }
  public putIntegrationExport(value: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsIntegrationExport) {
    this._integrationExport.internalValue = value;
  }
  public resetIntegrationExport() {
    this._integrationExport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationExportInput() {
    return this._integrationExport.internalValue;
  }

  // media_transcriptions - computed: false, optional: true, required: false
  private _mediaTranscriptions = new RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsMediaTranscriptionsList(this, "media_transcriptions", false);
  public get mediaTranscriptions() {
    return this._mediaTranscriptions;
  }
  public putMediaTranscriptions(value: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsMediaTranscriptions[] | cdktf.IResolvable) {
    this._mediaTranscriptions.internalValue = value;
  }
  public resetMediaTranscriptions() {
    this._mediaTranscriptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaTranscriptionsInput() {
    return this._mediaTranscriptions.internalValue;
  }

  // retention_duration - computed: false, optional: true, required: false
  private _retentionDuration = new RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDurationOutputReference(this, "retention_duration");
  public get retentionDuration() {
    return this._retentionDuration;
  }
  public putRetentionDuration(value: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsRetentionDuration) {
    this._retentionDuration.internalValue = value;
  }
  public resetRetentionDuration() {
    this._retentionDuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDurationInput() {
    return this._retentionDuration.internalValue;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsDuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#duration_mode RecordingMediaRetentionPolicy#duration_mode}
  */
  readonly durationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#duration_operator RecordingMediaRetentionPolicy#duration_operator}
  */
  readonly durationOperator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#duration_range RecordingMediaRetentionPolicy#duration_range}
  */
  readonly durationRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#duration_target RecordingMediaRetentionPolicy#duration_target}
  */
  readonly durationTarget?: string;
}

export function recordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsDurationToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsDurationOutputReference | RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration_mode: cdktf.stringToTerraform(struct!.durationMode),
    duration_operator: cdktf.stringToTerraform(struct!.durationOperator),
    duration_range: cdktf.stringToTerraform(struct!.durationRange),
    duration_target: cdktf.stringToTerraform(struct!.durationTarget),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsDurationToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsDurationOutputReference | RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration_mode: {
      value: cdktf.stringToHclTerraform(struct!.durationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duration_operator: {
      value: cdktf.stringToHclTerraform(struct!.durationOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duration_range: {
      value: cdktf.stringToHclTerraform(struct!.durationRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duration_target: {
      value: cdktf.stringToHclTerraform(struct!.durationTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsDuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._durationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationMode = this._durationMode;
    }
    if (this._durationOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationOperator = this._durationOperator;
    }
    if (this._durationRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationRange = this._durationRange;
    }
    if (this._durationTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationTarget = this._durationTarget;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsDuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._durationMode = undefined;
      this._durationOperator = undefined;
      this._durationRange = undefined;
      this._durationTarget = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._durationMode = value.durationMode;
      this._durationOperator = value.durationOperator;
      this._durationRange = value.durationRange;
      this._durationTarget = value.durationTarget;
    }
  }

  // duration_mode - computed: false, optional: true, required: false
  private _durationMode?: string; 
  public get durationMode() {
    return this.getStringAttribute('duration_mode');
  }
  public set durationMode(value: string) {
    this._durationMode = value;
  }
  public resetDurationMode() {
    this._durationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationModeInput() {
    return this._durationMode;
  }

  // duration_operator - computed: false, optional: true, required: false
  private _durationOperator?: string; 
  public get durationOperator() {
    return this.getStringAttribute('duration_operator');
  }
  public set durationOperator(value: string) {
    this._durationOperator = value;
  }
  public resetDurationOperator() {
    this._durationOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationOperatorInput() {
    return this._durationOperator;
  }

  // duration_range - computed: false, optional: true, required: false
  private _durationRange?: string; 
  public get durationRange() {
    return this.getStringAttribute('duration_range');
  }
  public set durationRange(value: string) {
    this._durationRange = value;
  }
  public resetDurationRange() {
    this._durationRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationRangeInput() {
    return this._durationRange;
  }

  // duration_target - computed: false, optional: true, required: false
  private _durationTarget?: string; 
  public get durationTarget() {
    return this.getStringAttribute('duration_target');
  }
  public set durationTarget(value: string) {
    this._durationTarget = value;
  }
  public resetDurationTarget() {
    this._durationTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationTargetInput() {
    return this._durationTarget;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsTimeAllowedTimeSlots {
  /**
  * Day for this time slot, Monday = 1 ... Sunday = 7
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#day RecordingMediaRetentionPolicy#day}
  */
  readonly day?: number;
  /**
  * start time in xx:xx:xx.xxx format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#start_time RecordingMediaRetentionPolicy#start_time}
  */
  readonly startTime?: string;
  /**
  * stop time in xx:xx:xx.xxx format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#stop_time RecordingMediaRetentionPolicy#stop_time}
  */
  readonly stopTime?: string;
}

export function recordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsTimeAllowedTimeSlotsToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsTimeAllowedTimeSlots | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.numberToTerraform(struct!.day),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    stop_time: cdktf.stringToTerraform(struct!.stopTime),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsTimeAllowedTimeSlotsToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsTimeAllowedTimeSlots | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.numberToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stop_time: {
      value: cdktf.stringToHclTerraform(struct!.stopTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsTimeAllowedTimeSlotsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsTimeAllowedTimeSlots | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._stopTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopTime = this._stopTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsTimeAllowedTimeSlots | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._day = undefined;
      this._startTime = undefined;
      this._stopTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._day = value.day;
      this._startTime = value.startTime;
      this._stopTime = value.stopTime;
    }
  }

  // day - computed: false, optional: true, required: false
  private _day?: number; 
  public get day() {
    return this.getNumberAttribute('day');
  }
  public set day(value: number) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // stop_time - computed: false, optional: true, required: false
  private _stopTime?: string; 
  public get stopTime() {
    return this.getStringAttribute('stop_time');
  }
  public set stopTime(value: string) {
    this._stopTime = value;
  }
  public resetStopTime() {
    this._stopTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopTimeInput() {
    return this._stopTime;
  }
}

export class RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsTimeAllowedTimeSlotsList extends cdktf.ComplexList {
  public internalValue? : RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsTimeAllowedTimeSlots[] | cdktf.IResolvable

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
  public get(index: number): RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsTimeAllowedTimeSlotsOutputReference {
    return new RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsTimeAllowedTimeSlotsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsTimeAllowed {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#empty RecordingMediaRetentionPolicy#empty}
  */
  readonly empty?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#time_zone_id RecordingMediaRetentionPolicy#time_zone_id}
  */
  readonly timeZoneId?: string;
  /**
  * time_slots block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#time_slots RecordingMediaRetentionPolicy#time_slots}
  */
  readonly timeSlots?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsTimeAllowedTimeSlots[] | cdktf.IResolvable;
}

export function recordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsTimeAllowedToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsTimeAllowedOutputReference | RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsTimeAllowed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    empty: cdktf.booleanToTerraform(struct!.empty),
    time_zone_id: cdktf.stringToTerraform(struct!.timeZoneId),
    time_slots: cdktf.listMapper(recordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsTimeAllowedTimeSlotsToTerraform, true)(struct!.timeSlots),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsTimeAllowedToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsTimeAllowedOutputReference | RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsTimeAllowed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    empty: {
      value: cdktf.booleanToHclTerraform(struct!.empty),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    time_zone_id: {
      value: cdktf.stringToHclTerraform(struct!.timeZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_slots: {
      value: cdktf.listMapperHcl(recordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsTimeAllowedTimeSlotsToHclTerraform, true)(struct!.timeSlots),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsTimeAllowedTimeSlotsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsTimeAllowedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsTimeAllowed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._empty !== undefined) {
      hasAnyValues = true;
      internalValueResult.empty = this._empty;
    }
    if (this._timeZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZoneId = this._timeZoneId;
    }
    if (this._timeSlots?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeSlots = this._timeSlots?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsTimeAllowed | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._empty = undefined;
      this._timeZoneId = undefined;
      this._timeSlots.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._empty = value.empty;
      this._timeZoneId = value.timeZoneId;
      this._timeSlots.internalValue = value.timeSlots;
    }
  }

  // empty - computed: false, optional: true, required: false
  private _empty?: boolean | cdktf.IResolvable; 
  public get empty() {
    return this.getBooleanAttribute('empty');
  }
  public set empty(value: boolean | cdktf.IResolvable) {
    this._empty = value;
  }
  public resetEmpty() {
    this._empty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyInput() {
    return this._empty;
  }

  // time_zone_id - computed: false, optional: true, required: false
  private _timeZoneId?: string; 
  public get timeZoneId() {
    return this.getStringAttribute('time_zone_id');
  }
  public set timeZoneId(value: string) {
    this._timeZoneId = value;
  }
  public resetTimeZoneId() {
    this._timeZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneIdInput() {
    return this._timeZoneId;
  }

  // time_slots - computed: false, optional: true, required: false
  private _timeSlots = new RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsTimeAllowedTimeSlotsList(this, "time_slots", false);
  public get timeSlots() {
    return this._timeSlots;
  }
  public putTimeSlots(value: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsTimeAllowedTimeSlots[] | cdktf.IResolvable) {
    this._timeSlots.internalValue = value;
  }
  public resetTimeSlots() {
    this._timeSlots.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSlotsInput() {
    return this._timeSlots.internalValue;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#date_ranges RecordingMediaRetentionPolicy#date_ranges}
  */
  readonly dateRanges?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#directions RecordingMediaRetentionPolicy#directions}
  */
  readonly directions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#for_queue_ids RecordingMediaRetentionPolicy#for_queue_ids}
  */
  readonly forQueueIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#for_user_ids RecordingMediaRetentionPolicy#for_user_ids}
  */
  readonly forUserIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#language_ids RecordingMediaRetentionPolicy#language_ids}
  */
  readonly languageIds?: string[];
  /**
  * Teams to match conversations against
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#team_ids RecordingMediaRetentionPolicy#team_ids}
  */
  readonly teamIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#wrapup_code_ids RecordingMediaRetentionPolicy#wrapup_code_ids}
  */
  readonly wrapupCodeIds?: string[];
  /**
  * duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#duration RecordingMediaRetentionPolicy#duration}
  */
  readonly duration?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsDuration;
  /**
  * time_allowed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#time_allowed RecordingMediaRetentionPolicy#time_allowed}
  */
  readonly timeAllowed?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsTimeAllowed;
}

export function recordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsOutputReference | RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dateRanges),
    directions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.directions),
    for_queue_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.forQueueIds),
    for_user_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.forUserIds),
    language_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.languageIds),
    team_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.teamIds),
    wrapup_code_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.wrapupCodeIds),
    duration: recordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsDurationToTerraform(struct!.duration),
    time_allowed: recordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsTimeAllowedToTerraform(struct!.timeAllowed),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsOutputReference | RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    date_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dateRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    directions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.directions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    for_queue_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.forQueueIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    for_user_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.forUserIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    language_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.languageIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    team_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.teamIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    wrapup_code_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.wrapupCodeIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    duration: {
      value: recordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsDurationToHclTerraform(struct!.duration),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsDurationList",
    },
    time_allowed: {
      value: recordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsTimeAllowedToHclTerraform(struct!.timeAllowed),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsTimeAllowedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dateRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateRanges = this._dateRanges;
    }
    if (this._directions !== undefined) {
      hasAnyValues = true;
      internalValueResult.directions = this._directions;
    }
    if (this._forQueueIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.forQueueIds = this._forQueueIds;
    }
    if (this._forUserIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.forUserIds = this._forUserIds;
    }
    if (this._languageIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.languageIds = this._languageIds;
    }
    if (this._teamIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.teamIds = this._teamIds;
    }
    if (this._wrapupCodeIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.wrapupCodeIds = this._wrapupCodeIds;
    }
    if (this._duration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration?.internalValue;
    }
    if (this._timeAllowed?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeAllowed = this._timeAllowed?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dateRanges = undefined;
      this._directions = undefined;
      this._forQueueIds = undefined;
      this._forUserIds = undefined;
      this._languageIds = undefined;
      this._teamIds = undefined;
      this._wrapupCodeIds = undefined;
      this._duration.internalValue = undefined;
      this._timeAllowed.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dateRanges = value.dateRanges;
      this._directions = value.directions;
      this._forQueueIds = value.forQueueIds;
      this._forUserIds = value.forUserIds;
      this._languageIds = value.languageIds;
      this._teamIds = value.teamIds;
      this._wrapupCodeIds = value.wrapupCodeIds;
      this._duration.internalValue = value.duration;
      this._timeAllowed.internalValue = value.timeAllowed;
    }
  }

  // date_ranges - computed: false, optional: true, required: false
  private _dateRanges?: string[]; 
  public get dateRanges() {
    return this.getListAttribute('date_ranges');
  }
  public set dateRanges(value: string[]) {
    this._dateRanges = value;
  }
  public resetDateRanges() {
    this._dateRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateRangesInput() {
    return this._dateRanges;
  }

  // directions - computed: false, optional: true, required: false
  private _directions?: string[]; 
  public get directions() {
    return this.getListAttribute('directions');
  }
  public set directions(value: string[]) {
    this._directions = value;
  }
  public resetDirections() {
    this._directions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionsInput() {
    return this._directions;
  }

  // for_queue_ids - computed: false, optional: true, required: false
  private _forQueueIds?: string[]; 
  public get forQueueIds() {
    return this.getListAttribute('for_queue_ids');
  }
  public set forQueueIds(value: string[]) {
    this._forQueueIds = value;
  }
  public resetForQueueIds() {
    this._forQueueIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forQueueIdsInput() {
    return this._forQueueIds;
  }

  // for_user_ids - computed: false, optional: true, required: false
  private _forUserIds?: string[]; 
  public get forUserIds() {
    return this.getListAttribute('for_user_ids');
  }
  public set forUserIds(value: string[]) {
    this._forUserIds = value;
  }
  public resetForUserIds() {
    this._forUserIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forUserIdsInput() {
    return this._forUserIds;
  }

  // language_ids - computed: false, optional: true, required: false
  private _languageIds?: string[]; 
  public get languageIds() {
    return this.getListAttribute('language_ids');
  }
  public set languageIds(value: string[]) {
    this._languageIds = value;
  }
  public resetLanguageIds() {
    this._languageIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageIdsInput() {
    return this._languageIds;
  }

  // team_ids - computed: false, optional: true, required: false
  private _teamIds?: string[]; 
  public get teamIds() {
    return cdktf.Fn.tolist(this.getListAttribute('team_ids'));
  }
  public set teamIds(value: string[]) {
    this._teamIds = value;
  }
  public resetTeamIds() {
    this._teamIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdsInput() {
    return this._teamIds;
  }

  // wrapup_code_ids - computed: false, optional: true, required: false
  private _wrapupCodeIds?: string[]; 
  public get wrapupCodeIds() {
    return this.getListAttribute('wrapup_code_ids');
  }
  public set wrapupCodeIds(value: string[]) {
    this._wrapupCodeIds = value;
  }
  public resetWrapupCodeIds() {
    this._wrapupCodeIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wrapupCodeIdsInput() {
    return this._wrapupCodeIds;
  }

  // duration - computed: false, optional: true, required: false
  private _duration = new RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsDurationOutputReference(this, "duration");
  public get duration() {
    return this._duration;
  }
  public putDuration(value: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsDuration) {
    this._duration.internalValue = value;
  }
  public resetDuration() {
    this._duration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration.internalValue;
  }

  // time_allowed - computed: false, optional: true, required: false
  private _timeAllowed = new RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsTimeAllowedOutputReference(this, "time_allowed");
  public get timeAllowed() {
    return this._timeAllowed;
  }
  public putTimeAllowed(value: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsTimeAllowed) {
    this._timeAllowed.internalValue = value;
  }
  public resetTimeAllowed() {
    this._timeAllowed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeAllowedInput() {
    return this._timeAllowed.internalValue;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesCallPolicy {
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#actions RecordingMediaRetentionPolicy#actions}
  */
  readonly actions?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActions;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#conditions RecordingMediaRetentionPolicy#conditions}
  */
  readonly conditions?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditions;
}

export function recordingMediaRetentionPolicyMediaPoliciesCallPolicyToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyOutputReference | RecordingMediaRetentionPolicyMediaPoliciesCallPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsToTerraform(struct!.actions),
    conditions: recordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsToTerraform(struct!.conditions),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesCallPolicyToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyOutputReference | RecordingMediaRetentionPolicyMediaPoliciesCallPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: recordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsToHclTerraform(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsList",
    },
    conditions: {
      value: recordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsToHclTerraform(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesCallPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesCallPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesCallPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actions.internalValue = undefined;
      this._conditions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actions.internalValue = value.actions;
      this._conditions.internalValue = value.conditions;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions = new RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActionsOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }
  public putActions(value: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyActions) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: RecordingMediaRetentionPolicyMediaPoliciesCallPolicyConditions) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignCalibrations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#calibrator_id RecordingMediaRetentionPolicy#calibrator_id}
  */
  readonly calibratorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#evaluation_form_id RecordingMediaRetentionPolicy#evaluation_form_id}
  */
  readonly evaluationFormId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#evaluator_ids RecordingMediaRetentionPolicy#evaluator_ids}
  */
  readonly evaluatorIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#expert_evaluator_id RecordingMediaRetentionPolicy#expert_evaluator_id}
  */
  readonly expertEvaluatorId?: string;
}

export function recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignCalibrationsToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignCalibrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    calibrator_id: cdktf.stringToTerraform(struct!.calibratorId),
    evaluation_form_id: cdktf.stringToTerraform(struct!.evaluationFormId),
    evaluator_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.evaluatorIds),
    expert_evaluator_id: cdktf.stringToTerraform(struct!.expertEvaluatorId),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignCalibrationsToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignCalibrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    calibrator_id: {
      value: cdktf.stringToHclTerraform(struct!.calibratorId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evaluation_form_id: {
      value: cdktf.stringToHclTerraform(struct!.evaluationFormId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evaluator_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.evaluatorIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    expert_evaluator_id: {
      value: cdktf.stringToHclTerraform(struct!.expertEvaluatorId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignCalibrationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignCalibrations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._calibratorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.calibratorId = this._calibratorId;
    }
    if (this._evaluationFormId !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationFormId = this._evaluationFormId;
    }
    if (this._evaluatorIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluatorIds = this._evaluatorIds;
    }
    if (this._expertEvaluatorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.expertEvaluatorId = this._expertEvaluatorId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignCalibrations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._calibratorId = undefined;
      this._evaluationFormId = undefined;
      this._evaluatorIds = undefined;
      this._expertEvaluatorId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._calibratorId = value.calibratorId;
      this._evaluationFormId = value.evaluationFormId;
      this._evaluatorIds = value.evaluatorIds;
      this._expertEvaluatorId = value.expertEvaluatorId;
    }
  }

  // calibrator_id - computed: false, optional: true, required: false
  private _calibratorId?: string; 
  public get calibratorId() {
    return this.getStringAttribute('calibrator_id');
  }
  public set calibratorId(value: string) {
    this._calibratorId = value;
  }
  public resetCalibratorId() {
    this._calibratorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calibratorIdInput() {
    return this._calibratorId;
  }

  // evaluation_form_id - computed: false, optional: true, required: false
  private _evaluationFormId?: string; 
  public get evaluationFormId() {
    return this.getStringAttribute('evaluation_form_id');
  }
  public set evaluationFormId(value: string) {
    this._evaluationFormId = value;
  }
  public resetEvaluationFormId() {
    this._evaluationFormId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationFormIdInput() {
    return this._evaluationFormId;
  }

  // evaluator_ids - computed: false, optional: true, required: false
  private _evaluatorIds?: string[]; 
  public get evaluatorIds() {
    return this.getListAttribute('evaluator_ids');
  }
  public set evaluatorIds(value: string[]) {
    this._evaluatorIds = value;
  }
  public resetEvaluatorIds() {
    this._evaluatorIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluatorIdsInput() {
    return this._evaluatorIds;
  }

  // expert_evaluator_id - computed: false, optional: true, required: false
  private _expertEvaluatorId?: string; 
  public get expertEvaluatorId() {
    return this.getStringAttribute('expert_evaluator_id');
  }
  public set expertEvaluatorId(value: string) {
    this._expertEvaluatorId = value;
  }
  public resetExpertEvaluatorId() {
    this._expertEvaluatorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expertEvaluatorIdInput() {
    return this._expertEvaluatorId;
  }
}

export class RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignCalibrationsList extends cdktf.ComplexList {
  public internalValue? : RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignCalibrations[] | cdktf.IResolvable

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
  public get(index: number): RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignCalibrationsOutputReference {
    return new RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignCalibrationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignEvaluations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#evaluation_form_id RecordingMediaRetentionPolicy#evaluation_form_id}
  */
  readonly evaluationFormId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#user_id RecordingMediaRetentionPolicy#user_id}
  */
  readonly userId?: string;
}

export function recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignEvaluationsToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignEvaluations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluation_form_id: cdktf.stringToTerraform(struct!.evaluationFormId),
    user_id: cdktf.stringToTerraform(struct!.userId),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignEvaluationsToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignEvaluations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    evaluation_form_id: {
      value: cdktf.stringToHclTerraform(struct!.evaluationFormId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_id: {
      value: cdktf.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignEvaluationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignEvaluations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluationFormId !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationFormId = this._evaluationFormId;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignEvaluations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evaluationFormId = undefined;
      this._userId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evaluationFormId = value.evaluationFormId;
      this._userId = value.userId;
    }
  }

  // evaluation_form_id - computed: false, optional: true, required: false
  private _evaluationFormId?: string; 
  public get evaluationFormId() {
    return this.getStringAttribute('evaluation_form_id');
  }
  public set evaluationFormId(value: string) {
    this._evaluationFormId = value;
  }
  public resetEvaluationFormId() {
    this._evaluationFormId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationFormIdInput() {
    return this._evaluationFormId;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }
}

export class RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignEvaluationsList extends cdktf.ComplexList {
  public internalValue? : RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignEvaluations[] | cdktf.IResolvable

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
  public get(index: number): RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignEvaluationsOutputReference {
    return new RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignEvaluationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredAssignmentByAgentTimeInterval {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#days RecordingMediaRetentionPolicy#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#hours RecordingMediaRetentionPolicy#hours}
  */
  readonly hours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#months RecordingMediaRetentionPolicy#months}
  */
  readonly months?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#weeks RecordingMediaRetentionPolicy#weeks}
  */
  readonly weeks?: number;
}

export function recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredAssignmentByAgentTimeIntervalToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredAssignmentByAgentTimeIntervalOutputReference | RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredAssignmentByAgentTimeInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    hours: cdktf.numberToTerraform(struct!.hours),
    months: cdktf.numberToTerraform(struct!.months),
    weeks: cdktf.numberToTerraform(struct!.weeks),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredAssignmentByAgentTimeIntervalToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredAssignmentByAgentTimeIntervalOutputReference | RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredAssignmentByAgentTimeInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    months: {
      value: cdktf.numberToHclTerraform(struct!.months),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weeks: {
      value: cdktf.numberToHclTerraform(struct!.weeks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredAssignmentByAgentTimeIntervalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredAssignmentByAgentTimeInterval | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._months !== undefined) {
      hasAnyValues = true;
      internalValueResult.months = this._months;
    }
    if (this._weeks !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeks = this._weeks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredAssignmentByAgentTimeInterval | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
      this._hours = undefined;
      this._months = undefined;
      this._weeks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
      this._hours = value.hours;
      this._months = value.months;
      this._weeks = value.weeks;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // months - computed: false, optional: true, required: false
  private _months?: number; 
  public get months() {
    return this.getNumberAttribute('months');
  }
  public set months(value: number) {
    this._months = value;
  }
  public resetMonths() {
    this._months = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthsInput() {
    return this._months;
  }

  // weeks - computed: false, optional: true, required: false
  private _weeks?: number; 
  public get weeks() {
    return this.getNumberAttribute('weeks');
  }
  public set weeks(value: number) {
    this._weeks = value;
  }
  public resetWeeks() {
    this._weeks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeksInput() {
    return this._weeks;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredAssignmentByAgent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#evaluation_form_id RecordingMediaRetentionPolicy#evaluation_form_id}
  */
  readonly evaluationFormId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#evaluator_ids RecordingMediaRetentionPolicy#evaluator_ids}
  */
  readonly evaluatorIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#max_number_evaluations RecordingMediaRetentionPolicy#max_number_evaluations}
  */
  readonly maxNumberEvaluations?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#time_zone RecordingMediaRetentionPolicy#time_zone}
  */
  readonly timeZone?: string;
  /**
  * time_interval block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#time_interval RecordingMediaRetentionPolicy#time_interval}
  */
  readonly timeInterval?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredAssignmentByAgentTimeInterval;
}

export function recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredAssignmentByAgentToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredAssignmentByAgent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluation_form_id: cdktf.stringToTerraform(struct!.evaluationFormId),
    evaluator_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.evaluatorIds),
    max_number_evaluations: cdktf.numberToTerraform(struct!.maxNumberEvaluations),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    time_interval: recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredAssignmentByAgentTimeIntervalToTerraform(struct!.timeInterval),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredAssignmentByAgentToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredAssignmentByAgent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    evaluation_form_id: {
      value: cdktf.stringToHclTerraform(struct!.evaluationFormId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evaluator_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.evaluatorIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_number_evaluations: {
      value: cdktf.numberToHclTerraform(struct!.maxNumberEvaluations),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_interval: {
      value: recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredAssignmentByAgentTimeIntervalToHclTerraform(struct!.timeInterval),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredAssignmentByAgentTimeIntervalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredAssignmentByAgentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredAssignmentByAgent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluationFormId !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationFormId = this._evaluationFormId;
    }
    if (this._evaluatorIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluatorIds = this._evaluatorIds;
    }
    if (this._maxNumberEvaluations !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNumberEvaluations = this._maxNumberEvaluations;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    if (this._timeInterval?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeInterval = this._timeInterval?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredAssignmentByAgent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evaluationFormId = undefined;
      this._evaluatorIds = undefined;
      this._maxNumberEvaluations = undefined;
      this._timeZone = undefined;
      this._timeInterval.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evaluationFormId = value.evaluationFormId;
      this._evaluatorIds = value.evaluatorIds;
      this._maxNumberEvaluations = value.maxNumberEvaluations;
      this._timeZone = value.timeZone;
      this._timeInterval.internalValue = value.timeInterval;
    }
  }

  // evaluation_form_id - computed: false, optional: true, required: false
  private _evaluationFormId?: string; 
  public get evaluationFormId() {
    return this.getStringAttribute('evaluation_form_id');
  }
  public set evaluationFormId(value: string) {
    this._evaluationFormId = value;
  }
  public resetEvaluationFormId() {
    this._evaluationFormId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationFormIdInput() {
    return this._evaluationFormId;
  }

  // evaluator_ids - computed: false, optional: true, required: false
  private _evaluatorIds?: string[]; 
  public get evaluatorIds() {
    return this.getListAttribute('evaluator_ids');
  }
  public set evaluatorIds(value: string[]) {
    this._evaluatorIds = value;
  }
  public resetEvaluatorIds() {
    this._evaluatorIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluatorIdsInput() {
    return this._evaluatorIds;
  }

  // max_number_evaluations - computed: false, optional: true, required: false
  private _maxNumberEvaluations?: number; 
  public get maxNumberEvaluations() {
    return this.getNumberAttribute('max_number_evaluations');
  }
  public set maxNumberEvaluations(value: number) {
    this._maxNumberEvaluations = value;
  }
  public resetMaxNumberEvaluations() {
    this._maxNumberEvaluations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberEvaluationsInput() {
    return this._maxNumberEvaluations;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // time_interval - computed: false, optional: true, required: false
  private _timeInterval = new RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredAssignmentByAgentTimeIntervalOutputReference(this, "time_interval");
  public get timeInterval() {
    return this._timeInterval;
  }
  public putTimeInterval(value: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredAssignmentByAgentTimeInterval) {
    this._timeInterval.internalValue = value;
  }
  public resetTimeInterval() {
    this._timeInterval.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeIntervalInput() {
    return this._timeInterval.internalValue;
  }
}

export class RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredAssignmentByAgentList extends cdktf.ComplexList {
  public internalValue? : RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredAssignmentByAgent[] | cdktf.IResolvable

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
  public get(index: number): RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredAssignmentByAgentOutputReference {
    return new RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredAssignmentByAgentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredEvaluationsTimeInterval {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#days RecordingMediaRetentionPolicy#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#hours RecordingMediaRetentionPolicy#hours}
  */
  readonly hours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#months RecordingMediaRetentionPolicy#months}
  */
  readonly months?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#weeks RecordingMediaRetentionPolicy#weeks}
  */
  readonly weeks?: number;
}

export function recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredEvaluationsTimeIntervalToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredEvaluationsTimeIntervalOutputReference | RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredEvaluationsTimeInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    hours: cdktf.numberToTerraform(struct!.hours),
    months: cdktf.numberToTerraform(struct!.months),
    weeks: cdktf.numberToTerraform(struct!.weeks),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredEvaluationsTimeIntervalToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredEvaluationsTimeIntervalOutputReference | RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredEvaluationsTimeInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    months: {
      value: cdktf.numberToHclTerraform(struct!.months),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weeks: {
      value: cdktf.numberToHclTerraform(struct!.weeks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredEvaluationsTimeIntervalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredEvaluationsTimeInterval | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._months !== undefined) {
      hasAnyValues = true;
      internalValueResult.months = this._months;
    }
    if (this._weeks !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeks = this._weeks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredEvaluationsTimeInterval | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
      this._hours = undefined;
      this._months = undefined;
      this._weeks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
      this._hours = value.hours;
      this._months = value.months;
      this._weeks = value.weeks;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // months - computed: false, optional: true, required: false
  private _months?: number; 
  public get months() {
    return this.getNumberAttribute('months');
  }
  public set months(value: number) {
    this._months = value;
  }
  public resetMonths() {
    this._months = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthsInput() {
    return this._months;
  }

  // weeks - computed: false, optional: true, required: false
  private _weeks?: number; 
  public get weeks() {
    return this.getNumberAttribute('weeks');
  }
  public set weeks(value: number) {
    this._weeks = value;
  }
  public resetWeeks() {
    this._weeks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeksInput() {
    return this._weeks;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredEvaluations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#assign_to_active_user RecordingMediaRetentionPolicy#assign_to_active_user}
  */
  readonly assignToActiveUser?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#evaluation_form_id RecordingMediaRetentionPolicy#evaluation_form_id}
  */
  readonly evaluationFormId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#evaluator_ids RecordingMediaRetentionPolicy#evaluator_ids}
  */
  readonly evaluatorIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#max_number_evaluations RecordingMediaRetentionPolicy#max_number_evaluations}
  */
  readonly maxNumberEvaluations?: number;
  /**
  * time_interval block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#time_interval RecordingMediaRetentionPolicy#time_interval}
  */
  readonly timeInterval?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredEvaluationsTimeInterval;
}

export function recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredEvaluationsToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredEvaluations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_to_active_user: cdktf.booleanToTerraform(struct!.assignToActiveUser),
    evaluation_form_id: cdktf.stringToTerraform(struct!.evaluationFormId),
    evaluator_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.evaluatorIds),
    max_number_evaluations: cdktf.numberToTerraform(struct!.maxNumberEvaluations),
    time_interval: recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredEvaluationsTimeIntervalToTerraform(struct!.timeInterval),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredEvaluationsToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredEvaluations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assign_to_active_user: {
      value: cdktf.booleanToHclTerraform(struct!.assignToActiveUser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    evaluation_form_id: {
      value: cdktf.stringToHclTerraform(struct!.evaluationFormId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evaluator_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.evaluatorIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_number_evaluations: {
      value: cdktf.numberToHclTerraform(struct!.maxNumberEvaluations),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_interval: {
      value: recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredEvaluationsTimeIntervalToHclTerraform(struct!.timeInterval),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredEvaluationsTimeIntervalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredEvaluationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredEvaluations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignToActiveUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignToActiveUser = this._assignToActiveUser;
    }
    if (this._evaluationFormId !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationFormId = this._evaluationFormId;
    }
    if (this._evaluatorIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluatorIds = this._evaluatorIds;
    }
    if (this._maxNumberEvaluations !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNumberEvaluations = this._maxNumberEvaluations;
    }
    if (this._timeInterval?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeInterval = this._timeInterval?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredEvaluations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignToActiveUser = undefined;
      this._evaluationFormId = undefined;
      this._evaluatorIds = undefined;
      this._maxNumberEvaluations = undefined;
      this._timeInterval.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assignToActiveUser = value.assignToActiveUser;
      this._evaluationFormId = value.evaluationFormId;
      this._evaluatorIds = value.evaluatorIds;
      this._maxNumberEvaluations = value.maxNumberEvaluations;
      this._timeInterval.internalValue = value.timeInterval;
    }
  }

  // assign_to_active_user - computed: false, optional: true, required: false
  private _assignToActiveUser?: boolean | cdktf.IResolvable; 
  public get assignToActiveUser() {
    return this.getBooleanAttribute('assign_to_active_user');
  }
  public set assignToActiveUser(value: boolean | cdktf.IResolvable) {
    this._assignToActiveUser = value;
  }
  public resetAssignToActiveUser() {
    this._assignToActiveUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignToActiveUserInput() {
    return this._assignToActiveUser;
  }

  // evaluation_form_id - computed: false, optional: true, required: false
  private _evaluationFormId?: string; 
  public get evaluationFormId() {
    return this.getStringAttribute('evaluation_form_id');
  }
  public set evaluationFormId(value: string) {
    this._evaluationFormId = value;
  }
  public resetEvaluationFormId() {
    this._evaluationFormId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationFormIdInput() {
    return this._evaluationFormId;
  }

  // evaluator_ids - computed: false, optional: true, required: false
  private _evaluatorIds?: string[]; 
  public get evaluatorIds() {
    return this.getListAttribute('evaluator_ids');
  }
  public set evaluatorIds(value: string[]) {
    this._evaluatorIds = value;
  }
  public resetEvaluatorIds() {
    this._evaluatorIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluatorIdsInput() {
    return this._evaluatorIds;
  }

  // max_number_evaluations - computed: false, optional: true, required: false
  private _maxNumberEvaluations?: number; 
  public get maxNumberEvaluations() {
    return this.getNumberAttribute('max_number_evaluations');
  }
  public set maxNumberEvaluations(value: number) {
    this._maxNumberEvaluations = value;
  }
  public resetMaxNumberEvaluations() {
    this._maxNumberEvaluations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberEvaluationsInput() {
    return this._maxNumberEvaluations;
  }

  // time_interval - computed: false, optional: true, required: false
  private _timeInterval = new RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredEvaluationsTimeIntervalOutputReference(this, "time_interval");
  public get timeInterval() {
    return this._timeInterval;
  }
  public putTimeInterval(value: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredEvaluationsTimeInterval) {
    this._timeInterval.internalValue = value;
  }
  public resetTimeInterval() {
    this._timeInterval.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeIntervalInput() {
    return this._timeInterval.internalValue;
  }
}

export class RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredEvaluationsList extends cdktf.ComplexList {
  public internalValue? : RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredEvaluations[] | cdktf.IResolvable

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
  public get(index: number): RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredEvaluationsOutputReference {
    return new RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredEvaluationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignSurveys {
  /**
  * The UUID reference to the flow associated with this survey.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#flow_id RecordingMediaRetentionPolicy#flow_id}
  */
  readonly flowId?: string;
  /**
  * An ISO 8601 repeated interval consisting of the number of repetitions, the start datetime, and the interval (e.g. R2/2018-03-01T13:00:00Z/P1M10DT2H30M). Total duration must not exceed 90 days. Defaults to `R1/P0M`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#invite_time_interval RecordingMediaRetentionPolicy#invite_time_interval}
  */
  readonly inviteTimeInterval?: string;
  /**
  * Validated email domain, required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#sending_domain RecordingMediaRetentionPolicy#sending_domain}
  */
  readonly sendingDomain: string;
  /**
  * User together with sendingDomain used to send email, null to use no-reply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#sending_user RecordingMediaRetentionPolicy#sending_user}
  */
  readonly sendingUser?: string;
  /**
  * The survey form used for this survey.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#survey_form_name RecordingMediaRetentionPolicy#survey_form_name}
  */
  readonly surveyFormName?: string;
}

export function recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignSurveysToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignSurveys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flow_id: cdktf.stringToTerraform(struct!.flowId),
    invite_time_interval: cdktf.stringToTerraform(struct!.inviteTimeInterval),
    sending_domain: cdktf.stringToTerraform(struct!.sendingDomain),
    sending_user: cdktf.stringToTerraform(struct!.sendingUser),
    survey_form_name: cdktf.stringToTerraform(struct!.surveyFormName),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignSurveysToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignSurveys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flow_id: {
      value: cdktf.stringToHclTerraform(struct!.flowId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invite_time_interval: {
      value: cdktf.stringToHclTerraform(struct!.inviteTimeInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sending_domain: {
      value: cdktf.stringToHclTerraform(struct!.sendingDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sending_user: {
      value: cdktf.stringToHclTerraform(struct!.sendingUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    survey_form_name: {
      value: cdktf.stringToHclTerraform(struct!.surveyFormName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignSurveysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignSurveys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flowId !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowId = this._flowId;
    }
    if (this._inviteTimeInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.inviteTimeInterval = this._inviteTimeInterval;
    }
    if (this._sendingDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendingDomain = this._sendingDomain;
    }
    if (this._sendingUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendingUser = this._sendingUser;
    }
    if (this._surveyFormName !== undefined) {
      hasAnyValues = true;
      internalValueResult.surveyFormName = this._surveyFormName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignSurveys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flowId = undefined;
      this._inviteTimeInterval = undefined;
      this._sendingDomain = undefined;
      this._sendingUser = undefined;
      this._surveyFormName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flowId = value.flowId;
      this._inviteTimeInterval = value.inviteTimeInterval;
      this._sendingDomain = value.sendingDomain;
      this._sendingUser = value.sendingUser;
      this._surveyFormName = value.surveyFormName;
    }
  }

  // flow_id - computed: false, optional: true, required: false
  private _flowId?: string; 
  public get flowId() {
    return this.getStringAttribute('flow_id');
  }
  public set flowId(value: string) {
    this._flowId = value;
  }
  public resetFlowId() {
    this._flowId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowIdInput() {
    return this._flowId;
  }

  // invite_time_interval - computed: false, optional: true, required: false
  private _inviteTimeInterval?: string; 
  public get inviteTimeInterval() {
    return this.getStringAttribute('invite_time_interval');
  }
  public set inviteTimeInterval(value: string) {
    this._inviteTimeInterval = value;
  }
  public resetInviteTimeInterval() {
    this._inviteTimeInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inviteTimeIntervalInput() {
    return this._inviteTimeInterval;
  }

  // sending_domain - computed: false, optional: false, required: true
  private _sendingDomain?: string; 
  public get sendingDomain() {
    return this.getStringAttribute('sending_domain');
  }
  public set sendingDomain(value: string) {
    this._sendingDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sendingDomainInput() {
    return this._sendingDomain;
  }

  // sending_user - computed: false, optional: true, required: false
  private _sendingUser?: string; 
  public get sendingUser() {
    return this.getStringAttribute('sending_user');
  }
  public set sendingUser(value: string) {
    this._sendingUser = value;
  }
  public resetSendingUser() {
    this._sendingUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendingUserInput() {
    return this._sendingUser;
  }

  // survey_form_name - computed: false, optional: true, required: false
  private _surveyFormName?: string; 
  public get surveyFormName() {
    return this.getStringAttribute('survey_form_name');
  }
  public set surveyFormName(value: string) {
    this._surveyFormName = value;
  }
  public resetSurveyFormName() {
    this._surveyFormName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get surveyFormNameInput() {
    return this._surveyFormName;
  }
}

export class RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignSurveysList extends cdktf.ComplexList {
  public internalValue? : RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignSurveys[] | cdktf.IResolvable

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
  public get(index: number): RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignSurveysOutputReference {
    return new RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignSurveysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecordingArchiveRetention {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#days RecordingMediaRetentionPolicy#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#storage_medium RecordingMediaRetentionPolicy#storage_medium}
  */
  readonly storageMedium?: string;
}

export function recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecordingArchiveRetentionToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecordingArchiveRetentionOutputReference | RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecordingArchiveRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    storage_medium: cdktf.stringToTerraform(struct!.storageMedium),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecordingArchiveRetentionToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecordingArchiveRetentionOutputReference | RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecordingArchiveRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_medium: {
      value: cdktf.stringToHclTerraform(struct!.storageMedium),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecordingArchiveRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecordingArchiveRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._storageMedium !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageMedium = this._storageMedium;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecordingArchiveRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
      this._storageMedium = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
      this._storageMedium = value.storageMedium;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // storage_medium - computed: false, optional: true, required: false
  private _storageMedium?: string; 
  public get storageMedium() {
    return this.getStringAttribute('storage_medium');
  }
  public set storageMedium(value: string) {
    this._storageMedium = value;
  }
  public resetStorageMedium() {
    this._storageMedium = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageMediumInput() {
    return this._storageMedium;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecordingDeleteRetention {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#days RecordingMediaRetentionPolicy#days}
  */
  readonly days?: number;
}

export function recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecordingDeleteRetentionToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecordingDeleteRetentionOutputReference | RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecordingDeleteRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecordingDeleteRetentionToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecordingDeleteRetentionOutputReference | RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecordingDeleteRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecordingDeleteRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecordingDeleteRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecordingDeleteRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecording {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#record_acw RecordingMediaRetentionPolicy#record_acw}
  */
  readonly recordAcw?: boolean | cdktf.IResolvable;
  /**
  * archive_retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#archive_retention RecordingMediaRetentionPolicy#archive_retention}
  */
  readonly archiveRetention?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecordingArchiveRetention;
  /**
  * delete_retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#delete_retention RecordingMediaRetentionPolicy#delete_retention}
  */
  readonly deleteRetention?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecordingDeleteRetention;
}

export function recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecordingToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecordingOutputReference | RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecording): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    record_acw: cdktf.booleanToTerraform(struct!.recordAcw),
    archive_retention: recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecordingArchiveRetentionToTerraform(struct!.archiveRetention),
    delete_retention: recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecordingDeleteRetentionToTerraform(struct!.deleteRetention),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecordingToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecordingOutputReference | RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecording): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    record_acw: {
      value: cdktf.booleanToHclTerraform(struct!.recordAcw),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    archive_retention: {
      value: recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecordingArchiveRetentionToHclTerraform(struct!.archiveRetention),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecordingArchiveRetentionList",
    },
    delete_retention: {
      value: recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecordingDeleteRetentionToHclTerraform(struct!.deleteRetention),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecordingDeleteRetentionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecordingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecording | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordAcw !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordAcw = this._recordAcw;
    }
    if (this._archiveRetention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveRetention = this._archiveRetention?.internalValue;
    }
    if (this._deleteRetention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteRetention = this._deleteRetention?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecording | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recordAcw = undefined;
      this._archiveRetention.internalValue = undefined;
      this._deleteRetention.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recordAcw = value.recordAcw;
      this._archiveRetention.internalValue = value.archiveRetention;
      this._deleteRetention.internalValue = value.deleteRetention;
    }
  }

  // record_acw - computed: false, optional: true, required: false
  private _recordAcw?: boolean | cdktf.IResolvable; 
  public get recordAcw() {
    return this.getBooleanAttribute('record_acw');
  }
  public set recordAcw(value: boolean | cdktf.IResolvable) {
    this._recordAcw = value;
  }
  public resetRecordAcw() {
    this._recordAcw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordAcwInput() {
    return this._recordAcw;
  }

  // archive_retention - computed: false, optional: true, required: false
  private _archiveRetention = new RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecordingArchiveRetentionOutputReference(this, "archive_retention");
  public get archiveRetention() {
    return this._archiveRetention;
  }
  public putArchiveRetention(value: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecordingArchiveRetention) {
    this._archiveRetention.internalValue = value;
  }
  public resetArchiveRetention() {
    this._archiveRetention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveRetentionInput() {
    return this._archiveRetention.internalValue;
  }

  // delete_retention - computed: false, optional: true, required: false
  private _deleteRetention = new RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecordingDeleteRetentionOutputReference(this, "delete_retention");
  public get deleteRetention() {
    return this._deleteRetention;
  }
  public putDeleteRetention(value: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecordingDeleteRetention) {
    this._deleteRetention.internalValue = value;
  }
  public resetDeleteRetention() {
    this._deleteRetention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteRetentionInput() {
    return this._deleteRetention.internalValue;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsIntegrationExport {
  /**
  * The aws-s3-recording-bulk-actions-integration that the policy uses for exports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#integration_id RecordingMediaRetentionPolicy#integration_id}
  */
  readonly integrationId?: string;
  /**
  * True if the policy should export screen recordings in addition to the other conversation media. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#should_export_screen_recordings RecordingMediaRetentionPolicy#should_export_screen_recordings}
  */
  readonly shouldExportScreenRecordings?: boolean | cdktf.IResolvable;
}

export function recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsIntegrationExportToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsIntegrationExportOutputReference | RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsIntegrationExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    integration_id: cdktf.stringToTerraform(struct!.integrationId),
    should_export_screen_recordings: cdktf.booleanToTerraform(struct!.shouldExportScreenRecordings),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsIntegrationExportToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsIntegrationExportOutputReference | RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsIntegrationExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    integration_id: {
      value: cdktf.stringToHclTerraform(struct!.integrationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    should_export_screen_recordings: {
      value: cdktf.booleanToHclTerraform(struct!.shouldExportScreenRecordings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsIntegrationExportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsIntegrationExport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._integrationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationId = this._integrationId;
    }
    if (this._shouldExportScreenRecordings !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldExportScreenRecordings = this._shouldExportScreenRecordings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsIntegrationExport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._integrationId = undefined;
      this._shouldExportScreenRecordings = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._integrationId = value.integrationId;
      this._shouldExportScreenRecordings = value.shouldExportScreenRecordings;
    }
  }

  // integration_id - computed: false, optional: true, required: false
  private _integrationId?: string; 
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }
  public set integrationId(value: string) {
    this._integrationId = value;
  }
  public resetIntegrationId() {
    this._integrationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdInput() {
    return this._integrationId;
  }

  // should_export_screen_recordings - computed: false, optional: true, required: false
  private _shouldExportScreenRecordings?: boolean | cdktf.IResolvable; 
  public get shouldExportScreenRecordings() {
    return this.getBooleanAttribute('should_export_screen_recordings');
  }
  public set shouldExportScreenRecordings(value: boolean | cdktf.IResolvable) {
    this._shouldExportScreenRecordings = value;
  }
  public resetShouldExportScreenRecordings() {
    this._shouldExportScreenRecordings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldExportScreenRecordingsInput() {
    return this._shouldExportScreenRecordings;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsMediaTranscriptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#display_name RecordingMediaRetentionPolicy#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#integration_id RecordingMediaRetentionPolicy#integration_id}
  */
  readonly integrationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#transcription_provider RecordingMediaRetentionPolicy#transcription_provider}
  */
  readonly transcriptionProvider?: string;
}

export function recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsMediaTranscriptionsToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsMediaTranscriptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    integration_id: cdktf.stringToTerraform(struct!.integrationId),
    transcription_provider: cdktf.stringToTerraform(struct!.transcriptionProvider),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsMediaTranscriptionsToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsMediaTranscriptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    integration_id: {
      value: cdktf.stringToHclTerraform(struct!.integrationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transcription_provider: {
      value: cdktf.stringToHclTerraform(struct!.transcriptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsMediaTranscriptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsMediaTranscriptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._integrationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationId = this._integrationId;
    }
    if (this._transcriptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.transcriptionProvider = this._transcriptionProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsMediaTranscriptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._integrationId = undefined;
      this._transcriptionProvider = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._integrationId = value.integrationId;
      this._transcriptionProvider = value.transcriptionProvider;
    }
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

  // integration_id - computed: false, optional: true, required: false
  private _integrationId?: string; 
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }
  public set integrationId(value: string) {
    this._integrationId = value;
  }
  public resetIntegrationId() {
    this._integrationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdInput() {
    return this._integrationId;
  }

  // transcription_provider - computed: false, optional: true, required: false
  private _transcriptionProvider?: string; 
  public get transcriptionProvider() {
    return this.getStringAttribute('transcription_provider');
  }
  public set transcriptionProvider(value: string) {
    this._transcriptionProvider = value;
  }
  public resetTranscriptionProvider() {
    this._transcriptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transcriptionProviderInput() {
    return this._transcriptionProvider;
  }
}

export class RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsMediaTranscriptionsList extends cdktf.ComplexList {
  public internalValue? : RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsMediaTranscriptions[] | cdktf.IResolvable

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
  public get(index: number): RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsMediaTranscriptionsOutputReference {
    return new RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsMediaTranscriptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDurationArchiveRetention {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#days RecordingMediaRetentionPolicy#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#storage_medium RecordingMediaRetentionPolicy#storage_medium}
  */
  readonly storageMedium?: string;
}

export function recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDurationArchiveRetentionToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDurationArchiveRetentionOutputReference | RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDurationArchiveRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    storage_medium: cdktf.stringToTerraform(struct!.storageMedium),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDurationArchiveRetentionToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDurationArchiveRetentionOutputReference | RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDurationArchiveRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_medium: {
      value: cdktf.stringToHclTerraform(struct!.storageMedium),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDurationArchiveRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDurationArchiveRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._storageMedium !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageMedium = this._storageMedium;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDurationArchiveRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
      this._storageMedium = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
      this._storageMedium = value.storageMedium;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // storage_medium - computed: false, optional: true, required: false
  private _storageMedium?: string; 
  public get storageMedium() {
    return this.getStringAttribute('storage_medium');
  }
  public set storageMedium(value: string) {
    this._storageMedium = value;
  }
  public resetStorageMedium() {
    this._storageMedium = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageMediumInput() {
    return this._storageMedium;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDurationDeleteRetention {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#days RecordingMediaRetentionPolicy#days}
  */
  readonly days?: number;
}

export function recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDurationDeleteRetentionToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDurationDeleteRetentionOutputReference | RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDurationDeleteRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDurationDeleteRetentionToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDurationDeleteRetentionOutputReference | RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDurationDeleteRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDurationDeleteRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDurationDeleteRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDurationDeleteRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDuration {
  /**
  * archive_retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#archive_retention RecordingMediaRetentionPolicy#archive_retention}
  */
  readonly archiveRetention?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDurationArchiveRetention;
  /**
  * delete_retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#delete_retention RecordingMediaRetentionPolicy#delete_retention}
  */
  readonly deleteRetention?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDurationDeleteRetention;
}

export function recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDurationToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDurationOutputReference | RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_retention: recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDurationArchiveRetentionToTerraform(struct!.archiveRetention),
    delete_retention: recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDurationDeleteRetentionToTerraform(struct!.deleteRetention),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDurationToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDurationOutputReference | RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_retention: {
      value: recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDurationArchiveRetentionToHclTerraform(struct!.archiveRetention),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDurationArchiveRetentionList",
    },
    delete_retention: {
      value: recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDurationDeleteRetentionToHclTerraform(struct!.deleteRetention),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDurationDeleteRetentionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveRetention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveRetention = this._archiveRetention?.internalValue;
    }
    if (this._deleteRetention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteRetention = this._deleteRetention?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archiveRetention.internalValue = undefined;
      this._deleteRetention.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archiveRetention.internalValue = value.archiveRetention;
      this._deleteRetention.internalValue = value.deleteRetention;
    }
  }

  // archive_retention - computed: false, optional: true, required: false
  private _archiveRetention = new RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDurationArchiveRetentionOutputReference(this, "archive_retention");
  public get archiveRetention() {
    return this._archiveRetention;
  }
  public putArchiveRetention(value: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDurationArchiveRetention) {
    this._archiveRetention.internalValue = value;
  }
  public resetArchiveRetention() {
    this._archiveRetention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveRetentionInput() {
    return this._archiveRetention.internalValue;
  }

  // delete_retention - computed: false, optional: true, required: false
  private _deleteRetention = new RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDurationDeleteRetentionOutputReference(this, "delete_retention");
  public get deleteRetention() {
    return this._deleteRetention;
  }
  public putDeleteRetention(value: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDurationDeleteRetention) {
    this._deleteRetention.internalValue = value;
  }
  public resetDeleteRetention() {
    this._deleteRetention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteRetentionInput() {
    return this._deleteRetention.internalValue;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActions {
  /**
  * true to delete the recording associated with the conversation regardless of the values of retainRecording or deleteRecording.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#always_delete RecordingMediaRetentionPolicy#always_delete}
  */
  readonly alwaysDelete?: boolean | cdktf.IResolvable;
  /**
  * true to delete the recording associated with the conversation. If retainRecording = true, this will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#delete_recording RecordingMediaRetentionPolicy#delete_recording}
  */
  readonly deleteRecording?: boolean | cdktf.IResolvable;
  /**
  * true to retain the recording associated with the conversation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#retain_recording RecordingMediaRetentionPolicy#retain_recording}
  */
  readonly retainRecording?: boolean | cdktf.IResolvable;
  /**
  * assign_calibrations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#assign_calibrations RecordingMediaRetentionPolicy#assign_calibrations}
  */
  readonly assignCalibrations?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignCalibrations[] | cdktf.IResolvable;
  /**
  * assign_evaluations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#assign_evaluations RecordingMediaRetentionPolicy#assign_evaluations}
  */
  readonly assignEvaluations?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignEvaluations[] | cdktf.IResolvable;
  /**
  * assign_metered_assignment_by_agent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#assign_metered_assignment_by_agent RecordingMediaRetentionPolicy#assign_metered_assignment_by_agent}
  */
  readonly assignMeteredAssignmentByAgent?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredAssignmentByAgent[] | cdktf.IResolvable;
  /**
  * assign_metered_evaluations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#assign_metered_evaluations RecordingMediaRetentionPolicy#assign_metered_evaluations}
  */
  readonly assignMeteredEvaluations?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredEvaluations[] | cdktf.IResolvable;
  /**
  * assign_surveys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#assign_surveys RecordingMediaRetentionPolicy#assign_surveys}
  */
  readonly assignSurveys?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignSurveys[] | cdktf.IResolvable;
  /**
  * initiate_screen_recording block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#initiate_screen_recording RecordingMediaRetentionPolicy#initiate_screen_recording}
  */
  readonly initiateScreenRecording?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecording;
  /**
  * integration_export block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#integration_export RecordingMediaRetentionPolicy#integration_export}
  */
  readonly integrationExport?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsIntegrationExport;
  /**
  * media_transcriptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#media_transcriptions RecordingMediaRetentionPolicy#media_transcriptions}
  */
  readonly mediaTranscriptions?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsMediaTranscriptions[] | cdktf.IResolvable;
  /**
  * retention_duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#retention_duration RecordingMediaRetentionPolicy#retention_duration}
  */
  readonly retentionDuration?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDuration;
}

export function recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsOutputReference | RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always_delete: cdktf.booleanToTerraform(struct!.alwaysDelete),
    delete_recording: cdktf.booleanToTerraform(struct!.deleteRecording),
    retain_recording: cdktf.booleanToTerraform(struct!.retainRecording),
    assign_calibrations: cdktf.listMapper(recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignCalibrationsToTerraform, true)(struct!.assignCalibrations),
    assign_evaluations: cdktf.listMapper(recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignEvaluationsToTerraform, true)(struct!.assignEvaluations),
    assign_metered_assignment_by_agent: cdktf.listMapper(recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredAssignmentByAgentToTerraform, true)(struct!.assignMeteredAssignmentByAgent),
    assign_metered_evaluations: cdktf.listMapper(recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredEvaluationsToTerraform, true)(struct!.assignMeteredEvaluations),
    assign_surveys: cdktf.listMapper(recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignSurveysToTerraform, true)(struct!.assignSurveys),
    initiate_screen_recording: recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecordingToTerraform(struct!.initiateScreenRecording),
    integration_export: recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsIntegrationExportToTerraform(struct!.integrationExport),
    media_transcriptions: cdktf.listMapper(recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsMediaTranscriptionsToTerraform, true)(struct!.mediaTranscriptions),
    retention_duration: recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDurationToTerraform(struct!.retentionDuration),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsOutputReference | RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    always_delete: {
      value: cdktf.booleanToHclTerraform(struct!.alwaysDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delete_recording: {
      value: cdktf.booleanToHclTerraform(struct!.deleteRecording),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retain_recording: {
      value: cdktf.booleanToHclTerraform(struct!.retainRecording),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    assign_calibrations: {
      value: cdktf.listMapperHcl(recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignCalibrationsToHclTerraform, true)(struct!.assignCalibrations),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignCalibrationsList",
    },
    assign_evaluations: {
      value: cdktf.listMapperHcl(recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignEvaluationsToHclTerraform, true)(struct!.assignEvaluations),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignEvaluationsList",
    },
    assign_metered_assignment_by_agent: {
      value: cdktf.listMapperHcl(recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredAssignmentByAgentToHclTerraform, true)(struct!.assignMeteredAssignmentByAgent),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredAssignmentByAgentList",
    },
    assign_metered_evaluations: {
      value: cdktf.listMapperHcl(recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredEvaluationsToHclTerraform, true)(struct!.assignMeteredEvaluations),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredEvaluationsList",
    },
    assign_surveys: {
      value: cdktf.listMapperHcl(recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignSurveysToHclTerraform, true)(struct!.assignSurveys),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignSurveysList",
    },
    initiate_screen_recording: {
      value: recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecordingToHclTerraform(struct!.initiateScreenRecording),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecordingList",
    },
    integration_export: {
      value: recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsIntegrationExportToHclTerraform(struct!.integrationExport),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsIntegrationExportList",
    },
    media_transcriptions: {
      value: cdktf.listMapperHcl(recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsMediaTranscriptionsToHclTerraform, true)(struct!.mediaTranscriptions),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsMediaTranscriptionsList",
    },
    retention_duration: {
      value: recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDurationToHclTerraform(struct!.retentionDuration),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alwaysDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysDelete = this._alwaysDelete;
    }
    if (this._deleteRecording !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteRecording = this._deleteRecording;
    }
    if (this._retainRecording !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainRecording = this._retainRecording;
    }
    if (this._assignCalibrations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignCalibrations = this._assignCalibrations?.internalValue;
    }
    if (this._assignEvaluations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignEvaluations = this._assignEvaluations?.internalValue;
    }
    if (this._assignMeteredAssignmentByAgent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignMeteredAssignmentByAgent = this._assignMeteredAssignmentByAgent?.internalValue;
    }
    if (this._assignMeteredEvaluations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignMeteredEvaluations = this._assignMeteredEvaluations?.internalValue;
    }
    if (this._assignSurveys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignSurveys = this._assignSurveys?.internalValue;
    }
    if (this._initiateScreenRecording?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initiateScreenRecording = this._initiateScreenRecording?.internalValue;
    }
    if (this._integrationExport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationExport = this._integrationExport?.internalValue;
    }
    if (this._mediaTranscriptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaTranscriptions = this._mediaTranscriptions?.internalValue;
    }
    if (this._retentionDuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionDuration = this._retentionDuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alwaysDelete = undefined;
      this._deleteRecording = undefined;
      this._retainRecording = undefined;
      this._assignCalibrations.internalValue = undefined;
      this._assignEvaluations.internalValue = undefined;
      this._assignMeteredAssignmentByAgent.internalValue = undefined;
      this._assignMeteredEvaluations.internalValue = undefined;
      this._assignSurveys.internalValue = undefined;
      this._initiateScreenRecording.internalValue = undefined;
      this._integrationExport.internalValue = undefined;
      this._mediaTranscriptions.internalValue = undefined;
      this._retentionDuration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alwaysDelete = value.alwaysDelete;
      this._deleteRecording = value.deleteRecording;
      this._retainRecording = value.retainRecording;
      this._assignCalibrations.internalValue = value.assignCalibrations;
      this._assignEvaluations.internalValue = value.assignEvaluations;
      this._assignMeteredAssignmentByAgent.internalValue = value.assignMeteredAssignmentByAgent;
      this._assignMeteredEvaluations.internalValue = value.assignMeteredEvaluations;
      this._assignSurveys.internalValue = value.assignSurveys;
      this._initiateScreenRecording.internalValue = value.initiateScreenRecording;
      this._integrationExport.internalValue = value.integrationExport;
      this._mediaTranscriptions.internalValue = value.mediaTranscriptions;
      this._retentionDuration.internalValue = value.retentionDuration;
    }
  }

  // always_delete - computed: false, optional: true, required: false
  private _alwaysDelete?: boolean | cdktf.IResolvable; 
  public get alwaysDelete() {
    return this.getBooleanAttribute('always_delete');
  }
  public set alwaysDelete(value: boolean | cdktf.IResolvable) {
    this._alwaysDelete = value;
  }
  public resetAlwaysDelete() {
    this._alwaysDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysDeleteInput() {
    return this._alwaysDelete;
  }

  // delete_recording - computed: false, optional: true, required: false
  private _deleteRecording?: boolean | cdktf.IResolvable; 
  public get deleteRecording() {
    return this.getBooleanAttribute('delete_recording');
  }
  public set deleteRecording(value: boolean | cdktf.IResolvable) {
    this._deleteRecording = value;
  }
  public resetDeleteRecording() {
    this._deleteRecording = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteRecordingInput() {
    return this._deleteRecording;
  }

  // retain_recording - computed: false, optional: true, required: false
  private _retainRecording?: boolean | cdktf.IResolvable; 
  public get retainRecording() {
    return this.getBooleanAttribute('retain_recording');
  }
  public set retainRecording(value: boolean | cdktf.IResolvable) {
    this._retainRecording = value;
  }
  public resetRetainRecording() {
    this._retainRecording = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainRecordingInput() {
    return this._retainRecording;
  }

  // assign_calibrations - computed: false, optional: true, required: false
  private _assignCalibrations = new RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignCalibrationsList(this, "assign_calibrations", false);
  public get assignCalibrations() {
    return this._assignCalibrations;
  }
  public putAssignCalibrations(value: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignCalibrations[] | cdktf.IResolvable) {
    this._assignCalibrations.internalValue = value;
  }
  public resetAssignCalibrations() {
    this._assignCalibrations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignCalibrationsInput() {
    return this._assignCalibrations.internalValue;
  }

  // assign_evaluations - computed: false, optional: true, required: false
  private _assignEvaluations = new RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignEvaluationsList(this, "assign_evaluations", false);
  public get assignEvaluations() {
    return this._assignEvaluations;
  }
  public putAssignEvaluations(value: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignEvaluations[] | cdktf.IResolvable) {
    this._assignEvaluations.internalValue = value;
  }
  public resetAssignEvaluations() {
    this._assignEvaluations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignEvaluationsInput() {
    return this._assignEvaluations.internalValue;
  }

  // assign_metered_assignment_by_agent - computed: false, optional: true, required: false
  private _assignMeteredAssignmentByAgent = new RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredAssignmentByAgentList(this, "assign_metered_assignment_by_agent", false);
  public get assignMeteredAssignmentByAgent() {
    return this._assignMeteredAssignmentByAgent;
  }
  public putAssignMeteredAssignmentByAgent(value: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredAssignmentByAgent[] | cdktf.IResolvable) {
    this._assignMeteredAssignmentByAgent.internalValue = value;
  }
  public resetAssignMeteredAssignmentByAgent() {
    this._assignMeteredAssignmentByAgent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignMeteredAssignmentByAgentInput() {
    return this._assignMeteredAssignmentByAgent.internalValue;
  }

  // assign_metered_evaluations - computed: false, optional: true, required: false
  private _assignMeteredEvaluations = new RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredEvaluationsList(this, "assign_metered_evaluations", false);
  public get assignMeteredEvaluations() {
    return this._assignMeteredEvaluations;
  }
  public putAssignMeteredEvaluations(value: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignMeteredEvaluations[] | cdktf.IResolvable) {
    this._assignMeteredEvaluations.internalValue = value;
  }
  public resetAssignMeteredEvaluations() {
    this._assignMeteredEvaluations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignMeteredEvaluationsInput() {
    return this._assignMeteredEvaluations.internalValue;
  }

  // assign_surveys - computed: false, optional: true, required: false
  private _assignSurveys = new RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignSurveysList(this, "assign_surveys", false);
  public get assignSurveys() {
    return this._assignSurveys;
  }
  public putAssignSurveys(value: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsAssignSurveys[] | cdktf.IResolvable) {
    this._assignSurveys.internalValue = value;
  }
  public resetAssignSurveys() {
    this._assignSurveys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignSurveysInput() {
    return this._assignSurveys.internalValue;
  }

  // initiate_screen_recording - computed: false, optional: true, required: false
  private _initiateScreenRecording = new RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecordingOutputReference(this, "initiate_screen_recording");
  public get initiateScreenRecording() {
    return this._initiateScreenRecording;
  }
  public putInitiateScreenRecording(value: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsInitiateScreenRecording) {
    this._initiateScreenRecording.internalValue = value;
  }
  public resetInitiateScreenRecording() {
    this._initiateScreenRecording.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initiateScreenRecordingInput() {
    return this._initiateScreenRecording.internalValue;
  }

  // integration_export - computed: false, optional: true, required: false
  private _integrationExport = new RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsIntegrationExportOutputReference(this, "integration_export");
  public get integrationExport() {
    return this._integrationExport;
  }
  public putIntegrationExport(value: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsIntegrationExport) {
    this._integrationExport.internalValue = value;
  }
  public resetIntegrationExport() {
    this._integrationExport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationExportInput() {
    return this._integrationExport.internalValue;
  }

  // media_transcriptions - computed: false, optional: true, required: false
  private _mediaTranscriptions = new RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsMediaTranscriptionsList(this, "media_transcriptions", false);
  public get mediaTranscriptions() {
    return this._mediaTranscriptions;
  }
  public putMediaTranscriptions(value: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsMediaTranscriptions[] | cdktf.IResolvable) {
    this._mediaTranscriptions.internalValue = value;
  }
  public resetMediaTranscriptions() {
    this._mediaTranscriptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaTranscriptionsInput() {
    return this._mediaTranscriptions.internalValue;
  }

  // retention_duration - computed: false, optional: true, required: false
  private _retentionDuration = new RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDurationOutputReference(this, "retention_duration");
  public get retentionDuration() {
    return this._retentionDuration;
  }
  public putRetentionDuration(value: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsRetentionDuration) {
    this._retentionDuration.internalValue = value;
  }
  public resetRetentionDuration() {
    this._retentionDuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDurationInput() {
    return this._retentionDuration.internalValue;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsDuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#duration_mode RecordingMediaRetentionPolicy#duration_mode}
  */
  readonly durationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#duration_operator RecordingMediaRetentionPolicy#duration_operator}
  */
  readonly durationOperator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#duration_range RecordingMediaRetentionPolicy#duration_range}
  */
  readonly durationRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#duration_target RecordingMediaRetentionPolicy#duration_target}
  */
  readonly durationTarget?: string;
}

export function recordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsDurationToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsDurationOutputReference | RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration_mode: cdktf.stringToTerraform(struct!.durationMode),
    duration_operator: cdktf.stringToTerraform(struct!.durationOperator),
    duration_range: cdktf.stringToTerraform(struct!.durationRange),
    duration_target: cdktf.stringToTerraform(struct!.durationTarget),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsDurationToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsDurationOutputReference | RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration_mode: {
      value: cdktf.stringToHclTerraform(struct!.durationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duration_operator: {
      value: cdktf.stringToHclTerraform(struct!.durationOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duration_range: {
      value: cdktf.stringToHclTerraform(struct!.durationRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duration_target: {
      value: cdktf.stringToHclTerraform(struct!.durationTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsDuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._durationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationMode = this._durationMode;
    }
    if (this._durationOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationOperator = this._durationOperator;
    }
    if (this._durationRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationRange = this._durationRange;
    }
    if (this._durationTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationTarget = this._durationTarget;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsDuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._durationMode = undefined;
      this._durationOperator = undefined;
      this._durationRange = undefined;
      this._durationTarget = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._durationMode = value.durationMode;
      this._durationOperator = value.durationOperator;
      this._durationRange = value.durationRange;
      this._durationTarget = value.durationTarget;
    }
  }

  // duration_mode - computed: false, optional: true, required: false
  private _durationMode?: string; 
  public get durationMode() {
    return this.getStringAttribute('duration_mode');
  }
  public set durationMode(value: string) {
    this._durationMode = value;
  }
  public resetDurationMode() {
    this._durationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationModeInput() {
    return this._durationMode;
  }

  // duration_operator - computed: false, optional: true, required: false
  private _durationOperator?: string; 
  public get durationOperator() {
    return this.getStringAttribute('duration_operator');
  }
  public set durationOperator(value: string) {
    this._durationOperator = value;
  }
  public resetDurationOperator() {
    this._durationOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationOperatorInput() {
    return this._durationOperator;
  }

  // duration_range - computed: false, optional: true, required: false
  private _durationRange?: string; 
  public get durationRange() {
    return this.getStringAttribute('duration_range');
  }
  public set durationRange(value: string) {
    this._durationRange = value;
  }
  public resetDurationRange() {
    this._durationRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationRangeInput() {
    return this._durationRange;
  }

  // duration_target - computed: false, optional: true, required: false
  private _durationTarget?: string; 
  public get durationTarget() {
    return this.getStringAttribute('duration_target');
  }
  public set durationTarget(value: string) {
    this._durationTarget = value;
  }
  public resetDurationTarget() {
    this._durationTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationTargetInput() {
    return this._durationTarget;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsTimeAllowedTimeSlots {
  /**
  * Day for this time slot, Monday = 1 ... Sunday = 7
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#day RecordingMediaRetentionPolicy#day}
  */
  readonly day?: number;
  /**
  * start time in xx:xx:xx.xxx format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#start_time RecordingMediaRetentionPolicy#start_time}
  */
  readonly startTime?: string;
  /**
  * stop time in xx:xx:xx.xxx format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#stop_time RecordingMediaRetentionPolicy#stop_time}
  */
  readonly stopTime?: string;
}

export function recordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsTimeAllowedTimeSlotsToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsTimeAllowedTimeSlots | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.numberToTerraform(struct!.day),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    stop_time: cdktf.stringToTerraform(struct!.stopTime),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsTimeAllowedTimeSlotsToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsTimeAllowedTimeSlots | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.numberToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stop_time: {
      value: cdktf.stringToHclTerraform(struct!.stopTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsTimeAllowedTimeSlotsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsTimeAllowedTimeSlots | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._stopTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopTime = this._stopTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsTimeAllowedTimeSlots | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._day = undefined;
      this._startTime = undefined;
      this._stopTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._day = value.day;
      this._startTime = value.startTime;
      this._stopTime = value.stopTime;
    }
  }

  // day - computed: false, optional: true, required: false
  private _day?: number; 
  public get day() {
    return this.getNumberAttribute('day');
  }
  public set day(value: number) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // stop_time - computed: false, optional: true, required: false
  private _stopTime?: string; 
  public get stopTime() {
    return this.getStringAttribute('stop_time');
  }
  public set stopTime(value: string) {
    this._stopTime = value;
  }
  public resetStopTime() {
    this._stopTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopTimeInput() {
    return this._stopTime;
  }
}

export class RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsTimeAllowedTimeSlotsList extends cdktf.ComplexList {
  public internalValue? : RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsTimeAllowedTimeSlots[] | cdktf.IResolvable

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
  public get(index: number): RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsTimeAllowedTimeSlotsOutputReference {
    return new RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsTimeAllowedTimeSlotsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsTimeAllowed {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#empty RecordingMediaRetentionPolicy#empty}
  */
  readonly empty?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#time_zone_id RecordingMediaRetentionPolicy#time_zone_id}
  */
  readonly timeZoneId?: string;
  /**
  * time_slots block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#time_slots RecordingMediaRetentionPolicy#time_slots}
  */
  readonly timeSlots?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsTimeAllowedTimeSlots[] | cdktf.IResolvable;
}

export function recordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsTimeAllowedToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsTimeAllowedOutputReference | RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsTimeAllowed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    empty: cdktf.booleanToTerraform(struct!.empty),
    time_zone_id: cdktf.stringToTerraform(struct!.timeZoneId),
    time_slots: cdktf.listMapper(recordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsTimeAllowedTimeSlotsToTerraform, true)(struct!.timeSlots),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsTimeAllowedToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsTimeAllowedOutputReference | RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsTimeAllowed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    empty: {
      value: cdktf.booleanToHclTerraform(struct!.empty),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    time_zone_id: {
      value: cdktf.stringToHclTerraform(struct!.timeZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_slots: {
      value: cdktf.listMapperHcl(recordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsTimeAllowedTimeSlotsToHclTerraform, true)(struct!.timeSlots),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsTimeAllowedTimeSlotsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsTimeAllowedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsTimeAllowed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._empty !== undefined) {
      hasAnyValues = true;
      internalValueResult.empty = this._empty;
    }
    if (this._timeZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZoneId = this._timeZoneId;
    }
    if (this._timeSlots?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeSlots = this._timeSlots?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsTimeAllowed | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._empty = undefined;
      this._timeZoneId = undefined;
      this._timeSlots.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._empty = value.empty;
      this._timeZoneId = value.timeZoneId;
      this._timeSlots.internalValue = value.timeSlots;
    }
  }

  // empty - computed: false, optional: true, required: false
  private _empty?: boolean | cdktf.IResolvable; 
  public get empty() {
    return this.getBooleanAttribute('empty');
  }
  public set empty(value: boolean | cdktf.IResolvable) {
    this._empty = value;
  }
  public resetEmpty() {
    this._empty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyInput() {
    return this._empty;
  }

  // time_zone_id - computed: false, optional: true, required: false
  private _timeZoneId?: string; 
  public get timeZoneId() {
    return this.getStringAttribute('time_zone_id');
  }
  public set timeZoneId(value: string) {
    this._timeZoneId = value;
  }
  public resetTimeZoneId() {
    this._timeZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneIdInput() {
    return this._timeZoneId;
  }

  // time_slots - computed: false, optional: true, required: false
  private _timeSlots = new RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsTimeAllowedTimeSlotsList(this, "time_slots", false);
  public get timeSlots() {
    return this._timeSlots;
  }
  public putTimeSlots(value: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsTimeAllowedTimeSlots[] | cdktf.IResolvable) {
    this._timeSlots.internalValue = value;
  }
  public resetTimeSlots() {
    this._timeSlots.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSlotsInput() {
    return this._timeSlots.internalValue;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#date_ranges RecordingMediaRetentionPolicy#date_ranges}
  */
  readonly dateRanges?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#for_queue_ids RecordingMediaRetentionPolicy#for_queue_ids}
  */
  readonly forQueueIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#for_user_ids RecordingMediaRetentionPolicy#for_user_ids}
  */
  readonly forUserIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#language_ids RecordingMediaRetentionPolicy#language_ids}
  */
  readonly languageIds?: string[];
  /**
  * Teams to match conversations against
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#team_ids RecordingMediaRetentionPolicy#team_ids}
  */
  readonly teamIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#wrapup_code_ids RecordingMediaRetentionPolicy#wrapup_code_ids}
  */
  readonly wrapupCodeIds?: string[];
  /**
  * duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#duration RecordingMediaRetentionPolicy#duration}
  */
  readonly duration?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsDuration;
  /**
  * time_allowed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#time_allowed RecordingMediaRetentionPolicy#time_allowed}
  */
  readonly timeAllowed?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsTimeAllowed;
}

export function recordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsOutputReference | RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dateRanges),
    for_queue_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.forQueueIds),
    for_user_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.forUserIds),
    language_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.languageIds),
    team_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.teamIds),
    wrapup_code_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.wrapupCodeIds),
    duration: recordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsDurationToTerraform(struct!.duration),
    time_allowed: recordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsTimeAllowedToTerraform(struct!.timeAllowed),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsOutputReference | RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    date_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dateRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    for_queue_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.forQueueIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    for_user_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.forUserIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    language_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.languageIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    team_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.teamIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    wrapup_code_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.wrapupCodeIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    duration: {
      value: recordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsDurationToHclTerraform(struct!.duration),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsDurationList",
    },
    time_allowed: {
      value: recordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsTimeAllowedToHclTerraform(struct!.timeAllowed),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsTimeAllowedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dateRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateRanges = this._dateRanges;
    }
    if (this._forQueueIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.forQueueIds = this._forQueueIds;
    }
    if (this._forUserIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.forUserIds = this._forUserIds;
    }
    if (this._languageIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.languageIds = this._languageIds;
    }
    if (this._teamIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.teamIds = this._teamIds;
    }
    if (this._wrapupCodeIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.wrapupCodeIds = this._wrapupCodeIds;
    }
    if (this._duration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration?.internalValue;
    }
    if (this._timeAllowed?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeAllowed = this._timeAllowed?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dateRanges = undefined;
      this._forQueueIds = undefined;
      this._forUserIds = undefined;
      this._languageIds = undefined;
      this._teamIds = undefined;
      this._wrapupCodeIds = undefined;
      this._duration.internalValue = undefined;
      this._timeAllowed.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dateRanges = value.dateRanges;
      this._forQueueIds = value.forQueueIds;
      this._forUserIds = value.forUserIds;
      this._languageIds = value.languageIds;
      this._teamIds = value.teamIds;
      this._wrapupCodeIds = value.wrapupCodeIds;
      this._duration.internalValue = value.duration;
      this._timeAllowed.internalValue = value.timeAllowed;
    }
  }

  // date_ranges - computed: false, optional: true, required: false
  private _dateRanges?: string[]; 
  public get dateRanges() {
    return this.getListAttribute('date_ranges');
  }
  public set dateRanges(value: string[]) {
    this._dateRanges = value;
  }
  public resetDateRanges() {
    this._dateRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateRangesInput() {
    return this._dateRanges;
  }

  // for_queue_ids - computed: false, optional: true, required: false
  private _forQueueIds?: string[]; 
  public get forQueueIds() {
    return this.getListAttribute('for_queue_ids');
  }
  public set forQueueIds(value: string[]) {
    this._forQueueIds = value;
  }
  public resetForQueueIds() {
    this._forQueueIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forQueueIdsInput() {
    return this._forQueueIds;
  }

  // for_user_ids - computed: false, optional: true, required: false
  private _forUserIds?: string[]; 
  public get forUserIds() {
    return this.getListAttribute('for_user_ids');
  }
  public set forUserIds(value: string[]) {
    this._forUserIds = value;
  }
  public resetForUserIds() {
    this._forUserIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forUserIdsInput() {
    return this._forUserIds;
  }

  // language_ids - computed: false, optional: true, required: false
  private _languageIds?: string[]; 
  public get languageIds() {
    return this.getListAttribute('language_ids');
  }
  public set languageIds(value: string[]) {
    this._languageIds = value;
  }
  public resetLanguageIds() {
    this._languageIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageIdsInput() {
    return this._languageIds;
  }

  // team_ids - computed: false, optional: true, required: false
  private _teamIds?: string[]; 
  public get teamIds() {
    return cdktf.Fn.tolist(this.getListAttribute('team_ids'));
  }
  public set teamIds(value: string[]) {
    this._teamIds = value;
  }
  public resetTeamIds() {
    this._teamIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdsInput() {
    return this._teamIds;
  }

  // wrapup_code_ids - computed: false, optional: true, required: false
  private _wrapupCodeIds?: string[]; 
  public get wrapupCodeIds() {
    return this.getListAttribute('wrapup_code_ids');
  }
  public set wrapupCodeIds(value: string[]) {
    this._wrapupCodeIds = value;
  }
  public resetWrapupCodeIds() {
    this._wrapupCodeIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wrapupCodeIdsInput() {
    return this._wrapupCodeIds;
  }

  // duration - computed: false, optional: true, required: false
  private _duration = new RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsDurationOutputReference(this, "duration");
  public get duration() {
    return this._duration;
  }
  public putDuration(value: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsDuration) {
    this._duration.internalValue = value;
  }
  public resetDuration() {
    this._duration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration.internalValue;
  }

  // time_allowed - computed: false, optional: true, required: false
  private _timeAllowed = new RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsTimeAllowedOutputReference(this, "time_allowed");
  public get timeAllowed() {
    return this._timeAllowed;
  }
  public putTimeAllowed(value: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsTimeAllowed) {
    this._timeAllowed.internalValue = value;
  }
  public resetTimeAllowed() {
    this._timeAllowed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeAllowedInput() {
    return this._timeAllowed.internalValue;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesChatPolicy {
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#actions RecordingMediaRetentionPolicy#actions}
  */
  readonly actions?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActions;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#conditions RecordingMediaRetentionPolicy#conditions}
  */
  readonly conditions?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditions;
}

export function recordingMediaRetentionPolicyMediaPoliciesChatPolicyToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyOutputReference | RecordingMediaRetentionPolicyMediaPoliciesChatPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsToTerraform(struct!.actions),
    conditions: recordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsToTerraform(struct!.conditions),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesChatPolicyToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyOutputReference | RecordingMediaRetentionPolicyMediaPoliciesChatPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: recordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsToHclTerraform(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsList",
    },
    conditions: {
      value: recordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsToHclTerraform(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesChatPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesChatPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesChatPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actions.internalValue = undefined;
      this._conditions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actions.internalValue = value.actions;
      this._conditions.internalValue = value.conditions;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions = new RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActionsOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }
  public putActions(value: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyActions) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: RecordingMediaRetentionPolicyMediaPoliciesChatPolicyConditions) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignCalibrations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#calibrator_id RecordingMediaRetentionPolicy#calibrator_id}
  */
  readonly calibratorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#evaluation_form_id RecordingMediaRetentionPolicy#evaluation_form_id}
  */
  readonly evaluationFormId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#evaluator_ids RecordingMediaRetentionPolicy#evaluator_ids}
  */
  readonly evaluatorIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#expert_evaluator_id RecordingMediaRetentionPolicy#expert_evaluator_id}
  */
  readonly expertEvaluatorId?: string;
}

export function recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignCalibrationsToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignCalibrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    calibrator_id: cdktf.stringToTerraform(struct!.calibratorId),
    evaluation_form_id: cdktf.stringToTerraform(struct!.evaluationFormId),
    evaluator_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.evaluatorIds),
    expert_evaluator_id: cdktf.stringToTerraform(struct!.expertEvaluatorId),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignCalibrationsToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignCalibrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    calibrator_id: {
      value: cdktf.stringToHclTerraform(struct!.calibratorId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evaluation_form_id: {
      value: cdktf.stringToHclTerraform(struct!.evaluationFormId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evaluator_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.evaluatorIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    expert_evaluator_id: {
      value: cdktf.stringToHclTerraform(struct!.expertEvaluatorId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignCalibrationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignCalibrations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._calibratorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.calibratorId = this._calibratorId;
    }
    if (this._evaluationFormId !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationFormId = this._evaluationFormId;
    }
    if (this._evaluatorIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluatorIds = this._evaluatorIds;
    }
    if (this._expertEvaluatorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.expertEvaluatorId = this._expertEvaluatorId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignCalibrations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._calibratorId = undefined;
      this._evaluationFormId = undefined;
      this._evaluatorIds = undefined;
      this._expertEvaluatorId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._calibratorId = value.calibratorId;
      this._evaluationFormId = value.evaluationFormId;
      this._evaluatorIds = value.evaluatorIds;
      this._expertEvaluatorId = value.expertEvaluatorId;
    }
  }

  // calibrator_id - computed: false, optional: true, required: false
  private _calibratorId?: string; 
  public get calibratorId() {
    return this.getStringAttribute('calibrator_id');
  }
  public set calibratorId(value: string) {
    this._calibratorId = value;
  }
  public resetCalibratorId() {
    this._calibratorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calibratorIdInput() {
    return this._calibratorId;
  }

  // evaluation_form_id - computed: false, optional: true, required: false
  private _evaluationFormId?: string; 
  public get evaluationFormId() {
    return this.getStringAttribute('evaluation_form_id');
  }
  public set evaluationFormId(value: string) {
    this._evaluationFormId = value;
  }
  public resetEvaluationFormId() {
    this._evaluationFormId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationFormIdInput() {
    return this._evaluationFormId;
  }

  // evaluator_ids - computed: false, optional: true, required: false
  private _evaluatorIds?: string[]; 
  public get evaluatorIds() {
    return this.getListAttribute('evaluator_ids');
  }
  public set evaluatorIds(value: string[]) {
    this._evaluatorIds = value;
  }
  public resetEvaluatorIds() {
    this._evaluatorIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluatorIdsInput() {
    return this._evaluatorIds;
  }

  // expert_evaluator_id - computed: false, optional: true, required: false
  private _expertEvaluatorId?: string; 
  public get expertEvaluatorId() {
    return this.getStringAttribute('expert_evaluator_id');
  }
  public set expertEvaluatorId(value: string) {
    this._expertEvaluatorId = value;
  }
  public resetExpertEvaluatorId() {
    this._expertEvaluatorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expertEvaluatorIdInput() {
    return this._expertEvaluatorId;
  }
}

export class RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignCalibrationsList extends cdktf.ComplexList {
  public internalValue? : RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignCalibrations[] | cdktf.IResolvable

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
  public get(index: number): RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignCalibrationsOutputReference {
    return new RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignCalibrationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignEvaluations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#evaluation_form_id RecordingMediaRetentionPolicy#evaluation_form_id}
  */
  readonly evaluationFormId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#user_id RecordingMediaRetentionPolicy#user_id}
  */
  readonly userId?: string;
}

export function recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignEvaluationsToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignEvaluations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluation_form_id: cdktf.stringToTerraform(struct!.evaluationFormId),
    user_id: cdktf.stringToTerraform(struct!.userId),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignEvaluationsToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignEvaluations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    evaluation_form_id: {
      value: cdktf.stringToHclTerraform(struct!.evaluationFormId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_id: {
      value: cdktf.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignEvaluationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignEvaluations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluationFormId !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationFormId = this._evaluationFormId;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignEvaluations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evaluationFormId = undefined;
      this._userId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evaluationFormId = value.evaluationFormId;
      this._userId = value.userId;
    }
  }

  // evaluation_form_id - computed: false, optional: true, required: false
  private _evaluationFormId?: string; 
  public get evaluationFormId() {
    return this.getStringAttribute('evaluation_form_id');
  }
  public set evaluationFormId(value: string) {
    this._evaluationFormId = value;
  }
  public resetEvaluationFormId() {
    this._evaluationFormId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationFormIdInput() {
    return this._evaluationFormId;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }
}

export class RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignEvaluationsList extends cdktf.ComplexList {
  public internalValue? : RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignEvaluations[] | cdktf.IResolvable

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
  public get(index: number): RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignEvaluationsOutputReference {
    return new RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignEvaluationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredAssignmentByAgentTimeInterval {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#days RecordingMediaRetentionPolicy#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#hours RecordingMediaRetentionPolicy#hours}
  */
  readonly hours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#months RecordingMediaRetentionPolicy#months}
  */
  readonly months?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#weeks RecordingMediaRetentionPolicy#weeks}
  */
  readonly weeks?: number;
}

export function recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredAssignmentByAgentTimeIntervalToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredAssignmentByAgentTimeIntervalOutputReference | RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredAssignmentByAgentTimeInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    hours: cdktf.numberToTerraform(struct!.hours),
    months: cdktf.numberToTerraform(struct!.months),
    weeks: cdktf.numberToTerraform(struct!.weeks),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredAssignmentByAgentTimeIntervalToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredAssignmentByAgentTimeIntervalOutputReference | RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredAssignmentByAgentTimeInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    months: {
      value: cdktf.numberToHclTerraform(struct!.months),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weeks: {
      value: cdktf.numberToHclTerraform(struct!.weeks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredAssignmentByAgentTimeIntervalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredAssignmentByAgentTimeInterval | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._months !== undefined) {
      hasAnyValues = true;
      internalValueResult.months = this._months;
    }
    if (this._weeks !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeks = this._weeks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredAssignmentByAgentTimeInterval | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
      this._hours = undefined;
      this._months = undefined;
      this._weeks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
      this._hours = value.hours;
      this._months = value.months;
      this._weeks = value.weeks;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // months - computed: false, optional: true, required: false
  private _months?: number; 
  public get months() {
    return this.getNumberAttribute('months');
  }
  public set months(value: number) {
    this._months = value;
  }
  public resetMonths() {
    this._months = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthsInput() {
    return this._months;
  }

  // weeks - computed: false, optional: true, required: false
  private _weeks?: number; 
  public get weeks() {
    return this.getNumberAttribute('weeks');
  }
  public set weeks(value: number) {
    this._weeks = value;
  }
  public resetWeeks() {
    this._weeks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeksInput() {
    return this._weeks;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredAssignmentByAgent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#evaluation_form_id RecordingMediaRetentionPolicy#evaluation_form_id}
  */
  readonly evaluationFormId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#evaluator_ids RecordingMediaRetentionPolicy#evaluator_ids}
  */
  readonly evaluatorIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#max_number_evaluations RecordingMediaRetentionPolicy#max_number_evaluations}
  */
  readonly maxNumberEvaluations?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#time_zone RecordingMediaRetentionPolicy#time_zone}
  */
  readonly timeZone?: string;
  /**
  * time_interval block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#time_interval RecordingMediaRetentionPolicy#time_interval}
  */
  readonly timeInterval?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredAssignmentByAgentTimeInterval;
}

export function recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredAssignmentByAgentToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredAssignmentByAgent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluation_form_id: cdktf.stringToTerraform(struct!.evaluationFormId),
    evaluator_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.evaluatorIds),
    max_number_evaluations: cdktf.numberToTerraform(struct!.maxNumberEvaluations),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    time_interval: recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredAssignmentByAgentTimeIntervalToTerraform(struct!.timeInterval),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredAssignmentByAgentToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredAssignmentByAgent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    evaluation_form_id: {
      value: cdktf.stringToHclTerraform(struct!.evaluationFormId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evaluator_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.evaluatorIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_number_evaluations: {
      value: cdktf.numberToHclTerraform(struct!.maxNumberEvaluations),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_interval: {
      value: recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredAssignmentByAgentTimeIntervalToHclTerraform(struct!.timeInterval),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredAssignmentByAgentTimeIntervalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredAssignmentByAgentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredAssignmentByAgent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluationFormId !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationFormId = this._evaluationFormId;
    }
    if (this._evaluatorIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluatorIds = this._evaluatorIds;
    }
    if (this._maxNumberEvaluations !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNumberEvaluations = this._maxNumberEvaluations;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    if (this._timeInterval?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeInterval = this._timeInterval?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredAssignmentByAgent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evaluationFormId = undefined;
      this._evaluatorIds = undefined;
      this._maxNumberEvaluations = undefined;
      this._timeZone = undefined;
      this._timeInterval.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evaluationFormId = value.evaluationFormId;
      this._evaluatorIds = value.evaluatorIds;
      this._maxNumberEvaluations = value.maxNumberEvaluations;
      this._timeZone = value.timeZone;
      this._timeInterval.internalValue = value.timeInterval;
    }
  }

  // evaluation_form_id - computed: false, optional: true, required: false
  private _evaluationFormId?: string; 
  public get evaluationFormId() {
    return this.getStringAttribute('evaluation_form_id');
  }
  public set evaluationFormId(value: string) {
    this._evaluationFormId = value;
  }
  public resetEvaluationFormId() {
    this._evaluationFormId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationFormIdInput() {
    return this._evaluationFormId;
  }

  // evaluator_ids - computed: false, optional: true, required: false
  private _evaluatorIds?: string[]; 
  public get evaluatorIds() {
    return this.getListAttribute('evaluator_ids');
  }
  public set evaluatorIds(value: string[]) {
    this._evaluatorIds = value;
  }
  public resetEvaluatorIds() {
    this._evaluatorIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluatorIdsInput() {
    return this._evaluatorIds;
  }

  // max_number_evaluations - computed: false, optional: true, required: false
  private _maxNumberEvaluations?: number; 
  public get maxNumberEvaluations() {
    return this.getNumberAttribute('max_number_evaluations');
  }
  public set maxNumberEvaluations(value: number) {
    this._maxNumberEvaluations = value;
  }
  public resetMaxNumberEvaluations() {
    this._maxNumberEvaluations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberEvaluationsInput() {
    return this._maxNumberEvaluations;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // time_interval - computed: false, optional: true, required: false
  private _timeInterval = new RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredAssignmentByAgentTimeIntervalOutputReference(this, "time_interval");
  public get timeInterval() {
    return this._timeInterval;
  }
  public putTimeInterval(value: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredAssignmentByAgentTimeInterval) {
    this._timeInterval.internalValue = value;
  }
  public resetTimeInterval() {
    this._timeInterval.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeIntervalInput() {
    return this._timeInterval.internalValue;
  }
}

export class RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredAssignmentByAgentList extends cdktf.ComplexList {
  public internalValue? : RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredAssignmentByAgent[] | cdktf.IResolvable

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
  public get(index: number): RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredAssignmentByAgentOutputReference {
    return new RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredAssignmentByAgentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredEvaluationsTimeInterval {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#days RecordingMediaRetentionPolicy#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#hours RecordingMediaRetentionPolicy#hours}
  */
  readonly hours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#months RecordingMediaRetentionPolicy#months}
  */
  readonly months?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#weeks RecordingMediaRetentionPolicy#weeks}
  */
  readonly weeks?: number;
}

export function recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredEvaluationsTimeIntervalToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredEvaluationsTimeIntervalOutputReference | RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredEvaluationsTimeInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    hours: cdktf.numberToTerraform(struct!.hours),
    months: cdktf.numberToTerraform(struct!.months),
    weeks: cdktf.numberToTerraform(struct!.weeks),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredEvaluationsTimeIntervalToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredEvaluationsTimeIntervalOutputReference | RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredEvaluationsTimeInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    months: {
      value: cdktf.numberToHclTerraform(struct!.months),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weeks: {
      value: cdktf.numberToHclTerraform(struct!.weeks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredEvaluationsTimeIntervalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredEvaluationsTimeInterval | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._months !== undefined) {
      hasAnyValues = true;
      internalValueResult.months = this._months;
    }
    if (this._weeks !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeks = this._weeks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredEvaluationsTimeInterval | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
      this._hours = undefined;
      this._months = undefined;
      this._weeks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
      this._hours = value.hours;
      this._months = value.months;
      this._weeks = value.weeks;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // months - computed: false, optional: true, required: false
  private _months?: number; 
  public get months() {
    return this.getNumberAttribute('months');
  }
  public set months(value: number) {
    this._months = value;
  }
  public resetMonths() {
    this._months = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthsInput() {
    return this._months;
  }

  // weeks - computed: false, optional: true, required: false
  private _weeks?: number; 
  public get weeks() {
    return this.getNumberAttribute('weeks');
  }
  public set weeks(value: number) {
    this._weeks = value;
  }
  public resetWeeks() {
    this._weeks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeksInput() {
    return this._weeks;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredEvaluations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#assign_to_active_user RecordingMediaRetentionPolicy#assign_to_active_user}
  */
  readonly assignToActiveUser?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#evaluation_form_id RecordingMediaRetentionPolicy#evaluation_form_id}
  */
  readonly evaluationFormId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#evaluator_ids RecordingMediaRetentionPolicy#evaluator_ids}
  */
  readonly evaluatorIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#max_number_evaluations RecordingMediaRetentionPolicy#max_number_evaluations}
  */
  readonly maxNumberEvaluations?: number;
  /**
  * time_interval block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#time_interval RecordingMediaRetentionPolicy#time_interval}
  */
  readonly timeInterval?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredEvaluationsTimeInterval;
}

export function recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredEvaluationsToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredEvaluations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_to_active_user: cdktf.booleanToTerraform(struct!.assignToActiveUser),
    evaluation_form_id: cdktf.stringToTerraform(struct!.evaluationFormId),
    evaluator_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.evaluatorIds),
    max_number_evaluations: cdktf.numberToTerraform(struct!.maxNumberEvaluations),
    time_interval: recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredEvaluationsTimeIntervalToTerraform(struct!.timeInterval),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredEvaluationsToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredEvaluations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assign_to_active_user: {
      value: cdktf.booleanToHclTerraform(struct!.assignToActiveUser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    evaluation_form_id: {
      value: cdktf.stringToHclTerraform(struct!.evaluationFormId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evaluator_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.evaluatorIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_number_evaluations: {
      value: cdktf.numberToHclTerraform(struct!.maxNumberEvaluations),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_interval: {
      value: recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredEvaluationsTimeIntervalToHclTerraform(struct!.timeInterval),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredEvaluationsTimeIntervalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredEvaluationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredEvaluations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignToActiveUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignToActiveUser = this._assignToActiveUser;
    }
    if (this._evaluationFormId !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationFormId = this._evaluationFormId;
    }
    if (this._evaluatorIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluatorIds = this._evaluatorIds;
    }
    if (this._maxNumberEvaluations !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNumberEvaluations = this._maxNumberEvaluations;
    }
    if (this._timeInterval?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeInterval = this._timeInterval?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredEvaluations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignToActiveUser = undefined;
      this._evaluationFormId = undefined;
      this._evaluatorIds = undefined;
      this._maxNumberEvaluations = undefined;
      this._timeInterval.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assignToActiveUser = value.assignToActiveUser;
      this._evaluationFormId = value.evaluationFormId;
      this._evaluatorIds = value.evaluatorIds;
      this._maxNumberEvaluations = value.maxNumberEvaluations;
      this._timeInterval.internalValue = value.timeInterval;
    }
  }

  // assign_to_active_user - computed: false, optional: true, required: false
  private _assignToActiveUser?: boolean | cdktf.IResolvable; 
  public get assignToActiveUser() {
    return this.getBooleanAttribute('assign_to_active_user');
  }
  public set assignToActiveUser(value: boolean | cdktf.IResolvable) {
    this._assignToActiveUser = value;
  }
  public resetAssignToActiveUser() {
    this._assignToActiveUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignToActiveUserInput() {
    return this._assignToActiveUser;
  }

  // evaluation_form_id - computed: false, optional: true, required: false
  private _evaluationFormId?: string; 
  public get evaluationFormId() {
    return this.getStringAttribute('evaluation_form_id');
  }
  public set evaluationFormId(value: string) {
    this._evaluationFormId = value;
  }
  public resetEvaluationFormId() {
    this._evaluationFormId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationFormIdInput() {
    return this._evaluationFormId;
  }

  // evaluator_ids - computed: false, optional: true, required: false
  private _evaluatorIds?: string[]; 
  public get evaluatorIds() {
    return this.getListAttribute('evaluator_ids');
  }
  public set evaluatorIds(value: string[]) {
    this._evaluatorIds = value;
  }
  public resetEvaluatorIds() {
    this._evaluatorIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluatorIdsInput() {
    return this._evaluatorIds;
  }

  // max_number_evaluations - computed: false, optional: true, required: false
  private _maxNumberEvaluations?: number; 
  public get maxNumberEvaluations() {
    return this.getNumberAttribute('max_number_evaluations');
  }
  public set maxNumberEvaluations(value: number) {
    this._maxNumberEvaluations = value;
  }
  public resetMaxNumberEvaluations() {
    this._maxNumberEvaluations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberEvaluationsInput() {
    return this._maxNumberEvaluations;
  }

  // time_interval - computed: false, optional: true, required: false
  private _timeInterval = new RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredEvaluationsTimeIntervalOutputReference(this, "time_interval");
  public get timeInterval() {
    return this._timeInterval;
  }
  public putTimeInterval(value: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredEvaluationsTimeInterval) {
    this._timeInterval.internalValue = value;
  }
  public resetTimeInterval() {
    this._timeInterval.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeIntervalInput() {
    return this._timeInterval.internalValue;
  }
}

export class RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredEvaluationsList extends cdktf.ComplexList {
  public internalValue? : RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredEvaluations[] | cdktf.IResolvable

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
  public get(index: number): RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredEvaluationsOutputReference {
    return new RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredEvaluationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignSurveys {
  /**
  * The UUID reference to the flow associated with this survey.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#flow_id RecordingMediaRetentionPolicy#flow_id}
  */
  readonly flowId?: string;
  /**
  * An ISO 8601 repeated interval consisting of the number of repetitions, the start datetime, and the interval (e.g. R2/2018-03-01T13:00:00Z/P1M10DT2H30M). Total duration must not exceed 90 days. Defaults to `R1/P0M`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#invite_time_interval RecordingMediaRetentionPolicy#invite_time_interval}
  */
  readonly inviteTimeInterval?: string;
  /**
  * Validated email domain, required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#sending_domain RecordingMediaRetentionPolicy#sending_domain}
  */
  readonly sendingDomain: string;
  /**
  * User together with sendingDomain used to send email, null to use no-reply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#sending_user RecordingMediaRetentionPolicy#sending_user}
  */
  readonly sendingUser?: string;
  /**
  * The survey form used for this survey.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#survey_form_name RecordingMediaRetentionPolicy#survey_form_name}
  */
  readonly surveyFormName?: string;
}

export function recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignSurveysToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignSurveys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flow_id: cdktf.stringToTerraform(struct!.flowId),
    invite_time_interval: cdktf.stringToTerraform(struct!.inviteTimeInterval),
    sending_domain: cdktf.stringToTerraform(struct!.sendingDomain),
    sending_user: cdktf.stringToTerraform(struct!.sendingUser),
    survey_form_name: cdktf.stringToTerraform(struct!.surveyFormName),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignSurveysToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignSurveys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flow_id: {
      value: cdktf.stringToHclTerraform(struct!.flowId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invite_time_interval: {
      value: cdktf.stringToHclTerraform(struct!.inviteTimeInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sending_domain: {
      value: cdktf.stringToHclTerraform(struct!.sendingDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sending_user: {
      value: cdktf.stringToHclTerraform(struct!.sendingUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    survey_form_name: {
      value: cdktf.stringToHclTerraform(struct!.surveyFormName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignSurveysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignSurveys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flowId !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowId = this._flowId;
    }
    if (this._inviteTimeInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.inviteTimeInterval = this._inviteTimeInterval;
    }
    if (this._sendingDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendingDomain = this._sendingDomain;
    }
    if (this._sendingUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendingUser = this._sendingUser;
    }
    if (this._surveyFormName !== undefined) {
      hasAnyValues = true;
      internalValueResult.surveyFormName = this._surveyFormName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignSurveys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flowId = undefined;
      this._inviteTimeInterval = undefined;
      this._sendingDomain = undefined;
      this._sendingUser = undefined;
      this._surveyFormName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flowId = value.flowId;
      this._inviteTimeInterval = value.inviteTimeInterval;
      this._sendingDomain = value.sendingDomain;
      this._sendingUser = value.sendingUser;
      this._surveyFormName = value.surveyFormName;
    }
  }

  // flow_id - computed: false, optional: true, required: false
  private _flowId?: string; 
  public get flowId() {
    return this.getStringAttribute('flow_id');
  }
  public set flowId(value: string) {
    this._flowId = value;
  }
  public resetFlowId() {
    this._flowId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowIdInput() {
    return this._flowId;
  }

  // invite_time_interval - computed: false, optional: true, required: false
  private _inviteTimeInterval?: string; 
  public get inviteTimeInterval() {
    return this.getStringAttribute('invite_time_interval');
  }
  public set inviteTimeInterval(value: string) {
    this._inviteTimeInterval = value;
  }
  public resetInviteTimeInterval() {
    this._inviteTimeInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inviteTimeIntervalInput() {
    return this._inviteTimeInterval;
  }

  // sending_domain - computed: false, optional: false, required: true
  private _sendingDomain?: string; 
  public get sendingDomain() {
    return this.getStringAttribute('sending_domain');
  }
  public set sendingDomain(value: string) {
    this._sendingDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sendingDomainInput() {
    return this._sendingDomain;
  }

  // sending_user - computed: false, optional: true, required: false
  private _sendingUser?: string; 
  public get sendingUser() {
    return this.getStringAttribute('sending_user');
  }
  public set sendingUser(value: string) {
    this._sendingUser = value;
  }
  public resetSendingUser() {
    this._sendingUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendingUserInput() {
    return this._sendingUser;
  }

  // survey_form_name - computed: false, optional: true, required: false
  private _surveyFormName?: string; 
  public get surveyFormName() {
    return this.getStringAttribute('survey_form_name');
  }
  public set surveyFormName(value: string) {
    this._surveyFormName = value;
  }
  public resetSurveyFormName() {
    this._surveyFormName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get surveyFormNameInput() {
    return this._surveyFormName;
  }
}

export class RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignSurveysList extends cdktf.ComplexList {
  public internalValue? : RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignSurveys[] | cdktf.IResolvable

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
  public get(index: number): RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignSurveysOutputReference {
    return new RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignSurveysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecordingArchiveRetention {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#days RecordingMediaRetentionPolicy#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#storage_medium RecordingMediaRetentionPolicy#storage_medium}
  */
  readonly storageMedium?: string;
}

export function recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecordingArchiveRetentionToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecordingArchiveRetentionOutputReference | RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecordingArchiveRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    storage_medium: cdktf.stringToTerraform(struct!.storageMedium),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecordingArchiveRetentionToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecordingArchiveRetentionOutputReference | RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecordingArchiveRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_medium: {
      value: cdktf.stringToHclTerraform(struct!.storageMedium),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecordingArchiveRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecordingArchiveRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._storageMedium !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageMedium = this._storageMedium;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecordingArchiveRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
      this._storageMedium = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
      this._storageMedium = value.storageMedium;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // storage_medium - computed: false, optional: true, required: false
  private _storageMedium?: string; 
  public get storageMedium() {
    return this.getStringAttribute('storage_medium');
  }
  public set storageMedium(value: string) {
    this._storageMedium = value;
  }
  public resetStorageMedium() {
    this._storageMedium = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageMediumInput() {
    return this._storageMedium;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecordingDeleteRetention {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#days RecordingMediaRetentionPolicy#days}
  */
  readonly days?: number;
}

export function recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecordingDeleteRetentionToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecordingDeleteRetentionOutputReference | RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecordingDeleteRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecordingDeleteRetentionToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecordingDeleteRetentionOutputReference | RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecordingDeleteRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecordingDeleteRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecordingDeleteRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecordingDeleteRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecording {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#record_acw RecordingMediaRetentionPolicy#record_acw}
  */
  readonly recordAcw?: boolean | cdktf.IResolvable;
  /**
  * archive_retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#archive_retention RecordingMediaRetentionPolicy#archive_retention}
  */
  readonly archiveRetention?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecordingArchiveRetention;
  /**
  * delete_retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#delete_retention RecordingMediaRetentionPolicy#delete_retention}
  */
  readonly deleteRetention?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecordingDeleteRetention;
}

export function recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecordingToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecordingOutputReference | RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecording): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    record_acw: cdktf.booleanToTerraform(struct!.recordAcw),
    archive_retention: recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecordingArchiveRetentionToTerraform(struct!.archiveRetention),
    delete_retention: recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecordingDeleteRetentionToTerraform(struct!.deleteRetention),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecordingToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecordingOutputReference | RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecording): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    record_acw: {
      value: cdktf.booleanToHclTerraform(struct!.recordAcw),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    archive_retention: {
      value: recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecordingArchiveRetentionToHclTerraform(struct!.archiveRetention),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecordingArchiveRetentionList",
    },
    delete_retention: {
      value: recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecordingDeleteRetentionToHclTerraform(struct!.deleteRetention),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecordingDeleteRetentionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecordingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecording | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordAcw !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordAcw = this._recordAcw;
    }
    if (this._archiveRetention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveRetention = this._archiveRetention?.internalValue;
    }
    if (this._deleteRetention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteRetention = this._deleteRetention?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecording | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recordAcw = undefined;
      this._archiveRetention.internalValue = undefined;
      this._deleteRetention.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recordAcw = value.recordAcw;
      this._archiveRetention.internalValue = value.archiveRetention;
      this._deleteRetention.internalValue = value.deleteRetention;
    }
  }

  // record_acw - computed: false, optional: true, required: false
  private _recordAcw?: boolean | cdktf.IResolvable; 
  public get recordAcw() {
    return this.getBooleanAttribute('record_acw');
  }
  public set recordAcw(value: boolean | cdktf.IResolvable) {
    this._recordAcw = value;
  }
  public resetRecordAcw() {
    this._recordAcw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordAcwInput() {
    return this._recordAcw;
  }

  // archive_retention - computed: false, optional: true, required: false
  private _archiveRetention = new RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecordingArchiveRetentionOutputReference(this, "archive_retention");
  public get archiveRetention() {
    return this._archiveRetention;
  }
  public putArchiveRetention(value: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecordingArchiveRetention) {
    this._archiveRetention.internalValue = value;
  }
  public resetArchiveRetention() {
    this._archiveRetention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveRetentionInput() {
    return this._archiveRetention.internalValue;
  }

  // delete_retention - computed: false, optional: true, required: false
  private _deleteRetention = new RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecordingDeleteRetentionOutputReference(this, "delete_retention");
  public get deleteRetention() {
    return this._deleteRetention;
  }
  public putDeleteRetention(value: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecordingDeleteRetention) {
    this._deleteRetention.internalValue = value;
  }
  public resetDeleteRetention() {
    this._deleteRetention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteRetentionInput() {
    return this._deleteRetention.internalValue;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsIntegrationExport {
  /**
  * The aws-s3-recording-bulk-actions-integration that the policy uses for exports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#integration_id RecordingMediaRetentionPolicy#integration_id}
  */
  readonly integrationId?: string;
  /**
  * True if the policy should export screen recordings in addition to the other conversation media. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#should_export_screen_recordings RecordingMediaRetentionPolicy#should_export_screen_recordings}
  */
  readonly shouldExportScreenRecordings?: boolean | cdktf.IResolvable;
}

export function recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsIntegrationExportToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsIntegrationExportOutputReference | RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsIntegrationExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    integration_id: cdktf.stringToTerraform(struct!.integrationId),
    should_export_screen_recordings: cdktf.booleanToTerraform(struct!.shouldExportScreenRecordings),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsIntegrationExportToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsIntegrationExportOutputReference | RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsIntegrationExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    integration_id: {
      value: cdktf.stringToHclTerraform(struct!.integrationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    should_export_screen_recordings: {
      value: cdktf.booleanToHclTerraform(struct!.shouldExportScreenRecordings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsIntegrationExportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsIntegrationExport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._integrationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationId = this._integrationId;
    }
    if (this._shouldExportScreenRecordings !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldExportScreenRecordings = this._shouldExportScreenRecordings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsIntegrationExport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._integrationId = undefined;
      this._shouldExportScreenRecordings = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._integrationId = value.integrationId;
      this._shouldExportScreenRecordings = value.shouldExportScreenRecordings;
    }
  }

  // integration_id - computed: false, optional: true, required: false
  private _integrationId?: string; 
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }
  public set integrationId(value: string) {
    this._integrationId = value;
  }
  public resetIntegrationId() {
    this._integrationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdInput() {
    return this._integrationId;
  }

  // should_export_screen_recordings - computed: false, optional: true, required: false
  private _shouldExportScreenRecordings?: boolean | cdktf.IResolvable; 
  public get shouldExportScreenRecordings() {
    return this.getBooleanAttribute('should_export_screen_recordings');
  }
  public set shouldExportScreenRecordings(value: boolean | cdktf.IResolvable) {
    this._shouldExportScreenRecordings = value;
  }
  public resetShouldExportScreenRecordings() {
    this._shouldExportScreenRecordings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldExportScreenRecordingsInput() {
    return this._shouldExportScreenRecordings;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsMediaTranscriptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#display_name RecordingMediaRetentionPolicy#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#integration_id RecordingMediaRetentionPolicy#integration_id}
  */
  readonly integrationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#transcription_provider RecordingMediaRetentionPolicy#transcription_provider}
  */
  readonly transcriptionProvider?: string;
}

export function recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsMediaTranscriptionsToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsMediaTranscriptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    integration_id: cdktf.stringToTerraform(struct!.integrationId),
    transcription_provider: cdktf.stringToTerraform(struct!.transcriptionProvider),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsMediaTranscriptionsToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsMediaTranscriptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    integration_id: {
      value: cdktf.stringToHclTerraform(struct!.integrationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transcription_provider: {
      value: cdktf.stringToHclTerraform(struct!.transcriptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsMediaTranscriptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsMediaTranscriptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._integrationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationId = this._integrationId;
    }
    if (this._transcriptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.transcriptionProvider = this._transcriptionProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsMediaTranscriptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._integrationId = undefined;
      this._transcriptionProvider = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._integrationId = value.integrationId;
      this._transcriptionProvider = value.transcriptionProvider;
    }
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

  // integration_id - computed: false, optional: true, required: false
  private _integrationId?: string; 
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }
  public set integrationId(value: string) {
    this._integrationId = value;
  }
  public resetIntegrationId() {
    this._integrationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdInput() {
    return this._integrationId;
  }

  // transcription_provider - computed: false, optional: true, required: false
  private _transcriptionProvider?: string; 
  public get transcriptionProvider() {
    return this.getStringAttribute('transcription_provider');
  }
  public set transcriptionProvider(value: string) {
    this._transcriptionProvider = value;
  }
  public resetTranscriptionProvider() {
    this._transcriptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transcriptionProviderInput() {
    return this._transcriptionProvider;
  }
}

export class RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsMediaTranscriptionsList extends cdktf.ComplexList {
  public internalValue? : RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsMediaTranscriptions[] | cdktf.IResolvable

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
  public get(index: number): RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsMediaTranscriptionsOutputReference {
    return new RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsMediaTranscriptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDurationArchiveRetention {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#days RecordingMediaRetentionPolicy#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#storage_medium RecordingMediaRetentionPolicy#storage_medium}
  */
  readonly storageMedium?: string;
}

export function recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDurationArchiveRetentionToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDurationArchiveRetentionOutputReference | RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDurationArchiveRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    storage_medium: cdktf.stringToTerraform(struct!.storageMedium),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDurationArchiveRetentionToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDurationArchiveRetentionOutputReference | RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDurationArchiveRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_medium: {
      value: cdktf.stringToHclTerraform(struct!.storageMedium),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDurationArchiveRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDurationArchiveRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._storageMedium !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageMedium = this._storageMedium;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDurationArchiveRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
      this._storageMedium = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
      this._storageMedium = value.storageMedium;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // storage_medium - computed: false, optional: true, required: false
  private _storageMedium?: string; 
  public get storageMedium() {
    return this.getStringAttribute('storage_medium');
  }
  public set storageMedium(value: string) {
    this._storageMedium = value;
  }
  public resetStorageMedium() {
    this._storageMedium = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageMediumInput() {
    return this._storageMedium;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDurationDeleteRetention {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#days RecordingMediaRetentionPolicy#days}
  */
  readonly days?: number;
}

export function recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDurationDeleteRetentionToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDurationDeleteRetentionOutputReference | RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDurationDeleteRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDurationDeleteRetentionToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDurationDeleteRetentionOutputReference | RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDurationDeleteRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDurationDeleteRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDurationDeleteRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDurationDeleteRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDuration {
  /**
  * archive_retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#archive_retention RecordingMediaRetentionPolicy#archive_retention}
  */
  readonly archiveRetention?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDurationArchiveRetention;
  /**
  * delete_retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#delete_retention RecordingMediaRetentionPolicy#delete_retention}
  */
  readonly deleteRetention?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDurationDeleteRetention;
}

export function recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDurationToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDurationOutputReference | RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_retention: recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDurationArchiveRetentionToTerraform(struct!.archiveRetention),
    delete_retention: recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDurationDeleteRetentionToTerraform(struct!.deleteRetention),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDurationToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDurationOutputReference | RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_retention: {
      value: recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDurationArchiveRetentionToHclTerraform(struct!.archiveRetention),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDurationArchiveRetentionList",
    },
    delete_retention: {
      value: recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDurationDeleteRetentionToHclTerraform(struct!.deleteRetention),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDurationDeleteRetentionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveRetention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveRetention = this._archiveRetention?.internalValue;
    }
    if (this._deleteRetention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteRetention = this._deleteRetention?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archiveRetention.internalValue = undefined;
      this._deleteRetention.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archiveRetention.internalValue = value.archiveRetention;
      this._deleteRetention.internalValue = value.deleteRetention;
    }
  }

  // archive_retention - computed: false, optional: true, required: false
  private _archiveRetention = new RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDurationArchiveRetentionOutputReference(this, "archive_retention");
  public get archiveRetention() {
    return this._archiveRetention;
  }
  public putArchiveRetention(value: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDurationArchiveRetention) {
    this._archiveRetention.internalValue = value;
  }
  public resetArchiveRetention() {
    this._archiveRetention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveRetentionInput() {
    return this._archiveRetention.internalValue;
  }

  // delete_retention - computed: false, optional: true, required: false
  private _deleteRetention = new RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDurationDeleteRetentionOutputReference(this, "delete_retention");
  public get deleteRetention() {
    return this._deleteRetention;
  }
  public putDeleteRetention(value: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDurationDeleteRetention) {
    this._deleteRetention.internalValue = value;
  }
  public resetDeleteRetention() {
    this._deleteRetention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteRetentionInput() {
    return this._deleteRetention.internalValue;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActions {
  /**
  * true to delete the recording associated with the conversation regardless of the values of retainRecording or deleteRecording.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#always_delete RecordingMediaRetentionPolicy#always_delete}
  */
  readonly alwaysDelete?: boolean | cdktf.IResolvable;
  /**
  * true to delete the recording associated with the conversation. If retainRecording = true, this will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#delete_recording RecordingMediaRetentionPolicy#delete_recording}
  */
  readonly deleteRecording?: boolean | cdktf.IResolvable;
  /**
  * true to retain the recording associated with the conversation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#retain_recording RecordingMediaRetentionPolicy#retain_recording}
  */
  readonly retainRecording?: boolean | cdktf.IResolvable;
  /**
  * assign_calibrations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#assign_calibrations RecordingMediaRetentionPolicy#assign_calibrations}
  */
  readonly assignCalibrations?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignCalibrations[] | cdktf.IResolvable;
  /**
  * assign_evaluations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#assign_evaluations RecordingMediaRetentionPolicy#assign_evaluations}
  */
  readonly assignEvaluations?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignEvaluations[] | cdktf.IResolvable;
  /**
  * assign_metered_assignment_by_agent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#assign_metered_assignment_by_agent RecordingMediaRetentionPolicy#assign_metered_assignment_by_agent}
  */
  readonly assignMeteredAssignmentByAgent?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredAssignmentByAgent[] | cdktf.IResolvable;
  /**
  * assign_metered_evaluations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#assign_metered_evaluations RecordingMediaRetentionPolicy#assign_metered_evaluations}
  */
  readonly assignMeteredEvaluations?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredEvaluations[] | cdktf.IResolvable;
  /**
  * assign_surveys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#assign_surveys RecordingMediaRetentionPolicy#assign_surveys}
  */
  readonly assignSurveys?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignSurveys[] | cdktf.IResolvable;
  /**
  * initiate_screen_recording block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#initiate_screen_recording RecordingMediaRetentionPolicy#initiate_screen_recording}
  */
  readonly initiateScreenRecording?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecording;
  /**
  * integration_export block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#integration_export RecordingMediaRetentionPolicy#integration_export}
  */
  readonly integrationExport?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsIntegrationExport;
  /**
  * media_transcriptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#media_transcriptions RecordingMediaRetentionPolicy#media_transcriptions}
  */
  readonly mediaTranscriptions?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsMediaTranscriptions[] | cdktf.IResolvable;
  /**
  * retention_duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#retention_duration RecordingMediaRetentionPolicy#retention_duration}
  */
  readonly retentionDuration?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDuration;
}

export function recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsOutputReference | RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always_delete: cdktf.booleanToTerraform(struct!.alwaysDelete),
    delete_recording: cdktf.booleanToTerraform(struct!.deleteRecording),
    retain_recording: cdktf.booleanToTerraform(struct!.retainRecording),
    assign_calibrations: cdktf.listMapper(recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignCalibrationsToTerraform, true)(struct!.assignCalibrations),
    assign_evaluations: cdktf.listMapper(recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignEvaluationsToTerraform, true)(struct!.assignEvaluations),
    assign_metered_assignment_by_agent: cdktf.listMapper(recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredAssignmentByAgentToTerraform, true)(struct!.assignMeteredAssignmentByAgent),
    assign_metered_evaluations: cdktf.listMapper(recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredEvaluationsToTerraform, true)(struct!.assignMeteredEvaluations),
    assign_surveys: cdktf.listMapper(recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignSurveysToTerraform, true)(struct!.assignSurveys),
    initiate_screen_recording: recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecordingToTerraform(struct!.initiateScreenRecording),
    integration_export: recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsIntegrationExportToTerraform(struct!.integrationExport),
    media_transcriptions: cdktf.listMapper(recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsMediaTranscriptionsToTerraform, true)(struct!.mediaTranscriptions),
    retention_duration: recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDurationToTerraform(struct!.retentionDuration),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsOutputReference | RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    always_delete: {
      value: cdktf.booleanToHclTerraform(struct!.alwaysDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delete_recording: {
      value: cdktf.booleanToHclTerraform(struct!.deleteRecording),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retain_recording: {
      value: cdktf.booleanToHclTerraform(struct!.retainRecording),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    assign_calibrations: {
      value: cdktf.listMapperHcl(recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignCalibrationsToHclTerraform, true)(struct!.assignCalibrations),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignCalibrationsList",
    },
    assign_evaluations: {
      value: cdktf.listMapperHcl(recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignEvaluationsToHclTerraform, true)(struct!.assignEvaluations),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignEvaluationsList",
    },
    assign_metered_assignment_by_agent: {
      value: cdktf.listMapperHcl(recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredAssignmentByAgentToHclTerraform, true)(struct!.assignMeteredAssignmentByAgent),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredAssignmentByAgentList",
    },
    assign_metered_evaluations: {
      value: cdktf.listMapperHcl(recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredEvaluationsToHclTerraform, true)(struct!.assignMeteredEvaluations),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredEvaluationsList",
    },
    assign_surveys: {
      value: cdktf.listMapperHcl(recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignSurveysToHclTerraform, true)(struct!.assignSurveys),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignSurveysList",
    },
    initiate_screen_recording: {
      value: recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecordingToHclTerraform(struct!.initiateScreenRecording),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecordingList",
    },
    integration_export: {
      value: recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsIntegrationExportToHclTerraform(struct!.integrationExport),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsIntegrationExportList",
    },
    media_transcriptions: {
      value: cdktf.listMapperHcl(recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsMediaTranscriptionsToHclTerraform, true)(struct!.mediaTranscriptions),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsMediaTranscriptionsList",
    },
    retention_duration: {
      value: recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDurationToHclTerraform(struct!.retentionDuration),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alwaysDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysDelete = this._alwaysDelete;
    }
    if (this._deleteRecording !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteRecording = this._deleteRecording;
    }
    if (this._retainRecording !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainRecording = this._retainRecording;
    }
    if (this._assignCalibrations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignCalibrations = this._assignCalibrations?.internalValue;
    }
    if (this._assignEvaluations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignEvaluations = this._assignEvaluations?.internalValue;
    }
    if (this._assignMeteredAssignmentByAgent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignMeteredAssignmentByAgent = this._assignMeteredAssignmentByAgent?.internalValue;
    }
    if (this._assignMeteredEvaluations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignMeteredEvaluations = this._assignMeteredEvaluations?.internalValue;
    }
    if (this._assignSurveys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignSurveys = this._assignSurveys?.internalValue;
    }
    if (this._initiateScreenRecording?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initiateScreenRecording = this._initiateScreenRecording?.internalValue;
    }
    if (this._integrationExport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationExport = this._integrationExport?.internalValue;
    }
    if (this._mediaTranscriptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaTranscriptions = this._mediaTranscriptions?.internalValue;
    }
    if (this._retentionDuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionDuration = this._retentionDuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alwaysDelete = undefined;
      this._deleteRecording = undefined;
      this._retainRecording = undefined;
      this._assignCalibrations.internalValue = undefined;
      this._assignEvaluations.internalValue = undefined;
      this._assignMeteredAssignmentByAgent.internalValue = undefined;
      this._assignMeteredEvaluations.internalValue = undefined;
      this._assignSurveys.internalValue = undefined;
      this._initiateScreenRecording.internalValue = undefined;
      this._integrationExport.internalValue = undefined;
      this._mediaTranscriptions.internalValue = undefined;
      this._retentionDuration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alwaysDelete = value.alwaysDelete;
      this._deleteRecording = value.deleteRecording;
      this._retainRecording = value.retainRecording;
      this._assignCalibrations.internalValue = value.assignCalibrations;
      this._assignEvaluations.internalValue = value.assignEvaluations;
      this._assignMeteredAssignmentByAgent.internalValue = value.assignMeteredAssignmentByAgent;
      this._assignMeteredEvaluations.internalValue = value.assignMeteredEvaluations;
      this._assignSurveys.internalValue = value.assignSurveys;
      this._initiateScreenRecording.internalValue = value.initiateScreenRecording;
      this._integrationExport.internalValue = value.integrationExport;
      this._mediaTranscriptions.internalValue = value.mediaTranscriptions;
      this._retentionDuration.internalValue = value.retentionDuration;
    }
  }

  // always_delete - computed: false, optional: true, required: false
  private _alwaysDelete?: boolean | cdktf.IResolvable; 
  public get alwaysDelete() {
    return this.getBooleanAttribute('always_delete');
  }
  public set alwaysDelete(value: boolean | cdktf.IResolvable) {
    this._alwaysDelete = value;
  }
  public resetAlwaysDelete() {
    this._alwaysDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysDeleteInput() {
    return this._alwaysDelete;
  }

  // delete_recording - computed: false, optional: true, required: false
  private _deleteRecording?: boolean | cdktf.IResolvable; 
  public get deleteRecording() {
    return this.getBooleanAttribute('delete_recording');
  }
  public set deleteRecording(value: boolean | cdktf.IResolvable) {
    this._deleteRecording = value;
  }
  public resetDeleteRecording() {
    this._deleteRecording = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteRecordingInput() {
    return this._deleteRecording;
  }

  // retain_recording - computed: false, optional: true, required: false
  private _retainRecording?: boolean | cdktf.IResolvable; 
  public get retainRecording() {
    return this.getBooleanAttribute('retain_recording');
  }
  public set retainRecording(value: boolean | cdktf.IResolvable) {
    this._retainRecording = value;
  }
  public resetRetainRecording() {
    this._retainRecording = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainRecordingInput() {
    return this._retainRecording;
  }

  // assign_calibrations - computed: false, optional: true, required: false
  private _assignCalibrations = new RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignCalibrationsList(this, "assign_calibrations", false);
  public get assignCalibrations() {
    return this._assignCalibrations;
  }
  public putAssignCalibrations(value: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignCalibrations[] | cdktf.IResolvable) {
    this._assignCalibrations.internalValue = value;
  }
  public resetAssignCalibrations() {
    this._assignCalibrations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignCalibrationsInput() {
    return this._assignCalibrations.internalValue;
  }

  // assign_evaluations - computed: false, optional: true, required: false
  private _assignEvaluations = new RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignEvaluationsList(this, "assign_evaluations", false);
  public get assignEvaluations() {
    return this._assignEvaluations;
  }
  public putAssignEvaluations(value: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignEvaluations[] | cdktf.IResolvable) {
    this._assignEvaluations.internalValue = value;
  }
  public resetAssignEvaluations() {
    this._assignEvaluations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignEvaluationsInput() {
    return this._assignEvaluations.internalValue;
  }

  // assign_metered_assignment_by_agent - computed: false, optional: true, required: false
  private _assignMeteredAssignmentByAgent = new RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredAssignmentByAgentList(this, "assign_metered_assignment_by_agent", false);
  public get assignMeteredAssignmentByAgent() {
    return this._assignMeteredAssignmentByAgent;
  }
  public putAssignMeteredAssignmentByAgent(value: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredAssignmentByAgent[] | cdktf.IResolvable) {
    this._assignMeteredAssignmentByAgent.internalValue = value;
  }
  public resetAssignMeteredAssignmentByAgent() {
    this._assignMeteredAssignmentByAgent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignMeteredAssignmentByAgentInput() {
    return this._assignMeteredAssignmentByAgent.internalValue;
  }

  // assign_metered_evaluations - computed: false, optional: true, required: false
  private _assignMeteredEvaluations = new RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredEvaluationsList(this, "assign_metered_evaluations", false);
  public get assignMeteredEvaluations() {
    return this._assignMeteredEvaluations;
  }
  public putAssignMeteredEvaluations(value: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignMeteredEvaluations[] | cdktf.IResolvable) {
    this._assignMeteredEvaluations.internalValue = value;
  }
  public resetAssignMeteredEvaluations() {
    this._assignMeteredEvaluations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignMeteredEvaluationsInput() {
    return this._assignMeteredEvaluations.internalValue;
  }

  // assign_surveys - computed: false, optional: true, required: false
  private _assignSurveys = new RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignSurveysList(this, "assign_surveys", false);
  public get assignSurveys() {
    return this._assignSurveys;
  }
  public putAssignSurveys(value: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsAssignSurveys[] | cdktf.IResolvable) {
    this._assignSurveys.internalValue = value;
  }
  public resetAssignSurveys() {
    this._assignSurveys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignSurveysInput() {
    return this._assignSurveys.internalValue;
  }

  // initiate_screen_recording - computed: false, optional: true, required: false
  private _initiateScreenRecording = new RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecordingOutputReference(this, "initiate_screen_recording");
  public get initiateScreenRecording() {
    return this._initiateScreenRecording;
  }
  public putInitiateScreenRecording(value: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsInitiateScreenRecording) {
    this._initiateScreenRecording.internalValue = value;
  }
  public resetInitiateScreenRecording() {
    this._initiateScreenRecording.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initiateScreenRecordingInput() {
    return this._initiateScreenRecording.internalValue;
  }

  // integration_export - computed: false, optional: true, required: false
  private _integrationExport = new RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsIntegrationExportOutputReference(this, "integration_export");
  public get integrationExport() {
    return this._integrationExport;
  }
  public putIntegrationExport(value: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsIntegrationExport) {
    this._integrationExport.internalValue = value;
  }
  public resetIntegrationExport() {
    this._integrationExport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationExportInput() {
    return this._integrationExport.internalValue;
  }

  // media_transcriptions - computed: false, optional: true, required: false
  private _mediaTranscriptions = new RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsMediaTranscriptionsList(this, "media_transcriptions", false);
  public get mediaTranscriptions() {
    return this._mediaTranscriptions;
  }
  public putMediaTranscriptions(value: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsMediaTranscriptions[] | cdktf.IResolvable) {
    this._mediaTranscriptions.internalValue = value;
  }
  public resetMediaTranscriptions() {
    this._mediaTranscriptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaTranscriptionsInput() {
    return this._mediaTranscriptions.internalValue;
  }

  // retention_duration - computed: false, optional: true, required: false
  private _retentionDuration = new RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDurationOutputReference(this, "retention_duration");
  public get retentionDuration() {
    return this._retentionDuration;
  }
  public putRetentionDuration(value: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsRetentionDuration) {
    this._retentionDuration.internalValue = value;
  }
  public resetRetentionDuration() {
    this._retentionDuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDurationInput() {
    return this._retentionDuration.internalValue;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditionsTimeAllowedTimeSlots {
  /**
  * Day for this time slot, Monday = 1 ... Sunday = 7
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#day RecordingMediaRetentionPolicy#day}
  */
  readonly day?: number;
  /**
  * start time in xx:xx:xx.xxx format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#start_time RecordingMediaRetentionPolicy#start_time}
  */
  readonly startTime?: string;
  /**
  * stop time in xx:xx:xx.xxx format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#stop_time RecordingMediaRetentionPolicy#stop_time}
  */
  readonly stopTime?: string;
}

export function recordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditionsTimeAllowedTimeSlotsToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditionsTimeAllowedTimeSlots | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.numberToTerraform(struct!.day),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    stop_time: cdktf.stringToTerraform(struct!.stopTime),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditionsTimeAllowedTimeSlotsToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditionsTimeAllowedTimeSlots | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.numberToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stop_time: {
      value: cdktf.stringToHclTerraform(struct!.stopTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditionsTimeAllowedTimeSlotsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditionsTimeAllowedTimeSlots | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._stopTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopTime = this._stopTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditionsTimeAllowedTimeSlots | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._day = undefined;
      this._startTime = undefined;
      this._stopTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._day = value.day;
      this._startTime = value.startTime;
      this._stopTime = value.stopTime;
    }
  }

  // day - computed: false, optional: true, required: false
  private _day?: number; 
  public get day() {
    return this.getNumberAttribute('day');
  }
  public set day(value: number) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // stop_time - computed: false, optional: true, required: false
  private _stopTime?: string; 
  public get stopTime() {
    return this.getStringAttribute('stop_time');
  }
  public set stopTime(value: string) {
    this._stopTime = value;
  }
  public resetStopTime() {
    this._stopTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopTimeInput() {
    return this._stopTime;
  }
}

export class RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditionsTimeAllowedTimeSlotsList extends cdktf.ComplexList {
  public internalValue? : RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditionsTimeAllowedTimeSlots[] | cdktf.IResolvable

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
  public get(index: number): RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditionsTimeAllowedTimeSlotsOutputReference {
    return new RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditionsTimeAllowedTimeSlotsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditionsTimeAllowed {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#empty RecordingMediaRetentionPolicy#empty}
  */
  readonly empty?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#time_zone_id RecordingMediaRetentionPolicy#time_zone_id}
  */
  readonly timeZoneId?: string;
  /**
  * time_slots block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#time_slots RecordingMediaRetentionPolicy#time_slots}
  */
  readonly timeSlots?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditionsTimeAllowedTimeSlots[] | cdktf.IResolvable;
}

export function recordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditionsTimeAllowedToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditionsTimeAllowedOutputReference | RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditionsTimeAllowed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    empty: cdktf.booleanToTerraform(struct!.empty),
    time_zone_id: cdktf.stringToTerraform(struct!.timeZoneId),
    time_slots: cdktf.listMapper(recordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditionsTimeAllowedTimeSlotsToTerraform, true)(struct!.timeSlots),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditionsTimeAllowedToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditionsTimeAllowedOutputReference | RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditionsTimeAllowed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    empty: {
      value: cdktf.booleanToHclTerraform(struct!.empty),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    time_zone_id: {
      value: cdktf.stringToHclTerraform(struct!.timeZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_slots: {
      value: cdktf.listMapperHcl(recordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditionsTimeAllowedTimeSlotsToHclTerraform, true)(struct!.timeSlots),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditionsTimeAllowedTimeSlotsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditionsTimeAllowedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditionsTimeAllowed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._empty !== undefined) {
      hasAnyValues = true;
      internalValueResult.empty = this._empty;
    }
    if (this._timeZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZoneId = this._timeZoneId;
    }
    if (this._timeSlots?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeSlots = this._timeSlots?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditionsTimeAllowed | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._empty = undefined;
      this._timeZoneId = undefined;
      this._timeSlots.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._empty = value.empty;
      this._timeZoneId = value.timeZoneId;
      this._timeSlots.internalValue = value.timeSlots;
    }
  }

  // empty - computed: false, optional: true, required: false
  private _empty?: boolean | cdktf.IResolvable; 
  public get empty() {
    return this.getBooleanAttribute('empty');
  }
  public set empty(value: boolean | cdktf.IResolvable) {
    this._empty = value;
  }
  public resetEmpty() {
    this._empty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyInput() {
    return this._empty;
  }

  // time_zone_id - computed: false, optional: true, required: false
  private _timeZoneId?: string; 
  public get timeZoneId() {
    return this.getStringAttribute('time_zone_id');
  }
  public set timeZoneId(value: string) {
    this._timeZoneId = value;
  }
  public resetTimeZoneId() {
    this._timeZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneIdInput() {
    return this._timeZoneId;
  }

  // time_slots - computed: false, optional: true, required: false
  private _timeSlots = new RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditionsTimeAllowedTimeSlotsList(this, "time_slots", false);
  public get timeSlots() {
    return this._timeSlots;
  }
  public putTimeSlots(value: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditionsTimeAllowedTimeSlots[] | cdktf.IResolvable) {
    this._timeSlots.internalValue = value;
  }
  public resetTimeSlots() {
    this._timeSlots.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSlotsInput() {
    return this._timeSlots.internalValue;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditions {
  /**
  * This condition is to filter out conversation with and without customer participation. Valid values: YES, NO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#customer_participation RecordingMediaRetentionPolicy#customer_participation}
  */
  readonly customerParticipation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#date_ranges RecordingMediaRetentionPolicy#date_ranges}
  */
  readonly dateRanges?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#for_queue_ids RecordingMediaRetentionPolicy#for_queue_ids}
  */
  readonly forQueueIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#for_user_ids RecordingMediaRetentionPolicy#for_user_ids}
  */
  readonly forUserIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#language_ids RecordingMediaRetentionPolicy#language_ids}
  */
  readonly languageIds?: string[];
  /**
  * Teams to match conversations against
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#team_ids RecordingMediaRetentionPolicy#team_ids}
  */
  readonly teamIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#wrapup_code_ids RecordingMediaRetentionPolicy#wrapup_code_ids}
  */
  readonly wrapupCodeIds?: string[];
  /**
  * time_allowed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#time_allowed RecordingMediaRetentionPolicy#time_allowed}
  */
  readonly timeAllowed?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditionsTimeAllowed;
}

export function recordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditionsToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditionsOutputReference | RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customer_participation: cdktf.stringToTerraform(struct!.customerParticipation),
    date_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dateRanges),
    for_queue_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.forQueueIds),
    for_user_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.forUserIds),
    language_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.languageIds),
    team_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.teamIds),
    wrapup_code_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.wrapupCodeIds),
    time_allowed: recordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditionsTimeAllowedToTerraform(struct!.timeAllowed),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditionsToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditionsOutputReference | RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    customer_participation: {
      value: cdktf.stringToHclTerraform(struct!.customerParticipation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dateRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    for_queue_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.forQueueIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    for_user_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.forUserIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    language_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.languageIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    team_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.teamIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    wrapup_code_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.wrapupCodeIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    time_allowed: {
      value: recordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditionsTimeAllowedToHclTerraform(struct!.timeAllowed),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditionsTimeAllowedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customerParticipation !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerParticipation = this._customerParticipation;
    }
    if (this._dateRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateRanges = this._dateRanges;
    }
    if (this._forQueueIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.forQueueIds = this._forQueueIds;
    }
    if (this._forUserIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.forUserIds = this._forUserIds;
    }
    if (this._languageIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.languageIds = this._languageIds;
    }
    if (this._teamIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.teamIds = this._teamIds;
    }
    if (this._wrapupCodeIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.wrapupCodeIds = this._wrapupCodeIds;
    }
    if (this._timeAllowed?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeAllowed = this._timeAllowed?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customerParticipation = undefined;
      this._dateRanges = undefined;
      this._forQueueIds = undefined;
      this._forUserIds = undefined;
      this._languageIds = undefined;
      this._teamIds = undefined;
      this._wrapupCodeIds = undefined;
      this._timeAllowed.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customerParticipation = value.customerParticipation;
      this._dateRanges = value.dateRanges;
      this._forQueueIds = value.forQueueIds;
      this._forUserIds = value.forUserIds;
      this._languageIds = value.languageIds;
      this._teamIds = value.teamIds;
      this._wrapupCodeIds = value.wrapupCodeIds;
      this._timeAllowed.internalValue = value.timeAllowed;
    }
  }

  // customer_participation - computed: false, optional: true, required: false
  private _customerParticipation?: string; 
  public get customerParticipation() {
    return this.getStringAttribute('customer_participation');
  }
  public set customerParticipation(value: string) {
    this._customerParticipation = value;
  }
  public resetCustomerParticipation() {
    this._customerParticipation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerParticipationInput() {
    return this._customerParticipation;
  }

  // date_ranges - computed: false, optional: true, required: false
  private _dateRanges?: string[]; 
  public get dateRanges() {
    return this.getListAttribute('date_ranges');
  }
  public set dateRanges(value: string[]) {
    this._dateRanges = value;
  }
  public resetDateRanges() {
    this._dateRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateRangesInput() {
    return this._dateRanges;
  }

  // for_queue_ids - computed: false, optional: true, required: false
  private _forQueueIds?: string[]; 
  public get forQueueIds() {
    return this.getListAttribute('for_queue_ids');
  }
  public set forQueueIds(value: string[]) {
    this._forQueueIds = value;
  }
  public resetForQueueIds() {
    this._forQueueIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forQueueIdsInput() {
    return this._forQueueIds;
  }

  // for_user_ids - computed: false, optional: true, required: false
  private _forUserIds?: string[]; 
  public get forUserIds() {
    return this.getListAttribute('for_user_ids');
  }
  public set forUserIds(value: string[]) {
    this._forUserIds = value;
  }
  public resetForUserIds() {
    this._forUserIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forUserIdsInput() {
    return this._forUserIds;
  }

  // language_ids - computed: false, optional: true, required: false
  private _languageIds?: string[]; 
  public get languageIds() {
    return this.getListAttribute('language_ids');
  }
  public set languageIds(value: string[]) {
    this._languageIds = value;
  }
  public resetLanguageIds() {
    this._languageIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageIdsInput() {
    return this._languageIds;
  }

  // team_ids - computed: false, optional: true, required: false
  private _teamIds?: string[]; 
  public get teamIds() {
    return cdktf.Fn.tolist(this.getListAttribute('team_ids'));
  }
  public set teamIds(value: string[]) {
    this._teamIds = value;
  }
  public resetTeamIds() {
    this._teamIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdsInput() {
    return this._teamIds;
  }

  // wrapup_code_ids - computed: false, optional: true, required: false
  private _wrapupCodeIds?: string[]; 
  public get wrapupCodeIds() {
    return this.getListAttribute('wrapup_code_ids');
  }
  public set wrapupCodeIds(value: string[]) {
    this._wrapupCodeIds = value;
  }
  public resetWrapupCodeIds() {
    this._wrapupCodeIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wrapupCodeIdsInput() {
    return this._wrapupCodeIds;
  }

  // time_allowed - computed: false, optional: true, required: false
  private _timeAllowed = new RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditionsTimeAllowedOutputReference(this, "time_allowed");
  public get timeAllowed() {
    return this._timeAllowed;
  }
  public putTimeAllowed(value: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditionsTimeAllowed) {
    this._timeAllowed.internalValue = value;
  }
  public resetTimeAllowed() {
    this._timeAllowed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeAllowedInput() {
    return this._timeAllowed.internalValue;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesEmailPolicy {
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#actions RecordingMediaRetentionPolicy#actions}
  */
  readonly actions?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActions;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#conditions RecordingMediaRetentionPolicy#conditions}
  */
  readonly conditions?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditions;
}

export function recordingMediaRetentionPolicyMediaPoliciesEmailPolicyToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyOutputReference | RecordingMediaRetentionPolicyMediaPoliciesEmailPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsToTerraform(struct!.actions),
    conditions: recordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditionsToTerraform(struct!.conditions),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesEmailPolicyToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyOutputReference | RecordingMediaRetentionPolicyMediaPoliciesEmailPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: recordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsToHclTerraform(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsList",
    },
    conditions: {
      value: recordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditionsToHclTerraform(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesEmailPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actions.internalValue = undefined;
      this._conditions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actions.internalValue = value.actions;
      this._conditions.internalValue = value.conditions;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions = new RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActionsOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }
  public putActions(value: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyActions) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyConditions) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignCalibrations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#calibrator_id RecordingMediaRetentionPolicy#calibrator_id}
  */
  readonly calibratorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#evaluation_form_id RecordingMediaRetentionPolicy#evaluation_form_id}
  */
  readonly evaluationFormId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#evaluator_ids RecordingMediaRetentionPolicy#evaluator_ids}
  */
  readonly evaluatorIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#expert_evaluator_id RecordingMediaRetentionPolicy#expert_evaluator_id}
  */
  readonly expertEvaluatorId?: string;
}

export function recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignCalibrationsToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignCalibrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    calibrator_id: cdktf.stringToTerraform(struct!.calibratorId),
    evaluation_form_id: cdktf.stringToTerraform(struct!.evaluationFormId),
    evaluator_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.evaluatorIds),
    expert_evaluator_id: cdktf.stringToTerraform(struct!.expertEvaluatorId),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignCalibrationsToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignCalibrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    calibrator_id: {
      value: cdktf.stringToHclTerraform(struct!.calibratorId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evaluation_form_id: {
      value: cdktf.stringToHclTerraform(struct!.evaluationFormId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evaluator_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.evaluatorIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    expert_evaluator_id: {
      value: cdktf.stringToHclTerraform(struct!.expertEvaluatorId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignCalibrationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignCalibrations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._calibratorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.calibratorId = this._calibratorId;
    }
    if (this._evaluationFormId !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationFormId = this._evaluationFormId;
    }
    if (this._evaluatorIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluatorIds = this._evaluatorIds;
    }
    if (this._expertEvaluatorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.expertEvaluatorId = this._expertEvaluatorId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignCalibrations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._calibratorId = undefined;
      this._evaluationFormId = undefined;
      this._evaluatorIds = undefined;
      this._expertEvaluatorId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._calibratorId = value.calibratorId;
      this._evaluationFormId = value.evaluationFormId;
      this._evaluatorIds = value.evaluatorIds;
      this._expertEvaluatorId = value.expertEvaluatorId;
    }
  }

  // calibrator_id - computed: false, optional: true, required: false
  private _calibratorId?: string; 
  public get calibratorId() {
    return this.getStringAttribute('calibrator_id');
  }
  public set calibratorId(value: string) {
    this._calibratorId = value;
  }
  public resetCalibratorId() {
    this._calibratorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calibratorIdInput() {
    return this._calibratorId;
  }

  // evaluation_form_id - computed: false, optional: true, required: false
  private _evaluationFormId?: string; 
  public get evaluationFormId() {
    return this.getStringAttribute('evaluation_form_id');
  }
  public set evaluationFormId(value: string) {
    this._evaluationFormId = value;
  }
  public resetEvaluationFormId() {
    this._evaluationFormId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationFormIdInput() {
    return this._evaluationFormId;
  }

  // evaluator_ids - computed: false, optional: true, required: false
  private _evaluatorIds?: string[]; 
  public get evaluatorIds() {
    return this.getListAttribute('evaluator_ids');
  }
  public set evaluatorIds(value: string[]) {
    this._evaluatorIds = value;
  }
  public resetEvaluatorIds() {
    this._evaluatorIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluatorIdsInput() {
    return this._evaluatorIds;
  }

  // expert_evaluator_id - computed: false, optional: true, required: false
  private _expertEvaluatorId?: string; 
  public get expertEvaluatorId() {
    return this.getStringAttribute('expert_evaluator_id');
  }
  public set expertEvaluatorId(value: string) {
    this._expertEvaluatorId = value;
  }
  public resetExpertEvaluatorId() {
    this._expertEvaluatorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expertEvaluatorIdInput() {
    return this._expertEvaluatorId;
  }
}

export class RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignCalibrationsList extends cdktf.ComplexList {
  public internalValue? : RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignCalibrations[] | cdktf.IResolvable

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
  public get(index: number): RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignCalibrationsOutputReference {
    return new RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignCalibrationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignEvaluations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#evaluation_form_id RecordingMediaRetentionPolicy#evaluation_form_id}
  */
  readonly evaluationFormId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#user_id RecordingMediaRetentionPolicy#user_id}
  */
  readonly userId?: string;
}

export function recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignEvaluationsToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignEvaluations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluation_form_id: cdktf.stringToTerraform(struct!.evaluationFormId),
    user_id: cdktf.stringToTerraform(struct!.userId),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignEvaluationsToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignEvaluations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    evaluation_form_id: {
      value: cdktf.stringToHclTerraform(struct!.evaluationFormId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_id: {
      value: cdktf.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignEvaluationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignEvaluations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluationFormId !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationFormId = this._evaluationFormId;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignEvaluations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evaluationFormId = undefined;
      this._userId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evaluationFormId = value.evaluationFormId;
      this._userId = value.userId;
    }
  }

  // evaluation_form_id - computed: false, optional: true, required: false
  private _evaluationFormId?: string; 
  public get evaluationFormId() {
    return this.getStringAttribute('evaluation_form_id');
  }
  public set evaluationFormId(value: string) {
    this._evaluationFormId = value;
  }
  public resetEvaluationFormId() {
    this._evaluationFormId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationFormIdInput() {
    return this._evaluationFormId;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }
}

export class RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignEvaluationsList extends cdktf.ComplexList {
  public internalValue? : RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignEvaluations[] | cdktf.IResolvable

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
  public get(index: number): RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignEvaluationsOutputReference {
    return new RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignEvaluationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredAssignmentByAgentTimeInterval {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#days RecordingMediaRetentionPolicy#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#hours RecordingMediaRetentionPolicy#hours}
  */
  readonly hours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#months RecordingMediaRetentionPolicy#months}
  */
  readonly months?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#weeks RecordingMediaRetentionPolicy#weeks}
  */
  readonly weeks?: number;
}

export function recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredAssignmentByAgentTimeIntervalToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredAssignmentByAgentTimeIntervalOutputReference | RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredAssignmentByAgentTimeInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    hours: cdktf.numberToTerraform(struct!.hours),
    months: cdktf.numberToTerraform(struct!.months),
    weeks: cdktf.numberToTerraform(struct!.weeks),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredAssignmentByAgentTimeIntervalToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredAssignmentByAgentTimeIntervalOutputReference | RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredAssignmentByAgentTimeInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    months: {
      value: cdktf.numberToHclTerraform(struct!.months),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weeks: {
      value: cdktf.numberToHclTerraform(struct!.weeks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredAssignmentByAgentTimeIntervalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredAssignmentByAgentTimeInterval | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._months !== undefined) {
      hasAnyValues = true;
      internalValueResult.months = this._months;
    }
    if (this._weeks !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeks = this._weeks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredAssignmentByAgentTimeInterval | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
      this._hours = undefined;
      this._months = undefined;
      this._weeks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
      this._hours = value.hours;
      this._months = value.months;
      this._weeks = value.weeks;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // months - computed: false, optional: true, required: false
  private _months?: number; 
  public get months() {
    return this.getNumberAttribute('months');
  }
  public set months(value: number) {
    this._months = value;
  }
  public resetMonths() {
    this._months = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthsInput() {
    return this._months;
  }

  // weeks - computed: false, optional: true, required: false
  private _weeks?: number; 
  public get weeks() {
    return this.getNumberAttribute('weeks');
  }
  public set weeks(value: number) {
    this._weeks = value;
  }
  public resetWeeks() {
    this._weeks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeksInput() {
    return this._weeks;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredAssignmentByAgent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#evaluation_form_id RecordingMediaRetentionPolicy#evaluation_form_id}
  */
  readonly evaluationFormId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#evaluator_ids RecordingMediaRetentionPolicy#evaluator_ids}
  */
  readonly evaluatorIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#max_number_evaluations RecordingMediaRetentionPolicy#max_number_evaluations}
  */
  readonly maxNumberEvaluations?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#time_zone RecordingMediaRetentionPolicy#time_zone}
  */
  readonly timeZone?: string;
  /**
  * time_interval block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#time_interval RecordingMediaRetentionPolicy#time_interval}
  */
  readonly timeInterval?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredAssignmentByAgentTimeInterval;
}

export function recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredAssignmentByAgentToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredAssignmentByAgent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluation_form_id: cdktf.stringToTerraform(struct!.evaluationFormId),
    evaluator_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.evaluatorIds),
    max_number_evaluations: cdktf.numberToTerraform(struct!.maxNumberEvaluations),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    time_interval: recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredAssignmentByAgentTimeIntervalToTerraform(struct!.timeInterval),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredAssignmentByAgentToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredAssignmentByAgent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    evaluation_form_id: {
      value: cdktf.stringToHclTerraform(struct!.evaluationFormId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evaluator_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.evaluatorIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_number_evaluations: {
      value: cdktf.numberToHclTerraform(struct!.maxNumberEvaluations),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_interval: {
      value: recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredAssignmentByAgentTimeIntervalToHclTerraform(struct!.timeInterval),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredAssignmentByAgentTimeIntervalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredAssignmentByAgentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredAssignmentByAgent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluationFormId !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationFormId = this._evaluationFormId;
    }
    if (this._evaluatorIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluatorIds = this._evaluatorIds;
    }
    if (this._maxNumberEvaluations !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNumberEvaluations = this._maxNumberEvaluations;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    if (this._timeInterval?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeInterval = this._timeInterval?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredAssignmentByAgent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evaluationFormId = undefined;
      this._evaluatorIds = undefined;
      this._maxNumberEvaluations = undefined;
      this._timeZone = undefined;
      this._timeInterval.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evaluationFormId = value.evaluationFormId;
      this._evaluatorIds = value.evaluatorIds;
      this._maxNumberEvaluations = value.maxNumberEvaluations;
      this._timeZone = value.timeZone;
      this._timeInterval.internalValue = value.timeInterval;
    }
  }

  // evaluation_form_id - computed: false, optional: true, required: false
  private _evaluationFormId?: string; 
  public get evaluationFormId() {
    return this.getStringAttribute('evaluation_form_id');
  }
  public set evaluationFormId(value: string) {
    this._evaluationFormId = value;
  }
  public resetEvaluationFormId() {
    this._evaluationFormId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationFormIdInput() {
    return this._evaluationFormId;
  }

  // evaluator_ids - computed: false, optional: true, required: false
  private _evaluatorIds?: string[]; 
  public get evaluatorIds() {
    return this.getListAttribute('evaluator_ids');
  }
  public set evaluatorIds(value: string[]) {
    this._evaluatorIds = value;
  }
  public resetEvaluatorIds() {
    this._evaluatorIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluatorIdsInput() {
    return this._evaluatorIds;
  }

  // max_number_evaluations - computed: false, optional: true, required: false
  private _maxNumberEvaluations?: number; 
  public get maxNumberEvaluations() {
    return this.getNumberAttribute('max_number_evaluations');
  }
  public set maxNumberEvaluations(value: number) {
    this._maxNumberEvaluations = value;
  }
  public resetMaxNumberEvaluations() {
    this._maxNumberEvaluations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberEvaluationsInput() {
    return this._maxNumberEvaluations;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // time_interval - computed: false, optional: true, required: false
  private _timeInterval = new RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredAssignmentByAgentTimeIntervalOutputReference(this, "time_interval");
  public get timeInterval() {
    return this._timeInterval;
  }
  public putTimeInterval(value: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredAssignmentByAgentTimeInterval) {
    this._timeInterval.internalValue = value;
  }
  public resetTimeInterval() {
    this._timeInterval.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeIntervalInput() {
    return this._timeInterval.internalValue;
  }
}

export class RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredAssignmentByAgentList extends cdktf.ComplexList {
  public internalValue? : RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredAssignmentByAgent[] | cdktf.IResolvable

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
  public get(index: number): RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredAssignmentByAgentOutputReference {
    return new RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredAssignmentByAgentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredEvaluationsTimeInterval {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#days RecordingMediaRetentionPolicy#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#hours RecordingMediaRetentionPolicy#hours}
  */
  readonly hours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#months RecordingMediaRetentionPolicy#months}
  */
  readonly months?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#weeks RecordingMediaRetentionPolicy#weeks}
  */
  readonly weeks?: number;
}

export function recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredEvaluationsTimeIntervalToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredEvaluationsTimeIntervalOutputReference | RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredEvaluationsTimeInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    hours: cdktf.numberToTerraform(struct!.hours),
    months: cdktf.numberToTerraform(struct!.months),
    weeks: cdktf.numberToTerraform(struct!.weeks),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredEvaluationsTimeIntervalToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredEvaluationsTimeIntervalOutputReference | RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredEvaluationsTimeInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    months: {
      value: cdktf.numberToHclTerraform(struct!.months),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weeks: {
      value: cdktf.numberToHclTerraform(struct!.weeks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredEvaluationsTimeIntervalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredEvaluationsTimeInterval | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._months !== undefined) {
      hasAnyValues = true;
      internalValueResult.months = this._months;
    }
    if (this._weeks !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeks = this._weeks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredEvaluationsTimeInterval | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
      this._hours = undefined;
      this._months = undefined;
      this._weeks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
      this._hours = value.hours;
      this._months = value.months;
      this._weeks = value.weeks;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // months - computed: false, optional: true, required: false
  private _months?: number; 
  public get months() {
    return this.getNumberAttribute('months');
  }
  public set months(value: number) {
    this._months = value;
  }
  public resetMonths() {
    this._months = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthsInput() {
    return this._months;
  }

  // weeks - computed: false, optional: true, required: false
  private _weeks?: number; 
  public get weeks() {
    return this.getNumberAttribute('weeks');
  }
  public set weeks(value: number) {
    this._weeks = value;
  }
  public resetWeeks() {
    this._weeks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeksInput() {
    return this._weeks;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredEvaluations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#assign_to_active_user RecordingMediaRetentionPolicy#assign_to_active_user}
  */
  readonly assignToActiveUser?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#evaluation_form_id RecordingMediaRetentionPolicy#evaluation_form_id}
  */
  readonly evaluationFormId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#evaluator_ids RecordingMediaRetentionPolicy#evaluator_ids}
  */
  readonly evaluatorIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#max_number_evaluations RecordingMediaRetentionPolicy#max_number_evaluations}
  */
  readonly maxNumberEvaluations?: number;
  /**
  * time_interval block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#time_interval RecordingMediaRetentionPolicy#time_interval}
  */
  readonly timeInterval?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredEvaluationsTimeInterval;
}

export function recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredEvaluationsToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredEvaluations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_to_active_user: cdktf.booleanToTerraform(struct!.assignToActiveUser),
    evaluation_form_id: cdktf.stringToTerraform(struct!.evaluationFormId),
    evaluator_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.evaluatorIds),
    max_number_evaluations: cdktf.numberToTerraform(struct!.maxNumberEvaluations),
    time_interval: recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredEvaluationsTimeIntervalToTerraform(struct!.timeInterval),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredEvaluationsToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredEvaluations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assign_to_active_user: {
      value: cdktf.booleanToHclTerraform(struct!.assignToActiveUser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    evaluation_form_id: {
      value: cdktf.stringToHclTerraform(struct!.evaluationFormId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evaluator_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.evaluatorIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_number_evaluations: {
      value: cdktf.numberToHclTerraform(struct!.maxNumberEvaluations),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_interval: {
      value: recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredEvaluationsTimeIntervalToHclTerraform(struct!.timeInterval),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredEvaluationsTimeIntervalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredEvaluationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredEvaluations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignToActiveUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignToActiveUser = this._assignToActiveUser;
    }
    if (this._evaluationFormId !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationFormId = this._evaluationFormId;
    }
    if (this._evaluatorIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluatorIds = this._evaluatorIds;
    }
    if (this._maxNumberEvaluations !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNumberEvaluations = this._maxNumberEvaluations;
    }
    if (this._timeInterval?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeInterval = this._timeInterval?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredEvaluations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignToActiveUser = undefined;
      this._evaluationFormId = undefined;
      this._evaluatorIds = undefined;
      this._maxNumberEvaluations = undefined;
      this._timeInterval.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assignToActiveUser = value.assignToActiveUser;
      this._evaluationFormId = value.evaluationFormId;
      this._evaluatorIds = value.evaluatorIds;
      this._maxNumberEvaluations = value.maxNumberEvaluations;
      this._timeInterval.internalValue = value.timeInterval;
    }
  }

  // assign_to_active_user - computed: false, optional: true, required: false
  private _assignToActiveUser?: boolean | cdktf.IResolvable; 
  public get assignToActiveUser() {
    return this.getBooleanAttribute('assign_to_active_user');
  }
  public set assignToActiveUser(value: boolean | cdktf.IResolvable) {
    this._assignToActiveUser = value;
  }
  public resetAssignToActiveUser() {
    this._assignToActiveUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignToActiveUserInput() {
    return this._assignToActiveUser;
  }

  // evaluation_form_id - computed: false, optional: true, required: false
  private _evaluationFormId?: string; 
  public get evaluationFormId() {
    return this.getStringAttribute('evaluation_form_id');
  }
  public set evaluationFormId(value: string) {
    this._evaluationFormId = value;
  }
  public resetEvaluationFormId() {
    this._evaluationFormId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationFormIdInput() {
    return this._evaluationFormId;
  }

  // evaluator_ids - computed: false, optional: true, required: false
  private _evaluatorIds?: string[]; 
  public get evaluatorIds() {
    return this.getListAttribute('evaluator_ids');
  }
  public set evaluatorIds(value: string[]) {
    this._evaluatorIds = value;
  }
  public resetEvaluatorIds() {
    this._evaluatorIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluatorIdsInput() {
    return this._evaluatorIds;
  }

  // max_number_evaluations - computed: false, optional: true, required: false
  private _maxNumberEvaluations?: number; 
  public get maxNumberEvaluations() {
    return this.getNumberAttribute('max_number_evaluations');
  }
  public set maxNumberEvaluations(value: number) {
    this._maxNumberEvaluations = value;
  }
  public resetMaxNumberEvaluations() {
    this._maxNumberEvaluations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberEvaluationsInput() {
    return this._maxNumberEvaluations;
  }

  // time_interval - computed: false, optional: true, required: false
  private _timeInterval = new RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredEvaluationsTimeIntervalOutputReference(this, "time_interval");
  public get timeInterval() {
    return this._timeInterval;
  }
  public putTimeInterval(value: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredEvaluationsTimeInterval) {
    this._timeInterval.internalValue = value;
  }
  public resetTimeInterval() {
    this._timeInterval.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeIntervalInput() {
    return this._timeInterval.internalValue;
  }
}

export class RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredEvaluationsList extends cdktf.ComplexList {
  public internalValue? : RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredEvaluations[] | cdktf.IResolvable

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
  public get(index: number): RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredEvaluationsOutputReference {
    return new RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredEvaluationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignSurveys {
  /**
  * The UUID reference to the flow associated with this survey.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#flow_id RecordingMediaRetentionPolicy#flow_id}
  */
  readonly flowId?: string;
  /**
  * An ISO 8601 repeated interval consisting of the number of repetitions, the start datetime, and the interval (e.g. R2/2018-03-01T13:00:00Z/P1M10DT2H30M). Total duration must not exceed 90 days. Defaults to `R1/P0M`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#invite_time_interval RecordingMediaRetentionPolicy#invite_time_interval}
  */
  readonly inviteTimeInterval?: string;
  /**
  * Validated email domain, required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#sending_domain RecordingMediaRetentionPolicy#sending_domain}
  */
  readonly sendingDomain: string;
  /**
  * User together with sendingDomain used to send email, null to use no-reply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#sending_user RecordingMediaRetentionPolicy#sending_user}
  */
  readonly sendingUser?: string;
  /**
  * The survey form used for this survey.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#survey_form_name RecordingMediaRetentionPolicy#survey_form_name}
  */
  readonly surveyFormName?: string;
}

export function recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignSurveysToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignSurveys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flow_id: cdktf.stringToTerraform(struct!.flowId),
    invite_time_interval: cdktf.stringToTerraform(struct!.inviteTimeInterval),
    sending_domain: cdktf.stringToTerraform(struct!.sendingDomain),
    sending_user: cdktf.stringToTerraform(struct!.sendingUser),
    survey_form_name: cdktf.stringToTerraform(struct!.surveyFormName),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignSurveysToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignSurveys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flow_id: {
      value: cdktf.stringToHclTerraform(struct!.flowId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invite_time_interval: {
      value: cdktf.stringToHclTerraform(struct!.inviteTimeInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sending_domain: {
      value: cdktf.stringToHclTerraform(struct!.sendingDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sending_user: {
      value: cdktf.stringToHclTerraform(struct!.sendingUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    survey_form_name: {
      value: cdktf.stringToHclTerraform(struct!.surveyFormName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignSurveysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignSurveys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flowId !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowId = this._flowId;
    }
    if (this._inviteTimeInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.inviteTimeInterval = this._inviteTimeInterval;
    }
    if (this._sendingDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendingDomain = this._sendingDomain;
    }
    if (this._sendingUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendingUser = this._sendingUser;
    }
    if (this._surveyFormName !== undefined) {
      hasAnyValues = true;
      internalValueResult.surveyFormName = this._surveyFormName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignSurveys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flowId = undefined;
      this._inviteTimeInterval = undefined;
      this._sendingDomain = undefined;
      this._sendingUser = undefined;
      this._surveyFormName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flowId = value.flowId;
      this._inviteTimeInterval = value.inviteTimeInterval;
      this._sendingDomain = value.sendingDomain;
      this._sendingUser = value.sendingUser;
      this._surveyFormName = value.surveyFormName;
    }
  }

  // flow_id - computed: false, optional: true, required: false
  private _flowId?: string; 
  public get flowId() {
    return this.getStringAttribute('flow_id');
  }
  public set flowId(value: string) {
    this._flowId = value;
  }
  public resetFlowId() {
    this._flowId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowIdInput() {
    return this._flowId;
  }

  // invite_time_interval - computed: false, optional: true, required: false
  private _inviteTimeInterval?: string; 
  public get inviteTimeInterval() {
    return this.getStringAttribute('invite_time_interval');
  }
  public set inviteTimeInterval(value: string) {
    this._inviteTimeInterval = value;
  }
  public resetInviteTimeInterval() {
    this._inviteTimeInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inviteTimeIntervalInput() {
    return this._inviteTimeInterval;
  }

  // sending_domain - computed: false, optional: false, required: true
  private _sendingDomain?: string; 
  public get sendingDomain() {
    return this.getStringAttribute('sending_domain');
  }
  public set sendingDomain(value: string) {
    this._sendingDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sendingDomainInput() {
    return this._sendingDomain;
  }

  // sending_user - computed: false, optional: true, required: false
  private _sendingUser?: string; 
  public get sendingUser() {
    return this.getStringAttribute('sending_user');
  }
  public set sendingUser(value: string) {
    this._sendingUser = value;
  }
  public resetSendingUser() {
    this._sendingUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendingUserInput() {
    return this._sendingUser;
  }

  // survey_form_name - computed: false, optional: true, required: false
  private _surveyFormName?: string; 
  public get surveyFormName() {
    return this.getStringAttribute('survey_form_name');
  }
  public set surveyFormName(value: string) {
    this._surveyFormName = value;
  }
  public resetSurveyFormName() {
    this._surveyFormName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get surveyFormNameInput() {
    return this._surveyFormName;
  }
}

export class RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignSurveysList extends cdktf.ComplexList {
  public internalValue? : RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignSurveys[] | cdktf.IResolvable

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
  public get(index: number): RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignSurveysOutputReference {
    return new RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignSurveysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecordingArchiveRetention {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#days RecordingMediaRetentionPolicy#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#storage_medium RecordingMediaRetentionPolicy#storage_medium}
  */
  readonly storageMedium?: string;
}

export function recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecordingArchiveRetentionToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecordingArchiveRetentionOutputReference | RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecordingArchiveRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    storage_medium: cdktf.stringToTerraform(struct!.storageMedium),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecordingArchiveRetentionToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecordingArchiveRetentionOutputReference | RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecordingArchiveRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_medium: {
      value: cdktf.stringToHclTerraform(struct!.storageMedium),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecordingArchiveRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecordingArchiveRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._storageMedium !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageMedium = this._storageMedium;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecordingArchiveRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
      this._storageMedium = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
      this._storageMedium = value.storageMedium;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // storage_medium - computed: false, optional: true, required: false
  private _storageMedium?: string; 
  public get storageMedium() {
    return this.getStringAttribute('storage_medium');
  }
  public set storageMedium(value: string) {
    this._storageMedium = value;
  }
  public resetStorageMedium() {
    this._storageMedium = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageMediumInput() {
    return this._storageMedium;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecordingDeleteRetention {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#days RecordingMediaRetentionPolicy#days}
  */
  readonly days?: number;
}

export function recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecordingDeleteRetentionToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecordingDeleteRetentionOutputReference | RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecordingDeleteRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecordingDeleteRetentionToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecordingDeleteRetentionOutputReference | RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecordingDeleteRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecordingDeleteRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecordingDeleteRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecordingDeleteRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecording {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#record_acw RecordingMediaRetentionPolicy#record_acw}
  */
  readonly recordAcw?: boolean | cdktf.IResolvable;
  /**
  * archive_retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#archive_retention RecordingMediaRetentionPolicy#archive_retention}
  */
  readonly archiveRetention?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecordingArchiveRetention;
  /**
  * delete_retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#delete_retention RecordingMediaRetentionPolicy#delete_retention}
  */
  readonly deleteRetention?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecordingDeleteRetention;
}

export function recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecordingToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecordingOutputReference | RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecording): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    record_acw: cdktf.booleanToTerraform(struct!.recordAcw),
    archive_retention: recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecordingArchiveRetentionToTerraform(struct!.archiveRetention),
    delete_retention: recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecordingDeleteRetentionToTerraform(struct!.deleteRetention),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecordingToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecordingOutputReference | RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecording): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    record_acw: {
      value: cdktf.booleanToHclTerraform(struct!.recordAcw),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    archive_retention: {
      value: recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecordingArchiveRetentionToHclTerraform(struct!.archiveRetention),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecordingArchiveRetentionList",
    },
    delete_retention: {
      value: recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecordingDeleteRetentionToHclTerraform(struct!.deleteRetention),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecordingDeleteRetentionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecordingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecording | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordAcw !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordAcw = this._recordAcw;
    }
    if (this._archiveRetention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveRetention = this._archiveRetention?.internalValue;
    }
    if (this._deleteRetention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteRetention = this._deleteRetention?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecording | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recordAcw = undefined;
      this._archiveRetention.internalValue = undefined;
      this._deleteRetention.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recordAcw = value.recordAcw;
      this._archiveRetention.internalValue = value.archiveRetention;
      this._deleteRetention.internalValue = value.deleteRetention;
    }
  }

  // record_acw - computed: false, optional: true, required: false
  private _recordAcw?: boolean | cdktf.IResolvable; 
  public get recordAcw() {
    return this.getBooleanAttribute('record_acw');
  }
  public set recordAcw(value: boolean | cdktf.IResolvable) {
    this._recordAcw = value;
  }
  public resetRecordAcw() {
    this._recordAcw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordAcwInput() {
    return this._recordAcw;
  }

  // archive_retention - computed: false, optional: true, required: false
  private _archiveRetention = new RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecordingArchiveRetentionOutputReference(this, "archive_retention");
  public get archiveRetention() {
    return this._archiveRetention;
  }
  public putArchiveRetention(value: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecordingArchiveRetention) {
    this._archiveRetention.internalValue = value;
  }
  public resetArchiveRetention() {
    this._archiveRetention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveRetentionInput() {
    return this._archiveRetention.internalValue;
  }

  // delete_retention - computed: false, optional: true, required: false
  private _deleteRetention = new RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecordingDeleteRetentionOutputReference(this, "delete_retention");
  public get deleteRetention() {
    return this._deleteRetention;
  }
  public putDeleteRetention(value: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecordingDeleteRetention) {
    this._deleteRetention.internalValue = value;
  }
  public resetDeleteRetention() {
    this._deleteRetention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteRetentionInput() {
    return this._deleteRetention.internalValue;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsIntegrationExport {
  /**
  * The aws-s3-recording-bulk-actions-integration that the policy uses for exports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#integration_id RecordingMediaRetentionPolicy#integration_id}
  */
  readonly integrationId?: string;
  /**
  * True if the policy should export screen recordings in addition to the other conversation media. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#should_export_screen_recordings RecordingMediaRetentionPolicy#should_export_screen_recordings}
  */
  readonly shouldExportScreenRecordings?: boolean | cdktf.IResolvable;
}

export function recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsIntegrationExportToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsIntegrationExportOutputReference | RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsIntegrationExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    integration_id: cdktf.stringToTerraform(struct!.integrationId),
    should_export_screen_recordings: cdktf.booleanToTerraform(struct!.shouldExportScreenRecordings),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsIntegrationExportToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsIntegrationExportOutputReference | RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsIntegrationExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    integration_id: {
      value: cdktf.stringToHclTerraform(struct!.integrationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    should_export_screen_recordings: {
      value: cdktf.booleanToHclTerraform(struct!.shouldExportScreenRecordings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsIntegrationExportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsIntegrationExport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._integrationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationId = this._integrationId;
    }
    if (this._shouldExportScreenRecordings !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldExportScreenRecordings = this._shouldExportScreenRecordings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsIntegrationExport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._integrationId = undefined;
      this._shouldExportScreenRecordings = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._integrationId = value.integrationId;
      this._shouldExportScreenRecordings = value.shouldExportScreenRecordings;
    }
  }

  // integration_id - computed: false, optional: true, required: false
  private _integrationId?: string; 
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }
  public set integrationId(value: string) {
    this._integrationId = value;
  }
  public resetIntegrationId() {
    this._integrationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdInput() {
    return this._integrationId;
  }

  // should_export_screen_recordings - computed: false, optional: true, required: false
  private _shouldExportScreenRecordings?: boolean | cdktf.IResolvable; 
  public get shouldExportScreenRecordings() {
    return this.getBooleanAttribute('should_export_screen_recordings');
  }
  public set shouldExportScreenRecordings(value: boolean | cdktf.IResolvable) {
    this._shouldExportScreenRecordings = value;
  }
  public resetShouldExportScreenRecordings() {
    this._shouldExportScreenRecordings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldExportScreenRecordingsInput() {
    return this._shouldExportScreenRecordings;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsMediaTranscriptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#display_name RecordingMediaRetentionPolicy#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#integration_id RecordingMediaRetentionPolicy#integration_id}
  */
  readonly integrationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#transcription_provider RecordingMediaRetentionPolicy#transcription_provider}
  */
  readonly transcriptionProvider?: string;
}

export function recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsMediaTranscriptionsToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsMediaTranscriptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    integration_id: cdktf.stringToTerraform(struct!.integrationId),
    transcription_provider: cdktf.stringToTerraform(struct!.transcriptionProvider),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsMediaTranscriptionsToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsMediaTranscriptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    integration_id: {
      value: cdktf.stringToHclTerraform(struct!.integrationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transcription_provider: {
      value: cdktf.stringToHclTerraform(struct!.transcriptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsMediaTranscriptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsMediaTranscriptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._integrationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationId = this._integrationId;
    }
    if (this._transcriptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.transcriptionProvider = this._transcriptionProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsMediaTranscriptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._integrationId = undefined;
      this._transcriptionProvider = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._integrationId = value.integrationId;
      this._transcriptionProvider = value.transcriptionProvider;
    }
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

  // integration_id - computed: false, optional: true, required: false
  private _integrationId?: string; 
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }
  public set integrationId(value: string) {
    this._integrationId = value;
  }
  public resetIntegrationId() {
    this._integrationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdInput() {
    return this._integrationId;
  }

  // transcription_provider - computed: false, optional: true, required: false
  private _transcriptionProvider?: string; 
  public get transcriptionProvider() {
    return this.getStringAttribute('transcription_provider');
  }
  public set transcriptionProvider(value: string) {
    this._transcriptionProvider = value;
  }
  public resetTranscriptionProvider() {
    this._transcriptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transcriptionProviderInput() {
    return this._transcriptionProvider;
  }
}

export class RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsMediaTranscriptionsList extends cdktf.ComplexList {
  public internalValue? : RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsMediaTranscriptions[] | cdktf.IResolvable

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
  public get(index: number): RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsMediaTranscriptionsOutputReference {
    return new RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsMediaTranscriptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDurationArchiveRetention {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#days RecordingMediaRetentionPolicy#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#storage_medium RecordingMediaRetentionPolicy#storage_medium}
  */
  readonly storageMedium?: string;
}

export function recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDurationArchiveRetentionToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDurationArchiveRetentionOutputReference | RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDurationArchiveRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    storage_medium: cdktf.stringToTerraform(struct!.storageMedium),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDurationArchiveRetentionToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDurationArchiveRetentionOutputReference | RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDurationArchiveRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_medium: {
      value: cdktf.stringToHclTerraform(struct!.storageMedium),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDurationArchiveRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDurationArchiveRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._storageMedium !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageMedium = this._storageMedium;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDurationArchiveRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
      this._storageMedium = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
      this._storageMedium = value.storageMedium;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // storage_medium - computed: false, optional: true, required: false
  private _storageMedium?: string; 
  public get storageMedium() {
    return this.getStringAttribute('storage_medium');
  }
  public set storageMedium(value: string) {
    this._storageMedium = value;
  }
  public resetStorageMedium() {
    this._storageMedium = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageMediumInput() {
    return this._storageMedium;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDurationDeleteRetention {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#days RecordingMediaRetentionPolicy#days}
  */
  readonly days?: number;
}

export function recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDurationDeleteRetentionToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDurationDeleteRetentionOutputReference | RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDurationDeleteRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDurationDeleteRetentionToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDurationDeleteRetentionOutputReference | RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDurationDeleteRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDurationDeleteRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDurationDeleteRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDurationDeleteRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDuration {
  /**
  * archive_retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#archive_retention RecordingMediaRetentionPolicy#archive_retention}
  */
  readonly archiveRetention?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDurationArchiveRetention;
  /**
  * delete_retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#delete_retention RecordingMediaRetentionPolicy#delete_retention}
  */
  readonly deleteRetention?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDurationDeleteRetention;
}

export function recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDurationToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDurationOutputReference | RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_retention: recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDurationArchiveRetentionToTerraform(struct!.archiveRetention),
    delete_retention: recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDurationDeleteRetentionToTerraform(struct!.deleteRetention),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDurationToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDurationOutputReference | RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_retention: {
      value: recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDurationArchiveRetentionToHclTerraform(struct!.archiveRetention),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDurationArchiveRetentionList",
    },
    delete_retention: {
      value: recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDurationDeleteRetentionToHclTerraform(struct!.deleteRetention),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDurationDeleteRetentionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveRetention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveRetention = this._archiveRetention?.internalValue;
    }
    if (this._deleteRetention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteRetention = this._deleteRetention?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archiveRetention.internalValue = undefined;
      this._deleteRetention.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archiveRetention.internalValue = value.archiveRetention;
      this._deleteRetention.internalValue = value.deleteRetention;
    }
  }

  // archive_retention - computed: false, optional: true, required: false
  private _archiveRetention = new RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDurationArchiveRetentionOutputReference(this, "archive_retention");
  public get archiveRetention() {
    return this._archiveRetention;
  }
  public putArchiveRetention(value: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDurationArchiveRetention) {
    this._archiveRetention.internalValue = value;
  }
  public resetArchiveRetention() {
    this._archiveRetention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveRetentionInput() {
    return this._archiveRetention.internalValue;
  }

  // delete_retention - computed: false, optional: true, required: false
  private _deleteRetention = new RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDurationDeleteRetentionOutputReference(this, "delete_retention");
  public get deleteRetention() {
    return this._deleteRetention;
  }
  public putDeleteRetention(value: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDurationDeleteRetention) {
    this._deleteRetention.internalValue = value;
  }
  public resetDeleteRetention() {
    this._deleteRetention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteRetentionInput() {
    return this._deleteRetention.internalValue;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActions {
  /**
  * true to delete the recording associated with the conversation regardless of the values of retainRecording or deleteRecording.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#always_delete RecordingMediaRetentionPolicy#always_delete}
  */
  readonly alwaysDelete?: boolean | cdktf.IResolvable;
  /**
  * true to delete the recording associated with the conversation. If retainRecording = true, this will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#delete_recording RecordingMediaRetentionPolicy#delete_recording}
  */
  readonly deleteRecording?: boolean | cdktf.IResolvable;
  /**
  * true to retain the recording associated with the conversation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#retain_recording RecordingMediaRetentionPolicy#retain_recording}
  */
  readonly retainRecording?: boolean | cdktf.IResolvable;
  /**
  * assign_calibrations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#assign_calibrations RecordingMediaRetentionPolicy#assign_calibrations}
  */
  readonly assignCalibrations?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignCalibrations[] | cdktf.IResolvable;
  /**
  * assign_evaluations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#assign_evaluations RecordingMediaRetentionPolicy#assign_evaluations}
  */
  readonly assignEvaluations?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignEvaluations[] | cdktf.IResolvable;
  /**
  * assign_metered_assignment_by_agent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#assign_metered_assignment_by_agent RecordingMediaRetentionPolicy#assign_metered_assignment_by_agent}
  */
  readonly assignMeteredAssignmentByAgent?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredAssignmentByAgent[] | cdktf.IResolvable;
  /**
  * assign_metered_evaluations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#assign_metered_evaluations RecordingMediaRetentionPolicy#assign_metered_evaluations}
  */
  readonly assignMeteredEvaluations?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredEvaluations[] | cdktf.IResolvable;
  /**
  * assign_surveys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#assign_surveys RecordingMediaRetentionPolicy#assign_surveys}
  */
  readonly assignSurveys?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignSurveys[] | cdktf.IResolvable;
  /**
  * initiate_screen_recording block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#initiate_screen_recording RecordingMediaRetentionPolicy#initiate_screen_recording}
  */
  readonly initiateScreenRecording?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecording;
  /**
  * integration_export block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#integration_export RecordingMediaRetentionPolicy#integration_export}
  */
  readonly integrationExport?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsIntegrationExport;
  /**
  * media_transcriptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#media_transcriptions RecordingMediaRetentionPolicy#media_transcriptions}
  */
  readonly mediaTranscriptions?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsMediaTranscriptions[] | cdktf.IResolvable;
  /**
  * retention_duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#retention_duration RecordingMediaRetentionPolicy#retention_duration}
  */
  readonly retentionDuration?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDuration;
}

export function recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsOutputReference | RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always_delete: cdktf.booleanToTerraform(struct!.alwaysDelete),
    delete_recording: cdktf.booleanToTerraform(struct!.deleteRecording),
    retain_recording: cdktf.booleanToTerraform(struct!.retainRecording),
    assign_calibrations: cdktf.listMapper(recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignCalibrationsToTerraform, true)(struct!.assignCalibrations),
    assign_evaluations: cdktf.listMapper(recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignEvaluationsToTerraform, true)(struct!.assignEvaluations),
    assign_metered_assignment_by_agent: cdktf.listMapper(recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredAssignmentByAgentToTerraform, true)(struct!.assignMeteredAssignmentByAgent),
    assign_metered_evaluations: cdktf.listMapper(recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredEvaluationsToTerraform, true)(struct!.assignMeteredEvaluations),
    assign_surveys: cdktf.listMapper(recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignSurveysToTerraform, true)(struct!.assignSurveys),
    initiate_screen_recording: recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecordingToTerraform(struct!.initiateScreenRecording),
    integration_export: recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsIntegrationExportToTerraform(struct!.integrationExport),
    media_transcriptions: cdktf.listMapper(recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsMediaTranscriptionsToTerraform, true)(struct!.mediaTranscriptions),
    retention_duration: recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDurationToTerraform(struct!.retentionDuration),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsOutputReference | RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    always_delete: {
      value: cdktf.booleanToHclTerraform(struct!.alwaysDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delete_recording: {
      value: cdktf.booleanToHclTerraform(struct!.deleteRecording),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retain_recording: {
      value: cdktf.booleanToHclTerraform(struct!.retainRecording),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    assign_calibrations: {
      value: cdktf.listMapperHcl(recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignCalibrationsToHclTerraform, true)(struct!.assignCalibrations),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignCalibrationsList",
    },
    assign_evaluations: {
      value: cdktf.listMapperHcl(recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignEvaluationsToHclTerraform, true)(struct!.assignEvaluations),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignEvaluationsList",
    },
    assign_metered_assignment_by_agent: {
      value: cdktf.listMapperHcl(recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredAssignmentByAgentToHclTerraform, true)(struct!.assignMeteredAssignmentByAgent),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredAssignmentByAgentList",
    },
    assign_metered_evaluations: {
      value: cdktf.listMapperHcl(recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredEvaluationsToHclTerraform, true)(struct!.assignMeteredEvaluations),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredEvaluationsList",
    },
    assign_surveys: {
      value: cdktf.listMapperHcl(recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignSurveysToHclTerraform, true)(struct!.assignSurveys),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignSurveysList",
    },
    initiate_screen_recording: {
      value: recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecordingToHclTerraform(struct!.initiateScreenRecording),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecordingList",
    },
    integration_export: {
      value: recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsIntegrationExportToHclTerraform(struct!.integrationExport),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsIntegrationExportList",
    },
    media_transcriptions: {
      value: cdktf.listMapperHcl(recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsMediaTranscriptionsToHclTerraform, true)(struct!.mediaTranscriptions),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsMediaTranscriptionsList",
    },
    retention_duration: {
      value: recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDurationToHclTerraform(struct!.retentionDuration),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alwaysDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysDelete = this._alwaysDelete;
    }
    if (this._deleteRecording !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteRecording = this._deleteRecording;
    }
    if (this._retainRecording !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainRecording = this._retainRecording;
    }
    if (this._assignCalibrations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignCalibrations = this._assignCalibrations?.internalValue;
    }
    if (this._assignEvaluations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignEvaluations = this._assignEvaluations?.internalValue;
    }
    if (this._assignMeteredAssignmentByAgent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignMeteredAssignmentByAgent = this._assignMeteredAssignmentByAgent?.internalValue;
    }
    if (this._assignMeteredEvaluations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignMeteredEvaluations = this._assignMeteredEvaluations?.internalValue;
    }
    if (this._assignSurveys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignSurveys = this._assignSurveys?.internalValue;
    }
    if (this._initiateScreenRecording?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initiateScreenRecording = this._initiateScreenRecording?.internalValue;
    }
    if (this._integrationExport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationExport = this._integrationExport?.internalValue;
    }
    if (this._mediaTranscriptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaTranscriptions = this._mediaTranscriptions?.internalValue;
    }
    if (this._retentionDuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionDuration = this._retentionDuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alwaysDelete = undefined;
      this._deleteRecording = undefined;
      this._retainRecording = undefined;
      this._assignCalibrations.internalValue = undefined;
      this._assignEvaluations.internalValue = undefined;
      this._assignMeteredAssignmentByAgent.internalValue = undefined;
      this._assignMeteredEvaluations.internalValue = undefined;
      this._assignSurveys.internalValue = undefined;
      this._initiateScreenRecording.internalValue = undefined;
      this._integrationExport.internalValue = undefined;
      this._mediaTranscriptions.internalValue = undefined;
      this._retentionDuration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alwaysDelete = value.alwaysDelete;
      this._deleteRecording = value.deleteRecording;
      this._retainRecording = value.retainRecording;
      this._assignCalibrations.internalValue = value.assignCalibrations;
      this._assignEvaluations.internalValue = value.assignEvaluations;
      this._assignMeteredAssignmentByAgent.internalValue = value.assignMeteredAssignmentByAgent;
      this._assignMeteredEvaluations.internalValue = value.assignMeteredEvaluations;
      this._assignSurveys.internalValue = value.assignSurveys;
      this._initiateScreenRecording.internalValue = value.initiateScreenRecording;
      this._integrationExport.internalValue = value.integrationExport;
      this._mediaTranscriptions.internalValue = value.mediaTranscriptions;
      this._retentionDuration.internalValue = value.retentionDuration;
    }
  }

  // always_delete - computed: false, optional: true, required: false
  private _alwaysDelete?: boolean | cdktf.IResolvable; 
  public get alwaysDelete() {
    return this.getBooleanAttribute('always_delete');
  }
  public set alwaysDelete(value: boolean | cdktf.IResolvable) {
    this._alwaysDelete = value;
  }
  public resetAlwaysDelete() {
    this._alwaysDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysDeleteInput() {
    return this._alwaysDelete;
  }

  // delete_recording - computed: false, optional: true, required: false
  private _deleteRecording?: boolean | cdktf.IResolvable; 
  public get deleteRecording() {
    return this.getBooleanAttribute('delete_recording');
  }
  public set deleteRecording(value: boolean | cdktf.IResolvable) {
    this._deleteRecording = value;
  }
  public resetDeleteRecording() {
    this._deleteRecording = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteRecordingInput() {
    return this._deleteRecording;
  }

  // retain_recording - computed: false, optional: true, required: false
  private _retainRecording?: boolean | cdktf.IResolvable; 
  public get retainRecording() {
    return this.getBooleanAttribute('retain_recording');
  }
  public set retainRecording(value: boolean | cdktf.IResolvable) {
    this._retainRecording = value;
  }
  public resetRetainRecording() {
    this._retainRecording = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainRecordingInput() {
    return this._retainRecording;
  }

  // assign_calibrations - computed: false, optional: true, required: false
  private _assignCalibrations = new RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignCalibrationsList(this, "assign_calibrations", false);
  public get assignCalibrations() {
    return this._assignCalibrations;
  }
  public putAssignCalibrations(value: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignCalibrations[] | cdktf.IResolvable) {
    this._assignCalibrations.internalValue = value;
  }
  public resetAssignCalibrations() {
    this._assignCalibrations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignCalibrationsInput() {
    return this._assignCalibrations.internalValue;
  }

  // assign_evaluations - computed: false, optional: true, required: false
  private _assignEvaluations = new RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignEvaluationsList(this, "assign_evaluations", false);
  public get assignEvaluations() {
    return this._assignEvaluations;
  }
  public putAssignEvaluations(value: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignEvaluations[] | cdktf.IResolvable) {
    this._assignEvaluations.internalValue = value;
  }
  public resetAssignEvaluations() {
    this._assignEvaluations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignEvaluationsInput() {
    return this._assignEvaluations.internalValue;
  }

  // assign_metered_assignment_by_agent - computed: false, optional: true, required: false
  private _assignMeteredAssignmentByAgent = new RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredAssignmentByAgentList(this, "assign_metered_assignment_by_agent", false);
  public get assignMeteredAssignmentByAgent() {
    return this._assignMeteredAssignmentByAgent;
  }
  public putAssignMeteredAssignmentByAgent(value: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredAssignmentByAgent[] | cdktf.IResolvable) {
    this._assignMeteredAssignmentByAgent.internalValue = value;
  }
  public resetAssignMeteredAssignmentByAgent() {
    this._assignMeteredAssignmentByAgent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignMeteredAssignmentByAgentInput() {
    return this._assignMeteredAssignmentByAgent.internalValue;
  }

  // assign_metered_evaluations - computed: false, optional: true, required: false
  private _assignMeteredEvaluations = new RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredEvaluationsList(this, "assign_metered_evaluations", false);
  public get assignMeteredEvaluations() {
    return this._assignMeteredEvaluations;
  }
  public putAssignMeteredEvaluations(value: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignMeteredEvaluations[] | cdktf.IResolvable) {
    this._assignMeteredEvaluations.internalValue = value;
  }
  public resetAssignMeteredEvaluations() {
    this._assignMeteredEvaluations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignMeteredEvaluationsInput() {
    return this._assignMeteredEvaluations.internalValue;
  }

  // assign_surveys - computed: false, optional: true, required: false
  private _assignSurveys = new RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignSurveysList(this, "assign_surveys", false);
  public get assignSurveys() {
    return this._assignSurveys;
  }
  public putAssignSurveys(value: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsAssignSurveys[] | cdktf.IResolvable) {
    this._assignSurveys.internalValue = value;
  }
  public resetAssignSurveys() {
    this._assignSurveys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignSurveysInput() {
    return this._assignSurveys.internalValue;
  }

  // initiate_screen_recording - computed: false, optional: true, required: false
  private _initiateScreenRecording = new RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecordingOutputReference(this, "initiate_screen_recording");
  public get initiateScreenRecording() {
    return this._initiateScreenRecording;
  }
  public putInitiateScreenRecording(value: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsInitiateScreenRecording) {
    this._initiateScreenRecording.internalValue = value;
  }
  public resetInitiateScreenRecording() {
    this._initiateScreenRecording.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initiateScreenRecordingInput() {
    return this._initiateScreenRecording.internalValue;
  }

  // integration_export - computed: false, optional: true, required: false
  private _integrationExport = new RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsIntegrationExportOutputReference(this, "integration_export");
  public get integrationExport() {
    return this._integrationExport;
  }
  public putIntegrationExport(value: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsIntegrationExport) {
    this._integrationExport.internalValue = value;
  }
  public resetIntegrationExport() {
    this._integrationExport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationExportInput() {
    return this._integrationExport.internalValue;
  }

  // media_transcriptions - computed: false, optional: true, required: false
  private _mediaTranscriptions = new RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsMediaTranscriptionsList(this, "media_transcriptions", false);
  public get mediaTranscriptions() {
    return this._mediaTranscriptions;
  }
  public putMediaTranscriptions(value: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsMediaTranscriptions[] | cdktf.IResolvable) {
    this._mediaTranscriptions.internalValue = value;
  }
  public resetMediaTranscriptions() {
    this._mediaTranscriptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaTranscriptionsInput() {
    return this._mediaTranscriptions.internalValue;
  }

  // retention_duration - computed: false, optional: true, required: false
  private _retentionDuration = new RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDurationOutputReference(this, "retention_duration");
  public get retentionDuration() {
    return this._retentionDuration;
  }
  public putRetentionDuration(value: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsRetentionDuration) {
    this._retentionDuration.internalValue = value;
  }
  public resetRetentionDuration() {
    this._retentionDuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDurationInput() {
    return this._retentionDuration.internalValue;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditionsTimeAllowedTimeSlots {
  /**
  * Day for this time slot, Monday = 1 ... Sunday = 7
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#day RecordingMediaRetentionPolicy#day}
  */
  readonly day?: number;
  /**
  * start time in xx:xx:xx.xxx format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#start_time RecordingMediaRetentionPolicy#start_time}
  */
  readonly startTime?: string;
  /**
  * stop time in xx:xx:xx.xxx format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#stop_time RecordingMediaRetentionPolicy#stop_time}
  */
  readonly stopTime?: string;
}

export function recordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditionsTimeAllowedTimeSlotsToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditionsTimeAllowedTimeSlots | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.numberToTerraform(struct!.day),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    stop_time: cdktf.stringToTerraform(struct!.stopTime),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditionsTimeAllowedTimeSlotsToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditionsTimeAllowedTimeSlots | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.numberToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stop_time: {
      value: cdktf.stringToHclTerraform(struct!.stopTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditionsTimeAllowedTimeSlotsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditionsTimeAllowedTimeSlots | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._stopTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopTime = this._stopTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditionsTimeAllowedTimeSlots | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._day = undefined;
      this._startTime = undefined;
      this._stopTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._day = value.day;
      this._startTime = value.startTime;
      this._stopTime = value.stopTime;
    }
  }

  // day - computed: false, optional: true, required: false
  private _day?: number; 
  public get day() {
    return this.getNumberAttribute('day');
  }
  public set day(value: number) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // stop_time - computed: false, optional: true, required: false
  private _stopTime?: string; 
  public get stopTime() {
    return this.getStringAttribute('stop_time');
  }
  public set stopTime(value: string) {
    this._stopTime = value;
  }
  public resetStopTime() {
    this._stopTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopTimeInput() {
    return this._stopTime;
  }
}

export class RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditionsTimeAllowedTimeSlotsList extends cdktf.ComplexList {
  public internalValue? : RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditionsTimeAllowedTimeSlots[] | cdktf.IResolvable

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
  public get(index: number): RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditionsTimeAllowedTimeSlotsOutputReference {
    return new RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditionsTimeAllowedTimeSlotsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditionsTimeAllowed {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#empty RecordingMediaRetentionPolicy#empty}
  */
  readonly empty?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#time_zone_id RecordingMediaRetentionPolicy#time_zone_id}
  */
  readonly timeZoneId?: string;
  /**
  * time_slots block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#time_slots RecordingMediaRetentionPolicy#time_slots}
  */
  readonly timeSlots?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditionsTimeAllowedTimeSlots[] | cdktf.IResolvable;
}

export function recordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditionsTimeAllowedToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditionsTimeAllowedOutputReference | RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditionsTimeAllowed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    empty: cdktf.booleanToTerraform(struct!.empty),
    time_zone_id: cdktf.stringToTerraform(struct!.timeZoneId),
    time_slots: cdktf.listMapper(recordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditionsTimeAllowedTimeSlotsToTerraform, true)(struct!.timeSlots),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditionsTimeAllowedToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditionsTimeAllowedOutputReference | RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditionsTimeAllowed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    empty: {
      value: cdktf.booleanToHclTerraform(struct!.empty),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    time_zone_id: {
      value: cdktf.stringToHclTerraform(struct!.timeZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_slots: {
      value: cdktf.listMapperHcl(recordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditionsTimeAllowedTimeSlotsToHclTerraform, true)(struct!.timeSlots),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditionsTimeAllowedTimeSlotsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditionsTimeAllowedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditionsTimeAllowed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._empty !== undefined) {
      hasAnyValues = true;
      internalValueResult.empty = this._empty;
    }
    if (this._timeZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZoneId = this._timeZoneId;
    }
    if (this._timeSlots?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeSlots = this._timeSlots?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditionsTimeAllowed | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._empty = undefined;
      this._timeZoneId = undefined;
      this._timeSlots.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._empty = value.empty;
      this._timeZoneId = value.timeZoneId;
      this._timeSlots.internalValue = value.timeSlots;
    }
  }

  // empty - computed: false, optional: true, required: false
  private _empty?: boolean | cdktf.IResolvable; 
  public get empty() {
    return this.getBooleanAttribute('empty');
  }
  public set empty(value: boolean | cdktf.IResolvable) {
    this._empty = value;
  }
  public resetEmpty() {
    this._empty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyInput() {
    return this._empty;
  }

  // time_zone_id - computed: false, optional: true, required: false
  private _timeZoneId?: string; 
  public get timeZoneId() {
    return this.getStringAttribute('time_zone_id');
  }
  public set timeZoneId(value: string) {
    this._timeZoneId = value;
  }
  public resetTimeZoneId() {
    this._timeZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneIdInput() {
    return this._timeZoneId;
  }

  // time_slots - computed: false, optional: true, required: false
  private _timeSlots = new RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditionsTimeAllowedTimeSlotsList(this, "time_slots", false);
  public get timeSlots() {
    return this._timeSlots;
  }
  public putTimeSlots(value: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditionsTimeAllowedTimeSlots[] | cdktf.IResolvable) {
    this._timeSlots.internalValue = value;
  }
  public resetTimeSlots() {
    this._timeSlots.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSlotsInput() {
    return this._timeSlots.internalValue;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditions {
  /**
  * This condition is to filter out conversation with and without customer participation.Valid values: YES, NO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#customer_participation RecordingMediaRetentionPolicy#customer_participation}
  */
  readonly customerParticipation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#date_ranges RecordingMediaRetentionPolicy#date_ranges}
  */
  readonly dateRanges?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#for_queue_ids RecordingMediaRetentionPolicy#for_queue_ids}
  */
  readonly forQueueIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#for_user_ids RecordingMediaRetentionPolicy#for_user_ids}
  */
  readonly forUserIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#language_ids RecordingMediaRetentionPolicy#language_ids}
  */
  readonly languageIds?: string[];
  /**
  * Teams to match conversations against
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#team_ids RecordingMediaRetentionPolicy#team_ids}
  */
  readonly teamIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#wrapup_code_ids RecordingMediaRetentionPolicy#wrapup_code_ids}
  */
  readonly wrapupCodeIds?: string[];
  /**
  * time_allowed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#time_allowed RecordingMediaRetentionPolicy#time_allowed}
  */
  readonly timeAllowed?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditionsTimeAllowed;
}

export function recordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditionsToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditionsOutputReference | RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customer_participation: cdktf.stringToTerraform(struct!.customerParticipation),
    date_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dateRanges),
    for_queue_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.forQueueIds),
    for_user_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.forUserIds),
    language_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.languageIds),
    team_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.teamIds),
    wrapup_code_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.wrapupCodeIds),
    time_allowed: recordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditionsTimeAllowedToTerraform(struct!.timeAllowed),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditionsToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditionsOutputReference | RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    customer_participation: {
      value: cdktf.stringToHclTerraform(struct!.customerParticipation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dateRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    for_queue_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.forQueueIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    for_user_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.forUserIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    language_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.languageIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    team_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.teamIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    wrapup_code_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.wrapupCodeIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    time_allowed: {
      value: recordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditionsTimeAllowedToHclTerraform(struct!.timeAllowed),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditionsTimeAllowedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customerParticipation !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerParticipation = this._customerParticipation;
    }
    if (this._dateRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateRanges = this._dateRanges;
    }
    if (this._forQueueIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.forQueueIds = this._forQueueIds;
    }
    if (this._forUserIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.forUserIds = this._forUserIds;
    }
    if (this._languageIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.languageIds = this._languageIds;
    }
    if (this._teamIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.teamIds = this._teamIds;
    }
    if (this._wrapupCodeIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.wrapupCodeIds = this._wrapupCodeIds;
    }
    if (this._timeAllowed?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeAllowed = this._timeAllowed?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customerParticipation = undefined;
      this._dateRanges = undefined;
      this._forQueueIds = undefined;
      this._forUserIds = undefined;
      this._languageIds = undefined;
      this._teamIds = undefined;
      this._wrapupCodeIds = undefined;
      this._timeAllowed.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customerParticipation = value.customerParticipation;
      this._dateRanges = value.dateRanges;
      this._forQueueIds = value.forQueueIds;
      this._forUserIds = value.forUserIds;
      this._languageIds = value.languageIds;
      this._teamIds = value.teamIds;
      this._wrapupCodeIds = value.wrapupCodeIds;
      this._timeAllowed.internalValue = value.timeAllowed;
    }
  }

  // customer_participation - computed: false, optional: true, required: false
  private _customerParticipation?: string; 
  public get customerParticipation() {
    return this.getStringAttribute('customer_participation');
  }
  public set customerParticipation(value: string) {
    this._customerParticipation = value;
  }
  public resetCustomerParticipation() {
    this._customerParticipation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerParticipationInput() {
    return this._customerParticipation;
  }

  // date_ranges - computed: false, optional: true, required: false
  private _dateRanges?: string[]; 
  public get dateRanges() {
    return this.getListAttribute('date_ranges');
  }
  public set dateRanges(value: string[]) {
    this._dateRanges = value;
  }
  public resetDateRanges() {
    this._dateRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateRangesInput() {
    return this._dateRanges;
  }

  // for_queue_ids - computed: false, optional: true, required: false
  private _forQueueIds?: string[]; 
  public get forQueueIds() {
    return this.getListAttribute('for_queue_ids');
  }
  public set forQueueIds(value: string[]) {
    this._forQueueIds = value;
  }
  public resetForQueueIds() {
    this._forQueueIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forQueueIdsInput() {
    return this._forQueueIds;
  }

  // for_user_ids - computed: false, optional: true, required: false
  private _forUserIds?: string[]; 
  public get forUserIds() {
    return this.getListAttribute('for_user_ids');
  }
  public set forUserIds(value: string[]) {
    this._forUserIds = value;
  }
  public resetForUserIds() {
    this._forUserIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forUserIdsInput() {
    return this._forUserIds;
  }

  // language_ids - computed: false, optional: true, required: false
  private _languageIds?: string[]; 
  public get languageIds() {
    return this.getListAttribute('language_ids');
  }
  public set languageIds(value: string[]) {
    this._languageIds = value;
  }
  public resetLanguageIds() {
    this._languageIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageIdsInput() {
    return this._languageIds;
  }

  // team_ids - computed: false, optional: true, required: false
  private _teamIds?: string[]; 
  public get teamIds() {
    return cdktf.Fn.tolist(this.getListAttribute('team_ids'));
  }
  public set teamIds(value: string[]) {
    this._teamIds = value;
  }
  public resetTeamIds() {
    this._teamIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdsInput() {
    return this._teamIds;
  }

  // wrapup_code_ids - computed: false, optional: true, required: false
  private _wrapupCodeIds?: string[]; 
  public get wrapupCodeIds() {
    return this.getListAttribute('wrapup_code_ids');
  }
  public set wrapupCodeIds(value: string[]) {
    this._wrapupCodeIds = value;
  }
  public resetWrapupCodeIds() {
    this._wrapupCodeIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wrapupCodeIdsInput() {
    return this._wrapupCodeIds;
  }

  // time_allowed - computed: false, optional: true, required: false
  private _timeAllowed = new RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditionsTimeAllowedOutputReference(this, "time_allowed");
  public get timeAllowed() {
    return this._timeAllowed;
  }
  public putTimeAllowed(value: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditionsTimeAllowed) {
    this._timeAllowed.internalValue = value;
  }
  public resetTimeAllowed() {
    this._timeAllowed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeAllowedInput() {
    return this._timeAllowed.internalValue;
  }
}
export interface RecordingMediaRetentionPolicyMediaPoliciesMessagePolicy {
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#actions RecordingMediaRetentionPolicy#actions}
  */
  readonly actions?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActions;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#conditions RecordingMediaRetentionPolicy#conditions}
  */
  readonly conditions?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditions;
}

export function recordingMediaRetentionPolicyMediaPoliciesMessagePolicyToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyOutputReference | RecordingMediaRetentionPolicyMediaPoliciesMessagePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsToTerraform(struct!.actions),
    conditions: recordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditionsToTerraform(struct!.conditions),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesMessagePolicyToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyOutputReference | RecordingMediaRetentionPolicyMediaPoliciesMessagePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: recordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsToHclTerraform(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsList",
    },
    conditions: {
      value: recordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditionsToHclTerraform(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPoliciesMessagePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actions.internalValue = undefined;
      this._conditions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actions.internalValue = value.actions;
      this._conditions.internalValue = value.conditions;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions = new RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActionsOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }
  public putActions(value: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyActions) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyConditions) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}
export interface RecordingMediaRetentionPolicyMediaPolicies {
  /**
  * call_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#call_policy RecordingMediaRetentionPolicy#call_policy}
  */
  readonly callPolicy?: RecordingMediaRetentionPolicyMediaPoliciesCallPolicy;
  /**
  * chat_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#chat_policy RecordingMediaRetentionPolicy#chat_policy}
  */
  readonly chatPolicy?: RecordingMediaRetentionPolicyMediaPoliciesChatPolicy;
  /**
  * email_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#email_policy RecordingMediaRetentionPolicy#email_policy}
  */
  readonly emailPolicy?: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicy;
  /**
  * message_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#message_policy RecordingMediaRetentionPolicy#message_policy}
  */
  readonly messagePolicy?: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicy;
}

export function recordingMediaRetentionPolicyMediaPoliciesToTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesOutputReference | RecordingMediaRetentionPolicyMediaPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    call_policy: recordingMediaRetentionPolicyMediaPoliciesCallPolicyToTerraform(struct!.callPolicy),
    chat_policy: recordingMediaRetentionPolicyMediaPoliciesChatPolicyToTerraform(struct!.chatPolicy),
    email_policy: recordingMediaRetentionPolicyMediaPoliciesEmailPolicyToTerraform(struct!.emailPolicy),
    message_policy: recordingMediaRetentionPolicyMediaPoliciesMessagePolicyToTerraform(struct!.messagePolicy),
  }
}


export function recordingMediaRetentionPolicyMediaPoliciesToHclTerraform(struct?: RecordingMediaRetentionPolicyMediaPoliciesOutputReference | RecordingMediaRetentionPolicyMediaPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    call_policy: {
      value: recordingMediaRetentionPolicyMediaPoliciesCallPolicyToHclTerraform(struct!.callPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesCallPolicyList",
    },
    chat_policy: {
      value: recordingMediaRetentionPolicyMediaPoliciesChatPolicyToHclTerraform(struct!.chatPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesChatPolicyList",
    },
    email_policy: {
      value: recordingMediaRetentionPolicyMediaPoliciesEmailPolicyToHclTerraform(struct!.emailPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyList",
    },
    message_policy: {
      value: recordingMediaRetentionPolicyMediaPoliciesMessagePolicyToHclTerraform(struct!.messagePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyMediaPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyMediaPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._callPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.callPolicy = this._callPolicy?.internalValue;
    }
    if (this._chatPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chatPolicy = this._chatPolicy?.internalValue;
    }
    if (this._emailPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailPolicy = this._emailPolicy?.internalValue;
    }
    if (this._messagePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.messagePolicy = this._messagePolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyMediaPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._callPolicy.internalValue = undefined;
      this._chatPolicy.internalValue = undefined;
      this._emailPolicy.internalValue = undefined;
      this._messagePolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._callPolicy.internalValue = value.callPolicy;
      this._chatPolicy.internalValue = value.chatPolicy;
      this._emailPolicy.internalValue = value.emailPolicy;
      this._messagePolicy.internalValue = value.messagePolicy;
    }
  }

  // call_policy - computed: false, optional: true, required: false
  private _callPolicy = new RecordingMediaRetentionPolicyMediaPoliciesCallPolicyOutputReference(this, "call_policy");
  public get callPolicy() {
    return this._callPolicy;
  }
  public putCallPolicy(value: RecordingMediaRetentionPolicyMediaPoliciesCallPolicy) {
    this._callPolicy.internalValue = value;
  }
  public resetCallPolicy() {
    this._callPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callPolicyInput() {
    return this._callPolicy.internalValue;
  }

  // chat_policy - computed: false, optional: true, required: false
  private _chatPolicy = new RecordingMediaRetentionPolicyMediaPoliciesChatPolicyOutputReference(this, "chat_policy");
  public get chatPolicy() {
    return this._chatPolicy;
  }
  public putChatPolicy(value: RecordingMediaRetentionPolicyMediaPoliciesChatPolicy) {
    this._chatPolicy.internalValue = value;
  }
  public resetChatPolicy() {
    this._chatPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chatPolicyInput() {
    return this._chatPolicy.internalValue;
  }

  // email_policy - computed: false, optional: true, required: false
  private _emailPolicy = new RecordingMediaRetentionPolicyMediaPoliciesEmailPolicyOutputReference(this, "email_policy");
  public get emailPolicy() {
    return this._emailPolicy;
  }
  public putEmailPolicy(value: RecordingMediaRetentionPolicyMediaPoliciesEmailPolicy) {
    this._emailPolicy.internalValue = value;
  }
  public resetEmailPolicy() {
    this._emailPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailPolicyInput() {
    return this._emailPolicy.internalValue;
  }

  // message_policy - computed: false, optional: true, required: false
  private _messagePolicy = new RecordingMediaRetentionPolicyMediaPoliciesMessagePolicyOutputReference(this, "message_policy");
  public get messagePolicy() {
    return this._messagePolicy;
  }
  public putMessagePolicy(value: RecordingMediaRetentionPolicyMediaPoliciesMessagePolicy) {
    this._messagePolicy.internalValue = value;
  }
  public resetMessagePolicy() {
    this._messagePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagePolicyInput() {
    return this._messagePolicy.internalValue;
  }
}
export interface RecordingMediaRetentionPolicyPolicyErrorsPolicyErrorMessagesUserParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#key RecordingMediaRetentionPolicy#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#value RecordingMediaRetentionPolicy#value}
  */
  readonly value?: string;
}

export function recordingMediaRetentionPolicyPolicyErrorsPolicyErrorMessagesUserParamsToTerraform(struct?: RecordingMediaRetentionPolicyPolicyErrorsPolicyErrorMessagesUserParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function recordingMediaRetentionPolicyPolicyErrorsPolicyErrorMessagesUserParamsToHclTerraform(struct?: RecordingMediaRetentionPolicyPolicyErrorsPolicyErrorMessagesUserParams | cdktf.IResolvable): any {
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

export class RecordingMediaRetentionPolicyPolicyErrorsPolicyErrorMessagesUserParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecordingMediaRetentionPolicyPolicyErrorsPolicyErrorMessagesUserParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyPolicyErrorsPolicyErrorMessagesUserParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
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

export class RecordingMediaRetentionPolicyPolicyErrorsPolicyErrorMessagesUserParamsList extends cdktf.ComplexList {
  public internalValue? : RecordingMediaRetentionPolicyPolicyErrorsPolicyErrorMessagesUserParams[] | cdktf.IResolvable

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
  public get(index: number): RecordingMediaRetentionPolicyPolicyErrorsPolicyErrorMessagesUserParamsOutputReference {
    return new RecordingMediaRetentionPolicyPolicyErrorsPolicyErrorMessagesUserParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecordingMediaRetentionPolicyPolicyErrorsPolicyErrorMessages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#correlation_id RecordingMediaRetentionPolicy#correlation_id}
  */
  readonly correlationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#error_code RecordingMediaRetentionPolicy#error_code}
  */
  readonly errorCode?: string;
  /**
  * Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#insert_date RecordingMediaRetentionPolicy#insert_date}
  */
  readonly insertDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#status_code RecordingMediaRetentionPolicy#status_code}
  */
  readonly statusCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#user_message RecordingMediaRetentionPolicy#user_message}
  */
  readonly userMessage?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#user_params_message RecordingMediaRetentionPolicy#user_params_message}
  */
  readonly userParamsMessage?: string;
  /**
  * user_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#user_params RecordingMediaRetentionPolicy#user_params}
  */
  readonly userParams?: RecordingMediaRetentionPolicyPolicyErrorsPolicyErrorMessagesUserParams[] | cdktf.IResolvable;
}

export function recordingMediaRetentionPolicyPolicyErrorsPolicyErrorMessagesToTerraform(struct?: RecordingMediaRetentionPolicyPolicyErrorsPolicyErrorMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    correlation_id: cdktf.stringToTerraform(struct!.correlationId),
    error_code: cdktf.stringToTerraform(struct!.errorCode),
    insert_date: cdktf.stringToTerraform(struct!.insertDate),
    status_code: cdktf.numberToTerraform(struct!.statusCode),
    user_message: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.userMessage),
    user_params_message: cdktf.stringToTerraform(struct!.userParamsMessage),
    user_params: cdktf.listMapper(recordingMediaRetentionPolicyPolicyErrorsPolicyErrorMessagesUserParamsToTerraform, true)(struct!.userParams),
  }
}


export function recordingMediaRetentionPolicyPolicyErrorsPolicyErrorMessagesToHclTerraform(struct?: RecordingMediaRetentionPolicyPolicyErrorsPolicyErrorMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    correlation_id: {
      value: cdktf.stringToHclTerraform(struct!.correlationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_code: {
      value: cdktf.stringToHclTerraform(struct!.errorCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insert_date: {
      value: cdktf.stringToHclTerraform(struct!.insertDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktf.numberToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_message: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.userMessage),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    user_params_message: {
      value: cdktf.stringToHclTerraform(struct!.userParamsMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_params: {
      value: cdktf.listMapperHcl(recordingMediaRetentionPolicyPolicyErrorsPolicyErrorMessagesUserParamsToHclTerraform, true)(struct!.userParams),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyPolicyErrorsPolicyErrorMessagesUserParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyPolicyErrorsPolicyErrorMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecordingMediaRetentionPolicyPolicyErrorsPolicyErrorMessages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._correlationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.correlationId = this._correlationId;
    }
    if (this._errorCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorCode = this._errorCode;
    }
    if (this._insertDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertDate = this._insertDate;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._userMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.userMessage = this._userMessage;
    }
    if (this._userParamsMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.userParamsMessage = this._userParamsMessage;
    }
    if (this._userParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userParams = this._userParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyPolicyErrorsPolicyErrorMessages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._correlationId = undefined;
      this._errorCode = undefined;
      this._insertDate = undefined;
      this._statusCode = undefined;
      this._userMessage = undefined;
      this._userParamsMessage = undefined;
      this._userParams.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._correlationId = value.correlationId;
      this._errorCode = value.errorCode;
      this._insertDate = value.insertDate;
      this._statusCode = value.statusCode;
      this._userMessage = value.userMessage;
      this._userParamsMessage = value.userParamsMessage;
      this._userParams.internalValue = value.userParams;
    }
  }

  // correlation_id - computed: false, optional: true, required: false
  private _correlationId?: string; 
  public get correlationId() {
    return this.getStringAttribute('correlation_id');
  }
  public set correlationId(value: string) {
    this._correlationId = value;
  }
  public resetCorrelationId() {
    this._correlationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get correlationIdInput() {
    return this._correlationId;
  }

  // error_code - computed: false, optional: true, required: false
  private _errorCode?: string; 
  public get errorCode() {
    return this.getStringAttribute('error_code');
  }
  public set errorCode(value: string) {
    this._errorCode = value;
  }
  public resetErrorCode() {
    this._errorCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorCodeInput() {
    return this._errorCode;
  }

  // insert_date - computed: false, optional: true, required: false
  private _insertDate?: string; 
  public get insertDate() {
    return this.getStringAttribute('insert_date');
  }
  public set insertDate(value: string) {
    this._insertDate = value;
  }
  public resetInsertDate() {
    this._insertDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertDateInput() {
    return this._insertDate;
  }

  // status_code - computed: false, optional: true, required: false
  private _statusCode?: number; 
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }
  public set statusCode(value: number) {
    this._statusCode = value;
  }
  public resetStatusCode() {
    this._statusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }

  // user_message - computed: false, optional: true, required: false
  private _userMessage?: { [key: string]: string }; 
  public get userMessage() {
    return this.getStringMapAttribute('user_message');
  }
  public set userMessage(value: { [key: string]: string }) {
    this._userMessage = value;
  }
  public resetUserMessage() {
    this._userMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userMessageInput() {
    return this._userMessage;
  }

  // user_params_message - computed: false, optional: true, required: false
  private _userParamsMessage?: string; 
  public get userParamsMessage() {
    return this.getStringAttribute('user_params_message');
  }
  public set userParamsMessage(value: string) {
    this._userParamsMessage = value;
  }
  public resetUserParamsMessage() {
    this._userParamsMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userParamsMessageInput() {
    return this._userParamsMessage;
  }

  // user_params - computed: false, optional: true, required: false
  private _userParams = new RecordingMediaRetentionPolicyPolicyErrorsPolicyErrorMessagesUserParamsList(this, "user_params", false);
  public get userParams() {
    return this._userParams;
  }
  public putUserParams(value: RecordingMediaRetentionPolicyPolicyErrorsPolicyErrorMessagesUserParams[] | cdktf.IResolvable) {
    this._userParams.internalValue = value;
  }
  public resetUserParams() {
    this._userParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userParamsInput() {
    return this._userParams.internalValue;
  }
}

export class RecordingMediaRetentionPolicyPolicyErrorsPolicyErrorMessagesList extends cdktf.ComplexList {
  public internalValue? : RecordingMediaRetentionPolicyPolicyErrorsPolicyErrorMessages[] | cdktf.IResolvable

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
  public get(index: number): RecordingMediaRetentionPolicyPolicyErrorsPolicyErrorMessagesOutputReference {
    return new RecordingMediaRetentionPolicyPolicyErrorsPolicyErrorMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecordingMediaRetentionPolicyPolicyErrors {
  /**
  * policy_error_messages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#policy_error_messages RecordingMediaRetentionPolicy#policy_error_messages}
  */
  readonly policyErrorMessages?: RecordingMediaRetentionPolicyPolicyErrorsPolicyErrorMessages[] | cdktf.IResolvable;
}

export function recordingMediaRetentionPolicyPolicyErrorsToTerraform(struct?: RecordingMediaRetentionPolicyPolicyErrorsOutputReference | RecordingMediaRetentionPolicyPolicyErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_error_messages: cdktf.listMapper(recordingMediaRetentionPolicyPolicyErrorsPolicyErrorMessagesToTerraform, true)(struct!.policyErrorMessages),
  }
}


export function recordingMediaRetentionPolicyPolicyErrorsToHclTerraform(struct?: RecordingMediaRetentionPolicyPolicyErrorsOutputReference | RecordingMediaRetentionPolicyPolicyErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy_error_messages: {
      value: cdktf.listMapperHcl(recordingMediaRetentionPolicyPolicyErrorsPolicyErrorMessagesToHclTerraform, true)(struct!.policyErrorMessages),
      isBlock: true,
      type: "list",
      storageClassType: "RecordingMediaRetentionPolicyPolicyErrorsPolicyErrorMessagesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecordingMediaRetentionPolicyPolicyErrorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecordingMediaRetentionPolicyPolicyErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyErrorMessages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyErrorMessages = this._policyErrorMessages?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordingMediaRetentionPolicyPolicyErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policyErrorMessages.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policyErrorMessages.internalValue = value.policyErrorMessages;
    }
  }

  // policy_error_messages - computed: false, optional: true, required: false
  private _policyErrorMessages = new RecordingMediaRetentionPolicyPolicyErrorsPolicyErrorMessagesList(this, "policy_error_messages", false);
  public get policyErrorMessages() {
    return this._policyErrorMessages;
  }
  public putPolicyErrorMessages(value: RecordingMediaRetentionPolicyPolicyErrorsPolicyErrorMessages[] | cdktf.IResolvable) {
    this._policyErrorMessages.internalValue = value;
  }
  public resetPolicyErrorMessages() {
    this._policyErrorMessages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyErrorMessagesInput() {
    return this._policyErrorMessages.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy genesyscloud_recording_media_retention_policy}
*/
export class RecordingMediaRetentionPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_recording_media_retention_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RecordingMediaRetentionPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RecordingMediaRetentionPolicy to import
  * @param importFromId The id of the existing RecordingMediaRetentionPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RecordingMediaRetentionPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_recording_media_retention_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/recording_media_retention_policy genesyscloud_recording_media_retention_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RecordingMediaRetentionPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: RecordingMediaRetentionPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_recording_media_retention_policy',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.73.0',
        providerVersionConstraint: '1.73.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._order = config.order;
    this._actions.internalValue = config.actions;
    this._conditions.internalValue = config.conditions;
    this._mediaPolicies.internalValue = config.mediaPolicies;
    this._policyErrors.internalValue = config.policyErrors;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // order - computed: false, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // actions - computed: false, optional: true, required: false
  private _actions = new RecordingMediaRetentionPolicyActionsOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }
  public putActions(value: RecordingMediaRetentionPolicyActions) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new RecordingMediaRetentionPolicyConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: RecordingMediaRetentionPolicyConditions) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // media_policies - computed: false, optional: true, required: false
  private _mediaPolicies = new RecordingMediaRetentionPolicyMediaPoliciesOutputReference(this, "media_policies");
  public get mediaPolicies() {
    return this._mediaPolicies;
  }
  public putMediaPolicies(value: RecordingMediaRetentionPolicyMediaPolicies) {
    this._mediaPolicies.internalValue = value;
  }
  public resetMediaPolicies() {
    this._mediaPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaPoliciesInput() {
    return this._mediaPolicies.internalValue;
  }

  // policy_errors - computed: false, optional: true, required: false
  private _policyErrors = new RecordingMediaRetentionPolicyPolicyErrorsOutputReference(this, "policy_errors");
  public get policyErrors() {
    return this._policyErrors;
  }
  public putPolicyErrors(value: RecordingMediaRetentionPolicyPolicyErrors) {
    this._policyErrors.internalValue = value;
  }
  public resetPolicyErrors() {
    this._policyErrors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyErrorsInput() {
    return this._policyErrors.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      order: cdktf.numberToTerraform(this._order),
      actions: recordingMediaRetentionPolicyActionsToTerraform(this._actions.internalValue),
      conditions: recordingMediaRetentionPolicyConditionsToTerraform(this._conditions.internalValue),
      media_policies: recordingMediaRetentionPolicyMediaPoliciesToTerraform(this._mediaPolicies.internalValue),
      policy_errors: recordingMediaRetentionPolicyPolicyErrorsToTerraform(this._policyErrors.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      order: {
        value: cdktf.numberToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      actions: {
        value: recordingMediaRetentionPolicyActionsToHclTerraform(this._actions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RecordingMediaRetentionPolicyActionsList",
      },
      conditions: {
        value: recordingMediaRetentionPolicyConditionsToHclTerraform(this._conditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RecordingMediaRetentionPolicyConditionsList",
      },
      media_policies: {
        value: recordingMediaRetentionPolicyMediaPoliciesToHclTerraform(this._mediaPolicies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RecordingMediaRetentionPolicyMediaPoliciesList",
      },
      policy_errors: {
        value: recordingMediaRetentionPolicyPolicyErrorsToHclTerraform(this._policyErrors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RecordingMediaRetentionPolicyPolicyErrorsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
