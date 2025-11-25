// https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zec_nat_gateway_dnat
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZecNatGatewayDnatConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the public EIP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zec_nat_gateway_dnat#eip_id ZecNatGatewayDnat#eip_id}
  */
  readonly eipId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zec_nat_gateway_dnat#id ZecNatGatewayDnat#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the NAT gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zec_nat_gateway_dnat#nat_gateway_id ZecNatGatewayDnat#nat_gateway_id}
  */
  readonly natGatewayId: string;
  /**
  * The private ip address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zec_nat_gateway_dnat#private_ip_address ZecNatGatewayDnat#private_ip_address}
  */
  readonly privateIpAddress: string;
  /**
  * The internal port or port segment for DNAT rule port forwarding. You can use a hyphen (`-`) to specify a port range, e.g. 80-100. The number of public and private ports must be consistent. The value range is 1-65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zec_nat_gateway_dnat#private_port ZecNatGatewayDnat#private_port}
  */
  readonly privatePort?: string;
  /**
  * The IP protocol type of the DNAT entry. Valid values: `TCP`, `UDP`, `Any`. If you want to forward all traffic with unchanged ports, please specify the protocol type as `Any` and do not set the internal port and public external port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zec_nat_gateway_dnat#protocol ZecNatGatewayDnat#protocol}
  */
  readonly protocol: string;
  /**
  * The external public port or port segment for DNAT rule port forwarding. You can use a hyphen (`-`) to specify a port range, e.g. 80-100. The number of public and private ports must be consistent. The value range is 1-65535. If no port is specified, all traffic will be forwarded with the destination port unchanged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zec_nat_gateway_dnat#public_port ZecNatGatewayDnat#public_port}
  */
  readonly publicPort?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zec_nat_gateway_dnat zenlayercloud_zec_nat_gateway_dnat}
*/
export class ZecNatGatewayDnat extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenlayercloud_zec_nat_gateway_dnat";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZecNatGatewayDnat resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZecNatGatewayDnat to import
  * @param importFromId The id of the existing ZecNatGatewayDnat that should be imported. Refer to the {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zec_nat_gateway_dnat#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZecNatGatewayDnat to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zenlayercloud_zec_nat_gateway_dnat", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zec_nat_gateway_dnat zenlayercloud_zec_nat_gateway_dnat} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZecNatGatewayDnatConfig
  */
  public constructor(scope: Construct, id: string, config: ZecNatGatewayDnatConfig) {
    super(scope, id, {
      terraformResourceType: 'zenlayercloud_zec_nat_gateway_dnat',
      terraformGeneratorMetadata: {
        providerName: 'zenlayercloud',
        providerVersion: '0.2.10',
        providerVersionConstraint: '0.2.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._eipId = config.eipId;
    this._id = config.id;
    this._natGatewayId = config.natGatewayId;
    this._privateIpAddress = config.privateIpAddress;
    this._privatePort = config.privatePort;
    this._protocol = config.protocol;
    this._publicPort = config.publicPort;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // eip_id - computed: false, optional: false, required: true
  private _eipId?: string; 
  public get eipId() {
    return this.getStringAttribute('eip_id');
  }
  public set eipId(value: string) {
    this._eipId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eipIdInput() {
    return this._eipId;
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

  // nat_gateway_id - computed: false, optional: false, required: true
  private _natGatewayId?: string; 
  public get natGatewayId() {
    return this.getStringAttribute('nat_gateway_id');
  }
  public set natGatewayId(value: string) {
    this._natGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get natGatewayIdInput() {
    return this._natGatewayId;
  }

  // private_ip_address - computed: false, optional: false, required: true
  private _privateIpAddress?: string; 
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }
  public set privateIpAddress(value: string) {
    this._privateIpAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressInput() {
    return this._privateIpAddress;
  }

  // private_port - computed: false, optional: true, required: false
  private _privatePort?: string; 
  public get privatePort() {
    return this.getStringAttribute('private_port');
  }
  public set privatePort(value: string) {
    this._privatePort = value;
  }
  public resetPrivatePort() {
    this._privatePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privatePortInput() {
    return this._privatePort;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // public_port - computed: false, optional: true, required: false
  private _publicPort?: string; 
  public get publicPort() {
    return this.getStringAttribute('public_port');
  }
  public set publicPort(value: string) {
    this._publicPort = value;
  }
  public resetPublicPort() {
    this._publicPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicPortInput() {
    return this._publicPort;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      eip_id: cdktf.stringToTerraform(this._eipId),
      id: cdktf.stringToTerraform(this._id),
      nat_gateway_id: cdktf.stringToTerraform(this._natGatewayId),
      private_ip_address: cdktf.stringToTerraform(this._privateIpAddress),
      private_port: cdktf.stringToTerraform(this._privatePort),
      protocol: cdktf.stringToTerraform(this._protocol),
      public_port: cdktf.stringToTerraform(this._publicPort),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      eip_id: {
        value: cdktf.stringToHclTerraform(this._eipId),
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
      nat_gateway_id: {
        value: cdktf.stringToHclTerraform(this._natGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_ip_address: {
        value: cdktf.stringToHclTerraform(this._privateIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_port: {
        value: cdktf.stringToHclTerraform(this._privatePort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_port: {
        value: cdktf.stringToHclTerraform(this._publicPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
