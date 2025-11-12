// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_path_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciL3OutPathAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_path_attachment#addr DataAciL3OutPathAttachment#addr}
  */
  readonly addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_path_attachment#annotation DataAciL3OutPathAttachment#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_path_attachment#autostate DataAciL3OutPathAttachment#autostate}
  */
  readonly autostate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_path_attachment#description DataAciL3OutPathAttachment#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_path_attachment#encap DataAciL3OutPathAttachment#encap}
  */
  readonly encap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_path_attachment#encap_scope DataAciL3OutPathAttachment#encap_scope}
  */
  readonly encapScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_path_attachment#id DataAciL3OutPathAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_path_attachment#if_inst_t DataAciL3OutPathAttachment#if_inst_t}
  */
  readonly ifInstT?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_path_attachment#ipv6_dad DataAciL3OutPathAttachment#ipv6_dad}
  */
  readonly ipv6Dad?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_path_attachment#ll_addr DataAciL3OutPathAttachment#ll_addr}
  */
  readonly llAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_path_attachment#logical_interface_profile_dn DataAciL3OutPathAttachment#logical_interface_profile_dn}
  */
  readonly logicalInterfaceProfileDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_path_attachment#mac DataAciL3OutPathAttachment#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_path_attachment#mode DataAciL3OutPathAttachment#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_path_attachment#mtu DataAciL3OutPathAttachment#mtu}
  */
  readonly mtu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_path_attachment#target_dn DataAciL3OutPathAttachment#target_dn}
  */
  readonly targetDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_path_attachment#target_dscp DataAciL3OutPathAttachment#target_dscp}
  */
  readonly targetDscp?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_path_attachment aci_l3out_path_attachment}
