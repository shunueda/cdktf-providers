// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_global
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelesscontrollerGlobalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_global#acd_process_count WirelesscontrollerGlobal#acd_process_count}
  */
  readonly acdProcessCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_global#ap_log_server WirelesscontrollerGlobal#ap_log_server}
  */
  readonly apLogServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_global#ap_log_server_ip WirelesscontrollerGlobal#ap_log_server_ip}
  */
  readonly apLogServerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_global#ap_log_server_port WirelesscontrollerGlobal#ap_log_server_port}
  */
  readonly apLogServerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_global#control_message_offload WirelesscontrollerGlobal#control_message_offload}
  */
  readonly controlMessageOffload?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_global#data_ethernet_ii WirelesscontrollerGlobal#data_ethernet_ii}
  */
  readonly dataEthernetIi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_global#device_name WirelesscontrollerGlobal#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_global#dfs_lab_test WirelesscontrollerGlobal#dfs_lab_test}
  */
  readonly dfsLabTest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_global#discovery_mc_addr WirelesscontrollerGlobal#discovery_mc_addr}
  */
  readonly discoveryMcAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_global#fiapp_eth_type WirelesscontrollerGlobal#fiapp_eth_type}
  */
  readonly fiappEthType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_global#id WirelesscontrollerGlobal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_global#image_download WirelesscontrollerGlobal#image_download}
  */
  readonly imageDownload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_global#ipsec_base_ip WirelesscontrollerGlobal#ipsec_base_ip}
  */
  readonly ipsecBaseIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_global#link_aggregation WirelesscontrollerGlobal#link_aggregation}
  */
  readonly linkAggregation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_global#local_radio_vdom WirelesscontrollerGlobal#local_radio_vdom}
  */
  readonly localRadioVdom?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_global#location WirelesscontrollerGlobal#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_global#max_ble_device WirelesscontrollerGlobal#max_ble_device}
  */
  readonly maxBleDevice?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_global#max_clients WirelesscontrollerGlobal#max_clients}
  */
  readonly maxClients?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_global#max_retransmit WirelesscontrollerGlobal#max_retransmit}
  */
  readonly maxRetransmit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_global#max_rogue_ap WirelesscontrollerGlobal#max_rogue_ap}
  */
  readonly maxRogueAp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_global#max_rogue_ap_wtp WirelesscontrollerGlobal#max_rogue_ap_wtp}
  */
  readonly maxRogueApWtp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_global#max_rogue_sta WirelesscontrollerGlobal#max_rogue_sta}
  */
  readonly maxRogueSta?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_global#max_sta_cap WirelesscontrollerGlobal#max_sta_cap}
  */
  readonly maxStaCap?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_global#max_sta_cap_wtp WirelesscontrollerGlobal#max_sta_cap_wtp}
  */
  readonly maxStaCapWtp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_global#max_wids_entry WirelesscontrollerGlobal#max_wids_entry}
  */
  readonly maxWidsEntry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_global#mesh_eth_type WirelesscontrollerGlobal#mesh_eth_type}
  */
  readonly meshEthType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_global#nac_interval WirelesscontrollerGlobal#nac_interval}
  */
  readonly nacInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_global#name WirelesscontrollerGlobal#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_global#rogue_scan_mac_adjacency WirelesscontrollerGlobal#rogue_scan_mac_adjacency}
  */
  readonly rogueScanMacAdjacency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_global#rolling_wtp_upgrade WirelesscontrollerGlobal#rolling_wtp_upgrade}
  */
  readonly rollingWtpUpgrade?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_global#rolling_wtp_upgrade_threshold WirelesscontrollerGlobal#rolling_wtp_upgrade_threshold}
  */
  readonly rollingWtpUpgradeThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_global#tunnel_mode WirelesscontrollerGlobal#tunnel_mode}
  */
  readonly tunnelMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_global#wpad_process_count WirelesscontrollerGlobal#wpad_process_count}
  */
  readonly wpadProcessCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_global#wtp_share WirelesscontrollerGlobal#wtp_share}
  */
  readonly wtpShare?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_global fmgdevice_wirelesscontroller_global}
