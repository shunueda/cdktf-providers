// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_gretunnel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemGretunnelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_gretunnel#auto_asic_offload SystemGretunnel#auto_asic_offload}
  */
  readonly autoAsicOffload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_gretunnel#checksum_reception SystemGretunnel#checksum_reception}
  */
  readonly checksumReception?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_gretunnel#checksum_transmission SystemGretunnel#checksum_transmission}
  */
  readonly checksumTransmission?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_gretunnel#device_name SystemGretunnel#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_gretunnel#device_vdom SystemGretunnel#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_gretunnel#diffservcode SystemGretunnel#diffservcode}
  */
  readonly diffservcode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_gretunnel#dscp_copying SystemGretunnel#dscp_copying}
  */
  readonly dscpCopying?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_gretunnel#id SystemGretunnel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_gretunnel#interface SystemGretunnel#interface}
  */
  readonly interface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_gretunnel#ip_version SystemGretunnel#ip_version}
  */
  readonly ipVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_gretunnel#keepalive_failtimes SystemGretunnel#keepalive_failtimes}
  */
  readonly keepaliveFailtimes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_gretunnel#keepalive_interval SystemGretunnel#keepalive_interval}
  */
  readonly keepaliveInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_gretunnel#key_inbound SystemGretunnel#key_inbound}
  */
  readonly keyInbound?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_gretunnel#key_outbound SystemGretunnel#key_outbound}
  */
  readonly keyOutbound?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_gretunnel#local_gw SystemGretunnel#local_gw}
  */
  readonly localGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_gretunnel#local_gw6 SystemGretunnel#local_gw6}
  */
  readonly localGw6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_gretunnel#name SystemGretunnel#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_gretunnel#remote_gw SystemGretunnel#remote_gw}
  */
  readonly remoteGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_gretunnel#remote_gw6 SystemGretunnel#remote_gw6}
  */
  readonly remoteGw6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_gretunnel#sequence_number_reception SystemGretunnel#sequence_number_reception}
  */
  readonly sequenceNumberReception?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_gretunnel#sequence_number_transmission SystemGretunnel#sequence_number_transmission}
  */
  readonly sequenceNumberTransmission?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_gretunnel#use_sdwan SystemGretunnel#use_sdwan}
  */
  readonly useSdwan?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_gretunnel fmgdevice_system_gretunnel}
