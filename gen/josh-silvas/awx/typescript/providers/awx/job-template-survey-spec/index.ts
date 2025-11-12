// https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/job_template_survey_spec
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface JobTemplateSurveySpecConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the job template survey spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/job_template_survey_spec#description JobTemplateSurveySpec#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/job_template_survey_spec#id JobTemplateSurveySpec#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the Job Template to which create the survey spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/job_template_survey_spec#job_template_id JobTemplateSurveySpec#job_template_id}
  */
  readonly jobTemplateId: number;
  /**
  * The name of the Job Template survey spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/job_template_survey_spec#name JobTemplateSurveySpec#name}
  */
  readonly name: string;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/job_template_survey_spec#spec JobTemplateSurveySpec#spec}
  */
  readonly spec: JobTemplateSurveySpecSpec[] | cdktf.IResolvable;
}
export interface JobTemplateSurveySpecSpec {
  /**
  * List of choices when type is 'multiplechoice' or 'multiselect'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/job_template_survey_spec#choices JobTemplateSurveySpec#choices}
  */
  readonly choices?: string[];
  /**
  * Default answer value for the survey question.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/job_template_survey_spec#default JobTemplateSurveySpec#default}
  */
  readonly default?: string;
  /**
  * Maximum length of the answer for type 'text' or 'password' and maximum value of the response for type 'integer' or 'float'. Defaults to 1024
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/job_template_survey_spec#max JobTemplateSurveySpec#max}
  */
  readonly max?: number;
  /**
  * Minimum length of the answer for type 'text' or 'password' and minimum value of the response for type 'integer' or 'float'. Defaults to 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/job_template_survey_spec#min JobTemplateSurveySpec#min}
  */
  readonly min?: number;
  /**
  * Description of the question that will be asked to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/job_template_survey_spec#question_description JobTemplateSurveySpec#question_description}
  */
  readonly questionDescription?: string;
  /**
  * Name of the question that will be asked to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/job_template_survey_spec#question_name JobTemplateSurveySpec#question_name}
  */
  readonly questionName: string;
  /**
  * Boolean to decide if this variable is required for the survey.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/job_template_survey_spec#required JobTemplateSurveySpec#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * The type of the question. One of "text", "password", "integer", "float", "multiplechoice" or "multiselect"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/job_template_survey_spec#type JobTemplateSurveySpec#type}
  */
  readonly type: string;
  /**
  * Name of the ansible variable that will be provisioned with the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/job_template_survey_spec#variable JobTemplateSurveySpec#variable}
  */
  readonly variable: string;
}

export function jobTemplateSurveySpecSpecToTerraform(struct?: JobTemplateSurveySpecSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    choices: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.choices),
    default: cdktf.stringToTerraform(struct!.default),
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
    question_description: cdktf.stringToTerraform(struct!.questionDescription),
    question_name: cdktf.stringToTerraform(struct!.questionName),
    required: cdktf.booleanToTerraform(struct!.required),
    type: cdktf.stringToTerraform(struct!.type),
    variable: cdktf.stringToTerraform(struct!.variable),
  }
}


