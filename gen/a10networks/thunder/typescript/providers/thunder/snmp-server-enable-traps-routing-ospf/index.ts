// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_ospf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnmpServerEnableTrapsRoutingOspfAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_ospf#id SnmpServerEnableTrapsRoutingOspfA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable ospfIfAuthFailure traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_ospf#ospfifauthfailure SnmpServerEnableTrapsRoutingOspfA#ospfifauthfailure}
  */
  readonly ospfifauthfailure?: number;
  /**
  * Enable ospfIfConfigError traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_ospf#ospfifconfigerror SnmpServerEnableTrapsRoutingOspfA#ospfifconfigerror}
  */
  readonly ospfifconfigerror?: number;
  /**
  * Enable ospfIfRxBadPacket traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_ospf#ospfifrxbadpacket SnmpServerEnableTrapsRoutingOspfA#ospfifrxbadpacket}
  */
  readonly ospfifrxbadpacket?: number;
  /**
  * Enable ospfIfStateChange traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_ospf#ospfifstatechange SnmpServerEnableTrapsRoutingOspfA#ospfifstatechange}
  */
  readonly ospfifstatechange?: number;
  /**
  * Enable ospfLsdbApproachingOverflow traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_ospf#ospflsdbapproachingoverflow SnmpServerEnableTrapsRoutingOspfA#ospflsdbapproachingoverflow}
  */
  readonly ospflsdbapproachingoverflow?: number;
  /**
  * Enable ospfLsdbOverflow traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_ospf#ospflsdboverflow SnmpServerEnableTrapsRoutingOspfA#ospflsdboverflow}
  */
  readonly ospflsdboverflow?: number;
  /**
  * Enable ospfMaxAgeLsa traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_ospf#ospfmaxagelsa SnmpServerEnableTrapsRoutingOspfA#ospfmaxagelsa}
  */
  readonly ospfmaxagelsa?: number;
  /**
  * Enable ospfNbrStateChange traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_ospf#ospfnbrstatechange SnmpServerEnableTrapsRoutingOspfA#ospfnbrstatechange}
  */
  readonly ospfnbrstatechange?: number;
  /**
  * Enable ospfOriginateLsa traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_ospf#ospforiginatelsa SnmpServerEnableTrapsRoutingOspfA#ospforiginatelsa}
  */
  readonly ospforiginatelsa?: number;
  /**
  * Enable ospfTxRetransmit traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_ospf#ospftxretransmit SnmpServerEnableTrapsRoutingOspfA#ospftxretransmit}
  */
  readonly ospftxretransmit?: number;
  /**
  * Enable ospfVirtIfAuthFailure traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_ospf#ospfvirtifauthfailure SnmpServerEnableTrapsRoutingOspfA#ospfvirtifauthfailure}
  */
  readonly ospfvirtifauthfailure?: number;
  /**
  * Enable ospfVirtIfConfigError traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_ospf#ospfvirtifconfigerror SnmpServerEnableTrapsRoutingOspfA#ospfvirtifconfigerror}
  */
  readonly ospfvirtifconfigerror?: number;
  /**
  * Enable ospfVirtIfRxBadPacket traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_ospf#ospfvirtifrxbadpacket SnmpServerEnableTrapsRoutingOspfA#ospfvirtifrxbadpacket}
  */
  readonly ospfvirtifrxbadpacket?: number;
  /**
  * Enable ospfVirtIfStateChange traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_ospf#ospfvirtifstatechange SnmpServerEnableTrapsRoutingOspfA#ospfvirtifstatechange}
  */
  readonly ospfvirtifstatechange?: number;
  /**
  * Enable ospfVirtIfTxRetransmit traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_ospf#ospfvirtiftxretransmit SnmpServerEnableTrapsRoutingOspfA#ospfvirtiftxretransmit}
  */
  readonly ospfvirtiftxretransmit?: number;
  /**
  * Enable ospfVirtNbrStateChange traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_ospf#ospfvirtnbrstatechange SnmpServerEnableTrapsRoutingOspfA#ospfvirtnbrstatechange}
  */
  readonly ospfvirtnbrstatechange?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_ospf#uuid SnmpServerEnableTrapsRoutingOspfA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_ospf thunder_snmp_server_enable_traps_routing_ospf}
