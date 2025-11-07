// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/password_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingonePasswordPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the environment that is configured with the password policy.  Must be a valid PingOne resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/password_policy#environment_id DataPingonePasswordPolicy#environment_id}
  */
  readonly environmentId: string;
  /**
  * A string that specifies the name of the password policy to retrieve configuration for.  Exactly one of the following must be defined: `password_policy_id`, `name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/password_policy#name DataPingonePasswordPolicy#name}
  */
  readonly name?: string;
  /**
  * A string that specifies the ID of the password policy to retrieve configuration for.  Must be a valid PingOne resource ID.  Exactly one of the following must be defined: `password_policy_id`, `name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/password_policy#password_policy_id DataPingonePasswordPolicy#password_policy_id}
  */
  readonly passwordPolicyId?: string;
}
export interface DataPingonePasswordPolicyHistory {
}

export function dataPingonePasswordPolicyHistoryToTerraform(struct?: DataPingonePasswordPolicyHistory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingonePasswordPolicyHistoryToHclTerraform(struct?: DataPingonePasswordPolicyHistory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingonePasswordPolicyHistoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingonePasswordPolicyHistory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingonePasswordPolicyHistory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // retention_days - computed: true, optional: false, required: false
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
}
export interface DataPingonePasswordPolicyLength {
}

export function dataPingonePasswordPolicyLengthToTerraform(struct?: DataPingonePasswordPolicyLength): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingonePasswordPolicyLengthToHclTerraform(struct?: DataPingonePasswordPolicyLength): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingonePasswordPolicyLengthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingonePasswordPolicyLength | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingonePasswordPolicyLength | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }
}
export interface DataPingonePasswordPolicyLockout {
}

export function dataPingonePasswordPolicyLockoutToTerraform(struct?: DataPingonePasswordPolicyLockout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingonePasswordPolicyLockoutToHclTerraform(struct?: DataPingonePasswordPolicyLockout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingonePasswordPolicyLockoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingonePasswordPolicyLockout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingonePasswordPolicyLockout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration_seconds - computed: true, optional: false, required: false
  public get durationSeconds() {
    return this.getNumberAttribute('duration_seconds');
  }

  // failure_count - computed: true, optional: false, required: false
  public get failureCount() {
    return this.getNumberAttribute('failure_count');
  }
}
export interface DataPingonePasswordPolicyMinCharacters {
}

export function dataPingonePasswordPolicyMinCharactersToTerraform(struct?: DataPingonePasswordPolicyMinCharacters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingonePasswordPolicyMinCharactersToHclTerraform(struct?: DataPingonePasswordPolicyMinCharacters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingonePasswordPolicyMinCharactersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingonePasswordPolicyMinCharacters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingonePasswordPolicyMinCharacters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alphabetical_lowercase - computed: true, optional: false, required: false
  public get alphabeticalLowercase() {
    return this.getNumberAttribute('alphabetical_lowercase');
  }

  // alphabetical_uppercase - computed: true, optional: false, required: false
  public get alphabeticalUppercase() {
    return this.getNumberAttribute('alphabetical_uppercase');
  }

  // numeric - computed: true, optional: false, required: false
  public get numeric() {
    return this.getNumberAttribute('numeric');
  }

  // special_characters - computed: true, optional: false, required: false
  public get specialCharacters() {
    return this.getNumberAttribute('special_characters');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/password_policy pingone_password_policy}
*/
export class DataPingonePasswordPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_password_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingonePasswordPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingonePasswordPolicy to import
  * @param importFromId The id of the existing DataPingonePasswordPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/password_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingonePasswordPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_password_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/password_policy pingone_password_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingonePasswordPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingonePasswordPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_password_policy',
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
    this._environmentId = config.environmentId;
    this._name = config.name;
    this._passwordPolicyId = config.passwordPolicyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // excludes_commonly_used_passwords - computed: true, optional: false, required: false
  public get excludesCommonlyUsedPasswords() {
    return this.getBooleanAttribute('excludes_commonly_used_passwords');
  }

  // excludes_profile_data - computed: true, optional: false, required: false
  public get excludesProfileData() {
    return this.getBooleanAttribute('excludes_profile_data');
  }

  // history - computed: true, optional: false, required: false
  private _history = new DataPingonePasswordPolicyHistoryOutputReference(this, "history");
  public get history() {
    return this._history;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // length - computed: true, optional: false, required: false
  private _length = new DataPingonePasswordPolicyLengthOutputReference(this, "length");
  public get length() {
    return this._length;
  }

  // lockout - computed: true, optional: false, required: false
  private _lockout = new DataPingonePasswordPolicyLockoutOutputReference(this, "lockout");
  public get lockout() {
    return this._lockout;
  }

  // max_repeated_characters - computed: true, optional: false, required: false
  public get maxRepeatedCharacters() {
    return this.getNumberAttribute('max_repeated_characters');
  }

  // min_characters - computed: true, optional: false, required: false
  private _minCharacters = new DataPingonePasswordPolicyMinCharactersOutputReference(this, "min_characters");
  public get minCharacters() {
    return this._minCharacters;
  }

  // min_complexity - computed: true, optional: false, required: false
  public get minComplexity() {
    return this.getNumberAttribute('min_complexity');
  }

  // min_unique_characters - computed: true, optional: false, required: false
  public get minUniqueCharacters() {
    return this.getNumberAttribute('min_unique_characters');
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

  // not_similar_to_current - computed: true, optional: false, required: false
  public get notSimilarToCurrent() {
    return this.getBooleanAttribute('not_similar_to_current');
  }

  // password_age_max - computed: true, optional: false, required: false
  public get passwordAgeMax() {
    return this.getNumberAttribute('password_age_max');
  }

  // password_age_min - computed: true, optional: false, required: false
  public get passwordAgeMin() {
    return this.getNumberAttribute('password_age_min');
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

  // population_count - computed: true, optional: false, required: false
  public get populationCount() {
    return this.getNumberAttribute('population_count');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment_id: cdktf.stringToTerraform(this._environmentId),
      name: cdktf.stringToTerraform(this._name),
      password_policy_id: cdktf.stringToTerraform(this._passwordPolicyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      password_policy_id: {
        value: cdktf.stringToHclTerraform(this._passwordPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
