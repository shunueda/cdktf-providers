// https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_password_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamPasswordPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_password_policy#challenges_enabled IamPasswordPolicy#challenges_enabled}
  */
  readonly challengesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_password_policy#expiry_period_in_days IamPasswordPolicy#expiry_period_in_days}
  */
  readonly expiryPeriodInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_password_policy#history_count IamPasswordPolicy#history_count}
  */
  readonly historyCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_password_policy#id IamPasswordPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_password_policy#managing_organization IamPasswordPolicy#managing_organization}
  */
  readonly managingOrganization: string;
  /**
  * challenge_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_password_policy#challenge_policy IamPasswordPolicy#challenge_policy}
  */
  readonly challengePolicy?: IamPasswordPolicyChallengePolicy;
  /**
  * complexity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_password_policy#complexity IamPasswordPolicy#complexity}
  */
  readonly complexity: IamPasswordPolicyComplexity;
}
export interface IamPasswordPolicyChallengePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_password_policy#default_questions IamPasswordPolicy#default_questions}
  */
  readonly defaultQuestions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_password_policy#max_incorrect_attempts IamPasswordPolicy#max_incorrect_attempts}
  */
  readonly maxIncorrectAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_password_policy#min_answer_count IamPasswordPolicy#min_answer_count}
  */
  readonly minAnswerCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_password_policy#min_question_count IamPasswordPolicy#min_question_count}
  */
  readonly minQuestionCount?: number;
}

export function iamPasswordPolicyChallengePolicyToTerraform(struct?: IamPasswordPolicyChallengePolicyOutputReference | IamPasswordPolicyChallengePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_questions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultQuestions),
    max_incorrect_attempts: cdktf.numberToTerraform(struct!.maxIncorrectAttempts),
    min_answer_count: cdktf.numberToTerraform(struct!.minAnswerCount),
    min_question_count: cdktf.numberToTerraform(struct!.minQuestionCount),
  }
}


