// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow calls to be placed to this group Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/group#calls_enabled Group#calls_enabled}
  */
  readonly callsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Group description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/group#description Group#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/group#id Group#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Allow owners to be included as members of the group. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/group#include_owners Group#include_owners}
  */
  readonly includeOwners?: boolean | cdktf.IResolvable;
  /**
  * IDs of members assigned to the group. If not set, this resource will not manage group members.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/group#member_ids Group#member_ids}
  */
  readonly memberIds?: string[];
  /**
  * Group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * IDs of owners of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/group#owner_ids Group#owner_ids}
  */
  readonly ownerIds?: string[];
  /**
  * Allow roles to be assigned to this group. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/group#roles_enabled Group#roles_enabled}
  */
  readonly rolesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Are membership rules visible to the person requesting to view the group. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/group#rules_visible Group#rules_visible}
  */
  readonly rulesVisible?: boolean | cdktf.IResolvable;
  /**
  * Group type (official | social). This cannot be modified. Changing type attribute will cause the existing genesys_group object to dropped and recreated with a new ID. Defaults to `official`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/group#type Group#type}
  */
  readonly type?: string;
  /**
  * Who can view this group (public | owners | members). Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/group#visibility Group#visibility}
  */
  readonly visibility?: string;
  /**
  * addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/group#addresses Group#addresses}
  */
  readonly addresses?: GroupAddresses[] | cdktf.IResolvable;
}
export interface GroupAddresses {
  /**
  * Phone extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/group#extension Group#extension}
  */
  readonly extension?: string;
  /**
  * Phone number for this contact type. Must be in an E.164 number format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/group#number Group#number}
  */
  readonly number?: string;
  /**
  * Contact type of the address. (GROUPRING | GROUPPHONE)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/group#type Group#type}
  */
  readonly type: string;
}

