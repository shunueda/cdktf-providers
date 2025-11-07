// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemGlobalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#admin_concurrent SystemGlobal#admin_concurrent}
  */
  readonly adminConcurrent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#admin_https_pki_required SystemGlobal#admin_https_pki_required}
  */
  readonly adminHttpsPkiRequired?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#admin_https_ssl_versions SystemGlobal#admin_https_ssl_versions}
  */
  readonly adminHttpsSslVersions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#admin_lockout_duration SystemGlobal#admin_lockout_duration}
  */
  readonly adminLockoutDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#admin_lockout_threshold SystemGlobal#admin_lockout_threshold}
  */
  readonly adminLockoutThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#admin_password_hash SystemGlobal#admin_password_hash}
  */
  readonly adminPasswordHash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#admin_port SystemGlobal#admin_port}
  */
  readonly adminPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#admin_restrict_local SystemGlobal#admin_restrict_local}
  */
  readonly adminRestrictLocal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#admin_scp SystemGlobal#admin_scp}
  */
  readonly adminScp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#admin_server_cert SystemGlobal#admin_server_cert}
  */
  readonly adminServerCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#admin_sport SystemGlobal#admin_sport}
  */
  readonly adminSport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#admin_ssh_grace_time SystemGlobal#admin_ssh_grace_time}
  */
  readonly adminSshGraceTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#admin_ssh_port SystemGlobal#admin_ssh_port}
  */
  readonly adminSshPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#admin_ssh_v1 SystemGlobal#admin_ssh_v1}
  */
  readonly adminSshV1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#admin_telnet_port SystemGlobal#admin_telnet_port}
  */
  readonly adminTelnetPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#admintimeout SystemGlobal#admintimeout}
  */
  readonly admintimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#alert_interval SystemGlobal#alert_interval}
  */
  readonly alertInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#alertd_relog SystemGlobal#alertd_relog}
  */
  readonly alertdRelog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#allow_subnet_overlap SystemGlobal#allow_subnet_overlap}
  */
  readonly allowSubnetOverlap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#arp_inspection_monitor_timeout SystemGlobal#arp_inspection_monitor_timeout}
  */
  readonly arpInspectionMonitorTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#arp_timeout SystemGlobal#arp_timeout}
  */
  readonly arpTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#asset_tag SystemGlobal#asset_tag}
  */
  readonly assetTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#auto_isl SystemGlobal#auto_isl}
  */
  readonly autoIsl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#cfg_revert_timeout SystemGlobal#cfg_revert_timeout}
  */
  readonly cfgRevertTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#cfg_save SystemGlobal#cfg_save}
  */
  readonly cfgSave?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#clt_cert_req SystemGlobal#clt_cert_req}
  */
  readonly cltCertReq?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#csr_ca_attribute SystemGlobal#csr_ca_attribute}
  */
  readonly csrCaAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#daily_restart SystemGlobal#daily_restart}
  */
  readonly dailyRestart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#delaycli_timeout_cleanup SystemGlobal#delaycli_timeout_cleanup}
  */
  readonly delaycliTimeoutCleanup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#detect_ip_conflict SystemGlobal#detect_ip_conflict}
  */
  readonly detectIpConflict?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#dh_params SystemGlobal#dh_params}
  */
  readonly dhParams?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#dhcp_circuit_id SystemGlobal#dhcp_circuit_id}
  */
  readonly dhcpCircuitId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#dhcp_client_location SystemGlobal#dhcp_client_location}
  */
  readonly dhcpClientLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#dhcp_option_format SystemGlobal#dhcp_option_format}
  */
  readonly dhcpOptionFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#dhcp_remote_id SystemGlobal#dhcp_remote_id}
  */
  readonly dhcpRemoteId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#dhcp_server_access_list SystemGlobal#dhcp_server_access_list}
  */
  readonly dhcpServerAccessList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#dhcp_snoop_client_req SystemGlobal#dhcp_snoop_client_req}
  */
  readonly dhcpSnoopClientReq?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#dhcps_db_exp SystemGlobal#dhcps_db_exp}
  */
  readonly dhcpsDbExp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#dhcps_db_per_port_learn_limit SystemGlobal#dhcps_db_per_port_learn_limit}
  */
  readonly dhcpsDbPerPortLearnLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#dst SystemGlobal#dst}
  */
  readonly dst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#failtime SystemGlobal#failtime}
  */
  readonly failtime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#fortilink_auto_discovery SystemGlobal#fortilink_auto_discovery}
  */
  readonly fortilinkAutoDiscovery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#hostname SystemGlobal#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#id SystemGlobal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#image_rotation SystemGlobal#image_rotation}
  */
  readonly imageRotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#interval SystemGlobal#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#ip_conflict_ignore_default SystemGlobal#ip_conflict_ignore_default}
  */
  readonly ipConflictIgnoreDefault?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#ipv6_accept_dad SystemGlobal#ipv6_accept_dad}
  */
  readonly ipv6AcceptDad?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#ipv6_all_forwarding SystemGlobal#ipv6_all_forwarding}
  */
  readonly ipv6AllForwarding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#kernel_crashlog SystemGlobal#kernel_crashlog}
  */
  readonly kernelCrashlog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#kernel_devicelog SystemGlobal#kernel_devicelog}
  */
  readonly kernelDevicelog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#l3_host_expiry SystemGlobal#l3_host_expiry}
  */
  readonly l3HostExpiry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#language SystemGlobal#language}
  */
  readonly language?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#ldapconntimeout SystemGlobal#ldapconntimeout}
  */
  readonly ldapconntimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#n8021x_ca_certificate SystemGlobal#n8021x_ca_certificate}
  */
  readonly n8021XCaCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#n8021x_certificate SystemGlobal#n8021x_certificate}
  */
  readonly n8021XCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#post_login_banner SystemGlobal#post_login_banner}
  */
  readonly postLoginBanner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#pre_login_banner SystemGlobal#pre_login_banner}
  */
  readonly preLoginBanner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#private_data_encryption SystemGlobal#private_data_encryption}
  */
  readonly privateDataEncryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#radius_coa_port SystemGlobal#radius_coa_port}
  */
  readonly radiusCoaPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#radius_port SystemGlobal#radius_port}
  */
  readonly radiusPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#radsec_coa_port SystemGlobal#radsec_coa_port}
  */
  readonly radsecCoaPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#remoteauthtimeout SystemGlobal#remoteauthtimeout}
  */
  readonly remoteauthtimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#reset_button SystemGlobal#reset_button}
  */
  readonly resetButton?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#restart_time SystemGlobal#restart_time}
  */
  readonly restartTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#revision_backup_on_logout SystemGlobal#revision_backup_on_logout}
  */
  readonly revisionBackupOnLogout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#revision_backup_on_upgrade SystemGlobal#revision_backup_on_upgrade}
  */
  readonly revisionBackupOnUpgrade?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#strong_crypto SystemGlobal#strong_crypto}
  */
  readonly strongCrypto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#switch_mgmt_mode SystemGlobal#switch_mgmt_mode}
  */
  readonly switchMgmtMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#tcp6_mss_min SystemGlobal#tcp6_mss_min}
  */
  readonly tcp6MssMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#tcp_mss_min SystemGlobal#tcp_mss_min}
  */
  readonly tcpMssMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#tcp_options SystemGlobal#tcp_options}
  */
  readonly tcpOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#tftp SystemGlobal#tftp}
  */
  readonly tftp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#timezone SystemGlobal#timezone}
  */
  readonly timezone?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global fortiswitch_system_global}
