// https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/mailbox
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MailboxConfig extends cdktf.TerraformMetaArguments {
  /**
  * is alias active or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/mailbox#active Mailbox#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Authentication source to use. One of: generic-oidc, mailcow, keycloak, ldap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/mailbox#authsource Mailbox#authsource}
  */
  readonly authsource?: string;
  /**
  * domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/mailbox#domain Mailbox#domain}
  */
  readonly domain: string;
  /**
  * forces the user to update its password on first login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/mailbox#force_pw_update Mailbox#force_pw_update}
  */
  readonly forcePwUpdate?: boolean | cdktf.IResolvable;
  /**
  * Full name of the mailbox user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/mailbox#full_name Mailbox#full_name}
  */
  readonly fullName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/mailbox#id Mailbox#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * if 'IMAP' is an allowed protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/mailbox#imap_access Mailbox#imap_access}
  */
  readonly imapAccess?: boolean | cdktf.IResolvable;
  /**
  * left part of email address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/mailbox#local_part Mailbox#local_part}
  */
  readonly localPart: string;
  /**
  * mailbox password (the password is excluded from update)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/mailbox#password Mailbox#password}
  */
  readonly password: string;
  /**
  * if 'POP3' is an allowed protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/mailbox#pop3_access Mailbox#pop3_access}
  */
  readonly pop3Access?: boolean | cdktf.IResolvable;
  /**
  * mailbox quota
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/mailbox#quota Mailbox#quota}
  */
  readonly quota?: number;
  /**
  * if 'Sieve' is an allowed protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/mailbox#sieve_access Mailbox#sieve_access}
  */
  readonly sieveAccess?: boolean | cdktf.IResolvable;
  /**
  * if 'SMTP' is an allowed protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/mailbox#smtp_access Mailbox#smtp_access}
  */
  readonly smtpAccess?: boolean | cdktf.IResolvable;
  /**
  * if direct login access to SOGo is granted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/mailbox#sogo_access Mailbox#sogo_access}
  */
  readonly sogoAccess?: boolean | cdktf.IResolvable;
  /**
  * force inbound email tls encryption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/mailbox#tls_enforce_in Mailbox#tls_enforce_in}
  */
  readonly tlsEnforceIn?: boolean | cdktf.IResolvable;
  /**
  * force outbound mail tls encryption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/mailbox#tls_enforce_out Mailbox#tls_enforce_out}
  */
  readonly tlsEnforceOut?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/mailbox mailcow_mailbox}
