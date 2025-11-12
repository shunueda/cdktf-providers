// https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BetteruptimeMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Basic HTTP authentication password to include with the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor#auth_password BetteruptimeMonitor#auth_password}
  */
  readonly authPassword?: string;
  /**
  * Basic HTTP authentication username to include with the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor#auth_username BetteruptimeMonitor#auth_username}
  */
  readonly authUsername?: string;
  /**
  * Whether to call when a new incident is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor#call BetteruptimeMonitor#call}
  */
  readonly call?: boolean | cdktf.IResolvable;
  /**
  * How often should we check your website? In seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor#check_frequency BetteruptimeMonitor#check_frequency}
  */
  readonly checkFrequency?: number;
  /**
  * How long should we wait after observing a failure before we start a new incident? In seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor#confirmation_period BetteruptimeMonitor#confirmation_period}
  */
  readonly confirmationPeriod?: number;
  /**
  * Whether to send a critical push notification that ignores the mute switch and Do not Disturb mode when a new incident is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor#critical_alert BetteruptimeMonitor#critical_alert}
  */
  readonly criticalAlert?: boolean | cdktf.IResolvable;
  /**
  * How many days before the domain expires do you want to be alerted? Valid values are 1, 2, 3, 7, 14, 30, and 60. Set to -1 to disable domain expiration check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor#domain_expiration BetteruptimeMonitor#domain_expiration}
  */
  readonly domainExpiration?: number;
  /**
  * Whether to send an email when a new incident is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor#email BetteruptimeMonitor#email}
  */
  readonly email?: boolean | cdktf.IResolvable;
  /**
  * For Playwright monitors, the environment variables that can be used in the scenario. Example: `{ "PASSWORD" = "passw0rd" }`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor#environment_variables BetteruptimeMonitor#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * Required if monitor_type is set to expected_status_code. We will create a new incident if the status code returned from the server is not in the list of expected status codes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor#expected_status_codes BetteruptimeMonitor#expected_status_codes}
  */
  readonly expectedStatusCodes?: number[];
  /**
  * Set the expiration escalation policy for the monitor. It is used for SSL certificate and domain expiration checks. When set to null, an e-mail is sent to the entire team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor#expiration_policy_id BetteruptimeMonitor#expiration_policy_id}
  */
  readonly expirationPolicyId?: number;
  /**
  * Set to true for the monitor to follow redirects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor#follow_redirects BetteruptimeMonitor#follow_redirects}
  */
  readonly followRedirects?: boolean | cdktf.IResolvable;
  /**
  * HTTP Method used to make a request. Valid options: GET, HEAD, POST, PUT, PATCH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor#http_method BetteruptimeMonitor#http_method}
  */
  readonly httpMethod?: string;
  /**
  * Valid values:
  * 
  *     `ipv4` Use IPv4 only,
  * 
  *     `ipv6` Use IPv6 only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor#ip_version BetteruptimeMonitor#ip_version}
  */
  readonly ipVersion?: string;
  /**
  * An array of maintenance days to set. If a maintenance window is overnight both affected days should be set. Allowed values are ["mon", "tue", "wed", "thu", "fri", "sat", "sun"] or any subset of these days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor#maintenance_days BetteruptimeMonitor#maintenance_days}
  */
  readonly maintenanceDays?: string[];
  /**
  * Start of the maintenance window each day. We won't check your website during this window. Example: "01:00:00"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor#maintenance_from BetteruptimeMonitor#maintenance_from}
  */
  readonly maintenanceFrom?: string;
  /**
  * The timezone to use for the maintenance window each day. Defaults to UTC. The accepted values can be found in the Rails TimeZone documentation. https://api.rubyonrails.org/classes/ActiveSupport/TimeZone.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor#maintenance_timezone BetteruptimeMonitor#maintenance_timezone}
  */
  readonly maintenanceTimezone?: string;
  /**
  * End of the maintenance window each day. Example: "03:00:00"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor#maintenance_to BetteruptimeMonitor#maintenance_to}
  */
  readonly maintenanceTo?: string;
  /**
  * Set this attribute if you want to add this monitor to a monitor group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor#monitor_group_id BetteruptimeMonitor#monitor_group_id}
  */
  readonly monitorGroupId?: number;
  /**
  * Valid values:
  * 
  *     `status` We will check your website for 2XX HTTP status code.
  * 
  * 	`expected_status_code` We will check if your website returned one of the values in expected_status_codes.
  * 
  *     `keyword` We will check if your website contains the required_keyword.
  * 
  *     `keyword_absence` We will check if your website doesn't contain the required_keyword.
  * 
  *     `ping` We will ping your host specified in the url parameter.
  * 
  *     `tcp` We will test a TCP port at your host specified in the url parameter
  * (port is required).
  * 
  *     `udp` We will test a UDP port at your host specified in the url parameter
  * (port and required_keyword are required).
  * 
  *     `smtp` We will check for a SMTP server at the host specified in the url parameter
  * (port is required, and can be one of 25, 465, 587, or a combination of those ports separated by comma).
  * 
  *     `pop` We will check for a POP3 server at the host specified in the url parameter
  * (port is required, and can be 110, 995, or both).
  * 
  *     `imap` We will check for an IMAP server at the host specified in the url parameter
  * (port is required, and can be 143, 993, or both).
  * 
  *     `dns` We will check for a DNS server at the host specified in the url parameter
  * (request_body is required, and should contain the domain to query the DNS server with).
  * 
  *     `playwright` We will run the scenario defined by playwright_script, identified in the UI by scenario_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor#monitor_type BetteruptimeMonitor#monitor_type}
  */
  readonly monitorType: string;
  /**
  * Set to true to pause monitoring - we won't notify you about downtime. Set to false to resume monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor#paused BetteruptimeMonitor#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * For Playwright monitors, the JavaScript source code of the scenario.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor#playwright_script BetteruptimeMonitor#playwright_script}
  */
  readonly playwrightScript?: string;
  /**
  * Set the escalation policy for the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor#policy_id BetteruptimeMonitor#policy_id}
  */
  readonly policyId?: string;
  /**
  * Required if monitor_type is set to tcp, udp, smtp, pop, or imap. tcp and udp monitors accept any ports, while smtp, pop, and imap accept only the specified ports corresponding with their servers (e.g. "25,465,587" for smtp).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor#port BetteruptimeMonitor#port}
  */
  readonly port?: string;
  /**
  * Pronounceable name of the monitor. We will use this when we call you. Try to make it tongue-friendly, please?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor#pronounceable_name BetteruptimeMonitor#pronounceable_name}
  */
  readonly pronounceableName?: string;
  /**
  * Whether to send a push notification when a new incident is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor#push BetteruptimeMonitor#push}
  */
  readonly push?: boolean | cdktf.IResolvable;
  /**
  * How long the monitor must be up to automatically mark an incident as resolved after being down. In seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor#recovery_period BetteruptimeMonitor#recovery_period}
  */
  readonly recoveryPeriod?: number;
  /**
  * An array of regions to set. Allowed values are ["us", "eu", "as", "au"] or any subset of these regions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor#regions BetteruptimeMonitor#regions}
  */
  readonly regions?: string[];
  /**
  * Set to true to keep cookies when redirecting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor#remember_cookies BetteruptimeMonitor#remember_cookies}
  */
  readonly rememberCookies?: boolean | cdktf.IResolvable;
  /**
  * Request body for POST, PUT, PATCH requests. Required if monitor_type is set to dns (domain to query the DNS server with).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor#request_body BetteruptimeMonitor#request_body}
  */
  readonly requestBody?: string;
  /**
  * An array of request headers, consisting of name and value pairs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor#request_headers BetteruptimeMonitor#request_headers}
  */
  readonly requestHeaders?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * How long to wait before timing out the request?
  *   - For Server and Port monitors (types `ping`, `tcp`, `udp`, `smtp`, `pop`, `imap` and `dns`) the timeout is specified in *milliseconds*. Valid options: 500, 1000, 2000, 3000, 5000.
  *   - For Playwright monitors (type `playwright`), this determines the Playwright scenario timeout instead in *seconds*. Valid options: 15, 30, 45, 60.
  *   - For all other monitors, the timeout is specified in *seconds*. Valid options: 2, 3, 5, 10, 15, 30, 45, 60.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor#request_timeout BetteruptimeMonitor#request_timeout}
  */
  readonly requestTimeout?: number;
  /**
  * Required if monitor_type is set to keyword  or udp. We will create a new incident if this keyword is missing on your page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor#required_keyword BetteruptimeMonitor#required_keyword}
  */
  readonly requiredKeyword?: string;
  /**
  * For Playwright monitors, the scenario name identifying the monitor in the UI. For Playwright monitors, either `url` or `scenario_name` must be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor#scenario_name BetteruptimeMonitor#scenario_name}
  */
  readonly scenarioName?: string;
  /**
  * Whether to send an SMS when a new incident is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor#sms BetteruptimeMonitor#sms}
  */
  readonly sms?: boolean | cdktf.IResolvable;
  /**
  * How many days before the SSL certificate expires do you want to be alerted? Valid values are 1, 2, 3, 7, 14, 30, and 60. Set to -1 to disable SSL expiration check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor#ssl_expiration BetteruptimeMonitor#ssl_expiration}
  */
  readonly sslExpiration?: number;
  /**
  * Used to specify the team the resource should be created in when using global tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor#team_name BetteruptimeMonitor#team_name}
  */
  readonly teamName?: string;
  /**
  * How long to wait before escalating the incident alert to the team. Leave blank to disable escalating to the entire team. In seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor#team_wait BetteruptimeMonitor#team_wait}
  */
  readonly teamWait?: number;
  /**
  * URL of your website or the host you want to ping (see monitor_type below). Required for all monitor types except Playwright. For Playwright monitors, either `url` or `scenario_name` must be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor#url BetteruptimeMonitor#url}
  */
  readonly url?: string;
  /**
  * Should we verify SSL certificate validity?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor#verify_ssl BetteruptimeMonitor#verify_ssl}
  */
  readonly verifySsl?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor betteruptime_monitor}
