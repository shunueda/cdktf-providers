// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SflowSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow TPS to always send mapping ctr block (260, 271, and 272)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_setting#append_mapping_info SflowSetting#append_mapping_info}
  */
  readonly appendMappingInfo?: number;
  /**
  * sFlow counter polling interval, default is 20
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_setting#counter_polling_interval SflowSetting#counter_polling_interval}
  */
  readonly counterPollingInterval?: number;
  /**
  * Enable exporting DDoS sourceID in sflow packet sample
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_setting#ddos_source_id_export SflowSetting#ddos_source_id_export}
  */
  readonly ddosSourceIdExport?: number;
  /**
  * Default MTU for counter-polling packets - DDoS 3.2 format only (Default: 1500)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_setting#default_counter_polling_mtu SflowSetting#default_counter_polling_mtu}
  */
  readonly defaultCounterPollingMtu?: number;
  /**
  * Allow TPS to packet up to 127 character zone names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_setting#enlarge_zone_name SflowSetting#enlarge_zone_name}
  */
  readonly enlargeZoneName?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_setting#id SflowSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'enable': Enable local sflow collection; 'disable': Disable local sflow collection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_setting#local_collection SflowSetting#local_collection}
  */
  readonly localCollection?: string;
  /**
  * Set sFlow local counter polling interval for T1 stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_setting#local_t1_polling_interval SflowSetting#local_t1_polling_interval}
  */
  readonly localT1PollingInterval?: number;
  /**
  * Set sFlow local counter polling interval for T2 stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_setting#local_t2_polling_interval SflowSetting#local_t2_polling_interval}
  */
  readonly localT2PollingInterval?: number;
  /**
  * limit management link speed in (Mbps)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_setting#management_link_utilization SflowSetting#management_link_utilization}
  */
  readonly managementLinkUtilization?: number;
  /**
  * percentage limit of the management link speed (Default is 30%)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_setting#management_link_utilization_percentage SflowSetting#management_link_utilization_percentage}
  */
  readonly managementLinkUtilizationPercentage?: number;
  /**
  * Configure maximum number of bytes that should be copied from a sampled packet (default: 128) (The maximum number of bytes (Default: 128))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_setting#max_header SflowSetting#max_header}
  */
  readonly maxHeader?: number;
  /**
  * Forces sFlow packet to only contain one sFlow counter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_setting#one_blk_per_pkt SflowSetting#one_blk_per_pkt}
  */
  readonly oneBlkPerPkt?: number;
  /**
  * sFlow packet sampling rate, default is 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_setting#packet_sampling_rate SflowSetting#packet_sampling_rate}
  */
  readonly packetSamplingRate?: number;
  /**
  * Source port-range end
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_setting#port_range_end SflowSetting#port_range_end}
  */
  readonly portRangeEnd?: number;
  /**
  * Source port-range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_setting#port_range_start SflowSetting#port_range_start}
  */
  readonly portRangeStart?: number;
  /**
  * 'enable': Randomize source port; 'disable': Fix source port 6343; 'packet-sampling-only': Only randomized source port for packet-sampling (Default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_setting#randomize_source_port SflowSetting#randomize_source_port}
  */
  readonly randomizeSourcePort?: string;
  /**
  * sFlow packet sampling rate limit, default is 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_setting#sampling_rate_limit SflowSetting#sampling_rate_limit}
  */
  readonly samplingRateLimit?: number;
  /**
  * Use management interface's IP address for source IP of sFlow packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_setting#source_ip_use_mgmt SflowSetting#source_ip_use_mgmt}
  */
  readonly sourceIpUseMgmt?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_setting#uuid SflowSetting#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_setting thunder_sflow_setting}
