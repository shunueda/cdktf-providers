// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver_pools
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemPcpserverPoolsAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver_pools#allow_opcode SystemPcpserverPoolsA#allow_opcode}
  */
  readonly allowOpcode?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver_pools#announcement_count SystemPcpserverPoolsA#announcement_count}
  */
  readonly announcementCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver_pools#arp_reply SystemPcpserverPoolsA#arp_reply}
  */
  readonly arpReply?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver_pools#client_mapping_limit SystemPcpserverPoolsA#client_mapping_limit}
  */
  readonly clientMappingLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver_pools#client_subnet SystemPcpserverPoolsA#client_subnet}
  */
  readonly clientSubnet?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver_pools#description SystemPcpserverPoolsA#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver_pools#device_name SystemPcpserverPoolsA#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver_pools#device_vdom SystemPcpserverPoolsA#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver_pools#ext_intf SystemPcpserverPoolsA#ext_intf}
  */
  readonly extIntf?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver_pools#extip SystemPcpserverPoolsA#extip}
  */
  readonly extip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver_pools#extport SystemPcpserverPoolsA#extport}
  */
  readonly extport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver_pools#fosid SystemPcpserverPoolsA#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver_pools#id SystemPcpserverPoolsA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver_pools#intl_intf SystemPcpserverPoolsA#intl_intf}
  */
  readonly intlIntf?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver_pools#mapping_filter_limit SystemPcpserverPoolsA#mapping_filter_limit}
  */
  readonly mappingFilterLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver_pools#maximal_lifetime SystemPcpserverPoolsA#maximal_lifetime}
  */
  readonly maximalLifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver_pools#minimal_lifetime SystemPcpserverPoolsA#minimal_lifetime}
  */
  readonly minimalLifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver_pools#multicast_announcement SystemPcpserverPoolsA#multicast_announcement}
  */
  readonly multicastAnnouncement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver_pools#name SystemPcpserverPoolsA#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver_pools#recycle_delay SystemPcpserverPoolsA#recycle_delay}
  */
  readonly recycleDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver_pools#third_party SystemPcpserverPoolsA#third_party}
  */
  readonly thirdParty?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver_pools#third_party_subnet SystemPcpserverPoolsA#third_party_subnet}
  */
  readonly thirdPartySubnet?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver_pools fmgdevice_system_pcpserver_pools}
