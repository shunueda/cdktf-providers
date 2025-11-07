// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CommunicationsTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The communication type ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_template#communication_type_id CommunicationsTemplate#communication_type_id}
  */
  readonly communicationTypeId: string;
  /**
  * The description of the communications template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_template#description CommunicationsTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_template#id CommunicationsTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the communications template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_template#name CommunicationsTemplate#name}
  */
  readonly name: string;
  /**
  * Position of the communications template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_template#position CommunicationsTemplate#position}
  */
  readonly position?: number;
  /**
  * The slug of the communications template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_template#slug CommunicationsTemplate#slug}
  */
  readonly slug?: string;
  /**
  * communication_template_stages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_template#communication_template_stages CommunicationsTemplate#communication_template_stages}
  */
  readonly communicationTemplateStages?: CommunicationsTemplateCommunicationTemplateStages[] | cdktf.IResolvable;
  /**
  * communication_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_template#communication_type CommunicationsTemplate#communication_type}
  */
  readonly communicationType?: CommunicationsTemplateCommunicationType;
}
export interface CommunicationsTemplateCommunicationTemplateStages {
  /**
  * The communication stage ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_template#communication_stage_id CommunicationsTemplate#communication_stage_id}
  */
  readonly communicationStageId?: string;
  /**
  * Email body for the stage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_template#email_body CommunicationsTemplate#email_body}
  */
  readonly emailBody?: string;
  /**
  * Email subject for the stage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_template#email_subject CommunicationsTemplate#email_subject}
  */
  readonly emailSubject?: string;
  /**
  * ID of the communication template stage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_template#id CommunicationsTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Slack content for the stage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_template#slack_content CommunicationsTemplate#slack_content}
  */
  readonly slackContent?: string;
  /**
  * SMS content for the stage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_template#sms_content CommunicationsTemplate#sms_content}
  */
  readonly smsContent?: string;
}

export function communicationsTemplateCommunicationTemplateStagesToTerraform(struct?: CommunicationsTemplateCommunicationTemplateStages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    communication_stage_id: cdktf.stringToTerraform(struct!.communicationStageId),
    email_body: cdktf.stringToTerraform(struct!.emailBody),
    email_subject: cdktf.stringToTerraform(struct!.emailSubject),
    id: cdktf.stringToTerraform(struct!.id),
    slack_content: cdktf.stringToTerraform(struct!.slackContent),
    sms_content: cdktf.stringToTerraform(struct!.smsContent),
  }
}


