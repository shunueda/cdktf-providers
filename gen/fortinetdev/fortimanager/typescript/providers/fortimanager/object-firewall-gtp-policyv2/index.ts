// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp_policyv2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFirewallGtpPolicyv2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp_policyv2#action ObjectFirewallGtpPolicyv2#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp_policyv2#adom ObjectFirewallGtpPolicyv2#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp_policyv2#apn_sel_mode ObjectFirewallGtpPolicyv2#apn_sel_mode}
  */
  readonly apnSelMode?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp_policyv2#apnmember ObjectFirewallGtpPolicyv2#apnmember}
  */
  readonly apnmember?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp_policyv2#fosid ObjectFirewallGtpPolicyv2#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp_policyv2#gtp ObjectFirewallGtpPolicyv2#gtp}
  */
  readonly gtp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp_policyv2#id ObjectFirewallGtpPolicyv2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp_policyv2#imsi_prefix ObjectFirewallGtpPolicyv2#imsi_prefix}
  */
  readonly imsiPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp_policyv2#max_apn_restriction ObjectFirewallGtpPolicyv2#max_apn_restriction}
  */
  readonly maxApnRestriction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp_policyv2#mei ObjectFirewallGtpPolicyv2#mei}
  */
  readonly mei?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp_policyv2#messages ObjectFirewallGtpPolicyv2#messages}
  */
  readonly messages?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp_policyv2#msisdn_prefix ObjectFirewallGtpPolicyv2#msisdn_prefix}
  */
  readonly msisdnPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp_policyv2#rat_type ObjectFirewallGtpPolicyv2#rat_type}
  */
  readonly ratType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp_policyv2#scopetype ObjectFirewallGtpPolicyv2#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp_policyv2#uli ObjectFirewallGtpPolicyv2#uli}
  */
  readonly uli?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp_policyv2 fortimanager_object_firewall_gtp_policyv2}
