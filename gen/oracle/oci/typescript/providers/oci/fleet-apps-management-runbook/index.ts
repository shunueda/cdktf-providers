// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FleetAppsManagementRunbookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#compartment_id FleetAppsManagementRunbook#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#defined_tags FleetAppsManagementRunbook#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#description FleetAppsManagementRunbook#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#display_name FleetAppsManagementRunbook#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#estimated_time FleetAppsManagementRunbook#estimated_time}
  */
  readonly estimatedTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#freeform_tags FleetAppsManagementRunbook#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#id FleetAppsManagementRunbook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#is_default FleetAppsManagementRunbook#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#is_sudo_access_needed FleetAppsManagementRunbook#is_sudo_access_needed}
  */
  readonly isSudoAccessNeeded?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#operation FleetAppsManagementRunbook#operation}
  */
  readonly operation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#os_type FleetAppsManagementRunbook#os_type}
  */
  readonly osType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#platform FleetAppsManagementRunbook#platform}
  */
  readonly platform?: string;
  /**
  * runbook_version block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#runbook_version FleetAppsManagementRunbook#runbook_version}
  */
  readonly runbookVersion: FleetAppsManagementRunbookRunbookVersion;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#timeouts FleetAppsManagementRunbook#timeouts}
  */
  readonly timeouts?: FleetAppsManagementRunbookTimeouts;
}
export interface FleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetailsWorkflowSteps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#group_name FleetAppsManagementRunbook#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#step_name FleetAppsManagementRunbook#step_name}
  */
  readonly stepName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#steps FleetAppsManagementRunbook#steps}
  */
  readonly steps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#type FleetAppsManagementRunbook#type}
  */
  readonly type: string;
}

