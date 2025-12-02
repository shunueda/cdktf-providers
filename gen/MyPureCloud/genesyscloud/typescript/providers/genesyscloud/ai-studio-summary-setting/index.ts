// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/ai_studio_summary_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AiStudioSummarySettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Format of the generated summary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/ai_studio_summary_setting#format AiStudioSummarySetting#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/ai_studio_summary_setting#id AiStudioSummarySetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Language of the generated summary, e.g. en-US, it-IT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/ai_studio_summary_setting#language AiStudioSummarySetting#language}
  */
  readonly language: string;
  /**
  * Name of the summary setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/ai_studio_summary_setting#name AiStudioSummarySetting#name}
  */
  readonly name: string;
  /**
  * Set which insights to include in the generated summary by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/ai_studio_summary_setting#predefined_insights AiStudioSummarySetting#predefined_insights}
  */
  readonly predefinedInsights?: string[];
  /**
  * Custom prompt of summary setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/ai_studio_summary_setting#prompt AiStudioSummarySetting#prompt}
  */
  readonly prompt?: string;
  /**
  * Type of the summary setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/ai_studio_summary_setting#setting_type AiStudioSummarySetting#setting_type}
  */
  readonly settingType?: string;
  /**
  * Level of detail of the generated summary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/ai_studio_summary_setting#summary_type AiStudioSummarySetting#summary_type}
  */
  readonly summaryType?: string;
  /**
  * custom_entities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/ai_studio_summary_setting#custom_entities AiStudioSummarySetting#custom_entities}
  */
  readonly customEntities?: AiStudioSummarySettingCustomEntities[] | cdktf.IResolvable;
  /**
  * mask_p_i_i block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/ai_studio_summary_setting#mask_p_i_i AiStudioSummarySetting#mask_p_i_i}
  */
  readonly maskPII?: AiStudioSummarySettingMaskPII;
  /**
  * participant_labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/ai_studio_summary_setting#participant_labels AiStudioSummarySetting#participant_labels}
  */
  readonly participantLabels?: AiStudioSummarySettingParticipantLabels;
}
export interface AiStudioSummarySettingCustomEntities {
  /**
  * Describe the information the entity captures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/ai_studio_summary_setting#description AiStudioSummarySetting#description}
  */
  readonly description?: string;
  /**
  * Label how the entity should be called.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/ai_studio_summary_setting#label AiStudioSummarySetting#label}
  */
  readonly label?: string;
}

export function aiStudioSummarySettingCustomEntitiesToTerraform(struct?: AiStudioSummarySettingCustomEntities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    label: cdktf.stringToTerraform(struct!.label),
  }
}


export function aiStudioSummarySettingCustomEntitiesToHclTerraform(struct?: AiStudioSummarySettingCustomEntities | cdktf.IResolvable): any {
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
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiStudioSummarySettingCustomEntitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AiStudioSummarySettingCustomEntities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiStudioSummarySettingCustomEntities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._label = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._label = value.label;
    }
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

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }
}

export class AiStudioSummarySettingCustomEntitiesList extends cdktf.ComplexList {
  public internalValue? : AiStudioSummarySettingCustomEntities[] | cdktf.IResolvable

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
  public get(index: number): AiStudioSummarySettingCustomEntitiesOutputReference {
    return new AiStudioSummarySettingCustomEntitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AiStudioSummarySettingMaskPII {
  /**
  * Toggle PII visibility in summary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/ai_studio_summary_setting#all AiStudioSummarySetting#all}
  */
  readonly all: boolean | cdktf.IResolvable;
}

export function aiStudioSummarySettingMaskPIIToTerraform(struct?: AiStudioSummarySettingMaskPIIOutputReference | AiStudioSummarySettingMaskPII): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.booleanToTerraform(struct!.all),
  }
}


