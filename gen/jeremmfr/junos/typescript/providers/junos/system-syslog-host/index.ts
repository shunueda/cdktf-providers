// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemSyslogHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Do not suppress the repeated message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_host#allow_duplicates SystemSyslogHost#allow_duplicates}
  */
  readonly allowDuplicates?: boolean | cdktf.IResolvable;
  /**
  * All facilities sseverity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_host#any_severity SystemSyslogHost#any_severity}
  */
  readonly anySeverity?: string;
  /**
  * Authorization system severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_host#authorization_severity SystemSyslogHost#authorization_severity}
  */
  readonly authorizationSeverity?: string;
  /**
  * Configuration change log severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_host#changelog_severity SystemSyslogHost#changelog_severity}
  */
  readonly changelogSeverity?: string;
  /**
  * Configuration conflict log severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_host#conflictlog_severity SystemSyslogHost#conflictlog_severity}
  */
  readonly conflictlogSeverity?: string;
  /**
  * Various system processes severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_host#daemon_severity SystemSyslogHost#daemon_severity}
  */
  readonly daemonSeverity?: string;
  /**
  * Dynamic flow capture severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_host#dfc_severity SystemSyslogHost#dfc_severity}
  */
  readonly dfcSeverity?: string;
  /**
  * Exclude hostname field in messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_host#exclude_hostname SystemSyslogHost#exclude_hostname}
  */
  readonly excludeHostname?: boolean | cdktf.IResolvable;
  /**
  * Include priority and facility in messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_host#explicit_priority SystemSyslogHost#explicit_priority}
  */
  readonly explicitPriority?: boolean | cdktf.IResolvable;
  /**
  * Local external applications severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_host#external_severity SystemSyslogHost#external_severity}
  */
  readonly externalSeverity?: string;
  /**
  * Alternate facility for logging to remote host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_host#facility_override SystemSyslogHost#facility_override}
  */
  readonly facilityOverride?: string;
  /**
  * Firewall filtering system severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_host#firewall_severity SystemSyslogHost#firewall_severity}
  */
  readonly firewallSeverity?: string;
  /**
  * FTP process severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_host#ftp_severity SystemSyslogHost#ftp_severity}
  */
  readonly ftpSeverity?: string;
  /**
  * Host to be notified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_host#host SystemSyslogHost#host}
  */
  readonly host: string;
  /**
  * Commands executed by the UI severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_host#interactivecommands_severity SystemSyslogHost#interactivecommands_severity}
  */
  readonly interactivecommandsSeverity?: string;
  /**
  * Kernel severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_host#kernel_severity SystemSyslogHost#kernel_severity}
  */
  readonly kernelSeverity?: string;
  /**
  * Prefix for all logging to this host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_host#log_prefix SystemSyslogHost#log_prefix}
  */
  readonly logPrefix?: string;
  /**
  * Regular expression for lines to be logged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_host#match SystemSyslogHost#match}
  */
  readonly match?: string;
  /**
  * Matching string(s) for lines to be logged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_host#match_strings SystemSyslogHost#match_strings}
  */
  readonly matchStrings?: string[];
  /**
  * NTP process severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_host#ntp_severity SystemSyslogHost#ntp_severity}
  */
  readonly ntpSeverity?: string;
  /**
  * Packet Forwarding Engine severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_host#pfe_severity SystemSyslogHost#pfe_severity}
  */
  readonly pfeSeverity?: string;
  /**
  * Port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_host#port SystemSyslogHost#port}
  */
  readonly port?: number;
  /**
  * Security related severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_host#security_severity SystemSyslogHost#security_severity}
  */
  readonly securitySeverity?: string;
  /**
  * Use specified address as source address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_host#source_address SystemSyslogHost#source_address}
  */
  readonly sourceAddress?: string;
  /**
  * User processes severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_host#user_severity SystemSyslogHost#user_severity}
  */
  readonly userSeverity?: string;
  /**
  * structured_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_host#structured_data SystemSyslogHost#structured_data}
  */
  readonly structuredData?: SystemSyslogHostStructuredData;
}
export interface SystemSyslogHostStructuredData {
  /**
  * Omit English-language text from end of logged message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_host#brief SystemSyslogHost#brief}
  */
  readonly brief?: boolean | cdktf.IResolvable;
}

export function systemSyslogHostStructuredDataToTerraform(struct?: SystemSyslogHostStructuredData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    brief: cdktf.booleanToTerraform(struct!.brief),
  }
}