*/
export class SnmpServerEnableTrapsRoutingOspfA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_snmp_server_enable_traps_routing_ospf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnmpServerEnableTrapsRoutingOspfA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnmpServerEnableTrapsRoutingOspfA to import
  * @param importFromId The id of the existing SnmpServerEnableTrapsRoutingOspfA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_ospf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnmpServerEnableTrapsRoutingOspfA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_snmp_server_enable_traps_routing_ospf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_ospf thunder_snmp_server_enable_traps_routing_ospf} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnmpServerEnableTrapsRoutingOspfAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SnmpServerEnableTrapsRoutingOspfAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_snmp_server_enable_traps_routing_ospf',
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
    this._ospfifauthfailure = config.ospfifauthfailure;
    this._ospfifconfigerror = config.ospfifconfigerror;
    this._ospfifrxbadpacket = config.ospfifrxbadpacket;
    this._ospfifstatechange = config.ospfifstatechange;
    this._ospflsdbapproachingoverflow = config.ospflsdbapproachingoverflow;
    this._ospflsdboverflow = config.ospflsdboverflow;
    this._ospfmaxagelsa = config.ospfmaxagelsa;
    this._ospfnbrstatechange = config.ospfnbrstatechange;
    this._ospforiginatelsa = config.ospforiginatelsa;
    this._ospftxretransmit = config.ospftxretransmit;
    this._ospfvirtifauthfailure = config.ospfvirtifauthfailure;
    this._ospfvirtifconfigerror = config.ospfvirtifconfigerror;
    this._ospfvirtifrxbadpacket = config.ospfvirtifrxbadpacket;
    this._ospfvirtifstatechange = config.ospfvirtifstatechange;
    this._ospfvirtiftxretransmit = config.ospfvirtiftxretransmit;
    this._ospfvirtnbrstatechange = config.ospfvirtnbrstatechange;
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

  // ospfifauthfailure - computed: false, optional: true, required: false
  private _ospfifauthfailure?: number; 
  public get ospfifauthfailure() {
    return this.getNumberAttribute('ospfifauthfailure');
  }
  public set ospfifauthfailure(value: number) {
    this._ospfifauthfailure = value;
  }
  public resetOspfifauthfailure() {
    this._ospfifauthfailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfifauthfailureInput() {
    return this._ospfifauthfailure;
  }

  // ospfifconfigerror - computed: false, optional: true, required: false
  private _ospfifconfigerror?: number; 
  public get ospfifconfigerror() {
    return this.getNumberAttribute('ospfifconfigerror');
  }
  public set ospfifconfigerror(value: number) {
    this._ospfifconfigerror = value;
  }
  public resetOspfifconfigerror() {
    this._ospfifconfigerror = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfifconfigerrorInput() {
    return this._ospfifconfigerror;
  }

  // ospfifrxbadpacket - computed: false, optional: true, required: false
  private _ospfifrxbadpacket?: number; 
  public get ospfifrxbadpacket() {
    return this.getNumberAttribute('ospfifrxbadpacket');
  }
  public set ospfifrxbadpacket(value: number) {
    this._ospfifrxbadpacket = value;
  }
  public resetOspfifrxbadpacket() {
    this._ospfifrxbadpacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfifrxbadpacketInput() {
    return this._ospfifrxbadpacket;
  }

  // ospfifstatechange - computed: false, optional: true, required: false
  private _ospfifstatechange?: number; 
  public get ospfifstatechange() {
    return this.getNumberAttribute('ospfifstatechange');
  }
  public set ospfifstatechange(value: number) {
    this._ospfifstatechange = value;
  }
  public resetOspfifstatechange() {
    this._ospfifstatechange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfifstatechangeInput() {
    return this._ospfifstatechange;
  }

  // ospflsdbapproachingoverflow - computed: false, optional: true, required: false
  private _ospflsdbapproachingoverflow?: number; 
  public get ospflsdbapproachingoverflow() {
    return this.getNumberAttribute('ospflsdbapproachingoverflow');
  }
  public set ospflsdbapproachingoverflow(value: number) {
    this._ospflsdbapproachingoverflow = value;
  }
  public resetOspflsdbapproachingoverflow() {
    this._ospflsdbapproachingoverflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospflsdbapproachingoverflowInput() {
    return this._ospflsdbapproachingoverflow;
  }

  // ospflsdboverflow - computed: false, optional: true, required: false
  private _ospflsdboverflow?: number; 
  public get ospflsdboverflow() {
    return this.getNumberAttribute('ospflsdboverflow');
  }
  public set ospflsdboverflow(value: number) {
    this._ospflsdboverflow = value;
  }
  public resetOspflsdboverflow() {
    this._ospflsdboverflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospflsdboverflowInput() {
    return this._ospflsdboverflow;
  }

  // ospfmaxagelsa - computed: false, optional: true, required: false
  private _ospfmaxagelsa?: number; 
  public get ospfmaxagelsa() {
    return this.getNumberAttribute('ospfmaxagelsa');
  }
  public set ospfmaxagelsa(value: number) {
    this._ospfmaxagelsa = value;
  }
  public resetOspfmaxagelsa() {
    this._ospfmaxagelsa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfmaxagelsaInput() {
    return this._ospfmaxagelsa;
  }

  // ospfnbrstatechange - computed: false, optional: true, required: false
  private _ospfnbrstatechange?: number; 
  public get ospfnbrstatechange() {
    return this.getNumberAttribute('ospfnbrstatechange');
  }
  public set ospfnbrstatechange(value: number) {
    this._ospfnbrstatechange = value;
  }
  public resetOspfnbrstatechange() {
    this._ospfnbrstatechange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfnbrstatechangeInput() {
    return this._ospfnbrstatechange;
  }

  // ospforiginatelsa - computed: false, optional: true, required: false
  private _ospforiginatelsa?: number; 
  public get ospforiginatelsa() {
    return this.getNumberAttribute('ospforiginatelsa');
  }
  public set ospforiginatelsa(value: number) {
    this._ospforiginatelsa = value;
  }
  public resetOspforiginatelsa() {
    this._ospforiginatelsa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospforiginatelsaInput() {
    return this._ospforiginatelsa;
  }

  // ospftxretransmit - computed: false, optional: true, required: false
  private _ospftxretransmit?: number; 
  public get ospftxretransmit() {
    return this.getNumberAttribute('ospftxretransmit');
  }
  public set ospftxretransmit(value: number) {
    this._ospftxretransmit = value;
  }
  public resetOspftxretransmit() {
    this._ospftxretransmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospftxretransmitInput() {
    return this._ospftxretransmit;
  }

  // ospfvirtifauthfailure - computed: false, optional: true, required: false
  private _ospfvirtifauthfailure?: number; 
  public get ospfvirtifauthfailure() {
    return this.getNumberAttribute('ospfvirtifauthfailure');
  }
  public set ospfvirtifauthfailure(value: number) {
    this._ospfvirtifauthfailure = value;
  }
  public resetOspfvirtifauthfailure() {
    this._ospfvirtifauthfailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfvirtifauthfailureInput() {
    return this._ospfvirtifauthfailure;
  }

  // ospfvirtifconfigerror - computed: false, optional: true, required: false
  private _ospfvirtifconfigerror?: number; 
  public get ospfvirtifconfigerror() {
    return this.getNumberAttribute('ospfvirtifconfigerror');
  }
  public set ospfvirtifconfigerror(value: number) {
    this._ospfvirtifconfigerror = value;
  }
  public resetOspfvirtifconfigerror() {
    this._ospfvirtifconfigerror = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfvirtifconfigerrorInput() {
    return this._ospfvirtifconfigerror;
  }

  // ospfvirtifrxbadpacket - computed: false, optional: true, required: false
  private _ospfvirtifrxbadpacket?: number; 
  public get ospfvirtifrxbadpacket() {
    return this.getNumberAttribute('ospfvirtifrxbadpacket');
  }
  public set ospfvirtifrxbadpacket(value: number) {
    this._ospfvirtifrxbadpacket = value;
  }
  public resetOspfvirtifrxbadpacket() {
    this._ospfvirtifrxbadpacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfvirtifrxbadpacketInput() {
    return this._ospfvirtifrxbadpacket;
  }

  // ospfvirtifstatechange - computed: false, optional: true, required: false
  private _ospfvirtifstatechange?: number; 
  public get ospfvirtifstatechange() {
    return this.getNumberAttribute('ospfvirtifstatechange');
  }
  public set ospfvirtifstatechange(value: number) {
    this._ospfvirtifstatechange = value;
  }
  public resetOspfvirtifstatechange() {
    this._ospfvirtifstatechange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfvirtifstatechangeInput() {
    return this._ospfvirtifstatechange;
  }

  // ospfvirtiftxretransmit - computed: false, optional: true, required: false
  private _ospfvirtiftxretransmit?: number; 
  public get ospfvirtiftxretransmit() {
    return this.getNumberAttribute('ospfvirtiftxretransmit');
  }
  public set ospfvirtiftxretransmit(value: number) {
    this._ospfvirtiftxretransmit = value;
  }
  public resetOspfvirtiftxretransmit() {
    this._ospfvirtiftxretransmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfvirtiftxretransmitInput() {
    return this._ospfvirtiftxretransmit;
  }

  // ospfvirtnbrstatechange - computed: false, optional: true, required: false
  private _ospfvirtnbrstatechange?: number; 
  public get ospfvirtnbrstatechange() {
    return this.getNumberAttribute('ospfvirtnbrstatechange');
  }
  public set ospfvirtnbrstatechange(value: number) {
    this._ospfvirtnbrstatechange = value;
  }
  public resetOspfvirtnbrstatechange() {
    this._ospfvirtnbrstatechange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfvirtnbrstatechangeInput() {
    return this._ospfvirtnbrstatechange;
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
      ospfifauthfailure: cdktf.numberToTerraform(this._ospfifauthfailure),
      ospfifconfigerror: cdktf.numberToTerraform(this._ospfifconfigerror),
      ospfifrxbadpacket: cdktf.numberToTerraform(this._ospfifrxbadpacket),
      ospfifstatechange: cdktf.numberToTerraform(this._ospfifstatechange),
      ospflsdbapproachingoverflow: cdktf.numberToTerraform(this._ospflsdbapproachingoverflow),
      ospflsdboverflow: cdktf.numberToTerraform(this._ospflsdboverflow),
      ospfmaxagelsa: cdktf.numberToTerraform(this._ospfmaxagelsa),
      ospfnbrstatechange: cdktf.numberToTerraform(this._ospfnbrstatechange),
      ospforiginatelsa: cdktf.numberToTerraform(this._ospforiginatelsa),
      ospftxretransmit: cdktf.numberToTerraform(this._ospftxretransmit),
      ospfvirtifauthfailure: cdktf.numberToTerraform(this._ospfvirtifauthfailure),
      ospfvirtifconfigerror: cdktf.numberToTerraform(this._ospfvirtifconfigerror),
      ospfvirtifrxbadpacket: cdktf.numberToTerraform(this._ospfvirtifrxbadpacket),
      ospfvirtifstatechange: cdktf.numberToTerraform(this._ospfvirtifstatechange),
      ospfvirtiftxretransmit: cdktf.numberToTerraform(this._ospfvirtiftxretransmit),
      ospfvirtnbrstatechange: cdktf.numberToTerraform(this._ospfvirtnbrstatechange),
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
      ospfifauthfailure: {
        value: cdktf.numberToHclTerraform(this._ospfifauthfailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ospfifconfigerror: {
        value: cdktf.numberToHclTerraform(this._ospfifconfigerror),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ospfifrxbadpacket: {
        value: cdktf.numberToHclTerraform(this._ospfifrxbadpacket),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ospfifstatechange: {
        value: cdktf.numberToHclTerraform(this._ospfifstatechange),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ospflsdbapproachingoverflow: {
        value: cdktf.numberToHclTerraform(this._ospflsdbapproachingoverflow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ospflsdboverflow: {
        value: cdktf.numberToHclTerraform(this._ospflsdboverflow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ospfmaxagelsa: {
        value: cdktf.numberToHclTerraform(this._ospfmaxagelsa),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ospfnbrstatechange: {
        value: cdktf.numberToHclTerraform(this._ospfnbrstatechange),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ospforiginatelsa: {
        value: cdktf.numberToHclTerraform(this._ospforiginatelsa),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ospftxretransmit: {
        value: cdktf.numberToHclTerraform(this._ospftxretransmit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ospfvirtifauthfailure: {
        value: cdktf.numberToHclTerraform(this._ospfvirtifauthfailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ospfvirtifconfigerror: {
        value: cdktf.numberToHclTerraform(this._ospfvirtifconfigerror),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ospfvirtifrxbadpacket: {
        value: cdktf.numberToHclTerraform(this._ospfvirtifrxbadpacket),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ospfvirtifstatechange: {
        value: cdktf.numberToHclTerraform(this._ospfvirtifstatechange),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ospfvirtiftxretransmit: {
        value: cdktf.numberToHclTerraform(this._ospfvirtiftxretransmit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ospfvirtnbrstatechange: {
        value: cdktf.numberToHclTerraform(this._ospfvirtnbrstatechange),
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