export function jobTemplateSurveySpecSpecToHclTerraform(struct?: JobTemplateSurveySpecSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    choices: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.choices),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    question_description: {
      value: cdktf.stringToHclTerraform(struct!.questionDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    question_name: {
      value: cdktf.stringToHclTerraform(struct!.questionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable: {
      value: cdktf.stringToHclTerraform(struct!.variable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTemplateSurveySpecSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobTemplateSurveySpecSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._choices !== undefined) {
      hasAnyValues = true;
      internalValueResult.choices = this._choices;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._questionDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.questionDescription = this._questionDescription;
    }
    if (this._questionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.questionName = this._questionName;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._variable !== undefined) {
      hasAnyValues = true;
      internalValueResult.variable = this._variable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTemplateSurveySpecSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._choices = undefined;
      this._default = undefined;
      this._max = undefined;
      this._min = undefined;
      this._questionDescription = undefined;
      this._questionName = undefined;
      this._required = undefined;
      this._type = undefined;
      this._variable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._choices = value.choices;
      this._default = value.default;
      this._max = value.max;
      this._min = value.min;
      this._questionDescription = value.questionDescription;
      this._questionName = value.questionName;
      this._required = value.required;
      this._type = value.type;
      this._variable = value.variable;
    }
  }

  // choices - computed: false, optional: true, required: false
  private _choices?: string[]; 
  public get choices() {
    return this.getListAttribute('choices');
  }
  public set choices(value: string[]) {
    this._choices = value;
  }
  public resetChoices() {
    this._choices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get choicesInput() {
    return this._choices;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }

  // question_description - computed: false, optional: true, required: false
  private _questionDescription?: string; 
  public get questionDescription() {
    return this.getStringAttribute('question_description');
  }
  public set questionDescription(value: string) {
    this._questionDescription = value;
  }
  public resetQuestionDescription() {
    this._questionDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get questionDescriptionInput() {
    return this._questionDescription;
  }

  // question_name - computed: false, optional: false, required: true
  private _questionName?: string; 
  public get questionName() {
    return this.getStringAttribute('question_name');
  }
  public set questionName(value: string) {
    this._questionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get questionNameInput() {
    return this._questionName;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // variable - computed: false, optional: false, required: true
  private _variable?: string; 
  public get variable() {
    return this.getStringAttribute('variable');
  }
  public set variable(value: string) {
    this._variable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variableInput() {
    return this._variable;
  }
}

export class JobTemplateSurveySpecSpecList extends cdktf.ComplexList {
  public internalValue? : JobTemplateSurveySpecSpec[] | cdktf.IResolvable

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
  public get(index: number): JobTemplateSurveySpecSpecOutputReference {
    return new JobTemplateSurveySpecSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/job_template_survey_spec awx_job_template_survey_spec}
*/
export class JobTemplateSurveySpec extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awx_job_template_survey_spec";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a JobTemplateSurveySpec resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the JobTemplateSurveySpec to import
  * @param importFromId The id of the existing JobTemplateSurveySpec that should be imported. Refer to the {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/job_template_survey_spec#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the JobTemplateSurveySpec to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "awx_job_template_survey_spec", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/job_template_survey_spec awx_job_template_survey_spec} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options JobTemplateSurveySpecConfig
  */
  public constructor(scope: Construct, id: string, config: JobTemplateSurveySpecConfig) {
    super(scope, id, {
      terraformResourceType: 'awx_job_template_survey_spec',
      terraformGeneratorMetadata: {
        providerName: 'awx',
        providerVersion: '1.7.5',
        providerVersionConstraint: '1.7.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._jobTemplateId = config.jobTemplateId;
    this._name = config.name;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // job_template_id - computed: false, optional: false, required: true
  private _jobTemplateId?: number; 
  public get jobTemplateId() {
    return this.getNumberAttribute('job_template_id');
  }
  public set jobTemplateId(value: number) {
    this._jobTemplateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTemplateIdInput() {
    return this._jobTemplateId;
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

  // spec - computed: false, optional: false, required: true
  private _spec = new JobTemplateSurveySpecSpecList(this, "spec", false);
  public get spec() {
    return this._spec;
  }
  public putSpec(value: JobTemplateSurveySpecSpec[] | cdktf.IResolvable) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      job_template_id: cdktf.numberToTerraform(this._jobTemplateId),
      name: cdktf.stringToTerraform(this._name),
      spec: cdktf.listMapper(jobTemplateSurveySpecSpecToTerraform, true)(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      job_template_id: {
        value: cdktf.numberToHclTerraform(this._jobTemplateId),
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
      spec: {
        value: cdktf.listMapperHcl(jobTemplateSurveySpecSpecToHclTerraform, true)(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JobTemplateSurveySpecSpecList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
