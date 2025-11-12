// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/spine_switch_policy_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciSpineSwitchPolicyGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/spine_switch_policy_group#annotation DataAciSpineSwitchPolicyGroup#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/spine_switch_policy_group#description DataAciSpineSwitchPolicyGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/spine_switch_policy_group#id DataAciSpineSwitchPolicyGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/spine_switch_policy_group#name DataAciSpineSwitchPolicyGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/spine_switch_policy_group#name_alias DataAciSpineSwitchPolicyGroup#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/spine_switch_policy_group#relation_infra_rs_iacl_spine_profile DataAciSpineSwitchPolicyGroup#relation_infra_rs_iacl_spine_profile}
  */
  readonly relationInfraRsIaclSpineProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/spine_switch_policy_group#relation_infra_rs_spine_bfd_ipv4_inst_pol DataAciSpineSwitchPolicyGroup#relation_infra_rs_spine_bfd_ipv4_inst_pol}
  */
  readonly relationInfraRsSpineBfdIpv4InstPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/spine_switch_policy_group#relation_infra_rs_spine_bfd_ipv6_inst_pol DataAciSpineSwitchPolicyGroup#relation_infra_rs_spine_bfd_ipv6_inst_pol}
  */
  readonly relationInfraRsSpineBfdIpv6InstPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/spine_switch_policy_group#relation_infra_rs_spine_copp_profile DataAciSpineSwitchPolicyGroup#relation_infra_rs_spine_copp_profile}
  */
  readonly relationInfraRsSpineCoppProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/spine_switch_policy_group#relation_infra_rs_spine_p_grp_to_cdp_if_pol DataAciSpineSwitchPolicyGroup#relation_infra_rs_spine_p_grp_to_cdp_if_pol}
  */
  readonly relationInfraRsSpinePGrpToCdpIfPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/spine_switch_policy_group#relation_infra_rs_spine_p_grp_to_lldp_if_pol DataAciSpineSwitchPolicyGroup#relation_infra_rs_spine_p_grp_to_lldp_if_pol}
  */
  readonly relationInfraRsSpinePGrpToLldpIfPol?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/spine_switch_policy_group aci_spine_switch_policy_group}