export function aiStudioSummarySettingMaskPIIToHclTerraform(struct?: AiStudioSummarySettingMaskPIIOutputReference | AiStudioSummarySettingMaskPII): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: cdktf.booleanToHclTerraform(struct!.all),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiStudioSummarySettingMaskPIIOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AiStudioSummarySettingMaskPII | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiStudioSummarySettingMaskPII | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._all = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._all = value.all;
    }
  }

  // all - computed: false, optional: false, required: true
  private _all?: boolean | cdktf.IResolvable; 
  public get all() {
    return this.getBooleanAttribute('all');
  }
  public set all(value: boolean | cdktf.IResolvable) {
    this._all = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }
}
export interface AiStudioSummarySettingParticipantLabels {
  /**
  * Specify how to refer the external participant of the interaction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/ai_studio_summary_setting#external AiStudioSummarySetting#external}
  */
  readonly external?: string;
  /**
  * Specify how to refer the internal participant of the interaction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/ai_studio_summary_setting#internal AiStudioSummarySetting#internal}
  */
  readonly internal?: string;
}

export function aiStudioSummarySettingParticipantLabelsToTerraform(struct?: AiStudioSummarySettingParticipantLabelsOutputReference | AiStudioSummarySettingParticipantLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external: cdktf.stringToTerraform(struct!.external),
    internal: cdktf.stringToTerraform(struct!.internal),
  }
}


