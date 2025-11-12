// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_password
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyPasswordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_password#amount_digits PolicyPassword#amount_digits}
  */
  readonly amountDigits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_password#amount_lowercase PolicyPassword#amount_lowercase}
  */
  readonly amountLowercase?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_password#amount_symbols PolicyPassword#amount_symbols}
  */
  readonly amountSymbols?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_password#amount_uppercase PolicyPassword#amount_uppercase}
  */
  readonly amountUppercase?: number;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_password#check_have_i_been_pwned PolicyPassword#check_have_i_been_pwned}
  */
  readonly checkHaveIBeenPwned?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_password#check_static_rules PolicyPassword#check_static_rules}
  */
  readonly checkStaticRules?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_password#check_zxcvbn PolicyPassword#check_zxcvbn}
  */
  readonly checkZxcvbn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_password#error_message PolicyPassword#error_message}
  */
  readonly errorMessage: string;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_password#execution_logging PolicyPassword#execution_logging}
  */
  readonly executionLogging?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_password#hibp_allowed_count PolicyPassword#hibp_allowed_count}
  */
  readonly hibpAllowedCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_password#id PolicyPassword#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_password#length_min PolicyPassword#length_min}
  */
  readonly lengthMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_password#name PolicyPassword#name}
  */
  readonly name: string;
  /**
  * Defaults to `password`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_password#password_field PolicyPassword#password_field}
  */
  readonly passwordField?: string;
  /**
  * Defaults to `!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_password#symbol_charset PolicyPassword#symbol_charset}
  */
  readonly symbolCharset?: string;
  /**
  * Defaults to `2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_password#zxcvbn_score_threshold PolicyPassword#zxcvbn_score_threshold}
  */
  readonly zxcvbnScoreThreshold?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_password authentik_policy_password}
