// https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * (Enterprise) Access control list for the template. If null, ACL policies will not be added, removed, or read by Terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/template#acl Template#acl}
  */
  readonly acl?: TemplateAcl;
  /**
  * The activity bump duration for all workspaces created from this template, in milliseconds. Defaults to one hour.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/template#activity_bump_ms Template#activity_bump_ms}
  */
  readonly activityBumpMs?: number;
  /**
  * (Enterprise) Whether users can auto-start workspaces created from this template. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/template#allow_user_auto_start Template#allow_user_auto_start}
  */
  readonly allowUserAutoStart?: boolean | cdktf.IResolvable;
  /**
  * (Enterprise) Whether users can auto-stop workspaces created from this template. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/template#allow_user_auto_stop Template#allow_user_auto_stop}
  */
  readonly allowUserAutoStop?: boolean | cdktf.IResolvable;
  /**
  * Whether users can cancel in-progress workspace jobs using this template. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/template#allow_user_cancel_workspace_jobs Template#allow_user_cancel_workspace_jobs}
  */
  readonly allowUserCancelWorkspaceJobs?: boolean | cdktf.IResolvable;
  /**
  * (Enterprise) List of days of the week in which autostart is allowed to happen, for all workspaces created from this template. Defaults to all days. If no days are specified, autostart is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/template#auto_start_permitted_days_of_week Template#auto_start_permitted_days_of_week}
  */
  readonly autoStartPermittedDaysOfWeek?: string[];
  /**
  * (Enterprise) The auto-stop requirement for all workspaces created from this template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/template#auto_stop_requirement Template#auto_stop_requirement}
  */
  readonly autoStopRequirement?: TemplateAutoStopRequirement;
  /**
  * The default time-to-live for all workspaces created from this template, in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/template#default_ttl_ms Template#default_ttl_ms}
  */
  readonly defaultTtlMs?: number;
  /**
  * If set, the template will be marked as deprecated with the provided message and users will be blocked from creating new workspaces from it. Does nothing if set when the resource is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/template#deprecation_message Template#deprecation_message}
  */
  readonly deprecationMessage?: string;
  /**
  * A description of the template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/template#description Template#description}
  */
  readonly description?: string;
  /**
  * The display name of the template. Defaults to the template name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/template#display_name Template#display_name}
  */
  readonly displayName?: string;
  /**
  * (Enterprise) The max lifetime before Coder stops all resources for failed workspaces created from this template, in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/template#failure_ttl_ms Template#failure_ttl_ms}
  */
  readonly failureTtlMs?: number;
  /**
  * Relative path or external URL that specifies an icon to be displayed in the dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/template#icon Template#icon}
  */
  readonly icon?: string;
  /**
  * (Enterprise) The maximum port share level for workspaces created from this template. Defaults to `owner` on an Enterprise deployment, or `public` otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/template#max_port_share_level Template#max_port_share_level}
  */
  readonly maxPortShareLevel?: string;
  /**
  * The name of the template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/template#name Template#name}
  */
  readonly name: string;
  /**
  * The ID of the organization. Defaults to the provider's default organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/template#organization_id Template#organization_id}
  */
  readonly organizationId?: string;
  /**
  * (Enterprise) Whether workspaces must be created from the active version of this template. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/template#require_active_version Template#require_active_version}
  */
  readonly requireActiveVersion?: boolean | cdktf.IResolvable;
  /**
  * (Enterprise) The max lifetime before Coder permanently deletes dormant workspaces created from this template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/template#time_til_dormant_autodelete_ms Template#time_til_dormant_autodelete_ms}
  */
  readonly timeTilDormantAutodeleteMs?: number;
  /**
  * (Enterprise) The max lifetime before Coder locks inactive workspaces created from this template, in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/template#time_til_dormant_ms Template#time_til_dormant_ms}
  */
  readonly timeTilDormantMs?: number;
  /**
  * If true, the classic parameter flow will be used when creating workspaces from this template. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/template#use_classic_parameter_flow Template#use_classic_parameter_flow}
  */
  readonly useClassicParameterFlow?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/template#versions Template#versions}
  */
  readonly versions: TemplateVersions[] | cdktf.IResolvable;
}
export interface TemplateAclGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/template#id Template#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/template#role Template#role}
  */
  readonly role: string;
}