export function aiStudioSummarySettingParticipantLabelsToHclTerraform(struct?: AiStudioSummarySettingParticipantLabelsOutputReference | AiStudioSummarySettingParticipantLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external: {
      value: cdktf.stringToHclTerraform(struct!.external),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internal: {
      value: cdktf.stringToHclTerraform(struct!.internal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiStudioSummarySettingParticipantLabelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AiStudioSummarySettingParticipantLabels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._external !== undefined) {
      hasAnyValues = true;
      internalValueResult.external = this._external;
    }
    if (this._internal !== undefined) {
      hasAnyValues = true;
      internalValueResult.internal = this._internal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiStudioSummarySettingParticipantLabels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._external = undefined;
      this._internal = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._external = value.external;
      this._internal = value.internal;
    }
  }

  // external - computed: false, optional: true, required: false
  private _external?: string; 
  public get external() {
    return this.getStringAttribute('external');
  }
  public set external(value: string) {
    this._external = value;
  }
  public resetExternal() {
    this._external = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external;
  }

  // internal - computed: false, optional: true, required: false
  private _internal?: string; 
  public get internal() {
    return this.getStringAttribute('internal');
  }
  public set internal(value: string) {
    this._internal = value;
  }
  public resetInternal() {
    this._internal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalInput() {
    return this._internal;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/ai_studio_summary_setting genesyscloud_ai_studio_summary_setting}
*/
export class AiStudioSummarySetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_ai_studio_summary_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AiStudioSummarySetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AiStudioSummarySetting to import
  * @param importFromId The id of the existing AiStudioSummarySetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/ai_studio_summary_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AiStudioSummarySetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_ai_studio_summary_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/ai_studio_summary_setting genesyscloud_ai_studio_summary_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AiStudioSummarySettingConfig
  */
  public constructor(scope: Construct, id: string, config: AiStudioSummarySettingConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_ai_studio_summary_setting',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.72.2',
        providerVersionConstraint: '1.72.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._format = config.format;
    this._id = config.id;
    this._language = config.language;
    this._name = config.name;
    this._predefinedInsights = config.predefinedInsights;
    this._prompt = config.prompt;
    this._settingType = config.settingType;
    this._summaryType = config.summaryType;
    this._customEntities.internalValue = config.customEntities;
    this._maskPII.internalValue = config.maskPII;
    this._participantLabels.internalValue = config.participantLabels;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // predefined_insights - computed: false, optional: true, required: false
  private _predefinedInsights?: string[]; 
  public get predefinedInsights() {
    return cdktf.Fn.tolist(this.getListAttribute('predefined_insights'));
  }
  public set predefinedInsights(value: string[]) {
    this._predefinedInsights = value;
  }
  public resetPredefinedInsights() {
    this._predefinedInsights = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedInsightsInput() {
    return this._predefinedInsights;
  }

  // prompt - computed: false, optional: true, required: false
  private _prompt?: string; 
  public get prompt() {
    return this.getStringAttribute('prompt');
  }
  public set prompt(value: string) {
    this._prompt = value;
  }
  public resetPrompt() {
    this._prompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptInput() {
    return this._prompt;
  }

  // setting_type - computed: false, optional: true, required: false
  private _settingType?: string; 
  public get settingType() {
    return this.getStringAttribute('setting_type');
  }
  public set settingType(value: string) {
    this._settingType = value;
  }
  public resetSettingType() {
    this._settingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingTypeInput() {
    return this._settingType;
  }

  // summary_type - computed: false, optional: true, required: false
  private _summaryType?: string; 
  public get summaryType() {
    return this.getStringAttribute('summary_type');
  }
  public set summaryType(value: string) {
    this._summaryType = value;
  }
  public resetSummaryType() {
    this._summaryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryTypeInput() {
    return this._summaryType;
  }

  // custom_entities - computed: false, optional: true, required: false
  private _customEntities = new AiStudioSummarySettingCustomEntitiesList(this, "custom_entities", false);
  public get customEntities() {
    return this._customEntities;
  }
  public putCustomEntities(value: AiStudioSummarySettingCustomEntities[] | cdktf.IResolvable) {
    this._customEntities.internalValue = value;
  }
  public resetCustomEntities() {
    this._customEntities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEntitiesInput() {
    return this._customEntities.internalValue;
  }

  // mask_p_i_i - computed: false, optional: true, required: false
  private _maskPII = new AiStudioSummarySettingMaskPIIOutputReference(this, "mask_p_i_i");
  public get maskPII() {
    return this._maskPII;
  }
  public putMaskPII(value: AiStudioSummarySettingMaskPII) {
    this._maskPII.internalValue = value;
  }
  public resetMaskPII() {
    this._maskPII.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskPIIInput() {
    return this._maskPII.internalValue;
  }

  // participant_labels - computed: false, optional: true, required: false
  private _participantLabels = new AiStudioSummarySettingParticipantLabelsOutputReference(this, "participant_labels");
  public get participantLabels() {
    return this._participantLabels;
  }
  public putParticipantLabels(value: AiStudioSummarySettingParticipantLabels) {
    this._participantLabels.internalValue = value;
  }
  public resetParticipantLabels() {
    this._participantLabels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get participantLabelsInput() {
    return this._participantLabels.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      format: cdktf.stringToTerraform(this._format),
      id: cdktf.stringToTerraform(this._id),
      language: cdktf.stringToTerraform(this._language),
      name: cdktf.stringToTerraform(this._name),
      predefined_insights: cdktf.listMapper(cdktf.stringToTerraform, false)(this._predefinedInsights),
      prompt: cdktf.stringToTerraform(this._prompt),
      setting_type: cdktf.stringToTerraform(this._settingType),
      summary_type: cdktf.stringToTerraform(this._summaryType),
      custom_entities: cdktf.listMapper(aiStudioSummarySettingCustomEntitiesToTerraform, true)(this._customEntities.internalValue),
      mask_p_i_i: aiStudioSummarySettingMaskPIIToTerraform(this._maskPII.internalValue),
      participant_labels: aiStudioSummarySettingParticipantLabelsToTerraform(this._participantLabels.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      format: {
        value: cdktf.stringToHclTerraform(this._format),
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
      predefined_insights: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._predefinedInsights),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      prompt: {
        value: cdktf.stringToHclTerraform(this._prompt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      setting_type: {
        value: cdktf.stringToHclTerraform(this._settingType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      summary_type: {
        value: cdktf.stringToHclTerraform(this._summaryType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_entities: {
        value: cdktf.listMapperHcl(aiStudioSummarySettingCustomEntitiesToHclTerraform, true)(this._customEntities.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AiStudioSummarySettingCustomEntitiesList",
      },
      mask_p_i_i: {
        value: aiStudioSummarySettingMaskPIIToHclTerraform(this._maskPII.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AiStudioSummarySettingMaskPIIList",
      },
      participant_labels: {
        value: aiStudioSummarySettingParticipantLabelsToHclTerraform(this._participantLabels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AiStudioSummarySettingParticipantLabelsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
