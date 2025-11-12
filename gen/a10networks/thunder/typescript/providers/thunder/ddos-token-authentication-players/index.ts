// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_token_authentication_players
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosTokenAuthenticationPlayersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_token_authentication_players#dst_ip DdosTokenAuthenticationPlayers#dst_ip}
  */
  readonly dstIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_token_authentication_players#dst_port DdosTokenAuthenticationPlayers#dst_port}
  */
  readonly dstPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_token_authentication_players#id DdosTokenAuthenticationPlayers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_token_authentication_players#magic_value DdosTokenAuthenticationPlayers#magic_value}
  */
  readonly magicValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_token_authentication_players#src_ip DdosTokenAuthenticationPlayers#src_ip}
  */
  readonly srcIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_token_authentication_players#src_port DdosTokenAuthenticationPlayers#src_port}
  */
  readonly srcPort: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_token_authentication_players thunder_ddos_token_authentication_players}
*/
export class DdosTokenAuthenticationPlayers extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_token_authentication_players";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosTokenAuthenticationPlayers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosTokenAuthenticationPlayers to import
  * @param importFromId The id of the existing DdosTokenAuthenticationPlayers that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_token_authentication_players#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosTokenAuthenticationPlayers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_token_authentication_players", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_token_authentication_players thunder_ddos_token_authentication_players} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosTokenAuthenticationPlayersConfig
  */
  public constructor(scope: Construct, id: string, config: DdosTokenAuthenticationPlayersConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_token_authentication_players',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dstIp = config.dstIp;
    this._dstPort = config.dstPort;
    this._id = config.id;
    this._magicValue = config.magicValue;
    this._srcIp = config.srcIp;
    this._srcPort = config.srcPort;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dst_ip - computed: false, optional: false, required: true
  private _dstIp?: string; 
  public get dstIp() {
    return this.getStringAttribute('dst_ip');
  }
  public set dstIp(value: string) {
    this._dstIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpInput() {
    return this._dstIp;
  }

  // dst_port - computed: false, optional: false, required: true
  private _dstPort?: number; 
  public get dstPort() {
    return this.getNumberAttribute('dst_port');
  }
  public set dstPort(value: number) {
    this._dstPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortInput() {
    return this._dstPort;
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

  // magic_value - computed: false, optional: true, required: false
  private _magicValue?: number; 
  public get magicValue() {
    return this.getNumberAttribute('magic_value');
  }
  public set magicValue(value: number) {
    this._magicValue = value;
  }
  public resetMagicValue() {
    this._magicValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get magicValueInput() {
    return this._magicValue;
  }

  // src_ip - computed: false, optional: false, required: true
  private _srcIp?: string; 
  public get srcIp() {
    return this.getStringAttribute('src_ip');
  }
  public set srcIp(value: string) {
    this._srcIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpInput() {
    return this._srcIp;
  }

  // src_port - computed: false, optional: false, required: true
  private _srcPort?: number; 
  public get srcPort() {
    return this.getNumberAttribute('src_port');
  }
  public set srcPort(value: number) {
    this._srcPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortInput() {
    return this._srcPort;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dst_ip: cdktf.stringToTerraform(this._dstIp),
      dst_port: cdktf.numberToTerraform(this._dstPort),
      id: cdktf.stringToTerraform(this._id),
      magic_value: cdktf.numberToTerraform(this._magicValue),
      src_ip: cdktf.stringToTerraform(this._srcIp),
      src_port: cdktf.numberToTerraform(this._srcPort),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dst_ip: {
        value: cdktf.stringToHclTerraform(this._dstIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_port: {
        value: cdktf.numberToHclTerraform(this._dstPort),
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
      magic_value: {
        value: cdktf.numberToHclTerraform(this._magicValue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      src_ip: {
        value: cdktf.stringToHclTerraform(this._srcIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_port: {
        value: cdktf.numberToHclTerraform(this._srcPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
