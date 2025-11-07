// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_email_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ControllerEmailConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Email to receive important account and certification information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_email_config#admin_alert_email ControllerEmailConfig#admin_alert_email}
  */
  readonly adminAlertEmail: string;
  /**
  * Email to receive field notices and critical notices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_email_config#critical_alert_email ControllerEmailConfig#critical_alert_email}
  */
  readonly criticalAlertEmail: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_email_config#id ControllerEmailConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Email to receive security and CVE (Common Vulnerabilities and Exposures) notification emails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_email_config#security_event_email ControllerEmailConfig#security_event_email}
  */
  readonly securityEventEmail: string;
  /**
  * Email to receive system/tunnel status notification emails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_email_config#status_change_email ControllerEmailConfig#status_change_email}
  */
  readonly statusChangeEmail: string;
  /**
  * Status change notification interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_email_config#status_change_notification_interval ControllerEmailConfig#status_change_notification_interval}
  */
  readonly statusChangeNotificationInterval?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_email_config aviatrix_controller_email_config}
*/
export class ControllerEmailConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_controller_email_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ControllerEmailConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ControllerEmailConfig to import
  * @param importFromId The id of the existing ControllerEmailConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_email_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ControllerEmailConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_controller_email_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_email_config aviatrix_controller_email_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ControllerEmailConfigConfig
  */
  public constructor(scope: Construct, id: string, config: ControllerEmailConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_controller_email_config',
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
    this._adminAlertEmail = config.adminAlertEmail;
    this._criticalAlertEmail = config.criticalAlertEmail;
    this._id = config.id;
    this._securityEventEmail = config.securityEventEmail;
    this._statusChangeEmail = config.statusChangeEmail;
    this._statusChangeNotificationInterval = config.statusChangeNotificationInterval;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_alert_email - computed: false, optional: false, required: true
  private _adminAlertEmail?: string; 
  public get adminAlertEmail() {
    return this.getStringAttribute('admin_alert_email');
  }
  public set adminAlertEmail(value: string) {
    this._adminAlertEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminAlertEmailInput() {
    return this._adminAlertEmail;
  }

  // admin_alert_email_verified - computed: true, optional: false, required: false
  public get adminAlertEmailVerified() {
    return this.getBooleanAttribute('admin_alert_email_verified');
  }

  // critical_alert_email - computed: false, optional: false, required: true
  private _criticalAlertEmail?: string; 
  public get criticalAlertEmail() {
    return this.getStringAttribute('critical_alert_email');
  }
  public set criticalAlertEmail(value: string) {
    this._criticalAlertEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalAlertEmailInput() {
    return this._criticalAlertEmail;
  }

  // critical_alert_email_verified - computed: true, optional: false, required: false
  public get criticalAlertEmailVerified() {
    return this.getBooleanAttribute('critical_alert_email_verified');
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

  // security_event_email - computed: false, optional: false, required: true
  private _securityEventEmail?: string; 
  public get securityEventEmail() {
    return this.getStringAttribute('security_event_email');
  }
  public set securityEventEmail(value: string) {
    this._securityEventEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityEventEmailInput() {
    return this._securityEventEmail;
  }

  // security_event_email_verified - computed: true, optional: false, required: false
  public get securityEventEmailVerified() {
    return this.getBooleanAttribute('security_event_email_verified');
  }

  // status_change_email - computed: false, optional: false, required: true
  private _statusChangeEmail?: string; 
  public get statusChangeEmail() {
    return this.getStringAttribute('status_change_email');
  }
  public set statusChangeEmail(value: string) {
    this._statusChangeEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusChangeEmailInput() {
    return this._statusChangeEmail;
  }

  // status_change_email_verified - computed: true, optional: false, required: false
  public get statusChangeEmailVerified() {
    return this.getBooleanAttribute('status_change_email_verified');
  }

  // status_change_notification_interval - computed: false, optional: true, required: false
  private _statusChangeNotificationInterval?: number; 
  public get statusChangeNotificationInterval() {
    return this.getNumberAttribute('status_change_notification_interval');
  }
  public set statusChangeNotificationInterval(value: number) {
    this._statusChangeNotificationInterval = value;
  }
  public resetStatusChangeNotificationInterval() {
    this._statusChangeNotificationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusChangeNotificationIntervalInput() {
    return this._statusChangeNotificationInterval;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_alert_email: cdktf.stringToTerraform(this._adminAlertEmail),
      critical_alert_email: cdktf.stringToTerraform(this._criticalAlertEmail),
      id: cdktf.stringToTerraform(this._id),
      security_event_email: cdktf.stringToTerraform(this._securityEventEmail),
      status_change_email: cdktf.stringToTerraform(this._statusChangeEmail),
      status_change_notification_interval: cdktf.numberToTerraform(this._statusChangeNotificationInterval),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_alert_email: {
        value: cdktf.stringToHclTerraform(this._adminAlertEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      critical_alert_email: {
        value: cdktf.stringToHclTerraform(this._criticalAlertEmail),
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
      security_event_email: {
        value: cdktf.stringToHclTerraform(this._securityEventEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status_change_email: {
        value: cdktf.stringToHclTerraform(this._statusChangeEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status_change_notification_interval: {
        value: cdktf.numberToHclTerraform(this._statusChangeNotificationInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
