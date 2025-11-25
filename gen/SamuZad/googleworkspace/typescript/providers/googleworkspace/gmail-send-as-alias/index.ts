// https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/gmail_send_as_alias
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GmailSendAsAliasConfig extends cdktf.TerraformMetaArguments {
  /**
  * A name that appears in the 'From:' header for mail sent using this alias. For custom 'from' addresses, when this is empty, Gmail will populate the 'From:' header with the name that is used for the primary address associated with the account. If the admin has disabled the ability for users to update their name format, requests to update this field for the primary login will silently fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/gmail_send_as_alias#display_name GmailSendAsAlias#display_name}
  */
  readonly displayName?: string;
  /**
  * Whether this address is selected as the default 'From:' address in situations such as composing a new message or sending a vacation auto-reply. Every Gmail account has exactly one default send-as address, so the only legal value that clients may write to this field is true. Changing this from false to true for an address will result in this field becoming false for the other previous default address. Toggling an existing alias' default to false is not possible, another alias must be added/imported and toggled to true to remove the default from an existing alias. To avoid drift with Terraform, please change the previous default's config to false AFTER a new default is applied and perform a refresh to synchronize with remote state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/gmail_send_as_alias#is_default GmailSendAsAlias#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * User's primary email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/gmail_send_as_alias#primary_email GmailSendAsAlias#primary_email}
  */
  readonly primaryEmail: string;
  /**
  * An optional email address that is included in a 'Reply-To:' header for mail sent using this alias. If this is empty, Gmail will not generate a 'Reply-To:' header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/gmail_send_as_alias#reply_to_address GmailSendAsAlias#reply_to_address}
  */
  readonly replyToAddress?: string;
  /**
  * The email address that appears in the 'From:' header for mail sent using this alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/gmail_send_as_alias#send_as_email GmailSendAsAlias#send_as_email}
  */
  readonly sendAsEmail: string;
  /**
  * An optional HTML signature that is included in messages composed with this alias in the Gmail web UI. This signature is added to new emails only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/gmail_send_as_alias#signature GmailSendAsAlias#signature}
  */
  readonly signature?: string;
  /**
  * Defaults to `true`. Whether Gmail should treat this address as an alias for the user's primary email address. This setting only applies to custom 'from' aliases. See https://support.google.com/a/answer/1710338 for help on making this decision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/gmail_send_as_alias#treat_as_alias GmailSendAsAlias#treat_as_alias}
  */
  readonly treatAsAlias?: boolean | cdktf.IResolvable;
  /**
  * smtp_msa block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/gmail_send_as_alias#smtp_msa GmailSendAsAlias#smtp_msa}
  */
  readonly smtpMsa?: GmailSendAsAliasSmtpMsa;
}
export interface GmailSendAsAliasSmtpMsa {
  /**
  * The hostname of the SMTP service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/gmail_send_as_alias#host GmailSendAsAlias#host}
  */
  readonly host: string;
  /**
  * The password that will be used for authentication with the SMTP service. This is a write-only field that can be specified in requests to create or update SendAs settings; it is never populated in responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/gmail_send_as_alias#password GmailSendAsAlias#password}
  */
  readonly password?: string;
  /**
  * The port of the SMTP service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/gmail_send_as_alias#port GmailSendAsAlias#port}
  */
  readonly port: number;
  /**
  * Defaults to `securityModeUnspecified`. The protocol that will be used to secure communication with the SMTP service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/gmail_send_as_alias#security_mode GmailSendAsAlias#security_mode}
  */
  readonly securityMode?: string;
  /**
  * The username that will be used for authentication with the SMTP service. This is a write-only field that can be specified in requests to create or update SendAs settings; it is never populated in responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/gmail_send_as_alias#username GmailSendAsAlias#username}
  */
  readonly username?: string;
}

