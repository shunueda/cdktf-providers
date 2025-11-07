// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_ssh
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFirewallProfileprotocoloptionsSshAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_ssh#adom ObjectFirewallProfileprotocoloptionsSshA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_ssh#comfort_amount ObjectFirewallProfileprotocoloptionsSshA#comfort_amount}
  */
  readonly comfortAmount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_ssh#comfort_interval ObjectFirewallProfileprotocoloptionsSshA#comfort_interval}
  */
  readonly comfortInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_ssh#id ObjectFirewallProfileprotocoloptionsSshA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_ssh#options ObjectFirewallProfileprotocoloptionsSshA#options}
  */
  readonly options?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_ssh#oversize_limit ObjectFirewallProfileprotocoloptionsSshA#oversize_limit}
  */
  readonly oversizeLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_ssh#profile_protocol_options ObjectFirewallProfileprotocoloptionsSshA#profile_protocol_options}
  */
  readonly profileProtocolOptions: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_ssh#scan_bzip2 ObjectFirewallProfileprotocoloptionsSshA#scan_bzip2}
  */
  readonly scanBzip2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_ssh#scopetype ObjectFirewallProfileprotocoloptionsSshA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_ssh#ssl_offloaded ObjectFirewallProfileprotocoloptionsSshA#ssl_offloaded}
  */
  readonly sslOffloaded?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_ssh#stream_based_uncompressed_limit ObjectFirewallProfileprotocoloptionsSshA#stream_based_uncompressed_limit}
  */
  readonly streamBasedUncompressedLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_ssh#tcp_window_maximum ObjectFirewallProfileprotocoloptionsSshA#tcp_window_maximum}
  */
  readonly tcpWindowMaximum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_ssh#tcp_window_minimum ObjectFirewallProfileprotocoloptionsSshA#tcp_window_minimum}
  */
  readonly tcpWindowMinimum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_ssh#tcp_window_size ObjectFirewallProfileprotocoloptionsSshA#tcp_window_size}
  */
  readonly tcpWindowSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_ssh#tcp_window_type ObjectFirewallProfileprotocoloptionsSshA#tcp_window_type}
  */
  readonly tcpWindowType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_ssh#uncompressed_nest_limit ObjectFirewallProfileprotocoloptionsSshA#uncompressed_nest_limit}
  */
  readonly uncompressedNestLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_ssh#uncompressed_oversize_limit ObjectFirewallProfileprotocoloptionsSshA#uncompressed_oversize_limit}
  */
  readonly uncompressedOversizeLimit?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_ssh fortimanager_object_firewall_profileprotocoloptions_ssh}