*/
export class ObjectFirewallGtpPolicyv2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_firewall_gtp_policyv2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFirewallGtpPolicyv2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFirewallGtpPolicyv2 to import
  * @param importFromId The id of the existing ObjectFirewallGtpPolicyv2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp_policyv2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFirewallGtpPolicyv2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_firewall_gtp_policyv2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp_policyv2 fortimanager_object_firewall_gtp_policyv2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFirewallGtpPolicyv2Config
  */
  public constructor(scope: Construct, id: string, config: ObjectFirewallGtpPolicyv2Config) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_firewall_gtp_policyv2',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._adom = config.adom;
    this._apnSelMode = config.apnSelMode;
    this._apnmember = config.apnmember;
    this._fosid = config.fosid;
    this._gtp = config.gtp;
    this._id = config.id;
    this._imsiPrefix = config.imsiPrefix;
    this._maxApnRestriction = config.maxApnRestriction;
    this._mei = config.mei;
    this._messages = config.messages;
    this._msisdnPrefix = config.msisdnPrefix;
    this._ratType = config.ratType;
    this._scopetype = config.scopetype;
    this._uli = config.uli;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

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

  // apn_sel_mode - computed: true, optional: true, required: false
  private _apnSelMode?: string[]; 
  public get apnSelMode() {
    return cdktf.Fn.tolist(this.getListAttribute('apn_sel_mode'));
  }
  public set apnSelMode(value: string[]) {
    this._apnSelMode = value;
  }
  public resetApnSelMode() {
    this._apnSelMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apnSelModeInput() {
    return this._apnSelMode;
  }

  // apnmember - computed: false, optional: true, required: false
  private _apnmember?: string; 
  public get apnmember() {
    return this.getStringAttribute('apnmember');
  }
  public set apnmember(value: string) {
    this._apnmember = value;
  }
  public resetApnmember() {
    this._apnmember = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apnmemberInput() {
    return this._apnmember;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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

  // imsi_prefix - computed: false, optional: true, required: false
  private _imsiPrefix?: string; 
  public get imsiPrefix() {
    return this.getStringAttribute('imsi_prefix');
  }
  public set imsiPrefix(value: string) {
    this._imsiPrefix = value;
  }
  public resetImsiPrefix() {
    this._imsiPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imsiPrefixInput() {
    return this._imsiPrefix;
  }

  // max_apn_restriction - computed: false, optional: true, required: false
  private _maxApnRestriction?: string; 
  public get maxApnRestriction() {
    return this.getStringAttribute('max_apn_restriction');
  }
  public set maxApnRestriction(value: string) {
    this._maxApnRestriction = value;
  }
  public resetMaxApnRestriction() {
    this._maxApnRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxApnRestrictionInput() {
    return this._maxApnRestriction;
  }

  // mei - computed: false, optional: true, required: false
  private _mei?: string; 
  public get mei() {
    return this.getStringAttribute('mei');
  }
  public set mei(value: string) {
    this._mei = value;
  }
  public resetMei() {
    this._mei = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meiInput() {
    return this._mei;
  }

  // messages - computed: true, optional: true, required: false
  private _messages?: string[]; 
  public get messages() {
    return cdktf.Fn.tolist(this.getListAttribute('messages'));
  }
  public set messages(value: string[]) {
    this._messages = value;
  }
  public resetMessages() {
    this._messages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagesInput() {
    return this._messages;
  }

  // msisdn_prefix - computed: false, optional: true, required: false
  private _msisdnPrefix?: string; 
  public get msisdnPrefix() {
    return this.getStringAttribute('msisdn_prefix');
  }
  public set msisdnPrefix(value: string) {
    this._msisdnPrefix = value;
  }
  public resetMsisdnPrefix() {
    this._msisdnPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msisdnPrefixInput() {
    return this._msisdnPrefix;
  }

  // rat_type - computed: true, optional: true, required: false
  private _ratType?: string[]; 
  public get ratType() {
    return cdktf.Fn.tolist(this.getListAttribute('rat_type'));
  }
  public set ratType(value: string[]) {
    this._ratType = value;
  }
  public resetRatType() {
    this._ratType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratTypeInput() {
    return this._ratType;
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

  // uli - computed: true, optional: true, required: false
  private _uli?: string[]; 
  public get uli() {
    return cdktf.Fn.tolist(this.getListAttribute('uli'));
  }
  public set uli(value: string[]) {
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
      action: cdktf.stringToTerraform(this._action),
      adom: cdktf.stringToTerraform(this._adom),
      apn_sel_mode: cdktf.listMapper(cdktf.stringToTerraform, false)(this._apnSelMode),
      apnmember: cdktf.stringToTerraform(this._apnmember),
      fosid: cdktf.numberToTerraform(this._fosid),
      gtp: cdktf.stringToTerraform(this._gtp),
      id: cdktf.stringToTerraform(this._id),
      imsi_prefix: cdktf.stringToTerraform(this._imsiPrefix),
      max_apn_restriction: cdktf.stringToTerraform(this._maxApnRestriction),
      mei: cdktf.stringToTerraform(this._mei),
      messages: cdktf.listMapper(cdktf.stringToTerraform, false)(this._messages),
      msisdn_prefix: cdktf.stringToTerraform(this._msisdnPrefix),
      rat_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ratType),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      uli: cdktf.listMapper(cdktf.stringToTerraform, false)(this._uli),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apn_sel_mode: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._apnSelMode),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      apnmember: {
        value: cdktf.stringToHclTerraform(this._apnmember),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      imsi_prefix: {
        value: cdktf.stringToHclTerraform(this._imsiPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_apn_restriction: {
        value: cdktf.stringToHclTerraform(this._maxApnRestriction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mei: {
        value: cdktf.stringToHclTerraform(this._mei),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      messages: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._messages),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      msisdn_prefix: {
        value: cdktf.stringToHclTerraform(this._msisdnPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rat_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ratType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uli: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._uli),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
