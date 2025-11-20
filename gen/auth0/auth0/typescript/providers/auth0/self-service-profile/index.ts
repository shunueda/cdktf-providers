// https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/self_service_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SelfServiceProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of IdP strategies that will be shown to users during the Self-Service SSO flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/self_service_profile#allowed_strategies SelfServiceProfile#allowed_strategies}
  */
  readonly allowedStrategies?: string[];
  /**
  * The description of the self-service Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/self_service_profile#description SelfServiceProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/self_service_profile#id SelfServiceProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the self-service Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/self_service_profile#name SelfServiceProfile#name}
  */
  readonly name: string;
  /**
  * The ID of the user attribute profile to use for this self-service profile. Cannot be used with user_attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/self_service_profile#user_attribute_profile_id SelfServiceProfile#user_attribute_profile_id}
  */
  readonly userAttributeProfileId?: string;
  /**
  * branding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/self_service_profile#branding SelfServiceProfile#branding}
  */
  readonly branding?: SelfServiceProfileBranding;
  /**
  * user_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/self_service_profile#user_attributes SelfServiceProfile#user_attributes}
  */
  readonly userAttributes?: SelfServiceProfileUserAttributes[] | cdktf.IResolvable;
}
export interface SelfServiceProfileBrandingColors {
  /**
  * Primary button background color in hexadecimal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/self_service_profile#primary SelfServiceProfile#primary}
  */
  readonly primary?: string;
}

export function selfServiceProfileBrandingColorsToTerraform(struct?: SelfServiceProfileBrandingColorsOutputReference | SelfServiceProfileBrandingColors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary: cdktf.stringToTerraform(struct!.primary),
  }
}


export function selfServiceProfileBrandingColorsToHclTerraform(struct?: SelfServiceProfileBrandingColorsOutputReference | SelfServiceProfileBrandingColors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    primary: {
      value: cdktf.stringToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SelfServiceProfileBrandingColorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SelfServiceProfileBrandingColors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SelfServiceProfileBrandingColors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._primary = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._primary = value.primary;
    }
  }

  // primary - computed: true, optional: true, required: false
  private _primary?: string; 
  public get primary() {
    return this.getStringAttribute('primary');
  }
  public set primary(value: string) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }
}
export interface SelfServiceProfileBranding {
  /**
  * URL of logo to display on login page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/self_service_profile#logo_url SelfServiceProfile#logo_url}
  */
  readonly logoUrl?: string;
  /**
  * colors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/self_service_profile#colors SelfServiceProfile#colors}
  */
  readonly colors?: SelfServiceProfileBrandingColors;
}

export function selfServiceProfileBrandingToTerraform(struct?: SelfServiceProfileBrandingOutputReference | SelfServiceProfileBranding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logo_url: cdktf.stringToTerraform(struct!.logoUrl),
    colors: selfServiceProfileBrandingColorsToTerraform(struct!.colors),
  }
}