*/
export class WirelesscontrollerGlobal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_wirelesscontroller_global";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelesscontrollerGlobal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelesscontrollerGlobal to import
  * @param importFromId The id of the existing WirelesscontrollerGlobal that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_global#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelesscontrollerGlobal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_wirelesscontroller_global", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_global fmgdevice_wirelesscontroller_global} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelesscontrollerGlobalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WirelesscontrollerGlobalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_wirelesscontroller_global',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acdProcessCount = config.acdProcessCount;
    this._apLogServer = config.apLogServer;
    this._apLogServerIp = config.apLogServerIp;
    this._apLogServerPort = config.apLogServerPort;
    this._controlMessageOffload = config.controlMessageOffload;
    this._dataEthernetIi = config.dataEthernetIi;
    this._deviceName = config.deviceName;
    this._dfsLabTest = config.dfsLabTest;
    this._discoveryMcAddr = config.discoveryMcAddr;
    this._fiappEthType = config.fiappEthType;
    this._id = config.id;
    this._imageDownload = config.imageDownload;
    this._ipsecBaseIp = config.ipsecBaseIp;
    this._linkAggregation = config.linkAggregation;
    this._localRadioVdom = config.localRadioVdom;
    this._location = config.location;
    this._maxBleDevice = config.maxBleDevice;
    this._maxClients = config.maxClients;
    this._maxRetransmit = config.maxRetransmit;
    this._maxRogueAp = config.maxRogueAp;
    this._maxRogueApWtp = config.maxRogueApWtp;
    this._maxRogueSta = config.maxRogueSta;
    this._maxStaCap = config.maxStaCap;
    this._maxStaCapWtp = config.maxStaCapWtp;
    this._maxWidsEntry = config.maxWidsEntry;
    this._meshEthType = config.meshEthType;
    this._nacInterval = config.nacInterval;
    this._name = config.name;
    this._rogueScanMacAdjacency = config.rogueScanMacAdjacency;
    this._rollingWtpUpgrade = config.rollingWtpUpgrade;
    this._rollingWtpUpgradeThreshold = config.rollingWtpUpgradeThreshold;
    this._tunnelMode = config.tunnelMode;
    this._wpadProcessCount = config.wpadProcessCount;
    this._wtpShare = config.wtpShare;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acd_process_count - computed: false, optional: true, required: false
  private _acdProcessCount?: number; 
  public get acdProcessCount() {
    return this.getNumberAttribute('acd_process_count');
  }
  public set acdProcessCount(value: number) {
    this._acdProcessCount = value;
  }
  public resetAcdProcessCount() {
    this._acdProcessCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acdProcessCountInput() {
    return this._acdProcessCount;
  }

  // ap_log_server - computed: true, optional: true, required: false
  private _apLogServer?: string; 
  public get apLogServer() {
    return this.getStringAttribute('ap_log_server');
  }
  public set apLogServer(value: string) {
    this._apLogServer = value;
  }
  public resetApLogServer() {
    this._apLogServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apLogServerInput() {
    return this._apLogServer;
  }

  // ap_log_server_ip - computed: true, optional: true, required: false
  private _apLogServerIp?: string; 
  public get apLogServerIp() {
    return this.getStringAttribute('ap_log_server_ip');
  }
  public set apLogServerIp(value: string) {
    this._apLogServerIp = value;
  }
  public resetApLogServerIp() {
    this._apLogServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apLogServerIpInput() {
    return this._apLogServerIp;
  }

  // ap_log_server_port - computed: false, optional: true, required: false
  private _apLogServerPort?: number; 
  public get apLogServerPort() {
    return this.getNumberAttribute('ap_log_server_port');
  }
  public set apLogServerPort(value: number) {
    this._apLogServerPort = value;
  }
  public resetApLogServerPort() {
    this._apLogServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apLogServerPortInput() {
    return this._apLogServerPort;
  }

  // control_message_offload - computed: true, optional: true, required: false
  private _controlMessageOffload?: string[]; 
  public get controlMessageOffload() {
    return cdktf.Fn.tolist(this.getListAttribute('control_message_offload'));
  }
  public set controlMessageOffload(value: string[]) {
    this._controlMessageOffload = value;
  }
  public resetControlMessageOffload() {
    this._controlMessageOffload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlMessageOffloadInput() {
    return this._controlMessageOffload;
  }

  // data_ethernet_ii - computed: true, optional: true, required: false
  private _dataEthernetIi?: string; 
  public get dataEthernetIi() {
    return this.getStringAttribute('data_ethernet_ii');
  }
  public set dataEthernetIi(value: string) {
    this._dataEthernetIi = value;
  }
  public resetDataEthernetIi() {
    this._dataEthernetIi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataEthernetIiInput() {
    return this._dataEthernetIi;
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

  // dfs_lab_test - computed: true, optional: true, required: false
  private _dfsLabTest?: string; 
  public get dfsLabTest() {
    return this.getStringAttribute('dfs_lab_test');
  }
  public set dfsLabTest(value: string) {
    this._dfsLabTest = value;
  }
  public resetDfsLabTest() {
    this._dfsLabTest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dfsLabTestInput() {
    return this._dfsLabTest;
  }

  // discovery_mc_addr - computed: true, optional: true, required: false
  private _discoveryMcAddr?: string; 
  public get discoveryMcAddr() {
    return this.getStringAttribute('discovery_mc_addr');
  }
  public set discoveryMcAddr(value: string) {
    this._discoveryMcAddr = value;
  }
  public resetDiscoveryMcAddr() {
    this._discoveryMcAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryMcAddrInput() {
    return this._discoveryMcAddr;
  }

  // fiapp_eth_type - computed: true, optional: true, required: false
  private _fiappEthType?: number; 
  public get fiappEthType() {
    return this.getNumberAttribute('fiapp_eth_type');
  }
  public set fiappEthType(value: number) {
    this._fiappEthType = value;
  }
  public resetFiappEthType() {
    this._fiappEthType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fiappEthTypeInput() {
    return this._fiappEthType;
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

  // image_download - computed: true, optional: true, required: false
  private _imageDownload?: string; 
  public get imageDownload() {
    return this.getStringAttribute('image_download');
  }
  public set imageDownload(value: string) {
    this._imageDownload = value;
  }
  public resetImageDownload() {
    this._imageDownload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageDownloadInput() {
    return this._imageDownload;
  }

  // ipsec_base_ip - computed: true, optional: true, required: false
  private _ipsecBaseIp?: string; 
  public get ipsecBaseIp() {
    return this.getStringAttribute('ipsec_base_ip');
  }
  public set ipsecBaseIp(value: string) {
    this._ipsecBaseIp = value;
  }
  public resetIpsecBaseIp() {
    this._ipsecBaseIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecBaseIpInput() {
    return this._ipsecBaseIp;
  }

  // link_aggregation - computed: true, optional: true, required: false
  private _linkAggregation?: string; 
  public get linkAggregation() {
    return this.getStringAttribute('link_aggregation');
  }
  public set linkAggregation(value: string) {
    this._linkAggregation = value;
  }
  public resetLinkAggregation() {
    this._linkAggregation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkAggregationInput() {
    return this._linkAggregation;
  }

  // local_radio_vdom - computed: true, optional: true, required: false
  private _localRadioVdom?: string[]; 
  public get localRadioVdom() {
    return cdktf.Fn.tolist(this.getListAttribute('local_radio_vdom'));
  }
  public set localRadioVdom(value: string[]) {
    this._localRadioVdom = value;
  }
  public resetLocalRadioVdom() {
    this._localRadioVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localRadioVdomInput() {
    return this._localRadioVdom;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // max_ble_device - computed: false, optional: true, required: false
  private _maxBleDevice?: number; 
  public get maxBleDevice() {
    return this.getNumberAttribute('max_ble_device');
  }
  public set maxBleDevice(value: number) {
    this._maxBleDevice = value;
  }
  public resetMaxBleDevice() {
    this._maxBleDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBleDeviceInput() {
    return this._maxBleDevice;
  }

  // max_clients - computed: false, optional: true, required: false
  private _maxClients?: number; 
  public get maxClients() {
    return this.getNumberAttribute('max_clients');
  }
  public set maxClients(value: number) {
    this._maxClients = value;
  }
  public resetMaxClients() {
    this._maxClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxClientsInput() {
    return this._maxClients;
  }

  // max_retransmit - computed: true, optional: true, required: false
  private _maxRetransmit?: number; 
  public get maxRetransmit() {
    return this.getNumberAttribute('max_retransmit');
  }
  public set maxRetransmit(value: number) {
    this._maxRetransmit = value;
  }
  public resetMaxRetransmit() {
    this._maxRetransmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetransmitInput() {
    return this._maxRetransmit;
  }

  // max_rogue_ap - computed: false, optional: true, required: false
  private _maxRogueAp?: number; 
  public get maxRogueAp() {
    return this.getNumberAttribute('max_rogue_ap');
  }
  public set maxRogueAp(value: number) {
    this._maxRogueAp = value;
  }
  public resetMaxRogueAp() {
    this._maxRogueAp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRogueApInput() {
    return this._maxRogueAp;
  }

  // max_rogue_ap_wtp - computed: true, optional: true, required: false
  private _maxRogueApWtp?: number; 
  public get maxRogueApWtp() {
    return this.getNumberAttribute('max_rogue_ap_wtp');
  }
  public set maxRogueApWtp(value: number) {
    this._maxRogueApWtp = value;
  }
  public resetMaxRogueApWtp() {
    this._maxRogueApWtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRogueApWtpInput() {
    return this._maxRogueApWtp;
  }

  // max_rogue_sta - computed: false, optional: true, required: false
  private _maxRogueSta?: number; 
  public get maxRogueSta() {
    return this.getNumberAttribute('max_rogue_sta');
  }
  public set maxRogueSta(value: number) {
    this._maxRogueSta = value;
  }
  public resetMaxRogueSta() {
    this._maxRogueSta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRogueStaInput() {
    return this._maxRogueSta;
  }

  // max_sta_cap - computed: false, optional: true, required: false
  private _maxStaCap?: number; 
  public get maxStaCap() {
    return this.getNumberAttribute('max_sta_cap');
  }
  public set maxStaCap(value: number) {
    this._maxStaCap = value;
  }
  public resetMaxStaCap() {
    this._maxStaCap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStaCapInput() {
    return this._maxStaCap;
  }

  // max_sta_cap_wtp - computed: true, optional: true, required: false
  private _maxStaCapWtp?: number; 
  public get maxStaCapWtp() {
    return this.getNumberAttribute('max_sta_cap_wtp');
  }
  public set maxStaCapWtp(value: number) {
    this._maxStaCapWtp = value;
  }
  public resetMaxStaCapWtp() {
    this._maxStaCapWtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStaCapWtpInput() {
    return this._maxStaCapWtp;
  }

  // max_wids_entry - computed: false, optional: true, required: false
  private _maxWidsEntry?: number; 
  public get maxWidsEntry() {
    return this.getNumberAttribute('max_wids_entry');
  }
  public set maxWidsEntry(value: number) {
    this._maxWidsEntry = value;
  }
  public resetMaxWidsEntry() {
    this._maxWidsEntry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWidsEntryInput() {
    return this._maxWidsEntry;
  }

  // mesh_eth_type - computed: true, optional: true, required: false
  private _meshEthType?: number; 
  public get meshEthType() {
    return this.getNumberAttribute('mesh_eth_type');
  }
  public set meshEthType(value: number) {
    this._meshEthType = value;
  }
  public resetMeshEthType() {
    this._meshEthType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshEthTypeInput() {
    return this._meshEthType;
  }

  // nac_interval - computed: true, optional: true, required: false
  private _nacInterval?: number; 
  public get nacInterval() {
    return this.getNumberAttribute('nac_interval');
  }
  public set nacInterval(value: number) {
    this._nacInterval = value;
  }
  public resetNacInterval() {
    this._nacInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nacIntervalInput() {
    return this._nacInterval;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // rogue_scan_mac_adjacency - computed: true, optional: true, required: false
  private _rogueScanMacAdjacency?: number; 
  public get rogueScanMacAdjacency() {
    return this.getNumberAttribute('rogue_scan_mac_adjacency');
  }
  public set rogueScanMacAdjacency(value: number) {
    this._rogueScanMacAdjacency = value;
  }
  public resetRogueScanMacAdjacency() {
    this._rogueScanMacAdjacency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rogueScanMacAdjacencyInput() {
    return this._rogueScanMacAdjacency;
  }

  // rolling_wtp_upgrade - computed: true, optional: true, required: false
  private _rollingWtpUpgrade?: string; 
  public get rollingWtpUpgrade() {
    return this.getStringAttribute('rolling_wtp_upgrade');
  }
  public set rollingWtpUpgrade(value: string) {
    this._rollingWtpUpgrade = value;
  }
  public resetRollingWtpUpgrade() {
    this._rollingWtpUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingWtpUpgradeInput() {
    return this._rollingWtpUpgrade;
  }

  // rolling_wtp_upgrade_threshold - computed: true, optional: true, required: false
  private _rollingWtpUpgradeThreshold?: string; 
  public get rollingWtpUpgradeThreshold() {
    return this.getStringAttribute('rolling_wtp_upgrade_threshold');
  }
  public set rollingWtpUpgradeThreshold(value: string) {
    this._rollingWtpUpgradeThreshold = value;
  }
  public resetRollingWtpUpgradeThreshold() {
    this._rollingWtpUpgradeThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingWtpUpgradeThresholdInput() {
    return this._rollingWtpUpgradeThreshold;
  }

  // tunnel_mode - computed: true, optional: true, required: false
  private _tunnelMode?: string; 
  public get tunnelMode() {
    return this.getStringAttribute('tunnel_mode');
  }
  public set tunnelMode(value: string) {
    this._tunnelMode = value;
  }
  public resetTunnelMode() {
    this._tunnelMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelModeInput() {
    return this._tunnelMode;
  }

  // wpad_process_count - computed: false, optional: true, required: false
  private _wpadProcessCount?: number; 
  public get wpadProcessCount() {
    return this.getNumberAttribute('wpad_process_count');
  }
  public set wpadProcessCount(value: number) {
    this._wpadProcessCount = value;
  }
  public resetWpadProcessCount() {
    this._wpadProcessCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wpadProcessCountInput() {
    return this._wpadProcessCount;
  }

  // wtp_share - computed: true, optional: true, required: false
  private _wtpShare?: string; 
  public get wtpShare() {
    return this.getStringAttribute('wtp_share');
  }
  public set wtpShare(value: string) {
    this._wtpShare = value;
  }
  public resetWtpShare() {
    this._wtpShare = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wtpShareInput() {
    return this._wtpShare;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acd_process_count: cdktf.numberToTerraform(this._acdProcessCount),
      ap_log_server: cdktf.stringToTerraform(this._apLogServer),
      ap_log_server_ip: cdktf.stringToTerraform(this._apLogServerIp),
      ap_log_server_port: cdktf.numberToTerraform(this._apLogServerPort),
      control_message_offload: cdktf.listMapper(cdktf.stringToTerraform, false)(this._controlMessageOffload),
      data_ethernet_ii: cdktf.stringToTerraform(this._dataEthernetIi),
      device_name: cdktf.stringToTerraform(this._deviceName),
      dfs_lab_test: cdktf.stringToTerraform(this._dfsLabTest),
      discovery_mc_addr: cdktf.stringToTerraform(this._discoveryMcAddr),
      fiapp_eth_type: cdktf.numberToTerraform(this._fiappEthType),
      id: cdktf.stringToTerraform(this._id),
      image_download: cdktf.stringToTerraform(this._imageDownload),
      ipsec_base_ip: cdktf.stringToTerraform(this._ipsecBaseIp),
      link_aggregation: cdktf.stringToTerraform(this._linkAggregation),
      local_radio_vdom: cdktf.listMapper(cdktf.stringToTerraform, false)(this._localRadioVdom),
      location: cdktf.stringToTerraform(this._location),
      max_ble_device: cdktf.numberToTerraform(this._maxBleDevice),
      max_clients: cdktf.numberToTerraform(this._maxClients),
      max_retransmit: cdktf.numberToTerraform(this._maxRetransmit),
      max_rogue_ap: cdktf.numberToTerraform(this._maxRogueAp),
      max_rogue_ap_wtp: cdktf.numberToTerraform(this._maxRogueApWtp),
      max_rogue_sta: cdktf.numberToTerraform(this._maxRogueSta),
      max_sta_cap: cdktf.numberToTerraform(this._maxStaCap),
      max_sta_cap_wtp: cdktf.numberToTerraform(this._maxStaCapWtp),
      max_wids_entry: cdktf.numberToTerraform(this._maxWidsEntry),
      mesh_eth_type: cdktf.numberToTerraform(this._meshEthType),
      nac_interval: cdktf.numberToTerraform(this._nacInterval),
      name: cdktf.stringToTerraform(this._name),
      rogue_scan_mac_adjacency: cdktf.numberToTerraform(this._rogueScanMacAdjacency),
      rolling_wtp_upgrade: cdktf.stringToTerraform(this._rollingWtpUpgrade),
      rolling_wtp_upgrade_threshold: cdktf.stringToTerraform(this._rollingWtpUpgradeThreshold),
      tunnel_mode: cdktf.stringToTerraform(this._tunnelMode),
      wpad_process_count: cdktf.numberToTerraform(this._wpadProcessCount),
      wtp_share: cdktf.stringToTerraform(this._wtpShare),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acd_process_count: {
        value: cdktf.numberToHclTerraform(this._acdProcessCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ap_log_server: {
        value: cdktf.stringToHclTerraform(this._apLogServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ap_log_server_ip: {
        value: cdktf.stringToHclTerraform(this._apLogServerIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ap_log_server_port: {
        value: cdktf.numberToHclTerraform(this._apLogServerPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      control_message_offload: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._controlMessageOffload),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      data_ethernet_ii: {
        value: cdktf.stringToHclTerraform(this._dataEthernetIi),
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
      dfs_lab_test: {
        value: cdktf.stringToHclTerraform(this._dfsLabTest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      discovery_mc_addr: {
        value: cdktf.stringToHclTerraform(this._discoveryMcAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fiapp_eth_type: {
        value: cdktf.numberToHclTerraform(this._fiappEthType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_download: {
        value: cdktf.stringToHclTerraform(this._imageDownload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_base_ip: {
        value: cdktf.stringToHclTerraform(this._ipsecBaseIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link_aggregation: {
        value: cdktf.stringToHclTerraform(this._linkAggregation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_radio_vdom: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._localRadioVdom),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_ble_device: {
        value: cdktf.numberToHclTerraform(this._maxBleDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_clients: {
        value: cdktf.numberToHclTerraform(this._maxClients),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_retransmit: {
        value: cdktf.numberToHclTerraform(this._maxRetransmit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_rogue_ap: {
        value: cdktf.numberToHclTerraform(this._maxRogueAp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_rogue_ap_wtp: {
        value: cdktf.numberToHclTerraform(this._maxRogueApWtp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_rogue_sta: {
        value: cdktf.numberToHclTerraform(this._maxRogueSta),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_sta_cap: {
        value: cdktf.numberToHclTerraform(this._maxStaCap),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_sta_cap_wtp: {
        value: cdktf.numberToHclTerraform(this._maxStaCapWtp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_wids_entry: {
        value: cdktf.numberToHclTerraform(this._maxWidsEntry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mesh_eth_type: {
        value: cdktf.numberToHclTerraform(this._meshEthType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nac_interval: {
        value: cdktf.numberToHclTerraform(this._nacInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rogue_scan_mac_adjacency: {
        value: cdktf.numberToHclTerraform(this._rogueScanMacAdjacency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rolling_wtp_upgrade: {
        value: cdktf.stringToHclTerraform(this._rollingWtpUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rolling_wtp_upgrade_threshold: {
        value: cdktf.stringToHclTerraform(this._rollingWtpUpgradeThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_mode: {
        value: cdktf.stringToHclTerraform(this._tunnelMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wpad_process_count: {
        value: cdktf.numberToHclTerraform(this._wpadProcessCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wtp_share: {
        value: cdktf.stringToHclTerraform(this._wtpShare),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
