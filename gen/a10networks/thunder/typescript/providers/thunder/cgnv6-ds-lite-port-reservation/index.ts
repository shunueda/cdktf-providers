// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_ds_lite_port_reservation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6DsLitePortReservationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_ds_lite_port_reservation#id Cgnv6DsLitePortReservation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Inside User Address and Port Range (DS-Lite Inside User's Tunnel Source IPv6 Address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_ds_lite_port_reservation#inside Cgnv6DsLitePortReservation#inside}
  */
  readonly inside: string;
  /**
  * Inside User IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_ds_lite_port_reservation#inside_addr Cgnv6DsLitePortReservation#inside_addr}
  */
  readonly insideAddr: string;
  /**
  * Inside End Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_ds_lite_port_reservation#inside_end_port Cgnv6DsLitePortReservation#inside_end_port}
  */
  readonly insideEndPort: number;
  /**
  * Inside Start Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_ds_lite_port_reservation#inside_start_port Cgnv6DsLitePortReservation#inside_start_port}
  */
  readonly insideStartPort: number;
  /**
  * NAT Port Range (NAT IP address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_ds_lite_port_reservation#nat Cgnv6DsLitePortReservation#nat}
  */
  readonly nat: string;
  /**
  * NAT End Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_ds_lite_port_reservation#nat_end_port Cgnv6DsLitePortReservation#nat_end_port}
  */
  readonly natEndPort: number;
  /**
  * NAT Start Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_ds_lite_port_reservation#nat_start_port Cgnv6DsLitePortReservation#nat_start_port}
  */
  readonly natStartPort: number;
  /**
  * DS-Lite Inside User's Tunnel Destination IPv6 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_ds_lite_port_reservation#tunnel_dest_address Cgnv6DsLitePortReservation#tunnel_dest_address}
  */
  readonly tunnelDestAddress: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_ds_lite_port_reservation#uuid Cgnv6DsLitePortReservation#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_ds_lite_port_reservation thunder_cgnv6_ds_lite_port_reservation}
*/
export class Cgnv6DsLitePortReservation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_ds_lite_port_reservation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6DsLitePortReservation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6DsLitePortReservation to import
  * @param importFromId The id of the existing Cgnv6DsLitePortReservation that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_ds_lite_port_reservation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6DsLitePortReservation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_ds_lite_port_reservation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_ds_lite_port_reservation thunder_cgnv6_ds_lite_port_reservation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6DsLitePortReservationConfig
  */
  public constructor(scope: Construct, id: string, config: Cgnv6DsLitePortReservationConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_ds_lite_port_reservation',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._inside = config.inside;
    this._insideAddr = config.insideAddr;
    this._insideEndPort = config.insideEndPort;
    this._insideStartPort = config.insideStartPort;
    this._nat = config.nat;
    this._natEndPort = config.natEndPort;
    this._natStartPort = config.natStartPort;
    this._tunnelDestAddress = config.tunnelDestAddress;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // inside - computed: false, optional: false, required: true
  private _inside?: string; 
  public get inside() {
    return this.getStringAttribute('inside');
  }
  public set inside(value: string) {
    this._inside = value;
  }
  // Temporarily expose input value. Use with caution.
  public get insideInput() {
    return this._inside;
  }

  // inside_addr - computed: false, optional: false, required: true
  private _insideAddr?: string; 
  public get insideAddr() {
    return this.getStringAttribute('inside_addr');
  }
  public set insideAddr(value: string) {
    this._insideAddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get insideAddrInput() {
    return this._insideAddr;
  }

  // inside_end_port - computed: false, optional: false, required: true
  private _insideEndPort?: number; 
  public get insideEndPort() {
    return this.getNumberAttribute('inside_end_port');
  }
  public set insideEndPort(value: number) {
    this._insideEndPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get insideEndPortInput() {
    return this._insideEndPort;
  }

  // inside_start_port - computed: false, optional: false, required: true
  private _insideStartPort?: number; 
  public get insideStartPort() {
    return this.getNumberAttribute('inside_start_port');
  }
  public set insideStartPort(value: number) {
    this._insideStartPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get insideStartPortInput() {
    return this._insideStartPort;
  }

  // nat - computed: false, optional: false, required: true
  private _nat?: string; 
  public get nat() {
    return this.getStringAttribute('nat');
  }
  public set nat(value: string) {
    this._nat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get natInput() {
    return this._nat;
  }

  // nat_end_port - computed: false, optional: false, required: true
  private _natEndPort?: number; 
  public get natEndPort() {
    return this.getNumberAttribute('nat_end_port');
  }
  public set natEndPort(value: number) {
    this._natEndPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get natEndPortInput() {
    return this._natEndPort;
  }

  // nat_start_port - computed: false, optional: false, required: true
  private _natStartPort?: number; 
  public get natStartPort() {
    return this.getNumberAttribute('nat_start_port');
  }
  public set natStartPort(value: number) {
    this._natStartPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get natStartPortInput() {
    return this._natStartPort;
  }

  // tunnel_dest_address - computed: false, optional: false, required: true
  private _tunnelDestAddress?: string; 
  public get tunnelDestAddress() {
    return this.getStringAttribute('tunnel_dest_address');
  }
  public set tunnelDestAddress(value: string) {
    this._tunnelDestAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelDestAddressInput() {
    return this._tunnelDestAddress;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      inside: cdktf.stringToTerraform(this._inside),
      inside_addr: cdktf.stringToTerraform(this._insideAddr),
      inside_end_port: cdktf.numberToTerraform(this._insideEndPort),
      inside_start_port: cdktf.numberToTerraform(this._insideStartPort),
      nat: cdktf.stringToTerraform(this._nat),
      nat_end_port: cdktf.numberToTerraform(this._natEndPort),
      nat_start_port: cdktf.numberToTerraform(this._natStartPort),
      tunnel_dest_address: cdktf.stringToTerraform(this._tunnelDestAddress),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inside: {
        value: cdktf.stringToHclTerraform(this._inside),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inside_addr: {
        value: cdktf.stringToHclTerraform(this._insideAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inside_end_port: {
        value: cdktf.numberToHclTerraform(this._insideEndPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      inside_start_port: {
        value: cdktf.numberToHclTerraform(this._insideStartPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nat: {
        value: cdktf.stringToHclTerraform(this._nat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_end_port: {
        value: cdktf.numberToHclTerraform(this._natEndPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nat_start_port: {
        value: cdktf.numberToHclTerraform(this._natStartPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tunnel_dest_address: {
        value: cdktf.stringToHclTerraform(this._tunnelDestAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
