// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_update_pagertree_alert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowTaskUpdatePagertreeAlertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable/disable this workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_update_pagertree_alert#enabled WorkflowTaskUpdatePagertreeAlert#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_update_pagertree_alert#id WorkflowTaskUpdatePagertreeAlert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_update_pagertree_alert#name WorkflowTaskUpdatePagertreeAlert#name}
  */
  readonly name?: string;
  /**
  * The position of the workflow task (1 being top of list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_update_pagertree_alert#position WorkflowTaskUpdatePagertreeAlert#position}
  */
  readonly position?: number;
  /**
  * Skip workflow task if any failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_update_pagertree_alert#skip_on_failure WorkflowTaskUpdatePagertreeAlert#skip_on_failure}
  */
  readonly skipOnFailure?: boolean | cdktf.IResolvable;
  /**
  * The ID of the parent workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_update_pagertree_alert#workflow_id WorkflowTaskUpdatePagertreeAlert#workflow_id}
  */
  readonly workflowId: string;
  /**
  * task_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_update_pagertree_alert#task_params WorkflowTaskUpdatePagertreeAlert#task_params}
  */
  readonly taskParams: WorkflowTaskUpdatePagertreeAlertTaskParams;
}
export interface WorkflowTaskUpdatePagertreeAlertTaskParamsTeams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_update_pagertree_alert#id WorkflowTaskUpdatePagertreeAlert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_update_pagertree_alert#name WorkflowTaskUpdatePagertreeAlert#name}
  */
  readonly name: string;
}

