// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemSyslogUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Do not suppress the repeated message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_user#allow_duplicates SystemSyslogUser#allow_duplicates}
  */
  readonly allowDuplicates?: boolean | cdktf.IResolvable;
  /**
  * All facilities sseverity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_user#any_severity SystemSyslogUser#any_severity}
  */
  readonly anySeverity?: string;
  /**
  * Authorization system severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_user#authorization_severity SystemSyslogUser#authorization_severity}
  */
  readonly authorizationSeverity?: string;
  /**
  * Configuration change log severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_user#changelog_severity SystemSyslogUser#changelog_severity}
  */
  readonly changelogSeverity?: string;
  /**
  * Configuration conflict log severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_user#conflictlog_severity SystemSyslogUser#conflictlog_severity}
  */
  readonly conflictlogSeverity?: string;
  /**
  * Various system processes severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_user#daemon_severity SystemSyslogUser#daemon_severity}
  */
  readonly daemonSeverity?: string;
  /**
  * Dynamic flow capture severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_user#dfc_severity SystemSyslogUser#dfc_severity}
  */
  readonly dfcSeverity?: string;
  /**
  * Local external applications severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_user#external_severity SystemSyslogUser#external_severity}
  */
  readonly externalSeverity?: string;
  /**
  * Firewall filtering system severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_user#firewall_severity SystemSyslogUser#firewall_severity}
  */
  readonly firewallSeverity?: string;
  /**
  * FTP process severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_user#ftp_severity SystemSyslogUser#ftp_severity}
  */
  readonly ftpSeverity?: string;
  /**
  * Commands executed by the UI severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_user#interactivecommands_severity SystemSyslogUser#interactivecommands_severity}
  */
  readonly interactivecommandsSeverity?: string;
  /**
  * Kernel severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_user#kernel_severity SystemSyslogUser#kernel_severity}
  */
  readonly kernelSeverity?: string;
  /**
  * Regular expression for lines to be logged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_user#match SystemSyslogUser#match}
  */
  readonly match?: string;
  /**
  * Matching string(s) for lines to be logged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_user#match_strings SystemSyslogUser#match_strings}
  */
  readonly matchStrings?: string[];
  /**
  * NTP process severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_user#ntp_severity SystemSyslogUser#ntp_severity}
  */
  readonly ntpSeverity?: string;
  /**
  * Packet Forwarding Engine severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_user#pfe_severity SystemSyslogUser#pfe_severity}
  */
  readonly pfeSeverity?: string;
  /**
  * Security related severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_user#security_severity SystemSyslogUser#security_severity}
  */
  readonly securitySeverity?: string;
  /**
  * User processes severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_user#user_severity SystemSyslogUser#user_severity}
  */
  readonly userSeverity?: string;
  /**
  * Name of user to notify (or `*` for all).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_user#username SystemSyslogUser#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_user junos_system_syslog_user}
*/
export class SystemSyslogUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_system_syslog_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemSyslogUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemSyslogUser to import
  * @param importFromId The id of the existing SystemSyslogUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemSyslogUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_system_syslog_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_user junos_system_syslog_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemSyslogUserConfig
  */
  public constructor(scope: Construct, id: string, config: SystemSyslogUserConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_system_syslog_user',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowDuplicates = config.allowDuplicates;
    this._anySeverity = config.anySeverity;
    this._authorizationSeverity = config.authorizationSeverity;
    this._changelogSeverity = config.changelogSeverity;
    this._conflictlogSeverity = config.conflictlogSeverity;
    this._daemonSeverity = config.daemonSeverity;
    this._dfcSeverity = config.dfcSeverity;
    this._externalSeverity = config.externalSeverity;
    this._firewallSeverity = config.firewallSeverity;
    this._ftpSeverity = config.ftpSeverity;
    this._interactivecommandsSeverity = config.interactivecommandsSeverity;
    this._kernelSeverity = config.kernelSeverity;
    this._match = config.match;
    this._matchStrings = config.matchStrings;
    this._ntpSeverity = config.ntpSeverity;
    this._pfeSeverity = config.pfeSeverity;
    this._securitySeverity = config.securitySeverity;
    this._userSeverity = config.userSeverity;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_duplicates - computed: false, optional: true, required: false
  private _allowDuplicates?: boolean | cdktf.IResolvable; 
  public get allowDuplicates() {
    return this.getBooleanAttribute('allow_duplicates');
  }
  public set allowDuplicates(value: boolean | cdktf.IResolvable) {
    this._allowDuplicates = value;
  }
  public resetAllowDuplicates() {
    this._allowDuplicates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDuplicatesInput() {
    return this._allowDuplicates;
  }

  // any_severity - computed: false, optional: true, required: false
  private _anySeverity?: string; 
  public get anySeverity() {
    return this.getStringAttribute('any_severity');
  }
  public set anySeverity(value: string) {
    this._anySeverity = value;
  }
  public resetAnySeverity() {
    this._anySeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anySeverityInput() {
    return this._anySeverity;
  }

  // authorization_severity - computed: false, optional: true, required: false
  private _authorizationSeverity?: string; 
  public get authorizationSeverity() {
    return this.getStringAttribute('authorization_severity');
  }
  public set authorizationSeverity(value: string) {
    this._authorizationSeverity = value;
  }
  public resetAuthorizationSeverity() {
    this._authorizationSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationSeverityInput() {
    return this._authorizationSeverity;
  }

  // changelog_severity - computed: false, optional: true, required: false
  private _changelogSeverity?: string; 
  public get changelogSeverity() {
    return this.getStringAttribute('changelog_severity');
  }
  public set changelogSeverity(value: string) {
    this._changelogSeverity = value;
  }
  public resetChangelogSeverity() {
    this._changelogSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changelogSeverityInput() {
    return this._changelogSeverity;
  }

  // conflictlog_severity - computed: false, optional: true, required: false
  private _conflictlogSeverity?: string; 
  public get conflictlogSeverity() {
    return this.getStringAttribute('conflictlog_severity');
  }
  public set conflictlogSeverity(value: string) {
    this._conflictlogSeverity = value;
  }
  public resetConflictlogSeverity() {
    this._conflictlogSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conflictlogSeverityInput() {
    return this._conflictlogSeverity;
  }

  // daemon_severity - computed: false, optional: true, required: false
  private _daemonSeverity?: string; 
  public get daemonSeverity() {
    return this.getStringAttribute('daemon_severity');
  }
  public set daemonSeverity(value: string) {
    this._daemonSeverity = value;
  }
  public resetDaemonSeverity() {
    this._daemonSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daemonSeverityInput() {
    return this._daemonSeverity;
  }

  // dfc_severity - computed: false, optional: true, required: false
  private _dfcSeverity?: string; 
  public get dfcSeverity() {
    return this.getStringAttribute('dfc_severity');
  }
  public set dfcSeverity(value: string) {
    this._dfcSeverity = value;
  }
  public resetDfcSeverity() {
    this._dfcSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dfcSeverityInput() {
    return this._dfcSeverity;
  }

  // external_severity - computed: false, optional: true, required: false
  private _externalSeverity?: string; 
  public get externalSeverity() {
    return this.getStringAttribute('external_severity');
  }
  public set externalSeverity(value: string) {
    this._externalSeverity = value;
  }
  public resetExternalSeverity() {
    this._externalSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSeverityInput() {
    return this._externalSeverity;
  }

  // firewall_severity - computed: false, optional: true, required: false
  private _firewallSeverity?: string; 
  public get firewallSeverity() {
    return this.getStringAttribute('firewall_severity');
  }
  public set firewallSeverity(value: string) {
    this._firewallSeverity = value;
  }
  public resetFirewallSeverity() {
    this._firewallSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallSeverityInput() {
    return this._firewallSeverity;
  }

  // ftp_severity - computed: false, optional: true, required: false
  private _ftpSeverity?: string; 
  public get ftpSeverity() {
    return this.getStringAttribute('ftp_severity');
  }
  public set ftpSeverity(value: string) {
    this._ftpSeverity = value;
  }
  public resetFtpSeverity() {
    this._ftpSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpSeverityInput() {
    return this._ftpSeverity;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interactivecommands_severity - computed: false, optional: true, required: false
  private _interactivecommandsSeverity?: string; 
  public get interactivecommandsSeverity() {
    return this.getStringAttribute('interactivecommands_severity');
  }
  public set interactivecommandsSeverity(value: string) {
    this._interactivecommandsSeverity = value;
  }
  public resetInteractivecommandsSeverity() {
    this._interactivecommandsSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interactivecommandsSeverityInput() {
    return this._interactivecommandsSeverity;
  }

  // kernel_severity - computed: false, optional: true, required: false
  private _kernelSeverity?: string; 
  public get kernelSeverity() {
    return this.getStringAttribute('kernel_severity');
  }
  public set kernelSeverity(value: string) {
    this._kernelSeverity = value;
  }
  public resetKernelSeverity() {
    this._kernelSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelSeverityInput() {
    return this._kernelSeverity;
  }

  // match - computed: false, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // match_strings - computed: false, optional: true, required: false
  private _matchStrings?: string[]; 
  public get matchStrings() {
    return this.getListAttribute('match_strings');
  }
  public set matchStrings(value: string[]) {
    this._matchStrings = value;
  }
  public resetMatchStrings() {
    this._matchStrings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchStringsInput() {
    return this._matchStrings;
  }

  // ntp_severity - computed: false, optional: true, required: false
  private _ntpSeverity?: string; 
  public get ntpSeverity() {
    return this.getStringAttribute('ntp_severity');
  }
  public set ntpSeverity(value: string) {
    this._ntpSeverity = value;
  }
  public resetNtpSeverity() {
    this._ntpSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpSeverityInput() {
    return this._ntpSeverity;
  }

  // pfe_severity - computed: false, optional: true, required: false
  private _pfeSeverity?: string; 
  public get pfeSeverity() {
    return this.getStringAttribute('pfe_severity');
  }
  public set pfeSeverity(value: string) {
    this._pfeSeverity = value;
  }
  public resetPfeSeverity() {
    this._pfeSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pfeSeverityInput() {
    return this._pfeSeverity;
  }

  // security_severity - computed: false, optional: true, required: false
  private _securitySeverity?: string; 
  public get securitySeverity() {
    return this.getStringAttribute('security_severity');
  }
  public set securitySeverity(value: string) {
    this._securitySeverity = value;
  }
  public resetSecuritySeverity() {
    this._securitySeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securitySeverityInput() {
    return this._securitySeverity;
  }

  // user_severity - computed: false, optional: true, required: false
  private _userSeverity?: string; 
  public get userSeverity() {
    return this.getStringAttribute('user_severity');
  }
  public set userSeverity(value: string) {
    this._userSeverity = value;
  }
  public resetUserSeverity() {
    this._userSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSeverityInput() {
    return this._userSeverity;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_duplicates: cdktf.booleanToTerraform(this._allowDuplicates),
      any_severity: cdktf.stringToTerraform(this._anySeverity),
      authorization_severity: cdktf.stringToTerraform(this._authorizationSeverity),
      changelog_severity: cdktf.stringToTerraform(this._changelogSeverity),
      conflictlog_severity: cdktf.stringToTerraform(this._conflictlogSeverity),
      daemon_severity: cdktf.stringToTerraform(this._daemonSeverity),
      dfc_severity: cdktf.stringToTerraform(this._dfcSeverity),
      external_severity: cdktf.stringToTerraform(this._externalSeverity),
      firewall_severity: cdktf.stringToTerraform(this._firewallSeverity),
      ftp_severity: cdktf.stringToTerraform(this._ftpSeverity),
      interactivecommands_severity: cdktf.stringToTerraform(this._interactivecommandsSeverity),
      kernel_severity: cdktf.stringToTerraform(this._kernelSeverity),
      match: cdktf.stringToTerraform(this._match),
      match_strings: cdktf.listMapper(cdktf.stringToTerraform, false)(this._matchStrings),
      ntp_severity: cdktf.stringToTerraform(this._ntpSeverity),
      pfe_severity: cdktf.stringToTerraform(this._pfeSeverity),
      security_severity: cdktf.stringToTerraform(this._securitySeverity),
      user_severity: cdktf.stringToTerraform(this._userSeverity),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_duplicates: {
        value: cdktf.booleanToHclTerraform(this._allowDuplicates),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      any_severity: {
        value: cdktf.stringToHclTerraform(this._anySeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorization_severity: {
        value: cdktf.stringToHclTerraform(this._authorizationSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      changelog_severity: {
        value: cdktf.stringToHclTerraform(this._changelogSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conflictlog_severity: {
        value: cdktf.stringToHclTerraform(this._conflictlogSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      daemon_severity: {
        value: cdktf.stringToHclTerraform(this._daemonSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dfc_severity: {
        value: cdktf.stringToHclTerraform(this._dfcSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_severity: {
        value: cdktf.stringToHclTerraform(this._externalSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firewall_severity: {
        value: cdktf.stringToHclTerraform(this._firewallSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ftp_severity: {
        value: cdktf.stringToHclTerraform(this._ftpSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interactivecommands_severity: {
        value: cdktf.stringToHclTerraform(this._interactivecommandsSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kernel_severity: {
        value: cdktf.stringToHclTerraform(this._kernelSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match: {
        value: cdktf.stringToHclTerraform(this._match),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_strings: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._matchStrings),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ntp_severity: {
        value: cdktf.stringToHclTerraform(this._ntpSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pfe_severity: {
        value: cdktf.stringToHclTerraform(this._pfeSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_severity: {
        value: cdktf.stringToHclTerraform(this._securitySeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_severity: {
        value: cdktf.stringToHclTerraform(this._userSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
