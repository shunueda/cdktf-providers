// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_qosprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelesscontrollerQosprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_qosprofile#bandwidth_admission_control WirelesscontrollerQosprofile#bandwidth_admission_control}
  */
  readonly bandwidthAdmissionControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_qosprofile#bandwidth_capacity WirelesscontrollerQosprofile#bandwidth_capacity}
  */
  readonly bandwidthCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_qosprofile#burst WirelesscontrollerQosprofile#burst}
  */
  readonly burst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_qosprofile#call_admission_control WirelesscontrollerQosprofile#call_admission_control}
  */
  readonly callAdmissionControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_qosprofile#call_capacity WirelesscontrollerQosprofile#call_capacity}
  */
  readonly callCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_qosprofile#comment WirelesscontrollerQosprofile#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_qosprofile#device_name WirelesscontrollerQosprofile#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_qosprofile#device_vdom WirelesscontrollerQosprofile#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_qosprofile#downlink WirelesscontrollerQosprofile#downlink}
  */
  readonly downlink?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_qosprofile#downlink_sta WirelesscontrollerQosprofile#downlink_sta}
  */
  readonly downlinkSta?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_qosprofile#dscp_wmm_be WirelesscontrollerQosprofile#dscp_wmm_be}
  */
  readonly dscpWmmBe?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_qosprofile#dscp_wmm_bk WirelesscontrollerQosprofile#dscp_wmm_bk}
  */
  readonly dscpWmmBk?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_qosprofile#dscp_wmm_mapping WirelesscontrollerQosprofile#dscp_wmm_mapping}
  */
  readonly dscpWmmMapping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_qosprofile#dscp_wmm_vi WirelesscontrollerQosprofile#dscp_wmm_vi}
  */
  readonly dscpWmmVi?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_qosprofile#dscp_wmm_vo WirelesscontrollerQosprofile#dscp_wmm_vo}
  */
  readonly dscpWmmVo?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_qosprofile#id WirelesscontrollerQosprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_qosprofile#name WirelesscontrollerQosprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_qosprofile#uplink WirelesscontrollerQosprofile#uplink}
  */
  readonly uplink?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_qosprofile#uplink_sta WirelesscontrollerQosprofile#uplink_sta}
  */
  readonly uplinkSta?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_qosprofile#wmm WirelesscontrollerQosprofile#wmm}
  */
  readonly wmm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_qosprofile#wmm_be_dscp WirelesscontrollerQosprofile#wmm_be_dscp}
  */
  readonly wmmBeDscp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_qosprofile#wmm_bk_dscp WirelesscontrollerQosprofile#wmm_bk_dscp}
  */
  readonly wmmBkDscp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_qosprofile#wmm_dscp_marking WirelesscontrollerQosprofile#wmm_dscp_marking}
  */
  readonly wmmDscpMarking?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_qosprofile#wmm_uapsd WirelesscontrollerQosprofile#wmm_uapsd}
  */
  readonly wmmUapsd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_qosprofile#wmm_vi_dscp WirelesscontrollerQosprofile#wmm_vi_dscp}
  */
  readonly wmmViDscp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_qosprofile#wmm_vo_dscp WirelesscontrollerQosprofile#wmm_vo_dscp}
  */
  readonly wmmVoDscp?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_qosprofile fmgdevice_wirelesscontroller_qosprofile}
