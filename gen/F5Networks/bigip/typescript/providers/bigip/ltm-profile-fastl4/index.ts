// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_fastl4
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LtmProfileFastl4Config extends cdktf.TerraformMetaArguments {
  /**
  * Number of seconds allowed for a client to transmit enough data to select a server when you have late binding enabled. Value -1 means indefinite (not recommended)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_fastl4#client_timeout LtmProfileFastl4#client_timeout}
  */
  readonly clientTimeout?: number;
  /**
  * Use the parent Fastl4 profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_fastl4#defaults_from LtmProfileFastl4#defaults_from}
  */
  readonly defaultsFrom?: string;
  /**
  * Specifies whether a qualified late-binding connection requires an explicit iRule command to migrate down to ePVA hardware. The default is disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_fastl4#explicitflow_migration LtmProfileFastl4#explicitflow_migration}
  */
  readonly explicitflowMigration?: string;
  /**
  * Use the parent Fastl4 profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_fastl4#hardware_syncookie LtmProfileFastl4#hardware_syncookie}
  */
  readonly hardwareSyncookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_fastl4#id LtmProfileFastl4#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Number of seconds (default 300; may not be 0) connection may remain idle before it becomes eligible for deletion. Value -1 (not recommended) means infinite
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_fastl4#idle_timeout LtmProfileFastl4#idle_timeout}
  */
  readonly idleTimeout?: string;
  /**
  * Use the parent Fastl4 profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_fastl4#iptos_toclient LtmProfileFastl4#iptos_toclient}
  */
  readonly iptosToclient?: string;
  /**
  * Use the parent Fastl4 profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_fastl4#iptos_toserver LtmProfileFastl4#iptos_toserver}
  */
  readonly iptosToserver?: string;
  /**
  * Specifies the keep-alive probe interval, in seconds. The default is Disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_fastl4#keepalive_interval LtmProfileFastl4#keepalive_interval}
  */
  readonly keepaliveInterval?: string;
  /**
  * Enables intelligent selection of a back-end server or pool, using an iRule to make the selection. The default is disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_fastl4#late_binding LtmProfileFastl4#late_binding}
  */
  readonly lateBinding?: string;
  /**
  * Specifies, when checked (enabled), that the system closes a loosely-initiated connection when the system receives the first FIN packet from either the client or the server. The default is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_fastl4#loose_close LtmProfileFastl4#loose_close}
  */
  readonly looseClose?: string;
  /**
  * Specifies, when checked (enabled), that the system initializes a connection when it receives any TCP packet, rather that requiring a SYN packet for connection initiation. The default is disabled. We recommend that if you enable the Loose Initiation option, you also enable the Loose Close option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_fastl4#loose_initiation LtmProfileFastl4#loose_initiation}
  */
  readonly looseInitiation?: string;
  /**
  * Name of the Fastl4 Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_fastl4#name LtmProfileFastl4#name}
  */
  readonly name: string;
  /**
  * name of partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_fastl4#partition LtmProfileFastl4#partition}
  */
  readonly partition?: string;
  /**
  * Specifies the amount of data the BIG-IP system can accept without acknowledging the server. The default is 0 (zero)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_fastl4#receive_windowsize LtmProfileFastl4#receive_windowsize}
  */
  readonly receiveWindowsize?: number;
  /**
  * Specifies the acceptable duration for a TCP handshake, that is, the maximum idle time between a client synchronization (SYN) and a client acknowledgment (ACK).The default is 5 seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_fastl4#tcp_handshake_timeout LtmProfileFastl4#tcp_handshake_timeout}
  */
  readonly tcpHandshakeTimeout?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_fastl4 bigip_ltm_profile_fastl4}
