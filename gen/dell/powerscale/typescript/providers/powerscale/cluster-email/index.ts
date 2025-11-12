// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_email
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterEmailConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cluster email notification settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_email#settings ClusterEmail#settings}
  */
  readonly settings: ClusterEmailSettings;
}
export interface ClusterEmailSettings {
  /**
  * This setting determines how notifications will be batched together to be sent by email.  'none' means each notification will be sent separately.  'severity' means notifications of the same severity will be sent together.  'category' means notifications of the same category will be sent together.  'all' means all notifications will be batched together and sent in a single email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_email#batch_mode ClusterEmail#batch_mode}
  */
  readonly batchMode?: string;
  /**
  * The address of the SMTP server to be used for relaying the notification messages.  An SMTP server is required in order to send notifications.  If this string is empty, no emails will be sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_email#mail_relay ClusterEmail#mail_relay}
  */
  readonly mailRelay?: string;
  /**
  * The full email address that will appear as the sender of notification messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_email#mail_sender ClusterEmail#mail_sender}
  */
  readonly mailSender?: string;
  /**
  * The subject line for notification messages from this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_email#mail_subject ClusterEmail#mail_subject}
  */
  readonly mailSubject?: string;
  /**
  * Password to authenticate with if SMTP authentication is being used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_email#smtp_auth_passwd ClusterEmail#smtp_auth_passwd}
  */
  readonly smtpAuthPasswd?: string;
  /**
  * The type of secure communication protocol to use if SMTP is being used.  If 'none', plain text will be used, if 'starttls', the encrypted STARTTLS protocol will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_email#smtp_auth_security ClusterEmail#smtp_auth_security}
  */
  readonly smtpAuthSecurity?: string;
  /**
  * Username to authenticate with if SMTP authentication is being used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_email#smtp_auth_username ClusterEmail#smtp_auth_username}
  */
  readonly smtpAuthUsername?: string;
  /**
  * The port on the SMTP server to be used for relaying the notification messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_email#smtp_port ClusterEmail#smtp_port}
  */
  readonly smtpPort?: number;
  /**
  * If true, this cluster will send SMTP authentication credentials to the SMTP relay server in order to send its notification emails.  If false, the cluster will attempt to send its notification emails without authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_email#use_smtp_auth ClusterEmail#use_smtp_auth}
  */
  readonly useSmtpAuth?: boolean | cdktf.IResolvable;
  /**
  * Location of a custom template file that can be used to specify the layout of the notification emails.  If this string is empty, the default template will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_email#user_template ClusterEmail#user_template}
  */
  readonly userTemplate?: string;
}

export function clusterEmailSettingsToTerraform(struct?: ClusterEmailSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_mode: cdktf.stringToTerraform(struct!.batchMode),
    mail_relay: cdktf.stringToTerraform(struct!.mailRelay),
    mail_sender: cdktf.stringToTerraform(struct!.mailSender),
    mail_subject: cdktf.stringToTerraform(struct!.mailSubject),
    smtp_auth_passwd: cdktf.stringToTerraform(struct!.smtpAuthPasswd),
    smtp_auth_security: cdktf.stringToTerraform(struct!.smtpAuthSecurity),
    smtp_auth_username: cdktf.stringToTerraform(struct!.smtpAuthUsername),
    smtp_port: cdktf.numberToTerraform(struct!.smtpPort),
    use_smtp_auth: cdktf.booleanToTerraform(struct!.useSmtpAuth),
    user_template: cdktf.stringToTerraform(struct!.userTemplate),
  }
}