export function communicationsTemplateCommunicationTemplateStagesToHclTerraform(struct?: CommunicationsTemplateCommunicationTemplateStages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    communication_stage_id: {
      value: cdktf.stringToHclTerraform(struct!.communicationStageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_body: {
      value: cdktf.stringToHclTerraform(struct!.emailBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_subject: {
      value: cdktf.stringToHclTerraform(struct!.emailSubject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slack_content: {
      value: cdktf.stringToHclTerraform(struct!.slackContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_content: {
      value: cdktf.stringToHclTerraform(struct!.smsContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CommunicationsTemplateCommunicationTemplateStagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CommunicationsTemplateCommunicationTemplateStages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._communicationStageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.communicationStageId = this._communicationStageId;
    }
    if (this._emailBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailBody = this._emailBody;
    }
    if (this._emailSubject !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailSubject = this._emailSubject;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._slackContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.slackContent = this._slackContent;
    }
    if (this._smsContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsContent = this._smsContent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CommunicationsTemplateCommunicationTemplateStages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._communicationStageId = undefined;
      this._emailBody = undefined;
      this._emailSubject = undefined;
      this._id = undefined;
      this._slackContent = undefined;
      this._smsContent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._communicationStageId = value.communicationStageId;
      this._emailBody = value.emailBody;
      this._emailSubject = value.emailSubject;
      this._id = value.id;
      this._slackContent = value.slackContent;
      this._smsContent = value.smsContent;
    }
  }

  // communication_stage_id - computed: true, optional: true, required: false
  private _communicationStageId?: string; 
  public get communicationStageId() {
    return this.getStringAttribute('communication_stage_id');
  }
  public set communicationStageId(value: string) {
    this._communicationStageId = value;
  }
  public resetCommunicationStageId() {
    this._communicationStageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communicationStageIdInput() {
    return this._communicationStageId;
  }

  // email_body - computed: true, optional: true, required: false
  private _emailBody?: string; 
  public get emailBody() {
    return this.getStringAttribute('email_body');
  }
  public set emailBody(value: string) {
    this._emailBody = value;
  }
  public resetEmailBody() {
    this._emailBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailBodyInput() {
    return this._emailBody;
  }

  // email_subject - computed: true, optional: true, required: false
  private _emailSubject?: string; 
  public get emailSubject() {
    return this.getStringAttribute('email_subject');
  }
  public set emailSubject(value: string) {
    this._emailSubject = value;
  }
  public resetEmailSubject() {
    this._emailSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailSubjectInput() {
    return this._emailSubject;
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

  // slack_content - computed: true, optional: true, required: false
  private _slackContent?: string; 
  public get slackContent() {
    return this.getStringAttribute('slack_content');
  }
  public set slackContent(value: string) {
    this._slackContent = value;
  }
  public resetSlackContent() {
    this._slackContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackContentInput() {
    return this._slackContent;
  }

  // sms_content - computed: true, optional: true, required: false
  private _smsContent?: string; 
  public get smsContent() {
    return this.getStringAttribute('sms_content');
  }
  public set smsContent(value: string) {
    this._smsContent = value;
  }
  public resetSmsContent() {
    this._smsContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsContentInput() {
    return this._smsContent;
  }
}

export class CommunicationsTemplateCommunicationTemplateStagesList extends cdktf.ComplexList {
  public internalValue? : CommunicationsTemplateCommunicationTemplateStages[] | cdktf.IResolvable

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
  public get(index: number): CommunicationsTemplateCommunicationTemplateStagesOutputReference {
    return new CommunicationsTemplateCommunicationTemplateStagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CommunicationsTemplateCommunicationType {
  /**
  * ID of the communication type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_template#id CommunicationsTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the communication type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_template#name CommunicationsTemplate#name}
  */
  readonly name?: string;
}

export function communicationsTemplateCommunicationTypeToTerraform(struct?: CommunicationsTemplateCommunicationTypeOutputReference | CommunicationsTemplateCommunicationType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function communicationsTemplateCommunicationTypeToHclTerraform(struct?: CommunicationsTemplateCommunicationTypeOutputReference | CommunicationsTemplateCommunicationType): any {
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

export class CommunicationsTemplateCommunicationTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CommunicationsTemplateCommunicationType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CommunicationsTemplateCommunicationType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._name = value.name;
    }
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

  // name - computed: true, optional: true, required: false
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_template rootly_communications_template}
*/
export class CommunicationsTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_communications_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CommunicationsTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CommunicationsTemplate to import
  * @param importFromId The id of the existing CommunicationsTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CommunicationsTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_communications_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_template rootly_communications_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CommunicationsTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CommunicationsTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_communications_template',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._communicationTypeId = config.communicationTypeId;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._position = config.position;
    this._slug = config.slug;
    this._communicationTemplateStages.internalValue = config.communicationTemplateStages;
    this._communicationType.internalValue = config.communicationType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // communication_type_id - computed: false, optional: false, required: true
  private _communicationTypeId?: string; 
  public get communicationTypeId() {
    return this.getStringAttribute('communication_type_id');
  }
  public set communicationTypeId(value: string) {
    this._communicationTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get communicationTypeIdInput() {
    return this._communicationTypeId;
  }

  // description - computed: true, optional: true, required: false
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

  // position - computed: true, optional: true, required: false
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // slug - computed: true, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // communication_template_stages - computed: false, optional: true, required: false
  private _communicationTemplateStages = new CommunicationsTemplateCommunicationTemplateStagesList(this, "communication_template_stages", false);
  public get communicationTemplateStages() {
    return this._communicationTemplateStages;
  }
  public putCommunicationTemplateStages(value: CommunicationsTemplateCommunicationTemplateStages[] | cdktf.IResolvable) {
    this._communicationTemplateStages.internalValue = value;
  }
  public resetCommunicationTemplateStages() {
    this._communicationTemplateStages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communicationTemplateStagesInput() {
    return this._communicationTemplateStages.internalValue;
  }

  // communication_type - computed: false, optional: true, required: false
  private _communicationType = new CommunicationsTemplateCommunicationTypeOutputReference(this, "communication_type");
  public get communicationType() {
    return this._communicationType;
  }
  public putCommunicationType(value: CommunicationsTemplateCommunicationType) {
    this._communicationType.internalValue = value;
  }
  public resetCommunicationType() {
    this._communicationType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communicationTypeInput() {
    return this._communicationType.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      communication_type_id: cdktf.stringToTerraform(this._communicationTypeId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      position: cdktf.numberToTerraform(this._position),
      slug: cdktf.stringToTerraform(this._slug),
      communication_template_stages: cdktf.listMapper(communicationsTemplateCommunicationTemplateStagesToTerraform, true)(this._communicationTemplateStages.internalValue),
      communication_type: communicationsTemplateCommunicationTypeToTerraform(this._communicationType.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      communication_type_id: {
        value: cdktf.stringToHclTerraform(this._communicationTypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      position: {
        value: cdktf.numberToHclTerraform(this._position),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      communication_template_stages: {
        value: cdktf.listMapperHcl(communicationsTemplateCommunicationTemplateStagesToHclTerraform, true)(this._communicationTemplateStages.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CommunicationsTemplateCommunicationTemplateStagesList",
      },
      communication_type: {
        value: communicationsTemplateCommunicationTypeToHclTerraform(this._communicationType.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CommunicationsTemplateCommunicationTypeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
