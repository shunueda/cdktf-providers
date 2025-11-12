// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ntp_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NtpServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ntp_server#device NtpServer#device}
  */
  readonly device?: string;
  /**
  * NTP provider key ID. Possible range is from `1` to `65535`.
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ntp_server#key_id NtpServer#key_id}
  */
  readonly keyId?: number;
  /**
  * NTP maximum interval default in seconds. Possible range is from `4` to `16`.
  *   - Range: `4`-`16`
  *   - Default value: `6`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ntp_server#max_poll NtpServer#max_poll}
  */
  readonly maxPoll?: number;
  /**
  * NTP minimum interval default in seconds. Possible range is from `4` to `16`.
  *   - Range: `4`-`16`
  *   - Default value: `4`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ntp_server#min_poll NtpServer#min_poll}
  */
  readonly minPoll?: number;
  /**
  * NTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ntp_server#name NtpServer#name}
  */
  readonly name: string;
  /**
  * NTP provider type. Possible values are `server` or `peer`.
  *   - Choices: `server`, `peer`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ntp_server#type NtpServer#type}
  */
  readonly type: string;
  /**
  * Identifies the VRF for the NTP providers.
  *   - Default value: `default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ntp_server#vrf NtpServer#vrf}
  */
  readonly vrf?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ntp_server nxos_ntp_server}
*/
export class NtpServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_ntp_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NtpServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NtpServer to import
  * @param importFromId The id of the existing NtpServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ntp_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NtpServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_ntp_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ntp_server nxos_ntp_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NtpServerConfig
  */
  public constructor(scope: Construct, id: string, config: NtpServerConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_ntp_server',
      terraformGeneratorMetadata: {
        providerName: 'nxos',
        providerVersion: '0.5.10',
        providerVersionConstraint: '0.5.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._keyId = config.keyId;
    this._maxPoll = config.maxPoll;
    this._minPoll = config.minPoll;
    this._name = config.name;
    this._type = config.type;
    this._vrf = config.vrf;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_id - computed: false, optional: true, required: false
  private _keyId?: number; 
  public get keyId() {
    return this.getNumberAttribute('key_id');
  }
  public set keyId(value: number) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // max_poll - computed: true, optional: true, required: false
  private _maxPoll?: number; 
  public get maxPoll() {
    return this.getNumberAttribute('max_poll');
  }
  public set maxPoll(value: number) {
    this._maxPoll = value;
  }
  public resetMaxPoll() {
    this._maxPoll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPollInput() {
    return this._maxPoll;
  }

  // min_poll - computed: true, optional: true, required: false
  private _minPoll?: number; 
  public get minPoll() {
    return this.getNumberAttribute('min_poll');
  }
  public set minPoll(value: number) {
    this._minPoll = value;
  }
  public resetMinPoll() {
    this._minPoll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPollInput() {
    return this._minPoll;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vrf - computed: true, optional: true, required: false
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
      device: cdktf.stringToTerraform(this._device),
      key_id: cdktf.numberToTerraform(this._keyId),
      max_poll: cdktf.numberToTerraform(this._maxPoll),
      min_poll: cdktf.numberToTerraform(this._minPoll),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      vrf: cdktf.stringToTerraform(this._vrf),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_id: {
        value: cdktf.numberToHclTerraform(this._keyId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_poll: {
        value: cdktf.numberToHclTerraform(this._maxPoll),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_poll: {
        value: cdktf.numberToHclTerraform(this._minPoll),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