*/
export class BetteruptimeMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "betteruptime_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BetteruptimeMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BetteruptimeMonitor to import
  * @param importFromId The id of the existing BetteruptimeMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BetteruptimeMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "betteruptime_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor betteruptime_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BetteruptimeMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: BetteruptimeMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'betteruptime_monitor',
      terraformGeneratorMetadata: {
        providerName: 'better-uptime',
        providerVersion: '0.20.4',
        providerVersionConstraint: '0.20.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authPassword = config.authPassword;
    this._authUsername = config.authUsername;
    this._call = config.call;
    this._checkFrequency = config.checkFrequency;
    this._confirmationPeriod = config.confirmationPeriod;
    this._criticalAlert = config.criticalAlert;
    this._domainExpiration = config.domainExpiration;
    this._email = config.email;
    this._environmentVariables = config.environmentVariables;
    this._expectedStatusCodes = config.expectedStatusCodes;
    this._expirationPolicyId = config.expirationPolicyId;
    this._followRedirects = config.followRedirects;
    this._httpMethod = config.httpMethod;
    this._ipVersion = config.ipVersion;
    this._maintenanceDays = config.maintenanceDays;
    this._maintenanceFrom = config.maintenanceFrom;
    this._maintenanceTimezone = config.maintenanceTimezone;
    this._maintenanceTo = config.maintenanceTo;
    this._monitorGroupId = config.monitorGroupId;
    this._monitorType = config.monitorType;
    this._paused = config.paused;
    this._playwrightScript = config.playwrightScript;
    this._policyId = config.policyId;
    this._port = config.port;
    this._pronounceableName = config.pronounceableName;
    this._push = config.push;
    this._recoveryPeriod = config.recoveryPeriod;
    this._regions = config.regions;
    this._rememberCookies = config.rememberCookies;
    this._requestBody = config.requestBody;
    this._requestHeaders = config.requestHeaders;
    this._requestTimeout = config.requestTimeout;
    this._requiredKeyword = config.requiredKeyword;
    this._scenarioName = config.scenarioName;
    this._sms = config.sms;
    this._sslExpiration = config.sslExpiration;
    this._teamName = config.teamName;
    this._teamWait = config.teamWait;
    this._url = config.url;
    this._verifySsl = config.verifySsl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_password - computed: false, optional: true, required: false
  private _authPassword?: string; 
  public get authPassword() {
    return this.getStringAttribute('auth_password');
  }
  public set authPassword(value: string) {
    this._authPassword = value;
  }
  public resetAuthPassword() {
    this._authPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPasswordInput() {
    return this._authPassword;
  }

  // auth_username - computed: false, optional: true, required: false
  private _authUsername?: string; 
  public get authUsername() {
    return this.getStringAttribute('auth_username');
  }
  public set authUsername(value: string) {
    this._authUsername = value;
  }
  public resetAuthUsername() {
    this._authUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUsernameInput() {
    return this._authUsername;
  }

  // call - computed: true, optional: true, required: false
  private _call?: boolean | cdktf.IResolvable; 
  public get call() {
    return this.getBooleanAttribute('call');
  }
  public set call(value: boolean | cdktf.IResolvable) {
    this._call = value;
  }
  public resetCall() {
    this._call = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callInput() {
    return this._call;
  }

  // check_frequency - computed: true, optional: true, required: false
  private _checkFrequency?: number; 
  public get checkFrequency() {
    return this.getNumberAttribute('check_frequency');
  }
  public set checkFrequency(value: number) {
    this._checkFrequency = value;
  }
  public resetCheckFrequency() {
    this._checkFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkFrequencyInput() {
    return this._checkFrequency;
  }

  // confirmation_period - computed: true, optional: true, required: false
  private _confirmationPeriod?: number; 
  public get confirmationPeriod() {
    return this.getNumberAttribute('confirmation_period');
  }
  public set confirmationPeriod(value: number) {
    this._confirmationPeriod = value;
  }
  public resetConfirmationPeriod() {
    this._confirmationPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmationPeriodInput() {
    return this._confirmationPeriod;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // critical_alert - computed: true, optional: true, required: false
  private _criticalAlert?: boolean | cdktf.IResolvable; 
  public get criticalAlert() {
    return this.getBooleanAttribute('critical_alert');
  }
  public set criticalAlert(value: boolean | cdktf.IResolvable) {
    this._criticalAlert = value;
  }
  public resetCriticalAlert() {
    this._criticalAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalAlertInput() {
    return this._criticalAlert;
  }

  // domain_expiration - computed: true, optional: true, required: false
  private _domainExpiration?: number; 
  public get domainExpiration() {
    return this.getNumberAttribute('domain_expiration');
  }
  public set domainExpiration(value: number) {
    this._domainExpiration = value;
  }
  public resetDomainExpiration() {
    this._domainExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainExpirationInput() {
    return this._domainExpiration;
  }

  // email - computed: true, optional: true, required: false
  private _email?: boolean | cdktf.IResolvable; 
  public get email() {
    return this.getBooleanAttribute('email');
  }
  public set email(value: boolean | cdktf.IResolvable) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // environment_variables - computed: true, optional: true, required: false
  private _environmentVariables?: { [key: string]: string }; 
  public get environmentVariables() {
    return this.getStringMapAttribute('environment_variables');
  }
  public set environmentVariables(value: { [key: string]: string }) {
    this._environmentVariables = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables;
  }

  // expected_status_codes - computed: false, optional: true, required: false
  private _expectedStatusCodes?: number[]; 
  public get expectedStatusCodes() {
    return this.getNumberListAttribute('expected_status_codes');
  }
  public set expectedStatusCodes(value: number[]) {
    this._expectedStatusCodes = value;
  }
  public resetExpectedStatusCodes() {
    this._expectedStatusCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedStatusCodesInput() {
    return this._expectedStatusCodes;
  }

  // expiration_policy_id - computed: false, optional: true, required: false
  private _expirationPolicyId?: number; 
  public get expirationPolicyId() {
    return this.getNumberAttribute('expiration_policy_id');
  }
  public set expirationPolicyId(value: number) {
    this._expirationPolicyId = value;
  }
  public resetExpirationPolicyId() {
    this._expirationPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationPolicyIdInput() {
    return this._expirationPolicyId;
  }

  // follow_redirects - computed: true, optional: true, required: false
  private _followRedirects?: boolean | cdktf.IResolvable; 
  public get followRedirects() {
    return this.getBooleanAttribute('follow_redirects');
  }
  public set followRedirects(value: boolean | cdktf.IResolvable) {
    this._followRedirects = value;
  }
  public resetFollowRedirects() {
    this._followRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followRedirectsInput() {
    return this._followRedirects;
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod?: string; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  public resetHttpMethod() {
    this._httpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_version - computed: true, optional: true, required: false
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }

  // last_checked_at - computed: true, optional: false, required: false
  public get lastCheckedAt() {
    return this.getStringAttribute('last_checked_at');
  }

  // maintenance_days - computed: true, optional: true, required: false
  private _maintenanceDays?: string[]; 
  public get maintenanceDays() {
    return this.getListAttribute('maintenance_days');
  }
  public set maintenanceDays(value: string[]) {
    this._maintenanceDays = value;
  }
  public resetMaintenanceDays() {
    this._maintenanceDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceDaysInput() {
    return this._maintenanceDays;
  }

  // maintenance_from - computed: true, optional: true, required: false
  private _maintenanceFrom?: string; 
  public get maintenanceFrom() {
    return this.getStringAttribute('maintenance_from');
  }
  public set maintenanceFrom(value: string) {
    this._maintenanceFrom = value;
  }
  public resetMaintenanceFrom() {
    this._maintenanceFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceFromInput() {
    return this._maintenanceFrom;
  }

  // maintenance_timezone - computed: true, optional: true, required: false
  private _maintenanceTimezone?: string; 
  public get maintenanceTimezone() {
    return this.getStringAttribute('maintenance_timezone');
  }
  public set maintenanceTimezone(value: string) {
    this._maintenanceTimezone = value;
  }
  public resetMaintenanceTimezone() {
    this._maintenanceTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceTimezoneInput() {
    return this._maintenanceTimezone;
  }

  // maintenance_to - computed: true, optional: true, required: false
  private _maintenanceTo?: string; 
  public get maintenanceTo() {
    return this.getStringAttribute('maintenance_to');
  }
  public set maintenanceTo(value: string) {
    this._maintenanceTo = value;
  }
  public resetMaintenanceTo() {
    this._maintenanceTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceToInput() {
    return this._maintenanceTo;
  }

  // monitor_group_id - computed: true, optional: true, required: false
  private _monitorGroupId?: number; 
  public get monitorGroupId() {
    return this.getNumberAttribute('monitor_group_id');
  }
  public set monitorGroupId(value: number) {
    this._monitorGroupId = value;
  }
  public resetMonitorGroupId() {
    this._monitorGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorGroupIdInput() {
    return this._monitorGroupId;
  }

  // monitor_type - computed: false, optional: false, required: true
  private _monitorType?: string; 
  public get monitorType() {
    return this.getStringAttribute('monitor_type');
  }
  public set monitorType(value: string) {
    this._monitorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorTypeInput() {
    return this._monitorType;
  }

  // paused - computed: true, optional: true, required: false
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
  }

  // paused_at - computed: true, optional: false, required: false
  public get pausedAt() {
    return this.getStringAttribute('paused_at');
  }

  // playwright_script - computed: false, optional: true, required: false
  private _playwrightScript?: string; 
  public get playwrightScript() {
    return this.getStringAttribute('playwright_script');
  }
  public set playwrightScript(value: string) {
    this._playwrightScript = value;
  }
  public resetPlaywrightScript() {
    this._playwrightScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get playwrightScriptInput() {
    return this._playwrightScript;
  }

  // policy_id - computed: true, optional: true, required: false
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // pronounceable_name - computed: true, optional: true, required: false
  private _pronounceableName?: string; 
  public get pronounceableName() {
    return this.getStringAttribute('pronounceable_name');
  }
  public set pronounceableName(value: string) {
    this._pronounceableName = value;
  }
  public resetPronounceableName() {
    this._pronounceableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pronounceableNameInput() {
    return this._pronounceableName;
  }

  // push - computed: true, optional: true, required: false
  private _push?: boolean | cdktf.IResolvable; 
  public get push() {
    return this.getBooleanAttribute('push');
  }
  public set push(value: boolean | cdktf.IResolvable) {
    this._push = value;
  }
  public resetPush() {
    this._push = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushInput() {
    return this._push;
  }

  // recovery_period - computed: true, optional: true, required: false
  private _recoveryPeriod?: number; 
  public get recoveryPeriod() {
    return this.getNumberAttribute('recovery_period');
  }
  public set recoveryPeriod(value: number) {
    this._recoveryPeriod = value;
  }
  public resetRecoveryPeriod() {
    this._recoveryPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryPeriodInput() {
    return this._recoveryPeriod;
  }

  // regions - computed: true, optional: true, required: false
  private _regions?: string[]; 
  public get regions() {
    return this.getListAttribute('regions');
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // remember_cookies - computed: true, optional: true, required: false
  private _rememberCookies?: boolean | cdktf.IResolvable; 
  public get rememberCookies() {
    return this.getBooleanAttribute('remember_cookies');
  }
  public set rememberCookies(value: boolean | cdktf.IResolvable) {
    this._rememberCookies = value;
  }
  public resetRememberCookies() {
    this._rememberCookies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rememberCookiesInput() {
    return this._rememberCookies;
  }

  // request_body - computed: false, optional: true, required: false
  private _requestBody?: string; 
  public get requestBody() {
    return this.getStringAttribute('request_body');
  }
  public set requestBody(value: string) {
    this._requestBody = value;
  }
  public resetRequestBody() {
    this._requestBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBodyInput() {
    return this._requestBody;
  }

  // request_headers - computed: false, optional: true, required: false
  private _requestHeaders?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get requestHeaders() {
    return this.interpolationForAttribute('request_headers');
  }
  public set requestHeaders(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._requestHeaders = value;
  }
  public resetRequestHeaders() {
    this._requestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersInput() {
    return this._requestHeaders;
  }

  // request_timeout - computed: true, optional: true, required: false
  private _requestTimeout?: number; 
  public get requestTimeout() {
    return this.getNumberAttribute('request_timeout');
  }
  public set requestTimeout(value: number) {
    this._requestTimeout = value;
  }
  public resetRequestTimeout() {
    this._requestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutInput() {
    return this._requestTimeout;
  }

  // required_keyword - computed: false, optional: true, required: false
  private _requiredKeyword?: string; 
  public get requiredKeyword() {
    return this.getStringAttribute('required_keyword');
  }
  public set requiredKeyword(value: string) {
    this._requiredKeyword = value;
  }
  public resetRequiredKeyword() {
    this._requiredKeyword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredKeywordInput() {
    return this._requiredKeyword;
  }

  // scenario_name - computed: false, optional: true, required: false
  private _scenarioName?: string; 
  public get scenarioName() {
    return this.getStringAttribute('scenario_name');
  }
  public set scenarioName(value: string) {
    this._scenarioName = value;
  }
  public resetScenarioName() {
    this._scenarioName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scenarioNameInput() {
    return this._scenarioName;
  }

  // sms - computed: true, optional: true, required: false
  private _sms?: boolean | cdktf.IResolvable; 
  public get sms() {
    return this.getBooleanAttribute('sms');
  }
  public set sms(value: boolean | cdktf.IResolvable) {
    this._sms = value;
  }
  public resetSms() {
    this._sms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsInput() {
    return this._sms;
  }

  // ssl_expiration - computed: true, optional: true, required: false
  private _sslExpiration?: number; 
  public get sslExpiration() {
    return this.getNumberAttribute('ssl_expiration');
  }
  public set sslExpiration(value: number) {
    this._sslExpiration = value;
  }
  public resetSslExpiration() {
    this._sslExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslExpirationInput() {
    return this._sslExpiration;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // team_name - computed: false, optional: true, required: false
  private _teamName?: string; 
  public get teamName() {
    return this.getStringAttribute('team_name');
  }
  public set teamName(value: string) {
    this._teamName = value;
  }
  public resetTeamName() {
    this._teamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamNameInput() {
    return this._teamName;
  }

  // team_wait - computed: true, optional: true, required: false
  private _teamWait?: number; 
  public get teamWait() {
    return this.getNumberAttribute('team_wait');
  }
  public set teamWait(value: number) {
    this._teamWait = value;
  }
  public resetTeamWait() {
    this._teamWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamWaitInput() {
    return this._teamWait;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // verify_ssl - computed: true, optional: true, required: false
  private _verifySsl?: boolean | cdktf.IResolvable; 
  public get verifySsl() {
    return this.getBooleanAttribute('verify_ssl');
  }
  public set verifySsl(value: boolean | cdktf.IResolvable) {
    this._verifySsl = value;
  }
  public resetVerifySsl() {
    this._verifySsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifySslInput() {
    return this._verifySsl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_password: cdktf.stringToTerraform(this._authPassword),
      auth_username: cdktf.stringToTerraform(this._authUsername),
      call: cdktf.booleanToTerraform(this._call),
      check_frequency: cdktf.numberToTerraform(this._checkFrequency),
      confirmation_period: cdktf.numberToTerraform(this._confirmationPeriod),
      critical_alert: cdktf.booleanToTerraform(this._criticalAlert),
      domain_expiration: cdktf.numberToTerraform(this._domainExpiration),
      email: cdktf.booleanToTerraform(this._email),
      environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(this._environmentVariables),
      expected_status_codes: cdktf.listMapper(cdktf.numberToTerraform, false)(this._expectedStatusCodes),
      expiration_policy_id: cdktf.numberToTerraform(this._expirationPolicyId),
      follow_redirects: cdktf.booleanToTerraform(this._followRedirects),
      http_method: cdktf.stringToTerraform(this._httpMethod),
      ip_version: cdktf.stringToTerraform(this._ipVersion),
      maintenance_days: cdktf.listMapper(cdktf.stringToTerraform, false)(this._maintenanceDays),
      maintenance_from: cdktf.stringToTerraform(this._maintenanceFrom),
      maintenance_timezone: cdktf.stringToTerraform(this._maintenanceTimezone),
      maintenance_to: cdktf.stringToTerraform(this._maintenanceTo),
      monitor_group_id: cdktf.numberToTerraform(this._monitorGroupId),
      monitor_type: cdktf.stringToTerraform(this._monitorType),
      paused: cdktf.booleanToTerraform(this._paused),
      playwright_script: cdktf.stringToTerraform(this._playwrightScript),
      policy_id: cdktf.stringToTerraform(this._policyId),
      port: cdktf.stringToTerraform(this._port),
      pronounceable_name: cdktf.stringToTerraform(this._pronounceableName),
      push: cdktf.booleanToTerraform(this._push),
      recovery_period: cdktf.numberToTerraform(this._recoveryPeriod),
      regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._regions),
      remember_cookies: cdktf.booleanToTerraform(this._rememberCookies),
      request_body: cdktf.stringToTerraform(this._requestBody),
      request_headers: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(this._requestHeaders),
      request_timeout: cdktf.numberToTerraform(this._requestTimeout),
      required_keyword: cdktf.stringToTerraform(this._requiredKeyword),
      scenario_name: cdktf.stringToTerraform(this._scenarioName),
      sms: cdktf.booleanToTerraform(this._sms),
      ssl_expiration: cdktf.numberToTerraform(this._sslExpiration),
      team_name: cdktf.stringToTerraform(this._teamName),
      team_wait: cdktf.numberToTerraform(this._teamWait),
      url: cdktf.stringToTerraform(this._url),
      verify_ssl: cdktf.booleanToTerraform(this._verifySsl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_password: {
        value: cdktf.stringToHclTerraform(this._authPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_username: {
        value: cdktf.stringToHclTerraform(this._authUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      call: {
        value: cdktf.booleanToHclTerraform(this._call),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      check_frequency: {
        value: cdktf.numberToHclTerraform(this._checkFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      confirmation_period: {
        value: cdktf.numberToHclTerraform(this._confirmationPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      critical_alert: {
        value: cdktf.booleanToHclTerraform(this._criticalAlert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      domain_expiration: {
        value: cdktf.numberToHclTerraform(this._domainExpiration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      email: {
        value: cdktf.booleanToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      environment_variables: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._environmentVariables),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      expected_status_codes: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._expectedStatusCodes),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      expiration_policy_id: {
        value: cdktf.numberToHclTerraform(this._expirationPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      follow_redirects: {
        value: cdktf.booleanToHclTerraform(this._followRedirects),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      http_method: {
        value: cdktf.stringToHclTerraform(this._httpMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_version: {
        value: cdktf.stringToHclTerraform(this._ipVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_days: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._maintenanceDays),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      maintenance_from: {
        value: cdktf.stringToHclTerraform(this._maintenanceFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_timezone: {
        value: cdktf.stringToHclTerraform(this._maintenanceTimezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_to: {
        value: cdktf.stringToHclTerraform(this._maintenanceTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor_group_id: {
        value: cdktf.numberToHclTerraform(this._monitorGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitor_type: {
        value: cdktf.stringToHclTerraform(this._monitorType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      paused: {
        value: cdktf.booleanToHclTerraform(this._paused),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      playwright_script: {
        value: cdktf.stringToHclTerraform(this._playwrightScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_id: {
        value: cdktf.stringToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pronounceable_name: {
        value: cdktf.stringToHclTerraform(this._pronounceableName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      push: {
        value: cdktf.booleanToHclTerraform(this._push),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      recovery_period: {
        value: cdktf.numberToHclTerraform(this._recoveryPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      regions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._regions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      remember_cookies: {
        value: cdktf.booleanToHclTerraform(this._rememberCookies),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      request_body: {
        value: cdktf.stringToHclTerraform(this._requestBody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_headers: {
        value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(this._requestHeaders),
        isBlock: false,
        type: "list",
        storageClassType: "stringMapList",
      },
      request_timeout: {
        value: cdktf.numberToHclTerraform(this._requestTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      required_keyword: {
        value: cdktf.stringToHclTerraform(this._requiredKeyword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scenario_name: {
        value: cdktf.stringToHclTerraform(this._scenarioName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sms: {
        value: cdktf.booleanToHclTerraform(this._sms),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssl_expiration: {
        value: cdktf.numberToHclTerraform(this._sslExpiration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      team_name: {
        value: cdktf.stringToHclTerraform(this._teamName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      team_wait: {
        value: cdktf.numberToHclTerraform(this._teamWait),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verify_ssl: {
        value: cdktf.booleanToHclTerraform(this._verifySsl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
