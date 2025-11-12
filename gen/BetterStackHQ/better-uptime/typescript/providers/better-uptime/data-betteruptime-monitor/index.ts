// https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/data-sources/betteruptime_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBetteruptimeMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * URL of your website or the host you want to ping (see monitor_type below). Required for all monitor types except Playwright. For Playwright monitors, either `url` or `scenario_name` must be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/data-sources/betteruptime_monitor#url DataBetteruptimeMonitor#url}
  */
  readonly url: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/data-sources/betteruptime_monitor betteruptime_monitor}
*/
export class DataBetteruptimeMonitor extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "betteruptime_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBetteruptimeMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBetteruptimeMonitor to import
  * @param importFromId The id of the existing DataBetteruptimeMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/data-sources/betteruptime_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBetteruptimeMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "betteruptime_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/data-sources/betteruptime_monitor betteruptime_monitor} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBetteruptimeMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: DataBetteruptimeMonitorConfig) {
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
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_password - computed: true, optional: false, required: false
  public get authPassword() {
    return this.getStringAttribute('auth_password');
  }

  // auth_username - computed: true, optional: false, required: false
  public get authUsername() {
    return this.getStringAttribute('auth_username');
  }

  // call - computed: true, optional: false, required: false
  public get call() {
    return this.getBooleanAttribute('call');
  }

  // check_frequency - computed: true, optional: false, required: false
  public get checkFrequency() {
    return this.getNumberAttribute('check_frequency');
  }

  // confirmation_period - computed: true, optional: false, required: false
  public get confirmationPeriod() {
    return this.getNumberAttribute('confirmation_period');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // critical_alert - computed: true, optional: false, required: false
  public get criticalAlert() {
    return this.getBooleanAttribute('critical_alert');
  }

  // domain_expiration - computed: true, optional: false, required: false
  public get domainExpiration() {
    return this.getNumberAttribute('domain_expiration');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getBooleanAttribute('email');
  }

  // environment_variables - computed: true, optional: false, required: false
  private _environmentVariables = new cdktf.StringMap(this, "environment_variables");
  public get environmentVariables() {
    return this._environmentVariables;
  }

  // expected_status_codes - computed: true, optional: false, required: false
  public get expectedStatusCodes() {
    return this.getNumberListAttribute('expected_status_codes');
  }

  // expiration_policy_id - computed: true, optional: false, required: false
  public get expirationPolicyId() {
    return this.getNumberAttribute('expiration_policy_id');
  }

  // follow_redirects - computed: true, optional: false, required: false
  public get followRedirects() {
    return this.getBooleanAttribute('follow_redirects');
  }

  // http_method - computed: true, optional: false, required: false
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_version - computed: true, optional: false, required: false
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }

  // last_checked_at - computed: true, optional: false, required: false
  public get lastCheckedAt() {
    return this.getStringAttribute('last_checked_at');
  }

  // maintenance_days - computed: true, optional: false, required: false
  public get maintenanceDays() {
    return this.getListAttribute('maintenance_days');
  }

  // maintenance_from - computed: true, optional: false, required: false
  public get maintenanceFrom() {
    return this.getStringAttribute('maintenance_from');
  }

  // maintenance_timezone - computed: true, optional: false, required: false
  public get maintenanceTimezone() {
    return this.getStringAttribute('maintenance_timezone');
  }

  // maintenance_to - computed: true, optional: false, required: false
  public get maintenanceTo() {
    return this.getStringAttribute('maintenance_to');
  }

  // monitor_group_id - computed: true, optional: false, required: false
  public get monitorGroupId() {
    return this.getNumberAttribute('monitor_group_id');
  }

  // monitor_type - computed: true, optional: false, required: false
  public get monitorType() {
    return this.getStringAttribute('monitor_type');
  }

  // paused - computed: true, optional: false, required: false
  public get paused() {
    return this.getBooleanAttribute('paused');
  }

  // paused_at - computed: true, optional: false, required: false
  public get pausedAt() {
    return this.getStringAttribute('paused_at');
  }

  // playwright_script - computed: true, optional: false, required: false
  public get playwrightScript() {
    return this.getStringAttribute('playwright_script');
  }

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // pronounceable_name - computed: true, optional: false, required: false
  public get pronounceableName() {
    return this.getStringAttribute('pronounceable_name');
  }

  // push - computed: true, optional: false, required: false
  public get push() {
    return this.getBooleanAttribute('push');
  }

  // recovery_period - computed: true, optional: false, required: false
  public get recoveryPeriod() {
    return this.getNumberAttribute('recovery_period');
  }

  // regions - computed: true, optional: false, required: false
  public get regions() {
    return this.getListAttribute('regions');
  }

  // remember_cookies - computed: true, optional: false, required: false
  public get rememberCookies() {
    return this.getBooleanAttribute('remember_cookies');
  }

  // request_body - computed: true, optional: false, required: false
  public get requestBody() {
    return this.getStringAttribute('request_body');
  }

  // request_headers - computed: true, optional: false, required: false
  private _requestHeaders = new cdktf.StringMapList(this, "request_headers", false);
  public get requestHeaders() {
    return this._requestHeaders;
  }

  // request_timeout - computed: true, optional: false, required: false
  public get requestTimeout() {
    return this.getNumberAttribute('request_timeout');
  }

  // required_keyword - computed: true, optional: false, required: false
  public get requiredKeyword() {
    return this.getStringAttribute('required_keyword');
  }

  // scenario_name - computed: true, optional: false, required: false
  public get scenarioName() {
    return this.getStringAttribute('scenario_name');
  }

  // sms - computed: true, optional: false, required: false
  public get sms() {
    return this.getBooleanAttribute('sms');
  }

  // ssl_expiration - computed: true, optional: false, required: false
  public get sslExpiration() {
    return this.getNumberAttribute('ssl_expiration');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // team_wait - computed: true, optional: false, required: false
  public get teamWait() {
    return this.getNumberAttribute('team_wait');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // verify_ssl - computed: true, optional: false, required: false
  public get verifySsl() {
    return this.getBooleanAttribute('verify_ssl');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      url: cdktf.stringToTerraform(this._url),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
