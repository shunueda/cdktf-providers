// https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/data-sources/user_attribute_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAuth0UserAttributeProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/data-sources/user_attribute_profile#id DataAuth0UserAttributeProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the User Attribute Profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/data-sources/user_attribute_profile#name DataAuth0UserAttributeProfile#name}
  */
  readonly name?: string;
  /**
  * The ID of the User Attribute Profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/data-sources/user_attribute_profile#user_attribute_profile_id DataAuth0UserAttributeProfile#user_attribute_profile_id}
  */
  readonly userAttributeProfileId?: string;
}
export interface DataAuth0UserAttributeProfileUserAttributesOidcMapping {
}

export function dataAuth0UserAttributeProfileUserAttributesOidcMappingToTerraform(struct?: DataAuth0UserAttributeProfileUserAttributesOidcMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0UserAttributeProfileUserAttributesOidcMappingToHclTerraform(struct?: DataAuth0UserAttributeProfileUserAttributesOidcMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0UserAttributeProfileUserAttributesOidcMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAuth0UserAttributeProfileUserAttributesOidcMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0UserAttributeProfileUserAttributesOidcMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // mapping - computed: true, optional: false, required: false
  public get mapping() {
    return this.getStringAttribute('mapping');
  }
}

export class DataAuth0UserAttributeProfileUserAttributesOidcMappingList extends cdktf.ComplexList {

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
  public get(index: number): DataAuth0UserAttributeProfileUserAttributesOidcMappingOutputReference {
    return new DataAuth0UserAttributeProfileUserAttributesOidcMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0UserAttributeProfileUserAttributesStrategyOverridesOidcMapping {
}

export function dataAuth0UserAttributeProfileUserAttributesStrategyOverridesOidcMappingToTerraform(struct?: DataAuth0UserAttributeProfileUserAttributesStrategyOverridesOidcMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0UserAttributeProfileUserAttributesStrategyOverridesOidcMappingToHclTerraform(struct?: DataAuth0UserAttributeProfileUserAttributesStrategyOverridesOidcMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0UserAttributeProfileUserAttributesStrategyOverridesOidcMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAuth0UserAttributeProfileUserAttributesStrategyOverridesOidcMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0UserAttributeProfileUserAttributesStrategyOverridesOidcMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // mapping - computed: true, optional: false, required: false
  public get mapping() {
    return this.getStringAttribute('mapping');
  }
}

export class DataAuth0UserAttributeProfileUserAttributesStrategyOverridesOidcMappingList extends cdktf.ComplexList {

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
  public get(index: number): DataAuth0UserAttributeProfileUserAttributesStrategyOverridesOidcMappingOutputReference {
    return new DataAuth0UserAttributeProfileUserAttributesStrategyOverridesOidcMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0UserAttributeProfileUserAttributesStrategyOverrides {
}

export function dataAuth0UserAttributeProfileUserAttributesStrategyOverridesToTerraform(struct?: DataAuth0UserAttributeProfileUserAttributesStrategyOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0UserAttributeProfileUserAttributesStrategyOverridesToHclTerraform(struct?: DataAuth0UserAttributeProfileUserAttributesStrategyOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0UserAttributeProfileUserAttributesStrategyOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAuth0UserAttributeProfileUserAttributesStrategyOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0UserAttributeProfileUserAttributesStrategyOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // oidc_mapping - computed: true, optional: false, required: false
  private _oidcMapping = new DataAuth0UserAttributeProfileUserAttributesStrategyOverridesOidcMappingList(this, "oidc_mapping", false);
  public get oidcMapping() {
    return this._oidcMapping;
  }

  // saml_mapping - computed: true, optional: false, required: false
  public get samlMapping() {
    return this.getListAttribute('saml_mapping');
  }

  // scim_mapping - computed: true, optional: false, required: false
  public get scimMapping() {
    return this.getStringAttribute('scim_mapping');
  }

  // strategy - computed: true, optional: false, required: false
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
}

export class DataAuth0UserAttributeProfileUserAttributesStrategyOverridesList extends cdktf.ComplexList {

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
  public get(index: number): DataAuth0UserAttributeProfileUserAttributesStrategyOverridesOutputReference {
    return new DataAuth0UserAttributeProfileUserAttributesStrategyOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0UserAttributeProfileUserAttributes {
}

export function dataAuth0UserAttributeProfileUserAttributesToTerraform(struct?: DataAuth0UserAttributeProfileUserAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0UserAttributeProfileUserAttributesToHclTerraform(struct?: DataAuth0UserAttributeProfileUserAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0UserAttributeProfileUserAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAuth0UserAttributeProfileUserAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0UserAttributeProfileUserAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth0_mapping - computed: true, optional: false, required: false
  public get auth0Mapping() {
    return this.getStringAttribute('auth0_mapping');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // oidc_mapping - computed: true, optional: false, required: false
  private _oidcMapping = new DataAuth0UserAttributeProfileUserAttributesOidcMappingList(this, "oidc_mapping", false);
  public get oidcMapping() {
    return this._oidcMapping;
  }

  // profile_required - computed: true, optional: false, required: false
  public get profileRequired() {
    return this.getBooleanAttribute('profile_required');
  }

  // saml_mapping - computed: true, optional: false, required: false
  public get samlMapping() {
    return this.getListAttribute('saml_mapping');
  }

  // scim_mapping - computed: true, optional: false, required: false
  public get scimMapping() {
    return this.getStringAttribute('scim_mapping');
  }

  // strategy_overrides - computed: true, optional: false, required: false
  private _strategyOverrides = new DataAuth0UserAttributeProfileUserAttributesStrategyOverridesList(this, "strategy_overrides", false);
  public get strategyOverrides() {
    return this._strategyOverrides;
  }
}

export class DataAuth0UserAttributeProfileUserAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataAuth0UserAttributeProfileUserAttributesOutputReference {
    return new DataAuth0UserAttributeProfileUserAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0UserAttributeProfileUserIdStrategyOverrides {
}

export function dataAuth0UserAttributeProfileUserIdStrategyOverridesToTerraform(struct?: DataAuth0UserAttributeProfileUserIdStrategyOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0UserAttributeProfileUserIdStrategyOverridesToHclTerraform(struct?: DataAuth0UserAttributeProfileUserIdStrategyOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0UserAttributeProfileUserIdStrategyOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAuth0UserAttributeProfileUserIdStrategyOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0UserAttributeProfileUserIdStrategyOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // oidc_mapping - computed: true, optional: false, required: false
  public get oidcMapping() {
    return this.getStringAttribute('oidc_mapping');
  }

  // saml_mapping - computed: true, optional: false, required: false
  public get samlMapping() {
    return this.getListAttribute('saml_mapping');
  }

  // scim_mapping - computed: true, optional: false, required: false
  public get scimMapping() {
    return this.getStringAttribute('scim_mapping');
  }

  // strategy - computed: true, optional: false, required: false
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
}

export class DataAuth0UserAttributeProfileUserIdStrategyOverridesList extends cdktf.ComplexList {

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
  public get(index: number): DataAuth0UserAttributeProfileUserIdStrategyOverridesOutputReference {
    return new DataAuth0UserAttributeProfileUserIdStrategyOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0UserAttributeProfileUserId {
}

export function dataAuth0UserAttributeProfileUserIdToTerraform(struct?: DataAuth0UserAttributeProfileUserId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0UserAttributeProfileUserIdToHclTerraform(struct?: DataAuth0UserAttributeProfileUserId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0UserAttributeProfileUserIdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAuth0UserAttributeProfileUserId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0UserAttributeProfileUserId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // oidc_mapping - computed: true, optional: false, required: false
  public get oidcMapping() {
    return this.getStringAttribute('oidc_mapping');
  }

  // saml_mapping - computed: true, optional: false, required: false
  public get samlMapping() {
    return this.getListAttribute('saml_mapping');
  }

  // scim_mapping - computed: true, optional: false, required: false
  public get scimMapping() {
    return this.getStringAttribute('scim_mapping');
  }

  // strategy_overrides - computed: true, optional: false, required: false
  private _strategyOverrides = new DataAuth0UserAttributeProfileUserIdStrategyOverridesList(this, "strategy_overrides", false);
  public get strategyOverrides() {
    return this._strategyOverrides;
  }
}

export class DataAuth0UserAttributeProfileUserIdList extends cdktf.ComplexList {

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
  public get(index: number): DataAuth0UserAttributeProfileUserIdOutputReference {
    return new DataAuth0UserAttributeProfileUserIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/data-sources/user_attribute_profile auth0_user_attribute_profile}
*/
export class DataAuth0UserAttributeProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0_user_attribute_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAuth0UserAttributeProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAuth0UserAttributeProfile to import
  * @param importFromId The id of the existing DataAuth0UserAttributeProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/data-sources/user_attribute_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAuth0UserAttributeProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_user_attribute_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/data-sources/user_attribute_profile auth0_user_attribute_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAuth0UserAttributeProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAuth0UserAttributeProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'auth0_user_attribute_profile',
      terraformGeneratorMetadata: {
        providerName: 'auth0',
        providerVersion: '1.34.0',
        providerVersionConstraint: '1.34.0'
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
    this._userAttributeProfileId = config.userAttributeProfileId;
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

  // name - computed: false, optional: true, required: false
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

  // user_attribute_profile_id - computed: false, optional: true, required: false
  private _userAttributeProfileId?: string; 
  public get userAttributeProfileId() {
    return this.getStringAttribute('user_attribute_profile_id');
  }
  public set userAttributeProfileId(value: string) {
    this._userAttributeProfileId = value;
  }
  public resetUserAttributeProfileId() {
    this._userAttributeProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAttributeProfileIdInput() {
    return this._userAttributeProfileId;
  }

  // user_attributes - computed: true, optional: false, required: false
  private _userAttributes = new DataAuth0UserAttributeProfileUserAttributesList(this, "user_attributes", false);
  public get userAttributes() {
    return this._userAttributes;
  }

  // user_id - computed: true, optional: false, required: false
  private _userId = new DataAuth0UserAttributeProfileUserIdList(this, "user_id", false);
  public get userId() {
    return this._userId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      user_attribute_profile_id: cdktf.stringToTerraform(this._userAttributeProfileId),
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
      user_attribute_profile_id: {
        value: cdktf.stringToHclTerraform(this._userAttributeProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
