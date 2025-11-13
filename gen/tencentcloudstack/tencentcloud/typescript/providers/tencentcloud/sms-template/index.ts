// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/sms_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SmsTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/sms_template#id SmsTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether it is Global SMS: 0: Mainland China SMS; 1: Global SMS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/sms_template#international SmsTemplate#international}
  */
  readonly international: number;
  /**
  * Template remarks, such as reason for application and use case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/sms_template#remark SmsTemplate#remark}
  */
  readonly remark: string;
  /**
  * SMS type. 0: regular SMS, 1: marketing SMS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/sms_template#sms_type SmsTemplate#sms_type}
  */
  readonly smsType: number;
  /**
  * Message Template Content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/sms_template#template_content SmsTemplate#template_content}
  */
  readonly templateContent: string;
  /**
  * Message Template name, which must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/sms_template#template_name SmsTemplate#template_name}
  */
  readonly templateName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/sms_template tencentcloud_sms_template}
*/
export class SmsTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_sms_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SmsTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SmsTemplate to import
  * @param importFromId The id of the existing SmsTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/sms_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SmsTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_sms_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/sms_template tencentcloud_sms_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SmsTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: SmsTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_sms_template',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.36',
        providerVersionConstraint: '1.82.36'
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
    this._international = config.international;
    this._remark = config.remark;
    this._smsType = config.smsType;
    this._templateContent = config.templateContent;
    this._templateName = config.templateName;
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

  // international - computed: false, optional: false, required: true
  private _international?: number; 
  public get international() {
    return this.getNumberAttribute('international');
  }
  public set international(value: number) {
    this._international = value;
  }
  // Temporarily expose input value. Use with caution.
  public get internationalInput() {
    return this._international;
  }

  // remark - computed: false, optional: false, required: true
  private _remark?: string; 
  public get remark() {
    return this.getStringAttribute('remark');
  }
  public set remark(value: string) {
    this._remark = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkInput() {
    return this._remark;
  }

  // sms_type - computed: false, optional: false, required: true
  private _smsType?: number; 
  public get smsType() {
    return this.getNumberAttribute('sms_type');
  }
  public set smsType(value: number) {
    this._smsType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get smsTypeInput() {
    return this._smsType;
  }

  // template_content - computed: false, optional: false, required: true
  private _templateContent?: string; 
  public get templateContent() {
    return this.getStringAttribute('template_content');
  }
  public set templateContent(value: string) {
    this._templateContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateContentInput() {
    return this._templateContent;
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      international: cdktf.numberToTerraform(this._international),
      remark: cdktf.stringToTerraform(this._remark),
      sms_type: cdktf.numberToTerraform(this._smsType),
      template_content: cdktf.stringToTerraform(this._templateContent),
      template_name: cdktf.stringToTerraform(this._templateName),
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
      international: {
        value: cdktf.numberToHclTerraform(this._international),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remark: {
        value: cdktf.stringToHclTerraform(this._remark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sms_type: {
        value: cdktf.numberToHclTerraform(this._smsType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      template_content: {
        value: cdktf.stringToHclTerraform(this._templateContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
