// https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/prompt_screen_partial
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PromptScreenPartialConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/prompt_screen_partial#id PromptScreenPartial#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The prompt that you are adding partials for. Options are: `login-id`, `login`, `login-password`, `signup`, `signup-id`, `signup-password`, `login-passwordless`, `customized-consent`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/prompt_screen_partial#prompt_type PromptScreenPartial#prompt_type}
  */
  readonly promptType: string;
  /**
  * The name of the screen associated with the partials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/prompt_screen_partial#screen_name PromptScreenPartial#screen_name}
  */
  readonly screenName: string;
  /**
  * insertion_points block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/prompt_screen_partial#insertion_points PromptScreenPartial#insertion_points}
  */
  readonly insertionPoints?: PromptScreenPartialInsertionPoints;
}
export interface PromptScreenPartialInsertionPoints {
  /**
  * Content that goes inside the form
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/prompt_screen_partial#form_content PromptScreenPartial#form_content}
  */
  readonly formContent?: string;
  /**
  * Content that goes at the end of the form.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/prompt_screen_partial#form_content_end PromptScreenPartial#form_content_end}
  */
  readonly formContentEnd?: string;
  /**
  * Content that goes at the start of the form.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/prompt_screen_partial#form_content_start PromptScreenPartial#form_content_start}
  */
  readonly formContentStart?: string;
  /**
  * Footer content for the end of the footer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/prompt_screen_partial#form_footer_end PromptScreenPartial#form_footer_end}
  */
  readonly formFooterEnd?: string;
  /**
  * Footer content for the start of the footer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/prompt_screen_partial#form_footer_start PromptScreenPartial#form_footer_start}
  */
  readonly formFooterStart?: string;
  /**
  * Actions that go at the end of secondary actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/prompt_screen_partial#secondary_actions_end PromptScreenPartial#secondary_actions_end}
  */
  readonly secondaryActionsEnd?: string;
  /**
  * Actions that go at the start of secondary actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/prompt_screen_partial#secondary_actions_start PromptScreenPartial#secondary_actions_start}
  */
  readonly secondaryActionsStart?: string;
}

export function promptScreenPartialInsertionPointsToTerraform(struct?: PromptScreenPartialInsertionPointsOutputReference | PromptScreenPartialInsertionPoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    form_content: cdktf.stringToTerraform(struct!.formContent),
    form_content_end: cdktf.stringToTerraform(struct!.formContentEnd),
    form_content_start: cdktf.stringToTerraform(struct!.formContentStart),
    form_footer_end: cdktf.stringToTerraform(struct!.formFooterEnd),
    form_footer_start: cdktf.stringToTerraform(struct!.formFooterStart),
    secondary_actions_end: cdktf.stringToTerraform(struct!.secondaryActionsEnd),
    secondary_actions_start: cdktf.stringToTerraform(struct!.secondaryActionsStart),
  }
}


