// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sms_sign
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SmsSignConfig extends cdktf.TerraformMetaArguments {
  /**
  * Power of attorney, which should be submitted if SignPurpose is for use by others. You should Base64-encode the image first, remove the prefix data:image/jpeg;base64, from the resulted string, and then use it as the value of this parameter. Note: this field will take effect only when SignPurpose is 1 (for user by others).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sms_sign#commission_image SmsSign#commission_image}
  */
  readonly commissionImage?: string;
  /**
  * DocumentType is used for enterprise authentication, or website, app authentication, etc. DocumentType: 0, 1, 2, 3, 4, 5, 6, 7, 8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sms_sign#document_type SmsSign#document_type}
  */
  readonly documentType: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sms_sign#id SmsSign#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether it is Global SMS: 0: Mainland China SMS; 1: Global SMS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sms_sign#international SmsSign#international}
  */
  readonly international: number;
  /**
  * You should Base64-encode the image of the identity certificate corresponding to the signature first, remove the prefix data:image/jpeg;base64, from the resulted string, and then use it as the value of this parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sms_sign#proof_image SmsSign#proof_image}
  */
  readonly proofImage: string;
  /**
  * Signature application remarks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sms_sign#remark SmsSign#remark}
  */
  readonly remark?: string;
  /**
  * Sms sign name, unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sms_sign#sign_name SmsSign#sign_name}
  */
  readonly signName: string;
  /**
  * Signature purpose: 0: for personal use; 1: for others.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sms_sign#sign_purpose SmsSign#sign_purpose}
  */
  readonly signPurpose: number;
  /**
  * Sms sign type: 0, 1, 2, 3, 4, 5, 6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sms_sign#sign_type SmsSign#sign_type}
  */
  readonly signType: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sms_sign tencentcloud_sms_sign}
*/
export class SmsSign extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_sms_sign";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SmsSign resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SmsSign to import
  * @param importFromId The id of the existing SmsSign that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sms_sign#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SmsSign to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_sms_sign", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sms_sign tencentcloud_sms_sign} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SmsSignConfig
  */
  public constructor(scope: Construct, id: string, config: SmsSignConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_sms_sign',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._commissionImage = config.commissionImage;
    this._documentType = config.documentType;
    this._id = config.id;
    this._international = config.international;
    this._proofImage = config.proofImage;
    this._remark = config.remark;
    this._signName = config.signName;
    this._signPurpose = config.signPurpose;
    this._signType = config.signType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // commission_image - computed: false, optional: true, required: false
  private _commissionImage?: string; 
  public get commissionImage() {
    return this.getStringAttribute('commission_image');
  }
  public set commissionImage(value: string) {
    this._commissionImage = value;
  }
  public resetCommissionImage() {
    this._commissionImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commissionImageInput() {
    return this._commissionImage;
  }

  // document_type - computed: false, optional: false, required: true
  private _documentType?: number; 
  public get documentType() {
    return this.getNumberAttribute('document_type');
  }
  public set documentType(value: number) {
    this._documentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get documentTypeInput() {
    return this._documentType;
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

  // proof_image - computed: false, optional: false, required: true
  private _proofImage?: string; 
  public get proofImage() {
    return this.getStringAttribute('proof_image');
  }
  public set proofImage(value: string) {
    this._proofImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proofImageInput() {
    return this._proofImage;
  }

  // remark - computed: false, optional: true, required: false
  private _remark?: string; 
  public get remark() {
    return this.getStringAttribute('remark');
  }
  public set remark(value: string) {
    this._remark = value;
  }
  public resetRemark() {
    this._remark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkInput() {
    return this._remark;
  }

  // sign_name - computed: false, optional: false, required: true
  private _signName?: string; 
  public get signName() {
    return this.getStringAttribute('sign_name');
  }
  public set signName(value: string) {
    this._signName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signNameInput() {
    return this._signName;
  }

  // sign_purpose - computed: false, optional: false, required: true
  private _signPurpose?: number; 
  public get signPurpose() {
    return this.getNumberAttribute('sign_purpose');
  }
  public set signPurpose(value: number) {
    this._signPurpose = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signPurposeInput() {
    return this._signPurpose;
  }

  // sign_type - computed: false, optional: false, required: true
  private _signType?: number; 
  public get signType() {
    return this.getNumberAttribute('sign_type');
  }
  public set signType(value: number) {
    this._signType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signTypeInput() {
    return this._signType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      commission_image: cdktf.stringToTerraform(this._commissionImage),
      document_type: cdktf.numberToTerraform(this._documentType),
      id: cdktf.stringToTerraform(this._id),
      international: cdktf.numberToTerraform(this._international),
      proof_image: cdktf.stringToTerraform(this._proofImage),
      remark: cdktf.stringToTerraform(this._remark),
      sign_name: cdktf.stringToTerraform(this._signName),
      sign_purpose: cdktf.numberToTerraform(this._signPurpose),
      sign_type: cdktf.numberToTerraform(this._signType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      commission_image: {
        value: cdktf.stringToHclTerraform(this._commissionImage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      document_type: {
        value: cdktf.numberToHclTerraform(this._documentType),
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
      international: {
        value: cdktf.numberToHclTerraform(this._international),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proof_image: {
        value: cdktf.stringToHclTerraform(this._proofImage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remark: {
        value: cdktf.stringToHclTerraform(this._remark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sign_name: {
        value: cdktf.stringToHclTerraform(this._signName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sign_purpose: {
        value: cdktf.numberToHclTerraform(this._signPurpose),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sign_type: {
        value: cdktf.numberToHclTerraform(this._signType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