*/
export class SystemGretunnel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_gretunnel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemGretunnel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemGretunnel to import
  * @param importFromId The id of the existing SystemGretunnel that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_gretunnel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemGretunnel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_gretunnel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_gretunnel fmgdevice_system_gretunnel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemGretunnelConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemGretunnelConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_gretunnel',
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
    this._autoAsicOffload = config.autoAsicOffload;
    this._checksumReception = config.checksumReception;
    this._checksumTransmission = config.checksumTransmission;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._diffservcode = config.diffservcode;
    this._dscpCopying = config.dscpCopying;
    this._id = config.id;
    this._interface = config.interface;
    this._ipVersion = config.ipVersion;
    this._keepaliveFailtimes = config.keepaliveFailtimes;
    this._keepaliveInterval = config.keepaliveInterval;
    this._keyInbound = config.keyInbound;
    this._keyOutbound = config.keyOutbound;
    this._localGw = config.localGw;
    this._localGw6 = config.localGw6;
    this._name = config.name;
    this._remoteGw = config.remoteGw;
    this._remoteGw6 = config.remoteGw6;
    this._sequenceNumberReception = config.sequenceNumberReception;
    this._sequenceNumberTransmission = config.sequenceNumberTransmission;
    this._useSdwan = config.useSdwan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_asic_offload - computed: false, optional: true, required: false
  private _autoAsicOffload?: string; 
  public get autoAsicOffload() {
    return this.getStringAttribute('auto_asic_offload');
  }
  public set autoAsicOffload(value: string) {
    this._autoAsicOffload = value;
  }
  public resetAutoAsicOffload() {
    this._autoAsicOffload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAsicOffloadInput() {
    return this._autoAsicOffload;
  }

  // checksum_reception - computed: true, optional: true, required: false
  private _checksumReception?: string; 
  public get checksumReception() {
    return this.getStringAttribute('checksum_reception');
  }
  public set checksumReception(value: string) {
    this._checksumReception = value;
  }
  public resetChecksumReception() {
    this._checksumReception = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumReceptionInput() {
    return this._checksumReception;
  }

  // checksum_transmission - computed: true, optional: true, required: false
  private _checksumTransmission?: string; 
  public get checksumTransmission() {
    return this.getStringAttribute('checksum_transmission');
  }
  public set checksumTransmission(value: string) {
    this._checksumTransmission = value;
  }
  public resetChecksumTransmission() {
    this._checksumTransmission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumTransmissionInput() {
    return this._checksumTransmission;
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

  // diffservcode - computed: true, optional: true, required: false
  private _diffservcode?: string; 
  public get diffservcode() {
    return this.getStringAttribute('diffservcode');
  }
  public set diffservcode(value: string) {
    this._diffservcode = value;
  }
  public resetDiffservcode() {
    this._diffservcode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diffservcodeInput() {
    return this._diffservcode;
  }

  // dscp_copying - computed: true, optional: true, required: false
  private _dscpCopying?: string; 
  public get dscpCopying() {
    return this.getStringAttribute('dscp_copying');
  }
  public set dscpCopying(value: string) {
    this._dscpCopying = value;
  }
  public resetDscpCopying() {
    this._dscpCopying = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpCopyingInput() {
    return this._dscpCopying;
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

  // interface - computed: true, optional: true, required: false
  private _interface?: string[]; 
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // ip_version - computed: true, optional: true, required: false
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }

  // keepalive_failtimes - computed: true, optional: true, required: false
  private _keepaliveFailtimes?: number; 
  public get keepaliveFailtimes() {
    return this.getNumberAttribute('keepalive_failtimes');
  }
  public set keepaliveFailtimes(value: number) {
    this._keepaliveFailtimes = value;
  }
  public resetKeepaliveFailtimes() {
    this._keepaliveFailtimes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveFailtimesInput() {
    return this._keepaliveFailtimes;
  }

  // keepalive_interval - computed: false, optional: true, required: false
  private _keepaliveInterval?: number; 
  public get keepaliveInterval() {
    return this.getNumberAttribute('keepalive_interval');
  }
  public set keepaliveInterval(value: number) {
    this._keepaliveInterval = value;
  }
  public resetKeepaliveInterval() {
    this._keepaliveInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveIntervalInput() {
    return this._keepaliveInterval;
  }

  // key_inbound - computed: false, optional: true, required: false
  private _keyInbound?: number; 
  public get keyInbound() {
    return this.getNumberAttribute('key_inbound');
  }
  public set keyInbound(value: number) {
    this._keyInbound = value;
  }
  public resetKeyInbound() {
    this._keyInbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInboundInput() {
    return this._keyInbound;
  }

  // key_outbound - computed: false, optional: true, required: false
  private _keyOutbound?: number; 
  public get keyOutbound() {
    return this.getNumberAttribute('key_outbound');
  }
  public set keyOutbound(value: number) {
    this._keyOutbound = value;
  }
  public resetKeyOutbound() {
    this._keyOutbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyOutboundInput() {
    return this._keyOutbound;
  }

  // local_gw - computed: false, optional: true, required: false
  private _localGw?: string; 
  public get localGw() {
    return this.getStringAttribute('local_gw');
  }
  public set localGw(value: string) {
    this._localGw = value;
  }
  public resetLocalGw() {
    this._localGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localGwInput() {
    return this._localGw;
  }

  // local_gw6 - computed: true, optional: true, required: false
  private _localGw6?: string; 
  public get localGw6() {
    return this.getStringAttribute('local_gw6');
  }
  public set localGw6(value: string) {
    this._localGw6 = value;
  }
  public resetLocalGw6() {
    this._localGw6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localGw6Input() {
    return this._localGw6;
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

  // remote_gw - computed: false, optional: true, required: false
  private _remoteGw?: string; 
  public get remoteGw() {
    return this.getStringAttribute('remote_gw');
  }
  public set remoteGw(value: string) {
    this._remoteGw = value;
  }
  public resetRemoteGw() {
    this._remoteGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteGwInput() {
    return this._remoteGw;
  }

  // remote_gw6 - computed: true, optional: true, required: false
  private _remoteGw6?: string; 
  public get remoteGw6() {
    return this.getStringAttribute('remote_gw6');
  }
  public set remoteGw6(value: string) {
    this._remoteGw6 = value;
  }
  public resetRemoteGw6() {
    this._remoteGw6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteGw6Input() {
    return this._remoteGw6;
  }

  // sequence_number_reception - computed: true, optional: true, required: false
  private _sequenceNumberReception?: string; 
  public get sequenceNumberReception() {
    return this.getStringAttribute('sequence_number_reception');
  }
  public set sequenceNumberReception(value: string) {
    this._sequenceNumberReception = value;
  }
  public resetSequenceNumberReception() {
    this._sequenceNumberReception = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNumberReceptionInput() {
    return this._sequenceNumberReception;
  }

  // sequence_number_transmission - computed: true, optional: true, required: false
  private _sequenceNumberTransmission?: string; 
  public get sequenceNumberTransmission() {
    return this.getStringAttribute('sequence_number_transmission');
  }
  public set sequenceNumberTransmission(value: string) {
    this._sequenceNumberTransmission = value;
  }
  public resetSequenceNumberTransmission() {
    this._sequenceNumberTransmission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNumberTransmissionInput() {
    return this._sequenceNumberTransmission;
  }

  // use_sdwan - computed: true, optional: true, required: false
  private _useSdwan?: string; 
  public get useSdwan() {
    return this.getStringAttribute('use_sdwan');
  }
  public set useSdwan(value: string) {
    this._useSdwan = value;
  }
  public resetUseSdwan() {
    this._useSdwan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSdwanInput() {
    return this._useSdwan;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_asic_offload: cdktf.stringToTerraform(this._autoAsicOffload),
      checksum_reception: cdktf.stringToTerraform(this._checksumReception),
      checksum_transmission: cdktf.stringToTerraform(this._checksumTransmission),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      diffservcode: cdktf.stringToTerraform(this._diffservcode),
      dscp_copying: cdktf.stringToTerraform(this._dscpCopying),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interface),
      ip_version: cdktf.stringToTerraform(this._ipVersion),
      keepalive_failtimes: cdktf.numberToTerraform(this._keepaliveFailtimes),
      keepalive_interval: cdktf.numberToTerraform(this._keepaliveInterval),
      key_inbound: cdktf.numberToTerraform(this._keyInbound),
      key_outbound: cdktf.numberToTerraform(this._keyOutbound),
      local_gw: cdktf.stringToTerraform(this._localGw),
      local_gw6: cdktf.stringToTerraform(this._localGw6),
      name: cdktf.stringToTerraform(this._name),
      remote_gw: cdktf.stringToTerraform(this._remoteGw),
      remote_gw6: cdktf.stringToTerraform(this._remoteGw6),
      sequence_number_reception: cdktf.stringToTerraform(this._sequenceNumberReception),
      sequence_number_transmission: cdktf.stringToTerraform(this._sequenceNumberTransmission),
      use_sdwan: cdktf.stringToTerraform(this._useSdwan),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_asic_offload: {
        value: cdktf.stringToHclTerraform(this._autoAsicOffload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      checksum_reception: {
        value: cdktf.stringToHclTerraform(this._checksumReception),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      checksum_transmission: {
        value: cdktf.stringToHclTerraform(this._checksumTransmission),
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
      diffservcode: {
        value: cdktf.stringToHclTerraform(this._diffservcode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dscp_copying: {
        value: cdktf.stringToHclTerraform(this._dscpCopying),
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
      interface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._interface),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ip_version: {
        value: cdktf.stringToHclTerraform(this._ipVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keepalive_failtimes: {
        value: cdktf.numberToHclTerraform(this._keepaliveFailtimes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      keepalive_interval: {
        value: cdktf.numberToHclTerraform(this._keepaliveInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      key_inbound: {
        value: cdktf.numberToHclTerraform(this._keyInbound),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      key_outbound: {
        value: cdktf.numberToHclTerraform(this._keyOutbound),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      local_gw: {
        value: cdktf.stringToHclTerraform(this._localGw),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_gw6: {
        value: cdktf.stringToHclTerraform(this._localGw6),
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
      remote_gw: {
        value: cdktf.stringToHclTerraform(this._remoteGw),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_gw6: {
        value: cdktf.stringToHclTerraform(this._remoteGw6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sequence_number_reception: {
        value: cdktf.stringToHclTerraform(this._sequenceNumberReception),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sequence_number_transmission: {
        value: cdktf.stringToHclTerraform(this._sequenceNumberTransmission),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_sdwan: {
        value: cdktf.stringToHclTerraform(this._useSdwan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
