// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_template_l3_ip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SysUtTemplateL3IpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Ethernet interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_template_l3_ip#ethernet SysUtTemplateL3Ip#ethernet}
  */
  readonly ethernet?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_template_l3_ip#id SysUtTemplateL3Ip#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP end address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_template_l3_ip#ipv4_end_address SysUtTemplateL3Ip#ipv4_end_address}
  */
  readonly ipv4EndAddress?: string;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_template_l3_ip#ipv4_start_address SysUtTemplateL3Ip#ipv4_start_address}
  */
  readonly ipv4StartAddress?: string;
  /**
  * Ipv6 end address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_template_l3_ip#ipv6_end_address SysUtTemplateL3Ip#ipv6_end_address}
  */
  readonly ipv6EndAddress?: string;
  /**
  * Ipv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_template_l3_ip#ipv6_start_address SysUtTemplateL3Ip#ipv6_start_address}
  */
  readonly ipv6StartAddress?: string;
  /**
  * Nat pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_template_l3_ip#nat_pool SysUtTemplateL3Ip#nat_pool}
  */
  readonly natPool?: string;
  /**
  * 'dest': dest; 'src': src;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_template_l3_ip#src_dst SysUtTemplateL3Ip#src_dst}
  */
  readonly srcDst: string;
  /**
  * Template_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_template_l3_ip#template_name SysUtTemplateL3Ip#template_name}
  */
  readonly templateName: string;
  /**
  * Trunk number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_template_l3_ip#trunk SysUtTemplateL3Ip#trunk}
  */
  readonly trunk?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_template_l3_ip#uuid SysUtTemplateL3Ip#uuid}
  */
  readonly uuid?: string;
  /**
  * Virtual Ethernet interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_template_l3_ip#ve SysUtTemplateL3Ip#ve}
  */
  readonly ve?: number;
  /**
  * vip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_template_l3_ip#virtual_server SysUtTemplateL3Ip#virtual_server}
  */
  readonly virtualServer?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_template_l3_ip thunder_sys_ut_template_l3_ip}
*/
export class SysUtTemplateL3Ip extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_sys_ut_template_l3_ip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SysUtTemplateL3Ip resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SysUtTemplateL3Ip to import
  * @param importFromId The id of the existing SysUtTemplateL3Ip that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_template_l3_ip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SysUtTemplateL3Ip to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_sys_ut_template_l3_ip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_template_l3_ip thunder_sys_ut_template_l3_ip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SysUtTemplateL3IpConfig
  */
  public constructor(scope: Construct, id: string, config: SysUtTemplateL3IpConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_sys_ut_template_l3_ip',
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
    this._ethernet = config.ethernet;
    this._id = config.id;
    this._ipv4EndAddress = config.ipv4EndAddress;
    this._ipv4StartAddress = config.ipv4StartAddress;
    this._ipv6EndAddress = config.ipv6EndAddress;
    this._ipv6StartAddress = config.ipv6StartAddress;
    this._natPool = config.natPool;
    this._srcDst = config.srcDst;
    this._templateName = config.templateName;
    this._trunk = config.trunk;
    this._uuid = config.uuid;
    this._ve = config.ve;
    this._virtualServer = config.virtualServer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ipv4_end_address - computed: false, optional: true, required: false
  private _ipv4EndAddress?: string; 
  public get ipv4EndAddress() {
    return this.getStringAttribute('ipv4_end_address');
  }
  public set ipv4EndAddress(value: string) {
    this._ipv4EndAddress = value;
  }
  public resetIpv4EndAddress() {
    this._ipv4EndAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4EndAddressInput() {
    return this._ipv4EndAddress;
  }

  // ipv4_start_address - computed: false, optional: true, required: false
  private _ipv4StartAddress?: string; 
  public get ipv4StartAddress() {
    return this.getStringAttribute('ipv4_start_address');
  }
  public set ipv4StartAddress(value: string) {
    this._ipv4StartAddress = value;
  }
  public resetIpv4StartAddress() {
    this._ipv4StartAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4StartAddressInput() {
    return this._ipv4StartAddress;
  }

  // ipv6_end_address - computed: false, optional: true, required: false
  private _ipv6EndAddress?: string; 
  public get ipv6EndAddress() {
    return this.getStringAttribute('ipv6_end_address');
  }
  public set ipv6EndAddress(value: string) {
    this._ipv6EndAddress = value;
  }
  public resetIpv6EndAddress() {
    this._ipv6EndAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EndAddressInput() {
    return this._ipv6EndAddress;
  }

  // ipv6_start_address - computed: false, optional: true, required: false
  private _ipv6StartAddress?: string; 
  public get ipv6StartAddress() {
    return this.getStringAttribute('ipv6_start_address');
  }
  public set ipv6StartAddress(value: string) {
    this._ipv6StartAddress = value;
  }
  public resetIpv6StartAddress() {
    this._ipv6StartAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6StartAddressInput() {
    return this._ipv6StartAddress;
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
      ethernet: cdktf.numberToTerraform(this._ethernet),
      id: cdktf.stringToTerraform(this._id),
      ipv4_end_address: cdktf.stringToTerraform(this._ipv4EndAddress),
      ipv4_start_address: cdktf.stringToTerraform(this._ipv4StartAddress),
      ipv6_end_address: cdktf.stringToTerraform(this._ipv6EndAddress),
      ipv6_start_address: cdktf.stringToTerraform(this._ipv6StartAddress),
      nat_pool: cdktf.stringToTerraform(this._natPool),
      src_dst: cdktf.stringToTerraform(this._srcDst),
      template_name: cdktf.stringToTerraform(this._templateName),
      trunk: cdktf.numberToTerraform(this._trunk),
      uuid: cdktf.stringToTerraform(this._uuid),
      ve: cdktf.numberToTerraform(this._ve),
      virtual_server: cdktf.stringToTerraform(this._virtualServer),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      ipv4_end_address: {
        value: cdktf.stringToHclTerraform(this._ipv4EndAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_start_address: {
        value: cdktf.stringToHclTerraform(this._ipv4StartAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_end_address: {
        value: cdktf.stringToHclTerraform(this._ipv6EndAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_start_address: {
        value: cdktf.stringToHclTerraform(this._ipv6StartAddress),
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
