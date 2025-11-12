// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_port_reservation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6LsnPortReservationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_port_reservation#id Cgnv6LsnPortReservation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Inside User Address and Port Range (Inside User IP address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_port_reservation#inside Cgnv6LsnPortReservation#inside}
  */
  readonly inside: string;
  /**
  * Inside End Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_port_reservation#inside_port_end Cgnv6LsnPortReservation#inside_port_end}
  */
  readonly insidePortEnd: number;
  /**
  * Inside Start Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_port_reservation#inside_port_start Cgnv6LsnPortReservation#inside_port_start}
  */
  readonly insidePortStart: number;
  /**
  * NAT IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_port_reservation#nat Cgnv6LsnPortReservation#nat}
  */
  readonly nat: string;
  /**
  * NAT End Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_port_reservation#nat_port_end Cgnv6LsnPortReservation#nat_port_end}
  */
  readonly natPortEnd: number;
  /**
  * NAT Start Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_port_reservation#nat_port_start Cgnv6LsnPortReservation#nat_port_start}
  */
  readonly natPortStart: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_port_reservation#uuid Cgnv6LsnPortReservation#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_port_reservation thunder_cgnv6_lsn_port_reservation}
*/
export class Cgnv6LsnPortReservation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_lsn_port_reservation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6LsnPortReservation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6LsnPortReservation to import
  * @param importFromId The id of the existing Cgnv6LsnPortReservation that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_port_reservation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6LsnPortReservation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_lsn_port_reservation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_port_reservation thunder_cgnv6_lsn_port_reservation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6LsnPortReservationConfig
  */
  public constructor(scope: Construct, id: string, config: Cgnv6LsnPortReservationConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_lsn_port_reservation',
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
    this._id = config.id;
    this._inside = config.inside;
    this._insidePortEnd = config.insidePortEnd;
    this._insidePortStart = config.insidePortStart;
    this._nat = config.nat;
    this._natPortEnd = config.natPortEnd;
    this._natPortStart = config.natPortStart;
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

  // inside_port_end - computed: false, optional: false, required: true
  private _insidePortEnd?: number; 
  public get insidePortEnd() {
    return this.getNumberAttribute('inside_port_end');
  }
  public set insidePortEnd(value: number) {
    this._insidePortEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get insidePortEndInput() {
    return this._insidePortEnd;
  }

  // inside_port_start - computed: false, optional: false, required: true
  private _insidePortStart?: number; 
  public get insidePortStart() {
    return this.getNumberAttribute('inside_port_start');
  }
  public set insidePortStart(value: number) {
    this._insidePortStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get insidePortStartInput() {
    return this._insidePortStart;
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

  // nat_port_end - computed: false, optional: false, required: true
  private _natPortEnd?: number; 
  public get natPortEnd() {
    return this.getNumberAttribute('nat_port_end');
  }
  public set natPortEnd(value: number) {
    this._natPortEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get natPortEndInput() {
    return this._natPortEnd;
  }

  // nat_port_start - computed: false, optional: false, required: true
  private _natPortStart?: number; 
  public get natPortStart() {
    return this.getNumberAttribute('nat_port_start');
  }
  public set natPortStart(value: number) {
    this._natPortStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get natPortStartInput() {
    return this._natPortStart;
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
      inside_port_end: cdktf.numberToTerraform(this._insidePortEnd),
      inside_port_start: cdktf.numberToTerraform(this._insidePortStart),
      nat: cdktf.stringToTerraform(this._nat),
      nat_port_end: cdktf.numberToTerraform(this._natPortEnd),
      nat_port_start: cdktf.numberToTerraform(this._natPortStart),
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
      inside_port_end: {
        value: cdktf.numberToHclTerraform(this._insidePortEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      inside_port_start: {
        value: cdktf.numberToHclTerraform(this._insidePortStart),
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
      nat_port_end: {
        value: cdktf.numberToHclTerraform(this._natPortEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nat_port_start: {
        value: cdktf.numberToHclTerraform(this._natPortStart),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
