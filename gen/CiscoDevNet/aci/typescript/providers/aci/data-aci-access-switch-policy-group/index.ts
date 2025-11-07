// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/access_switch_policy_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciAccessSwitchPolicyGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/access_switch_policy_group#annotation DataAciAccessSwitchPolicyGroup#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/access_switch_policy_group#description DataAciAccessSwitchPolicyGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/access_switch_policy_group#id DataAciAccessSwitchPolicyGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/access_switch_policy_group#name DataAciAccessSwitchPolicyGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/access_switch_policy_group#name_alias DataAciAccessSwitchPolicyGroup#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/access_switch_policy_group#relation_infra_rs_bfd_ipv4_inst_pol DataAciAccessSwitchPolicyGroup#relation_infra_rs_bfd_ipv4_inst_pol}
  */
  readonly relationInfraRsBfdIpv4InstPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/access_switch_policy_group#relation_infra_rs_bfd_ipv6_inst_pol DataAciAccessSwitchPolicyGroup#relation_infra_rs_bfd_ipv6_inst_pol}
  */
  readonly relationInfraRsBfdIpv6InstPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/access_switch_policy_group#relation_infra_rs_bfd_mh_ipv4_inst_pol DataAciAccessSwitchPolicyGroup#relation_infra_rs_bfd_mh_ipv4_inst_pol}
  */
  readonly relationInfraRsBfdMhIpv4InstPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/access_switch_policy_group#relation_infra_rs_bfd_mh_ipv6_inst_pol DataAciAccessSwitchPolicyGroup#relation_infra_rs_bfd_mh_ipv6_inst_pol}
  */
  readonly relationInfraRsBfdMhIpv6InstPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/access_switch_policy_group#relation_infra_rs_equipment_flash_config_pol DataAciAccessSwitchPolicyGroup#relation_infra_rs_equipment_flash_config_pol}
  */
  readonly relationInfraRsEquipmentFlashConfigPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/access_switch_policy_group#relation_infra_rs_fc_fabric_pol DataAciAccessSwitchPolicyGroup#relation_infra_rs_fc_fabric_pol}
  */
  readonly relationInfraRsFcFabricPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/access_switch_policy_group#relation_infra_rs_fc_inst_pol DataAciAccessSwitchPolicyGroup#relation_infra_rs_fc_inst_pol}
  */
  readonly relationInfraRsFcInstPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/access_switch_policy_group#relation_infra_rs_iacl_leaf_profile DataAciAccessSwitchPolicyGroup#relation_infra_rs_iacl_leaf_profile}
  */
  readonly relationInfraRsIaclLeafProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/access_switch_policy_group#relation_infra_rs_l2_node_auth_pol DataAciAccessSwitchPolicyGroup#relation_infra_rs_l2_node_auth_pol}
  */
  readonly relationInfraRsL2NodeAuthPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/access_switch_policy_group#relation_infra_rs_leaf_copp_profile DataAciAccessSwitchPolicyGroup#relation_infra_rs_leaf_copp_profile}
  */
  readonly relationInfraRsLeafCoppProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/access_switch_policy_group#relation_infra_rs_leaf_p_grp_to_cdp_if_pol DataAciAccessSwitchPolicyGroup#relation_infra_rs_leaf_p_grp_to_cdp_if_pol}
  */
  readonly relationInfraRsLeafPGrpToCdpIfPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/access_switch_policy_group#relation_infra_rs_leaf_p_grp_to_lldp_if_pol DataAciAccessSwitchPolicyGroup#relation_infra_rs_leaf_p_grp_to_lldp_if_pol}
  */
  readonly relationInfraRsLeafPGrpToLldpIfPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/access_switch_policy_group#relation_infra_rs_mon_node_infra_pol DataAciAccessSwitchPolicyGroup#relation_infra_rs_mon_node_infra_pol}
  */
  readonly relationInfraRsMonNodeInfraPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/access_switch_policy_group#relation_infra_rs_mst_inst_pol DataAciAccessSwitchPolicyGroup#relation_infra_rs_mst_inst_pol}
  */
  readonly relationInfraRsMstInstPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/access_switch_policy_group#relation_infra_rs_netflow_node_pol DataAciAccessSwitchPolicyGroup#relation_infra_rs_netflow_node_pol}
  */
  readonly relationInfraRsNetflowNodePol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/access_switch_policy_group#relation_infra_rs_poe_inst_pol DataAciAccessSwitchPolicyGroup#relation_infra_rs_poe_inst_pol}
  */
  readonly relationInfraRsPoeInstPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/access_switch_policy_group#relation_infra_rs_topoctrl_fast_link_failover_inst_pol DataAciAccessSwitchPolicyGroup#relation_infra_rs_topoctrl_fast_link_failover_inst_pol}
  */
  readonly relationInfraRsTopoctrlFastLinkFailoverInstPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/access_switch_policy_group#relation_infra_rs_topoctrl_fwd_scale_prof_pol DataAciAccessSwitchPolicyGroup#relation_infra_rs_topoctrl_fwd_scale_prof_pol}
  */
  readonly relationInfraRsTopoctrlFwdScaleProfPol?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/access_switch_policy_group aci_access_switch_policy_group}
