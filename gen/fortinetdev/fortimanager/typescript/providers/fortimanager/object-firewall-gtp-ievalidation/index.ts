// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_ievalidation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFirewallGtpIevalidationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_ievalidation#adom ObjectFirewallGtpIevalidation#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_ievalidation#apn_restriction ObjectFirewallGtpIevalidation#apn_restriction}
  */
  readonly apnRestriction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_ievalidation#charging_gateway_addr ObjectFirewallGtpIevalidation#charging_gateway_addr}
  */
  readonly chargingGatewayAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_ievalidation#charging_id ObjectFirewallGtpIevalidation#charging_id}
  */
  readonly chargingId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_ievalidation#end_user_addr ObjectFirewallGtpIevalidation#end_user_addr}
  */
  readonly endUserAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_ievalidation#gsn_addr ObjectFirewallGtpIevalidation#gsn_addr}
  */
  readonly gsnAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_ievalidation#gtp ObjectFirewallGtpIevalidation#gtp}
  */
  readonly gtp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_ievalidation#id ObjectFirewallGtpIevalidation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_ievalidation#imei ObjectFirewallGtpIevalidation#imei}
  */
  readonly imei?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_ievalidation#imsi ObjectFirewallGtpIevalidation#imsi}
  */
  readonly imsi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_ievalidation#mm_context ObjectFirewallGtpIevalidation#mm_context}
  */
  readonly mmContext?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_ievalidation#ms_tzone ObjectFirewallGtpIevalidation#ms_tzone}
  */
  readonly msTzone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_ievalidation#ms_validated ObjectFirewallGtpIevalidation#ms_validated}
  */
  readonly msValidated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_ievalidation#msisdn ObjectFirewallGtpIevalidation#msisdn}
  */
  readonly msisdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_ievalidation#nsapi ObjectFirewallGtpIevalidation#nsapi}
  */
  readonly nsapi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_ievalidation#pdp_context ObjectFirewallGtpIevalidation#pdp_context}
  */
  readonly pdpContext?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_ievalidation#qos_profile ObjectFirewallGtpIevalidation#qos_profile}
  */
  readonly qosProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_ievalidation#rai ObjectFirewallGtpIevalidation#rai}
  */
  readonly rai?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_ievalidation#rat_type ObjectFirewallGtpIevalidation#rat_type}
  */
  readonly ratType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_ievalidation#reordering_required ObjectFirewallGtpIevalidation#reordering_required}
  */
  readonly reorderingRequired?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_ievalidation#scopetype ObjectFirewallGtpIevalidation#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_ievalidation#selection_mode ObjectFirewallGtpIevalidation#selection_mode}
  */
  readonly selectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_ievalidation#uli ObjectFirewallGtpIevalidation#uli}
  */
  readonly uli?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_ievalidation fortimanager_object_firewall_gtp_ievalidation}
