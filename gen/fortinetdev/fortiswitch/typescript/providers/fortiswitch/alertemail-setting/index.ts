// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/alertemail_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertemailSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/alertemail_setting#admin_login_logs AlertemailSetting#admin_login_logs}
  */
  readonly adminLoginLogs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/alertemail_setting#alert_interval AlertemailSetting#alert_interval}
  */
  readonly alertInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/alertemail_setting#amc_interface_bypass_mode AlertemailSetting#amc_interface_bypass_mode}
  */
  readonly amcInterfaceBypassMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/alertemail_setting#antivirus_logs AlertemailSetting#antivirus_logs}
  */
  readonly antivirusLogs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/alertemail_setting#configuration_changes_logs AlertemailSetting#configuration_changes_logs}
  */
  readonly configurationChangesLogs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/alertemail_setting#critical_interval AlertemailSetting#critical_interval}
  */
  readonly criticalInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/alertemail_setting#debug_interval AlertemailSetting#debug_interval}
  */
  readonly debugInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/alertemail_setting#email_interval AlertemailSetting#email_interval}
  */
  readonly emailInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/alertemail_setting#emergency_interval AlertemailSetting#emergency_interval}
  */
  readonly emergencyInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/alertemail_setting#error_interval AlertemailSetting#error_interval}
  */
  readonly errorInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/alertemail_setting#fds_license_expiring_days AlertemailSetting#fds_license_expiring_days}
  */
  readonly fdsLicenseExpiringDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/alertemail_setting#fds_license_expiring_warning AlertemailSetting#fds_license_expiring_warning}
  */
  readonly fdsLicenseExpiringWarning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/alertemail_setting#fds_update_logs AlertemailSetting#fds_update_logs}
  */
  readonly fdsUpdateLogs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/alertemail_setting#filter_mode AlertemailSetting#filter_mode}
  */
  readonly filterMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/alertemail_setting#firewall_authentication_failure_logs AlertemailSetting#firewall_authentication_failure_logs}
  */
  readonly firewallAuthenticationFailureLogs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/alertemail_setting#fortiguard_log_quota_warning AlertemailSetting#fortiguard_log_quota_warning}
  */
  readonly fortiguardLogQuotaWarning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/alertemail_setting#ha_logs AlertemailSetting#ha_logs}
  */
  readonly haLogs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/alertemail_setting#id AlertemailSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/alertemail_setting#information_interval AlertemailSetting#information_interval}
  */
  readonly informationInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/alertemail_setting#ips_logs AlertemailSetting#ips_logs}
  */
  readonly ipsLogs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/alertemail_setting#ipsec_errors_logs AlertemailSetting#ipsec_errors_logs}
  */
  readonly ipsecErrorsLogs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/alertemail_setting#local_disk_usage AlertemailSetting#local_disk_usage}
  */
  readonly localDiskUsage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/alertemail_setting#log_disk_usage_warning AlertemailSetting#log_disk_usage_warning}
  */
  readonly logDiskUsageWarning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/alertemail_setting#mailto1 AlertemailSetting#mailto1}
  */
  readonly mailto1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/alertemail_setting#mailto2 AlertemailSetting#mailto2}
  */
  readonly mailto2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/alertemail_setting#mailto3 AlertemailSetting#mailto3}
  */
  readonly mailto3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/alertemail_setting#notification_interval AlertemailSetting#notification_interval}
  */
  readonly notificationInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/alertemail_setting#ppp_errors_logs AlertemailSetting#ppp_errors_logs}
  */
  readonly pppErrorsLogs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/alertemail_setting#severity AlertemailSetting#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/alertemail_setting#sslvpn_authentication_errors_logs AlertemailSetting#sslvpn_authentication_errors_logs}
  */
  readonly sslvpnAuthenticationErrorsLogs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/alertemail_setting#username AlertemailSetting#username}
  */
  readonly username?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/alertemail_setting#violation_traffic_logs AlertemailSetting#violation_traffic_logs}
  */
  readonly violationTrafficLogs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/alertemail_setting#warning_interval AlertemailSetting#warning_interval}
  */
  readonly warningInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/alertemail_setting#webfilter_logs AlertemailSetting#webfilter_logs}
  */
  readonly webfilterLogs?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/alertemail_setting fortiswitch_alertemail_setting}
