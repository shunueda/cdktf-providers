// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_api_service_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthorizeApiServiceOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * A single object that specifies properties related to access control settings of the API service operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_api_service_operation#access_control AuthorizeApiServiceOperation#access_control}
  */
  readonly accessControl?: AuthorizeApiServiceOperationAccessControl;
  /**
  * The ID of the API service to create and manage the API Service operation for.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_api_service_operation#api_service_id AuthorizeApiServiceOperation#api_service_id}
  */
  readonly apiServiceId: string;
  /**
  * The ID of the environment to create and manage the API Service in.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_api_service_operation#environment_id AuthorizeApiServiceOperation#environment_id}
  */
  readonly environmentId: string;
  /**
  * The methods that define the operation. No duplicates are allowed. Each element must be a valid HTTP token, according to [RFC 7230](https://datatracker.ietf.org/doc/html/rfc7230), and cannot exceed 64 characters. An empty array is not valid. To indicate that an operation is defined for every method, the `methods` array should be set to null. The `methods` array is limited to 10 entries.  Options are `DELETE`, `GET`, `OPTIONS`, `PATCH`, `POST`, `PUT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_api_service_operation#methods AuthorizeApiServiceOperation#methods}
  */
  readonly methods?: string[];
  /**
  * A string that specifies the API service operation name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_api_service_operation#name AuthorizeApiServiceOperation#name}
  */
  readonly name: string;
  /**
  * A set of objects that specifies the paths that define the operation. The same literal pattern is not allowed within the same operation (the pattern of a `paths` element must be unique as compared to all other patterns in the same `paths` array). However, the same literal pattern is allowed in different operations (for example, OperationA, `/path1`, OperationB, `/path1` is valid). This set is limited to 10 entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_api_service_operation#paths AuthorizeApiServiceOperation#paths}
  */
  readonly paths: AuthorizeApiServiceOperationPaths[] | cdktf.IResolvable;
}
export interface AuthorizeApiServiceOperationAccessControlGroupGroups {
  /**
  * A string that specifies the UUID that represents the ID of the PingOne group. Must be a valid PingOne resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_api_service_operation#id AuthorizeApiServiceOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function authorizeApiServiceOperationAccessControlGroupGroupsToTerraform(struct?: AuthorizeApiServiceOperationAccessControlGroupGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function authorizeApiServiceOperationAccessControlGroupGroupsToHclTerraform(struct?: AuthorizeApiServiceOperationAccessControlGroupGroups | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthorizeApiServiceOperationAccessControlGroupGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthorizeApiServiceOperationAccessControlGroupGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthorizeApiServiceOperationAccessControlGroupGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
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
}

export class AuthorizeApiServiceOperationAccessControlGroupGroupsList extends cdktf.ComplexList {
  public internalValue? : AuthorizeApiServiceOperationAccessControlGroupGroups[] | cdktf.IResolvable

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
  public get(index: number): AuthorizeApiServiceOperationAccessControlGroupGroupsOutputReference {
    return new AuthorizeApiServiceOperationAccessControlGroupGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthorizeApiServiceOperationAccessControlGroup {
  /**
  * A set of objects that define the access requirements for the operation. The end user must be a member of one or more of these groups to gain access to the operation. The ID must reference a group that exists at the time the data is persisted. There is no referential integrity between a group and this configuration. If a group is subsequently deleted, the access control configuration will continue to reference that group. The set must not contain more than 25 elements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_api_service_operation#groups AuthorizeApiServiceOperation#groups}
  */
  readonly groups: AuthorizeApiServiceOperationAccessControlGroupGroups[] | cdktf.IResolvable;
}

export function authorizeApiServiceOperationAccessControlGroupToTerraform(struct?: AuthorizeApiServiceOperationAccessControlGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    groups: cdktf.listMapper(authorizeApiServiceOperationAccessControlGroupGroupsToTerraform, false)(struct!.groups),
  }
}