export function fleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetailsWorkflowStepsToTerraform(struct?: FleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetailsWorkflowSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_name: cdktf.stringToTerraform(struct!.groupName),
    step_name: cdktf.stringToTerraform(struct!.stepName),
    steps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.steps),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function fleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetailsWorkflowStepsToHclTerraform(struct?: FleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetailsWorkflowSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    step_name: {
      value: cdktf.stringToHclTerraform(struct!.stepName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    steps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.steps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class FleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetailsWorkflowStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetailsWorkflowSteps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._stepName !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepName = this._stepName;
    }
    if (this._steps !== undefined) {
      hasAnyValues = true;
      internalValueResult.steps = this._steps;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetailsWorkflowSteps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupName = undefined;
      this._stepName = undefined;
      this._steps = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupName = value.groupName;
      this._stepName = value.stepName;
      this._steps = value.steps;
      this._type = value.type;
    }
  }

  // group_name - computed: true, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // step_name - computed: true, optional: true, required: false
  private _stepName?: string; 
  public get stepName() {
    return this.getStringAttribute('step_name');
  }
  public set stepName(value: string) {
    this._stepName = value;
  }
  public resetStepName() {
    this._stepName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepNameInput() {
    return this._stepName;
  }

  // steps - computed: true, optional: true, required: false
  private _steps?: string[]; 
  public get steps() {
    return this.getListAttribute('steps');
  }
  public set steps(value: string[]) {
    this._steps = value;
  }
  public resetSteps() {
    this._steps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps;
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

export class FleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetailsWorkflowStepsList extends cdktf.ComplexList {
  public internalValue? : FleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetailsWorkflowSteps[] | cdktf.IResolvable

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
  public get(index: number): FleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetailsWorkflowStepsOutputReference {
    return new FleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetailsWorkflowStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetailsWorkflow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#group_name FleetAppsManagementRunbook#group_name}
  */
  readonly groupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#type FleetAppsManagementRunbook#type}
  */
  readonly type: string;
  /**
  * steps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#steps FleetAppsManagementRunbook#steps}
  */
  readonly steps: FleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetailsWorkflowSteps[] | cdktf.IResolvable;
}

export function fleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetailsWorkflowToTerraform(struct?: FleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetailsWorkflow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_name: cdktf.stringToTerraform(struct!.groupName),
    type: cdktf.stringToTerraform(struct!.type),
    steps: cdktf.listMapper(fleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetailsWorkflowStepsToTerraform, true)(struct!.steps),
  }
}


export function fleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetailsWorkflowToHclTerraform(struct?: FleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetailsWorkflow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
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
    steps: {
      value: cdktf.listMapperHcl(fleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetailsWorkflowStepsToHclTerraform, true)(struct!.steps),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetailsWorkflowStepsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetailsWorkflowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetailsWorkflow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._steps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.steps = this._steps?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetailsWorkflow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupName = undefined;
      this._type = undefined;
      this._steps.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupName = value.groupName;
      this._type = value.type;
      this._steps.internalValue = value.steps;
    }
  }

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
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

  // steps - computed: false, optional: false, required: true
  private _steps = new FleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetailsWorkflowStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }
  public putSteps(value: FleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetailsWorkflowSteps[] | cdktf.IResolvable) {
    this._steps.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps.internalValue;
  }
}

export class FleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetailsWorkflowList extends cdktf.ComplexList {
  public internalValue? : FleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetailsWorkflow[] | cdktf.IResolvable

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
  public get(index: number): FleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetailsWorkflowOutputReference {
    return new FleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetailsWorkflowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetails {
  /**
  * workflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#workflow FleetAppsManagementRunbook#workflow}
  */
  readonly workflow: FleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetailsWorkflow[] | cdktf.IResolvable;
}

export function fleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetailsToTerraform(struct?: FleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetailsOutputReference | FleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workflow: cdktf.listMapper(fleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetailsWorkflowToTerraform, true)(struct!.workflow),
  }
}


export function fleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetailsToHclTerraform(struct?: FleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetailsOutputReference | FleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    workflow: {
      value: cdktf.listMapperHcl(fleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetailsWorkflowToHclTerraform, true)(struct!.workflow),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetailsWorkflowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workflow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflow = this._workflow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._workflow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._workflow.internalValue = value.workflow;
    }
  }

  // workflow - computed: false, optional: false, required: true
  private _workflow = new FleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetailsWorkflowList(this, "workflow", false);
  public get workflow() {
    return this._workflow;
  }
  public putWorkflow(value: FleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetailsWorkflow[] | cdktf.IResolvable) {
    this._workflow.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowInput() {
    return this._workflow.internalValue;
  }
}
export interface FleetAppsManagementRunbookRunbookVersionGroupsPropertiesNotificationPreferences {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#should_notify_on_pause FleetAppsManagementRunbook#should_notify_on_pause}
  */
  readonly shouldNotifyOnPause?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#should_notify_on_task_failure FleetAppsManagementRunbook#should_notify_on_task_failure}
  */
  readonly shouldNotifyOnTaskFailure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#should_notify_on_task_success FleetAppsManagementRunbook#should_notify_on_task_success}
  */
  readonly shouldNotifyOnTaskSuccess?: boolean | cdktf.IResolvable;
}

export function fleetAppsManagementRunbookRunbookVersionGroupsPropertiesNotificationPreferencesToTerraform(struct?: FleetAppsManagementRunbookRunbookVersionGroupsPropertiesNotificationPreferencesOutputReference | FleetAppsManagementRunbookRunbookVersionGroupsPropertiesNotificationPreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    should_notify_on_pause: cdktf.booleanToTerraform(struct!.shouldNotifyOnPause),
    should_notify_on_task_failure: cdktf.booleanToTerraform(struct!.shouldNotifyOnTaskFailure),
    should_notify_on_task_success: cdktf.booleanToTerraform(struct!.shouldNotifyOnTaskSuccess),
  }
}


export function fleetAppsManagementRunbookRunbookVersionGroupsPropertiesNotificationPreferencesToHclTerraform(struct?: FleetAppsManagementRunbookRunbookVersionGroupsPropertiesNotificationPreferencesOutputReference | FleetAppsManagementRunbookRunbookVersionGroupsPropertiesNotificationPreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    should_notify_on_pause: {
      value: cdktf.booleanToHclTerraform(struct!.shouldNotifyOnPause),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    should_notify_on_task_failure: {
      value: cdktf.booleanToHclTerraform(struct!.shouldNotifyOnTaskFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    should_notify_on_task_success: {
      value: cdktf.booleanToHclTerraform(struct!.shouldNotifyOnTaskSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementRunbookRunbookVersionGroupsPropertiesNotificationPreferencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementRunbookRunbookVersionGroupsPropertiesNotificationPreferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shouldNotifyOnPause !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldNotifyOnPause = this._shouldNotifyOnPause;
    }
    if (this._shouldNotifyOnTaskFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldNotifyOnTaskFailure = this._shouldNotifyOnTaskFailure;
    }
    if (this._shouldNotifyOnTaskSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldNotifyOnTaskSuccess = this._shouldNotifyOnTaskSuccess;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementRunbookRunbookVersionGroupsPropertiesNotificationPreferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._shouldNotifyOnPause = undefined;
      this._shouldNotifyOnTaskFailure = undefined;
      this._shouldNotifyOnTaskSuccess = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._shouldNotifyOnPause = value.shouldNotifyOnPause;
      this._shouldNotifyOnTaskFailure = value.shouldNotifyOnTaskFailure;
      this._shouldNotifyOnTaskSuccess = value.shouldNotifyOnTaskSuccess;
    }
  }

  // should_notify_on_pause - computed: true, optional: true, required: false
  private _shouldNotifyOnPause?: boolean | cdktf.IResolvable; 
  public get shouldNotifyOnPause() {
    return this.getBooleanAttribute('should_notify_on_pause');
  }
  public set shouldNotifyOnPause(value: boolean | cdktf.IResolvable) {
    this._shouldNotifyOnPause = value;
  }
  public resetShouldNotifyOnPause() {
    this._shouldNotifyOnPause = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldNotifyOnPauseInput() {
    return this._shouldNotifyOnPause;
  }

  // should_notify_on_task_failure - computed: true, optional: true, required: false
  private _shouldNotifyOnTaskFailure?: boolean | cdktf.IResolvable; 
  public get shouldNotifyOnTaskFailure() {
    return this.getBooleanAttribute('should_notify_on_task_failure');
  }
  public set shouldNotifyOnTaskFailure(value: boolean | cdktf.IResolvable) {
    this._shouldNotifyOnTaskFailure = value;
  }
  public resetShouldNotifyOnTaskFailure() {
    this._shouldNotifyOnTaskFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldNotifyOnTaskFailureInput() {
    return this._shouldNotifyOnTaskFailure;
  }

  // should_notify_on_task_success - computed: true, optional: true, required: false
  private _shouldNotifyOnTaskSuccess?: boolean | cdktf.IResolvable; 
  public get shouldNotifyOnTaskSuccess() {
    return this.getBooleanAttribute('should_notify_on_task_success');
  }
  public set shouldNotifyOnTaskSuccess(value: boolean | cdktf.IResolvable) {
    this._shouldNotifyOnTaskSuccess = value;
  }
  public resetShouldNotifyOnTaskSuccess() {
    this._shouldNotifyOnTaskSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldNotifyOnTaskSuccessInput() {
    return this._shouldNotifyOnTaskSuccess;
  }
}
export interface FleetAppsManagementRunbookRunbookVersionGroupsPropertiesPauseDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#duration_in_minutes FleetAppsManagementRunbook#duration_in_minutes}
  */
  readonly durationInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#kind FleetAppsManagementRunbook#kind}
  */
  readonly kind: string;
}

export function fleetAppsManagementRunbookRunbookVersionGroupsPropertiesPauseDetailsToTerraform(struct?: FleetAppsManagementRunbookRunbookVersionGroupsPropertiesPauseDetailsOutputReference | FleetAppsManagementRunbookRunbookVersionGroupsPropertiesPauseDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration_in_minutes: cdktf.numberToTerraform(struct!.durationInMinutes),
    kind: cdktf.stringToTerraform(struct!.kind),
  }
}


export function fleetAppsManagementRunbookRunbookVersionGroupsPropertiesPauseDetailsToHclTerraform(struct?: FleetAppsManagementRunbookRunbookVersionGroupsPropertiesPauseDetailsOutputReference | FleetAppsManagementRunbookRunbookVersionGroupsPropertiesPauseDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.durationInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementRunbookRunbookVersionGroupsPropertiesPauseDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementRunbookRunbookVersionGroupsPropertiesPauseDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._durationInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationInMinutes = this._durationInMinutes;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementRunbookRunbookVersionGroupsPropertiesPauseDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._durationInMinutes = undefined;
      this._kind = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._durationInMinutes = value.durationInMinutes;
      this._kind = value.kind;
    }
  }

  // duration_in_minutes - computed: true, optional: true, required: false
  private _durationInMinutes?: number; 
  public get durationInMinutes() {
    return this.getNumberAttribute('duration_in_minutes');
  }
  public set durationInMinutes(value: number) {
    this._durationInMinutes = value;
  }
  public resetDurationInMinutes() {
    this._durationInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInMinutesInput() {
    return this._durationInMinutes;
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
}
export interface FleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#output_variable_name FleetAppsManagementRunbook#output_variable_name}
  */
  readonly outputVariableName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#step_name FleetAppsManagementRunbook#step_name}
  */
  readonly stepName?: string;
}

export function fleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsToTerraform(struct?: FleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsOutputReference | FleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    output_variable_name: cdktf.stringToTerraform(struct!.outputVariableName),
    step_name: cdktf.stringToTerraform(struct!.stepName),
  }
}


export function fleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsToHclTerraform(struct?: FleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsOutputReference | FleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    output_variable_name: {
      value: cdktf.stringToHclTerraform(struct!.outputVariableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    step_name: {
      value: cdktf.stringToHclTerraform(struct!.stepName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outputVariableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputVariableName = this._outputVariableName;
    }
    if (this._stepName !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepName = this._stepName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._outputVariableName = undefined;
      this._stepName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._outputVariableName = value.outputVariableName;
      this._stepName = value.stepName;
    }
  }

  // output_variable_name - computed: true, optional: true, required: false
  private _outputVariableName?: string; 
  public get outputVariableName() {
    return this.getStringAttribute('output_variable_name');
  }
  public set outputVariableName(value: string) {
    this._outputVariableName = value;
  }
  public resetOutputVariableName() {
    this._outputVariableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputVariableNameInput() {
    return this._outputVariableName;
  }

  // step_name - computed: true, optional: true, required: false
  private _stepName?: string; 
  public get stepName() {
    return this.getStringAttribute('step_name');
  }
  public set stepName(value: string) {
    this._stepName = value;
  }
  public resetStepName() {
    this._stepName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepNameInput() {
    return this._stepName;
  }
}
export interface FleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#resource_id FleetAppsManagementRunbook#resource_id}
  */
  readonly resourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#resource_type FleetAppsManagementRunbook#resource_type}
  */
  readonly resourceType?: string;
  /**
  * output_variable_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#output_variable_details FleetAppsManagementRunbook#output_variable_details}
  */
  readonly outputVariableDetails?: FleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetails;
}

export function fleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsToTerraform(struct?: FleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    output_variable_details: fleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsToTerraform(struct!.outputVariableDetails),
  }
}


export function fleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsToHclTerraform(struct?: FleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_variable_details: {
      value: fleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsToHclTerraform(struct!.outputVariableDetails),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._outputVariableDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputVariableDetails = this._outputVariableDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceId = undefined;
      this._resourceType = undefined;
      this._outputVariableDetails.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceId = value.resourceId;
      this._resourceType = value.resourceType;
      this._outputVariableDetails.internalValue = value.outputVariableDetails;
    }
  }

  // resource_id - computed: true, optional: true, required: false
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_type - computed: true, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // output_variable_details - computed: false, optional: true, required: false
  private _outputVariableDetails = new FleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsOutputReference(this, "output_variable_details");
  public get outputVariableDetails() {
    return this._outputVariableDetails;
  }
  public putOutputVariableDetails(value: FleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetails) {
    this._outputVariableDetails.internalValue = value;
  }
  public resetOutputVariableDetails() {
    this._outputVariableDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputVariableDetailsInput() {
    return this._outputVariableDetails.internalValue;
  }
}

export class FleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsList extends cdktf.ComplexList {
  public internalValue? : FleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetails[] | cdktf.IResolvable

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
  public get(index: number): FleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputReference {
    return new FleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#condition FleetAppsManagementRunbook#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#host FleetAppsManagementRunbook#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#kind FleetAppsManagementRunbook#kind}
  */
  readonly kind: string;
  /**
  * previous_task_instance_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#previous_task_instance_details FleetAppsManagementRunbook#previous_task_instance_details}
  */
  readonly previousTaskInstanceDetails?: FleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetails[] | cdktf.IResolvable;
}

export function fleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOnToTerraform(struct?: FleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOnOutputReference | FleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    host: cdktf.stringToTerraform(struct!.host),
    kind: cdktf.stringToTerraform(struct!.kind),
    previous_task_instance_details: cdktf.listMapper(fleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsToTerraform, true)(struct!.previousTaskInstanceDetails),
  }
}


export function fleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOnToHclTerraform(struct?: FleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOnOutputReference | FleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
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
    previous_task_instance_details: {
      value: cdktf.listMapperHcl(fleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsToHclTerraform, true)(struct!.previousTaskInstanceDetails),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._previousTaskInstanceDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.previousTaskInstanceDetails = this._previousTaskInstanceDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._condition = undefined;
      this._host = undefined;
      this._kind = undefined;
      this._previousTaskInstanceDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._condition = value.condition;
      this._host = value.host;
      this._kind = value.kind;
      this._previousTaskInstanceDetails.internalValue = value.previousTaskInstanceDetails;
    }
  }

  // condition - computed: true, optional: true, required: false
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

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // previous_task_instance_details - computed: false, optional: true, required: false
  private _previousTaskInstanceDetails = new FleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsList(this, "previous_task_instance_details", false);
  public get previousTaskInstanceDetails() {
    return this._previousTaskInstanceDetails;
  }
  public putPreviousTaskInstanceDetails(value: FleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetails[] | cdktf.IResolvable) {
    this._previousTaskInstanceDetails.internalValue = value;
  }
  public resetPreviousTaskInstanceDetails() {
    this._previousTaskInstanceDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previousTaskInstanceDetailsInput() {
    return this._previousTaskInstanceDetails.internalValue;
  }
}
export interface FleetAppsManagementRunbookRunbookVersionGroupsProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#action_on_failure FleetAppsManagementRunbook#action_on_failure}
  */
  readonly actionOnFailure: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#pre_condition FleetAppsManagementRunbook#pre_condition}
  */
  readonly preCondition?: string;
  /**
  * notification_preferences block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#notification_preferences FleetAppsManagementRunbook#notification_preferences}
  */
  readonly notificationPreferences?: FleetAppsManagementRunbookRunbookVersionGroupsPropertiesNotificationPreferences;
  /**
  * pause_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#pause_details FleetAppsManagementRunbook#pause_details}
  */
  readonly pauseDetails?: FleetAppsManagementRunbookRunbookVersionGroupsPropertiesPauseDetails;
  /**
  * run_on block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#run_on FleetAppsManagementRunbook#run_on}
  */
  readonly runOn?: FleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOn;
}

export function fleetAppsManagementRunbookRunbookVersionGroupsPropertiesToTerraform(struct?: FleetAppsManagementRunbookRunbookVersionGroupsPropertiesOutputReference | FleetAppsManagementRunbookRunbookVersionGroupsProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_on_failure: cdktf.stringToTerraform(struct!.actionOnFailure),
    pre_condition: cdktf.stringToTerraform(struct!.preCondition),
    notification_preferences: fleetAppsManagementRunbookRunbookVersionGroupsPropertiesNotificationPreferencesToTerraform(struct!.notificationPreferences),
    pause_details: fleetAppsManagementRunbookRunbookVersionGroupsPropertiesPauseDetailsToTerraform(struct!.pauseDetails),
    run_on: fleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOnToTerraform(struct!.runOn),
  }
}


export function fleetAppsManagementRunbookRunbookVersionGroupsPropertiesToHclTerraform(struct?: FleetAppsManagementRunbookRunbookVersionGroupsPropertiesOutputReference | FleetAppsManagementRunbookRunbookVersionGroupsProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_on_failure: {
      value: cdktf.stringToHclTerraform(struct!.actionOnFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_condition: {
      value: cdktf.stringToHclTerraform(struct!.preCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notification_preferences: {
      value: fleetAppsManagementRunbookRunbookVersionGroupsPropertiesNotificationPreferencesToHclTerraform(struct!.notificationPreferences),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookRunbookVersionGroupsPropertiesNotificationPreferencesList",
    },
    pause_details: {
      value: fleetAppsManagementRunbookRunbookVersionGroupsPropertiesPauseDetailsToHclTerraform(struct!.pauseDetails),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookRunbookVersionGroupsPropertiesPauseDetailsList",
    },
    run_on: {
      value: fleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOnToHclTerraform(struct!.runOn),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOnList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementRunbookRunbookVersionGroupsPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementRunbookRunbookVersionGroupsProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionOnFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionOnFailure = this._actionOnFailure;
    }
    if (this._preCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.preCondition = this._preCondition;
    }
    if (this._notificationPreferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationPreferences = this._notificationPreferences?.internalValue;
    }
    if (this._pauseDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pauseDetails = this._pauseDetails?.internalValue;
    }
    if (this._runOn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runOn = this._runOn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementRunbookRunbookVersionGroupsProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionOnFailure = undefined;
      this._preCondition = undefined;
      this._notificationPreferences.internalValue = undefined;
      this._pauseDetails.internalValue = undefined;
      this._runOn.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionOnFailure = value.actionOnFailure;
      this._preCondition = value.preCondition;
      this._notificationPreferences.internalValue = value.notificationPreferences;
      this._pauseDetails.internalValue = value.pauseDetails;
      this._runOn.internalValue = value.runOn;
    }
  }

  // action_on_failure - computed: false, optional: false, required: true
  private _actionOnFailure?: string; 
  public get actionOnFailure() {
    return this.getStringAttribute('action_on_failure');
  }
  public set actionOnFailure(value: string) {
    this._actionOnFailure = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionOnFailureInput() {
    return this._actionOnFailure;
  }

  // pre_condition - computed: true, optional: true, required: false
  private _preCondition?: string; 
  public get preCondition() {
    return this.getStringAttribute('pre_condition');
  }
  public set preCondition(value: string) {
    this._preCondition = value;
  }
  public resetPreCondition() {
    this._preCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preConditionInput() {
    return this._preCondition;
  }

  // notification_preferences - computed: false, optional: true, required: false
  private _notificationPreferences = new FleetAppsManagementRunbookRunbookVersionGroupsPropertiesNotificationPreferencesOutputReference(this, "notification_preferences");
  public get notificationPreferences() {
    return this._notificationPreferences;
  }
  public putNotificationPreferences(value: FleetAppsManagementRunbookRunbookVersionGroupsPropertiesNotificationPreferences) {
    this._notificationPreferences.internalValue = value;
  }
  public resetNotificationPreferences() {
    this._notificationPreferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationPreferencesInput() {
    return this._notificationPreferences.internalValue;
  }

  // pause_details - computed: false, optional: true, required: false
  private _pauseDetails = new FleetAppsManagementRunbookRunbookVersionGroupsPropertiesPauseDetailsOutputReference(this, "pause_details");
  public get pauseDetails() {
    return this._pauseDetails;
  }
  public putPauseDetails(value: FleetAppsManagementRunbookRunbookVersionGroupsPropertiesPauseDetails) {
    this._pauseDetails.internalValue = value;
  }
  public resetPauseDetails() {
    this._pauseDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseDetailsInput() {
    return this._pauseDetails.internalValue;
  }

  // run_on - computed: false, optional: true, required: false
  private _runOn = new FleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOnOutputReference(this, "run_on");
  public get runOn() {
    return this._runOn;
  }
  public putRunOn(value: FleetAppsManagementRunbookRunbookVersionGroupsPropertiesRunOn) {
    this._runOn.internalValue = value;
  }
  public resetRunOn() {
    this._runOn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runOnInput() {
    return this._runOn.internalValue;
  }
}
export interface FleetAppsManagementRunbookRunbookVersionGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#name FleetAppsManagementRunbook#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#type FleetAppsManagementRunbook#type}
  */
  readonly type: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#properties FleetAppsManagementRunbook#properties}
  */
  readonly properties?: FleetAppsManagementRunbookRunbookVersionGroupsProperties;
}

export function fleetAppsManagementRunbookRunbookVersionGroupsToTerraform(struct?: FleetAppsManagementRunbookRunbookVersionGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    properties: fleetAppsManagementRunbookRunbookVersionGroupsPropertiesToTerraform(struct!.properties),
  }
}


export function fleetAppsManagementRunbookRunbookVersionGroupsToHclTerraform(struct?: FleetAppsManagementRunbookRunbookVersionGroups | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: fleetAppsManagementRunbookRunbookVersionGroupsPropertiesToHclTerraform(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookRunbookVersionGroupsPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementRunbookRunbookVersionGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetAppsManagementRunbookRunbookVersionGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementRunbookRunbookVersionGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
      this._properties.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
      this._properties.internalValue = value.properties;
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

  // properties - computed: false, optional: true, required: false
  private _properties = new FleetAppsManagementRunbookRunbookVersionGroupsPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: FleetAppsManagementRunbookRunbookVersionGroupsProperties) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}

export class FleetAppsManagementRunbookRunbookVersionGroupsList extends cdktf.ComplexList {
  public internalValue? : FleetAppsManagementRunbookRunbookVersionGroups[] | cdktf.IResolvable

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
  public get(index: number): FleetAppsManagementRunbookRunbookVersionGroupsOutputReference {
    return new FleetAppsManagementRunbookRunbookVersionGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetailsWorkflowSteps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#group_name FleetAppsManagementRunbook#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#step_name FleetAppsManagementRunbook#step_name}
  */
  readonly stepName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#steps FleetAppsManagementRunbook#steps}
  */
  readonly steps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#type FleetAppsManagementRunbook#type}
  */
  readonly type: string;
}

export function fleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetailsWorkflowStepsToTerraform(struct?: FleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetailsWorkflowSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_name: cdktf.stringToTerraform(struct!.groupName),
    step_name: cdktf.stringToTerraform(struct!.stepName),
    steps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.steps),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function fleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetailsWorkflowStepsToHclTerraform(struct?: FleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetailsWorkflowSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    step_name: {
      value: cdktf.stringToHclTerraform(struct!.stepName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    steps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.steps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class FleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetailsWorkflowStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetailsWorkflowSteps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._stepName !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepName = this._stepName;
    }
    if (this._steps !== undefined) {
      hasAnyValues = true;
      internalValueResult.steps = this._steps;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetailsWorkflowSteps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupName = undefined;
      this._stepName = undefined;
      this._steps = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupName = value.groupName;
      this._stepName = value.stepName;
      this._steps = value.steps;
      this._type = value.type;
    }
  }

  // group_name - computed: true, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // step_name - computed: true, optional: true, required: false
  private _stepName?: string; 
  public get stepName() {
    return this.getStringAttribute('step_name');
  }
  public set stepName(value: string) {
    this._stepName = value;
  }
  public resetStepName() {
    this._stepName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepNameInput() {
    return this._stepName;
  }

  // steps - computed: true, optional: true, required: false
  private _steps?: string[]; 
  public get steps() {
    return this.getListAttribute('steps');
  }
  public set steps(value: string[]) {
    this._steps = value;
  }
  public resetSteps() {
    this._steps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps;
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

export class FleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetailsWorkflowStepsList extends cdktf.ComplexList {
  public internalValue? : FleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetailsWorkflowSteps[] | cdktf.IResolvable

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
  public get(index: number): FleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetailsWorkflowStepsOutputReference {
    return new FleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetailsWorkflowStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetailsWorkflow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#group_name FleetAppsManagementRunbook#group_name}
  */
  readonly groupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#type FleetAppsManagementRunbook#type}
  */
  readonly type: string;
  /**
  * steps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#steps FleetAppsManagementRunbook#steps}
  */
  readonly steps: FleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetailsWorkflowSteps[] | cdktf.IResolvable;
}

export function fleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetailsWorkflowToTerraform(struct?: FleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetailsWorkflow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_name: cdktf.stringToTerraform(struct!.groupName),
    type: cdktf.stringToTerraform(struct!.type),
    steps: cdktf.listMapper(fleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetailsWorkflowStepsToTerraform, true)(struct!.steps),
  }
}


export function fleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetailsWorkflowToHclTerraform(struct?: FleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetailsWorkflow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
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
    steps: {
      value: cdktf.listMapperHcl(fleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetailsWorkflowStepsToHclTerraform, true)(struct!.steps),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetailsWorkflowStepsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetailsWorkflowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetailsWorkflow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._steps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.steps = this._steps?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetailsWorkflow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupName = undefined;
      this._type = undefined;
      this._steps.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupName = value.groupName;
      this._type = value.type;
      this._steps.internalValue = value.steps;
    }
  }

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
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

  // steps - computed: false, optional: false, required: true
  private _steps = new FleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetailsWorkflowStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }
  public putSteps(value: FleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetailsWorkflowSteps[] | cdktf.IResolvable) {
    this._steps.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps.internalValue;
  }
}

export class FleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetailsWorkflowList extends cdktf.ComplexList {
  public internalValue? : FleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetailsWorkflow[] | cdktf.IResolvable

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
  public get(index: number): FleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetailsWorkflowOutputReference {
    return new FleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetailsWorkflowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#scope FleetAppsManagementRunbook#scope}
  */
  readonly scope: string;
  /**
  * workflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#workflow FleetAppsManagementRunbook#workflow}
  */
  readonly workflow: FleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetailsWorkflow[] | cdktf.IResolvable;
}

export function fleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetailsToTerraform(struct?: FleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetailsOutputReference | FleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    workflow: cdktf.listMapper(fleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetailsWorkflowToTerraform, true)(struct!.workflow),
  }
}


export function fleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetailsToHclTerraform(struct?: FleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetailsOutputReference | FleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workflow: {
      value: cdktf.listMapperHcl(fleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetailsWorkflowToHclTerraform, true)(struct!.workflow),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetailsWorkflowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._workflow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflow = this._workflow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scope = undefined;
      this._workflow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scope = value.scope;
      this._workflow.internalValue = value.workflow;
    }
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // workflow - computed: false, optional: false, required: true
  private _workflow = new FleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetailsWorkflowList(this, "workflow", false);
  public get workflow() {
    return this._workflow;
  }
  public putWorkflow(value: FleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetailsWorkflow[] | cdktf.IResolvable) {
    this._workflow.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowInput() {
    return this._workflow.internalValue;
  }
}
export interface FleetAppsManagementRunbookRunbookVersionTasksOutputVariableMappingsOutputVariableDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#output_variable_name FleetAppsManagementRunbook#output_variable_name}
  */
  readonly outputVariableName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#step_name FleetAppsManagementRunbook#step_name}
  */
  readonly stepName: string;
}

export function fleetAppsManagementRunbookRunbookVersionTasksOutputVariableMappingsOutputVariableDetailsToTerraform(struct?: FleetAppsManagementRunbookRunbookVersionTasksOutputVariableMappingsOutputVariableDetailsOutputReference | FleetAppsManagementRunbookRunbookVersionTasksOutputVariableMappingsOutputVariableDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    output_variable_name: cdktf.stringToTerraform(struct!.outputVariableName),
    step_name: cdktf.stringToTerraform(struct!.stepName),
  }
}


export function fleetAppsManagementRunbookRunbookVersionTasksOutputVariableMappingsOutputVariableDetailsToHclTerraform(struct?: FleetAppsManagementRunbookRunbookVersionTasksOutputVariableMappingsOutputVariableDetailsOutputReference | FleetAppsManagementRunbookRunbookVersionTasksOutputVariableMappingsOutputVariableDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    output_variable_name: {
      value: cdktf.stringToHclTerraform(struct!.outputVariableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    step_name: {
      value: cdktf.stringToHclTerraform(struct!.stepName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementRunbookRunbookVersionTasksOutputVariableMappingsOutputVariableDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementRunbookRunbookVersionTasksOutputVariableMappingsOutputVariableDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outputVariableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputVariableName = this._outputVariableName;
    }
    if (this._stepName !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepName = this._stepName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementRunbookRunbookVersionTasksOutputVariableMappingsOutputVariableDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._outputVariableName = undefined;
      this._stepName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._outputVariableName = value.outputVariableName;
      this._stepName = value.stepName;
    }
  }

  // output_variable_name - computed: false, optional: false, required: true
  private _outputVariableName?: string; 
  public get outputVariableName() {
    return this.getStringAttribute('output_variable_name');
  }
  public set outputVariableName(value: string) {
    this._outputVariableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputVariableNameInput() {
    return this._outputVariableName;
  }

  // step_name - computed: false, optional: false, required: true
  private _stepName?: string; 
  public get stepName() {
    return this.getStringAttribute('step_name');
  }
  public set stepName(value: string) {
    this._stepName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepNameInput() {
    return this._stepName;
  }
}
export interface FleetAppsManagementRunbookRunbookVersionTasksOutputVariableMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#name FleetAppsManagementRunbook#name}
  */
  readonly name: string;
  /**
  * output_variable_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#output_variable_details FleetAppsManagementRunbook#output_variable_details}
  */
  readonly outputVariableDetails: FleetAppsManagementRunbookRunbookVersionTasksOutputVariableMappingsOutputVariableDetails;
}

export function fleetAppsManagementRunbookRunbookVersionTasksOutputVariableMappingsToTerraform(struct?: FleetAppsManagementRunbookRunbookVersionTasksOutputVariableMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    output_variable_details: fleetAppsManagementRunbookRunbookVersionTasksOutputVariableMappingsOutputVariableDetailsToTerraform(struct!.outputVariableDetails),
  }
}


export function fleetAppsManagementRunbookRunbookVersionTasksOutputVariableMappingsToHclTerraform(struct?: FleetAppsManagementRunbookRunbookVersionTasksOutputVariableMappings | cdktf.IResolvable): any {
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
    output_variable_details: {
      value: fleetAppsManagementRunbookRunbookVersionTasksOutputVariableMappingsOutputVariableDetailsToHclTerraform(struct!.outputVariableDetails),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookRunbookVersionTasksOutputVariableMappingsOutputVariableDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementRunbookRunbookVersionTasksOutputVariableMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetAppsManagementRunbookRunbookVersionTasksOutputVariableMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._outputVariableDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputVariableDetails = this._outputVariableDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementRunbookRunbookVersionTasksOutputVariableMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._outputVariableDetails.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._outputVariableDetails.internalValue = value.outputVariableDetails;
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

  // output_variable_details - computed: false, optional: false, required: true
  private _outputVariableDetails = new FleetAppsManagementRunbookRunbookVersionTasksOutputVariableMappingsOutputVariableDetailsOutputReference(this, "output_variable_details");
  public get outputVariableDetails() {
    return this._outputVariableDetails;
  }
  public putOutputVariableDetails(value: FleetAppsManagementRunbookRunbookVersionTasksOutputVariableMappingsOutputVariableDetails) {
    this._outputVariableDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputVariableDetailsInput() {
    return this._outputVariableDetails.internalValue;
  }
}

export class FleetAppsManagementRunbookRunbookVersionTasksOutputVariableMappingsList extends cdktf.ComplexList {
  public internalValue? : FleetAppsManagementRunbookRunbookVersionTasksOutputVariableMappings[] | cdktf.IResolvable

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
  public get(index: number): FleetAppsManagementRunbookRunbookVersionTasksOutputVariableMappingsOutputReference {
    return new FleetAppsManagementRunbookRunbookVersionTasksOutputVariableMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesNotificationPreferences {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#should_notify_on_pause FleetAppsManagementRunbook#should_notify_on_pause}
  */
  readonly shouldNotifyOnPause?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#should_notify_on_task_failure FleetAppsManagementRunbook#should_notify_on_task_failure}
  */
  readonly shouldNotifyOnTaskFailure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#should_notify_on_task_success FleetAppsManagementRunbook#should_notify_on_task_success}
  */
  readonly shouldNotifyOnTaskSuccess?: boolean | cdktf.IResolvable;
}

export function fleetAppsManagementRunbookRunbookVersionTasksStepPropertiesNotificationPreferencesToTerraform(struct?: FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesNotificationPreferencesOutputReference | FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesNotificationPreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    should_notify_on_pause: cdktf.booleanToTerraform(struct!.shouldNotifyOnPause),
    should_notify_on_task_failure: cdktf.booleanToTerraform(struct!.shouldNotifyOnTaskFailure),
    should_notify_on_task_success: cdktf.booleanToTerraform(struct!.shouldNotifyOnTaskSuccess),
  }
}


export function fleetAppsManagementRunbookRunbookVersionTasksStepPropertiesNotificationPreferencesToHclTerraform(struct?: FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesNotificationPreferencesOutputReference | FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesNotificationPreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    should_notify_on_pause: {
      value: cdktf.booleanToHclTerraform(struct!.shouldNotifyOnPause),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    should_notify_on_task_failure: {
      value: cdktf.booleanToHclTerraform(struct!.shouldNotifyOnTaskFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    should_notify_on_task_success: {
      value: cdktf.booleanToHclTerraform(struct!.shouldNotifyOnTaskSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesNotificationPreferencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesNotificationPreferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shouldNotifyOnPause !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldNotifyOnPause = this._shouldNotifyOnPause;
    }
    if (this._shouldNotifyOnTaskFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldNotifyOnTaskFailure = this._shouldNotifyOnTaskFailure;
    }
    if (this._shouldNotifyOnTaskSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldNotifyOnTaskSuccess = this._shouldNotifyOnTaskSuccess;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesNotificationPreferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._shouldNotifyOnPause = undefined;
      this._shouldNotifyOnTaskFailure = undefined;
      this._shouldNotifyOnTaskSuccess = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._shouldNotifyOnPause = value.shouldNotifyOnPause;
      this._shouldNotifyOnTaskFailure = value.shouldNotifyOnTaskFailure;
      this._shouldNotifyOnTaskSuccess = value.shouldNotifyOnTaskSuccess;
    }
  }

  // should_notify_on_pause - computed: true, optional: true, required: false
  private _shouldNotifyOnPause?: boolean | cdktf.IResolvable; 
  public get shouldNotifyOnPause() {
    return this.getBooleanAttribute('should_notify_on_pause');
  }
  public set shouldNotifyOnPause(value: boolean | cdktf.IResolvable) {
    this._shouldNotifyOnPause = value;
  }
  public resetShouldNotifyOnPause() {
    this._shouldNotifyOnPause = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldNotifyOnPauseInput() {
    return this._shouldNotifyOnPause;
  }

  // should_notify_on_task_failure - computed: true, optional: true, required: false
  private _shouldNotifyOnTaskFailure?: boolean | cdktf.IResolvable; 
  public get shouldNotifyOnTaskFailure() {
    return this.getBooleanAttribute('should_notify_on_task_failure');
  }
  public set shouldNotifyOnTaskFailure(value: boolean | cdktf.IResolvable) {
    this._shouldNotifyOnTaskFailure = value;
  }
  public resetShouldNotifyOnTaskFailure() {
    this._shouldNotifyOnTaskFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldNotifyOnTaskFailureInput() {
    return this._shouldNotifyOnTaskFailure;
  }

  // should_notify_on_task_success - computed: true, optional: true, required: false
  private _shouldNotifyOnTaskSuccess?: boolean | cdktf.IResolvable; 
  public get shouldNotifyOnTaskSuccess() {
    return this.getBooleanAttribute('should_notify_on_task_success');
  }
  public set shouldNotifyOnTaskSuccess(value: boolean | cdktf.IResolvable) {
    this._shouldNotifyOnTaskSuccess = value;
  }
  public resetShouldNotifyOnTaskSuccess() {
    this._shouldNotifyOnTaskSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldNotifyOnTaskSuccessInput() {
    return this._shouldNotifyOnTaskSuccess;
  }
}
export interface FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesPauseDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#duration_in_minutes FleetAppsManagementRunbook#duration_in_minutes}
  */
  readonly durationInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#kind FleetAppsManagementRunbook#kind}
  */
  readonly kind: string;
}

export function fleetAppsManagementRunbookRunbookVersionTasksStepPropertiesPauseDetailsToTerraform(struct?: FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesPauseDetailsOutputReference | FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesPauseDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration_in_minutes: cdktf.numberToTerraform(struct!.durationInMinutes),
    kind: cdktf.stringToTerraform(struct!.kind),
  }
}


export function fleetAppsManagementRunbookRunbookVersionTasksStepPropertiesPauseDetailsToHclTerraform(struct?: FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesPauseDetailsOutputReference | FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesPauseDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.durationInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesPauseDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesPauseDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._durationInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationInMinutes = this._durationInMinutes;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesPauseDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._durationInMinutes = undefined;
      this._kind = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._durationInMinutes = value.durationInMinutes;
      this._kind = value.kind;
    }
  }

  // duration_in_minutes - computed: true, optional: true, required: false
  private _durationInMinutes?: number; 
  public get durationInMinutes() {
    return this.getNumberAttribute('duration_in_minutes');
  }
  public set durationInMinutes(value: number) {
    this._durationInMinutes = value;
  }
  public resetDurationInMinutes() {
    this._durationInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInMinutesInput() {
    return this._durationInMinutes;
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
}
export interface FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#output_variable_name FleetAppsManagementRunbook#output_variable_name}
  */
  readonly outputVariableName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#step_name FleetAppsManagementRunbook#step_name}
  */
  readonly stepName?: string;
}

export function fleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsToTerraform(struct?: FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsOutputReference | FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    output_variable_name: cdktf.stringToTerraform(struct!.outputVariableName),
    step_name: cdktf.stringToTerraform(struct!.stepName),
  }
}


export function fleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsToHclTerraform(struct?: FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsOutputReference | FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    output_variable_name: {
      value: cdktf.stringToHclTerraform(struct!.outputVariableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    step_name: {
      value: cdktf.stringToHclTerraform(struct!.stepName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outputVariableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputVariableName = this._outputVariableName;
    }
    if (this._stepName !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepName = this._stepName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._outputVariableName = undefined;
      this._stepName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._outputVariableName = value.outputVariableName;
      this._stepName = value.stepName;
    }
  }

  // output_variable_name - computed: true, optional: true, required: false
  private _outputVariableName?: string; 
  public get outputVariableName() {
    return this.getStringAttribute('output_variable_name');
  }
  public set outputVariableName(value: string) {
    this._outputVariableName = value;
  }
  public resetOutputVariableName() {
    this._outputVariableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputVariableNameInput() {
    return this._outputVariableName;
  }

  // step_name - computed: true, optional: true, required: false
  private _stepName?: string; 
  public get stepName() {
    return this.getStringAttribute('step_name');
  }
  public set stepName(value: string) {
    this._stepName = value;
  }
  public resetStepName() {
    this._stepName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepNameInput() {
    return this._stepName;
  }
}
export interface FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#resource_id FleetAppsManagementRunbook#resource_id}
  */
  readonly resourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#resource_type FleetAppsManagementRunbook#resource_type}
  */
  readonly resourceType?: string;
  /**
  * output_variable_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#output_variable_details FleetAppsManagementRunbook#output_variable_details}
  */
  readonly outputVariableDetails?: FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetails;
}

export function fleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsToTerraform(struct?: FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    output_variable_details: fleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsToTerraform(struct!.outputVariableDetails),
  }
}


export function fleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsToHclTerraform(struct?: FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_variable_details: {
      value: fleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsToHclTerraform(struct!.outputVariableDetails),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._outputVariableDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputVariableDetails = this._outputVariableDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceId = undefined;
      this._resourceType = undefined;
      this._outputVariableDetails.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceId = value.resourceId;
      this._resourceType = value.resourceType;
      this._outputVariableDetails.internalValue = value.outputVariableDetails;
    }
  }

  // resource_id - computed: true, optional: true, required: false
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_type - computed: true, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // output_variable_details - computed: false, optional: true, required: false
  private _outputVariableDetails = new FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsOutputReference(this, "output_variable_details");
  public get outputVariableDetails() {
    return this._outputVariableDetails;
  }
  public putOutputVariableDetails(value: FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetails) {
    this._outputVariableDetails.internalValue = value;
  }
  public resetOutputVariableDetails() {
    this._outputVariableDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputVariableDetailsInput() {
    return this._outputVariableDetails.internalValue;
  }
}

export class FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsList extends cdktf.ComplexList {
  public internalValue? : FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetails[] | cdktf.IResolvable

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
  public get(index: number): FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputReference {
    return new FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#condition FleetAppsManagementRunbook#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#host FleetAppsManagementRunbook#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#kind FleetAppsManagementRunbook#kind}
  */
  readonly kind: string;
  /**
  * previous_task_instance_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#previous_task_instance_details FleetAppsManagementRunbook#previous_task_instance_details}
  */
  readonly previousTaskInstanceDetails?: FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetails[] | cdktf.IResolvable;
}

export function fleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOnToTerraform(struct?: FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOnOutputReference | FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    host: cdktf.stringToTerraform(struct!.host),
    kind: cdktf.stringToTerraform(struct!.kind),
    previous_task_instance_details: cdktf.listMapper(fleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsToTerraform, true)(struct!.previousTaskInstanceDetails),
  }
}


export function fleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOnToHclTerraform(struct?: FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOnOutputReference | FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
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
    previous_task_instance_details: {
      value: cdktf.listMapperHcl(fleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsToHclTerraform, true)(struct!.previousTaskInstanceDetails),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._previousTaskInstanceDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.previousTaskInstanceDetails = this._previousTaskInstanceDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._condition = undefined;
      this._host = undefined;
      this._kind = undefined;
      this._previousTaskInstanceDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._condition = value.condition;
      this._host = value.host;
      this._kind = value.kind;
      this._previousTaskInstanceDetails.internalValue = value.previousTaskInstanceDetails;
    }
  }

  // condition - computed: true, optional: true, required: false
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

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // previous_task_instance_details - computed: false, optional: true, required: false
  private _previousTaskInstanceDetails = new FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsList(this, "previous_task_instance_details", false);
  public get previousTaskInstanceDetails() {
    return this._previousTaskInstanceDetails;
  }
  public putPreviousTaskInstanceDetails(value: FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetails[] | cdktf.IResolvable) {
    this._previousTaskInstanceDetails.internalValue = value;
  }
  public resetPreviousTaskInstanceDetails() {
    this._previousTaskInstanceDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previousTaskInstanceDetailsInput() {
    return this._previousTaskInstanceDetails.internalValue;
  }
}
export interface FleetAppsManagementRunbookRunbookVersionTasksStepProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#action_on_failure FleetAppsManagementRunbook#action_on_failure}
  */
  readonly actionOnFailure: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#pre_condition FleetAppsManagementRunbook#pre_condition}
  */
  readonly preCondition?: string;
  /**
  * notification_preferences block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#notification_preferences FleetAppsManagementRunbook#notification_preferences}
  */
  readonly notificationPreferences?: FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesNotificationPreferences;
  /**
  * pause_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#pause_details FleetAppsManagementRunbook#pause_details}
  */
  readonly pauseDetails?: FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesPauseDetails;
  /**
  * run_on block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#run_on FleetAppsManagementRunbook#run_on}
  */
  readonly runOn?: FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOn;
}

export function fleetAppsManagementRunbookRunbookVersionTasksStepPropertiesToTerraform(struct?: FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesOutputReference | FleetAppsManagementRunbookRunbookVersionTasksStepProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_on_failure: cdktf.stringToTerraform(struct!.actionOnFailure),
    pre_condition: cdktf.stringToTerraform(struct!.preCondition),
    notification_preferences: fleetAppsManagementRunbookRunbookVersionTasksStepPropertiesNotificationPreferencesToTerraform(struct!.notificationPreferences),
    pause_details: fleetAppsManagementRunbookRunbookVersionTasksStepPropertiesPauseDetailsToTerraform(struct!.pauseDetails),
    run_on: fleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOnToTerraform(struct!.runOn),
  }
}


export function fleetAppsManagementRunbookRunbookVersionTasksStepPropertiesToHclTerraform(struct?: FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesOutputReference | FleetAppsManagementRunbookRunbookVersionTasksStepProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_on_failure: {
      value: cdktf.stringToHclTerraform(struct!.actionOnFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_condition: {
      value: cdktf.stringToHclTerraform(struct!.preCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notification_preferences: {
      value: fleetAppsManagementRunbookRunbookVersionTasksStepPropertiesNotificationPreferencesToHclTerraform(struct!.notificationPreferences),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesNotificationPreferencesList",
    },
    pause_details: {
      value: fleetAppsManagementRunbookRunbookVersionTasksStepPropertiesPauseDetailsToHclTerraform(struct!.pauseDetails),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesPauseDetailsList",
    },
    run_on: {
      value: fleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOnToHclTerraform(struct!.runOn),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOnList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementRunbookRunbookVersionTasksStepProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionOnFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionOnFailure = this._actionOnFailure;
    }
    if (this._preCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.preCondition = this._preCondition;
    }
    if (this._notificationPreferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationPreferences = this._notificationPreferences?.internalValue;
    }
    if (this._pauseDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pauseDetails = this._pauseDetails?.internalValue;
    }
    if (this._runOn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runOn = this._runOn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementRunbookRunbookVersionTasksStepProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionOnFailure = undefined;
      this._preCondition = undefined;
      this._notificationPreferences.internalValue = undefined;
      this._pauseDetails.internalValue = undefined;
      this._runOn.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionOnFailure = value.actionOnFailure;
      this._preCondition = value.preCondition;
      this._notificationPreferences.internalValue = value.notificationPreferences;
      this._pauseDetails.internalValue = value.pauseDetails;
      this._runOn.internalValue = value.runOn;
    }
  }

  // action_on_failure - computed: false, optional: false, required: true
  private _actionOnFailure?: string; 
  public get actionOnFailure() {
    return this.getStringAttribute('action_on_failure');
  }
  public set actionOnFailure(value: string) {
    this._actionOnFailure = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionOnFailureInput() {
    return this._actionOnFailure;
  }

  // pre_condition - computed: true, optional: true, required: false
  private _preCondition?: string; 
  public get preCondition() {
    return this.getStringAttribute('pre_condition');
  }
  public set preCondition(value: string) {
    this._preCondition = value;
  }
  public resetPreCondition() {
    this._preCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preConditionInput() {
    return this._preCondition;
  }

  // notification_preferences - computed: false, optional: true, required: false
  private _notificationPreferences = new FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesNotificationPreferencesOutputReference(this, "notification_preferences");
  public get notificationPreferences() {
    return this._notificationPreferences;
  }
  public putNotificationPreferences(value: FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesNotificationPreferences) {
    this._notificationPreferences.internalValue = value;
  }
  public resetNotificationPreferences() {
    this._notificationPreferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationPreferencesInput() {
    return this._notificationPreferences.internalValue;
  }

  // pause_details - computed: false, optional: true, required: false
  private _pauseDetails = new FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesPauseDetailsOutputReference(this, "pause_details");
  public get pauseDetails() {
    return this._pauseDetails;
  }
  public putPauseDetails(value: FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesPauseDetails) {
    this._pauseDetails.internalValue = value;
  }
  public resetPauseDetails() {
    this._pauseDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseDetailsInput() {
    return this._pauseDetails.internalValue;
  }

  // run_on - computed: false, optional: true, required: false
  private _runOn = new FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOnOutputReference(this, "run_on");
  public get runOn() {
    return this._runOn;
  }
  public putRunOn(value: FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesRunOn) {
    this._runOn.internalValue = value;
  }
  public resetRunOn() {
    this._runOn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runOnInput() {
    return this._runOn.internalValue;
  }
}
export interface FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsContent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#bucket FleetAppsManagementRunbook#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#catalog_id FleetAppsManagementRunbook#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#checksum FleetAppsManagementRunbook#checksum}
  */
  readonly checksum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#namespace FleetAppsManagementRunbook#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#object FleetAppsManagementRunbook#object}
  */
  readonly object?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#source_type FleetAppsManagementRunbook#source_type}
  */
  readonly sourceType: string;
}

export function fleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsContentToTerraform(struct?: FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsContentOutputReference | FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    catalog_id: cdktf.stringToTerraform(struct!.catalogId),
    checksum: cdktf.stringToTerraform(struct!.checksum),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    object: cdktf.stringToTerraform(struct!.object),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
  }
}


export function fleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsContentToHclTerraform(struct?: FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsContentOutputReference | FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    catalog_id: {
      value: cdktf.stringToHclTerraform(struct!.catalogId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    checksum: {
      value: cdktf.stringToHclTerraform(struct!.checksum),
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
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsContentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._catalogId !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogId = this._catalogId;
    }
    if (this._checksum !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksum = this._checksum;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._catalogId = undefined;
      this._checksum = undefined;
      this._namespace = undefined;
      this._object = undefined;
      this._sourceType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._catalogId = value.catalogId;
      this._checksum = value.checksum;
      this._namespace = value.namespace;
      this._object = value.object;
      this._sourceType = value.sourceType;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // catalog_id - computed: true, optional: true, required: false
  private _catalogId?: string; 
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string) {
    this._catalogId = value;
  }
  public resetCatalogId() {
    this._catalogId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogIdInput() {
    return this._catalogId;
  }

  // checksum - computed: true, optional: true, required: false
  private _checksum?: string; 
  public get checksum() {
    return this.getStringAttribute('checksum');
  }
  public set checksum(value: string) {
    this._checksum = value;
  }
  public resetChecksum() {
    this._checksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumInput() {
    return this._checksum;
  }

  // namespace - computed: true, optional: true, required: false
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

  // object - computed: true, optional: true, required: false
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }
}
export interface FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#display_name FleetAppsManagementRunbook#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#id FleetAppsManagementRunbook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function fleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentialsToTerraform(struct?: FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function fleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentialsToHclTerraform(struct?: FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentials | cdktf.IResolvable): any {
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
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._id = value.id;
    }
  }

  // display_name - computed: true, optional: true, required: false
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
}

export class FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentialsList extends cdktf.ComplexList {
  public internalValue? : FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentials[] | cdktf.IResolvable

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
  public get(index: number): FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentialsOutputReference {
    return new FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#description FleetAppsManagementRunbook#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#name FleetAppsManagementRunbook#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#type FleetAppsManagementRunbook#type}
  */
  readonly type?: string;
}

export function fleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesToTerraform(struct?: FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function fleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesToHclTerraform(struct?: FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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

export class FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // description - computed: true, optional: true, required: false
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

  // name - computed: true, optional: true, required: false
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

  // type - computed: true, optional: true, required: false
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

export class FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList extends cdktf.ComplexList {
  public internalValue? : FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables[] | cdktf.IResolvable

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
  public get(index: number): FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference {
    return new FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#output_variables FleetAppsManagementRunbook#output_variables}
  */
  readonly outputVariables?: string[];
  /**
  * input_variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#input_variables FleetAppsManagementRunbook#input_variables}
  */
  readonly inputVariables?: FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables[] | cdktf.IResolvable;
}

export function fleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesToTerraform(struct?: FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference | FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    output_variables: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.outputVariables),
    input_variables: cdktf.listMapper(fleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesToTerraform, true)(struct!.inputVariables),
  }
}


export function fleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesToHclTerraform(struct?: FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference | FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    output_variables: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.outputVariables),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    input_variables: {
      value: cdktf.listMapperHcl(fleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesToHclTerraform, true)(struct!.inputVariables),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outputVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputVariables = this._outputVariables;
    }
    if (this._inputVariables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputVariables = this._inputVariables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._outputVariables = undefined;
      this._inputVariables.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._outputVariables = value.outputVariables;
      this._inputVariables.internalValue = value.inputVariables;
    }
  }

  // output_variables - computed: true, optional: true, required: false
  private _outputVariables?: string[]; 
  public get outputVariables() {
    return this.getListAttribute('output_variables');
  }
  public set outputVariables(value: string[]) {
    this._outputVariables = value;
  }
  public resetOutputVariables() {
    this._outputVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputVariablesInput() {
    return this._outputVariables;
  }

  // input_variables - computed: false, optional: true, required: false
  private _inputVariables = new FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList(this, "input_variables", false);
  public get inputVariables() {
    return this._inputVariables;
  }
  public putInputVariables(value: FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables[] | cdktf.IResolvable) {
    this._inputVariables.internalValue = value;
  }
  public resetInputVariables() {
    this._inputVariables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputVariablesInput() {
    return this._inputVariables.internalValue;
  }
}
export interface FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#catalog_id FleetAppsManagementRunbook#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#command FleetAppsManagementRunbook#command}
  */
  readonly command?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#config_file FleetAppsManagementRunbook#config_file}
  */
  readonly configFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#endpoint FleetAppsManagementRunbook#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#execution_type FleetAppsManagementRunbook#execution_type}
  */
  readonly executionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#is_executable_content FleetAppsManagementRunbook#is_executable_content}
  */
  readonly isExecutableContent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#is_locked FleetAppsManagementRunbook#is_locked}
  */
  readonly isLocked?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#is_read_output_variable_enabled FleetAppsManagementRunbook#is_read_output_variable_enabled}
  */
  readonly isReadOutputVariableEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#target_compartment_id FleetAppsManagementRunbook#target_compartment_id}
  */
  readonly targetCompartmentId?: string;
  /**
  * content block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#content FleetAppsManagementRunbook#content}
  */
  readonly content?: FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsContent;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#credentials FleetAppsManagementRunbook#credentials}
  */
  readonly credentials?: FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentials[] | cdktf.IResolvable;
  /**
  * variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#variables FleetAppsManagementRunbook#variables}
  */
  readonly variables?: FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariables;
}

export function fleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsToTerraform(struct?: FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsOutputReference | FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog_id: cdktf.stringToTerraform(struct!.catalogId),
    command: cdktf.stringToTerraform(struct!.command),
    config_file: cdktf.stringToTerraform(struct!.configFile),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    execution_type: cdktf.stringToTerraform(struct!.executionType),
    is_executable_content: cdktf.booleanToTerraform(struct!.isExecutableContent),
    is_locked: cdktf.booleanToTerraform(struct!.isLocked),
    is_read_output_variable_enabled: cdktf.booleanToTerraform(struct!.isReadOutputVariableEnabled),
    target_compartment_id: cdktf.stringToTerraform(struct!.targetCompartmentId),
    content: fleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsContentToTerraform(struct!.content),
    credentials: cdktf.listMapper(fleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentialsToTerraform, true)(struct!.credentials),
    variables: fleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesToTerraform(struct!.variables),
  }
}


export function fleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsToHclTerraform(struct?: FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsOutputReference | FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog_id: {
      value: cdktf.stringToHclTerraform(struct!.catalogId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    command: {
      value: cdktf.stringToHclTerraform(struct!.command),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_file: {
      value: cdktf.stringToHclTerraform(struct!.configFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_type: {
      value: cdktf.stringToHclTerraform(struct!.executionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_executable_content: {
      value: cdktf.booleanToHclTerraform(struct!.isExecutableContent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_locked: {
      value: cdktf.booleanToHclTerraform(struct!.isLocked),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_read_output_variable_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isReadOutputVariableEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target_compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.targetCompartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content: {
      value: fleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsContentToHclTerraform(struct!.content),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsContentList",
    },
    credentials: {
      value: cdktf.listMapperHcl(fleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentialsToHclTerraform, true)(struct!.credentials),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentialsList",
    },
    variables: {
      value: fleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesToHclTerraform(struct!.variables),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogId !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogId = this._catalogId;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._configFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.configFile = this._configFile;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._executionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionType = this._executionType;
    }
    if (this._isExecutableContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.isExecutableContent = this._isExecutableContent;
    }
    if (this._isLocked !== undefined) {
      hasAnyValues = true;
      internalValueResult.isLocked = this._isLocked;
    }
    if (this._isReadOutputVariableEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isReadOutputVariableEnabled = this._isReadOutputVariableEnabled;
    }
    if (this._targetCompartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetCompartmentId = this._targetCompartmentId;
    }
    if (this._content?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content?.internalValue;
    }
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catalogId = undefined;
      this._command = undefined;
      this._configFile = undefined;
      this._endpoint = undefined;
      this._executionType = undefined;
      this._isExecutableContent = undefined;
      this._isLocked = undefined;
      this._isReadOutputVariableEnabled = undefined;
      this._targetCompartmentId = undefined;
      this._content.internalValue = undefined;
      this._credentials.internalValue = undefined;
      this._variables.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._catalogId = value.catalogId;
      this._command = value.command;
      this._configFile = value.configFile;
      this._endpoint = value.endpoint;
      this._executionType = value.executionType;
      this._isExecutableContent = value.isExecutableContent;
      this._isLocked = value.isLocked;
      this._isReadOutputVariableEnabled = value.isReadOutputVariableEnabled;
      this._targetCompartmentId = value.targetCompartmentId;
      this._content.internalValue = value.content;
      this._credentials.internalValue = value.credentials;
      this._variables.internalValue = value.variables;
    }
  }

  // catalog_id - computed: true, optional: true, required: false
  private _catalogId?: string; 
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string) {
    this._catalogId = value;
  }
  public resetCatalogId() {
    this._catalogId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogIdInput() {
    return this._catalogId;
  }

  // command - computed: true, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // config_file - computed: true, optional: true, required: false
  private _configFile?: string; 
  public get configFile() {
    return this.getStringAttribute('config_file');
  }
  public set configFile(value: string) {
    this._configFile = value;
  }
  public resetConfigFile() {
    this._configFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configFileInput() {
    return this._configFile;
  }

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // execution_type - computed: false, optional: false, required: true
  private _executionType?: string; 
  public get executionType() {
    return this.getStringAttribute('execution_type');
  }
  public set executionType(value: string) {
    this._executionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionTypeInput() {
    return this._executionType;
  }

  // is_executable_content - computed: true, optional: true, required: false
  private _isExecutableContent?: boolean | cdktf.IResolvable; 
  public get isExecutableContent() {
    return this.getBooleanAttribute('is_executable_content');
  }
  public set isExecutableContent(value: boolean | cdktf.IResolvable) {
    this._isExecutableContent = value;
  }
  public resetIsExecutableContent() {
    this._isExecutableContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isExecutableContentInput() {
    return this._isExecutableContent;
  }

  // is_locked - computed: true, optional: true, required: false
  private _isLocked?: boolean | cdktf.IResolvable; 
  public get isLocked() {
    return this.getBooleanAttribute('is_locked');
  }
  public set isLocked(value: boolean | cdktf.IResolvable) {
    this._isLocked = value;
  }
  public resetIsLocked() {
    this._isLocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLockedInput() {
    return this._isLocked;
  }

  // is_read_output_variable_enabled - computed: true, optional: true, required: false
  private _isReadOutputVariableEnabled?: boolean | cdktf.IResolvable; 
  public get isReadOutputVariableEnabled() {
    return this.getBooleanAttribute('is_read_output_variable_enabled');
  }
  public set isReadOutputVariableEnabled(value: boolean | cdktf.IResolvable) {
    this._isReadOutputVariableEnabled = value;
  }
  public resetIsReadOutputVariableEnabled() {
    this._isReadOutputVariableEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isReadOutputVariableEnabledInput() {
    return this._isReadOutputVariableEnabled;
  }

  // system_variables - computed: true, optional: false, required: false
  public get systemVariables() {
    return this.getListAttribute('system_variables');
  }

  // target_compartment_id - computed: true, optional: true, required: false
  private _targetCompartmentId?: string; 
  public get targetCompartmentId() {
    return this.getStringAttribute('target_compartment_id');
  }
  public set targetCompartmentId(value: string) {
    this._targetCompartmentId = value;
  }
  public resetTargetCompartmentId() {
    this._targetCompartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetCompartmentIdInput() {
    return this._targetCompartmentId;
  }

  // content - computed: false, optional: true, required: false
  private _content = new FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsContentOutputReference(this, "content");
  public get content() {
    return this._content;
  }
  public putContent(value: FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsContent) {
    this._content.internalValue = value;
  }
  public resetContent() {
    this._content.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content.internalValue;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentialsList(this, "credentials", false);
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentials[] | cdktf.IResolvable) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // variables - computed: false, optional: true, required: false
  private _variables = new FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference(this, "variables");
  public get variables() {
    return this._variables;
  }
  public putVariables(value: FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariables) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }
}
export interface FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#num_retries FleetAppsManagementRunbook#num_retries}
  */
  readonly numRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#timeout_in_seconds FleetAppsManagementRunbook#timeout_in_seconds}
  */
  readonly timeoutInSeconds?: number;
}

export function fleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsPropertiesToTerraform(struct?: FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsPropertiesOutputReference | FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_retries: cdktf.numberToTerraform(struct!.numRetries),
    timeout_in_seconds: cdktf.numberToTerraform(struct!.timeoutInSeconds),
  }
}


export function fleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsPropertiesToHclTerraform(struct?: FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsPropertiesOutputReference | FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    num_retries: {
      value: cdktf.numberToHclTerraform(struct!.numRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRetries = this._numRetries;
    }
    if (this._timeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutInSeconds = this._timeoutInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._numRetries = undefined;
      this._timeoutInSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._numRetries = value.numRetries;
      this._timeoutInSeconds = value.timeoutInSeconds;
    }
  }

  // num_retries - computed: true, optional: true, required: false
  private _numRetries?: number; 
  public get numRetries() {
    return this.getNumberAttribute('num_retries');
  }
  public set numRetries(value: number) {
    this._numRetries = value;
  }
  public resetNumRetries() {
    this._numRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRetriesInput() {
    return this._numRetries;
  }

  // timeout_in_seconds - computed: true, optional: true, required: false
  private _timeoutInSeconds?: number; 
  public get timeoutInSeconds() {
    return this.getNumberAttribute('timeout_in_seconds');
  }
  public set timeoutInSeconds(value: number) {
    this._timeoutInSeconds = value;
  }
  public resetTimeoutInSeconds() {
    this._timeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInSecondsInput() {
    return this._timeoutInSeconds;
  }
}
export interface FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#description FleetAppsManagementRunbook#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#is_apply_subject_task FleetAppsManagementRunbook#is_apply_subject_task}
  */
  readonly isApplySubjectTask?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#is_copy_to_library_enabled FleetAppsManagementRunbook#is_copy_to_library_enabled}
  */
  readonly isCopyToLibraryEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#is_discovery_output_task FleetAppsManagementRunbook#is_discovery_output_task}
  */
  readonly isDiscoveryOutputTask?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#name FleetAppsManagementRunbook#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#os_type FleetAppsManagementRunbook#os_type}
  */
  readonly osType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#platform FleetAppsManagementRunbook#platform}
  */
  readonly platform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#scope FleetAppsManagementRunbook#scope}
  */
  readonly scope: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#task_record_id FleetAppsManagementRunbook#task_record_id}
  */
  readonly taskRecordId?: string;
  /**
  * execution_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#execution_details FleetAppsManagementRunbook#execution_details}
  */
  readonly executionDetails?: FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetails;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#properties FleetAppsManagementRunbook#properties}
  */
  readonly properties?: FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsProperties;
}

export function fleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsToTerraform(struct?: FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsOutputReference | FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    is_apply_subject_task: cdktf.booleanToTerraform(struct!.isApplySubjectTask),
    is_copy_to_library_enabled: cdktf.booleanToTerraform(struct!.isCopyToLibraryEnabled),
    is_discovery_output_task: cdktf.booleanToTerraform(struct!.isDiscoveryOutputTask),
    name: cdktf.stringToTerraform(struct!.name),
    os_type: cdktf.stringToTerraform(struct!.osType),
    platform: cdktf.stringToTerraform(struct!.platform),
    scope: cdktf.stringToTerraform(struct!.scope),
    task_record_id: cdktf.stringToTerraform(struct!.taskRecordId),
    execution_details: fleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsToTerraform(struct!.executionDetails),
    properties: fleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsPropertiesToTerraform(struct!.properties),
  }
}


export function fleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsToHclTerraform(struct?: FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsOutputReference | FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_apply_subject_task: {
      value: cdktf.booleanToHclTerraform(struct!.isApplySubjectTask),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_copy_to_library_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isCopyToLibraryEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_discovery_output_task: {
      value: cdktf.booleanToHclTerraform(struct!.isDiscoveryOutputTask),
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
    os_type: {
      value: cdktf.stringToHclTerraform(struct!.osType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    platform: {
      value: cdktf.stringToHclTerraform(struct!.platform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_record_id: {
      value: cdktf.stringToHclTerraform(struct!.taskRecordId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_details: {
      value: fleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsToHclTerraform(struct!.executionDetails),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsList",
    },
    properties: {
      value: fleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsPropertiesToHclTerraform(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._isApplySubjectTask !== undefined) {
      hasAnyValues = true;
      internalValueResult.isApplySubjectTask = this._isApplySubjectTask;
    }
    if (this._isCopyToLibraryEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCopyToLibraryEnabled = this._isCopyToLibraryEnabled;
    }
    if (this._isDiscoveryOutputTask !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDiscoveryOutputTask = this._isDiscoveryOutputTask;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._osType !== undefined) {
      hasAnyValues = true;
      internalValueResult.osType = this._osType;
    }
    if (this._platform !== undefined) {
      hasAnyValues = true;
      internalValueResult.platform = this._platform;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._taskRecordId !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskRecordId = this._taskRecordId;
    }
    if (this._executionDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionDetails = this._executionDetails?.internalValue;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._isApplySubjectTask = undefined;
      this._isCopyToLibraryEnabled = undefined;
      this._isDiscoveryOutputTask = undefined;
      this._name = undefined;
      this._osType = undefined;
      this._platform = undefined;
      this._scope = undefined;
      this._taskRecordId = undefined;
      this._executionDetails.internalValue = undefined;
      this._properties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._isApplySubjectTask = value.isApplySubjectTask;
      this._isCopyToLibraryEnabled = value.isCopyToLibraryEnabled;
      this._isDiscoveryOutputTask = value.isDiscoveryOutputTask;
      this._name = value.name;
      this._osType = value.osType;
      this._platform = value.platform;
      this._scope = value.scope;
      this._taskRecordId = value.taskRecordId;
      this._executionDetails.internalValue = value.executionDetails;
      this._properties.internalValue = value.properties;
    }
  }

  // description - computed: true, optional: true, required: false
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

  // is_apply_subject_task - computed: true, optional: true, required: false
  private _isApplySubjectTask?: boolean | cdktf.IResolvable; 
  public get isApplySubjectTask() {
    return this.getBooleanAttribute('is_apply_subject_task');
  }
  public set isApplySubjectTask(value: boolean | cdktf.IResolvable) {
    this._isApplySubjectTask = value;
  }
  public resetIsApplySubjectTask() {
    this._isApplySubjectTask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isApplySubjectTaskInput() {
    return this._isApplySubjectTask;
  }

  // is_copy_to_library_enabled - computed: true, optional: true, required: false
  private _isCopyToLibraryEnabled?: boolean | cdktf.IResolvable; 
  public get isCopyToLibraryEnabled() {
    return this.getBooleanAttribute('is_copy_to_library_enabled');
  }
  public set isCopyToLibraryEnabled(value: boolean | cdktf.IResolvable) {
    this._isCopyToLibraryEnabled = value;
  }
  public resetIsCopyToLibraryEnabled() {
    this._isCopyToLibraryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCopyToLibraryEnabledInput() {
    return this._isCopyToLibraryEnabled;
  }

  // is_discovery_output_task - computed: true, optional: true, required: false
  private _isDiscoveryOutputTask?: boolean | cdktf.IResolvable; 
  public get isDiscoveryOutputTask() {
    return this.getBooleanAttribute('is_discovery_output_task');
  }
  public set isDiscoveryOutputTask(value: boolean | cdktf.IResolvable) {
    this._isDiscoveryOutputTask = value;
  }
  public resetIsDiscoveryOutputTask() {
    this._isDiscoveryOutputTask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDiscoveryOutputTaskInput() {
    return this._isDiscoveryOutputTask;
  }

  // name - computed: true, optional: true, required: false
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

  // os_type - computed: true, optional: true, required: false
  private _osType?: string; 
  public get osType() {
    return this.getStringAttribute('os_type');
  }
  public set osType(value: string) {
    this._osType = value;
  }
  public resetOsType() {
    this._osType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType;
  }

  // platform - computed: true, optional: true, required: false
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  public resetPlatform() {
    this._platform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // task_record_id - computed: true, optional: true, required: false
  private _taskRecordId?: string; 
  public get taskRecordId() {
    return this.getStringAttribute('task_record_id');
  }
  public set taskRecordId(value: string) {
    this._taskRecordId = value;
  }
  public resetTaskRecordId() {
    this._taskRecordId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskRecordIdInput() {
    return this._taskRecordId;
  }

  // execution_details - computed: false, optional: true, required: false
  private _executionDetails = new FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetailsOutputReference(this, "execution_details");
  public get executionDetails() {
    return this._executionDetails;
  }
  public putExecutionDetails(value: FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsExecutionDetails) {
    this._executionDetails.internalValue = value;
  }
  public resetExecutionDetails() {
    this._executionDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionDetailsInput() {
    return this._executionDetails.internalValue;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsProperties) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}
export interface FleetAppsManagementRunbookRunbookVersionTasks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#step_name FleetAppsManagementRunbook#step_name}
  */
  readonly stepName: string;
  /**
  * output_variable_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#output_variable_mappings FleetAppsManagementRunbook#output_variable_mappings}
  */
  readonly outputVariableMappings?: FleetAppsManagementRunbookRunbookVersionTasksOutputVariableMappings[] | cdktf.IResolvable;
  /**
  * step_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#step_properties FleetAppsManagementRunbook#step_properties}
  */
  readonly stepProperties?: FleetAppsManagementRunbookRunbookVersionTasksStepProperties;
  /**
  * task_record_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#task_record_details FleetAppsManagementRunbook#task_record_details}
  */
  readonly taskRecordDetails: FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetails;
}

export function fleetAppsManagementRunbookRunbookVersionTasksToTerraform(struct?: FleetAppsManagementRunbookRunbookVersionTasks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    step_name: cdktf.stringToTerraform(struct!.stepName),
    output_variable_mappings: cdktf.listMapper(fleetAppsManagementRunbookRunbookVersionTasksOutputVariableMappingsToTerraform, true)(struct!.outputVariableMappings),
    step_properties: fleetAppsManagementRunbookRunbookVersionTasksStepPropertiesToTerraform(struct!.stepProperties),
    task_record_details: fleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsToTerraform(struct!.taskRecordDetails),
  }
}


export function fleetAppsManagementRunbookRunbookVersionTasksToHclTerraform(struct?: FleetAppsManagementRunbookRunbookVersionTasks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    step_name: {
      value: cdktf.stringToHclTerraform(struct!.stepName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_variable_mappings: {
      value: cdktf.listMapperHcl(fleetAppsManagementRunbookRunbookVersionTasksOutputVariableMappingsToHclTerraform, true)(struct!.outputVariableMappings),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookRunbookVersionTasksOutputVariableMappingsList",
    },
    step_properties: {
      value: fleetAppsManagementRunbookRunbookVersionTasksStepPropertiesToHclTerraform(struct!.stepProperties),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesList",
    },
    task_record_details: {
      value: fleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsToHclTerraform(struct!.taskRecordDetails),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementRunbookRunbookVersionTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetAppsManagementRunbookRunbookVersionTasks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stepName !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepName = this._stepName;
    }
    if (this._outputVariableMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputVariableMappings = this._outputVariableMappings?.internalValue;
    }
    if (this._stepProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepProperties = this._stepProperties?.internalValue;
    }
    if (this._taskRecordDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskRecordDetails = this._taskRecordDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementRunbookRunbookVersionTasks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stepName = undefined;
      this._outputVariableMappings.internalValue = undefined;
      this._stepProperties.internalValue = undefined;
      this._taskRecordDetails.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stepName = value.stepName;
      this._outputVariableMappings.internalValue = value.outputVariableMappings;
      this._stepProperties.internalValue = value.stepProperties;
      this._taskRecordDetails.internalValue = value.taskRecordDetails;
    }
  }

  // step_name - computed: false, optional: false, required: true
  private _stepName?: string; 
  public get stepName() {
    return this.getStringAttribute('step_name');
  }
  public set stepName(value: string) {
    this._stepName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepNameInput() {
    return this._stepName;
  }

  // output_variable_mappings - computed: false, optional: true, required: false
  private _outputVariableMappings = new FleetAppsManagementRunbookRunbookVersionTasksOutputVariableMappingsList(this, "output_variable_mappings", false);
  public get outputVariableMappings() {
    return this._outputVariableMappings;
  }
  public putOutputVariableMappings(value: FleetAppsManagementRunbookRunbookVersionTasksOutputVariableMappings[] | cdktf.IResolvable) {
    this._outputVariableMappings.internalValue = value;
  }
  public resetOutputVariableMappings() {
    this._outputVariableMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputVariableMappingsInput() {
    return this._outputVariableMappings.internalValue;
  }

  // step_properties - computed: false, optional: true, required: false
  private _stepProperties = new FleetAppsManagementRunbookRunbookVersionTasksStepPropertiesOutputReference(this, "step_properties");
  public get stepProperties() {
    return this._stepProperties;
  }
  public putStepProperties(value: FleetAppsManagementRunbookRunbookVersionTasksStepProperties) {
    this._stepProperties.internalValue = value;
  }
  public resetStepProperties() {
    this._stepProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepPropertiesInput() {
    return this._stepProperties.internalValue;
  }

  // task_record_details - computed: false, optional: false, required: true
  private _taskRecordDetails = new FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetailsOutputReference(this, "task_record_details");
  public get taskRecordDetails() {
    return this._taskRecordDetails;
  }
  public putTaskRecordDetails(value: FleetAppsManagementRunbookRunbookVersionTasksTaskRecordDetails) {
    this._taskRecordDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskRecordDetailsInput() {
    return this._taskRecordDetails.internalValue;
  }
}

export class FleetAppsManagementRunbookRunbookVersionTasksList extends cdktf.ComplexList {
  public internalValue? : FleetAppsManagementRunbookRunbookVersionTasks[] | cdktf.IResolvable

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
  public get(index: number): FleetAppsManagementRunbookRunbookVersionTasksOutputReference {
    return new FleetAppsManagementRunbookRunbookVersionTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementRunbookRunbookVersion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#is_latest FleetAppsManagementRunbook#is_latest}
  */
  readonly isLatest?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#version FleetAppsManagementRunbook#version}
  */
  readonly version?: string;
  /**
  * execution_workflow_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#execution_workflow_details FleetAppsManagementRunbook#execution_workflow_details}
  */
  readonly executionWorkflowDetails: FleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetails;
  /**
  * groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#groups FleetAppsManagementRunbook#groups}
  */
  readonly groups: FleetAppsManagementRunbookRunbookVersionGroups[] | cdktf.IResolvable;
  /**
  * rollback_workflow_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#rollback_workflow_details FleetAppsManagementRunbook#rollback_workflow_details}
  */
  readonly rollbackWorkflowDetails?: FleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetails;
  /**
  * tasks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#tasks FleetAppsManagementRunbook#tasks}
  */
  readonly tasks: FleetAppsManagementRunbookRunbookVersionTasks[] | cdktf.IResolvable;
}

export function fleetAppsManagementRunbookRunbookVersionToTerraform(struct?: FleetAppsManagementRunbookRunbookVersionOutputReference | FleetAppsManagementRunbookRunbookVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_latest: cdktf.booleanToTerraform(struct!.isLatest),
    version: cdktf.stringToTerraform(struct!.version),
    execution_workflow_details: fleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetailsToTerraform(struct!.executionWorkflowDetails),
    groups: cdktf.listMapper(fleetAppsManagementRunbookRunbookVersionGroupsToTerraform, true)(struct!.groups),
    rollback_workflow_details: fleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetailsToTerraform(struct!.rollbackWorkflowDetails),
    tasks: cdktf.listMapper(fleetAppsManagementRunbookRunbookVersionTasksToTerraform, true)(struct!.tasks),
  }
}


export function fleetAppsManagementRunbookRunbookVersionToHclTerraform(struct?: FleetAppsManagementRunbookRunbookVersionOutputReference | FleetAppsManagementRunbookRunbookVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_latest: {
      value: cdktf.booleanToHclTerraform(struct!.isLatest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_workflow_details: {
      value: fleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetailsToHclTerraform(struct!.executionWorkflowDetails),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetailsList",
    },
    groups: {
      value: cdktf.listMapperHcl(fleetAppsManagementRunbookRunbookVersionGroupsToHclTerraform, true)(struct!.groups),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookRunbookVersionGroupsList",
    },
    rollback_workflow_details: {
      value: fleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetailsToHclTerraform(struct!.rollbackWorkflowDetails),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetailsList",
    },
    tasks: {
      value: cdktf.listMapperHcl(fleetAppsManagementRunbookRunbookVersionTasksToHclTerraform, true)(struct!.tasks),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookRunbookVersionTasksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementRunbookRunbookVersionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementRunbookRunbookVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isLatest !== undefined) {
      hasAnyValues = true;
      internalValueResult.isLatest = this._isLatest;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._executionWorkflowDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionWorkflowDetails = this._executionWorkflowDetails?.internalValue;
    }
    if (this._groups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups?.internalValue;
    }
    if (this._rollbackWorkflowDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollbackWorkflowDetails = this._rollbackWorkflowDetails?.internalValue;
    }
    if (this._tasks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tasks = this._tasks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementRunbookRunbookVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isLatest = undefined;
      this._version = undefined;
      this._executionWorkflowDetails.internalValue = undefined;
      this._groups.internalValue = undefined;
      this._rollbackWorkflowDetails.internalValue = undefined;
      this._tasks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isLatest = value.isLatest;
      this._version = value.version;
      this._executionWorkflowDetails.internalValue = value.executionWorkflowDetails;
      this._groups.internalValue = value.groups;
      this._rollbackWorkflowDetails.internalValue = value.rollbackWorkflowDetails;
      this._tasks.internalValue = value.tasks;
    }
  }

  // is_latest - computed: true, optional: true, required: false
  private _isLatest?: boolean | cdktf.IResolvable; 
  public get isLatest() {
    return this.getBooleanAttribute('is_latest');
  }
  public set isLatest(value: boolean | cdktf.IResolvable) {
    this._isLatest = value;
  }
  public resetIsLatest() {
    this._isLatest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLatestInput() {
    return this._isLatest;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // execution_workflow_details - computed: false, optional: false, required: true
  private _executionWorkflowDetails = new FleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetailsOutputReference(this, "execution_workflow_details");
  public get executionWorkflowDetails() {
    return this._executionWorkflowDetails;
  }
  public putExecutionWorkflowDetails(value: FleetAppsManagementRunbookRunbookVersionExecutionWorkflowDetails) {
    this._executionWorkflowDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionWorkflowDetailsInput() {
    return this._executionWorkflowDetails.internalValue;
  }

  // groups - computed: false, optional: false, required: true
  private _groups = new FleetAppsManagementRunbookRunbookVersionGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: FleetAppsManagementRunbookRunbookVersionGroups[] | cdktf.IResolvable) {
    this._groups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }

  // rollback_workflow_details - computed: false, optional: true, required: false
  private _rollbackWorkflowDetails = new FleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetailsOutputReference(this, "rollback_workflow_details");
  public get rollbackWorkflowDetails() {
    return this._rollbackWorkflowDetails;
  }
  public putRollbackWorkflowDetails(value: FleetAppsManagementRunbookRunbookVersionRollbackWorkflowDetails) {
    this._rollbackWorkflowDetails.internalValue = value;
  }
  public resetRollbackWorkflowDetails() {
    this._rollbackWorkflowDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollbackWorkflowDetailsInput() {
    return this._rollbackWorkflowDetails.internalValue;
  }

  // tasks - computed: false, optional: false, required: true
  private _tasks = new FleetAppsManagementRunbookRunbookVersionTasksList(this, "tasks", false);
  public get tasks() {
    return this._tasks;
  }
  public putTasks(value: FleetAppsManagementRunbookRunbookVersionTasks[] | cdktf.IResolvable) {
    this._tasks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksInput() {
    return this._tasks.internalValue;
  }
}
export interface FleetAppsManagementRunbookTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#create FleetAppsManagementRunbook#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#delete FleetAppsManagementRunbook#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#update FleetAppsManagementRunbook#update}
  */
  readonly update?: string;
}

export function fleetAppsManagementRunbookTimeoutsToTerraform(struct?: FleetAppsManagementRunbookTimeouts | cdktf.IResolvable): any {
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


export function fleetAppsManagementRunbookTimeoutsToHclTerraform(struct?: FleetAppsManagementRunbookTimeouts | cdktf.IResolvable): any {
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

export class FleetAppsManagementRunbookTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FleetAppsManagementRunbookTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FleetAppsManagementRunbookTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook oci_fleet_apps_management_runbook}
*/
export class FleetAppsManagementRunbook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_fleet_apps_management_runbook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FleetAppsManagementRunbook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FleetAppsManagementRunbook to import
  * @param importFromId The id of the existing FleetAppsManagementRunbook that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FleetAppsManagementRunbook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_fleet_apps_management_runbook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fleet_apps_management_runbook oci_fleet_apps_management_runbook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FleetAppsManagementRunbookConfig
  */
  public constructor(scope: Construct, id: string, config: FleetAppsManagementRunbookConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_fleet_apps_management_runbook',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._estimatedTime = config.estimatedTime;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._isDefault = config.isDefault;
    this._isSudoAccessNeeded = config.isSudoAccessNeeded;
    this._operation = config.operation;
    this._osType = config.osType;
    this._platform = config.platform;
    this._runbookVersion.internalValue = config.runbookVersion;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
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

  // description - computed: true, optional: true, required: false
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

  // estimated_time - computed: true, optional: true, required: false
  private _estimatedTime?: string; 
  public get estimatedTime() {
    return this.getStringAttribute('estimated_time');
  }
  public set estimatedTime(value: string) {
    this._estimatedTime = value;
  }
  public resetEstimatedTime() {
    this._estimatedTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estimatedTimeInput() {
    return this._estimatedTime;
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

  // has_draft_version - computed: true, optional: false, required: false
  public get hasDraftVersion() {
    return this.getBooleanAttribute('has_draft_version');
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

  // is_default - computed: true, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
  }

  // is_sudo_access_needed - computed: true, optional: true, required: false
  private _isSudoAccessNeeded?: boolean | cdktf.IResolvable; 
  public get isSudoAccessNeeded() {
    return this.getBooleanAttribute('is_sudo_access_needed');
  }
  public set isSudoAccessNeeded(value: boolean | cdktf.IResolvable) {
    this._isSudoAccessNeeded = value;
  }
  public resetIsSudoAccessNeeded() {
    this._isSudoAccessNeeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSudoAccessNeededInput() {
    return this._isSudoAccessNeeded;
  }

  // latest_version - computed: true, optional: false, required: false
  public get latestVersion() {
    return this.getStringAttribute('latest_version');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // operation - computed: false, optional: false, required: true
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // os_type - computed: true, optional: true, required: false
  private _osType?: string; 
  public get osType() {
    return this.getStringAttribute('os_type');
  }
  public set osType(value: string) {
    this._osType = value;
  }
  public resetOsType() {
    this._osType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType;
  }

  // platform - computed: true, optional: true, required: false
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  public resetPlatform() {
    this._platform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // resource_region - computed: true, optional: false, required: false
  public get resourceRegion() {
    return this.getStringAttribute('resource_region');
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // runbook_version - computed: false, optional: false, required: true
  private _runbookVersion = new FleetAppsManagementRunbookRunbookVersionOutputReference(this, "runbook_version");
  public get runbookVersion() {
    return this._runbookVersion;
  }
  public putRunbookVersion(value: FleetAppsManagementRunbookRunbookVersion) {
    this._runbookVersion.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runbookVersionInput() {
    return this._runbookVersion.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FleetAppsManagementRunbookTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FleetAppsManagementRunbookTimeouts) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      estimated_time: cdktf.stringToTerraform(this._estimatedTime),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      is_default: cdktf.booleanToTerraform(this._isDefault),
      is_sudo_access_needed: cdktf.booleanToTerraform(this._isSudoAccessNeeded),
      operation: cdktf.stringToTerraform(this._operation),
      os_type: cdktf.stringToTerraform(this._osType),
      platform: cdktf.stringToTerraform(this._platform),
      runbook_version: fleetAppsManagementRunbookRunbookVersionToTerraform(this._runbookVersion.internalValue),
      timeouts: fleetAppsManagementRunbookTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      estimated_time: {
        value: cdktf.stringToHclTerraform(this._estimatedTime),
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
      is_default: {
        value: cdktf.booleanToHclTerraform(this._isDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_sudo_access_needed: {
        value: cdktf.booleanToHclTerraform(this._isSudoAccessNeeded),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      operation: {
        value: cdktf.stringToHclTerraform(this._operation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_type: {
        value: cdktf.stringToHclTerraform(this._osType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform: {
        value: cdktf.stringToHclTerraform(this._platform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runbook_version: {
        value: fleetAppsManagementRunbookRunbookVersionToHclTerraform(this._runbookVersion.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetAppsManagementRunbookRunbookVersionList",
      },
      timeouts: {
        value: fleetAppsManagementRunbookTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FleetAppsManagementRunbookTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
