// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_page_pagerduty_on_call_responders
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowTaskPagePagerdutyOnCallRespondersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable/disable this workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_page_pagerduty_on_call_responders#enabled WorkflowTaskPagePagerdutyOnCallResponders#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_page_pagerduty_on_call_responders#id WorkflowTaskPagePagerdutyOnCallResponders#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_page_pagerduty_on_call_responders#name WorkflowTaskPagePagerdutyOnCallResponders#name}
  */
  readonly name?: string;
  /**
  * The position of the workflow task (1 being top of list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_page_pagerduty_on_call_responders#position WorkflowTaskPagePagerdutyOnCallResponders#position}
  */
  readonly position?: number;
  /**
  * Skip workflow task if any failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_page_pagerduty_on_call_responders#skip_on_failure WorkflowTaskPagePagerdutyOnCallResponders#skip_on_failure}
  */
  readonly skipOnFailure?: boolean | cdktf.IResolvable;
  /**
  * The ID of the parent workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_page_pagerduty_on_call_responders#workflow_id WorkflowTaskPagePagerdutyOnCallResponders#workflow_id}
  */
  readonly workflowId: string;
  /**
  * task_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_page_pagerduty_on_call_responders#task_params WorkflowTaskPagePagerdutyOnCallResponders#task_params}
  */
  readonly taskParams: WorkflowTaskPagePagerdutyOnCallRespondersTaskParams;
}
export interface WorkflowTaskPagePagerdutyOnCallRespondersTaskParamsEscalationPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_page_pagerduty_on_call_responders#id WorkflowTaskPagePagerdutyOnCallResponders#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_page_pagerduty_on_call_responders#name WorkflowTaskPagePagerdutyOnCallResponders#name}
  */
  readonly name: string;
}

