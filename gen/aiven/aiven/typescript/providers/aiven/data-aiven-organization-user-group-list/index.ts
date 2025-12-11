// https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/organization_user_group_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAivenOrganizationUserGroupListConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of an organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/organization_user_group_list#organization_id DataAivenOrganizationUserGroupList#organization_id}
  */
  readonly organizationId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/organization_user_group_list#timeouts DataAivenOrganizationUserGroupList#timeouts}
  */
  readonly timeouts?: DataAivenOrganizationUserGroupListTimeouts;
  /**
  * user_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/organization_user_group_list#user_groups DataAivenOrganizationUserGroupList#user_groups}
  */
  readonly userGroups?: DataAivenOrganizationUserGroupListUserGroups[] | cdktf.IResolvable;
}
export interface DataAivenOrganizationUserGroupListTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/organization_user_group_list#read DataAivenOrganizationUserGroupList#read}
  */
  readonly read?: string;
}

export function dataAivenOrganizationUserGroupListTimeoutsToTerraform(struct?: DataAivenOrganizationUserGroupListTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataAivenOrganizationUserGroupListTimeoutsToHclTerraform(struct?: DataAivenOrganizationUserGroupListTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAivenOrganizationUserGroupListTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAivenOrganizationUserGroupListTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenOrganizationUserGroupListTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}
export interface DataAivenOrganizationUserGroupListUserGroups {
}

export function dataAivenOrganizationUserGroupListUserGroupsToTerraform(struct?: DataAivenOrganizationUserGroupListUserGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenOrganizationUserGroupListUserGroupsToHclTerraform(struct?: DataAivenOrganizationUserGroupListUserGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenOrganizationUserGroupListUserGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenOrganizationUserGroupListUserGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenOrganizationUserGroupListUserGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // managed_by_scim - computed: true, optional: false, required: false
  public get managedByScim() {
    return this.getBooleanAttribute('managed_by_scim');
  }

  // member_count - computed: true, optional: false, required: false
  public get memberCount() {
    return this.getNumberAttribute('member_count');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // user_group_id - computed: true, optional: false, required: false
  public get userGroupId() {
    return this.getStringAttribute('user_group_id');
  }

  // user_group_name - computed: true, optional: false, required: false
  public get userGroupName() {
    return this.getStringAttribute('user_group_name');
  }
}

export class DataAivenOrganizationUserGroupListUserGroupsList extends cdktf.ComplexList {
  public internalValue? : DataAivenOrganizationUserGroupListUserGroups[] | cdktf.IResolvable

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
  public get(index: number): DataAivenOrganizationUserGroupListUserGroupsOutputReference {
    return new DataAivenOrganizationUserGroupListUserGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/organization_user_group_list aiven_organization_user_group_list}
*/
export class DataAivenOrganizationUserGroupList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aiven_organization_user_group_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAivenOrganizationUserGroupList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAivenOrganizationUserGroupList to import
  * @param importFromId The id of the existing DataAivenOrganizationUserGroupList that should be imported. Refer to the {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/organization_user_group_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAivenOrganizationUserGroupList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aiven_organization_user_group_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/organization_user_group_list aiven_organization_user_group_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAivenOrganizationUserGroupListConfig
  */
  public constructor(scope: Construct, id: string, config: DataAivenOrganizationUserGroupListConfig) {
    super(scope, id, {
      terraformResourceType: 'aiven_organization_user_group_list',
      terraformGeneratorMetadata: {
        providerName: 'aiven',
        providerVersion: '4.48.0',
        providerVersionConstraint: '4.48.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._organizationId = config.organizationId;
    this._timeouts.internalValue = config.timeouts;
    this._userGroups.internalValue = config.userGroups;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAivenOrganizationUserGroupListTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAivenOrganizationUserGroupListTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // user_groups - computed: false, optional: true, required: false
  private _userGroups = new DataAivenOrganizationUserGroupListUserGroupsList(this, "user_groups", true);
  public get userGroups() {
    return this._userGroups;
  }
  public putUserGroups(value: DataAivenOrganizationUserGroupListUserGroups[] | cdktf.IResolvable) {
    this._userGroups.internalValue = value;
  }
  public resetUserGroups() {
    this._userGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupsInput() {
    return this._userGroups.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      organization_id: cdktf.stringToTerraform(this._organizationId),
      timeouts: dataAivenOrganizationUserGroupListTimeoutsToTerraform(this._timeouts.internalValue),
      user_groups: cdktf.listMapper(dataAivenOrganizationUserGroupListUserGroupsToTerraform, true)(this._userGroups.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataAivenOrganizationUserGroupListTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAivenOrganizationUserGroupListTimeouts",
      },
      user_groups: {
        value: cdktf.listMapperHcl(dataAivenOrganizationUserGroupListUserGroupsToHclTerraform, true)(this._userGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataAivenOrganizationUserGroupListUserGroupsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