*/
export class SystemGlobal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_system_global";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemGlobal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemGlobal to import
  * @param importFromId The id of the existing SystemGlobal that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemGlobal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_system_global", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_global fortiswitch_system_global} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemGlobalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemGlobalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_system_global',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminConcurrent = config.adminConcurrent;
    this._adminHttpsPkiRequired = config.adminHttpsPkiRequired;
    this._adminHttpsSslVersions = config.adminHttpsSslVersions;
    this._adminLockoutDuration = config.adminLockoutDuration;
    this._adminLockoutThreshold = config.adminLockoutThreshold;
    this._adminPasswordHash = config.adminPasswordHash;
    this._adminPort = config.adminPort;
    this._adminRestrictLocal = config.adminRestrictLocal;
    this._adminScp = config.adminScp;
    this._adminServerCert = config.adminServerCert;
    this._adminSport = config.adminSport;
    this._adminSshGraceTime = config.adminSshGraceTime;
    this._adminSshPort = config.adminSshPort;
    this._adminSshV1 = config.adminSshV1;
    this._adminTelnetPort = config.adminTelnetPort;
    this._admintimeout = config.admintimeout;
    this._alertInterval = config.alertInterval;
    this._alertdRelog = config.alertdRelog;
    this._allowSubnetOverlap = config.allowSubnetOverlap;
    this._arpInspectionMonitorTimeout = config.arpInspectionMonitorTimeout;
    this._arpTimeout = config.arpTimeout;
    this._assetTag = config.assetTag;
    this._autoIsl = config.autoIsl;
    this._cfgRevertTimeout = config.cfgRevertTimeout;
    this._cfgSave = config.cfgSave;
    this._cltCertReq = config.cltCertReq;
    this._csrCaAttribute = config.csrCaAttribute;
    this._dailyRestart = config.dailyRestart;
    this._delaycliTimeoutCleanup = config.delaycliTimeoutCleanup;
    this._detectIpConflict = config.detectIpConflict;
    this._dhParams = config.dhParams;
    this._dhcpCircuitId = config.dhcpCircuitId;
    this._dhcpClientLocation = config.dhcpClientLocation;
    this._dhcpOptionFormat = config.dhcpOptionFormat;
    this._dhcpRemoteId = config.dhcpRemoteId;
    this._dhcpServerAccessList = config.dhcpServerAccessList;
    this._dhcpSnoopClientReq = config.dhcpSnoopClientReq;
    this._dhcpsDbExp = config.dhcpsDbExp;
    this._dhcpsDbPerPortLearnLimit = config.dhcpsDbPerPortLearnLimit;
    this._dst = config.dst;
    this._failtime = config.failtime;
    this._fortilinkAutoDiscovery = config.fortilinkAutoDiscovery;
    this._hostname = config.hostname;
    this._id = config.id;
    this._imageRotation = config.imageRotation;
    this._interval = config.interval;
    this._ipConflictIgnoreDefault = config.ipConflictIgnoreDefault;
    this._ipv6AcceptDad = config.ipv6AcceptDad;
    this._ipv6AllForwarding = config.ipv6AllForwarding;
    this._kernelCrashlog = config.kernelCrashlog;
    this._kernelDevicelog = config.kernelDevicelog;
    this._l3HostExpiry = config.l3HostExpiry;
    this._language = config.language;
    this._ldapconntimeout = config.ldapconntimeout;
    this._n8021XCaCertificate = config.n8021XCaCertificate;
    this._n8021XCertificate = config.n8021XCertificate;
    this._postLoginBanner = config.postLoginBanner;
    this._preLoginBanner = config.preLoginBanner;
    this._privateDataEncryption = config.privateDataEncryption;
    this._radiusCoaPort = config.radiusCoaPort;
    this._radiusPort = config.radiusPort;
    this._radsecCoaPort = config.radsecCoaPort;
    this._remoteauthtimeout = config.remoteauthtimeout;
    this._resetButton = config.resetButton;
    this._restartTime = config.restartTime;
    this._revisionBackupOnLogout = config.revisionBackupOnLogout;
    this._revisionBackupOnUpgrade = config.revisionBackupOnUpgrade;
    this._strongCrypto = config.strongCrypto;
    this._switchMgmtMode = config.switchMgmtMode;
    this._tcp6MssMin = config.tcp6MssMin;
    this._tcpMssMin = config.tcpMssMin;
    this._tcpOptions = config.tcpOptions;
    this._tftp = config.tftp;
    this._timezone = config.timezone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_concurrent - computed: true, optional: true, required: false
  private _adminConcurrent?: string; 
  public get adminConcurrent() {
    return this.getStringAttribute('admin_concurrent');
  }
  public set adminConcurrent(value: string) {
    this._adminConcurrent = value;
  }
  public resetAdminConcurrent() {
    this._adminConcurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminConcurrentInput() {
    return this._adminConcurrent;
  }

  // admin_https_pki_required - computed: true, optional: true, required: false
  private _adminHttpsPkiRequired?: string; 
  public get adminHttpsPkiRequired() {
    return this.getStringAttribute('admin_https_pki_required');
  }
  public set adminHttpsPkiRequired(value: string) {
    this._adminHttpsPkiRequired = value;
  }
  public resetAdminHttpsPkiRequired() {
    this._adminHttpsPkiRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminHttpsPkiRequiredInput() {
    return this._adminHttpsPkiRequired;
  }

  // admin_https_ssl_versions - computed: true, optional: true, required: false
  private _adminHttpsSslVersions?: string; 
  public get adminHttpsSslVersions() {
    return this.getStringAttribute('admin_https_ssl_versions');
  }
  public set adminHttpsSslVersions(value: string) {
    this._adminHttpsSslVersions = value;
  }
  public resetAdminHttpsSslVersions() {
    this._adminHttpsSslVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminHttpsSslVersionsInput() {
    return this._adminHttpsSslVersions;
  }

  // admin_lockout_duration - computed: true, optional: true, required: false
  private _adminLockoutDuration?: number; 
  public get adminLockoutDuration() {
    return this.getNumberAttribute('admin_lockout_duration');
  }
  public set adminLockoutDuration(value: number) {
    this._adminLockoutDuration = value;
  }
  public resetAdminLockoutDuration() {
    this._adminLockoutDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminLockoutDurationInput() {
    return this._adminLockoutDuration;
  }

  // admin_lockout_threshold - computed: true, optional: true, required: false
  private _adminLockoutThreshold?: number; 
  public get adminLockoutThreshold() {
    return this.getNumberAttribute('admin_lockout_threshold');
  }
  public set adminLockoutThreshold(value: number) {
    this._adminLockoutThreshold = value;
  }
  public resetAdminLockoutThreshold() {
    this._adminLockoutThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminLockoutThresholdInput() {
    return this._adminLockoutThreshold;
  }

  // admin_password_hash - computed: true, optional: true, required: false
  private _adminPasswordHash?: string; 
  public get adminPasswordHash() {
    return this.getStringAttribute('admin_password_hash');
  }
  public set adminPasswordHash(value: string) {
    this._adminPasswordHash = value;
  }
  public resetAdminPasswordHash() {
    this._adminPasswordHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordHashInput() {
    return this._adminPasswordHash;
  }

  // admin_port - computed: true, optional: true, required: false
  private _adminPort?: number; 
  public get adminPort() {
    return this.getNumberAttribute('admin_port');
  }
  public set adminPort(value: number) {
    this._adminPort = value;
  }
  public resetAdminPort() {
    this._adminPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPortInput() {
    return this._adminPort;
  }

  // admin_restrict_local - computed: true, optional: true, required: false
  private _adminRestrictLocal?: string; 
  public get adminRestrictLocal() {
    return this.getStringAttribute('admin_restrict_local');
  }
  public set adminRestrictLocal(value: string) {
    this._adminRestrictLocal = value;
  }
  public resetAdminRestrictLocal() {
    this._adminRestrictLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminRestrictLocalInput() {
    return this._adminRestrictLocal;
  }

  // admin_scp - computed: true, optional: true, required: false
  private _adminScp?: string; 
  public get adminScp() {
    return this.getStringAttribute('admin_scp');
  }
  public set adminScp(value: string) {
    this._adminScp = value;
  }
  public resetAdminScp() {
    this._adminScp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminScpInput() {
    return this._adminScp;
  }

  // admin_server_cert - computed: true, optional: true, required: false
  private _adminServerCert?: string; 
  public get adminServerCert() {
    return this.getStringAttribute('admin_server_cert');
  }
  public set adminServerCert(value: string) {
    this._adminServerCert = value;
  }
  public resetAdminServerCert() {
    this._adminServerCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminServerCertInput() {
    return this._adminServerCert;
  }

  // admin_sport - computed: true, optional: true, required: false
  private _adminSport?: number; 
  public get adminSport() {
    return this.getNumberAttribute('admin_sport');
  }
  public set adminSport(value: number) {
    this._adminSport = value;
  }
  public resetAdminSport() {
    this._adminSport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminSportInput() {
    return this._adminSport;
  }

  // admin_ssh_grace_time - computed: true, optional: true, required: false
  private _adminSshGraceTime?: number; 
  public get adminSshGraceTime() {
    return this.getNumberAttribute('admin_ssh_grace_time');
  }
  public set adminSshGraceTime(value: number) {
    this._adminSshGraceTime = value;
  }
  public resetAdminSshGraceTime() {
    this._adminSshGraceTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminSshGraceTimeInput() {
    return this._adminSshGraceTime;
  }

  // admin_ssh_port - computed: true, optional: true, required: false
  private _adminSshPort?: number; 
  public get adminSshPort() {
    return this.getNumberAttribute('admin_ssh_port');
  }
  public set adminSshPort(value: number) {
    this._adminSshPort = value;
  }
  public resetAdminSshPort() {
    this._adminSshPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminSshPortInput() {
    return this._adminSshPort;
  }

  // admin_ssh_v1 - computed: true, optional: true, required: false
  private _adminSshV1?: string; 
  public get adminSshV1() {
    return this.getStringAttribute('admin_ssh_v1');
  }
  public set adminSshV1(value: string) {
    this._adminSshV1 = value;
  }
  public resetAdminSshV1() {
    this._adminSshV1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminSshV1Input() {
    return this._adminSshV1;
  }

  // admin_telnet_port - computed: true, optional: true, required: false
  private _adminTelnetPort?: number; 
  public get adminTelnetPort() {
    return this.getNumberAttribute('admin_telnet_port');
  }
  public set adminTelnetPort(value: number) {
    this._adminTelnetPort = value;
  }
  public resetAdminTelnetPort() {
    this._adminTelnetPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminTelnetPortInput() {
    return this._adminTelnetPort;
  }

  // admintimeout - computed: true, optional: true, required: false
  private _admintimeout?: number; 
  public get admintimeout() {
    return this.getNumberAttribute('admintimeout');
  }
  public set admintimeout(value: number) {
    this._admintimeout = value;
  }
  public resetAdmintimeout() {
    this._admintimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get admintimeoutInput() {
    return this._admintimeout;
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

  // alertd_relog - computed: true, optional: true, required: false
  private _alertdRelog?: string; 
  public get alertdRelog() {
    return this.getStringAttribute('alertd_relog');
  }
  public set alertdRelog(value: string) {
    this._alertdRelog = value;
  }
  public resetAlertdRelog() {
    this._alertdRelog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertdRelogInput() {
    return this._alertdRelog;
  }

  // allow_subnet_overlap - computed: true, optional: true, required: false
  private _allowSubnetOverlap?: string; 
  public get allowSubnetOverlap() {
    return this.getStringAttribute('allow_subnet_overlap');
  }
  public set allowSubnetOverlap(value: string) {
    this._allowSubnetOverlap = value;
  }
  public resetAllowSubnetOverlap() {
    this._allowSubnetOverlap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSubnetOverlapInput() {
    return this._allowSubnetOverlap;
  }

  // arp_inspection_monitor_timeout - computed: true, optional: true, required: false
  private _arpInspectionMonitorTimeout?: number; 
  public get arpInspectionMonitorTimeout() {
    return this.getNumberAttribute('arp_inspection_monitor_timeout');
  }
  public set arpInspectionMonitorTimeout(value: number) {
    this._arpInspectionMonitorTimeout = value;
  }
  public resetArpInspectionMonitorTimeout() {
    this._arpInspectionMonitorTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpInspectionMonitorTimeoutInput() {
    return this._arpInspectionMonitorTimeout;
  }

  // arp_timeout - computed: true, optional: true, required: false
  private _arpTimeout?: number; 
  public get arpTimeout() {
    return this.getNumberAttribute('arp_timeout');
  }
  public set arpTimeout(value: number) {
    this._arpTimeout = value;
  }
  public resetArpTimeout() {
    this._arpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTimeoutInput() {
    return this._arpTimeout;
  }

  // asset_tag - computed: true, optional: true, required: false
  private _assetTag?: string; 
  public get assetTag() {
    return this.getStringAttribute('asset_tag');
  }
  public set assetTag(value: string) {
    this._assetTag = value;
  }
  public resetAssetTag() {
    this._assetTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetTagInput() {
    return this._assetTag;
  }

  // auto_isl - computed: true, optional: true, required: false
  private _autoIsl?: string; 
  public get autoIsl() {
    return this.getStringAttribute('auto_isl');
  }
  public set autoIsl(value: string) {
    this._autoIsl = value;
  }
  public resetAutoIsl() {
    this._autoIsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoIslInput() {
    return this._autoIsl;
  }

  // cfg_revert_timeout - computed: true, optional: true, required: false
  private _cfgRevertTimeout?: number; 
  public get cfgRevertTimeout() {
    return this.getNumberAttribute('cfg_revert_timeout');
  }
  public set cfgRevertTimeout(value: number) {
    this._cfgRevertTimeout = value;
  }
  public resetCfgRevertTimeout() {
    this._cfgRevertTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfgRevertTimeoutInput() {
    return this._cfgRevertTimeout;
  }

  // cfg_save - computed: true, optional: true, required: false
  private _cfgSave?: string; 
  public get cfgSave() {
    return this.getStringAttribute('cfg_save');
  }
  public set cfgSave(value: string) {
    this._cfgSave = value;
  }
  public resetCfgSave() {
    this._cfgSave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfgSaveInput() {
    return this._cfgSave;
  }

  // clt_cert_req - computed: true, optional: true, required: false
  private _cltCertReq?: string; 
  public get cltCertReq() {
    return this.getStringAttribute('clt_cert_req');
  }
  public set cltCertReq(value: string) {
    this._cltCertReq = value;
  }
  public resetCltCertReq() {
    this._cltCertReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cltCertReqInput() {
    return this._cltCertReq;
  }

  // csr_ca_attribute - computed: true, optional: true, required: false
  private _csrCaAttribute?: string; 
  public get csrCaAttribute() {
    return this.getStringAttribute('csr_ca_attribute');
  }
  public set csrCaAttribute(value: string) {
    this._csrCaAttribute = value;
  }
  public resetCsrCaAttribute() {
    this._csrCaAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrCaAttributeInput() {
    return this._csrCaAttribute;
  }

  // daily_restart - computed: true, optional: true, required: false
  private _dailyRestart?: string; 
  public get dailyRestart() {
    return this.getStringAttribute('daily_restart');
  }
  public set dailyRestart(value: string) {
    this._dailyRestart = value;
  }
  public resetDailyRestart() {
    this._dailyRestart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyRestartInput() {
    return this._dailyRestart;
  }

  // delaycli_timeout_cleanup - computed: true, optional: true, required: false
  private _delaycliTimeoutCleanup?: number; 
  public get delaycliTimeoutCleanup() {
    return this.getNumberAttribute('delaycli_timeout_cleanup');
  }
  public set delaycliTimeoutCleanup(value: number) {
    this._delaycliTimeoutCleanup = value;
  }
  public resetDelaycliTimeoutCleanup() {
    this._delaycliTimeoutCleanup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delaycliTimeoutCleanupInput() {
    return this._delaycliTimeoutCleanup;
  }

  // detect_ip_conflict - computed: true, optional: true, required: false
  private _detectIpConflict?: string; 
  public get detectIpConflict() {
    return this.getStringAttribute('detect_ip_conflict');
  }
  public set detectIpConflict(value: string) {
    this._detectIpConflict = value;
  }
  public resetDetectIpConflict() {
    this._detectIpConflict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectIpConflictInput() {
    return this._detectIpConflict;
  }

  // dh_params - computed: true, optional: true, required: false
  private _dhParams?: number; 
  public get dhParams() {
    return this.getNumberAttribute('dh_params');
  }
  public set dhParams(value: number) {
    this._dhParams = value;
  }
  public resetDhParams() {
    this._dhParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhParamsInput() {
    return this._dhParams;
  }

  // dhcp_circuit_id - computed: true, optional: true, required: false
  private _dhcpCircuitId?: string; 
  public get dhcpCircuitId() {
    return this.getStringAttribute('dhcp_circuit_id');
  }
  public set dhcpCircuitId(value: string) {
    this._dhcpCircuitId = value;
  }
  public resetDhcpCircuitId() {
    this._dhcpCircuitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpCircuitIdInput() {
    return this._dhcpCircuitId;
  }

  // dhcp_client_location - computed: true, optional: true, required: false
  private _dhcpClientLocation?: string; 
  public get dhcpClientLocation() {
    return this.getStringAttribute('dhcp_client_location');
  }
  public set dhcpClientLocation(value: string) {
    this._dhcpClientLocation = value;
  }
  public resetDhcpClientLocation() {
    this._dhcpClientLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpClientLocationInput() {
    return this._dhcpClientLocation;
  }

  // dhcp_option_format - computed: true, optional: true, required: false
  private _dhcpOptionFormat?: string; 
  public get dhcpOptionFormat() {
    return this.getStringAttribute('dhcp_option_format');
  }
  public set dhcpOptionFormat(value: string) {
    this._dhcpOptionFormat = value;
  }
  public resetDhcpOptionFormat() {
    this._dhcpOptionFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionFormatInput() {
    return this._dhcpOptionFormat;
  }

  // dhcp_remote_id - computed: true, optional: true, required: false
  private _dhcpRemoteId?: string; 
  public get dhcpRemoteId() {
    return this.getStringAttribute('dhcp_remote_id');
  }
  public set dhcpRemoteId(value: string) {
    this._dhcpRemoteId = value;
  }
  public resetDhcpRemoteId() {
    this._dhcpRemoteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRemoteIdInput() {
    return this._dhcpRemoteId;
  }

  // dhcp_server_access_list - computed: true, optional: true, required: false
  private _dhcpServerAccessList?: string; 
  public get dhcpServerAccessList() {
    return this.getStringAttribute('dhcp_server_access_list');
  }
  public set dhcpServerAccessList(value: string) {
    this._dhcpServerAccessList = value;
  }
  public resetDhcpServerAccessList() {
    this._dhcpServerAccessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpServerAccessListInput() {
    return this._dhcpServerAccessList;
  }

  // dhcp_snoop_client_req - computed: true, optional: true, required: false
  private _dhcpSnoopClientReq?: string; 
  public get dhcpSnoopClientReq() {
    return this.getStringAttribute('dhcp_snoop_client_req');
  }
  public set dhcpSnoopClientReq(value: string) {
    this._dhcpSnoopClientReq = value;
  }
  public resetDhcpSnoopClientReq() {
    this._dhcpSnoopClientReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpSnoopClientReqInput() {
    return this._dhcpSnoopClientReq;
  }

  // dhcps_db_exp - computed: true, optional: true, required: false
  private _dhcpsDbExp?: number; 
  public get dhcpsDbExp() {
    return this.getNumberAttribute('dhcps_db_exp');
  }
  public set dhcpsDbExp(value: number) {
    this._dhcpsDbExp = value;
  }
  public resetDhcpsDbExp() {
    this._dhcpsDbExp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpsDbExpInput() {
    return this._dhcpsDbExp;
  }

  // dhcps_db_per_port_learn_limit - computed: true, optional: true, required: false
  private _dhcpsDbPerPortLearnLimit?: number; 
  public get dhcpsDbPerPortLearnLimit() {
    return this.getNumberAttribute('dhcps_db_per_port_learn_limit');
  }
  public set dhcpsDbPerPortLearnLimit(value: number) {
    this._dhcpsDbPerPortLearnLimit = value;
  }
  public resetDhcpsDbPerPortLearnLimit() {
    this._dhcpsDbPerPortLearnLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpsDbPerPortLearnLimitInput() {
    return this._dhcpsDbPerPortLearnLimit;
  }

  // dst - computed: true, optional: true, required: false
  private _dst?: string; 
  public get dst() {
    return this.getStringAttribute('dst');
  }
  public set dst(value: string) {
    this._dst = value;
  }
  public resetDst() {
    this._dst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstInput() {
    return this._dst;
  }

  // failtime - computed: true, optional: true, required: false
  private _failtime?: number; 
  public get failtime() {
    return this.getNumberAttribute('failtime');
  }
  public set failtime(value: number) {
    this._failtime = value;
  }
  public resetFailtime() {
    this._failtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failtimeInput() {
    return this._failtime;
  }

  // fortilink_auto_discovery - computed: true, optional: true, required: false
  private _fortilinkAutoDiscovery?: string; 
  public get fortilinkAutoDiscovery() {
    return this.getStringAttribute('fortilink_auto_discovery');
  }
  public set fortilinkAutoDiscovery(value: string) {
    this._fortilinkAutoDiscovery = value;
  }
  public resetFortilinkAutoDiscovery() {
    this._fortilinkAutoDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortilinkAutoDiscoveryInput() {
    return this._fortilinkAutoDiscovery;
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // image_rotation - computed: true, optional: true, required: false
  private _imageRotation?: string; 
  public get imageRotation() {
    return this.getStringAttribute('image_rotation');
  }
  public set imageRotation(value: string) {
    this._imageRotation = value;
  }
  public resetImageRotation() {
    this._imageRotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRotationInput() {
    return this._imageRotation;
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // ip_conflict_ignore_default - computed: true, optional: true, required: false
  private _ipConflictIgnoreDefault?: string; 
  public get ipConflictIgnoreDefault() {
    return this.getStringAttribute('ip_conflict_ignore_default');
  }
  public set ipConflictIgnoreDefault(value: string) {
    this._ipConflictIgnoreDefault = value;
  }
  public resetIpConflictIgnoreDefault() {
    this._ipConflictIgnoreDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipConflictIgnoreDefaultInput() {
    return this._ipConflictIgnoreDefault;
  }

  // ipv6_accept_dad - computed: true, optional: true, required: false
  private _ipv6AcceptDad?: number; 
  public get ipv6AcceptDad() {
    return this.getNumberAttribute('ipv6_accept_dad');
  }
  public set ipv6AcceptDad(value: number) {
    this._ipv6AcceptDad = value;
  }
  public resetIpv6AcceptDad() {
    this._ipv6AcceptDad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AcceptDadInput() {
    return this._ipv6AcceptDad;
  }

  // ipv6_all_forwarding - computed: true, optional: true, required: false
  private _ipv6AllForwarding?: string; 
  public get ipv6AllForwarding() {
    return this.getStringAttribute('ipv6_all_forwarding');
  }
  public set ipv6AllForwarding(value: string) {
    this._ipv6AllForwarding = value;
  }
  public resetIpv6AllForwarding() {
    this._ipv6AllForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AllForwardingInput() {
    return this._ipv6AllForwarding;
  }

  // kernel_crashlog - computed: true, optional: true, required: false
  private _kernelCrashlog?: string; 
  public get kernelCrashlog() {
    return this.getStringAttribute('kernel_crashlog');
  }
  public set kernelCrashlog(value: string) {
    this._kernelCrashlog = value;
  }
  public resetKernelCrashlog() {
    this._kernelCrashlog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelCrashlogInput() {
    return this._kernelCrashlog;
  }

  // kernel_devicelog - computed: true, optional: true, required: false
  private _kernelDevicelog?: string; 
  public get kernelDevicelog() {
    return this.getStringAttribute('kernel_devicelog');
  }
  public set kernelDevicelog(value: string) {
    this._kernelDevicelog = value;
  }
  public resetKernelDevicelog() {
    this._kernelDevicelog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelDevicelogInput() {
    return this._kernelDevicelog;
  }

  // l3_host_expiry - computed: true, optional: true, required: false
  private _l3HostExpiry?: string; 
  public get l3HostExpiry() {
    return this.getStringAttribute('l3_host_expiry');
  }
  public set l3HostExpiry(value: string) {
    this._l3HostExpiry = value;
  }
  public resetL3HostExpiry() {
    this._l3HostExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3HostExpiryInput() {
    return this._l3HostExpiry;
  }

  // language - computed: true, optional: true, required: false
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  public resetLanguage() {
    this._language = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }

  // ldapconntimeout - computed: true, optional: true, required: false
  private _ldapconntimeout?: number; 
  public get ldapconntimeout() {
    return this.getNumberAttribute('ldapconntimeout');
  }
  public set ldapconntimeout(value: number) {
    this._ldapconntimeout = value;
  }
  public resetLdapconntimeout() {
    this._ldapconntimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapconntimeoutInput() {
    return this._ldapconntimeout;
  }

  // n8021x_ca_certificate - computed: true, optional: true, required: false
  private _n8021XCaCertificate?: string; 
  public get n8021XCaCertificate() {
    return this.getStringAttribute('n8021x_ca_certificate');
  }
  public set n8021XCaCertificate(value: string) {
    this._n8021XCaCertificate = value;
  }
  public resetN8021XCaCertificate() {
    this._n8021XCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get n8021XCaCertificateInput() {
    return this._n8021XCaCertificate;
  }

  // n8021x_certificate - computed: true, optional: true, required: false
  private _n8021XCertificate?: string; 
  public get n8021XCertificate() {
    return this.getStringAttribute('n8021x_certificate');
  }
  public set n8021XCertificate(value: string) {
    this._n8021XCertificate = value;
  }
  public resetN8021XCertificate() {
    this._n8021XCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get n8021XCertificateInput() {
    return this._n8021XCertificate;
  }

  // post_login_banner - computed: true, optional: true, required: false
  private _postLoginBanner?: string; 
  public get postLoginBanner() {
    return this.getStringAttribute('post_login_banner');
  }
  public set postLoginBanner(value: string) {
    this._postLoginBanner = value;
  }
  public resetPostLoginBanner() {
    this._postLoginBanner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postLoginBannerInput() {
    return this._postLoginBanner;
  }

  // pre_login_banner - computed: true, optional: true, required: false
  private _preLoginBanner?: string; 
  public get preLoginBanner() {
    return this.getStringAttribute('pre_login_banner');
  }
  public set preLoginBanner(value: string) {
    this._preLoginBanner = value;
  }
  public resetPreLoginBanner() {
    this._preLoginBanner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preLoginBannerInput() {
    return this._preLoginBanner;
  }

  // private_data_encryption - computed: true, optional: true, required: false
  private _privateDataEncryption?: string; 
  public get privateDataEncryption() {
    return this.getStringAttribute('private_data_encryption');
  }
  public set privateDataEncryption(value: string) {
    this._privateDataEncryption = value;
  }
  public resetPrivateDataEncryption() {
    this._privateDataEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateDataEncryptionInput() {
    return this._privateDataEncryption;
  }

  // radius_coa_port - computed: true, optional: true, required: false
  private _radiusCoaPort?: number; 
  public get radiusCoaPort() {
    return this.getNumberAttribute('radius_coa_port');
  }
  public set radiusCoaPort(value: number) {
    this._radiusCoaPort = value;
  }
  public resetRadiusCoaPort() {
    this._radiusCoaPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusCoaPortInput() {
    return this._radiusCoaPort;
  }

  // radius_port - computed: true, optional: true, required: false
  private _radiusPort?: number; 
  public get radiusPort() {
    return this.getNumberAttribute('radius_port');
  }
  public set radiusPort(value: number) {
    this._radiusPort = value;
  }
  public resetRadiusPort() {
    this._radiusPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusPortInput() {
    return this._radiusPort;
  }

  // radsec_coa_port - computed: true, optional: true, required: false
  private _radsecCoaPort?: number; 
  public get radsecCoaPort() {
    return this.getNumberAttribute('radsec_coa_port');
  }
  public set radsecCoaPort(value: number) {
    this._radsecCoaPort = value;
  }
  public resetRadsecCoaPort() {
    this._radsecCoaPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radsecCoaPortInput() {
    return this._radsecCoaPort;
  }

  // remoteauthtimeout - computed: true, optional: true, required: false
  private _remoteauthtimeout?: number; 
  public get remoteauthtimeout() {
    return this.getNumberAttribute('remoteauthtimeout');
  }
  public set remoteauthtimeout(value: number) {
    this._remoteauthtimeout = value;
  }
  public resetRemoteauthtimeout() {
    this._remoteauthtimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteauthtimeoutInput() {
    return this._remoteauthtimeout;
  }

  // reset_button - computed: true, optional: true, required: false
  private _resetButton?: string; 
  public get resetButton() {
    return this.getStringAttribute('reset_button');
  }
  public set resetButton(value: string) {
    this._resetButton = value;
  }
  public resetResetButton() {
    this._resetButton = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetButtonInput() {
    return this._resetButton;
  }

  // restart_time - computed: true, optional: true, required: false
  private _restartTime?: string; 
  public get restartTime() {
    return this.getStringAttribute('restart_time');
  }
  public set restartTime(value: string) {
    this._restartTime = value;
  }
  public resetRestartTime() {
    this._restartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartTimeInput() {
    return this._restartTime;
  }

  // revision_backup_on_logout - computed: true, optional: true, required: false
  private _revisionBackupOnLogout?: string; 
  public get revisionBackupOnLogout() {
    return this.getStringAttribute('revision_backup_on_logout');
  }
  public set revisionBackupOnLogout(value: string) {
    this._revisionBackupOnLogout = value;
  }
  public resetRevisionBackupOnLogout() {
    this._revisionBackupOnLogout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionBackupOnLogoutInput() {
    return this._revisionBackupOnLogout;
  }

  // revision_backup_on_upgrade - computed: true, optional: true, required: false
  private _revisionBackupOnUpgrade?: string; 
  public get revisionBackupOnUpgrade() {
    return this.getStringAttribute('revision_backup_on_upgrade');
  }
  public set revisionBackupOnUpgrade(value: string) {
    this._revisionBackupOnUpgrade = value;
  }
  public resetRevisionBackupOnUpgrade() {
    this._revisionBackupOnUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionBackupOnUpgradeInput() {
    return this._revisionBackupOnUpgrade;
  }

  // strong_crypto - computed: true, optional: true, required: false
  private _strongCrypto?: string; 
  public get strongCrypto() {
    return this.getStringAttribute('strong_crypto');
  }
  public set strongCrypto(value: string) {
    this._strongCrypto = value;
  }
  public resetStrongCrypto() {
    this._strongCrypto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strongCryptoInput() {
    return this._strongCrypto;
  }

  // switch_mgmt_mode - computed: true, optional: true, required: false
  private _switchMgmtMode?: string; 
  public get switchMgmtMode() {
    return this.getStringAttribute('switch_mgmt_mode');
  }
  public set switchMgmtMode(value: string) {
    this._switchMgmtMode = value;
  }
  public resetSwitchMgmtMode() {
    this._switchMgmtMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchMgmtModeInput() {
    return this._switchMgmtMode;
  }

  // tcp6_mss_min - computed: true, optional: true, required: false
  private _tcp6MssMin?: number; 
  public get tcp6MssMin() {
    return this.getNumberAttribute('tcp6_mss_min');
  }
  public set tcp6MssMin(value: number) {
    this._tcp6MssMin = value;
  }
  public resetTcp6MssMin() {
    this._tcp6MssMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcp6MssMinInput() {
    return this._tcp6MssMin;
  }

  // tcp_mss_min - computed: true, optional: true, required: false
  private _tcpMssMin?: number; 
  public get tcpMssMin() {
    return this.getNumberAttribute('tcp_mss_min');
  }
  public set tcpMssMin(value: number) {
    this._tcpMssMin = value;
  }
  public resetTcpMssMin() {
    this._tcpMssMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMssMinInput() {
    return this._tcpMssMin;
  }

  // tcp_options - computed: true, optional: true, required: false
  private _tcpOptions?: string; 
  public get tcpOptions() {
    return this.getStringAttribute('tcp_options');
  }
  public set tcpOptions(value: string) {
    this._tcpOptions = value;
  }
  public resetTcpOptions() {
    this._tcpOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpOptionsInput() {
    return this._tcpOptions;
  }

  // tftp - computed: true, optional: true, required: false
  private _tftp?: string; 
  public get tftp() {
    return this.getStringAttribute('tftp');
  }
  public set tftp(value: string) {
    this._tftp = value;
  }
  public resetTftp() {
    this._tftp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tftpInput() {
    return this._tftp;
  }

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_concurrent: cdktf.stringToTerraform(this._adminConcurrent),
      admin_https_pki_required: cdktf.stringToTerraform(this._adminHttpsPkiRequired),
      admin_https_ssl_versions: cdktf.stringToTerraform(this._adminHttpsSslVersions),
      admin_lockout_duration: cdktf.numberToTerraform(this._adminLockoutDuration),
      admin_lockout_threshold: cdktf.numberToTerraform(this._adminLockoutThreshold),
      admin_password_hash: cdktf.stringToTerraform(this._adminPasswordHash),
      admin_port: cdktf.numberToTerraform(this._adminPort),
      admin_restrict_local: cdktf.stringToTerraform(this._adminRestrictLocal),
      admin_scp: cdktf.stringToTerraform(this._adminScp),
      admin_server_cert: cdktf.stringToTerraform(this._adminServerCert),
      admin_sport: cdktf.numberToTerraform(this._adminSport),
      admin_ssh_grace_time: cdktf.numberToTerraform(this._adminSshGraceTime),
      admin_ssh_port: cdktf.numberToTerraform(this._adminSshPort),
      admin_ssh_v1: cdktf.stringToTerraform(this._adminSshV1),
      admin_telnet_port: cdktf.numberToTerraform(this._adminTelnetPort),
      admintimeout: cdktf.numberToTerraform(this._admintimeout),
      alert_interval: cdktf.numberToTerraform(this._alertInterval),
      alertd_relog: cdktf.stringToTerraform(this._alertdRelog),
      allow_subnet_overlap: cdktf.stringToTerraform(this._allowSubnetOverlap),
      arp_inspection_monitor_timeout: cdktf.numberToTerraform(this._arpInspectionMonitorTimeout),
      arp_timeout: cdktf.numberToTerraform(this._arpTimeout),
      asset_tag: cdktf.stringToTerraform(this._assetTag),
      auto_isl: cdktf.stringToTerraform(this._autoIsl),
      cfg_revert_timeout: cdktf.numberToTerraform(this._cfgRevertTimeout),
      cfg_save: cdktf.stringToTerraform(this._cfgSave),
      clt_cert_req: cdktf.stringToTerraform(this._cltCertReq),
      csr_ca_attribute: cdktf.stringToTerraform(this._csrCaAttribute),
      daily_restart: cdktf.stringToTerraform(this._dailyRestart),
      delaycli_timeout_cleanup: cdktf.numberToTerraform(this._delaycliTimeoutCleanup),
      detect_ip_conflict: cdktf.stringToTerraform(this._detectIpConflict),
      dh_params: cdktf.numberToTerraform(this._dhParams),
      dhcp_circuit_id: cdktf.stringToTerraform(this._dhcpCircuitId),
      dhcp_client_location: cdktf.stringToTerraform(this._dhcpClientLocation),
      dhcp_option_format: cdktf.stringToTerraform(this._dhcpOptionFormat),
      dhcp_remote_id: cdktf.stringToTerraform(this._dhcpRemoteId),
      dhcp_server_access_list: cdktf.stringToTerraform(this._dhcpServerAccessList),
      dhcp_snoop_client_req: cdktf.stringToTerraform(this._dhcpSnoopClientReq),
      dhcps_db_exp: cdktf.numberToTerraform(this._dhcpsDbExp),
      dhcps_db_per_port_learn_limit: cdktf.numberToTerraform(this._dhcpsDbPerPortLearnLimit),
      dst: cdktf.stringToTerraform(this._dst),
      failtime: cdktf.numberToTerraform(this._failtime),
      fortilink_auto_discovery: cdktf.stringToTerraform(this._fortilinkAutoDiscovery),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      image_rotation: cdktf.stringToTerraform(this._imageRotation),
      interval: cdktf.numberToTerraform(this._interval),
      ip_conflict_ignore_default: cdktf.stringToTerraform(this._ipConflictIgnoreDefault),
      ipv6_accept_dad: cdktf.numberToTerraform(this._ipv6AcceptDad),
      ipv6_all_forwarding: cdktf.stringToTerraform(this._ipv6AllForwarding),
      kernel_crashlog: cdktf.stringToTerraform(this._kernelCrashlog),
      kernel_devicelog: cdktf.stringToTerraform(this._kernelDevicelog),
      l3_host_expiry: cdktf.stringToTerraform(this._l3HostExpiry),
      language: cdktf.stringToTerraform(this._language),
      ldapconntimeout: cdktf.numberToTerraform(this._ldapconntimeout),
      n8021x_ca_certificate: cdktf.stringToTerraform(this._n8021XCaCertificate),
      n8021x_certificate: cdktf.stringToTerraform(this._n8021XCertificate),
      post_login_banner: cdktf.stringToTerraform(this._postLoginBanner),
      pre_login_banner: cdktf.stringToTerraform(this._preLoginBanner),
      private_data_encryption: cdktf.stringToTerraform(this._privateDataEncryption),
      radius_coa_port: cdktf.numberToTerraform(this._radiusCoaPort),
      radius_port: cdktf.numberToTerraform(this._radiusPort),
      radsec_coa_port: cdktf.numberToTerraform(this._radsecCoaPort),
      remoteauthtimeout: cdktf.numberToTerraform(this._remoteauthtimeout),
      reset_button: cdktf.stringToTerraform(this._resetButton),
      restart_time: cdktf.stringToTerraform(this._restartTime),
      revision_backup_on_logout: cdktf.stringToTerraform(this._revisionBackupOnLogout),
      revision_backup_on_upgrade: cdktf.stringToTerraform(this._revisionBackupOnUpgrade),
      strong_crypto: cdktf.stringToTerraform(this._strongCrypto),
      switch_mgmt_mode: cdktf.stringToTerraform(this._switchMgmtMode),
      tcp6_mss_min: cdktf.numberToTerraform(this._tcp6MssMin),
      tcp_mss_min: cdktf.numberToTerraform(this._tcpMssMin),
      tcp_options: cdktf.stringToTerraform(this._tcpOptions),
      tftp: cdktf.stringToTerraform(this._tftp),
      timezone: cdktf.stringToTerraform(this._timezone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_concurrent: {
        value: cdktf.stringToHclTerraform(this._adminConcurrent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_https_pki_required: {
        value: cdktf.stringToHclTerraform(this._adminHttpsPkiRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_https_ssl_versions: {
        value: cdktf.stringToHclTerraform(this._adminHttpsSslVersions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_lockout_duration: {
        value: cdktf.numberToHclTerraform(this._adminLockoutDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      admin_lockout_threshold: {
        value: cdktf.numberToHclTerraform(this._adminLockoutThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      admin_password_hash: {
        value: cdktf.stringToHclTerraform(this._adminPasswordHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_port: {
        value: cdktf.numberToHclTerraform(this._adminPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      admin_restrict_local: {
        value: cdktf.stringToHclTerraform(this._adminRestrictLocal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_scp: {
        value: cdktf.stringToHclTerraform(this._adminScp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_server_cert: {
        value: cdktf.stringToHclTerraform(this._adminServerCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_sport: {
        value: cdktf.numberToHclTerraform(this._adminSport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      admin_ssh_grace_time: {
        value: cdktf.numberToHclTerraform(this._adminSshGraceTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      admin_ssh_port: {
        value: cdktf.numberToHclTerraform(this._adminSshPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      admin_ssh_v1: {
        value: cdktf.stringToHclTerraform(this._adminSshV1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_telnet_port: {
        value: cdktf.numberToHclTerraform(this._adminTelnetPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      admintimeout: {
        value: cdktf.numberToHclTerraform(this._admintimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      alert_interval: {
        value: cdktf.numberToHclTerraform(this._alertInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      alertd_relog: {
        value: cdktf.stringToHclTerraform(this._alertdRelog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_subnet_overlap: {
        value: cdktf.stringToHclTerraform(this._allowSubnetOverlap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arp_inspection_monitor_timeout: {
        value: cdktf.numberToHclTerraform(this._arpInspectionMonitorTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      arp_timeout: {
        value: cdktf.numberToHclTerraform(this._arpTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      asset_tag: {
        value: cdktf.stringToHclTerraform(this._assetTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_isl: {
        value: cdktf.stringToHclTerraform(this._autoIsl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cfg_revert_timeout: {
        value: cdktf.numberToHclTerraform(this._cfgRevertTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cfg_save: {
        value: cdktf.stringToHclTerraform(this._cfgSave),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clt_cert_req: {
        value: cdktf.stringToHclTerraform(this._cltCertReq),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csr_ca_attribute: {
        value: cdktf.stringToHclTerraform(this._csrCaAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      daily_restart: {
        value: cdktf.stringToHclTerraform(this._dailyRestart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delaycli_timeout_cleanup: {
        value: cdktf.numberToHclTerraform(this._delaycliTimeoutCleanup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      detect_ip_conflict: {
        value: cdktf.stringToHclTerraform(this._detectIpConflict),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dh_params: {
        value: cdktf.numberToHclTerraform(this._dhParams),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dhcp_circuit_id: {
        value: cdktf.stringToHclTerraform(this._dhcpCircuitId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_client_location: {
        value: cdktf.stringToHclTerraform(this._dhcpClientLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_option_format: {
        value: cdktf.stringToHclTerraform(this._dhcpOptionFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_remote_id: {
        value: cdktf.stringToHclTerraform(this._dhcpRemoteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_server_access_list: {
        value: cdktf.stringToHclTerraform(this._dhcpServerAccessList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_snoop_client_req: {
        value: cdktf.stringToHclTerraform(this._dhcpSnoopClientReq),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcps_db_exp: {
        value: cdktf.numberToHclTerraform(this._dhcpsDbExp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dhcps_db_per_port_learn_limit: {
        value: cdktf.numberToHclTerraform(this._dhcpsDbPerPortLearnLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dst: {
        value: cdktf.stringToHclTerraform(this._dst),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failtime: {
        value: cdktf.numberToHclTerraform(this._failtime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fortilink_auto_discovery: {
        value: cdktf.stringToHclTerraform(this._fortilinkAutoDiscovery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      image_rotation: {
        value: cdktf.stringToHclTerraform(this._imageRotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_conflict_ignore_default: {
        value: cdktf.stringToHclTerraform(this._ipConflictIgnoreDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_accept_dad: {
        value: cdktf.numberToHclTerraform(this._ipv6AcceptDad),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_all_forwarding: {
        value: cdktf.stringToHclTerraform(this._ipv6AllForwarding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kernel_crashlog: {
        value: cdktf.stringToHclTerraform(this._kernelCrashlog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kernel_devicelog: {
        value: cdktf.stringToHclTerraform(this._kernelDevicelog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l3_host_expiry: {
        value: cdktf.stringToHclTerraform(this._l3HostExpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      language: {
        value: cdktf.stringToHclTerraform(this._language),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldapconntimeout: {
        value: cdktf.numberToHclTerraform(this._ldapconntimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      n8021x_ca_certificate: {
        value: cdktf.stringToHclTerraform(this._n8021XCaCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      n8021x_certificate: {
        value: cdktf.stringToHclTerraform(this._n8021XCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      post_login_banner: {
        value: cdktf.stringToHclTerraform(this._postLoginBanner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pre_login_banner: {
        value: cdktf.stringToHclTerraform(this._preLoginBanner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_data_encryption: {
        value: cdktf.stringToHclTerraform(this._privateDataEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_coa_port: {
        value: cdktf.numberToHclTerraform(this._radiusCoaPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radius_port: {
        value: cdktf.numberToHclTerraform(this._radiusPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radsec_coa_port: {
        value: cdktf.numberToHclTerraform(this._radsecCoaPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remoteauthtimeout: {
        value: cdktf.numberToHclTerraform(this._remoteauthtimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reset_button: {
        value: cdktf.stringToHclTerraform(this._resetButton),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restart_time: {
        value: cdktf.stringToHclTerraform(this._restartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      revision_backup_on_logout: {
        value: cdktf.stringToHclTerraform(this._revisionBackupOnLogout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      revision_backup_on_upgrade: {
        value: cdktf.stringToHclTerraform(this._revisionBackupOnUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strong_crypto: {
        value: cdktf.stringToHclTerraform(this._strongCrypto),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_mgmt_mode: {
        value: cdktf.stringToHclTerraform(this._switchMgmtMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp6_mss_min: {
        value: cdktf.numberToHclTerraform(this._tcp6MssMin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_mss_min: {
        value: cdktf.numberToHclTerraform(this._tcpMssMin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_options: {
        value: cdktf.stringToHclTerraform(this._tcpOptions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tftp: {
        value: cdktf.stringToHclTerraform(this._tftp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
