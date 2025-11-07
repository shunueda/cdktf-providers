// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelesscontrollerWtpprofileLbsAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#aeroscout WirelesscontrollerWtpprofileLbsA#aeroscout}
  */
  readonly aeroscout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#aeroscout_ap_mac WirelesscontrollerWtpprofileLbsA#aeroscout_ap_mac}
  */
  readonly aeroscoutApMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#aeroscout_mmu_report WirelesscontrollerWtpprofileLbsA#aeroscout_mmu_report}
  */
  readonly aeroscoutMmuReport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#aeroscout_mu WirelesscontrollerWtpprofileLbsA#aeroscout_mu}
  */
  readonly aeroscoutMu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#aeroscout_mu_factor WirelesscontrollerWtpprofileLbsA#aeroscout_mu_factor}
  */
  readonly aeroscoutMuFactor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#aeroscout_mu_timeout WirelesscontrollerWtpprofileLbsA#aeroscout_mu_timeout}
  */
  readonly aeroscoutMuTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#aeroscout_server_ip WirelesscontrollerWtpprofileLbsA#aeroscout_server_ip}
  */
  readonly aeroscoutServerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#aeroscout_server_port WirelesscontrollerWtpprofileLbsA#aeroscout_server_port}
  */
  readonly aeroscoutServerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#ble_rtls WirelesscontrollerWtpprofileLbsA#ble_rtls}
  */
  readonly bleRtls?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#ble_rtls_accumulation_interval WirelesscontrollerWtpprofileLbsA#ble_rtls_accumulation_interval}
  */
  readonly bleRtlsAccumulationInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#ble_rtls_asset_addrgrp_list WirelesscontrollerWtpprofileLbsA#ble_rtls_asset_addrgrp_list}
  */
  readonly bleRtlsAssetAddrgrpList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#ble_rtls_asset_uuid_list1 WirelesscontrollerWtpprofileLbsA#ble_rtls_asset_uuid_list1}
  */
  readonly bleRtlsAssetUuidList1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#ble_rtls_asset_uuid_list2 WirelesscontrollerWtpprofileLbsA#ble_rtls_asset_uuid_list2}
  */
  readonly bleRtlsAssetUuidList2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#ble_rtls_asset_uuid_list3 WirelesscontrollerWtpprofileLbsA#ble_rtls_asset_uuid_list3}
  */
  readonly bleRtlsAssetUuidList3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#ble_rtls_asset_uuid_list4 WirelesscontrollerWtpprofileLbsA#ble_rtls_asset_uuid_list4}
  */
  readonly bleRtlsAssetUuidList4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#ble_rtls_protocol WirelesscontrollerWtpprofileLbsA#ble_rtls_protocol}
  */
  readonly bleRtlsProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#ble_rtls_reporting_interval WirelesscontrollerWtpprofileLbsA#ble_rtls_reporting_interval}
  */
  readonly bleRtlsReportingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#ble_rtls_server_fqdn WirelesscontrollerWtpprofileLbsA#ble_rtls_server_fqdn}
  */
  readonly bleRtlsServerFqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#ble_rtls_server_path WirelesscontrollerWtpprofileLbsA#ble_rtls_server_path}
  */
  readonly bleRtlsServerPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#ble_rtls_server_port WirelesscontrollerWtpprofileLbsA#ble_rtls_server_port}
  */
  readonly bleRtlsServerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#ble_rtls_server_token WirelesscontrollerWtpprofileLbsA#ble_rtls_server_token}
  */
  readonly bleRtlsServerToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#device_name WirelesscontrollerWtpprofileLbsA#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#device_vdom WirelesscontrollerWtpprofileLbsA#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#ekahau_blink_mode WirelesscontrollerWtpprofileLbsA#ekahau_blink_mode}
  */
  readonly ekahauBlinkMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#ekahau_tag WirelesscontrollerWtpprofileLbsA#ekahau_tag}
  */
  readonly ekahauTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#erc_server_ip WirelesscontrollerWtpprofileLbsA#erc_server_ip}
  */
  readonly ercServerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#erc_server_port WirelesscontrollerWtpprofileLbsA#erc_server_port}
  */
  readonly ercServerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#fortipresence WirelesscontrollerWtpprofileLbsA#fortipresence}
  */
  readonly fortipresence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#fortipresence_ble WirelesscontrollerWtpprofileLbsA#fortipresence_ble}
  */
  readonly fortipresenceBle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#fortipresence_frequency WirelesscontrollerWtpprofileLbsA#fortipresence_frequency}
  */
  readonly fortipresenceFrequency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#fortipresence_port WirelesscontrollerWtpprofileLbsA#fortipresence_port}
  */
  readonly fortipresencePort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#fortipresence_project WirelesscontrollerWtpprofileLbsA#fortipresence_project}
  */
  readonly fortipresenceProject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#fortipresence_rogue WirelesscontrollerWtpprofileLbsA#fortipresence_rogue}
  */
  readonly fortipresenceRogue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#fortipresence_secret WirelesscontrollerWtpprofileLbsA#fortipresence_secret}
  */
  readonly fortipresenceSecret?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#fortipresence_server WirelesscontrollerWtpprofileLbsA#fortipresence_server}
  */
  readonly fortipresenceServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#fortipresence_server_addr_type WirelesscontrollerWtpprofileLbsA#fortipresence_server_addr_type}
  */
  readonly fortipresenceServerAddrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#fortipresence_server_fqdn WirelesscontrollerWtpprofileLbsA#fortipresence_server_fqdn}
  */
  readonly fortipresenceServerFqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#fortipresence_unassoc WirelesscontrollerWtpprofileLbsA#fortipresence_unassoc}
  */
  readonly fortipresenceUnassoc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#id WirelesscontrollerWtpprofileLbsA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#polestar WirelesscontrollerWtpprofileLbsA#polestar}
  */
  readonly polestar?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#polestar_accumulation_interval WirelesscontrollerWtpprofileLbsA#polestar_accumulation_interval}
  */
  readonly polestarAccumulationInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#polestar_asset_addrgrp_list WirelesscontrollerWtpprofileLbsA#polestar_asset_addrgrp_list}
  */
  readonly polestarAssetAddrgrpList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#polestar_asset_uuid_list1 WirelesscontrollerWtpprofileLbsA#polestar_asset_uuid_list1}
  */
  readonly polestarAssetUuidList1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#polestar_asset_uuid_list2 WirelesscontrollerWtpprofileLbsA#polestar_asset_uuid_list2}
  */
  readonly polestarAssetUuidList2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#polestar_asset_uuid_list3 WirelesscontrollerWtpprofileLbsA#polestar_asset_uuid_list3}
  */
  readonly polestarAssetUuidList3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#polestar_asset_uuid_list4 WirelesscontrollerWtpprofileLbsA#polestar_asset_uuid_list4}
  */
  readonly polestarAssetUuidList4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#polestar_protocol WirelesscontrollerWtpprofileLbsA#polestar_protocol}
  */
  readonly polestarProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#polestar_reporting_interval WirelesscontrollerWtpprofileLbsA#polestar_reporting_interval}
  */
  readonly polestarReportingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#polestar_server_fqdn WirelesscontrollerWtpprofileLbsA#polestar_server_fqdn}
  */
  readonly polestarServerFqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#polestar_server_path WirelesscontrollerWtpprofileLbsA#polestar_server_path}
  */
  readonly polestarServerPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#polestar_server_port WirelesscontrollerWtpprofileLbsA#polestar_server_port}
  */
  readonly polestarServerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#polestar_server_token WirelesscontrollerWtpprofileLbsA#polestar_server_token}
  */
  readonly polestarServerToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#station_locate WirelesscontrollerWtpprofileLbsA#station_locate}
  */
  readonly stationLocate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#wtp_profile WirelesscontrollerWtpprofileLbsA#wtp_profile}
  */
  readonly wtpProfile: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs fmgdevice_wirelesscontroller_wtpprofile_lbs}