export function gmailSendAsAliasSmtpMsaToTerraform(struct?: GmailSendAsAliasSmtpMsaOutputReference | GmailSendAsAliasSmtpMsa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    security_mode: cdktf.stringToTerraform(struct!.securityMode),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function gmailSendAsAliasSmtpMsaToHclTerraform(struct?: GmailSendAsAliasSmtpMsaOutputReference | GmailSendAsAliasSmtpMsa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    security_mode: {
      value: cdktf.stringToHclTerraform(struct!.securityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GmailSendAsAliasSmtpMsaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GmailSendAsAliasSmtpMsa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._securityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityMode = this._securityMode;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GmailSendAsAliasSmtpMsa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._password = undefined;
      this._port = undefined;
      this._securityMode = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._password = value.password;
      this._port = value.port;
      this._securityMode = value.securityMode;
      this._username = value.username;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // security_mode - computed: false, optional: true, required: false
  private _securityMode?: string; 
  public get securityMode() {
    return this.getStringAttribute('security_mode');
  }
  public set securityMode(value: string) {
    this._securityMode = value;
  }
  public resetSecurityMode() {
    this._securityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityModeInput() {
    return this._securityMode;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/gmail_send_as_alias googleworkspace_gmail_send_as_alias}
*/
export class GmailSendAsAlias extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "googleworkspace_gmail_send_as_alias";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GmailSendAsAlias resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GmailSendAsAlias to import
  * @param importFromId The id of the existing GmailSendAsAlias that should be imported. Refer to the {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/gmail_send_as_alias#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GmailSendAsAlias to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "googleworkspace_gmail_send_as_alias", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/gmail_send_as_alias googleworkspace_gmail_send_as_alias} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GmailSendAsAliasConfig
  */
  public constructor(scope: Construct, id: string, config: GmailSendAsAliasConfig) {
    super(scope, id, {
      terraformResourceType: 'googleworkspace_gmail_send_as_alias',
      terraformGeneratorMetadata: {
        providerName: 'googleworkspace',
        providerVersion: '0.11.1',
        providerVersionConstraint: '0.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._isDefault = config.isDefault;
    this._primaryEmail = config.primaryEmail;
    this._replyToAddress = config.replyToAddress;
    this._sendAsEmail = config.sendAsEmail;
    this._signature = config.signature;
    this._treatAsAlias = config.treatAsAlias;
    this._smtpMsa.internalValue = config.smtpMsa;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_default - computed: false, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
  }

  // is_primary - computed: true, optional: false, required: false
  public get isPrimary() {
    return this.getBooleanAttribute('is_primary');
  }

  // primary_email - computed: false, optional: false, required: true
  private _primaryEmail?: string; 
  public get primaryEmail() {
    return this.getStringAttribute('primary_email');
  }
  public set primaryEmail(value: string) {
    this._primaryEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryEmailInput() {
    return this._primaryEmail;
  }

  // reply_to_address - computed: false, optional: true, required: false
  private _replyToAddress?: string; 
  public get replyToAddress() {
    return this.getStringAttribute('reply_to_address');
  }
  public set replyToAddress(value: string) {
    this._replyToAddress = value;
  }
  public resetReplyToAddress() {
    this._replyToAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replyToAddressInput() {
    return this._replyToAddress;
  }

  // send_as_email - computed: false, optional: false, required: true
  private _sendAsEmail?: string; 
  public get sendAsEmail() {
    return this.getStringAttribute('send_as_email');
  }
  public set sendAsEmail(value: string) {
    this._sendAsEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sendAsEmailInput() {
    return this._sendAsEmail;
  }

  // signature - computed: false, optional: true, required: false
  private _signature?: string; 
  public get signature() {
    return this.getStringAttribute('signature');
  }
  public set signature(value: string) {
    this._signature = value;
  }
  public resetSignature() {
    this._signature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureInput() {
    return this._signature;
  }

  // treat_as_alias - computed: false, optional: true, required: false
  private _treatAsAlias?: boolean | cdktf.IResolvable; 
  public get treatAsAlias() {
    return this.getBooleanAttribute('treat_as_alias');
  }
  public set treatAsAlias(value: boolean | cdktf.IResolvable) {
    this._treatAsAlias = value;
  }
  public resetTreatAsAlias() {
    this._treatAsAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get treatAsAliasInput() {
    return this._treatAsAlias;
  }

  // verification_status - computed: true, optional: false, required: false
  public get verificationStatus() {
    return this.getStringAttribute('verification_status');
  }

  // smtp_msa - computed: false, optional: true, required: false
  private _smtpMsa = new GmailSendAsAliasSmtpMsaOutputReference(this, "smtp_msa");
  public get smtpMsa() {
    return this._smtpMsa;
  }
  public putSmtpMsa(value: GmailSendAsAliasSmtpMsa) {
    this._smtpMsa.internalValue = value;
  }
  public resetSmtpMsa() {
    this._smtpMsa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpMsaInput() {
    return this._smtpMsa.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      is_default: cdktf.booleanToTerraform(this._isDefault),
      primary_email: cdktf.stringToTerraform(this._primaryEmail),
      reply_to_address: cdktf.stringToTerraform(this._replyToAddress),
      send_as_email: cdktf.stringToTerraform(this._sendAsEmail),
      signature: cdktf.stringToTerraform(this._signature),
      treat_as_alias: cdktf.booleanToTerraform(this._treatAsAlias),
      smtp_msa: gmailSendAsAliasSmtpMsaToTerraform(this._smtpMsa.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_default: {
        value: cdktf.booleanToHclTerraform(this._isDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      primary_email: {
        value: cdktf.stringToHclTerraform(this._primaryEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reply_to_address: {
        value: cdktf.stringToHclTerraform(this._replyToAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_as_email: {
        value: cdktf.stringToHclTerraform(this._sendAsEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signature: {
        value: cdktf.stringToHclTerraform(this._signature),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      treat_as_alias: {
        value: cdktf.booleanToHclTerraform(this._treatAsAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      smtp_msa: {
        value: gmailSendAsAliasSmtpMsaToHclTerraform(this._smtpMsa.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GmailSendAsAliasSmtpMsaList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
