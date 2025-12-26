// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/mps_ai_analysis_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MpsAiAnalysisTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Ai analysis template description information, length limit: 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/mps_ai_analysis_template#comment MpsAiAnalysisTemplate#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/mps_ai_analysis_template#id MpsAiAnalysisTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ai analysis template name, length limit: 64 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/mps_ai_analysis_template#name MpsAiAnalysisTemplate#name}
  */
  readonly name?: string;
  /**
  * classification_configure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/mps_ai_analysis_template#classification_configure MpsAiAnalysisTemplate#classification_configure}
  */
  readonly classificationConfigure?: MpsAiAnalysisTemplateClassificationConfigure;
  /**
  * cover_configure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/mps_ai_analysis_template#cover_configure MpsAiAnalysisTemplate#cover_configure}
  */
  readonly coverConfigure?: MpsAiAnalysisTemplateCoverConfigure;
  /**
  * frame_tag_configure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/mps_ai_analysis_template#frame_tag_configure MpsAiAnalysisTemplate#frame_tag_configure}
  */
  readonly frameTagConfigure?: MpsAiAnalysisTemplateFrameTagConfigure;
  /**
  * tag_configure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/mps_ai_analysis_template#tag_configure MpsAiAnalysisTemplate#tag_configure}
  */
  readonly tagConfigure?: MpsAiAnalysisTemplateTagConfigure;
}
export interface MpsAiAnalysisTemplateClassificationConfigure {
  /**
  * Ai classification task switch, optional value:ON/OFF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/mps_ai_analysis_template#switch MpsAiAnalysisTemplate#switch}
  */
  readonly switch: string;
}

