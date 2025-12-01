// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ram_password_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RamPasswordPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ram_password_policy#hard_expiry RamPasswordPolicy#hard_expiry}
  */
  readonly hardExpiry?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ram_password_policy#id RamPasswordPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ram_password_policy#max_login_attemps RamPasswordPolicy#max_login_attemps}
  */
  readonly maxLoginAttemps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ram_password_policy#max_password_age RamPasswordPolicy#max_password_age}
  */
  readonly maxPasswordAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ram_password_policy#minimum_password_different_character RamPasswordPolicy#minimum_password_different_character}
  */
  readonly minimumPasswordDifferentCharacter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ram_password_policy#minimum_password_length RamPasswordPolicy#minimum_password_length}
  */
  readonly minimumPasswordLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ram_password_policy#password_not_contain_user_name RamPasswordPolicy#password_not_contain_user_name}
  */
  readonly passwordNotContainUserName?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ram_password_policy#password_reuse_prevention RamPasswordPolicy#password_reuse_prevention}
  */
  readonly passwordReusePrevention?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ram_password_policy#require_lowercase_characters RamPasswordPolicy#require_lowercase_characters}
  */
  readonly requireLowercaseCharacters?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ram_password_policy#require_numbers RamPasswordPolicy#require_numbers}
  */
  readonly requireNumbers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ram_password_policy#require_symbols RamPasswordPolicy#require_symbols}
  */
  readonly requireSymbols?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ram_password_policy#require_uppercase_characters RamPasswordPolicy#require_uppercase_characters}
  */
  readonly requireUppercaseCharacters?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ram_password_policy#timeouts RamPasswordPolicy#timeouts}
  */
  readonly timeouts?: RamPasswordPolicyTimeouts;
}
export interface RamPasswordPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ram_password_policy#create RamPasswordPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ram_password_policy#delete RamPasswordPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ram_password_policy#update RamPasswordPolicy#update}
  */
  readonly update?: string;
}

