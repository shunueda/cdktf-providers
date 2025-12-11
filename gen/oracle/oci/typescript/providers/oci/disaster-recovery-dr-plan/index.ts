// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/disaster_recovery_dr_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DisasterRecoveryDrPlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/disaster_recovery_dr_plan#defined_tags DisasterRecoveryDrPlan#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/disaster_recovery_dr_plan#display_name DisasterRecoveryDrPlan#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/disaster_recovery_dr_plan#dr_protection_group_id DisasterRecoveryDrPlan#dr_protection_group_id}
  */
  readonly drProtectionGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/disaster_recovery_dr_plan#freeform_tags DisasterRecoveryDrPlan#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/disaster_recovery_dr_plan#id DisasterRecoveryDrPlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/disaster_recovery_dr_plan#refresh_trigger DisasterRecoveryDrPlan#refresh_trigger}
  */
  readonly refreshTrigger?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/disaster_recovery_dr_plan#source_plan_id DisasterRecoveryDrPlan#source_plan_id}
  */
  readonly sourcePlanId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/disaster_recovery_dr_plan#type DisasterRecoveryDrPlan#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/disaster_recovery_dr_plan#verify_trigger DisasterRecoveryDrPlan#verify_trigger}
  */
  readonly verifyTrigger?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/disaster_recovery_dr_plan#timeouts DisasterRecoveryDrPlan#timeouts}
  */
  readonly timeouts?: DisasterRecoveryDrPlanTimeouts;
}
export interface DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation {
}

export function disasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationToTerraform(struct?: DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function disasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationToHclTerraform(struct?: DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }
}

