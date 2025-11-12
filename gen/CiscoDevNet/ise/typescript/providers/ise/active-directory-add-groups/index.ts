// https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/active_directory_add_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ActiveDirectoryAddGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * String that contains the names of the scopes that the active directory belongs to. Names are separated by comm
  *   - Default value: `Default_Scope`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/active_directory_add_groups#ad_scopes_names ActiveDirectoryAddGroups#ad_scopes_names}
  */
  readonly adScopesNames?: string;
  /**
  * Join point Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/active_directory_add_groups#description ActiveDirectoryAddGroups#description}
  */
  readonly description?: string;
  /**
  * AD domain associated with the join point
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/active_directory_add_groups#domain ActiveDirectoryAddGroups#domain}
  */
  readonly domain: string;
  /**
  * 
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/active_directory_add_groups#enable_domain_allowed_list ActiveDirectoryAddGroups#enable_domain_allowed_list}
  */
  readonly enableDomainAllowedList?: boolean | cdktf.IResolvable;
  /**
  * List of AD Groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/active_directory_add_groups#groups ActiveDirectoryAddGroups#groups}
  */
  readonly groups?: ActiveDirectoryAddGroupsGroups[] | cdktf.IResolvable;
  /**
  * Active Directory Join Point ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/active_directory_add_groups#join_point_id ActiveDirectoryAddGroups#join_point_id}
  */
  readonly joinPointId: string;
  /**
  * The name of the active directory join point
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/active_directory_add_groups#name ActiveDirectoryAddGroups#name}
  */
  readonly name: string;
}
export interface ActiveDirectoryAddGroupsGroups {
  /**
  * Required for each group in the group list with no duplication between groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/active_directory_add_groups#name ActiveDirectoryAddGroups#name}
  */
  readonly name: string;
  /**
  * Required for each group in the group list with no duplication between groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/active_directory_add_groups#sid ActiveDirectoryAddGroups#sid}
  */
  readonly sid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/active_directory_add_groups#type ActiveDirectoryAddGroups#type}
  */
  readonly type?: string;
}

export function activeDirectoryAddGroupsGroupsToTerraform(struct?: ActiveDirectoryAddGroupsGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    sid: cdktf.stringToTerraform(struct!.sid),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function activeDirectoryAddGroupsGroupsToHclTerraform(struct?: ActiveDirectoryAddGroupsGroups | cdktf.IResolvable): any {
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
    sid: {
      value: cdktf.stringToHclTerraform(struct!.sid),
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

export class ActiveDirectoryAddGroupsGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ActiveDirectoryAddGroupsGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sid !== undefined) {
      hasAnyValues = true;
      internalValueResult.sid = this._sid;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActiveDirectoryAddGroupsGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._sid = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._sid = value.sid;
      this._type = value.type;
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

  // sid - computed: false, optional: false, required: true
  private _sid?: string; 
  public get sid() {
    return this.getStringAttribute('sid');
  }
  public set sid(value: string) {
    this._sid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sidInput() {
    return this._sid;
  }

  // type - computed: false, optional: true, required: false
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

export class ActiveDirectoryAddGroupsGroupsList extends cdktf.ComplexList {
  public internalValue? : ActiveDirectoryAddGroupsGroups[] | cdktf.IResolvable

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
  public get(index: number): ActiveDirectoryAddGroupsGroupsOutputReference {
    return new ActiveDirectoryAddGroupsGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/active_directory_add_groups ise_active_directory_add_groups}
*/
export class ActiveDirectoryAddGroups extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ise_active_directory_add_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ActiveDirectoryAddGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ActiveDirectoryAddGroups to import
  * @param importFromId The id of the existing ActiveDirectoryAddGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/active_directory_add_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ActiveDirectoryAddGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ise_active_directory_add_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/active_directory_add_groups ise_active_directory_add_groups} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ActiveDirectoryAddGroupsConfig
  */
  public constructor(scope: Construct, id: string, config: ActiveDirectoryAddGroupsConfig) {
    super(scope, id, {
      terraformResourceType: 'ise_active_directory_add_groups',
      terraformGeneratorMetadata: {
        providerName: 'ise',
        providerVersion: '0.2.12',
        providerVersionConstraint: '0.2.12'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adScopesNames = config.adScopesNames;
    this._description = config.description;
    this._domain = config.domain;
    this._enableDomainAllowedList = config.enableDomainAllowedList;
    this._groups.internalValue = config.groups;
    this._joinPointId = config.joinPointId;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ad_scopes_names - computed: true, optional: true, required: false
  private _adScopesNames?: string; 
  public get adScopesNames() {
    return this.getStringAttribute('ad_scopes_names');
  }
  public set adScopesNames(value: string) {
    this._adScopesNames = value;
  }
  public resetAdScopesNames() {
    this._adScopesNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adScopesNamesInput() {
    return this._adScopesNames;
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

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // enable_domain_allowed_list - computed: true, optional: true, required: false
  private _enableDomainAllowedList?: boolean | cdktf.IResolvable; 
  public get enableDomainAllowedList() {
    return this.getBooleanAttribute('enable_domain_allowed_list');
  }
  public set enableDomainAllowedList(value: boolean | cdktf.IResolvable) {
    this._enableDomainAllowedList = value;
  }
  public resetEnableDomainAllowedList() {
    this._enableDomainAllowedList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDomainAllowedListInput() {
    return this._enableDomainAllowedList;
  }

  // groups - computed: false, optional: true, required: false
  private _groups = new ActiveDirectoryAddGroupsGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: ActiveDirectoryAddGroupsGroups[] | cdktf.IResolvable) {
    this._groups.internalValue = value;
  }
  public resetGroups() {
    this._groups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // join_point_id - computed: false, optional: false, required: true
  private _joinPointId?: string; 
  public get joinPointId() {
    return this.getStringAttribute('join_point_id');
  }
  public set joinPointId(value: string) {
    this._joinPointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get joinPointIdInput() {
    return this._joinPointId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ad_scopes_names: cdktf.stringToTerraform(this._adScopesNames),
      description: cdktf.stringToTerraform(this._description),
      domain: cdktf.stringToTerraform(this._domain),
      enable_domain_allowed_list: cdktf.booleanToTerraform(this._enableDomainAllowedList),
      groups: cdktf.listMapper(activeDirectoryAddGroupsGroupsToTerraform, false)(this._groups.internalValue),
      join_point_id: cdktf.stringToTerraform(this._joinPointId),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ad_scopes_names: {
        value: cdktf.stringToHclTerraform(this._adScopesNames),
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
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_domain_allowed_list: {
        value: cdktf.booleanToHclTerraform(this._enableDomainAllowedList),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      groups: {
        value: cdktf.listMapperHcl(activeDirectoryAddGroupsGroupsToHclTerraform, false)(this._groups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ActiveDirectoryAddGroupsGroupsList",
      },
      join_point_id: {
        value: cdktf.stringToHclTerraform(this._joinPointId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