export function templateAclGroupsToTerraform(struct?: TemplateAclGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function templateAclGroupsToHclTerraform(struct?: TemplateAclGroups | cdktf.IResolvable): any {
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
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateAclGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateAclGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateAclGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._role = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._role = value.role;
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

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}

export class TemplateAclGroupsList extends cdktf.ComplexList {
  public internalValue? : TemplateAclGroups[] | cdktf.IResolvable

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
  public get(index: number): TemplateAclGroupsOutputReference {
    return new TemplateAclGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateAclUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/template#id Template#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/template#role Template#role}
  */
  readonly role: string;
}

export function templateAclUsersToTerraform(struct?: TemplateAclUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function templateAclUsersToHclTerraform(struct?: TemplateAclUsers | cdktf.IResolvable): any {
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
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateAclUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateAclUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateAclUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._role = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._role = value.role;
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

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}

export class TemplateAclUsersList extends cdktf.ComplexList {
  public internalValue? : TemplateAclUsers[] | cdktf.IResolvable

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
  public get(index: number): TemplateAclUsersOutputReference {
    return new TemplateAclUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateAcl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/template#groups Template#groups}
  */
  readonly groups: TemplateAclGroups[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/template#users Template#users}
  */
  readonly users: TemplateAclUsers[] | cdktf.IResolvable;
}

export function templateAclToTerraform(struct?: TemplateAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    groups: cdktf.listMapper(templateAclGroupsToTerraform, false)(struct!.groups),
    users: cdktf.listMapper(templateAclUsersToTerraform, false)(struct!.users),
  }
}


export function templateAclToHclTerraform(struct?: TemplateAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    groups: {
      value: cdktf.listMapperHcl(templateAclGroupsToHclTerraform, false)(struct!.groups),
      isBlock: true,
      type: "set",
      storageClassType: "TemplateAclGroupsList",
    },
    users: {
      value: cdktf.listMapperHcl(templateAclUsersToHclTerraform, false)(struct!.users),
      isBlock: true,
      type: "set",
      storageClassType: "TemplateAclUsersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TemplateAcl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups?.internalValue;
    }
    if (this._users?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateAcl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groups.internalValue = undefined;
      this._users.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groups.internalValue = value.groups;
      this._users.internalValue = value.users;
    }
  }

  // groups - computed: false, optional: false, required: true
  private _groups = new TemplateAclGroupsList(this, "groups", true);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: TemplateAclGroups[] | cdktf.IResolvable) {
    this._groups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }

  // users - computed: false, optional: false, required: true
  private _users = new TemplateAclUsersList(this, "users", true);
  public get users() {
    return this._users;
  }
  public putUsers(value: TemplateAclUsers[] | cdktf.IResolvable) {
    this._users.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }
}
export interface TemplateAutoStopRequirement {
  /**
  * List of days of the week on which restarts are required. Restarts happen within the user's quiet hours (in their configured timezone). If no days are specified, restarts are not required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/template#days_of_week Template#days_of_week}
  */
  readonly daysOfWeek?: string[];
  /**
  * Weeks is the number of weeks between required restarts. Weeks are synced across all workspaces (and Coder deployments) using modulo math on a hardcoded epoch week of January 2nd, 2023 (the first Monday of 2023). Values of 0 or 1 indicate weekly restarts. Values of 2 indicate fortnightly restarts, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/template#weeks Template#weeks}
  */
  readonly weeks?: number;
}

export function templateAutoStopRequirementToTerraform(struct?: TemplateAutoStopRequirement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_of_week: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.daysOfWeek),
    weeks: cdktf.numberToTerraform(struct!.weeks),
  }
}


