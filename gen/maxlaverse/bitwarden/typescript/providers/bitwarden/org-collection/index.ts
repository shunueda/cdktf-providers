// https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/org_collection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgCollectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/org_collection#id OrgCollection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/org_collection#name OrgCollection#name}
  */
  readonly name: string;
  /**
  * Identifier of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/org_collection#organization_id OrgCollection#organization_id}
  */
  readonly organizationId: string;
  /**
  * member block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/org_collection#member OrgCollection#member}
  */
  readonly member?: OrgCollectionMember[] | cdktf.IResolvable;
  /**
  * member_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/org_collection#member_group OrgCollection#member_group}
  */
  readonly memberGroup?: OrgCollectionMemberGroup[] | cdktf.IResolvable;
}
export interface OrgCollectionMember {
  /**
  * [Experimental] Hide passwords.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/org_collection#hide_passwords OrgCollection#hide_passwords}
  */
  readonly hidePasswords?: boolean | cdktf.IResolvable;
  /**
  * [Experimental] Unique Identifier (UUID) of the user or group member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/org_collection#id OrgCollection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * [Experimental] Can manage the collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/org_collection#manage OrgCollection#manage}
  */
  readonly manage?: boolean | cdktf.IResolvable;
  /**
  * [Experimental] Read/Write permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/org_collection#read_only OrgCollection#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function orgCollectionMemberToTerraform(struct?: OrgCollectionMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hide_passwords: cdktf.booleanToTerraform(struct!.hidePasswords),
    id: cdktf.stringToTerraform(struct!.id),
    manage: cdktf.booleanToTerraform(struct!.manage),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function orgCollectionMemberToHclTerraform(struct?: OrgCollectionMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hide_passwords: {
      value: cdktf.booleanToHclTerraform(struct!.hidePasswords),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    manage: {
      value: cdktf.booleanToHclTerraform(struct!.manage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgCollectionMemberOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgCollectionMember | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hidePasswords !== undefined) {
      hasAnyValues = true;
      internalValueResult.hidePasswords = this._hidePasswords;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._manage !== undefined) {
      hasAnyValues = true;
      internalValueResult.manage = this._manage;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgCollectionMember | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hidePasswords = undefined;
      this._id = undefined;
      this._manage = undefined;
      this._readOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hidePasswords = value.hidePasswords;
      this._id = value.id;
      this._manage = value.manage;
      this._readOnly = value.readOnly;
    }
  }

  // hide_passwords - computed: false, optional: true, required: false
  private _hidePasswords?: boolean | cdktf.IResolvable; 
  public get hidePasswords() {
    return this.getBooleanAttribute('hide_passwords');
  }
  public set hidePasswords(value: boolean | cdktf.IResolvable) {
    this._hidePasswords = value;
  }
  public resetHidePasswords() {
    this._hidePasswords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hidePasswordsInput() {
    return this._hidePasswords;
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

  // manage - computed: false, optional: true, required: false
  private _manage?: boolean | cdktf.IResolvable; 
  public get manage() {
    return this.getBooleanAttribute('manage');
  }
  public set manage(value: boolean | cdktf.IResolvable) {
    this._manage = value;
  }
  public resetManage() {
    this._manage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageInput() {
    return this._manage;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }
}

export class OrgCollectionMemberList extends cdktf.ComplexList {
  public internalValue? : OrgCollectionMember[] | cdktf.IResolvable

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
  public get(index: number): OrgCollectionMemberOutputReference {
    return new OrgCollectionMemberOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgCollectionMemberGroup {
  /**
  * [Experimental] Hide passwords.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/org_collection#hide_passwords OrgCollection#hide_passwords}
  */
  readonly hidePasswords?: boolean | cdktf.IResolvable;
  /**
  * [Experimental] Unique Identifier (UUID) of the user or group member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/org_collection#id OrgCollection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * [Experimental] Can manage the collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/org_collection#manage OrgCollection#manage}
  */
  readonly manage?: boolean | cdktf.IResolvable;
  /**
  * [Experimental] Read/Write permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/org_collection#read_only OrgCollection#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function orgCollectionMemberGroupToTerraform(struct?: OrgCollectionMemberGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hide_passwords: cdktf.booleanToTerraform(struct!.hidePasswords),
    id: cdktf.stringToTerraform(struct!.id),
    manage: cdktf.booleanToTerraform(struct!.manage),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function orgCollectionMemberGroupToHclTerraform(struct?: OrgCollectionMemberGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hide_passwords: {
      value: cdktf.booleanToHclTerraform(struct!.hidePasswords),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    manage: {
      value: cdktf.booleanToHclTerraform(struct!.manage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgCollectionMemberGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgCollectionMemberGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hidePasswords !== undefined) {
      hasAnyValues = true;
      internalValueResult.hidePasswords = this._hidePasswords;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._manage !== undefined) {
      hasAnyValues = true;
      internalValueResult.manage = this._manage;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgCollectionMemberGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hidePasswords = undefined;
      this._id = undefined;
      this._manage = undefined;
      this._readOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hidePasswords = value.hidePasswords;
      this._id = value.id;
      this._manage = value.manage;
      this._readOnly = value.readOnly;
    }
  }

  // hide_passwords - computed: false, optional: true, required: false
  private _hidePasswords?: boolean | cdktf.IResolvable; 
  public get hidePasswords() {
    return this.getBooleanAttribute('hide_passwords');
  }
  public set hidePasswords(value: boolean | cdktf.IResolvable) {
    this._hidePasswords = value;
  }
  public resetHidePasswords() {
    this._hidePasswords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hidePasswordsInput() {
    return this._hidePasswords;
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

  // manage - computed: false, optional: true, required: false
  private _manage?: boolean | cdktf.IResolvable; 
  public get manage() {
    return this.getBooleanAttribute('manage');
  }
  public set manage(value: boolean | cdktf.IResolvable) {
    this._manage = value;
  }
  public resetManage() {
    this._manage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageInput() {
    return this._manage;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }
}

export class OrgCollectionMemberGroupList extends cdktf.ComplexList {
  public internalValue? : OrgCollectionMemberGroup[] | cdktf.IResolvable

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
  public get(index: number): OrgCollectionMemberGroupOutputReference {
    return new OrgCollectionMemberGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/org_collection bitwarden_org_collection}
*/
export class OrgCollection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bitwarden_org_collection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrgCollection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgCollection to import
  * @param importFromId The id of the existing OrgCollection that should be imported. Refer to the {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/org_collection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgCollection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bitwarden_org_collection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/org_collection bitwarden_org_collection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgCollectionConfig
  */
  public constructor(scope: Construct, id: string, config: OrgCollectionConfig) {
    super(scope, id, {
      terraformResourceType: 'bitwarden_org_collection',
      terraformGeneratorMetadata: {
        providerName: 'bitwarden',
        providerVersion: '0.16.0',
        providerVersionConstraint: '0.16.0'
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
    this._member.internalValue = config.member;
    this._memberGroup.internalValue = config.memberGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // member - computed: false, optional: true, required: false
  private _member = new OrgCollectionMemberList(this, "member", true);
  public get member() {
    return this._member;
  }
  public putMember(value: OrgCollectionMember[] | cdktf.IResolvable) {
    this._member.internalValue = value;
  }
  public resetMember() {
    this._member.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member.internalValue;
  }

  // member_group - computed: false, optional: true, required: false
  private _memberGroup = new OrgCollectionMemberGroupList(this, "member_group", true);
  public get memberGroup() {
    return this._memberGroup;
  }
  public putMemberGroup(value: OrgCollectionMemberGroup[] | cdktf.IResolvable) {
    this._memberGroup.internalValue = value;
  }
  public resetMemberGroup() {
    this._memberGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberGroupInput() {
    return this._memberGroup.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      member: cdktf.listMapper(orgCollectionMemberToTerraform, true)(this._member.internalValue),
      member_group: cdktf.listMapper(orgCollectionMemberGroupToTerraform, true)(this._memberGroup.internalValue),
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
      member: {
        value: cdktf.listMapperHcl(orgCollectionMemberToHclTerraform, true)(this._member.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OrgCollectionMemberList",
      },
      member_group: {
        value: cdktf.listMapperHcl(orgCollectionMemberGroupToHclTerraform, true)(this._memberGroup.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OrgCollectionMemberGroupList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
