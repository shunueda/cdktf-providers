// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_vpc_member
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface L3OutVpcMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_vpc_member#addr L3OutVpcMember#addr}
  */
  readonly addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_vpc_member#annotation L3OutVpcMember#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_vpc_member#description L3OutVpcMember#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_vpc_member#id L3OutVpcMember#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_vpc_member#ipv6_dad L3OutVpcMember#ipv6_dad}
  */
  readonly ipv6Dad?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_vpc_member#leaf_port_dn L3OutVpcMember#leaf_port_dn}
  */
  readonly leafPortDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_vpc_member#ll_addr L3OutVpcMember#ll_addr}
  */
  readonly llAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_vpc_member#name_alias L3OutVpcMember#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_vpc_member#side L3OutVpcMember#side}
  */
  readonly side: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_vpc_member aci_l3out_vpc_member}
*/
export class L3OutVpcMember extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_l3out_vpc_member";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a L3OutVpcMember resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the L3OutVpcMember to import
  * @param importFromId The id of the existing L3OutVpcMember that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_vpc_member#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the L3OutVpcMember to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_l3out_vpc_member", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_vpc_member aci_l3out_vpc_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options L3OutVpcMemberConfig
  */
  public constructor(scope: Construct, id: string, config: L3OutVpcMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_l3out_vpc_member',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0'
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
    this._description = config.description;
    this._id = config.id;
    this._ipv6Dad = config.ipv6Dad;
    this._leafPortDn = config.leafPortDn;
    this._llAddr = config.llAddr;
    this._nameAlias = config.nameAlias;
    this._side = config.side;
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

  // leaf_port_dn - computed: false, optional: false, required: true
  private _leafPortDn?: string; 
  public get leafPortDn() {
    return this.getStringAttribute('leaf_port_dn');
  }
  public set leafPortDn(value: string) {
    this._leafPortDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get leafPortDnInput() {
    return this._leafPortDn;
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

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // side - computed: false, optional: false, required: true
  private _side?: string; 
  public get side() {
    return this.getStringAttribute('side');
  }
  public set side(value: string) {
    this._side = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sideInput() {
    return this._side;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addr: cdktf.stringToTerraform(this._addr),
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      ipv6_dad: cdktf.stringToTerraform(this._ipv6Dad),
      leaf_port_dn: cdktf.stringToTerraform(this._leafPortDn),
      ll_addr: cdktf.stringToTerraform(this._llAddr),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      side: cdktf.stringToTerraform(this._side),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      ipv6_dad: {
        value: cdktf.stringToHclTerraform(this._ipv6Dad),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      leaf_port_dn: {
        value: cdktf.stringToHclTerraform(this._leafPortDn),
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
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      side: {
        value: cdktf.stringToHclTerraform(this._side),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
