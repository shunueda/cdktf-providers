// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FleetAppsManagementRunbookVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#defined_tags FleetAppsManagementRunbookVersion#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#freeform_tags FleetAppsManagementRunbookVersion#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#id FleetAppsManagementRunbookVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#runbook_id FleetAppsManagementRunbookVersion#runbook_id}
  */
  readonly runbookId: string;
  /**
  * execution_workflow_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#execution_workflow_details FleetAppsManagementRunbookVersion#execution_workflow_details}
  */
  readonly executionWorkflowDetails: FleetAppsManagementRunbookVersionExecutionWorkflowDetails;
  /**
  * groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#groups FleetAppsManagementRunbookVersion#groups}
  */
  readonly groups: FleetAppsManagementRunbookVersionGroups[] | cdktf.IResolvable;
  /**
  * rollback_workflow_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#rollback_workflow_details FleetAppsManagementRunbookVersion#rollback_workflow_details}
  */
  readonly rollbackWorkflowDetails?: FleetAppsManagementRunbookVersionRollbackWorkflowDetails;
  /**
  * tasks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#tasks FleetAppsManagementRunbookVersion#tasks}
  */
  readonly tasks: FleetAppsManagementRunbookVersionTasks[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#timeouts FleetAppsManagementRunbookVersion#timeouts}
  */
  readonly timeouts?: FleetAppsManagementRunbookVersionTimeouts;
}
export interface FleetAppsManagementRunbookVersionExecutionWorkflowDetailsWorkflowSteps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#group_name FleetAppsManagementRunbookVersion#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#step_name FleetAppsManagementRunbookVersion#step_name}
  */
  readonly stepName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#steps FleetAppsManagementRunbookVersion#steps}
  */
  readonly steps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#type FleetAppsManagementRunbookVersion#type}
  */
  readonly type: string;
}