*/
export class DataAciSpineSwitchPolicyGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_spine_switch_policy_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciSpineSwitchPolicyGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciSpineSwitchPolicyGroup to import
  * @param importFromId The id of the existing DataAciSpineSwitchPolicyGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/spine_switch_policy_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciSpineSwitchPolicyGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_spine_switch_policy_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/spine_switch_policy_group aci_spine_switch_policy_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciSpineSwitchPolicyGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciSpineSwitchPolicyGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_spine_switch_policy_group',
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
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._relationInfraRsIaclSpineProfile = config.relationInfraRsIaclSpineProfile;
    this._relationInfraRsSpineBfdIpv4InstPol = config.relationInfraRsSpineBfdIpv4InstPol;
    this._relationInfraRsSpineBfdIpv6InstPol = config.relationInfraRsSpineBfdIpv6InstPol;
    this._relationInfraRsSpineCoppProfile = config.relationInfraRsSpineCoppProfile;
    this._relationInfraRsSpinePGrpToCdpIfPol = config.relationInfraRsSpinePGrpToCdpIfPol;
    this._relationInfraRsSpinePGrpToLldpIfPol = config.relationInfraRsSpinePGrpToLldpIfPol;
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

  // relation_infra_rs_iacl_spine_profile - computed: false, optional: true, required: false
  private _relationInfraRsIaclSpineProfile?: string; 
  public get relationInfraRsIaclSpineProfile() {
    return this.getStringAttribute('relation_infra_rs_iacl_spine_profile');
  }
  public set relationInfraRsIaclSpineProfile(value: string) {
    this._relationInfraRsIaclSpineProfile = value;
  }
  public resetRelationInfraRsIaclSpineProfile() {
    this._relationInfraRsIaclSpineProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsIaclSpineProfileInput() {
    return this._relationInfraRsIaclSpineProfile;
  }

  // relation_infra_rs_spine_bfd_ipv4_inst_pol - computed: false, optional: true, required: false
  private _relationInfraRsSpineBfdIpv4InstPol?: string; 
  public get relationInfraRsSpineBfdIpv4InstPol() {
    return this.getStringAttribute('relation_infra_rs_spine_bfd_ipv4_inst_pol');
  }
  public set relationInfraRsSpineBfdIpv4InstPol(value: string) {
    this._relationInfraRsSpineBfdIpv4InstPol = value;
  }
  public resetRelationInfraRsSpineBfdIpv4InstPol() {
    this._relationInfraRsSpineBfdIpv4InstPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsSpineBfdIpv4InstPolInput() {
    return this._relationInfraRsSpineBfdIpv4InstPol;
  }

  // relation_infra_rs_spine_bfd_ipv6_inst_pol - computed: false, optional: true, required: false
  private _relationInfraRsSpineBfdIpv6InstPol?: string; 
  public get relationInfraRsSpineBfdIpv6InstPol() {
    return this.getStringAttribute('relation_infra_rs_spine_bfd_ipv6_inst_pol');
  }
  public set relationInfraRsSpineBfdIpv6InstPol(value: string) {
    this._relationInfraRsSpineBfdIpv6InstPol = value;
  }
  public resetRelationInfraRsSpineBfdIpv6InstPol() {
    this._relationInfraRsSpineBfdIpv6InstPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsSpineBfdIpv6InstPolInput() {
    return this._relationInfraRsSpineBfdIpv6InstPol;
  }

  // relation_infra_rs_spine_copp_profile - computed: false, optional: true, required: false
  private _relationInfraRsSpineCoppProfile?: string; 
  public get relationInfraRsSpineCoppProfile() {
    return this.getStringAttribute('relation_infra_rs_spine_copp_profile');
  }
  public set relationInfraRsSpineCoppProfile(value: string) {
    this._relationInfraRsSpineCoppProfile = value;
  }
  public resetRelationInfraRsSpineCoppProfile() {
    this._relationInfraRsSpineCoppProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsSpineCoppProfileInput() {
    return this._relationInfraRsSpineCoppProfile;
  }

  // relation_infra_rs_spine_p_grp_to_cdp_if_pol - computed: false, optional: true, required: false
  private _relationInfraRsSpinePGrpToCdpIfPol?: string; 
  public get relationInfraRsSpinePGrpToCdpIfPol() {
    return this.getStringAttribute('relation_infra_rs_spine_p_grp_to_cdp_if_pol');
  }
  public set relationInfraRsSpinePGrpToCdpIfPol(value: string) {
    this._relationInfraRsSpinePGrpToCdpIfPol = value;
  }
  public resetRelationInfraRsSpinePGrpToCdpIfPol() {
    this._relationInfraRsSpinePGrpToCdpIfPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsSpinePGrpToCdpIfPolInput() {
    return this._relationInfraRsSpinePGrpToCdpIfPol;
  }

  // relation_infra_rs_spine_p_grp_to_lldp_if_pol - computed: false, optional: true, required: false
  private _relationInfraRsSpinePGrpToLldpIfPol?: string; 
  public get relationInfraRsSpinePGrpToLldpIfPol() {
    return this.getStringAttribute('relation_infra_rs_spine_p_grp_to_lldp_if_pol');
  }
  public set relationInfraRsSpinePGrpToLldpIfPol(value: string) {
    this._relationInfraRsSpinePGrpToLldpIfPol = value;
  }
  public resetRelationInfraRsSpinePGrpToLldpIfPol() {
    this._relationInfraRsSpinePGrpToLldpIfPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsSpinePGrpToLldpIfPolInput() {
    return this._relationInfraRsSpinePGrpToLldpIfPol;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      relation_infra_rs_iacl_spine_profile: cdktf.stringToTerraform(this._relationInfraRsIaclSpineProfile),
      relation_infra_rs_spine_bfd_ipv4_inst_pol: cdktf.stringToTerraform(this._relationInfraRsSpineBfdIpv4InstPol),
      relation_infra_rs_spine_bfd_ipv6_inst_pol: cdktf.stringToTerraform(this._relationInfraRsSpineBfdIpv6InstPol),
      relation_infra_rs_spine_copp_profile: cdktf.stringToTerraform(this._relationInfraRsSpineCoppProfile),
      relation_infra_rs_spine_p_grp_to_cdp_if_pol: cdktf.stringToTerraform(this._relationInfraRsSpinePGrpToCdpIfPol),
      relation_infra_rs_spine_p_grp_to_lldp_if_pol: cdktf.stringToTerraform(this._relationInfraRsSpinePGrpToLldpIfPol),
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
      relation_infra_rs_iacl_spine_profile: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsIaclSpineProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_spine_bfd_ipv4_inst_pol: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsSpineBfdIpv4InstPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_spine_bfd_ipv6_inst_pol: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsSpineBfdIpv6InstPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_spine_copp_profile: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsSpineCoppProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_spine_p_grp_to_cdp_if_pol: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsSpinePGrpToCdpIfPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_spine_p_grp_to_lldp_if_pol: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsSpinePGrpToLldpIfPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