export function authorizeApiServiceOperationAccessControlGroupToHclTerraform(struct?: AuthorizeApiServiceOperationAccessControlGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    groups: {
      value: cdktf.listMapperHcl(authorizeApiServiceOperationAccessControlGroupGroupsToHclTerraform, false)(struct!.groups),
      isBlock: true,
      type: "set",
      storageClassType: "AuthorizeApiServiceOperationAccessControlGroupGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthorizeApiServiceOperationAccessControlGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthorizeApiServiceOperationAccessControlGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthorizeApiServiceOperationAccessControlGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groups.internalValue = value.groups;
    }
  }

  // groups - computed: false, optional: false, required: true
  private _groups = new AuthorizeApiServiceOperationAccessControlGroupGroupsList(this, "groups", true);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: AuthorizeApiServiceOperationAccessControlGroupGroups[] | cdktf.IResolvable) {
    this._groups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }
}
export interface AuthorizeApiServiceOperationAccessControlPermission {
  /**
  * A string that specifies the application permission ID that defines the access requirements for the operation. The end user must be entitled to the specified application permission to gain access to the operation.  Must be a valid PingOne resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_api_service_operation#id AuthorizeApiServiceOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function authorizeApiServiceOperationAccessControlPermissionToTerraform(struct?: AuthorizeApiServiceOperationAccessControlPermission | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function authorizeApiServiceOperationAccessControlPermissionToHclTerraform(struct?: AuthorizeApiServiceOperationAccessControlPermission | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthorizeApiServiceOperationAccessControlPermissionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthorizeApiServiceOperationAccessControlPermission | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthorizeApiServiceOperationAccessControlPermission | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
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
}
export interface AuthorizeApiServiceOperationAccessControlScopeScopes {
  /**
  * A string that specifies the ID of the scope.  Must be a valid PingOne resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_api_service_operation#id AuthorizeApiServiceOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function authorizeApiServiceOperationAccessControlScopeScopesToTerraform(struct?: AuthorizeApiServiceOperationAccessControlScopeScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function authorizeApiServiceOperationAccessControlScopeScopesToHclTerraform(struct?: AuthorizeApiServiceOperationAccessControlScopeScopes | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthorizeApiServiceOperationAccessControlScopeScopesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthorizeApiServiceOperationAccessControlScopeScopes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthorizeApiServiceOperationAccessControlScopeScopes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
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
}

export class AuthorizeApiServiceOperationAccessControlScopeScopesList extends cdktf.ComplexList {
  public internalValue? : AuthorizeApiServiceOperationAccessControlScopeScopes[] | cdktf.IResolvable

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
  public get(index: number): AuthorizeApiServiceOperationAccessControlScopeScopesOutputReference {
    return new AuthorizeApiServiceOperationAccessControlScopeScopesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthorizeApiServiceOperationAccessControlScope {
  /**
  * A string that specifies the match type of the scope rule.  Options are `ALL` (the client must be authorized with all scopes configured in the `scopes` array to obtain access), `ANY` (the client must be authorized with one or more of the scopes configured in the `scopes` array to obtain access).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_api_service_operation#match_type AuthorizeApiServiceOperation#match_type}
  */
  readonly matchType?: string;
  /**
  * A set of objects that specify the scopes that define the access requirements for the operation. The client must be authorized with `ANY` or `ALL` of the scopes to be granted access, depending on the `match_type` field value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_api_service_operation#scopes AuthorizeApiServiceOperation#scopes}
  */
  readonly scopes: AuthorizeApiServiceOperationAccessControlScopeScopes[] | cdktf.IResolvable;
}

export function authorizeApiServiceOperationAccessControlScopeToTerraform(struct?: AuthorizeApiServiceOperationAccessControlScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_type: cdktf.stringToTerraform(struct!.matchType),
    scopes: cdktf.listMapper(authorizeApiServiceOperationAccessControlScopeScopesToTerraform, false)(struct!.scopes),
  }
}