*/
export class SflowSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_sflow_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SflowSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SflowSetting to import
  * @param importFromId The id of the existing SflowSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SflowSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_sflow_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_setting thunder_sflow_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SflowSettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SflowSettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_sflow_setting',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appendMappingInfo = config.appendMappingInfo;
    this._counterPollingInterval = config.counterPollingInterval;
    this._ddosSourceIdExport = config.ddosSourceIdExport;
    this._defaultCounterPollingMtu = config.defaultCounterPollingMtu;
    this._enlargeZoneName = config.enlargeZoneName;
    this._id = config.id;
    this._localCollection = config.localCollection;
    this._localT1PollingInterval = config.localT1PollingInterval;
    this._localT2PollingInterval = config.localT2PollingInterval;
    this._managementLinkUtilization = config.managementLinkUtilization;
    this._managementLinkUtilizationPercentage = config.managementLinkUtilizationPercentage;
    this._maxHeader = config.maxHeader;
    this._oneBlkPerPkt = config.oneBlkPerPkt;
    this._packetSamplingRate = config.packetSamplingRate;
    this._portRangeEnd = config.portRangeEnd;
    this._portRangeStart = config.portRangeStart;
    this._randomizeSourcePort = config.randomizeSourcePort;
    this._samplingRateLimit = config.samplingRateLimit;
    this._sourceIpUseMgmt = config.sourceIpUseMgmt;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // append_mapping_info - computed: false, optional: true, required: false
  private _appendMappingInfo?: number; 
  public get appendMappingInfo() {
    return this.getNumberAttribute('append_mapping_info');
  }
  public set appendMappingInfo(value: number) {
    this._appendMappingInfo = value;
  }
  public resetAppendMappingInfo() {
    this._appendMappingInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendMappingInfoInput() {
    return this._appendMappingInfo;
  }

  // counter_polling_interval - computed: false, optional: true, required: false
  private _counterPollingInterval?: number; 
  public get counterPollingInterval() {
    return this.getNumberAttribute('counter_polling_interval');
  }
  public set counterPollingInterval(value: number) {
    this._counterPollingInterval = value;
  }
  public resetCounterPollingInterval() {
    this._counterPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counterPollingIntervalInput() {
    return this._counterPollingInterval;
  }

  // ddos_source_id_export - computed: false, optional: true, required: false
  private _ddosSourceIdExport?: number; 
  public get ddosSourceIdExport() {
    return this.getNumberAttribute('ddos_source_id_export');
  }
  public set ddosSourceIdExport(value: number) {
    this._ddosSourceIdExport = value;
  }
  public resetDdosSourceIdExport() {
    this._ddosSourceIdExport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosSourceIdExportInput() {
    return this._ddosSourceIdExport;
  }

  // default_counter_polling_mtu - computed: false, optional: true, required: false
  private _defaultCounterPollingMtu?: number; 
  public get defaultCounterPollingMtu() {
    return this.getNumberAttribute('default_counter_polling_mtu');
  }
  public set defaultCounterPollingMtu(value: number) {
    this._defaultCounterPollingMtu = value;
  }
  public resetDefaultCounterPollingMtu() {
    this._defaultCounterPollingMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCounterPollingMtuInput() {
    return this._defaultCounterPollingMtu;
  }

  // enlarge_zone_name - computed: false, optional: true, required: false
  private _enlargeZoneName?: number; 
  public get enlargeZoneName() {
    return this.getNumberAttribute('enlarge_zone_name');
  }
  public set enlargeZoneName(value: number) {
    this._enlargeZoneName = value;
  }
  public resetEnlargeZoneName() {
    this._enlargeZoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enlargeZoneNameInput() {
    return this._enlargeZoneName;
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

  // local_collection - computed: false, optional: true, required: false
  private _localCollection?: string; 
  public get localCollection() {
    return this.getStringAttribute('local_collection');
  }
  public set localCollection(value: string) {
    this._localCollection = value;
  }
  public resetLocalCollection() {
    this._localCollection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localCollectionInput() {
    return this._localCollection;
  }

  // local_t1_polling_interval - computed: false, optional: true, required: false
  private _localT1PollingInterval?: number; 
  public get localT1PollingInterval() {
    return this.getNumberAttribute('local_t1_polling_interval');
  }
  public set localT1PollingInterval(value: number) {
    this._localT1PollingInterval = value;
  }
  public resetLocalT1PollingInterval() {
    this._localT1PollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localT1PollingIntervalInput() {
    return this._localT1PollingInterval;
  }

  // local_t2_polling_interval - computed: false, optional: true, required: false
  private _localT2PollingInterval?: number; 
  public get localT2PollingInterval() {
    return this.getNumberAttribute('local_t2_polling_interval');
  }
  public set localT2PollingInterval(value: number) {
    this._localT2PollingInterval = value;
  }
  public resetLocalT2PollingInterval() {
    this._localT2PollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localT2PollingIntervalInput() {
    return this._localT2PollingInterval;
  }

  // management_link_utilization - computed: false, optional: true, required: false
  private _managementLinkUtilization?: number; 
  public get managementLinkUtilization() {
    return this.getNumberAttribute('management_link_utilization');
  }
  public set managementLinkUtilization(value: number) {
    this._managementLinkUtilization = value;
  }
  public resetManagementLinkUtilization() {
    this._managementLinkUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementLinkUtilizationInput() {
    return this._managementLinkUtilization;
  }

  // management_link_utilization_percentage - computed: false, optional: true, required: false
  private _managementLinkUtilizationPercentage?: number; 
  public get managementLinkUtilizationPercentage() {
    return this.getNumberAttribute('management_link_utilization_percentage');
  }
  public set managementLinkUtilizationPercentage(value: number) {
    this._managementLinkUtilizationPercentage = value;
  }
  public resetManagementLinkUtilizationPercentage() {
    this._managementLinkUtilizationPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementLinkUtilizationPercentageInput() {
    return this._managementLinkUtilizationPercentage;
  }

  // max_header - computed: false, optional: true, required: false
  private _maxHeader?: number; 
  public get maxHeader() {
    return this.getNumberAttribute('max_header');
  }
  public set maxHeader(value: number) {
    this._maxHeader = value;
  }
  public resetMaxHeader() {
    this._maxHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHeaderInput() {
    return this._maxHeader;
  }

  // one_blk_per_pkt - computed: false, optional: true, required: false
  private _oneBlkPerPkt?: number; 
  public get oneBlkPerPkt() {
    return this.getNumberAttribute('one_blk_per_pkt');
  }
  public set oneBlkPerPkt(value: number) {
    this._oneBlkPerPkt = value;
  }
  public resetOneBlkPerPkt() {
    this._oneBlkPerPkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneBlkPerPktInput() {
    return this._oneBlkPerPkt;
  }

  // packet_sampling_rate - computed: false, optional: true, required: false
  private _packetSamplingRate?: number; 
  public get packetSamplingRate() {
    return this.getNumberAttribute('packet_sampling_rate');
  }
  public set packetSamplingRate(value: number) {
    this._packetSamplingRate = value;
  }
  public resetPacketSamplingRate() {
    this._packetSamplingRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetSamplingRateInput() {
    return this._packetSamplingRate;
  }

  // port_range_end - computed: false, optional: true, required: false
  private _portRangeEnd?: number; 
  public get portRangeEnd() {
    return this.getNumberAttribute('port_range_end');
  }
  public set portRangeEnd(value: number) {
    this._portRangeEnd = value;
  }
  public resetPortRangeEnd() {
    this._portRangeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeEndInput() {
    return this._portRangeEnd;
  }

  // port_range_start - computed: false, optional: true, required: false
  private _portRangeStart?: number; 
  public get portRangeStart() {
    return this.getNumberAttribute('port_range_start');
  }
  public set portRangeStart(value: number) {
    this._portRangeStart = value;
  }
  public resetPortRangeStart() {
    this._portRangeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeStartInput() {
    return this._portRangeStart;
  }

  // randomize_source_port - computed: false, optional: true, required: false
  private _randomizeSourcePort?: string; 
  public get randomizeSourcePort() {
    return this.getStringAttribute('randomize_source_port');
  }
  public set randomizeSourcePort(value: string) {
    this._randomizeSourcePort = value;
  }
  public resetRandomizeSourcePort() {
    this._randomizeSourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomizeSourcePortInput() {
    return this._randomizeSourcePort;
  }

  // sampling_rate_limit - computed: false, optional: true, required: false
  private _samplingRateLimit?: number; 
  public get samplingRateLimit() {
    return this.getNumberAttribute('sampling_rate_limit');
  }
  public set samplingRateLimit(value: number) {
    this._samplingRateLimit = value;
  }
  public resetSamplingRateLimit() {
    this._samplingRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingRateLimitInput() {
    return this._samplingRateLimit;
  }

  // source_ip_use_mgmt - computed: false, optional: true, required: false
  private _sourceIpUseMgmt?: number; 
  public get sourceIpUseMgmt() {
    return this.getNumberAttribute('source_ip_use_mgmt');
  }
  public set sourceIpUseMgmt(value: number) {
    this._sourceIpUseMgmt = value;
  }
  public resetSourceIpUseMgmt() {
    this._sourceIpUseMgmt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpUseMgmtInput() {
    return this._sourceIpUseMgmt;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      append_mapping_info: cdktf.numberToTerraform(this._appendMappingInfo),
      counter_polling_interval: cdktf.numberToTerraform(this._counterPollingInterval),
      ddos_source_id_export: cdktf.numberToTerraform(this._ddosSourceIdExport),
      default_counter_polling_mtu: cdktf.numberToTerraform(this._defaultCounterPollingMtu),
      enlarge_zone_name: cdktf.numberToTerraform(this._enlargeZoneName),
      id: cdktf.stringToTerraform(this._id),
      local_collection: cdktf.stringToTerraform(this._localCollection),
      local_t1_polling_interval: cdktf.numberToTerraform(this._localT1PollingInterval),
      local_t2_polling_interval: cdktf.numberToTerraform(this._localT2PollingInterval),
      management_link_utilization: cdktf.numberToTerraform(this._managementLinkUtilization),
      management_link_utilization_percentage: cdktf.numberToTerraform(this._managementLinkUtilizationPercentage),
      max_header: cdktf.numberToTerraform(this._maxHeader),
      one_blk_per_pkt: cdktf.numberToTerraform(this._oneBlkPerPkt),
      packet_sampling_rate: cdktf.numberToTerraform(this._packetSamplingRate),
      port_range_end: cdktf.numberToTerraform(this._portRangeEnd),
      port_range_start: cdktf.numberToTerraform(this._portRangeStart),
      randomize_source_port: cdktf.stringToTerraform(this._randomizeSourcePort),
      sampling_rate_limit: cdktf.numberToTerraform(this._samplingRateLimit),
      source_ip_use_mgmt: cdktf.numberToTerraform(this._sourceIpUseMgmt),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      append_mapping_info: {
        value: cdktf.numberToHclTerraform(this._appendMappingInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      counter_polling_interval: {
        value: cdktf.numberToHclTerraform(this._counterPollingInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ddos_source_id_export: {
        value: cdktf.numberToHclTerraform(this._ddosSourceIdExport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_counter_polling_mtu: {
        value: cdktf.numberToHclTerraform(this._defaultCounterPollingMtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enlarge_zone_name: {
        value: cdktf.numberToHclTerraform(this._enlargeZoneName),
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
      local_collection: {
        value: cdktf.stringToHclTerraform(this._localCollection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_t1_polling_interval: {
        value: cdktf.numberToHclTerraform(this._localT1PollingInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      local_t2_polling_interval: {
        value: cdktf.numberToHclTerraform(this._localT2PollingInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      management_link_utilization: {
        value: cdktf.numberToHclTerraform(this._managementLinkUtilization),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      management_link_utilization_percentage: {
        value: cdktf.numberToHclTerraform(this._managementLinkUtilizationPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_header: {
        value: cdktf.numberToHclTerraform(this._maxHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      one_blk_per_pkt: {
        value: cdktf.numberToHclTerraform(this._oneBlkPerPkt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      packet_sampling_rate: {
        value: cdktf.numberToHclTerraform(this._packetSamplingRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_range_end: {
        value: cdktf.numberToHclTerraform(this._portRangeEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_range_start: {
        value: cdktf.numberToHclTerraform(this._portRangeStart),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      randomize_source_port: {
        value: cdktf.stringToHclTerraform(this._randomizeSourcePort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sampling_rate_limit: {
        value: cdktf.numberToHclTerraform(this._samplingRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_ip_use_mgmt: {
        value: cdktf.numberToHclTerraform(this._sourceIpUseMgmt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
