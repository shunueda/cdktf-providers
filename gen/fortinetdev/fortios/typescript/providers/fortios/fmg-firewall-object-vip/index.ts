// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_vip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FmgFirewallObjectVipConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_vip#adom FmgFirewallObjectVip#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_vip#arp_reply FmgFirewallObjectVip#arp_reply}
  */
  readonly arpReply?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_vip#comment FmgFirewallObjectVip#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_vip#config_default FmgFirewallObjectVip#config_default}
  */
  readonly configDefault?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_vip#ext_intf FmgFirewallObjectVip#ext_intf}
  */
  readonly extIntf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_vip#ext_ip FmgFirewallObjectVip#ext_ip}
  */
  readonly extIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_vip#id FmgFirewallObjectVip#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_vip#mapped_addr FmgFirewallObjectVip#mapped_addr}
  */
  readonly mappedAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_vip#mapped_ip FmgFirewallObjectVip#mapped_ip}
  */
  readonly mappedIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_vip#name FmgFirewallObjectVip#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_vip#type FmgFirewallObjectVip#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_vip fortios_fmg_firewall_object_vip}
*/
export class FmgFirewallObjectVip extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_fmg_firewall_object_vip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FmgFirewallObjectVip resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FmgFirewallObjectVip to import
  * @param importFromId The id of the existing FmgFirewallObjectVip that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_vip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FmgFirewallObjectVip to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_fmg_firewall_object_vip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_vip fortios_fmg_firewall_object_vip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FmgFirewallObjectVipConfig
  */
  public constructor(scope: Construct, id: string, config: FmgFirewallObjectVipConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_fmg_firewall_object_vip',
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
    this._arpReply = config.arpReply;
    this._comment = config.comment;
    this._configDefault = config.configDefault;
    this._extIntf = config.extIntf;
    this._extIp = config.extIp;
    this._id = config.id;
    this._mappedAddr = config.mappedAddr;
    this._mappedIp = config.mappedIp;
    this._name = config.name;
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

  // config_default - computed: false, optional: true, required: false
  private _configDefault?: string; 
  public get configDefault() {
    return this.getStringAttribute('config_default');
  }
  public set configDefault(value: string) {
    this._configDefault = value;
  }
  public resetConfigDefault() {
    this._configDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configDefaultInput() {
    return this._configDefault;
  }

  // ext_intf - computed: false, optional: true, required: false
  private _extIntf?: string; 
  public get extIntf() {
    return this.getStringAttribute('ext_intf');
  }
  public set extIntf(value: string) {
    this._extIntf = value;
  }
  public resetExtIntf() {
    this._extIntf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIntfInput() {
    return this._extIntf;
  }

  // ext_ip - computed: false, optional: true, required: false
  private _extIp?: string; 
  public get extIp() {
    return this.getStringAttribute('ext_ip');
  }
  public set extIp(value: string) {
    this._extIp = value;
  }
  public resetExtIp() {
    this._extIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIpInput() {
    return this._extIp;
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

  // mapped_addr - computed: false, optional: true, required: false
  private _mappedAddr?: string; 
  public get mappedAddr() {
    return this.getStringAttribute('mapped_addr');
  }
  public set mappedAddr(value: string) {
    this._mappedAddr = value;
  }
  public resetMappedAddr() {
    this._mappedAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappedAddrInput() {
    return this._mappedAddr;
  }

  // mapped_ip - computed: false, optional: true, required: false
  private _mappedIp?: string; 
  public get mappedIp() {
    return this.getStringAttribute('mapped_ip');
  }
  public set mappedIp(value: string) {
    this._mappedIp = value;
  }
  public resetMappedIp() {
    this._mappedIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappedIpInput() {
    return this._mappedIp;
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
      arp_reply: cdktf.stringToTerraform(this._arpReply),
      comment: cdktf.stringToTerraform(this._comment),
      config_default: cdktf.stringToTerraform(this._configDefault),
      ext_intf: cdktf.stringToTerraform(this._extIntf),
      ext_ip: cdktf.stringToTerraform(this._extIp),
      id: cdktf.stringToTerraform(this._id),
      mapped_addr: cdktf.stringToTerraform(this._mappedAddr),
      mapped_ip: cdktf.stringToTerraform(this._mappedIp),
      name: cdktf.stringToTerraform(this._name),
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
      arp_reply: {
        value: cdktf.stringToHclTerraform(this._arpReply),
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
      config_default: {
        value: cdktf.stringToHclTerraform(this._configDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ext_intf: {
        value: cdktf.stringToHclTerraform(this._extIntf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ext_ip: {
        value: cdktf.stringToHclTerraform(this._extIp),
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
      mapped_addr: {
        value: cdktf.stringToHclTerraform(this._mappedAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mapped_ip: {
        value: cdktf.stringToHclTerraform(this._mappedIp),
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