export function selfServiceProfileBrandingToHclTerraform(struct?: SelfServiceProfileBrandingOutputReference | SelfServiceProfileBranding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logo_url: {
      value: cdktf.stringToHclTerraform(struct!.logoUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    colors: {
      value: selfServiceProfileBrandingColorsToHclTerraform(struct!.colors),
      isBlock: true,
      type: "list",
      storageClassType: "SelfServiceProfileBrandingColorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SelfServiceProfileBrandingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SelfServiceProfileBranding | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logoUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoUrl = this._logoUrl;
    }
    if (this._colors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.colors = this._colors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SelfServiceProfileBranding | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logoUrl = undefined;
      this._colors.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logoUrl = value.logoUrl;
      this._colors.internalValue = value.colors;
    }
  }

  // logo_url - computed: false, optional: true, required: false
  private _logoUrl?: string; 
  public get logoUrl() {
    return this.getStringAttribute('logo_url');
  }
  public set logoUrl(value: string) {
    this._logoUrl = value;
  }
  public resetLogoUrl() {
    this._logoUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoUrlInput() {
    return this._logoUrl;
  }

  // colors - computed: false, optional: true, required: false
  private _colors = new SelfServiceProfileBrandingColorsOutputReference(this, "colors");
  public get colors() {
    return this._colors;
  }
  public putColors(value: SelfServiceProfileBrandingColors) {
    this._colors.internalValue = value;
  }
  public resetColors() {
    this._colors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorsInput() {
    return this._colors.internalValue;
  }
}
export interface SelfServiceProfileUserAttributes {
  /**
  *  A human readable description of the attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/self_service_profile#description SelfServiceProfile#description}
  */
  readonly description: string;
  /**
  * Indicates if this attribute is optional or if it has to be provided by the customer for the application to function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/self_service_profile#is_optional SelfServiceProfile#is_optional}
  */
  readonly isOptional: boolean | cdktf.IResolvable;
  /**
  * Attribute’s name on Auth0 side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/self_service_profile#name SelfServiceProfile#name}
  */
  readonly name: string;
}

export function selfServiceProfileUserAttributesToTerraform(struct?: SelfServiceProfileUserAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    is_optional: cdktf.booleanToTerraform(struct!.isOptional),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function selfServiceProfileUserAttributesToHclTerraform(struct?: SelfServiceProfileUserAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_optional: {
      value: cdktf.booleanToHclTerraform(struct!.isOptional),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SelfServiceProfileUserAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SelfServiceProfileUserAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._isOptional !== undefined) {
      hasAnyValues = true;
      internalValueResult.isOptional = this._isOptional;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SelfServiceProfileUserAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._isOptional = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._isOptional = value.isOptional;
      this._name = value.name;
    }
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

  // is_optional - computed: false, optional: false, required: true
  private _isOptional?: boolean | cdktf.IResolvable; 
  public get isOptional() {
    return this.getBooleanAttribute('is_optional');
  }
  public set isOptional(value: boolean | cdktf.IResolvable) {
    this._isOptional = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isOptionalInput() {
    return this._isOptional;
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

export class SelfServiceProfileUserAttributesList extends cdktf.ComplexList {
  public internalValue? : SelfServiceProfileUserAttributes[] | cdktf.IResolvable

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
  public get(index: number): SelfServiceProfileUserAttributesOutputReference {
    return new SelfServiceProfileUserAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/self_service_profile auth0_self_service_profile}
*/
export class SelfServiceProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0_self_service_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SelfServiceProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SelfServiceProfile to import
  * @param importFromId The id of the existing SelfServiceProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/self_service_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SelfServiceProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_self_service_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/self_service_profile auth0_self_service_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SelfServiceProfileConfig
  */
  public constructor(scope: Construct, id: string, config: SelfServiceProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'auth0_self_service_profile',
      terraformGeneratorMetadata: {
        providerName: 'auth0',
        providerVersion: '1.36.0',
        providerVersionConstraint: '1.36.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedStrategies = config.allowedStrategies;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._userAttributeProfileId = config.userAttributeProfileId;
    this._branding.internalValue = config.branding;
    this._userAttributes.internalValue = config.userAttributes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_strategies - computed: false, optional: true, required: false
  private _allowedStrategies?: string[]; 
  public get allowedStrategies() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_strategies'));
  }
  public set allowedStrategies(value: string[]) {
    this._allowedStrategies = value;
  }
  public resetAllowedStrategies() {
    this._allowedStrategies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedStrategiesInput() {
    return this._allowedStrategies;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
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

  // branding - computed: false, optional: true, required: false
  private _branding = new SelfServiceProfileBrandingOutputReference(this, "branding");
  public get branding() {
    return this._branding;
  }
  public putBranding(value: SelfServiceProfileBranding) {
    this._branding.internalValue = value;
  }
  public resetBranding() {
    this._branding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brandingInput() {
    return this._branding.internalValue;
  }

  // user_attributes - computed: false, optional: true, required: false
  private _userAttributes = new SelfServiceProfileUserAttributesList(this, "user_attributes", false);
  public get userAttributes() {
    return this._userAttributes;
  }
  public putUserAttributes(value: SelfServiceProfileUserAttributes[] | cdktf.IResolvable) {
    this._userAttributes.internalValue = value;
  }
  public resetUserAttributes() {
    this._userAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAttributesInput() {
    return this._userAttributes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_strategies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedStrategies),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      user_attribute_profile_id: cdktf.stringToTerraform(this._userAttributeProfileId),
      branding: selfServiceProfileBrandingToTerraform(this._branding.internalValue),
      user_attributes: cdktf.listMapper(selfServiceProfileUserAttributesToTerraform, true)(this._userAttributes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_strategies: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedStrategies),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      branding: {
        value: selfServiceProfileBrandingToHclTerraform(this._branding.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SelfServiceProfileBrandingList",
      },
      user_attributes: {
        value: cdktf.listMapperHcl(selfServiceProfileUserAttributesToHclTerraform, true)(this._userAttributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SelfServiceProfileUserAttributesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