export function authorizeApiServiceOperationAccessControlScopeToHclTerraform(struct?: AuthorizeApiServiceOperationAccessControlScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktf.listMapperHcl(authorizeApiServiceOperationAccessControlScopeScopesToHclTerraform, false)(struct!.scopes),
      isBlock: true,
      type: "set",
      storageClassType: "AuthorizeApiServiceOperationAccessControlScopeScopesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthorizeApiServiceOperationAccessControlScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthorizeApiServiceOperationAccessControlScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._scopes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthorizeApiServiceOperationAccessControlScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchType = undefined;
      this._scopes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchType = value.matchType;
      this._scopes.internalValue = value.scopes;
    }
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // scopes - computed: false, optional: false, required: true
  private _scopes = new AuthorizeApiServiceOperationAccessControlScopeScopesList(this, "scopes", true);
  public get scopes() {
    return this._scopes;
  }
  public putScopes(value: AuthorizeApiServiceOperationAccessControlScopeScopes[] | cdktf.IResolvable) {
    this._scopes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes.internalValue;
  }
}
export interface AuthorizeApiServiceOperationAccessControl {
  /**
  * A single object that defines the group membership requirements for the operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_api_service_operation#group AuthorizeApiServiceOperation#group}
  */
  readonly group?: AuthorizeApiServiceOperationAccessControlGroup;
  /**
  * A single object that defines permission requirements for the operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_api_service_operation#permission AuthorizeApiServiceOperation#permission}
  */
  readonly permission?: AuthorizeApiServiceOperationAccessControlPermission;
  /**
  * A single object that defines scope membership requirements for the operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_api_service_operation#scope AuthorizeApiServiceOperation#scope}
  */
  readonly scope?: AuthorizeApiServiceOperationAccessControlScope;
}

export function authorizeApiServiceOperationAccessControlToTerraform(struct?: AuthorizeApiServiceOperationAccessControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: authorizeApiServiceOperationAccessControlGroupToTerraform(struct!.group),
    permission: authorizeApiServiceOperationAccessControlPermissionToTerraform(struct!.permission),
    scope: authorizeApiServiceOperationAccessControlScopeToTerraform(struct!.scope),
  }
}


export function authorizeApiServiceOperationAccessControlToHclTerraform(struct?: AuthorizeApiServiceOperationAccessControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: authorizeApiServiceOperationAccessControlGroupToHclTerraform(struct!.group),
      isBlock: true,
      type: "struct",
      storageClassType: "AuthorizeApiServiceOperationAccessControlGroup",
    },
    permission: {
      value: authorizeApiServiceOperationAccessControlPermissionToHclTerraform(struct!.permission),
      isBlock: true,
      type: "struct",
      storageClassType: "AuthorizeApiServiceOperationAccessControlPermission",
    },
    scope: {
      value: authorizeApiServiceOperationAccessControlScopeToHclTerraform(struct!.scope),
      isBlock: true,
      type: "struct",
      storageClassType: "AuthorizeApiServiceOperationAccessControlScope",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthorizeApiServiceOperationAccessControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthorizeApiServiceOperationAccessControl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group?.internalValue;
    }
    if (this._permission?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission?.internalValue;
    }
    if (this._scope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthorizeApiServiceOperationAccessControl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group.internalValue = undefined;
      this._permission.internalValue = undefined;
      this._scope.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group.internalValue = value.group;
      this._permission.internalValue = value.permission;
      this._scope.internalValue = value.scope;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group = new AuthorizeApiServiceOperationAccessControlGroupOutputReference(this, "group");
  public get group() {
    return this._group;
  }
  public putGroup(value: AuthorizeApiServiceOperationAccessControlGroup) {
    this._group.internalValue = value;
  }
  public resetGroup() {
    this._group.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group.internalValue;
  }

  // permission - computed: false, optional: true, required: false
  private _permission = new AuthorizeApiServiceOperationAccessControlPermissionOutputReference(this, "permission");
  public get permission() {
    return this._permission;
  }
  public putPermission(value: AuthorizeApiServiceOperationAccessControlPermission) {
    this._permission.internalValue = value;
  }
  public resetPermission() {
    this._permission.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission.internalValue;
  }

  // scope - computed: false, optional: true, required: false
  private _scope = new AuthorizeApiServiceOperationAccessControlScopeOutputReference(this, "scope");
  public get scope() {
    return this._scope;
  }
  public putScope(value: AuthorizeApiServiceOperationAccessControlScope) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }
}
export interface AuthorizeApiServiceOperationPaths {
  /**
  * A string that specifies the pattern used to identify the path or paths for the operation. The semantics of the pattern are determined by the type. For any type, the pattern can contain characters that are otherwise invalid in a URL path. Invalid characters are handled by performing matching against a percent-decoded HTTP request target path. This allows an administrator to configure patterns without worrying about percent encoding special characters.
  * When the `type` is `PARAMETER`, the syntax outlined in the table below is enforced. Additionally, the pattern must contain a wildcard, double wildcard or named parameter. When the `type` is `EXACT`, the pattern can be any byte sequence except for ASCII control characters such as line feeds or carriage returns. The length of the pattern cannot exceed 2048 characters. The path pattern must not contain empty path segments such as `/../`, `//`, and `/./`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_api_service_operation#pattern AuthorizeApiServiceOperation#pattern}
  */
  readonly pattern: string;
  /**
  * A string that specifies the type of the pattern.  Options are `EXACT` (the verbatim pattern is compared against the path from the request using a case-sensitive comparison), `PARAMETER` (the pattern is compared against the path from the request using a case-sensitive comparison, using the syntax below to encode wildcards and named parameters).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_api_service_operation#type AuthorizeApiServiceOperation#type}
  */
  readonly type: string;
}

