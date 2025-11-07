// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/user_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/user_groups#id UserGroups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/user_groups#owner_reference UserGroups#owner_reference}
  */
  readonly ownerReference?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/user_groups#project_reference UserGroups#project_reference}
  */
  readonly projectReference?: { [key: string]: string };
  /**
  * categories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/user_groups#categories UserGroups#categories}
  */
  readonly categories?: UserGroupsCategories[] | cdktf.IResolvable;
  /**
  * directory_service_ou block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/user_groups#directory_service_ou UserGroups#directory_service_ou}
  */
  readonly directoryServiceOu?: UserGroupsDirectoryServiceOu[] | cdktf.IResolvable;
  /**
  * directory_service_user_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/user_groups#directory_service_user_group UserGroups#directory_service_user_group}
  */
  readonly directoryServiceUserGroup?: UserGroupsDirectoryServiceUserGroup[] | cdktf.IResolvable;
  /**
  * saml_user_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/user_groups#saml_user_group UserGroups#saml_user_group}
  */
  readonly samlUserGroup?: UserGroupsSamlUserGroup[] | cdktf.IResolvable;
}
export interface UserGroupsCategories {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/user_groups#name UserGroups#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/user_groups#value UserGroups#value}
  */
  readonly value?: string;
}

export function userGroupsCategoriesToTerraform(struct?: UserGroupsCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function userGroupsCategoriesToHclTerraform(struct?: UserGroupsCategories | cdktf.IResolvable): any {
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

export class UserGroupsCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserGroupsCategories | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UserGroupsCategories | cdktf.IResolvable | undefined) {
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class UserGroupsCategoriesList extends cdktf.ComplexList {
  public internalValue? : UserGroupsCategories[] | cdktf.IResolvable

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
  public get(index: number): UserGroupsCategoriesOutputReference {
    return new UserGroupsCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserGroupsDirectoryServiceOu {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/user_groups#distinguished_name UserGroups#distinguished_name}
  */
  readonly distinguishedName: string;
}

export function userGroupsDirectoryServiceOuToTerraform(struct?: UserGroupsDirectoryServiceOu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distinguished_name: cdktf.stringToTerraform(struct!.distinguishedName),
  }
}


export function userGroupsDirectoryServiceOuToHclTerraform(struct?: UserGroupsDirectoryServiceOu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distinguished_name: {
      value: cdktf.stringToHclTerraform(struct!.distinguishedName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserGroupsDirectoryServiceOuOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserGroupsDirectoryServiceOu | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distinguishedName !== undefined) {
      hasAnyValues = true;
      internalValueResult.distinguishedName = this._distinguishedName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserGroupsDirectoryServiceOu | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._distinguishedName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._distinguishedName = value.distinguishedName;
    }
  }

  // distinguished_name - computed: false, optional: false, required: true
  private _distinguishedName?: string; 
  public get distinguishedName() {
    return this.getStringAttribute('distinguished_name');
  }
  public set distinguishedName(value: string) {
    this._distinguishedName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get distinguishedNameInput() {
    return this._distinguishedName;
  }
}

export class UserGroupsDirectoryServiceOuList extends cdktf.ComplexList {
  public internalValue? : UserGroupsDirectoryServiceOu[] | cdktf.IResolvable

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
  public get(index: number): UserGroupsDirectoryServiceOuOutputReference {
    return new UserGroupsDirectoryServiceOuOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserGroupsDirectoryServiceUserGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/user_groups#distinguished_name UserGroups#distinguished_name}
  */
  readonly distinguishedName: string;
}

export function userGroupsDirectoryServiceUserGroupToTerraform(struct?: UserGroupsDirectoryServiceUserGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distinguished_name: cdktf.stringToTerraform(struct!.distinguishedName),
  }
}


export function userGroupsDirectoryServiceUserGroupToHclTerraform(struct?: UserGroupsDirectoryServiceUserGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distinguished_name: {
      value: cdktf.stringToHclTerraform(struct!.distinguishedName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserGroupsDirectoryServiceUserGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserGroupsDirectoryServiceUserGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distinguishedName !== undefined) {
      hasAnyValues = true;
      internalValueResult.distinguishedName = this._distinguishedName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserGroupsDirectoryServiceUserGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._distinguishedName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._distinguishedName = value.distinguishedName;
    }
  }

  // distinguished_name - computed: false, optional: false, required: true
  private _distinguishedName?: string; 
  public get distinguishedName() {
    return this.getStringAttribute('distinguished_name');
  }
  public set distinguishedName(value: string) {
    this._distinguishedName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get distinguishedNameInput() {
    return this._distinguishedName;
  }
}

export class UserGroupsDirectoryServiceUserGroupList extends cdktf.ComplexList {
  public internalValue? : UserGroupsDirectoryServiceUserGroup[] | cdktf.IResolvable

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
  public get(index: number): UserGroupsDirectoryServiceUserGroupOutputReference {
    return new UserGroupsDirectoryServiceUserGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserGroupsSamlUserGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/user_groups#idp_uuid UserGroups#idp_uuid}
  */
  readonly idpUuid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/user_groups#name UserGroups#name}
  */
  readonly name: string;
}

export function userGroupsSamlUserGroupToTerraform(struct?: UserGroupsSamlUserGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idp_uuid: cdktf.stringToTerraform(struct!.idpUuid),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function userGroupsSamlUserGroupToHclTerraform(struct?: UserGroupsSamlUserGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idp_uuid: {
      value: cdktf.stringToHclTerraform(struct!.idpUuid),
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

export class UserGroupsSamlUserGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserGroupsSamlUserGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idpUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpUuid = this._idpUuid;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserGroupsSamlUserGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idpUuid = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idpUuid = value.idpUuid;
      this._name = value.name;
    }
  }

  // idp_uuid - computed: false, optional: false, required: true
  private _idpUuid?: string; 
  public get idpUuid() {
    return this.getStringAttribute('idp_uuid');
  }
  public set idpUuid(value: string) {
    this._idpUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpUuidInput() {
    return this._idpUuid;
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

export class UserGroupsSamlUserGroupList extends cdktf.ComplexList {
  public internalValue? : UserGroupsSamlUserGroup[] | cdktf.IResolvable

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
  public get(index: number): UserGroupsSamlUserGroupOutputReference {
    return new UserGroupsSamlUserGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/user_groups nutanix_user_groups}
*/
export class UserGroups extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_user_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserGroups to import
  * @param importFromId The id of the existing UserGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/user_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_user_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/user_groups nutanix_user_groups} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserGroupsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: UserGroupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nutanix_user_groups',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.3'
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
    this._ownerReference = config.ownerReference;
    this._projectReference = config.projectReference;
    this._categories.internalValue = config.categories;
    this._directoryServiceOu.internalValue = config.directoryServiceOu;
    this._directoryServiceUserGroup.internalValue = config.directoryServiceUserGroup;
    this._samlUserGroup.internalValue = config.samlUserGroup;
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

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // owner_reference - computed: true, optional: true, required: false
  private _ownerReference?: { [key: string]: string }; 
  public get ownerReference() {
    return this.getStringMapAttribute('owner_reference');
  }
  public set ownerReference(value: { [key: string]: string }) {
    this._ownerReference = value;
  }
  public resetOwnerReference() {
    this._ownerReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerReferenceInput() {
    return this._ownerReference;
  }

  // project_reference - computed: false, optional: true, required: false
  private _projectReference?: { [key: string]: string }; 
  public get projectReference() {
    return this.getStringMapAttribute('project_reference');
  }
  public set projectReference(value: { [key: string]: string }) {
    this._projectReference = value;
  }
  public resetProjectReference() {
    this._projectReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectReferenceInput() {
    return this._projectReference;
  }

  // categories - computed: false, optional: true, required: false
  private _categories = new UserGroupsCategoriesList(this, "categories", true);
  public get categories() {
    return this._categories;
  }
  public putCategories(value: UserGroupsCategories[] | cdktf.IResolvable) {
    this._categories.internalValue = value;
  }
  public resetCategories() {
    this._categories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories.internalValue;
  }

  // directory_service_ou - computed: false, optional: true, required: false
  private _directoryServiceOu = new UserGroupsDirectoryServiceOuList(this, "directory_service_ou", false);
  public get directoryServiceOu() {
    return this._directoryServiceOu;
  }
  public putDirectoryServiceOu(value: UserGroupsDirectoryServiceOu[] | cdktf.IResolvable) {
    this._directoryServiceOu.internalValue = value;
  }
  public resetDirectoryServiceOu() {
    this._directoryServiceOu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryServiceOuInput() {
    return this._directoryServiceOu.internalValue;
  }

  // directory_service_user_group - computed: false, optional: true, required: false
  private _directoryServiceUserGroup = new UserGroupsDirectoryServiceUserGroupList(this, "directory_service_user_group", false);
  public get directoryServiceUserGroup() {
    return this._directoryServiceUserGroup;
  }
  public putDirectoryServiceUserGroup(value: UserGroupsDirectoryServiceUserGroup[] | cdktf.IResolvable) {
    this._directoryServiceUserGroup.internalValue = value;
  }
  public resetDirectoryServiceUserGroup() {
    this._directoryServiceUserGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryServiceUserGroupInput() {
    return this._directoryServiceUserGroup.internalValue;
  }

  // saml_user_group - computed: false, optional: true, required: false
  private _samlUserGroup = new UserGroupsSamlUserGroupList(this, "saml_user_group", false);
  public get samlUserGroup() {
    return this._samlUserGroup;
  }
  public putSamlUserGroup(value: UserGroupsSamlUserGroup[] | cdktf.IResolvable) {
    this._samlUserGroup.internalValue = value;
  }
  public resetSamlUserGroup() {
    this._samlUserGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlUserGroupInput() {
    return this._samlUserGroup.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      owner_reference: cdktf.hashMapper(cdktf.stringToTerraform)(this._ownerReference),
      project_reference: cdktf.hashMapper(cdktf.stringToTerraform)(this._projectReference),
      categories: cdktf.listMapper(userGroupsCategoriesToTerraform, true)(this._categories.internalValue),
      directory_service_ou: cdktf.listMapper(userGroupsDirectoryServiceOuToTerraform, true)(this._directoryServiceOu.internalValue),
      directory_service_user_group: cdktf.listMapper(userGroupsDirectoryServiceUserGroupToTerraform, true)(this._directoryServiceUserGroup.internalValue),
      saml_user_group: cdktf.listMapper(userGroupsSamlUserGroupToTerraform, true)(this._samlUserGroup.internalValue),
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
      owner_reference: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._ownerReference),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      project_reference: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._projectReference),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      categories: {
        value: cdktf.listMapperHcl(userGroupsCategoriesToHclTerraform, true)(this._categories.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UserGroupsCategoriesList",
      },
      directory_service_ou: {
        value: cdktf.listMapperHcl(userGroupsDirectoryServiceOuToHclTerraform, true)(this._directoryServiceOu.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserGroupsDirectoryServiceOuList",
      },
      directory_service_user_group: {
        value: cdktf.listMapperHcl(userGroupsDirectoryServiceUserGroupToHclTerraform, true)(this._directoryServiceUserGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserGroupsDirectoryServiceUserGroupList",
      },
      saml_user_group: {
        value: cdktf.listMapperHcl(userGroupsSamlUserGroupToHclTerraform, true)(this._samlUserGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserGroupsSamlUserGroupList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