*/
export class LtmProfileFastl4 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_ltm_profile_fastl4";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LtmProfileFastl4 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LtmProfileFastl4 to import
  * @param importFromId The id of the existing LtmProfileFastl4 that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_fastl4#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LtmProfileFastl4 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_ltm_profile_fastl4", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_fastl4 bigip_ltm_profile_fastl4} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LtmProfileFastl4Config
  */
  public constructor(scope: Construct, id: string, config: LtmProfileFastl4Config) {
    super(scope, id, {
      terraformResourceType: 'bigip_ltm_profile_fastl4',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1',
        providerVersionConstraint: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientTimeout = config.clientTimeout;
    this._defaultsFrom = config.defaultsFrom;
    this._explicitflowMigration = config.explicitflowMigration;
    this._hardwareSyncookie = config.hardwareSyncookie;
    this._id = config.id;
    this._idleTimeout = config.idleTimeout;
    this._iptosToclient = config.iptosToclient;
    this._iptosToserver = config.iptosToserver;
    this._keepaliveInterval = config.keepaliveInterval;
    this._lateBinding = config.lateBinding;
    this._looseClose = config.looseClose;
    this._looseInitiation = config.looseInitiation;
    this._name = config.name;
    this._partition = config.partition;
    this._receiveWindowsize = config.receiveWindowsize;
    this._tcpHandshakeTimeout = config.tcpHandshakeTimeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_timeout - computed: true, optional: true, required: false
  private _clientTimeout?: number; 
  public get clientTimeout() {
    return this.getNumberAttribute('client_timeout');
  }
  public set clientTimeout(value: number) {
    this._clientTimeout = value;
  }
  public resetClientTimeout() {
    this._clientTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTimeoutInput() {
    return this._clientTimeout;
  }

  // defaults_from - computed: true, optional: true, required: false
  private _defaultsFrom?: string; 
  public get defaultsFrom() {
    return this.getStringAttribute('defaults_from');
  }
  public set defaultsFrom(value: string) {
    this._defaultsFrom = value;
  }
  public resetDefaultsFrom() {
    this._defaultsFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultsFromInput() {
    return this._defaultsFrom;
  }

  // explicitflow_migration - computed: true, optional: true, required: false
  private _explicitflowMigration?: string; 
  public get explicitflowMigration() {
    return this.getStringAttribute('explicitflow_migration');
  }
  public set explicitflowMigration(value: string) {
    this._explicitflowMigration = value;
  }
  public resetExplicitflowMigration() {
    this._explicitflowMigration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitflowMigrationInput() {
    return this._explicitflowMigration;
  }

  // hardware_syncookie - computed: true, optional: true, required: false
  private _hardwareSyncookie?: string; 
  public get hardwareSyncookie() {
    return this.getStringAttribute('hardware_syncookie');
  }
  public set hardwareSyncookie(value: string) {
    this._hardwareSyncookie = value;
  }
  public resetHardwareSyncookie() {
    this._hardwareSyncookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareSyncookieInput() {
    return this._hardwareSyncookie;
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

  // idle_timeout - computed: true, optional: true, required: false
  private _idleTimeout?: string; 
  public get idleTimeout() {
    return this.getStringAttribute('idle_timeout');
  }
  public set idleTimeout(value: string) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // iptos_toclient - computed: true, optional: true, required: false
  private _iptosToclient?: string; 
  public get iptosToclient() {
    return this.getStringAttribute('iptos_toclient');
  }
  public set iptosToclient(value: string) {
    this._iptosToclient = value;
  }
  public resetIptosToclient() {
    this._iptosToclient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iptosToclientInput() {
    return this._iptosToclient;
  }

  // iptos_toserver - computed: true, optional: true, required: false
  private _iptosToserver?: string; 
  public get iptosToserver() {
    return this.getStringAttribute('iptos_toserver');
  }
  public set iptosToserver(value: string) {
    this._iptosToserver = value;
  }
  public resetIptosToserver() {
    this._iptosToserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iptosToserverInput() {
    return this._iptosToserver;
  }

  // keepalive_interval - computed: true, optional: true, required: false
  private _keepaliveInterval?: string; 
  public get keepaliveInterval() {
    return this.getStringAttribute('keepalive_interval');
  }
  public set keepaliveInterval(value: string) {
    this._keepaliveInterval = value;
  }
  public resetKeepaliveInterval() {
    this._keepaliveInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveIntervalInput() {
    return this._keepaliveInterval;
  }

  // late_binding - computed: true, optional: true, required: false
  private _lateBinding?: string; 
  public get lateBinding() {
    return this.getStringAttribute('late_binding');
  }
  public set lateBinding(value: string) {
    this._lateBinding = value;
  }
  public resetLateBinding() {
    this._lateBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lateBindingInput() {
    return this._lateBinding;
  }

  // loose_close - computed: true, optional: true, required: false
  private _looseClose?: string; 
  public get looseClose() {
    return this.getStringAttribute('loose_close');
  }
  public set looseClose(value: string) {
    this._looseClose = value;
  }
  public resetLooseClose() {
    this._looseClose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get looseCloseInput() {
    return this._looseClose;
  }

  // loose_initiation - computed: true, optional: true, required: false
  private _looseInitiation?: string; 
  public get looseInitiation() {
    return this.getStringAttribute('loose_initiation');
  }
  public set looseInitiation(value: string) {
    this._looseInitiation = value;
  }
  public resetLooseInitiation() {
    this._looseInitiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get looseInitiationInput() {
    return this._looseInitiation;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // partition - computed: true, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // receive_windowsize - computed: true, optional: true, required: false
  private _receiveWindowsize?: number; 
  public get receiveWindowsize() {
    return this.getNumberAttribute('receive_windowsize');
  }
  public set receiveWindowsize(value: number) {
    this._receiveWindowsize = value;
  }
  public resetReceiveWindowsize() {
    this._receiveWindowsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveWindowsizeInput() {
    return this._receiveWindowsize;
  }

  // tcp_handshake_timeout - computed: true, optional: true, required: false
  private _tcpHandshakeTimeout?: string; 
  public get tcpHandshakeTimeout() {
    return this.getStringAttribute('tcp_handshake_timeout');
  }
  public set tcpHandshakeTimeout(value: string) {
    this._tcpHandshakeTimeout = value;
  }
  public resetTcpHandshakeTimeout() {
    this._tcpHandshakeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpHandshakeTimeoutInput() {
    return this._tcpHandshakeTimeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_timeout: cdktf.numberToTerraform(this._clientTimeout),
      defaults_from: cdktf.stringToTerraform(this._defaultsFrom),
      explicitflow_migration: cdktf.stringToTerraform(this._explicitflowMigration),
      hardware_syncookie: cdktf.stringToTerraform(this._hardwareSyncookie),
      id: cdktf.stringToTerraform(this._id),
      idle_timeout: cdktf.stringToTerraform(this._idleTimeout),
      iptos_toclient: cdktf.stringToTerraform(this._iptosToclient),
      iptos_toserver: cdktf.stringToTerraform(this._iptosToserver),
      keepalive_interval: cdktf.stringToTerraform(this._keepaliveInterval),
      late_binding: cdktf.stringToTerraform(this._lateBinding),
      loose_close: cdktf.stringToTerraform(this._looseClose),
      loose_initiation: cdktf.stringToTerraform(this._looseInitiation),
      name: cdktf.stringToTerraform(this._name),
      partition: cdktf.stringToTerraform(this._partition),
      receive_windowsize: cdktf.numberToTerraform(this._receiveWindowsize),
      tcp_handshake_timeout: cdktf.stringToTerraform(this._tcpHandshakeTimeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_timeout: {
        value: cdktf.numberToHclTerraform(this._clientTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      defaults_from: {
        value: cdktf.stringToHclTerraform(this._defaultsFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      explicitflow_migration: {
        value: cdktf.stringToHclTerraform(this._explicitflowMigration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hardware_syncookie: {
        value: cdktf.stringToHclTerraform(this._hardwareSyncookie),
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
      idle_timeout: {
        value: cdktf.stringToHclTerraform(this._idleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iptos_toclient: {
        value: cdktf.stringToHclTerraform(this._iptosToclient),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iptos_toserver: {
        value: cdktf.stringToHclTerraform(this._iptosToserver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keepalive_interval: {
        value: cdktf.stringToHclTerraform(this._keepaliveInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      late_binding: {
        value: cdktf.stringToHclTerraform(this._lateBinding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loose_close: {
        value: cdktf.stringToHclTerraform(this._looseClose),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loose_initiation: {
        value: cdktf.stringToHclTerraform(this._looseInitiation),
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
      partition: {
        value: cdktf.stringToHclTerraform(this._partition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      receive_windowsize: {
        value: cdktf.numberToHclTerraform(this._receiveWindowsize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_handshake_timeout: {
        value: cdktf.stringToHclTerraform(this._tcpHandshakeTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