export function templateAutoStopRequirementToHclTerraform(struct?: TemplateAutoStopRequirement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days_of_week: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.daysOfWeek),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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

export class TemplateAutoStopRequirementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TemplateAutoStopRequirement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfWeek = this._daysOfWeek;
    }
    if (this._weeks !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeks = this._weeks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateAutoStopRequirement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daysOfWeek = undefined;
      this._weeks = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daysOfWeek = value.daysOfWeek;
      this._weeks = value.weeks;
    }
  }

  // days_of_week - computed: true, optional: true, required: false
  private _daysOfWeek?: string[]; 
  public get daysOfWeek() {
    return cdktf.Fn.tolist(this.getListAttribute('days_of_week'));
  }
  public set daysOfWeek(value: string[]) {
    this._daysOfWeek = value;
  }
  public resetDaysOfWeek() {
    this._daysOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfWeekInput() {
    return this._daysOfWeek;
  }

  // weeks - computed: true, optional: true, required: false
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
export interface TemplateVersionsProvisionerTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/template#name Template#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/template#value Template#value}
  */
  readonly value: string;
}

export function templateVersionsProvisionerTagsToTerraform(struct?: TemplateVersionsProvisionerTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function templateVersionsProvisionerTagsToHclTerraform(struct?: TemplateVersionsProvisionerTags | cdktf.IResolvable): any {
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

export class TemplateVersionsProvisionerTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateVersionsProvisionerTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateVersionsProvisionerTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class TemplateVersionsProvisionerTagsList extends cdktf.ComplexList {
  public internalValue? : TemplateVersionsProvisionerTags[] | cdktf.IResolvable

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
  public get(index: number): TemplateVersionsProvisionerTagsOutputReference {
    return new TemplateVersionsProvisionerTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateVersionsTfVars {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/template#name Template#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/template#value Template#value}
  */
  readonly value: string;
}

export function templateVersionsTfVarsToTerraform(struct?: TemplateVersionsTfVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function templateVersionsTfVarsToHclTerraform(struct?: TemplateVersionsTfVars | cdktf.IResolvable): any {
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

export class TemplateVersionsTfVarsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateVersionsTfVars | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateVersionsTfVars | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class TemplateVersionsTfVarsList extends cdktf.ComplexList {
  public internalValue? : TemplateVersionsTfVars[] | cdktf.IResolvable

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
  public get(index: number): TemplateVersionsTfVarsOutputReference {
    return new TemplateVersionsTfVarsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateVersions {
  /**
  * Whether this version is the active version of the template. Only one version can be active at a time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/template#active Template#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * A path to the directory to create the template version from. Changes in the directory contents will trigger the creation of a new template version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/template#directory Template#directory}
  */
  readonly directory: string;
  /**
  * A message describing the changes in this version of the template. Messages longer than 72 characters will be truncated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/template#message Template#message}
  */
  readonly message?: string;
  /**
  * The name of the template version. Automatically generated if not provided. If provided, the name *must* change each time the directory contents, or the `tf_vars` attribute are updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/template#name Template#name}
  */
  readonly name?: string;
  /**
  * Provisioner tags for the template version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/template#provisioner_tags Template#provisioner_tags}
  */
  readonly provisionerTags?: TemplateVersionsProvisionerTags[] | cdktf.IResolvable;
  /**
  * Terraform variables for the template version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/template#tf_vars Template#tf_vars}
  */
  readonly tfVars?: TemplateVersionsTfVars[] | cdktf.IResolvable;
}

export function templateVersionsToTerraform(struct?: TemplateVersions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    directory: cdktf.stringToTerraform(struct!.directory),
    message: cdktf.stringToTerraform(struct!.message),
    name: cdktf.stringToTerraform(struct!.name),
    provisioner_tags: cdktf.listMapper(templateVersionsProvisionerTagsToTerraform, false)(struct!.provisionerTags),
    tf_vars: cdktf.listMapper(templateVersionsTfVarsToTerraform, false)(struct!.tfVars),
  }
}


export function templateVersionsToHclTerraform(struct?: TemplateVersions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    directory: {
      value: cdktf.stringToHclTerraform(struct!.directory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
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
    provisioner_tags: {
      value: cdktf.listMapperHcl(templateVersionsProvisionerTagsToHclTerraform, false)(struct!.provisionerTags),
      isBlock: true,
      type: "set",
      storageClassType: "TemplateVersionsProvisionerTagsList",
    },
    tf_vars: {
      value: cdktf.listMapperHcl(templateVersionsTfVarsToHclTerraform, false)(struct!.tfVars),
      isBlock: true,
      type: "set",
      storageClassType: "TemplateVersionsTfVarsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateVersionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateVersions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._directory !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._provisionerTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionerTags = this._provisionerTags?.internalValue;
    }
    if (this._tfVars?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tfVars = this._tfVars?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateVersions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._active = undefined;
      this._directory = undefined;
      this._message = undefined;
      this._name = undefined;
      this._provisionerTags.internalValue = undefined;
      this._tfVars.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._active = value.active;
      this._directory = value.directory;
      this._message = value.message;
      this._name = value.name;
      this._provisionerTags.internalValue = value.provisionerTags;
      this._tfVars.internalValue = value.tfVars;
    }
  }

  // active - computed: true, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // directory - computed: false, optional: false, required: true
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // directory_hash - computed: true, optional: false, required: false
  public get directoryHash() {
    return this.getStringAttribute('directory_hash');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // message - computed: true, optional: true, required: false
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

  // provisioner_tags - computed: false, optional: true, required: false
  private _provisionerTags = new TemplateVersionsProvisionerTagsList(this, "provisioner_tags", true);
  public get provisionerTags() {
    return this._provisionerTags;
  }
  public putProvisionerTags(value: TemplateVersionsProvisionerTags[] | cdktf.IResolvable) {
    this._provisionerTags.internalValue = value;
  }
  public resetProvisionerTags() {
    this._provisionerTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionerTagsInput() {
    return this._provisionerTags.internalValue;
  }

  // tf_vars - computed: false, optional: true, required: false
  private _tfVars = new TemplateVersionsTfVarsList(this, "tf_vars", true);
  public get tfVars() {
    return this._tfVars;
  }
  public putTfVars(value: TemplateVersionsTfVars[] | cdktf.IResolvable) {
    this._tfVars.internalValue = value;
  }
  public resetTfVars() {
    this._tfVars.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tfVarsInput() {
    return this._tfVars.internalValue;
  }
}

export class TemplateVersionsList extends cdktf.ComplexList {
  public internalValue? : TemplateVersions[] | cdktf.IResolvable

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
  public get(index: number): TemplateVersionsOutputReference {
    return new TemplateVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/template coderd_template}
*/
export class Template extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coderd_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Template resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Template to import
  * @param importFromId The id of the existing Template that should be imported. Refer to the {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Template to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coderd_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/template coderd_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TemplateConfig
  */
  public constructor(scope: Construct, id: string, config: TemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'coderd_template',
      terraformGeneratorMetadata: {
        providerName: 'coderd',
        providerVersion: '0.0.12',
        providerVersionConstraint: '0.0.12'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acl.internalValue = config.acl;
    this._activityBumpMs = config.activityBumpMs;
    this._allowUserAutoStart = config.allowUserAutoStart;
    this._allowUserAutoStop = config.allowUserAutoStop;
    this._allowUserCancelWorkspaceJobs = config.allowUserCancelWorkspaceJobs;
    this._autoStartPermittedDaysOfWeek = config.autoStartPermittedDaysOfWeek;
    this._autoStopRequirement.internalValue = config.autoStopRequirement;
    this._defaultTtlMs = config.defaultTtlMs;
    this._deprecationMessage = config.deprecationMessage;
    this._description = config.description;
    this._displayName = config.displayName;
    this._failureTtlMs = config.failureTtlMs;
    this._icon = config.icon;
    this._maxPortShareLevel = config.maxPortShareLevel;
    this._name = config.name;
    this._organizationId = config.organizationId;
    this._requireActiveVersion = config.requireActiveVersion;
    this._timeTilDormantAutodeleteMs = config.timeTilDormantAutodeleteMs;
    this._timeTilDormantMs = config.timeTilDormantMs;
    this._useClassicParameterFlow = config.useClassicParameterFlow;
    this._versions.internalValue = config.versions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl - computed: false, optional: true, required: false
  private _acl = new TemplateAclOutputReference(this, "acl");
  public get acl() {
    return this._acl;
  }
  public putAcl(value: TemplateAcl) {
    this._acl.internalValue = value;
  }
  public resetAcl() {
    this._acl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl.internalValue;
  }

  // activity_bump_ms - computed: true, optional: true, required: false
  private _activityBumpMs?: number; 
  public get activityBumpMs() {
    return this.getNumberAttribute('activity_bump_ms');
  }
  public set activityBumpMs(value: number) {
    this._activityBumpMs = value;
  }
  public resetActivityBumpMs() {
    this._activityBumpMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activityBumpMsInput() {
    return this._activityBumpMs;
  }

  // allow_user_auto_start - computed: true, optional: true, required: false
  private _allowUserAutoStart?: boolean | cdktf.IResolvable; 
  public get allowUserAutoStart() {
    return this.getBooleanAttribute('allow_user_auto_start');
  }
  public set allowUserAutoStart(value: boolean | cdktf.IResolvable) {
    this._allowUserAutoStart = value;
  }
  public resetAllowUserAutoStart() {
    this._allowUserAutoStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUserAutoStartInput() {
    return this._allowUserAutoStart;
  }

  // allow_user_auto_stop - computed: true, optional: true, required: false
  private _allowUserAutoStop?: boolean | cdktf.IResolvable; 
  public get allowUserAutoStop() {
    return this.getBooleanAttribute('allow_user_auto_stop');
  }
  public set allowUserAutoStop(value: boolean | cdktf.IResolvable) {
    this._allowUserAutoStop = value;
  }
  public resetAllowUserAutoStop() {
    this._allowUserAutoStop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUserAutoStopInput() {
    return this._allowUserAutoStop;
  }

  // allow_user_cancel_workspace_jobs - computed: true, optional: true, required: false
  private _allowUserCancelWorkspaceJobs?: boolean | cdktf.IResolvable; 
  public get allowUserCancelWorkspaceJobs() {
    return this.getBooleanAttribute('allow_user_cancel_workspace_jobs');
  }
  public set allowUserCancelWorkspaceJobs(value: boolean | cdktf.IResolvable) {
    this._allowUserCancelWorkspaceJobs = value;
  }
  public resetAllowUserCancelWorkspaceJobs() {
    this._allowUserCancelWorkspaceJobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUserCancelWorkspaceJobsInput() {
    return this._allowUserCancelWorkspaceJobs;
  }

  // auto_start_permitted_days_of_week - computed: true, optional: true, required: false
  private _autoStartPermittedDaysOfWeek?: string[]; 
  public get autoStartPermittedDaysOfWeek() {
    return cdktf.Fn.tolist(this.getListAttribute('auto_start_permitted_days_of_week'));
  }
  public set autoStartPermittedDaysOfWeek(value: string[]) {
    this._autoStartPermittedDaysOfWeek = value;
  }
  public resetAutoStartPermittedDaysOfWeek() {
    this._autoStartPermittedDaysOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoStartPermittedDaysOfWeekInput() {
    return this._autoStartPermittedDaysOfWeek;
  }

  // auto_stop_requirement - computed: true, optional: true, required: false
  private _autoStopRequirement = new TemplateAutoStopRequirementOutputReference(this, "auto_stop_requirement");
  public get autoStopRequirement() {
    return this._autoStopRequirement;
  }
  public putAutoStopRequirement(value: TemplateAutoStopRequirement) {
    this._autoStopRequirement.internalValue = value;
  }
  public resetAutoStopRequirement() {
    this._autoStopRequirement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoStopRequirementInput() {
    return this._autoStopRequirement.internalValue;
  }

  // default_ttl_ms - computed: true, optional: true, required: false
  private _defaultTtlMs?: number; 
  public get defaultTtlMs() {
    return this.getNumberAttribute('default_ttl_ms');
  }
  public set defaultTtlMs(value: number) {
    this._defaultTtlMs = value;
  }
  public resetDefaultTtlMs() {
    this._defaultTtlMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlMsInput() {
    return this._defaultTtlMs;
  }

  // deprecation_message - computed: true, optional: true, required: false
  private _deprecationMessage?: string; 
  public get deprecationMessage() {
    return this.getStringAttribute('deprecation_message');
  }
  public set deprecationMessage(value: string) {
    this._deprecationMessage = value;
  }
  public resetDeprecationMessage() {
    this._deprecationMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprecationMessageInput() {
    return this._deprecationMessage;
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

  // failure_ttl_ms - computed: true, optional: true, required: false
  private _failureTtlMs?: number; 
  public get failureTtlMs() {
    return this.getNumberAttribute('failure_ttl_ms');
  }
  public set failureTtlMs(value: number) {
    this._failureTtlMs = value;
  }
  public resetFailureTtlMs() {
    this._failureTtlMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureTtlMsInput() {
    return this._failureTtlMs;
  }

  // icon - computed: true, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_port_share_level - computed: true, optional: true, required: false
  private _maxPortShareLevel?: string; 
  public get maxPortShareLevel() {
    return this.getStringAttribute('max_port_share_level');
  }
  public set maxPortShareLevel(value: string) {
    this._maxPortShareLevel = value;
  }
  public resetMaxPortShareLevel() {
    this._maxPortShareLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPortShareLevelInput() {
    return this._maxPortShareLevel;
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

  // organization_id - computed: true, optional: true, required: false
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  public resetOrganizationId() {
    this._organizationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // require_active_version - computed: true, optional: true, required: false
  private _requireActiveVersion?: boolean | cdktf.IResolvable; 
  public get requireActiveVersion() {
    return this.getBooleanAttribute('require_active_version');
  }
  public set requireActiveVersion(value: boolean | cdktf.IResolvable) {
    this._requireActiveVersion = value;
  }
  public resetRequireActiveVersion() {
    this._requireActiveVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireActiveVersionInput() {
    return this._requireActiveVersion;
  }

  // time_til_dormant_autodelete_ms - computed: true, optional: true, required: false
  private _timeTilDormantAutodeleteMs?: number; 
  public get timeTilDormantAutodeleteMs() {
    return this.getNumberAttribute('time_til_dormant_autodelete_ms');
  }
  public set timeTilDormantAutodeleteMs(value: number) {
    this._timeTilDormantAutodeleteMs = value;
  }
  public resetTimeTilDormantAutodeleteMs() {
    this._timeTilDormantAutodeleteMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeTilDormantAutodeleteMsInput() {
    return this._timeTilDormantAutodeleteMs;
  }

  // time_til_dormant_ms - computed: true, optional: true, required: false
  private _timeTilDormantMs?: number; 
  public get timeTilDormantMs() {
    return this.getNumberAttribute('time_til_dormant_ms');
  }
  public set timeTilDormantMs(value: number) {
    this._timeTilDormantMs = value;
  }
  public resetTimeTilDormantMs() {
    this._timeTilDormantMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeTilDormantMsInput() {
    return this._timeTilDormantMs;
  }

  // use_classic_parameter_flow - computed: true, optional: true, required: false
  private _useClassicParameterFlow?: boolean | cdktf.IResolvable; 
  public get useClassicParameterFlow() {
    return this.getBooleanAttribute('use_classic_parameter_flow');
  }
  public set useClassicParameterFlow(value: boolean | cdktf.IResolvable) {
    this._useClassicParameterFlow = value;
  }
  public resetUseClassicParameterFlow() {
    this._useClassicParameterFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useClassicParameterFlowInput() {
    return this._useClassicParameterFlow;
  }

  // versions - computed: false, optional: false, required: true
  private _versions = new TemplateVersionsList(this, "versions", false);
  public get versions() {
    return this._versions;
  }
  public putVersions(value: TemplateVersions[] | cdktf.IResolvable) {
    this._versions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionsInput() {
    return this._versions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl: templateAclToTerraform(this._acl.internalValue),
      activity_bump_ms: cdktf.numberToTerraform(this._activityBumpMs),
      allow_user_auto_start: cdktf.booleanToTerraform(this._allowUserAutoStart),
      allow_user_auto_stop: cdktf.booleanToTerraform(this._allowUserAutoStop),
      allow_user_cancel_workspace_jobs: cdktf.booleanToTerraform(this._allowUserCancelWorkspaceJobs),
      auto_start_permitted_days_of_week: cdktf.listMapper(cdktf.stringToTerraform, false)(this._autoStartPermittedDaysOfWeek),
      auto_stop_requirement: templateAutoStopRequirementToTerraform(this._autoStopRequirement.internalValue),
      default_ttl_ms: cdktf.numberToTerraform(this._defaultTtlMs),
      deprecation_message: cdktf.stringToTerraform(this._deprecationMessage),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      failure_ttl_ms: cdktf.numberToTerraform(this._failureTtlMs),
      icon: cdktf.stringToTerraform(this._icon),
      max_port_share_level: cdktf.stringToTerraform(this._maxPortShareLevel),
      name: cdktf.stringToTerraform(this._name),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      require_active_version: cdktf.booleanToTerraform(this._requireActiveVersion),
      time_til_dormant_autodelete_ms: cdktf.numberToTerraform(this._timeTilDormantAutodeleteMs),
      time_til_dormant_ms: cdktf.numberToTerraform(this._timeTilDormantMs),
      use_classic_parameter_flow: cdktf.booleanToTerraform(this._useClassicParameterFlow),
      versions: cdktf.listMapper(templateVersionsToTerraform, false)(this._versions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl: {
        value: templateAclToHclTerraform(this._acl.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TemplateAcl",
      },
      activity_bump_ms: {
        value: cdktf.numberToHclTerraform(this._activityBumpMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      allow_user_auto_start: {
        value: cdktf.booleanToHclTerraform(this._allowUserAutoStart),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_user_auto_stop: {
        value: cdktf.booleanToHclTerraform(this._allowUserAutoStop),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_user_cancel_workspace_jobs: {
        value: cdktf.booleanToHclTerraform(this._allowUserCancelWorkspaceJobs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_start_permitted_days_of_week: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._autoStartPermittedDaysOfWeek),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      auto_stop_requirement: {
        value: templateAutoStopRequirementToHclTerraform(this._autoStopRequirement.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TemplateAutoStopRequirement",
      },
      default_ttl_ms: {
        value: cdktf.numberToHclTerraform(this._defaultTtlMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      deprecation_message: {
        value: cdktf.stringToHclTerraform(this._deprecationMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      failure_ttl_ms: {
        value: cdktf.numberToHclTerraform(this._failureTtlMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icon: {
        value: cdktf.stringToHclTerraform(this._icon),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_port_share_level: {
        value: cdktf.stringToHclTerraform(this._maxPortShareLevel),
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
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      require_active_version: {
        value: cdktf.booleanToHclTerraform(this._requireActiveVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      time_til_dormant_autodelete_ms: {
        value: cdktf.numberToHclTerraform(this._timeTilDormantAutodeleteMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      time_til_dormant_ms: {
        value: cdktf.numberToHclTerraform(this._timeTilDormantMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_classic_parameter_flow: {
        value: cdktf.booleanToHclTerraform(this._useClassicParameterFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      versions: {
        value: cdktf.listMapperHcl(templateVersionsToHclTerraform, false)(this._versions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TemplateVersionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