*/
export class SystemPcpserverPoolsA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_pcpserver_pools";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemPcpserverPoolsA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemPcpserverPoolsA to import
  * @param importFromId The id of the existing SystemPcpserverPoolsA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver_pools#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemPcpserverPoolsA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_pcpserver_pools", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver_pools fmgdevice_system_pcpserver_pools} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemPcpserverPoolsAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemPcpserverPoolsAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_pcpserver_pools',
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
    this._allowOpcode = config.allowOpcode;
    this._announcementCount = config.announcementCount;
    this._arpReply = config.arpReply;
    this._clientMappingLimit = config.clientMappingLimit;
    this._clientSubnet = config.clientSubnet;
    this._description = config.description;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._extIntf = config.extIntf;
    this._extip = config.extip;
    this._extport = config.extport;
    this._fosid = config.fosid;
    this._id = config.id;
    this._intlIntf = config.intlIntf;
    this._mappingFilterLimit = config.mappingFilterLimit;
    this._maximalLifetime = config.maximalLifetime;
    this._minimalLifetime = config.minimalLifetime;
    this._multicastAnnouncement = config.multicastAnnouncement;
    this._name = config.name;
    this._recycleDelay = config.recycleDelay;
    this._thirdParty = config.thirdParty;
    this._thirdPartySubnet = config.thirdPartySubnet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_opcode - computed: true, optional: true, required: false
  private _allowOpcode?: string[]; 
  public get allowOpcode() {
    return cdktf.Fn.tolist(this.getListAttribute('allow_opcode'));
  }
  public set allowOpcode(value: string[]) {
    this._allowOpcode = value;
  }
  public resetAllowOpcode() {
    this._allowOpcode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOpcodeInput() {
    return this._allowOpcode;
  }

  // announcement_count - computed: true, optional: true, required: false
  private _announcementCount?: number; 
  public get announcementCount() {
    return this.getNumberAttribute('announcement_count');
  }
  public set announcementCount(value: number) {
    this._announcementCount = value;
  }
  public resetAnnouncementCount() {
    this._announcementCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get announcementCountInput() {
    return this._announcementCount;
  }

  // arp_reply - computed: true, optional: true, required: false
  private _arpReply?: string; 
  public get arpReply() {
    return this.getStringAttribute('arp_reply');
  }
  public set arpReply(value: string) {
    this._arpReply = value;
  }
  public resetArpReply() {
    this._arpReply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpReplyInput() {
    return this._arpReply;
  }

  // client_mapping_limit - computed: false, optional: true, required: false
  private _clientMappingLimit?: number; 
  public get clientMappingLimit() {
    return this.getNumberAttribute('client_mapping_limit');
  }
  public set clientMappingLimit(value: number) {
    this._clientMappingLimit = value;
  }
  public resetClientMappingLimit() {
    this._clientMappingLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientMappingLimitInput() {
    return this._clientMappingLimit;
  }

  // client_subnet - computed: true, optional: true, required: false
  private _clientSubnet?: string[]; 
  public get clientSubnet() {
    return cdktf.Fn.tolist(this.getListAttribute('client_subnet'));
  }
  public set clientSubnet(value: string[]) {
    this._clientSubnet = value;
  }
  public resetClientSubnet() {
    this._clientSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSubnetInput() {
    return this._clientSubnet;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // ext_intf - computed: true, optional: true, required: false
  private _extIntf?: string[]; 
  public get extIntf() {
    return cdktf.Fn.tolist(this.getListAttribute('ext_intf'));
  }
  public set extIntf(value: string[]) {
    this._extIntf = value;
  }
  public resetExtIntf() {
    this._extIntf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIntfInput() {
    return this._extIntf;
  }

  // extip - computed: true, optional: true, required: false
  private _extip?: string; 
  public get extip() {
    return this.getStringAttribute('extip');
  }
  public set extip(value: string) {
    this._extip = value;
  }
  public resetExtip() {
    this._extip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extipInput() {
    return this._extip;
  }

  // extport - computed: true, optional: true, required: false
  private _extport?: string; 
  public get extport() {
    return this.getStringAttribute('extport');
  }
  public set extport(value: string) {
    this._extport = value;
  }
  public resetExtport() {
    this._extport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extportInput() {
    return this._extport;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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

  // intl_intf - computed: true, optional: true, required: false
  private _intlIntf?: string[]; 
  public get intlIntf() {
    return cdktf.Fn.tolist(this.getListAttribute('intl_intf'));
  }
  public set intlIntf(value: string[]) {
    this._intlIntf = value;
  }
  public resetIntlIntf() {
    this._intlIntf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intlIntfInput() {
    return this._intlIntf;
  }

  // mapping_filter_limit - computed: true, optional: true, required: false
  private _mappingFilterLimit?: number; 
  public get mappingFilterLimit() {
    return this.getNumberAttribute('mapping_filter_limit');
  }
  public set mappingFilterLimit(value: number) {
    this._mappingFilterLimit = value;
  }
  public resetMappingFilterLimit() {
    this._mappingFilterLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingFilterLimitInput() {
    return this._mappingFilterLimit;
  }

  // maximal_lifetime - computed: true, optional: true, required: false
  private _maximalLifetime?: number; 
  public get maximalLifetime() {
    return this.getNumberAttribute('maximal_lifetime');
  }
  public set maximalLifetime(value: number) {
    this._maximalLifetime = value;
  }
  public resetMaximalLifetime() {
    this._maximalLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximalLifetimeInput() {
    return this._maximalLifetime;
  }

  // minimal_lifetime - computed: true, optional: true, required: false
  private _minimalLifetime?: number; 
  public get minimalLifetime() {
    return this.getNumberAttribute('minimal_lifetime');
  }
  public set minimalLifetime(value: number) {
    this._minimalLifetime = value;
  }
  public resetMinimalLifetime() {
    this._minimalLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimalLifetimeInput() {
    return this._minimalLifetime;
  }

  // multicast_announcement - computed: true, optional: true, required: false
  private _multicastAnnouncement?: string; 
  public get multicastAnnouncement() {
    return this.getStringAttribute('multicast_announcement');
  }
  public set multicastAnnouncement(value: string) {
    this._multicastAnnouncement = value;
  }
  public resetMulticastAnnouncement() {
    this._multicastAnnouncement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastAnnouncementInput() {
    return this._multicastAnnouncement;
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

  // recycle_delay - computed: false, optional: true, required: false
  private _recycleDelay?: number; 
  public get recycleDelay() {
    return this.getNumberAttribute('recycle_delay');
  }
  public set recycleDelay(value: number) {
    this._recycleDelay = value;
  }
  public resetRecycleDelay() {
    this._recycleDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recycleDelayInput() {
    return this._recycleDelay;
  }

  // third_party - computed: true, optional: true, required: false
  private _thirdParty?: string; 
  public get thirdParty() {
    return this.getStringAttribute('third_party');
  }
  public set thirdParty(value: string) {
    this._thirdParty = value;
  }
  public resetThirdParty() {
    this._thirdParty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thirdPartyInput() {
    return this._thirdParty;
  }

  // third_party_subnet - computed: true, optional: true, required: false
  private _thirdPartySubnet?: string[]; 
  public get thirdPartySubnet() {
    return cdktf.Fn.tolist(this.getListAttribute('third_party_subnet'));
  }
  public set thirdPartySubnet(value: string[]) {
    this._thirdPartySubnet = value;
  }
  public resetThirdPartySubnet() {
    this._thirdPartySubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thirdPartySubnetInput() {
    return this._thirdPartySubnet;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_opcode: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowOpcode),
      announcement_count: cdktf.numberToTerraform(this._announcementCount),
      arp_reply: cdktf.stringToTerraform(this._arpReply),
      client_mapping_limit: cdktf.numberToTerraform(this._clientMappingLimit),
      client_subnet: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clientSubnet),
      description: cdktf.stringToTerraform(this._description),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      ext_intf: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extIntf),
      extip: cdktf.stringToTerraform(this._extip),
      extport: cdktf.stringToTerraform(this._extport),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      intl_intf: cdktf.listMapper(cdktf.stringToTerraform, false)(this._intlIntf),
      mapping_filter_limit: cdktf.numberToTerraform(this._mappingFilterLimit),
      maximal_lifetime: cdktf.numberToTerraform(this._maximalLifetime),
      minimal_lifetime: cdktf.numberToTerraform(this._minimalLifetime),
      multicast_announcement: cdktf.stringToTerraform(this._multicastAnnouncement),
      name: cdktf.stringToTerraform(this._name),
      recycle_delay: cdktf.numberToTerraform(this._recycleDelay),
      third_party: cdktf.stringToTerraform(this._thirdParty),
      third_party_subnet: cdktf.listMapper(cdktf.stringToTerraform, false)(this._thirdPartySubnet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_opcode: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowOpcode),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      announcement_count: {
        value: cdktf.numberToHclTerraform(this._announcementCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      arp_reply: {
        value: cdktf.stringToHclTerraform(this._arpReply),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_mapping_limit: {
        value: cdktf.numberToHclTerraform(this._clientMappingLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_subnet: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clientSubnet),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      ext_intf: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._extIntf),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      extip: {
        value: cdktf.stringToHclTerraform(this._extip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extport: {
        value: cdktf.stringToHclTerraform(this._extport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
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
      intl_intf: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._intlIntf),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      mapping_filter_limit: {
        value: cdktf.numberToHclTerraform(this._mappingFilterLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximal_lifetime: {
        value: cdktf.numberToHclTerraform(this._maximalLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minimal_lifetime: {
        value: cdktf.numberToHclTerraform(this._minimalLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      multicast_announcement: {
        value: cdktf.stringToHclTerraform(this._multicastAnnouncement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recycle_delay: {
        value: cdktf.numberToHclTerraform(this._recycleDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      third_party: {
        value: cdktf.stringToHclTerraform(this._thirdParty),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      third_party_subnet: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._thirdPartySubnet),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
