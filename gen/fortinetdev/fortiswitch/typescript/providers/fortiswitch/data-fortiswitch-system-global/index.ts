// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_global
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiswitchSystemGlobalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_global#id DataFortiswitchSystemGlobal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_global fortiswitch_system_global}
*/
export class DataFortiswitchSystemGlobal extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_system_global";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiswitchSystemGlobal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiswitchSystemGlobal to import
  * @param importFromId The id of the existing DataFortiswitchSystemGlobal that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_global#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiswitchSystemGlobal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_system_global", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_global fortiswitch_system_global} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiswitchSystemGlobalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataFortiswitchSystemGlobalConfig = {}) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_concurrent - computed: true, optional: false, required: false
  public get adminConcurrent() {
    return this.getStringAttribute('admin_concurrent');
  }

  // admin_https_pki_required - computed: true, optional: false, required: false
  public get adminHttpsPkiRequired() {
    return this.getStringAttribute('admin_https_pki_required');
  }

  // admin_https_ssl_versions - computed: true, optional: false, required: false
  public get adminHttpsSslVersions() {
    return this.getStringAttribute('admin_https_ssl_versions');
  }

  // admin_lockout_duration - computed: true, optional: false, required: false
  public get adminLockoutDuration() {
    return this.getNumberAttribute('admin_lockout_duration');
  }

  // admin_lockout_threshold - computed: true, optional: false, required: false
  public get adminLockoutThreshold() {
    return this.getNumberAttribute('admin_lockout_threshold');
  }

  // admin_password_hash - computed: true, optional: false, required: false
  public get adminPasswordHash() {
    return this.getStringAttribute('admin_password_hash');
  }

  // admin_port - computed: true, optional: false, required: false
  public get adminPort() {
    return this.getNumberAttribute('admin_port');
  }

  // admin_restrict_local - computed: true, optional: false, required: false
  public get adminRestrictLocal() {
    return this.getStringAttribute('admin_restrict_local');
  }

  // admin_scp - computed: true, optional: false, required: false
  public get adminScp() {
    return this.getStringAttribute('admin_scp');
  }

  // admin_server_cert - computed: true, optional: false, required: false
  public get adminServerCert() {
    return this.getStringAttribute('admin_server_cert');
  }

  // admin_sport - computed: true, optional: false, required: false
  public get adminSport() {
    return this.getNumberAttribute('admin_sport');
  }

  // admin_ssh_grace_time - computed: true, optional: false, required: false
  public get adminSshGraceTime() {
    return this.getNumberAttribute('admin_ssh_grace_time');
  }

  // admin_ssh_port - computed: true, optional: false, required: false
  public get adminSshPort() {
    return this.getNumberAttribute('admin_ssh_port');
  }

  // admin_ssh_v1 - computed: true, optional: false, required: false
  public get adminSshV1() {
    return this.getStringAttribute('admin_ssh_v1');
  }

  // admin_telnet_port - computed: true, optional: false, required: false
  public get adminTelnetPort() {
    return this.getNumberAttribute('admin_telnet_port');
  }

  // admintimeout - computed: true, optional: false, required: false
  public get admintimeout() {
    return this.getNumberAttribute('admintimeout');
  }

  // alert_interval - computed: true, optional: false, required: false
  public get alertInterval() {
    return this.getNumberAttribute('alert_interval');
  }

  // alertd_relog - computed: true, optional: false, required: false
  public get alertdRelog() {
    return this.getStringAttribute('alertd_relog');
  }

  // allow_subnet_overlap - computed: true, optional: false, required: false
  public get allowSubnetOverlap() {
    return this.getStringAttribute('allow_subnet_overlap');
  }

  // arp_inspection_monitor_timeout - computed: true, optional: false, required: false
  public get arpInspectionMonitorTimeout() {
    return this.getNumberAttribute('arp_inspection_monitor_timeout');
  }

  // arp_timeout - computed: true, optional: false, required: false
  public get arpTimeout() {
    return this.getNumberAttribute('arp_timeout');
  }

  // asset_tag - computed: true, optional: false, required: false
  public get assetTag() {
    return this.getStringAttribute('asset_tag');
  }

  // auto_isl - computed: true, optional: false, required: false
  public get autoIsl() {
    return this.getStringAttribute('auto_isl');
  }

  // cfg_revert_timeout - computed: true, optional: false, required: false
  public get cfgRevertTimeout() {
    return this.getNumberAttribute('cfg_revert_timeout');
  }

  // cfg_save - computed: true, optional: false, required: false
  public get cfgSave() {
    return this.getStringAttribute('cfg_save');
  }

  // clt_cert_req - computed: true, optional: false, required: false
  public get cltCertReq() {
    return this.getStringAttribute('clt_cert_req');
  }

  // csr_ca_attribute - computed: true, optional: false, required: false
  public get csrCaAttribute() {
    return this.getStringAttribute('csr_ca_attribute');
  }

  // daily_restart - computed: true, optional: false, required: false
  public get dailyRestart() {
    return this.getStringAttribute('daily_restart');
  }

  // delaycli_timeout_cleanup - computed: true, optional: false, required: false
  public get delaycliTimeoutCleanup() {
    return this.getNumberAttribute('delaycli_timeout_cleanup');
  }

  // detect_ip_conflict - computed: true, optional: false, required: false
  public get detectIpConflict() {
    return this.getStringAttribute('detect_ip_conflict');
  }

  // dh_params - computed: true, optional: false, required: false
  public get dhParams() {
    return this.getNumberAttribute('dh_params');
  }

  // dhcp_circuit_id - computed: true, optional: false, required: false
  public get dhcpCircuitId() {
    return this.getStringAttribute('dhcp_circuit_id');
  }

  // dhcp_client_location - computed: true, optional: false, required: false
  public get dhcpClientLocation() {
    return this.getStringAttribute('dhcp_client_location');
  }

  // dhcp_option_format - computed: true, optional: false, required: false
  public get dhcpOptionFormat() {
    return this.getStringAttribute('dhcp_option_format');
  }

  // dhcp_remote_id - computed: true, optional: false, required: false
  public get dhcpRemoteId() {
    return this.getStringAttribute('dhcp_remote_id');
  }

  // dhcp_server_access_list - computed: true, optional: false, required: false
  public get dhcpServerAccessList() {
    return this.getStringAttribute('dhcp_server_access_list');
  }

  // dhcp_snoop_client_req - computed: true, optional: false, required: false
  public get dhcpSnoopClientReq() {
    return this.getStringAttribute('dhcp_snoop_client_req');
  }

  // dhcps_db_exp - computed: true, optional: false, required: false
  public get dhcpsDbExp() {
    return this.getNumberAttribute('dhcps_db_exp');
  }

  // dhcps_db_per_port_learn_limit - computed: true, optional: false, required: false
  public get dhcpsDbPerPortLearnLimit() {
    return this.getNumberAttribute('dhcps_db_per_port_learn_limit');
  }

  // dst - computed: true, optional: false, required: false
  public get dst() {
    return this.getStringAttribute('dst');
  }

  // failtime - computed: true, optional: false, required: false
  public get failtime() {
    return this.getNumberAttribute('failtime');
  }

  // fortilink_auto_discovery - computed: true, optional: false, required: false
  public get fortilinkAutoDiscovery() {
    return this.getStringAttribute('fortilink_auto_discovery');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
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

  // image_rotation - computed: true, optional: false, required: false
  public get imageRotation() {
    return this.getStringAttribute('image_rotation');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // ip_conflict_ignore_default - computed: true, optional: false, required: false
  public get ipConflictIgnoreDefault() {
    return this.getStringAttribute('ip_conflict_ignore_default');
  }

  // ipv6_accept_dad - computed: true, optional: false, required: false
  public get ipv6AcceptDad() {
    return this.getNumberAttribute('ipv6_accept_dad');
  }

  // ipv6_all_forwarding - computed: true, optional: false, required: false
  public get ipv6AllForwarding() {
    return this.getStringAttribute('ipv6_all_forwarding');
  }

  // kernel_crashlog - computed: true, optional: false, required: false
  public get kernelCrashlog() {
    return this.getStringAttribute('kernel_crashlog');
  }

  // kernel_devicelog - computed: true, optional: false, required: false
  public get kernelDevicelog() {
    return this.getStringAttribute('kernel_devicelog');
  }

  // l3_host_expiry - computed: true, optional: false, required: false
  public get l3HostExpiry() {
    return this.getStringAttribute('l3_host_expiry');
  }

  // language - computed: true, optional: false, required: false
  public get language() {
    return this.getStringAttribute('language');
  }

  // ldapconntimeout - computed: true, optional: false, required: false
  public get ldapconntimeout() {
    return this.getNumberAttribute('ldapconntimeout');
  }

  // n8021x_ca_certificate - computed: true, optional: false, required: false
  public get n8021XCaCertificate() {
    return this.getStringAttribute('n8021x_ca_certificate');
  }

  // n8021x_certificate - computed: true, optional: false, required: false
  public get n8021XCertificate() {
    return this.getStringAttribute('n8021x_certificate');
  }

  // post_login_banner - computed: true, optional: false, required: false
  public get postLoginBanner() {
    return this.getStringAttribute('post_login_banner');
  }

  // pre_login_banner - computed: true, optional: false, required: false
  public get preLoginBanner() {
    return this.getStringAttribute('pre_login_banner');
  }

  // private_data_encryption - computed: true, optional: false, required: false
  public get privateDataEncryption() {
    return this.getStringAttribute('private_data_encryption');
  }

  // radius_coa_port - computed: true, optional: false, required: false
  public get radiusCoaPort() {
    return this.getNumberAttribute('radius_coa_port');
  }

  // radius_port - computed: true, optional: false, required: false
  public get radiusPort() {
    return this.getNumberAttribute('radius_port');
  }

  // radsec_coa_port - computed: true, optional: false, required: false
  public get radsecCoaPort() {
    return this.getNumberAttribute('radsec_coa_port');
  }

  // remoteauthtimeout - computed: true, optional: false, required: false
  public get remoteauthtimeout() {
    return this.getNumberAttribute('remoteauthtimeout');
  }

  // reset_button - computed: true, optional: false, required: false
  public get resetButton() {
    return this.getStringAttribute('reset_button');
  }

  // restart_time - computed: true, optional: false, required: false
  public get restartTime() {
    return this.getStringAttribute('restart_time');
  }

  // revision_backup_on_logout - computed: true, optional: false, required: false
  public get revisionBackupOnLogout() {
    return this.getStringAttribute('revision_backup_on_logout');
  }

  // revision_backup_on_upgrade - computed: true, optional: false, required: false
  public get revisionBackupOnUpgrade() {
    return this.getStringAttribute('revision_backup_on_upgrade');
  }

  // strong_crypto - computed: true, optional: false, required: false
  public get strongCrypto() {
    return this.getStringAttribute('strong_crypto');
  }

  // switch_mgmt_mode - computed: true, optional: false, required: false
  public get switchMgmtMode() {
    return this.getStringAttribute('switch_mgmt_mode');
  }

  // tcp6_mss_min - computed: true, optional: false, required: false
  public get tcp6MssMin() {
    return this.getNumberAttribute('tcp6_mss_min');
  }

  // tcp_mss_min - computed: true, optional: false, required: false
  public get tcpMssMin() {
    return this.getNumberAttribute('tcp_mss_min');
  }

  // tcp_options - computed: true, optional: false, required: false
  public get tcpOptions() {
    return this.getStringAttribute('tcp_options');
  }

  // tftp - computed: true, optional: false, required: false
  public get tftp() {
    return this.getStringAttribute('tftp');
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