*/
export class ObjectFirewallGtpIevalidation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_firewall_gtp_ievalidation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFirewallGtpIevalidation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFirewallGtpIevalidation to import
  * @param importFromId The id of the existing ObjectFirewallGtpIevalidation that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_ievalidation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFirewallGtpIevalidation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_firewall_gtp_ievalidation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_ievalidation fortimanager_object_firewall_gtp_ievalidation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFirewallGtpIevalidationConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectFirewallGtpIevalidationConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_firewall_gtp_ievalidation',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._apnRestriction = config.apnRestriction;
    this._chargingGatewayAddr = config.chargingGatewayAddr;
    this._chargingId = config.chargingId;
    this._endUserAddr = config.endUserAddr;
    this._gsnAddr = config.gsnAddr;
    this._gtp = config.gtp;
    this._id = config.id;
    this._imei = config.imei;
    this._imsi = config.imsi;
    this._mmContext = config.mmContext;
    this._msTzone = config.msTzone;
    this._msValidated = config.msValidated;
    this._msisdn = config.msisdn;
    this._nsapi = config.nsapi;
    this._pdpContext = config.pdpContext;
    this._qosProfile = config.qosProfile;
    this._rai = config.rai;
    this._ratType = config.ratType;
    this._reorderingRequired = config.reorderingRequired;
    this._scopetype = config.scopetype;
    this._selectionMode = config.selectionMode;
    this._uli = config.uli;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // apn_restriction - computed: false, optional: true, required: false
  private _apnRestriction?: string; 
  public get apnRestriction() {
    return this.getStringAttribute('apn_restriction');
  }
  public set apnRestriction(value: string) {
    this._apnRestriction = value;
  }
  public resetApnRestriction() {
    this._apnRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apnRestrictionInput() {
    return this._apnRestriction;
  }

  // charging_gateway_addr - computed: false, optional: true, required: false
  private _chargingGatewayAddr?: string; 
  public get chargingGatewayAddr() {
    return this.getStringAttribute('charging_gateway_addr');
  }
  public set chargingGatewayAddr(value: string) {
    this._chargingGatewayAddr = value;
  }
  public resetChargingGatewayAddr() {
    this._chargingGatewayAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chargingGatewayAddrInput() {
    return this._chargingGatewayAddr;
  }

  // charging_id - computed: false, optional: true, required: false
  private _chargingId?: string; 
  public get chargingId() {
    return this.getStringAttribute('charging_id');
  }
  public set chargingId(value: string) {
    this._chargingId = value;
  }
  public resetChargingId() {
    this._chargingId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chargingIdInput() {
    return this._chargingId;
  }

  // end_user_addr - computed: false, optional: true, required: false
  private _endUserAddr?: string; 
  public get endUserAddr() {
    return this.getStringAttribute('end_user_addr');
  }
  public set endUserAddr(value: string) {
    this._endUserAddr = value;
  }
  public resetEndUserAddr() {
    this._endUserAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endUserAddrInput() {
    return this._endUserAddr;
  }

  // gsn_addr - computed: false, optional: true, required: false
  private _gsnAddr?: string; 
  public get gsnAddr() {
    return this.getStringAttribute('gsn_addr');
  }
  public set gsnAddr(value: string) {
    this._gsnAddr = value;
  }
  public resetGsnAddr() {
    this._gsnAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gsnAddrInput() {
    return this._gsnAddr;
  }

  // gtp - computed: false, optional: false, required: true
  private _gtp?: string; 
  public get gtp() {
    return this.getStringAttribute('gtp');
  }
  public set gtp(value: string) {
    this._gtp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpInput() {
    return this._gtp;
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

  // imei - computed: false, optional: true, required: false
  private _imei?: string; 
  public get imei() {
    return this.getStringAttribute('imei');
  }
  public set imei(value: string) {
    this._imei = value;
  }
  public resetImei() {
    this._imei = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imeiInput() {
    return this._imei;
  }

  // imsi - computed: false, optional: true, required: false
  private _imsi?: string; 
  public get imsi() {
    return this.getStringAttribute('imsi');
  }
  public set imsi(value: string) {
    this._imsi = value;
  }
  public resetImsi() {
    this._imsi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imsiInput() {
    return this._imsi;
  }

  // mm_context - computed: false, optional: true, required: false
  private _mmContext?: string; 
  public get mmContext() {
    return this.getStringAttribute('mm_context');
  }
  public set mmContext(value: string) {
    this._mmContext = value;
  }
  public resetMmContext() {
    this._mmContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mmContextInput() {
    return this._mmContext;
  }

  // ms_tzone - computed: false, optional: true, required: false
  private _msTzone?: string; 
  public get msTzone() {
    return this.getStringAttribute('ms_tzone');
  }
  public set msTzone(value: string) {
    this._msTzone = value;
  }
  public resetMsTzone() {
    this._msTzone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msTzoneInput() {
    return this._msTzone;
  }

  // ms_validated - computed: false, optional: true, required: false
  private _msValidated?: string; 
  public get msValidated() {
    return this.getStringAttribute('ms_validated');
  }
  public set msValidated(value: string) {
    this._msValidated = value;
  }
  public resetMsValidated() {
    this._msValidated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msValidatedInput() {
    return this._msValidated;
  }

  // msisdn - computed: false, optional: true, required: false
  private _msisdn?: string; 
  public get msisdn() {
    return this.getStringAttribute('msisdn');
  }
  public set msisdn(value: string) {
    this._msisdn = value;
  }
  public resetMsisdn() {
    this._msisdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msisdnInput() {
    return this._msisdn;
  }

  // nsapi - computed: false, optional: true, required: false
  private _nsapi?: string; 
  public get nsapi() {
    return this.getStringAttribute('nsapi');
  }
  public set nsapi(value: string) {
    this._nsapi = value;
  }
  public resetNsapi() {
    this._nsapi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsapiInput() {
    return this._nsapi;
  }

  // pdp_context - computed: false, optional: true, required: false
  private _pdpContext?: string; 
  public get pdpContext() {
    return this.getStringAttribute('pdp_context');
  }
  public set pdpContext(value: string) {
    this._pdpContext = value;
  }
  public resetPdpContext() {
    this._pdpContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdpContextInput() {
    return this._pdpContext;
  }

  // qos_profile - computed: false, optional: true, required: false
  private _qosProfile?: string; 
  public get qosProfile() {
    return this.getStringAttribute('qos_profile');
  }
  public set qosProfile(value: string) {
    this._qosProfile = value;
  }
  public resetQosProfile() {
    this._qosProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosProfileInput() {
    return this._qosProfile;
  }

  // rai - computed: false, optional: true, required: false
  private _rai?: string; 
  public get rai() {
    return this.getStringAttribute('rai');
  }
  public set rai(value: string) {
    this._rai = value;
  }
  public resetRai() {
    this._rai = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get raiInput() {
    return this._rai;
  }

  // rat_type - computed: false, optional: true, required: false
  private _ratType?: string; 
  public get ratType() {
    return this.getStringAttribute('rat_type');
  }
  public set ratType(value: string) {
    this._ratType = value;
  }
  public resetRatType() {
    this._ratType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratTypeInput() {
    return this._ratType;
  }

  // reordering_required - computed: false, optional: true, required: false
  private _reorderingRequired?: string; 
  public get reorderingRequired() {
    return this.getStringAttribute('reordering_required');
  }
  public set reorderingRequired(value: string) {
    this._reorderingRequired = value;
  }
  public resetReorderingRequired() {
    this._reorderingRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reorderingRequiredInput() {
    return this._reorderingRequired;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // selection_mode - computed: false, optional: true, required: false
  private _selectionMode?: string; 
  public get selectionMode() {
    return this.getStringAttribute('selection_mode');
  }
  public set selectionMode(value: string) {
    this._selectionMode = value;
  }
  public resetSelectionMode() {
    this._selectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionModeInput() {
    return this._selectionMode;
  }

  // uli - computed: false, optional: true, required: false
  private _uli?: string; 
  public get uli() {
    return this.getStringAttribute('uli');
  }
  public set uli(value: string) {
    this._uli = value;
  }
  public resetUli() {
    this._uli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uliInput() {
    return this._uli;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      apn_restriction: cdktf.stringToTerraform(this._apnRestriction),
      charging_gateway_addr: cdktf.stringToTerraform(this._chargingGatewayAddr),
      charging_id: cdktf.stringToTerraform(this._chargingId),
      end_user_addr: cdktf.stringToTerraform(this._endUserAddr),
      gsn_addr: cdktf.stringToTerraform(this._gsnAddr),
      gtp: cdktf.stringToTerraform(this._gtp),
      id: cdktf.stringToTerraform(this._id),
      imei: cdktf.stringToTerraform(this._imei),
      imsi: cdktf.stringToTerraform(this._imsi),
      mm_context: cdktf.stringToTerraform(this._mmContext),
      ms_tzone: cdktf.stringToTerraform(this._msTzone),
      ms_validated: cdktf.stringToTerraform(this._msValidated),
      msisdn: cdktf.stringToTerraform(this._msisdn),
      nsapi: cdktf.stringToTerraform(this._nsapi),
      pdp_context: cdktf.stringToTerraform(this._pdpContext),
      qos_profile: cdktf.stringToTerraform(this._qosProfile),
      rai: cdktf.stringToTerraform(this._rai),
      rat_type: cdktf.stringToTerraform(this._ratType),
      reordering_required: cdktf.stringToTerraform(this._reorderingRequired),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      selection_mode: cdktf.stringToTerraform(this._selectionMode),
      uli: cdktf.stringToTerraform(this._uli),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apn_restriction: {
        value: cdktf.stringToHclTerraform(this._apnRestriction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      charging_gateway_addr: {
        value: cdktf.stringToHclTerraform(this._chargingGatewayAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      charging_id: {
        value: cdktf.stringToHclTerraform(this._chargingId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_user_addr: {
        value: cdktf.stringToHclTerraform(this._endUserAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gsn_addr: {
        value: cdktf.stringToHclTerraform(this._gsnAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gtp: {
        value: cdktf.stringToHclTerraform(this._gtp),
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
      imei: {
        value: cdktf.stringToHclTerraform(this._imei),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      imsi: {
        value: cdktf.stringToHclTerraform(this._imsi),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mm_context: {
        value: cdktf.stringToHclTerraform(this._mmContext),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ms_tzone: {
        value: cdktf.stringToHclTerraform(this._msTzone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ms_validated: {
        value: cdktf.stringToHclTerraform(this._msValidated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      msisdn: {
        value: cdktf.stringToHclTerraform(this._msisdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nsapi: {
        value: cdktf.stringToHclTerraform(this._nsapi),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pdp_context: {
        value: cdktf.stringToHclTerraform(this._pdpContext),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qos_profile: {
        value: cdktf.stringToHclTerraform(this._qosProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rai: {
        value: cdktf.stringToHclTerraform(this._rai),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rat_type: {
        value: cdktf.stringToHclTerraform(this._ratType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reordering_required: {
        value: cdktf.stringToHclTerraform(this._reorderingRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      selection_mode: {
        value: cdktf.stringToHclTerraform(this._selectionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uli: {
        value: cdktf.stringToHclTerraform(this._uli),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
