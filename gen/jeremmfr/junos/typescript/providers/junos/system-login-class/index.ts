// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_login_class
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemLoginClassConfig extends cdktf.TerraformMetaArguments {
  /**
  * End time for remote access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_login_class#access_end SystemLoginClass#access_end}
  */
  readonly accessEnd?: string;
  /**
  * Start time for remote access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_login_class#access_start SystemLoginClass#access_start}
  */
  readonly accessStart?: string;
  /**
  * Regular expression for commands to allow explicitly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_login_class#allow_commands SystemLoginClass#allow_commands}
  */
  readonly allowCommands?: string;
  /**
  * Object path regular expressions to allow commands.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_login_class#allow_commands_regexps SystemLoginClass#allow_commands_regexps}
  */
  readonly allowCommandsRegexps?: string[];
  /**
  * Regular expression for configure to allow explicitly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_login_class#allow_configuration SystemLoginClass#allow_configuration}
  */
  readonly allowConfiguration?: string;
  /**
  * Object path regular expressions to allow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_login_class#allow_configuration_regexps SystemLoginClass#allow_configuration_regexps}
  */
  readonly allowConfigurationRegexps?: string[];
  /**
  * Allow all hidden commands to be executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_login_class#allow_hidden_commands SystemLoginClass#allow_hidden_commands}
  */
  readonly allowHiddenCommands?: boolean | cdktf.IResolvable;
  /**
  * Day(s) of week when access is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_login_class#allowed_days SystemLoginClass#allowed_days}
  */
  readonly allowedDays?: string[];
  /**
  * Cli prompt name for this class.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_login_class#cli_prompt SystemLoginClass#cli_prompt}
  */
  readonly cliPrompt?: string;
  /**
  * Enable breadcrumbs during display of configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_login_class#configuration_breadcrumbs SystemLoginClass#configuration_breadcrumbs}
  */
  readonly configurationBreadcrumbs?: boolean | cdktf.IResolvable;
  /**
  * List of commands to be confirmed explicitly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_login_class#confirm_commands SystemLoginClass#confirm_commands}
  */
  readonly confirmCommands?: string[];
  /**
  * Regular expression for commands to deny explicitly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_login_class#deny_commands SystemLoginClass#deny_commands}
  */
  readonly denyCommands?: string;
  /**
  * Object path regular expressions to deny commands.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_login_class#deny_commands_regexps SystemLoginClass#deny_commands_regexps}
  */
  readonly denyCommandsRegexps?: string[];
  /**
  * Regular expression for configure to deny explicitly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_login_class#deny_configuration SystemLoginClass#deny_configuration}
  */
  readonly denyConfiguration?: string;
  /**
  * Object path regular expressions to deny.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_login_class#deny_configuration_regexps SystemLoginClass#deny_configuration_regexps}
  */
  readonly denyConfigurationRegexps?: string[];
  /**
  * Maximum idle time before logout (minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_login_class#idle_timeout SystemLoginClass#idle_timeout}
  */
  readonly idleTimeout?: number;
  /**
  * Logical system associated with login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_login_class#logical_system SystemLoginClass#logical_system}
  */
  readonly logicalSystem?: string;
  /**
  * Display system alarms when logging in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_login_class#login_alarms SystemLoginClass#login_alarms}
  */
  readonly loginAlarms?: boolean | cdktf.IResolvable;
  /**
  * Execute this login-script when logging in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_login_class#login_script SystemLoginClass#login_script}
  */
  readonly loginScript?: string;
  /**
  * Display tip when logging in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_login_class#login_tip SystemLoginClass#login_tip}
  */
  readonly loginTip?: boolean | cdktf.IResolvable;
  /**
  * The name of system login class.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_login_class#name SystemLoginClass#name}
  */
  readonly name: string;
  /**
  * Deny all hidden commands with exemptions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_login_class#no_hidden_commands_except SystemLoginClass#no_hidden_commands_except}
  */
  readonly noHiddenCommandsExcept?: string[];
  /**
  * Set of permitted operation categories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_login_class#permissions SystemLoginClass#permissions}
  */
  readonly permissions?: string[];
  /**
  * Common Criteria security role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_login_class#security_role SystemLoginClass#security_role}
  */
  readonly securityRole?: string;
  /**
  * Tenant associated with this login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_login_class#tenant SystemLoginClass#tenant}
  */
  readonly tenant?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_login_class junos_system_login_class}
