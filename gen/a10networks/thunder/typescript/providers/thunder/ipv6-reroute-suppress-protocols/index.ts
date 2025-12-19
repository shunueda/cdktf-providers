// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ipv6_reroute_suppress_protocols
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ipv6RerouteSuppressProtocolsAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ipv6_reroute_suppress_protocols#connected Ipv6RerouteSuppressProtocolsA#connected}
  */
  readonly connected?: number;
  /**
  * EBGP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ipv6_reroute_suppress_protocols#ebgp Ipv6RerouteSuppressProtocolsA#ebgp}
  */
  readonly ebgp?: number;
  /**
  * IBGP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ipv6_reroute_suppress_protocols#ibgp Ipv6RerouteSuppressProtocolsA#ibgp}
  */
  readonly ibgp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ipv6_reroute_suppress_protocols#id Ipv6RerouteSuppressProtocolsA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ISIS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ipv6_reroute_suppress_protocols#isis Ipv6RerouteSuppressProtocolsA#isis}
  */
  readonly isis?: number;
  /**
  * OSPF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ipv6_reroute_suppress_protocols#ospf Ipv6RerouteSuppressProtocolsA#ospf}
  */
  readonly ospf?: number;
  /**
  * RIP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ipv6_reroute_suppress_protocols#rip Ipv6RerouteSuppressProtocolsA#rip}
  */
  readonly rip?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ipv6_reroute_suppress_protocols#static Ipv6RerouteSuppressProtocolsA#static}
  */
  readonly static?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ipv6_reroute_suppress_protocols#uuid Ipv6RerouteSuppressProtocolsA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ipv6_reroute_suppress_protocols thunder_ipv6_reroute_suppress_protocols}
*/
export class Ipv6RerouteSuppressProtocolsA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ipv6_reroute_suppress_protocols";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ipv6RerouteSuppressProtocolsA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ipv6RerouteSuppressProtocolsA to import
  * @param importFromId The id of the existing Ipv6RerouteSuppressProtocolsA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ipv6_reroute_suppress_protocols#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ipv6RerouteSuppressProtocolsA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ipv6_reroute_suppress_protocols", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ipv6_reroute_suppress_protocols thunder_ipv6_reroute_suppress_protocols} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ipv6RerouteSuppressProtocolsAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Ipv6RerouteSuppressProtocolsAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ipv6_reroute_suppress_protocols',
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
    this._connected = config.connected;
    this._ebgp = config.ebgp;
    this._ibgp = config.ibgp;
    this._id = config.id;
    this._isis = config.isis;
    this._ospf = config.ospf;
    this._rip = config.rip;
    this._static = config.static;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connected - computed: false, optional: true, required: false
  private _connected?: number; 
  public get connected() {
    return this.getNumberAttribute('connected');
  }
  public set connected(value: number) {
    this._connected = value;
  }
  public resetConnected() {
    this._connected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectedInput() {
    return this._connected;
  }

  // ebgp - computed: false, optional: true, required: false
  private _ebgp?: number; 
  public get ebgp() {
    return this.getNumberAttribute('ebgp');
  }
  public set ebgp(value: number) {
    this._ebgp = value;
  }
  public resetEbgp() {
    this._ebgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebgpInput() {
    return this._ebgp;
  }

  // ibgp - computed: false, optional: true, required: false
  private _ibgp?: number; 
  public get ibgp() {
    return this.getNumberAttribute('ibgp');
  }
  public set ibgp(value: number) {
    this._ibgp = value;
  }
  public resetIbgp() {
    this._ibgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibgpInput() {
    return this._ibgp;
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

  // isis - computed: false, optional: true, required: false
  private _isis?: number; 
  public get isis() {
    return this.getNumberAttribute('isis');
  }
  public set isis(value: number) {
    this._isis = value;
  }
  public resetIsis() {
    this._isis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisInput() {
    return this._isis;
  }

  // ospf - computed: false, optional: true, required: false
  private _ospf?: number; 
  public get ospf() {
    return this.getNumberAttribute('ospf');
  }
  public set ospf(value: number) {
    this._ospf = value;
  }
  public resetOspf() {
    this._ospf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfInput() {
    return this._ospf;
  }

  // rip - computed: false, optional: true, required: false
  private _rip?: number; 
  public get rip() {
    return this.getNumberAttribute('rip');
  }
  public set rip(value: number) {
    this._rip = value;
  }
  public resetRip() {
    this._rip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ripInput() {
    return this._rip;
  }

  // static - computed: false, optional: true, required: false
  private _static?: number; 
  public get static() {
    return this.getNumberAttribute('static');
  }
  public set static(value: number) {
    this._static = value;
  }
  public resetStatic() {
    this._static = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticInput() {
    return this._static;
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
      connected: cdktf.numberToTerraform(this._connected),
      ebgp: cdktf.numberToTerraform(this._ebgp),
      ibgp: cdktf.numberToTerraform(this._ibgp),
      id: cdktf.stringToTerraform(this._id),
      isis: cdktf.numberToTerraform(this._isis),
      ospf: cdktf.numberToTerraform(this._ospf),
      rip: cdktf.numberToTerraform(this._rip),
      static: cdktf.numberToTerraform(this._static),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connected: {
        value: cdktf.numberToHclTerraform(this._connected),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ebgp: {
        value: cdktf.numberToHclTerraform(this._ebgp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ibgp: {
        value: cdktf.numberToHclTerraform(this._ibgp),
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
      isis: {
        value: cdktf.numberToHclTerraform(this._isis),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ospf: {
        value: cdktf.numberToHclTerraform(this._ospf),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rip: {
        value: cdktf.numberToHclTerraform(this._rip),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      static: {
        value: cdktf.numberToHclTerraform(this._static),
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
