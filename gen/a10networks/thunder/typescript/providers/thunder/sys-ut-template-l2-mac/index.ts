// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_template_l2_mac
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SysUtTemplateL2MacConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'broadcast': broadcast; 'multicast': multicast;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_template_l2_mac#address_type SysUtTemplateL2Mac#address_type}
  */
  readonly addressType?: string;
  /**
  * Ethernet interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_template_l2_mac#ethernet SysUtTemplateL2Mac#ethernet}
  */
  readonly ethernet?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_template_l2_mac#id SysUtTemplateL2Mac#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Nat pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_template_l2_mac#nat_pool SysUtTemplateL2Mac#nat_pool}
  */
  readonly natPool?: string;
  /**
  * 'dest': dest; 'src': src;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_template_l2_mac#src_dst SysUtTemplateL2Mac#src_dst}
  */
  readonly srcDst: string;
  /**
  * Template_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_template_l2_mac#template_name SysUtTemplateL2Mac#template_name}
  */
  readonly templateName: string;
  /**
  * Trunk number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_template_l2_mac#trunk SysUtTemplateL2Mac#trunk}
  */
  readonly trunk?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_template_l2_mac#uuid SysUtTemplateL2Mac#uuid}
  */
  readonly uuid?: string;
  /**
  * Mac Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_template_l2_mac#value SysUtTemplateL2Mac#value}
  */
  readonly value?: string;
  /**
  * Virtual Ethernet interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_template_l2_mac#ve SysUtTemplateL2Mac#ve}
  */
  readonly ve?: number;
  /**
  * vip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_template_l2_mac#virtual_server SysUtTemplateL2Mac#virtual_server}
  */
  readonly virtualServer?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_template_l2_mac thunder_sys_ut_template_l2_mac}
*/
export class SysUtTemplateL2Mac extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_sys_ut_template_l2_mac";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SysUtTemplateL2Mac resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SysUtTemplateL2Mac to import
  * @param importFromId The id of the existing SysUtTemplateL2Mac that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_template_l2_mac#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SysUtTemplateL2Mac to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_sys_ut_template_l2_mac", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_template_l2_mac thunder_sys_ut_template_l2_mac} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SysUtTemplateL2MacConfig
  */
  public constructor(scope: Construct, id: string, config: SysUtTemplateL2MacConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_sys_ut_template_l2_mac',
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
    this._addressType = config.addressType;
    this._ethernet = config.ethernet;
    this._id = config.id;
    this._natPool = config.natPool;
    this._srcDst = config.srcDst;
    this._templateName = config.templateName;
    this._trunk = config.trunk;
    this._uuid = config.uuid;
    this._value = config.value;
    this._ve = config.ve;
    this._virtualServer = config.virtualServer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_type - computed: false, optional: true, required: false
  private _addressType?: string; 
  public get addressType() {
    return this.getStringAttribute('address_type');
  }
  public set addressType(value: string) {
    this._addressType = value;
  }
  public resetAddressType() {
    this._addressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressTypeInput() {
    return this._addressType;
  }

  // ethernet - computed: false, optional: true, required: false
  private _ethernet?: number; 
  public get ethernet() {
    return this.getNumberAttribute('ethernet');
  }
  public set ethernet(value: number) {
    this._ethernet = value;
  }
  public resetEthernet() {
    this._ethernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetInput() {
    return this._ethernet;
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

  // nat_pool - computed: false, optional: true, required: false
  private _natPool?: string; 
  public get natPool() {
    return this.getStringAttribute('nat_pool');
  }
  public set natPool(value: string) {
    this._natPool = value;
  }
  public resetNatPool() {
    this._natPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolInput() {
    return this._natPool;
  }

  // src_dst - computed: false, optional: false, required: true
  private _srcDst?: string; 
  public get srcDst() {
    return this.getStringAttribute('src_dst');
  }
  public set srcDst(value: string) {
    this._srcDst = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstInput() {
    return this._srcDst;
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // trunk - computed: false, optional: true, required: false
  private _trunk?: number; 
  public get trunk() {
    return this.getNumberAttribute('trunk');
  }
  public set trunk(value: number) {
    this._trunk = value;
  }
  public resetTrunk() {
    this._trunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkInput() {
    return this._trunk;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // ve - computed: false, optional: true, required: false
  private _ve?: number; 
  public get ve() {
    return this.getNumberAttribute('ve');
  }
  public set ve(value: number) {
    this._ve = value;
  }
  public resetVe() {
    this._ve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veInput() {
    return this._ve;
  }

  // virtual_server - computed: false, optional: true, required: false
  private _virtualServer?: string; 
  public get virtualServer() {
    return this.getStringAttribute('virtual_server');
  }
  public set virtualServer(value: string) {
    this._virtualServer = value;
  }
  public resetVirtualServer() {
    this._virtualServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServerInput() {
    return this._virtualServer;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_type: cdktf.stringToTerraform(this._addressType),
      ethernet: cdktf.numberToTerraform(this._ethernet),
      id: cdktf.stringToTerraform(this._id),
      nat_pool: cdktf.stringToTerraform(this._natPool),
      src_dst: cdktf.stringToTerraform(this._srcDst),
      template_name: cdktf.stringToTerraform(this._templateName),
      trunk: cdktf.numberToTerraform(this._trunk),
      uuid: cdktf.stringToTerraform(this._uuid),
      value: cdktf.stringToTerraform(this._value),
      ve: cdktf.numberToTerraform(this._ve),
      virtual_server: cdktf.stringToTerraform(this._virtualServer),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_type: {
        value: cdktf.stringToHclTerraform(this._addressType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ethernet: {
        value: cdktf.numberToHclTerraform(this._ethernet),
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
      nat_pool: {
        value: cdktf.stringToHclTerraform(this._natPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_dst: {
        value: cdktf.stringToHclTerraform(this._srcDst),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trunk: {
        value: cdktf.numberToHclTerraform(this._trunk),
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
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ve: {
        value: cdktf.numberToHclTerraform(this._ve),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      virtual_server: {
        value: cdktf.stringToHclTerraform(this._virtualServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
