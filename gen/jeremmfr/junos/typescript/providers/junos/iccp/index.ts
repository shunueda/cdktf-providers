// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/iccp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IccpConfig extends cdktf.TerraformMetaArguments {
  /**
  * MD5 authentication key for all peers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/iccp#authentication_key Iccp#authentication_key}
  */
  readonly authenticationKey?: string;
  /**
  * Local IP address to use by default for all peers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/iccp#local_ip_addr Iccp#local_ip_addr}
  */
  readonly localIpAddr: string;
  /**
  * Time within which connection must succeed with peers (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/iccp#session_establishment_hold_time Iccp#session_establishment_hold_time}
  */
  readonly sessionEstablishmentHoldTime?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/iccp junos_iccp}
*/
export class Iccp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_iccp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Iccp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Iccp to import
  * @param importFromId The id of the existing Iccp that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/iccp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Iccp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_iccp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/iccp junos_iccp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IccpConfig
  */
  public constructor(scope: Construct, id: string, config: IccpConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_iccp',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0',
        providerVersionConstraint: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticationKey = config.authenticationKey;
    this._localIpAddr = config.localIpAddr;
    this._sessionEstablishmentHoldTime = config.sessionEstablishmentHoldTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_key - computed: false, optional: true, required: false
  private _authenticationKey?: string; 
  public get authenticationKey() {
    return this.getStringAttribute('authentication_key');
  }
  public set authenticationKey(value: string) {
    this._authenticationKey = value;
  }
  public resetAuthenticationKey() {
    this._authenticationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyInput() {
    return this._authenticationKey;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // local_ip_addr - computed: false, optional: false, required: true
  private _localIpAddr?: string; 
  public get localIpAddr() {
    return this.getStringAttribute('local_ip_addr');
  }
  public set localIpAddr(value: string) {
    this._localIpAddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localIpAddrInput() {
    return this._localIpAddr;
  }

  // session_establishment_hold_time - computed: false, optional: true, required: false
  private _sessionEstablishmentHoldTime?: number; 
  public get sessionEstablishmentHoldTime() {
    return this.getNumberAttribute('session_establishment_hold_time');
  }
  public set sessionEstablishmentHoldTime(value: number) {
    this._sessionEstablishmentHoldTime = value;
  }
  public resetSessionEstablishmentHoldTime() {
    this._sessionEstablishmentHoldTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionEstablishmentHoldTimeInput() {
    return this._sessionEstablishmentHoldTime;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_key: cdktf.stringToTerraform(this._authenticationKey),
      local_ip_addr: cdktf.stringToTerraform(this._localIpAddr),
      session_establishment_hold_time: cdktf.numberToTerraform(this._sessionEstablishmentHoldTime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_key: {
        value: cdktf.stringToHclTerraform(this._authenticationKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_ip_addr: {
        value: cdktf.stringToHclTerraform(this._localIpAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_establishment_hold_time: {
        value: cdktf.numberToHclTerraform(this._sessionEstablishmentHoldTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