export function fleetAppsManagementRunbookVersionExecutionWorkflowDetailsWorkflowStepsToTerraform(struct?: FleetAppsManagementRunbookVersionExecutionWorkflowDetailsWorkflowSteps | cdktf.IResolvable): any {
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


export function fleetAppsManagementRunbookVersionExecutionWorkflowDetailsWorkflowStepsToHclTerraform(struct?: FleetAppsManagementRunbookVersionExecutionWorkflowDetailsWorkflowSteps | cdktf.IResolvable): any {
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

export class FleetAppsManagementRunbookVersionExecutionWorkflowDetailsWorkflowStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetAppsManagementRunbookVersionExecutionWorkflowDetailsWorkflowSteps | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FleetAppsManagementRunbookVersionExecutionWorkflowDetailsWorkflowSteps | cdktf.IResolvable | undefined) {
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

export class FleetAppsManagementRunbookVersionExecutionWorkflowDetailsWorkflowStepsList extends cdktf.ComplexList {
  public internalValue? : FleetAppsManagementRunbookVersionExecutionWorkflowDetailsWorkflowSteps[] | cdktf.IResolvable

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
  public get(index: number): FleetAppsManagementRunbookVersionExecutionWorkflowDetailsWorkflowStepsOutputReference {
    return new FleetAppsManagementRunbookVersionExecutionWorkflowDetailsWorkflowStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementRunbookVersionExecutionWorkflowDetailsWorkflow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#group_name FleetAppsManagementRunbookVersion#group_name}
  */
  readonly groupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#type FleetAppsManagementRunbookVersion#type}
  */
  readonly type: string;
  /**
  * steps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#steps FleetAppsManagementRunbookVersion#steps}
  */
  readonly steps: FleetAppsManagementRunbookVersionExecutionWorkflowDetailsWorkflowSteps[] | cdktf.IResolvable;
}

export function fleetAppsManagementRunbookVersionExecutionWorkflowDetailsWorkflowToTerraform(struct?: FleetAppsManagementRunbookVersionExecutionWorkflowDetailsWorkflow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_name: cdktf.stringToTerraform(struct!.groupName),
    type: cdktf.stringToTerraform(struct!.type),
    steps: cdktf.listMapper(fleetAppsManagementRunbookVersionExecutionWorkflowDetailsWorkflowStepsToTerraform, true)(struct!.steps),
  }
}


export function fleetAppsManagementRunbookVersionExecutionWorkflowDetailsWorkflowToHclTerraform(struct?: FleetAppsManagementRunbookVersionExecutionWorkflowDetailsWorkflow | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(fleetAppsManagementRunbookVersionExecutionWorkflowDetailsWorkflowStepsToHclTerraform, true)(struct!.steps),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookVersionExecutionWorkflowDetailsWorkflowStepsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementRunbookVersionExecutionWorkflowDetailsWorkflowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetAppsManagementRunbookVersionExecutionWorkflowDetailsWorkflow | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FleetAppsManagementRunbookVersionExecutionWorkflowDetailsWorkflow | cdktf.IResolvable | undefined) {
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
  private _steps = new FleetAppsManagementRunbookVersionExecutionWorkflowDetailsWorkflowStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }
  public putSteps(value: FleetAppsManagementRunbookVersionExecutionWorkflowDetailsWorkflowSteps[] | cdktf.IResolvable) {
    this._steps.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps.internalValue;
  }
}

export class FleetAppsManagementRunbookVersionExecutionWorkflowDetailsWorkflowList extends cdktf.ComplexList {
  public internalValue? : FleetAppsManagementRunbookVersionExecutionWorkflowDetailsWorkflow[] | cdktf.IResolvable

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
  public get(index: number): FleetAppsManagementRunbookVersionExecutionWorkflowDetailsWorkflowOutputReference {
    return new FleetAppsManagementRunbookVersionExecutionWorkflowDetailsWorkflowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementRunbookVersionExecutionWorkflowDetails {
  /**
  * workflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#workflow FleetAppsManagementRunbookVersion#workflow}
  */
  readonly workflow: FleetAppsManagementRunbookVersionExecutionWorkflowDetailsWorkflow[] | cdktf.IResolvable;
}

export function fleetAppsManagementRunbookVersionExecutionWorkflowDetailsToTerraform(struct?: FleetAppsManagementRunbookVersionExecutionWorkflowDetailsOutputReference | FleetAppsManagementRunbookVersionExecutionWorkflowDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workflow: cdktf.listMapper(fleetAppsManagementRunbookVersionExecutionWorkflowDetailsWorkflowToTerraform, true)(struct!.workflow),
  }
}


export function fleetAppsManagementRunbookVersionExecutionWorkflowDetailsToHclTerraform(struct?: FleetAppsManagementRunbookVersionExecutionWorkflowDetailsOutputReference | FleetAppsManagementRunbookVersionExecutionWorkflowDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    workflow: {
      value: cdktf.listMapperHcl(fleetAppsManagementRunbookVersionExecutionWorkflowDetailsWorkflowToHclTerraform, true)(struct!.workflow),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookVersionExecutionWorkflowDetailsWorkflowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementRunbookVersionExecutionWorkflowDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementRunbookVersionExecutionWorkflowDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workflow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflow = this._workflow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementRunbookVersionExecutionWorkflowDetails | undefined) {
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
  private _workflow = new FleetAppsManagementRunbookVersionExecutionWorkflowDetailsWorkflowList(this, "workflow", false);
  public get workflow() {
    return this._workflow;
  }
  public putWorkflow(value: FleetAppsManagementRunbookVersionExecutionWorkflowDetailsWorkflow[] | cdktf.IResolvable) {
    this._workflow.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowInput() {
    return this._workflow.internalValue;
  }
}
export interface FleetAppsManagementRunbookVersionGroupsPropertiesNotificationPreferences {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#should_notify_on_pause FleetAppsManagementRunbookVersion#should_notify_on_pause}
  */
  readonly shouldNotifyOnPause?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#should_notify_on_task_failure FleetAppsManagementRunbookVersion#should_notify_on_task_failure}
  */
  readonly shouldNotifyOnTaskFailure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#should_notify_on_task_success FleetAppsManagementRunbookVersion#should_notify_on_task_success}
  */
  readonly shouldNotifyOnTaskSuccess?: boolean | cdktf.IResolvable;
}

export function fleetAppsManagementRunbookVersionGroupsPropertiesNotificationPreferencesToTerraform(struct?: FleetAppsManagementRunbookVersionGroupsPropertiesNotificationPreferencesOutputReference | FleetAppsManagementRunbookVersionGroupsPropertiesNotificationPreferences): any {
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


export function fleetAppsManagementRunbookVersionGroupsPropertiesNotificationPreferencesToHclTerraform(struct?: FleetAppsManagementRunbookVersionGroupsPropertiesNotificationPreferencesOutputReference | FleetAppsManagementRunbookVersionGroupsPropertiesNotificationPreferences): any {
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

export class FleetAppsManagementRunbookVersionGroupsPropertiesNotificationPreferencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementRunbookVersionGroupsPropertiesNotificationPreferences | undefined {
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

  public set internalValue(value: FleetAppsManagementRunbookVersionGroupsPropertiesNotificationPreferences | undefined) {
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
export interface FleetAppsManagementRunbookVersionGroupsPropertiesPauseDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#duration_in_minutes FleetAppsManagementRunbookVersion#duration_in_minutes}
  */
  readonly durationInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#kind FleetAppsManagementRunbookVersion#kind}
  */
  readonly kind: string;
}

export function fleetAppsManagementRunbookVersionGroupsPropertiesPauseDetailsToTerraform(struct?: FleetAppsManagementRunbookVersionGroupsPropertiesPauseDetailsOutputReference | FleetAppsManagementRunbookVersionGroupsPropertiesPauseDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration_in_minutes: cdktf.numberToTerraform(struct!.durationInMinutes),
    kind: cdktf.stringToTerraform(struct!.kind),
  }
}


export function fleetAppsManagementRunbookVersionGroupsPropertiesPauseDetailsToHclTerraform(struct?: FleetAppsManagementRunbookVersionGroupsPropertiesPauseDetailsOutputReference | FleetAppsManagementRunbookVersionGroupsPropertiesPauseDetails): any {
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

export class FleetAppsManagementRunbookVersionGroupsPropertiesPauseDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementRunbookVersionGroupsPropertiesPauseDetails | undefined {
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

  public set internalValue(value: FleetAppsManagementRunbookVersionGroupsPropertiesPauseDetails | undefined) {
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
export interface FleetAppsManagementRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#output_variable_name FleetAppsManagementRunbookVersion#output_variable_name}
  */
  readonly outputVariableName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#step_name FleetAppsManagementRunbookVersion#step_name}
  */
  readonly stepName?: string;
}

export function fleetAppsManagementRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsToTerraform(struct?: FleetAppsManagementRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsOutputReference | FleetAppsManagementRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    output_variable_name: cdktf.stringToTerraform(struct!.outputVariableName),
    step_name: cdktf.stringToTerraform(struct!.stepName),
  }
}


export function fleetAppsManagementRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsToHclTerraform(struct?: FleetAppsManagementRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsOutputReference | FleetAppsManagementRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetails): any {
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

export class FleetAppsManagementRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetails | undefined {
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

  public set internalValue(value: FleetAppsManagementRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetails | undefined) {
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
export interface FleetAppsManagementRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#resource_id FleetAppsManagementRunbookVersion#resource_id}
  */
  readonly resourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#resource_type FleetAppsManagementRunbookVersion#resource_type}
  */
  readonly resourceType?: string;
  /**
  * output_variable_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#output_variable_details FleetAppsManagementRunbookVersion#output_variable_details}
  */
  readonly outputVariableDetails?: FleetAppsManagementRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetails;
}

export function fleetAppsManagementRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsToTerraform(struct?: FleetAppsManagementRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    output_variable_details: fleetAppsManagementRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsToTerraform(struct!.outputVariableDetails),
  }
}


export function fleetAppsManagementRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsToHclTerraform(struct?: FleetAppsManagementRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetails | cdktf.IResolvable): any {
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
      value: fleetAppsManagementRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsToHclTerraform(struct!.outputVariableDetails),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetAppsManagementRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetails | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FleetAppsManagementRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetails | cdktf.IResolvable | undefined) {
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
  private _outputVariableDetails = new FleetAppsManagementRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsOutputReference(this, "output_variable_details");
  public get outputVariableDetails() {
    return this._outputVariableDetails;
  }
  public putOutputVariableDetails(value: FleetAppsManagementRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetails) {
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

export class FleetAppsManagementRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsList extends cdktf.ComplexList {
  public internalValue? : FleetAppsManagementRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetails[] | cdktf.IResolvable

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
  public get(index: number): FleetAppsManagementRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputReference {
    return new FleetAppsManagementRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementRunbookVersionGroupsPropertiesRunOn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#condition FleetAppsManagementRunbookVersion#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#host FleetAppsManagementRunbookVersion#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#kind FleetAppsManagementRunbookVersion#kind}
  */
  readonly kind: string;
  /**
  * previous_task_instance_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#previous_task_instance_details FleetAppsManagementRunbookVersion#previous_task_instance_details}
  */
  readonly previousTaskInstanceDetails?: FleetAppsManagementRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetails[] | cdktf.IResolvable;
}

export function fleetAppsManagementRunbookVersionGroupsPropertiesRunOnToTerraform(struct?: FleetAppsManagementRunbookVersionGroupsPropertiesRunOnOutputReference | FleetAppsManagementRunbookVersionGroupsPropertiesRunOn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    host: cdktf.stringToTerraform(struct!.host),
    kind: cdktf.stringToTerraform(struct!.kind),
    previous_task_instance_details: cdktf.listMapper(fleetAppsManagementRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsToTerraform, true)(struct!.previousTaskInstanceDetails),
  }
}


export function fleetAppsManagementRunbookVersionGroupsPropertiesRunOnToHclTerraform(struct?: FleetAppsManagementRunbookVersionGroupsPropertiesRunOnOutputReference | FleetAppsManagementRunbookVersionGroupsPropertiesRunOn): any {
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
      value: cdktf.listMapperHcl(fleetAppsManagementRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsToHclTerraform, true)(struct!.previousTaskInstanceDetails),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementRunbookVersionGroupsPropertiesRunOnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementRunbookVersionGroupsPropertiesRunOn | undefined {
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

  public set internalValue(value: FleetAppsManagementRunbookVersionGroupsPropertiesRunOn | undefined) {
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
  private _previousTaskInstanceDetails = new FleetAppsManagementRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsList(this, "previous_task_instance_details", false);
  public get previousTaskInstanceDetails() {
    return this._previousTaskInstanceDetails;
  }
  public putPreviousTaskInstanceDetails(value: FleetAppsManagementRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetails[] | cdktf.IResolvable) {
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
export interface FleetAppsManagementRunbookVersionGroupsProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#action_on_failure FleetAppsManagementRunbookVersion#action_on_failure}
  */
  readonly actionOnFailure: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#pre_condition FleetAppsManagementRunbookVersion#pre_condition}
  */
  readonly preCondition?: string;
  /**
  * notification_preferences block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#notification_preferences FleetAppsManagementRunbookVersion#notification_preferences}
  */
  readonly notificationPreferences?: FleetAppsManagementRunbookVersionGroupsPropertiesNotificationPreferences;
  /**
  * pause_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#pause_details FleetAppsManagementRunbookVersion#pause_details}
  */
  readonly pauseDetails?: FleetAppsManagementRunbookVersionGroupsPropertiesPauseDetails;
  /**
  * run_on block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#run_on FleetAppsManagementRunbookVersion#run_on}
  */
  readonly runOn?: FleetAppsManagementRunbookVersionGroupsPropertiesRunOn;
}

export function fleetAppsManagementRunbookVersionGroupsPropertiesToTerraform(struct?: FleetAppsManagementRunbookVersionGroupsPropertiesOutputReference | FleetAppsManagementRunbookVersionGroupsProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_on_failure: cdktf.stringToTerraform(struct!.actionOnFailure),
    pre_condition: cdktf.stringToTerraform(struct!.preCondition),
    notification_preferences: fleetAppsManagementRunbookVersionGroupsPropertiesNotificationPreferencesToTerraform(struct!.notificationPreferences),
    pause_details: fleetAppsManagementRunbookVersionGroupsPropertiesPauseDetailsToTerraform(struct!.pauseDetails),
    run_on: fleetAppsManagementRunbookVersionGroupsPropertiesRunOnToTerraform(struct!.runOn),
  }
}


export function fleetAppsManagementRunbookVersionGroupsPropertiesToHclTerraform(struct?: FleetAppsManagementRunbookVersionGroupsPropertiesOutputReference | FleetAppsManagementRunbookVersionGroupsProperties): any {
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
      value: fleetAppsManagementRunbookVersionGroupsPropertiesNotificationPreferencesToHclTerraform(struct!.notificationPreferences),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookVersionGroupsPropertiesNotificationPreferencesList",
    },
    pause_details: {
      value: fleetAppsManagementRunbookVersionGroupsPropertiesPauseDetailsToHclTerraform(struct!.pauseDetails),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookVersionGroupsPropertiesPauseDetailsList",
    },
    run_on: {
      value: fleetAppsManagementRunbookVersionGroupsPropertiesRunOnToHclTerraform(struct!.runOn),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookVersionGroupsPropertiesRunOnList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementRunbookVersionGroupsPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementRunbookVersionGroupsProperties | undefined {
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

  public set internalValue(value: FleetAppsManagementRunbookVersionGroupsProperties | undefined) {
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
  private _notificationPreferences = new FleetAppsManagementRunbookVersionGroupsPropertiesNotificationPreferencesOutputReference(this, "notification_preferences");
  public get notificationPreferences() {
    return this._notificationPreferences;
  }
  public putNotificationPreferences(value: FleetAppsManagementRunbookVersionGroupsPropertiesNotificationPreferences) {
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
  private _pauseDetails = new FleetAppsManagementRunbookVersionGroupsPropertiesPauseDetailsOutputReference(this, "pause_details");
  public get pauseDetails() {
    return this._pauseDetails;
  }
  public putPauseDetails(value: FleetAppsManagementRunbookVersionGroupsPropertiesPauseDetails) {
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
  private _runOn = new FleetAppsManagementRunbookVersionGroupsPropertiesRunOnOutputReference(this, "run_on");
  public get runOn() {
    return this._runOn;
  }
  public putRunOn(value: FleetAppsManagementRunbookVersionGroupsPropertiesRunOn) {
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
export interface FleetAppsManagementRunbookVersionGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#name FleetAppsManagementRunbookVersion#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#type FleetAppsManagementRunbookVersion#type}
  */
  readonly type: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#properties FleetAppsManagementRunbookVersion#properties}
  */
  readonly properties?: FleetAppsManagementRunbookVersionGroupsProperties;
}

export function fleetAppsManagementRunbookVersionGroupsToTerraform(struct?: FleetAppsManagementRunbookVersionGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    properties: fleetAppsManagementRunbookVersionGroupsPropertiesToTerraform(struct!.properties),
  }
}


export function fleetAppsManagementRunbookVersionGroupsToHclTerraform(struct?: FleetAppsManagementRunbookVersionGroups | cdktf.IResolvable): any {
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
      value: fleetAppsManagementRunbookVersionGroupsPropertiesToHclTerraform(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookVersionGroupsPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementRunbookVersionGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetAppsManagementRunbookVersionGroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FleetAppsManagementRunbookVersionGroups | cdktf.IResolvable | undefined) {
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
  private _properties = new FleetAppsManagementRunbookVersionGroupsPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: FleetAppsManagementRunbookVersionGroupsProperties) {
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

export class FleetAppsManagementRunbookVersionGroupsList extends cdktf.ComplexList {
  public internalValue? : FleetAppsManagementRunbookVersionGroups[] | cdktf.IResolvable

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
  public get(index: number): FleetAppsManagementRunbookVersionGroupsOutputReference {
    return new FleetAppsManagementRunbookVersionGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementRunbookVersionRollbackWorkflowDetailsWorkflowSteps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#group_name FleetAppsManagementRunbookVersion#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#step_name FleetAppsManagementRunbookVersion#step_name}
  */
  readonly stepName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#steps FleetAppsManagementRunbookVersion#steps}
  */
  readonly steps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#type FleetAppsManagementRunbookVersion#type}
  */
  readonly type: string;
}

export function fleetAppsManagementRunbookVersionRollbackWorkflowDetailsWorkflowStepsToTerraform(struct?: FleetAppsManagementRunbookVersionRollbackWorkflowDetailsWorkflowSteps | cdktf.IResolvable): any {
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


export function fleetAppsManagementRunbookVersionRollbackWorkflowDetailsWorkflowStepsToHclTerraform(struct?: FleetAppsManagementRunbookVersionRollbackWorkflowDetailsWorkflowSteps | cdktf.IResolvable): any {
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

export class FleetAppsManagementRunbookVersionRollbackWorkflowDetailsWorkflowStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetAppsManagementRunbookVersionRollbackWorkflowDetailsWorkflowSteps | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FleetAppsManagementRunbookVersionRollbackWorkflowDetailsWorkflowSteps | cdktf.IResolvable | undefined) {
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

export class FleetAppsManagementRunbookVersionRollbackWorkflowDetailsWorkflowStepsList extends cdktf.ComplexList {
  public internalValue? : FleetAppsManagementRunbookVersionRollbackWorkflowDetailsWorkflowSteps[] | cdktf.IResolvable

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
  public get(index: number): FleetAppsManagementRunbookVersionRollbackWorkflowDetailsWorkflowStepsOutputReference {
    return new FleetAppsManagementRunbookVersionRollbackWorkflowDetailsWorkflowStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementRunbookVersionRollbackWorkflowDetailsWorkflow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#group_name FleetAppsManagementRunbookVersion#group_name}
  */
  readonly groupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#type FleetAppsManagementRunbookVersion#type}
  */
  readonly type: string;
  /**
  * steps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#steps FleetAppsManagementRunbookVersion#steps}
  */
  readonly steps: FleetAppsManagementRunbookVersionRollbackWorkflowDetailsWorkflowSteps[] | cdktf.IResolvable;
}

export function fleetAppsManagementRunbookVersionRollbackWorkflowDetailsWorkflowToTerraform(struct?: FleetAppsManagementRunbookVersionRollbackWorkflowDetailsWorkflow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_name: cdktf.stringToTerraform(struct!.groupName),
    type: cdktf.stringToTerraform(struct!.type),
    steps: cdktf.listMapper(fleetAppsManagementRunbookVersionRollbackWorkflowDetailsWorkflowStepsToTerraform, true)(struct!.steps),
  }
}


export function fleetAppsManagementRunbookVersionRollbackWorkflowDetailsWorkflowToHclTerraform(struct?: FleetAppsManagementRunbookVersionRollbackWorkflowDetailsWorkflow | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(fleetAppsManagementRunbookVersionRollbackWorkflowDetailsWorkflowStepsToHclTerraform, true)(struct!.steps),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookVersionRollbackWorkflowDetailsWorkflowStepsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementRunbookVersionRollbackWorkflowDetailsWorkflowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetAppsManagementRunbookVersionRollbackWorkflowDetailsWorkflow | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FleetAppsManagementRunbookVersionRollbackWorkflowDetailsWorkflow | cdktf.IResolvable | undefined) {
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
  private _steps = new FleetAppsManagementRunbookVersionRollbackWorkflowDetailsWorkflowStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }
  public putSteps(value: FleetAppsManagementRunbookVersionRollbackWorkflowDetailsWorkflowSteps[] | cdktf.IResolvable) {
    this._steps.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps.internalValue;
  }
}

export class FleetAppsManagementRunbookVersionRollbackWorkflowDetailsWorkflowList extends cdktf.ComplexList {
  public internalValue? : FleetAppsManagementRunbookVersionRollbackWorkflowDetailsWorkflow[] | cdktf.IResolvable

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
  public get(index: number): FleetAppsManagementRunbookVersionRollbackWorkflowDetailsWorkflowOutputReference {
    return new FleetAppsManagementRunbookVersionRollbackWorkflowDetailsWorkflowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementRunbookVersionRollbackWorkflowDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#scope FleetAppsManagementRunbookVersion#scope}
  */
  readonly scope: string;
  /**
  * workflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#workflow FleetAppsManagementRunbookVersion#workflow}
  */
  readonly workflow: FleetAppsManagementRunbookVersionRollbackWorkflowDetailsWorkflow[] | cdktf.IResolvable;
}

export function fleetAppsManagementRunbookVersionRollbackWorkflowDetailsToTerraform(struct?: FleetAppsManagementRunbookVersionRollbackWorkflowDetailsOutputReference | FleetAppsManagementRunbookVersionRollbackWorkflowDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    workflow: cdktf.listMapper(fleetAppsManagementRunbookVersionRollbackWorkflowDetailsWorkflowToTerraform, true)(struct!.workflow),
  }
}


export function fleetAppsManagementRunbookVersionRollbackWorkflowDetailsToHclTerraform(struct?: FleetAppsManagementRunbookVersionRollbackWorkflowDetailsOutputReference | FleetAppsManagementRunbookVersionRollbackWorkflowDetails): any {
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
      value: cdktf.listMapperHcl(fleetAppsManagementRunbookVersionRollbackWorkflowDetailsWorkflowToHclTerraform, true)(struct!.workflow),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookVersionRollbackWorkflowDetailsWorkflowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementRunbookVersionRollbackWorkflowDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementRunbookVersionRollbackWorkflowDetails | undefined {
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

  public set internalValue(value: FleetAppsManagementRunbookVersionRollbackWorkflowDetails | undefined) {
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
  private _workflow = new FleetAppsManagementRunbookVersionRollbackWorkflowDetailsWorkflowList(this, "workflow", false);
  public get workflow() {
    return this._workflow;
  }
  public putWorkflow(value: FleetAppsManagementRunbookVersionRollbackWorkflowDetailsWorkflow[] | cdktf.IResolvable) {
    this._workflow.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowInput() {
    return this._workflow.internalValue;
  }
}
export interface FleetAppsManagementRunbookVersionTasksOutputVariableMappingsOutputVariableDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#output_variable_name FleetAppsManagementRunbookVersion#output_variable_name}
  */
  readonly outputVariableName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#step_name FleetAppsManagementRunbookVersion#step_name}
  */
  readonly stepName: string;
}

export function fleetAppsManagementRunbookVersionTasksOutputVariableMappingsOutputVariableDetailsToTerraform(struct?: FleetAppsManagementRunbookVersionTasksOutputVariableMappingsOutputVariableDetailsOutputReference | FleetAppsManagementRunbookVersionTasksOutputVariableMappingsOutputVariableDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    output_variable_name: cdktf.stringToTerraform(struct!.outputVariableName),
    step_name: cdktf.stringToTerraform(struct!.stepName),
  }
}


export function fleetAppsManagementRunbookVersionTasksOutputVariableMappingsOutputVariableDetailsToHclTerraform(struct?: FleetAppsManagementRunbookVersionTasksOutputVariableMappingsOutputVariableDetailsOutputReference | FleetAppsManagementRunbookVersionTasksOutputVariableMappingsOutputVariableDetails): any {
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

export class FleetAppsManagementRunbookVersionTasksOutputVariableMappingsOutputVariableDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementRunbookVersionTasksOutputVariableMappingsOutputVariableDetails | undefined {
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

  public set internalValue(value: FleetAppsManagementRunbookVersionTasksOutputVariableMappingsOutputVariableDetails | undefined) {
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
export interface FleetAppsManagementRunbookVersionTasksOutputVariableMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#name FleetAppsManagementRunbookVersion#name}
  */
  readonly name: string;
  /**
  * output_variable_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#output_variable_details FleetAppsManagementRunbookVersion#output_variable_details}
  */
  readonly outputVariableDetails: FleetAppsManagementRunbookVersionTasksOutputVariableMappingsOutputVariableDetails;
}

export function fleetAppsManagementRunbookVersionTasksOutputVariableMappingsToTerraform(struct?: FleetAppsManagementRunbookVersionTasksOutputVariableMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    output_variable_details: fleetAppsManagementRunbookVersionTasksOutputVariableMappingsOutputVariableDetailsToTerraform(struct!.outputVariableDetails),
  }
}


export function fleetAppsManagementRunbookVersionTasksOutputVariableMappingsToHclTerraform(struct?: FleetAppsManagementRunbookVersionTasksOutputVariableMappings | cdktf.IResolvable): any {
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
      value: fleetAppsManagementRunbookVersionTasksOutputVariableMappingsOutputVariableDetailsToHclTerraform(struct!.outputVariableDetails),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookVersionTasksOutputVariableMappingsOutputVariableDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementRunbookVersionTasksOutputVariableMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetAppsManagementRunbookVersionTasksOutputVariableMappings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FleetAppsManagementRunbookVersionTasksOutputVariableMappings | cdktf.IResolvable | undefined) {
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
  private _outputVariableDetails = new FleetAppsManagementRunbookVersionTasksOutputVariableMappingsOutputVariableDetailsOutputReference(this, "output_variable_details");
  public get outputVariableDetails() {
    return this._outputVariableDetails;
  }
  public putOutputVariableDetails(value: FleetAppsManagementRunbookVersionTasksOutputVariableMappingsOutputVariableDetails) {
    this._outputVariableDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputVariableDetailsInput() {
    return this._outputVariableDetails.internalValue;
  }
}

export class FleetAppsManagementRunbookVersionTasksOutputVariableMappingsList extends cdktf.ComplexList {
  public internalValue? : FleetAppsManagementRunbookVersionTasksOutputVariableMappings[] | cdktf.IResolvable

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
  public get(index: number): FleetAppsManagementRunbookVersionTasksOutputVariableMappingsOutputReference {
    return new FleetAppsManagementRunbookVersionTasksOutputVariableMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementRunbookVersionTasksStepPropertiesNotificationPreferences {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#should_notify_on_pause FleetAppsManagementRunbookVersion#should_notify_on_pause}
  */
  readonly shouldNotifyOnPause?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#should_notify_on_task_failure FleetAppsManagementRunbookVersion#should_notify_on_task_failure}
  */
  readonly shouldNotifyOnTaskFailure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#should_notify_on_task_success FleetAppsManagementRunbookVersion#should_notify_on_task_success}
  */
  readonly shouldNotifyOnTaskSuccess?: boolean | cdktf.IResolvable;
}

export function fleetAppsManagementRunbookVersionTasksStepPropertiesNotificationPreferencesToTerraform(struct?: FleetAppsManagementRunbookVersionTasksStepPropertiesNotificationPreferencesOutputReference | FleetAppsManagementRunbookVersionTasksStepPropertiesNotificationPreferences): any {
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


export function fleetAppsManagementRunbookVersionTasksStepPropertiesNotificationPreferencesToHclTerraform(struct?: FleetAppsManagementRunbookVersionTasksStepPropertiesNotificationPreferencesOutputReference | FleetAppsManagementRunbookVersionTasksStepPropertiesNotificationPreferences): any {
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

export class FleetAppsManagementRunbookVersionTasksStepPropertiesNotificationPreferencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementRunbookVersionTasksStepPropertiesNotificationPreferences | undefined {
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

  public set internalValue(value: FleetAppsManagementRunbookVersionTasksStepPropertiesNotificationPreferences | undefined) {
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
export interface FleetAppsManagementRunbookVersionTasksStepPropertiesPauseDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#duration_in_minutes FleetAppsManagementRunbookVersion#duration_in_minutes}
  */
  readonly durationInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#kind FleetAppsManagementRunbookVersion#kind}
  */
  readonly kind: string;
}

export function fleetAppsManagementRunbookVersionTasksStepPropertiesPauseDetailsToTerraform(struct?: FleetAppsManagementRunbookVersionTasksStepPropertiesPauseDetailsOutputReference | FleetAppsManagementRunbookVersionTasksStepPropertiesPauseDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration_in_minutes: cdktf.numberToTerraform(struct!.durationInMinutes),
    kind: cdktf.stringToTerraform(struct!.kind),
  }
}


export function fleetAppsManagementRunbookVersionTasksStepPropertiesPauseDetailsToHclTerraform(struct?: FleetAppsManagementRunbookVersionTasksStepPropertiesPauseDetailsOutputReference | FleetAppsManagementRunbookVersionTasksStepPropertiesPauseDetails): any {
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

export class FleetAppsManagementRunbookVersionTasksStepPropertiesPauseDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementRunbookVersionTasksStepPropertiesPauseDetails | undefined {
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

  public set internalValue(value: FleetAppsManagementRunbookVersionTasksStepPropertiesPauseDetails | undefined) {
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
export interface FleetAppsManagementRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#output_variable_name FleetAppsManagementRunbookVersion#output_variable_name}
  */
  readonly outputVariableName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#step_name FleetAppsManagementRunbookVersion#step_name}
  */
  readonly stepName?: string;
}

export function fleetAppsManagementRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsToTerraform(struct?: FleetAppsManagementRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsOutputReference | FleetAppsManagementRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    output_variable_name: cdktf.stringToTerraform(struct!.outputVariableName),
    step_name: cdktf.stringToTerraform(struct!.stepName),
  }
}


export function fleetAppsManagementRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsToHclTerraform(struct?: FleetAppsManagementRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsOutputReference | FleetAppsManagementRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetails): any {
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

export class FleetAppsManagementRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetails | undefined {
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

  public set internalValue(value: FleetAppsManagementRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetails | undefined) {
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
export interface FleetAppsManagementRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#resource_id FleetAppsManagementRunbookVersion#resource_id}
  */
  readonly resourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#resource_type FleetAppsManagementRunbookVersion#resource_type}
  */
  readonly resourceType?: string;
  /**
  * output_variable_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#output_variable_details FleetAppsManagementRunbookVersion#output_variable_details}
  */
  readonly outputVariableDetails?: FleetAppsManagementRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetails;
}

export function fleetAppsManagementRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsToTerraform(struct?: FleetAppsManagementRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    output_variable_details: fleetAppsManagementRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsToTerraform(struct!.outputVariableDetails),
  }
}


export function fleetAppsManagementRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsToHclTerraform(struct?: FleetAppsManagementRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetails | cdktf.IResolvable): any {
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
      value: fleetAppsManagementRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsToHclTerraform(struct!.outputVariableDetails),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetAppsManagementRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetails | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FleetAppsManagementRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetails | cdktf.IResolvable | undefined) {
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
  private _outputVariableDetails = new FleetAppsManagementRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsOutputReference(this, "output_variable_details");
  public get outputVariableDetails() {
    return this._outputVariableDetails;
  }
  public putOutputVariableDetails(value: FleetAppsManagementRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetails) {
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

export class FleetAppsManagementRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsList extends cdktf.ComplexList {
  public internalValue? : FleetAppsManagementRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetails[] | cdktf.IResolvable

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
  public get(index: number): FleetAppsManagementRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputReference {
    return new FleetAppsManagementRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementRunbookVersionTasksStepPropertiesRunOn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#condition FleetAppsManagementRunbookVersion#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#host FleetAppsManagementRunbookVersion#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#kind FleetAppsManagementRunbookVersion#kind}
  */
  readonly kind: string;
  /**
  * previous_task_instance_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#previous_task_instance_details FleetAppsManagementRunbookVersion#previous_task_instance_details}
  */
  readonly previousTaskInstanceDetails?: FleetAppsManagementRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetails[] | cdktf.IResolvable;
}

export function fleetAppsManagementRunbookVersionTasksStepPropertiesRunOnToTerraform(struct?: FleetAppsManagementRunbookVersionTasksStepPropertiesRunOnOutputReference | FleetAppsManagementRunbookVersionTasksStepPropertiesRunOn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    host: cdktf.stringToTerraform(struct!.host),
    kind: cdktf.stringToTerraform(struct!.kind),
    previous_task_instance_details: cdktf.listMapper(fleetAppsManagementRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsToTerraform, true)(struct!.previousTaskInstanceDetails),
  }
}


export function fleetAppsManagementRunbookVersionTasksStepPropertiesRunOnToHclTerraform(struct?: FleetAppsManagementRunbookVersionTasksStepPropertiesRunOnOutputReference | FleetAppsManagementRunbookVersionTasksStepPropertiesRunOn): any {
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
      value: cdktf.listMapperHcl(fleetAppsManagementRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsToHclTerraform, true)(struct!.previousTaskInstanceDetails),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementRunbookVersionTasksStepPropertiesRunOnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementRunbookVersionTasksStepPropertiesRunOn | undefined {
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

  public set internalValue(value: FleetAppsManagementRunbookVersionTasksStepPropertiesRunOn | undefined) {
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
  private _previousTaskInstanceDetails = new FleetAppsManagementRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsList(this, "previous_task_instance_details", false);
  public get previousTaskInstanceDetails() {
    return this._previousTaskInstanceDetails;
  }
  public putPreviousTaskInstanceDetails(value: FleetAppsManagementRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetails[] | cdktf.IResolvable) {
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
export interface FleetAppsManagementRunbookVersionTasksStepProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#action_on_failure FleetAppsManagementRunbookVersion#action_on_failure}
  */
  readonly actionOnFailure: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#pre_condition FleetAppsManagementRunbookVersion#pre_condition}
  */
  readonly preCondition?: string;
  /**
  * notification_preferences block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#notification_preferences FleetAppsManagementRunbookVersion#notification_preferences}
  */
  readonly notificationPreferences?: FleetAppsManagementRunbookVersionTasksStepPropertiesNotificationPreferences;
  /**
  * pause_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#pause_details FleetAppsManagementRunbookVersion#pause_details}
  */
  readonly pauseDetails?: FleetAppsManagementRunbookVersionTasksStepPropertiesPauseDetails;
  /**
  * run_on block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#run_on FleetAppsManagementRunbookVersion#run_on}
  */
  readonly runOn?: FleetAppsManagementRunbookVersionTasksStepPropertiesRunOn;
}

export function fleetAppsManagementRunbookVersionTasksStepPropertiesToTerraform(struct?: FleetAppsManagementRunbookVersionTasksStepPropertiesOutputReference | FleetAppsManagementRunbookVersionTasksStepProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_on_failure: cdktf.stringToTerraform(struct!.actionOnFailure),
    pre_condition: cdktf.stringToTerraform(struct!.preCondition),
    notification_preferences: fleetAppsManagementRunbookVersionTasksStepPropertiesNotificationPreferencesToTerraform(struct!.notificationPreferences),
    pause_details: fleetAppsManagementRunbookVersionTasksStepPropertiesPauseDetailsToTerraform(struct!.pauseDetails),
    run_on: fleetAppsManagementRunbookVersionTasksStepPropertiesRunOnToTerraform(struct!.runOn),
  }
}


export function fleetAppsManagementRunbookVersionTasksStepPropertiesToHclTerraform(struct?: FleetAppsManagementRunbookVersionTasksStepPropertiesOutputReference | FleetAppsManagementRunbookVersionTasksStepProperties): any {
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
      value: fleetAppsManagementRunbookVersionTasksStepPropertiesNotificationPreferencesToHclTerraform(struct!.notificationPreferences),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookVersionTasksStepPropertiesNotificationPreferencesList",
    },
    pause_details: {
      value: fleetAppsManagementRunbookVersionTasksStepPropertiesPauseDetailsToHclTerraform(struct!.pauseDetails),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookVersionTasksStepPropertiesPauseDetailsList",
    },
    run_on: {
      value: fleetAppsManagementRunbookVersionTasksStepPropertiesRunOnToHclTerraform(struct!.runOn),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookVersionTasksStepPropertiesRunOnList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementRunbookVersionTasksStepPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementRunbookVersionTasksStepProperties | undefined {
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

  public set internalValue(value: FleetAppsManagementRunbookVersionTasksStepProperties | undefined) {
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
  private _notificationPreferences = new FleetAppsManagementRunbookVersionTasksStepPropertiesNotificationPreferencesOutputReference(this, "notification_preferences");
  public get notificationPreferences() {
    return this._notificationPreferences;
  }
  public putNotificationPreferences(value: FleetAppsManagementRunbookVersionTasksStepPropertiesNotificationPreferences) {
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
  private _pauseDetails = new FleetAppsManagementRunbookVersionTasksStepPropertiesPauseDetailsOutputReference(this, "pause_details");
  public get pauseDetails() {
    return this._pauseDetails;
  }
  public putPauseDetails(value: FleetAppsManagementRunbookVersionTasksStepPropertiesPauseDetails) {
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
  private _runOn = new FleetAppsManagementRunbookVersionTasksStepPropertiesRunOnOutputReference(this, "run_on");
  public get runOn() {
    return this._runOn;
  }
  public putRunOn(value: FleetAppsManagementRunbookVersionTasksStepPropertiesRunOn) {
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
export interface FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsContent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#bucket FleetAppsManagementRunbookVersion#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#catalog_id FleetAppsManagementRunbookVersion#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#checksum FleetAppsManagementRunbookVersion#checksum}
  */
  readonly checksum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#namespace FleetAppsManagementRunbookVersion#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#object FleetAppsManagementRunbookVersion#object}
  */
  readonly object?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#source_type FleetAppsManagementRunbookVersion#source_type}
  */
  readonly sourceType: string;
}

export function fleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsContentToTerraform(struct?: FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsContentOutputReference | FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsContent): any {
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


export function fleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsContentToHclTerraform(struct?: FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsContentOutputReference | FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsContent): any {
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

export class FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsContentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsContent | undefined {
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

  public set internalValue(value: FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsContent | undefined) {
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
export interface FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#display_name FleetAppsManagementRunbookVersion#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#id FleetAppsManagementRunbookVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function fleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentialsToTerraform(struct?: FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function fleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentialsToHclTerraform(struct?: FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentials | cdktf.IResolvable): any {
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

export class FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentials | cdktf.IResolvable | undefined) {
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

export class FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentialsList extends cdktf.ComplexList {
  public internalValue? : FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentials[] | cdktf.IResolvable

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
  public get(index: number): FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentialsOutputReference {
    return new FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#description FleetAppsManagementRunbookVersion#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#name FleetAppsManagementRunbookVersion#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#type FleetAppsManagementRunbookVersion#type}
  */
  readonly type?: string;
}

export function fleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesToTerraform(struct?: FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables | cdktf.IResolvable): any {
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


export function fleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesToHclTerraform(struct?: FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables | cdktf.IResolvable): any {
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

export class FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables | cdktf.IResolvable | undefined) {
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

export class FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList extends cdktf.ComplexList {
  public internalValue? : FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables[] | cdktf.IResolvable

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
  public get(index: number): FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference {
    return new FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#output_variables FleetAppsManagementRunbookVersion#output_variables}
  */
  readonly outputVariables?: string[];
  /**
  * input_variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#input_variables FleetAppsManagementRunbookVersion#input_variables}
  */
  readonly inputVariables?: FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables[] | cdktf.IResolvable;
}

export function fleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesToTerraform(struct?: FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference | FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    output_variables: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.outputVariables),
    input_variables: cdktf.listMapper(fleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesToTerraform, true)(struct!.inputVariables),
  }
}


export function fleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesToHclTerraform(struct?: FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference | FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariables): any {
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
      value: cdktf.listMapperHcl(fleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesToHclTerraform, true)(struct!.inputVariables),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariables | undefined {
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

  public set internalValue(value: FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariables | undefined) {
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
  private _inputVariables = new FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList(this, "input_variables", false);
  public get inputVariables() {
    return this._inputVariables;
  }
  public putInputVariables(value: FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables[] | cdktf.IResolvable) {
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
export interface FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#catalog_id FleetAppsManagementRunbookVersion#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#command FleetAppsManagementRunbookVersion#command}
  */
  readonly command?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#config_file FleetAppsManagementRunbookVersion#config_file}
  */
  readonly configFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#endpoint FleetAppsManagementRunbookVersion#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#execution_type FleetAppsManagementRunbookVersion#execution_type}
  */
  readonly executionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#is_executable_content FleetAppsManagementRunbookVersion#is_executable_content}
  */
  readonly isExecutableContent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#is_locked FleetAppsManagementRunbookVersion#is_locked}
  */
  readonly isLocked?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#is_read_output_variable_enabled FleetAppsManagementRunbookVersion#is_read_output_variable_enabled}
  */
  readonly isReadOutputVariableEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#target_compartment_id FleetAppsManagementRunbookVersion#target_compartment_id}
  */
  readonly targetCompartmentId?: string;
  /**
  * content block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#content FleetAppsManagementRunbookVersion#content}
  */
  readonly content?: FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsContent;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#credentials FleetAppsManagementRunbookVersion#credentials}
  */
  readonly credentials?: FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentials[] | cdktf.IResolvable;
  /**
  * variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#variables FleetAppsManagementRunbookVersion#variables}
  */
  readonly variables?: FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariables;
}

export function fleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsToTerraform(struct?: FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsOutputReference | FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetails): any {
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
    content: fleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsContentToTerraform(struct!.content),
    credentials: cdktf.listMapper(fleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentialsToTerraform, true)(struct!.credentials),
    variables: fleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesToTerraform(struct!.variables),
  }
}


export function fleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsToHclTerraform(struct?: FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsOutputReference | FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetails): any {
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
      value: fleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsContentToHclTerraform(struct!.content),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsContentList",
    },
    credentials: {
      value: cdktf.listMapperHcl(fleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentialsToHclTerraform, true)(struct!.credentials),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentialsList",
    },
    variables: {
      value: fleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesToHclTerraform(struct!.variables),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetails | undefined {
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

  public set internalValue(value: FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetails | undefined) {
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
  private _content = new FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsContentOutputReference(this, "content");
  public get content() {
    return this._content;
  }
  public putContent(value: FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsContent) {
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
  private _credentials = new FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentialsList(this, "credentials", false);
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentials[] | cdktf.IResolvable) {
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
  private _variables = new FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference(this, "variables");
  public get variables() {
    return this._variables;
  }
  public putVariables(value: FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariables) {
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
export interface FleetAppsManagementRunbookVersionTasksTaskRecordDetailsProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#num_retries FleetAppsManagementRunbookVersion#num_retries}
  */
  readonly numRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#timeout_in_seconds FleetAppsManagementRunbookVersion#timeout_in_seconds}
  */
  readonly timeoutInSeconds?: number;
}

export function fleetAppsManagementRunbookVersionTasksTaskRecordDetailsPropertiesToTerraform(struct?: FleetAppsManagementRunbookVersionTasksTaskRecordDetailsPropertiesOutputReference | FleetAppsManagementRunbookVersionTasksTaskRecordDetailsProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_retries: cdktf.numberToTerraform(struct!.numRetries),
    timeout_in_seconds: cdktf.numberToTerraform(struct!.timeoutInSeconds),
  }
}


export function fleetAppsManagementRunbookVersionTasksTaskRecordDetailsPropertiesToHclTerraform(struct?: FleetAppsManagementRunbookVersionTasksTaskRecordDetailsPropertiesOutputReference | FleetAppsManagementRunbookVersionTasksTaskRecordDetailsProperties): any {
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

export class FleetAppsManagementRunbookVersionTasksTaskRecordDetailsPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementRunbookVersionTasksTaskRecordDetailsProperties | undefined {
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

  public set internalValue(value: FleetAppsManagementRunbookVersionTasksTaskRecordDetailsProperties | undefined) {
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
export interface FleetAppsManagementRunbookVersionTasksTaskRecordDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#description FleetAppsManagementRunbookVersion#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#is_apply_subject_task FleetAppsManagementRunbookVersion#is_apply_subject_task}
  */
  readonly isApplySubjectTask?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#is_copy_to_library_enabled FleetAppsManagementRunbookVersion#is_copy_to_library_enabled}
  */
  readonly isCopyToLibraryEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#is_discovery_output_task FleetAppsManagementRunbookVersion#is_discovery_output_task}
  */
  readonly isDiscoveryOutputTask?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#name FleetAppsManagementRunbookVersion#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#os_type FleetAppsManagementRunbookVersion#os_type}
  */
  readonly osType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#platform FleetAppsManagementRunbookVersion#platform}
  */
  readonly platform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#scope FleetAppsManagementRunbookVersion#scope}
  */
  readonly scope: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#task_record_id FleetAppsManagementRunbookVersion#task_record_id}
  */
  readonly taskRecordId?: string;
  /**
  * execution_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#execution_details FleetAppsManagementRunbookVersion#execution_details}
  */
  readonly executionDetails?: FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetails;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#properties FleetAppsManagementRunbookVersion#properties}
  */
  readonly properties?: FleetAppsManagementRunbookVersionTasksTaskRecordDetailsProperties;
}

export function fleetAppsManagementRunbookVersionTasksTaskRecordDetailsToTerraform(struct?: FleetAppsManagementRunbookVersionTasksTaskRecordDetailsOutputReference | FleetAppsManagementRunbookVersionTasksTaskRecordDetails): any {
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
    execution_details: fleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsToTerraform(struct!.executionDetails),
    properties: fleetAppsManagementRunbookVersionTasksTaskRecordDetailsPropertiesToTerraform(struct!.properties),
  }
}


export function fleetAppsManagementRunbookVersionTasksTaskRecordDetailsToHclTerraform(struct?: FleetAppsManagementRunbookVersionTasksTaskRecordDetailsOutputReference | FleetAppsManagementRunbookVersionTasksTaskRecordDetails): any {
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
      value: fleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsToHclTerraform(struct!.executionDetails),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsList",
    },
    properties: {
      value: fleetAppsManagementRunbookVersionTasksTaskRecordDetailsPropertiesToHclTerraform(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookVersionTasksTaskRecordDetailsPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementRunbookVersionTasksTaskRecordDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementRunbookVersionTasksTaskRecordDetails | undefined {
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

  public set internalValue(value: FleetAppsManagementRunbookVersionTasksTaskRecordDetails | undefined) {
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
  private _executionDetails = new FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetailsOutputReference(this, "execution_details");
  public get executionDetails() {
    return this._executionDetails;
  }
  public putExecutionDetails(value: FleetAppsManagementRunbookVersionTasksTaskRecordDetailsExecutionDetails) {
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
  private _properties = new FleetAppsManagementRunbookVersionTasksTaskRecordDetailsPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: FleetAppsManagementRunbookVersionTasksTaskRecordDetailsProperties) {
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
export interface FleetAppsManagementRunbookVersionTasks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#step_name FleetAppsManagementRunbookVersion#step_name}
  */
  readonly stepName: string;
  /**
  * output_variable_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#output_variable_mappings FleetAppsManagementRunbookVersion#output_variable_mappings}
  */
  readonly outputVariableMappings?: FleetAppsManagementRunbookVersionTasksOutputVariableMappings[] | cdktf.IResolvable;
  /**
  * step_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#step_properties FleetAppsManagementRunbookVersion#step_properties}
  */
  readonly stepProperties?: FleetAppsManagementRunbookVersionTasksStepProperties;
  /**
  * task_record_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#task_record_details FleetAppsManagementRunbookVersion#task_record_details}
  */
  readonly taskRecordDetails: FleetAppsManagementRunbookVersionTasksTaskRecordDetails;
}

export function fleetAppsManagementRunbookVersionTasksToTerraform(struct?: FleetAppsManagementRunbookVersionTasks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    step_name: cdktf.stringToTerraform(struct!.stepName),
    output_variable_mappings: cdktf.listMapper(fleetAppsManagementRunbookVersionTasksOutputVariableMappingsToTerraform, true)(struct!.outputVariableMappings),
    step_properties: fleetAppsManagementRunbookVersionTasksStepPropertiesToTerraform(struct!.stepProperties),
    task_record_details: fleetAppsManagementRunbookVersionTasksTaskRecordDetailsToTerraform(struct!.taskRecordDetails),
  }
}


export function fleetAppsManagementRunbookVersionTasksToHclTerraform(struct?: FleetAppsManagementRunbookVersionTasks | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(fleetAppsManagementRunbookVersionTasksOutputVariableMappingsToHclTerraform, true)(struct!.outputVariableMappings),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookVersionTasksOutputVariableMappingsList",
    },
    step_properties: {
      value: fleetAppsManagementRunbookVersionTasksStepPropertiesToHclTerraform(struct!.stepProperties),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookVersionTasksStepPropertiesList",
    },
    task_record_details: {
      value: fleetAppsManagementRunbookVersionTasksTaskRecordDetailsToHclTerraform(struct!.taskRecordDetails),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementRunbookVersionTasksTaskRecordDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementRunbookVersionTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetAppsManagementRunbookVersionTasks | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FleetAppsManagementRunbookVersionTasks | cdktf.IResolvable | undefined) {
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
  private _outputVariableMappings = new FleetAppsManagementRunbookVersionTasksOutputVariableMappingsList(this, "output_variable_mappings", false);
  public get outputVariableMappings() {
    return this._outputVariableMappings;
  }
  public putOutputVariableMappings(value: FleetAppsManagementRunbookVersionTasksOutputVariableMappings[] | cdktf.IResolvable) {
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
  private _stepProperties = new FleetAppsManagementRunbookVersionTasksStepPropertiesOutputReference(this, "step_properties");
  public get stepProperties() {
    return this._stepProperties;
  }
  public putStepProperties(value: FleetAppsManagementRunbookVersionTasksStepProperties) {
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
  private _taskRecordDetails = new FleetAppsManagementRunbookVersionTasksTaskRecordDetailsOutputReference(this, "task_record_details");
  public get taskRecordDetails() {
    return this._taskRecordDetails;
  }
  public putTaskRecordDetails(value: FleetAppsManagementRunbookVersionTasksTaskRecordDetails) {
    this._taskRecordDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskRecordDetailsInput() {
    return this._taskRecordDetails.internalValue;
  }
}

export class FleetAppsManagementRunbookVersionTasksList extends cdktf.ComplexList {
  public internalValue? : FleetAppsManagementRunbookVersionTasks[] | cdktf.IResolvable

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
  public get(index: number): FleetAppsManagementRunbookVersionTasksOutputReference {
    return new FleetAppsManagementRunbookVersionTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementRunbookVersionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#create FleetAppsManagementRunbookVersion#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#delete FleetAppsManagementRunbookVersion#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#update FleetAppsManagementRunbookVersion#update}
  */
  readonly update?: string;
}

export function fleetAppsManagementRunbookVersionTimeoutsToTerraform(struct?: FleetAppsManagementRunbookVersionTimeouts | cdktf.IResolvable): any {
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


export function fleetAppsManagementRunbookVersionTimeoutsToHclTerraform(struct?: FleetAppsManagementRunbookVersionTimeouts | cdktf.IResolvable): any {
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

export class FleetAppsManagementRunbookVersionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FleetAppsManagementRunbookVersionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FleetAppsManagementRunbookVersionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version oci_fleet_apps_management_runbook_version}
*/
export class FleetAppsManagementRunbookVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_fleet_apps_management_runbook_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FleetAppsManagementRunbookVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FleetAppsManagementRunbookVersion to import
  * @param importFromId The id of the existing FleetAppsManagementRunbookVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FleetAppsManagementRunbookVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_fleet_apps_management_runbook_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_runbook_version oci_fleet_apps_management_runbook_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FleetAppsManagementRunbookVersionConfig
  */
  public constructor(scope: Construct, id: string, config: FleetAppsManagementRunbookVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_fleet_apps_management_runbook_version',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
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
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._runbookId = config.runbookId;
    this._executionWorkflowDetails.internalValue = config.executionWorkflowDetails;
    this._groups.internalValue = config.groups;
    this._rollbackWorkflowDetails.internalValue = config.rollbackWorkflowDetails;
    this._tasks.internalValue = config.tasks;
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

  // is_latest - computed: true, optional: false, required: false
  public get isLatest() {
    return this.getBooleanAttribute('is_latest');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // runbook_id - computed: false, optional: false, required: true
  private _runbookId?: string; 
  public get runbookId() {
    return this.getStringAttribute('runbook_id');
  }
  public set runbookId(value: string) {
    this._runbookId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runbookIdInput() {
    return this._runbookId;
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

  // execution_workflow_details - computed: false, optional: false, required: true
  private _executionWorkflowDetails = new FleetAppsManagementRunbookVersionExecutionWorkflowDetailsOutputReference(this, "execution_workflow_details");
  public get executionWorkflowDetails() {
    return this._executionWorkflowDetails;
  }
  public putExecutionWorkflowDetails(value: FleetAppsManagementRunbookVersionExecutionWorkflowDetails) {
    this._executionWorkflowDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionWorkflowDetailsInput() {
    return this._executionWorkflowDetails.internalValue;
  }

  // groups - computed: false, optional: false, required: true
  private _groups = new FleetAppsManagementRunbookVersionGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: FleetAppsManagementRunbookVersionGroups[] | cdktf.IResolvable) {
    this._groups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }

  // rollback_workflow_details - computed: false, optional: true, required: false
  private _rollbackWorkflowDetails = new FleetAppsManagementRunbookVersionRollbackWorkflowDetailsOutputReference(this, "rollback_workflow_details");
  public get rollbackWorkflowDetails() {
    return this._rollbackWorkflowDetails;
  }
  public putRollbackWorkflowDetails(value: FleetAppsManagementRunbookVersionRollbackWorkflowDetails) {
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
  private _tasks = new FleetAppsManagementRunbookVersionTasksList(this, "tasks", false);
  public get tasks() {
    return this._tasks;
  }
  public putTasks(value: FleetAppsManagementRunbookVersionTasks[] | cdktf.IResolvable) {
    this._tasks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksInput() {
    return this._tasks.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FleetAppsManagementRunbookVersionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FleetAppsManagementRunbookVersionTimeouts) {
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
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      runbook_id: cdktf.stringToTerraform(this._runbookId),
      execution_workflow_details: fleetAppsManagementRunbookVersionExecutionWorkflowDetailsToTerraform(this._executionWorkflowDetails.internalValue),
      groups: cdktf.listMapper(fleetAppsManagementRunbookVersionGroupsToTerraform, true)(this._groups.internalValue),
      rollback_workflow_details: fleetAppsManagementRunbookVersionRollbackWorkflowDetailsToTerraform(this._rollbackWorkflowDetails.internalValue),
      tasks: cdktf.listMapper(fleetAppsManagementRunbookVersionTasksToTerraform, true)(this._tasks.internalValue),
      timeouts: fleetAppsManagementRunbookVersionTimeoutsToTerraform(this._timeouts.internalValue),
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
      runbook_id: {
        value: cdktf.stringToHclTerraform(this._runbookId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execution_workflow_details: {
        value: fleetAppsManagementRunbookVersionExecutionWorkflowDetailsToHclTerraform(this._executionWorkflowDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetAppsManagementRunbookVersionExecutionWorkflowDetailsList",
      },
      groups: {
        value: cdktf.listMapperHcl(fleetAppsManagementRunbookVersionGroupsToHclTerraform, true)(this._groups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetAppsManagementRunbookVersionGroupsList",
      },
      rollback_workflow_details: {
        value: fleetAppsManagementRunbookVersionRollbackWorkflowDetailsToHclTerraform(this._rollbackWorkflowDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetAppsManagementRunbookVersionRollbackWorkflowDetailsList",
      },
      tasks: {
        value: cdktf.listMapperHcl(fleetAppsManagementRunbookVersionTasksToHclTerraform, true)(this._tasks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetAppsManagementRunbookVersionTasksList",
      },
      timeouts: {
        value: fleetAppsManagementRunbookVersionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FleetAppsManagementRunbookVersionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
