// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/quality_forms_evaluation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QualityFormsEvaluationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/quality_forms_evaluation#id QualityFormsEvaluation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/quality_forms_evaluation#name QualityFormsEvaluation#name}
  */
  readonly name: string;
  /**
  * Specifies if the evaluation form is published. **Note:** A form cannot be modified if published is set to true. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/quality_forms_evaluation#published QualityFormsEvaluation#published}
  */
  readonly published?: boolean | cdktf.IResolvable;
  /**
  * question_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/quality_forms_evaluation#question_groups QualityFormsEvaluation#question_groups}
  */
  readonly questionGroups: QualityFormsEvaluationQuestionGroups[] | cdktf.IResolvable;
}
export interface QualityFormsEvaluationQuestionGroupsQuestionsAnswerOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/quality_forms_evaluation#text QualityFormsEvaluation#text}
  */
  readonly text: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/quality_forms_evaluation#value QualityFormsEvaluation#value}
  */
  readonly value: number;
}

export function qualityFormsEvaluationQuestionGroupsQuestionsAnswerOptionsToTerraform(struct?: QualityFormsEvaluationQuestionGroupsQuestionsAnswerOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function qualityFormsEvaluationQuestionGroupsQuestionsAnswerOptionsToHclTerraform(struct?: QualityFormsEvaluationQuestionGroupsQuestionsAnswerOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QualityFormsEvaluationQuestionGroupsQuestionsAnswerOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QualityFormsEvaluationQuestionGroupsQuestionsAnswerOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QualityFormsEvaluationQuestionGroupsQuestionsAnswerOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
      this._value = value.value;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class QualityFormsEvaluationQuestionGroupsQuestionsAnswerOptionsList extends cdktf.ComplexList {
  public internalValue? : QualityFormsEvaluationQuestionGroupsQuestionsAnswerOptions[] | cdktf.IResolvable

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
  public get(index: number): QualityFormsEvaluationQuestionGroupsQuestionsAnswerOptionsOutputReference {
    return new QualityFormsEvaluationQuestionGroupsQuestionsAnswerOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QualityFormsEvaluationQuestionGroupsQuestionsVisibilityCondition {
  /**
  * Valid Values: AND, OR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/quality_forms_evaluation#combining_operation QualityFormsEvaluation#combining_operation}
  */
  readonly combiningOperation: string;
  /**
  * A list of strings, each representing the location in the form of the Answer Option to depend on. In the format of "/form/questionGroup/{questionGroupIndex}/question/{questionIndex}/answer/{answerIndex}" or, to assume the current question group, "../question/{questionIndex}/answer/{answerIndex}". Note: Indexes are zero-based
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/quality_forms_evaluation#predicates QualityFormsEvaluation#predicates}
  */
  readonly predicates: string[];
}

export function qualityFormsEvaluationQuestionGroupsQuestionsVisibilityConditionToTerraform(struct?: QualityFormsEvaluationQuestionGroupsQuestionsVisibilityConditionOutputReference | QualityFormsEvaluationQuestionGroupsQuestionsVisibilityCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    combining_operation: cdktf.stringToTerraform(struct!.combiningOperation),
    predicates: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.predicates),
  }
}


export function qualityFormsEvaluationQuestionGroupsQuestionsVisibilityConditionToHclTerraform(struct?: QualityFormsEvaluationQuestionGroupsQuestionsVisibilityConditionOutputReference | QualityFormsEvaluationQuestionGroupsQuestionsVisibilityCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    combining_operation: {
      value: cdktf.stringToHclTerraform(struct!.combiningOperation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    predicates: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.predicates),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QualityFormsEvaluationQuestionGroupsQuestionsVisibilityConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QualityFormsEvaluationQuestionGroupsQuestionsVisibilityCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._combiningOperation !== undefined) {
      hasAnyValues = true;
      internalValueResult.combiningOperation = this._combiningOperation;
    }
    if (this._predicates !== undefined) {
      hasAnyValues = true;
      internalValueResult.predicates = this._predicates;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QualityFormsEvaluationQuestionGroupsQuestionsVisibilityCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._combiningOperation = undefined;
      this._predicates = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._combiningOperation = value.combiningOperation;
      this._predicates = value.predicates;
    }
  }

  // combining_operation - computed: false, optional: false, required: true
  private _combiningOperation?: string; 
  public get combiningOperation() {
    return this.getStringAttribute('combining_operation');
  }
  public set combiningOperation(value: string) {
    this._combiningOperation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get combiningOperationInput() {
    return this._combiningOperation;
  }

  // predicates - computed: false, optional: false, required: true
  private _predicates?: string[]; 
  public get predicates() {
    return this.getListAttribute('predicates');
  }
  public set predicates(value: string[]) {
    this._predicates = value;
  }
  // Temporarily expose input value. Use with caution.
  public get predicatesInput() {
    return this._predicates;
  }
}
export interface QualityFormsEvaluationQuestionGroupsQuestions {
  /**
  * Specifies whether comments are required. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/quality_forms_evaluation#comments_required QualityFormsEvaluation#comments_required}
  */
  readonly commentsRequired?: boolean | cdktf.IResolvable;
  /**
  * Help text for the question.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/quality_forms_evaluation#help_text QualityFormsEvaluation#help_text}
  */
  readonly helpText?: string;
  /**
  * True if the question is a critical question Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/quality_forms_evaluation#is_critical QualityFormsEvaluation#is_critical}
  */
  readonly isCritical?: boolean | cdktf.IResolvable;
  /**
  * True if the question is a fatal question Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/quality_forms_evaluation#is_kill QualityFormsEvaluation#is_kill}
  */
  readonly isKill?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether a not applicable answer is enabled. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/quality_forms_evaluation#na_enabled QualityFormsEvaluation#na_enabled}
  */
  readonly naEnabled?: boolean | cdktf.IResolvable;
  /**
  * Individual question
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/quality_forms_evaluation#text QualityFormsEvaluation#text}
  */
  readonly text: string;
  /**
  * answer_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/quality_forms_evaluation#answer_options QualityFormsEvaluation#answer_options}
  */
  readonly answerOptions: QualityFormsEvaluationQuestionGroupsQuestionsAnswerOptions[] | cdktf.IResolvable;
  /**
  * visibility_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/quality_forms_evaluation#visibility_condition QualityFormsEvaluation#visibility_condition}
  */
  readonly visibilityCondition?: QualityFormsEvaluationQuestionGroupsQuestionsVisibilityCondition;
}

export function qualityFormsEvaluationQuestionGroupsQuestionsToTerraform(struct?: QualityFormsEvaluationQuestionGroupsQuestions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comments_required: cdktf.booleanToTerraform(struct!.commentsRequired),
    help_text: cdktf.stringToTerraform(struct!.helpText),
    is_critical: cdktf.booleanToTerraform(struct!.isCritical),
    is_kill: cdktf.booleanToTerraform(struct!.isKill),
    na_enabled: cdktf.booleanToTerraform(struct!.naEnabled),
    text: cdktf.stringToTerraform(struct!.text),
    answer_options: cdktf.listMapper(qualityFormsEvaluationQuestionGroupsQuestionsAnswerOptionsToTerraform, true)(struct!.answerOptions),
    visibility_condition: qualityFormsEvaluationQuestionGroupsQuestionsVisibilityConditionToTerraform(struct!.visibilityCondition),
  }
}


export function qualityFormsEvaluationQuestionGroupsQuestionsToHclTerraform(struct?: QualityFormsEvaluationQuestionGroupsQuestions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comments_required: {
      value: cdktf.booleanToHclTerraform(struct!.commentsRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    help_text: {
      value: cdktf.stringToHclTerraform(struct!.helpText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_critical: {
      value: cdktf.booleanToHclTerraform(struct!.isCritical),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_kill: {
      value: cdktf.booleanToHclTerraform(struct!.isKill),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    na_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.naEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    answer_options: {
      value: cdktf.listMapperHcl(qualityFormsEvaluationQuestionGroupsQuestionsAnswerOptionsToHclTerraform, true)(struct!.answerOptions),
      isBlock: true,
      type: "list",
      storageClassType: "QualityFormsEvaluationQuestionGroupsQuestionsAnswerOptionsList",
    },
    visibility_condition: {
      value: qualityFormsEvaluationQuestionGroupsQuestionsVisibilityConditionToHclTerraform(struct!.visibilityCondition),
      isBlock: true,
      type: "list",
      storageClassType: "QualityFormsEvaluationQuestionGroupsQuestionsVisibilityConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QualityFormsEvaluationQuestionGroupsQuestionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QualityFormsEvaluationQuestionGroupsQuestions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commentsRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.commentsRequired = this._commentsRequired;
    }
    if (this._helpText !== undefined) {
      hasAnyValues = true;
      internalValueResult.helpText = this._helpText;
    }
    if (this._isCritical !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCritical = this._isCritical;
    }
    if (this._isKill !== undefined) {
      hasAnyValues = true;
      internalValueResult.isKill = this._isKill;
    }
    if (this._naEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.naEnabled = this._naEnabled;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._answerOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.answerOptions = this._answerOptions?.internalValue;
    }
    if (this._visibilityCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibilityCondition = this._visibilityCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QualityFormsEvaluationQuestionGroupsQuestions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commentsRequired = undefined;
      this._helpText = undefined;
      this._isCritical = undefined;
      this._isKill = undefined;
      this._naEnabled = undefined;
      this._text = undefined;
      this._answerOptions.internalValue = undefined;
      this._visibilityCondition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commentsRequired = value.commentsRequired;
      this._helpText = value.helpText;
      this._isCritical = value.isCritical;
      this._isKill = value.isKill;
      this._naEnabled = value.naEnabled;
      this._text = value.text;
      this._answerOptions.internalValue = value.answerOptions;
      this._visibilityCondition.internalValue = value.visibilityCondition;
    }
  }

  // comments_required - computed: false, optional: true, required: false
  private _commentsRequired?: boolean | cdktf.IResolvable; 
  public get commentsRequired() {
    return this.getBooleanAttribute('comments_required');
  }
  public set commentsRequired(value: boolean | cdktf.IResolvable) {
    this._commentsRequired = value;
  }
  public resetCommentsRequired() {
    this._commentsRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsRequiredInput() {
    return this._commentsRequired;
  }

  // help_text - computed: false, optional: true, required: false
  private _helpText?: string; 
  public get helpText() {
    return this.getStringAttribute('help_text');
  }
  public set helpText(value: string) {
    this._helpText = value;
  }
  public resetHelpText() {
    this._helpText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helpTextInput() {
    return this._helpText;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_critical - computed: false, optional: true, required: false
  private _isCritical?: boolean | cdktf.IResolvable; 
  public get isCritical() {
    return this.getBooleanAttribute('is_critical');
  }
  public set isCritical(value: boolean | cdktf.IResolvable) {
    this._isCritical = value;
  }
  public resetIsCritical() {
    this._isCritical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCriticalInput() {
    return this._isCritical;
  }

  // is_kill - computed: false, optional: true, required: false
  private _isKill?: boolean | cdktf.IResolvable; 
  public get isKill() {
    return this.getBooleanAttribute('is_kill');
  }
  public set isKill(value: boolean | cdktf.IResolvable) {
    this._isKill = value;
  }
  public resetIsKill() {
    this._isKill = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isKillInput() {
    return this._isKill;
  }

  // na_enabled - computed: false, optional: true, required: false
  private _naEnabled?: boolean | cdktf.IResolvable; 
  public get naEnabled() {
    return this.getBooleanAttribute('na_enabled');
  }
  public set naEnabled(value: boolean | cdktf.IResolvable) {
    this._naEnabled = value;
  }
  public resetNaEnabled() {
    this._naEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get naEnabledInput() {
    return this._naEnabled;
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // answer_options - computed: false, optional: false, required: true
  private _answerOptions = new QualityFormsEvaluationQuestionGroupsQuestionsAnswerOptionsList(this, "answer_options", false);
  public get answerOptions() {
    return this._answerOptions;
  }
  public putAnswerOptions(value: QualityFormsEvaluationQuestionGroupsQuestionsAnswerOptions[] | cdktf.IResolvable) {
    this._answerOptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get answerOptionsInput() {
    return this._answerOptions.internalValue;
  }

  // visibility_condition - computed: false, optional: true, required: false
  private _visibilityCondition = new QualityFormsEvaluationQuestionGroupsQuestionsVisibilityConditionOutputReference(this, "visibility_condition");
  public get visibilityCondition() {
    return this._visibilityCondition;
  }
  public putVisibilityCondition(value: QualityFormsEvaluationQuestionGroupsQuestionsVisibilityCondition) {
    this._visibilityCondition.internalValue = value;
  }
  public resetVisibilityCondition() {
    this._visibilityCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityConditionInput() {
    return this._visibilityCondition.internalValue;
  }
}

export class QualityFormsEvaluationQuestionGroupsQuestionsList extends cdktf.ComplexList {
  public internalValue? : QualityFormsEvaluationQuestionGroupsQuestions[] | cdktf.IResolvable

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
  public get(index: number): QualityFormsEvaluationQuestionGroupsQuestionsOutputReference {
    return new QualityFormsEvaluationQuestionGroupsQuestionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QualityFormsEvaluationQuestionGroupsVisibilityCondition {
  /**
  * Valid Values: AND, OR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/quality_forms_evaluation#combining_operation QualityFormsEvaluation#combining_operation}
  */
  readonly combiningOperation: string;
  /**
  * A list of strings, each representing the location in the form of the Answer Option to depend on. In the format of "/form/questionGroup/{questionGroupIndex}/question/{questionIndex}/answer/{answerIndex}" or, to assume the current question group, "../question/{questionIndex}/answer/{answerIndex}". Note: Indexes are zero-based
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/quality_forms_evaluation#predicates QualityFormsEvaluation#predicates}
  */
  readonly predicates: string[];
}

export function qualityFormsEvaluationQuestionGroupsVisibilityConditionToTerraform(struct?: QualityFormsEvaluationQuestionGroupsVisibilityConditionOutputReference | QualityFormsEvaluationQuestionGroupsVisibilityCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    combining_operation: cdktf.stringToTerraform(struct!.combiningOperation),
    predicates: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.predicates),
  }
}


export function qualityFormsEvaluationQuestionGroupsVisibilityConditionToHclTerraform(struct?: QualityFormsEvaluationQuestionGroupsVisibilityConditionOutputReference | QualityFormsEvaluationQuestionGroupsVisibilityCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    combining_operation: {
      value: cdktf.stringToHclTerraform(struct!.combiningOperation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    predicates: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.predicates),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QualityFormsEvaluationQuestionGroupsVisibilityConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QualityFormsEvaluationQuestionGroupsVisibilityCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._combiningOperation !== undefined) {
      hasAnyValues = true;
      internalValueResult.combiningOperation = this._combiningOperation;
    }
    if (this._predicates !== undefined) {
      hasAnyValues = true;
      internalValueResult.predicates = this._predicates;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QualityFormsEvaluationQuestionGroupsVisibilityCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._combiningOperation = undefined;
      this._predicates = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._combiningOperation = value.combiningOperation;
      this._predicates = value.predicates;
    }
  }

  // combining_operation - computed: false, optional: false, required: true
  private _combiningOperation?: string; 
  public get combiningOperation() {
    return this.getStringAttribute('combining_operation');
  }
  public set combiningOperation(value: string) {
    this._combiningOperation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get combiningOperationInput() {
    return this._combiningOperation;
  }

  // predicates - computed: false, optional: false, required: true
  private _predicates?: string[]; 
  public get predicates() {
    return this.getListAttribute('predicates');
  }
  public set predicates(value: string[]) {
    this._predicates = value;
  }
  // Temporarily expose input value. Use with caution.
  public get predicatesInput() {
    return this._predicates;
  }
}
export interface QualityFormsEvaluationQuestionGroups {
  /**
  * Specifies whether to default answers to highest score. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/quality_forms_evaluation#default_answers_to_highest QualityFormsEvaluation#default_answers_to_highest}
  */
  readonly defaultAnswersToHighest?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether to default answers to not applicable. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/quality_forms_evaluation#default_answers_to_na QualityFormsEvaluation#default_answers_to_na}
  */
  readonly defaultAnswersToNa?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether a manual weight is set. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/quality_forms_evaluation#manual_weight QualityFormsEvaluation#manual_weight}
  */
  readonly manualWeight?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether a not applicable answer is enabled. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/quality_forms_evaluation#na_enabled QualityFormsEvaluation#na_enabled}
  */
  readonly naEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of display question in question group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/quality_forms_evaluation#name QualityFormsEvaluation#name}
  */
  readonly name: string;
  /**
  * Points per question
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/quality_forms_evaluation#weight QualityFormsEvaluation#weight}
  */
  readonly weight: number;
  /**
  * questions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/quality_forms_evaluation#questions QualityFormsEvaluation#questions}
  */
  readonly questions: QualityFormsEvaluationQuestionGroupsQuestions[] | cdktf.IResolvable;
  /**
  * visibility_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/quality_forms_evaluation#visibility_condition QualityFormsEvaluation#visibility_condition}
  */
  readonly visibilityCondition?: QualityFormsEvaluationQuestionGroupsVisibilityCondition;
}

export function qualityFormsEvaluationQuestionGroupsToTerraform(struct?: QualityFormsEvaluationQuestionGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_answers_to_highest: cdktf.booleanToTerraform(struct!.defaultAnswersToHighest),
    default_answers_to_na: cdktf.booleanToTerraform(struct!.defaultAnswersToNa),
    manual_weight: cdktf.booleanToTerraform(struct!.manualWeight),
    na_enabled: cdktf.booleanToTerraform(struct!.naEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    weight: cdktf.numberToTerraform(struct!.weight),
    questions: cdktf.listMapper(qualityFormsEvaluationQuestionGroupsQuestionsToTerraform, true)(struct!.questions),
    visibility_condition: qualityFormsEvaluationQuestionGroupsVisibilityConditionToTerraform(struct!.visibilityCondition),
  }
}


export function qualityFormsEvaluationQuestionGroupsToHclTerraform(struct?: QualityFormsEvaluationQuestionGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_answers_to_highest: {
      value: cdktf.booleanToHclTerraform(struct!.defaultAnswersToHighest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_answers_to_na: {
      value: cdktf.booleanToHclTerraform(struct!.defaultAnswersToNa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    manual_weight: {
      value: cdktf.booleanToHclTerraform(struct!.manualWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    na_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.naEnabled),
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
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    questions: {
      value: cdktf.listMapperHcl(qualityFormsEvaluationQuestionGroupsQuestionsToHclTerraform, true)(struct!.questions),
      isBlock: true,
      type: "list",
      storageClassType: "QualityFormsEvaluationQuestionGroupsQuestionsList",
    },
    visibility_condition: {
      value: qualityFormsEvaluationQuestionGroupsVisibilityConditionToHclTerraform(struct!.visibilityCondition),
      isBlock: true,
      type: "list",
      storageClassType: "QualityFormsEvaluationQuestionGroupsVisibilityConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QualityFormsEvaluationQuestionGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QualityFormsEvaluationQuestionGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultAnswersToHighest !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAnswersToHighest = this._defaultAnswersToHighest;
    }
    if (this._defaultAnswersToNa !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAnswersToNa = this._defaultAnswersToNa;
    }
    if (this._manualWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualWeight = this._manualWeight;
    }
    if (this._naEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.naEnabled = this._naEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._questions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.questions = this._questions?.internalValue;
    }
    if (this._visibilityCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibilityCondition = this._visibilityCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QualityFormsEvaluationQuestionGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultAnswersToHighest = undefined;
      this._defaultAnswersToNa = undefined;
      this._manualWeight = undefined;
      this._naEnabled = undefined;
      this._name = undefined;
      this._weight = undefined;
      this._questions.internalValue = undefined;
      this._visibilityCondition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultAnswersToHighest = value.defaultAnswersToHighest;
      this._defaultAnswersToNa = value.defaultAnswersToNa;
      this._manualWeight = value.manualWeight;
      this._naEnabled = value.naEnabled;
      this._name = value.name;
      this._weight = value.weight;
      this._questions.internalValue = value.questions;
      this._visibilityCondition.internalValue = value.visibilityCondition;
    }
  }

  // default_answers_to_highest - computed: false, optional: true, required: false
  private _defaultAnswersToHighest?: boolean | cdktf.IResolvable; 
  public get defaultAnswersToHighest() {
    return this.getBooleanAttribute('default_answers_to_highest');
  }
  public set defaultAnswersToHighest(value: boolean | cdktf.IResolvable) {
    this._defaultAnswersToHighest = value;
  }
  public resetDefaultAnswersToHighest() {
    this._defaultAnswersToHighest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAnswersToHighestInput() {
    return this._defaultAnswersToHighest;
  }

  // default_answers_to_na - computed: false, optional: true, required: false
  private _defaultAnswersToNa?: boolean | cdktf.IResolvable; 
  public get defaultAnswersToNa() {
    return this.getBooleanAttribute('default_answers_to_na');
  }
  public set defaultAnswersToNa(value: boolean | cdktf.IResolvable) {
    this._defaultAnswersToNa = value;
  }
  public resetDefaultAnswersToNa() {
    this._defaultAnswersToNa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAnswersToNaInput() {
    return this._defaultAnswersToNa;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // manual_weight - computed: false, optional: true, required: false
  private _manualWeight?: boolean | cdktf.IResolvable; 
  public get manualWeight() {
    return this.getBooleanAttribute('manual_weight');
  }
  public set manualWeight(value: boolean | cdktf.IResolvable) {
    this._manualWeight = value;
  }
  public resetManualWeight() {
    this._manualWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualWeightInput() {
    return this._manualWeight;
  }

  // na_enabled - computed: false, optional: true, required: false
  private _naEnabled?: boolean | cdktf.IResolvable; 
  public get naEnabled() {
    return this.getBooleanAttribute('na_enabled');
  }
  public set naEnabled(value: boolean | cdktf.IResolvable) {
    this._naEnabled = value;
  }
  public resetNaEnabled() {
    this._naEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get naEnabledInput() {
    return this._naEnabled;
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

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // questions - computed: false, optional: false, required: true
  private _questions = new QualityFormsEvaluationQuestionGroupsQuestionsList(this, "questions", false);
  public get questions() {
    return this._questions;
  }
  public putQuestions(value: QualityFormsEvaluationQuestionGroupsQuestions[] | cdktf.IResolvable) {
    this._questions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get questionsInput() {
    return this._questions.internalValue;
  }

  // visibility_condition - computed: false, optional: true, required: false
  private _visibilityCondition = new QualityFormsEvaluationQuestionGroupsVisibilityConditionOutputReference(this, "visibility_condition");
  public get visibilityCondition() {
    return this._visibilityCondition;
  }
  public putVisibilityCondition(value: QualityFormsEvaluationQuestionGroupsVisibilityCondition) {
    this._visibilityCondition.internalValue = value;
  }
  public resetVisibilityCondition() {
    this._visibilityCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityConditionInput() {
    return this._visibilityCondition.internalValue;
  }
}

export class QualityFormsEvaluationQuestionGroupsList extends cdktf.ComplexList {
  public internalValue? : QualityFormsEvaluationQuestionGroups[] | cdktf.IResolvable

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
  public get(index: number): QualityFormsEvaluationQuestionGroupsOutputReference {
    return new QualityFormsEvaluationQuestionGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/quality_forms_evaluation genesyscloud_quality_forms_evaluation}
*/
export class QualityFormsEvaluation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_quality_forms_evaluation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a QualityFormsEvaluation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QualityFormsEvaluation to import
  * @param importFromId The id of the existing QualityFormsEvaluation that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/quality_forms_evaluation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QualityFormsEvaluation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_quality_forms_evaluation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/quality_forms_evaluation genesyscloud_quality_forms_evaluation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QualityFormsEvaluationConfig
  */
  public constructor(scope: Construct, id: string, config: QualityFormsEvaluationConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_quality_forms_evaluation',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.70.0'
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
    this._published = config.published;
    this._questionGroups.internalValue = config.questionGroups;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // context_id - computed: true, optional: false, required: false
  public get contextId() {
    return this.getStringAttribute('context_id');
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

  // published - computed: false, optional: true, required: false
  private _published?: boolean | cdktf.IResolvable; 
  public get published() {
    return this.getBooleanAttribute('published');
  }
  public set published(value: boolean | cdktf.IResolvable) {
    this._published = value;
  }
  public resetPublished() {
    this._published = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishedInput() {
    return this._published;
  }

  // published_id - computed: true, optional: false, required: false
  public get publishedId() {
    return this.getStringAttribute('published_id');
  }

  // question_groups - computed: false, optional: false, required: true
  private _questionGroups = new QualityFormsEvaluationQuestionGroupsList(this, "question_groups", false);
  public get questionGroups() {
    return this._questionGroups;
  }
  public putQuestionGroups(value: QualityFormsEvaluationQuestionGroups[] | cdktf.IResolvable) {
    this._questionGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get questionGroupsInput() {
    return this._questionGroups.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      published: cdktf.booleanToTerraform(this._published),
      question_groups: cdktf.listMapper(qualityFormsEvaluationQuestionGroupsToTerraform, true)(this._questionGroups.internalValue),
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
      published: {
        value: cdktf.booleanToHclTerraform(this._published),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      question_groups: {
        value: cdktf.listMapperHcl(qualityFormsEvaluationQuestionGroupsToHclTerraform, true)(this._questionGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QualityFormsEvaluationQuestionGroupsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
