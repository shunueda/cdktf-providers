import * as cdktf from 'cdktf';
import { GroupOwnedClientsTechnicalAdministratorLinksList,
GroupOwnedClientsLdapClient,
groupOwnedClientsLdapClientToTerraform,
groupOwnedClientsLdapClientToHclTerraform,
GroupOwnedClientsLdapClientOutputReference,
GroupOwnedClientsLinksList,
GroupOwnedClientsOauth2Client,
groupOwnedClientsOauth2ClientToTerraform,
groupOwnedClientsOauth2ClientToHclTerraform,
GroupOwnedClientsOauth2ClientOutputReference,
GroupOwnedClientsOwner,
groupOwnedClientsOwnerToTerraform,
groupOwnedClientsOwnerToHclTerraform,
GroupOwnedClientsOwnerOutputReference,
GroupOwnedClientsPermissionsList,
GroupOwnedClientsSaml2Client,
groupOwnedClientsSaml2ClientToTerraform,
groupOwnedClientsSaml2ClientToHclTerraform,
GroupOwnedClientsSaml2ClientOutputReference } from './structs800'
export interface GroupOwnedClientsTechnicalAdministratorOrganizationalUnitLinks {
}

export function groupOwnedClientsTechnicalAdministratorOrganizationalUnitLinksToTerraform(struct?: GroupOwnedClientsTechnicalAdministratorOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedClientsTechnicalAdministratorOrganizationalUnitLinksToHclTerraform(struct?: GroupOwnedClientsTechnicalAdministratorOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedClientsTechnicalAdministratorOrganizationalUnitLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedClientsTechnicalAdministratorOrganizationalUnitLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedClientsTechnicalAdministratorOrganizationalUnitLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupOwnedClientsTechnicalAdministratorOrganizationalUnitLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedClientsTechnicalAdministratorOrganizationalUnitLinksOutputReference {
    return new GroupOwnedClientsTechnicalAdministratorOrganizationalUnitLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedClientsTechnicalAdministratorOrganizationalUnitPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupOwnedClientsTechnicalAdministratorOrganizationalUnitPermissionsToTerraform(struct?: GroupOwnedClientsTechnicalAdministratorOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupOwnedClientsTechnicalAdministratorOrganizationalUnitPermissionsToHclTerraform(struct?: GroupOwnedClientsTechnicalAdministratorOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedClientsTechnicalAdministratorOrganizationalUnitPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedClientsTechnicalAdministratorOrganizationalUnitPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedClientsTechnicalAdministratorOrganizationalUnitPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupOwnedClientsTechnicalAdministratorOrganizationalUnitPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedClientsTechnicalAdministratorOrganizationalUnitPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedClientsTechnicalAdministratorOrganizationalUnitPermissionsOutputReference {
    return new GroupOwnedClientsTechnicalAdministratorOrganizationalUnitPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedClientsTechnicalAdministratorOrganizationalUnit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

export function groupOwnedClientsTechnicalAdministratorOrganizationalUnitToTerraform(struct?: GroupOwnedClientsTechnicalAdministratorOrganizationalUnit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function groupOwnedClientsTechnicalAdministratorOrganizationalUnitToHclTerraform(struct?: GroupOwnedClientsTechnicalAdministratorOrganizationalUnit | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedClientsTechnicalAdministratorOrganizationalUnitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedClientsTechnicalAdministratorOrganizationalUnit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedClientsTechnicalAdministratorOrganizationalUnit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupOwnedClientsTechnicalAdministratorOrganizationalUnitLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupOwnedClientsTechnicalAdministratorOrganizationalUnitPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupOwnedClientsTechnicalAdministratorPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupOwnedClientsTechnicalAdministratorPermissionsToTerraform(struct?: GroupOwnedClientsTechnicalAdministratorPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupOwnedClientsTechnicalAdministratorPermissionsToHclTerraform(struct?: GroupOwnedClientsTechnicalAdministratorPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedClientsTechnicalAdministratorPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedClientsTechnicalAdministratorPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedClientsTechnicalAdministratorPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupOwnedClientsTechnicalAdministratorPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedClientsTechnicalAdministratorPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedClientsTechnicalAdministratorPermissionsOutputReference {
    return new GroupOwnedClientsTechnicalAdministratorPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedClientsTechnicalAdministrator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#organizational_unit Group#organizational_unit}
  */
  readonly organizationalUnit?: GroupOwnedClientsTechnicalAdministratorOrganizationalUnit;
}

export function groupOwnedClientsTechnicalAdministratorToTerraform(struct?: GroupOwnedClientsTechnicalAdministrator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    organizational_unit: groupOwnedClientsTechnicalAdministratorOrganizationalUnitToTerraform(struct!.organizationalUnit),
  }
}


export function groupOwnedClientsTechnicalAdministratorToHclTerraform(struct?: GroupOwnedClientsTechnicalAdministrator | cdktf.IResolvable): any {
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
    organizational_unit: {
      value: groupOwnedClientsTechnicalAdministratorOrganizationalUnitToHclTerraform(struct!.organizationalUnit),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupOwnedClientsTechnicalAdministratorOrganizationalUnit",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedClientsTechnicalAdministratorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedClientsTechnicalAdministrator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._organizationalUnit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnit = this._organizationalUnit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedClientsTechnicalAdministrator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._organizationalUnit.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._organizationalUnit.internalValue = value.organizationalUnit;
    }
  }

  // admin - computed: true, optional: false, required: false
  public get admin() {
    return this.getBooleanAttribute('admin');
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupOwnedClientsTechnicalAdministratorLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // organizational_unit - computed: true, optional: true, required: false
  private _organizationalUnit = new GroupOwnedClientsTechnicalAdministratorOrganizationalUnitOutputReference(this, "organizational_unit");
  public get organizationalUnit() {
    return this._organizationalUnit;
  }
  public putOrganizationalUnit(value: GroupOwnedClientsTechnicalAdministratorOrganizationalUnit) {
    this._organizationalUnit.internalValue = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit.internalValue;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupOwnedClientsTechnicalAdministratorPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupOwnedClients {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#client_id Group#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#ldap_client Group#ldap_client}
  */
  readonly ldapClient?: GroupOwnedClientsLdapClient;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#oauth2_client Group#oauth2_client}
  */
  readonly oauth2Client?: GroupOwnedClientsOauth2Client;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#owner Group#owner}
  */
  readonly owner?: GroupOwnedClientsOwner;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#saml2_client Group#saml2_client}
  */
  readonly saml2Client?: GroupOwnedClientsSaml2Client;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#scopes Group#scopes}
  */
  readonly scopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#technical_administrator Group#technical_administrator}
  */
  readonly technicalAdministrator?: GroupOwnedClientsTechnicalAdministrator;
}

export function groupOwnedClientsToTerraform(struct?: GroupOwnedClients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    ldap_client: groupOwnedClientsLdapClientToTerraform(struct!.ldapClient),
    name: cdktf.stringToTerraform(struct!.name),
    oauth2_client: groupOwnedClientsOauth2ClientToTerraform(struct!.oauth2Client),
    owner: groupOwnedClientsOwnerToTerraform(struct!.owner),
    saml2_client: groupOwnedClientsSaml2ClientToTerraform(struct!.saml2Client),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    technical_administrator: groupOwnedClientsTechnicalAdministratorToTerraform(struct!.technicalAdministrator),
  }
}


export function groupOwnedClientsToHclTerraform(struct?: GroupOwnedClients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ldap_client: {
      value: groupOwnedClientsLdapClientToHclTerraform(struct!.ldapClient),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupOwnedClientsLdapClient",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth2_client: {
      value: groupOwnedClientsOauth2ClientToHclTerraform(struct!.oauth2Client),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupOwnedClientsOauth2Client",
    },
    owner: {
      value: groupOwnedClientsOwnerToHclTerraform(struct!.owner),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupOwnedClientsOwner",
    },
    saml2_client: {
      value: groupOwnedClientsSaml2ClientToHclTerraform(struct!.saml2Client),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupOwnedClientsSaml2Client",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    technical_administrator: {
      value: groupOwnedClientsTechnicalAdministratorToHclTerraform(struct!.technicalAdministrator),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupOwnedClientsTechnicalAdministrator",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedClientsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedClients | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._ldapClient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapClient = this._ldapClient?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._oauth2Client?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2Client = this._oauth2Client?.internalValue;
    }
    if (this._owner?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner?.internalValue;
    }
    if (this._saml2Client?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.saml2Client = this._saml2Client?.internalValue;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._technicalAdministrator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.technicalAdministrator = this._technicalAdministrator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedClients | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._ldapClient.internalValue = undefined;
      this._name = undefined;
      this._oauth2Client.internalValue = undefined;
      this._owner.internalValue = undefined;
      this._saml2Client.internalValue = undefined;
      this._scopes = undefined;
      this._technicalAdministrator.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._ldapClient.internalValue = value.ldapClient;
      this._name = value.name;
      this._oauth2Client.internalValue = value.oauth2Client;
      this._owner.internalValue = value.owner;
      this._saml2Client.internalValue = value.saml2Client;
      this._scopes = value.scopes;
      this._technicalAdministrator.internalValue = value.technicalAdministrator;
    }
  }

  // client_id - computed: true, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // last_modified_at - computed: true, optional: false, required: false
  public get lastModifiedAt() {
    return this.getStringAttribute('last_modified_at');
  }

  // ldap_client - computed: true, optional: true, required: false
  private _ldapClient = new GroupOwnedClientsLdapClientOutputReference(this, "ldap_client");
  public get ldapClient() {
    return this._ldapClient;
  }
  public putLdapClient(value: GroupOwnedClientsLdapClient) {
    this._ldapClient.internalValue = value;
  }
  public resetLdapClient() {
    this._ldapClient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapClientInput() {
    return this._ldapClient.internalValue;
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupOwnedClientsLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // oauth2_client - computed: true, optional: true, required: false
  private _oauth2Client = new GroupOwnedClientsOauth2ClientOutputReference(this, "oauth2_client");
  public get oauth2Client() {
    return this._oauth2Client;
  }
  public putOauth2Client(value: GroupOwnedClientsOauth2Client) {
    this._oauth2Client.internalValue = value;
  }
  public resetOauth2Client() {
    this._oauth2Client.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ClientInput() {
    return this._oauth2Client.internalValue;
  }

  // owner - computed: true, optional: true, required: false
  private _owner = new GroupOwnedClientsOwnerOutputReference(this, "owner");
  public get owner() {
    return this._owner;
  }
  public putOwner(value: GroupOwnedClientsOwner) {
    this._owner.internalValue = value;
  }
  public resetOwner() {
    this._owner.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner.internalValue;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupOwnedClientsPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // saml2_client - computed: true, optional: true, required: false
  private _saml2Client = new GroupOwnedClientsSaml2ClientOutputReference(this, "saml2_client");
  public get saml2Client() {
    return this._saml2Client;
  }
  public putSaml2Client(value: GroupOwnedClientsSaml2Client) {
    this._saml2Client.internalValue = value;
  }
  public resetSaml2Client() {
    this._saml2Client.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saml2ClientInput() {
    return this._saml2Client.internalValue;
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // sso_application - computed: true, optional: false, required: false
  public get ssoApplication() {
    return this.getBooleanAttribute('sso_application');
  }

  // technical_administrator - computed: true, optional: true, required: false
  private _technicalAdministrator = new GroupOwnedClientsTechnicalAdministratorOutputReference(this, "technical_administrator");
  public get technicalAdministrator() {
    return this._technicalAdministrator;
  }
  public putTechnicalAdministrator(value: GroupOwnedClientsTechnicalAdministrator) {
    this._technicalAdministrator.internalValue = value;
  }
  public resetTechnicalAdministrator() {
    this._technicalAdministrator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technicalAdministratorInput() {
    return this._technicalAdministrator.internalValue;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class GroupOwnedClientsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedClients[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedClientsOutputReference {
    return new GroupOwnedClientsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedDirectoriesBaseOrganizationalUnitLinks {
}

export function groupOwnedDirectoriesBaseOrganizationalUnitLinksToTerraform(struct?: GroupOwnedDirectoriesBaseOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedDirectoriesBaseOrganizationalUnitLinksToHclTerraform(struct?: GroupOwnedDirectoriesBaseOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedDirectoriesBaseOrganizationalUnitLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedDirectoriesBaseOrganizationalUnitLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedDirectoriesBaseOrganizationalUnitLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupOwnedDirectoriesBaseOrganizationalUnitLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedDirectoriesBaseOrganizationalUnitLinksOutputReference {
    return new GroupOwnedDirectoriesBaseOrganizationalUnitLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedDirectoriesBaseOrganizationalUnitPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupOwnedDirectoriesBaseOrganizationalUnitPermissionsToTerraform(struct?: GroupOwnedDirectoriesBaseOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupOwnedDirectoriesBaseOrganizationalUnitPermissionsToHclTerraform(struct?: GroupOwnedDirectoriesBaseOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedDirectoriesBaseOrganizationalUnitPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedDirectoriesBaseOrganizationalUnitPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedDirectoriesBaseOrganizationalUnitPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupOwnedDirectoriesBaseOrganizationalUnitPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedDirectoriesBaseOrganizationalUnitPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedDirectoriesBaseOrganizationalUnitPermissionsOutputReference {
    return new GroupOwnedDirectoriesBaseOrganizationalUnitPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedDirectoriesBaseOrganizationalUnit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

export function groupOwnedDirectoriesBaseOrganizationalUnitToTerraform(struct?: GroupOwnedDirectoriesBaseOrganizationalUnit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function groupOwnedDirectoriesBaseOrganizationalUnitToHclTerraform(struct?: GroupOwnedDirectoriesBaseOrganizationalUnit): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedDirectoriesBaseOrganizationalUnitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedDirectoriesBaseOrganizationalUnit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedDirectoriesBaseOrganizationalUnit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupOwnedDirectoriesBaseOrganizationalUnitLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupOwnedDirectoriesBaseOrganizationalUnitPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupOwnedDirectoriesHelpdeskGroupLinks {
}

export function groupOwnedDirectoriesHelpdeskGroupLinksToTerraform(struct?: GroupOwnedDirectoriesHelpdeskGroupLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedDirectoriesHelpdeskGroupLinksToHclTerraform(struct?: GroupOwnedDirectoriesHelpdeskGroupLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedDirectoriesHelpdeskGroupLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedDirectoriesHelpdeskGroupLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedDirectoriesHelpdeskGroupLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupOwnedDirectoriesHelpdeskGroupLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedDirectoriesHelpdeskGroupLinksOutputReference {
    return new GroupOwnedDirectoriesHelpdeskGroupLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedDirectoriesHelpdeskGroupOrganizationalUnitLinks {
}

export function groupOwnedDirectoriesHelpdeskGroupOrganizationalUnitLinksToTerraform(struct?: GroupOwnedDirectoriesHelpdeskGroupOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedDirectoriesHelpdeskGroupOrganizationalUnitLinksToHclTerraform(struct?: GroupOwnedDirectoriesHelpdeskGroupOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedDirectoriesHelpdeskGroupOrganizationalUnitLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedDirectoriesHelpdeskGroupOrganizationalUnitLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedDirectoriesHelpdeskGroupOrganizationalUnitLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupOwnedDirectoriesHelpdeskGroupOrganizationalUnitLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedDirectoriesHelpdeskGroupOrganizationalUnitLinksOutputReference {
    return new GroupOwnedDirectoriesHelpdeskGroupOrganizationalUnitLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedDirectoriesHelpdeskGroupOrganizationalUnitPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupOwnedDirectoriesHelpdeskGroupOrganizationalUnitPermissionsToTerraform(struct?: GroupOwnedDirectoriesHelpdeskGroupOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupOwnedDirectoriesHelpdeskGroupOrganizationalUnitPermissionsToHclTerraform(struct?: GroupOwnedDirectoriesHelpdeskGroupOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedDirectoriesHelpdeskGroupOrganizationalUnitPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedDirectoriesHelpdeskGroupOrganizationalUnitPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedDirectoriesHelpdeskGroupOrganizationalUnitPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupOwnedDirectoriesHelpdeskGroupOrganizationalUnitPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedDirectoriesHelpdeskGroupOrganizationalUnitPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedDirectoriesHelpdeskGroupOrganizationalUnitPermissionsOutputReference {
    return new GroupOwnedDirectoriesHelpdeskGroupOrganizationalUnitPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedDirectoriesHelpdeskGroupOrganizationalUnit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

export function groupOwnedDirectoriesHelpdeskGroupOrganizationalUnitToTerraform(struct?: GroupOwnedDirectoriesHelpdeskGroupOrganizationalUnit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function groupOwnedDirectoriesHelpdeskGroupOrganizationalUnitToHclTerraform(struct?: GroupOwnedDirectoriesHelpdeskGroupOrganizationalUnit | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedDirectoriesHelpdeskGroupOrganizationalUnitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedDirectoriesHelpdeskGroupOrganizationalUnit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedDirectoriesHelpdeskGroupOrganizationalUnit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupOwnedDirectoriesHelpdeskGroupOrganizationalUnitLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupOwnedDirectoriesHelpdeskGroupOrganizationalUnitPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupOwnedDirectoriesHelpdeskGroupPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupOwnedDirectoriesHelpdeskGroupPermissionsToTerraform(struct?: GroupOwnedDirectoriesHelpdeskGroupPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupOwnedDirectoriesHelpdeskGroupPermissionsToHclTerraform(struct?: GroupOwnedDirectoriesHelpdeskGroupPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedDirectoriesHelpdeskGroupPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedDirectoriesHelpdeskGroupPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedDirectoriesHelpdeskGroupPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupOwnedDirectoriesHelpdeskGroupPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedDirectoriesHelpdeskGroupPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedDirectoriesHelpdeskGroupPermissionsOutputReference {
    return new GroupOwnedDirectoriesHelpdeskGroupPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedDirectoriesHelpdeskGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#organizational_unit Group#organizational_unit}
  */
  readonly organizationalUnit?: GroupOwnedDirectoriesHelpdeskGroupOrganizationalUnit;
}

export function groupOwnedDirectoriesHelpdeskGroupToTerraform(struct?: GroupOwnedDirectoriesHelpdeskGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    organizational_unit: groupOwnedDirectoriesHelpdeskGroupOrganizationalUnitToTerraform(struct!.organizationalUnit),
  }
}


export function groupOwnedDirectoriesHelpdeskGroupToHclTerraform(struct?: GroupOwnedDirectoriesHelpdeskGroup | cdktf.IResolvable): any {
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
    organizational_unit: {
      value: groupOwnedDirectoriesHelpdeskGroupOrganizationalUnitToHclTerraform(struct!.organizationalUnit),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupOwnedDirectoriesHelpdeskGroupOrganizationalUnit",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedDirectoriesHelpdeskGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedDirectoriesHelpdeskGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._organizationalUnit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnit = this._organizationalUnit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedDirectoriesHelpdeskGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._organizationalUnit.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._organizationalUnit.internalValue = value.organizationalUnit;
    }
  }

  // admin - computed: true, optional: false, required: false
  public get admin() {
    return this.getBooleanAttribute('admin');
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupOwnedDirectoriesHelpdeskGroupLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // organizational_unit - computed: true, optional: true, required: false
  private _organizationalUnit = new GroupOwnedDirectoriesHelpdeskGroupOrganizationalUnitOutputReference(this, "organizational_unit");
  public get organizationalUnit() {
    return this._organizationalUnit;
  }
  public putOrganizationalUnit(value: GroupOwnedDirectoriesHelpdeskGroupOrganizationalUnit) {
    this._organizationalUnit.internalValue = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit.internalValue;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupOwnedDirectoriesHelpdeskGroupPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupOwnedDirectoriesInternalDirectoryOwnerLinks {
}

export function groupOwnedDirectoriesInternalDirectoryOwnerLinksToTerraform(struct?: GroupOwnedDirectoriesInternalDirectoryOwnerLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedDirectoriesInternalDirectoryOwnerLinksToHclTerraform(struct?: GroupOwnedDirectoriesInternalDirectoryOwnerLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedDirectoriesInternalDirectoryOwnerLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedDirectoriesInternalDirectoryOwnerLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedDirectoriesInternalDirectoryOwnerLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupOwnedDirectoriesInternalDirectoryOwnerLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedDirectoriesInternalDirectoryOwnerLinksOutputReference {
    return new GroupOwnedDirectoriesInternalDirectoryOwnerLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedDirectoriesInternalDirectoryOwnerOrganizationalUnitLinks {
}

export function groupOwnedDirectoriesInternalDirectoryOwnerOrganizationalUnitLinksToTerraform(struct?: GroupOwnedDirectoriesInternalDirectoryOwnerOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedDirectoriesInternalDirectoryOwnerOrganizationalUnitLinksToHclTerraform(struct?: GroupOwnedDirectoriesInternalDirectoryOwnerOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedDirectoriesInternalDirectoryOwnerOrganizationalUnitLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedDirectoriesInternalDirectoryOwnerOrganizationalUnitLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedDirectoriesInternalDirectoryOwnerOrganizationalUnitLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupOwnedDirectoriesInternalDirectoryOwnerOrganizationalUnitLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedDirectoriesInternalDirectoryOwnerOrganizationalUnitLinksOutputReference {
    return new GroupOwnedDirectoriesInternalDirectoryOwnerOrganizationalUnitLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedDirectoriesInternalDirectoryOwnerOrganizationalUnitPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupOwnedDirectoriesInternalDirectoryOwnerOrganizationalUnitPermissionsToTerraform(struct?: GroupOwnedDirectoriesInternalDirectoryOwnerOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupOwnedDirectoriesInternalDirectoryOwnerOrganizationalUnitPermissionsToHclTerraform(struct?: GroupOwnedDirectoriesInternalDirectoryOwnerOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedDirectoriesInternalDirectoryOwnerOrganizationalUnitPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedDirectoriesInternalDirectoryOwnerOrganizationalUnitPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedDirectoriesInternalDirectoryOwnerOrganizationalUnitPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupOwnedDirectoriesInternalDirectoryOwnerOrganizationalUnitPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedDirectoriesInternalDirectoryOwnerOrganizationalUnitPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedDirectoriesInternalDirectoryOwnerOrganizationalUnitPermissionsOutputReference {
    return new GroupOwnedDirectoriesInternalDirectoryOwnerOrganizationalUnitPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedDirectoriesInternalDirectoryOwnerOrganizationalUnit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

export function groupOwnedDirectoriesInternalDirectoryOwnerOrganizationalUnitToTerraform(struct?: GroupOwnedDirectoriesInternalDirectoryOwnerOrganizationalUnit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function groupOwnedDirectoriesInternalDirectoryOwnerOrganizationalUnitToHclTerraform(struct?: GroupOwnedDirectoriesInternalDirectoryOwnerOrganizationalUnit | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedDirectoriesInternalDirectoryOwnerOrganizationalUnitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedDirectoriesInternalDirectoryOwnerOrganizationalUnit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedDirectoriesInternalDirectoryOwnerOrganizationalUnit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupOwnedDirectoriesInternalDirectoryOwnerOrganizationalUnitLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupOwnedDirectoriesInternalDirectoryOwnerOrganizationalUnitPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupOwnedDirectoriesInternalDirectoryOwnerPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupOwnedDirectoriesInternalDirectoryOwnerPermissionsToTerraform(struct?: GroupOwnedDirectoriesInternalDirectoryOwnerPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupOwnedDirectoriesInternalDirectoryOwnerPermissionsToHclTerraform(struct?: GroupOwnedDirectoriesInternalDirectoryOwnerPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedDirectoriesInternalDirectoryOwnerPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedDirectoriesInternalDirectoryOwnerPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedDirectoriesInternalDirectoryOwnerPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupOwnedDirectoriesInternalDirectoryOwnerPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedDirectoriesInternalDirectoryOwnerPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedDirectoriesInternalDirectoryOwnerPermissionsOutputReference {
    return new GroupOwnedDirectoriesInternalDirectoryOwnerPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedDirectoriesInternalDirectoryOwner {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#organizational_unit Group#organizational_unit}
  */
  readonly organizationalUnit?: GroupOwnedDirectoriesInternalDirectoryOwnerOrganizationalUnit;
}

export function groupOwnedDirectoriesInternalDirectoryOwnerToTerraform(struct?: GroupOwnedDirectoriesInternalDirectoryOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    organizational_unit: groupOwnedDirectoriesInternalDirectoryOwnerOrganizationalUnitToTerraform(struct!.organizationalUnit),
  }
}


export function groupOwnedDirectoriesInternalDirectoryOwnerToHclTerraform(struct?: GroupOwnedDirectoriesInternalDirectoryOwner): any {
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
    organizational_unit: {
      value: groupOwnedDirectoriesInternalDirectoryOwnerOrganizationalUnitToHclTerraform(struct!.organizationalUnit),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupOwnedDirectoriesInternalDirectoryOwnerOrganizationalUnit",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedDirectoriesInternalDirectoryOwnerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedDirectoriesInternalDirectoryOwner | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._organizationalUnit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnit = this._organizationalUnit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedDirectoriesInternalDirectoryOwner | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._organizationalUnit.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._organizationalUnit.internalValue = value.organizationalUnit;
    }
  }

  // admin - computed: true, optional: false, required: false
  public get admin() {
    return this.getBooleanAttribute('admin');
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupOwnedDirectoriesInternalDirectoryOwnerLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // organizational_unit - computed: true, optional: true, required: false
  private _organizationalUnit = new GroupOwnedDirectoriesInternalDirectoryOwnerOrganizationalUnitOutputReference(this, "organizational_unit");
  public get organizationalUnit() {
    return this._organizationalUnit;
  }
  public putOrganizationalUnit(value: GroupOwnedDirectoriesInternalDirectoryOwnerOrganizationalUnit) {
    this._organizationalUnit.internalValue = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit.internalValue;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupOwnedDirectoriesInternalDirectoryOwnerPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupOwnedDirectoriesInternalDirectory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#owner Group#owner}
  */
  readonly owner: GroupOwnedDirectoriesInternalDirectoryOwner;
}

export function groupOwnedDirectoriesInternalDirectoryToTerraform(struct?: GroupOwnedDirectoriesInternalDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    owner: groupOwnedDirectoriesInternalDirectoryOwnerToTerraform(struct!.owner),
  }
}


export function groupOwnedDirectoriesInternalDirectoryToHclTerraform(struct?: GroupOwnedDirectoriesInternalDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    owner: {
      value: groupOwnedDirectoriesInternalDirectoryOwnerToHclTerraform(struct!.owner),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupOwnedDirectoriesInternalDirectoryOwner",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedDirectoriesInternalDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedDirectoriesInternalDirectory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._owner?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedDirectoriesInternalDirectory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._owner.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._owner.internalValue = value.owner;
    }
  }

  // owner - computed: true, optional: false, required: true
  private _owner = new GroupOwnedDirectoriesInternalDirectoryOwnerOutputReference(this, "owner");
  public get owner() {
    return this._owner;
  }
  public putOwner(value: GroupOwnedDirectoriesInternalDirectoryOwner) {
    this._owner.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner.internalValue;
  }
}
export interface GroupOwnedDirectoriesLdapDirectoryClientCertificateLinks {
}

export function groupOwnedDirectoriesLdapDirectoryClientCertificateLinksToTerraform(struct?: GroupOwnedDirectoriesLdapDirectoryClientCertificateLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedDirectoriesLdapDirectoryClientCertificateLinksToHclTerraform(struct?: GroupOwnedDirectoriesLdapDirectoryClientCertificateLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedDirectoriesLdapDirectoryClientCertificateLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedDirectoriesLdapDirectoryClientCertificateLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedDirectoriesLdapDirectoryClientCertificateLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupOwnedDirectoriesLdapDirectoryClientCertificateLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedDirectoriesLdapDirectoryClientCertificateLinksOutputReference {
    return new GroupOwnedDirectoriesLdapDirectoryClientCertificateLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedDirectoriesLdapDirectoryClientCertificatePermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupOwnedDirectoriesLdapDirectoryClientCertificatePermissionsToTerraform(struct?: GroupOwnedDirectoriesLdapDirectoryClientCertificatePermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupOwnedDirectoriesLdapDirectoryClientCertificatePermissionsToHclTerraform(struct?: GroupOwnedDirectoriesLdapDirectoryClientCertificatePermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedDirectoriesLdapDirectoryClientCertificatePermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedDirectoriesLdapDirectoryClientCertificatePermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedDirectoriesLdapDirectoryClientCertificatePermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupOwnedDirectoriesLdapDirectoryClientCertificatePermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedDirectoriesLdapDirectoryClientCertificatePermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedDirectoriesLdapDirectoryClientCertificatePermissionsOutputReference {
    return new GroupOwnedDirectoriesLdapDirectoryClientCertificatePermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedDirectoriesLdapDirectoryClientCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#alias Group#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#certificate_data Group#certificate_data}
  */
  readonly certificateData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#global Group#global}
  */
  readonly global?: boolean | cdktf.IResolvable;
}

export function groupOwnedDirectoriesLdapDirectoryClientCertificateToTerraform(struct?: GroupOwnedDirectoriesLdapDirectoryClientCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    certificate_data: cdktf.stringToTerraform(struct!.certificateData),
    global: cdktf.booleanToTerraform(struct!.global),
  }
}


export function groupOwnedDirectoriesLdapDirectoryClientCertificateToHclTerraform(struct?: GroupOwnedDirectoriesLdapDirectoryClientCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_data: {
      value: cdktf.stringToHclTerraform(struct!.certificateData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global: {
      value: cdktf.booleanToHclTerraform(struct!.global),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedDirectoriesLdapDirectoryClientCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedDirectoriesLdapDirectoryClientCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._certificateData !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateData = this._certificateData;
    }
    if (this._global !== undefined) {
      hasAnyValues = true;
      internalValueResult.global = this._global;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedDirectoriesLdapDirectoryClientCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._certificateData = undefined;
      this._global = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._certificateData = value.certificateData;
      this._global = value.global;
    }
  }

  // alias - computed: true, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // certificate_data - computed: true, optional: true, required: false
  private _certificateData?: string; 
  public get certificateData() {
    return this.getStringAttribute('certificate_data');
  }
  public set certificateData(value: string) {
    this._certificateData = value;
  }
  public resetCertificateData() {
    this._certificateData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateDataInput() {
    return this._certificateData;
  }

  // expiration - computed: true, optional: false, required: false
  public get expiration() {
    return this.getStringAttribute('expiration');
  }

  // fingerprint_sha1 - computed: true, optional: false, required: false
  public get fingerprintSha1() {
    return this.getStringAttribute('fingerprint_sha1');
  }

  // fingerprint_sha256 - computed: true, optional: false, required: false
  public get fingerprintSha256() {
    return this.getStringAttribute('fingerprint_sha256');
  }

  // global - computed: true, optional: true, required: false
  private _global?: boolean | cdktf.IResolvable; 
  public get global() {
    return this.getBooleanAttribute('global');
  }
  public set global(value: boolean | cdktf.IResolvable) {
    this._global = value;
  }
  public resetGlobal() {
    this._global = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInput() {
    return this._global;
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupOwnedDirectoriesLdapDirectoryClientCertificateLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupOwnedDirectoriesLdapDirectoryClientCertificatePermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // subject_dn - computed: true, optional: false, required: false
  public get subjectDn() {
    return this.getStringAttribute('subject_dn');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupOwnedDirectoriesLdapDirectoryFailoverTrustedCertificateLinks {
}

export function groupOwnedDirectoriesLdapDirectoryFailoverTrustedCertificateLinksToTerraform(struct?: GroupOwnedDirectoriesLdapDirectoryFailoverTrustedCertificateLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedDirectoriesLdapDirectoryFailoverTrustedCertificateLinksToHclTerraform(struct?: GroupOwnedDirectoriesLdapDirectoryFailoverTrustedCertificateLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedDirectoriesLdapDirectoryFailoverTrustedCertificateLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedDirectoriesLdapDirectoryFailoverTrustedCertificateLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedDirectoriesLdapDirectoryFailoverTrustedCertificateLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupOwnedDirectoriesLdapDirectoryFailoverTrustedCertificateLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedDirectoriesLdapDirectoryFailoverTrustedCertificateLinksOutputReference {
    return new GroupOwnedDirectoriesLdapDirectoryFailoverTrustedCertificateLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedDirectoriesLdapDirectoryFailoverTrustedCertificatePermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupOwnedDirectoriesLdapDirectoryFailoverTrustedCertificatePermissionsToTerraform(struct?: GroupOwnedDirectoriesLdapDirectoryFailoverTrustedCertificatePermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupOwnedDirectoriesLdapDirectoryFailoverTrustedCertificatePermissionsToHclTerraform(struct?: GroupOwnedDirectoriesLdapDirectoryFailoverTrustedCertificatePermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedDirectoriesLdapDirectoryFailoverTrustedCertificatePermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedDirectoriesLdapDirectoryFailoverTrustedCertificatePermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedDirectoriesLdapDirectoryFailoverTrustedCertificatePermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupOwnedDirectoriesLdapDirectoryFailoverTrustedCertificatePermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedDirectoriesLdapDirectoryFailoverTrustedCertificatePermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedDirectoriesLdapDirectoryFailoverTrustedCertificatePermissionsOutputReference {
    return new GroupOwnedDirectoriesLdapDirectoryFailoverTrustedCertificatePermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedDirectoriesLdapDirectoryFailoverTrustedCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#alias Group#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#certificate_data Group#certificate_data}
  */
  readonly certificateData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#global Group#global}
  */
  readonly global?: boolean | cdktf.IResolvable;
}

export function groupOwnedDirectoriesLdapDirectoryFailoverTrustedCertificateToTerraform(struct?: GroupOwnedDirectoriesLdapDirectoryFailoverTrustedCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    certificate_data: cdktf.stringToTerraform(struct!.certificateData),
    global: cdktf.booleanToTerraform(struct!.global),
  }
}


export function groupOwnedDirectoriesLdapDirectoryFailoverTrustedCertificateToHclTerraform(struct?: GroupOwnedDirectoriesLdapDirectoryFailoverTrustedCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_data: {
      value: cdktf.stringToHclTerraform(struct!.certificateData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global: {
      value: cdktf.booleanToHclTerraform(struct!.global),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedDirectoriesLdapDirectoryFailoverTrustedCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedDirectoriesLdapDirectoryFailoverTrustedCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._certificateData !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateData = this._certificateData;
    }
    if (this._global !== undefined) {
      hasAnyValues = true;
      internalValueResult.global = this._global;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedDirectoriesLdapDirectoryFailoverTrustedCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._certificateData = undefined;
      this._global = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._certificateData = value.certificateData;
      this._global = value.global;
    }
  }

  // alias - computed: true, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // certificate_data - computed: true, optional: true, required: false
  private _certificateData?: string; 
  public get certificateData() {
    return this.getStringAttribute('certificate_data');
  }
  public set certificateData(value: string) {
    this._certificateData = value;
  }
  public resetCertificateData() {
    this._certificateData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateDataInput() {
    return this._certificateData;
  }

  // expiration - computed: true, optional: false, required: false
  public get expiration() {
    return this.getStringAttribute('expiration');
  }

  // fingerprint_sha1 - computed: true, optional: false, required: false
  public get fingerprintSha1() {
    return this.getStringAttribute('fingerprint_sha1');
  }

  // fingerprint_sha256 - computed: true, optional: false, required: false
  public get fingerprintSha256() {
    return this.getStringAttribute('fingerprint_sha256');
  }

  // global - computed: true, optional: true, required: false
  private _global?: boolean | cdktf.IResolvable; 
  public get global() {
    return this.getBooleanAttribute('global');
  }
  public set global(value: boolean | cdktf.IResolvable) {
    this._global = value;
  }
  public resetGlobal() {
    this._global = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInput() {
    return this._global;
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupOwnedDirectoriesLdapDirectoryFailoverTrustedCertificateLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupOwnedDirectoriesLdapDirectoryFailoverTrustedCertificatePermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // subject_dn - computed: true, optional: false, required: false
  public get subjectDn() {
    return this.getStringAttribute('subject_dn');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupOwnedDirectoriesLdapDirectoryTrustedCertificateLinks {
}

export function groupOwnedDirectoriesLdapDirectoryTrustedCertificateLinksToTerraform(struct?: GroupOwnedDirectoriesLdapDirectoryTrustedCertificateLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedDirectoriesLdapDirectoryTrustedCertificateLinksToHclTerraform(struct?: GroupOwnedDirectoriesLdapDirectoryTrustedCertificateLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedDirectoriesLdapDirectoryTrustedCertificateLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedDirectoriesLdapDirectoryTrustedCertificateLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedDirectoriesLdapDirectoryTrustedCertificateLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupOwnedDirectoriesLdapDirectoryTrustedCertificateLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedDirectoriesLdapDirectoryTrustedCertificateLinksOutputReference {
    return new GroupOwnedDirectoriesLdapDirectoryTrustedCertificateLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedDirectoriesLdapDirectoryTrustedCertificatePermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupOwnedDirectoriesLdapDirectoryTrustedCertificatePermissionsToTerraform(struct?: GroupOwnedDirectoriesLdapDirectoryTrustedCertificatePermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupOwnedDirectoriesLdapDirectoryTrustedCertificatePermissionsToHclTerraform(struct?: GroupOwnedDirectoriesLdapDirectoryTrustedCertificatePermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedDirectoriesLdapDirectoryTrustedCertificatePermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedDirectoriesLdapDirectoryTrustedCertificatePermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedDirectoriesLdapDirectoryTrustedCertificatePermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupOwnedDirectoriesLdapDirectoryTrustedCertificatePermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedDirectoriesLdapDirectoryTrustedCertificatePermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedDirectoriesLdapDirectoryTrustedCertificatePermissionsOutputReference {
    return new GroupOwnedDirectoriesLdapDirectoryTrustedCertificatePermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedDirectoriesLdapDirectoryTrustedCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#alias Group#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#certificate_data Group#certificate_data}
  */
  readonly certificateData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#global Group#global}
  */
  readonly global?: boolean | cdktf.IResolvable;
}

export function groupOwnedDirectoriesLdapDirectoryTrustedCertificateToTerraform(struct?: GroupOwnedDirectoriesLdapDirectoryTrustedCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    certificate_data: cdktf.stringToTerraform(struct!.certificateData),
    global: cdktf.booleanToTerraform(struct!.global),
  }
}


export function groupOwnedDirectoriesLdapDirectoryTrustedCertificateToHclTerraform(struct?: GroupOwnedDirectoriesLdapDirectoryTrustedCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_data: {
      value: cdktf.stringToHclTerraform(struct!.certificateData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global: {
      value: cdktf.booleanToHclTerraform(struct!.global),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedDirectoriesLdapDirectoryTrustedCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedDirectoriesLdapDirectoryTrustedCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._certificateData !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateData = this._certificateData;
    }
    if (this._global !== undefined) {
      hasAnyValues = true;
      internalValueResult.global = this._global;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedDirectoriesLdapDirectoryTrustedCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._certificateData = undefined;
      this._global = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._certificateData = value.certificateData;
      this._global = value.global;
    }
  }

  // alias - computed: true, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // certificate_data - computed: true, optional: true, required: false
  private _certificateData?: string; 
  public get certificateData() {
    return this.getStringAttribute('certificate_data');
  }
  public set certificateData(value: string) {
    this._certificateData = value;
  }
  public resetCertificateData() {
    this._certificateData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateDataInput() {
    return this._certificateData;
  }

  // expiration - computed: true, optional: false, required: false
  public get expiration() {
    return this.getStringAttribute('expiration');
  }

  // fingerprint_sha1 - computed: true, optional: false, required: false
  public get fingerprintSha1() {
    return this.getStringAttribute('fingerprint_sha1');
  }

  // fingerprint_sha256 - computed: true, optional: false, required: false
  public get fingerprintSha256() {
    return this.getStringAttribute('fingerprint_sha256');
  }

  // global - computed: true, optional: true, required: false
  private _global?: boolean | cdktf.IResolvable; 
  public get global() {
    return this.getBooleanAttribute('global');
  }
  public set global(value: boolean | cdktf.IResolvable) {
    this._global = value;
  }
  public resetGlobal() {
    this._global = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInput() {
    return this._global;
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupOwnedDirectoriesLdapDirectoryTrustedCertificateLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupOwnedDirectoriesLdapDirectoryTrustedCertificatePermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // subject_dn - computed: true, optional: false, required: false
  public get subjectDn() {
    return this.getStringAttribute('subject_dn');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupOwnedDirectoriesLdapDirectory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#attributes_to_store Group#attributes_to_store}
  */
  readonly attributesToStore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#base_dn Group#base_dn}
  */
  readonly baseDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#client_certificate Group#client_certificate}
  */
  readonly clientCertificate?: GroupOwnedDirectoriesLdapDirectoryClientCertificate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#dialect Group#dialect}
  */
  readonly dialect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#failover_host Group#failover_host}
  */
  readonly failoverHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#failover_trusted_certificate Group#failover_trusted_certificate}
  */
  readonly failoverTrustedCertificate?: GroupOwnedDirectoriesLdapDirectoryFailoverTrustedCertificate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#host Group#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#password_recovery Group#password_recovery}
  */
  readonly passwordRecovery: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#port Group#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#search_bind_dn Group#search_bind_dn}
  */
  readonly searchBindDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#search_bind_password Group#search_bind_password}
  */
  readonly searchBindPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#search_filter Group#search_filter}
  */
  readonly searchFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#tls Group#tls}
  */
  readonly tls: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#trusted_certificate Group#trusted_certificate}
  */
  readonly trustedCertificate?: GroupOwnedDirectoriesLdapDirectoryTrustedCertificate;
}

export function groupOwnedDirectoriesLdapDirectoryToTerraform(struct?: GroupOwnedDirectoriesLdapDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes_to_store: cdktf.stringToTerraform(struct!.attributesToStore),
    base_dn: cdktf.stringToTerraform(struct!.baseDn),
    client_certificate: groupOwnedDirectoriesLdapDirectoryClientCertificateToTerraform(struct!.clientCertificate),
    dialect: cdktf.stringToTerraform(struct!.dialect),
    failover_host: cdktf.stringToTerraform(struct!.failoverHost),
    failover_trusted_certificate: groupOwnedDirectoriesLdapDirectoryFailoverTrustedCertificateToTerraform(struct!.failoverTrustedCertificate),
    host: cdktf.stringToTerraform(struct!.host),
    password_recovery: cdktf.stringToTerraform(struct!.passwordRecovery),
    port: cdktf.numberToTerraform(struct!.port),
    search_bind_dn: cdktf.stringToTerraform(struct!.searchBindDn),
    search_bind_password: cdktf.stringToTerraform(struct!.searchBindPassword),
    search_filter: cdktf.stringToTerraform(struct!.searchFilter),
    tls: cdktf.stringToTerraform(struct!.tls),
    trusted_certificate: groupOwnedDirectoriesLdapDirectoryTrustedCertificateToTerraform(struct!.trustedCertificate),
  }
}


export function groupOwnedDirectoriesLdapDirectoryToHclTerraform(struct?: GroupOwnedDirectoriesLdapDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes_to_store: {
      value: cdktf.stringToHclTerraform(struct!.attributesToStore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base_dn: {
      value: cdktf.stringToHclTerraform(struct!.baseDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate: {
      value: groupOwnedDirectoriesLdapDirectoryClientCertificateToHclTerraform(struct!.clientCertificate),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupOwnedDirectoriesLdapDirectoryClientCertificate",
    },
    dialect: {
      value: cdktf.stringToHclTerraform(struct!.dialect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failover_host: {
      value: cdktf.stringToHclTerraform(struct!.failoverHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failover_trusted_certificate: {
      value: groupOwnedDirectoriesLdapDirectoryFailoverTrustedCertificateToHclTerraform(struct!.failoverTrustedCertificate),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupOwnedDirectoriesLdapDirectoryFailoverTrustedCertificate",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_recovery: {
      value: cdktf.stringToHclTerraform(struct!.passwordRecovery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    search_bind_dn: {
      value: cdktf.stringToHclTerraform(struct!.searchBindDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_bind_password: {
      value: cdktf.stringToHclTerraform(struct!.searchBindPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_filter: {
      value: cdktf.stringToHclTerraform(struct!.searchFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: cdktf.stringToHclTerraform(struct!.tls),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trusted_certificate: {
      value: groupOwnedDirectoriesLdapDirectoryTrustedCertificateToHclTerraform(struct!.trustedCertificate),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupOwnedDirectoriesLdapDirectoryTrustedCertificate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedDirectoriesLdapDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedDirectoriesLdapDirectory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributesToStore !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributesToStore = this._attributesToStore;
    }
    if (this._baseDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseDn = this._baseDn;
    }
    if (this._clientCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate?.internalValue;
    }
    if (this._dialect !== undefined) {
      hasAnyValues = true;
      internalValueResult.dialect = this._dialect;
    }
    if (this._failoverHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverHost = this._failoverHost;
    }
    if (this._failoverTrustedCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverTrustedCertificate = this._failoverTrustedCertificate?.internalValue;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._passwordRecovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordRecovery = this._passwordRecovery;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._searchBindDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchBindDn = this._searchBindDn;
    }
    if (this._searchBindPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchBindPassword = this._searchBindPassword;
    }
    if (this._searchFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchFilter = this._searchFilter;
    }
    if (this._tls !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls;
    }
    if (this._trustedCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCertificate = this._trustedCertificate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedDirectoriesLdapDirectory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributesToStore = undefined;
      this._baseDn = undefined;
      this._clientCertificate.internalValue = undefined;
      this._dialect = undefined;
      this._failoverHost = undefined;
      this._failoverTrustedCertificate.internalValue = undefined;
      this._host = undefined;
      this._passwordRecovery = undefined;
      this._port = undefined;
      this._searchBindDn = undefined;
      this._searchBindPassword = undefined;
      this._searchFilter = undefined;
      this._tls = undefined;
      this._trustedCertificate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributesToStore = value.attributesToStore;
      this._baseDn = value.baseDn;
      this._clientCertificate.internalValue = value.clientCertificate;
      this._dialect = value.dialect;
      this._failoverHost = value.failoverHost;
      this._failoverTrustedCertificate.internalValue = value.failoverTrustedCertificate;
      this._host = value.host;
      this._passwordRecovery = value.passwordRecovery;
      this._port = value.port;
      this._searchBindDn = value.searchBindDn;
      this._searchBindPassword = value.searchBindPassword;
      this._searchFilter = value.searchFilter;
      this._tls = value.tls;
      this._trustedCertificate.internalValue = value.trustedCertificate;
    }
  }

  // attributes_to_store - computed: true, optional: true, required: false
  private _attributesToStore?: string; 
  public get attributesToStore() {
    return this.getStringAttribute('attributes_to_store');
  }
  public set attributesToStore(value: string) {
    this._attributesToStore = value;
  }
  public resetAttributesToStore() {
    this._attributesToStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesToStoreInput() {
    return this._attributesToStore;
  }

  // base_dn - computed: true, optional: false, required: true
  private _baseDn?: string; 
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }
  public set baseDn(value: string) {
    this._baseDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDnInput() {
    return this._baseDn;
  }

  // client_certificate - computed: true, optional: true, required: false
  private _clientCertificate = new GroupOwnedDirectoriesLdapDirectoryClientCertificateOutputReference(this, "client_certificate");
  public get clientCertificate() {
    return this._clientCertificate;
  }
  public putClientCertificate(value: GroupOwnedDirectoriesLdapDirectoryClientCertificate) {
    this._clientCertificate.internalValue = value;
  }
  public resetClientCertificate() {
    this._clientCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate.internalValue;
  }

  // dialect - computed: true, optional: true, required: false
  private _dialect?: string; 
  public get dialect() {
    return this.getStringAttribute('dialect');
  }
  public set dialect(value: string) {
    this._dialect = value;
  }
  public resetDialect() {
    this._dialect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialectInput() {
    return this._dialect;
  }

  // failover_host - computed: true, optional: true, required: false
  private _failoverHost?: string; 
  public get failoverHost() {
    return this.getStringAttribute('failover_host');
  }
  public set failoverHost(value: string) {
    this._failoverHost = value;
  }
  public resetFailoverHost() {
    this._failoverHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverHostInput() {
    return this._failoverHost;
  }

  // failover_trusted_certificate - computed: true, optional: true, required: false
  private _failoverTrustedCertificate = new GroupOwnedDirectoriesLdapDirectoryFailoverTrustedCertificateOutputReference(this, "failover_trusted_certificate");
  public get failoverTrustedCertificate() {
    return this._failoverTrustedCertificate;
  }
  public putFailoverTrustedCertificate(value: GroupOwnedDirectoriesLdapDirectoryFailoverTrustedCertificate) {
    this._failoverTrustedCertificate.internalValue = value;
  }
  public resetFailoverTrustedCertificate() {
    this._failoverTrustedCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverTrustedCertificateInput() {
    return this._failoverTrustedCertificate.internalValue;
  }

  // host - computed: true, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // password_recovery - computed: true, optional: false, required: true
  private _passwordRecovery?: string; 
  public get passwordRecovery() {
    return this.getStringAttribute('password_recovery');
  }
  public set passwordRecovery(value: string) {
    this._passwordRecovery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordRecoveryInput() {
    return this._passwordRecovery;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // search_bind_dn - computed: true, optional: true, required: false
  private _searchBindDn?: string; 
  public get searchBindDn() {
    return this.getStringAttribute('search_bind_dn');
  }
  public set searchBindDn(value: string) {
    this._searchBindDn = value;
  }
  public resetSearchBindDn() {
    this._searchBindDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchBindDnInput() {
    return this._searchBindDn;
  }

  // search_bind_password - computed: true, optional: true, required: false
  private _searchBindPassword?: string; 
  public get searchBindPassword() {
    return this.getStringAttribute('search_bind_password');
  }
  public set searchBindPassword(value: string) {
    this._searchBindPassword = value;
  }
  public resetSearchBindPassword() {
    this._searchBindPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchBindPasswordInput() {
    return this._searchBindPassword;
  }

  // search_filter - computed: true, optional: true, required: false
  private _searchFilter?: string; 
  public get searchFilter() {
    return this.getStringAttribute('search_filter');
  }
  public set searchFilter(value: string) {
    this._searchFilter = value;
  }
  public resetSearchFilter() {
    this._searchFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchFilterInput() {
    return this._searchFilter;
  }

  // tls - computed: true, optional: false, required: true
  private _tls?: string; 
  public get tls() {
    return this.getStringAttribute('tls');
  }
  public set tls(value: string) {
    this._tls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls;
  }

  // trusted_certificate - computed: true, optional: true, required: false
  private _trustedCertificate = new GroupOwnedDirectoriesLdapDirectoryTrustedCertificateOutputReference(this, "trusted_certificate");
  public get trustedCertificate() {
    return this._trustedCertificate;
  }
  public putTrustedCertificate(value: GroupOwnedDirectoriesLdapDirectoryTrustedCertificate) {
    this._trustedCertificate.internalValue = value;
  }
  public resetTrustedCertificate() {
    this._trustedCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCertificateInput() {
    return this._trustedCertificate.internalValue;
  }
}
export interface GroupOwnedDirectoriesLinks {
}

export function groupOwnedDirectoriesLinksToTerraform(struct?: GroupOwnedDirectoriesLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedDirectoriesLinksToHclTerraform(struct?: GroupOwnedDirectoriesLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedDirectoriesLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedDirectoriesLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedDirectoriesLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupOwnedDirectoriesLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedDirectoriesLinksOutputReference {
    return new GroupOwnedDirectoriesLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedDirectoriesMaintenanceDirectory {
}

export function groupOwnedDirectoriesMaintenanceDirectoryToTerraform(struct?: GroupOwnedDirectoriesMaintenanceDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedDirectoriesMaintenanceDirectoryToHclTerraform(struct?: GroupOwnedDirectoriesMaintenanceDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedDirectoriesMaintenanceDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedDirectoriesMaintenanceDirectory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedDirectoriesMaintenanceDirectory | cdktf.IResolvable | undefined) {
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
}
export interface GroupOwnedDirectoriesOidcDirectory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#acr_values Group#acr_values}
  */
  readonly acrValues?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#attributes_to_store Group#attributes_to_store}
  */
  readonly attributesToStore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#client_id Group#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#client_secret Group#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#domain_restriction Group#domain_restriction}
  */
  readonly domainRestriction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#enforces2fa Group#enforces2fa}
  */
  readonly enforces2Fa?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#issuer Group#issuer}
  */
  readonly issuer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#logout_url Group#logout_url}
  */
  readonly logoutUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#send_login_hint Group#send_login_hint}
  */
  readonly sendLoginHint?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#vendor_escaped Group#vendor_escaped}
  */
  readonly vendorEscaped: string;
}

export function groupOwnedDirectoriesOidcDirectoryToTerraform(struct?: GroupOwnedDirectoriesOidcDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acr_values: cdktf.stringToTerraform(struct!.acrValues),
    attributes_to_store: cdktf.stringToTerraform(struct!.attributesToStore),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    domain_restriction: cdktf.stringToTerraform(struct!.domainRestriction),
    enforces2fa: cdktf.booleanToTerraform(struct!.enforces2Fa),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    logout_url: cdktf.stringToTerraform(struct!.logoutUrl),
    send_login_hint: cdktf.booleanToTerraform(struct!.sendLoginHint),
    vendor_escaped: cdktf.stringToTerraform(struct!.vendorEscaped),
  }
}


export function groupOwnedDirectoriesOidcDirectoryToHclTerraform(struct?: GroupOwnedDirectoriesOidcDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acr_values: {
      value: cdktf.stringToHclTerraform(struct!.acrValues),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attributes_to_store: {
      value: cdktf.stringToHclTerraform(struct!.attributesToStore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_restriction: {
      value: cdktf.stringToHclTerraform(struct!.domainRestriction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enforces2fa: {
      value: cdktf.booleanToHclTerraform(struct!.enforces2Fa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logout_url: {
      value: cdktf.stringToHclTerraform(struct!.logoutUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_login_hint: {
      value: cdktf.booleanToHclTerraform(struct!.sendLoginHint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vendor_escaped: {
      value: cdktf.stringToHclTerraform(struct!.vendorEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedDirectoriesOidcDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedDirectoriesOidcDirectory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acrValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.acrValues = this._acrValues;
    }
    if (this._attributesToStore !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributesToStore = this._attributesToStore;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._domainRestriction !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainRestriction = this._domainRestriction;
    }
    if (this._enforces2Fa !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforces2Fa = this._enforces2Fa;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._logoutUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoutUrl = this._logoutUrl;
    }
    if (this._sendLoginHint !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendLoginHint = this._sendLoginHint;
    }
    if (this._vendorEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendorEscaped = this._vendorEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedDirectoriesOidcDirectory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acrValues = undefined;
      this._attributesToStore = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._domainRestriction = undefined;
      this._enforces2Fa = undefined;
      this._issuer = undefined;
      this._logoutUrl = undefined;
      this._sendLoginHint = undefined;
      this._vendorEscaped = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acrValues = value.acrValues;
      this._attributesToStore = value.attributesToStore;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._domainRestriction = value.domainRestriction;
      this._enforces2Fa = value.enforces2Fa;
      this._issuer = value.issuer;
      this._logoutUrl = value.logoutUrl;
      this._sendLoginHint = value.sendLoginHint;
      this._vendorEscaped = value.vendorEscaped;
    }
  }

  // acr_values - computed: true, optional: true, required: false
  private _acrValues?: string; 
  public get acrValues() {
    return this.getStringAttribute('acr_values');
  }
  public set acrValues(value: string) {
    this._acrValues = value;
  }
  public resetAcrValues() {
    this._acrValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acrValuesInput() {
    return this._acrValues;
  }

  // attributes_to_store - computed: true, optional: true, required: false
  private _attributesToStore?: string; 
  public get attributesToStore() {
    return this.getStringAttribute('attributes_to_store');
  }
  public set attributesToStore(value: string) {
    this._attributesToStore = value;
  }
  public resetAttributesToStore() {
    this._attributesToStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesToStoreInput() {
    return this._attributesToStore;
  }

  // client_id - computed: true, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: true, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // domain_restriction - computed: true, optional: true, required: false
  private _domainRestriction?: string; 
  public get domainRestriction() {
    return this.getStringAttribute('domain_restriction');
  }
  public set domainRestriction(value: string) {
    this._domainRestriction = value;
  }
  public resetDomainRestriction() {
    this._domainRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainRestrictionInput() {
    return this._domainRestriction;
  }

  // enforces2fa - computed: true, optional: true, required: false
  private _enforces2Fa?: boolean | cdktf.IResolvable; 
  public get enforces2Fa() {
    return this.getBooleanAttribute('enforces2fa');
  }
  public set enforces2Fa(value: boolean | cdktf.IResolvable) {
    this._enforces2Fa = value;
  }
  public resetEnforces2Fa() {
    this._enforces2Fa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforces2FaInput() {
    return this._enforces2Fa;
  }

  // fully_resolved_issuer - computed: true, optional: false, required: false
  public get fullyResolvedIssuer() {
    return this.getStringAttribute('fully_resolved_issuer');
  }

  // issuer - computed: true, optional: false, required: true
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // logout_url - computed: true, optional: true, required: false
  private _logoutUrl?: string; 
  public get logoutUrl() {
    return this.getStringAttribute('logout_url');
  }
  public set logoutUrl(value: string) {
    this._logoutUrl = value;
  }
  public resetLogoutUrl() {
    this._logoutUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutUrlInput() {
    return this._logoutUrl;
  }

  // send_login_hint - computed: true, optional: true, required: false
  private _sendLoginHint?: boolean | cdktf.IResolvable; 
  public get sendLoginHint() {
    return this.getBooleanAttribute('send_login_hint');
  }
  public set sendLoginHint(value: boolean | cdktf.IResolvable) {
    this._sendLoginHint = value;
  }
  public resetSendLoginHint() {
    this._sendLoginHint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendLoginHintInput() {
    return this._sendLoginHint;
  }

  // vendor_escaped - computed: true, optional: false, required: true
  private _vendorEscaped?: string; 
  public get vendorEscaped() {
    return this.getStringAttribute('vendor_escaped');
  }
  public set vendorEscaped(value: string) {
    this._vendorEscaped = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorEscapedInput() {
    return this._vendorEscaped;
  }
}
export interface GroupOwnedDirectoriesPendingAccountsDirectory {
}

export function groupOwnedDirectoriesPendingAccountsDirectoryToTerraform(struct?: GroupOwnedDirectoriesPendingAccountsDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedDirectoriesPendingAccountsDirectoryToHclTerraform(struct?: GroupOwnedDirectoriesPendingAccountsDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedDirectoriesPendingAccountsDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedDirectoriesPendingAccountsDirectory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedDirectoriesPendingAccountsDirectory | cdktf.IResolvable | undefined) {
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
}
export interface GroupOwnedDirectoriesPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupOwnedDirectoriesPermissionsToTerraform(struct?: GroupOwnedDirectoriesPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupOwnedDirectoriesPermissionsToHclTerraform(struct?: GroupOwnedDirectoriesPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedDirectoriesPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedDirectoriesPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedDirectoriesPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupOwnedDirectoriesPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedDirectoriesPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedDirectoriesPermissionsOutputReference {
    return new GroupOwnedDirectoriesPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedDirectories {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#active Group#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#base_organizational_unit Group#base_organizational_unit}
  */
  readonly baseOrganizationalUnit: GroupOwnedDirectoriesBaseOrganizationalUnit;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#default_directory Group#default_directory}
  */
  readonly defaultDirectory?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#helpdesk_group Group#helpdesk_group}
  */
  readonly helpdeskGroup?: GroupOwnedDirectoriesHelpdeskGroup;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#internal_directory Group#internal_directory}
  */
  readonly internalDirectory?: GroupOwnedDirectoriesInternalDirectory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#ldap_directory Group#ldap_directory}
  */
  readonly ldapDirectory?: GroupOwnedDirectoriesLdapDirectory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#maintenance_directory Group#maintenance_directory}
  */
  readonly maintenanceDirectory?: GroupOwnedDirectoriesMaintenanceDirectory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#oidc_directory Group#oidc_directory}
  */
  readonly oidcDirectory?: GroupOwnedDirectoriesOidcDirectory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#pending_accounts_directory Group#pending_accounts_directory}
  */
  readonly pendingAccountsDirectory?: GroupOwnedDirectoriesPendingAccountsDirectory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#restrict2fa Group#restrict2fa}
  */
  readonly restrict2Fa?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#rotating_password Group#rotating_password}
  */
  readonly rotatingPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#username_customizable Group#username_customizable}
  */
  readonly usernameCustomizable?: boolean | cdktf.IResolvable;
}

export function groupOwnedDirectoriesToTerraform(struct?: GroupOwnedDirectories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    base_organizational_unit: groupOwnedDirectoriesBaseOrganizationalUnitToTerraform(struct!.baseOrganizationalUnit),
    default_directory: cdktf.booleanToTerraform(struct!.defaultDirectory),
    helpdesk_group: groupOwnedDirectoriesHelpdeskGroupToTerraform(struct!.helpdeskGroup),
    internal_directory: groupOwnedDirectoriesInternalDirectoryToTerraform(struct!.internalDirectory),
    ldap_directory: groupOwnedDirectoriesLdapDirectoryToTerraform(struct!.ldapDirectory),
    maintenance_directory: groupOwnedDirectoriesMaintenanceDirectoryToTerraform(struct!.maintenanceDirectory),
    name: cdktf.stringToTerraform(struct!.name),
    oidc_directory: groupOwnedDirectoriesOidcDirectoryToTerraform(struct!.oidcDirectory),
    pending_accounts_directory: groupOwnedDirectoriesPendingAccountsDirectoryToTerraform(struct!.pendingAccountsDirectory),
    restrict2fa: cdktf.booleanToTerraform(struct!.restrict2Fa),
    rotating_password: cdktf.stringToTerraform(struct!.rotatingPassword),
    username_customizable: cdktf.booleanToTerraform(struct!.usernameCustomizable),
  }
}


export function groupOwnedDirectoriesToHclTerraform(struct?: GroupOwnedDirectories): any {
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
    base_organizational_unit: {
      value: groupOwnedDirectoriesBaseOrganizationalUnitToHclTerraform(struct!.baseOrganizationalUnit),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupOwnedDirectoriesBaseOrganizationalUnit",
    },
    default_directory: {
      value: cdktf.booleanToHclTerraform(struct!.defaultDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    helpdesk_group: {
      value: groupOwnedDirectoriesHelpdeskGroupToHclTerraform(struct!.helpdeskGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupOwnedDirectoriesHelpdeskGroup",
    },
    internal_directory: {
      value: groupOwnedDirectoriesInternalDirectoryToHclTerraform(struct!.internalDirectory),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupOwnedDirectoriesInternalDirectory",
    },
    ldap_directory: {
      value: groupOwnedDirectoriesLdapDirectoryToHclTerraform(struct!.ldapDirectory),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupOwnedDirectoriesLdapDirectory",
    },
    maintenance_directory: {
      value: groupOwnedDirectoriesMaintenanceDirectoryToHclTerraform(struct!.maintenanceDirectory),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupOwnedDirectoriesMaintenanceDirectory",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oidc_directory: {
      value: groupOwnedDirectoriesOidcDirectoryToHclTerraform(struct!.oidcDirectory),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupOwnedDirectoriesOidcDirectory",
    },
    pending_accounts_directory: {
      value: groupOwnedDirectoriesPendingAccountsDirectoryToHclTerraform(struct!.pendingAccountsDirectory),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupOwnedDirectoriesPendingAccountsDirectory",
    },
    restrict2fa: {
      value: cdktf.booleanToHclTerraform(struct!.restrict2Fa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rotating_password: {
      value: cdktf.stringToHclTerraform(struct!.rotatingPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_customizable: {
      value: cdktf.booleanToHclTerraform(struct!.usernameCustomizable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedDirectoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedDirectories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._baseOrganizationalUnit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseOrganizationalUnit = this._baseOrganizationalUnit?.internalValue;
    }
    if (this._defaultDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultDirectory = this._defaultDirectory;
    }
    if (this._helpdeskGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.helpdeskGroup = this._helpdeskGroup?.internalValue;
    }
    if (this._internalDirectory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalDirectory = this._internalDirectory?.internalValue;
    }
    if (this._ldapDirectory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapDirectory = this._ldapDirectory?.internalValue;
    }
    if (this._maintenanceDirectory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceDirectory = this._maintenanceDirectory?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._oidcDirectory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidcDirectory = this._oidcDirectory?.internalValue;
    }
    if (this._pendingAccountsDirectory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pendingAccountsDirectory = this._pendingAccountsDirectory?.internalValue;
    }
    if (this._restrict2Fa !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrict2Fa = this._restrict2Fa;
    }
    if (this._rotatingPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotatingPassword = this._rotatingPassword;
    }
    if (this._usernameCustomizable !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameCustomizable = this._usernameCustomizable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedDirectories | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._active = undefined;
      this._baseOrganizationalUnit.internalValue = undefined;
      this._defaultDirectory = undefined;
      this._helpdeskGroup.internalValue = undefined;
      this._internalDirectory.internalValue = undefined;
      this._ldapDirectory.internalValue = undefined;
      this._maintenanceDirectory.internalValue = undefined;
      this._name = undefined;
      this._oidcDirectory.internalValue = undefined;
      this._pendingAccountsDirectory.internalValue = undefined;
      this._restrict2Fa = undefined;
      this._rotatingPassword = undefined;
      this._usernameCustomizable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._active = value.active;
      this._baseOrganizationalUnit.internalValue = value.baseOrganizationalUnit;
      this._defaultDirectory = value.defaultDirectory;
      this._helpdeskGroup.internalValue = value.helpdeskGroup;
      this._internalDirectory.internalValue = value.internalDirectory;
      this._ldapDirectory.internalValue = value.ldapDirectory;
      this._maintenanceDirectory.internalValue = value.maintenanceDirectory;
      this._name = value.name;
      this._oidcDirectory.internalValue = value.oidcDirectory;
      this._pendingAccountsDirectory.internalValue = value.pendingAccountsDirectory;
      this._restrict2Fa = value.restrict2Fa;
      this._rotatingPassword = value.rotatingPassword;
      this._usernameCustomizable = value.usernameCustomizable;
    }
  }

  // account_validity_supported - computed: true, optional: false, required: false
  public get accountValiditySupported() {
    return this.getBooleanAttribute('account_validity_supported');
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

  // base_organizational_unit - computed: true, optional: false, required: true
  private _baseOrganizationalUnit = new GroupOwnedDirectoriesBaseOrganizationalUnitOutputReference(this, "base_organizational_unit");
  public get baseOrganizationalUnit() {
    return this._baseOrganizationalUnit;
  }
  public putBaseOrganizationalUnit(value: GroupOwnedDirectoriesBaseOrganizationalUnit) {
    this._baseOrganizationalUnit.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseOrganizationalUnitInput() {
    return this._baseOrganizationalUnit.internalValue;
  }

  // default_directory - computed: true, optional: true, required: false
  private _defaultDirectory?: boolean | cdktf.IResolvable; 
  public get defaultDirectory() {
    return this.getBooleanAttribute('default_directory');
  }
  public set defaultDirectory(value: boolean | cdktf.IResolvable) {
    this._defaultDirectory = value;
  }
  public resetDefaultDirectory() {
    this._defaultDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDirectoryInput() {
    return this._defaultDirectory;
  }

  // helpdesk_group - computed: true, optional: true, required: false
  private _helpdeskGroup = new GroupOwnedDirectoriesHelpdeskGroupOutputReference(this, "helpdesk_group");
  public get helpdeskGroup() {
    return this._helpdeskGroup;
  }
  public putHelpdeskGroup(value: GroupOwnedDirectoriesHelpdeskGroup) {
    this._helpdeskGroup.internalValue = value;
  }
  public resetHelpdeskGroup() {
    this._helpdeskGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helpdeskGroupInput() {
    return this._helpdeskGroup.internalValue;
  }

  // internal_directory - computed: true, optional: true, required: false
  private _internalDirectory = new GroupOwnedDirectoriesInternalDirectoryOutputReference(this, "internal_directory");
  public get internalDirectory() {
    return this._internalDirectory;
  }
  public putInternalDirectory(value: GroupOwnedDirectoriesInternalDirectory) {
    this._internalDirectory.internalValue = value;
  }
  public resetInternalDirectory() {
    this._internalDirectory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalDirectoryInput() {
    return this._internalDirectory.internalValue;
  }

  // ldap_directory - computed: true, optional: true, required: false
  private _ldapDirectory = new GroupOwnedDirectoriesLdapDirectoryOutputReference(this, "ldap_directory");
  public get ldapDirectory() {
    return this._ldapDirectory;
  }
  public putLdapDirectory(value: GroupOwnedDirectoriesLdapDirectory) {
    this._ldapDirectory.internalValue = value;
  }
  public resetLdapDirectory() {
    this._ldapDirectory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapDirectoryInput() {
    return this._ldapDirectory.internalValue;
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupOwnedDirectoriesLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // maintenance_directory - computed: true, optional: true, required: false
  private _maintenanceDirectory = new GroupOwnedDirectoriesMaintenanceDirectoryOutputReference(this, "maintenance_directory");
  public get maintenanceDirectory() {
    return this._maintenanceDirectory;
  }
  public putMaintenanceDirectory(value: GroupOwnedDirectoriesMaintenanceDirectory) {
    this._maintenanceDirectory.internalValue = value;
  }
  public resetMaintenanceDirectory() {
    this._maintenanceDirectory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceDirectoryInput() {
    return this._maintenanceDirectory.internalValue;
  }

  // name - computed: true, optional: false, required: true
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

  // oidc_directory - computed: true, optional: true, required: false
  private _oidcDirectory = new GroupOwnedDirectoriesOidcDirectoryOutputReference(this, "oidc_directory");
  public get oidcDirectory() {
    return this._oidcDirectory;
  }
  public putOidcDirectory(value: GroupOwnedDirectoriesOidcDirectory) {
    this._oidcDirectory.internalValue = value;
  }
  public resetOidcDirectory() {
    this._oidcDirectory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcDirectoryInput() {
    return this._oidcDirectory.internalValue;
  }

  // pending_accounts_directory - computed: true, optional: true, required: false
  private _pendingAccountsDirectory = new GroupOwnedDirectoriesPendingAccountsDirectoryOutputReference(this, "pending_accounts_directory");
  public get pendingAccountsDirectory() {
    return this._pendingAccountsDirectory;
  }
  public putPendingAccountsDirectory(value: GroupOwnedDirectoriesPendingAccountsDirectory) {
    this._pendingAccountsDirectory.internalValue = value;
  }
  public resetPendingAccountsDirectory() {
    this._pendingAccountsDirectory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pendingAccountsDirectoryInput() {
    return this._pendingAccountsDirectory.internalValue;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupOwnedDirectoriesPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // restrict2fa - computed: true, optional: true, required: false
  private _restrict2Fa?: boolean | cdktf.IResolvable; 
  public get restrict2Fa() {
    return this.getBooleanAttribute('restrict2fa');
  }
  public set restrict2Fa(value: boolean | cdktf.IResolvable) {
    this._restrict2Fa = value;
  }
  public resetRestrict2Fa() {
    this._restrict2Fa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrict2FaInput() {
    return this._restrict2Fa;
  }

  // rotating_password - computed: true, optional: false, required: true
  private _rotatingPassword?: string; 
  public get rotatingPassword() {
    return this.getStringAttribute('rotating_password');
  }
  public set rotatingPassword(value: string) {
    this._rotatingPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rotatingPasswordInput() {
    return this._rotatingPassword;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // username_customizable - computed: true, optional: true, required: false
  private _usernameCustomizable?: boolean | cdktf.IResolvable; 
  public get usernameCustomizable() {
    return this.getBooleanAttribute('username_customizable');
  }
  public set usernameCustomizable(value: boolean | cdktf.IResolvable) {
    this._usernameCustomizable = value;
  }
  public resetUsernameCustomizable() {
    this._usernameCustomizable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameCustomizableInput() {
    return this._usernameCustomizable;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class GroupOwnedDirectoriesList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedDirectories[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedDirectoriesOutputReference {
    return new GroupOwnedDirectoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedGroupsOnSystemItemsLinks {
}

export function groupOwnedGroupsOnSystemItemsLinksToTerraform(struct?: GroupOwnedGroupsOnSystemItemsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedGroupsOnSystemItemsLinksToHclTerraform(struct?: GroupOwnedGroupsOnSystemItemsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedGroupsOnSystemItemsLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedGroupsOnSystemItemsLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedGroupsOnSystemItemsLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupOwnedGroupsOnSystemItemsLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedGroupsOnSystemItemsLinksOutputReference {
    return new GroupOwnedGroupsOnSystemItemsLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedGroupsOnSystemItemsOwnerLinks {
}

export function groupOwnedGroupsOnSystemItemsOwnerLinksToTerraform(struct?: GroupOwnedGroupsOnSystemItemsOwnerLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedGroupsOnSystemItemsOwnerLinksToHclTerraform(struct?: GroupOwnedGroupsOnSystemItemsOwnerLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedGroupsOnSystemItemsOwnerLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedGroupsOnSystemItemsOwnerLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedGroupsOnSystemItemsOwnerLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupOwnedGroupsOnSystemItemsOwnerLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedGroupsOnSystemItemsOwnerLinksOutputReference {
    return new GroupOwnedGroupsOnSystemItemsOwnerLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedGroupsOnSystemItemsOwnerOrganizationalUnitLinks {
}

export function groupOwnedGroupsOnSystemItemsOwnerOrganizationalUnitLinksToTerraform(struct?: GroupOwnedGroupsOnSystemItemsOwnerOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedGroupsOnSystemItemsOwnerOrganizationalUnitLinksToHclTerraform(struct?: GroupOwnedGroupsOnSystemItemsOwnerOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedGroupsOnSystemItemsOwnerOrganizationalUnitLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedGroupsOnSystemItemsOwnerOrganizationalUnitLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedGroupsOnSystemItemsOwnerOrganizationalUnitLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupOwnedGroupsOnSystemItemsOwnerOrganizationalUnitLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedGroupsOnSystemItemsOwnerOrganizationalUnitLinksOutputReference {
    return new GroupOwnedGroupsOnSystemItemsOwnerOrganizationalUnitLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedGroupsOnSystemItemsOwnerOrganizationalUnitPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupOwnedGroupsOnSystemItemsOwnerOrganizationalUnitPermissionsToTerraform(struct?: GroupOwnedGroupsOnSystemItemsOwnerOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupOwnedGroupsOnSystemItemsOwnerOrganizationalUnitPermissionsToHclTerraform(struct?: GroupOwnedGroupsOnSystemItemsOwnerOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedGroupsOnSystemItemsOwnerOrganizationalUnitPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedGroupsOnSystemItemsOwnerOrganizationalUnitPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedGroupsOnSystemItemsOwnerOrganizationalUnitPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupOwnedGroupsOnSystemItemsOwnerOrganizationalUnitPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedGroupsOnSystemItemsOwnerOrganizationalUnitPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedGroupsOnSystemItemsOwnerOrganizationalUnitPermissionsOutputReference {
    return new GroupOwnedGroupsOnSystemItemsOwnerOrganizationalUnitPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedGroupsOnSystemItemsOwnerOrganizationalUnit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

export function groupOwnedGroupsOnSystemItemsOwnerOrganizationalUnitToTerraform(struct?: GroupOwnedGroupsOnSystemItemsOwnerOrganizationalUnit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function groupOwnedGroupsOnSystemItemsOwnerOrganizationalUnitToHclTerraform(struct?: GroupOwnedGroupsOnSystemItemsOwnerOrganizationalUnit | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedGroupsOnSystemItemsOwnerOrganizationalUnitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedGroupsOnSystemItemsOwnerOrganizationalUnit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedGroupsOnSystemItemsOwnerOrganizationalUnit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupOwnedGroupsOnSystemItemsOwnerOrganizationalUnitLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupOwnedGroupsOnSystemItemsOwnerOrganizationalUnitPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupOwnedGroupsOnSystemItemsOwnerPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupOwnedGroupsOnSystemItemsOwnerPermissionsToTerraform(struct?: GroupOwnedGroupsOnSystemItemsOwnerPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupOwnedGroupsOnSystemItemsOwnerPermissionsToHclTerraform(struct?: GroupOwnedGroupsOnSystemItemsOwnerPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedGroupsOnSystemItemsOwnerPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedGroupsOnSystemItemsOwnerPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedGroupsOnSystemItemsOwnerPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupOwnedGroupsOnSystemItemsOwnerPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedGroupsOnSystemItemsOwnerPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedGroupsOnSystemItemsOwnerPermissionsOutputReference {
    return new GroupOwnedGroupsOnSystemItemsOwnerPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedGroupsOnSystemItemsOwner {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#organizational_unit Group#organizational_unit}
  */
  readonly organizationalUnit?: GroupOwnedGroupsOnSystemItemsOwnerOrganizationalUnit;
}

export function groupOwnedGroupsOnSystemItemsOwnerToTerraform(struct?: GroupOwnedGroupsOnSystemItemsOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    organizational_unit: groupOwnedGroupsOnSystemItemsOwnerOrganizationalUnitToTerraform(struct!.organizationalUnit),
  }
}


export function groupOwnedGroupsOnSystemItemsOwnerToHclTerraform(struct?: GroupOwnedGroupsOnSystemItemsOwner): any {
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
    organizational_unit: {
      value: groupOwnedGroupsOnSystemItemsOwnerOrganizationalUnitToHclTerraform(struct!.organizationalUnit),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupOwnedGroupsOnSystemItemsOwnerOrganizationalUnit",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedGroupsOnSystemItemsOwnerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedGroupsOnSystemItemsOwner | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._organizationalUnit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnit = this._organizationalUnit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedGroupsOnSystemItemsOwner | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._organizationalUnit.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._organizationalUnit.internalValue = value.organizationalUnit;
    }
  }

  // admin - computed: true, optional: false, required: false
  public get admin() {
    return this.getBooleanAttribute('admin');
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupOwnedGroupsOnSystemItemsOwnerLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // organizational_unit - computed: true, optional: true, required: false
  private _organizationalUnit = new GroupOwnedGroupsOnSystemItemsOwnerOrganizationalUnitOutputReference(this, "organizational_unit");
  public get organizationalUnit() {
    return this._organizationalUnit;
  }
  public putOrganizationalUnit(value: GroupOwnedGroupsOnSystemItemsOwnerOrganizationalUnit) {
    this._organizationalUnit.internalValue = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit.internalValue;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupOwnedGroupsOnSystemItemsOwnerPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupOwnedGroupsOnSystemItemsPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupOwnedGroupsOnSystemItemsPermissionsToTerraform(struct?: GroupOwnedGroupsOnSystemItemsPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupOwnedGroupsOnSystemItemsPermissionsToHclTerraform(struct?: GroupOwnedGroupsOnSystemItemsPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedGroupsOnSystemItemsPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedGroupsOnSystemItemsPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedGroupsOnSystemItemsPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupOwnedGroupsOnSystemItemsPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedGroupsOnSystemItemsPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedGroupsOnSystemItemsPermissionsOutputReference {
    return new GroupOwnedGroupsOnSystemItemsPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedGroupsOnSystemItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name_in_system Group#name_in_system}
  */
  readonly nameInSystem: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#owner Group#owner}
  */
  readonly owner: GroupOwnedGroupsOnSystemItemsOwner;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#provisioning_enabled Group#provisioning_enabled}
  */
  readonly provisioningEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#type Group#type}
  */
  readonly type: string;
}

export function groupOwnedGroupsOnSystemItemsToTerraform(struct?: GroupOwnedGroupsOnSystemItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name_in_system: cdktf.stringToTerraform(struct!.nameInSystem),
    owner: groupOwnedGroupsOnSystemItemsOwnerToTerraform(struct!.owner),
    provisioning_enabled: cdktf.booleanToTerraform(struct!.provisioningEnabled),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function groupOwnedGroupsOnSystemItemsToHclTerraform(struct?: GroupOwnedGroupsOnSystemItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name_in_system: {
      value: cdktf.stringToHclTerraform(struct!.nameInSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner: {
      value: groupOwnedGroupsOnSystemItemsOwnerToHclTerraform(struct!.owner),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupOwnedGroupsOnSystemItemsOwner",
    },
    provisioning_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.provisioningEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class GroupOwnedGroupsOnSystemItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedGroupsOnSystemItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nameInSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameInSystem = this._nameInSystem;
    }
    if (this._owner?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner?.internalValue;
    }
    if (this._provisioningEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisioningEnabled = this._provisioningEnabled;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedGroupsOnSystemItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nameInSystem = undefined;
      this._owner.internalValue = undefined;
      this._provisioningEnabled = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nameInSystem = value.nameInSystem;
      this._owner.internalValue = value.owner;
      this._provisioningEnabled = value.provisioningEnabled;
      this._type = value.type;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupOwnedGroupsOnSystemItemsLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name_in_system - computed: true, optional: false, required: true
  private _nameInSystem?: string; 
  public get nameInSystem() {
    return this.getStringAttribute('name_in_system');
  }
  public set nameInSystem(value: string) {
    this._nameInSystem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInSystemInput() {
    return this._nameInSystem;
  }

  // owner - computed: true, optional: false, required: true
  private _owner = new GroupOwnedGroupsOnSystemItemsOwnerOutputReference(this, "owner");
  public get owner() {
    return this._owner;
  }
  public putOwner(value: GroupOwnedGroupsOnSystemItemsOwner) {
    this._owner.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner.internalValue;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupOwnedGroupsOnSystemItemsPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // provisioning_enabled - computed: true, optional: true, required: false
  private _provisioningEnabled?: boolean | cdktf.IResolvable; 
  public get provisioningEnabled() {
    return this.getBooleanAttribute('provisioning_enabled');
  }
  public set provisioningEnabled(value: boolean | cdktf.IResolvable) {
    this._provisioningEnabled = value;
  }
  public resetProvisioningEnabled() {
    this._provisioningEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningEnabledInput() {
    return this._provisioningEnabled;
  }

  // short_name_in_system - computed: true, optional: false, required: false
  public get shortNameInSystem() {
    return this.getStringAttribute('short_name_in_system');
  }

  // type - computed: true, optional: false, required: true
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

export class GroupOwnedGroupsOnSystemItemsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedGroupsOnSystemItems[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedGroupsOnSystemItemsOutputReference {
    return new GroupOwnedGroupsOnSystemItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedGroupsOnSystem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#items Group#items}
  */
  readonly items?: GroupOwnedGroupsOnSystemItems[] | cdktf.IResolvable;
}

export function groupOwnedGroupsOnSystemToTerraform(struct?: GroupOwnedGroupsOnSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(groupOwnedGroupsOnSystemItemsToTerraform, false)(struct!.items),
  }
}


export function groupOwnedGroupsOnSystemToHclTerraform(struct?: GroupOwnedGroupsOnSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(groupOwnedGroupsOnSystemItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "GroupOwnedGroupsOnSystemItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedGroupsOnSystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedGroupsOnSystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedGroupsOnSystem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: true, optional: true, required: false
  private _items = new GroupOwnedGroupsOnSystemItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: GroupOwnedGroupsOnSystemItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }

  // unlinked_count - computed: true, optional: false, required: false
  public get unlinkedCount() {
    return this.getNumberAttribute('unlinked_count');
  }
}
export interface GroupOwnedOrganizationalUnitsAuditorGroupLinks {
}

export function groupOwnedOrganizationalUnitsAuditorGroupLinksToTerraform(struct?: GroupOwnedOrganizationalUnitsAuditorGroupLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedOrganizationalUnitsAuditorGroupLinksToHclTerraform(struct?: GroupOwnedOrganizationalUnitsAuditorGroupLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedOrganizationalUnitsAuditorGroupLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedOrganizationalUnitsAuditorGroupLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedOrganizationalUnitsAuditorGroupLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupOwnedOrganizationalUnitsAuditorGroupLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedOrganizationalUnitsAuditorGroupLinksOutputReference {
    return new GroupOwnedOrganizationalUnitsAuditorGroupLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedOrganizationalUnitsAuditorGroupOrganizationalUnitLinks {
}

export function groupOwnedOrganizationalUnitsAuditorGroupOrganizationalUnitLinksToTerraform(struct?: GroupOwnedOrganizationalUnitsAuditorGroupOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedOrganizationalUnitsAuditorGroupOrganizationalUnitLinksToHclTerraform(struct?: GroupOwnedOrganizationalUnitsAuditorGroupOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedOrganizationalUnitsAuditorGroupOrganizationalUnitLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedOrganizationalUnitsAuditorGroupOrganizationalUnitLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedOrganizationalUnitsAuditorGroupOrganizationalUnitLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupOwnedOrganizationalUnitsAuditorGroupOrganizationalUnitLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedOrganizationalUnitsAuditorGroupOrganizationalUnitLinksOutputReference {
    return new GroupOwnedOrganizationalUnitsAuditorGroupOrganizationalUnitLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedOrganizationalUnitsAuditorGroupOrganizationalUnitPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupOwnedOrganizationalUnitsAuditorGroupOrganizationalUnitPermissionsToTerraform(struct?: GroupOwnedOrganizationalUnitsAuditorGroupOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupOwnedOrganizationalUnitsAuditorGroupOrganizationalUnitPermissionsToHclTerraform(struct?: GroupOwnedOrganizationalUnitsAuditorGroupOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedOrganizationalUnitsAuditorGroupOrganizationalUnitPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedOrganizationalUnitsAuditorGroupOrganizationalUnitPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedOrganizationalUnitsAuditorGroupOrganizationalUnitPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupOwnedOrganizationalUnitsAuditorGroupOrganizationalUnitPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedOrganizationalUnitsAuditorGroupOrganizationalUnitPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedOrganizationalUnitsAuditorGroupOrganizationalUnitPermissionsOutputReference {
    return new GroupOwnedOrganizationalUnitsAuditorGroupOrganizationalUnitPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedOrganizationalUnitsAuditorGroupOrganizationalUnit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

export function groupOwnedOrganizationalUnitsAuditorGroupOrganizationalUnitToTerraform(struct?: GroupOwnedOrganizationalUnitsAuditorGroupOrganizationalUnit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function groupOwnedOrganizationalUnitsAuditorGroupOrganizationalUnitToHclTerraform(struct?: GroupOwnedOrganizationalUnitsAuditorGroupOrganizationalUnit | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedOrganizationalUnitsAuditorGroupOrganizationalUnitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedOrganizationalUnitsAuditorGroupOrganizationalUnit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedOrganizationalUnitsAuditorGroupOrganizationalUnit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupOwnedOrganizationalUnitsAuditorGroupOrganizationalUnitLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupOwnedOrganizationalUnitsAuditorGroupOrganizationalUnitPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupOwnedOrganizationalUnitsAuditorGroupPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupOwnedOrganizationalUnitsAuditorGroupPermissionsToTerraform(struct?: GroupOwnedOrganizationalUnitsAuditorGroupPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupOwnedOrganizationalUnitsAuditorGroupPermissionsToHclTerraform(struct?: GroupOwnedOrganizationalUnitsAuditorGroupPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedOrganizationalUnitsAuditorGroupPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedOrganizationalUnitsAuditorGroupPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedOrganizationalUnitsAuditorGroupPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupOwnedOrganizationalUnitsAuditorGroupPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedOrganizationalUnitsAuditorGroupPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedOrganizationalUnitsAuditorGroupPermissionsOutputReference {
    return new GroupOwnedOrganizationalUnitsAuditorGroupPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedOrganizationalUnitsAuditorGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#organizational_unit Group#organizational_unit}
  */
  readonly organizationalUnit?: GroupOwnedOrganizationalUnitsAuditorGroupOrganizationalUnit;
}

export function groupOwnedOrganizationalUnitsAuditorGroupToTerraform(struct?: GroupOwnedOrganizationalUnitsAuditorGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    organizational_unit: groupOwnedOrganizationalUnitsAuditorGroupOrganizationalUnitToTerraform(struct!.organizationalUnit),
  }
}


export function groupOwnedOrganizationalUnitsAuditorGroupToHclTerraform(struct?: GroupOwnedOrganizationalUnitsAuditorGroup | cdktf.IResolvable): any {
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
    organizational_unit: {
      value: groupOwnedOrganizationalUnitsAuditorGroupOrganizationalUnitToHclTerraform(struct!.organizationalUnit),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupOwnedOrganizationalUnitsAuditorGroupOrganizationalUnit",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedOrganizationalUnitsAuditorGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedOrganizationalUnitsAuditorGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._organizationalUnit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnit = this._organizationalUnit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedOrganizationalUnitsAuditorGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._organizationalUnit.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._organizationalUnit.internalValue = value.organizationalUnit;
    }
  }

  // admin - computed: true, optional: false, required: false
  public get admin() {
    return this.getBooleanAttribute('admin');
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupOwnedOrganizationalUnitsAuditorGroupLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // organizational_unit - computed: true, optional: true, required: false
  private _organizationalUnit = new GroupOwnedOrganizationalUnitsAuditorGroupOrganizationalUnitOutputReference(this, "organizational_unit");
  public get organizationalUnit() {
    return this._organizationalUnit;
  }
  public putOrganizationalUnit(value: GroupOwnedOrganizationalUnitsAuditorGroupOrganizationalUnit) {
    this._organizationalUnit.internalValue = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit.internalValue;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupOwnedOrganizationalUnitsAuditorGroupPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupOwnedOrganizationalUnitsCreateGroupApproveGroupLinks {
}

export function groupOwnedOrganizationalUnitsCreateGroupApproveGroupLinksToTerraform(struct?: GroupOwnedOrganizationalUnitsCreateGroupApproveGroupLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedOrganizationalUnitsCreateGroupApproveGroupLinksToHclTerraform(struct?: GroupOwnedOrganizationalUnitsCreateGroupApproveGroupLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedOrganizationalUnitsCreateGroupApproveGroupLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedOrganizationalUnitsCreateGroupApproveGroupLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedOrganizationalUnitsCreateGroupApproveGroupLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupOwnedOrganizationalUnitsCreateGroupApproveGroupLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedOrganizationalUnitsCreateGroupApproveGroupLinksOutputReference {
    return new GroupOwnedOrganizationalUnitsCreateGroupApproveGroupLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedOrganizationalUnitsCreateGroupApproveGroupOrganizationalUnitLinks {
}

export function groupOwnedOrganizationalUnitsCreateGroupApproveGroupOrganizationalUnitLinksToTerraform(struct?: GroupOwnedOrganizationalUnitsCreateGroupApproveGroupOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedOrganizationalUnitsCreateGroupApproveGroupOrganizationalUnitLinksToHclTerraform(struct?: GroupOwnedOrganizationalUnitsCreateGroupApproveGroupOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedOrganizationalUnitsCreateGroupApproveGroupOrganizationalUnitLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedOrganizationalUnitsCreateGroupApproveGroupOrganizationalUnitLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedOrganizationalUnitsCreateGroupApproveGroupOrganizationalUnitLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupOwnedOrganizationalUnitsCreateGroupApproveGroupOrganizationalUnitLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedOrganizationalUnitsCreateGroupApproveGroupOrganizationalUnitLinksOutputReference {
    return new GroupOwnedOrganizationalUnitsCreateGroupApproveGroupOrganizationalUnitLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedOrganizationalUnitsCreateGroupApproveGroupOrganizationalUnitPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupOwnedOrganizationalUnitsCreateGroupApproveGroupOrganizationalUnitPermissionsToTerraform(struct?: GroupOwnedOrganizationalUnitsCreateGroupApproveGroupOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupOwnedOrganizationalUnitsCreateGroupApproveGroupOrganizationalUnitPermissionsToHclTerraform(struct?: GroupOwnedOrganizationalUnitsCreateGroupApproveGroupOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedOrganizationalUnitsCreateGroupApproveGroupOrganizationalUnitPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedOrganizationalUnitsCreateGroupApproveGroupOrganizationalUnitPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedOrganizationalUnitsCreateGroupApproveGroupOrganizationalUnitPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupOwnedOrganizationalUnitsCreateGroupApproveGroupOrganizationalUnitPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedOrganizationalUnitsCreateGroupApproveGroupOrganizationalUnitPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedOrganizationalUnitsCreateGroupApproveGroupOrganizationalUnitPermissionsOutputReference {
    return new GroupOwnedOrganizationalUnitsCreateGroupApproveGroupOrganizationalUnitPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedOrganizationalUnitsCreateGroupApproveGroupOrganizationalUnit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

export function groupOwnedOrganizationalUnitsCreateGroupApproveGroupOrganizationalUnitToTerraform(struct?: GroupOwnedOrganizationalUnitsCreateGroupApproveGroupOrganizationalUnit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function groupOwnedOrganizationalUnitsCreateGroupApproveGroupOrganizationalUnitToHclTerraform(struct?: GroupOwnedOrganizationalUnitsCreateGroupApproveGroupOrganizationalUnit | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedOrganizationalUnitsCreateGroupApproveGroupOrganizationalUnitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedOrganizationalUnitsCreateGroupApproveGroupOrganizationalUnit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedOrganizationalUnitsCreateGroupApproveGroupOrganizationalUnit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupOwnedOrganizationalUnitsCreateGroupApproveGroupOrganizationalUnitLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupOwnedOrganizationalUnitsCreateGroupApproveGroupOrganizationalUnitPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupOwnedOrganizationalUnitsCreateGroupApproveGroupPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupOwnedOrganizationalUnitsCreateGroupApproveGroupPermissionsToTerraform(struct?: GroupOwnedOrganizationalUnitsCreateGroupApproveGroupPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupOwnedOrganizationalUnitsCreateGroupApproveGroupPermissionsToHclTerraform(struct?: GroupOwnedOrganizationalUnitsCreateGroupApproveGroupPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedOrganizationalUnitsCreateGroupApproveGroupPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedOrganizationalUnitsCreateGroupApproveGroupPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedOrganizationalUnitsCreateGroupApproveGroupPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupOwnedOrganizationalUnitsCreateGroupApproveGroupPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedOrganizationalUnitsCreateGroupApproveGroupPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedOrganizationalUnitsCreateGroupApproveGroupPermissionsOutputReference {
    return new GroupOwnedOrganizationalUnitsCreateGroupApproveGroupPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedOrganizationalUnitsCreateGroupApproveGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#organizational_unit Group#organizational_unit}
  */
  readonly organizationalUnit?: GroupOwnedOrganizationalUnitsCreateGroupApproveGroupOrganizationalUnit;
}

export function groupOwnedOrganizationalUnitsCreateGroupApproveGroupToTerraform(struct?: GroupOwnedOrganizationalUnitsCreateGroupApproveGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    organizational_unit: groupOwnedOrganizationalUnitsCreateGroupApproveGroupOrganizationalUnitToTerraform(struct!.organizationalUnit),
  }
}


export function groupOwnedOrganizationalUnitsCreateGroupApproveGroupToHclTerraform(struct?: GroupOwnedOrganizationalUnitsCreateGroupApproveGroup | cdktf.IResolvable): any {
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
    organizational_unit: {
      value: groupOwnedOrganizationalUnitsCreateGroupApproveGroupOrganizationalUnitToHclTerraform(struct!.organizationalUnit),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupOwnedOrganizationalUnitsCreateGroupApproveGroupOrganizationalUnit",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedOrganizationalUnitsCreateGroupApproveGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedOrganizationalUnitsCreateGroupApproveGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._organizationalUnit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnit = this._organizationalUnit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedOrganizationalUnitsCreateGroupApproveGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._organizationalUnit.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._organizationalUnit.internalValue = value.organizationalUnit;
    }
  }

  // admin - computed: true, optional: false, required: false
  public get admin() {
    return this.getBooleanAttribute('admin');
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupOwnedOrganizationalUnitsCreateGroupApproveGroupLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // organizational_unit - computed: true, optional: true, required: false
  private _organizationalUnit = new GroupOwnedOrganizationalUnitsCreateGroupApproveGroupOrganizationalUnitOutputReference(this, "organizational_unit");
  public get organizationalUnit() {
    return this._organizationalUnit;
  }
  public putOrganizationalUnit(value: GroupOwnedOrganizationalUnitsCreateGroupApproveGroupOrganizationalUnit) {
    this._organizationalUnit.internalValue = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit.internalValue;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupOwnedOrganizationalUnitsCreateGroupApproveGroupPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupLinks {
}

export function groupOwnedOrganizationalUnitsEnableTechAdminApproveGroupLinksToTerraform(struct?: GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedOrganizationalUnitsEnableTechAdminApproveGroupLinksToHclTerraform(struct?: GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupLinksOutputReference {
    return new GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupOrganizationalUnitLinks {
}

export function groupOwnedOrganizationalUnitsEnableTechAdminApproveGroupOrganizationalUnitLinksToTerraform(struct?: GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedOrganizationalUnitsEnableTechAdminApproveGroupOrganizationalUnitLinksToHclTerraform(struct?: GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupOrganizationalUnitLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupOrganizationalUnitLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupOrganizationalUnitLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupOrganizationalUnitLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupOrganizationalUnitLinksOutputReference {
    return new GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupOrganizationalUnitLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupOrganizationalUnitPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupOwnedOrganizationalUnitsEnableTechAdminApproveGroupOrganizationalUnitPermissionsToTerraform(struct?: GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupOwnedOrganizationalUnitsEnableTechAdminApproveGroupOrganizationalUnitPermissionsToHclTerraform(struct?: GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupOrganizationalUnitPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupOrganizationalUnitPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupOrganizationalUnitPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupOrganizationalUnitPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupOrganizationalUnitPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupOrganizationalUnitPermissionsOutputReference {
    return new GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupOrganizationalUnitPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupOrganizationalUnit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

export function groupOwnedOrganizationalUnitsEnableTechAdminApproveGroupOrganizationalUnitToTerraform(struct?: GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupOrganizationalUnit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function groupOwnedOrganizationalUnitsEnableTechAdminApproveGroupOrganizationalUnitToHclTerraform(struct?: GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupOrganizationalUnit | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupOrganizationalUnitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupOrganizationalUnit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupOrganizationalUnit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupOrganizationalUnitLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupOrganizationalUnitPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupOwnedOrganizationalUnitsEnableTechAdminApproveGroupPermissionsToTerraform(struct?: GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupOwnedOrganizationalUnitsEnableTechAdminApproveGroupPermissionsToHclTerraform(struct?: GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupPermissionsOutputReference {
    return new GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#organizational_unit Group#organizational_unit}
  */
  readonly organizationalUnit?: GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupOrganizationalUnit;
}

export function groupOwnedOrganizationalUnitsEnableTechAdminApproveGroupToTerraform(struct?: GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    organizational_unit: groupOwnedOrganizationalUnitsEnableTechAdminApproveGroupOrganizationalUnitToTerraform(struct!.organizationalUnit),
  }
}


export function groupOwnedOrganizationalUnitsEnableTechAdminApproveGroupToHclTerraform(struct?: GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroup | cdktf.IResolvable): any {
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
    organizational_unit: {
      value: groupOwnedOrganizationalUnitsEnableTechAdminApproveGroupOrganizationalUnitToHclTerraform(struct!.organizationalUnit),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupOrganizationalUnit",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._organizationalUnit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnit = this._organizationalUnit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._organizationalUnit.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._organizationalUnit.internalValue = value.organizationalUnit;
    }
  }

  // admin - computed: true, optional: false, required: false
  public get admin() {
    return this.getBooleanAttribute('admin');
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // organizational_unit - computed: true, optional: true, required: false
  private _organizationalUnit = new GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupOrganizationalUnitOutputReference(this, "organizational_unit");
  public get organizationalUnit() {
    return this._organizationalUnit;
  }
  public putOrganizationalUnit(value: GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupOrganizationalUnit) {
    this._organizationalUnit.internalValue = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit.internalValue;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupOwnedOrganizationalUnitsLinks {
}

export function groupOwnedOrganizationalUnitsLinksToTerraform(struct?: GroupOwnedOrganizationalUnitsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedOrganizationalUnitsLinksToHclTerraform(struct?: GroupOwnedOrganizationalUnitsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedOrganizationalUnitsLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedOrganizationalUnitsLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedOrganizationalUnitsLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupOwnedOrganizationalUnitsLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedOrganizationalUnitsLinksOutputReference {
    return new GroupOwnedOrganizationalUnitsLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedOrganizationalUnitsOwnerLinks {
}

export function groupOwnedOrganizationalUnitsOwnerLinksToTerraform(struct?: GroupOwnedOrganizationalUnitsOwnerLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedOrganizationalUnitsOwnerLinksToHclTerraform(struct?: GroupOwnedOrganizationalUnitsOwnerLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedOrganizationalUnitsOwnerLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedOrganizationalUnitsOwnerLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedOrganizationalUnitsOwnerLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupOwnedOrganizationalUnitsOwnerLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedOrganizationalUnitsOwnerLinksOutputReference {
    return new GroupOwnedOrganizationalUnitsOwnerLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedOrganizationalUnitsOwnerOrganizationalUnitLinks {
}

export function groupOwnedOrganizationalUnitsOwnerOrganizationalUnitLinksToTerraform(struct?: GroupOwnedOrganizationalUnitsOwnerOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedOrganizationalUnitsOwnerOrganizationalUnitLinksToHclTerraform(struct?: GroupOwnedOrganizationalUnitsOwnerOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedOrganizationalUnitsOwnerOrganizationalUnitLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedOrganizationalUnitsOwnerOrganizationalUnitLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedOrganizationalUnitsOwnerOrganizationalUnitLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupOwnedOrganizationalUnitsOwnerOrganizationalUnitLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedOrganizationalUnitsOwnerOrganizationalUnitLinksOutputReference {
    return new GroupOwnedOrganizationalUnitsOwnerOrganizationalUnitLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedOrganizationalUnitsOwnerOrganizationalUnitPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupOwnedOrganizationalUnitsOwnerOrganizationalUnitPermissionsToTerraform(struct?: GroupOwnedOrganizationalUnitsOwnerOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupOwnedOrganizationalUnitsOwnerOrganizationalUnitPermissionsToHclTerraform(struct?: GroupOwnedOrganizationalUnitsOwnerOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedOrganizationalUnitsOwnerOrganizationalUnitPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedOrganizationalUnitsOwnerOrganizationalUnitPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedOrganizationalUnitsOwnerOrganizationalUnitPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupOwnedOrganizationalUnitsOwnerOrganizationalUnitPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedOrganizationalUnitsOwnerOrganizationalUnitPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedOrganizationalUnitsOwnerOrganizationalUnitPermissionsOutputReference {
    return new GroupOwnedOrganizationalUnitsOwnerOrganizationalUnitPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedOrganizationalUnitsOwnerOrganizationalUnit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

export function groupOwnedOrganizationalUnitsOwnerOrganizationalUnitToTerraform(struct?: GroupOwnedOrganizationalUnitsOwnerOrganizationalUnit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function groupOwnedOrganizationalUnitsOwnerOrganizationalUnitToHclTerraform(struct?: GroupOwnedOrganizationalUnitsOwnerOrganizationalUnit | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedOrganizationalUnitsOwnerOrganizationalUnitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedOrganizationalUnitsOwnerOrganizationalUnit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedOrganizationalUnitsOwnerOrganizationalUnit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupOwnedOrganizationalUnitsOwnerOrganizationalUnitLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupOwnedOrganizationalUnitsOwnerOrganizationalUnitPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupOwnedOrganizationalUnitsOwnerPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupOwnedOrganizationalUnitsOwnerPermissionsToTerraform(struct?: GroupOwnedOrganizationalUnitsOwnerPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupOwnedOrganizationalUnitsOwnerPermissionsToHclTerraform(struct?: GroupOwnedOrganizationalUnitsOwnerPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedOrganizationalUnitsOwnerPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedOrganizationalUnitsOwnerPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedOrganizationalUnitsOwnerPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupOwnedOrganizationalUnitsOwnerPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedOrganizationalUnitsOwnerPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedOrganizationalUnitsOwnerPermissionsOutputReference {
    return new GroupOwnedOrganizationalUnitsOwnerPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedOrganizationalUnitsOwner {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#organizational_unit Group#organizational_unit}
  */
  readonly organizationalUnit?: GroupOwnedOrganizationalUnitsOwnerOrganizationalUnit;
}

export function groupOwnedOrganizationalUnitsOwnerToTerraform(struct?: GroupOwnedOrganizationalUnitsOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    organizational_unit: groupOwnedOrganizationalUnitsOwnerOrganizationalUnitToTerraform(struct!.organizationalUnit),
  }
}


export function groupOwnedOrganizationalUnitsOwnerToHclTerraform(struct?: GroupOwnedOrganizationalUnitsOwner): any {
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
    organizational_unit: {
      value: groupOwnedOrganizationalUnitsOwnerOrganizationalUnitToHclTerraform(struct!.organizationalUnit),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupOwnedOrganizationalUnitsOwnerOrganizationalUnit",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedOrganizationalUnitsOwnerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedOrganizationalUnitsOwner | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._organizationalUnit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnit = this._organizationalUnit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedOrganizationalUnitsOwner | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._organizationalUnit.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._organizationalUnit.internalValue = value.organizationalUnit;
    }
  }

  // admin - computed: true, optional: false, required: false
  public get admin() {
    return this.getBooleanAttribute('admin');
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupOwnedOrganizationalUnitsOwnerLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // organizational_unit - computed: true, optional: true, required: false
  private _organizationalUnit = new GroupOwnedOrganizationalUnitsOwnerOrganizationalUnitOutputReference(this, "organizational_unit");
  public get organizationalUnit() {
    return this._organizationalUnit;
  }
  public putOrganizationalUnit(value: GroupOwnedOrganizationalUnitsOwnerOrganizationalUnit) {
    this._organizationalUnit.internalValue = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit.internalValue;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupOwnedOrganizationalUnitsOwnerPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupOwnedOrganizationalUnitsParentLinks {
}

export function groupOwnedOrganizationalUnitsParentLinksToTerraform(struct?: GroupOwnedOrganizationalUnitsParentLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedOrganizationalUnitsParentLinksToHclTerraform(struct?: GroupOwnedOrganizationalUnitsParentLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedOrganizationalUnitsParentLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedOrganizationalUnitsParentLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedOrganizationalUnitsParentLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupOwnedOrganizationalUnitsParentLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedOrganizationalUnitsParentLinksOutputReference {
    return new GroupOwnedOrganizationalUnitsParentLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedOrganizationalUnitsParentPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupOwnedOrganizationalUnitsParentPermissionsToTerraform(struct?: GroupOwnedOrganizationalUnitsParentPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupOwnedOrganizationalUnitsParentPermissionsToHclTerraform(struct?: GroupOwnedOrganizationalUnitsParentPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedOrganizationalUnitsParentPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedOrganizationalUnitsParentPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedOrganizationalUnitsParentPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupOwnedOrganizationalUnitsParentPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedOrganizationalUnitsParentPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedOrganizationalUnitsParentPermissionsOutputReference {
    return new GroupOwnedOrganizationalUnitsParentPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedOrganizationalUnitsParent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

export function groupOwnedOrganizationalUnitsParentToTerraform(struct?: GroupOwnedOrganizationalUnitsParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function groupOwnedOrganizationalUnitsParentToHclTerraform(struct?: GroupOwnedOrganizationalUnitsParent): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedOrganizationalUnitsParentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedOrganizationalUnitsParent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedOrganizationalUnitsParent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupOwnedOrganizationalUnitsParentLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupOwnedOrganizationalUnitsParentPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupOwnedOrganizationalUnitsPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupOwnedOrganizationalUnitsPermissionsToTerraform(struct?: GroupOwnedOrganizationalUnitsPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupOwnedOrganizationalUnitsPermissionsToHclTerraform(struct?: GroupOwnedOrganizationalUnitsPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedOrganizationalUnitsPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedOrganizationalUnitsPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedOrganizationalUnitsPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupOwnedOrganizationalUnitsPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedOrganizationalUnitsPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedOrganizationalUnitsPermissionsOutputReference {
    return new GroupOwnedOrganizationalUnitsPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedOrganizationalUnitsRecoveryFallbackGroupLinks {
}

export function groupOwnedOrganizationalUnitsRecoveryFallbackGroupLinksToTerraform(struct?: GroupOwnedOrganizationalUnitsRecoveryFallbackGroupLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedOrganizationalUnitsRecoveryFallbackGroupLinksToHclTerraform(struct?: GroupOwnedOrganizationalUnitsRecoveryFallbackGroupLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedOrganizationalUnitsRecoveryFallbackGroupLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedOrganizationalUnitsRecoveryFallbackGroupLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedOrganizationalUnitsRecoveryFallbackGroupLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupOwnedOrganizationalUnitsRecoveryFallbackGroupLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedOrganizationalUnitsRecoveryFallbackGroupLinksOutputReference {
    return new GroupOwnedOrganizationalUnitsRecoveryFallbackGroupLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedOrganizationalUnitsRecoveryFallbackGroupOrganizationalUnitLinks {
}

export function groupOwnedOrganizationalUnitsRecoveryFallbackGroupOrganizationalUnitLinksToTerraform(struct?: GroupOwnedOrganizationalUnitsRecoveryFallbackGroupOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedOrganizationalUnitsRecoveryFallbackGroupOrganizationalUnitLinksToHclTerraform(struct?: GroupOwnedOrganizationalUnitsRecoveryFallbackGroupOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedOrganizationalUnitsRecoveryFallbackGroupOrganizationalUnitLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedOrganizationalUnitsRecoveryFallbackGroupOrganizationalUnitLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedOrganizationalUnitsRecoveryFallbackGroupOrganizationalUnitLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupOwnedOrganizationalUnitsRecoveryFallbackGroupOrganizationalUnitLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedOrganizationalUnitsRecoveryFallbackGroupOrganizationalUnitLinksOutputReference {
    return new GroupOwnedOrganizationalUnitsRecoveryFallbackGroupOrganizationalUnitLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedOrganizationalUnitsRecoveryFallbackGroupOrganizationalUnitPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupOwnedOrganizationalUnitsRecoveryFallbackGroupOrganizationalUnitPermissionsToTerraform(struct?: GroupOwnedOrganizationalUnitsRecoveryFallbackGroupOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupOwnedOrganizationalUnitsRecoveryFallbackGroupOrganizationalUnitPermissionsToHclTerraform(struct?: GroupOwnedOrganizationalUnitsRecoveryFallbackGroupOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedOrganizationalUnitsRecoveryFallbackGroupOrganizationalUnitPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedOrganizationalUnitsRecoveryFallbackGroupOrganizationalUnitPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedOrganizationalUnitsRecoveryFallbackGroupOrganizationalUnitPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupOwnedOrganizationalUnitsRecoveryFallbackGroupOrganizationalUnitPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedOrganizationalUnitsRecoveryFallbackGroupOrganizationalUnitPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedOrganizationalUnitsRecoveryFallbackGroupOrganizationalUnitPermissionsOutputReference {
    return new GroupOwnedOrganizationalUnitsRecoveryFallbackGroupOrganizationalUnitPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedOrganizationalUnitsRecoveryFallbackGroupOrganizationalUnit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

export function groupOwnedOrganizationalUnitsRecoveryFallbackGroupOrganizationalUnitToTerraform(struct?: GroupOwnedOrganizationalUnitsRecoveryFallbackGroupOrganizationalUnit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function groupOwnedOrganizationalUnitsRecoveryFallbackGroupOrganizationalUnitToHclTerraform(struct?: GroupOwnedOrganizationalUnitsRecoveryFallbackGroupOrganizationalUnit | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedOrganizationalUnitsRecoveryFallbackGroupOrganizationalUnitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedOrganizationalUnitsRecoveryFallbackGroupOrganizationalUnit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedOrganizationalUnitsRecoveryFallbackGroupOrganizationalUnit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupOwnedOrganizationalUnitsRecoveryFallbackGroupOrganizationalUnitLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupOwnedOrganizationalUnitsRecoveryFallbackGroupOrganizationalUnitPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupOwnedOrganizationalUnitsRecoveryFallbackGroupPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupOwnedOrganizationalUnitsRecoveryFallbackGroupPermissionsToTerraform(struct?: GroupOwnedOrganizationalUnitsRecoveryFallbackGroupPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupOwnedOrganizationalUnitsRecoveryFallbackGroupPermissionsToHclTerraform(struct?: GroupOwnedOrganizationalUnitsRecoveryFallbackGroupPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedOrganizationalUnitsRecoveryFallbackGroupPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedOrganizationalUnitsRecoveryFallbackGroupPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedOrganizationalUnitsRecoveryFallbackGroupPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupOwnedOrganizationalUnitsRecoveryFallbackGroupPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedOrganizationalUnitsRecoveryFallbackGroupPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedOrganizationalUnitsRecoveryFallbackGroupPermissionsOutputReference {
    return new GroupOwnedOrganizationalUnitsRecoveryFallbackGroupPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedOrganizationalUnitsRecoveryFallbackGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#organizational_unit Group#organizational_unit}
  */
  readonly organizationalUnit?: GroupOwnedOrganizationalUnitsRecoveryFallbackGroupOrganizationalUnit;
}

export function groupOwnedOrganizationalUnitsRecoveryFallbackGroupToTerraform(struct?: GroupOwnedOrganizationalUnitsRecoveryFallbackGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    organizational_unit: groupOwnedOrganizationalUnitsRecoveryFallbackGroupOrganizationalUnitToTerraform(struct!.organizationalUnit),
  }
}


export function groupOwnedOrganizationalUnitsRecoveryFallbackGroupToHclTerraform(struct?: GroupOwnedOrganizationalUnitsRecoveryFallbackGroup | cdktf.IResolvable): any {
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
    organizational_unit: {
      value: groupOwnedOrganizationalUnitsRecoveryFallbackGroupOrganizationalUnitToHclTerraform(struct!.organizationalUnit),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupOwnedOrganizationalUnitsRecoveryFallbackGroupOrganizationalUnit",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedOrganizationalUnitsRecoveryFallbackGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedOrganizationalUnitsRecoveryFallbackGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._organizationalUnit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnit = this._organizationalUnit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedOrganizationalUnitsRecoveryFallbackGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._organizationalUnit.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._organizationalUnit.internalValue = value.organizationalUnit;
    }
  }

  // admin - computed: true, optional: false, required: false
  public get admin() {
    return this.getBooleanAttribute('admin');
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupOwnedOrganizationalUnitsRecoveryFallbackGroupLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // organizational_unit - computed: true, optional: true, required: false
  private _organizationalUnit = new GroupOwnedOrganizationalUnitsRecoveryFallbackGroupOrganizationalUnitOutputReference(this, "organizational_unit");
  public get organizationalUnit() {
    return this._organizationalUnit;
  }
  public putOrganizationalUnit(value: GroupOwnedOrganizationalUnitsRecoveryFallbackGroupOrganizationalUnit) {
    this._organizationalUnit.internalValue = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit.internalValue;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupOwnedOrganizationalUnitsRecoveryFallbackGroupPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupLinks {
}

export function groupOwnedOrganizationalUnitsRemoveGroupApproveGroupLinksToTerraform(struct?: GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedOrganizationalUnitsRemoveGroupApproveGroupLinksToHclTerraform(struct?: GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupLinksOutputReference {
    return new GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupOrganizationalUnitLinks {
}

export function groupOwnedOrganizationalUnitsRemoveGroupApproveGroupOrganizationalUnitLinksToTerraform(struct?: GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedOrganizationalUnitsRemoveGroupApproveGroupOrganizationalUnitLinksToHclTerraform(struct?: GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupOrganizationalUnitLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupOrganizationalUnitLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupOrganizationalUnitLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupOrganizationalUnitLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupOrganizationalUnitLinksOutputReference {
    return new GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupOrganizationalUnitLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupOrganizationalUnitPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupOwnedOrganizationalUnitsRemoveGroupApproveGroupOrganizationalUnitPermissionsToTerraform(struct?: GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupOwnedOrganizationalUnitsRemoveGroupApproveGroupOrganizationalUnitPermissionsToHclTerraform(struct?: GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupOrganizationalUnitPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupOrganizationalUnitPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupOrganizationalUnitPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupOrganizationalUnitPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupOrganizationalUnitPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupOrganizationalUnitPermissionsOutputReference {
    return new GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupOrganizationalUnitPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupOrganizationalUnit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

export function groupOwnedOrganizationalUnitsRemoveGroupApproveGroupOrganizationalUnitToTerraform(struct?: GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupOrganizationalUnit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function groupOwnedOrganizationalUnitsRemoveGroupApproveGroupOrganizationalUnitToHclTerraform(struct?: GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupOrganizationalUnit | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupOrganizationalUnitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupOrganizationalUnit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupOrganizationalUnit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupOrganizationalUnitLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupOrganizationalUnitPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupOwnedOrganizationalUnitsRemoveGroupApproveGroupPermissionsToTerraform(struct?: GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupOwnedOrganizationalUnitsRemoveGroupApproveGroupPermissionsToHclTerraform(struct?: GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupPermissionsOutputReference {
    return new GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedOrganizationalUnitsRemoveGroupApproveGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#organizational_unit Group#organizational_unit}
  */
  readonly organizationalUnit?: GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupOrganizationalUnit;
}

export function groupOwnedOrganizationalUnitsRemoveGroupApproveGroupToTerraform(struct?: GroupOwnedOrganizationalUnitsRemoveGroupApproveGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    organizational_unit: groupOwnedOrganizationalUnitsRemoveGroupApproveGroupOrganizationalUnitToTerraform(struct!.organizationalUnit),
  }
}


export function groupOwnedOrganizationalUnitsRemoveGroupApproveGroupToHclTerraform(struct?: GroupOwnedOrganizationalUnitsRemoveGroupApproveGroup | cdktf.IResolvable): any {
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
    organizational_unit: {
      value: groupOwnedOrganizationalUnitsRemoveGroupApproveGroupOrganizationalUnitToHclTerraform(struct!.organizationalUnit),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupOrganizationalUnit",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedOrganizationalUnitsRemoveGroupApproveGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._organizationalUnit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnit = this._organizationalUnit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedOrganizationalUnitsRemoveGroupApproveGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._organizationalUnit.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._organizationalUnit.internalValue = value.organizationalUnit;
    }
  }

  // admin - computed: true, optional: false, required: false
  public get admin() {
    return this.getBooleanAttribute('admin');
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // organizational_unit - computed: true, optional: true, required: false
  private _organizationalUnit = new GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupOrganizationalUnitOutputReference(this, "organizational_unit");
  public get organizationalUnit() {
    return this._organizationalUnit;
  }
  public putOrganizationalUnit(value: GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupOrganizationalUnit) {
    this._organizationalUnit.internalValue = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit.internalValue;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupOwnedOrganizationalUnits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#auditor_group Group#auditor_group}
  */
  readonly auditorGroup?: GroupOwnedOrganizationalUnitsAuditorGroup;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#create_group_approve_group Group#create_group_approve_group}
  */
  readonly createGroupApproveGroup?: GroupOwnedOrganizationalUnitsCreateGroupApproveGroup;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#create_group_placeholder Group#create_group_placeholder}
  */
  readonly createGroupPlaceholder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#description Group#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#enable_tech_admin_approve_group Group#enable_tech_admin_approve_group}
  */
  readonly enableTechAdminApproveGroup?: GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroup;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#owner Group#owner}
  */
  readonly owner: GroupOwnedOrganizationalUnitsOwner;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#recovery_fallback_group Group#recovery_fallback_group}
  */
  readonly recoveryFallbackGroup?: GroupOwnedOrganizationalUnitsRecoveryFallbackGroup;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#remove_group_approve_group Group#remove_group_approve_group}
  */
  readonly removeGroupApproveGroup?: GroupOwnedOrganizationalUnitsRemoveGroupApproveGroup;
}

export function groupOwnedOrganizationalUnitsToTerraform(struct?: GroupOwnedOrganizationalUnits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auditor_group: groupOwnedOrganizationalUnitsAuditorGroupToTerraform(struct!.auditorGroup),
    create_group_approve_group: groupOwnedOrganizationalUnitsCreateGroupApproveGroupToTerraform(struct!.createGroupApproveGroup),
    create_group_placeholder: cdktf.stringToTerraform(struct!.createGroupPlaceholder),
    description: cdktf.stringToTerraform(struct!.description),
    enable_tech_admin_approve_group: groupOwnedOrganizationalUnitsEnableTechAdminApproveGroupToTerraform(struct!.enableTechAdminApproveGroup),
    name: cdktf.stringToTerraform(struct!.name),
    owner: groupOwnedOrganizationalUnitsOwnerToTerraform(struct!.owner),
    recovery_fallback_group: groupOwnedOrganizationalUnitsRecoveryFallbackGroupToTerraform(struct!.recoveryFallbackGroup),
    remove_group_approve_group: groupOwnedOrganizationalUnitsRemoveGroupApproveGroupToTerraform(struct!.removeGroupApproveGroup),
  }
}


export function groupOwnedOrganizationalUnitsToHclTerraform(struct?: GroupOwnedOrganizationalUnits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auditor_group: {
      value: groupOwnedOrganizationalUnitsAuditorGroupToHclTerraform(struct!.auditorGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupOwnedOrganizationalUnitsAuditorGroup",
    },
    create_group_approve_group: {
      value: groupOwnedOrganizationalUnitsCreateGroupApproveGroupToHclTerraform(struct!.createGroupApproveGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupOwnedOrganizationalUnitsCreateGroupApproveGroup",
    },
    create_group_placeholder: {
      value: cdktf.stringToHclTerraform(struct!.createGroupPlaceholder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_tech_admin_approve_group: {
      value: groupOwnedOrganizationalUnitsEnableTechAdminApproveGroupToHclTerraform(struct!.enableTechAdminApproveGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroup",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner: {
      value: groupOwnedOrganizationalUnitsOwnerToHclTerraform(struct!.owner),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupOwnedOrganizationalUnitsOwner",
    },
    recovery_fallback_group: {
      value: groupOwnedOrganizationalUnitsRecoveryFallbackGroupToHclTerraform(struct!.recoveryFallbackGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupOwnedOrganizationalUnitsRecoveryFallbackGroup",
    },
    remove_group_approve_group: {
      value: groupOwnedOrganizationalUnitsRemoveGroupApproveGroupToHclTerraform(struct!.removeGroupApproveGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupOwnedOrganizationalUnitsRemoveGroupApproveGroup",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedOrganizationalUnitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedOrganizationalUnits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auditorGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditorGroup = this._auditorGroup?.internalValue;
    }
    if (this._createGroupApproveGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.createGroupApproveGroup = this._createGroupApproveGroup?.internalValue;
    }
    if (this._createGroupPlaceholder !== undefined) {
      hasAnyValues = true;
      internalValueResult.createGroupPlaceholder = this._createGroupPlaceholder;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enableTechAdminApproveGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTechAdminApproveGroup = this._enableTechAdminApproveGroup?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._owner?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner?.internalValue;
    }
    if (this._recoveryFallbackGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryFallbackGroup = this._recoveryFallbackGroup?.internalValue;
    }
    if (this._removeGroupApproveGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeGroupApproveGroup = this._removeGroupApproveGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedOrganizationalUnits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._auditorGroup.internalValue = undefined;
      this._createGroupApproveGroup.internalValue = undefined;
      this._createGroupPlaceholder = undefined;
      this._description = undefined;
      this._enableTechAdminApproveGroup.internalValue = undefined;
      this._name = undefined;
      this._owner.internalValue = undefined;
      this._recoveryFallbackGroup.internalValue = undefined;
      this._removeGroupApproveGroup.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._auditorGroup.internalValue = value.auditorGroup;
      this._createGroupApproveGroup.internalValue = value.createGroupApproveGroup;
      this._createGroupPlaceholder = value.createGroupPlaceholder;
      this._description = value.description;
      this._enableTechAdminApproveGroup.internalValue = value.enableTechAdminApproveGroup;
      this._name = value.name;
      this._owner.internalValue = value.owner;
      this._recoveryFallbackGroup.internalValue = value.recoveryFallbackGroup;
      this._removeGroupApproveGroup.internalValue = value.removeGroupApproveGroup;
    }
  }

  // auditor_group - computed: true, optional: true, required: false
  private _auditorGroup = new GroupOwnedOrganizationalUnitsAuditorGroupOutputReference(this, "auditor_group");
  public get auditorGroup() {
    return this._auditorGroup;
  }
  public putAuditorGroup(value: GroupOwnedOrganizationalUnitsAuditorGroup) {
    this._auditorGroup.internalValue = value;
  }
  public resetAuditorGroup() {
    this._auditorGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditorGroupInput() {
    return this._auditorGroup.internalValue;
  }

  // create_group_approve_group - computed: true, optional: true, required: false
  private _createGroupApproveGroup = new GroupOwnedOrganizationalUnitsCreateGroupApproveGroupOutputReference(this, "create_group_approve_group");
  public get createGroupApproveGroup() {
    return this._createGroupApproveGroup;
  }
  public putCreateGroupApproveGroup(value: GroupOwnedOrganizationalUnitsCreateGroupApproveGroup) {
    this._createGroupApproveGroup.internalValue = value;
  }
  public resetCreateGroupApproveGroup() {
    this._createGroupApproveGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createGroupApproveGroupInput() {
    return this._createGroupApproveGroup.internalValue;
  }

  // create_group_placeholder - computed: true, optional: true, required: false
  private _createGroupPlaceholder?: string; 
  public get createGroupPlaceholder() {
    return this.getStringAttribute('create_group_placeholder');
  }
  public set createGroupPlaceholder(value: string) {
    this._createGroupPlaceholder = value;
  }
  public resetCreateGroupPlaceholder() {
    this._createGroupPlaceholder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createGroupPlaceholderInput() {
    return this._createGroupPlaceholder;
  }

  // depth - computed: true, optional: false, required: false
  public get depth() {
    return this.getNumberAttribute('depth');
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

  // enable_tech_admin_approve_group - computed: true, optional: true, required: false
  private _enableTechAdminApproveGroup = new GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroupOutputReference(this, "enable_tech_admin_approve_group");
  public get enableTechAdminApproveGroup() {
    return this._enableTechAdminApproveGroup;
  }
  public putEnableTechAdminApproveGroup(value: GroupOwnedOrganizationalUnitsEnableTechAdminApproveGroup) {
    this._enableTechAdminApproveGroup.internalValue = value;
  }
  public resetEnableTechAdminApproveGroup() {
    this._enableTechAdminApproveGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTechAdminApproveGroupInput() {
    return this._enableTechAdminApproveGroup.internalValue;
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupOwnedOrganizationalUnitsLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // owner - computed: true, optional: false, required: true
  private _owner = new GroupOwnedOrganizationalUnitsOwnerOutputReference(this, "owner");
  public get owner() {
    return this._owner;
  }
  public putOwner(value: GroupOwnedOrganizationalUnitsOwner) {
    this._owner.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner.internalValue;
  }

  // parent - computed: true, optional: false, required: false
  private _parent = new GroupOwnedOrganizationalUnitsParentOutputReference(this, "parent");
  public get parent() {
    return this._parent;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupOwnedOrganizationalUnitsPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // recovery_fallback_group - computed: true, optional: true, required: false
  private _recoveryFallbackGroup = new GroupOwnedOrganizationalUnitsRecoveryFallbackGroupOutputReference(this, "recovery_fallback_group");
  public get recoveryFallbackGroup() {
    return this._recoveryFallbackGroup;
  }
  public putRecoveryFallbackGroup(value: GroupOwnedOrganizationalUnitsRecoveryFallbackGroup) {
    this._recoveryFallbackGroup.internalValue = value;
  }
  public resetRecoveryFallbackGroup() {
    this._recoveryFallbackGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryFallbackGroupInput() {
    return this._recoveryFallbackGroup.internalValue;
  }

  // remove_group_approve_group - computed: true, optional: true, required: false
  private _removeGroupApproveGroup = new GroupOwnedOrganizationalUnitsRemoveGroupApproveGroupOutputReference(this, "remove_group_approve_group");
  public get removeGroupApproveGroup() {
    return this._removeGroupApproveGroup;
  }
  public putRemoveGroupApproveGroup(value: GroupOwnedOrganizationalUnitsRemoveGroupApproveGroup) {
    this._removeGroupApproveGroup.internalValue = value;
  }
  public resetRemoveGroupApproveGroup() {
    this._removeGroupApproveGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeGroupApproveGroupInput() {
    return this._removeGroupApproveGroup.internalValue;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class GroupOwnedOrganizationalUnitsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedOrganizationalUnits[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedOrganizationalUnitsOutputReference {
    return new GroupOwnedOrganizationalUnitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedSystemsAbstractProvisionedLdapAttributesAttributeDefinitionLinks {
}

export function groupOwnedSystemsAbstractProvisionedLdapAttributesAttributeDefinitionLinksToTerraform(struct?: GroupOwnedSystemsAbstractProvisionedLdapAttributesAttributeDefinitionLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedSystemsAbstractProvisionedLdapAttributesAttributeDefinitionLinksToHclTerraform(struct?: GroupOwnedSystemsAbstractProvisionedLdapAttributesAttributeDefinitionLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedSystemsAbstractProvisionedLdapAttributesAttributeDefinitionLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedSystemsAbstractProvisionedLdapAttributesAttributeDefinitionLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedSystemsAbstractProvisionedLdapAttributesAttributeDefinitionLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupOwnedSystemsAbstractProvisionedLdapAttributesAttributeDefinitionLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedSystemsAbstractProvisionedLdapAttributesAttributeDefinitionLinksOutputReference {
    return new GroupOwnedSystemsAbstractProvisionedLdapAttributesAttributeDefinitionLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedSystemsAbstractProvisionedLdapAttributesAttributeDefinitionPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupOwnedSystemsAbstractProvisionedLdapAttributesAttributeDefinitionPermissionsToTerraform(struct?: GroupOwnedSystemsAbstractProvisionedLdapAttributesAttributeDefinitionPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupOwnedSystemsAbstractProvisionedLdapAttributesAttributeDefinitionPermissionsToHclTerraform(struct?: GroupOwnedSystemsAbstractProvisionedLdapAttributesAttributeDefinitionPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedSystemsAbstractProvisionedLdapAttributesAttributeDefinitionPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedSystemsAbstractProvisionedLdapAttributesAttributeDefinitionPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedSystemsAbstractProvisionedLdapAttributesAttributeDefinitionPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupOwnedSystemsAbstractProvisionedLdapAttributesAttributeDefinitionPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedSystemsAbstractProvisionedLdapAttributesAttributeDefinitionPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedSystemsAbstractProvisionedLdapAttributesAttributeDefinitionPermissionsOutputReference {
    return new GroupOwnedSystemsAbstractProvisionedLdapAttributesAttributeDefinitionPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedSystemsAbstractProvisionedLdapAttributesAttributeDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#format Group#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#freely_useable Group#freely_useable}
  */
  readonly freelyUseable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#list Group#list}
  */
  readonly list?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#required Group#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#unique Group#unique}
  */
  readonly unique?: boolean | cdktf.IResolvable;
}

export function groupOwnedSystemsAbstractProvisionedLdapAttributesAttributeDefinitionToTerraform(struct?: GroupOwnedSystemsAbstractProvisionedLdapAttributesAttributeDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    freely_useable: cdktf.booleanToTerraform(struct!.freelyUseable),
    list: cdktf.booleanToTerraform(struct!.list),
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
    unique: cdktf.booleanToTerraform(struct!.unique),
  }
}


export function groupOwnedSystemsAbstractProvisionedLdapAttributesAttributeDefinitionToHclTerraform(struct?: GroupOwnedSystemsAbstractProvisionedLdapAttributesAttributeDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    freely_useable: {
      value: cdktf.booleanToHclTerraform(struct!.freelyUseable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    list: {
      value: cdktf.booleanToHclTerraform(struct!.list),
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
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unique: {
      value: cdktf.booleanToHclTerraform(struct!.unique),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedSystemsAbstractProvisionedLdapAttributesAttributeDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedSystemsAbstractProvisionedLdapAttributesAttributeDefinition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._freelyUseable !== undefined) {
      hasAnyValues = true;
      internalValueResult.freelyUseable = this._freelyUseable;
    }
    if (this._list !== undefined) {
      hasAnyValues = true;
      internalValueResult.list = this._list;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._unique !== undefined) {
      hasAnyValues = true;
      internalValueResult.unique = this._unique;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedSystemsAbstractProvisionedLdapAttributesAttributeDefinition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._freelyUseable = undefined;
      this._list = undefined;
      this._name = undefined;
      this._required = undefined;
      this._unique = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._freelyUseable = value.freelyUseable;
      this._list = value.list;
      this._name = value.name;
      this._required = value.required;
      this._unique = value.unique;
    }
  }

  // format - computed: true, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // freely_useable - computed: true, optional: true, required: false
  private _freelyUseable?: boolean | cdktf.IResolvable; 
  public get freelyUseable() {
    return this.getBooleanAttribute('freely_useable');
  }
  public set freelyUseable(value: boolean | cdktf.IResolvable) {
    this._freelyUseable = value;
  }
  public resetFreelyUseable() {
    this._freelyUseable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freelyUseableInput() {
    return this._freelyUseable;
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupOwnedSystemsAbstractProvisionedLdapAttributesAttributeDefinitionLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // list - computed: true, optional: true, required: false
  private _list?: boolean | cdktf.IResolvable; 
  public get list() {
    return this.getBooleanAttribute('list');
  }
  public set list(value: boolean | cdktf.IResolvable) {
    this._list = value;
  }
  public resetList() {
    this._list = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listInput() {
    return this._list;
  }

  // name - computed: true, optional: false, required: true
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

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupOwnedSystemsAbstractProvisionedLdapAttributesAttributeDefinitionPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // system_definition - computed: true, optional: false, required: false
  public get systemDefinition() {
    return this.getStringAttribute('system_definition');
  }

  // unique - computed: true, optional: true, required: false
  private _unique?: boolean | cdktf.IResolvable; 
  public get unique() {
    return this.getBooleanAttribute('unique');
  }
  public set unique(value: boolean | cdktf.IResolvable) {
    this._unique = value;
  }
  public resetUnique() {
    this._unique = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueInput() {
    return this._unique;
  }
}
export interface GroupOwnedSystemsAbstractProvisionedLdapAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#attribute_definition Group#attribute_definition}
  */
  readonly attributeDefinition?: GroupOwnedSystemsAbstractProvisionedLdapAttributesAttributeDefinition;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#script Group#script}
  */
  readonly script?: string;
}

export function groupOwnedSystemsAbstractProvisionedLdapAttributesToTerraform(struct?: GroupOwnedSystemsAbstractProvisionedLdapAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_definition: groupOwnedSystemsAbstractProvisionedLdapAttributesAttributeDefinitionToTerraform(struct!.attributeDefinition),
    name: cdktf.stringToTerraform(struct!.name),
    script: cdktf.stringToTerraform(struct!.script),
  }
}


export function groupOwnedSystemsAbstractProvisionedLdapAttributesToHclTerraform(struct?: GroupOwnedSystemsAbstractProvisionedLdapAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_definition: {
      value: groupOwnedSystemsAbstractProvisionedLdapAttributesAttributeDefinitionToHclTerraform(struct!.attributeDefinition),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupOwnedSystemsAbstractProvisionedLdapAttributesAttributeDefinition",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script: {
      value: cdktf.stringToHclTerraform(struct!.script),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedSystemsAbstractProvisionedLdapAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedSystemsAbstractProvisionedLdapAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeDefinition = this._attributeDefinition?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedSystemsAbstractProvisionedLdapAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeDefinition.internalValue = undefined;
      this._name = undefined;
      this._script = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeDefinition.internalValue = value.attributeDefinition;
      this._name = value.name;
      this._script = value.script;
    }
  }

  // attribute_definition - computed: true, optional: true, required: false
  private _attributeDefinition = new GroupOwnedSystemsAbstractProvisionedLdapAttributesAttributeDefinitionOutputReference(this, "attribute_definition");
  public get attributeDefinition() {
    return this._attributeDefinition;
  }
  public putAttributeDefinition(value: GroupOwnedSystemsAbstractProvisionedLdapAttributesAttributeDefinition) {
    this._attributeDefinition.internalValue = value;
  }
  public resetAttributeDefinition() {
    this._attributeDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeDefinitionInput() {
    return this._attributeDefinition.internalValue;
  }

  // name - computed: true, optional: false, required: true
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

  // script - computed: true, optional: true, required: false
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  public resetScript() {
    this._script = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }
}

export class GroupOwnedSystemsAbstractProvisionedLdapAttributesList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedSystemsAbstractProvisionedLdapAttributes[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedSystemsAbstractProvisionedLdapAttributesOutputReference {
    return new GroupOwnedSystemsAbstractProvisionedLdapAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedSystemsAbstractProvisionedLdapClientCertificateLinks {
}

export function groupOwnedSystemsAbstractProvisionedLdapClientCertificateLinksToTerraform(struct?: GroupOwnedSystemsAbstractProvisionedLdapClientCertificateLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedSystemsAbstractProvisionedLdapClientCertificateLinksToHclTerraform(struct?: GroupOwnedSystemsAbstractProvisionedLdapClientCertificateLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedSystemsAbstractProvisionedLdapClientCertificateLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedSystemsAbstractProvisionedLdapClientCertificateLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedSystemsAbstractProvisionedLdapClientCertificateLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupOwnedSystemsAbstractProvisionedLdapClientCertificateLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedSystemsAbstractProvisionedLdapClientCertificateLinksOutputReference {
    return new GroupOwnedSystemsAbstractProvisionedLdapClientCertificateLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedSystemsAbstractProvisionedLdapClientCertificatePermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupOwnedSystemsAbstractProvisionedLdapClientCertificatePermissionsToTerraform(struct?: GroupOwnedSystemsAbstractProvisionedLdapClientCertificatePermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupOwnedSystemsAbstractProvisionedLdapClientCertificatePermissionsToHclTerraform(struct?: GroupOwnedSystemsAbstractProvisionedLdapClientCertificatePermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedSystemsAbstractProvisionedLdapClientCertificatePermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedSystemsAbstractProvisionedLdapClientCertificatePermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedSystemsAbstractProvisionedLdapClientCertificatePermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupOwnedSystemsAbstractProvisionedLdapClientCertificatePermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedSystemsAbstractProvisionedLdapClientCertificatePermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedSystemsAbstractProvisionedLdapClientCertificatePermissionsOutputReference {
    return new GroupOwnedSystemsAbstractProvisionedLdapClientCertificatePermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedSystemsAbstractProvisionedLdapClientCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#alias Group#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#certificate_data Group#certificate_data}
  */
  readonly certificateData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#global Group#global}
  */
  readonly global?: boolean | cdktf.IResolvable;
}

export function groupOwnedSystemsAbstractProvisionedLdapClientCertificateToTerraform(struct?: GroupOwnedSystemsAbstractProvisionedLdapClientCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    certificate_data: cdktf.stringToTerraform(struct!.certificateData),
    global: cdktf.booleanToTerraform(struct!.global),
  }
}


export function groupOwnedSystemsAbstractProvisionedLdapClientCertificateToHclTerraform(struct?: GroupOwnedSystemsAbstractProvisionedLdapClientCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_data: {
      value: cdktf.stringToHclTerraform(struct!.certificateData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global: {
      value: cdktf.booleanToHclTerraform(struct!.global),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedSystemsAbstractProvisionedLdapClientCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedSystemsAbstractProvisionedLdapClientCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._certificateData !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateData = this._certificateData;
    }
    if (this._global !== undefined) {
      hasAnyValues = true;
      internalValueResult.global = this._global;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedSystemsAbstractProvisionedLdapClientCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._certificateData = undefined;
      this._global = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._certificateData = value.certificateData;
      this._global = value.global;
    }
  }

  // alias - computed: true, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // certificate_data - computed: true, optional: true, required: false
  private _certificateData?: string; 
  public get certificateData() {
    return this.getStringAttribute('certificate_data');
  }
  public set certificateData(value: string) {
    this._certificateData = value;
  }
  public resetCertificateData() {
    this._certificateData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateDataInput() {
    return this._certificateData;
  }

  // expiration - computed: true, optional: false, required: false
  public get expiration() {
    return this.getStringAttribute('expiration');
  }

  // fingerprint_sha1 - computed: true, optional: false, required: false
  public get fingerprintSha1() {
    return this.getStringAttribute('fingerprint_sha1');
  }

  // fingerprint_sha256 - computed: true, optional: false, required: false
  public get fingerprintSha256() {
    return this.getStringAttribute('fingerprint_sha256');
  }

  // global - computed: true, optional: true, required: false
  private _global?: boolean | cdktf.IResolvable; 
  public get global() {
    return this.getBooleanAttribute('global');
  }
  public set global(value: boolean | cdktf.IResolvable) {
    this._global = value;
  }
  public resetGlobal() {
    this._global = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInput() {
    return this._global;
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupOwnedSystemsAbstractProvisionedLdapClientCertificateLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupOwnedSystemsAbstractProvisionedLdapClientCertificatePermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // subject_dn - computed: true, optional: false, required: false
  public get subjectDn() {
    return this.getStringAttribute('subject_dn');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupOwnedSystemsAbstractProvisionedLdapFailoverTrustedCertificateLinks {
}

export function groupOwnedSystemsAbstractProvisionedLdapFailoverTrustedCertificateLinksToTerraform(struct?: GroupOwnedSystemsAbstractProvisionedLdapFailoverTrustedCertificateLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedSystemsAbstractProvisionedLdapFailoverTrustedCertificateLinksToHclTerraform(struct?: GroupOwnedSystemsAbstractProvisionedLdapFailoverTrustedCertificateLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedSystemsAbstractProvisionedLdapFailoverTrustedCertificateLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedSystemsAbstractProvisionedLdapFailoverTrustedCertificateLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedSystemsAbstractProvisionedLdapFailoverTrustedCertificateLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupOwnedSystemsAbstractProvisionedLdapFailoverTrustedCertificateLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedSystemsAbstractProvisionedLdapFailoverTrustedCertificateLinksOutputReference {
    return new GroupOwnedSystemsAbstractProvisionedLdapFailoverTrustedCertificateLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedSystemsAbstractProvisionedLdapFailoverTrustedCertificatePermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupOwnedSystemsAbstractProvisionedLdapFailoverTrustedCertificatePermissionsToTerraform(struct?: GroupOwnedSystemsAbstractProvisionedLdapFailoverTrustedCertificatePermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupOwnedSystemsAbstractProvisionedLdapFailoverTrustedCertificatePermissionsToHclTerraform(struct?: GroupOwnedSystemsAbstractProvisionedLdapFailoverTrustedCertificatePermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedSystemsAbstractProvisionedLdapFailoverTrustedCertificatePermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedSystemsAbstractProvisionedLdapFailoverTrustedCertificatePermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedSystemsAbstractProvisionedLdapFailoverTrustedCertificatePermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupOwnedSystemsAbstractProvisionedLdapFailoverTrustedCertificatePermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedSystemsAbstractProvisionedLdapFailoverTrustedCertificatePermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedSystemsAbstractProvisionedLdapFailoverTrustedCertificatePermissionsOutputReference {
    return new GroupOwnedSystemsAbstractProvisionedLdapFailoverTrustedCertificatePermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedSystemsAbstractProvisionedLdapFailoverTrustedCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#alias Group#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#certificate_data Group#certificate_data}
  */
  readonly certificateData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#global Group#global}
  */
  readonly global?: boolean | cdktf.IResolvable;
}

export function groupOwnedSystemsAbstractProvisionedLdapFailoverTrustedCertificateToTerraform(struct?: GroupOwnedSystemsAbstractProvisionedLdapFailoverTrustedCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    certificate_data: cdktf.stringToTerraform(struct!.certificateData),
    global: cdktf.booleanToTerraform(struct!.global),
  }
}


export function groupOwnedSystemsAbstractProvisionedLdapFailoverTrustedCertificateToHclTerraform(struct?: GroupOwnedSystemsAbstractProvisionedLdapFailoverTrustedCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_data: {
      value: cdktf.stringToHclTerraform(struct!.certificateData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global: {
      value: cdktf.booleanToHclTerraform(struct!.global),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedSystemsAbstractProvisionedLdapFailoverTrustedCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedSystemsAbstractProvisionedLdapFailoverTrustedCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._certificateData !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateData = this._certificateData;
    }
    if (this._global !== undefined) {
      hasAnyValues = true;
      internalValueResult.global = this._global;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedSystemsAbstractProvisionedLdapFailoverTrustedCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._certificateData = undefined;
      this._global = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._certificateData = value.certificateData;
      this._global = value.global;
    }
  }

  // alias - computed: true, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // certificate_data - computed: true, optional: true, required: false
  private _certificateData?: string; 
  public get certificateData() {
    return this.getStringAttribute('certificate_data');
  }
  public set certificateData(value: string) {
    this._certificateData = value;
  }
  public resetCertificateData() {
    this._certificateData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateDataInput() {
    return this._certificateData;
  }

  // expiration - computed: true, optional: false, required: false
  public get expiration() {
    return this.getStringAttribute('expiration');
  }

  // fingerprint_sha1 - computed: true, optional: false, required: false
  public get fingerprintSha1() {
    return this.getStringAttribute('fingerprint_sha1');
  }

  // fingerprint_sha256 - computed: true, optional: false, required: false
  public get fingerprintSha256() {
    return this.getStringAttribute('fingerprint_sha256');
  }

  // global - computed: true, optional: true, required: false
  private _global?: boolean | cdktf.IResolvable; 
  public get global() {
    return this.getBooleanAttribute('global');
  }
  public set global(value: boolean | cdktf.IResolvable) {
    this._global = value;
  }
  public resetGlobal() {
    this._global = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInput() {
    return this._global;
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupOwnedSystemsAbstractProvisionedLdapFailoverTrustedCertificateLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupOwnedSystemsAbstractProvisionedLdapFailoverTrustedCertificatePermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // subject_dn - computed: true, optional: false, required: false
  public get subjectDn() {
    return this.getStringAttribute('subject_dn');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupOwnedSystemsAbstractProvisionedLdapTrustedCertificateLinks {
}

export function groupOwnedSystemsAbstractProvisionedLdapTrustedCertificateLinksToTerraform(struct?: GroupOwnedSystemsAbstractProvisionedLdapTrustedCertificateLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedSystemsAbstractProvisionedLdapTrustedCertificateLinksToHclTerraform(struct?: GroupOwnedSystemsAbstractProvisionedLdapTrustedCertificateLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedSystemsAbstractProvisionedLdapTrustedCertificateLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedSystemsAbstractProvisionedLdapTrustedCertificateLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedSystemsAbstractProvisionedLdapTrustedCertificateLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupOwnedSystemsAbstractProvisionedLdapTrustedCertificateLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedSystemsAbstractProvisionedLdapTrustedCertificateLinksOutputReference {
    return new GroupOwnedSystemsAbstractProvisionedLdapTrustedCertificateLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedSystemsAbstractProvisionedLdapTrustedCertificatePermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupOwnedSystemsAbstractProvisionedLdapTrustedCertificatePermissionsToTerraform(struct?: GroupOwnedSystemsAbstractProvisionedLdapTrustedCertificatePermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupOwnedSystemsAbstractProvisionedLdapTrustedCertificatePermissionsToHclTerraform(struct?: GroupOwnedSystemsAbstractProvisionedLdapTrustedCertificatePermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedSystemsAbstractProvisionedLdapTrustedCertificatePermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedSystemsAbstractProvisionedLdapTrustedCertificatePermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedSystemsAbstractProvisionedLdapTrustedCertificatePermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupOwnedSystemsAbstractProvisionedLdapTrustedCertificatePermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedSystemsAbstractProvisionedLdapTrustedCertificatePermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedSystemsAbstractProvisionedLdapTrustedCertificatePermissionsOutputReference {
    return new GroupOwnedSystemsAbstractProvisionedLdapTrustedCertificatePermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedSystemsAbstractProvisionedLdapTrustedCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#alias Group#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#certificate_data Group#certificate_data}
  */
  readonly certificateData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#global Group#global}
  */
  readonly global?: boolean | cdktf.IResolvable;
}

export function groupOwnedSystemsAbstractProvisionedLdapTrustedCertificateToTerraform(struct?: GroupOwnedSystemsAbstractProvisionedLdapTrustedCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    certificate_data: cdktf.stringToTerraform(struct!.certificateData),
    global: cdktf.booleanToTerraform(struct!.global),
  }
}


export function groupOwnedSystemsAbstractProvisionedLdapTrustedCertificateToHclTerraform(struct?: GroupOwnedSystemsAbstractProvisionedLdapTrustedCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_data: {
      value: cdktf.stringToHclTerraform(struct!.certificateData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global: {
      value: cdktf.booleanToHclTerraform(struct!.global),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedSystemsAbstractProvisionedLdapTrustedCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedSystemsAbstractProvisionedLdapTrustedCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._certificateData !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateData = this._certificateData;
    }
    if (this._global !== undefined) {
      hasAnyValues = true;
      internalValueResult.global = this._global;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedSystemsAbstractProvisionedLdapTrustedCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._certificateData = undefined;
      this._global = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._certificateData = value.certificateData;
      this._global = value.global;
    }
  }

  // alias - computed: true, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // certificate_data - computed: true, optional: true, required: false
  private _certificateData?: string; 
  public get certificateData() {
    return this.getStringAttribute('certificate_data');
  }
  public set certificateData(value: string) {
    this._certificateData = value;
  }
  public resetCertificateData() {
    this._certificateData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateDataInput() {
    return this._certificateData;
  }

  // expiration - computed: true, optional: false, required: false
  public get expiration() {
    return this.getStringAttribute('expiration');
  }

  // fingerprint_sha1 - computed: true, optional: false, required: false
  public get fingerprintSha1() {
    return this.getStringAttribute('fingerprint_sha1');
  }

  // fingerprint_sha256 - computed: true, optional: false, required: false
  public get fingerprintSha256() {
    return this.getStringAttribute('fingerprint_sha256');
  }

  // global - computed: true, optional: true, required: false
  private _global?: boolean | cdktf.IResolvable; 
  public get global() {
    return this.getBooleanAttribute('global');
  }
  public set global(value: boolean | cdktf.IResolvable) {
    this._global = value;
  }
  public resetGlobal() {
    this._global = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInput() {
    return this._global;
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupOwnedSystemsAbstractProvisionedLdapTrustedCertificateLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupOwnedSystemsAbstractProvisionedLdapTrustedCertificatePermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // subject_dn - computed: true, optional: false, required: false
  public get subjectDn() {
    return this.getStringAttribute('subject_dn');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupOwnedSystemsAbstractProvisionedLdap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#attributes Group#attributes}
  */
  readonly attributes?: GroupOwnedSystemsAbstractProvisionedLdapAttributes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#base_dn Group#base_dn}
  */
  readonly baseDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#bind_dn Group#bind_dn}
  */
  readonly bindDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#bind_password Group#bind_password}
  */
  readonly bindPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#client_certificate Group#client_certificate}
  */
  readonly clientCertificate?: GroupOwnedSystemsAbstractProvisionedLdapClientCertificate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#failover_host Group#failover_host}
  */
  readonly failoverHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#failover_trusted_certificate Group#failover_trusted_certificate}
  */
  readonly failoverTrustedCertificate?: GroupOwnedSystemsAbstractProvisionedLdapFailoverTrustedCertificate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#group_dn Group#group_dn}
  */
  readonly groupDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#host Group#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#object_classes Group#object_classes}
  */
  readonly objectClasses?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#port Group#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#service_account_dn Group#service_account_dn}
  */
  readonly serviceAccountDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#ssh_public_key_support Group#ssh_public_key_support}
  */
  readonly sshPublicKeySupport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#tls Group#tls}
  */
  readonly tls: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#trusted_certificate Group#trusted_certificate}
  */
  readonly trustedCertificate?: GroupOwnedSystemsAbstractProvisionedLdapTrustedCertificate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#user_dn Group#user_dn}
  */
  readonly userDn?: string;
}

export function groupOwnedSystemsAbstractProvisionedLdapToTerraform(struct?: GroupOwnedSystemsAbstractProvisionedLdap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.listMapper(groupOwnedSystemsAbstractProvisionedLdapAttributesToTerraform, false)(struct!.attributes),
    base_dn: cdktf.stringToTerraform(struct!.baseDn),
    bind_dn: cdktf.stringToTerraform(struct!.bindDn),
    bind_password: cdktf.stringToTerraform(struct!.bindPassword),
    client_certificate: groupOwnedSystemsAbstractProvisionedLdapClientCertificateToTerraform(struct!.clientCertificate),
    failover_host: cdktf.stringToTerraform(struct!.failoverHost),
    failover_trusted_certificate: groupOwnedSystemsAbstractProvisionedLdapFailoverTrustedCertificateToTerraform(struct!.failoverTrustedCertificate),
    group_dn: cdktf.stringToTerraform(struct!.groupDn),
    host: cdktf.stringToTerraform(struct!.host),
    object_classes: cdktf.stringToTerraform(struct!.objectClasses),
    port: cdktf.numberToTerraform(struct!.port),
    service_account_dn: cdktf.stringToTerraform(struct!.serviceAccountDn),
    ssh_public_key_support: cdktf.stringToTerraform(struct!.sshPublicKeySupport),
    tls: cdktf.stringToTerraform(struct!.tls),
    trusted_certificate: groupOwnedSystemsAbstractProvisionedLdapTrustedCertificateToTerraform(struct!.trustedCertificate),
    user_dn: cdktf.stringToTerraform(struct!.userDn),
  }
}


export function groupOwnedSystemsAbstractProvisionedLdapToHclTerraform(struct?: GroupOwnedSystemsAbstractProvisionedLdap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: cdktf.listMapperHcl(groupOwnedSystemsAbstractProvisionedLdapAttributesToHclTerraform, false)(struct!.attributes),
      isBlock: true,
      type: "list",
      storageClassType: "GroupOwnedSystemsAbstractProvisionedLdapAttributesList",
    },
    base_dn: {
      value: cdktf.stringToHclTerraform(struct!.baseDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bind_dn: {
      value: cdktf.stringToHclTerraform(struct!.bindDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bind_password: {
      value: cdktf.stringToHclTerraform(struct!.bindPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate: {
      value: groupOwnedSystemsAbstractProvisionedLdapClientCertificateToHclTerraform(struct!.clientCertificate),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupOwnedSystemsAbstractProvisionedLdapClientCertificate",
    },
    failover_host: {
      value: cdktf.stringToHclTerraform(struct!.failoverHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failover_trusted_certificate: {
      value: groupOwnedSystemsAbstractProvisionedLdapFailoverTrustedCertificateToHclTerraform(struct!.failoverTrustedCertificate),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupOwnedSystemsAbstractProvisionedLdapFailoverTrustedCertificate",
    },
    group_dn: {
      value: cdktf.stringToHclTerraform(struct!.groupDn),
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
    object_classes: {
      value: cdktf.stringToHclTerraform(struct!.objectClasses),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_account_dn: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_public_key_support: {
      value: cdktf.stringToHclTerraform(struct!.sshPublicKeySupport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: cdktf.stringToHclTerraform(struct!.tls),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trusted_certificate: {
      value: groupOwnedSystemsAbstractProvisionedLdapTrustedCertificateToHclTerraform(struct!.trustedCertificate),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupOwnedSystemsAbstractProvisionedLdapTrustedCertificate",
    },
    user_dn: {
      value: cdktf.stringToHclTerraform(struct!.userDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedSystemsAbstractProvisionedLdapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedSystemsAbstractProvisionedLdap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes?.internalValue;
    }
    if (this._baseDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseDn = this._baseDn;
    }
    if (this._bindDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindDn = this._bindDn;
    }
    if (this._bindPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindPassword = this._bindPassword;
    }
    if (this._clientCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate?.internalValue;
    }
    if (this._failoverHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverHost = this._failoverHost;
    }
    if (this._failoverTrustedCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverTrustedCertificate = this._failoverTrustedCertificate?.internalValue;
    }
    if (this._groupDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupDn = this._groupDn;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._objectClasses !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectClasses = this._objectClasses;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._serviceAccountDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountDn = this._serviceAccountDn;
    }
    if (this._sshPublicKeySupport !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPublicKeySupport = this._sshPublicKeySupport;
    }
    if (this._tls !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls;
    }
    if (this._trustedCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCertificate = this._trustedCertificate?.internalValue;
    }
    if (this._userDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDn = this._userDn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedSystemsAbstractProvisionedLdap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes.internalValue = undefined;
      this._baseDn = undefined;
      this._bindDn = undefined;
      this._bindPassword = undefined;
      this._clientCertificate.internalValue = undefined;
      this._failoverHost = undefined;
      this._failoverTrustedCertificate.internalValue = undefined;
      this._groupDn = undefined;
      this._host = undefined;
      this._objectClasses = undefined;
      this._port = undefined;
      this._serviceAccountDn = undefined;
      this._sshPublicKeySupport = undefined;
      this._tls = undefined;
      this._trustedCertificate.internalValue = undefined;
      this._userDn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributes.internalValue = value.attributes;
      this._baseDn = value.baseDn;
      this._bindDn = value.bindDn;
      this._bindPassword = value.bindPassword;
      this._clientCertificate.internalValue = value.clientCertificate;
      this._failoverHost = value.failoverHost;
      this._failoverTrustedCertificate.internalValue = value.failoverTrustedCertificate;
      this._groupDn = value.groupDn;
      this._host = value.host;
      this._objectClasses = value.objectClasses;
      this._port = value.port;
      this._serviceAccountDn = value.serviceAccountDn;
      this._sshPublicKeySupport = value.sshPublicKeySupport;
      this._tls = value.tls;
      this._trustedCertificate.internalValue = value.trustedCertificate;
      this._userDn = value.userDn;
    }
  }

  // attributes - computed: true, optional: true, required: false
  private _attributes = new GroupOwnedSystemsAbstractProvisionedLdapAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: GroupOwnedSystemsAbstractProvisionedLdapAttributes[] | cdktf.IResolvable) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // base_dn - computed: true, optional: false, required: true
  private _baseDn?: string; 
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }
  public set baseDn(value: string) {
    this._baseDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDnInput() {
    return this._baseDn;
  }

  // bind_dn - computed: true, optional: true, required: false
  private _bindDn?: string; 
  public get bindDn() {
    return this.getStringAttribute('bind_dn');
  }
  public set bindDn(value: string) {
    this._bindDn = value;
  }
  public resetBindDn() {
    this._bindDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindDnInput() {
    return this._bindDn;
  }

  // bind_password - computed: true, optional: true, required: false
  private _bindPassword?: string; 
  public get bindPassword() {
    return this.getStringAttribute('bind_password');
  }
  public set bindPassword(value: string) {
    this._bindPassword = value;
  }
  public resetBindPassword() {
    this._bindPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindPasswordInput() {
    return this._bindPassword;
  }

  // client_certificate - computed: true, optional: true, required: false
  private _clientCertificate = new GroupOwnedSystemsAbstractProvisionedLdapClientCertificateOutputReference(this, "client_certificate");
  public get clientCertificate() {
    return this._clientCertificate;
  }
  public putClientCertificate(value: GroupOwnedSystemsAbstractProvisionedLdapClientCertificate) {
    this._clientCertificate.internalValue = value;
  }
  public resetClientCertificate() {
    this._clientCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate.internalValue;
  }

  // failover_host - computed: true, optional: true, required: false
  private _failoverHost?: string; 
  public get failoverHost() {
    return this.getStringAttribute('failover_host');
  }
  public set failoverHost(value: string) {
    this._failoverHost = value;
  }
  public resetFailoverHost() {
    this._failoverHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverHostInput() {
    return this._failoverHost;
  }

  // failover_trusted_certificate - computed: true, optional: true, required: false
  private _failoverTrustedCertificate = new GroupOwnedSystemsAbstractProvisionedLdapFailoverTrustedCertificateOutputReference(this, "failover_trusted_certificate");
  public get failoverTrustedCertificate() {
    return this._failoverTrustedCertificate;
  }
  public putFailoverTrustedCertificate(value: GroupOwnedSystemsAbstractProvisionedLdapFailoverTrustedCertificate) {
    this._failoverTrustedCertificate.internalValue = value;
  }
  public resetFailoverTrustedCertificate() {
    this._failoverTrustedCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverTrustedCertificateInput() {
    return this._failoverTrustedCertificate.internalValue;
  }

  // group_dn - computed: true, optional: true, required: false
  private _groupDn?: string; 
  public get groupDn() {
    return this.getStringAttribute('group_dn');
  }
  public set groupDn(value: string) {
    this._groupDn = value;
  }
  public resetGroupDn() {
    this._groupDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupDnInput() {
    return this._groupDn;
  }

  // host - computed: true, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // object_classes - computed: true, optional: true, required: false
  private _objectClasses?: string; 
  public get objectClasses() {
    return this.getStringAttribute('object_classes');
  }
  public set objectClasses(value: string) {
    this._objectClasses = value;
  }
  public resetObjectClasses() {
    this._objectClasses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectClassesInput() {
    return this._objectClasses;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // service_account_dn - computed: true, optional: true, required: false
  private _serviceAccountDn?: string; 
  public get serviceAccountDn() {
    return this.getStringAttribute('service_account_dn');
  }
  public set serviceAccountDn(value: string) {
    this._serviceAccountDn = value;
  }
  public resetServiceAccountDn() {
    this._serviceAccountDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountDnInput() {
    return this._serviceAccountDn;
  }

  // ssh_public_key_support - computed: true, optional: true, required: false
  private _sshPublicKeySupport?: string; 
  public get sshPublicKeySupport() {
    return this.getStringAttribute('ssh_public_key_support');
  }
  public set sshPublicKeySupport(value: string) {
    this._sshPublicKeySupport = value;
  }
  public resetSshPublicKeySupport() {
    this._sshPublicKeySupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeySupportInput() {
    return this._sshPublicKeySupport;
  }

  // tls - computed: true, optional: false, required: true
  private _tls?: string; 
  public get tls() {
    return this.getStringAttribute('tls');
  }
  public set tls(value: string) {
    this._tls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls;
  }

  // trusted_certificate - computed: true, optional: true, required: false
  private _trustedCertificate = new GroupOwnedSystemsAbstractProvisionedLdapTrustedCertificateOutputReference(this, "trusted_certificate");
  public get trustedCertificate() {
    return this._trustedCertificate;
  }
  public putTrustedCertificate(value: GroupOwnedSystemsAbstractProvisionedLdapTrustedCertificate) {
    this._trustedCertificate.internalValue = value;
  }
  public resetTrustedCertificate() {
    this._trustedCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCertificateInput() {
    return this._trustedCertificate.internalValue;
  }

  // user_dn - computed: true, optional: true, required: false
  private _userDn?: string; 
  public get userDn() {
    return this.getStringAttribute('user_dn');
  }
  public set userDn(value: string) {
    this._userDn = value;
  }
  public resetUserDn() {
    this._userDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDnInput() {
    return this._userDn;
  }
}
export interface GroupOwnedSystemsCleanupPeriod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#days Group#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#months Group#months}
  */
  readonly months?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#years Group#years}
  */
  readonly years?: number;
}

export function groupOwnedSystemsCleanupPeriodToTerraform(struct?: GroupOwnedSystemsCleanupPeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    months: cdktf.numberToTerraform(struct!.months),
    years: cdktf.numberToTerraform(struct!.years),
  }
}


export function groupOwnedSystemsCleanupPeriodToHclTerraform(struct?: GroupOwnedSystemsCleanupPeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    months: {
      value: cdktf.numberToHclTerraform(struct!.months),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    years: {
      value: cdktf.numberToHclTerraform(struct!.years),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedSystemsCleanupPeriodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedSystemsCleanupPeriod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._months !== undefined) {
      hasAnyValues = true;
      internalValueResult.months = this._months;
    }
    if (this._years !== undefined) {
      hasAnyValues = true;
      internalValueResult.years = this._years;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedSystemsCleanupPeriod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
      this._months = undefined;
      this._years = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
      this._months = value.months;
      this._years = value.years;
    }
  }

  // days - computed: true, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // months - computed: true, optional: true, required: false
  private _months?: number; 
  public get months() {
    return this.getNumberAttribute('months');
  }
  public set months(value: number) {
    this._months = value;
  }
  public resetMonths() {
    this._months = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthsInput() {
    return this._months;
  }

  // years - computed: true, optional: true, required: false
  private _years?: number; 
  public get years() {
    return this.getNumberAttribute('years');
  }
  public set years(value: number) {
    this._years = value;
  }
  public resetYears() {
    this._years = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearsInput() {
    return this._years;
  }
}
export interface GroupOwnedSystemsContentAdministratorLinks {
}

export function groupOwnedSystemsContentAdministratorLinksToTerraform(struct?: GroupOwnedSystemsContentAdministratorLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedSystemsContentAdministratorLinksToHclTerraform(struct?: GroupOwnedSystemsContentAdministratorLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedSystemsContentAdministratorLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedSystemsContentAdministratorLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedSystemsContentAdministratorLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupOwnedSystemsContentAdministratorLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedSystemsContentAdministratorLinksOutputReference {
    return new GroupOwnedSystemsContentAdministratorLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedSystemsContentAdministratorOrganizationalUnitLinks {
}

export function groupOwnedSystemsContentAdministratorOrganizationalUnitLinksToTerraform(struct?: GroupOwnedSystemsContentAdministratorOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedSystemsContentAdministratorOrganizationalUnitLinksToHclTerraform(struct?: GroupOwnedSystemsContentAdministratorOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedSystemsContentAdministratorOrganizationalUnitLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedSystemsContentAdministratorOrganizationalUnitLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedSystemsContentAdministratorOrganizationalUnitLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupOwnedSystemsContentAdministratorOrganizationalUnitLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedSystemsContentAdministratorOrganizationalUnitLinksOutputReference {
    return new GroupOwnedSystemsContentAdministratorOrganizationalUnitLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedSystemsContentAdministratorOrganizationalUnitPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupOwnedSystemsContentAdministratorOrganizationalUnitPermissionsToTerraform(struct?: GroupOwnedSystemsContentAdministratorOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupOwnedSystemsContentAdministratorOrganizationalUnitPermissionsToHclTerraform(struct?: GroupOwnedSystemsContentAdministratorOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedSystemsContentAdministratorOrganizationalUnitPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedSystemsContentAdministratorOrganizationalUnitPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedSystemsContentAdministratorOrganizationalUnitPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupOwnedSystemsContentAdministratorOrganizationalUnitPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedSystemsContentAdministratorOrganizationalUnitPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedSystemsContentAdministratorOrganizationalUnitPermissionsOutputReference {
    return new GroupOwnedSystemsContentAdministratorOrganizationalUnitPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedSystemsContentAdministratorOrganizationalUnit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

export function groupOwnedSystemsContentAdministratorOrganizationalUnitToTerraform(struct?: GroupOwnedSystemsContentAdministratorOrganizationalUnit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function groupOwnedSystemsContentAdministratorOrganizationalUnitToHclTerraform(struct?: GroupOwnedSystemsContentAdministratorOrganizationalUnit | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedSystemsContentAdministratorOrganizationalUnitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedSystemsContentAdministratorOrganizationalUnit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedSystemsContentAdministratorOrganizationalUnit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupOwnedSystemsContentAdministratorOrganizationalUnitLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupOwnedSystemsContentAdministratorOrganizationalUnitPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupOwnedSystemsContentAdministratorPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupOwnedSystemsContentAdministratorPermissionsToTerraform(struct?: GroupOwnedSystemsContentAdministratorPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupOwnedSystemsContentAdministratorPermissionsToHclTerraform(struct?: GroupOwnedSystemsContentAdministratorPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedSystemsContentAdministratorPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedSystemsContentAdministratorPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedSystemsContentAdministratorPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupOwnedSystemsContentAdministratorPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedSystemsContentAdministratorPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedSystemsContentAdministratorPermissionsOutputReference {
    return new GroupOwnedSystemsContentAdministratorPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedSystemsContentAdministrator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#organizational_unit Group#organizational_unit}
  */
  readonly organizationalUnit?: GroupOwnedSystemsContentAdministratorOrganizationalUnit;
}

export function groupOwnedSystemsContentAdministratorToTerraform(struct?: GroupOwnedSystemsContentAdministrator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    organizational_unit: groupOwnedSystemsContentAdministratorOrganizationalUnitToTerraform(struct!.organizationalUnit),
  }
}


export function groupOwnedSystemsContentAdministratorToHclTerraform(struct?: GroupOwnedSystemsContentAdministrator | cdktf.IResolvable): any {
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
    organizational_unit: {
      value: groupOwnedSystemsContentAdministratorOrganizationalUnitToHclTerraform(struct!.organizationalUnit),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupOwnedSystemsContentAdministratorOrganizationalUnit",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedSystemsContentAdministratorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedSystemsContentAdministrator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._organizationalUnit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnit = this._organizationalUnit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedSystemsContentAdministrator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._organizationalUnit.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._organizationalUnit.internalValue = value.organizationalUnit;
    }
  }

  // admin - computed: true, optional: false, required: false
  public get admin() {
    return this.getBooleanAttribute('admin');
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupOwnedSystemsContentAdministratorLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // organizational_unit - computed: true, optional: true, required: false
  private _organizationalUnit = new GroupOwnedSystemsContentAdministratorOrganizationalUnitOutputReference(this, "organizational_unit");
  public get organizationalUnit() {
    return this._organizationalUnit;
  }
  public putOrganizationalUnit(value: GroupOwnedSystemsContentAdministratorOrganizationalUnit) {
    this._organizationalUnit.internalValue = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit.internalValue;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupOwnedSystemsContentAdministratorPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupOwnedSystemsLinks {
}

export function groupOwnedSystemsLinksToTerraform(struct?: GroupOwnedSystemsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedSystemsLinksToHclTerraform(struct?: GroupOwnedSystemsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedSystemsLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedSystemsLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedSystemsLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupOwnedSystemsLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedSystemsLinksOutputReference {
    return new GroupOwnedSystemsLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedSystemsOrganizationalUnitLinks {
}

export function groupOwnedSystemsOrganizationalUnitLinksToTerraform(struct?: GroupOwnedSystemsOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedSystemsOrganizationalUnitLinksToHclTerraform(struct?: GroupOwnedSystemsOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedSystemsOrganizationalUnitLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedSystemsOrganizationalUnitLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedSystemsOrganizationalUnitLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupOwnedSystemsOrganizationalUnitLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedSystemsOrganizationalUnitLinksOutputReference {
    return new GroupOwnedSystemsOrganizationalUnitLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedSystemsOrganizationalUnitPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupOwnedSystemsOrganizationalUnitPermissionsToTerraform(struct?: GroupOwnedSystemsOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupOwnedSystemsOrganizationalUnitPermissionsToHclTerraform(struct?: GroupOwnedSystemsOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedSystemsOrganizationalUnitPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedSystemsOrganizationalUnitPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedSystemsOrganizationalUnitPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupOwnedSystemsOrganizationalUnitPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedSystemsOrganizationalUnitPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedSystemsOrganizationalUnitPermissionsOutputReference {
    return new GroupOwnedSystemsOrganizationalUnitPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedSystemsOrganizationalUnit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

export function groupOwnedSystemsOrganizationalUnitToTerraform(struct?: GroupOwnedSystemsOrganizationalUnit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function groupOwnedSystemsOrganizationalUnitToHclTerraform(struct?: GroupOwnedSystemsOrganizationalUnit | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedSystemsOrganizationalUnitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedSystemsOrganizationalUnit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedSystemsOrganizationalUnit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupOwnedSystemsOrganizationalUnitLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupOwnedSystemsOrganizationalUnitPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupOwnedSystemsOwnerLinks {
}

export function groupOwnedSystemsOwnerLinksToTerraform(struct?: GroupOwnedSystemsOwnerLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedSystemsOwnerLinksToHclTerraform(struct?: GroupOwnedSystemsOwnerLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedSystemsOwnerLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedSystemsOwnerLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedSystemsOwnerLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupOwnedSystemsOwnerLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedSystemsOwnerLinksOutputReference {
    return new GroupOwnedSystemsOwnerLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedSystemsOwnerOrganizationalUnitLinks {
}

export function groupOwnedSystemsOwnerOrganizationalUnitLinksToTerraform(struct?: GroupOwnedSystemsOwnerOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOwnedSystemsOwnerOrganizationalUnitLinksToHclTerraform(struct?: GroupOwnedSystemsOwnerOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOwnedSystemsOwnerOrganizationalUnitLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedSystemsOwnerOrganizationalUnitLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedSystemsOwnerOrganizationalUnitLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class GroupOwnedSystemsOwnerOrganizationalUnitLinksList extends cdktf.ComplexList {

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
  public get(index: number): GroupOwnedSystemsOwnerOrganizationalUnitLinksOutputReference {
    return new GroupOwnedSystemsOwnerOrganizationalUnitLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedSystemsOwnerOrganizationalUnitPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupOwnedSystemsOwnerOrganizationalUnitPermissionsToTerraform(struct?: GroupOwnedSystemsOwnerOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupOwnedSystemsOwnerOrganizationalUnitPermissionsToHclTerraform(struct?: GroupOwnedSystemsOwnerOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedSystemsOwnerOrganizationalUnitPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedSystemsOwnerOrganizationalUnitPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedSystemsOwnerOrganizationalUnitPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupOwnedSystemsOwnerOrganizationalUnitPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedSystemsOwnerOrganizationalUnitPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedSystemsOwnerOrganizationalUnitPermissionsOutputReference {
    return new GroupOwnedSystemsOwnerOrganizationalUnitPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedSystemsOwnerOrganizationalUnit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

export function groupOwnedSystemsOwnerOrganizationalUnitToTerraform(struct?: GroupOwnedSystemsOwnerOrganizationalUnit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function groupOwnedSystemsOwnerOrganizationalUnitToHclTerraform(struct?: GroupOwnedSystemsOwnerOrganizationalUnit | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedSystemsOwnerOrganizationalUnitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedSystemsOwnerOrganizationalUnit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedSystemsOwnerOrganizationalUnit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupOwnedSystemsOwnerOrganizationalUnitLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupOwnedSystemsOwnerOrganizationalUnitPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface GroupOwnedSystemsOwnerPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#full Group#full}
  */
  readonly full?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#instances Group#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#operations Group#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#type_escaped Group#type_escaped}
  */
  readonly typeEscaped?: string;
}

export function groupOwnedSystemsOwnerPermissionsToTerraform(struct?: GroupOwnedSystemsOwnerPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: cdktf.stringToTerraform(struct!.full),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    type_escaped: cdktf.stringToTerraform(struct!.typeEscaped),
  }
}


export function groupOwnedSystemsOwnerPermissionsToHclTerraform(struct?: GroupOwnedSystemsOwnerPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: cdktf.stringToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_escaped: {
      value: cdktf.stringToHclTerraform(struct!.typeEscaped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedSystemsOwnerPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOwnedSystemsOwnerPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._typeEscaped !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEscaped = this._typeEscaped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedSystemsOwnerPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full = undefined;
      this._instances = undefined;
      this._operations = undefined;
      this._typeEscaped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full = value.full;
      this._instances = value.instances;
      this._operations = value.operations;
      this._typeEscaped = value.typeEscaped;
    }
  }

  // full - computed: true, optional: true, required: false
  private _full?: string; 
  public get full() {
    return this.getStringAttribute('full');
  }
  public set full(value: string) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // operations - computed: true, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // type_escaped - computed: true, optional: true, required: false
  private _typeEscaped?: string; 
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
  public set typeEscaped(value: string) {
    this._typeEscaped = value;
  }
  public resetTypeEscaped() {
    this._typeEscaped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEscapedInput() {
    return this._typeEscaped;
  }
}

export class GroupOwnedSystemsOwnerPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupOwnedSystemsOwnerPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupOwnedSystemsOwnerPermissionsOutputReference {
    return new GroupOwnedSystemsOwnerPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOwnedSystemsOwner {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/resources/group#organizational_unit Group#organizational_unit}
  */
  readonly organizationalUnit?: GroupOwnedSystemsOwnerOrganizationalUnit;
}

export function groupOwnedSystemsOwnerToTerraform(struct?: GroupOwnedSystemsOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    organizational_unit: groupOwnedSystemsOwnerOrganizationalUnitToTerraform(struct!.organizationalUnit),
  }
}


export function groupOwnedSystemsOwnerToHclTerraform(struct?: GroupOwnedSystemsOwner): any {
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
    organizational_unit: {
      value: groupOwnedSystemsOwnerOrganizationalUnitToHclTerraform(struct!.organizationalUnit),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupOwnedSystemsOwnerOrganizationalUnit",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOwnedSystemsOwnerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOwnedSystemsOwner | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._organizationalUnit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnit = this._organizationalUnit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOwnedSystemsOwner | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._organizationalUnit.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._organizationalUnit.internalValue = value.organizationalUnit;
    }
  }

  // admin - computed: true, optional: false, required: false
  public get admin() {
    return this.getBooleanAttribute('admin');
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupOwnedSystemsOwnerLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: true
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

  // organizational_unit - computed: true, optional: true, required: false
  private _organizationalUnit = new GroupOwnedSystemsOwnerOrganizationalUnitOutputReference(this, "organizational_unit");
  public get organizationalUnit() {
    return this._organizationalUnit;
  }
  public putOrganizationalUnit(value: GroupOwnedSystemsOwnerOrganizationalUnit) {
    this._organizationalUnit.internalValue = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit.internalValue;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupOwnedSystemsOwnerPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
