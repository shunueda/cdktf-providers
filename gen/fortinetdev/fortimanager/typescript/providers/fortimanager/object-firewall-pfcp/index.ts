// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_pfcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFirewallPfcpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_pfcp#adom ObjectFirewallPfcp#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_pfcp#denied_log ObjectFirewallPfcp#denied_log}
  */
  readonly deniedLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_pfcp#forwarded_log ObjectFirewallPfcp#forwarded_log}
  */
  readonly forwardedLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_pfcp#id ObjectFirewallPfcp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_pfcp#invalid_reserved_field ObjectFirewallPfcp#invalid_reserved_field}
  */
  readonly invalidReservedField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_pfcp#log_freq ObjectFirewallPfcp#log_freq}
  */
  readonly logFreq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_pfcp#max_message_length ObjectFirewallPfcp#max_message_length}
  */
  readonly maxMessageLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_pfcp#message_filter ObjectFirewallPfcp#message_filter}
  */
  readonly messageFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_pfcp#min_message_length ObjectFirewallPfcp#min_message_length}
  */
  readonly minMessageLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_pfcp#monitor_mode ObjectFirewallPfcp#monitor_mode}
  */
  readonly monitorMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_pfcp#name ObjectFirewallPfcp#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_pfcp#pfcp_timeout ObjectFirewallPfcp#pfcp_timeout}
  */
  readonly pfcpTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_pfcp#scopetype ObjectFirewallPfcp#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_pfcp#traffic_count_log ObjectFirewallPfcp#traffic_count_log}
  */
  readonly trafficCountLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_pfcp#unknown_version ObjectFirewallPfcp#unknown_version}
  */
  readonly unknownVersion?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_pfcp fortimanager_object_firewall_pfcp}