export class DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList extends cdktf.ComplexList {

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
  public get(index: number): DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference {
    return new DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStep {
}

export function disasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepToTerraform(struct?: DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStep): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function disasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepToHclTerraform(struct?: DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStep): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStep | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStep | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // function_id - computed: true, optional: false, required: false
  public get functionId() {
    return this.getStringAttribute('function_id');
  }

  // function_region - computed: true, optional: false, required: false
  public get functionRegion() {
    return this.getStringAttribute('function_region');
  }

  // object_storage_script_location - computed: true, optional: false, required: false
  private _objectStorageScriptLocation = new DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList(this, "object_storage_script_location", false);
  public get objectStorageScriptLocation() {
    return this._objectStorageScriptLocation;
  }

  // request_body - computed: true, optional: false, required: false
  public get requestBody() {
    return this.getStringAttribute('request_body');
  }

  // run_as_user - computed: true, optional: false, required: false
  public get runAsUser() {
    return this.getStringAttribute('run_as_user');
  }

  // run_on_instance_id - computed: true, optional: false, required: false
  public get runOnInstanceId() {
    return this.getStringAttribute('run_on_instance_id');
  }

  // run_on_instance_region - computed: true, optional: false, required: false
  public get runOnInstanceRegion() {
    return this.getStringAttribute('run_on_instance_region');
  }

  // script_command - computed: true, optional: false, required: false
  public get scriptCommand() {
    return this.getStringAttribute('script_command');
  }

  // step_type - computed: true, optional: false, required: false
  public get stepType() {
    return this.getStringAttribute('step_type');
  }
}

export class DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList extends cdktf.ComplexList {

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
  public get(index: number): DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference {
    return new DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DisasterRecoveryDrPlanPlanGroupsSteps {
}

export function disasterRecoveryDrPlanPlanGroupsStepsToTerraform(struct?: DisasterRecoveryDrPlanPlanGroupsSteps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function disasterRecoveryDrPlanPlanGroupsStepsToHclTerraform(struct?: DisasterRecoveryDrPlanPlanGroupsSteps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DisasterRecoveryDrPlanPlanGroupsStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DisasterRecoveryDrPlanPlanGroupsSteps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryDrPlanPlanGroupsSteps | undefined) {
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

  // error_mode - computed: true, optional: false, required: false
  public get errorMode() {
    return this.getStringAttribute('error_mode');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // member_id - computed: true, optional: false, required: false
  public get memberId() {
    return this.getStringAttribute('member_id');
  }

  // refresh_status - computed: true, optional: false, required: false
  public get refreshStatus() {
    return this.getStringAttribute('refresh_status');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // type_display_name - computed: true, optional: false, required: false
  public get typeDisplayName() {
    return this.getStringAttribute('type_display_name');
  }

  // user_defined_step - computed: true, optional: false, required: false
  private _userDefinedStep = new DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList(this, "user_defined_step", false);
  public get userDefinedStep() {
    return this._userDefinedStep;
  }
}

export class DisasterRecoveryDrPlanPlanGroupsStepsList extends cdktf.ComplexList {

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
  public get(index: number): DisasterRecoveryDrPlanPlanGroupsStepsOutputReference {
    return new DisasterRecoveryDrPlanPlanGroupsStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DisasterRecoveryDrPlanPlanGroups {
}

export function disasterRecoveryDrPlanPlanGroupsToTerraform(struct?: DisasterRecoveryDrPlanPlanGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function disasterRecoveryDrPlanPlanGroupsToHclTerraform(struct?: DisasterRecoveryDrPlanPlanGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DisasterRecoveryDrPlanPlanGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DisasterRecoveryDrPlanPlanGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryDrPlanPlanGroups | undefined) {
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

  // is_pause_enabled - computed: true, optional: false, required: false
  public get isPauseEnabled() {
    return this.getBooleanAttribute('is_pause_enabled');
  }

  // refresh_status - computed: true, optional: false, required: false
  public get refreshStatus() {
    return this.getStringAttribute('refresh_status');
  }

  // steps - computed: true, optional: false, required: false
  private _steps = new DisasterRecoveryDrPlanPlanGroupsStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DisasterRecoveryDrPlanPlanGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DisasterRecoveryDrPlanPlanGroupsOutputReference {
    return new DisasterRecoveryDrPlanPlanGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DisasterRecoveryDrPlanTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/disaster_recovery_dr_plan#create DisasterRecoveryDrPlan#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/disaster_recovery_dr_plan#delete DisasterRecoveryDrPlan#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/disaster_recovery_dr_plan#update DisasterRecoveryDrPlan#update}
  */
  readonly update?: string;
}

export function disasterRecoveryDrPlanTimeoutsToTerraform(struct?: DisasterRecoveryDrPlanTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function disasterRecoveryDrPlanTimeoutsToHclTerraform(struct?: DisasterRecoveryDrPlanTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryDrPlanTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DisasterRecoveryDrPlanTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryDrPlanTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/disaster_recovery_dr_plan oci_disaster_recovery_dr_plan}
*/
export class DisasterRecoveryDrPlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_disaster_recovery_dr_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DisasterRecoveryDrPlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DisasterRecoveryDrPlan to import
  * @param importFromId The id of the existing DisasterRecoveryDrPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/disaster_recovery_dr_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DisasterRecoveryDrPlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_disaster_recovery_dr_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/disaster_recovery_dr_plan oci_disaster_recovery_dr_plan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DisasterRecoveryDrPlanConfig
  */
  public constructor(scope: Construct, id: string, config: DisasterRecoveryDrPlanConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_disaster_recovery_dr_plan',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._drProtectionGroupId = config.drProtectionGroupId;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._refreshTrigger = config.refreshTrigger;
    this._sourcePlanId = config.sourcePlanId;
    this._type = config.type;
    this._verifyTrigger = config.verifyTrigger;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // dr_protection_group_id - computed: false, optional: false, required: true
  private _drProtectionGroupId?: string; 
  public get drProtectionGroupId() {
    return this.getStringAttribute('dr_protection_group_id');
  }
  public set drProtectionGroupId(value: string) {
    this._drProtectionGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get drProtectionGroupIdInput() {
    return this._drProtectionGroupId;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // life_cycle_details - computed: true, optional: false, required: false
  public get lifeCycleDetails() {
    return this.getStringAttribute('life_cycle_details');
  }

  // lifecycle_sub_state - computed: true, optional: false, required: false
  public get lifecycleSubState() {
    return this.getStringAttribute('lifecycle_sub_state');
  }

  // peer_dr_protection_group_id - computed: true, optional: false, required: false
  public get peerDrProtectionGroupId() {
    return this.getStringAttribute('peer_dr_protection_group_id');
  }

  // peer_region - computed: true, optional: false, required: false
  public get peerRegion() {
    return this.getStringAttribute('peer_region');
  }

  // plan_groups - computed: true, optional: false, required: false
  private _planGroups = new DisasterRecoveryDrPlanPlanGroupsList(this, "plan_groups", false);
  public get planGroups() {
    return this._planGroups;
  }

  // refresh_trigger - computed: false, optional: true, required: false
  private _refreshTrigger?: number; 
  public get refreshTrigger() {
    return this.getNumberAttribute('refresh_trigger');
  }
  public set refreshTrigger(value: number) {
    this._refreshTrigger = value;
  }
  public resetRefreshTrigger() {
    this._refreshTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTriggerInput() {
    return this._refreshTrigger;
  }

  // source_plan_id - computed: true, optional: true, required: false
  private _sourcePlanId?: string; 
  public get sourcePlanId() {
    return this.getStringAttribute('source_plan_id');
  }
  public set sourcePlanId(value: string) {
    this._sourcePlanId = value;
  }
  public resetSourcePlanId() {
    this._sourcePlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePlanIdInput() {
    return this._sourcePlanId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
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

  // verify_trigger - computed: false, optional: true, required: false
  private _verifyTrigger?: number; 
  public get verifyTrigger() {
    return this.getNumberAttribute('verify_trigger');
  }
  public set verifyTrigger(value: number) {
    this._verifyTrigger = value;
  }
  public resetVerifyTrigger() {
    this._verifyTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyTriggerInput() {
    return this._verifyTrigger;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DisasterRecoveryDrPlanTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DisasterRecoveryDrPlanTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      dr_protection_group_id: cdktf.stringToTerraform(this._drProtectionGroupId),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      refresh_trigger: cdktf.numberToTerraform(this._refreshTrigger),
      source_plan_id: cdktf.stringToTerraform(this._sourcePlanId),
      type: cdktf.stringToTerraform(this._type),
      verify_trigger: cdktf.numberToTerraform(this._verifyTrigger),
      timeouts: disasterRecoveryDrPlanTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dr_protection_group_id: {
        value: cdktf.stringToHclTerraform(this._drProtectionGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refresh_trigger: {
        value: cdktf.numberToHclTerraform(this._refreshTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_plan_id: {
        value: cdktf.stringToHclTerraform(this._sourcePlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verify_trigger: {
        value: cdktf.numberToHclTerraform(this._verifyTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: disasterRecoveryDrPlanTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DisasterRecoveryDrPlanTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
