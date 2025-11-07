// https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/data-sources/template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCoderdTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the template to retrieve. This field will be populated if a template name is supplied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/data-sources/template#id DataCoderdTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the template to retrieve. This field will be populated if an ID is supplied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/data-sources/template#name DataCoderdTemplate#name}
  */
  readonly name?: string;
  /**
  * ID of the organization the template is associated with. This field will be populated if an ID is supplied. Defaults to the provider default organization ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/data-sources/template#organization_id DataCoderdTemplate#organization_id}
  */
  readonly organizationId?: string;
}
export interface DataCoderdTemplateAclGroups {
}

export function dataCoderdTemplateAclGroupsToTerraform(struct?: DataCoderdTemplateAclGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoderdTemplateAclGroupsToHclTerraform(struct?: DataCoderdTemplateAclGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoderdTemplateAclGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoderdTemplateAclGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoderdTemplateAclGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }
}

export class DataCoderdTemplateAclGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataCoderdTemplateAclGroupsOutputReference {
    return new DataCoderdTemplateAclGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoderdTemplateAclUsers {
}

export function dataCoderdTemplateAclUsersToTerraform(struct?: DataCoderdTemplateAclUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoderdTemplateAclUsersToHclTerraform(struct?: DataCoderdTemplateAclUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoderdTemplateAclUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoderdTemplateAclUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoderdTemplateAclUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }
}

export class DataCoderdTemplateAclUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataCoderdTemplateAclUsersOutputReference {
    return new DataCoderdTemplateAclUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoderdTemplateAcl {
}

export function dataCoderdTemplateAclToTerraform(struct?: DataCoderdTemplateAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoderdTemplateAclToHclTerraform(struct?: DataCoderdTemplateAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoderdTemplateAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoderdTemplateAcl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoderdTemplateAcl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataCoderdTemplateAclGroupsList(this, "groups", true);
  public get groups() {
    return this._groups;
  }

  // users - computed: true, optional: false, required: false
  private _users = new DataCoderdTemplateAclUsersList(this, "users", true);
  public get users() {
    return this._users;
  }
}
export interface DataCoderdTemplateAutoStopRequirement {
  /**
  * Weeks is the number of weeks between required restarts. Weeks are synced across all workspaces (and Coder deployments) using modulo math on a hardcoded epoch week of January 2nd, 2023 (the first Monday of 2023). Values of 0 or 1 indicate weekly restarts. Values of 2 indicate fortnightly restarts, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/data-sources/template#weeks DataCoderdTemplate#weeks}
  */
  readonly weeks?: number;
}

export function dataCoderdTemplateAutoStopRequirementToTerraform(struct?: DataCoderdTemplateAutoStopRequirement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weeks: cdktf.numberToTerraform(struct!.weeks),
  }
}


export function dataCoderdTemplateAutoStopRequirementToHclTerraform(struct?: DataCoderdTemplateAutoStopRequirement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataCoderdTemplateAutoStopRequirementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoderdTemplateAutoStopRequirement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._weeks !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeks = this._weeks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoderdTemplateAutoStopRequirement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._weeks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._weeks = value.weeks;
    }
  }

  // days_of_week - computed: true, optional: false, required: false
  public get daysOfWeek() {
    return cdktf.Fn.tolist(this.getListAttribute('days_of_week'));
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

/**
* Represents a {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/data-sources/template coderd_template}
*/
export class DataCoderdTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coderd_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCoderdTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCoderdTemplate to import
  * @param importFromId The id of the existing DataCoderdTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/data-sources/template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCoderdTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coderd_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/data-sources/template coderd_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCoderdTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCoderdTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'coderd_template',
      terraformGeneratorMetadata: {
        providerName: 'coderd',
        providerVersion: '0.0.12'
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
    this._name = config.name;
    this._organizationId = config.organizationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl - computed: true, optional: false, required: false
  private _acl = new DataCoderdTemplateAclOutputReference(this, "acl");
  public get acl() {
    return this._acl;
  }

  // active_user_count - computed: true, optional: false, required: false
  public get activeUserCount() {
    return this.getNumberAttribute('active_user_count');
  }

  // active_version_id - computed: true, optional: false, required: false
  public get activeVersionId() {
    return this.getStringAttribute('active_version_id');
  }

  // activity_bump_ms - computed: true, optional: false, required: false
  public get activityBumpMs() {
    return this.getNumberAttribute('activity_bump_ms');
  }

  // allow_user_autostart - computed: true, optional: false, required: false
  public get allowUserAutostart() {
    return this.getBooleanAttribute('allow_user_autostart');
  }

  // allow_user_autostop - computed: true, optional: false, required: false
  public get allowUserAutostop() {
    return this.getBooleanAttribute('allow_user_autostop');
  }

  // allow_user_cancel_workspace_jobs - computed: true, optional: false, required: false
  public get allowUserCancelWorkspaceJobs() {
    return this.getBooleanAttribute('allow_user_cancel_workspace_jobs');
  }

  // auto_start_permitted_days_of_week - computed: true, optional: false, required: false
  public get autoStartPermittedDaysOfWeek() {
    return cdktf.Fn.tolist(this.getListAttribute('auto_start_permitted_days_of_week'));
  }

  // auto_stop_requirement - computed: true, optional: false, required: false
  private _autoStopRequirement = new DataCoderdTemplateAutoStopRequirementOutputReference(this, "auto_stop_requirement");
  public get autoStopRequirement() {
    return this._autoStopRequirement;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }

  // created_by_user_id - computed: true, optional: false, required: false
  public get createdByUserId() {
    return this.getStringAttribute('created_by_user_id');
  }

  // default_ttl_ms - computed: true, optional: false, required: false
  public get defaultTtlMs() {
    return this.getNumberAttribute('default_ttl_ms');
  }

  // deprecated - computed: true, optional: false, required: false
  public get deprecated() {
    return this.getBooleanAttribute('deprecated');
  }

  // deprecation_message - computed: true, optional: false, required: false
  public get deprecationMessage() {
    return this.getStringAttribute('deprecation_message');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // failure_ttl_ms - computed: true, optional: false, required: false
  public get failureTtlMs() {
    return this.getNumberAttribute('failure_ttl_ms');
  }

  // icon - computed: true, optional: false, required: false
  public get icon() {
    return this.getStringAttribute('icon');
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

  // max_port_share_level - computed: true, optional: false, required: false
  public get maxPortShareLevel() {
    return this.getStringAttribute('max_port_share_level');
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

  // require_active_version - computed: true, optional: false, required: false
  public get requireActiveVersion() {
    return this.getBooleanAttribute('require_active_version');
  }

  // time_til_dormant_autodelete_ms - computed: true, optional: false, required: false
  public get timeTilDormantAutodeleteMs() {
    return this.getNumberAttribute('time_til_dormant_autodelete_ms');
  }

  // time_til_dormant_ms - computed: true, optional: false, required: false
  public get timeTilDormantMs() {
    return this.getNumberAttribute('time_til_dormant_ms');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      organization_id: cdktf.stringToTerraform(this._organizationId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
