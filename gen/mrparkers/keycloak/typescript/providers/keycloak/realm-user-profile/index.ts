// https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_user_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RealmUserProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_user_profile#id RealmUserProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_user_profile#realm_id RealmUserProfile#realm_id}
  */
  readonly realmId: string;
  /**
  * attribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_user_profile#attribute RealmUserProfile#attribute}
  */
  readonly attribute?: RealmUserProfileAttribute[] | cdktf.IResolvable;
  /**
  * group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_user_profile#group RealmUserProfile#group}
  */
  readonly group?: RealmUserProfileGroup[] | cdktf.IResolvable;
}
export interface RealmUserProfileAttributePermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_user_profile#edit RealmUserProfile#edit}
  */
  readonly edit: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_user_profile#view RealmUserProfile#view}
  */
  readonly view: string[];
}

export function realmUserProfileAttributePermissionsToTerraform(struct?: RealmUserProfileAttributePermissionsOutputReference | RealmUserProfileAttributePermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    edit: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.edit),
    view: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.view),
  }
}


export function realmUserProfileAttributePermissionsToHclTerraform(struct?: RealmUserProfileAttributePermissionsOutputReference | RealmUserProfileAttributePermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    edit: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.edit),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    view: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.view),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RealmUserProfileAttributePermissionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RealmUserProfileAttributePermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._edit !== undefined) {
      hasAnyValues = true;
      internalValueResult.edit = this._edit;
    }
    if (this._view !== undefined) {
      hasAnyValues = true;
      internalValueResult.view = this._view;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RealmUserProfileAttributePermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._edit = undefined;
      this._view = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._edit = value.edit;
      this._view = value.view;
    }
  }

  // edit - computed: false, optional: false, required: true
  private _edit?: string[]; 
  public get edit() {
    return cdktf.Fn.tolist(this.getListAttribute('edit'));
  }
  public set edit(value: string[]) {
    this._edit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get editInput() {
    return this._edit;
  }

  // view - computed: false, optional: false, required: true
  private _view?: string[]; 
  public get view() {
    return cdktf.Fn.tolist(this.getListAttribute('view'));
  }
  public set view(value: string[]) {
    this._view = value;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view;
  }
}
export interface RealmUserProfileAttributeValidator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_user_profile#config RealmUserProfile#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_user_profile#name RealmUserProfile#name}
  */
  readonly name: string;
}

export function realmUserProfileAttributeValidatorToTerraform(struct?: RealmUserProfileAttributeValidator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.config),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function realmUserProfileAttributeValidatorToHclTerraform(struct?: RealmUserProfileAttributeValidator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.config),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class RealmUserProfileAttributeValidatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RealmUserProfileAttributeValidator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RealmUserProfileAttributeValidator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._name = value.name;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
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

export class RealmUserProfileAttributeValidatorList extends cdktf.ComplexList {
  public internalValue? : RealmUserProfileAttributeValidator[] | cdktf.IResolvable

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
  public get(index: number): RealmUserProfileAttributeValidatorOutputReference {
    return new RealmUserProfileAttributeValidatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RealmUserProfileAttribute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_user_profile#annotations RealmUserProfile#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_user_profile#display_name RealmUserProfile#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_user_profile#enabled_when_scope RealmUserProfile#enabled_when_scope}
  */
  readonly enabledWhenScope?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_user_profile#group RealmUserProfile#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_user_profile#name RealmUserProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_user_profile#required_for_roles RealmUserProfile#required_for_roles}
  */
  readonly requiredForRoles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_user_profile#required_for_scopes RealmUserProfile#required_for_scopes}
  */
  readonly requiredForScopes?: string[];
  /**
  * permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_user_profile#permissions RealmUserProfile#permissions}
  */
  readonly permissions?: RealmUserProfileAttributePermissions;
  /**
  * validator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_user_profile#validator RealmUserProfile#validator}
  */
  readonly validator?: RealmUserProfileAttributeValidator[] | cdktf.IResolvable;
}

export function realmUserProfileAttributeToTerraform(struct?: RealmUserProfileAttribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    enabled_when_scope: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enabledWhenScope),
    group: cdktf.stringToTerraform(struct!.group),
    name: cdktf.stringToTerraform(struct!.name),
    required_for_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requiredForRoles),
    required_for_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requiredForScopes),
    permissions: realmUserProfileAttributePermissionsToTerraform(struct!.permissions),
    validator: cdktf.listMapper(realmUserProfileAttributeValidatorToTerraform, true)(struct!.validator),
  }
}


