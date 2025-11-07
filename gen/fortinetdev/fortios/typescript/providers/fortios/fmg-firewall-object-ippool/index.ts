// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_ippool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FmgFirewallObjectIppoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_ippool#adom FmgFirewallObjectIppool#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_ippool#arp_intf FmgFirewallObjectIppool#arp_intf}
  */
  readonly arpIntf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_ippool#arp_reply FmgFirewallObjectIppool#arp_reply}
  */
  readonly arpReply?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_ippool#associated_intf FmgFirewallObjectIppool#associated_intf}
  */
  readonly associatedIntf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_ippool#comment FmgFirewallObjectIppool#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_ippool#endip FmgFirewallObjectIppool#endip}
  */
  readonly endip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_ippool#id FmgFirewallObjectIppool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_ippool#name FmgFirewallObjectIppool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_ippool#startip FmgFirewallObjectIppool#startip}
  */
  readonly startip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_ippool#type FmgFirewallObjectIppool#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_ippool fortios_fmg_firewall_object_ippool}
*/
export class FmgFirewallObjectIppool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_fmg_firewall_object_ippool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FmgFirewallObjectIppool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FmgFirewallObjectIppool to import
  * @param importFromId The id of the existing FmgFirewallObjectIppool that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_ippool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FmgFirewallObjectIppool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_fmg_firewall_object_ippool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_ippool fortios_fmg_firewall_object_ippool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FmgFirewallObjectIppoolConfig
  */
  public constructor(scope: Construct, id: string, config: FmgFirewallObjectIppoolConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_fmg_firewall_object_ippool',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
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
    this._arpIntf = config.arpIntf;
    this._arpReply = config.arpReply;
    this._associatedIntf = config.associatedIntf;
    this._comment = config.comment;
    this._endip = config.endip;
    this._id = config.id;
    this._name = config.name;
    this._startip = config.startip;
    this._type = config.type;
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

  // arp_intf - computed: false, optional: true, required: false
  private _arpIntf?: string; 
  public get arpIntf() {
    return this.getStringAttribute('arp_intf');
  }
  public set arpIntf(value: string) {
    this._arpIntf = value;
  }
  public resetArpIntf() {
    this._arpIntf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpIntfInput() {
    return this._arpIntf;
  }

  // arp_reply - computed: false, optional: true, required: false
  private _arpReply?: string; 
  public get arpReply() {
    return this.getStringAttribute('arp_reply');
  }
  public set arpReply(value: string) {
    this._arpReply = value;
  }
  public resetArpReply() {
    this._arpReply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpReplyInput() {
    return this._arpReply;
  }

  // associated_intf - computed: false, optional: true, required: false
  private _associatedIntf?: string; 
  public get associatedIntf() {
    return this.getStringAttribute('associated_intf');
  }
  public set associatedIntf(value: string) {
    this._associatedIntf = value;
  }
  public resetAssociatedIntf() {
    this._associatedIntf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedIntfInput() {
    return this._associatedIntf;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // endip - computed: false, optional: false, required: true
  private _endip?: string; 
  public get endip() {
    return this.getStringAttribute('endip');
  }
  public set endip(value: string) {
    this._endip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endipInput() {
    return this._endip;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // startip - computed: false, optional: false, required: true
  private _startip?: string; 
  public get startip() {
    return this.getStringAttribute('startip');
  }
  public set startip(value: string) {
    this._startip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startipInput() {
    return this._startip;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      arp_intf: cdktf.stringToTerraform(this._arpIntf),
      arp_reply: cdktf.stringToTerraform(this._arpReply),
      associated_intf: cdktf.stringToTerraform(this._associatedIntf),
      comment: cdktf.stringToTerraform(this._comment),
      endip: cdktf.stringToTerraform(this._endip),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      startip: cdktf.stringToTerraform(this._startip),
      type: cdktf.stringToTerraform(this._type),
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
      arp_intf: {
        value: cdktf.stringToHclTerraform(this._arpIntf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arp_reply: {
        value: cdktf.stringToHclTerraform(this._arpReply),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      associated_intf: {
        value: cdktf.stringToHclTerraform(this._associatedIntf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endip: {
        value: cdktf.stringToHclTerraform(this._endip),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      startip: {
        value: cdktf.stringToHclTerraform(this._startip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
