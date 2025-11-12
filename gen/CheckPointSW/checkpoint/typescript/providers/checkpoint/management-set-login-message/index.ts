// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_login_message
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementSetLoginMessageConfig extends cdktf.TerraformMetaArguments {
  /**
  * commonLoginLogic message header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_login_message#header ManagementSetLoginMessage#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_login_message#id ManagementSetLoginMessage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * commonLoginLogic message body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_login_message#message ManagementSetLoginMessage#message}
  */
  readonly message?: string;
  /**
  * Whether to show login message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_login_message#show_message ManagementSetLoginMessage#show_message}
  */
  readonly showMessage?: boolean | cdktf.IResolvable;
  /**
  * Add warning sign.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_login_message#warning ManagementSetLoginMessage#warning}
  */
  readonly warning?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_login_message checkpoint_management_set_login_message}
*/
export class ManagementSetLoginMessage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_set_login_message";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementSetLoginMessage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementSetLoginMessage to import
  * @param importFromId The id of the existing ManagementSetLoginMessage that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_login_message#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementSetLoginMessage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_set_login_message", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_login_message checkpoint_management_set_login_message} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementSetLoginMessageConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ManagementSetLoginMessageConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_set_login_message',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._header = config.header;
    this._id = config.id;
    this._message = config.message;
    this._showMessage = config.showMessage;
    this._warning = config.warning;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // header - computed: false, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
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

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // show_message - computed: false, optional: true, required: false
  private _showMessage?: boolean | cdktf.IResolvable; 
  public get showMessage() {
    return this.getBooleanAttribute('show_message');
  }
  public set showMessage(value: boolean | cdktf.IResolvable) {
    this._showMessage = value;
  }
  public resetShowMessage() {
    this._showMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showMessageInput() {
    return this._showMessage;
  }

  // warning - computed: false, optional: true, required: false
  private _warning?: boolean | cdktf.IResolvable; 
  public get warning() {
    return this.getBooleanAttribute('warning');
  }
  public set warning(value: boolean | cdktf.IResolvable) {
    this._warning = value;
  }
  public resetWarning() {
    this._warning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningInput() {
    return this._warning;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      header: cdktf.stringToTerraform(this._header),
      id: cdktf.stringToTerraform(this._id),
      message: cdktf.stringToTerraform(this._message),
      show_message: cdktf.booleanToTerraform(this._showMessage),
      warning: cdktf.booleanToTerraform(this._warning),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      header: {
        value: cdktf.stringToHclTerraform(this._header),
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
      message: {
        value: cdktf.stringToHclTerraform(this._message),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      show_message: {
        value: cdktf.booleanToHclTerraform(this._showMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      warning: {
        value: cdktf.booleanToHclTerraform(this._warning),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
