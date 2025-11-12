// https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_nat
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayNatConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_nat#bi_directional GatewayNat#bi_directional}
  */
  readonly biDirectional: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_nat#gateway_id GatewayNat#gateway_id}
  */
  readonly gatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_nat#id GatewayNat#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_nat#lan_ip GatewayNat#lan_ip}
  */
  readonly lanIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_nat#lan_port GatewayNat#lan_port}
  */
  readonly lanPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_nat#name GatewayNat#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_nat#public_ip GatewayNat#public_ip}
  */
  readonly publicIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_nat#public_port GatewayNat#public_port}
  */
  readonly publicPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_nat#up_link_if_name GatewayNat#up_link_if_name}
  */
  readonly upLinkIfName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_nat netskopebwan_gateway_nat}
*/
export class GatewayNat extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netskopebwan_gateway_nat";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayNat resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayNat to import
  * @param importFromId The id of the existing GatewayNat that should be imported. Refer to the {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_nat#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayNat to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netskopebwan_gateway_nat", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_nat netskopebwan_gateway_nat} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayNatConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayNatConfig) {
    super(scope, id, {
      terraformResourceType: 'netskopebwan_gateway_nat',
      terraformGeneratorMetadata: {
        providerName: 'netskopebwan',
        providerVersion: '0.0.2',
        providerVersionConstraint: '0.0.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._biDirectional = config.biDirectional;
    this._gatewayId = config.gatewayId;
    this._id = config.id;
    this._lanIp = config.lanIp;
    this._lanPort = config.lanPort;
    this._name = config.name;
    this._publicIp = config.publicIp;
    this._publicPort = config.publicPort;
    this._upLinkIfName = config.upLinkIfName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bi_directional - computed: false, optional: false, required: true
  private _biDirectional?: boolean | cdktf.IResolvable; 
  public get biDirectional() {
    return this.getBooleanAttribute('bi_directional');
  }
  public set biDirectional(value: boolean | cdktf.IResolvable) {
    this._biDirectional = value;
  }
  // Temporarily expose input value. Use with caution.
  public get biDirectionalInput() {
    return this._biDirectional;
  }

  // gateway_id - computed: false, optional: false, required: true
  private _gatewayId?: string; 
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }
  public set gatewayId(value: string) {
    this._gatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdInput() {
    return this._gatewayId;
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

  // lan_ip - computed: false, optional: false, required: true
  private _lanIp?: string; 
  public get lanIp() {
    return this.getStringAttribute('lan_ip');
  }
  public set lanIp(value: string) {
    this._lanIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lanIpInput() {
    return this._lanIp;
  }

  // lan_port - computed: true, optional: true, required: false
  private _lanPort?: number; 
  public get lanPort() {
    return this.getNumberAttribute('lan_port');
  }
  public set lanPort(value: number) {
    this._lanPort = value;
  }
  public resetLanPort() {
    this._lanPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lanPortInput() {
    return this._lanPort;
  }

  // name - computed: true, optional: true, required: false
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

  // public_ip - computed: false, optional: false, required: true
  private _publicIp?: string; 
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }
  public set publicIp(value: string) {
    this._publicIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp;
  }

  // public_port - computed: true, optional: true, required: false
  private _publicPort?: number; 
  public get publicPort() {
    return this.getNumberAttribute('public_port');
  }
  public set publicPort(value: number) {
    this._publicPort = value;
  }
  public resetPublicPort() {
    this._publicPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicPortInput() {
    return this._publicPort;
  }

  // up_link_if_name - computed: false, optional: false, required: true
  private _upLinkIfName?: string; 
  public get upLinkIfName() {
    return this.getStringAttribute('up_link_if_name');
  }
  public set upLinkIfName(value: string) {
    this._upLinkIfName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upLinkIfNameInput() {
    return this._upLinkIfName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bi_directional: cdktf.booleanToTerraform(this._biDirectional),
      gateway_id: cdktf.stringToTerraform(this._gatewayId),
      id: cdktf.stringToTerraform(this._id),
      lan_ip: cdktf.stringToTerraform(this._lanIp),
      lan_port: cdktf.numberToTerraform(this._lanPort),
      name: cdktf.stringToTerraform(this._name),
      public_ip: cdktf.stringToTerraform(this._publicIp),
      public_port: cdktf.numberToTerraform(this._publicPort),
      up_link_if_name: cdktf.stringToTerraform(this._upLinkIfName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bi_directional: {
        value: cdktf.booleanToHclTerraform(this._biDirectional),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gateway_id: {
        value: cdktf.stringToHclTerraform(this._gatewayId),
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
      lan_ip: {
        value: cdktf.stringToHclTerraform(this._lanIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lan_port: {
        value: cdktf.numberToHclTerraform(this._lanPort),
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
      public_ip: {
        value: cdktf.stringToHclTerraform(this._publicIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_port: {
        value: cdktf.numberToHclTerraform(this._publicPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      up_link_if_name: {
        value: cdktf.stringToHclTerraform(this._upLinkIfName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
