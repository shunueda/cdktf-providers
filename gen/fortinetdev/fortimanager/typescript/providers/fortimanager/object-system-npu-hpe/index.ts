// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_hpe
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectSystemNpuHpeAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_hpe#adom ObjectSystemNpuHpeA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_hpe#all_protocol ObjectSystemNpuHpeA#all_protocol}
  */
  readonly allProtocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_hpe#arp_max ObjectSystemNpuHpeA#arp_max}
  */
  readonly arpMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_hpe#enable_queue_shaper ObjectSystemNpuHpeA#enable_queue_shaper}
  */
  readonly enableQueueShaper?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_hpe#enable_shaper ObjectSystemNpuHpeA#enable_shaper}
  */
  readonly enableShaper?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_hpe#esp_max ObjectSystemNpuHpeA#esp_max}
  */
  readonly espMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_hpe#exception_code ObjectSystemNpuHpeA#exception_code}
  */
  readonly exceptionCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_hpe#fragment_with_sess ObjectSystemNpuHpeA#fragment_with_sess}
  */
  readonly fragmentWithSess?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_hpe#fragment_without_session ObjectSystemNpuHpeA#fragment_without_session}
  */
  readonly fragmentWithoutSession?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_hpe#high_priority ObjectSystemNpuHpeA#high_priority}
  */
  readonly highPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_hpe#icmp_max ObjectSystemNpuHpeA#icmp_max}
  */
  readonly icmpMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_hpe#id ObjectSystemNpuHpeA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_hpe#ip_frag_max ObjectSystemNpuHpeA#ip_frag_max}
  */
  readonly ipFragMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_hpe#ip_others_max ObjectSystemNpuHpeA#ip_others_max}
  */
  readonly ipOthersMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_hpe#l2_others_max ObjectSystemNpuHpeA#l2_others_max}
  */
  readonly l2OthersMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_hpe#pri_type_max ObjectSystemNpuHpeA#pri_type_max}
  */
  readonly priTypeMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_hpe#queue_shaper_max ObjectSystemNpuHpeA#queue_shaper_max}
  */
  readonly queueShaperMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_hpe#scopetype ObjectSystemNpuHpeA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_hpe#sctp_max ObjectSystemNpuHpeA#sctp_max}
  */
  readonly sctpMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_hpe#tcp_max ObjectSystemNpuHpeA#tcp_max}
  */
  readonly tcpMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_hpe#tcpfin_rst_max ObjectSystemNpuHpeA#tcpfin_rst_max}
  */
  readonly tcpfinRstMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_hpe#tcpsyn_ack_max ObjectSystemNpuHpeA#tcpsyn_ack_max}
  */
  readonly tcpsynAckMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_hpe#tcpsyn_max ObjectSystemNpuHpeA#tcpsyn_max}
  */
  readonly tcpsynMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_hpe#udp_max ObjectSystemNpuHpeA#udp_max}
  */
  readonly udpMax?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_hpe fortimanager_object_system_npu_hpe}
