// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_isis
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnmpServerEnableTrapsRoutingIsisAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_isis#id SnmpServerEnableTrapsRoutingIsisA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable isisAdjacencyChange traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_isis#isisadjacencychange SnmpServerEnableTrapsRoutingIsisA#isisadjacencychange}
  */
  readonly isisadjacencychange?: number;
  /**
  * Enable isisAreaMismatch traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_isis#isisareamismatch SnmpServerEnableTrapsRoutingIsisA#isisareamismatch}
  */
  readonly isisareamismatch?: number;
  /**
  * Enable isisAttemptToExceedMaxSequence traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_isis#isisattempttoexceedmaxsequence SnmpServerEnableTrapsRoutingIsisA#isisattempttoexceedmaxsequence}
  */
  readonly isisattempttoexceedmaxsequence?: number;
  /**
  * Enable isisAuthenticationFailure traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_isis#isisauthenticationfailure SnmpServerEnableTrapsRoutingIsisA#isisauthenticationfailure}
  */
  readonly isisauthenticationfailure?: number;
  /**
  * Enable isisAuthenticationTypeFailure traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_isis#isisauthenticationtypefailure SnmpServerEnableTrapsRoutingIsisA#isisauthenticationtypefailure}
  */
  readonly isisauthenticationtypefailure?: number;
  /**
  * Enable isisCorruptedLSPDetected traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_isis#isiscorruptedlspdetected SnmpServerEnableTrapsRoutingIsisA#isiscorruptedlspdetected}
  */
  readonly isiscorruptedlspdetected?: number;
  /**
  * Enable isisDatabaseOverload traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_isis#isisdatabaseoverload SnmpServerEnableTrapsRoutingIsisA#isisdatabaseoverload}
  */
  readonly isisdatabaseoverload?: number;
  /**
  * Enable isisIDLenMismatch traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_isis#isisidlenmismatch SnmpServerEnableTrapsRoutingIsisA#isisidlenmismatch}
  */
  readonly isisidlenmismatch?: number;
  /**
  * Enable isisLSPErrorDetected traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_isis#isislsperrordetected SnmpServerEnableTrapsRoutingIsisA#isislsperrordetected}
  */
  readonly isislsperrordetected?: number;
  /**
  * Enable isisLSPTooLargeToPropagate traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_isis#isislsptoolargetopropagate SnmpServerEnableTrapsRoutingIsisA#isislsptoolargetopropagate}
  */
  readonly isislsptoolargetopropagate?: number;
  /**
  * Enable isisManualAddressDrops traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_isis#isismanualaddressdrops SnmpServerEnableTrapsRoutingIsisA#isismanualaddressdrops}
  */
  readonly isismanualaddressdrops?: number;
  /**
  * Enable isisMaxAreaAddressesMismatch traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_isis#isismaxareaaddressesmismatch SnmpServerEnableTrapsRoutingIsisA#isismaxareaaddressesmismatch}
  */
  readonly isismaxareaaddressesmismatch?: number;
  /**
  * Enable isisOriginatingLSPBufferSizeMismatch traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_isis#isisoriginatinglspbuffersizemismatch SnmpServerEnableTrapsRoutingIsisA#isisoriginatinglspbuffersizemismatch}
  */
  readonly isisoriginatinglspbuffersizemismatch?: number;
  /**
  * Enable isisOwnLSPPurge traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_isis#isisownlsppurge SnmpServerEnableTrapsRoutingIsisA#isisownlsppurge}
  */
  readonly isisownlsppurge?: number;
  /**
  * Enable isisProtocolsSupportedMismatch traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_isis#isisprotocolssupportedmismatch SnmpServerEnableTrapsRoutingIsisA#isisprotocolssupportedmismatch}
  */
  readonly isisprotocolssupportedmismatch?: number;
  /**
  * Enable isisRejectedAdjacency traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_isis#isisrejectedadjacency SnmpServerEnableTrapsRoutingIsisA#isisrejectedadjacency}
  */
  readonly isisrejectedadjacency?: number;
  /**
  * Enable isisSequenceNumberSkip traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_isis#isissequencenumberskip SnmpServerEnableTrapsRoutingIsisA#isissequencenumberskip}
  */
  readonly isissequencenumberskip?: number;
  /**
  * Enable isisVersionSkew traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_isis#isisversionskew SnmpServerEnableTrapsRoutingIsisA#isisversionskew}
  */
  readonly isisversionskew?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_isis#uuid SnmpServerEnableTrapsRoutingIsisA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_isis thunder_snmp_server_enable_traps_routing_isis}