export function iamPasswordPolicyChallengePolicyToHclTerraform(struct?: IamPasswordPolicyChallengePolicyOutputReference | IamPasswordPolicyChallengePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_questions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.defaultQuestions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    max_incorrect_attempts: {
      value: cdktf.numberToHclTerraform(struct!.maxIncorrectAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_answer_count: {
      value: cdktf.numberToHclTerraform(struct!.minAnswerCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_question_count: {
      value: cdktf.numberToHclTerraform(struct!.minQuestionCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamPasswordPolicyChallengePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IamPasswordPolicyChallengePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultQuestions !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultQuestions = this._defaultQuestions;
    }
    if (this._maxIncorrectAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIncorrectAttempts = this._maxIncorrectAttempts;
    }
    if (this._minAnswerCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minAnswerCount = this._minAnswerCount;
    }
    if (this._minQuestionCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minQuestionCount = this._minQuestionCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamPasswordPolicyChallengePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultQuestions = undefined;
      this._maxIncorrectAttempts = undefined;
      this._minAnswerCount = undefined;
      this._minQuestionCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultQuestions = value.defaultQuestions;
      this._maxIncorrectAttempts = value.maxIncorrectAttempts;
      this._minAnswerCount = value.minAnswerCount;
      this._minQuestionCount = value.minQuestionCount;
    }
  }

  // default_questions - computed: false, optional: true, required: false
  private _defaultQuestions?: string[]; 
  public get defaultQuestions() {
    return cdktf.Fn.tolist(this.getListAttribute('default_questions'));
  }
  public set defaultQuestions(value: string[]) {
    this._defaultQuestions = value;
  }
  public resetDefaultQuestions() {
    this._defaultQuestions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultQuestionsInput() {
    return this._defaultQuestions;
  }

  // max_incorrect_attempts - computed: false, optional: true, required: false
  private _maxIncorrectAttempts?: number; 
  public get maxIncorrectAttempts() {
    return this.getNumberAttribute('max_incorrect_attempts');
  }
  public set maxIncorrectAttempts(value: number) {
    this._maxIncorrectAttempts = value;
  }
  public resetMaxIncorrectAttempts() {
    this._maxIncorrectAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIncorrectAttemptsInput() {
    return this._maxIncorrectAttempts;
  }

  // min_answer_count - computed: false, optional: true, required: false
  private _minAnswerCount?: number; 
  public get minAnswerCount() {
    return this.getNumberAttribute('min_answer_count');
  }
  public set minAnswerCount(value: number) {
    this._minAnswerCount = value;
  }
  public resetMinAnswerCount() {
    this._minAnswerCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAnswerCountInput() {
    return this._minAnswerCount;
  }

  // min_question_count - computed: false, optional: true, required: false
  private _minQuestionCount?: number; 
  public get minQuestionCount() {
    return this.getNumberAttribute('min_question_count');
  }
  public set minQuestionCount(value: number) {
    this._minQuestionCount = value;
  }
  public resetMinQuestionCount() {
    this._minQuestionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minQuestionCountInput() {
    return this._minQuestionCount;
  }
}
export interface IamPasswordPolicyComplexity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_password_policy#max_length IamPasswordPolicy#max_length}
  */
  readonly maxLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_password_policy#min_length IamPasswordPolicy#min_length}
  */
  readonly minLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_password_policy#min_lowercase IamPasswordPolicy#min_lowercase}
  */
  readonly minLowercase?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_password_policy#min_numerics IamPasswordPolicy#min_numerics}
  */
  readonly minNumerics?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_password_policy#min_special_chars IamPasswordPolicy#min_special_chars}
  */
  readonly minSpecialChars?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_password_policy#min_uppercase IamPasswordPolicy#min_uppercase}
  */
  readonly minUppercase?: number;
}

export function iamPasswordPolicyComplexityToTerraform(struct?: IamPasswordPolicyComplexityOutputReference | IamPasswordPolicyComplexity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_length: cdktf.numberToTerraform(struct!.maxLength),
    min_length: cdktf.numberToTerraform(struct!.minLength),
    min_lowercase: cdktf.numberToTerraform(struct!.minLowercase),
    min_numerics: cdktf.numberToTerraform(struct!.minNumerics),
    min_special_chars: cdktf.numberToTerraform(struct!.minSpecialChars),
    min_uppercase: cdktf.numberToTerraform(struct!.minUppercase),
  }
}


export function iamPasswordPolicyComplexityToHclTerraform(struct?: IamPasswordPolicyComplexityOutputReference | IamPasswordPolicyComplexity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_length: {
      value: cdktf.numberToHclTerraform(struct!.maxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_length: {
      value: cdktf.numberToHclTerraform(struct!.minLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_lowercase: {
      value: cdktf.numberToHclTerraform(struct!.minLowercase),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_numerics: {
      value: cdktf.numberToHclTerraform(struct!.minNumerics),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_special_chars: {
      value: cdktf.numberToHclTerraform(struct!.minSpecialChars),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_uppercase: {
      value: cdktf.numberToHclTerraform(struct!.minUppercase),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamPasswordPolicyComplexityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IamPasswordPolicyComplexity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLength = this._maxLength;
    }
    if (this._minLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLength = this._minLength;
    }
    if (this._minLowercase !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLowercase = this._minLowercase;
    }
    if (this._minNumerics !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNumerics = this._minNumerics;
    }
    if (this._minSpecialChars !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSpecialChars = this._minSpecialChars;
    }
    if (this._minUppercase !== undefined) {
      hasAnyValues = true;
      internalValueResult.minUppercase = this._minUppercase;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamPasswordPolicyComplexity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxLength = undefined;
      this._minLength = undefined;
      this._minLowercase = undefined;
      this._minNumerics = undefined;
      this._minSpecialChars = undefined;
      this._minUppercase = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxLength = value.maxLength;
      this._minLength = value.minLength;
      this._minLowercase = value.minLowercase;
      this._minNumerics = value.minNumerics;
      this._minSpecialChars = value.minSpecialChars;
      this._minUppercase = value.minUppercase;
    }
  }

  // max_length - computed: false, optional: true, required: false
  private _maxLength?: number; 
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
  public set maxLength(value: number) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }

  // min_length - computed: false, optional: true, required: false
  private _minLength?: number; 
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }
  public set minLength(value: number) {
    this._minLength = value;
  }
  public resetMinLength() {
    this._minLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLengthInput() {
    return this._minLength;
  }

  // min_lowercase - computed: false, optional: true, required: false
  private _minLowercase?: number; 
  public get minLowercase() {
    return this.getNumberAttribute('min_lowercase');
  }
  public set minLowercase(value: number) {
    this._minLowercase = value;
  }
  public resetMinLowercase() {
    this._minLowercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLowercaseInput() {
    return this._minLowercase;
  }

  // min_numerics - computed: false, optional: true, required: false
  private _minNumerics?: number; 
  public get minNumerics() {
    return this.getNumberAttribute('min_numerics');
  }
  public set minNumerics(value: number) {
    this._minNumerics = value;
  }
  public resetMinNumerics() {
    this._minNumerics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNumericsInput() {
    return this._minNumerics;
  }

  // min_special_chars - computed: false, optional: true, required: false
  private _minSpecialChars?: number; 
  public get minSpecialChars() {
    return this.getNumberAttribute('min_special_chars');
  }
  public set minSpecialChars(value: number) {
    this._minSpecialChars = value;
  }
  public resetMinSpecialChars() {
    this._minSpecialChars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSpecialCharsInput() {
    return this._minSpecialChars;
  }

  // min_uppercase - computed: false, optional: true, required: false
  private _minUppercase?: number; 
  public get minUppercase() {
    return this.getNumberAttribute('min_uppercase');
  }
  public set minUppercase(value: number) {
    this._minUppercase = value;
  }
  public resetMinUppercase() {
    this._minUppercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minUppercaseInput() {
    return this._minUppercase;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_password_policy hsdp_iam_password_policy}
*/
export class IamPasswordPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hsdp_iam_password_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamPasswordPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamPasswordPolicy to import
  * @param importFromId The id of the existing IamPasswordPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_password_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamPasswordPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hsdp_iam_password_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_password_policy hsdp_iam_password_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamPasswordPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: IamPasswordPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'hsdp_iam_password_policy',
      terraformGeneratorMetadata: {
        providerName: 'hsdp',
        providerVersion: '0.70.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._challengesEnabled = config.challengesEnabled;
    this._expiryPeriodInDays = config.expiryPeriodInDays;
    this._historyCount = config.historyCount;
    this._id = config.id;
    this._managingOrganization = config.managingOrganization;
    this._challengePolicy.internalValue = config.challengePolicy;
    this._complexity.internalValue = config.complexity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // _policy - computed: true, optional: false, required: false
  public get policy() {
    return this.getStringAttribute('_policy');
  }

  // challenges_enabled - computed: false, optional: true, required: false
  private _challengesEnabled?: boolean | cdktf.IResolvable; 
  public get challengesEnabled() {
    return this.getBooleanAttribute('challenges_enabled');
  }
  public set challengesEnabled(value: boolean | cdktf.IResolvable) {
    this._challengesEnabled = value;
  }
  public resetChallengesEnabled() {
    this._challengesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengesEnabledInput() {
    return this._challengesEnabled;
  }

  // expiry_period_in_days - computed: false, optional: true, required: false
  private _expiryPeriodInDays?: number; 
  public get expiryPeriodInDays() {
    return this.getNumberAttribute('expiry_period_in_days');
  }
  public set expiryPeriodInDays(value: number) {
    this._expiryPeriodInDays = value;
  }
  public resetExpiryPeriodInDays() {
    this._expiryPeriodInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryPeriodInDaysInput() {
    return this._expiryPeriodInDays;
  }

  // history_count - computed: false, optional: true, required: false
  private _historyCount?: number; 
  public get historyCount() {
    return this.getNumberAttribute('history_count');
  }
  public set historyCount(value: number) {
    this._historyCount = value;
  }
  public resetHistoryCount() {
    this._historyCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historyCountInput() {
    return this._historyCount;
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

  // managing_organization - computed: false, optional: false, required: true
  private _managingOrganization?: string; 
  public get managingOrganization() {
    return this.getStringAttribute('managing_organization');
  }
  public set managingOrganization(value: string) {
    this._managingOrganization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managingOrganizationInput() {
    return this._managingOrganization;
  }

  // challenge_policy - computed: false, optional: true, required: false
  private _challengePolicy = new IamPasswordPolicyChallengePolicyOutputReference(this, "challenge_policy");
  public get challengePolicy() {
    return this._challengePolicy;
  }
  public putChallengePolicy(value: IamPasswordPolicyChallengePolicy) {
    this._challengePolicy.internalValue = value;
  }
  public resetChallengePolicy() {
    this._challengePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengePolicyInput() {
    return this._challengePolicy.internalValue;
  }

  // complexity - computed: false, optional: false, required: true
  private _complexity = new IamPasswordPolicyComplexityOutputReference(this, "complexity");
  public get complexity() {
    return this._complexity;
  }
  public putComplexity(value: IamPasswordPolicyComplexity) {
    this._complexity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get complexityInput() {
    return this._complexity.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      challenges_enabled: cdktf.booleanToTerraform(this._challengesEnabled),
      expiry_period_in_days: cdktf.numberToTerraform(this._expiryPeriodInDays),
      history_count: cdktf.numberToTerraform(this._historyCount),
      id: cdktf.stringToTerraform(this._id),
      managing_organization: cdktf.stringToTerraform(this._managingOrganization),
      challenge_policy: iamPasswordPolicyChallengePolicyToTerraform(this._challengePolicy.internalValue),
      complexity: iamPasswordPolicyComplexityToTerraform(this._complexity.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      challenges_enabled: {
        value: cdktf.booleanToHclTerraform(this._challengesEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      expiry_period_in_days: {
        value: cdktf.numberToHclTerraform(this._expiryPeriodInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      history_count: {
        value: cdktf.numberToHclTerraform(this._historyCount),
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
      managing_organization: {
        value: cdktf.stringToHclTerraform(this._managingOrganization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      challenge_policy: {
        value: iamPasswordPolicyChallengePolicyToHclTerraform(this._challengePolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IamPasswordPolicyChallengePolicyList",
      },
      complexity: {
        value: iamPasswordPolicyComplexityToHclTerraform(this._complexity.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IamPasswordPolicyComplexityList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