*/
export class WirelesscontrollerQosprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_wirelesscontroller_qosprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelesscontrollerQosprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelesscontrollerQosprofile to import
  * @param importFromId The id of the existing WirelesscontrollerQosprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_qosprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelesscontrollerQosprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_wirelesscontroller_qosprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_qosprofile fmgdevice_wirelesscontroller_qosprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelesscontrollerQosprofileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WirelesscontrollerQosprofileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_wirelesscontroller_qosprofile',
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
    this._bandwidthAdmissionControl = config.bandwidthAdmissionControl;
    this._bandwidthCapacity = config.bandwidthCapacity;
    this._burst = config.burst;
    this._callAdmissionControl = config.callAdmissionControl;
    this._callCapacity = config.callCapacity;
    this._comment = config.comment;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._downlink = config.downlink;
    this._downlinkSta = config.downlinkSta;
    this._dscpWmmBe = config.dscpWmmBe;
    this._dscpWmmBk = config.dscpWmmBk;
    this._dscpWmmMapping = config.dscpWmmMapping;
    this._dscpWmmVi = config.dscpWmmVi;
    this._dscpWmmVo = config.dscpWmmVo;
    this._id = config.id;
    this._name = config.name;
    this._uplink = config.uplink;
    this._uplinkSta = config.uplinkSta;
    this._wmm = config.wmm;
    this._wmmBeDscp = config.wmmBeDscp;
    this._wmmBkDscp = config.wmmBkDscp;
    this._wmmDscpMarking = config.wmmDscpMarking;
    this._wmmUapsd = config.wmmUapsd;
    this._wmmViDscp = config.wmmViDscp;
    this._wmmVoDscp = config.wmmVoDscp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth_admission_control - computed: false, optional: true, required: false
  private _bandwidthAdmissionControl?: string; 
  public get bandwidthAdmissionControl() {
    return this.getStringAttribute('bandwidth_admission_control');
  }
  public set bandwidthAdmissionControl(value: string) {
    this._bandwidthAdmissionControl = value;
  }
  public resetBandwidthAdmissionControl() {
    this._bandwidthAdmissionControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthAdmissionControlInput() {
    return this._bandwidthAdmissionControl;
  }

  // bandwidth_capacity - computed: false, optional: true, required: false
  private _bandwidthCapacity?: number; 
  public get bandwidthCapacity() {
    return this.getNumberAttribute('bandwidth_capacity');
  }
  public set bandwidthCapacity(value: number) {
    this._bandwidthCapacity = value;
  }
  public resetBandwidthCapacity() {
    this._bandwidthCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthCapacityInput() {
    return this._bandwidthCapacity;
  }

  // burst - computed: true, optional: true, required: false
  private _burst?: string; 
  public get burst() {
    return this.getStringAttribute('burst');
  }
  public set burst(value: string) {
    this._burst = value;
  }
  public resetBurst() {
    this._burst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstInput() {
    return this._burst;
  }

  // call_admission_control - computed: true, optional: true, required: false
  private _callAdmissionControl?: string; 
  public get callAdmissionControl() {
    return this.getStringAttribute('call_admission_control');
  }
  public set callAdmissionControl(value: string) {
    this._callAdmissionControl = value;
  }
  public resetCallAdmissionControl() {
    this._callAdmissionControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callAdmissionControlInput() {
    return this._callAdmissionControl;
  }

  // call_capacity - computed: false, optional: true, required: false
  private _callCapacity?: number; 
  public get callCapacity() {
    return this.getNumberAttribute('call_capacity');
  }
  public set callCapacity(value: number) {
    this._callCapacity = value;
  }
  public resetCallCapacity() {
    this._callCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callCapacityInput() {
    return this._callCapacity;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
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

  // downlink - computed: false, optional: true, required: false
  private _downlink?: number; 
  public get downlink() {
    return this.getNumberAttribute('downlink');
  }
  public set downlink(value: number) {
    this._downlink = value;
  }
  public resetDownlink() {
    this._downlink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downlinkInput() {
    return this._downlink;
  }

  // downlink_sta - computed: false, optional: true, required: false
  private _downlinkSta?: number; 
  public get downlinkSta() {
    return this.getNumberAttribute('downlink_sta');
  }
  public set downlinkSta(value: number) {
    this._downlinkSta = value;
  }
  public resetDownlinkSta() {
    this._downlinkSta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downlinkStaInput() {
    return this._downlinkSta;
  }

  // dscp_wmm_be - computed: true, optional: true, required: false
  private _dscpWmmBe?: number[]; 
  public get dscpWmmBe() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('dscp_wmm_be')));
  }
  public set dscpWmmBe(value: number[]) {
    this._dscpWmmBe = value;
  }
  public resetDscpWmmBe() {
    this._dscpWmmBe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpWmmBeInput() {
    return this._dscpWmmBe;
  }

  // dscp_wmm_bk - computed: true, optional: true, required: false
  private _dscpWmmBk?: number[]; 
  public get dscpWmmBk() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('dscp_wmm_bk')));
  }
  public set dscpWmmBk(value: number[]) {
    this._dscpWmmBk = value;
  }
  public resetDscpWmmBk() {
    this._dscpWmmBk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpWmmBkInput() {
    return this._dscpWmmBk;
  }

  // dscp_wmm_mapping - computed: true, optional: true, required: false
  private _dscpWmmMapping?: string; 
  public get dscpWmmMapping() {
    return this.getStringAttribute('dscp_wmm_mapping');
  }
  public set dscpWmmMapping(value: string) {
    this._dscpWmmMapping = value;
  }
  public resetDscpWmmMapping() {
    this._dscpWmmMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpWmmMappingInput() {
    return this._dscpWmmMapping;
  }

  // dscp_wmm_vi - computed: true, optional: true, required: false
  private _dscpWmmVi?: number[]; 
  public get dscpWmmVi() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('dscp_wmm_vi')));
  }
  public set dscpWmmVi(value: number[]) {
    this._dscpWmmVi = value;
  }
  public resetDscpWmmVi() {
    this._dscpWmmVi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpWmmViInput() {
    return this._dscpWmmVi;
  }

  // dscp_wmm_vo - computed: true, optional: true, required: false
  private _dscpWmmVo?: number[]; 
  public get dscpWmmVo() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('dscp_wmm_vo')));
  }
  public set dscpWmmVo(value: number[]) {
    this._dscpWmmVo = value;
  }
  public resetDscpWmmVo() {
    this._dscpWmmVo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpWmmVoInput() {
    return this._dscpWmmVo;
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

  // uplink - computed: false, optional: true, required: false
  private _uplink?: number; 
  public get uplink() {
    return this.getNumberAttribute('uplink');
  }
  public set uplink(value: number) {
    this._uplink = value;
  }
  public resetUplink() {
    this._uplink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkInput() {
    return this._uplink;
  }

  // uplink_sta - computed: false, optional: true, required: false
  private _uplinkSta?: number; 
  public get uplinkSta() {
    return this.getNumberAttribute('uplink_sta');
  }
  public set uplinkSta(value: number) {
    this._uplinkSta = value;
  }
  public resetUplinkSta() {
    this._uplinkSta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkStaInput() {
    return this._uplinkSta;
  }

  // wmm - computed: true, optional: true, required: false
  private _wmm?: string; 
  public get wmm() {
    return this.getStringAttribute('wmm');
  }
  public set wmm(value: string) {
    this._wmm = value;
  }
  public resetWmm() {
    this._wmm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wmmInput() {
    return this._wmm;
  }

  // wmm_be_dscp - computed: false, optional: true, required: false
  private _wmmBeDscp?: number; 
  public get wmmBeDscp() {
    return this.getNumberAttribute('wmm_be_dscp');
  }
  public set wmmBeDscp(value: number) {
    this._wmmBeDscp = value;
  }
  public resetWmmBeDscp() {
    this._wmmBeDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wmmBeDscpInput() {
    return this._wmmBeDscp;
  }

  // wmm_bk_dscp - computed: true, optional: true, required: false
  private _wmmBkDscp?: number; 
  public get wmmBkDscp() {
    return this.getNumberAttribute('wmm_bk_dscp');
  }
  public set wmmBkDscp(value: number) {
    this._wmmBkDscp = value;
  }
  public resetWmmBkDscp() {
    this._wmmBkDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wmmBkDscpInput() {
    return this._wmmBkDscp;
  }

  // wmm_dscp_marking - computed: true, optional: true, required: false
  private _wmmDscpMarking?: string; 
  public get wmmDscpMarking() {
    return this.getStringAttribute('wmm_dscp_marking');
  }
  public set wmmDscpMarking(value: string) {
    this._wmmDscpMarking = value;
  }
  public resetWmmDscpMarking() {
    this._wmmDscpMarking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wmmDscpMarkingInput() {
    return this._wmmDscpMarking;
  }

  // wmm_uapsd - computed: true, optional: true, required: false
  private _wmmUapsd?: string; 
  public get wmmUapsd() {
    return this.getStringAttribute('wmm_uapsd');
  }
  public set wmmUapsd(value: string) {
    this._wmmUapsd = value;
  }
  public resetWmmUapsd() {
    this._wmmUapsd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wmmUapsdInput() {
    return this._wmmUapsd;
  }

  // wmm_vi_dscp - computed: true, optional: true, required: false
  private _wmmViDscp?: number; 
  public get wmmViDscp() {
    return this.getNumberAttribute('wmm_vi_dscp');
  }
  public set wmmViDscp(value: number) {
    this._wmmViDscp = value;
  }
  public resetWmmViDscp() {
    this._wmmViDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wmmViDscpInput() {
    return this._wmmViDscp;
  }

  // wmm_vo_dscp - computed: true, optional: true, required: false
  private _wmmVoDscp?: number; 
  public get wmmVoDscp() {
    return this.getNumberAttribute('wmm_vo_dscp');
  }
  public set wmmVoDscp(value: number) {
    this._wmmVoDscp = value;
  }
  public resetWmmVoDscp() {
    this._wmmVoDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wmmVoDscpInput() {
    return this._wmmVoDscp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bandwidth_admission_control: cdktf.stringToTerraform(this._bandwidthAdmissionControl),
      bandwidth_capacity: cdktf.numberToTerraform(this._bandwidthCapacity),
      burst: cdktf.stringToTerraform(this._burst),
      call_admission_control: cdktf.stringToTerraform(this._callAdmissionControl),
      call_capacity: cdktf.numberToTerraform(this._callCapacity),
      comment: cdktf.stringToTerraform(this._comment),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      downlink: cdktf.numberToTerraform(this._downlink),
      downlink_sta: cdktf.numberToTerraform(this._downlinkSta),
      dscp_wmm_be: cdktf.listMapper(cdktf.numberToTerraform, false)(this._dscpWmmBe),
      dscp_wmm_bk: cdktf.listMapper(cdktf.numberToTerraform, false)(this._dscpWmmBk),
      dscp_wmm_mapping: cdktf.stringToTerraform(this._dscpWmmMapping),
      dscp_wmm_vi: cdktf.listMapper(cdktf.numberToTerraform, false)(this._dscpWmmVi),
      dscp_wmm_vo: cdktf.listMapper(cdktf.numberToTerraform, false)(this._dscpWmmVo),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      uplink: cdktf.numberToTerraform(this._uplink),
      uplink_sta: cdktf.numberToTerraform(this._uplinkSta),
      wmm: cdktf.stringToTerraform(this._wmm),
      wmm_be_dscp: cdktf.numberToTerraform(this._wmmBeDscp),
      wmm_bk_dscp: cdktf.numberToTerraform(this._wmmBkDscp),
      wmm_dscp_marking: cdktf.stringToTerraform(this._wmmDscpMarking),
      wmm_uapsd: cdktf.stringToTerraform(this._wmmUapsd),
      wmm_vi_dscp: cdktf.numberToTerraform(this._wmmViDscp),
      wmm_vo_dscp: cdktf.numberToTerraform(this._wmmVoDscp),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bandwidth_admission_control: {
        value: cdktf.stringToHclTerraform(this._bandwidthAdmissionControl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bandwidth_capacity: {
        value: cdktf.numberToHclTerraform(this._bandwidthCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      burst: {
        value: cdktf.stringToHclTerraform(this._burst),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      call_admission_control: {
        value: cdktf.stringToHclTerraform(this._callAdmissionControl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      call_capacity: {
        value: cdktf.numberToHclTerraform(this._callCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
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
      downlink: {
        value: cdktf.numberToHclTerraform(this._downlink),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      downlink_sta: {
        value: cdktf.numberToHclTerraform(this._downlinkSta),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dscp_wmm_be: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._dscpWmmBe),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      dscp_wmm_bk: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._dscpWmmBk),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      dscp_wmm_mapping: {
        value: cdktf.stringToHclTerraform(this._dscpWmmMapping),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dscp_wmm_vi: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._dscpWmmVi),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      dscp_wmm_vo: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._dscpWmmVo),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      uplink: {
        value: cdktf.numberToHclTerraform(this._uplink),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uplink_sta: {
        value: cdktf.numberToHclTerraform(this._uplinkSta),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wmm: {
        value: cdktf.stringToHclTerraform(this._wmm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wmm_be_dscp: {
        value: cdktf.numberToHclTerraform(this._wmmBeDscp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wmm_bk_dscp: {
        value: cdktf.numberToHclTerraform(this._wmmBkDscp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wmm_dscp_marking: {
        value: cdktf.stringToHclTerraform(this._wmmDscpMarking),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wmm_uapsd: {
        value: cdktf.stringToHclTerraform(this._wmmUapsd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wmm_vi_dscp: {
        value: cdktf.numberToHclTerraform(this._wmmViDscp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wmm_vo_dscp: {
        value: cdktf.numberToHclTerraform(this._wmmVoDscp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