*/
export class PolicyPassword extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_policy_password";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyPassword resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyPassword to import
  * @param importFromId The id of the existing PolicyPassword that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_password#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyPassword to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_policy_password", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_password authentik_policy_password} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyPasswordConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyPasswordConfig) {
    super(scope, id, {
      terraformResourceType: 'authentik_policy_password',
      terraformGeneratorMetadata: {
        providerName: 'authentik',
        providerVersion: '2025.10.0',
        providerVersionConstraint: '2025.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._amountDigits = config.amountDigits;
    this._amountLowercase = config.amountLowercase;
    this._amountSymbols = config.amountSymbols;
    this._amountUppercase = config.amountUppercase;
    this._checkHaveIBeenPwned = config.checkHaveIBeenPwned;
    this._checkStaticRules = config.checkStaticRules;
    this._checkZxcvbn = config.checkZxcvbn;
    this._errorMessage = config.errorMessage;
    this._executionLogging = config.executionLogging;
    this._hibpAllowedCount = config.hibpAllowedCount;
    this._id = config.id;
    this._lengthMin = config.lengthMin;
    this._name = config.name;
    this._passwordField = config.passwordField;
    this._symbolCharset = config.symbolCharset;
    this._zxcvbnScoreThreshold = config.zxcvbnScoreThreshold;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // amount_digits - computed: false, optional: true, required: false
  private _amountDigits?: number; 
  public get amountDigits() {
    return this.getNumberAttribute('amount_digits');
  }
  public set amountDigits(value: number) {
    this._amountDigits = value;
  }
  public resetAmountDigits() {
    this._amountDigits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amountDigitsInput() {
    return this._amountDigits;
  }

  // amount_lowercase - computed: false, optional: true, required: false
  private _amountLowercase?: number; 
  public get amountLowercase() {
    return this.getNumberAttribute('amount_lowercase');
  }
  public set amountLowercase(value: number) {
    this._amountLowercase = value;
  }
  public resetAmountLowercase() {
    this._amountLowercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amountLowercaseInput() {
    return this._amountLowercase;
  }

  // amount_symbols - computed: false, optional: true, required: false
  private _amountSymbols?: number; 
  public get amountSymbols() {
    return this.getNumberAttribute('amount_symbols');
  }
  public set amountSymbols(value: number) {
    this._amountSymbols = value;
  }
  public resetAmountSymbols() {
    this._amountSymbols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amountSymbolsInput() {
    return this._amountSymbols;
  }

  // amount_uppercase - computed: false, optional: true, required: false
  private _amountUppercase?: number; 
  public get amountUppercase() {
    return this.getNumberAttribute('amount_uppercase');
  }
  public set amountUppercase(value: number) {
    this._amountUppercase = value;
  }
  public resetAmountUppercase() {
    this._amountUppercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amountUppercaseInput() {
    return this._amountUppercase;
  }

  // check_have_i_been_pwned - computed: false, optional: true, required: false
  private _checkHaveIBeenPwned?: boolean | cdktf.IResolvable; 
  public get checkHaveIBeenPwned() {
    return this.getBooleanAttribute('check_have_i_been_pwned');
  }
  public set checkHaveIBeenPwned(value: boolean | cdktf.IResolvable) {
    this._checkHaveIBeenPwned = value;
  }
  public resetCheckHaveIBeenPwned() {
    this._checkHaveIBeenPwned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkHaveIBeenPwnedInput() {
    return this._checkHaveIBeenPwned;
  }

  // check_static_rules - computed: false, optional: true, required: false
  private _checkStaticRules?: boolean | cdktf.IResolvable; 
  public get checkStaticRules() {
    return this.getBooleanAttribute('check_static_rules');
  }
  public set checkStaticRules(value: boolean | cdktf.IResolvable) {
    this._checkStaticRules = value;
  }
  public resetCheckStaticRules() {
    this._checkStaticRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkStaticRulesInput() {
    return this._checkStaticRules;
  }

  // check_zxcvbn - computed: false, optional: true, required: false
  private _checkZxcvbn?: boolean | cdktf.IResolvable; 
  public get checkZxcvbn() {
    return this.getBooleanAttribute('check_zxcvbn');
  }
  public set checkZxcvbn(value: boolean | cdktf.IResolvable) {
    this._checkZxcvbn = value;
  }
  public resetCheckZxcvbn() {
    this._checkZxcvbn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkZxcvbnInput() {
    return this._checkZxcvbn;
  }

  // error_message - computed: false, optional: false, required: true
  private _errorMessage?: string; 
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }
  public set errorMessage(value: string) {
    this._errorMessage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get errorMessageInput() {
    return this._errorMessage;
  }

  // execution_logging - computed: false, optional: true, required: false
  private _executionLogging?: boolean | cdktf.IResolvable; 
  public get executionLogging() {
    return this.getBooleanAttribute('execution_logging');
  }
  public set executionLogging(value: boolean | cdktf.IResolvable) {
    this._executionLogging = value;
  }
  public resetExecutionLogging() {
    this._executionLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionLoggingInput() {
    return this._executionLogging;
  }

  // hibp_allowed_count - computed: false, optional: true, required: false
  private _hibpAllowedCount?: number; 
  public get hibpAllowedCount() {
    return this.getNumberAttribute('hibp_allowed_count');
  }
  public set hibpAllowedCount(value: number) {
    this._hibpAllowedCount = value;
  }
  public resetHibpAllowedCount() {
    this._hibpAllowedCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hibpAllowedCountInput() {
    return this._hibpAllowedCount;
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

  // length_min - computed: false, optional: true, required: false
  private _lengthMin?: number; 
  public get lengthMin() {
    return this.getNumberAttribute('length_min');
  }
  public set lengthMin(value: number) {
    this._lengthMin = value;
  }
  public resetLengthMin() {
    this._lengthMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthMinInput() {
    return this._lengthMin;
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

  // password_field - computed: false, optional: true, required: false
  private _passwordField?: string; 
  public get passwordField() {
    return this.getStringAttribute('password_field');
  }
  public set passwordField(value: string) {
    this._passwordField = value;
  }
  public resetPasswordField() {
    this._passwordField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordFieldInput() {
    return this._passwordField;
  }

  // symbol_charset - computed: false, optional: true, required: false
  private _symbolCharset?: string; 
  public get symbolCharset() {
    return this.getStringAttribute('symbol_charset');
  }
  public set symbolCharset(value: string) {
    this._symbolCharset = value;
  }
  public resetSymbolCharset() {
    this._symbolCharset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get symbolCharsetInput() {
    return this._symbolCharset;
  }

  // zxcvbn_score_threshold - computed: false, optional: true, required: false
  private _zxcvbnScoreThreshold?: number; 
  public get zxcvbnScoreThreshold() {
    return this.getNumberAttribute('zxcvbn_score_threshold');
  }
  public set zxcvbnScoreThreshold(value: number) {
    this._zxcvbnScoreThreshold = value;
  }
  public resetZxcvbnScoreThreshold() {
    this._zxcvbnScoreThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zxcvbnScoreThresholdInput() {
    return this._zxcvbnScoreThreshold;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      amount_digits: cdktf.numberToTerraform(this._amountDigits),
      amount_lowercase: cdktf.numberToTerraform(this._amountLowercase),
      amount_symbols: cdktf.numberToTerraform(this._amountSymbols),
      amount_uppercase: cdktf.numberToTerraform(this._amountUppercase),
      check_have_i_been_pwned: cdktf.booleanToTerraform(this._checkHaveIBeenPwned),
      check_static_rules: cdktf.booleanToTerraform(this._checkStaticRules),
      check_zxcvbn: cdktf.booleanToTerraform(this._checkZxcvbn),
      error_message: cdktf.stringToTerraform(this._errorMessage),
      execution_logging: cdktf.booleanToTerraform(this._executionLogging),
      hibp_allowed_count: cdktf.numberToTerraform(this._hibpAllowedCount),
      id: cdktf.stringToTerraform(this._id),
      length_min: cdktf.numberToTerraform(this._lengthMin),
      name: cdktf.stringToTerraform(this._name),
      password_field: cdktf.stringToTerraform(this._passwordField),
      symbol_charset: cdktf.stringToTerraform(this._symbolCharset),
      zxcvbn_score_threshold: cdktf.numberToTerraform(this._zxcvbnScoreThreshold),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      amount_digits: {
        value: cdktf.numberToHclTerraform(this._amountDigits),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      amount_lowercase: {
        value: cdktf.numberToHclTerraform(this._amountLowercase),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      amount_symbols: {
        value: cdktf.numberToHclTerraform(this._amountSymbols),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      amount_uppercase: {
        value: cdktf.numberToHclTerraform(this._amountUppercase),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      check_have_i_been_pwned: {
        value: cdktf.booleanToHclTerraform(this._checkHaveIBeenPwned),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      check_static_rules: {
        value: cdktf.booleanToHclTerraform(this._checkStaticRules),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      check_zxcvbn: {
        value: cdktf.booleanToHclTerraform(this._checkZxcvbn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      error_message: {
        value: cdktf.stringToHclTerraform(this._errorMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execution_logging: {
        value: cdktf.booleanToHclTerraform(this._executionLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hibp_allowed_count: {
        value: cdktf.numberToHclTerraform(this._hibpAllowedCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      length_min: {
        value: cdktf.numberToHclTerraform(this._lengthMin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_field: {
        value: cdktf.stringToHclTerraform(this._passwordField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      symbol_charset: {
        value: cdktf.stringToHclTerraform(this._symbolCharset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zxcvbn_score_threshold: {
        value: cdktf.numberToHclTerraform(this._zxcvbnScoreThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
