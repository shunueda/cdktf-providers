// https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/user_attribute_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserAttributeProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/user_attribute_profile#id UserAttributeProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the User Attribute Profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/user_attribute_profile#name UserAttributeProfile#name}
  */
  readonly name: string;
  /**
  * user_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/user_attribute_profile#user_attributes UserAttributeProfile#user_attributes}
  */
  readonly userAttributes: UserAttributeProfileUserAttributes[] | cdktf.IResolvable;
  /**
  * user_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/user_attribute_profile#user_id UserAttributeProfile#user_id}
  */
  readonly userId?: UserAttributeProfileUserId;
}
export interface UserAttributeProfileUserAttributesOidcMapping {
  /**
  * Display name for the OIDC mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/user_attribute_profile#display_name UserAttributeProfile#display_name}
  */
  readonly displayName?: string;
  /**
  * The OIDC mapping field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/user_attribute_profile#mapping UserAttributeProfile#mapping}
  */
  readonly mapping: string;
}

export function userAttributeProfileUserAttributesOidcMappingToTerraform(struct?: UserAttributeProfileUserAttributesOidcMappingOutputReference | UserAttributeProfileUserAttributesOidcMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    mapping: cdktf.stringToTerraform(struct!.mapping),
  }
}


export function userAttributeProfileUserAttributesOidcMappingToHclTerraform(struct?: UserAttributeProfileUserAttributesOidcMappingOutputReference | UserAttributeProfileUserAttributesOidcMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mapping: {
      value: cdktf.stringToHclTerraform(struct!.mapping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserAttributeProfileUserAttributesOidcMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UserAttributeProfileUserAttributesOidcMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._mapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapping = this._mapping;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserAttributeProfileUserAttributesOidcMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayName = undefined;
      this._mapping = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayName = value.displayName;
      this._mapping = value.mapping;
    }
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

  // mapping - computed: false, optional: false, required: true
  private _mapping?: string; 
  public get mapping() {
    return this.getStringAttribute('mapping');
  }
  public set mapping(value: string) {
    this._mapping = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingInput() {
    return this._mapping;
  }
}
export interface UserAttributeProfileUserAttributesStrategyOverridesOidcMapping {
  /**
  * Display name for the OIDC mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/user_attribute_profile#display_name UserAttributeProfile#display_name}
  */
  readonly displayName?: string;
  /**
  * The OIDC mapping field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/user_attribute_profile#mapping UserAttributeProfile#mapping}
  */
  readonly mapping: string;
}

export function userAttributeProfileUserAttributesStrategyOverridesOidcMappingToTerraform(struct?: UserAttributeProfileUserAttributesStrategyOverridesOidcMappingOutputReference | UserAttributeProfileUserAttributesStrategyOverridesOidcMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    mapping: cdktf.stringToTerraform(struct!.mapping),
  }
}


export function userAttributeProfileUserAttributesStrategyOverridesOidcMappingToHclTerraform(struct?: UserAttributeProfileUserAttributesStrategyOverridesOidcMappingOutputReference | UserAttributeProfileUserAttributesStrategyOverridesOidcMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mapping: {
      value: cdktf.stringToHclTerraform(struct!.mapping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserAttributeProfileUserAttributesStrategyOverridesOidcMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UserAttributeProfileUserAttributesStrategyOverridesOidcMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._mapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapping = this._mapping;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserAttributeProfileUserAttributesStrategyOverridesOidcMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayName = undefined;
      this._mapping = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayName = value.displayName;
      this._mapping = value.mapping;
    }
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

  // mapping - computed: false, optional: false, required: true
  private _mapping?: string; 
  public get mapping() {
    return this.getStringAttribute('mapping');
  }
  public set mapping(value: string) {
    this._mapping = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingInput() {
    return this._mapping;
  }
}
export interface UserAttributeProfileUserAttributesStrategyOverrides {
  /**
  * SAML mapping override for this strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/user_attribute_profile#saml_mapping UserAttributeProfile#saml_mapping}
  */
  readonly samlMapping?: string[];
  /**
  * SCIM mapping override for this strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/user_attribute_profile#scim_mapping UserAttributeProfile#scim_mapping}
  */
  readonly scimMapping?: string;
  /**
  * The strategy name (e.g., 'oidc', 'samlp', 'ad', etc.).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/user_attribute_profile#strategy UserAttributeProfile#strategy}
  */
  readonly strategy: string;
  /**
  * oidc_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/user_attribute_profile#oidc_mapping UserAttributeProfile#oidc_mapping}
  */
  readonly oidcMapping?: UserAttributeProfileUserAttributesStrategyOverridesOidcMapping;
}

export function userAttributeProfileUserAttributesStrategyOverridesToTerraform(struct?: UserAttributeProfileUserAttributesStrategyOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    saml_mapping: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.samlMapping),
    scim_mapping: cdktf.stringToTerraform(struct!.scimMapping),
    strategy: cdktf.stringToTerraform(struct!.strategy),
    oidc_mapping: userAttributeProfileUserAttributesStrategyOverridesOidcMappingToTerraform(struct!.oidcMapping),
  }
}


export function userAttributeProfileUserAttributesStrategyOverridesToHclTerraform(struct?: UserAttributeProfileUserAttributesStrategyOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    saml_mapping: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.samlMapping),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    scim_mapping: {
      value: cdktf.stringToHclTerraform(struct!.scimMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oidc_mapping: {
      value: userAttributeProfileUserAttributesStrategyOverridesOidcMappingToHclTerraform(struct!.oidcMapping),
      isBlock: true,
      type: "list",
      storageClassType: "UserAttributeProfileUserAttributesStrategyOverridesOidcMappingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserAttributeProfileUserAttributesStrategyOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserAttributeProfileUserAttributesStrategyOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._samlMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlMapping = this._samlMapping;
    }
    if (this._scimMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.scimMapping = this._scimMapping;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    if (this._oidcMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidcMapping = this._oidcMapping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserAttributeProfileUserAttributesStrategyOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._samlMapping = undefined;
      this._scimMapping = undefined;
      this._strategy = undefined;
      this._oidcMapping.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._samlMapping = value.samlMapping;
      this._scimMapping = value.scimMapping;
      this._strategy = value.strategy;
      this._oidcMapping.internalValue = value.oidcMapping;
    }
  }

  // saml_mapping - computed: true, optional: true, required: false
  private _samlMapping?: string[]; 
  public get samlMapping() {
    return this.getListAttribute('saml_mapping');
  }
  public set samlMapping(value: string[]) {
    this._samlMapping = value;
  }
  public resetSamlMapping() {
    this._samlMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlMappingInput() {
    return this._samlMapping;
  }

  // scim_mapping - computed: true, optional: true, required: false
  private _scimMapping?: string; 
  public get scimMapping() {
    return this.getStringAttribute('scim_mapping');
  }
  public set scimMapping(value: string) {
    this._scimMapping = value;
  }
  public resetScimMapping() {
    this._scimMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scimMappingInput() {
    return this._scimMapping;
  }

  // strategy - computed: false, optional: false, required: true
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // oidc_mapping - computed: false, optional: true, required: false
  private _oidcMapping = new UserAttributeProfileUserAttributesStrategyOverridesOidcMappingOutputReference(this, "oidc_mapping");
  public get oidcMapping() {
    return this._oidcMapping;
  }
  public putOidcMapping(value: UserAttributeProfileUserAttributesStrategyOverridesOidcMapping) {
    this._oidcMapping.internalValue = value;
  }
  public resetOidcMapping() {
    this._oidcMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcMappingInput() {
    return this._oidcMapping.internalValue;
  }
}

export class UserAttributeProfileUserAttributesStrategyOverridesList extends cdktf.ComplexList {
  public internalValue? : UserAttributeProfileUserAttributesStrategyOverrides[] | cdktf.IResolvable

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
  public get(index: number): UserAttributeProfileUserAttributesStrategyOverridesOutputReference {
    return new UserAttributeProfileUserAttributesStrategyOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserAttributeProfileUserAttributes {
  /**
  * The Auth0 mapping for the user attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/user_attribute_profile#auth0_mapping UserAttributeProfile#auth0_mapping}
  */
  readonly auth0Mapping: string;
  /**
  * Description of the user attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/user_attribute_profile#description UserAttributeProfile#description}
  */
  readonly description: string;
  /**
  * Display label for the user attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/user_attribute_profile#label UserAttributeProfile#label}
  */
  readonly label: string;
  /**
  * Name of the user attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/user_attribute_profile#name UserAttributeProfile#name}
  */
  readonly name: string;
  /**
  * Whether the attribute is required in the profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/user_attribute_profile#profile_required UserAttributeProfile#profile_required}
  */
  readonly profileRequired: boolean | cdktf.IResolvable;
  /**
  * SAML mapping override for this strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/user_attribute_profile#saml_mapping UserAttributeProfile#saml_mapping}
  */
  readonly samlMapping?: string[];
  /**
  * The SCIM mapping for the user attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/user_attribute_profile#scim_mapping UserAttributeProfile#scim_mapping}
  */
  readonly scimMapping?: string;
  /**
  * oidc_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/user_attribute_profile#oidc_mapping UserAttributeProfile#oidc_mapping}
  */
  readonly oidcMapping?: UserAttributeProfileUserAttributesOidcMapping;
  /**
  * strategy_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/user_attribute_profile#strategy_overrides UserAttributeProfile#strategy_overrides}
  */
  readonly strategyOverrides?: UserAttributeProfileUserAttributesStrategyOverrides[] | cdktf.IResolvable;
}

export function userAttributeProfileUserAttributesToTerraform(struct?: UserAttributeProfileUserAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth0_mapping: cdktf.stringToTerraform(struct!.auth0Mapping),
    description: cdktf.stringToTerraform(struct!.description),
    label: cdktf.stringToTerraform(struct!.label),
    name: cdktf.stringToTerraform(struct!.name),
    profile_required: cdktf.booleanToTerraform(struct!.profileRequired),
    saml_mapping: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.samlMapping),
    scim_mapping: cdktf.stringToTerraform(struct!.scimMapping),
    oidc_mapping: userAttributeProfileUserAttributesOidcMappingToTerraform(struct!.oidcMapping),
    strategy_overrides: cdktf.listMapper(userAttributeProfileUserAttributesStrategyOverridesToTerraform, true)(struct!.strategyOverrides),
  }
}


export function userAttributeProfileUserAttributesToHclTerraform(struct?: UserAttributeProfileUserAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth0_mapping: {
      value: cdktf.stringToHclTerraform(struct!.auth0Mapping),
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
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
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
    profile_required: {
      value: cdktf.booleanToHclTerraform(struct!.profileRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    saml_mapping: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.samlMapping),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    scim_mapping: {
      value: cdktf.stringToHclTerraform(struct!.scimMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oidc_mapping: {
      value: userAttributeProfileUserAttributesOidcMappingToHclTerraform(struct!.oidcMapping),
      isBlock: true,
      type: "list",
      storageClassType: "UserAttributeProfileUserAttributesOidcMappingList",
    },
    strategy_overrides: {
      value: cdktf.listMapperHcl(userAttributeProfileUserAttributesStrategyOverridesToHclTerraform, true)(struct!.strategyOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "UserAttributeProfileUserAttributesStrategyOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserAttributeProfileUserAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserAttributeProfileUserAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth0Mapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth0Mapping = this._auth0Mapping;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._profileRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileRequired = this._profileRequired;
    }
    if (this._samlMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlMapping = this._samlMapping;
    }
    if (this._scimMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.scimMapping = this._scimMapping;
    }
    if (this._oidcMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidcMapping = this._oidcMapping?.internalValue;
    }
    if (this._strategyOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategyOverrides = this._strategyOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserAttributeProfileUserAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth0Mapping = undefined;
      this._description = undefined;
      this._label = undefined;
      this._name = undefined;
      this._profileRequired = undefined;
      this._samlMapping = undefined;
      this._scimMapping = undefined;
      this._oidcMapping.internalValue = undefined;
      this._strategyOverrides.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth0Mapping = value.auth0Mapping;
      this._description = value.description;
      this._label = value.label;
      this._name = value.name;
      this._profileRequired = value.profileRequired;
      this._samlMapping = value.samlMapping;
      this._scimMapping = value.scimMapping;
      this._oidcMapping.internalValue = value.oidcMapping;
      this._strategyOverrides.internalValue = value.strategyOverrides;
    }
  }

  // auth0_mapping - computed: false, optional: false, required: true
  private _auth0Mapping?: string; 
  public get auth0Mapping() {
    return this.getStringAttribute('auth0_mapping');
  }
  public set auth0Mapping(value: string) {
    this._auth0Mapping = value;
  }
  // Temporarily expose input value. Use with caution.
  public get auth0MappingInput() {
    return this._auth0Mapping;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
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

  // profile_required - computed: false, optional: false, required: true
  private _profileRequired?: boolean | cdktf.IResolvable; 
  public get profileRequired() {
    return this.getBooleanAttribute('profile_required');
  }
  public set profileRequired(value: boolean | cdktf.IResolvable) {
    this._profileRequired = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileRequiredInput() {
    return this._profileRequired;
  }

  // saml_mapping - computed: true, optional: true, required: false
  private _samlMapping?: string[]; 
  public get samlMapping() {
    return this.getListAttribute('saml_mapping');
  }
  public set samlMapping(value: string[]) {
    this._samlMapping = value;
  }
  public resetSamlMapping() {
    this._samlMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlMappingInput() {
    return this._samlMapping;
  }

  // scim_mapping - computed: true, optional: true, required: false
  private _scimMapping?: string; 
  public get scimMapping() {
    return this.getStringAttribute('scim_mapping');
  }
  public set scimMapping(value: string) {
    this._scimMapping = value;
  }
  public resetScimMapping() {
    this._scimMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scimMappingInput() {
    return this._scimMapping;
  }

  // oidc_mapping - computed: false, optional: true, required: false
  private _oidcMapping = new UserAttributeProfileUserAttributesOidcMappingOutputReference(this, "oidc_mapping");
  public get oidcMapping() {
    return this._oidcMapping;
  }
  public putOidcMapping(value: UserAttributeProfileUserAttributesOidcMapping) {
    this._oidcMapping.internalValue = value;
  }
  public resetOidcMapping() {
    this._oidcMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcMappingInput() {
    return this._oidcMapping.internalValue;
  }

  // strategy_overrides - computed: false, optional: true, required: false
  private _strategyOverrides = new UserAttributeProfileUserAttributesStrategyOverridesList(this, "strategy_overrides", false);
  public get strategyOverrides() {
    return this._strategyOverrides;
  }
  public putStrategyOverrides(value: UserAttributeProfileUserAttributesStrategyOverrides[] | cdktf.IResolvable) {
    this._strategyOverrides.internalValue = value;
  }
  public resetStrategyOverrides() {
    this._strategyOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyOverridesInput() {
    return this._strategyOverrides.internalValue;
  }
}

export class UserAttributeProfileUserAttributesList extends cdktf.ComplexList {
  public internalValue? : UserAttributeProfileUserAttributes[] | cdktf.IResolvable

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
  public get(index: number): UserAttributeProfileUserAttributesOutputReference {
    return new UserAttributeProfileUserAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserAttributeProfileUserIdStrategyOverrides {
  /**
  * OIDC mapping override for this strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/user_attribute_profile#oidc_mapping UserAttributeProfile#oidc_mapping}
  */
  readonly oidcMapping?: string;
  /**
  * SAML mapping override for this strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/user_attribute_profile#saml_mapping UserAttributeProfile#saml_mapping}
  */
  readonly samlMapping?: string[];
  /**
  * SCIM mapping override for this strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/user_attribute_profile#scim_mapping UserAttributeProfile#scim_mapping}
  */
  readonly scimMapping?: string;
  /**
  * The strategy name (e.g., 'oidc', 'samlp', 'ad', etc.).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/user_attribute_profile#strategy UserAttributeProfile#strategy}
  */
  readonly strategy: string;
}

export function userAttributeProfileUserIdStrategyOverridesToTerraform(struct?: UserAttributeProfileUserIdStrategyOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oidc_mapping: cdktf.stringToTerraform(struct!.oidcMapping),
    saml_mapping: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.samlMapping),
    scim_mapping: cdktf.stringToTerraform(struct!.scimMapping),
    strategy: cdktf.stringToTerraform(struct!.strategy),
  }
}


export function userAttributeProfileUserIdStrategyOverridesToHclTerraform(struct?: UserAttributeProfileUserIdStrategyOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oidc_mapping: {
      value: cdktf.stringToHclTerraform(struct!.oidcMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    saml_mapping: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.samlMapping),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    scim_mapping: {
      value: cdktf.stringToHclTerraform(struct!.scimMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserAttributeProfileUserIdStrategyOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserAttributeProfileUserIdStrategyOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oidcMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidcMapping = this._oidcMapping;
    }
    if (this._samlMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlMapping = this._samlMapping;
    }
    if (this._scimMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.scimMapping = this._scimMapping;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserAttributeProfileUserIdStrategyOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._oidcMapping = undefined;
      this._samlMapping = undefined;
      this._scimMapping = undefined;
      this._strategy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._oidcMapping = value.oidcMapping;
      this._samlMapping = value.samlMapping;
      this._scimMapping = value.scimMapping;
      this._strategy = value.strategy;
    }
  }

  // oidc_mapping - computed: true, optional: true, required: false
  private _oidcMapping?: string; 
  public get oidcMapping() {
    return this.getStringAttribute('oidc_mapping');
  }
  public set oidcMapping(value: string) {
    this._oidcMapping = value;
  }
  public resetOidcMapping() {
    this._oidcMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcMappingInput() {
    return this._oidcMapping;
  }

  // saml_mapping - computed: true, optional: true, required: false
  private _samlMapping?: string[]; 
  public get samlMapping() {
    return this.getListAttribute('saml_mapping');
  }
  public set samlMapping(value: string[]) {
    this._samlMapping = value;
  }
  public resetSamlMapping() {
    this._samlMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlMappingInput() {
    return this._samlMapping;
  }

  // scim_mapping - computed: true, optional: true, required: false
  private _scimMapping?: string; 
  public get scimMapping() {
    return this.getStringAttribute('scim_mapping');
  }
  public set scimMapping(value: string) {
    this._scimMapping = value;
  }
  public resetScimMapping() {
    this._scimMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scimMappingInput() {
    return this._scimMapping;
  }

  // strategy - computed: false, optional: false, required: true
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }
}

export class UserAttributeProfileUserIdStrategyOverridesList extends cdktf.ComplexList {
  public internalValue? : UserAttributeProfileUserIdStrategyOverrides[] | cdktf.IResolvable

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
  public get(index: number): UserAttributeProfileUserIdStrategyOverridesOutputReference {
    return new UserAttributeProfileUserIdStrategyOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserAttributeProfileUserId {
  /**
  * The OIDC mapping for the user ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/user_attribute_profile#oidc_mapping UserAttributeProfile#oidc_mapping}
  */
  readonly oidcMapping?: string;
  /**
  * The SAML mapping for the user ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/user_attribute_profile#saml_mapping UserAttributeProfile#saml_mapping}
  */
  readonly samlMapping?: string[];
  /**
  * The SCIM mapping for the user ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/user_attribute_profile#scim_mapping UserAttributeProfile#scim_mapping}
  */
  readonly scimMapping?: string;
  /**
  * strategy_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/user_attribute_profile#strategy_overrides UserAttributeProfile#strategy_overrides}
  */
  readonly strategyOverrides?: UserAttributeProfileUserIdStrategyOverrides[] | cdktf.IResolvable;
}

export function userAttributeProfileUserIdToTerraform(struct?: UserAttributeProfileUserIdOutputReference | UserAttributeProfileUserId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oidc_mapping: cdktf.stringToTerraform(struct!.oidcMapping),
    saml_mapping: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.samlMapping),
    scim_mapping: cdktf.stringToTerraform(struct!.scimMapping),
    strategy_overrides: cdktf.listMapper(userAttributeProfileUserIdStrategyOverridesToTerraform, true)(struct!.strategyOverrides),
  }
}


export function userAttributeProfileUserIdToHclTerraform(struct?: UserAttributeProfileUserIdOutputReference | UserAttributeProfileUserId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oidc_mapping: {
      value: cdktf.stringToHclTerraform(struct!.oidcMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    saml_mapping: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.samlMapping),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    scim_mapping: {
      value: cdktf.stringToHclTerraform(struct!.scimMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strategy_overrides: {
      value: cdktf.listMapperHcl(userAttributeProfileUserIdStrategyOverridesToHclTerraform, true)(struct!.strategyOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "UserAttributeProfileUserIdStrategyOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserAttributeProfileUserIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UserAttributeProfileUserId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oidcMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidcMapping = this._oidcMapping;
    }
    if (this._samlMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlMapping = this._samlMapping;
    }
    if (this._scimMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.scimMapping = this._scimMapping;
    }
    if (this._strategyOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategyOverrides = this._strategyOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserAttributeProfileUserId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oidcMapping = undefined;
      this._samlMapping = undefined;
      this._scimMapping = undefined;
      this._strategyOverrides.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oidcMapping = value.oidcMapping;
      this._samlMapping = value.samlMapping;
      this._scimMapping = value.scimMapping;
      this._strategyOverrides.internalValue = value.strategyOverrides;
    }
  }

  // oidc_mapping - computed: true, optional: true, required: false
  private _oidcMapping?: string; 
  public get oidcMapping() {
    return this.getStringAttribute('oidc_mapping');
  }
  public set oidcMapping(value: string) {
    this._oidcMapping = value;
  }
  public resetOidcMapping() {
    this._oidcMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcMappingInput() {
    return this._oidcMapping;
  }

  // saml_mapping - computed: true, optional: true, required: false
  private _samlMapping?: string[]; 
  public get samlMapping() {
    return this.getListAttribute('saml_mapping');
  }
  public set samlMapping(value: string[]) {
    this._samlMapping = value;
  }
  public resetSamlMapping() {
    this._samlMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlMappingInput() {
    return this._samlMapping;
  }

  // scim_mapping - computed: true, optional: true, required: false
  private _scimMapping?: string; 
  public get scimMapping() {
    return this.getStringAttribute('scim_mapping');
  }
  public set scimMapping(value: string) {
    this._scimMapping = value;
  }
  public resetScimMapping() {
    this._scimMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scimMappingInput() {
    return this._scimMapping;
  }

  // strategy_overrides - computed: false, optional: true, required: false
  private _strategyOverrides = new UserAttributeProfileUserIdStrategyOverridesList(this, "strategy_overrides", false);
  public get strategyOverrides() {
    return this._strategyOverrides;
  }
  public putStrategyOverrides(value: UserAttributeProfileUserIdStrategyOverrides[] | cdktf.IResolvable) {
    this._strategyOverrides.internalValue = value;
  }
  public resetStrategyOverrides() {
    this._strategyOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyOverridesInput() {
    return this._strategyOverrides.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/user_attribute_profile auth0_user_attribute_profile}
*/
export class UserAttributeProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0_user_attribute_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserAttributeProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserAttributeProfile to import
  * @param importFromId The id of the existing UserAttributeProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/user_attribute_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserAttributeProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_user_attribute_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/user_attribute_profile auth0_user_attribute_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserAttributeProfileConfig
  */
  public constructor(scope: Construct, id: string, config: UserAttributeProfileConfig) {
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
    this._userAttributes.internalValue = config.userAttributes;
    this._userId.internalValue = config.userId;
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

  // user_attributes - computed: false, optional: false, required: true
  private _userAttributes = new UserAttributeProfileUserAttributesList(this, "user_attributes", false);
  public get userAttributes() {
    return this._userAttributes;
  }
  public putUserAttributes(value: UserAttributeProfileUserAttributes[] | cdktf.IResolvable) {
    this._userAttributes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userAttributesInput() {
    return this._userAttributes.internalValue;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId = new UserAttributeProfileUserIdOutputReference(this, "user_id");
  public get userId() {
    return this._userId;
  }
  public putUserId(value: UserAttributeProfileUserId) {
    this._userId.internalValue = value;
  }
  public resetUserId() {
    this._userId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      user_attributes: cdktf.listMapper(userAttributeProfileUserAttributesToTerraform, true)(this._userAttributes.internalValue),
      user_id: userAttributeProfileUserIdToTerraform(this._userId.internalValue),
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
      user_attributes: {
        value: cdktf.listMapperHcl(userAttributeProfileUserAttributesToHclTerraform, true)(this._userAttributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserAttributeProfileUserAttributesList",
      },
      user_id: {
        value: userAttributeProfileUserIdToHclTerraform(this._userId.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserAttributeProfileUserIdList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