export function mpsAiAnalysisTemplateClassificationConfigureToTerraform(struct?: MpsAiAnalysisTemplateClassificationConfigureOutputReference | MpsAiAnalysisTemplateClassificationConfigure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function mpsAiAnalysisTemplateClassificationConfigureToHclTerraform(struct?: MpsAiAnalysisTemplateClassificationConfigureOutputReference | MpsAiAnalysisTemplateClassificationConfigure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsAiAnalysisTemplateClassificationConfigureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsAiAnalysisTemplateClassificationConfigure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsAiAnalysisTemplateClassificationConfigure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
    }
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface MpsAiAnalysisTemplateCoverConfigure {
  /**
  * Ai cover task switch, optional value:ON/OFF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/mps_ai_analysis_template#switch MpsAiAnalysisTemplate#switch}
  */
  readonly switch: string;
}

export function mpsAiAnalysisTemplateCoverConfigureToTerraform(struct?: MpsAiAnalysisTemplateCoverConfigureOutputReference | MpsAiAnalysisTemplateCoverConfigure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function mpsAiAnalysisTemplateCoverConfigureToHclTerraform(struct?: MpsAiAnalysisTemplateCoverConfigureOutputReference | MpsAiAnalysisTemplateCoverConfigure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsAiAnalysisTemplateCoverConfigureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsAiAnalysisTemplateCoverConfigure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsAiAnalysisTemplateCoverConfigure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
    }
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface MpsAiAnalysisTemplateFrameTagConfigure {
  /**
  * Ai frame tag task switch, optional value:ON/OFF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/mps_ai_analysis_template#switch MpsAiAnalysisTemplate#switch}
  */
  readonly switch: string;
}

export function mpsAiAnalysisTemplateFrameTagConfigureToTerraform(struct?: MpsAiAnalysisTemplateFrameTagConfigureOutputReference | MpsAiAnalysisTemplateFrameTagConfigure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function mpsAiAnalysisTemplateFrameTagConfigureToHclTerraform(struct?: MpsAiAnalysisTemplateFrameTagConfigureOutputReference | MpsAiAnalysisTemplateFrameTagConfigure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsAiAnalysisTemplateFrameTagConfigureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsAiAnalysisTemplateFrameTagConfigure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsAiAnalysisTemplateFrameTagConfigure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
    }
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface MpsAiAnalysisTemplateTagConfigure {
  /**
  * Ai tag task switch, optional value:ON/OFF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/mps_ai_analysis_template#switch MpsAiAnalysisTemplate#switch}
  */
  readonly switch: string;
}

export function mpsAiAnalysisTemplateTagConfigureToTerraform(struct?: MpsAiAnalysisTemplateTagConfigureOutputReference | MpsAiAnalysisTemplateTagConfigure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function mpsAiAnalysisTemplateTagConfigureToHclTerraform(struct?: MpsAiAnalysisTemplateTagConfigureOutputReference | MpsAiAnalysisTemplateTagConfigure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsAiAnalysisTemplateTagConfigureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsAiAnalysisTemplateTagConfigure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsAiAnalysisTemplateTagConfigure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
    }
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/mps_ai_analysis_template tencentcloud_mps_ai_analysis_template}
*/
export class MpsAiAnalysisTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mps_ai_analysis_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MpsAiAnalysisTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MpsAiAnalysisTemplate to import
  * @param importFromId The id of the existing MpsAiAnalysisTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/mps_ai_analysis_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MpsAiAnalysisTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mps_ai_analysis_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/mps_ai_analysis_template tencentcloud_mps_ai_analysis_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MpsAiAnalysisTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MpsAiAnalysisTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mps_ai_analysis_template',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._id = config.id;
    this._name = config.name;
    this._classificationConfigure.internalValue = config.classificationConfigure;
    this._coverConfigure.internalValue = config.coverConfigure;
    this._frameTagConfigure.internalValue = config.frameTagConfigure;
    this._tagConfigure.internalValue = config.tagConfigure;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
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

  // classification_configure - computed: false, optional: true, required: false
  private _classificationConfigure = new MpsAiAnalysisTemplateClassificationConfigureOutputReference(this, "classification_configure");
  public get classificationConfigure() {
    return this._classificationConfigure;
  }
  public putClassificationConfigure(value: MpsAiAnalysisTemplateClassificationConfigure) {
    this._classificationConfigure.internalValue = value;
  }
  public resetClassificationConfigure() {
    this._classificationConfigure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationConfigureInput() {
    return this._classificationConfigure.internalValue;
  }

  // cover_configure - computed: false, optional: true, required: false
  private _coverConfigure = new MpsAiAnalysisTemplateCoverConfigureOutputReference(this, "cover_configure");
  public get coverConfigure() {
    return this._coverConfigure;
  }
  public putCoverConfigure(value: MpsAiAnalysisTemplateCoverConfigure) {
    this._coverConfigure.internalValue = value;
  }
  public resetCoverConfigure() {
    this._coverConfigure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coverConfigureInput() {
    return this._coverConfigure.internalValue;
  }

  // frame_tag_configure - computed: false, optional: true, required: false
  private _frameTagConfigure = new MpsAiAnalysisTemplateFrameTagConfigureOutputReference(this, "frame_tag_configure");
  public get frameTagConfigure() {
    return this._frameTagConfigure;
  }
  public putFrameTagConfigure(value: MpsAiAnalysisTemplateFrameTagConfigure) {
    this._frameTagConfigure.internalValue = value;
  }
  public resetFrameTagConfigure() {
    this._frameTagConfigure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameTagConfigureInput() {
    return this._frameTagConfigure.internalValue;
  }

  // tag_configure - computed: false, optional: true, required: false
  private _tagConfigure = new MpsAiAnalysisTemplateTagConfigureOutputReference(this, "tag_configure");
  public get tagConfigure() {
    return this._tagConfigure;
  }
  public putTagConfigure(value: MpsAiAnalysisTemplateTagConfigure) {
    this._tagConfigure.internalValue = value;
  }
  public resetTagConfigure() {
    this._tagConfigure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagConfigureInput() {
    return this._tagConfigure.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      classification_configure: mpsAiAnalysisTemplateClassificationConfigureToTerraform(this._classificationConfigure.internalValue),
      cover_configure: mpsAiAnalysisTemplateCoverConfigureToTerraform(this._coverConfigure.internalValue),
      frame_tag_configure: mpsAiAnalysisTemplateFrameTagConfigureToTerraform(this._frameTagConfigure.internalValue),
      tag_configure: mpsAiAnalysisTemplateTagConfigureToTerraform(this._tagConfigure.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
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
      classification_configure: {
        value: mpsAiAnalysisTemplateClassificationConfigureToHclTerraform(this._classificationConfigure.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsAiAnalysisTemplateClassificationConfigureList",
      },
      cover_configure: {
        value: mpsAiAnalysisTemplateCoverConfigureToHclTerraform(this._coverConfigure.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsAiAnalysisTemplateCoverConfigureList",
      },
      frame_tag_configure: {
        value: mpsAiAnalysisTemplateFrameTagConfigureToHclTerraform(this._frameTagConfigure.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsAiAnalysisTemplateFrameTagConfigureList",
      },
      tag_configure: {
        value: mpsAiAnalysisTemplateTagConfigureToHclTerraform(this._tagConfigure.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsAiAnalysisTemplateTagConfigureList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
