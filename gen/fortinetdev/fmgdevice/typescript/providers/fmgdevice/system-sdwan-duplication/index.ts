// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_duplication
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemSdwanDuplicationAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_duplication#device_name SystemSdwanDuplicationA#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_duplication#device_vdom SystemSdwanDuplicationA#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_duplication#dstaddr SystemSdwanDuplicationA#dstaddr}
  */
  readonly dstaddr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_duplication#dstaddr6 SystemSdwanDuplicationA#dstaddr6}
  */
  readonly dstaddr6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_duplication#dstintf SystemSdwanDuplicationA#dstintf}
  */
  readonly dstintf?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_duplication#fosid SystemSdwanDuplicationA#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_duplication#id SystemSdwanDuplicationA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_duplication#packet_de_duplication SystemSdwanDuplicationA#packet_de_duplication}
  */
  readonly packetDeDuplication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_duplication#packet_duplication SystemSdwanDuplicationA#packet_duplication}
  */
  readonly packetDuplication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_duplication#service SystemSdwanDuplicationA#service}
  */
  readonly service?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_duplication#service_id SystemSdwanDuplicationA#service_id}
  */
  readonly serviceId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_duplication#sla_match_service SystemSdwanDuplicationA#sla_match_service}
  */
  readonly slaMatchService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_duplication#srcaddr SystemSdwanDuplicationA#srcaddr}
  */
  readonly srcaddr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_duplication#srcaddr6 SystemSdwanDuplicationA#srcaddr6}
  */
  readonly srcaddr6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_duplication#srcintf SystemSdwanDuplicationA#srcintf}
  */
  readonly srcintf?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_duplication fmgdevice_system_sdwan_duplication}