export function realmUserProfileAttributeToHclTerraform(struct?: RealmUserProfileAttribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled_when_scope: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enabledWhenScope),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
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
    required_for_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requiredForRoles),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    required_for_scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requiredForScopes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    permissions: {
      value: realmUserProfileAttributePermissionsToHclTerraform(struct!.permissions),
      isBlock: true,
      type: "list",
      storageClassType: "RealmUserProfileAttributePermissionsList",
    },
    validator: {
      value: cdktf.listMapperHcl(realmUserProfileAttributeValidatorToHclTerraform, true)(struct!.validator),
      isBlock: true,
      type: "set",
      storageClassType: "RealmUserProfileAttributeValidatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RealmUserProfileAttributeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RealmUserProfileAttribute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._enabledWhenScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledWhenScope = this._enabledWhenScope;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._requiredForRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredForRoles = this._requiredForRoles;
    }
    if (this._requiredForScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredForScopes = this._requiredForScopes;
    }
    if (this._permissions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions?.internalValue;
    }
    if (this._validator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validator = this._validator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RealmUserProfileAttribute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._displayName = undefined;
      this._enabledWhenScope = undefined;
      this._group = undefined;
      this._name = undefined;
      this._requiredForRoles = undefined;
      this._requiredForScopes = undefined;
      this._permissions.internalValue = undefined;
      this._validator.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._displayName = value.displayName;
      this._enabledWhenScope = value.enabledWhenScope;
      this._group = value.group;
      this._name = value.name;
      this._requiredForRoles = value.requiredForRoles;
      this._requiredForScopes = value.requiredForScopes;
      this._permissions.internalValue = value.permissions;
      this._validator.internalValue = value.validator;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // display_name - computed: false, optional: true, required: false
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

  // enabled_when_scope - computed: false, optional: true, required: false
  private _enabledWhenScope?: string[]; 
  public get enabledWhenScope() {
    return cdktf.Fn.tolist(this.getListAttribute('enabled_when_scope'));
  }
  public set enabledWhenScope(value: string[]) {
    this._enabledWhenScope = value;
  }
  public resetEnabledWhenScope() {
    this._enabledWhenScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledWhenScopeInput() {
    return this._enabledWhenScope;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // required_for_roles - computed: false, optional: true, required: false
  private _requiredForRoles?: string[]; 
  public get requiredForRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('required_for_roles'));
  }
  public set requiredForRoles(value: string[]) {
    this._requiredForRoles = value;
  }
  public resetRequiredForRoles() {
    this._requiredForRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredForRolesInput() {
    return this._requiredForRoles;
  }

  // required_for_scopes - computed: false, optional: true, required: false
  private _requiredForScopes?: string[]; 
  public get requiredForScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('required_for_scopes'));
  }
  public set requiredForScopes(value: string[]) {
    this._requiredForScopes = value;
  }
  public resetRequiredForScopes() {
    this._requiredForScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredForScopesInput() {
    return this._requiredForScopes;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions = new RealmUserProfileAttributePermissionsOutputReference(this, "permissions");
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: RealmUserProfileAttributePermissions) {
    this._permissions.internalValue = value;
  }
  public resetPermissions() {
    this._permissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
  }

  // validator - computed: false, optional: true, required: false
  private _validator = new RealmUserProfileAttributeValidatorList(this, "validator", true);
  public get validator() {
    return this._validator;
  }
  public putValidator(value: RealmUserProfileAttributeValidator[] | cdktf.IResolvable) {
    this._validator.internalValue = value;
  }
  public resetValidator() {
    this._validator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validatorInput() {
    return this._validator.internalValue;
  }
}

export class RealmUserProfileAttributeList extends cdktf.ComplexList {
  public internalValue? : RealmUserProfileAttribute[] | cdktf.IResolvable

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
  public get(index: number): RealmUserProfileAttributeOutputReference {
    return new RealmUserProfileAttributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RealmUserProfileGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_user_profile#annotations RealmUserProfile#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_user_profile#display_description RealmUserProfile#display_description}
  */
  readonly displayDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_user_profile#display_header RealmUserProfile#display_header}
  */
  readonly displayHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_user_profile#name RealmUserProfile#name}
  */
  readonly name: string;
}

export function realmUserProfileGroupToTerraform(struct?: RealmUserProfileGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    display_description: cdktf.stringToTerraform(struct!.displayDescription),
    display_header: cdktf.stringToTerraform(struct!.displayHeader),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function realmUserProfileGroupToHclTerraform(struct?: RealmUserProfileGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    display_description: {
      value: cdktf.stringToHclTerraform(struct!.displayDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_header: {
      value: cdktf.stringToHclTerraform(struct!.displayHeader),
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

export class RealmUserProfileGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RealmUserProfileGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._displayDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayDescription = this._displayDescription;
    }
    if (this._displayHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayHeader = this._displayHeader;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RealmUserProfileGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._displayDescription = undefined;
      this._displayHeader = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._displayDescription = value.displayDescription;
      this._displayHeader = value.displayHeader;
      this._name = value.name;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // display_description - computed: false, optional: true, required: false
  private _displayDescription?: string; 
  public get displayDescription() {
    return this.getStringAttribute('display_description');
  }
  public set displayDescription(value: string) {
    this._displayDescription = value;
  }
  public resetDisplayDescription() {
    this._displayDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayDescriptionInput() {
    return this._displayDescription;
  }

  // display_header - computed: false, optional: true, required: false
  private _displayHeader?: string; 
  public get displayHeader() {
    return this.getStringAttribute('display_header');
  }
  public set displayHeader(value: string) {
    this._displayHeader = value;
  }
  public resetDisplayHeader() {
    this._displayHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayHeaderInput() {
    return this._displayHeader;
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

export class RealmUserProfileGroupList extends cdktf.ComplexList {
  public internalValue? : RealmUserProfileGroup[] | cdktf.IResolvable

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
  public get(index: number): RealmUserProfileGroupOutputReference {
    return new RealmUserProfileGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_user_profile keycloak_realm_user_profile}
*/
export class RealmUserProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keycloak_realm_user_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RealmUserProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RealmUserProfile to import
  * @param importFromId The id of the existing RealmUserProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_user_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RealmUserProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keycloak_realm_user_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_user_profile keycloak_realm_user_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RealmUserProfileConfig
  */
  public constructor(scope: Construct, id: string, config: RealmUserProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'keycloak_realm_user_profile',
      terraformGeneratorMetadata: {
        providerName: 'keycloak',
        providerVersion: '4.4.0',
        providerVersionConstraint: '4.4.0'
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
    this._realmId = config.realmId;
    this._attribute.internalValue = config.attribute;
    this._group.internalValue = config.group;
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

  // realm_id - computed: false, optional: false, required: true
  private _realmId?: string; 
  public get realmId() {
    return this.getStringAttribute('realm_id');
  }
  public set realmId(value: string) {
    this._realmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realmIdInput() {
    return this._realmId;
  }

  // attribute - computed: false, optional: true, required: false
  private _attribute = new RealmUserProfileAttributeList(this, "attribute", false);
  public get attribute() {
    return this._attribute;
  }
  public putAttribute(value: RealmUserProfileAttribute[] | cdktf.IResolvable) {
    this._attribute.internalValue = value;
  }
  public resetAttribute() {
    this._attribute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute.internalValue;
  }

  // group - computed: false, optional: true, required: false
  private _group = new RealmUserProfileGroupList(this, "group", true);
  public get group() {
    return this._group;
  }
  public putGroup(value: RealmUserProfileGroup[] | cdktf.IResolvable) {
    this._group.internalValue = value;
  }
  public resetGroup() {
    this._group.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      realm_id: cdktf.stringToTerraform(this._realmId),
      attribute: cdktf.listMapper(realmUserProfileAttributeToTerraform, true)(this._attribute.internalValue),
      group: cdktf.listMapper(realmUserProfileGroupToTerraform, true)(this._group.internalValue),
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
      realm_id: {
        value: cdktf.stringToHclTerraform(this._realmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute: {
        value: cdktf.listMapperHcl(realmUserProfileAttributeToHclTerraform, true)(this._attribute.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RealmUserProfileAttributeList",
      },
      group: {
        value: cdktf.listMapperHcl(realmUserProfileGroupToHclTerraform, true)(this._group.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RealmUserProfileGroupList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