*/
export class SystemLoginClass extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_system_login_class";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemLoginClass resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemLoginClass to import
  * @param importFromId The id of the existing SystemLoginClass that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_login_class#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemLoginClass to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_system_login_class", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_login_class junos_system_login_class} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemLoginClassConfig
  */
  public constructor(scope: Construct, id: string, config: SystemLoginClassConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_system_login_class',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0',
        providerVersionConstraint: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessEnd = config.accessEnd;
    this._accessStart = config.accessStart;
    this._allowCommands = config.allowCommands;
    this._allowCommandsRegexps = config.allowCommandsRegexps;
    this._allowConfiguration = config.allowConfiguration;
    this._allowConfigurationRegexps = config.allowConfigurationRegexps;
    this._allowHiddenCommands = config.allowHiddenCommands;
    this._allowedDays = config.allowedDays;
    this._cliPrompt = config.cliPrompt;
    this._configurationBreadcrumbs = config.configurationBreadcrumbs;
    this._confirmCommands = config.confirmCommands;
    this._denyCommands = config.denyCommands;
    this._denyCommandsRegexps = config.denyCommandsRegexps;
    this._denyConfiguration = config.denyConfiguration;
    this._denyConfigurationRegexps = config.denyConfigurationRegexps;
    this._idleTimeout = config.idleTimeout;
    this._logicalSystem = config.logicalSystem;
    this._loginAlarms = config.loginAlarms;
    this._loginScript = config.loginScript;
    this._loginTip = config.loginTip;
    this._name = config.name;
    this._noHiddenCommandsExcept = config.noHiddenCommandsExcept;
    this._permissions = config.permissions;
    this._securityRole = config.securityRole;
    this._tenant = config.tenant;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_end - computed: false, optional: true, required: false
  private _accessEnd?: string; 
  public get accessEnd() {
    return this.getStringAttribute('access_end');
  }
  public set accessEnd(value: string) {
    this._accessEnd = value;
  }
  public resetAccessEnd() {
    this._accessEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessEndInput() {
    return this._accessEnd;
  }

  // access_start - computed: false, optional: true, required: false
  private _accessStart?: string; 
  public get accessStart() {
    return this.getStringAttribute('access_start');
  }
  public set accessStart(value: string) {
    this._accessStart = value;
  }
  public resetAccessStart() {
    this._accessStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessStartInput() {
    return this._accessStart;
  }

  // allow_commands - computed: false, optional: true, required: false
  private _allowCommands?: string; 
  public get allowCommands() {
    return this.getStringAttribute('allow_commands');
  }
  public set allowCommands(value: string) {
    this._allowCommands = value;
  }
  public resetAllowCommands() {
    this._allowCommands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCommandsInput() {
    return this._allowCommands;
  }

  // allow_commands_regexps - computed: false, optional: true, required: false
  private _allowCommandsRegexps?: string[]; 
  public get allowCommandsRegexps() {
    return this.getListAttribute('allow_commands_regexps');
  }
  public set allowCommandsRegexps(value: string[]) {
    this._allowCommandsRegexps = value;
  }
  public resetAllowCommandsRegexps() {
    this._allowCommandsRegexps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCommandsRegexpsInput() {
    return this._allowCommandsRegexps;
  }

  // allow_configuration - computed: false, optional: true, required: false
  private _allowConfiguration?: string; 
  public get allowConfiguration() {
    return this.getStringAttribute('allow_configuration');
  }
  public set allowConfiguration(value: string) {
    this._allowConfiguration = value;
  }
  public resetAllowConfiguration() {
    this._allowConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowConfigurationInput() {
    return this._allowConfiguration;
  }

  // allow_configuration_regexps - computed: false, optional: true, required: false
  private _allowConfigurationRegexps?: string[]; 
  public get allowConfigurationRegexps() {
    return this.getListAttribute('allow_configuration_regexps');
  }
  public set allowConfigurationRegexps(value: string[]) {
    this._allowConfigurationRegexps = value;
  }
  public resetAllowConfigurationRegexps() {
    this._allowConfigurationRegexps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowConfigurationRegexpsInput() {
    return this._allowConfigurationRegexps;
  }

  // allow_hidden_commands - computed: false, optional: true, required: false
  private _allowHiddenCommands?: boolean | cdktf.IResolvable; 
  public get allowHiddenCommands() {
    return this.getBooleanAttribute('allow_hidden_commands');
  }
  public set allowHiddenCommands(value: boolean | cdktf.IResolvable) {
    this._allowHiddenCommands = value;
  }
  public resetAllowHiddenCommands() {
    this._allowHiddenCommands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowHiddenCommandsInput() {
    return this._allowHiddenCommands;
  }

  // allowed_days - computed: false, optional: true, required: false
  private _allowedDays?: string[]; 
  public get allowedDays() {
    return this.getListAttribute('allowed_days');
  }
  public set allowedDays(value: string[]) {
    this._allowedDays = value;
  }
  public resetAllowedDays() {
    this._allowedDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedDaysInput() {
    return this._allowedDays;
  }

  // cli_prompt - computed: false, optional: true, required: false
  private _cliPrompt?: string; 
  public get cliPrompt() {
    return this.getStringAttribute('cli_prompt');
  }
  public set cliPrompt(value: string) {
    this._cliPrompt = value;
  }
  public resetCliPrompt() {
    this._cliPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliPromptInput() {
    return this._cliPrompt;
  }

  // configuration_breadcrumbs - computed: false, optional: true, required: false
  private _configurationBreadcrumbs?: boolean | cdktf.IResolvable; 
  public get configurationBreadcrumbs() {
    return this.getBooleanAttribute('configuration_breadcrumbs');
  }
  public set configurationBreadcrumbs(value: boolean | cdktf.IResolvable) {
    this._configurationBreadcrumbs = value;
  }
  public resetConfigurationBreadcrumbs() {
    this._configurationBreadcrumbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationBreadcrumbsInput() {
    return this._configurationBreadcrumbs;
  }

  // confirm_commands - computed: false, optional: true, required: false
  private _confirmCommands?: string[]; 
  public get confirmCommands() {
    return this.getListAttribute('confirm_commands');
  }
  public set confirmCommands(value: string[]) {
    this._confirmCommands = value;
  }
  public resetConfirmCommands() {
    this._confirmCommands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmCommandsInput() {
    return this._confirmCommands;
  }

  // deny_commands - computed: false, optional: true, required: false
  private _denyCommands?: string; 
  public get denyCommands() {
    return this.getStringAttribute('deny_commands');
  }
  public set denyCommands(value: string) {
    this._denyCommands = value;
  }
  public resetDenyCommands() {
    this._denyCommands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyCommandsInput() {
    return this._denyCommands;
  }

  // deny_commands_regexps - computed: false, optional: true, required: false
  private _denyCommandsRegexps?: string[]; 
  public get denyCommandsRegexps() {
    return this.getListAttribute('deny_commands_regexps');
  }
  public set denyCommandsRegexps(value: string[]) {
    this._denyCommandsRegexps = value;
  }
  public resetDenyCommandsRegexps() {
    this._denyCommandsRegexps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyCommandsRegexpsInput() {
    return this._denyCommandsRegexps;
  }

  // deny_configuration - computed: false, optional: true, required: false
  private _denyConfiguration?: string; 
  public get denyConfiguration() {
    return this.getStringAttribute('deny_configuration');
  }
  public set denyConfiguration(value: string) {
    this._denyConfiguration = value;
  }
  public resetDenyConfiguration() {
    this._denyConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyConfigurationInput() {
    return this._denyConfiguration;
  }

  // deny_configuration_regexps - computed: false, optional: true, required: false
  private _denyConfigurationRegexps?: string[]; 
  public get denyConfigurationRegexps() {
    return this.getListAttribute('deny_configuration_regexps');
  }
  public set denyConfigurationRegexps(value: string[]) {
    this._denyConfigurationRegexps = value;
  }
  public resetDenyConfigurationRegexps() {
    this._denyConfigurationRegexps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyConfigurationRegexpsInput() {
    return this._denyConfigurationRegexps;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: number; 
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }
  public set idleTimeout(value: number) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // logical_system - computed: false, optional: true, required: false
  private _logicalSystem?: string; 
  public get logicalSystem() {
    return this.getStringAttribute('logical_system');
  }
  public set logicalSystem(value: string) {
    this._logicalSystem = value;
  }
  public resetLogicalSystem() {
    this._logicalSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalSystemInput() {
    return this._logicalSystem;
  }

  // login_alarms - computed: false, optional: true, required: false
  private _loginAlarms?: boolean | cdktf.IResolvable; 
  public get loginAlarms() {
    return this.getBooleanAttribute('login_alarms');
  }
  public set loginAlarms(value: boolean | cdktf.IResolvable) {
    this._loginAlarms = value;
  }
  public resetLoginAlarms() {
    this._loginAlarms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginAlarmsInput() {
    return this._loginAlarms;
  }

  // login_script - computed: false, optional: true, required: false
  private _loginScript?: string; 
  public get loginScript() {
    return this.getStringAttribute('login_script');
  }
  public set loginScript(value: string) {
    this._loginScript = value;
  }
  public resetLoginScript() {
    this._loginScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginScriptInput() {
    return this._loginScript;
  }

  // login_tip - computed: false, optional: true, required: false
  private _loginTip?: boolean | cdktf.IResolvable; 
  public get loginTip() {
    return this.getBooleanAttribute('login_tip');
  }
  public set loginTip(value: boolean | cdktf.IResolvable) {
    this._loginTip = value;
  }
  public resetLoginTip() {
    this._loginTip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginTipInput() {
    return this._loginTip;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // no_hidden_commands_except - computed: false, optional: true, required: false
  private _noHiddenCommandsExcept?: string[]; 
  public get noHiddenCommandsExcept() {
    return this.getListAttribute('no_hidden_commands_except');
  }
  public set noHiddenCommandsExcept(value: string[]) {
    this._noHiddenCommandsExcept = value;
  }
  public resetNoHiddenCommandsExcept() {
    this._noHiddenCommandsExcept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noHiddenCommandsExceptInput() {
    return this._noHiddenCommandsExcept;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions?: string[]; 
  public get permissions() {
    return cdktf.Fn.tolist(this.getListAttribute('permissions'));
  }
  public set permissions(value: string[]) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // security_role - computed: false, optional: true, required: false
  private _securityRole?: string; 
  public get securityRole() {
    return this.getStringAttribute('security_role');
  }
  public set securityRole(value: string) {
    this._securityRole = value;
  }
  public resetSecurityRole() {
    this._securityRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityRoleInput() {
    return this._securityRole;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_end: cdktf.stringToTerraform(this._accessEnd),
      access_start: cdktf.stringToTerraform(this._accessStart),
      allow_commands: cdktf.stringToTerraform(this._allowCommands),
      allow_commands_regexps: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowCommandsRegexps),
      allow_configuration: cdktf.stringToTerraform(this._allowConfiguration),
      allow_configuration_regexps: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowConfigurationRegexps),
      allow_hidden_commands: cdktf.booleanToTerraform(this._allowHiddenCommands),
      allowed_days: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedDays),
      cli_prompt: cdktf.stringToTerraform(this._cliPrompt),
      configuration_breadcrumbs: cdktf.booleanToTerraform(this._configurationBreadcrumbs),
      confirm_commands: cdktf.listMapper(cdktf.stringToTerraform, false)(this._confirmCommands),
      deny_commands: cdktf.stringToTerraform(this._denyCommands),
      deny_commands_regexps: cdktf.listMapper(cdktf.stringToTerraform, false)(this._denyCommandsRegexps),
      deny_configuration: cdktf.stringToTerraform(this._denyConfiguration),
      deny_configuration_regexps: cdktf.listMapper(cdktf.stringToTerraform, false)(this._denyConfigurationRegexps),
      idle_timeout: cdktf.numberToTerraform(this._idleTimeout),
      logical_system: cdktf.stringToTerraform(this._logicalSystem),
      login_alarms: cdktf.booleanToTerraform(this._loginAlarms),
      login_script: cdktf.stringToTerraform(this._loginScript),
      login_tip: cdktf.booleanToTerraform(this._loginTip),
      name: cdktf.stringToTerraform(this._name),
      no_hidden_commands_except: cdktf.listMapper(cdktf.stringToTerraform, false)(this._noHiddenCommandsExcept),
      permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._permissions),
      security_role: cdktf.stringToTerraform(this._securityRole),
      tenant: cdktf.stringToTerraform(this._tenant),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_end: {
        value: cdktf.stringToHclTerraform(this._accessEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_start: {
        value: cdktf.stringToHclTerraform(this._accessStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_commands: {
        value: cdktf.stringToHclTerraform(this._allowCommands),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_commands_regexps: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowCommandsRegexps),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      allow_configuration: {
        value: cdktf.stringToHclTerraform(this._allowConfiguration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_configuration_regexps: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowConfigurationRegexps),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      allow_hidden_commands: {
        value: cdktf.booleanToHclTerraform(this._allowHiddenCommands),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_days: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedDays),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      cli_prompt: {
        value: cdktf.stringToHclTerraform(this._cliPrompt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration_breadcrumbs: {
        value: cdktf.booleanToHclTerraform(this._configurationBreadcrumbs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      confirm_commands: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._confirmCommands),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      deny_commands: {
        value: cdktf.stringToHclTerraform(this._denyCommands),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deny_commands_regexps: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._denyCommandsRegexps),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      deny_configuration: {
        value: cdktf.stringToHclTerraform(this._denyConfiguration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deny_configuration_regexps: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._denyConfigurationRegexps),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      idle_timeout: {
        value: cdktf.numberToHclTerraform(this._idleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      logical_system: {
        value: cdktf.stringToHclTerraform(this._logicalSystem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_alarms: {
        value: cdktf.booleanToHclTerraform(this._loginAlarms),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      login_script: {
        value: cdktf.stringToHclTerraform(this._loginScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_tip: {
        value: cdktf.booleanToHclTerraform(this._loginTip),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_hidden_commands_except: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._noHiddenCommandsExcept),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._permissions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      security_role: {
        value: cdktf.stringToHclTerraform(this._securityRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant: {
        value: cdktf.stringToHclTerraform(this._tenant),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