export function systemSyslogHostStructuredDataToHclTerraform(struct?: SystemSyslogHostStructuredData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    brief: {
      value: cdktf.booleanToHclTerraform(struct!.brief),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSyslogHostStructuredDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemSyslogHostStructuredData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._brief !== undefined) {
      hasAnyValues = true;
      internalValueResult.brief = this._brief;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSyslogHostStructuredData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._brief = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._brief = value.brief;
    }
  }

  // brief - computed: false, optional: true, required: false
  private _brief?: boolean | cdktf.IResolvable; 
  public get brief() {
    return this.getBooleanAttribute('brief');
  }
  public set brief(value: boolean | cdktf.IResolvable) {
    this._brief = value;
  }
  public resetBrief() {
    this._brief = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get briefInput() {
    return this._brief;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_host junos_system_syslog_host}
*/
export class SystemSyslogHost extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_system_syslog_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemSyslogHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemSyslogHost to import
  * @param importFromId The id of the existing SystemSyslogHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemSyslogHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_system_syslog_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_host junos_system_syslog_host} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemSyslogHostConfig
  */
  public constructor(scope: Construct, id: string, config: SystemSyslogHostConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_system_syslog_host',
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
    this._excludeHostname = config.excludeHostname;
    this._explicitPriority = config.explicitPriority;
    this._externalSeverity = config.externalSeverity;
    this._facilityOverride = config.facilityOverride;
    this._firewallSeverity = config.firewallSeverity;
    this._ftpSeverity = config.ftpSeverity;
    this._host = config.host;
    this._interactivecommandsSeverity = config.interactivecommandsSeverity;
    this._kernelSeverity = config.kernelSeverity;
    this._logPrefix = config.logPrefix;
    this._match = config.match;
    this._matchStrings = config.matchStrings;
    this._ntpSeverity = config.ntpSeverity;
    this._pfeSeverity = config.pfeSeverity;
    this._port = config.port;
    this._securitySeverity = config.securitySeverity;
    this._sourceAddress = config.sourceAddress;
    this._userSeverity = config.userSeverity;
    this._structuredData.internalValue = config.structuredData;
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

  // exclude_hostname - computed: false, optional: true, required: false
  private _excludeHostname?: boolean | cdktf.IResolvable; 
  public get excludeHostname() {
    return this.getBooleanAttribute('exclude_hostname');
  }
  public set excludeHostname(value: boolean | cdktf.IResolvable) {
    this._excludeHostname = value;
  }
  public resetExcludeHostname() {
    this._excludeHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeHostnameInput() {
    return this._excludeHostname;
  }

  // explicit_priority - computed: false, optional: true, required: false
  private _explicitPriority?: boolean | cdktf.IResolvable; 
  public get explicitPriority() {
    return this.getBooleanAttribute('explicit_priority');
  }
  public set explicitPriority(value: boolean | cdktf.IResolvable) {
    this._explicitPriority = value;
  }
  public resetExplicitPriority() {
    this._explicitPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitPriorityInput() {
    return this._explicitPriority;
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

  // facility_override - computed: false, optional: true, required: false
  private _facilityOverride?: string; 
  public get facilityOverride() {
    return this.getStringAttribute('facility_override');
  }
  public set facilityOverride(value: string) {
    this._facilityOverride = value;
  }
  public resetFacilityOverride() {
    this._facilityOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facilityOverrideInput() {
    return this._facilityOverride;
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

  // log_prefix - computed: false, optional: true, required: false
  private _logPrefix?: string; 
  public get logPrefix() {
    return this.getStringAttribute('log_prefix');
  }
  public set logPrefix(value: string) {
    this._logPrefix = value;
  }
  public resetLogPrefix() {
    this._logPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPrefixInput() {
    return this._logPrefix;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

  // source_address - computed: false, optional: true, required: false
  private _sourceAddress?: string; 
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }
  public set sourceAddress(value: string) {
    this._sourceAddress = value;
  }
  public resetSourceAddress() {
    this._sourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
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

  // structured_data - computed: false, optional: true, required: false
  private _structuredData = new SystemSyslogHostStructuredDataOutputReference(this, "structured_data");
  public get structuredData() {
    return this._structuredData;
  }
  public putStructuredData(value: SystemSyslogHostStructuredData) {
    this._structuredData.internalValue = value;
  }
  public resetStructuredData() {
    this._structuredData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get structuredDataInput() {
    return this._structuredData.internalValue;
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
      exclude_hostname: cdktf.booleanToTerraform(this._excludeHostname),
      explicit_priority: cdktf.booleanToTerraform(this._explicitPriority),
      external_severity: cdktf.stringToTerraform(this._externalSeverity),
      facility_override: cdktf.stringToTerraform(this._facilityOverride),
      firewall_severity: cdktf.stringToTerraform(this._firewallSeverity),
      ftp_severity: cdktf.stringToTerraform(this._ftpSeverity),
      host: cdktf.stringToTerraform(this._host),
      interactivecommands_severity: cdktf.stringToTerraform(this._interactivecommandsSeverity),
      kernel_severity: cdktf.stringToTerraform(this._kernelSeverity),
      log_prefix: cdktf.stringToTerraform(this._logPrefix),
      match: cdktf.stringToTerraform(this._match),
      match_strings: cdktf.listMapper(cdktf.stringToTerraform, false)(this._matchStrings),
      ntp_severity: cdktf.stringToTerraform(this._ntpSeverity),
      pfe_severity: cdktf.stringToTerraform(this._pfeSeverity),
      port: cdktf.numberToTerraform(this._port),
      security_severity: cdktf.stringToTerraform(this._securitySeverity),
      source_address: cdktf.stringToTerraform(this._sourceAddress),
      user_severity: cdktf.stringToTerraform(this._userSeverity),
      structured_data: systemSyslogHostStructuredDataToTerraform(this._structuredData.internalValue),
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
      exclude_hostname: {
        value: cdktf.booleanToHclTerraform(this._excludeHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      explicit_priority: {
        value: cdktf.booleanToHclTerraform(this._explicitPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      external_severity: {
        value: cdktf.stringToHclTerraform(this._externalSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      facility_override: {
        value: cdktf.stringToHclTerraform(this._facilityOverride),
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
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      log_prefix: {
        value: cdktf.stringToHclTerraform(this._logPrefix),
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
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_severity: {
        value: cdktf.stringToHclTerraform(this._securitySeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_address: {
        value: cdktf.stringToHclTerraform(this._sourceAddress),
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
      structured_data: {
        value: systemSyslogHostStructuredDataToHclTerraform(this._structuredData.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SystemSyslogHostStructuredData",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
