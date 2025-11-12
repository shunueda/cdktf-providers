// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_hsrp_interface_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface L3OutHsrpInterfaceGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_hsrp_interface_group#annotation L3OutHsrpInterfaceGroup#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_hsrp_interface_group#config_issues L3OutHsrpInterfaceGroup#config_issues}
  */
  readonly configIssues?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_hsrp_interface_group#description L3OutHsrpInterfaceGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_hsrp_interface_group#group_af L3OutHsrpInterfaceGroup#group_af}
  */
  readonly groupAf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_hsrp_interface_group#group_id L3OutHsrpInterfaceGroup#group_id}
  */
  readonly groupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_hsrp_interface_group#group_name L3OutHsrpInterfaceGroup#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_hsrp_interface_group#id L3OutHsrpInterfaceGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_hsrp_interface_group#ip L3OutHsrpInterfaceGroup#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_hsrp_interface_group#ip_obtain_mode L3OutHsrpInterfaceGroup#ip_obtain_mode}
  */
  readonly ipObtainMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_hsrp_interface_group#l3out_hsrp_interface_profile_dn L3OutHsrpInterfaceGroup#l3out_hsrp_interface_profile_dn}
  */
  readonly l3OutHsrpInterfaceProfileDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_hsrp_interface_group#mac L3OutHsrpInterfaceGroup#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_hsrp_interface_group#name L3OutHsrpInterfaceGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_hsrp_interface_group#name_alias L3OutHsrpInterfaceGroup#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_hsrp_interface_group#relation_hsrp_rs_group_pol L3OutHsrpInterfaceGroup#relation_hsrp_rs_group_pol}
  */
  readonly relationHsrpRsGroupPol?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_hsrp_interface_group aci_l3out_hsrp_interface_group}
*/
export class L3OutHsrpInterfaceGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_l3out_hsrp_interface_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a L3OutHsrpInterfaceGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the L3OutHsrpInterfaceGroup to import
  * @param importFromId The id of the existing L3OutHsrpInterfaceGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_hsrp_interface_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the L3OutHsrpInterfaceGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_l3out_hsrp_interface_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_hsrp_interface_group aci_l3out_hsrp_interface_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options L3OutHsrpInterfaceGroupConfig
  */
  public constructor(scope: Construct, id: string, config: L3OutHsrpInterfaceGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_l3out_hsrp_interface_group',
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
    this._groupAf = config.groupAf;
    this._groupId = config.groupId;
    this._groupName = config.groupName;
    this._id = config.id;
    this._ip = config.ip;
    this._ipObtainMode = config.ipObtainMode;
    this._l3OutHsrpInterfaceProfileDn = config.l3OutHsrpInterfaceProfileDn;
    this._mac = config.mac;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._relationHsrpRsGroupPol = config.relationHsrpRsGroupPol;
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

  // group_af - computed: true, optional: true, required: false
  private _groupAf?: string; 
  public get groupAf() {
    return this.getStringAttribute('group_af');
  }
  public set groupAf(value: string) {
    this._groupAf = value;
  }
  public resetGroupAf() {
    this._groupAf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAfInput() {
    return this._groupAf;
  }

  // group_id - computed: true, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // group_name - computed: true, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
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

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ip_obtain_mode - computed: true, optional: true, required: false
  private _ipObtainMode?: string; 
  public get ipObtainMode() {
    return this.getStringAttribute('ip_obtain_mode');
  }
  public set ipObtainMode(value: string) {
    this._ipObtainMode = value;
  }
  public resetIpObtainMode() {
    this._ipObtainMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipObtainModeInput() {
    return this._ipObtainMode;
  }

  // l3out_hsrp_interface_profile_dn - computed: false, optional: false, required: true
  private _l3OutHsrpInterfaceProfileDn?: string; 
  public get l3OutHsrpInterfaceProfileDn() {
    return this.getStringAttribute('l3out_hsrp_interface_profile_dn');
  }
  public set l3OutHsrpInterfaceProfileDn(value: string) {
    this._l3OutHsrpInterfaceProfileDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get l3OutHsrpInterfaceProfileDnInput() {
    return this._l3OutHsrpInterfaceProfileDn;
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

  // relation_hsrp_rs_group_pol - computed: false, optional: true, required: false
  private _relationHsrpRsGroupPol?: string; 
  public get relationHsrpRsGroupPol() {
    return this.getStringAttribute('relation_hsrp_rs_group_pol');
  }
  public set relationHsrpRsGroupPol(value: string) {
    this._relationHsrpRsGroupPol = value;
  }
  public resetRelationHsrpRsGroupPol() {
    this._relationHsrpRsGroupPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationHsrpRsGroupPolInput() {
    return this._relationHsrpRsGroupPol;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      config_issues: cdktf.stringToTerraform(this._configIssues),
      description: cdktf.stringToTerraform(this._description),
      group_af: cdktf.stringToTerraform(this._groupAf),
      group_id: cdktf.stringToTerraform(this._groupId),
      group_name: cdktf.stringToTerraform(this._groupName),
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
      ip_obtain_mode: cdktf.stringToTerraform(this._ipObtainMode),
      l3out_hsrp_interface_profile_dn: cdktf.stringToTerraform(this._l3OutHsrpInterfaceProfileDn),
      mac: cdktf.stringToTerraform(this._mac),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      relation_hsrp_rs_group_pol: cdktf.stringToTerraform(this._relationHsrpRsGroupPol),
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
      group_af: {
        value: cdktf.stringToHclTerraform(this._groupAf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
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
      ip_obtain_mode: {
        value: cdktf.stringToHclTerraform(this._ipObtainMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l3out_hsrp_interface_profile_dn: {
        value: cdktf.stringToHclTerraform(this._l3OutHsrpInterfaceProfileDn),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      relation_hsrp_rs_group_pol: {
        value: cdktf.stringToHclTerraform(this._relationHsrpRsGroupPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
