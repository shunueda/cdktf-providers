// https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/system_ntp_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemNtpServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/system_ntp_server#___path___ SystemNtpServer#___path___}
  */
  readonly path?: string;
  /**
  * NTP symmetric key, used for authentication between the NTP client and server. Key Identifier (Key ID) - an integer identifying the cryptographic key used to generate the message-authentication code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/system_ntp_server#auth_key SystemNtpServer#auth_key}
  */
  readonly authKey?: string;
  /**
  * Enable certain NTP server mode, for this mode to work you have to set up broadcast-addresses field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/system_ntp_server#broadcast SystemNtpServer#broadcast}
  */
  readonly broadcast?: boolean | cdktf.IResolvable;
  /**
  * Set broadcast address to use for NTP server broadcast mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/system_ntp_server#broadcast_addresses SystemNtpServer#broadcast_addresses}
  */
  readonly broadcastAddresses?: string;
  /**
  * Enable NTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/system_ntp_server#enabled SystemNtpServer#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/system_ntp_server#id SystemNtpServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Manually set stratum if ```use_local_clock = true```.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/system_ntp_server#local_clock_stratum SystemNtpServer#local_clock_stratum}
  */
  readonly localClockStratum?: number;
  /**
  * Enable certain NTP server mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/system_ntp_server#manycast SystemNtpServer#manycast}
  */
  readonly manycast?: boolean | cdktf.IResolvable;
  /**
  * Enable certain NTP server mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/system_ntp_server#multicast SystemNtpServer#multicast}
  */
  readonly multicast?: boolean | cdktf.IResolvable;
  /**
  * The server will supply its local system time as valid if others are not available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/system_ntp_server#use_local_clock SystemNtpServer#use_local_clock}
  */
  readonly useLocalClock?: boolean | cdktf.IResolvable;
  /**
  * The VRF table this resource operates on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/system_ntp_server#vrf SystemNtpServer#vrf}
  */
  readonly vrf?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/system_ntp_server routeros_system_ntp_server}
*/
export class SystemNtpServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_system_ntp_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemNtpServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemNtpServer to import
  * @param importFromId The id of the existing SystemNtpServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/system_ntp_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemNtpServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_system_ntp_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/system_ntp_server routeros_system_ntp_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemNtpServerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemNtpServerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_system_ntp_server',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.92.1',
        providerVersionConstraint: '1.92.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._authKey = config.authKey;
    this._broadcast = config.broadcast;
    this._broadcastAddresses = config.broadcastAddresses;
    this._enabled = config.enabled;
    this._id = config.id;
    this._localClockStratum = config.localClockStratum;
    this._manycast = config.manycast;
    this._multicast = config.multicast;
    this._useLocalClock = config.useLocalClock;
    this._vrf = config.vrf;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // auth_key - computed: false, optional: true, required: false
  private _authKey?: string; 
  public get authKey() {
    return this.getStringAttribute('auth_key');
  }
  public set authKey(value: string) {
    this._authKey = value;
  }
  public resetAuthKey() {
    this._authKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeyInput() {
    return this._authKey;
  }

  // broadcast - computed: false, optional: true, required: false
  private _broadcast?: boolean | cdktf.IResolvable; 
  public get broadcast() {
    return this.getBooleanAttribute('broadcast');
  }
  public set broadcast(value: boolean | cdktf.IResolvable) {
    this._broadcast = value;
  }
  public resetBroadcast() {
    this._broadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastInput() {
    return this._broadcast;
  }

  // broadcast_addresses - computed: false, optional: true, required: false
  private _broadcastAddresses?: string; 
  public get broadcastAddresses() {
    return this.getStringAttribute('broadcast_addresses');
  }
  public set broadcastAddresses(value: string) {
    this._broadcastAddresses = value;
  }
  public resetBroadcastAddresses() {
    this._broadcastAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastAddressesInput() {
    return this._broadcastAddresses;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // local_clock_stratum - computed: false, optional: true, required: false
  private _localClockStratum?: number; 
  public get localClockStratum() {
    return this.getNumberAttribute('local_clock_stratum');
  }
  public set localClockStratum(value: number) {
    this._localClockStratum = value;
  }
  public resetLocalClockStratum() {
    this._localClockStratum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localClockStratumInput() {
    return this._localClockStratum;
  }

  // manycast - computed: false, optional: true, required: false
  private _manycast?: boolean | cdktf.IResolvable; 
  public get manycast() {
    return this.getBooleanAttribute('manycast');
  }
  public set manycast(value: boolean | cdktf.IResolvable) {
    this._manycast = value;
  }
  public resetManycast() {
    this._manycast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manycastInput() {
    return this._manycast;
  }

  // multicast - computed: false, optional: true, required: false
  private _multicast?: boolean | cdktf.IResolvable; 
  public get multicast() {
    return this.getBooleanAttribute('multicast');
  }
  public set multicast(value: boolean | cdktf.IResolvable) {
    this._multicast = value;
  }
  public resetMulticast() {
    this._multicast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastInput() {
    return this._multicast;
  }

  // use_local_clock - computed: false, optional: true, required: false
  private _useLocalClock?: boolean | cdktf.IResolvable; 
  public get useLocalClock() {
    return this.getBooleanAttribute('use_local_clock');
  }
  public set useLocalClock(value: boolean | cdktf.IResolvable) {
    this._useLocalClock = value;
  }
  public resetUseLocalClock() {
    this._useLocalClock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLocalClockInput() {
    return this._useLocalClock;
  }

  // vrf - computed: false, optional: true, required: false
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  public resetVrf() {
    this._vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      auth_key: cdktf.stringToTerraform(this._authKey),
      broadcast: cdktf.booleanToTerraform(this._broadcast),
      broadcast_addresses: cdktf.stringToTerraform(this._broadcastAddresses),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      local_clock_stratum: cdktf.numberToTerraform(this._localClockStratum),
      manycast: cdktf.booleanToTerraform(this._manycast),
      multicast: cdktf.booleanToTerraform(this._multicast),
      use_local_clock: cdktf.booleanToTerraform(this._useLocalClock),
      vrf: cdktf.stringToTerraform(this._vrf),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_key: {
        value: cdktf.stringToHclTerraform(this._authKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      broadcast: {
        value: cdktf.booleanToHclTerraform(this._broadcast),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      broadcast_addresses: {
        value: cdktf.stringToHclTerraform(this._broadcastAddresses),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_clock_stratum: {
        value: cdktf.numberToHclTerraform(this._localClockStratum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      manycast: {
        value: cdktf.booleanToHclTerraform(this._manycast),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      multicast: {
        value: cdktf.booleanToHclTerraform(this._multicast),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_local_clock: {
        value: cdktf.booleanToHclTerraform(this._useLocalClock),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vrf: {
        value: cdktf.stringToHclTerraform(this._vrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
