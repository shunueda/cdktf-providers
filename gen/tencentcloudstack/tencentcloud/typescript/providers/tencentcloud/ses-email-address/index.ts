// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/ses_email_address
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SesEmailAddressConfig extends cdktf.TerraformMetaArguments {
  /**
  * Your sender address(You can create up to 10 sender addresses for each domain).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/ses_email_address#email_address SesEmailAddress#email_address}
  */
  readonly emailAddress: string;
  /**
  * Sender name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/ses_email_address#email_sender_name SesEmailAddress#email_sender_name}
  */
  readonly emailSenderName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/ses_email_address#id SesEmailAddress#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Password for SMTP, Length limit 64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/ses_email_address#smtp_password SesEmailAddress#smtp_password}
  */
  readonly smtpPassword?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/ses_email_address tencentcloud_ses_email_address}
*/
export class SesEmailAddress extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ses_email_address";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SesEmailAddress resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SesEmailAddress to import
  * @param importFromId The id of the existing SesEmailAddress that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/ses_email_address#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SesEmailAddress to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ses_email_address", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/ses_email_address tencentcloud_ses_email_address} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SesEmailAddressConfig
  */
  public constructor(scope: Construct, id: string, config: SesEmailAddressConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ses_email_address',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.46',
        providerVersionConstraint: '1.82.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._emailAddress = config.emailAddress;
    this._emailSenderName = config.emailSenderName;
    this._id = config.id;
    this._smtpPassword = config.smtpPassword;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // email_address - computed: false, optional: false, required: true
  private _emailAddress?: string; 
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
  }

  // email_sender_name - computed: false, optional: true, required: false
  private _emailSenderName?: string; 
  public get emailSenderName() {
    return this.getStringAttribute('email_sender_name');
  }
  public set emailSenderName(value: string) {
    this._emailSenderName = value;
  }
  public resetEmailSenderName() {
    this._emailSenderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailSenderNameInput() {
    return this._emailSenderName;
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

  // smtp_password - computed: false, optional: true, required: false
  private _smtpPassword?: string; 
  public get smtpPassword() {
    return this.getStringAttribute('smtp_password');
  }
  public set smtpPassword(value: string) {
    this._smtpPassword = value;
  }
  public resetSmtpPassword() {
    this._smtpPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpPasswordInput() {
    return this._smtpPassword;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email_address: cdktf.stringToTerraform(this._emailAddress),
      email_sender_name: cdktf.stringToTerraform(this._emailSenderName),
      id: cdktf.stringToTerraform(this._id),
      smtp_password: cdktf.stringToTerraform(this._smtpPassword),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      email_address: {
        value: cdktf.stringToHclTerraform(this._emailAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_sender_name: {
        value: cdktf.stringToHclTerraform(this._emailSenderName),
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
      smtp_password: {
        value: cdktf.stringToHclTerraform(this._smtpPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
