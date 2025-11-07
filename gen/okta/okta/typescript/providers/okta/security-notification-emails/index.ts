// https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/security_notification_emails
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityNotificationEmailsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/security_notification_emails#id SecurityNotificationEmails#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Notifies end users about suspicious or unrecognized activity from their account. Default is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/security_notification_emails#report_suspicious_activity_enabled SecurityNotificationEmails#report_suspicious_activity_enabled}
  */
  readonly reportSuspiciousActivityEnabled?: boolean | cdktf.IResolvable;
  /**
  * Notifies end users of any activity on their account related to MFA factor enrollment. Default is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/security_notification_emails#send_email_for_factor_enrollment_enabled SecurityNotificationEmails#send_email_for_factor_enrollment_enabled}
  */
  readonly sendEmailForFactorEnrollmentEnabled?: boolean | cdktf.IResolvable;
  /**
  * Notifies end users that one or more factors have been reset for their account. Default is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/security_notification_emails#send_email_for_factor_reset_enabled SecurityNotificationEmails#send_email_for_factor_reset_enabled}
  */
  readonly sendEmailForFactorResetEnabled?: boolean | cdktf.IResolvable;
  /**
  * Notifies end users about new sign-on activity. Default is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/security_notification_emails#send_email_for_new_device_enabled SecurityNotificationEmails#send_email_for_new_device_enabled}
  */
  readonly sendEmailForNewDeviceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Notifies end users that the password for their account has changed. Default is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/security_notification_emails#send_email_for_password_changed_enabled SecurityNotificationEmails#send_email_for_password_changed_enabled}
  */
  readonly sendEmailForPasswordChangedEnabled?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/security_notification_emails okta_security_notification_emails}
*/
export class SecurityNotificationEmails extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_security_notification_emails";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityNotificationEmails resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityNotificationEmails to import
  * @param importFromId The id of the existing SecurityNotificationEmails that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/security_notification_emails#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityNotificationEmails to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_security_notification_emails", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/security_notification_emails okta_security_notification_emails} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityNotificationEmailsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SecurityNotificationEmailsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'okta_security_notification_emails',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.4.0'
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
    this._reportSuspiciousActivityEnabled = config.reportSuspiciousActivityEnabled;
    this._sendEmailForFactorEnrollmentEnabled = config.sendEmailForFactorEnrollmentEnabled;
    this._sendEmailForFactorResetEnabled = config.sendEmailForFactorResetEnabled;
    this._sendEmailForNewDeviceEnabled = config.sendEmailForNewDeviceEnabled;
    this._sendEmailForPasswordChangedEnabled = config.sendEmailForPasswordChangedEnabled;
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

  // report_suspicious_activity_enabled - computed: false, optional: true, required: false
  private _reportSuspiciousActivityEnabled?: boolean | cdktf.IResolvable; 
  public get reportSuspiciousActivityEnabled() {
    return this.getBooleanAttribute('report_suspicious_activity_enabled');
  }
  public set reportSuspiciousActivityEnabled(value: boolean | cdktf.IResolvable) {
    this._reportSuspiciousActivityEnabled = value;
  }
  public resetReportSuspiciousActivityEnabled() {
    this._reportSuspiciousActivityEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportSuspiciousActivityEnabledInput() {
    return this._reportSuspiciousActivityEnabled;
  }

  // send_email_for_factor_enrollment_enabled - computed: false, optional: true, required: false
  private _sendEmailForFactorEnrollmentEnabled?: boolean | cdktf.IResolvable; 
  public get sendEmailForFactorEnrollmentEnabled() {
    return this.getBooleanAttribute('send_email_for_factor_enrollment_enabled');
  }
  public set sendEmailForFactorEnrollmentEnabled(value: boolean | cdktf.IResolvable) {
    this._sendEmailForFactorEnrollmentEnabled = value;
  }
  public resetSendEmailForFactorEnrollmentEnabled() {
    this._sendEmailForFactorEnrollmentEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendEmailForFactorEnrollmentEnabledInput() {
    return this._sendEmailForFactorEnrollmentEnabled;
  }

  // send_email_for_factor_reset_enabled - computed: false, optional: true, required: false
  private _sendEmailForFactorResetEnabled?: boolean | cdktf.IResolvable; 
  public get sendEmailForFactorResetEnabled() {
    return this.getBooleanAttribute('send_email_for_factor_reset_enabled');
  }
  public set sendEmailForFactorResetEnabled(value: boolean | cdktf.IResolvable) {
    this._sendEmailForFactorResetEnabled = value;
  }
  public resetSendEmailForFactorResetEnabled() {
    this._sendEmailForFactorResetEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendEmailForFactorResetEnabledInput() {
    return this._sendEmailForFactorResetEnabled;
  }

  // send_email_for_new_device_enabled - computed: false, optional: true, required: false
  private _sendEmailForNewDeviceEnabled?: boolean | cdktf.IResolvable; 
  public get sendEmailForNewDeviceEnabled() {
    return this.getBooleanAttribute('send_email_for_new_device_enabled');
  }
  public set sendEmailForNewDeviceEnabled(value: boolean | cdktf.IResolvable) {
    this._sendEmailForNewDeviceEnabled = value;
  }
  public resetSendEmailForNewDeviceEnabled() {
    this._sendEmailForNewDeviceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendEmailForNewDeviceEnabledInput() {
    return this._sendEmailForNewDeviceEnabled;
  }

  // send_email_for_password_changed_enabled - computed: false, optional: true, required: false
  private _sendEmailForPasswordChangedEnabled?: boolean | cdktf.IResolvable; 
  public get sendEmailForPasswordChangedEnabled() {
    return this.getBooleanAttribute('send_email_for_password_changed_enabled');
  }
  public set sendEmailForPasswordChangedEnabled(value: boolean | cdktf.IResolvable) {
    this._sendEmailForPasswordChangedEnabled = value;
  }
  public resetSendEmailForPasswordChangedEnabled() {
    this._sendEmailForPasswordChangedEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendEmailForPasswordChangedEnabledInput() {
    return this._sendEmailForPasswordChangedEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      report_suspicious_activity_enabled: cdktf.booleanToTerraform(this._reportSuspiciousActivityEnabled),
      send_email_for_factor_enrollment_enabled: cdktf.booleanToTerraform(this._sendEmailForFactorEnrollmentEnabled),
      send_email_for_factor_reset_enabled: cdktf.booleanToTerraform(this._sendEmailForFactorResetEnabled),
      send_email_for_new_device_enabled: cdktf.booleanToTerraform(this._sendEmailForNewDeviceEnabled),
      send_email_for_password_changed_enabled: cdktf.booleanToTerraform(this._sendEmailForPasswordChangedEnabled),
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
      report_suspicious_activity_enabled: {
        value: cdktf.booleanToHclTerraform(this._reportSuspiciousActivityEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      send_email_for_factor_enrollment_enabled: {
        value: cdktf.booleanToHclTerraform(this._sendEmailForFactorEnrollmentEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      send_email_for_factor_reset_enabled: {
        value: cdktf.booleanToHclTerraform(this._sendEmailForFactorResetEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      send_email_for_new_device_enabled: {
        value: cdktf.booleanToHclTerraform(this._sendEmailForNewDeviceEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      send_email_for_password_changed_enabled: {
        value: cdktf.booleanToHclTerraform(this._sendEmailForPasswordChangedEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
