// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_media_pic_process_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CiMediaPicProcessTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_media_pic_process_template#bucket CiMediaPicProcessTemplate#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_media_pic_process_template#id CiMediaPicProcessTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The template name only supports `Chinese`, `English`, `numbers`, `_`, `-` and `*`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_media_pic_process_template#name CiMediaPicProcessTemplate#name}
  */
  readonly name: string;
  /**
  * pic_process block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_media_pic_process_template#pic_process CiMediaPicProcessTemplate#pic_process}
  */
  readonly picProcess?: CiMediaPicProcessTemplatePicProcess;
}
export interface CiMediaPicProcessTemplatePicProcess {
  /**
  * Whether to return the original image information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_media_pic_process_template#is_pic_info CiMediaPicProcessTemplate#is_pic_info}
  */
  readonly isPicInfo?: string;
  /**
  * Image processing rules, 1: basic image processing, please refer to the basic image processing document, 2: image compression, please refer to the image compression document, 3: blind watermark, please refer to the blind watermark document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_media_pic_process_template#process_rule CiMediaPicProcessTemplate#process_rule}
  */
  readonly processRule: string;
}

export function ciMediaPicProcessTemplatePicProcessToTerraform(struct?: CiMediaPicProcessTemplatePicProcessOutputReference | CiMediaPicProcessTemplatePicProcess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_pic_info: cdktf.stringToTerraform(struct!.isPicInfo),
    process_rule: cdktf.stringToTerraform(struct!.processRule),
  }
}


export function ciMediaPicProcessTemplatePicProcessToHclTerraform(struct?: CiMediaPicProcessTemplatePicProcessOutputReference | CiMediaPicProcessTemplatePicProcess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_pic_info: {
      value: cdktf.stringToHclTerraform(struct!.isPicInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    process_rule: {
      value: cdktf.stringToHclTerraform(struct!.processRule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiMediaPicProcessTemplatePicProcessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CiMediaPicProcessTemplatePicProcess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isPicInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPicInfo = this._isPicInfo;
    }
    if (this._processRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.processRule = this._processRule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiMediaPicProcessTemplatePicProcess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isPicInfo = undefined;
      this._processRule = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isPicInfo = value.isPicInfo;
      this._processRule = value.processRule;
    }
  }

  // is_pic_info - computed: false, optional: true, required: false
  private _isPicInfo?: string; 
  public get isPicInfo() {
    return this.getStringAttribute('is_pic_info');
  }
  public set isPicInfo(value: string) {
    this._isPicInfo = value;
  }
  public resetIsPicInfo() {
    this._isPicInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPicInfoInput() {
    return this._isPicInfo;
  }

  // process_rule - computed: false, optional: false, required: true
  private _processRule?: string; 
  public get processRule() {
    return this.getStringAttribute('process_rule');
  }
  public set processRule(value: string) {
    this._processRule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processRuleInput() {
    return this._processRule;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_media_pic_process_template tencentcloud_ci_media_pic_process_template}
*/
export class CiMediaPicProcessTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ci_media_pic_process_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CiMediaPicProcessTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CiMediaPicProcessTemplate to import
  * @param importFromId The id of the existing CiMediaPicProcessTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_media_pic_process_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CiMediaPicProcessTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ci_media_pic_process_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_media_pic_process_template tencentcloud_ci_media_pic_process_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CiMediaPicProcessTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CiMediaPicProcessTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ci_media_pic_process_template',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bucket = config.bucket;
    this._id = config.id;
    this._name = config.name;
    this._picProcess.internalValue = config.picProcess;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
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

  // pic_process - computed: false, optional: true, required: false
  private _picProcess = new CiMediaPicProcessTemplatePicProcessOutputReference(this, "pic_process");
  public get picProcess() {
    return this._picProcess;
  }
  public putPicProcess(value: CiMediaPicProcessTemplatePicProcess) {
    this._picProcess.internalValue = value;
  }
  public resetPicProcess() {
    this._picProcess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get picProcessInput() {
    return this._picProcess.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      pic_process: ciMediaPicProcessTemplatePicProcessToTerraform(this._picProcess.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket: {
        value: cdktf.stringToHclTerraform(this._bucket),
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
      pic_process: {
        value: ciMediaPicProcessTemplatePicProcessToHclTerraform(this._picProcess.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiMediaPicProcessTemplatePicProcessList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
