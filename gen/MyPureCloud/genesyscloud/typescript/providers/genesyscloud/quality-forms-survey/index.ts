// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/quality_forms_survey
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QualityFormsSurveyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Is this form disabled Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/quality_forms_survey#disabled QualityFormsSurvey#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Markdown text for the bottom of the form.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/quality_forms_survey#footer QualityFormsSurvey#footer}
  */
  readonly footer?: string;
  /**
  * Markdown text for the top of the form.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/quality_forms_survey#header QualityFormsSurvey#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/quality_forms_survey#id QualityFormsSurvey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Language for survey viewer localization. Currently localized languages: da, de, en-US, es, fi, fr, it, ja, ko, nl, no, pl, pt-BR, sv, th, tr, zh-CN, zh-TW. Languages in beta: pt-PT, he, hi. Languages in alpha: ar, uk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/quality_forms_survey#language QualityFormsSurvey#language}
  */
  readonly language: string;
  /**
  * The name of the entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/quality_forms_survey#name QualityFormsSurvey#name}
  */
  readonly name: string;
  /**
  * Specifies if the survey form is published. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/quality_forms_survey#published QualityFormsSurvey#published}
  */
  readonly published?: boolean | cdktf.IResolvable;
  /**
  * question_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/quality_forms_survey#question_groups QualityFormsSurvey#question_groups}
  */
  readonly questionGroups: QualityFormsSurveyQuestionGroups[] | cdktf.IResolvable;
}
export interface QualityFormsSurveyQuestionGroupsQuestionsAnswerOptionsAssistanceConditions {
  /**
  * List of assistance conditions which are combined together with a logical AND operator. Eg ( assistanceCondtion1 && assistanceCondition2 ) wherein assistanceCondition could be ( EXISTS topic1 || topic2 || ... ) or (NOTEXISTS topic3 || topic4 || ...).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/quality_forms_survey#operator QualityFormsSurvey#operator}
  */
  readonly operator: string;
  /**
  * List of topicIds within the assistance condition which would be combined together using logical OR operator. Eg ( topicId_1 || topicId_2 ) .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/quality_forms_survey#topic_ids QualityFormsSurvey#topic_ids}
  */
  readonly topicIds?: string[];
}

export function qualityFormsSurveyQuestionGroupsQuestionsAnswerOptionsAssistanceConditionsToTerraform(struct?: QualityFormsSurveyQuestionGroupsQuestionsAnswerOptionsAssistanceConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    topic_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.topicIds),
  }
}