export function workflowTaskPagePagerdutyOnCallRespondersTaskParamsEscalationPoliciesToTerraform(struct?: WorkflowTaskPagePagerdutyOnCallRespondersTaskParamsEscalationPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function workflowTaskPagePagerdutyOnCallRespondersTaskParamsEscalationPoliciesToHclTerraform(struct?: WorkflowTaskPagePagerdutyOnCallRespondersTaskParamsEscalationPolicies | cdktf.IResolvable): any {
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

export class WorkflowTaskPagePagerdutyOnCallRespondersTaskParamsEscalationPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkflowTaskPagePagerdutyOnCallRespondersTaskParamsEscalationPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WorkflowTaskPagePagerdutyOnCallRespondersTaskParamsEscalationPolicies | cdktf.IResolvable | undefined) {
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

export class WorkflowTaskPagePagerdutyOnCallRespondersTaskParamsEscalationPoliciesList extends cdktf.ComplexList {
  public internalValue? : WorkflowTaskPagePagerdutyOnCallRespondersTaskParamsEscalationPolicies[] | cdktf.IResolvable

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
  public get(index: number): WorkflowTaskPagePagerdutyOnCallRespondersTaskParamsEscalationPoliciesOutputReference {
    return new WorkflowTaskPagePagerdutyOnCallRespondersTaskParamsEscalationPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowTaskPagePagerdutyOnCallRespondersTaskParamsUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_page_pagerduty_on_call_responders#id WorkflowTaskPagePagerdutyOnCallResponders#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_page_pagerduty_on_call_responders#name WorkflowTaskPagePagerdutyOnCallResponders#name}
  */
  readonly name: string;
}

export function workflowTaskPagePagerdutyOnCallRespondersTaskParamsUsersToTerraform(struct?: WorkflowTaskPagePagerdutyOnCallRespondersTaskParamsUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function workflowTaskPagePagerdutyOnCallRespondersTaskParamsUsersToHclTerraform(struct?: WorkflowTaskPagePagerdutyOnCallRespondersTaskParamsUsers | cdktf.IResolvable): any {
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

export class WorkflowTaskPagePagerdutyOnCallRespondersTaskParamsUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkflowTaskPagePagerdutyOnCallRespondersTaskParamsUsers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WorkflowTaskPagePagerdutyOnCallRespondersTaskParamsUsers | cdktf.IResolvable | undefined) {
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

export class WorkflowTaskPagePagerdutyOnCallRespondersTaskParamsUsersList extends cdktf.ComplexList {
  public internalValue? : WorkflowTaskPagePagerdutyOnCallRespondersTaskParamsUsers[] | cdktf.IResolvable

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
  public get(index: number): WorkflowTaskPagePagerdutyOnCallRespondersTaskParamsUsersOutputReference {
    return new WorkflowTaskPagePagerdutyOnCallRespondersTaskParamsUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowTaskPagePagerdutyOnCallRespondersTaskParams {
  /**
  * Rootly only supports linking to a single PagerDuty incident. If this feature is disabled Rootly will add responders from any additional pages to the existing PagerDuty incident that is linked to the Rootly incident. If enabled, Rootly will create a new PagerDuty incident that is not linked to any Rootly incidents. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_page_pagerduty_on_call_responders#create_new_incident_on_conflict WorkflowTaskPagePagerdutyOnCallResponders#create_new_incident_on_conflict}
  */
  readonly createNewIncidentOnConflict?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_page_pagerduty_on_call_responders#message WorkflowTaskPagePagerdutyOnCallResponders#message}
  */
  readonly message?: string;
  /**
  * PagerDuty incident priority, selecting auto will let Rootly auto map our incident severity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_page_pagerduty_on_call_responders#priority WorkflowTaskPagePagerdutyOnCallResponders#priority}
  */
  readonly priority?: string;
  /**
  * Map must contain two fields, `id` and `name`. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_page_pagerduty_on_call_responders#service WorkflowTaskPagePagerdutyOnCallResponders#service}
  */
  readonly service: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_page_pagerduty_on_call_responders#task_type WorkflowTaskPagePagerdutyOnCallResponders#task_type}
  */
  readonly taskType?: string;
  /**
  * Incident title.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_page_pagerduty_on_call_responders#title WorkflowTaskPagePagerdutyOnCallResponders#title}
  */
  readonly title?: string;
  /**
  * Value must be one of `high`, `low`, `auto`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_page_pagerduty_on_call_responders#urgency WorkflowTaskPagePagerdutyOnCallResponders#urgency}
  */
  readonly urgency?: string;
  /**
  * escalation_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_page_pagerduty_on_call_responders#escalation_policies WorkflowTaskPagePagerdutyOnCallResponders#escalation_policies}
  */
  readonly escalationPolicies?: WorkflowTaskPagePagerdutyOnCallRespondersTaskParamsEscalationPolicies[] | cdktf.IResolvable;
  /**
  * users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_page_pagerduty_on_call_responders#users WorkflowTaskPagePagerdutyOnCallResponders#users}
  */
  readonly users?: WorkflowTaskPagePagerdutyOnCallRespondersTaskParamsUsers[] | cdktf.IResolvable;
}

export function workflowTaskPagePagerdutyOnCallRespondersTaskParamsToTerraform(struct?: WorkflowTaskPagePagerdutyOnCallRespondersTaskParamsOutputReference | WorkflowTaskPagePagerdutyOnCallRespondersTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_new_incident_on_conflict: cdktf.booleanToTerraform(struct!.createNewIncidentOnConflict),
    message: cdktf.stringToTerraform(struct!.message),
    priority: cdktf.stringToTerraform(struct!.priority),
    service: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.service),
    task_type: cdktf.stringToTerraform(struct!.taskType),
    title: cdktf.stringToTerraform(struct!.title),
    urgency: cdktf.stringToTerraform(struct!.urgency),
    escalation_policies: cdktf.listMapper(workflowTaskPagePagerdutyOnCallRespondersTaskParamsEscalationPoliciesToTerraform, true)(struct!.escalationPolicies),
    users: cdktf.listMapper(workflowTaskPagePagerdutyOnCallRespondersTaskParamsUsersToTerraform, true)(struct!.users),
  }
}


export function workflowTaskPagePagerdutyOnCallRespondersTaskParamsToHclTerraform(struct?: WorkflowTaskPagePagerdutyOnCallRespondersTaskParamsOutputReference | WorkflowTaskPagePagerdutyOnCallRespondersTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_new_incident_on_conflict: {
      value: cdktf.booleanToHclTerraform(struct!.createNewIncidentOnConflict),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.service),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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
    escalation_policies: {
      value: cdktf.listMapperHcl(workflowTaskPagePagerdutyOnCallRespondersTaskParamsEscalationPoliciesToHclTerraform, true)(struct!.escalationPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowTaskPagePagerdutyOnCallRespondersTaskParamsEscalationPoliciesList",
    },
    users: {
      value: cdktf.listMapperHcl(workflowTaskPagePagerdutyOnCallRespondersTaskParamsUsersToHclTerraform, true)(struct!.users),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowTaskPagePagerdutyOnCallRespondersTaskParamsUsersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowTaskPagePagerdutyOnCallRespondersTaskParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkflowTaskPagePagerdutyOnCallRespondersTaskParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createNewIncidentOnConflict !== undefined) {
      hasAnyValues = true;
      internalValueResult.createNewIncidentOnConflict = this._createNewIncidentOnConflict;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
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
    if (this._escalationPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.escalationPolicies = this._escalationPolicies?.internalValue;
    }
    if (this._users?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowTaskPagePagerdutyOnCallRespondersTaskParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._createNewIncidentOnConflict = undefined;
      this._message = undefined;
      this._priority = undefined;
      this._service = undefined;
      this._taskType = undefined;
      this._title = undefined;
      this._urgency = undefined;
      this._escalationPolicies.internalValue = undefined;
      this._users.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._createNewIncidentOnConflict = value.createNewIncidentOnConflict;
      this._message = value.message;
      this._priority = value.priority;
      this._service = value.service;
      this._taskType = value.taskType;
      this._title = value.title;
      this._urgency = value.urgency;
      this._escalationPolicies.internalValue = value.escalationPolicies;
      this._users.internalValue = value.users;
    }
  }

  // create_new_incident_on_conflict - computed: false, optional: true, required: false
  private _createNewIncidentOnConflict?: boolean | cdktf.IResolvable; 
  public get createNewIncidentOnConflict() {
    return this.getBooleanAttribute('create_new_incident_on_conflict');
  }
  public set createNewIncidentOnConflict(value: boolean | cdktf.IResolvable) {
    this._createNewIncidentOnConflict = value;
  }
  public resetCreateNewIncidentOnConflict() {
    this._createNewIncidentOnConflict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createNewIncidentOnConflictInput() {
    return this._createNewIncidentOnConflict;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // service - computed: false, optional: false, required: true
  private _service?: { [key: string]: string }; 
  public get service() {
    return this.getStringMapAttribute('service');
  }
  public set service(value: { [key: string]: string }) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
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

  // escalation_policies - computed: false, optional: true, required: false
  private _escalationPolicies = new WorkflowTaskPagePagerdutyOnCallRespondersTaskParamsEscalationPoliciesList(this, "escalation_policies", false);
  public get escalationPolicies() {
    return this._escalationPolicies;
  }
  public putEscalationPolicies(value: WorkflowTaskPagePagerdutyOnCallRespondersTaskParamsEscalationPolicies[] | cdktf.IResolvable) {
    this._escalationPolicies.internalValue = value;
  }
  public resetEscalationPolicies() {
    this._escalationPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationPoliciesInput() {
    return this._escalationPolicies.internalValue;
  }

  // users - computed: false, optional: true, required: false
  private _users = new WorkflowTaskPagePagerdutyOnCallRespondersTaskParamsUsersList(this, "users", false);
  public get users() {
    return this._users;
  }
  public putUsers(value: WorkflowTaskPagePagerdutyOnCallRespondersTaskParamsUsers[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_page_pagerduty_on_call_responders rootly_workflow_task_page_pagerduty_on_call_responders}
*/
export class WorkflowTaskPagePagerdutyOnCallResponders extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_workflow_task_page_pagerduty_on_call_responders";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowTaskPagePagerdutyOnCallResponders resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowTaskPagePagerdutyOnCallResponders to import
  * @param importFromId The id of the existing WorkflowTaskPagePagerdutyOnCallResponders that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_page_pagerduty_on_call_responders#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowTaskPagePagerdutyOnCallResponders to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_workflow_task_page_pagerduty_on_call_responders", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_page_pagerduty_on_call_responders rootly_workflow_task_page_pagerduty_on_call_responders} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowTaskPagePagerdutyOnCallRespondersConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowTaskPagePagerdutyOnCallRespondersConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_workflow_task_page_pagerduty_on_call_responders',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.7'
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
  private _taskParams = new WorkflowTaskPagePagerdutyOnCallRespondersTaskParamsOutputReference(this, "task_params");
  public get taskParams() {
    return this._taskParams;
  }
  public putTaskParams(value: WorkflowTaskPagePagerdutyOnCallRespondersTaskParams) {
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
      task_params: workflowTaskPagePagerdutyOnCallRespondersTaskParamsToTerraform(this._taskParams.internalValue),
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
        value: workflowTaskPagePagerdutyOnCallRespondersTaskParamsToHclTerraform(this._taskParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkflowTaskPagePagerdutyOnCallRespondersTaskParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
