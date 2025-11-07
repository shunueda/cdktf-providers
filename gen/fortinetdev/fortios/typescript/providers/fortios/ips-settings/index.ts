// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpsSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_settings#ha_session_pickup IpsSettings#ha_session_pickup}
  */
  readonly haSessionPickup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_settings#id IpsSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_settings#ips_packet_quota IpsSettings#ips_packet_quota}
  */
  readonly ipsPacketQuota?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_settings#packet_log_history IpsSettings#packet_log_history}
  */
  readonly packetLogHistory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_settings#packet_log_memory IpsSettings#packet_log_memory}
  */
  readonly packetLogMemory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_settings#packet_log_post_attack IpsSettings#packet_log_post_attack}
  */
  readonly packetLogPostAttack?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_settings#proxy_inline_ips IpsSettings#proxy_inline_ips}
  */
  readonly proxyInlineIps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_settings#vdomparam IpsSettings#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_settings fortios_ips_settings}
*/
export class IpsSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_ips_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpsSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpsSettings to import
  * @param importFromId The id of the existing IpsSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpsSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_ips_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_settings fortios_ips_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpsSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IpsSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_ips_settings',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._haSessionPickup = config.haSessionPickup;
    this._id = config.id;
    this._ipsPacketQuota = config.ipsPacketQuota;
    this._packetLogHistory = config.packetLogHistory;
    this._packetLogMemory = config.packetLogMemory;
    this._packetLogPostAttack = config.packetLogPostAttack;
    this._proxyInlineIps = config.proxyInlineIps;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ha_session_pickup - computed: true, optional: true, required: false
  private _haSessionPickup?: string; 
  public get haSessionPickup() {
    return this.getStringAttribute('ha_session_pickup');
  }
  public set haSessionPickup(value: string) {
    this._haSessionPickup = value;
  }
  public resetHaSessionPickup() {
    this._haSessionPickup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haSessionPickupInput() {
    return this._haSessionPickup;
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

  // ips_packet_quota - computed: false, optional: true, required: false
  private _ipsPacketQuota?: number; 
  public get ipsPacketQuota() {
    return this.getNumberAttribute('ips_packet_quota');
  }
  public set ipsPacketQuota(value: number) {
    this._ipsPacketQuota = value;
  }
  public resetIpsPacketQuota() {
    this._ipsPacketQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsPacketQuotaInput() {
    return this._ipsPacketQuota;
  }

  // packet_log_history - computed: true, optional: true, required: false
  private _packetLogHistory?: number; 
  public get packetLogHistory() {
    return this.getNumberAttribute('packet_log_history');
  }
  public set packetLogHistory(value: number) {
    this._packetLogHistory = value;
  }
  public resetPacketLogHistory() {
    this._packetLogHistory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetLogHistoryInput() {
    return this._packetLogHistory;
  }

  // packet_log_memory - computed: true, optional: true, required: false
  private _packetLogMemory?: number; 
  public get packetLogMemory() {
    return this.getNumberAttribute('packet_log_memory');
  }
  public set packetLogMemory(value: number) {
    this._packetLogMemory = value;
  }
  public resetPacketLogMemory() {
    this._packetLogMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetLogMemoryInput() {
    return this._packetLogMemory;
  }

  // packet_log_post_attack - computed: false, optional: true, required: false
  private _packetLogPostAttack?: number; 
  public get packetLogPostAttack() {
    return this.getNumberAttribute('packet_log_post_attack');
  }
  public set packetLogPostAttack(value: number) {
    this._packetLogPostAttack = value;
  }
  public resetPacketLogPostAttack() {
    this._packetLogPostAttack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetLogPostAttackInput() {
    return this._packetLogPostAttack;
  }

  // proxy_inline_ips - computed: true, optional: true, required: false
  private _proxyInlineIps?: string; 
  public get proxyInlineIps() {
    return this.getStringAttribute('proxy_inline_ips');
  }
  public set proxyInlineIps(value: string) {
    this._proxyInlineIps = value;
  }
  public resetProxyInlineIps() {
    this._proxyInlineIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInlineIpsInput() {
    return this._proxyInlineIps;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ha_session_pickup: cdktf.stringToTerraform(this._haSessionPickup),
      id: cdktf.stringToTerraform(this._id),
      ips_packet_quota: cdktf.numberToTerraform(this._ipsPacketQuota),
      packet_log_history: cdktf.numberToTerraform(this._packetLogHistory),
      packet_log_memory: cdktf.numberToTerraform(this._packetLogMemory),
      packet_log_post_attack: cdktf.numberToTerraform(this._packetLogPostAttack),
      proxy_inline_ips: cdktf.stringToTerraform(this._proxyInlineIps),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ha_session_pickup: {
        value: cdktf.stringToHclTerraform(this._haSessionPickup),
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
      ips_packet_quota: {
        value: cdktf.numberToHclTerraform(this._ipsPacketQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      packet_log_history: {
        value: cdktf.numberToHclTerraform(this._packetLogHistory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      packet_log_memory: {
        value: cdktf.numberToHclTerraform(this._packetLogMemory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      packet_log_post_attack: {
        value: cdktf.numberToHclTerraform(this._packetLogPostAttack),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proxy_inline_ips: {
        value: cdktf.stringToHclTerraform(this._proxyInlineIps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