export function qualityFormsSurveyQuestionGroupsQuestionsAnswerOptionsAssistanceConditionsToHclTerraform(struct?: QualityFormsSurveyQuestionGroupsQuestionsAnswerOptionsAssistanceConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.topicIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QualityFormsSurveyQuestionGroupsQuestionsAnswerOptionsAssistanceConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QualityFormsSurveyQuestionGroupsQuestionsAnswerOptionsAssistanceConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._topicIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicIds = this._topicIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QualityFormsSurveyQuestionGroupsQuestionsAnswerOptionsAssistanceConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._topicIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._topicIds = value.topicIds;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // topic_ids - computed: false, optional: true, required: false
  private _topicIds?: string[]; 
  public get topicIds() {
    return this.getListAttribute('topic_ids');
  }
  public set topicIds(value: string[]) {
    this._topicIds = value;
  }
  public resetTopicIds() {
    this._topicIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicIdsInput() {
    return this._topicIds;
  }
}

export class QualityFormsSurveyQuestionGroupsQuestionsAnswerOptionsAssistanceConditionsList extends cdktf.ComplexList {
  public internalValue? : QualityFormsSurveyQuestionGroupsQuestionsAnswerOptionsAssistanceConditions[] | cdktf.IResolvable

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
  public get(index: number): QualityFormsSurveyQuestionGroupsQuestionsAnswerOptionsAssistanceConditionsOutputReference {
    return new QualityFormsSurveyQuestionGroupsQuestionsAnswerOptionsAssistanceConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QualityFormsSurveyQuestionGroupsQuestionsAnswerOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/quality_forms_survey#text QualityFormsSurvey#text}
  */
  readonly text: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/quality_forms_survey#value QualityFormsSurvey#value}
  */
  readonly value: number;
  /**
  * assistance_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/quality_forms_survey#assistance_conditions QualityFormsSurvey#assistance_conditions}
  */
  readonly assistanceConditions?: QualityFormsSurveyQuestionGroupsQuestionsAnswerOptionsAssistanceConditions[] | cdktf.IResolvable;
}

export function qualityFormsSurveyQuestionGroupsQuestionsAnswerOptionsToTerraform(struct?: QualityFormsSurveyQuestionGroupsQuestionsAnswerOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
    value: cdktf.numberToTerraform(struct!.value),
    assistance_conditions: cdktf.listMapper(qualityFormsSurveyQuestionGroupsQuestionsAnswerOptionsAssistanceConditionsToTerraform, true)(struct!.assistanceConditions),
  }
}


export function qualityFormsSurveyQuestionGroupsQuestionsAnswerOptionsToHclTerraform(struct?: QualityFormsSurveyQuestionGroupsQuestionsAnswerOptions | cdktf.IResolvable): any {
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
    assistance_conditions: {
      value: cdktf.listMapperHcl(qualityFormsSurveyQuestionGroupsQuestionsAnswerOptionsAssistanceConditionsToHclTerraform, true)(struct!.assistanceConditions),
      isBlock: true,
      type: "set",
      storageClassType: "QualityFormsSurveyQuestionGroupsQuestionsAnswerOptionsAssistanceConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QualityFormsSurveyQuestionGroupsQuestionsAnswerOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QualityFormsSurveyQuestionGroupsQuestionsAnswerOptions | cdktf.IResolvable | undefined {
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
    if (this._assistanceConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assistanceConditions = this._assistanceConditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QualityFormsSurveyQuestionGroupsQuestionsAnswerOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
      this._value = undefined;
      this._assistanceConditions.internalValue = undefined;
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
      this._assistanceConditions.internalValue = value.assistanceConditions;
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

  // assistance_conditions - computed: false, optional: true, required: false
  private _assistanceConditions = new QualityFormsSurveyQuestionGroupsQuestionsAnswerOptionsAssistanceConditionsList(this, "assistance_conditions", true);
  public get assistanceConditions() {
    return this._assistanceConditions;
  }
  public putAssistanceConditions(value: QualityFormsSurveyQuestionGroupsQuestionsAnswerOptionsAssistanceConditions[] | cdktf.IResolvable) {
    this._assistanceConditions.internalValue = value;
  }
  public resetAssistanceConditions() {
    this._assistanceConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assistanceConditionsInput() {
    return this._assistanceConditions.internalValue;
  }
}

export class QualityFormsSurveyQuestionGroupsQuestionsAnswerOptionsList extends cdktf.ComplexList {
  public internalValue? : QualityFormsSurveyQuestionGroupsQuestionsAnswerOptions[] | cdktf.IResolvable

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
  public get(index: number): QualityFormsSurveyQuestionGroupsQuestionsAnswerOptionsOutputReference {
    return new QualityFormsSurveyQuestionGroupsQuestionsAnswerOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QualityFormsSurveyQuestionGroupsQuestionsVisibilityCondition {
  /**
  * Valid Values: AND, OR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/quality_forms_survey#combining_operation QualityFormsSurvey#combining_operation}
  */
  readonly combiningOperation: string;
  /**
  * A list of strings, each representing the location in the form of the Answer Option to depend on. In the format of "/form/questionGroup/{questionGroupIndex}/question/{questionIndex}/answer/{answerIndex}" or, to assume the current question group, "../question/{questionIndex}/answer/{answerIndex}". Note: Indexes are zero-based
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/quality_forms_survey#predicates QualityFormsSurvey#predicates}
  */
  readonly predicates: string[];
}

export function qualityFormsSurveyQuestionGroupsQuestionsVisibilityConditionToTerraform(struct?: QualityFormsSurveyQuestionGroupsQuestionsVisibilityConditionOutputReference | QualityFormsSurveyQuestionGroupsQuestionsVisibilityCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    combining_operation: cdktf.stringToTerraform(struct!.combiningOperation),
    predicates: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.predicates),
  }
}


export function qualityFormsSurveyQuestionGroupsQuestionsVisibilityConditionToHclTerraform(struct?: QualityFormsSurveyQuestionGroupsQuestionsVisibilityConditionOutputReference | QualityFormsSurveyQuestionGroupsQuestionsVisibilityCondition): any {
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

export class QualityFormsSurveyQuestionGroupsQuestionsVisibilityConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QualityFormsSurveyQuestionGroupsQuestionsVisibilityCondition | undefined {
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

  public set internalValue(value: QualityFormsSurveyQuestionGroupsQuestionsVisibilityCondition | undefined) {
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
export interface QualityFormsSurveyQuestionGroupsQuestions {
  /**
  * Prompt for details explaining the chosen NPS score. Used by NPS questions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/quality_forms_survey#explanation_prompt QualityFormsSurvey#explanation_prompt}
  */
  readonly explanationPrompt?: string;
  /**
  * Help text for the question.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/quality_forms_survey#help_text QualityFormsSurvey#help_text}
  */
  readonly helpText?: string;
  /**
  * How many characters are allowed in the text response to this question. Used by NPS and Free Text question types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/quality_forms_survey#max_response_characters QualityFormsSurvey#max_response_characters}
  */
  readonly maxResponseCharacters?: number;
  /**
  * Specifies whether a not applicable answer is enabled. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/quality_forms_survey#na_enabled QualityFormsSurvey#na_enabled}
  */
  readonly naEnabled?: boolean | cdktf.IResolvable;
  /**
  * Individual question
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/quality_forms_survey#text QualityFormsSurvey#text}
  */
  readonly text: string;
  /**
  * Valid Values: multipleChoiceQuestion, freeTextQuestion, npsQuestion, readOnlyTextBlockQuestion Defaults to `multipleChoiceQuestion`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/quality_forms_survey#type QualityFormsSurvey#type}
  */
  readonly type?: string;
  /**
  * answer_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/quality_forms_survey#answer_options QualityFormsSurvey#answer_options}
  */
  readonly answerOptions?: QualityFormsSurveyQuestionGroupsQuestionsAnswerOptions[] | cdktf.IResolvable;
  /**
  * visibility_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/quality_forms_survey#visibility_condition QualityFormsSurvey#visibility_condition}
  */
  readonly visibilityCondition?: QualityFormsSurveyQuestionGroupsQuestionsVisibilityCondition;
}

export function qualityFormsSurveyQuestionGroupsQuestionsToTerraform(struct?: QualityFormsSurveyQuestionGroupsQuestions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    explanation_prompt: cdktf.stringToTerraform(struct!.explanationPrompt),
    help_text: cdktf.stringToTerraform(struct!.helpText),
    max_response_characters: cdktf.numberToTerraform(struct!.maxResponseCharacters),
    na_enabled: cdktf.booleanToTerraform(struct!.naEnabled),
    text: cdktf.stringToTerraform(struct!.text),
    type: cdktf.stringToTerraform(struct!.type),
    answer_options: cdktf.listMapper(qualityFormsSurveyQuestionGroupsQuestionsAnswerOptionsToTerraform, true)(struct!.answerOptions),
    visibility_condition: qualityFormsSurveyQuestionGroupsQuestionsVisibilityConditionToTerraform(struct!.visibilityCondition),
  }
}


export function qualityFormsSurveyQuestionGroupsQuestionsToHclTerraform(struct?: QualityFormsSurveyQuestionGroupsQuestions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    explanation_prompt: {
      value: cdktf.stringToHclTerraform(struct!.explanationPrompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    help_text: {
      value: cdktf.stringToHclTerraform(struct!.helpText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_response_characters: {
      value: cdktf.numberToHclTerraform(struct!.maxResponseCharacters),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    answer_options: {
      value: cdktf.listMapperHcl(qualityFormsSurveyQuestionGroupsQuestionsAnswerOptionsToHclTerraform, true)(struct!.answerOptions),
      isBlock: true,
      type: "list",
      storageClassType: "QualityFormsSurveyQuestionGroupsQuestionsAnswerOptionsList",
    },
    visibility_condition: {
      value: qualityFormsSurveyQuestionGroupsQuestionsVisibilityConditionToHclTerraform(struct!.visibilityCondition),
      isBlock: true,
      type: "list",
      storageClassType: "QualityFormsSurveyQuestionGroupsQuestionsVisibilityConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QualityFormsSurveyQuestionGroupsQuestionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QualityFormsSurveyQuestionGroupsQuestions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._explanationPrompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.explanationPrompt = this._explanationPrompt;
    }
    if (this._helpText !== undefined) {
      hasAnyValues = true;
      internalValueResult.helpText = this._helpText;
    }
    if (this._maxResponseCharacters !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxResponseCharacters = this._maxResponseCharacters;
    }
    if (this._naEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.naEnabled = this._naEnabled;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
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

  public set internalValue(value: QualityFormsSurveyQuestionGroupsQuestions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._explanationPrompt = undefined;
      this._helpText = undefined;
      this._maxResponseCharacters = undefined;
      this._naEnabled = undefined;
      this._text = undefined;
      this._type = undefined;
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
      this._explanationPrompt = value.explanationPrompt;
      this._helpText = value.helpText;
      this._maxResponseCharacters = value.maxResponseCharacters;
      this._naEnabled = value.naEnabled;
      this._text = value.text;
      this._type = value.type;
      this._answerOptions.internalValue = value.answerOptions;
      this._visibilityCondition.internalValue = value.visibilityCondition;
    }
  }

  // explanation_prompt - computed: false, optional: true, required: false
  private _explanationPrompt?: string; 
  public get explanationPrompt() {
    return this.getStringAttribute('explanation_prompt');
  }
  public set explanationPrompt(value: string) {
    this._explanationPrompt = value;
  }
  public resetExplanationPrompt() {
    this._explanationPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explanationPromptInput() {
    return this._explanationPrompt;
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

  // max_response_characters - computed: false, optional: true, required: false
  private _maxResponseCharacters?: number; 
  public get maxResponseCharacters() {
    return this.getNumberAttribute('max_response_characters');
  }
  public set maxResponseCharacters(value: number) {
    this._maxResponseCharacters = value;
  }
  public resetMaxResponseCharacters() {
    this._maxResponseCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResponseCharactersInput() {
    return this._maxResponseCharacters;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // answer_options - computed: false, optional: true, required: false
  private _answerOptions = new QualityFormsSurveyQuestionGroupsQuestionsAnswerOptionsList(this, "answer_options", false);
  public get answerOptions() {
    return this._answerOptions;
  }
  public putAnswerOptions(value: QualityFormsSurveyQuestionGroupsQuestionsAnswerOptions[] | cdktf.IResolvable) {
    this._answerOptions.internalValue = value;
  }
  public resetAnswerOptions() {
    this._answerOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get answerOptionsInput() {
    return this._answerOptions.internalValue;
  }

  // visibility_condition - computed: false, optional: true, required: false
  private _visibilityCondition = new QualityFormsSurveyQuestionGroupsQuestionsVisibilityConditionOutputReference(this, "visibility_condition");
  public get visibilityCondition() {
    return this._visibilityCondition;
  }
  public putVisibilityCondition(value: QualityFormsSurveyQuestionGroupsQuestionsVisibilityCondition) {
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

export class QualityFormsSurveyQuestionGroupsQuestionsList extends cdktf.ComplexList {
  public internalValue? : QualityFormsSurveyQuestionGroupsQuestions[] | cdktf.IResolvable

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
  public get(index: number): QualityFormsSurveyQuestionGroupsQuestionsOutputReference {
    return new QualityFormsSurveyQuestionGroupsQuestionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QualityFormsSurveyQuestionGroupsVisibilityCondition {
  /**
  * Valid Values: AND, OR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/quality_forms_survey#combining_operation QualityFormsSurvey#combining_operation}
  */
  readonly combiningOperation: string;
  /**
  * A list of strings, each representing the location in the form of the Answer Option to depend on. In the format of "/form/questionGroup/{questionGroupIndex}/question/{questionIndex}/answer/{answerIndex}" or, to assume the current question group, "../question/{questionIndex}/answer/{answerIndex}". Note: Indexes are zero-based
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/quality_forms_survey#predicates QualityFormsSurvey#predicates}
  */
  readonly predicates: string[];
}

export function qualityFormsSurveyQuestionGroupsVisibilityConditionToTerraform(struct?: QualityFormsSurveyQuestionGroupsVisibilityConditionOutputReference | QualityFormsSurveyQuestionGroupsVisibilityCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    combining_operation: cdktf.stringToTerraform(struct!.combiningOperation),
    predicates: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.predicates),
  }
}


export function qualityFormsSurveyQuestionGroupsVisibilityConditionToHclTerraform(struct?: QualityFormsSurveyQuestionGroupsVisibilityConditionOutputReference | QualityFormsSurveyQuestionGroupsVisibilityCondition): any {
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

export class QualityFormsSurveyQuestionGroupsVisibilityConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QualityFormsSurveyQuestionGroupsVisibilityCondition | undefined {
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

  public set internalValue(value: QualityFormsSurveyQuestionGroupsVisibilityCondition | undefined) {
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
export interface QualityFormsSurveyQuestionGroups {
  /**
  * Specifies whether a not applicable answer is enabled. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/quality_forms_survey#na_enabled QualityFormsSurvey#na_enabled}
  */
  readonly naEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of display question in question group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/quality_forms_survey#name QualityFormsSurvey#name}
  */
  readonly name: string;
  /**
  * questions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/quality_forms_survey#questions QualityFormsSurvey#questions}
  */
  readonly questions: QualityFormsSurveyQuestionGroupsQuestions[] | cdktf.IResolvable;
  /**
  * visibility_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/quality_forms_survey#visibility_condition QualityFormsSurvey#visibility_condition}
  */
  readonly visibilityCondition?: QualityFormsSurveyQuestionGroupsVisibilityCondition;
}

export function qualityFormsSurveyQuestionGroupsToTerraform(struct?: QualityFormsSurveyQuestionGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    na_enabled: cdktf.booleanToTerraform(struct!.naEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    questions: cdktf.listMapper(qualityFormsSurveyQuestionGroupsQuestionsToTerraform, true)(struct!.questions),
    visibility_condition: qualityFormsSurveyQuestionGroupsVisibilityConditionToTerraform(struct!.visibilityCondition),
  }
}


export function qualityFormsSurveyQuestionGroupsToHclTerraform(struct?: QualityFormsSurveyQuestionGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    questions: {
      value: cdktf.listMapperHcl(qualityFormsSurveyQuestionGroupsQuestionsToHclTerraform, true)(struct!.questions),
      isBlock: true,
      type: "list",
      storageClassType: "QualityFormsSurveyQuestionGroupsQuestionsList",
    },
    visibility_condition: {
      value: qualityFormsSurveyQuestionGroupsVisibilityConditionToHclTerraform(struct!.visibilityCondition),
      isBlock: true,
      type: "list",
      storageClassType: "QualityFormsSurveyQuestionGroupsVisibilityConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QualityFormsSurveyQuestionGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QualityFormsSurveyQuestionGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._naEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.naEnabled = this._naEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
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

  public set internalValue(value: QualityFormsSurveyQuestionGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._naEnabled = undefined;
      this._name = undefined;
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
      this._naEnabled = value.naEnabled;
      this._name = value.name;
      this._questions.internalValue = value.questions;
      this._visibilityCondition.internalValue = value.visibilityCondition;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // questions - computed: false, optional: false, required: true
  private _questions = new QualityFormsSurveyQuestionGroupsQuestionsList(this, "questions", false);
  public get questions() {
    return this._questions;
  }
  public putQuestions(value: QualityFormsSurveyQuestionGroupsQuestions[] | cdktf.IResolvable) {
    this._questions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get questionsInput() {
    return this._questions.internalValue;
  }

  // visibility_condition - computed: false, optional: true, required: false
  private _visibilityCondition = new QualityFormsSurveyQuestionGroupsVisibilityConditionOutputReference(this, "visibility_condition");
  public get visibilityCondition() {
    return this._visibilityCondition;
  }
  public putVisibilityCondition(value: QualityFormsSurveyQuestionGroupsVisibilityCondition) {
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

export class QualityFormsSurveyQuestionGroupsList extends cdktf.ComplexList {
  public internalValue? : QualityFormsSurveyQuestionGroups[] | cdktf.IResolvable

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
  public get(index: number): QualityFormsSurveyQuestionGroupsOutputReference {
    return new QualityFormsSurveyQuestionGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/quality_forms_survey genesyscloud_quality_forms_survey}
*/
export class QualityFormsSurvey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_quality_forms_survey";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a QualityFormsSurvey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QualityFormsSurvey to import
  * @param importFromId The id of the existing QualityFormsSurvey that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/quality_forms_survey#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QualityFormsSurvey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_quality_forms_survey", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/quality_forms_survey genesyscloud_quality_forms_survey} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QualityFormsSurveyConfig
  */
  public constructor(scope: Construct, id: string, config: QualityFormsSurveyConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_quality_forms_survey',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.73.0',
        providerVersionConstraint: '1.73.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._disabled = config.disabled;
    this._footer = config.footer;
    this._header = config.header;
    this._id = config.id;
    this._language = config.language;
    this._name = config.name;
    this._published = config.published;
    this._questionGroups.internalValue = config.questionGroups;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // footer - computed: false, optional: true, required: false
  private _footer?: string; 
  public get footer() {
    return this.getStringAttribute('footer');
  }
  public set footer(value: string) {
    this._footer = value;
  }
  public resetFooter() {
    this._footer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get footerInput() {
    return this._footer;
  }

  // header - computed: false, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
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

  // language - computed: false, optional: false, required: true
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
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

  // question_groups - computed: false, optional: false, required: true
  private _questionGroups = new QualityFormsSurveyQuestionGroupsList(this, "question_groups", false);
  public get questionGroups() {
    return this._questionGroups;
  }
  public putQuestionGroups(value: QualityFormsSurveyQuestionGroups[] | cdktf.IResolvable) {
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
      disabled: cdktf.booleanToTerraform(this._disabled),
      footer: cdktf.stringToTerraform(this._footer),
      header: cdktf.stringToTerraform(this._header),
      id: cdktf.stringToTerraform(this._id),
      language: cdktf.stringToTerraform(this._language),
      name: cdktf.stringToTerraform(this._name),
      published: cdktf.booleanToTerraform(this._published),
      question_groups: cdktf.listMapper(qualityFormsSurveyQuestionGroupsToTerraform, true)(this._questionGroups.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      footer: {
        value: cdktf.stringToHclTerraform(this._footer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header: {
        value: cdktf.stringToHclTerraform(this._header),
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
      language: {
        value: cdktf.stringToHclTerraform(this._language),
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
        value: cdktf.listMapperHcl(qualityFormsSurveyQuestionGroupsToHclTerraform, true)(this._questionGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QualityFormsSurveyQuestionGroupsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
