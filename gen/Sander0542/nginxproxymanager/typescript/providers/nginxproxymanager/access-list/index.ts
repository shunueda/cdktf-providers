// https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/access_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessListConfig extends cdktf.TerraformMetaArguments {
  /**
  * The access items of the access list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/access_list#access AccessList#access}
  */
  readonly access?: AccessListAccess[] | cdktf.IResolvable;
  /**
  * The authorization items of the access list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/access_list#authorizations AccessList#authorizations}
  */
  readonly authorizations?: AccessListAuthorizations[] | cdktf.IResolvable;
  /**
  * The name of the access list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/access_list#name AccessList#name}
  */
  readonly name: string;
  /**
  * Whether or not to pass the authorization header to the upstream server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/access_list#pass_auth AccessList#pass_auth}
  */
  readonly passAuth?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to satisfy any of the authorization items.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/access_list#satisfy_any AccessList#satisfy_any}
  */
  readonly satisfyAny?: boolean | cdktf.IResolvable;
}
export interface AccessListAccess {
  /**
  * The address of the access item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/access_list#address AccessList#address}
  */
  readonly address: string;
  /**
  * The directive of the access item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/access_list#directive AccessList#directive}
  */
  readonly directive: string;
}

export function accessListAccessToTerraform(struct?: AccessListAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    directive: cdktf.stringToTerraform(struct!.directive),
  }
}


export function accessListAccessToHclTerraform(struct?: AccessListAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    directive: {
      value: cdktf.stringToHclTerraform(struct!.directive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessListAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessListAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._directive !== undefined) {
      hasAnyValues = true;
      internalValueResult.directive = this._directive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessListAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._directive = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._directive = value.directive;
    }
  }

  // address - computed: true, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // directive - computed: true, optional: false, required: true
  private _directive?: string; 
  public get directive() {
    return this.getStringAttribute('directive');
  }
  public set directive(value: string) {
    this._directive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directiveInput() {
    return this._directive;
  }
}

export class AccessListAccessList extends cdktf.ComplexList {
  public internalValue? : AccessListAccess[] | cdktf.IResolvable

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
  public get(index: number): AccessListAccessOutputReference {
    return new AccessListAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessListAuthorizations {
  /**
  * The password hint of the authorization item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/access_list#password AccessList#password}
  */
  readonly password: string;
  /**
  * The username of the authorization item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/access_list#username AccessList#username}
  */
  readonly username: string;
}

export function accessListAuthorizationsToTerraform(struct?: AccessListAuthorizations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function accessListAuthorizationsToHclTerraform(struct?: AccessListAuthorizations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessListAuthorizationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessListAuthorizations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessListAuthorizations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: true, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: true, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class AccessListAuthorizationsList extends cdktf.ComplexList {
  public internalValue? : AccessListAuthorizations[] | cdktf.IResolvable

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
  public get(index: number): AccessListAuthorizationsOutputReference {
    return new AccessListAuthorizationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/access_list nginxproxymanager_access_list}
*/
export class AccessList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nginxproxymanager_access_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccessList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccessList to import
  * @param importFromId The id of the existing AccessList that should be imported. Refer to the {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/access_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccessList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nginxproxymanager_access_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/access_list nginxproxymanager_access_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessListConfig
  */
  public constructor(scope: Construct, id: string, config: AccessListConfig) {
    super(scope, id, {
      terraformResourceType: 'nginxproxymanager_access_list',
      terraformGeneratorMetadata: {
        providerName: 'nginxproxymanager',
        providerVersion: '1.2.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._access.internalValue = config.access;
    this._authorizations.internalValue = config.authorizations;
    this._name = config.name;
    this._passAuth = config.passAuth;
    this._satisfyAny = config.satisfyAny;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access - computed: true, optional: true, required: false
  private _access = new AccessListAccessList(this, "access", true);
  public get access() {
    return this._access;
  }
  public putAccess(value: AccessListAccess[] | cdktf.IResolvable) {
    this._access.internalValue = value;
  }
  public resetAccess() {
    this._access.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access.internalValue;
  }

  // authorizations - computed: true, optional: true, required: false
  private _authorizations = new AccessListAuthorizationsList(this, "authorizations", true);
  public get authorizations() {
    return this._authorizations;
  }
  public putAuthorizations(value: AccessListAuthorizations[] | cdktf.IResolvable) {
    this._authorizations.internalValue = value;
  }
  public resetAuthorizations() {
    this._authorizations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationsInput() {
    return this._authorizations.internalValue;
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // meta - computed: true, optional: false, required: false
  private _meta = new cdktf.StringMap(this, "meta");
  public get meta() {
    return this._meta;
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
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

  // owner_user_id - computed: true, optional: false, required: false
  public get ownerUserId() {
    return this.getNumberAttribute('owner_user_id');
  }

  // pass_auth - computed: true, optional: true, required: false
  private _passAuth?: boolean | cdktf.IResolvable; 
  public get passAuth() {
    return this.getBooleanAttribute('pass_auth');
  }
  public set passAuth(value: boolean | cdktf.IResolvable) {
    this._passAuth = value;
  }
  public resetPassAuth() {
    this._passAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passAuthInput() {
    return this._passAuth;
  }

  // satisfy_any - computed: true, optional: true, required: false
  private _satisfyAny?: boolean | cdktf.IResolvable; 
  public get satisfyAny() {
    return this.getBooleanAttribute('satisfy_any');
  }
  public set satisfyAny(value: boolean | cdktf.IResolvable) {
    this._satisfyAny = value;
  }
  public resetSatisfyAny() {
    this._satisfyAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get satisfyAnyInput() {
    return this._satisfyAny;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access: cdktf.listMapper(accessListAccessToTerraform, false)(this._access.internalValue),
      authorizations: cdktf.listMapper(accessListAuthorizationsToTerraform, false)(this._authorizations.internalValue),
      name: cdktf.stringToTerraform(this._name),
      pass_auth: cdktf.booleanToTerraform(this._passAuth),
      satisfy_any: cdktf.booleanToTerraform(this._satisfyAny),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access: {
        value: cdktf.listMapperHcl(accessListAccessToHclTerraform, false)(this._access.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AccessListAccessList",
      },
      authorizations: {
        value: cdktf.listMapperHcl(accessListAuthorizationsToHclTerraform, false)(this._authorizations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AccessListAuthorizationsList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pass_auth: {
        value: cdktf.booleanToHclTerraform(this._passAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      satisfy_any: {
        value: cdktf.booleanToHclTerraform(this._satisfyAny),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
