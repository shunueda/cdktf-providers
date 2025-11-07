// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/population_default
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PopulationDefaultConfig extends cdktf.TerraformMetaArguments {
  /**
  * Alternative identifiers that can be used to search for populations besides `name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/population_default#alternative_identifiers PopulationDefault#alternative_identifiers}
  */
  readonly alternativeIdentifiers?: string[];
  /**
  * A description to apply to the default population.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/population_default#description PopulationDefault#description}
  */
  readonly description?: string;
  /**
  * The ID of the environment to manage the default population in.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/population_default#environment_id PopulationDefault#environment_id}
  */
  readonly environmentId: string;
  /**
  * The name to apply to the default population.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/population_default#name PopulationDefault#name}
  */
  readonly name: string;
  /**
  * The object reference to the password policy resource. This is an optional property. Conflicts with `password_policy_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/population_default#password_policy PopulationDefault#password_policy}
  */
  readonly passwordPolicy?: PopulationDefaultPasswordPolicy;
  /**
  * A string that specifies the ID of a password policy to assign to the population.  Must be a valid PingOne resource ID. The "password_policy.id" attribute should be used instead of this attribute.  Conflicts with "password_policy".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/population_default#password_policy_id PopulationDefault#password_policy_id}
  */
  readonly passwordPolicyId?: string;
  /**
  * The language locale for the population. If absent, the environment default is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/population_default#preferred_language PopulationDefault#preferred_language}
  */
  readonly preferredLanguage?: string;
  /**
  * The object reference to the theme resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/population_default#theme PopulationDefault#theme}
  */
  readonly theme?: PopulationDefaultTheme;
}
export interface PopulationDefaultPasswordPolicy {
  /**
  * The ID of the password policy that is used for this population. If absent, the environment's default is used. Must be a valid PingOne resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/population_default#id PopulationDefault#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function populationDefaultPasswordPolicyToTerraform(struct?: PopulationDefaultPasswordPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function populationDefaultPasswordPolicyToHclTerraform(struct?: PopulationDefaultPasswordPolicy | cdktf.IResolvable): any {
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

export class PopulationDefaultPasswordPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PopulationDefaultPasswordPolicy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PopulationDefaultPasswordPolicy | cdktf.IResolvable | undefined) {
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
export interface PopulationDefaultTheme {
  /**
  * The ID of the theme to use for the population. If absent, the environment's default is used. Must be a valid PingOne resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/population_default#id PopulationDefault#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function populationDefaultThemeToTerraform(struct?: PopulationDefaultTheme | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function populationDefaultThemeToHclTerraform(struct?: PopulationDefaultTheme | cdktf.IResolvable): any {
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

export class PopulationDefaultThemeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PopulationDefaultTheme | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PopulationDefaultTheme | cdktf.IResolvable | undefined) {
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

  // id - computed: true, optional: false, required: true
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

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/population_default pingone_population_default}
*/
export class PopulationDefault extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_population_default";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PopulationDefault resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PopulationDefault to import
  * @param importFromId The id of the existing PopulationDefault that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/population_default#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PopulationDefault to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_population_default", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/population_default pingone_population_default} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PopulationDefaultConfig
  */
  public constructor(scope: Construct, id: string, config: PopulationDefaultConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_population_default',
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
    this._alternativeIdentifiers = config.alternativeIdentifiers;
    this._description = config.description;
    this._environmentId = config.environmentId;
    this._name = config.name;
    this._passwordPolicy.internalValue = config.passwordPolicy;
    this._passwordPolicyId = config.passwordPolicyId;
    this._preferredLanguage = config.preferredLanguage;
    this._theme.internalValue = config.theme;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alternative_identifiers - computed: false, optional: true, required: false
  private _alternativeIdentifiers?: string[]; 
  public get alternativeIdentifiers() {
    return cdktf.Fn.tolist(this.getListAttribute('alternative_identifiers'));
  }
  public set alternativeIdentifiers(value: string[]) {
    this._alternativeIdentifiers = value;
  }
  public resetAlternativeIdentifiers() {
    this._alternativeIdentifiers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternativeIdentifiersInput() {
    return this._alternativeIdentifiers;
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

  // password_policy - computed: false, optional: true, required: false
  private _passwordPolicy = new PopulationDefaultPasswordPolicyOutputReference(this, "password_policy");
  public get passwordPolicy() {
    return this._passwordPolicy;
  }
  public putPasswordPolicy(value: PopulationDefaultPasswordPolicy) {
    this._passwordPolicy.internalValue = value;
  }
  public resetPasswordPolicy() {
    this._passwordPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordPolicyInput() {
    return this._passwordPolicy.internalValue;
  }

  // password_policy_id - computed: false, optional: true, required: false
  private _passwordPolicyId?: string; 
  public get passwordPolicyId() {
    return this.getStringAttribute('password_policy_id');
  }
  public set passwordPolicyId(value: string) {
    this._passwordPolicyId = value;
  }
  public resetPasswordPolicyId() {
    this._passwordPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordPolicyIdInput() {
    return this._passwordPolicyId;
  }

  // preferred_language - computed: true, optional: true, required: false
  private _preferredLanguage?: string; 
  public get preferredLanguage() {
    return this.getStringAttribute('preferred_language');
  }
  public set preferredLanguage(value: string) {
    this._preferredLanguage = value;
  }
  public resetPreferredLanguage() {
    this._preferredLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredLanguageInput() {
    return this._preferredLanguage;
  }

  // theme - computed: true, optional: true, required: false
  private _theme = new PopulationDefaultThemeOutputReference(this, "theme");
  public get theme() {
    return this._theme;
  }
  public putTheme(value: PopulationDefaultTheme) {
    this._theme.internalValue = value;
  }
  public resetTheme() {
    this._theme.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get themeInput() {
    return this._theme.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alternative_identifiers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alternativeIdentifiers),
      description: cdktf.stringToTerraform(this._description),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      name: cdktf.stringToTerraform(this._name),
      password_policy: populationDefaultPasswordPolicyToTerraform(this._passwordPolicy.internalValue),
      password_policy_id: cdktf.stringToTerraform(this._passwordPolicyId),
      preferred_language: cdktf.stringToTerraform(this._preferredLanguage),
      theme: populationDefaultThemeToTerraform(this._theme.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alternative_identifiers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alternativeIdentifiers),
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
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
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
      password_policy: {
        value: populationDefaultPasswordPolicyToHclTerraform(this._passwordPolicy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PopulationDefaultPasswordPolicy",
      },
      password_policy_id: {
        value: cdktf.stringToHclTerraform(this._passwordPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_language: {
        value: cdktf.stringToHclTerraform(this._preferredLanguage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      theme: {
        value: populationDefaultThemeToHclTerraform(this._theme.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PopulationDefaultTheme",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