*/
export class Mailbox extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mailcow_mailbox";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Mailbox resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Mailbox to import
  * @param importFromId The id of the existing Mailbox that should be imported. Refer to the {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/mailbox#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Mailbox to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mailcow_mailbox", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/mailbox mailcow_mailbox} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MailboxConfig
  */
  public constructor(scope: Construct, id: string, config: MailboxConfig) {
    super(scope, id, {
      terraformResourceType: 'mailcow_mailbox',
      terraformGeneratorMetadata: {
        providerName: 'mailcow',
        providerVersion: '0.10.2',
        providerVersionConstraint: '0.10.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._authsource = config.authsource;
    this._domain = config.domain;
    this._forcePwUpdate = config.forcePwUpdate;
    this._fullName = config.fullName;
    this._id = config.id;
    this._imapAccess = config.imapAccess;
    this._localPart = config.localPart;
    this._password = config.password;
    this._pop3Access = config.pop3Access;
    this._quota = config.quota;
    this._sieveAccess = config.sieveAccess;
    this._smtpAccess = config.smtpAccess;
    this._sogoAccess = config.sogoAccess;
    this._tlsEnforceIn = config.tlsEnforceIn;
    this._tlsEnforceOut = config.tlsEnforceOut;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // authsource - computed: false, optional: true, required: false
  private _authsource?: string; 
  public get authsource() {
    return this.getStringAttribute('authsource');
  }
  public set authsource(value: string) {
    this._authsource = value;
  }
  public resetAuthsource() {
    this._authsource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authsourceInput() {
    return this._authsource;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // force_pw_update - computed: false, optional: true, required: false
  private _forcePwUpdate?: boolean | cdktf.IResolvable; 
  public get forcePwUpdate() {
    return this.getBooleanAttribute('force_pw_update');
  }
  public set forcePwUpdate(value: boolean | cdktf.IResolvable) {
    this._forcePwUpdate = value;
  }
  public resetForcePwUpdate() {
    this._forcePwUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcePwUpdateInput() {
    return this._forcePwUpdate;
  }

  // full_name - computed: false, optional: false, required: true
  private _fullName?: string; 
  public get fullName() {
    return this.getStringAttribute('full_name');
  }
  public set fullName(value: string) {
    this._fullName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fullNameInput() {
    return this._fullName;
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

  // imap_access - computed: false, optional: true, required: false
  private _imapAccess?: boolean | cdktf.IResolvable; 
  public get imapAccess() {
    return this.getBooleanAttribute('imap_access');
  }
  public set imapAccess(value: boolean | cdktf.IResolvable) {
    this._imapAccess = value;
  }
  public resetImapAccess() {
    this._imapAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imapAccessInput() {
    return this._imapAccess;
  }

  // local_part - computed: false, optional: false, required: true
  private _localPart?: string; 
  public get localPart() {
    return this.getStringAttribute('local_part');
  }
  public set localPart(value: string) {
    this._localPart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localPartInput() {
    return this._localPart;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // pop3_access - computed: false, optional: true, required: false
  private _pop3Access?: boolean | cdktf.IResolvable; 
  public get pop3Access() {
    return this.getBooleanAttribute('pop3_access');
  }
  public set pop3Access(value: boolean | cdktf.IResolvable) {
    this._pop3Access = value;
  }
  public resetPop3Access() {
    this._pop3Access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pop3AccessInput() {
    return this._pop3Access;
  }

  // quota - computed: false, optional: true, required: false
  private _quota?: number; 
  public get quota() {
    return this.getNumberAttribute('quota');
  }
  public set quota(value: number) {
    this._quota = value;
  }
  public resetQuota() {
    this._quota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaInput() {
    return this._quota;
  }

  // sieve_access - computed: false, optional: true, required: false
  private _sieveAccess?: boolean | cdktf.IResolvable; 
  public get sieveAccess() {
    return this.getBooleanAttribute('sieve_access');
  }
  public set sieveAccess(value: boolean | cdktf.IResolvable) {
    this._sieveAccess = value;
  }
  public resetSieveAccess() {
    this._sieveAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sieveAccessInput() {
    return this._sieveAccess;
  }

  // smtp_access - computed: false, optional: true, required: false
  private _smtpAccess?: boolean | cdktf.IResolvable; 
  public get smtpAccess() {
    return this.getBooleanAttribute('smtp_access');
  }
  public set smtpAccess(value: boolean | cdktf.IResolvable) {
    this._smtpAccess = value;
  }
  public resetSmtpAccess() {
    this._smtpAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpAccessInput() {
    return this._smtpAccess;
  }

  // sogo_access - computed: false, optional: true, required: false
  private _sogoAccess?: boolean | cdktf.IResolvable; 
  public get sogoAccess() {
    return this.getBooleanAttribute('sogo_access');
  }
  public set sogoAccess(value: boolean | cdktf.IResolvable) {
    this._sogoAccess = value;
  }
  public resetSogoAccess() {
    this._sogoAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sogoAccessInput() {
    return this._sogoAccess;
  }

  // tls_enforce_in - computed: false, optional: true, required: false
  private _tlsEnforceIn?: boolean | cdktf.IResolvable; 
  public get tlsEnforceIn() {
    return this.getBooleanAttribute('tls_enforce_in');
  }
  public set tlsEnforceIn(value: boolean | cdktf.IResolvable) {
    this._tlsEnforceIn = value;
  }
  public resetTlsEnforceIn() {
    this._tlsEnforceIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsEnforceInInput() {
    return this._tlsEnforceIn;
  }

  // tls_enforce_out - computed: false, optional: true, required: false
  private _tlsEnforceOut?: boolean | cdktf.IResolvable; 
  public get tlsEnforceOut() {
    return this.getBooleanAttribute('tls_enforce_out');
  }
  public set tlsEnforceOut(value: boolean | cdktf.IResolvable) {
    this._tlsEnforceOut = value;
  }
  public resetTlsEnforceOut() {
    this._tlsEnforceOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsEnforceOutInput() {
    return this._tlsEnforceOut;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      authsource: cdktf.stringToTerraform(this._authsource),
      domain: cdktf.stringToTerraform(this._domain),
      force_pw_update: cdktf.booleanToTerraform(this._forcePwUpdate),
      full_name: cdktf.stringToTerraform(this._fullName),
      id: cdktf.stringToTerraform(this._id),
      imap_access: cdktf.booleanToTerraform(this._imapAccess),
      local_part: cdktf.stringToTerraform(this._localPart),
      password: cdktf.stringToTerraform(this._password),
      pop3_access: cdktf.booleanToTerraform(this._pop3Access),
      quota: cdktf.numberToTerraform(this._quota),
      sieve_access: cdktf.booleanToTerraform(this._sieveAccess),
      smtp_access: cdktf.booleanToTerraform(this._smtpAccess),
      sogo_access: cdktf.booleanToTerraform(this._sogoAccess),
      tls_enforce_in: cdktf.booleanToTerraform(this._tlsEnforceIn),
      tls_enforce_out: cdktf.booleanToTerraform(this._tlsEnforceOut),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authsource: {
        value: cdktf.stringToHclTerraform(this._authsource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_pw_update: {
        value: cdktf.booleanToHclTerraform(this._forcePwUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      full_name: {
        value: cdktf.stringToHclTerraform(this._fullName),
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
      imap_access: {
        value: cdktf.booleanToHclTerraform(this._imapAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      local_part: {
        value: cdktf.stringToHclTerraform(this._localPart),
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
      pop3_access: {
        value: cdktf.booleanToHclTerraform(this._pop3Access),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      quota: {
        value: cdktf.numberToHclTerraform(this._quota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sieve_access: {
        value: cdktf.booleanToHclTerraform(this._sieveAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      smtp_access: {
        value: cdktf.booleanToHclTerraform(this._smtpAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sogo_access: {
        value: cdktf.booleanToHclTerraform(this._sogoAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tls_enforce_in: {
        value: cdktf.booleanToHclTerraform(this._tlsEnforceIn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tls_enforce_out: {
        value: cdktf.booleanToHclTerraform(this._tlsEnforceOut),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