export function ramPasswordPolicyTimeoutsToTerraform(struct?: RamPasswordPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function ramPasswordPolicyTimeoutsToHclTerraform(struct?: RamPasswordPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RamPasswordPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RamPasswordPolicyTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RamPasswordPolicyTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ram_password_policy alicloud_ram_password_policy}
*/
export class RamPasswordPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ram_password_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RamPasswordPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RamPasswordPolicy to import
  * @param importFromId The id of the existing RamPasswordPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ram_password_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RamPasswordPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ram_password_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ram_password_policy alicloud_ram_password_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RamPasswordPolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RamPasswordPolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ram_password_policy',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._hardExpiry = config.hardExpiry;
    this._id = config.id;
    this._maxLoginAttemps = config.maxLoginAttemps;
    this._maxPasswordAge = config.maxPasswordAge;
    this._minimumPasswordDifferentCharacter = config.minimumPasswordDifferentCharacter;
    this._minimumPasswordLength = config.minimumPasswordLength;
    this._passwordNotContainUserName = config.passwordNotContainUserName;
    this._passwordReusePrevention = config.passwordReusePrevention;
    this._requireLowercaseCharacters = config.requireLowercaseCharacters;
    this._requireNumbers = config.requireNumbers;
    this._requireSymbols = config.requireSymbols;
    this._requireUppercaseCharacters = config.requireUppercaseCharacters;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hard_expiry - computed: false, optional: true, required: false
  private _hardExpiry?: boolean | cdktf.IResolvable; 
  public get hardExpiry() {
    return this.getBooleanAttribute('hard_expiry');
  }
  public set hardExpiry(value: boolean | cdktf.IResolvable) {
    this._hardExpiry = value;
  }
  public resetHardExpiry() {
    this._hardExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardExpiryInput() {
    return this._hardExpiry;
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

  // max_login_attemps - computed: false, optional: true, required: false
  private _maxLoginAttemps?: number; 
  public get maxLoginAttemps() {
    return this.getNumberAttribute('max_login_attemps');
  }
  public set maxLoginAttemps(value: number) {
    this._maxLoginAttemps = value;
  }
  public resetMaxLoginAttemps() {
    this._maxLoginAttemps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLoginAttempsInput() {
    return this._maxLoginAttemps;
  }

  // max_password_age - computed: false, optional: true, required: false
  private _maxPasswordAge?: number; 
  public get maxPasswordAge() {
    return this.getNumberAttribute('max_password_age');
  }
  public set maxPasswordAge(value: number) {
    this._maxPasswordAge = value;
  }
  public resetMaxPasswordAge() {
    this._maxPasswordAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPasswordAgeInput() {
    return this._maxPasswordAge;
  }

  // minimum_password_different_character - computed: false, optional: true, required: false
  private _minimumPasswordDifferentCharacter?: number; 
  public get minimumPasswordDifferentCharacter() {
    return this.getNumberAttribute('minimum_password_different_character');
  }
  public set minimumPasswordDifferentCharacter(value: number) {
    this._minimumPasswordDifferentCharacter = value;
  }
  public resetMinimumPasswordDifferentCharacter() {
    this._minimumPasswordDifferentCharacter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumPasswordDifferentCharacterInput() {
    return this._minimumPasswordDifferentCharacter;
  }

  // minimum_password_length - computed: true, optional: true, required: false
  private _minimumPasswordLength?: number; 
  public get minimumPasswordLength() {
    return this.getNumberAttribute('minimum_password_length');
  }
  public set minimumPasswordLength(value: number) {
    this._minimumPasswordLength = value;
  }
  public resetMinimumPasswordLength() {
    this._minimumPasswordLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumPasswordLengthInput() {
    return this._minimumPasswordLength;
  }

  // password_not_contain_user_name - computed: false, optional: true, required: false
  private _passwordNotContainUserName?: boolean | cdktf.IResolvable; 
  public get passwordNotContainUserName() {
    return this.getBooleanAttribute('password_not_contain_user_name');
  }
  public set passwordNotContainUserName(value: boolean | cdktf.IResolvable) {
    this._passwordNotContainUserName = value;
  }
  public resetPasswordNotContainUserName() {
    this._passwordNotContainUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordNotContainUserNameInput() {
    return this._passwordNotContainUserName;
  }

  // password_reuse_prevention - computed: false, optional: true, required: false
  private _passwordReusePrevention?: number; 
  public get passwordReusePrevention() {
    return this.getNumberAttribute('password_reuse_prevention');
  }
  public set passwordReusePrevention(value: number) {
    this._passwordReusePrevention = value;
  }
  public resetPasswordReusePrevention() {
    this._passwordReusePrevention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordReusePreventionInput() {
    return this._passwordReusePrevention;
  }

  // require_lowercase_characters - computed: false, optional: true, required: false
  private _requireLowercaseCharacters?: boolean | cdktf.IResolvable; 
  public get requireLowercaseCharacters() {
    return this.getBooleanAttribute('require_lowercase_characters');
  }
  public set requireLowercaseCharacters(value: boolean | cdktf.IResolvable) {
    this._requireLowercaseCharacters = value;
  }
  public resetRequireLowercaseCharacters() {
    this._requireLowercaseCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireLowercaseCharactersInput() {
    return this._requireLowercaseCharacters;
  }

  // require_numbers - computed: false, optional: true, required: false
  private _requireNumbers?: boolean | cdktf.IResolvable; 
  public get requireNumbers() {
    return this.getBooleanAttribute('require_numbers');
  }
  public set requireNumbers(value: boolean | cdktf.IResolvable) {
    this._requireNumbers = value;
  }
  public resetRequireNumbers() {
    this._requireNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireNumbersInput() {
    return this._requireNumbers;
  }

  // require_symbols - computed: false, optional: true, required: false
  private _requireSymbols?: boolean | cdktf.IResolvable; 
  public get requireSymbols() {
    return this.getBooleanAttribute('require_symbols');
  }
  public set requireSymbols(value: boolean | cdktf.IResolvable) {
    this._requireSymbols = value;
  }
  public resetRequireSymbols() {
    this._requireSymbols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireSymbolsInput() {
    return this._requireSymbols;
  }

  // require_uppercase_characters - computed: false, optional: true, required: false
  private _requireUppercaseCharacters?: boolean | cdktf.IResolvable; 
  public get requireUppercaseCharacters() {
    return this.getBooleanAttribute('require_uppercase_characters');
  }
  public set requireUppercaseCharacters(value: boolean | cdktf.IResolvable) {
    this._requireUppercaseCharacters = value;
  }
  public resetRequireUppercaseCharacters() {
    this._requireUppercaseCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireUppercaseCharactersInput() {
    return this._requireUppercaseCharacters;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RamPasswordPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RamPasswordPolicyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      hard_expiry: cdktf.booleanToTerraform(this._hardExpiry),
      id: cdktf.stringToTerraform(this._id),
      max_login_attemps: cdktf.numberToTerraform(this._maxLoginAttemps),
      max_password_age: cdktf.numberToTerraform(this._maxPasswordAge),
      minimum_password_different_character: cdktf.numberToTerraform(this._minimumPasswordDifferentCharacter),
      minimum_password_length: cdktf.numberToTerraform(this._minimumPasswordLength),
      password_not_contain_user_name: cdktf.booleanToTerraform(this._passwordNotContainUserName),
      password_reuse_prevention: cdktf.numberToTerraform(this._passwordReusePrevention),
      require_lowercase_characters: cdktf.booleanToTerraform(this._requireLowercaseCharacters),
      require_numbers: cdktf.booleanToTerraform(this._requireNumbers),
      require_symbols: cdktf.booleanToTerraform(this._requireSymbols),
      require_uppercase_characters: cdktf.booleanToTerraform(this._requireUppercaseCharacters),
      timeouts: ramPasswordPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      hard_expiry: {
        value: cdktf.booleanToHclTerraform(this._hardExpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_login_attemps: {
        value: cdktf.numberToHclTerraform(this._maxLoginAttemps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_password_age: {
        value: cdktf.numberToHclTerraform(this._maxPasswordAge),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minimum_password_different_character: {
        value: cdktf.numberToHclTerraform(this._minimumPasswordDifferentCharacter),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minimum_password_length: {
        value: cdktf.numberToHclTerraform(this._minimumPasswordLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password_not_contain_user_name: {
        value: cdktf.booleanToHclTerraform(this._passwordNotContainUserName),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password_reuse_prevention: {
        value: cdktf.numberToHclTerraform(this._passwordReusePrevention),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      require_lowercase_characters: {
        value: cdktf.booleanToHclTerraform(this._requireLowercaseCharacters),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      require_numbers: {
        value: cdktf.booleanToHclTerraform(this._requireNumbers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      require_symbols: {
        value: cdktf.booleanToHclTerraform(this._requireSymbols),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      require_uppercase_characters: {
        value: cdktf.booleanToHclTerraform(this._requireUppercaseCharacters),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: ramPasswordPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RamPasswordPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