*/
export class WirelesscontrollerWtpprofileLbsA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_wirelesscontroller_wtpprofile_lbs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelesscontrollerWtpprofileLbsA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelesscontrollerWtpprofileLbsA to import
  * @param importFromId The id of the existing WirelesscontrollerWtpprofileLbsA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelesscontrollerWtpprofileLbsA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_wirelesscontroller_wtpprofile_lbs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_lbs fmgdevice_wirelesscontroller_wtpprofile_lbs} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelesscontrollerWtpprofileLbsAConfig
  */
  public constructor(scope: Construct, id: string, config: WirelesscontrollerWtpprofileLbsAConfig) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_wirelesscontroller_wtpprofile_lbs',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aeroscout = config.aeroscout;
    this._aeroscoutApMac = config.aeroscoutApMac;
    this._aeroscoutMmuReport = config.aeroscoutMmuReport;
    this._aeroscoutMu = config.aeroscoutMu;
    this._aeroscoutMuFactor = config.aeroscoutMuFactor;
    this._aeroscoutMuTimeout = config.aeroscoutMuTimeout;
    this._aeroscoutServerIp = config.aeroscoutServerIp;
    this._aeroscoutServerPort = config.aeroscoutServerPort;
    this._bleRtls = config.bleRtls;
    this._bleRtlsAccumulationInterval = config.bleRtlsAccumulationInterval;
    this._bleRtlsAssetAddrgrpList = config.bleRtlsAssetAddrgrpList;
    this._bleRtlsAssetUuidList1 = config.bleRtlsAssetUuidList1;
    this._bleRtlsAssetUuidList2 = config.bleRtlsAssetUuidList2;
    this._bleRtlsAssetUuidList3 = config.bleRtlsAssetUuidList3;
    this._bleRtlsAssetUuidList4 = config.bleRtlsAssetUuidList4;
    this._bleRtlsProtocol = config.bleRtlsProtocol;
    this._bleRtlsReportingInterval = config.bleRtlsReportingInterval;
    this._bleRtlsServerFqdn = config.bleRtlsServerFqdn;
    this._bleRtlsServerPath = config.bleRtlsServerPath;
    this._bleRtlsServerPort = config.bleRtlsServerPort;
    this._bleRtlsServerToken = config.bleRtlsServerToken;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._ekahauBlinkMode = config.ekahauBlinkMode;
    this._ekahauTag = config.ekahauTag;
    this._ercServerIp = config.ercServerIp;
    this._ercServerPort = config.ercServerPort;
    this._fortipresence = config.fortipresence;
    this._fortipresenceBle = config.fortipresenceBle;
    this._fortipresenceFrequency = config.fortipresenceFrequency;
    this._fortipresencePort = config.fortipresencePort;
    this._fortipresenceProject = config.fortipresenceProject;
    this._fortipresenceRogue = config.fortipresenceRogue;
    this._fortipresenceSecret = config.fortipresenceSecret;
    this._fortipresenceServer = config.fortipresenceServer;
    this._fortipresenceServerAddrType = config.fortipresenceServerAddrType;
    this._fortipresenceServerFqdn = config.fortipresenceServerFqdn;
    this._fortipresenceUnassoc = config.fortipresenceUnassoc;
    this._id = config.id;
    this._polestar = config.polestar;
    this._polestarAccumulationInterval = config.polestarAccumulationInterval;
    this._polestarAssetAddrgrpList = config.polestarAssetAddrgrpList;
    this._polestarAssetUuidList1 = config.polestarAssetUuidList1;
    this._polestarAssetUuidList2 = config.polestarAssetUuidList2;
    this._polestarAssetUuidList3 = config.polestarAssetUuidList3;
    this._polestarAssetUuidList4 = config.polestarAssetUuidList4;
    this._polestarProtocol = config.polestarProtocol;
    this._polestarReportingInterval = config.polestarReportingInterval;
    this._polestarServerFqdn = config.polestarServerFqdn;
    this._polestarServerPath = config.polestarServerPath;
    this._polestarServerPort = config.polestarServerPort;
    this._polestarServerToken = config.polestarServerToken;
    this._stationLocate = config.stationLocate;
    this._wtpProfile = config.wtpProfile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aeroscout - computed: true, optional: true, required: false
  private _aeroscout?: string; 
  public get aeroscout() {
    return this.getStringAttribute('aeroscout');
  }
  public set aeroscout(value: string) {
    this._aeroscout = value;
  }
  public resetAeroscout() {
    this._aeroscout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aeroscoutInput() {
    return this._aeroscout;
  }

  // aeroscout_ap_mac - computed: false, optional: true, required: false
  private _aeroscoutApMac?: string; 
  public get aeroscoutApMac() {
    return this.getStringAttribute('aeroscout_ap_mac');
  }
  public set aeroscoutApMac(value: string) {
    this._aeroscoutApMac = value;
  }
  public resetAeroscoutApMac() {
    this._aeroscoutApMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aeroscoutApMacInput() {
    return this._aeroscoutApMac;
  }

  // aeroscout_mmu_report - computed: false, optional: true, required: false
  private _aeroscoutMmuReport?: string; 
  public get aeroscoutMmuReport() {
    return this.getStringAttribute('aeroscout_mmu_report');
  }
  public set aeroscoutMmuReport(value: string) {
    this._aeroscoutMmuReport = value;
  }
  public resetAeroscoutMmuReport() {
    this._aeroscoutMmuReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aeroscoutMmuReportInput() {
    return this._aeroscoutMmuReport;
  }

  // aeroscout_mu - computed: false, optional: true, required: false
  private _aeroscoutMu?: string; 
  public get aeroscoutMu() {
    return this.getStringAttribute('aeroscout_mu');
  }
  public set aeroscoutMu(value: string) {
    this._aeroscoutMu = value;
  }
  public resetAeroscoutMu() {
    this._aeroscoutMu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aeroscoutMuInput() {
    return this._aeroscoutMu;
  }

  // aeroscout_mu_factor - computed: false, optional: true, required: false
  private _aeroscoutMuFactor?: number; 
  public get aeroscoutMuFactor() {
    return this.getNumberAttribute('aeroscout_mu_factor');
  }
  public set aeroscoutMuFactor(value: number) {
    this._aeroscoutMuFactor = value;
  }
  public resetAeroscoutMuFactor() {
    this._aeroscoutMuFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aeroscoutMuFactorInput() {
    return this._aeroscoutMuFactor;
  }

  // aeroscout_mu_timeout - computed: false, optional: true, required: false
  private _aeroscoutMuTimeout?: number; 
  public get aeroscoutMuTimeout() {
    return this.getNumberAttribute('aeroscout_mu_timeout');
  }
  public set aeroscoutMuTimeout(value: number) {
    this._aeroscoutMuTimeout = value;
  }
  public resetAeroscoutMuTimeout() {
    this._aeroscoutMuTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aeroscoutMuTimeoutInput() {
    return this._aeroscoutMuTimeout;
  }

  // aeroscout_server_ip - computed: false, optional: true, required: false
  private _aeroscoutServerIp?: string; 
  public get aeroscoutServerIp() {
    return this.getStringAttribute('aeroscout_server_ip');
  }
  public set aeroscoutServerIp(value: string) {
    this._aeroscoutServerIp = value;
  }
  public resetAeroscoutServerIp() {
    this._aeroscoutServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aeroscoutServerIpInput() {
    return this._aeroscoutServerIp;
  }

  // aeroscout_server_port - computed: false, optional: true, required: false
  private _aeroscoutServerPort?: number; 
  public get aeroscoutServerPort() {
    return this.getNumberAttribute('aeroscout_server_port');
  }
  public set aeroscoutServerPort(value: number) {
    this._aeroscoutServerPort = value;
  }
  public resetAeroscoutServerPort() {
    this._aeroscoutServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aeroscoutServerPortInput() {
    return this._aeroscoutServerPort;
  }

  // ble_rtls - computed: true, optional: true, required: false
  private _bleRtls?: string; 
  public get bleRtls() {
    return this.getStringAttribute('ble_rtls');
  }
  public set bleRtls(value: string) {
    this._bleRtls = value;
  }
  public resetBleRtls() {
    this._bleRtls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bleRtlsInput() {
    return this._bleRtls;
  }

  // ble_rtls_accumulation_interval - computed: true, optional: true, required: false
  private _bleRtlsAccumulationInterval?: number; 
  public get bleRtlsAccumulationInterval() {
    return this.getNumberAttribute('ble_rtls_accumulation_interval');
  }
  public set bleRtlsAccumulationInterval(value: number) {
    this._bleRtlsAccumulationInterval = value;
  }
  public resetBleRtlsAccumulationInterval() {
    this._bleRtlsAccumulationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bleRtlsAccumulationIntervalInput() {
    return this._bleRtlsAccumulationInterval;
  }

  // ble_rtls_asset_addrgrp_list - computed: true, optional: true, required: false
  private _bleRtlsAssetAddrgrpList?: string[]; 
  public get bleRtlsAssetAddrgrpList() {
    return cdktf.Fn.tolist(this.getListAttribute('ble_rtls_asset_addrgrp_list'));
  }
  public set bleRtlsAssetAddrgrpList(value: string[]) {
    this._bleRtlsAssetAddrgrpList = value;
  }
  public resetBleRtlsAssetAddrgrpList() {
    this._bleRtlsAssetAddrgrpList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bleRtlsAssetAddrgrpListInput() {
    return this._bleRtlsAssetAddrgrpList;
  }

  // ble_rtls_asset_uuid_list1 - computed: false, optional: true, required: false
  private _bleRtlsAssetUuidList1?: string; 
  public get bleRtlsAssetUuidList1() {
    return this.getStringAttribute('ble_rtls_asset_uuid_list1');
  }
  public set bleRtlsAssetUuidList1(value: string) {
    this._bleRtlsAssetUuidList1 = value;
  }
  public resetBleRtlsAssetUuidList1() {
    this._bleRtlsAssetUuidList1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bleRtlsAssetUuidList1Input() {
    return this._bleRtlsAssetUuidList1;
  }

  // ble_rtls_asset_uuid_list2 - computed: false, optional: true, required: false
  private _bleRtlsAssetUuidList2?: string; 
  public get bleRtlsAssetUuidList2() {
    return this.getStringAttribute('ble_rtls_asset_uuid_list2');
  }
  public set bleRtlsAssetUuidList2(value: string) {
    this._bleRtlsAssetUuidList2 = value;
  }
  public resetBleRtlsAssetUuidList2() {
    this._bleRtlsAssetUuidList2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bleRtlsAssetUuidList2Input() {
    return this._bleRtlsAssetUuidList2;
  }

  // ble_rtls_asset_uuid_list3 - computed: false, optional: true, required: false
  private _bleRtlsAssetUuidList3?: string; 
  public get bleRtlsAssetUuidList3() {
    return this.getStringAttribute('ble_rtls_asset_uuid_list3');
  }
  public set bleRtlsAssetUuidList3(value: string) {
    this._bleRtlsAssetUuidList3 = value;
  }
  public resetBleRtlsAssetUuidList3() {
    this._bleRtlsAssetUuidList3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bleRtlsAssetUuidList3Input() {
    return this._bleRtlsAssetUuidList3;
  }

  // ble_rtls_asset_uuid_list4 - computed: false, optional: true, required: false
  private _bleRtlsAssetUuidList4?: string; 
  public get bleRtlsAssetUuidList4() {
    return this.getStringAttribute('ble_rtls_asset_uuid_list4');
  }
  public set bleRtlsAssetUuidList4(value: string) {
    this._bleRtlsAssetUuidList4 = value;
  }
  public resetBleRtlsAssetUuidList4() {
    this._bleRtlsAssetUuidList4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bleRtlsAssetUuidList4Input() {
    return this._bleRtlsAssetUuidList4;
  }

  // ble_rtls_protocol - computed: true, optional: true, required: false
  private _bleRtlsProtocol?: string; 
  public get bleRtlsProtocol() {
    return this.getStringAttribute('ble_rtls_protocol');
  }
  public set bleRtlsProtocol(value: string) {
    this._bleRtlsProtocol = value;
  }
  public resetBleRtlsProtocol() {
    this._bleRtlsProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bleRtlsProtocolInput() {
    return this._bleRtlsProtocol;
  }

  // ble_rtls_reporting_interval - computed: true, optional: true, required: false
  private _bleRtlsReportingInterval?: number; 
  public get bleRtlsReportingInterval() {
    return this.getNumberAttribute('ble_rtls_reporting_interval');
  }
  public set bleRtlsReportingInterval(value: number) {
    this._bleRtlsReportingInterval = value;
  }
  public resetBleRtlsReportingInterval() {
    this._bleRtlsReportingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bleRtlsReportingIntervalInput() {
    return this._bleRtlsReportingInterval;
  }

  // ble_rtls_server_fqdn - computed: false, optional: true, required: false
  private _bleRtlsServerFqdn?: string; 
  public get bleRtlsServerFqdn() {
    return this.getStringAttribute('ble_rtls_server_fqdn');
  }
  public set bleRtlsServerFqdn(value: string) {
    this._bleRtlsServerFqdn = value;
  }
  public resetBleRtlsServerFqdn() {
    this._bleRtlsServerFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bleRtlsServerFqdnInput() {
    return this._bleRtlsServerFqdn;
  }

  // ble_rtls_server_path - computed: false, optional: true, required: false
  private _bleRtlsServerPath?: string; 
  public get bleRtlsServerPath() {
    return this.getStringAttribute('ble_rtls_server_path');
  }
  public set bleRtlsServerPath(value: string) {
    this._bleRtlsServerPath = value;
  }
  public resetBleRtlsServerPath() {
    this._bleRtlsServerPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bleRtlsServerPathInput() {
    return this._bleRtlsServerPath;
  }

  // ble_rtls_server_port - computed: true, optional: true, required: false
  private _bleRtlsServerPort?: number; 
  public get bleRtlsServerPort() {
    return this.getNumberAttribute('ble_rtls_server_port');
  }
  public set bleRtlsServerPort(value: number) {
    this._bleRtlsServerPort = value;
  }
  public resetBleRtlsServerPort() {
    this._bleRtlsServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bleRtlsServerPortInput() {
    return this._bleRtlsServerPort;
  }

  // ble_rtls_server_token - computed: false, optional: true, required: false
  private _bleRtlsServerToken?: string; 
  public get bleRtlsServerToken() {
    return this.getStringAttribute('ble_rtls_server_token');
  }
  public set bleRtlsServerToken(value: string) {
    this._bleRtlsServerToken = value;
  }
  public resetBleRtlsServerToken() {
    this._bleRtlsServerToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bleRtlsServerTokenInput() {
    return this._bleRtlsServerToken;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // ekahau_blink_mode - computed: true, optional: true, required: false
  private _ekahauBlinkMode?: string; 
  public get ekahauBlinkMode() {
    return this.getStringAttribute('ekahau_blink_mode');
  }
  public set ekahauBlinkMode(value: string) {
    this._ekahauBlinkMode = value;
  }
  public resetEkahauBlinkMode() {
    this._ekahauBlinkMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ekahauBlinkModeInput() {
    return this._ekahauBlinkMode;
  }

  // ekahau_tag - computed: true, optional: true, required: false
  private _ekahauTag?: string; 
  public get ekahauTag() {
    return this.getStringAttribute('ekahau_tag');
  }
  public set ekahauTag(value: string) {
    this._ekahauTag = value;
  }
  public resetEkahauTag() {
    this._ekahauTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ekahauTagInput() {
    return this._ekahauTag;
  }

  // erc_server_ip - computed: true, optional: true, required: false
  private _ercServerIp?: string; 
  public get ercServerIp() {
    return this.getStringAttribute('erc_server_ip');
  }
  public set ercServerIp(value: string) {
    this._ercServerIp = value;
  }
  public resetErcServerIp() {
    this._ercServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ercServerIpInput() {
    return this._ercServerIp;
  }

  // erc_server_port - computed: true, optional: true, required: false
  private _ercServerPort?: number; 
  public get ercServerPort() {
    return this.getNumberAttribute('erc_server_port');
  }
  public set ercServerPort(value: number) {
    this._ercServerPort = value;
  }
  public resetErcServerPort() {
    this._ercServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ercServerPortInput() {
    return this._ercServerPort;
  }

  // fortipresence - computed: true, optional: true, required: false
  private _fortipresence?: string; 
  public get fortipresence() {
    return this.getStringAttribute('fortipresence');
  }
  public set fortipresence(value: string) {
    this._fortipresence = value;
  }
  public resetFortipresence() {
    this._fortipresence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortipresenceInput() {
    return this._fortipresence;
  }

  // fortipresence_ble - computed: true, optional: true, required: false
  private _fortipresenceBle?: string; 
  public get fortipresenceBle() {
    return this.getStringAttribute('fortipresence_ble');
  }
  public set fortipresenceBle(value: string) {
    this._fortipresenceBle = value;
  }
  public resetFortipresenceBle() {
    this._fortipresenceBle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortipresenceBleInput() {
    return this._fortipresenceBle;
  }

  // fortipresence_frequency - computed: false, optional: true, required: false
  private _fortipresenceFrequency?: number; 
  public get fortipresenceFrequency() {
    return this.getNumberAttribute('fortipresence_frequency');
  }
  public set fortipresenceFrequency(value: number) {
    this._fortipresenceFrequency = value;
  }
  public resetFortipresenceFrequency() {
    this._fortipresenceFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortipresenceFrequencyInput() {
    return this._fortipresenceFrequency;
  }

  // fortipresence_port - computed: false, optional: true, required: false
  private _fortipresencePort?: number; 
  public get fortipresencePort() {
    return this.getNumberAttribute('fortipresence_port');
  }
  public set fortipresencePort(value: number) {
    this._fortipresencePort = value;
  }
  public resetFortipresencePort() {
    this._fortipresencePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortipresencePortInput() {
    return this._fortipresencePort;
  }

  // fortipresence_project - computed: false, optional: true, required: false
  private _fortipresenceProject?: string; 
  public get fortipresenceProject() {
    return this.getStringAttribute('fortipresence_project');
  }
  public set fortipresenceProject(value: string) {
    this._fortipresenceProject = value;
  }
  public resetFortipresenceProject() {
    this._fortipresenceProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortipresenceProjectInput() {
    return this._fortipresenceProject;
  }

  // fortipresence_rogue - computed: false, optional: true, required: false
  private _fortipresenceRogue?: string; 
  public get fortipresenceRogue() {
    return this.getStringAttribute('fortipresence_rogue');
  }
  public set fortipresenceRogue(value: string) {
    this._fortipresenceRogue = value;
  }
  public resetFortipresenceRogue() {
    this._fortipresenceRogue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortipresenceRogueInput() {
    return this._fortipresenceRogue;
  }

  // fortipresence_secret - computed: true, optional: true, required: false
  private _fortipresenceSecret?: string[]; 
  public get fortipresenceSecret() {
    return cdktf.Fn.tolist(this.getListAttribute('fortipresence_secret'));
  }
  public set fortipresenceSecret(value: string[]) {
    this._fortipresenceSecret = value;
  }
  public resetFortipresenceSecret() {
    this._fortipresenceSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortipresenceSecretInput() {
    return this._fortipresenceSecret;
  }

  // fortipresence_server - computed: false, optional: true, required: false
  private _fortipresenceServer?: string; 
  public get fortipresenceServer() {
    return this.getStringAttribute('fortipresence_server');
  }
  public set fortipresenceServer(value: string) {
    this._fortipresenceServer = value;
  }
  public resetFortipresenceServer() {
    this._fortipresenceServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortipresenceServerInput() {
    return this._fortipresenceServer;
  }

  // fortipresence_server_addr_type - computed: false, optional: true, required: false
  private _fortipresenceServerAddrType?: string; 
  public get fortipresenceServerAddrType() {
    return this.getStringAttribute('fortipresence_server_addr_type');
  }
  public set fortipresenceServerAddrType(value: string) {
    this._fortipresenceServerAddrType = value;
  }
  public resetFortipresenceServerAddrType() {
    this._fortipresenceServerAddrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortipresenceServerAddrTypeInput() {
    return this._fortipresenceServerAddrType;
  }

  // fortipresence_server_fqdn - computed: false, optional: true, required: false
  private _fortipresenceServerFqdn?: string; 
  public get fortipresenceServerFqdn() {
    return this.getStringAttribute('fortipresence_server_fqdn');
  }
  public set fortipresenceServerFqdn(value: string) {
    this._fortipresenceServerFqdn = value;
  }
  public resetFortipresenceServerFqdn() {
    this._fortipresenceServerFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortipresenceServerFqdnInput() {
    return this._fortipresenceServerFqdn;
  }

  // fortipresence_unassoc - computed: false, optional: true, required: false
  private _fortipresenceUnassoc?: string; 
  public get fortipresenceUnassoc() {
    return this.getStringAttribute('fortipresence_unassoc');
  }
  public set fortipresenceUnassoc(value: string) {
    this._fortipresenceUnassoc = value;
  }
  public resetFortipresenceUnassoc() {
    this._fortipresenceUnassoc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortipresenceUnassocInput() {
    return this._fortipresenceUnassoc;
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

  // polestar - computed: true, optional: true, required: false
  private _polestar?: string; 
  public get polestar() {
    return this.getStringAttribute('polestar');
  }
  public set polestar(value: string) {
    this._polestar = value;
  }
  public resetPolestar() {
    this._polestar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get polestarInput() {
    return this._polestar;
  }

  // polestar_accumulation_interval - computed: true, optional: true, required: false
  private _polestarAccumulationInterval?: number; 
  public get polestarAccumulationInterval() {
    return this.getNumberAttribute('polestar_accumulation_interval');
  }
  public set polestarAccumulationInterval(value: number) {
    this._polestarAccumulationInterval = value;
  }
  public resetPolestarAccumulationInterval() {
    this._polestarAccumulationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get polestarAccumulationIntervalInput() {
    return this._polestarAccumulationInterval;
  }

  // polestar_asset_addrgrp_list - computed: true, optional: true, required: false
  private _polestarAssetAddrgrpList?: string[]; 
  public get polestarAssetAddrgrpList() {
    return cdktf.Fn.tolist(this.getListAttribute('polestar_asset_addrgrp_list'));
  }
  public set polestarAssetAddrgrpList(value: string[]) {
    this._polestarAssetAddrgrpList = value;
  }
  public resetPolestarAssetAddrgrpList() {
    this._polestarAssetAddrgrpList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get polestarAssetAddrgrpListInput() {
    return this._polestarAssetAddrgrpList;
  }

  // polestar_asset_uuid_list1 - computed: false, optional: true, required: false
  private _polestarAssetUuidList1?: string; 
  public get polestarAssetUuidList1() {
    return this.getStringAttribute('polestar_asset_uuid_list1');
  }
  public set polestarAssetUuidList1(value: string) {
    this._polestarAssetUuidList1 = value;
  }
  public resetPolestarAssetUuidList1() {
    this._polestarAssetUuidList1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get polestarAssetUuidList1Input() {
    return this._polestarAssetUuidList1;
  }

  // polestar_asset_uuid_list2 - computed: false, optional: true, required: false
  private _polestarAssetUuidList2?: string; 
  public get polestarAssetUuidList2() {
    return this.getStringAttribute('polestar_asset_uuid_list2');
  }
  public set polestarAssetUuidList2(value: string) {
    this._polestarAssetUuidList2 = value;
  }
  public resetPolestarAssetUuidList2() {
    this._polestarAssetUuidList2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get polestarAssetUuidList2Input() {
    return this._polestarAssetUuidList2;
  }

  // polestar_asset_uuid_list3 - computed: false, optional: true, required: false
  private _polestarAssetUuidList3?: string; 
  public get polestarAssetUuidList3() {
    return this.getStringAttribute('polestar_asset_uuid_list3');
  }
  public set polestarAssetUuidList3(value: string) {
    this._polestarAssetUuidList3 = value;
  }
  public resetPolestarAssetUuidList3() {
    this._polestarAssetUuidList3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get polestarAssetUuidList3Input() {
    return this._polestarAssetUuidList3;
  }

  // polestar_asset_uuid_list4 - computed: false, optional: true, required: false
  private _polestarAssetUuidList4?: string; 
  public get polestarAssetUuidList4() {
    return this.getStringAttribute('polestar_asset_uuid_list4');
  }
  public set polestarAssetUuidList4(value: string) {
    this._polestarAssetUuidList4 = value;
  }
  public resetPolestarAssetUuidList4() {
    this._polestarAssetUuidList4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get polestarAssetUuidList4Input() {
    return this._polestarAssetUuidList4;
  }

  // polestar_protocol - computed: true, optional: true, required: false
  private _polestarProtocol?: string; 
  public get polestarProtocol() {
    return this.getStringAttribute('polestar_protocol');
  }
  public set polestarProtocol(value: string) {
    this._polestarProtocol = value;
  }
  public resetPolestarProtocol() {
    this._polestarProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get polestarProtocolInput() {
    return this._polestarProtocol;
  }

  // polestar_reporting_interval - computed: true, optional: true, required: false
  private _polestarReportingInterval?: number; 
  public get polestarReportingInterval() {
    return this.getNumberAttribute('polestar_reporting_interval');
  }
  public set polestarReportingInterval(value: number) {
    this._polestarReportingInterval = value;
  }
  public resetPolestarReportingInterval() {
    this._polestarReportingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get polestarReportingIntervalInput() {
    return this._polestarReportingInterval;
  }

  // polestar_server_fqdn - computed: true, optional: true, required: false
  private _polestarServerFqdn?: string; 
  public get polestarServerFqdn() {
    return this.getStringAttribute('polestar_server_fqdn');
  }
  public set polestarServerFqdn(value: string) {
    this._polestarServerFqdn = value;
  }
  public resetPolestarServerFqdn() {
    this._polestarServerFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get polestarServerFqdnInput() {
    return this._polestarServerFqdn;
  }

  // polestar_server_path - computed: true, optional: true, required: false
  private _polestarServerPath?: string; 
  public get polestarServerPath() {
    return this.getStringAttribute('polestar_server_path');
  }
  public set polestarServerPath(value: string) {
    this._polestarServerPath = value;
  }
  public resetPolestarServerPath() {
    this._polestarServerPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get polestarServerPathInput() {
    return this._polestarServerPath;
  }

  // polestar_server_port - computed: true, optional: true, required: false
  private _polestarServerPort?: number; 
  public get polestarServerPort() {
    return this.getNumberAttribute('polestar_server_port');
  }
  public set polestarServerPort(value: number) {
    this._polestarServerPort = value;
  }
  public resetPolestarServerPort() {
    this._polestarServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get polestarServerPortInput() {
    return this._polestarServerPort;
  }

  // polestar_server_token - computed: false, optional: true, required: false
  private _polestarServerToken?: string; 
  public get polestarServerToken() {
    return this.getStringAttribute('polestar_server_token');
  }
  public set polestarServerToken(value: string) {
    this._polestarServerToken = value;
  }
  public resetPolestarServerToken() {
    this._polestarServerToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get polestarServerTokenInput() {
    return this._polestarServerToken;
  }

  // station_locate - computed: true, optional: true, required: false
  private _stationLocate?: string; 
  public get stationLocate() {
    return this.getStringAttribute('station_locate');
  }
  public set stationLocate(value: string) {
    this._stationLocate = value;
  }
  public resetStationLocate() {
    this._stationLocate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stationLocateInput() {
    return this._stationLocate;
  }

  // wtp_profile - computed: false, optional: false, required: true
  private _wtpProfile?: string; 
  public get wtpProfile() {
    return this.getStringAttribute('wtp_profile');
  }
  public set wtpProfile(value: string) {
    this._wtpProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wtpProfileInput() {
    return this._wtpProfile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aeroscout: cdktf.stringToTerraform(this._aeroscout),
      aeroscout_ap_mac: cdktf.stringToTerraform(this._aeroscoutApMac),
      aeroscout_mmu_report: cdktf.stringToTerraform(this._aeroscoutMmuReport),
      aeroscout_mu: cdktf.stringToTerraform(this._aeroscoutMu),
      aeroscout_mu_factor: cdktf.numberToTerraform(this._aeroscoutMuFactor),
      aeroscout_mu_timeout: cdktf.numberToTerraform(this._aeroscoutMuTimeout),
      aeroscout_server_ip: cdktf.stringToTerraform(this._aeroscoutServerIp),
      aeroscout_server_port: cdktf.numberToTerraform(this._aeroscoutServerPort),
      ble_rtls: cdktf.stringToTerraform(this._bleRtls),
      ble_rtls_accumulation_interval: cdktf.numberToTerraform(this._bleRtlsAccumulationInterval),
      ble_rtls_asset_addrgrp_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bleRtlsAssetAddrgrpList),
      ble_rtls_asset_uuid_list1: cdktf.stringToTerraform(this._bleRtlsAssetUuidList1),
      ble_rtls_asset_uuid_list2: cdktf.stringToTerraform(this._bleRtlsAssetUuidList2),
      ble_rtls_asset_uuid_list3: cdktf.stringToTerraform(this._bleRtlsAssetUuidList3),
      ble_rtls_asset_uuid_list4: cdktf.stringToTerraform(this._bleRtlsAssetUuidList4),
      ble_rtls_protocol: cdktf.stringToTerraform(this._bleRtlsProtocol),
      ble_rtls_reporting_interval: cdktf.numberToTerraform(this._bleRtlsReportingInterval),
      ble_rtls_server_fqdn: cdktf.stringToTerraform(this._bleRtlsServerFqdn),
      ble_rtls_server_path: cdktf.stringToTerraform(this._bleRtlsServerPath),
      ble_rtls_server_port: cdktf.numberToTerraform(this._bleRtlsServerPort),
      ble_rtls_server_token: cdktf.stringToTerraform(this._bleRtlsServerToken),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      ekahau_blink_mode: cdktf.stringToTerraform(this._ekahauBlinkMode),
      ekahau_tag: cdktf.stringToTerraform(this._ekahauTag),
      erc_server_ip: cdktf.stringToTerraform(this._ercServerIp),
      erc_server_port: cdktf.numberToTerraform(this._ercServerPort),
      fortipresence: cdktf.stringToTerraform(this._fortipresence),
      fortipresence_ble: cdktf.stringToTerraform(this._fortipresenceBle),
      fortipresence_frequency: cdktf.numberToTerraform(this._fortipresenceFrequency),
      fortipresence_port: cdktf.numberToTerraform(this._fortipresencePort),
      fortipresence_project: cdktf.stringToTerraform(this._fortipresenceProject),
      fortipresence_rogue: cdktf.stringToTerraform(this._fortipresenceRogue),
      fortipresence_secret: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fortipresenceSecret),
      fortipresence_server: cdktf.stringToTerraform(this._fortipresenceServer),
      fortipresence_server_addr_type: cdktf.stringToTerraform(this._fortipresenceServerAddrType),
      fortipresence_server_fqdn: cdktf.stringToTerraform(this._fortipresenceServerFqdn),
      fortipresence_unassoc: cdktf.stringToTerraform(this._fortipresenceUnassoc),
      id: cdktf.stringToTerraform(this._id),
      polestar: cdktf.stringToTerraform(this._polestar),
      polestar_accumulation_interval: cdktf.numberToTerraform(this._polestarAccumulationInterval),
      polestar_asset_addrgrp_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._polestarAssetAddrgrpList),
      polestar_asset_uuid_list1: cdktf.stringToTerraform(this._polestarAssetUuidList1),
      polestar_asset_uuid_list2: cdktf.stringToTerraform(this._polestarAssetUuidList2),
      polestar_asset_uuid_list3: cdktf.stringToTerraform(this._polestarAssetUuidList3),
      polestar_asset_uuid_list4: cdktf.stringToTerraform(this._polestarAssetUuidList4),
      polestar_protocol: cdktf.stringToTerraform(this._polestarProtocol),
      polestar_reporting_interval: cdktf.numberToTerraform(this._polestarReportingInterval),
      polestar_server_fqdn: cdktf.stringToTerraform(this._polestarServerFqdn),
      polestar_server_path: cdktf.stringToTerraform(this._polestarServerPath),
      polestar_server_port: cdktf.numberToTerraform(this._polestarServerPort),
      polestar_server_token: cdktf.stringToTerraform(this._polestarServerToken),
      station_locate: cdktf.stringToTerraform(this._stationLocate),
      wtp_profile: cdktf.stringToTerraform(this._wtpProfile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aeroscout: {
        value: cdktf.stringToHclTerraform(this._aeroscout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aeroscout_ap_mac: {
        value: cdktf.stringToHclTerraform(this._aeroscoutApMac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aeroscout_mmu_report: {
        value: cdktf.stringToHclTerraform(this._aeroscoutMmuReport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aeroscout_mu: {
        value: cdktf.stringToHclTerraform(this._aeroscoutMu),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aeroscout_mu_factor: {
        value: cdktf.numberToHclTerraform(this._aeroscoutMuFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      aeroscout_mu_timeout: {
        value: cdktf.numberToHclTerraform(this._aeroscoutMuTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      aeroscout_server_ip: {
        value: cdktf.stringToHclTerraform(this._aeroscoutServerIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aeroscout_server_port: {
        value: cdktf.numberToHclTerraform(this._aeroscoutServerPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ble_rtls: {
        value: cdktf.stringToHclTerraform(this._bleRtls),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ble_rtls_accumulation_interval: {
        value: cdktf.numberToHclTerraform(this._bleRtlsAccumulationInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ble_rtls_asset_addrgrp_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bleRtlsAssetAddrgrpList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ble_rtls_asset_uuid_list1: {
        value: cdktf.stringToHclTerraform(this._bleRtlsAssetUuidList1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ble_rtls_asset_uuid_list2: {
        value: cdktf.stringToHclTerraform(this._bleRtlsAssetUuidList2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ble_rtls_asset_uuid_list3: {
        value: cdktf.stringToHclTerraform(this._bleRtlsAssetUuidList3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ble_rtls_asset_uuid_list4: {
        value: cdktf.stringToHclTerraform(this._bleRtlsAssetUuidList4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ble_rtls_protocol: {
        value: cdktf.stringToHclTerraform(this._bleRtlsProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ble_rtls_reporting_interval: {
        value: cdktf.numberToHclTerraform(this._bleRtlsReportingInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ble_rtls_server_fqdn: {
        value: cdktf.stringToHclTerraform(this._bleRtlsServerFqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ble_rtls_server_path: {
        value: cdktf.stringToHclTerraform(this._bleRtlsServerPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ble_rtls_server_port: {
        value: cdktf.numberToHclTerraform(this._bleRtlsServerPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ble_rtls_server_token: {
        value: cdktf.stringToHclTerraform(this._bleRtlsServerToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ekahau_blink_mode: {
        value: cdktf.stringToHclTerraform(this._ekahauBlinkMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ekahau_tag: {
        value: cdktf.stringToHclTerraform(this._ekahauTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      erc_server_ip: {
        value: cdktf.stringToHclTerraform(this._ercServerIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      erc_server_port: {
        value: cdktf.numberToHclTerraform(this._ercServerPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fortipresence: {
        value: cdktf.stringToHclTerraform(this._fortipresence),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortipresence_ble: {
        value: cdktf.stringToHclTerraform(this._fortipresenceBle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortipresence_frequency: {
        value: cdktf.numberToHclTerraform(this._fortipresenceFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fortipresence_port: {
        value: cdktf.numberToHclTerraform(this._fortipresencePort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fortipresence_project: {
        value: cdktf.stringToHclTerraform(this._fortipresenceProject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortipresence_rogue: {
        value: cdktf.stringToHclTerraform(this._fortipresenceRogue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortipresence_secret: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fortipresenceSecret),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      fortipresence_server: {
        value: cdktf.stringToHclTerraform(this._fortipresenceServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortipresence_server_addr_type: {
        value: cdktf.stringToHclTerraform(this._fortipresenceServerAddrType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortipresence_server_fqdn: {
        value: cdktf.stringToHclTerraform(this._fortipresenceServerFqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortipresence_unassoc: {
        value: cdktf.stringToHclTerraform(this._fortipresenceUnassoc),
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
      polestar: {
        value: cdktf.stringToHclTerraform(this._polestar),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      polestar_accumulation_interval: {
        value: cdktf.numberToHclTerraform(this._polestarAccumulationInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      polestar_asset_addrgrp_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._polestarAssetAddrgrpList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      polestar_asset_uuid_list1: {
        value: cdktf.stringToHclTerraform(this._polestarAssetUuidList1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      polestar_asset_uuid_list2: {
        value: cdktf.stringToHclTerraform(this._polestarAssetUuidList2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      polestar_asset_uuid_list3: {
        value: cdktf.stringToHclTerraform(this._polestarAssetUuidList3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      polestar_asset_uuid_list4: {
        value: cdktf.stringToHclTerraform(this._polestarAssetUuidList4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      polestar_protocol: {
        value: cdktf.stringToHclTerraform(this._polestarProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      polestar_reporting_interval: {
        value: cdktf.numberToHclTerraform(this._polestarReportingInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      polestar_server_fqdn: {
        value: cdktf.stringToHclTerraform(this._polestarServerFqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      polestar_server_path: {
        value: cdktf.stringToHclTerraform(this._polestarServerPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      polestar_server_port: {
        value: cdktf.numberToHclTerraform(this._polestarServerPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      polestar_server_token: {
        value: cdktf.stringToHclTerraform(this._polestarServerToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      station_locate: {
        value: cdktf.stringToHclTerraform(this._stationLocate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wtp_profile: {
        value: cdktf.stringToHclTerraform(this._wtpProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
