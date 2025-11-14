// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions_imap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFirewallProfileprotocoloptionsImapAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions_imap#adom ObjectFirewallProfileprotocoloptionsImapA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions_imap#id ObjectFirewallProfileprotocoloptionsImapA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions_imap#inspect_all ObjectFirewallProfileprotocoloptionsImapA#inspect_all}
  */
  readonly inspectAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions_imap#options ObjectFirewallProfileprotocoloptionsImapA#options}
  */
  readonly options?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions_imap#oversize_limit ObjectFirewallProfileprotocoloptionsImapA#oversize_limit}
  */
  readonly oversizeLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions_imap#ports ObjectFirewallProfileprotocoloptionsImapA#ports}
  */
  readonly ports?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions_imap#profile_protocol_options ObjectFirewallProfileprotocoloptionsImapA#profile_protocol_options}
  */
  readonly profileProtocolOptions: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions_imap#proxy_after_tcp_handshake ObjectFirewallProfileprotocoloptionsImapA#proxy_after_tcp_handshake}
  */
  readonly proxyAfterTcpHandshake?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions_imap#scan_bzip2 ObjectFirewallProfileprotocoloptionsImapA#scan_bzip2}
  */
  readonly scanBzip2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions_imap#scopetype ObjectFirewallProfileprotocoloptionsImapA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions_imap#ssl_offloaded ObjectFirewallProfileprotocoloptionsImapA#ssl_offloaded}
  */
  readonly sslOffloaded?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions_imap#status ObjectFirewallProfileprotocoloptionsImapA#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions_imap#uncompressed_nest_limit ObjectFirewallProfileprotocoloptionsImapA#uncompressed_nest_limit}
  */
  readonly uncompressedNestLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions_imap#uncompressed_oversize_limit ObjectFirewallProfileprotocoloptionsImapA#uncompressed_oversize_limit}
  */
  readonly uncompressedOversizeLimit?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions_imap fortimanager_object_firewall_profileprotocoloptions_imap}
*/
export class ObjectFirewallProfileprotocoloptionsImapA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_firewall_profileprotocoloptions_imap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFirewallProfileprotocoloptionsImapA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFirewallProfileprotocoloptionsImapA to import
  * @param importFromId The id of the existing ObjectFirewallProfileprotocoloptionsImapA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions_imap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFirewallProfileprotocoloptionsImapA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_firewall_profileprotocoloptions_imap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions_imap fortimanager_object_firewall_profileprotocoloptions_imap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFirewallProfileprotocoloptionsImapAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectFirewallProfileprotocoloptionsImapAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_firewall_profileprotocoloptions_imap',
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
    this._id = config.id;
    this._inspectAll = config.inspectAll;
    this._options = config.options;
    this._oversizeLimit = config.oversizeLimit;
    this._ports = config.ports;
    this._profileProtocolOptions = config.profileProtocolOptions;
    this._proxyAfterTcpHandshake = config.proxyAfterTcpHandshake;
    this._scanBzip2 = config.scanBzip2;
    this._scopetype = config.scopetype;
    this._sslOffloaded = config.sslOffloaded;
    this._status = config.status;
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

  // inspect_all - computed: true, optional: true, required: false
  private _inspectAll?: string; 
  public get inspectAll() {
    return this.getStringAttribute('inspect_all');
  }
  public set inspectAll(value: string) {
    this._inspectAll = value;
  }
  public resetInspectAll() {
    this._inspectAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectAllInput() {
    return this._inspectAll;
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

  // ports - computed: true, optional: true, required: false
  private _ports?: number[]; 
  public get ports() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('ports')));
  }
  public set ports(value: number[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
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

  // proxy_after_tcp_handshake - computed: true, optional: true, required: false
  private _proxyAfterTcpHandshake?: string; 
  public get proxyAfterTcpHandshake() {
    return this.getStringAttribute('proxy_after_tcp_handshake');
  }
  public set proxyAfterTcpHandshake(value: string) {
    this._proxyAfterTcpHandshake = value;
  }
  public resetProxyAfterTcpHandshake() {
    this._proxyAfterTcpHandshake = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyAfterTcpHandshakeInput() {
    return this._proxyAfterTcpHandshake;
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

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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
      id: cdktf.stringToTerraform(this._id),
      inspect_all: cdktf.stringToTerraform(this._inspectAll),
      options: cdktf.listMapper(cdktf.stringToTerraform, false)(this._options),
      oversize_limit: cdktf.numberToTerraform(this._oversizeLimit),
      ports: cdktf.listMapper(cdktf.numberToTerraform, false)(this._ports),
      profile_protocol_options: cdktf.stringToTerraform(this._profileProtocolOptions),
      proxy_after_tcp_handshake: cdktf.stringToTerraform(this._proxyAfterTcpHandshake),
      scan_bzip2: cdktf.stringToTerraform(this._scanBzip2),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      ssl_offloaded: cdktf.stringToTerraform(this._sslOffloaded),
      status: cdktf.stringToTerraform(this._status),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inspect_all: {
        value: cdktf.stringToHclTerraform(this._inspectAll),
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
      ports: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._ports),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      profile_protocol_options: {
        value: cdktf.stringToHclTerraform(this._profileProtocolOptions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_after_tcp_handshake: {
        value: cdktf.stringToHclTerraform(this._proxyAfterTcpHandshake),
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
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