export function authorizeApiServiceOperationPathsToTerraform(struct?: AuthorizeApiServiceOperationPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pattern: cdktf.stringToTerraform(struct!.pattern),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function authorizeApiServiceOperationPathsToHclTerraform(struct?: AuthorizeApiServiceOperationPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
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

export class AuthorizeApiServiceOperationPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthorizeApiServiceOperationPaths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthorizeApiServiceOperationPaths | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pattern = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pattern = value.pattern;
      this._type = value.type;
    }
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
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

export class AuthorizeApiServiceOperationPathsList extends cdktf.ComplexList {
  public internalValue? : AuthorizeApiServiceOperationPaths[] | cdktf.IResolvable

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
  public get(index: number): AuthorizeApiServiceOperationPathsOutputReference {
    return new AuthorizeApiServiceOperationPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_api_service_operation pingone_authorize_api_service_operation}
*/
export class AuthorizeApiServiceOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_authorize_api_service_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthorizeApiServiceOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthorizeApiServiceOperation to import
  * @param importFromId The id of the existing AuthorizeApiServiceOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_api_service_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthorizeApiServiceOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_authorize_api_service_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_api_service_operation pingone_authorize_api_service_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthorizeApiServiceOperationConfig
  */
  public constructor(scope: Construct, id: string, config: AuthorizeApiServiceOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_authorize_api_service_operation',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessControl.internalValue = config.accessControl;
    this._apiServiceId = config.apiServiceId;
    this._environmentId = config.environmentId;
    this._methods = config.methods;
    this._name = config.name;
    this._paths.internalValue = config.paths;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_control - computed: false, optional: true, required: false
  private _accessControl = new AuthorizeApiServiceOperationAccessControlOutputReference(this, "access_control");
  public get accessControl() {
    return this._accessControl;
  }
  public putAccessControl(value: AuthorizeApiServiceOperationAccessControl) {
    this._accessControl.internalValue = value;
  }
  public resetAccessControl() {
    this._accessControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlInput() {
    return this._accessControl.internalValue;
  }

  // api_service_id - computed: false, optional: false, required: true
  private _apiServiceId?: string; 
  public get apiServiceId() {
    return this.getStringAttribute('api_service_id');
  }
  public set apiServiceId(value: string) {
    this._apiServiceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiServiceIdInput() {
    return this._apiServiceId;
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // methods - computed: false, optional: true, required: false
  private _methods?: string[]; 
  public get methods() {
    return cdktf.Fn.tolist(this.getListAttribute('methods'));
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  public resetMethods() {
    this._methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
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

  // paths - computed: false, optional: false, required: true
  private _paths = new AuthorizeApiServiceOperationPathsList(this, "paths", true);
  public get paths() {
    return this._paths;
  }
  public putPaths(value: AuthorizeApiServiceOperationPaths[] | cdktf.IResolvable) {
    this._paths.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths.internalValue;
  }

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_control: authorizeApiServiceOperationAccessControlToTerraform(this._accessControl.internalValue),
      api_service_id: cdktf.stringToTerraform(this._apiServiceId),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      methods: cdktf.listMapper(cdktf.stringToTerraform, false)(this._methods),
      name: cdktf.stringToTerraform(this._name),
      paths: cdktf.listMapper(authorizeApiServiceOperationPathsToTerraform, false)(this._paths.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_control: {
        value: authorizeApiServiceOperationAccessControlToHclTerraform(this._accessControl.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AuthorizeApiServiceOperationAccessControl",
      },
      api_service_id: {
        value: cdktf.stringToHclTerraform(this._apiServiceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      methods: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._methods),
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
      paths: {
        value: cdktf.listMapperHcl(authorizeApiServiceOperationPathsToHclTerraform, false)(this._paths.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AuthorizeApiServiceOperationPathsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