*/
export class SystemSdwanDuplicationA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_sdwan_duplication";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemSdwanDuplicationA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemSdwanDuplicationA to import
  * @param importFromId The id of the existing SystemSdwanDuplicationA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_duplication#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemSdwanDuplicationA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_sdwan_duplication", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_duplication fmgdevice_system_sdwan_duplication} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemSdwanDuplicationAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemSdwanDuplicationAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_sdwan_duplication',
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
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._dstaddr = config.dstaddr;
    this._dstaddr6 = config.dstaddr6;
    this._dstintf = config.dstintf;
    this._fosid = config.fosid;
    this._id = config.id;
    this._packetDeDuplication = config.packetDeDuplication;
    this._packetDuplication = config.packetDuplication;
    this._service = config.service;
    this._serviceId = config.serviceId;
    this._slaMatchService = config.slaMatchService;
    this._srcaddr = config.srcaddr;
    this._srcaddr6 = config.srcaddr6;
    this._srcintf = config.srcintf;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // dstaddr - computed: true, optional: true, required: false
  private _dstaddr?: string[]; 
  public get dstaddr() {
    return cdktf.Fn.tolist(this.getListAttribute('dstaddr'));
  }
  public set dstaddr(value: string[]) {
    this._dstaddr = value;
  }
  public resetDstaddr() {
    this._dstaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstaddrInput() {
    return this._dstaddr;
  }

  // dstaddr6 - computed: true, optional: true, required: false
  private _dstaddr6?: string[]; 
  public get dstaddr6() {
    return cdktf.Fn.tolist(this.getListAttribute('dstaddr6'));
  }
  public set dstaddr6(value: string[]) {
    this._dstaddr6 = value;
  }
  public resetDstaddr6() {
    this._dstaddr6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstaddr6Input() {
    return this._dstaddr6;
  }

  // dstintf - computed: true, optional: true, required: false
  private _dstintf?: string[]; 
  public get dstintf() {
    return cdktf.Fn.tolist(this.getListAttribute('dstintf'));
  }
  public set dstintf(value: string[]) {
    this._dstintf = value;
  }
  public resetDstintf() {
    this._dstintf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstintfInput() {
    return this._dstintf;
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

  // packet_de_duplication - computed: true, optional: true, required: false
  private _packetDeDuplication?: string; 
  public get packetDeDuplication() {
    return this.getStringAttribute('packet_de_duplication');
  }
  public set packetDeDuplication(value: string) {
    this._packetDeDuplication = value;
  }
  public resetPacketDeDuplication() {
    this._packetDeDuplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetDeDuplicationInput() {
    return this._packetDeDuplication;
  }

  // packet_duplication - computed: true, optional: true, required: false
  private _packetDuplication?: string; 
  public get packetDuplication() {
    return this.getStringAttribute('packet_duplication');
  }
  public set packetDuplication(value: string) {
    this._packetDuplication = value;
  }
  public resetPacketDuplication() {
    this._packetDuplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetDuplicationInput() {
    return this._packetDuplication;
  }

  // service - computed: true, optional: true, required: false
  private _service?: string[]; 
  public get service() {
    return cdktf.Fn.tolist(this.getListAttribute('service'));
  }
  public set service(value: string[]) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // service_id - computed: true, optional: true, required: false
  private _serviceId?: string[]; 
  public get serviceId() {
    return cdktf.Fn.tolist(this.getListAttribute('service_id'));
  }
  public set serviceId(value: string[]) {
    this._serviceId = value;
  }
  public resetServiceId() {
    this._serviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // sla_match_service - computed: true, optional: true, required: false
  private _slaMatchService?: string; 
  public get slaMatchService() {
    return this.getStringAttribute('sla_match_service');
  }
  public set slaMatchService(value: string) {
    this._slaMatchService = value;
  }
  public resetSlaMatchService() {
    this._slaMatchService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaMatchServiceInput() {
    return this._slaMatchService;
  }

  // srcaddr - computed: true, optional: true, required: false
  private _srcaddr?: string[]; 
  public get srcaddr() {
    return cdktf.Fn.tolist(this.getListAttribute('srcaddr'));
  }
  public set srcaddr(value: string[]) {
    this._srcaddr = value;
  }
  public resetSrcaddr() {
    this._srcaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcaddrInput() {
    return this._srcaddr;
  }

  // srcaddr6 - computed: true, optional: true, required: false
  private _srcaddr6?: string[]; 
  public get srcaddr6() {
    return cdktf.Fn.tolist(this.getListAttribute('srcaddr6'));
  }
  public set srcaddr6(value: string[]) {
    this._srcaddr6 = value;
  }
  public resetSrcaddr6() {
    this._srcaddr6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcaddr6Input() {
    return this._srcaddr6;
  }

  // srcintf - computed: true, optional: true, required: false
  private _srcintf?: string[]; 
  public get srcintf() {
    return cdktf.Fn.tolist(this.getListAttribute('srcintf'));
  }
  public set srcintf(value: string[]) {
    this._srcintf = value;
  }
  public resetSrcintf() {
    this._srcintf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcintfInput() {
    return this._srcintf;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      dstaddr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dstaddr),
      dstaddr6: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dstaddr6),
      dstintf: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dstintf),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      packet_de_duplication: cdktf.stringToTerraform(this._packetDeDuplication),
      packet_duplication: cdktf.stringToTerraform(this._packetDuplication),
      service: cdktf.listMapper(cdktf.stringToTerraform, false)(this._service),
      service_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serviceId),
      sla_match_service: cdktf.stringToTerraform(this._slaMatchService),
      srcaddr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcaddr),
      srcaddr6: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcaddr6),
      srcintf: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcintf),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      dstaddr: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dstaddr),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dstaddr6: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dstaddr6),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dstintf: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dstintf),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      packet_de_duplication: {
        value: cdktf.stringToHclTerraform(this._packetDeDuplication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packet_duplication: {
        value: cdktf.stringToHclTerraform(this._packetDuplication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._service),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      service_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serviceId),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sla_match_service: {
        value: cdktf.stringToHclTerraform(this._slaMatchService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srcaddr: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._srcaddr),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      srcaddr6: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._srcaddr6),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      srcintf: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._srcintf),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
