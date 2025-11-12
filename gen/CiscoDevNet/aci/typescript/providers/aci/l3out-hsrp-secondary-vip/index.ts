// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_hsrp_secondary_vip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface L3OutHsrpSecondaryVipConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_hsrp_secondary_vip#annotation L3OutHsrpSecondaryVip#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_hsrp_secondary_vip#config_issues L3OutHsrpSecondaryVip#config_issues}
  */
  readonly configIssues?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_hsrp_secondary_vip#description L3OutHsrpSecondaryVip#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_hsrp_secondary_vip#id L3OutHsrpSecondaryVip#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_hsrp_secondary_vip#ip L3OutHsrpSecondaryVip#ip}
  */
  readonly ip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_hsrp_secondary_vip#l3out_hsrp_interface_group_dn L3OutHsrpSecondaryVip#l3out_hsrp_interface_group_dn}
  */
  readonly l3OutHsrpInterfaceGroupDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_hsrp_secondary_vip#name_alias L3OutHsrpSecondaryVip#name_alias}
  */
  readonly nameAlias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_hsrp_secondary_vip aci_l3out_hsrp_secondary_vip}
*/
export class L3OutHsrpSecondaryVip extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_l3out_hsrp_secondary_vip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a L3OutHsrpSecondaryVip resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the L3OutHsrpSecondaryVip to import
  * @param importFromId The id of the existing L3OutHsrpSecondaryVip that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_hsrp_secondary_vip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the L3OutHsrpSecondaryVip to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_l3out_hsrp_secondary_vip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_hsrp_secondary_vip aci_l3out_hsrp_secondary_vip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options L3OutHsrpSecondaryVipConfig
  */
  public constructor(scope: Construct, id: string, config: L3OutHsrpSecondaryVipConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_l3out_hsrp_secondary_vip',
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
    this._annotation = config.annotation;
    this._configIssues = config.configIssues;
    this._description = config.description;
    this._id = config.id;
    this._ip = config.ip;
    this._l3OutHsrpInterfaceGroupDn = config.l3OutHsrpInterfaceGroupDn;
    this._nameAlias = config.nameAlias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // config_issues - computed: true, optional: true, required: false
  private _configIssues?: string; 
  public get configIssues() {
    return this.getStringAttribute('config_issues');
  }
  public set configIssues(value: string) {
    this._configIssues = value;
  }
  public resetConfigIssues() {
    this._configIssues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configIssuesInput() {
    return this._configIssues;
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

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // l3out_hsrp_interface_group_dn - computed: false, optional: false, required: true
  private _l3OutHsrpInterfaceGroupDn?: string; 
  public get l3OutHsrpInterfaceGroupDn() {
    return this.getStringAttribute('l3out_hsrp_interface_group_dn');
  }
  public set l3OutHsrpInterfaceGroupDn(value: string) {
    this._l3OutHsrpInterfaceGroupDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get l3OutHsrpInterfaceGroupDnInput() {
    return this._l3OutHsrpInterfaceGroupDn;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      config_issues: cdktf.stringToTerraform(this._configIssues),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
      l3out_hsrp_interface_group_dn: cdktf.stringToTerraform(this._l3OutHsrpInterfaceGroupDn),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_issues: {
        value: cdktf.stringToHclTerraform(this._configIssues),
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
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l3out_hsrp_interface_group_dn: {
        value: cdktf.stringToHclTerraform(this._l3OutHsrpInterfaceGroupDn),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
