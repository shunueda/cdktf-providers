// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_fortiguard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiosSystemFortiguardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_fortiguard#id DataFortiosSystemFortiguard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_fortiguard#vdomparam DataFortiosSystemFortiguard#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_fortiguard fortios_system_fortiguard}
*/
export class DataFortiosSystemFortiguard extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_fortiguard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiosSystemFortiguard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiosSystemFortiguard to import
  * @param importFromId The id of the existing DataFortiosSystemFortiguard that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_fortiguard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiosSystemFortiguard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_fortiguard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_fortiguard fortios_system_fortiguard} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiosSystemFortiguardConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataFortiosSystemFortiguardConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_fortiguard',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
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
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // antispam_cache - computed: true, optional: false, required: false
  public get antispamCache() {
    return this.getStringAttribute('antispam_cache');
  }

  // antispam_cache_mpercent - computed: true, optional: false, required: false
  public get antispamCacheMpercent() {
    return this.getNumberAttribute('antispam_cache_mpercent');
  }

  // antispam_cache_mpermille - computed: true, optional: false, required: false
  public get antispamCacheMpermille() {
    return this.getNumberAttribute('antispam_cache_mpermille');
  }

  // antispam_cache_ttl - computed: true, optional: false, required: false
  public get antispamCacheTtl() {
    return this.getNumberAttribute('antispam_cache_ttl');
  }

  // antispam_expiration - computed: true, optional: false, required: false
  public get antispamExpiration() {
    return this.getNumberAttribute('antispam_expiration');
  }

  // antispam_force_off - computed: true, optional: false, required: false
  public get antispamForceOff() {
    return this.getStringAttribute('antispam_force_off');
  }

  // antispam_license - computed: true, optional: false, required: false
  public get antispamLicense() {
    return this.getNumberAttribute('antispam_license');
  }

  // antispam_timeout - computed: true, optional: false, required: false
  public get antispamTimeout() {
    return this.getNumberAttribute('antispam_timeout');
  }

  // anycast_sdns_server_ip - computed: true, optional: false, required: false
  public get anycastSdnsServerIp() {
    return this.getStringAttribute('anycast_sdns_server_ip');
  }

  // anycast_sdns_server_port - computed: true, optional: false, required: false
  public get anycastSdnsServerPort() {
    return this.getNumberAttribute('anycast_sdns_server_port');
  }

  // auto_firmware_upgrade - computed: true, optional: false, required: false
  public get autoFirmwareUpgrade() {
    return this.getStringAttribute('auto_firmware_upgrade');
  }

  // auto_firmware_upgrade_day - computed: true, optional: false, required: false
  public get autoFirmwareUpgradeDay() {
    return this.getStringAttribute('auto_firmware_upgrade_day');
  }

  // auto_firmware_upgrade_delay - computed: true, optional: false, required: false
  public get autoFirmwareUpgradeDelay() {
    return this.getNumberAttribute('auto_firmware_upgrade_delay');
  }

  // auto_firmware_upgrade_end_hour - computed: true, optional: false, required: false
  public get autoFirmwareUpgradeEndHour() {
    return this.getNumberAttribute('auto_firmware_upgrade_end_hour');
  }

  // auto_firmware_upgrade_start_hour - computed: true, optional: false, required: false
  public get autoFirmwareUpgradeStartHour() {
    return this.getNumberAttribute('auto_firmware_upgrade_start_hour');
  }

  // auto_join_forticloud - computed: true, optional: false, required: false
  public get autoJoinForticloud() {
    return this.getStringAttribute('auto_join_forticloud');
  }

  // ddns_server_ip - computed: true, optional: false, required: false
  public get ddnsServerIp() {
    return this.getStringAttribute('ddns_server_ip');
  }

  // ddns_server_ip6 - computed: true, optional: false, required: false
  public get ddnsServerIp6() {
    return this.getStringAttribute('ddns_server_ip6');
  }

  // ddns_server_port - computed: true, optional: false, required: false
  public get ddnsServerPort() {
    return this.getNumberAttribute('ddns_server_port');
  }

  // fds_license_expiring_days - computed: true, optional: false, required: false
  public get fdsLicenseExpiringDays() {
    return this.getNumberAttribute('fds_license_expiring_days');
  }

  // fortiguard_anycast - computed: true, optional: false, required: false
  public get fortiguardAnycast() {
    return this.getStringAttribute('fortiguard_anycast');
  }

  // fortiguard_anycast_source - computed: true, optional: false, required: false
  public get fortiguardAnycastSource() {
    return this.getStringAttribute('fortiguard_anycast_source');
  }

  // gui_prompt_auto_upgrade - computed: true, optional: false, required: false
  public get guiPromptAutoUpgrade() {
    return this.getStringAttribute('gui_prompt_auto_upgrade');
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

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // interface_select_method - computed: true, optional: false, required: false
  public get interfaceSelectMethod() {
    return this.getStringAttribute('interface_select_method');
  }

  // load_balance_servers - computed: true, optional: false, required: false
  public get loadBalanceServers() {
    return this.getNumberAttribute('load_balance_servers');
  }

  // outbreak_prevention_cache - computed: true, optional: false, required: false
  public get outbreakPreventionCache() {
    return this.getStringAttribute('outbreak_prevention_cache');
  }

  // outbreak_prevention_cache_mpercent - computed: true, optional: false, required: false
  public get outbreakPreventionCacheMpercent() {
    return this.getNumberAttribute('outbreak_prevention_cache_mpercent');
  }

  // outbreak_prevention_cache_mpermille - computed: true, optional: false, required: false
  public get outbreakPreventionCacheMpermille() {
    return this.getNumberAttribute('outbreak_prevention_cache_mpermille');
  }

  // outbreak_prevention_cache_ttl - computed: true, optional: false, required: false
  public get outbreakPreventionCacheTtl() {
    return this.getNumberAttribute('outbreak_prevention_cache_ttl');
  }

  // outbreak_prevention_expiration - computed: true, optional: false, required: false
  public get outbreakPreventionExpiration() {
    return this.getNumberAttribute('outbreak_prevention_expiration');
  }

  // outbreak_prevention_force_off - computed: true, optional: false, required: false
  public get outbreakPreventionForceOff() {
    return this.getStringAttribute('outbreak_prevention_force_off');
  }

  // outbreak_prevention_license - computed: true, optional: false, required: false
  public get outbreakPreventionLicense() {
    return this.getNumberAttribute('outbreak_prevention_license');
  }

  // outbreak_prevention_timeout - computed: true, optional: false, required: false
  public get outbreakPreventionTimeout() {
    return this.getNumberAttribute('outbreak_prevention_timeout');
  }

  // persistent_connection - computed: true, optional: false, required: false
  public get persistentConnection() {
    return this.getStringAttribute('persistent_connection');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // proxy_password - computed: true, optional: false, required: false
  public get proxyPassword() {
    return this.getStringAttribute('proxy_password');
  }

  // proxy_server_ip - computed: true, optional: false, required: false
  public get proxyServerIp() {
    return this.getStringAttribute('proxy_server_ip');
  }

  // proxy_server_port - computed: true, optional: false, required: false
  public get proxyServerPort() {
    return this.getNumberAttribute('proxy_server_port');
  }

  // proxy_username - computed: true, optional: false, required: false
  public get proxyUsername() {
    return this.getStringAttribute('proxy_username');
  }

  // sandbox_inline_scan - computed: true, optional: false, required: false
  public get sandboxInlineScan() {
    return this.getStringAttribute('sandbox_inline_scan');
  }

  // sandbox_region - computed: true, optional: false, required: false
  public get sandboxRegion() {
    return this.getStringAttribute('sandbox_region');
  }

  // sdns_options - computed: true, optional: false, required: false
  public get sdnsOptions() {
    return this.getStringAttribute('sdns_options');
  }

  // sdns_server_ip - computed: true, optional: false, required: false
  public get sdnsServerIp() {
    return this.getStringAttribute('sdns_server_ip');
  }

  // sdns_server_port - computed: true, optional: false, required: false
  public get sdnsServerPort() {
    return this.getNumberAttribute('sdns_server_port');
  }

  // service_account_id - computed: true, optional: false, required: false
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }

  // source_ip - computed: true, optional: false, required: false
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }

  // source_ip6 - computed: true, optional: false, required: false
  public get sourceIp6() {
    return this.getStringAttribute('source_ip6');
  }

  // subscribe_update_notification - computed: true, optional: false, required: false
  public get subscribeUpdateNotification() {
    return this.getStringAttribute('subscribe_update_notification');
  }

  // update_build_proxy - computed: true, optional: false, required: false
  public get updateBuildProxy() {
    return this.getStringAttribute('update_build_proxy');
  }

  // update_dldb - computed: true, optional: false, required: false
  public get updateDldb() {
    return this.getStringAttribute('update_dldb');
  }

  // update_extdb - computed: true, optional: false, required: false
  public get updateExtdb() {
    return this.getStringAttribute('update_extdb');
  }

  // update_ffdb - computed: true, optional: false, required: false
  public get updateFfdb() {
    return this.getStringAttribute('update_ffdb');
  }

  // update_server_location - computed: true, optional: false, required: false
  public get updateServerLocation() {
    return this.getStringAttribute('update_server_location');
  }

  // update_uwdb - computed: true, optional: false, required: false
  public get updateUwdb() {
    return this.getStringAttribute('update_uwdb');
  }

  // vdom - computed: true, optional: false, required: false
  public get vdom() {
    return this.getStringAttribute('vdom');
  }

  // vdomparam - computed: false, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // videofilter_expiration - computed: true, optional: false, required: false
  public get videofilterExpiration() {
    return this.getNumberAttribute('videofilter_expiration');
  }

  // videofilter_license - computed: true, optional: false, required: false
  public get videofilterLicense() {
    return this.getNumberAttribute('videofilter_license');
  }

  // vrf_select - computed: true, optional: false, required: false
  public get vrfSelect() {
    return this.getNumberAttribute('vrf_select');
  }

  // webfilter_cache - computed: true, optional: false, required: false
  public get webfilterCache() {
    return this.getStringAttribute('webfilter_cache');
  }

  // webfilter_cache_ttl - computed: true, optional: false, required: false
  public get webfilterCacheTtl() {
    return this.getNumberAttribute('webfilter_cache_ttl');
  }

  // webfilter_expiration - computed: true, optional: false, required: false
  public get webfilterExpiration() {
    return this.getNumberAttribute('webfilter_expiration');
  }

  // webfilter_force_off - computed: true, optional: false, required: false
  public get webfilterForceOff() {
    return this.getStringAttribute('webfilter_force_off');
  }

  // webfilter_license - computed: true, optional: false, required: false
  public get webfilterLicense() {
    return this.getNumberAttribute('webfilter_license');
  }

  // webfilter_timeout - computed: true, optional: false, required: false
  public get webfilterTimeout() {
    return this.getNumberAttribute('webfilter_timeout');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
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
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