*/
export class DataAciL3OutPathAttachment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_l3out_path_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciL3OutPathAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciL3OutPathAttachment to import
  * @param importFromId The id of the existing DataAciL3OutPathAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_path_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciL3OutPathAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_l3out_path_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_path_attachment aci_l3out_path_attachment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciL3OutPathAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciL3OutPathAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_l3out_path_attachment',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0',
        providerVersionConstraint: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addr = config.addr;
    this._annotation = config.annotation;
    this._autostate = config.autostate;
    this._description = config.description;
    this._encap = config.encap;
    this._encapScope = config.encapScope;
    this._id = config.id;
    this._ifInstT = config.ifInstT;
    this._ipv6Dad = config.ipv6Dad;
    this._llAddr = config.llAddr;
    this._logicalInterfaceProfileDn = config.logicalInterfaceProfileDn;
    this._mac = config.mac;
    this._mode = config.mode;
    this._mtu = config.mtu;
    this._targetDn = config.targetDn;
    this._targetDscp = config.targetDscp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addr - computed: true, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // autostate - computed: true, optional: true, required: false
  private _autostate?: string; 
  public get autostate() {
    return this.getStringAttribute('autostate');
  }
  public set autostate(value: string) {
    this._autostate = value;
  }
  public resetAutostate() {
    this._autostate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autostateInput() {
    return this._autostate;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // encap - computed: true, optional: true, required: false
  private _encap?: string; 
  public get encap() {
    return this.getStringAttribute('encap');
  }
  public set encap(value: string) {
    this._encap = value;
  }
  public resetEncap() {
    this._encap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapInput() {
    return this._encap;
  }

  // encap_scope - computed: true, optional: true, required: false
  private _encapScope?: string; 
  public get encapScope() {
    return this.getStringAttribute('encap_scope');
  }
  public set encapScope(value: string) {
    this._encapScope = value;
  }
  public resetEncapScope() {
    this._encapScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapScopeInput() {
    return this._encapScope;
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

  // if_inst_t - computed: true, optional: true, required: false
  private _ifInstT?: string; 
  public get ifInstT() {
    return this.getStringAttribute('if_inst_t');
  }
  public set ifInstT(value: string) {
    this._ifInstT = value;
  }
  public resetIfInstT() {
    this._ifInstT = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifInstTInput() {
    return this._ifInstT;
  }

  // ipv6_dad - computed: true, optional: true, required: false
  private _ipv6Dad?: string; 
  public get ipv6Dad() {
    return this.getStringAttribute('ipv6_dad');
  }
  public set ipv6Dad(value: string) {
    this._ipv6Dad = value;
  }
  public resetIpv6Dad() {
    this._ipv6Dad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DadInput() {
    return this._ipv6Dad;
  }

  // ll_addr - computed: true, optional: true, required: false
  private _llAddr?: string; 
  public get llAddr() {
    return this.getStringAttribute('ll_addr');
  }
  public set llAddr(value: string) {
    this._llAddr = value;
  }
  public resetLlAddr() {
    this._llAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get llAddrInput() {
    return this._llAddr;
  }

  // logical_interface_profile_dn - computed: false, optional: false, required: true
  private _logicalInterfaceProfileDn?: string; 
  public get logicalInterfaceProfileDn() {
    return this.getStringAttribute('logical_interface_profile_dn');
  }
  public set logicalInterfaceProfileDn(value: string) {
    this._logicalInterfaceProfileDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalInterfaceProfileDnInput() {
    return this._logicalInterfaceProfileDn;
  }

  // mac - computed: true, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // mtu - computed: true, optional: true, required: false
  private _mtu?: string; 
  public get mtu() {
    return this.getStringAttribute('mtu');
  }
  public set mtu(value: string) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // target_dn - computed: false, optional: false, required: true
  private _targetDn?: string; 
  public get targetDn() {
    return this.getStringAttribute('target_dn');
  }
  public set targetDn(value: string) {
    this._targetDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDnInput() {
    return this._targetDn;
  }

  // target_dscp - computed: true, optional: true, required: false
  private _targetDscp?: string; 
  public get targetDscp() {
    return this.getStringAttribute('target_dscp');
  }
  public set targetDscp(value: string) {
    this._targetDscp = value;
  }
  public resetTargetDscp() {
    this._targetDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDscpInput() {
    return this._targetDscp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addr: cdktf.stringToTerraform(this._addr),
      annotation: cdktf.stringToTerraform(this._annotation),
      autostate: cdktf.stringToTerraform(this._autostate),
      description: cdktf.stringToTerraform(this._description),
      encap: cdktf.stringToTerraform(this._encap),
      encap_scope: cdktf.stringToTerraform(this._encapScope),
      id: cdktf.stringToTerraform(this._id),
      if_inst_t: cdktf.stringToTerraform(this._ifInstT),
      ipv6_dad: cdktf.stringToTerraform(this._ipv6Dad),
      ll_addr: cdktf.stringToTerraform(this._llAddr),
      logical_interface_profile_dn: cdktf.stringToTerraform(this._logicalInterfaceProfileDn),
      mac: cdktf.stringToTerraform(this._mac),
      mode: cdktf.stringToTerraform(this._mode),
      mtu: cdktf.stringToTerraform(this._mtu),
      target_dn: cdktf.stringToTerraform(this._targetDn),
      target_dscp: cdktf.stringToTerraform(this._targetDscp),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addr: {
        value: cdktf.stringToHclTerraform(this._addr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      autostate: {
        value: cdktf.stringToHclTerraform(this._autostate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encap: {
        value: cdktf.stringToHclTerraform(this._encap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encap_scope: {
        value: cdktf.stringToHclTerraform(this._encapScope),
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
      if_inst_t: {
        value: cdktf.stringToHclTerraform(this._ifInstT),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_dad: {
        value: cdktf.stringToHclTerraform(this._ipv6Dad),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ll_addr: {
        value: cdktf.stringToHclTerraform(this._llAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logical_interface_profile_dn: {
        value: cdktf.stringToHclTerraform(this._logicalInterfaceProfileDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac: {
        value: cdktf.stringToHclTerraform(this._mac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mtu: {
        value: cdktf.stringToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_dn: {
        value: cdktf.stringToHclTerraform(this._targetDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_dscp: {
        value: cdktf.stringToHclTerraform(this._targetDscp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