*/
export class ObjectSystemNpuHpeA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_system_npu_hpe";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectSystemNpuHpeA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectSystemNpuHpeA to import
  * @param importFromId The id of the existing ObjectSystemNpuHpeA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_hpe#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectSystemNpuHpeA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_system_npu_hpe", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_hpe fortimanager_object_system_npu_hpe} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectSystemNpuHpeAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectSystemNpuHpeAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_system_npu_hpe',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._allProtocol = config.allProtocol;
    this._arpMax = config.arpMax;
    this._enableQueueShaper = config.enableQueueShaper;
    this._enableShaper = config.enableShaper;
    this._espMax = config.espMax;
    this._exceptionCode = config.exceptionCode;
    this._fragmentWithSess = config.fragmentWithSess;
    this._fragmentWithoutSession = config.fragmentWithoutSession;
    this._highPriority = config.highPriority;
    this._icmpMax = config.icmpMax;
    this._id = config.id;
    this._ipFragMax = config.ipFragMax;
    this._ipOthersMax = config.ipOthersMax;
    this._l2OthersMax = config.l2OthersMax;
    this._priTypeMax = config.priTypeMax;
    this._queueShaperMax = config.queueShaperMax;
    this._scopetype = config.scopetype;
    this._sctpMax = config.sctpMax;
    this._tcpMax = config.tcpMax;
    this._tcpfinRstMax = config.tcpfinRstMax;
    this._tcpsynAckMax = config.tcpsynAckMax;
    this._tcpsynMax = config.tcpsynMax;
    this._udpMax = config.udpMax;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // all_protocol - computed: true, optional: true, required: false
  private _allProtocol?: number; 
  public get allProtocol() {
    return this.getNumberAttribute('all_protocol');
  }
  public set allProtocol(value: number) {
    this._allProtocol = value;
  }
  public resetAllProtocol() {
    this._allProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allProtocolInput() {
    return this._allProtocol;
  }

  // arp_max - computed: true, optional: true, required: false
  private _arpMax?: number; 
  public get arpMax() {
    return this.getNumberAttribute('arp_max');
  }
  public set arpMax(value: number) {
    this._arpMax = value;
  }
  public resetArpMax() {
    this._arpMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpMaxInput() {
    return this._arpMax;
  }

  // enable_queue_shaper - computed: true, optional: true, required: false
  private _enableQueueShaper?: string; 
  public get enableQueueShaper() {
    return this.getStringAttribute('enable_queue_shaper');
  }
  public set enableQueueShaper(value: string) {
    this._enableQueueShaper = value;
  }
  public resetEnableQueueShaper() {
    this._enableQueueShaper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableQueueShaperInput() {
    return this._enableQueueShaper;
  }

  // enable_shaper - computed: true, optional: true, required: false
  private _enableShaper?: string; 
  public get enableShaper() {
    return this.getStringAttribute('enable_shaper');
  }
  public set enableShaper(value: string) {
    this._enableShaper = value;
  }
  public resetEnableShaper() {
    this._enableShaper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableShaperInput() {
    return this._enableShaper;
  }

  // esp_max - computed: true, optional: true, required: false
  private _espMax?: number; 
  public get espMax() {
    return this.getNumberAttribute('esp_max');
  }
  public set espMax(value: number) {
    this._espMax = value;
  }
  public resetEspMax() {
    this._espMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get espMaxInput() {
    return this._espMax;
  }

  // exception_code - computed: true, optional: true, required: false
  private _exceptionCode?: number; 
  public get exceptionCode() {
    return this.getNumberAttribute('exception_code');
  }
  public set exceptionCode(value: number) {
    this._exceptionCode = value;
  }
  public resetExceptionCode() {
    this._exceptionCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionCodeInput() {
    return this._exceptionCode;
  }

  // fragment_with_sess - computed: true, optional: true, required: false
  private _fragmentWithSess?: number; 
  public get fragmentWithSess() {
    return this.getNumberAttribute('fragment_with_sess');
  }
  public set fragmentWithSess(value: number) {
    this._fragmentWithSess = value;
  }
  public resetFragmentWithSess() {
    this._fragmentWithSess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragmentWithSessInput() {
    return this._fragmentWithSess;
  }

  // fragment_without_session - computed: true, optional: true, required: false
  private _fragmentWithoutSession?: number; 
  public get fragmentWithoutSession() {
    return this.getNumberAttribute('fragment_without_session');
  }
  public set fragmentWithoutSession(value: number) {
    this._fragmentWithoutSession = value;
  }
  public resetFragmentWithoutSession() {
    this._fragmentWithoutSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragmentWithoutSessionInput() {
    return this._fragmentWithoutSession;
  }

  // high_priority - computed: true, optional: true, required: false
  private _highPriority?: number; 
  public get highPriority() {
    return this.getNumberAttribute('high_priority');
  }
  public set highPriority(value: number) {
    this._highPriority = value;
  }
  public resetHighPriority() {
    this._highPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highPriorityInput() {
    return this._highPriority;
  }

  // icmp_max - computed: true, optional: true, required: false
  private _icmpMax?: number; 
  public get icmpMax() {
    return this.getNumberAttribute('icmp_max');
  }
  public set icmpMax(value: number) {
    this._icmpMax = value;
  }
  public resetIcmpMax() {
    this._icmpMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpMaxInput() {
    return this._icmpMax;
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

  // ip_frag_max - computed: true, optional: true, required: false
  private _ipFragMax?: number; 
  public get ipFragMax() {
    return this.getNumberAttribute('ip_frag_max');
  }
  public set ipFragMax(value: number) {
    this._ipFragMax = value;
  }
  public resetIpFragMax() {
    this._ipFragMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFragMaxInput() {
    return this._ipFragMax;
  }

  // ip_others_max - computed: true, optional: true, required: false
  private _ipOthersMax?: number; 
  public get ipOthersMax() {
    return this.getNumberAttribute('ip_others_max');
  }
  public set ipOthersMax(value: number) {
    this._ipOthersMax = value;
  }
  public resetIpOthersMax() {
    this._ipOthersMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipOthersMaxInput() {
    return this._ipOthersMax;
  }

  // l2_others_max - computed: true, optional: true, required: false
  private _l2OthersMax?: number; 
  public get l2OthersMax() {
    return this.getNumberAttribute('l2_others_max');
  }
  public set l2OthersMax(value: number) {
    this._l2OthersMax = value;
  }
  public resetL2OthersMax() {
    this._l2OthersMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2OthersMaxInput() {
    return this._l2OthersMax;
  }

  // pri_type_max - computed: true, optional: true, required: false
  private _priTypeMax?: number; 
  public get priTypeMax() {
    return this.getNumberAttribute('pri_type_max');
  }
  public set priTypeMax(value: number) {
    this._priTypeMax = value;
  }
  public resetPriTypeMax() {
    this._priTypeMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priTypeMaxInput() {
    return this._priTypeMax;
  }

  // queue_shaper_max - computed: true, optional: true, required: false
  private _queueShaperMax?: number; 
  public get queueShaperMax() {
    return this.getNumberAttribute('queue_shaper_max');
  }
  public set queueShaperMax(value: number) {
    this._queueShaperMax = value;
  }
  public resetQueueShaperMax() {
    this._queueShaperMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueShaperMaxInput() {
    return this._queueShaperMax;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // sctp_max - computed: true, optional: true, required: false
  private _sctpMax?: number; 
  public get sctpMax() {
    return this.getNumberAttribute('sctp_max');
  }
  public set sctpMax(value: number) {
    this._sctpMax = value;
  }
  public resetSctpMax() {
    this._sctpMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpMaxInput() {
    return this._sctpMax;
  }

  // tcp_max - computed: true, optional: true, required: false
  private _tcpMax?: number; 
  public get tcpMax() {
    return this.getNumberAttribute('tcp_max');
  }
  public set tcpMax(value: number) {
    this._tcpMax = value;
  }
  public resetTcpMax() {
    this._tcpMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMaxInput() {
    return this._tcpMax;
  }

  // tcpfin_rst_max - computed: true, optional: true, required: false
  private _tcpfinRstMax?: number; 
  public get tcpfinRstMax() {
    return this.getNumberAttribute('tcpfin_rst_max');
  }
  public set tcpfinRstMax(value: number) {
    this._tcpfinRstMax = value;
  }
  public resetTcpfinRstMax() {
    this._tcpfinRstMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpfinRstMaxInput() {
    return this._tcpfinRstMax;
  }

  // tcpsyn_ack_max - computed: true, optional: true, required: false
  private _tcpsynAckMax?: number; 
  public get tcpsynAckMax() {
    return this.getNumberAttribute('tcpsyn_ack_max');
  }
  public set tcpsynAckMax(value: number) {
    this._tcpsynAckMax = value;
  }
  public resetTcpsynAckMax() {
    this._tcpsynAckMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpsynAckMaxInput() {
    return this._tcpsynAckMax;
  }

  // tcpsyn_max - computed: true, optional: true, required: false
  private _tcpsynMax?: number; 
  public get tcpsynMax() {
    return this.getNumberAttribute('tcpsyn_max');
  }
  public set tcpsynMax(value: number) {
    this._tcpsynMax = value;
  }
  public resetTcpsynMax() {
    this._tcpsynMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpsynMaxInput() {
    return this._tcpsynMax;
  }

  // udp_max - computed: true, optional: true, required: false
  private _udpMax?: number; 
  public get udpMax() {
    return this.getNumberAttribute('udp_max');
  }
  public set udpMax(value: number) {
    this._udpMax = value;
  }
  public resetUdpMax() {
    this._udpMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpMaxInput() {
    return this._udpMax;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      all_protocol: cdktf.numberToTerraform(this._allProtocol),
      arp_max: cdktf.numberToTerraform(this._arpMax),
      enable_queue_shaper: cdktf.stringToTerraform(this._enableQueueShaper),
      enable_shaper: cdktf.stringToTerraform(this._enableShaper),
      esp_max: cdktf.numberToTerraform(this._espMax),
      exception_code: cdktf.numberToTerraform(this._exceptionCode),
      fragment_with_sess: cdktf.numberToTerraform(this._fragmentWithSess),
      fragment_without_session: cdktf.numberToTerraform(this._fragmentWithoutSession),
      high_priority: cdktf.numberToTerraform(this._highPriority),
      icmp_max: cdktf.numberToTerraform(this._icmpMax),
      id: cdktf.stringToTerraform(this._id),
      ip_frag_max: cdktf.numberToTerraform(this._ipFragMax),
      ip_others_max: cdktf.numberToTerraform(this._ipOthersMax),
      l2_others_max: cdktf.numberToTerraform(this._l2OthersMax),
      pri_type_max: cdktf.numberToTerraform(this._priTypeMax),
      queue_shaper_max: cdktf.numberToTerraform(this._queueShaperMax),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      sctp_max: cdktf.numberToTerraform(this._sctpMax),
      tcp_max: cdktf.numberToTerraform(this._tcpMax),
      tcpfin_rst_max: cdktf.numberToTerraform(this._tcpfinRstMax),
      tcpsyn_ack_max: cdktf.numberToTerraform(this._tcpsynAckMax),
      tcpsyn_max: cdktf.numberToTerraform(this._tcpsynMax),
      udp_max: cdktf.numberToTerraform(this._udpMax),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      all_protocol: {
        value: cdktf.numberToHclTerraform(this._allProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      arp_max: {
        value: cdktf.numberToHclTerraform(this._arpMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_queue_shaper: {
        value: cdktf.stringToHclTerraform(this._enableQueueShaper),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_shaper: {
        value: cdktf.stringToHclTerraform(this._enableShaper),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      esp_max: {
        value: cdktf.numberToHclTerraform(this._espMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      exception_code: {
        value: cdktf.numberToHclTerraform(this._exceptionCode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fragment_with_sess: {
        value: cdktf.numberToHclTerraform(this._fragmentWithSess),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fragment_without_session: {
        value: cdktf.numberToHclTerraform(this._fragmentWithoutSession),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      high_priority: {
        value: cdktf.numberToHclTerraform(this._highPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icmp_max: {
        value: cdktf.numberToHclTerraform(this._icmpMax),
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
      ip_frag_max: {
        value: cdktf.numberToHclTerraform(this._ipFragMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_others_max: {
        value: cdktf.numberToHclTerraform(this._ipOthersMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l2_others_max: {
        value: cdktf.numberToHclTerraform(this._l2OthersMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pri_type_max: {
        value: cdktf.numberToHclTerraform(this._priTypeMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      queue_shaper_max: {
        value: cdktf.numberToHclTerraform(this._queueShaperMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sctp_max: {
        value: cdktf.numberToHclTerraform(this._sctpMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_max: {
        value: cdktf.numberToHclTerraform(this._tcpMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcpfin_rst_max: {
        value: cdktf.numberToHclTerraform(this._tcpfinRstMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcpsyn_ack_max: {
        value: cdktf.numberToHclTerraform(this._tcpsynAckMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcpsyn_max: {
        value: cdktf.numberToHclTerraform(this._tcpsynMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      udp_max: {
        value: cdktf.numberToHclTerraform(this._udpMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