export function groupAddressesToTerraform(struct?: GroupAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extension: cdktf.stringToTerraform(struct!.extension),
    number: cdktf.stringToTerraform(struct!.number),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function groupAddressesToHclTerraform(struct?: GroupAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extension: {
      value: cdktf.stringToHclTerraform(struct!.extension),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number: {
      value: cdktf.stringToHclTerraform(struct!.number),
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

export class GroupAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extension !== undefined) {
      hasAnyValues = true;
      internalValueResult.extension = this._extension;
    }
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extension = undefined;
      this._number = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extension = value.extension;
      this._number = value.number;
      this._type = value.type;
    }
  }

  // extension - computed: false, optional: true, required: false
  private _extension?: string; 
  public get extension() {
    return this.getStringAttribute('extension');
  }
  public set extension(value: string) {
    this._extension = value;
  }
  public resetExtension() {
    this._extension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionInput() {
    return this._extension;
  }

  // number - computed: false, optional: true, required: false
  private _number?: string; 
  public get number() {
    return this.getStringAttribute('number');
  }
  public set number(value: string) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
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

export class GroupAddressesList extends cdktf.ComplexList {
  public internalValue? : GroupAddresses[] | cdktf.IResolvable

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
  public get(index: number): GroupAddressesOutputReference {
    return new GroupAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/group genesyscloud_group}
*/
export class Group extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Group resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Group to import
  * @param importFromId The id of the existing Group that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Group to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/group genesyscloud_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupConfig
  */
  public constructor(scope: Construct, id: string, config: GroupConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_group',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.70.0',
        providerVersionConstraint: '1.70.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._callsEnabled = config.callsEnabled;
    this._description = config.description;
    this._id = config.id;
    this._includeOwners = config.includeOwners;
    this._memberIds = config.memberIds;
    this._name = config.name;
    this._ownerIds = config.ownerIds;
    this._rolesEnabled = config.rolesEnabled;
    this._rulesVisible = config.rulesVisible;
    this._type = config.type;
    this._visibility = config.visibility;
    this._addresses.internalValue = config.addresses;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // calls_enabled - computed: false, optional: true, required: false
  private _callsEnabled?: boolean | cdktf.IResolvable; 
  public get callsEnabled() {
    return this.getBooleanAttribute('calls_enabled');
  }
  public set callsEnabled(value: boolean | cdktf.IResolvable) {
    this._callsEnabled = value;
  }
  public resetCallsEnabled() {
    this._callsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callsEnabledInput() {
    return this._callsEnabled;
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

  // include_owners - computed: false, optional: true, required: false
  private _includeOwners?: boolean | cdktf.IResolvable; 
  public get includeOwners() {
    return this.getBooleanAttribute('include_owners');
  }
  public set includeOwners(value: boolean | cdktf.IResolvable) {
    this._includeOwners = value;
  }
  public resetIncludeOwners() {
    this._includeOwners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeOwnersInput() {
    return this._includeOwners;
  }

  // member_ids - computed: true, optional: true, required: false
  private _memberIds?: string[]; 
  public get memberIds() {
    return cdktf.Fn.tolist(this.getListAttribute('member_ids'));
  }
  public set memberIds(value: string[]) {
    this._memberIds = value;
  }
  public resetMemberIds() {
    this._memberIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberIdsInput() {
    return this._memberIds;
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

  // owner_ids - computed: true, optional: true, required: false
  private _ownerIds?: string[]; 
  public get ownerIds() {
    return this.getListAttribute('owner_ids');
  }
  public set ownerIds(value: string[]) {
    this._ownerIds = value;
  }
  public resetOwnerIds() {
    this._ownerIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerIdsInput() {
    return this._ownerIds;
  }

  // roles_enabled - computed: false, optional: true, required: false
  private _rolesEnabled?: boolean | cdktf.IResolvable; 
  public get rolesEnabled() {
    return this.getBooleanAttribute('roles_enabled');
  }
  public set rolesEnabled(value: boolean | cdktf.IResolvable) {
    this._rolesEnabled = value;
  }
  public resetRolesEnabled() {
    this._rolesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesEnabledInput() {
    return this._rolesEnabled;
  }

  // rules_visible - computed: false, optional: true, required: false
  private _rulesVisible?: boolean | cdktf.IResolvable; 
  public get rulesVisible() {
    return this.getBooleanAttribute('rules_visible');
  }
  public set rulesVisible(value: boolean | cdktf.IResolvable) {
    this._rulesVisible = value;
  }
  public resetRulesVisible() {
    this._rulesVisible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesVisibleInput() {
    return this._rulesVisible;
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

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // addresses - computed: false, optional: true, required: false
  private _addresses = new GroupAddressesList(this, "addresses", false);
  public get addresses() {
    return this._addresses;
  }
  public putAddresses(value: GroupAddresses[] | cdktf.IResolvable) {
    this._addresses.internalValue = value;
  }
  public resetAddresses() {
    this._addresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      calls_enabled: cdktf.booleanToTerraform(this._callsEnabled),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      include_owners: cdktf.booleanToTerraform(this._includeOwners),
      member_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._memberIds),
      name: cdktf.stringToTerraform(this._name),
      owner_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ownerIds),
      roles_enabled: cdktf.booleanToTerraform(this._rolesEnabled),
      rules_visible: cdktf.booleanToTerraform(this._rulesVisible),
      type: cdktf.stringToTerraform(this._type),
      visibility: cdktf.stringToTerraform(this._visibility),
      addresses: cdktf.listMapper(groupAddressesToTerraform, true)(this._addresses.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      calls_enabled: {
        value: cdktf.booleanToHclTerraform(this._callsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_owners: {
        value: cdktf.booleanToHclTerraform(this._includeOwners),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      member_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._memberIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ownerIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      roles_enabled: {
        value: cdktf.booleanToHclTerraform(this._rolesEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rules_visible: {
        value: cdktf.booleanToHclTerraform(this._rulesVisible),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      visibility: {
        value: cdktf.stringToHclTerraform(this._visibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      addresses: {
        value: cdktf.listMapperHcl(groupAddressesToHclTerraform, true)(this._addresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GroupAddressesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