export function workflowTaskUpdatePagertreeAlertTaskParamsTeamsToTerraform(struct?: WorkflowTaskUpdatePagertreeAlertTaskParamsTeams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function workflowTaskUpdatePagertreeAlertTaskParamsTeamsToHclTerraform(struct?: WorkflowTaskUpdatePagertreeAlertTaskParamsTeams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class WorkflowTaskUpdatePagertreeAlertTaskParamsTeamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkflowTaskUpdatePagertreeAlertTaskParamsTeams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowTaskUpdatePagertreeAlertTaskParamsTeams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
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

export class WorkflowTaskUpdatePagertreeAlertTaskParamsTeamsList extends cdktf.ComplexList {
  public internalValue? : WorkflowTaskUpdatePagertreeAlertTaskParamsTeams[] | cdktf.IResolvable

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
  public get(index: number): WorkflowTaskUpdatePagertreeAlertTaskParamsTeamsOutputReference {
    return new WorkflowTaskUpdatePagertreeAlertTaskParamsTeamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowTaskUpdatePagertreeAlertTaskParamsUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_update_pagertree_alert#id WorkflowTaskUpdatePagertreeAlert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_update_pagertree_alert#name WorkflowTaskUpdatePagertreeAlert#name}
  */
  readonly name: string;
}

export function workflowTaskUpdatePagertreeAlertTaskParamsUsersToTerraform(struct?: WorkflowTaskUpdatePagertreeAlertTaskParamsUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function workflowTaskUpdatePagertreeAlertTaskParamsUsersToHclTerraform(struct?: WorkflowTaskUpdatePagertreeAlertTaskParamsUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class WorkflowTaskUpdatePagertreeAlertTaskParamsUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkflowTaskUpdatePagertreeAlertTaskParamsUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowTaskUpdatePagertreeAlertTaskParamsUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
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

export class WorkflowTaskUpdatePagertreeAlertTaskParamsUsersList extends cdktf.ComplexList {
  public internalValue? : WorkflowTaskUpdatePagertreeAlertTaskParamsUsers[] | cdktf.IResolvable

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
  public get(index: number): WorkflowTaskUpdatePagertreeAlertTaskParamsUsersOutputReference {
    return new WorkflowTaskUpdatePagertreeAlertTaskParamsUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowTaskUpdatePagertreeAlertTaskParams {
  /**
  * Description of alert as text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_update_pagertree_alert#description WorkflowTaskUpdatePagertreeAlert#description}
  */
  readonly description?: string;
  /**
  * Setting to true makes an alert a Pagertree incident. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_update_pagertree_alert#incident WorkflowTaskUpdatePagertreeAlert#incident}
  */
  readonly incident?: boolean | cdktf.IResolvable;
  /**
  * The prefix ID of the Pagertree alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_update_pagertree_alert#pagertree_alert_id WorkflowTaskUpdatePagertreeAlert#pagertree_alert_id}
  */
  readonly pagertreeAlertId?: string;
  /**
  * Value must be one of `auto`, `SEV-1`, `SEV-2`, `SEV-3`, `SEV-4`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_update_pagertree_alert#severity WorkflowTaskUpdatePagertreeAlert#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_update_pagertree_alert#task_type WorkflowTaskUpdatePagertreeAlert#task_type}
  */
  readonly taskType?: string;
  /**
  * Title of alert as text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_update_pagertree_alert#title WorkflowTaskUpdatePagertreeAlert#title}
  */
  readonly title?: string;
  /**
  * Value must be one of `auto`, `critical`, `high`, `medium`, `low`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_update_pagertree_alert#urgency WorkflowTaskUpdatePagertreeAlert#urgency}
  */
  readonly urgency?: string;
  /**
  * teams block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_update_pagertree_alert#teams WorkflowTaskUpdatePagertreeAlert#teams}
  */
  readonly teams?: WorkflowTaskUpdatePagertreeAlertTaskParamsTeams[] | cdktf.IResolvable;
  /**
  * users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_update_pagertree_alert#users WorkflowTaskUpdatePagertreeAlert#users}
  */
  readonly users?: WorkflowTaskUpdatePagertreeAlertTaskParamsUsers[] | cdktf.IResolvable;
}

export function workflowTaskUpdatePagertreeAlertTaskParamsToTerraform(struct?: WorkflowTaskUpdatePagertreeAlertTaskParamsOutputReference | WorkflowTaskUpdatePagertreeAlertTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    incident: cdktf.booleanToTerraform(struct!.incident),
    pagertree_alert_id: cdktf.stringToTerraform(struct!.pagertreeAlertId),
    severity: cdktf.stringToTerraform(struct!.severity),
    task_type: cdktf.stringToTerraform(struct!.taskType),
    title: cdktf.stringToTerraform(struct!.title),
    urgency: cdktf.stringToTerraform(struct!.urgency),
    teams: cdktf.listMapper(workflowTaskUpdatePagertreeAlertTaskParamsTeamsToTerraform, true)(struct!.teams),
    users: cdktf.listMapper(workflowTaskUpdatePagertreeAlertTaskParamsUsersToTerraform, true)(struct!.users),
  }
}


export function workflowTaskUpdatePagertreeAlertTaskParamsToHclTerraform(struct?: WorkflowTaskUpdatePagertreeAlertTaskParamsOutputReference | WorkflowTaskUpdatePagertreeAlertTaskParams): any {
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
    incident: {
      value: cdktf.booleanToHclTerraform(struct!.incident),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pagertree_alert_id: {
      value: cdktf.stringToHclTerraform(struct!.pagertreeAlertId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_type: {
      value: cdktf.stringToHclTerraform(struct!.taskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    urgency: {
      value: cdktf.stringToHclTerraform(struct!.urgency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    teams: {
      value: cdktf.listMapperHcl(workflowTaskUpdatePagertreeAlertTaskParamsTeamsToHclTerraform, true)(struct!.teams),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowTaskUpdatePagertreeAlertTaskParamsTeamsList",
    },
    users: {
      value: cdktf.listMapperHcl(workflowTaskUpdatePagertreeAlertTaskParamsUsersToHclTerraform, true)(struct!.users),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowTaskUpdatePagertreeAlertTaskParamsUsersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowTaskUpdatePagertreeAlertTaskParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkflowTaskUpdatePagertreeAlertTaskParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._incident !== undefined) {
      hasAnyValues = true;
      internalValueResult.incident = this._incident;
    }
    if (this._pagertreeAlertId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pagertreeAlertId = this._pagertreeAlertId;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._taskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskType = this._taskType;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._urgency !== undefined) {
      hasAnyValues = true;
      internalValueResult.urgency = this._urgency;
    }
    if (this._teams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.teams = this._teams?.internalValue;
    }
    if (this._users?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowTaskUpdatePagertreeAlertTaskParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._incident = undefined;
      this._pagertreeAlertId = undefined;
      this._severity = undefined;
      this._taskType = undefined;
      this._title = undefined;
      this._urgency = undefined;
      this._teams.internalValue = undefined;
      this._users.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._incident = value.incident;
      this._pagertreeAlertId = value.pagertreeAlertId;
      this._severity = value.severity;
      this._taskType = value.taskType;
      this._title = value.title;
      this._urgency = value.urgency;
      this._teams.internalValue = value.teams;
      this._users.internalValue = value.users;
    }
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

  // incident - computed: false, optional: true, required: false
  private _incident?: boolean | cdktf.IResolvable; 
  public get incident() {
    return this.getBooleanAttribute('incident');
  }
  public set incident(value: boolean | cdktf.IResolvable) {
    this._incident = value;
  }
  public resetIncident() {
    this._incident = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentInput() {
    return this._incident;
  }

  // pagertree_alert_id - computed: false, optional: true, required: false
  private _pagertreeAlertId?: string; 
  public get pagertreeAlertId() {
    return this.getStringAttribute('pagertree_alert_id');
  }
  public set pagertreeAlertId(value: string) {
    this._pagertreeAlertId = value;
  }
  public resetPagertreeAlertId() {
    this._pagertreeAlertId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagertreeAlertIdInput() {
    return this._pagertreeAlertId;
  }

  // severity - computed: false, optional: true, required: false
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

  // task_type - computed: false, optional: true, required: false
  private _taskType?: string; 
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
  public set taskType(value: string) {
    this._taskType = value;
  }
  public resetTaskType() {
    this._taskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // urgency - computed: false, optional: true, required: false
  private _urgency?: string; 
  public get urgency() {
    return this.getStringAttribute('urgency');
  }
  public set urgency(value: string) {
    this._urgency = value;
  }
  public resetUrgency() {
    this._urgency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urgencyInput() {
    return this._urgency;
  }

  // teams - computed: false, optional: true, required: false
  private _teams = new WorkflowTaskUpdatePagertreeAlertTaskParamsTeamsList(this, "teams", false);
  public get teams() {
    return this._teams;
  }
  public putTeams(value: WorkflowTaskUpdatePagertreeAlertTaskParamsTeams[] | cdktf.IResolvable) {
    this._teams.internalValue = value;
  }
  public resetTeams() {
    this._teams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsInput() {
    return this._teams.internalValue;
  }

  // users - computed: false, optional: true, required: false
  private _users = new WorkflowTaskUpdatePagertreeAlertTaskParamsUsersList(this, "users", false);
  public get users() {
    return this._users;
  }
  public putUsers(value: WorkflowTaskUpdatePagertreeAlertTaskParamsUsers[] | cdktf.IResolvable) {
    this._users.internalValue = value;
  }
  public resetUsers() {
    this._users.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_update_pagertree_alert rootly_workflow_task_update_pagertree_alert}
*/
export class WorkflowTaskUpdatePagertreeAlert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_workflow_task_update_pagertree_alert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowTaskUpdatePagertreeAlert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowTaskUpdatePagertreeAlert to import
  * @param importFromId The id of the existing WorkflowTaskUpdatePagertreeAlert that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_update_pagertree_alert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowTaskUpdatePagertreeAlert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_workflow_task_update_pagertree_alert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_update_pagertree_alert rootly_workflow_task_update_pagertree_alert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowTaskUpdatePagertreeAlertConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowTaskUpdatePagertreeAlertConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_workflow_task_update_pagertree_alert',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.9',
        providerVersionConstraint: '4.3.9'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._position = config.position;
    this._skipOnFailure = config.skipOnFailure;
    this._workflowId = config.workflowId;
    this._taskParams.internalValue = config.taskParams;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // position - computed: true, optional: true, required: false
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // skip_on_failure - computed: false, optional: true, required: false
  private _skipOnFailure?: boolean | cdktf.IResolvable; 
  public get skipOnFailure() {
    return this.getBooleanAttribute('skip_on_failure');
  }
  public set skipOnFailure(value: boolean | cdktf.IResolvable) {
    this._skipOnFailure = value;
  }
  public resetSkipOnFailure() {
    this._skipOnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipOnFailureInput() {
    return this._skipOnFailure;
  }

  // workflow_id - computed: false, optional: false, required: true
  private _workflowId?: string; 
  public get workflowId() {
    return this.getStringAttribute('workflow_id');
  }
  public set workflowId(value: string) {
    this._workflowId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowIdInput() {
    return this._workflowId;
  }

  // task_params - computed: false, optional: false, required: true
  private _taskParams = new WorkflowTaskUpdatePagertreeAlertTaskParamsOutputReference(this, "task_params");
  public get taskParams() {
    return this._taskParams;
  }
  public putTaskParams(value: WorkflowTaskUpdatePagertreeAlertTaskParams) {
    this._taskParams.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskParamsInput() {
    return this._taskParams.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      position: cdktf.numberToTerraform(this._position),
      skip_on_failure: cdktf.booleanToTerraform(this._skipOnFailure),
      workflow_id: cdktf.stringToTerraform(this._workflowId),
      task_params: workflowTaskUpdatePagertreeAlertTaskParamsToTerraform(this._taskParams.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      position: {
        value: cdktf.numberToHclTerraform(this._position),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      skip_on_failure: {
        value: cdktf.booleanToHclTerraform(this._skipOnFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      workflow_id: {
        value: cdktf.stringToHclTerraform(this._workflowId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_params: {
        value: workflowTaskUpdatePagertreeAlertTaskParamsToHclTerraform(this._taskParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkflowTaskUpdatePagertreeAlertTaskParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
