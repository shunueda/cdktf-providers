// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp_imsi
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFirewallGtpImsiAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp_imsi#action ObjectFirewallGtpImsiA#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp_imsi#adom ObjectFirewallGtpImsiA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp_imsi#apnmember ObjectFirewallGtpImsiA#apnmember}
  */
  readonly apnmember?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp_imsi#fosid ObjectFirewallGtpImsiA#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp_imsi#gtp ObjectFirewallGtpImsiA#gtp}
  */
  readonly gtp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp_imsi#id ObjectFirewallGtpImsiA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp_imsi#mcc_mnc ObjectFirewallGtpImsiA#mcc_mnc}
  */
  readonly mccMnc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp_imsi#msisdn_prefix ObjectFirewallGtpImsiA#msisdn_prefix}
  */
  readonly msisdnPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp_imsi#scopetype ObjectFirewallGtpImsiA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp_imsi#selection_mode ObjectFirewallGtpImsiA#selection_mode}
  */
  readonly selectionMode?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp_imsi fortimanager_object_firewall_gtp_imsi}
*/
export class ObjectFirewallGtpImsiA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_firewall_gtp_imsi";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFirewallGtpImsiA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFirewallGtpImsiA to import
  * @param importFromId The id of the existing ObjectFirewallGtpImsiA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp_imsi#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFirewallGtpImsiA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_firewall_gtp_imsi", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp_imsi fortimanager_object_firewall_gtp_imsi} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFirewallGtpImsiAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectFirewallGtpImsiAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_firewall_gtp_imsi',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
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
    this._apnmember = config.apnmember;
    this._fosid = config.fosid;
    this._gtp = config.gtp;
    this._id = config.id;
    this._mccMnc = config.mccMnc;
    this._msisdnPrefix = config.msisdnPrefix;
    this._scopetype = config.scopetype;
    this._selectionMode = config.selectionMode;
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

  // mcc_mnc - computed: false, optional: true, required: false
  private _mccMnc?: string; 
  public get mccMnc() {
    return this.getStringAttribute('mcc_mnc');
  }
  public set mccMnc(value: string) {
    this._mccMnc = value;
  }
  public resetMccMnc() {
    this._mccMnc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mccMncInput() {
    return this._mccMnc;
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

  // selection_mode - computed: true, optional: true, required: false
  private _selectionMode?: string[]; 
  public get selectionMode() {
    return cdktf.Fn.tolist(this.getListAttribute('selection_mode'));
  }
  public set selectionMode(value: string[]) {
    this._selectionMode = value;
  }
  public resetSelectionMode() {
    this._selectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionModeInput() {
    return this._selectionMode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      adom: cdktf.stringToTerraform(this._adom),
      apnmember: cdktf.stringToTerraform(this._apnmember),
      fosid: cdktf.numberToTerraform(this._fosid),
      gtp: cdktf.stringToTerraform(this._gtp),
      id: cdktf.stringToTerraform(this._id),
      mcc_mnc: cdktf.stringToTerraform(this._mccMnc),
      msisdn_prefix: cdktf.stringToTerraform(this._msisdnPrefix),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      selection_mode: cdktf.listMapper(cdktf.stringToTerraform, false)(this._selectionMode),
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
      mcc_mnc: {
        value: cdktf.stringToHclTerraform(this._mccMnc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      msisdn_prefix: {
        value: cdktf.stringToHclTerraform(this._msisdnPrefix),
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
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._selectionMode),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
