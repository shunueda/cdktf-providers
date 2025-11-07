// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_email_exception_notification_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ControllerEmailExceptionNotificationConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable email exception notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_email_exception_notification_config#enable_email_exception_notification ControllerEmailExceptionNotificationConfig#enable_email_exception_notification}
  */
  readonly enableEmailExceptionNotification?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_email_exception_notification_config#id ControllerEmailExceptionNotificationConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_email_exception_notification_config aviatrix_controller_email_exception_notification_config}
*/
export class ControllerEmailExceptionNotificationConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_controller_email_exception_notification_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ControllerEmailExceptionNotificationConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ControllerEmailExceptionNotificationConfig to import
  * @param importFromId The id of the existing ControllerEmailExceptionNotificationConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_email_exception_notification_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ControllerEmailExceptionNotificationConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_controller_email_exception_notification_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_email_exception_notification_config aviatrix_controller_email_exception_notification_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ControllerEmailExceptionNotificationConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ControllerEmailExceptionNotificationConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_controller_email_exception_notification_config',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableEmailExceptionNotification = config.enableEmailExceptionNotification;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_email_exception_notification - computed: false, optional: true, required: false
  private _enableEmailExceptionNotification?: boolean | cdktf.IResolvable; 
  public get enableEmailExceptionNotification() {
    return this.getBooleanAttribute('enable_email_exception_notification');
  }
  public set enableEmailExceptionNotification(value: boolean | cdktf.IResolvable) {
    this._enableEmailExceptionNotification = value;
  }
  public resetEnableEmailExceptionNotification() {
    this._enableEmailExceptionNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEmailExceptionNotificationInput() {
    return this._enableEmailExceptionNotification;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_email_exception_notification: cdktf.booleanToTerraform(this._enableEmailExceptionNotification),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_email_exception_notification: {
        value: cdktf.booleanToHclTerraform(this._enableEmailExceptionNotification),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