*/
export class ObjectFirewallProfileprotocoloptionsSshA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_firewall_profileprotocoloptions_ssh";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFirewallProfileprotocoloptionsSshA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFirewallProfileprotocoloptionsSshA to import
  * @param importFromId The id of the existing ObjectFirewallProfileprotocoloptionsSshA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_ssh#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFirewallProfileprotocoloptionsSshA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_firewall_profileprotocoloptions_ssh", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_ssh fortimanager_object_firewall_profileprotocoloptions_ssh} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFirewallProfileprotocoloptionsSshAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectFirewallProfileprotocoloptionsSshAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_firewall_profileprotocoloptions_ssh',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
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
    this._comfortAmount = config.comfortAmount;
    this._comfortInterval = config.comfortInterval;
    this._id = config.id;
    this._options = config.options;
    this._oversizeLimit = config.oversizeLimit;
    this._profileProtocolOptions = config.profileProtocolOptions;
    this._scanBzip2 = config.scanBzip2;
    this._scopetype = config.scopetype;
    this._sslOffloaded = config.sslOffloaded;
    this._streamBasedUncompressedLimit = config.streamBasedUncompressedLimit;
    this._tcpWindowMaximum = config.tcpWindowMaximum;
    this._tcpWindowMinimum = config.tcpWindowMinimum;
    this._tcpWindowSize = config.tcpWindowSize;
    this._tcpWindowType = config.tcpWindowType;
    this._uncompressedNestLimit = config.uncompressedNestLimit;
    this._uncompressedOversizeLimit = config.uncompressedOversizeLimit;
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

  // comfort_amount - computed: true, optional: true, required: false
  private _comfortAmount?: number; 
  public get comfortAmount() {
    return this.getNumberAttribute('comfort_amount');
  }
  public set comfortAmount(value: number) {
    this._comfortAmount = value;
  }
  public resetComfortAmount() {
    this._comfortAmount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comfortAmountInput() {
    return this._comfortAmount;
  }

  // comfort_interval - computed: true, optional: true, required: false
  private _comfortInterval?: number; 
  public get comfortInterval() {
    return this.getNumberAttribute('comfort_interval');
  }
  public set comfortInterval(value: number) {
    this._comfortInterval = value;
  }
  public resetComfortInterval() {
    this._comfortInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comfortIntervalInput() {
    return this._comfortInterval;
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

  // options - computed: true, optional: true, required: false
  private _options?: string[]; 
  public get options() {
    return cdktf.Fn.tolist(this.getListAttribute('options'));
  }
  public set options(value: string[]) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // oversize_limit - computed: true, optional: true, required: false
  private _oversizeLimit?: number; 
  public get oversizeLimit() {
    return this.getNumberAttribute('oversize_limit');
  }
  public set oversizeLimit(value: number) {
    this._oversizeLimit = value;
  }
  public resetOversizeLimit() {
    this._oversizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeLimitInput() {
    return this._oversizeLimit;
  }

  // profile_protocol_options - computed: false, optional: false, required: true
  private _profileProtocolOptions?: string; 
  public get profileProtocolOptions() {
    return this.getStringAttribute('profile_protocol_options');
  }
  public set profileProtocolOptions(value: string) {
    this._profileProtocolOptions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileProtocolOptionsInput() {
    return this._profileProtocolOptions;
  }

  // scan_bzip2 - computed: true, optional: true, required: false
  private _scanBzip2?: string; 
  public get scanBzip2() {
    return this.getStringAttribute('scan_bzip2');
  }
  public set scanBzip2(value: string) {
    this._scanBzip2 = value;
  }
  public resetScanBzip2() {
    this._scanBzip2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanBzip2Input() {
    return this._scanBzip2;
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

  // ssl_offloaded - computed: true, optional: true, required: false
  private _sslOffloaded?: string; 
  public get sslOffloaded() {
    return this.getStringAttribute('ssl_offloaded');
  }
  public set sslOffloaded(value: string) {
    this._sslOffloaded = value;
  }
  public resetSslOffloaded() {
    this._sslOffloaded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslOffloadedInput() {
    return this._sslOffloaded;
  }

  // stream_based_uncompressed_limit - computed: false, optional: true, required: false
  private _streamBasedUncompressedLimit?: number; 
  public get streamBasedUncompressedLimit() {
    return this.getNumberAttribute('stream_based_uncompressed_limit');
  }
  public set streamBasedUncompressedLimit(value: number) {
    this._streamBasedUncompressedLimit = value;
  }
  public resetStreamBasedUncompressedLimit() {
    this._streamBasedUncompressedLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamBasedUncompressedLimitInput() {
    return this._streamBasedUncompressedLimit;
  }

  // tcp_window_maximum - computed: true, optional: true, required: false
  private _tcpWindowMaximum?: number; 
  public get tcpWindowMaximum() {
    return this.getNumberAttribute('tcp_window_maximum');
  }
  public set tcpWindowMaximum(value: number) {
    this._tcpWindowMaximum = value;
  }
  public resetTcpWindowMaximum() {
    this._tcpWindowMaximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpWindowMaximumInput() {
    return this._tcpWindowMaximum;
  }

  // tcp_window_minimum - computed: true, optional: true, required: false
  private _tcpWindowMinimum?: number; 
  public get tcpWindowMinimum() {
    return this.getNumberAttribute('tcp_window_minimum');
  }
  public set tcpWindowMinimum(value: number) {
    this._tcpWindowMinimum = value;
  }
  public resetTcpWindowMinimum() {
    this._tcpWindowMinimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpWindowMinimumInput() {
    return this._tcpWindowMinimum;
  }

  // tcp_window_size - computed: true, optional: true, required: false
  private _tcpWindowSize?: number; 
  public get tcpWindowSize() {
    return this.getNumberAttribute('tcp_window_size');
  }
  public set tcpWindowSize(value: number) {
    this._tcpWindowSize = value;
  }
  public resetTcpWindowSize() {
    this._tcpWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpWindowSizeInput() {
    return this._tcpWindowSize;
  }

  // tcp_window_type - computed: true, optional: true, required: false
  private _tcpWindowType?: string; 
  public get tcpWindowType() {
    return this.getStringAttribute('tcp_window_type');
  }
  public set tcpWindowType(value: string) {
    this._tcpWindowType = value;
  }
  public resetTcpWindowType() {
    this._tcpWindowType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpWindowTypeInput() {
    return this._tcpWindowType;
  }

  // uncompressed_nest_limit - computed: true, optional: true, required: false
  private _uncompressedNestLimit?: number; 
  public get uncompressedNestLimit() {
    return this.getNumberAttribute('uncompressed_nest_limit');
  }
  public set uncompressedNestLimit(value: number) {
    this._uncompressedNestLimit = value;
  }
  public resetUncompressedNestLimit() {
    this._uncompressedNestLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uncompressedNestLimitInput() {
    return this._uncompressedNestLimit;
  }

  // uncompressed_oversize_limit - computed: true, optional: true, required: false
  private _uncompressedOversizeLimit?: number; 
  public get uncompressedOversizeLimit() {
    return this.getNumberAttribute('uncompressed_oversize_limit');
  }
  public set uncompressedOversizeLimit(value: number) {
    this._uncompressedOversizeLimit = value;
  }
  public resetUncompressedOversizeLimit() {
    this._uncompressedOversizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uncompressedOversizeLimitInput() {
    return this._uncompressedOversizeLimit;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      comfort_amount: cdktf.numberToTerraform(this._comfortAmount),
      comfort_interval: cdktf.numberToTerraform(this._comfortInterval),
      id: cdktf.stringToTerraform(this._id),
      options: cdktf.listMapper(cdktf.stringToTerraform, false)(this._options),
      oversize_limit: cdktf.numberToTerraform(this._oversizeLimit),
      profile_protocol_options: cdktf.stringToTerraform(this._profileProtocolOptions),
      scan_bzip2: cdktf.stringToTerraform(this._scanBzip2),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      ssl_offloaded: cdktf.stringToTerraform(this._sslOffloaded),
      stream_based_uncompressed_limit: cdktf.numberToTerraform(this._streamBasedUncompressedLimit),
      tcp_window_maximum: cdktf.numberToTerraform(this._tcpWindowMaximum),
      tcp_window_minimum: cdktf.numberToTerraform(this._tcpWindowMinimum),
      tcp_window_size: cdktf.numberToTerraform(this._tcpWindowSize),
      tcp_window_type: cdktf.stringToTerraform(this._tcpWindowType),
      uncompressed_nest_limit: cdktf.numberToTerraform(this._uncompressedNestLimit),
      uncompressed_oversize_limit: cdktf.numberToTerraform(this._uncompressedOversizeLimit),
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
      comfort_amount: {
        value: cdktf.numberToHclTerraform(this._comfortAmount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      comfort_interval: {
        value: cdktf.numberToHclTerraform(this._comfortInterval),
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
      options: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._options),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      oversize_limit: {
        value: cdktf.numberToHclTerraform(this._oversizeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      profile_protocol_options: {
        value: cdktf.stringToHclTerraform(this._profileProtocolOptions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scan_bzip2: {
        value: cdktf.stringToHclTerraform(this._scanBzip2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_offloaded: {
        value: cdktf.stringToHclTerraform(this._sslOffloaded),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stream_based_uncompressed_limit: {
        value: cdktf.numberToHclTerraform(this._streamBasedUncompressedLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_window_maximum: {
        value: cdktf.numberToHclTerraform(this._tcpWindowMaximum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_window_minimum: {
        value: cdktf.numberToHclTerraform(this._tcpWindowMinimum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_window_size: {
        value: cdktf.numberToHclTerraform(this._tcpWindowSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_window_type: {
        value: cdktf.stringToHclTerraform(this._tcpWindowType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uncompressed_nest_limit: {
        value: cdktf.numberToHclTerraform(this._uncompressedNestLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uncompressed_oversize_limit: {
        value: cdktf.numberToHclTerraform(this._uncompressedOversizeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
