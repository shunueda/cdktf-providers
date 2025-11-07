// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/direct_mail_mail_address
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DirectMailMailAddressConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/direct_mail_mail_address#account_name DirectMailMailAddress#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/direct_mail_mail_address#id DirectMailMailAddress#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/direct_mail_mail_address#password DirectMailMailAddress#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/direct_mail_mail_address#reply_address DirectMailMailAddress#reply_address}
  */
  readonly replyAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/direct_mail_mail_address#sendtype DirectMailMailAddress#sendtype}
  */
  readonly sendtype: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/direct_mail_mail_address alicloud_direct_mail_mail_address}
*/
export class DirectMailMailAddress extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_direct_mail_mail_address";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DirectMailMailAddress resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DirectMailMailAddress to import
  * @param importFromId The id of the existing DirectMailMailAddress that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/direct_mail_mail_address#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DirectMailMailAddress to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_direct_mail_mail_address", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/direct_mail_mail_address alicloud_direct_mail_mail_address} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DirectMailMailAddressConfig
  */
  public constructor(scope: Construct, id: string, config: DirectMailMailAddressConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_direct_mail_mail_address',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountName = config.accountName;
    this._id = config.id;
    this._password = config.password;
    this._replyAddress = config.replyAddress;
    this._sendtype = config.sendtype;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: false, optional: false, required: true
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // reply_address - computed: false, optional: true, required: false
  private _replyAddress?: string; 
  public get replyAddress() {
    return this.getStringAttribute('reply_address');
  }
  public set replyAddress(value: string) {
    this._replyAddress = value;
  }
  public resetReplyAddress() {
    this._replyAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replyAddressInput() {
    return this._replyAddress;
  }

  // sendtype - computed: false, optional: false, required: true
  private _sendtype?: string; 
  public get sendtype() {
    return this.getStringAttribute('sendtype');
  }
  public set sendtype(value: string) {
    this._sendtype = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sendtypeInput() {
    return this._sendtype;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_name: cdktf.stringToTerraform(this._accountName),
      id: cdktf.stringToTerraform(this._id),
      password: cdktf.stringToTerraform(this._password),
      reply_address: cdktf.stringToTerraform(this._replyAddress),
      sendtype: cdktf.stringToTerraform(this._sendtype),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_name: {
        value: cdktf.stringToHclTerraform(this._accountName),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reply_address: {
        value: cdktf.stringToHclTerraform(this._replyAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sendtype: {
        value: cdktf.stringToHclTerraform(this._sendtype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