*/
export class AlertemailSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_alertemail_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlertemailSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlertemailSetting to import
  * @param importFromId The id of the existing AlertemailSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/alertemail_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlertemailSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_alertemail_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/alertemail_setting fortiswitch_alertemail_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertemailSettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AlertemailSettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_alertemail_setting',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6',
        providerVersionConstraint: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminLoginLogs = config.adminLoginLogs;
    this._alertInterval = config.alertInterval;
    this._amcInterfaceBypassMode = config.amcInterfaceBypassMode;
    this._antivirusLogs = config.antivirusLogs;
    this._configurationChangesLogs = config.configurationChangesLogs;
    this._criticalInterval = config.criticalInterval;
    this._debugInterval = config.debugInterval;
    this._emailInterval = config.emailInterval;
    this._emergencyInterval = config.emergencyInterval;
    this._errorInterval = config.errorInterval;
    this._fdsLicenseExpiringDays = config.fdsLicenseExpiringDays;
    this._fdsLicenseExpiringWarning = config.fdsLicenseExpiringWarning;
    this._fdsUpdateLogs = config.fdsUpdateLogs;
    this._filterMode = config.filterMode;
    this._firewallAuthenticationFailureLogs = config.firewallAuthenticationFailureLogs;
    this._fortiguardLogQuotaWarning = config.fortiguardLogQuotaWarning;
    this._haLogs = config.haLogs;
    this._id = config.id;
    this._informationInterval = config.informationInterval;
    this._ipsLogs = config.ipsLogs;
    this._ipsecErrorsLogs = config.ipsecErrorsLogs;
    this._localDiskUsage = config.localDiskUsage;
    this._logDiskUsageWarning = config.logDiskUsageWarning;
    this._mailto1 = config.mailto1;
    this._mailto2 = config.mailto2;
    this._mailto3 = config.mailto3;
    this._notificationInterval = config.notificationInterval;
    this._pppErrorsLogs = config.pppErrorsLogs;
    this._severity = config.severity;
    this._sslvpnAuthenticationErrorsLogs = config.sslvpnAuthenticationErrorsLogs;
    this._username = config.username;
    this._violationTrafficLogs = config.violationTrafficLogs;
    this._warningInterval = config.warningInterval;
    this._webfilterLogs = config.webfilterLogs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_login_logs - computed: true, optional: true, required: false
  private _adminLoginLogs?: string; 
  public get adminLoginLogs() {
    return this.getStringAttribute('admin_login_logs');
  }
  public set adminLoginLogs(value: string) {
    this._adminLoginLogs = value;
  }
  public resetAdminLoginLogs() {
    this._adminLoginLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminLoginLogsInput() {
    return this._adminLoginLogs;
  }

  // alert_interval - computed: true, optional: true, required: false
  private _alertInterval?: number; 
  public get alertInterval() {
    return this.getNumberAttribute('alert_interval');
  }
  public set alertInterval(value: number) {
    this._alertInterval = value;
  }
  public resetAlertInterval() {
    this._alertInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertIntervalInput() {
    return this._alertInterval;
  }

  // amc_interface_bypass_mode - computed: true, optional: true, required: false
  private _amcInterfaceBypassMode?: string; 
  public get amcInterfaceBypassMode() {
    return this.getStringAttribute('amc_interface_bypass_mode');
  }
  public set amcInterfaceBypassMode(value: string) {
    this._amcInterfaceBypassMode = value;
  }
  public resetAmcInterfaceBypassMode() {
    this._amcInterfaceBypassMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amcInterfaceBypassModeInput() {
    return this._amcInterfaceBypassMode;
  }

  // antivirus_logs - computed: true, optional: true, required: false
  private _antivirusLogs?: string; 
  public get antivirusLogs() {
    return this.getStringAttribute('antivirus_logs');
  }
  public set antivirusLogs(value: string) {
    this._antivirusLogs = value;
  }
  public resetAntivirusLogs() {
    this._antivirusLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antivirusLogsInput() {
    return this._antivirusLogs;
  }

  // configuration_changes_logs - computed: true, optional: true, required: false
  private _configurationChangesLogs?: string; 
  public get configurationChangesLogs() {
    return this.getStringAttribute('configuration_changes_logs');
  }
  public set configurationChangesLogs(value: string) {
    this._configurationChangesLogs = value;
  }
  public resetConfigurationChangesLogs() {
    this._configurationChangesLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationChangesLogsInput() {
    return this._configurationChangesLogs;
  }

  // critical_interval - computed: true, optional: true, required: false
  private _criticalInterval?: number; 
  public get criticalInterval() {
    return this.getNumberAttribute('critical_interval');
  }
  public set criticalInterval(value: number) {
    this._criticalInterval = value;
  }
  public resetCriticalInterval() {
    this._criticalInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalIntervalInput() {
    return this._criticalInterval;
  }

  // debug_interval - computed: true, optional: true, required: false
  private _debugInterval?: number; 
  public get debugInterval() {
    return this.getNumberAttribute('debug_interval');
  }
  public set debugInterval(value: number) {
    this._debugInterval = value;
  }
  public resetDebugInterval() {
    this._debugInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugIntervalInput() {
    return this._debugInterval;
  }

  // email_interval - computed: true, optional: true, required: false
  private _emailInterval?: number; 
  public get emailInterval() {
    return this.getNumberAttribute('email_interval');
  }
  public set emailInterval(value: number) {
    this._emailInterval = value;
  }
  public resetEmailInterval() {
    this._emailInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailIntervalInput() {
    return this._emailInterval;
  }

  // emergency_interval - computed: true, optional: true, required: false
  private _emergencyInterval?: number; 
  public get emergencyInterval() {
    return this.getNumberAttribute('emergency_interval');
  }
  public set emergencyInterval(value: number) {
    this._emergencyInterval = value;
  }
  public resetEmergencyInterval() {
    this._emergencyInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emergencyIntervalInput() {
    return this._emergencyInterval;
  }

  // error_interval - computed: true, optional: true, required: false
  private _errorInterval?: number; 
  public get errorInterval() {
    return this.getNumberAttribute('error_interval');
  }
  public set errorInterval(value: number) {
    this._errorInterval = value;
  }
  public resetErrorInterval() {
    this._errorInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorIntervalInput() {
    return this._errorInterval;
  }

  // fds_license_expiring_days - computed: true, optional: true, required: false
  private _fdsLicenseExpiringDays?: number; 
  public get fdsLicenseExpiringDays() {
    return this.getNumberAttribute('fds_license_expiring_days');
  }
  public set fdsLicenseExpiringDays(value: number) {
    this._fdsLicenseExpiringDays = value;
  }
  public resetFdsLicenseExpiringDays() {
    this._fdsLicenseExpiringDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fdsLicenseExpiringDaysInput() {
    return this._fdsLicenseExpiringDays;
  }

  // fds_license_expiring_warning - computed: true, optional: true, required: false
  private _fdsLicenseExpiringWarning?: string; 
  public get fdsLicenseExpiringWarning() {
    return this.getStringAttribute('fds_license_expiring_warning');
  }
  public set fdsLicenseExpiringWarning(value: string) {
    this._fdsLicenseExpiringWarning = value;
  }
  public resetFdsLicenseExpiringWarning() {
    this._fdsLicenseExpiringWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fdsLicenseExpiringWarningInput() {
    return this._fdsLicenseExpiringWarning;
  }

  // fds_update_logs - computed: true, optional: true, required: false
  private _fdsUpdateLogs?: string; 
  public get fdsUpdateLogs() {
    return this.getStringAttribute('fds_update_logs');
  }
  public set fdsUpdateLogs(value: string) {
    this._fdsUpdateLogs = value;
  }
  public resetFdsUpdateLogs() {
    this._fdsUpdateLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fdsUpdateLogsInput() {
    return this._fdsUpdateLogs;
  }

  // filter_mode - computed: true, optional: true, required: false
  private _filterMode?: string; 
  public get filterMode() {
    return this.getStringAttribute('filter_mode');
  }
  public set filterMode(value: string) {
    this._filterMode = value;
  }
  public resetFilterMode() {
    this._filterMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterModeInput() {
    return this._filterMode;
  }

  // firewall_authentication_failure_logs - computed: true, optional: true, required: false
  private _firewallAuthenticationFailureLogs?: string; 
  public get firewallAuthenticationFailureLogs() {
    return this.getStringAttribute('firewall_authentication_failure_logs');
  }
  public set firewallAuthenticationFailureLogs(value: string) {
    this._firewallAuthenticationFailureLogs = value;
  }
  public resetFirewallAuthenticationFailureLogs() {
    this._firewallAuthenticationFailureLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallAuthenticationFailureLogsInput() {
    return this._firewallAuthenticationFailureLogs;
  }

  // fortiguard_log_quota_warning - computed: true, optional: true, required: false
  private _fortiguardLogQuotaWarning?: string; 
  public get fortiguardLogQuotaWarning() {
    return this.getStringAttribute('fortiguard_log_quota_warning');
  }
  public set fortiguardLogQuotaWarning(value: string) {
    this._fortiguardLogQuotaWarning = value;
  }
  public resetFortiguardLogQuotaWarning() {
    this._fortiguardLogQuotaWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiguardLogQuotaWarningInput() {
    return this._fortiguardLogQuotaWarning;
  }

  // ha_logs - computed: true, optional: true, required: false
  private _haLogs?: string; 
  public get haLogs() {
    return this.getStringAttribute('ha_logs');
  }
  public set haLogs(value: string) {
    this._haLogs = value;
  }
  public resetHaLogs() {
    this._haLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haLogsInput() {
    return this._haLogs;
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

  // information_interval - computed: true, optional: true, required: false
  private _informationInterval?: number; 
  public get informationInterval() {
    return this.getNumberAttribute('information_interval');
  }
  public set informationInterval(value: number) {
    this._informationInterval = value;
  }
  public resetInformationInterval() {
    this._informationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get informationIntervalInput() {
    return this._informationInterval;
  }

  // ips_logs - computed: true, optional: true, required: false
  private _ipsLogs?: string; 
  public get ipsLogs() {
    return this.getStringAttribute('ips_logs');
  }
  public set ipsLogs(value: string) {
    this._ipsLogs = value;
  }
  public resetIpsLogs() {
    this._ipsLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsLogsInput() {
    return this._ipsLogs;
  }

  // ipsec_errors_logs - computed: true, optional: true, required: false
  private _ipsecErrorsLogs?: string; 
  public get ipsecErrorsLogs() {
    return this.getStringAttribute('ipsec_errors_logs');
  }
  public set ipsecErrorsLogs(value: string) {
    this._ipsecErrorsLogs = value;
  }
  public resetIpsecErrorsLogs() {
    this._ipsecErrorsLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecErrorsLogsInput() {
    return this._ipsecErrorsLogs;
  }

  // local_disk_usage - computed: true, optional: true, required: false
  private _localDiskUsage?: number; 
  public get localDiskUsage() {
    return this.getNumberAttribute('local_disk_usage');
  }
  public set localDiskUsage(value: number) {
    this._localDiskUsage = value;
  }
  public resetLocalDiskUsage() {
    this._localDiskUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localDiskUsageInput() {
    return this._localDiskUsage;
  }

  // log_disk_usage_warning - computed: true, optional: true, required: false
  private _logDiskUsageWarning?: string; 
  public get logDiskUsageWarning() {
    return this.getStringAttribute('log_disk_usage_warning');
  }
  public set logDiskUsageWarning(value: string) {
    this._logDiskUsageWarning = value;
  }
  public resetLogDiskUsageWarning() {
    this._logDiskUsageWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDiskUsageWarningInput() {
    return this._logDiskUsageWarning;
  }

  // mailto1 - computed: true, optional: true, required: false
  private _mailto1?: string; 
  public get mailto1() {
    return this.getStringAttribute('mailto1');
  }
  public set mailto1(value: string) {
    this._mailto1 = value;
  }
  public resetMailto1() {
    this._mailto1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailto1Input() {
    return this._mailto1;
  }

  // mailto2 - computed: true, optional: true, required: false
  private _mailto2?: string; 
  public get mailto2() {
    return this.getStringAttribute('mailto2');
  }
  public set mailto2(value: string) {
    this._mailto2 = value;
  }
  public resetMailto2() {
    this._mailto2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailto2Input() {
    return this._mailto2;
  }

  // mailto3 - computed: true, optional: true, required: false
  private _mailto3?: string; 
  public get mailto3() {
    return this.getStringAttribute('mailto3');
  }
  public set mailto3(value: string) {
    this._mailto3 = value;
  }
  public resetMailto3() {
    this._mailto3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailto3Input() {
    return this._mailto3;
  }

  // notification_interval - computed: true, optional: true, required: false
  private _notificationInterval?: number; 
  public get notificationInterval() {
    return this.getNumberAttribute('notification_interval');
  }
  public set notificationInterval(value: number) {
    this._notificationInterval = value;
  }
  public resetNotificationInterval() {
    this._notificationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationIntervalInput() {
    return this._notificationInterval;
  }

  // ppp_errors_logs - computed: true, optional: true, required: false
  private _pppErrorsLogs?: string; 
  public get pppErrorsLogs() {
    return this.getStringAttribute('ppp_errors_logs');
  }
  public set pppErrorsLogs(value: string) {
    this._pppErrorsLogs = value;
  }
  public resetPppErrorsLogs() {
    this._pppErrorsLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pppErrorsLogsInput() {
    return this._pppErrorsLogs;
  }

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // sslvpn_authentication_errors_logs - computed: true, optional: true, required: false
  private _sslvpnAuthenticationErrorsLogs?: string; 
  public get sslvpnAuthenticationErrorsLogs() {
    return this.getStringAttribute('sslvpn_authentication_errors_logs');
  }
  public set sslvpnAuthenticationErrorsLogs(value: string) {
    this._sslvpnAuthenticationErrorsLogs = value;
  }
  public resetSslvpnAuthenticationErrorsLogs() {
    this._sslvpnAuthenticationErrorsLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslvpnAuthenticationErrorsLogsInput() {
    return this._sslvpnAuthenticationErrorsLogs;
  }

  // username - computed: true, optional: true, required: false
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

  // violation_traffic_logs - computed: true, optional: true, required: false
  private _violationTrafficLogs?: string; 
  public get violationTrafficLogs() {
    return this.getStringAttribute('violation_traffic_logs');
  }
  public set violationTrafficLogs(value: string) {
    this._violationTrafficLogs = value;
  }
  public resetViolationTrafficLogs() {
    this._violationTrafficLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get violationTrafficLogsInput() {
    return this._violationTrafficLogs;
  }

  // warning_interval - computed: true, optional: true, required: false
  private _warningInterval?: number; 
  public get warningInterval() {
    return this.getNumberAttribute('warning_interval');
  }
  public set warningInterval(value: number) {
    this._warningInterval = value;
  }
  public resetWarningInterval() {
    this._warningInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningIntervalInput() {
    return this._warningInterval;
  }

  // webfilter_logs - computed: true, optional: true, required: false
  private _webfilterLogs?: string; 
  public get webfilterLogs() {
    return this.getStringAttribute('webfilter_logs');
  }
  public set webfilterLogs(value: string) {
    this._webfilterLogs = value;
  }
  public resetWebfilterLogs() {
    this._webfilterLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webfilterLogsInput() {
    return this._webfilterLogs;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_login_logs: cdktf.stringToTerraform(this._adminLoginLogs),
      alert_interval: cdktf.numberToTerraform(this._alertInterval),
      amc_interface_bypass_mode: cdktf.stringToTerraform(this._amcInterfaceBypassMode),
      antivirus_logs: cdktf.stringToTerraform(this._antivirusLogs),
      configuration_changes_logs: cdktf.stringToTerraform(this._configurationChangesLogs),
      critical_interval: cdktf.numberToTerraform(this._criticalInterval),
      debug_interval: cdktf.numberToTerraform(this._debugInterval),
      email_interval: cdktf.numberToTerraform(this._emailInterval),
      emergency_interval: cdktf.numberToTerraform(this._emergencyInterval),
      error_interval: cdktf.numberToTerraform(this._errorInterval),
      fds_license_expiring_days: cdktf.numberToTerraform(this._fdsLicenseExpiringDays),
      fds_license_expiring_warning: cdktf.stringToTerraform(this._fdsLicenseExpiringWarning),
      fds_update_logs: cdktf.stringToTerraform(this._fdsUpdateLogs),
      filter_mode: cdktf.stringToTerraform(this._filterMode),
      firewall_authentication_failure_logs: cdktf.stringToTerraform(this._firewallAuthenticationFailureLogs),
      fortiguard_log_quota_warning: cdktf.stringToTerraform(this._fortiguardLogQuotaWarning),
      ha_logs: cdktf.stringToTerraform(this._haLogs),
      id: cdktf.stringToTerraform(this._id),
      information_interval: cdktf.numberToTerraform(this._informationInterval),
      ips_logs: cdktf.stringToTerraform(this._ipsLogs),
      ipsec_errors_logs: cdktf.stringToTerraform(this._ipsecErrorsLogs),
      local_disk_usage: cdktf.numberToTerraform(this._localDiskUsage),
      log_disk_usage_warning: cdktf.stringToTerraform(this._logDiskUsageWarning),
      mailto1: cdktf.stringToTerraform(this._mailto1),
      mailto2: cdktf.stringToTerraform(this._mailto2),
      mailto3: cdktf.stringToTerraform(this._mailto3),
      notification_interval: cdktf.numberToTerraform(this._notificationInterval),
      ppp_errors_logs: cdktf.stringToTerraform(this._pppErrorsLogs),
      severity: cdktf.stringToTerraform(this._severity),
      sslvpn_authentication_errors_logs: cdktf.stringToTerraform(this._sslvpnAuthenticationErrorsLogs),
      username: cdktf.stringToTerraform(this._username),
      violation_traffic_logs: cdktf.stringToTerraform(this._violationTrafficLogs),
      warning_interval: cdktf.numberToTerraform(this._warningInterval),
      webfilter_logs: cdktf.stringToTerraform(this._webfilterLogs),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_login_logs: {
        value: cdktf.stringToHclTerraform(this._adminLoginLogs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alert_interval: {
        value: cdktf.numberToHclTerraform(this._alertInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      amc_interface_bypass_mode: {
        value: cdktf.stringToHclTerraform(this._amcInterfaceBypassMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      antivirus_logs: {
        value: cdktf.stringToHclTerraform(this._antivirusLogs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration_changes_logs: {
        value: cdktf.stringToHclTerraform(this._configurationChangesLogs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      critical_interval: {
        value: cdktf.numberToHclTerraform(this._criticalInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      debug_interval: {
        value: cdktf.numberToHclTerraform(this._debugInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      email_interval: {
        value: cdktf.numberToHclTerraform(this._emailInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      emergency_interval: {
        value: cdktf.numberToHclTerraform(this._emergencyInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      error_interval: {
        value: cdktf.numberToHclTerraform(this._errorInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fds_license_expiring_days: {
        value: cdktf.numberToHclTerraform(this._fdsLicenseExpiringDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fds_license_expiring_warning: {
        value: cdktf.stringToHclTerraform(this._fdsLicenseExpiringWarning),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fds_update_logs: {
        value: cdktf.stringToHclTerraform(this._fdsUpdateLogs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_mode: {
        value: cdktf.stringToHclTerraform(this._filterMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firewall_authentication_failure_logs: {
        value: cdktf.stringToHclTerraform(this._firewallAuthenticationFailureLogs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortiguard_log_quota_warning: {
        value: cdktf.stringToHclTerraform(this._fortiguardLogQuotaWarning),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_logs: {
        value: cdktf.stringToHclTerraform(this._haLogs),
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
      information_interval: {
        value: cdktf.numberToHclTerraform(this._informationInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ips_logs: {
        value: cdktf.stringToHclTerraform(this._ipsLogs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_errors_logs: {
        value: cdktf.stringToHclTerraform(this._ipsecErrorsLogs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_disk_usage: {
        value: cdktf.numberToHclTerraform(this._localDiskUsage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_disk_usage_warning: {
        value: cdktf.stringToHclTerraform(this._logDiskUsageWarning),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mailto1: {
        value: cdktf.stringToHclTerraform(this._mailto1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mailto2: {
        value: cdktf.stringToHclTerraform(this._mailto2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mailto3: {
        value: cdktf.stringToHclTerraform(this._mailto3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_interval: {
        value: cdktf.numberToHclTerraform(this._notificationInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ppp_errors_logs: {
        value: cdktf.stringToHclTerraform(this._pppErrorsLogs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sslvpn_authentication_errors_logs: {
        value: cdktf.stringToHclTerraform(this._sslvpnAuthenticationErrorsLogs),
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
      violation_traffic_logs: {
        value: cdktf.stringToHclTerraform(this._violationTrafficLogs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      warning_interval: {
        value: cdktf.numberToHclTerraform(this._warningInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      webfilter_logs: {
        value: cdktf.stringToHclTerraform(this._webfilterLogs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