*/
export class DataAciAccessSwitchPolicyGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_access_switch_policy_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciAccessSwitchPolicyGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciAccessSwitchPolicyGroup to import
  * @param importFromId The id of the existing DataAciAccessSwitchPolicyGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/access_switch_policy_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciAccessSwitchPolicyGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_access_switch_policy_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/access_switch_policy_group aci_access_switch_policy_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciAccessSwitchPolicyGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciAccessSwitchPolicyGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_access_switch_policy_group',
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
    this._annotation = config.annotation;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._relationInfraRsBfdIpv4InstPol = config.relationInfraRsBfdIpv4InstPol;
    this._relationInfraRsBfdIpv6InstPol = config.relationInfraRsBfdIpv6InstPol;
    this._relationInfraRsBfdMhIpv4InstPol = config.relationInfraRsBfdMhIpv4InstPol;
    this._relationInfraRsBfdMhIpv6InstPol = config.relationInfraRsBfdMhIpv6InstPol;
    this._relationInfraRsEquipmentFlashConfigPol = config.relationInfraRsEquipmentFlashConfigPol;
    this._relationInfraRsFcFabricPol = config.relationInfraRsFcFabricPol;
    this._relationInfraRsFcInstPol = config.relationInfraRsFcInstPol;
    this._relationInfraRsIaclLeafProfile = config.relationInfraRsIaclLeafProfile;
    this._relationInfraRsL2NodeAuthPol = config.relationInfraRsL2NodeAuthPol;
    this._relationInfraRsLeafCoppProfile = config.relationInfraRsLeafCoppProfile;
    this._relationInfraRsLeafPGrpToCdpIfPol = config.relationInfraRsLeafPGrpToCdpIfPol;
    this._relationInfraRsLeafPGrpToLldpIfPol = config.relationInfraRsLeafPGrpToLldpIfPol;
    this._relationInfraRsMonNodeInfraPol = config.relationInfraRsMonNodeInfraPol;
    this._relationInfraRsMstInstPol = config.relationInfraRsMstInstPol;
    this._relationInfraRsNetflowNodePol = config.relationInfraRsNetflowNodePol;
    this._relationInfraRsPoeInstPol = config.relationInfraRsPoeInstPol;
    this._relationInfraRsTopoctrlFastLinkFailoverInstPol = config.relationInfraRsTopoctrlFastLinkFailoverInstPol;
    this._relationInfraRsTopoctrlFwdScaleProfPol = config.relationInfraRsTopoctrlFwdScaleProfPol;
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

  // relation_infra_rs_bfd_ipv4_inst_pol - computed: false, optional: true, required: false
  private _relationInfraRsBfdIpv4InstPol?: string; 
  public get relationInfraRsBfdIpv4InstPol() {
    return this.getStringAttribute('relation_infra_rs_bfd_ipv4_inst_pol');
  }
  public set relationInfraRsBfdIpv4InstPol(value: string) {
    this._relationInfraRsBfdIpv4InstPol = value;
  }
  public resetRelationInfraRsBfdIpv4InstPol() {
    this._relationInfraRsBfdIpv4InstPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsBfdIpv4InstPolInput() {
    return this._relationInfraRsBfdIpv4InstPol;
  }

  // relation_infra_rs_bfd_ipv6_inst_pol - computed: false, optional: true, required: false
  private _relationInfraRsBfdIpv6InstPol?: string; 
  public get relationInfraRsBfdIpv6InstPol() {
    return this.getStringAttribute('relation_infra_rs_bfd_ipv6_inst_pol');
  }
  public set relationInfraRsBfdIpv6InstPol(value: string) {
    this._relationInfraRsBfdIpv6InstPol = value;
  }
  public resetRelationInfraRsBfdIpv6InstPol() {
    this._relationInfraRsBfdIpv6InstPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsBfdIpv6InstPolInput() {
    return this._relationInfraRsBfdIpv6InstPol;
  }

  // relation_infra_rs_bfd_mh_ipv4_inst_pol - computed: false, optional: true, required: false
  private _relationInfraRsBfdMhIpv4InstPol?: string; 
  public get relationInfraRsBfdMhIpv4InstPol() {
    return this.getStringAttribute('relation_infra_rs_bfd_mh_ipv4_inst_pol');
  }
  public set relationInfraRsBfdMhIpv4InstPol(value: string) {
    this._relationInfraRsBfdMhIpv4InstPol = value;
  }
  public resetRelationInfraRsBfdMhIpv4InstPol() {
    this._relationInfraRsBfdMhIpv4InstPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsBfdMhIpv4InstPolInput() {
    return this._relationInfraRsBfdMhIpv4InstPol;
  }

  // relation_infra_rs_bfd_mh_ipv6_inst_pol - computed: false, optional: true, required: false
  private _relationInfraRsBfdMhIpv6InstPol?: string; 
  public get relationInfraRsBfdMhIpv6InstPol() {
    return this.getStringAttribute('relation_infra_rs_bfd_mh_ipv6_inst_pol');
  }
  public set relationInfraRsBfdMhIpv6InstPol(value: string) {
    this._relationInfraRsBfdMhIpv6InstPol = value;
  }
  public resetRelationInfraRsBfdMhIpv6InstPol() {
    this._relationInfraRsBfdMhIpv6InstPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsBfdMhIpv6InstPolInput() {
    return this._relationInfraRsBfdMhIpv6InstPol;
  }

  // relation_infra_rs_equipment_flash_config_pol - computed: false, optional: true, required: false
  private _relationInfraRsEquipmentFlashConfigPol?: string; 
  public get relationInfraRsEquipmentFlashConfigPol() {
    return this.getStringAttribute('relation_infra_rs_equipment_flash_config_pol');
  }
  public set relationInfraRsEquipmentFlashConfigPol(value: string) {
    this._relationInfraRsEquipmentFlashConfigPol = value;
  }
  public resetRelationInfraRsEquipmentFlashConfigPol() {
    this._relationInfraRsEquipmentFlashConfigPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsEquipmentFlashConfigPolInput() {
    return this._relationInfraRsEquipmentFlashConfigPol;
  }

  // relation_infra_rs_fc_fabric_pol - computed: false, optional: true, required: false
  private _relationInfraRsFcFabricPol?: string; 
  public get relationInfraRsFcFabricPol() {
    return this.getStringAttribute('relation_infra_rs_fc_fabric_pol');
  }
  public set relationInfraRsFcFabricPol(value: string) {
    this._relationInfraRsFcFabricPol = value;
  }
  public resetRelationInfraRsFcFabricPol() {
    this._relationInfraRsFcFabricPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsFcFabricPolInput() {
    return this._relationInfraRsFcFabricPol;
  }

  // relation_infra_rs_fc_inst_pol - computed: false, optional: true, required: false
  private _relationInfraRsFcInstPol?: string; 
  public get relationInfraRsFcInstPol() {
    return this.getStringAttribute('relation_infra_rs_fc_inst_pol');
  }
  public set relationInfraRsFcInstPol(value: string) {
    this._relationInfraRsFcInstPol = value;
  }
  public resetRelationInfraRsFcInstPol() {
    this._relationInfraRsFcInstPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsFcInstPolInput() {
    return this._relationInfraRsFcInstPol;
  }

  // relation_infra_rs_iacl_leaf_profile - computed: false, optional: true, required: false
  private _relationInfraRsIaclLeafProfile?: string; 
  public get relationInfraRsIaclLeafProfile() {
    return this.getStringAttribute('relation_infra_rs_iacl_leaf_profile');
  }
  public set relationInfraRsIaclLeafProfile(value: string) {
    this._relationInfraRsIaclLeafProfile = value;
  }
  public resetRelationInfraRsIaclLeafProfile() {
    this._relationInfraRsIaclLeafProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsIaclLeafProfileInput() {
    return this._relationInfraRsIaclLeafProfile;
  }

  // relation_infra_rs_l2_node_auth_pol - computed: false, optional: true, required: false
  private _relationInfraRsL2NodeAuthPol?: string; 
  public get relationInfraRsL2NodeAuthPol() {
    return this.getStringAttribute('relation_infra_rs_l2_node_auth_pol');
  }
  public set relationInfraRsL2NodeAuthPol(value: string) {
    this._relationInfraRsL2NodeAuthPol = value;
  }
  public resetRelationInfraRsL2NodeAuthPol() {
    this._relationInfraRsL2NodeAuthPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsL2NodeAuthPolInput() {
    return this._relationInfraRsL2NodeAuthPol;
  }

  // relation_infra_rs_leaf_copp_profile - computed: false, optional: true, required: false
  private _relationInfraRsLeafCoppProfile?: string; 
  public get relationInfraRsLeafCoppProfile() {
    return this.getStringAttribute('relation_infra_rs_leaf_copp_profile');
  }
  public set relationInfraRsLeafCoppProfile(value: string) {
    this._relationInfraRsLeafCoppProfile = value;
  }
  public resetRelationInfraRsLeafCoppProfile() {
    this._relationInfraRsLeafCoppProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsLeafCoppProfileInput() {
    return this._relationInfraRsLeafCoppProfile;
  }

  // relation_infra_rs_leaf_p_grp_to_cdp_if_pol - computed: false, optional: true, required: false
  private _relationInfraRsLeafPGrpToCdpIfPol?: string; 
  public get relationInfraRsLeafPGrpToCdpIfPol() {
    return this.getStringAttribute('relation_infra_rs_leaf_p_grp_to_cdp_if_pol');
  }
  public set relationInfraRsLeafPGrpToCdpIfPol(value: string) {
    this._relationInfraRsLeafPGrpToCdpIfPol = value;
  }
  public resetRelationInfraRsLeafPGrpToCdpIfPol() {
    this._relationInfraRsLeafPGrpToCdpIfPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsLeafPGrpToCdpIfPolInput() {
    return this._relationInfraRsLeafPGrpToCdpIfPol;
  }

  // relation_infra_rs_leaf_p_grp_to_lldp_if_pol - computed: false, optional: true, required: false
  private _relationInfraRsLeafPGrpToLldpIfPol?: string; 
  public get relationInfraRsLeafPGrpToLldpIfPol() {
    return this.getStringAttribute('relation_infra_rs_leaf_p_grp_to_lldp_if_pol');
  }
  public set relationInfraRsLeafPGrpToLldpIfPol(value: string) {
    this._relationInfraRsLeafPGrpToLldpIfPol = value;
  }
  public resetRelationInfraRsLeafPGrpToLldpIfPol() {
    this._relationInfraRsLeafPGrpToLldpIfPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsLeafPGrpToLldpIfPolInput() {
    return this._relationInfraRsLeafPGrpToLldpIfPol;
  }

  // relation_infra_rs_mon_node_infra_pol - computed: false, optional: true, required: false
  private _relationInfraRsMonNodeInfraPol?: string; 
  public get relationInfraRsMonNodeInfraPol() {
    return this.getStringAttribute('relation_infra_rs_mon_node_infra_pol');
  }
  public set relationInfraRsMonNodeInfraPol(value: string) {
    this._relationInfraRsMonNodeInfraPol = value;
  }
  public resetRelationInfraRsMonNodeInfraPol() {
    this._relationInfraRsMonNodeInfraPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsMonNodeInfraPolInput() {
    return this._relationInfraRsMonNodeInfraPol;
  }

  // relation_infra_rs_mst_inst_pol - computed: false, optional: true, required: false
  private _relationInfraRsMstInstPol?: string; 
  public get relationInfraRsMstInstPol() {
    return this.getStringAttribute('relation_infra_rs_mst_inst_pol');
  }
  public set relationInfraRsMstInstPol(value: string) {
    this._relationInfraRsMstInstPol = value;
  }
  public resetRelationInfraRsMstInstPol() {
    this._relationInfraRsMstInstPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsMstInstPolInput() {
    return this._relationInfraRsMstInstPol;
  }

  // relation_infra_rs_netflow_node_pol - computed: false, optional: true, required: false
  private _relationInfraRsNetflowNodePol?: string; 
  public get relationInfraRsNetflowNodePol() {
    return this.getStringAttribute('relation_infra_rs_netflow_node_pol');
  }
  public set relationInfraRsNetflowNodePol(value: string) {
    this._relationInfraRsNetflowNodePol = value;
  }
  public resetRelationInfraRsNetflowNodePol() {
    this._relationInfraRsNetflowNodePol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsNetflowNodePolInput() {
    return this._relationInfraRsNetflowNodePol;
  }

  // relation_infra_rs_poe_inst_pol - computed: false, optional: true, required: false
  private _relationInfraRsPoeInstPol?: string; 
  public get relationInfraRsPoeInstPol() {
    return this.getStringAttribute('relation_infra_rs_poe_inst_pol');
  }
  public set relationInfraRsPoeInstPol(value: string) {
    this._relationInfraRsPoeInstPol = value;
  }
  public resetRelationInfraRsPoeInstPol() {
    this._relationInfraRsPoeInstPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsPoeInstPolInput() {
    return this._relationInfraRsPoeInstPol;
  }

  // relation_infra_rs_topoctrl_fast_link_failover_inst_pol - computed: false, optional: true, required: false
  private _relationInfraRsTopoctrlFastLinkFailoverInstPol?: string; 
  public get relationInfraRsTopoctrlFastLinkFailoverInstPol() {
    return this.getStringAttribute('relation_infra_rs_topoctrl_fast_link_failover_inst_pol');
  }
  public set relationInfraRsTopoctrlFastLinkFailoverInstPol(value: string) {
    this._relationInfraRsTopoctrlFastLinkFailoverInstPol = value;
  }
  public resetRelationInfraRsTopoctrlFastLinkFailoverInstPol() {
    this._relationInfraRsTopoctrlFastLinkFailoverInstPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsTopoctrlFastLinkFailoverInstPolInput() {
    return this._relationInfraRsTopoctrlFastLinkFailoverInstPol;
  }

  // relation_infra_rs_topoctrl_fwd_scale_prof_pol - computed: false, optional: true, required: false
  private _relationInfraRsTopoctrlFwdScaleProfPol?: string; 
  public get relationInfraRsTopoctrlFwdScaleProfPol() {
    return this.getStringAttribute('relation_infra_rs_topoctrl_fwd_scale_prof_pol');
  }
  public set relationInfraRsTopoctrlFwdScaleProfPol(value: string) {
    this._relationInfraRsTopoctrlFwdScaleProfPol = value;
  }
  public resetRelationInfraRsTopoctrlFwdScaleProfPol() {
    this._relationInfraRsTopoctrlFwdScaleProfPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsTopoctrlFwdScaleProfPolInput() {
    return this._relationInfraRsTopoctrlFwdScaleProfPol;
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
      relation_infra_rs_bfd_ipv4_inst_pol: cdktf.stringToTerraform(this._relationInfraRsBfdIpv4InstPol),
      relation_infra_rs_bfd_ipv6_inst_pol: cdktf.stringToTerraform(this._relationInfraRsBfdIpv6InstPol),
      relation_infra_rs_bfd_mh_ipv4_inst_pol: cdktf.stringToTerraform(this._relationInfraRsBfdMhIpv4InstPol),
      relation_infra_rs_bfd_mh_ipv6_inst_pol: cdktf.stringToTerraform(this._relationInfraRsBfdMhIpv6InstPol),
      relation_infra_rs_equipment_flash_config_pol: cdktf.stringToTerraform(this._relationInfraRsEquipmentFlashConfigPol),
      relation_infra_rs_fc_fabric_pol: cdktf.stringToTerraform(this._relationInfraRsFcFabricPol),
      relation_infra_rs_fc_inst_pol: cdktf.stringToTerraform(this._relationInfraRsFcInstPol),
      relation_infra_rs_iacl_leaf_profile: cdktf.stringToTerraform(this._relationInfraRsIaclLeafProfile),
      relation_infra_rs_l2_node_auth_pol: cdktf.stringToTerraform(this._relationInfraRsL2NodeAuthPol),
      relation_infra_rs_leaf_copp_profile: cdktf.stringToTerraform(this._relationInfraRsLeafCoppProfile),
      relation_infra_rs_leaf_p_grp_to_cdp_if_pol: cdktf.stringToTerraform(this._relationInfraRsLeafPGrpToCdpIfPol),
      relation_infra_rs_leaf_p_grp_to_lldp_if_pol: cdktf.stringToTerraform(this._relationInfraRsLeafPGrpToLldpIfPol),
      relation_infra_rs_mon_node_infra_pol: cdktf.stringToTerraform(this._relationInfraRsMonNodeInfraPol),
      relation_infra_rs_mst_inst_pol: cdktf.stringToTerraform(this._relationInfraRsMstInstPol),
      relation_infra_rs_netflow_node_pol: cdktf.stringToTerraform(this._relationInfraRsNetflowNodePol),
      relation_infra_rs_poe_inst_pol: cdktf.stringToTerraform(this._relationInfraRsPoeInstPol),
      relation_infra_rs_topoctrl_fast_link_failover_inst_pol: cdktf.stringToTerraform(this._relationInfraRsTopoctrlFastLinkFailoverInstPol),
      relation_infra_rs_topoctrl_fwd_scale_prof_pol: cdktf.stringToTerraform(this._relationInfraRsTopoctrlFwdScaleProfPol),
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
      relation_infra_rs_bfd_ipv4_inst_pol: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsBfdIpv4InstPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_bfd_ipv6_inst_pol: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsBfdIpv6InstPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_bfd_mh_ipv4_inst_pol: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsBfdMhIpv4InstPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_bfd_mh_ipv6_inst_pol: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsBfdMhIpv6InstPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_equipment_flash_config_pol: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsEquipmentFlashConfigPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_fc_fabric_pol: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsFcFabricPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_fc_inst_pol: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsFcInstPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_iacl_leaf_profile: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsIaclLeafProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_l2_node_auth_pol: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsL2NodeAuthPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_leaf_copp_profile: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsLeafCoppProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_leaf_p_grp_to_cdp_if_pol: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsLeafPGrpToCdpIfPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_leaf_p_grp_to_lldp_if_pol: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsLeafPGrpToLldpIfPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_mon_node_infra_pol: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsMonNodeInfraPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_mst_inst_pol: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsMstInstPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_netflow_node_pol: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsNetflowNodePol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_poe_inst_pol: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsPoeInstPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_topoctrl_fast_link_failover_inst_pol: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsTopoctrlFastLinkFailoverInstPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_topoctrl_fwd_scale_prof_pol: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsTopoctrlFwdScaleProfPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