*/
export class SnmpServerEnableTrapsRoutingIsisA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_snmp_server_enable_traps_routing_isis";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnmpServerEnableTrapsRoutingIsisA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnmpServerEnableTrapsRoutingIsisA to import
  * @param importFromId The id of the existing SnmpServerEnableTrapsRoutingIsisA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_isis#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnmpServerEnableTrapsRoutingIsisA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_snmp_server_enable_traps_routing_isis", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_isis thunder_snmp_server_enable_traps_routing_isis} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnmpServerEnableTrapsRoutingIsisAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SnmpServerEnableTrapsRoutingIsisAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_snmp_server_enable_traps_routing_isis',
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
    this._isisadjacencychange = config.isisadjacencychange;
    this._isisareamismatch = config.isisareamismatch;
    this._isisattempttoexceedmaxsequence = config.isisattempttoexceedmaxsequence;
    this._isisauthenticationfailure = config.isisauthenticationfailure;
    this._isisauthenticationtypefailure = config.isisauthenticationtypefailure;
    this._isiscorruptedlspdetected = config.isiscorruptedlspdetected;
    this._isisdatabaseoverload = config.isisdatabaseoverload;
    this._isisidlenmismatch = config.isisidlenmismatch;
    this._isislsperrordetected = config.isislsperrordetected;
    this._isislsptoolargetopropagate = config.isislsptoolargetopropagate;
    this._isismanualaddressdrops = config.isismanualaddressdrops;
    this._isismaxareaaddressesmismatch = config.isismaxareaaddressesmismatch;
    this._isisoriginatinglspbuffersizemismatch = config.isisoriginatinglspbuffersizemismatch;
    this._isisownlsppurge = config.isisownlsppurge;
    this._isisprotocolssupportedmismatch = config.isisprotocolssupportedmismatch;
    this._isisrejectedadjacency = config.isisrejectedadjacency;
    this._isissequencenumberskip = config.isissequencenumberskip;
    this._isisversionskew = config.isisversionskew;
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

  // isisadjacencychange - computed: false, optional: true, required: false
  private _isisadjacencychange?: number; 
  public get isisadjacencychange() {
    return this.getNumberAttribute('isisadjacencychange');
  }
  public set isisadjacencychange(value: number) {
    this._isisadjacencychange = value;
  }
  public resetIsisadjacencychange() {
    this._isisadjacencychange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisadjacencychangeInput() {
    return this._isisadjacencychange;
  }

  // isisareamismatch - computed: false, optional: true, required: false
  private _isisareamismatch?: number; 
  public get isisareamismatch() {
    return this.getNumberAttribute('isisareamismatch');
  }
  public set isisareamismatch(value: number) {
    this._isisareamismatch = value;
  }
  public resetIsisareamismatch() {
    this._isisareamismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisareamismatchInput() {
    return this._isisareamismatch;
  }

  // isisattempttoexceedmaxsequence - computed: false, optional: true, required: false
  private _isisattempttoexceedmaxsequence?: number; 
  public get isisattempttoexceedmaxsequence() {
    return this.getNumberAttribute('isisattempttoexceedmaxsequence');
  }
  public set isisattempttoexceedmaxsequence(value: number) {
    this._isisattempttoexceedmaxsequence = value;
  }
  public resetIsisattempttoexceedmaxsequence() {
    this._isisattempttoexceedmaxsequence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisattempttoexceedmaxsequenceInput() {
    return this._isisattempttoexceedmaxsequence;
  }

  // isisauthenticationfailure - computed: false, optional: true, required: false
  private _isisauthenticationfailure?: number; 
  public get isisauthenticationfailure() {
    return this.getNumberAttribute('isisauthenticationfailure');
  }
  public set isisauthenticationfailure(value: number) {
    this._isisauthenticationfailure = value;
  }
  public resetIsisauthenticationfailure() {
    this._isisauthenticationfailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisauthenticationfailureInput() {
    return this._isisauthenticationfailure;
  }

  // isisauthenticationtypefailure - computed: false, optional: true, required: false
  private _isisauthenticationtypefailure?: number; 
  public get isisauthenticationtypefailure() {
    return this.getNumberAttribute('isisauthenticationtypefailure');
  }
  public set isisauthenticationtypefailure(value: number) {
    this._isisauthenticationtypefailure = value;
  }
  public resetIsisauthenticationtypefailure() {
    this._isisauthenticationtypefailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisauthenticationtypefailureInput() {
    return this._isisauthenticationtypefailure;
  }

  // isiscorruptedlspdetected - computed: false, optional: true, required: false
  private _isiscorruptedlspdetected?: number; 
  public get isiscorruptedlspdetected() {
    return this.getNumberAttribute('isiscorruptedlspdetected');
  }
  public set isiscorruptedlspdetected(value: number) {
    this._isiscorruptedlspdetected = value;
  }
  public resetIsiscorruptedlspdetected() {
    this._isiscorruptedlspdetected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isiscorruptedlspdetectedInput() {
    return this._isiscorruptedlspdetected;
  }

  // isisdatabaseoverload - computed: false, optional: true, required: false
  private _isisdatabaseoverload?: number; 
  public get isisdatabaseoverload() {
    return this.getNumberAttribute('isisdatabaseoverload');
  }
  public set isisdatabaseoverload(value: number) {
    this._isisdatabaseoverload = value;
  }
  public resetIsisdatabaseoverload() {
    this._isisdatabaseoverload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisdatabaseoverloadInput() {
    return this._isisdatabaseoverload;
  }

  // isisidlenmismatch - computed: false, optional: true, required: false
  private _isisidlenmismatch?: number; 
  public get isisidlenmismatch() {
    return this.getNumberAttribute('isisidlenmismatch');
  }
  public set isisidlenmismatch(value: number) {
    this._isisidlenmismatch = value;
  }
  public resetIsisidlenmismatch() {
    this._isisidlenmismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisidlenmismatchInput() {
    return this._isisidlenmismatch;
  }

  // isislsperrordetected - computed: false, optional: true, required: false
  private _isislsperrordetected?: number; 
  public get isislsperrordetected() {
    return this.getNumberAttribute('isislsperrordetected');
  }
  public set isislsperrordetected(value: number) {
    this._isislsperrordetected = value;
  }
  public resetIsislsperrordetected() {
    this._isislsperrordetected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isislsperrordetectedInput() {
    return this._isislsperrordetected;
  }

  // isislsptoolargetopropagate - computed: false, optional: true, required: false
  private _isislsptoolargetopropagate?: number; 
  public get isislsptoolargetopropagate() {
    return this.getNumberAttribute('isislsptoolargetopropagate');
  }
  public set isislsptoolargetopropagate(value: number) {
    this._isislsptoolargetopropagate = value;
  }
  public resetIsislsptoolargetopropagate() {
    this._isislsptoolargetopropagate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isislsptoolargetopropagateInput() {
    return this._isislsptoolargetopropagate;
  }

  // isismanualaddressdrops - computed: false, optional: true, required: false
  private _isismanualaddressdrops?: number; 
  public get isismanualaddressdrops() {
    return this.getNumberAttribute('isismanualaddressdrops');
  }
  public set isismanualaddressdrops(value: number) {
    this._isismanualaddressdrops = value;
  }
  public resetIsismanualaddressdrops() {
    this._isismanualaddressdrops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isismanualaddressdropsInput() {
    return this._isismanualaddressdrops;
  }

  // isismaxareaaddressesmismatch - computed: false, optional: true, required: false
  private _isismaxareaaddressesmismatch?: number; 
  public get isismaxareaaddressesmismatch() {
    return this.getNumberAttribute('isismaxareaaddressesmismatch');
  }
  public set isismaxareaaddressesmismatch(value: number) {
    this._isismaxareaaddressesmismatch = value;
  }
  public resetIsismaxareaaddressesmismatch() {
    this._isismaxareaaddressesmismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isismaxareaaddressesmismatchInput() {
    return this._isismaxareaaddressesmismatch;
  }

  // isisoriginatinglspbuffersizemismatch - computed: false, optional: true, required: false
  private _isisoriginatinglspbuffersizemismatch?: number; 
  public get isisoriginatinglspbuffersizemismatch() {
    return this.getNumberAttribute('isisoriginatinglspbuffersizemismatch');
  }
  public set isisoriginatinglspbuffersizemismatch(value: number) {
    this._isisoriginatinglspbuffersizemismatch = value;
  }
  public resetIsisoriginatinglspbuffersizemismatch() {
    this._isisoriginatinglspbuffersizemismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisoriginatinglspbuffersizemismatchInput() {
    return this._isisoriginatinglspbuffersizemismatch;
  }

  // isisownlsppurge - computed: false, optional: true, required: false
  private _isisownlsppurge?: number; 
  public get isisownlsppurge() {
    return this.getNumberAttribute('isisownlsppurge');
  }
  public set isisownlsppurge(value: number) {
    this._isisownlsppurge = value;
  }
  public resetIsisownlsppurge() {
    this._isisownlsppurge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisownlsppurgeInput() {
    return this._isisownlsppurge;
  }

  // isisprotocolssupportedmismatch - computed: false, optional: true, required: false
  private _isisprotocolssupportedmismatch?: number; 
  public get isisprotocolssupportedmismatch() {
    return this.getNumberAttribute('isisprotocolssupportedmismatch');
  }
  public set isisprotocolssupportedmismatch(value: number) {
    this._isisprotocolssupportedmismatch = value;
  }
  public resetIsisprotocolssupportedmismatch() {
    this._isisprotocolssupportedmismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisprotocolssupportedmismatchInput() {
    return this._isisprotocolssupportedmismatch;
  }

  // isisrejectedadjacency - computed: false, optional: true, required: false
  private _isisrejectedadjacency?: number; 
  public get isisrejectedadjacency() {
    return this.getNumberAttribute('isisrejectedadjacency');
  }
  public set isisrejectedadjacency(value: number) {
    this._isisrejectedadjacency = value;
  }
  public resetIsisrejectedadjacency() {
    this._isisrejectedadjacency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisrejectedadjacencyInput() {
    return this._isisrejectedadjacency;
  }

  // isissequencenumberskip - computed: false, optional: true, required: false
  private _isissequencenumberskip?: number; 
  public get isissequencenumberskip() {
    return this.getNumberAttribute('isissequencenumberskip');
  }
  public set isissequencenumberskip(value: number) {
    this._isissequencenumberskip = value;
  }
  public resetIsissequencenumberskip() {
    this._isissequencenumberskip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isissequencenumberskipInput() {
    return this._isissequencenumberskip;
  }

  // isisversionskew - computed: false, optional: true, required: false
  private _isisversionskew?: number; 
  public get isisversionskew() {
    return this.getNumberAttribute('isisversionskew');
  }
  public set isisversionskew(value: number) {
    this._isisversionskew = value;
  }
  public resetIsisversionskew() {
    this._isisversionskew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisversionskewInput() {
    return this._isisversionskew;
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
      isisadjacencychange: cdktf.numberToTerraform(this._isisadjacencychange),
      isisareamismatch: cdktf.numberToTerraform(this._isisareamismatch),
      isisattempttoexceedmaxsequence: cdktf.numberToTerraform(this._isisattempttoexceedmaxsequence),
      isisauthenticationfailure: cdktf.numberToTerraform(this._isisauthenticationfailure),
      isisauthenticationtypefailure: cdktf.numberToTerraform(this._isisauthenticationtypefailure),
      isiscorruptedlspdetected: cdktf.numberToTerraform(this._isiscorruptedlspdetected),
      isisdatabaseoverload: cdktf.numberToTerraform(this._isisdatabaseoverload),
      isisidlenmismatch: cdktf.numberToTerraform(this._isisidlenmismatch),
      isislsperrordetected: cdktf.numberToTerraform(this._isislsperrordetected),
      isislsptoolargetopropagate: cdktf.numberToTerraform(this._isislsptoolargetopropagate),
      isismanualaddressdrops: cdktf.numberToTerraform(this._isismanualaddressdrops),
      isismaxareaaddressesmismatch: cdktf.numberToTerraform(this._isismaxareaaddressesmismatch),
      isisoriginatinglspbuffersizemismatch: cdktf.numberToTerraform(this._isisoriginatinglspbuffersizemismatch),
      isisownlsppurge: cdktf.numberToTerraform(this._isisownlsppurge),
      isisprotocolssupportedmismatch: cdktf.numberToTerraform(this._isisprotocolssupportedmismatch),
      isisrejectedadjacency: cdktf.numberToTerraform(this._isisrejectedadjacency),
      isissequencenumberskip: cdktf.numberToTerraform(this._isissequencenumberskip),
      isisversionskew: cdktf.numberToTerraform(this._isisversionskew),
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
      isisadjacencychange: {
        value: cdktf.numberToHclTerraform(this._isisadjacencychange),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      isisareamismatch: {
        value: cdktf.numberToHclTerraform(this._isisareamismatch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      isisattempttoexceedmaxsequence: {
        value: cdktf.numberToHclTerraform(this._isisattempttoexceedmaxsequence),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      isisauthenticationfailure: {
        value: cdktf.numberToHclTerraform(this._isisauthenticationfailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      isisauthenticationtypefailure: {
        value: cdktf.numberToHclTerraform(this._isisauthenticationtypefailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      isiscorruptedlspdetected: {
        value: cdktf.numberToHclTerraform(this._isiscorruptedlspdetected),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      isisdatabaseoverload: {
        value: cdktf.numberToHclTerraform(this._isisdatabaseoverload),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      isisidlenmismatch: {
        value: cdktf.numberToHclTerraform(this._isisidlenmismatch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      isislsperrordetected: {
        value: cdktf.numberToHclTerraform(this._isislsperrordetected),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      isislsptoolargetopropagate: {
        value: cdktf.numberToHclTerraform(this._isislsptoolargetopropagate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      isismanualaddressdrops: {
        value: cdktf.numberToHclTerraform(this._isismanualaddressdrops),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      isismaxareaaddressesmismatch: {
        value: cdktf.numberToHclTerraform(this._isismaxareaaddressesmismatch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      isisoriginatinglspbuffersizemismatch: {
        value: cdktf.numberToHclTerraform(this._isisoriginatinglspbuffersizemismatch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      isisownlsppurge: {
        value: cdktf.numberToHclTerraform(this._isisownlsppurge),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      isisprotocolssupportedmismatch: {
        value: cdktf.numberToHclTerraform(this._isisprotocolssupportedmismatch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      isisrejectedadjacency: {
        value: cdktf.numberToHclTerraform(this._isisrejectedadjacency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      isissequencenumberskip: {
        value: cdktf.numberToHclTerraform(this._isissequencenumberskip),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      isisversionskew: {
        value: cdktf.numberToHclTerraform(this._isisversionskew),
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