*/
export class ObjectFirewallPfcp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_firewall_pfcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFirewallPfcp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFirewallPfcp to import
  * @param importFromId The id of the existing ObjectFirewallPfcp that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_pfcp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFirewallPfcp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_firewall_pfcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_pfcp fortimanager_object_firewall_pfcp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFirewallPfcpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectFirewallPfcpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_firewall_pfcp',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
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
    this._deniedLog = config.deniedLog;
    this._forwardedLog = config.forwardedLog;
    this._id = config.id;
    this._invalidReservedField = config.invalidReservedField;
    this._logFreq = config.logFreq;
    this._maxMessageLength = config.maxMessageLength;
    this._messageFilter = config.messageFilter;
    this._minMessageLength = config.minMessageLength;
    this._monitorMode = config.monitorMode;
    this._name = config.name;
    this._pfcpTimeout = config.pfcpTimeout;
    this._scopetype = config.scopetype;
    this._trafficCountLog = config.trafficCountLog;
    this._unknownVersion = config.unknownVersion;
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

  // denied_log - computed: true, optional: true, required: false
  private _deniedLog?: string; 
  public get deniedLog() {
    return this.getStringAttribute('denied_log');
  }
  public set deniedLog(value: string) {
    this._deniedLog = value;
  }
  public resetDeniedLog() {
    this._deniedLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedLogInput() {
    return this._deniedLog;
  }

  // forwarded_log - computed: true, optional: true, required: false
  private _forwardedLog?: string; 
  public get forwardedLog() {
    return this.getStringAttribute('forwarded_log');
  }
  public set forwardedLog(value: string) {
    this._forwardedLog = value;
  }
  public resetForwardedLog() {
    this._forwardedLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardedLogInput() {
    return this._forwardedLog;
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

  // invalid_reserved_field - computed: true, optional: true, required: false
  private _invalidReservedField?: string; 
  public get invalidReservedField() {
    return this.getStringAttribute('invalid_reserved_field');
  }
  public set invalidReservedField(value: string) {
    this._invalidReservedField = value;
  }
  public resetInvalidReservedField() {
    this._invalidReservedField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidReservedFieldInput() {
    return this._invalidReservedField;
  }

  // log_freq - computed: false, optional: true, required: false
  private _logFreq?: number; 
  public get logFreq() {
    return this.getNumberAttribute('log_freq');
  }
  public set logFreq(value: number) {
    this._logFreq = value;
  }
  public resetLogFreq() {
    this._logFreq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFreqInput() {
    return this._logFreq;
  }

  // max_message_length - computed: true, optional: true, required: false
  private _maxMessageLength?: number; 
  public get maxMessageLength() {
    return this.getNumberAttribute('max_message_length');
  }
  public set maxMessageLength(value: number) {
    this._maxMessageLength = value;
  }
  public resetMaxMessageLength() {
    this._maxMessageLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMessageLengthInput() {
    return this._maxMessageLength;
  }

  // message_filter - computed: true, optional: true, required: false
  private _messageFilter?: string[]; 
  public get messageFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('message_filter'));
  }
  public set messageFilter(value: string[]) {
    this._messageFilter = value;
  }
  public resetMessageFilter() {
    this._messageFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageFilterInput() {
    return this._messageFilter;
  }

  // min_message_length - computed: false, optional: true, required: false
  private _minMessageLength?: number; 
  public get minMessageLength() {
    return this.getNumberAttribute('min_message_length');
  }
  public set minMessageLength(value: number) {
    this._minMessageLength = value;
  }
  public resetMinMessageLength() {
    this._minMessageLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minMessageLengthInput() {
    return this._minMessageLength;
  }

  // monitor_mode - computed: true, optional: true, required: false
  private _monitorMode?: string; 
  public get monitorMode() {
    return this.getStringAttribute('monitor_mode');
  }
  public set monitorMode(value: string) {
    this._monitorMode = value;
  }
  public resetMonitorMode() {
    this._monitorMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorModeInput() {
    return this._monitorMode;
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

  // pfcp_timeout - computed: true, optional: true, required: false
  private _pfcpTimeout?: number; 
  public get pfcpTimeout() {
    return this.getNumberAttribute('pfcp_timeout');
  }
  public set pfcpTimeout(value: number) {
    this._pfcpTimeout = value;
  }
  public resetPfcpTimeout() {
    this._pfcpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pfcpTimeoutInput() {
    return this._pfcpTimeout;
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

  // traffic_count_log - computed: true, optional: true, required: false
  private _trafficCountLog?: string; 
  public get trafficCountLog() {
    return this.getStringAttribute('traffic_count_log');
  }
  public set trafficCountLog(value: string) {
    this._trafficCountLog = value;
  }
  public resetTrafficCountLog() {
    this._trafficCountLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficCountLogInput() {
    return this._trafficCountLog;
  }

  // unknown_version - computed: true, optional: true, required: false
  private _unknownVersion?: string; 
  public get unknownVersion() {
    return this.getStringAttribute('unknown_version');
  }
  public set unknownVersion(value: string) {
    this._unknownVersion = value;
  }
  public resetUnknownVersion() {
    this._unknownVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownVersionInput() {
    return this._unknownVersion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      denied_log: cdktf.stringToTerraform(this._deniedLog),
      forwarded_log: cdktf.stringToTerraform(this._forwardedLog),
      id: cdktf.stringToTerraform(this._id),
      invalid_reserved_field: cdktf.stringToTerraform(this._invalidReservedField),
      log_freq: cdktf.numberToTerraform(this._logFreq),
      max_message_length: cdktf.numberToTerraform(this._maxMessageLength),
      message_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._messageFilter),
      min_message_length: cdktf.numberToTerraform(this._minMessageLength),
      monitor_mode: cdktf.stringToTerraform(this._monitorMode),
      name: cdktf.stringToTerraform(this._name),
      pfcp_timeout: cdktf.numberToTerraform(this._pfcpTimeout),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      traffic_count_log: cdktf.stringToTerraform(this._trafficCountLog),
      unknown_version: cdktf.stringToTerraform(this._unknownVersion),
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
      denied_log: {
        value: cdktf.stringToHclTerraform(this._deniedLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forwarded_log: {
        value: cdktf.stringToHclTerraform(this._forwardedLog),
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
      invalid_reserved_field: {
        value: cdktf.stringToHclTerraform(this._invalidReservedField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_freq: {
        value: cdktf.numberToHclTerraform(this._logFreq),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_message_length: {
        value: cdktf.numberToHclTerraform(this._maxMessageLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      message_filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._messageFilter),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      min_message_length: {
        value: cdktf.numberToHclTerraform(this._minMessageLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitor_mode: {
        value: cdktf.stringToHclTerraform(this._monitorMode),
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
      pfcp_timeout: {
        value: cdktf.numberToHclTerraform(this._pfcpTimeout),
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
      traffic_count_log: {
        value: cdktf.stringToHclTerraform(this._trafficCountLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unknown_version: {
        value: cdktf.stringToHclTerraform(this._unknownVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