export function promptScreenPartialInsertionPointsToHclTerraform(struct?: PromptScreenPartialInsertionPointsOutputReference | PromptScreenPartialInsertionPoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    form_content: {
      value: cdktf.stringToHclTerraform(struct!.formContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    form_content_end: {
      value: cdktf.stringToHclTerraform(struct!.formContentEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    form_content_start: {
      value: cdktf.stringToHclTerraform(struct!.formContentStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    form_footer_end: {
      value: cdktf.stringToHclTerraform(struct!.formFooterEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    form_footer_start: {
      value: cdktf.stringToHclTerraform(struct!.formFooterStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_actions_end: {
      value: cdktf.stringToHclTerraform(struct!.secondaryActionsEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_actions_start: {
      value: cdktf.stringToHclTerraform(struct!.secondaryActionsStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PromptScreenPartialInsertionPointsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PromptScreenPartialInsertionPoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._formContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.formContent = this._formContent;
    }
    if (this._formContentEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.formContentEnd = this._formContentEnd;
    }
    if (this._formContentStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.formContentStart = this._formContentStart;
    }
    if (this._formFooterEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.formFooterEnd = this._formFooterEnd;
    }
    if (this._formFooterStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.formFooterStart = this._formFooterStart;
    }
    if (this._secondaryActionsEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryActionsEnd = this._secondaryActionsEnd;
    }
    if (this._secondaryActionsStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryActionsStart = this._secondaryActionsStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PromptScreenPartialInsertionPoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._formContent = undefined;
      this._formContentEnd = undefined;
      this._formContentStart = undefined;
      this._formFooterEnd = undefined;
      this._formFooterStart = undefined;
      this._secondaryActionsEnd = undefined;
      this._secondaryActionsStart = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._formContent = value.formContent;
      this._formContentEnd = value.formContentEnd;
      this._formContentStart = value.formContentStart;
      this._formFooterEnd = value.formFooterEnd;
      this._formFooterStart = value.formFooterStart;
      this._secondaryActionsEnd = value.secondaryActionsEnd;
      this._secondaryActionsStart = value.secondaryActionsStart;
    }
  }

  // form_content - computed: false, optional: true, required: false
  private _formContent?: string; 
  public get formContent() {
    return this.getStringAttribute('form_content');
  }
  public set formContent(value: string) {
    this._formContent = value;
  }
  public resetFormContent() {
    this._formContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formContentInput() {
    return this._formContent;
  }

  // form_content_end - computed: false, optional: true, required: false
  private _formContentEnd?: string; 
  public get formContentEnd() {
    return this.getStringAttribute('form_content_end');
  }
  public set formContentEnd(value: string) {
    this._formContentEnd = value;
  }
  public resetFormContentEnd() {
    this._formContentEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formContentEndInput() {
    return this._formContentEnd;
  }

  // form_content_start - computed: false, optional: true, required: false
  private _formContentStart?: string; 
  public get formContentStart() {
    return this.getStringAttribute('form_content_start');
  }
  public set formContentStart(value: string) {
    this._formContentStart = value;
  }
  public resetFormContentStart() {
    this._formContentStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formContentStartInput() {
    return this._formContentStart;
  }

  // form_footer_end - computed: false, optional: true, required: false
  private _formFooterEnd?: string; 
  public get formFooterEnd() {
    return this.getStringAttribute('form_footer_end');
  }
  public set formFooterEnd(value: string) {
    this._formFooterEnd = value;
  }
  public resetFormFooterEnd() {
    this._formFooterEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formFooterEndInput() {
    return this._formFooterEnd;
  }

  // form_footer_start - computed: false, optional: true, required: false
  private _formFooterStart?: string; 
  public get formFooterStart() {
    return this.getStringAttribute('form_footer_start');
  }
  public set formFooterStart(value: string) {
    this._formFooterStart = value;
  }
  public resetFormFooterStart() {
    this._formFooterStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formFooterStartInput() {
    return this._formFooterStart;
  }

  // secondary_actions_end - computed: false, optional: true, required: false
  private _secondaryActionsEnd?: string; 
  public get secondaryActionsEnd() {
    return this.getStringAttribute('secondary_actions_end');
  }
  public set secondaryActionsEnd(value: string) {
    this._secondaryActionsEnd = value;
  }
  public resetSecondaryActionsEnd() {
    this._secondaryActionsEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryActionsEndInput() {
    return this._secondaryActionsEnd;
  }

  // secondary_actions_start - computed: false, optional: true, required: false
  private _secondaryActionsStart?: string; 
  public get secondaryActionsStart() {
    return this.getStringAttribute('secondary_actions_start');
  }
  public set secondaryActionsStart(value: string) {
    this._secondaryActionsStart = value;
  }
  public resetSecondaryActionsStart() {
    this._secondaryActionsStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryActionsStartInput() {
    return this._secondaryActionsStart;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/prompt_screen_partial auth0_prompt_screen_partial}
*/
export class PromptScreenPartial extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0_prompt_screen_partial";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PromptScreenPartial resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PromptScreenPartial to import
  * @param importFromId The id of the existing PromptScreenPartial that should be imported. Refer to the {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/prompt_screen_partial#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PromptScreenPartial to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_prompt_screen_partial", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/prompt_screen_partial auth0_prompt_screen_partial} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PromptScreenPartialConfig
  */
  public constructor(scope: Construct, id: string, config: PromptScreenPartialConfig) {
    super(scope, id, {
      terraformResourceType: 'auth0_prompt_screen_partial',
      terraformGeneratorMetadata: {
        providerName: 'auth0',
        providerVersion: '1.33.0'
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
    this._promptType = config.promptType;
    this._screenName = config.screenName;
    this._insertionPoints.internalValue = config.insertionPoints;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // prompt_type - computed: false, optional: false, required: true
  private _promptType?: string; 
  public get promptType() {
    return this.getStringAttribute('prompt_type');
  }
  public set promptType(value: string) {
    this._promptType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get promptTypeInput() {
    return this._promptType;
  }

  // screen_name - computed: false, optional: false, required: true
  private _screenName?: string; 
  public get screenName() {
    return this.getStringAttribute('screen_name');
  }
  public set screenName(value: string) {
    this._screenName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get screenNameInput() {
    return this._screenName;
  }

  // insertion_points - computed: false, optional: true, required: false
  private _insertionPoints = new PromptScreenPartialInsertionPointsOutputReference(this, "insertion_points");
  public get insertionPoints() {
    return this._insertionPoints;
  }
  public putInsertionPoints(value: PromptScreenPartialInsertionPoints) {
    this._insertionPoints.internalValue = value;
  }
  public resetInsertionPoints() {
    this._insertionPoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertionPointsInput() {
    return this._insertionPoints.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      prompt_type: cdktf.stringToTerraform(this._promptType),
      screen_name: cdktf.stringToTerraform(this._screenName),
      insertion_points: promptScreenPartialInsertionPointsToTerraform(this._insertionPoints.internalValue),
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
      prompt_type: {
        value: cdktf.stringToHclTerraform(this._promptType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      screen_name: {
        value: cdktf.stringToHclTerraform(this._screenName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insertion_points: {
        value: promptScreenPartialInsertionPointsToHclTerraform(this._insertionPoints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PromptScreenPartialInsertionPointsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