export function clusterEmailSettingsToHclTerraform(struct?: ClusterEmailSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_mode: {
      value: cdktf.stringToHclTerraform(struct!.batchMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mail_relay: {
      value: cdktf.stringToHclTerraform(struct!.mailRelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mail_sender: {
      value: cdktf.stringToHclTerraform(struct!.mailSender),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mail_subject: {
      value: cdktf.stringToHclTerraform(struct!.mailSubject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smtp_auth_passwd: {
      value: cdktf.stringToHclTerraform(struct!.smtpAuthPasswd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smtp_auth_security: {
      value: cdktf.stringToHclTerraform(struct!.smtpAuthSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smtp_auth_username: {
      value: cdktf.stringToHclTerraform(struct!.smtpAuthUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smtp_port: {
      value: cdktf.numberToHclTerraform(struct!.smtpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_smtp_auth: {
      value: cdktf.booleanToHclTerraform(struct!.useSmtpAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_template: {
      value: cdktf.stringToHclTerraform(struct!.userTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterEmailSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterEmailSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchMode = this._batchMode;
    }
    if (this._mailRelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.mailRelay = this._mailRelay;
    }
    if (this._mailSender !== undefined) {
      hasAnyValues = true;
      internalValueResult.mailSender = this._mailSender;
    }
    if (this._mailSubject !== undefined) {
      hasAnyValues = true;
      internalValueResult.mailSubject = this._mailSubject;
    }
    if (this._smtpAuthPasswd !== undefined) {
      hasAnyValues = true;
      internalValueResult.smtpAuthPasswd = this._smtpAuthPasswd;
    }
    if (this._smtpAuthSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.smtpAuthSecurity = this._smtpAuthSecurity;
    }
    if (this._smtpAuthUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.smtpAuthUsername = this._smtpAuthUsername;
    }
    if (this._smtpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.smtpPort = this._smtpPort;
    }
    if (this._useSmtpAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSmtpAuth = this._useSmtpAuth;
    }
    if (this._userTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTemplate = this._userTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterEmailSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchMode = undefined;
      this._mailRelay = undefined;
      this._mailSender = undefined;
      this._mailSubject = undefined;
      this._smtpAuthPasswd = undefined;
      this._smtpAuthSecurity = undefined;
      this._smtpAuthUsername = undefined;
      this._smtpPort = undefined;
      this._useSmtpAuth = undefined;
      this._userTemplate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchMode = value.batchMode;
      this._mailRelay = value.mailRelay;
      this._mailSender = value.mailSender;
      this._mailSubject = value.mailSubject;
      this._smtpAuthPasswd = value.smtpAuthPasswd;
      this._smtpAuthSecurity = value.smtpAuthSecurity;
      this._smtpAuthUsername = value.smtpAuthUsername;
      this._smtpPort = value.smtpPort;
      this._useSmtpAuth = value.useSmtpAuth;
      this._userTemplate = value.userTemplate;
    }
  }

  // batch_mode - computed: true, optional: true, required: false
  private _batchMode?: string; 
  public get batchMode() {
    return this.getStringAttribute('batch_mode');
  }
  public set batchMode(value: string) {
    this._batchMode = value;
  }
  public resetBatchMode() {
    this._batchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchModeInput() {
    return this._batchMode;
  }

  // mail_relay - computed: true, optional: true, required: false
  private _mailRelay?: string; 
  public get mailRelay() {
    return this.getStringAttribute('mail_relay');
  }
  public set mailRelay(value: string) {
    this._mailRelay = value;
  }
  public resetMailRelay() {
    this._mailRelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailRelayInput() {
    return this._mailRelay;
  }

  // mail_sender - computed: true, optional: true, required: false
  private _mailSender?: string; 
  public get mailSender() {
    return this.getStringAttribute('mail_sender');
  }
  public set mailSender(value: string) {
    this._mailSender = value;
  }
  public resetMailSender() {
    this._mailSender = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailSenderInput() {
    return this._mailSender;
  }

  // mail_subject - computed: true, optional: true, required: false
  private _mailSubject?: string; 
  public get mailSubject() {
    return this.getStringAttribute('mail_subject');
  }
  public set mailSubject(value: string) {
    this._mailSubject = value;
  }
  public resetMailSubject() {
    this._mailSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailSubjectInput() {
    return this._mailSubject;
  }

  // smtp_auth_passwd - computed: true, optional: true, required: false
  private _smtpAuthPasswd?: string; 
  public get smtpAuthPasswd() {
    return this.getStringAttribute('smtp_auth_passwd');
  }
  public set smtpAuthPasswd(value: string) {
    this._smtpAuthPasswd = value;
  }
  public resetSmtpAuthPasswd() {
    this._smtpAuthPasswd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpAuthPasswdInput() {
    return this._smtpAuthPasswd;
  }

  // smtp_auth_passwd_set - computed: true, optional: false, required: false
  public get smtpAuthPasswdSet() {
    return this.getBooleanAttribute('smtp_auth_passwd_set');
  }

  // smtp_auth_security - computed: true, optional: true, required: false
  private _smtpAuthSecurity?: string; 
  public get smtpAuthSecurity() {
    return this.getStringAttribute('smtp_auth_security');
  }
  public set smtpAuthSecurity(value: string) {
    this._smtpAuthSecurity = value;
  }
  public resetSmtpAuthSecurity() {
    this._smtpAuthSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpAuthSecurityInput() {
    return this._smtpAuthSecurity;
  }

  // smtp_auth_username - computed: true, optional: true, required: false
  private _smtpAuthUsername?: string; 
  public get smtpAuthUsername() {
    return this.getStringAttribute('smtp_auth_username');
  }
  public set smtpAuthUsername(value: string) {
    this._smtpAuthUsername = value;
  }
  public resetSmtpAuthUsername() {
    this._smtpAuthUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpAuthUsernameInput() {
    return this._smtpAuthUsername;
  }

  // smtp_port - computed: true, optional: true, required: false
  private _smtpPort?: number; 
  public get smtpPort() {
    return this.getNumberAttribute('smtp_port');
  }
  public set smtpPort(value: number) {
    this._smtpPort = value;
  }
  public resetSmtpPort() {
    this._smtpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpPortInput() {
    return this._smtpPort;
  }

  // use_smtp_auth - computed: true, optional: true, required: false
  private _useSmtpAuth?: boolean | cdktf.IResolvable; 
  public get useSmtpAuth() {
    return this.getBooleanAttribute('use_smtp_auth');
  }
  public set useSmtpAuth(value: boolean | cdktf.IResolvable) {
    this._useSmtpAuth = value;
  }
  public resetUseSmtpAuth() {
    this._useSmtpAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSmtpAuthInput() {
    return this._useSmtpAuth;
  }

  // user_template - computed: true, optional: true, required: false
  private _userTemplate?: string; 
  public get userTemplate() {
    return this.getStringAttribute('user_template');
  }
  public set userTemplate(value: string) {
    this._userTemplate = value;
  }
  public resetUserTemplate() {
    this._userTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTemplateInput() {
    return this._userTemplate;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_email powerscale_cluster_email}
*/
export class ClusterEmail extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_cluster_email";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClusterEmail resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClusterEmail to import
  * @param importFromId The id of the existing ClusterEmail that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_email#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClusterEmail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_cluster_email", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_email powerscale_cluster_email} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterEmailConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterEmailConfig) {
    super(scope, id, {
      terraformResourceType: 'powerscale_cluster_email',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._settings.internalValue = config.settings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // settings - computed: false, optional: false, required: true
  private _settings = new ClusterEmailSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: ClusterEmailSettings) {
    this._settings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      settings: clusterEmailSettingsToTerraform(this._settings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      settings: {
        value: clusterEmailSettingsToHclTerraform(this._settings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterEmailSettings",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
