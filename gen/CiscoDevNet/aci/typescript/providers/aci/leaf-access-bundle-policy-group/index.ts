// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/leaf_access_bundle_policy_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LeafAccessBundlePolicyGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/leaf_access_bundle_policy_group#annotation LeafAccessBundlePolicyGroup#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/leaf_access_bundle_policy_group#description LeafAccessBundlePolicyGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/leaf_access_bundle_policy_group#id LeafAccessBundlePolicyGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/leaf_access_bundle_policy_group#lag_t LeafAccessBundlePolicyGroup#lag_t}
  */
  readonly lagT?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/leaf_access_bundle_policy_group#name LeafAccessBundlePolicyGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/leaf_access_bundle_policy_group#name_alias LeafAccessBundlePolicyGroup#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/leaf_access_bundle_policy_group#relation_infra_rs_att_ent_p LeafAccessBundlePolicyGroup#relation_infra_rs_att_ent_p}
  */
  readonly relationInfraRsAttEntP?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/leaf_access_bundle_policy_group#relation_infra_rs_cdp_if_pol LeafAccessBundlePolicyGroup#relation_infra_rs_cdp_if_pol}
  */
  readonly relationInfraRsCdpIfPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/leaf_access_bundle_policy_group#relation_infra_rs_copp_if_pol LeafAccessBundlePolicyGroup#relation_infra_rs_copp_if_pol}
  */
  readonly relationInfraRsCoppIfPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/leaf_access_bundle_policy_group#relation_infra_rs_fc_if_pol LeafAccessBundlePolicyGroup#relation_infra_rs_fc_if_pol}
  */
  readonly relationInfraRsFcIfPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/leaf_access_bundle_policy_group#relation_infra_rs_h_if_pol LeafAccessBundlePolicyGroup#relation_infra_rs_h_if_pol}
  */
  readonly relationInfraRsHIfPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/leaf_access_bundle_policy_group#relation_infra_rs_l2_if_pol LeafAccessBundlePolicyGroup#relation_infra_rs_l2_if_pol}
  */
  readonly relationInfraRsL2IfPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/leaf_access_bundle_policy_group#relation_infra_rs_l2_inst_pol LeafAccessBundlePolicyGroup#relation_infra_rs_l2_inst_pol}
  */
  readonly relationInfraRsL2InstPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/leaf_access_bundle_policy_group#relation_infra_rs_l2_port_auth_pol LeafAccessBundlePolicyGroup#relation_infra_rs_l2_port_auth_pol}
  */
  readonly relationInfraRsL2PortAuthPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/leaf_access_bundle_policy_group#relation_infra_rs_l2_port_security_pol LeafAccessBundlePolicyGroup#relation_infra_rs_l2_port_security_pol}
  */
  readonly relationInfraRsL2PortSecurityPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/leaf_access_bundle_policy_group#relation_infra_rs_lacp_pol LeafAccessBundlePolicyGroup#relation_infra_rs_lacp_pol}
  */
  readonly relationInfraRsLacpPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/leaf_access_bundle_policy_group#relation_infra_rs_lldp_if_pol LeafAccessBundlePolicyGroup#relation_infra_rs_lldp_if_pol}
  */
  readonly relationInfraRsLldpIfPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/leaf_access_bundle_policy_group#relation_infra_rs_macsec_if_pol LeafAccessBundlePolicyGroup#relation_infra_rs_macsec_if_pol}
  */
  readonly relationInfraRsMacsecIfPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/leaf_access_bundle_policy_group#relation_infra_rs_mcp_if_pol LeafAccessBundlePolicyGroup#relation_infra_rs_mcp_if_pol}
  */
  readonly relationInfraRsMcpIfPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/leaf_access_bundle_policy_group#relation_infra_rs_mon_if_infra_pol LeafAccessBundlePolicyGroup#relation_infra_rs_mon_if_infra_pol}
  */
  readonly relationInfraRsMonIfInfraPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/leaf_access_bundle_policy_group#relation_infra_rs_qos_dpp_if_pol LeafAccessBundlePolicyGroup#relation_infra_rs_qos_dpp_if_pol}
  */
  readonly relationInfraRsQosDppIfPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/leaf_access_bundle_policy_group#relation_infra_rs_qos_egress_dpp_if_pol LeafAccessBundlePolicyGroup#relation_infra_rs_qos_egress_dpp_if_pol}
  */
  readonly relationInfraRsQosEgressDppIfPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/leaf_access_bundle_policy_group#relation_infra_rs_qos_ingress_dpp_if_pol LeafAccessBundlePolicyGroup#relation_infra_rs_qos_ingress_dpp_if_pol}
  */
  readonly relationInfraRsQosIngressDppIfPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/leaf_access_bundle_policy_group#relation_infra_rs_qos_pfc_if_pol LeafAccessBundlePolicyGroup#relation_infra_rs_qos_pfc_if_pol}
  */
  readonly relationInfraRsQosPfcIfPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/leaf_access_bundle_policy_group#relation_infra_rs_qos_sd_if_pol LeafAccessBundlePolicyGroup#relation_infra_rs_qos_sd_if_pol}
  */
  readonly relationInfraRsQosSdIfPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/leaf_access_bundle_policy_group#relation_infra_rs_span_v_dest_grp LeafAccessBundlePolicyGroup#relation_infra_rs_span_v_dest_grp}
  */
  readonly relationInfraRsSpanVDestGrp?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/leaf_access_bundle_policy_group#relation_infra_rs_span_v_src_grp LeafAccessBundlePolicyGroup#relation_infra_rs_span_v_src_grp}
  */
  readonly relationInfraRsSpanVSrcGrp?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/leaf_access_bundle_policy_group#relation_infra_rs_stormctrl_if_pol LeafAccessBundlePolicyGroup#relation_infra_rs_stormctrl_if_pol}
  */
  readonly relationInfraRsStormctrlIfPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/leaf_access_bundle_policy_group#relation_infra_rs_stp_if_pol LeafAccessBundlePolicyGroup#relation_infra_rs_stp_if_pol}
  */
  readonly relationInfraRsStpIfPol?: string;
  /**
  * relation_infra_rs_netflow_monitor_pol block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/leaf_access_bundle_policy_group#relation_infra_rs_netflow_monitor_pol LeafAccessBundlePolicyGroup#relation_infra_rs_netflow_monitor_pol}
  */
  readonly relationInfraRsNetflowMonitorPol?: LeafAccessBundlePolicyGroupRelationInfraRsNetflowMonitorPol[] | cdktf.IResolvable;
}
export interface LeafAccessBundlePolicyGroupRelationInfraRsNetflowMonitorPol {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/leaf_access_bundle_policy_group#flt_type LeafAccessBundlePolicyGroup#flt_type}
  */
  readonly fltType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/leaf_access_bundle_policy_group#target_dn LeafAccessBundlePolicyGroup#target_dn}
  */
  readonly targetDn: string;
}

export function leafAccessBundlePolicyGroupRelationInfraRsNetflowMonitorPolToTerraform(struct?: LeafAccessBundlePolicyGroupRelationInfraRsNetflowMonitorPol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flt_type: cdktf.stringToTerraform(struct!.fltType),
    target_dn: cdktf.stringToTerraform(struct!.targetDn),
  }
}


export function leafAccessBundlePolicyGroupRelationInfraRsNetflowMonitorPolToHclTerraform(struct?: LeafAccessBundlePolicyGroupRelationInfraRsNetflowMonitorPol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flt_type: {
      value: cdktf.stringToHclTerraform(struct!.fltType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_dn: {
      value: cdktf.stringToHclTerraform(struct!.targetDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LeafAccessBundlePolicyGroupRelationInfraRsNetflowMonitorPolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LeafAccessBundlePolicyGroupRelationInfraRsNetflowMonitorPol | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fltType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fltType = this._fltType;
    }
    if (this._targetDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDn = this._targetDn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LeafAccessBundlePolicyGroupRelationInfraRsNetflowMonitorPol | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fltType = undefined;
      this._targetDn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fltType = value.fltType;
      this._targetDn = value.targetDn;
    }
  }

  // flt_type - computed: false, optional: false, required: true
  private _fltType?: string; 
  public get fltType() {
    return this.getStringAttribute('flt_type');
  }
  public set fltType(value: string) {
    this._fltType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fltTypeInput() {
    return this._fltType;
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
}

export class LeafAccessBundlePolicyGroupRelationInfraRsNetflowMonitorPolList extends cdktf.ComplexList {
  public internalValue? : LeafAccessBundlePolicyGroupRelationInfraRsNetflowMonitorPol[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LeafAccessBundlePolicyGroupRelationInfraRsNetflowMonitorPolOutputReference {
    return new LeafAccessBundlePolicyGroupRelationInfraRsNetflowMonitorPolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/leaf_access_bundle_policy_group aci_leaf_access_bundle_policy_group}
*/
export class LeafAccessBundlePolicyGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_leaf_access_bundle_policy_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LeafAccessBundlePolicyGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LeafAccessBundlePolicyGroup to import
  * @param importFromId The id of the existing LeafAccessBundlePolicyGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/leaf_access_bundle_policy_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LeafAccessBundlePolicyGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_leaf_access_bundle_policy_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/leaf_access_bundle_policy_group aci_leaf_access_bundle_policy_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LeafAccessBundlePolicyGroupConfig
  */
  public constructor(scope: Construct, id: string, config: LeafAccessBundlePolicyGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_leaf_access_bundle_policy_group',
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
    this._lagT = config.lagT;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._relationInfraRsAttEntP = config.relationInfraRsAttEntP;
    this._relationInfraRsCdpIfPol = config.relationInfraRsCdpIfPol;
    this._relationInfraRsCoppIfPol = config.relationInfraRsCoppIfPol;
    this._relationInfraRsFcIfPol = config.relationInfraRsFcIfPol;
    this._relationInfraRsHIfPol = config.relationInfraRsHIfPol;
    this._relationInfraRsL2IfPol = config.relationInfraRsL2IfPol;
    this._relationInfraRsL2InstPol = config.relationInfraRsL2InstPol;
    this._relationInfraRsL2PortAuthPol = config.relationInfraRsL2PortAuthPol;
    this._relationInfraRsL2PortSecurityPol = config.relationInfraRsL2PortSecurityPol;
    this._relationInfraRsLacpPol = config.relationInfraRsLacpPol;
    this._relationInfraRsLldpIfPol = config.relationInfraRsLldpIfPol;
    this._relationInfraRsMacsecIfPol = config.relationInfraRsMacsecIfPol;
    this._relationInfraRsMcpIfPol = config.relationInfraRsMcpIfPol;
    this._relationInfraRsMonIfInfraPol = config.relationInfraRsMonIfInfraPol;
    this._relationInfraRsQosDppIfPol = config.relationInfraRsQosDppIfPol;
    this._relationInfraRsQosEgressDppIfPol = config.relationInfraRsQosEgressDppIfPol;
    this._relationInfraRsQosIngressDppIfPol = config.relationInfraRsQosIngressDppIfPol;
    this._relationInfraRsQosPfcIfPol = config.relationInfraRsQosPfcIfPol;
    this._relationInfraRsQosSdIfPol = config.relationInfraRsQosSdIfPol;
    this._relationInfraRsSpanVDestGrp = config.relationInfraRsSpanVDestGrp;
    this._relationInfraRsSpanVSrcGrp = config.relationInfraRsSpanVSrcGrp;
    this._relationInfraRsStormctrlIfPol = config.relationInfraRsStormctrlIfPol;
    this._relationInfraRsStpIfPol = config.relationInfraRsStpIfPol;
    this._relationInfraRsNetflowMonitorPol.internalValue = config.relationInfraRsNetflowMonitorPol;
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

  // lag_t - computed: true, optional: true, required: false
  private _lagT?: string; 
  public get lagT() {
    return this.getStringAttribute('lag_t');
  }
  public set lagT(value: string) {
    this._lagT = value;
  }
  public resetLagT() {
    this._lagT = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lagTInput() {
    return this._lagT;
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

  // relation_infra_rs_att_ent_p - computed: true, optional: true, required: false
  private _relationInfraRsAttEntP?: string; 
  public get relationInfraRsAttEntP() {
    return this.getStringAttribute('relation_infra_rs_att_ent_p');
  }
  public set relationInfraRsAttEntP(value: string) {
    this._relationInfraRsAttEntP = value;
  }
  public resetRelationInfraRsAttEntP() {
    this._relationInfraRsAttEntP = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsAttEntPInput() {
    return this._relationInfraRsAttEntP;
  }

  // relation_infra_rs_cdp_if_pol - computed: true, optional: true, required: false
  private _relationInfraRsCdpIfPol?: string; 
  public get relationInfraRsCdpIfPol() {
    return this.getStringAttribute('relation_infra_rs_cdp_if_pol');
  }
  public set relationInfraRsCdpIfPol(value: string) {
    this._relationInfraRsCdpIfPol = value;
  }
  public resetRelationInfraRsCdpIfPol() {
    this._relationInfraRsCdpIfPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsCdpIfPolInput() {
    return this._relationInfraRsCdpIfPol;
  }

  // relation_infra_rs_copp_if_pol - computed: true, optional: true, required: false
  private _relationInfraRsCoppIfPol?: string; 
  public get relationInfraRsCoppIfPol() {
    return this.getStringAttribute('relation_infra_rs_copp_if_pol');
  }
  public set relationInfraRsCoppIfPol(value: string) {
    this._relationInfraRsCoppIfPol = value;
  }
  public resetRelationInfraRsCoppIfPol() {
    this._relationInfraRsCoppIfPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsCoppIfPolInput() {
    return this._relationInfraRsCoppIfPol;
  }

  // relation_infra_rs_fc_if_pol - computed: true, optional: true, required: false
  private _relationInfraRsFcIfPol?: string; 
  public get relationInfraRsFcIfPol() {
    return this.getStringAttribute('relation_infra_rs_fc_if_pol');
  }
  public set relationInfraRsFcIfPol(value: string) {
    this._relationInfraRsFcIfPol = value;
  }
  public resetRelationInfraRsFcIfPol() {
    this._relationInfraRsFcIfPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsFcIfPolInput() {
    return this._relationInfraRsFcIfPol;
  }

  // relation_infra_rs_h_if_pol - computed: true, optional: true, required: false
  private _relationInfraRsHIfPol?: string; 
  public get relationInfraRsHIfPol() {
    return this.getStringAttribute('relation_infra_rs_h_if_pol');
  }
  public set relationInfraRsHIfPol(value: string) {
    this._relationInfraRsHIfPol = value;
  }
  public resetRelationInfraRsHIfPol() {
    this._relationInfraRsHIfPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsHIfPolInput() {
    return this._relationInfraRsHIfPol;
  }

  // relation_infra_rs_l2_if_pol - computed: true, optional: true, required: false
  private _relationInfraRsL2IfPol?: string; 
  public get relationInfraRsL2IfPol() {
    return this.getStringAttribute('relation_infra_rs_l2_if_pol');
  }
  public set relationInfraRsL2IfPol(value: string) {
    this._relationInfraRsL2IfPol = value;
  }
  public resetRelationInfraRsL2IfPol() {
    this._relationInfraRsL2IfPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsL2IfPolInput() {
    return this._relationInfraRsL2IfPol;
  }

  // relation_infra_rs_l2_inst_pol - computed: true, optional: true, required: false
  private _relationInfraRsL2InstPol?: string; 
  public get relationInfraRsL2InstPol() {
    return this.getStringAttribute('relation_infra_rs_l2_inst_pol');
  }
  public set relationInfraRsL2InstPol(value: string) {
    this._relationInfraRsL2InstPol = value;
  }
  public resetRelationInfraRsL2InstPol() {
    this._relationInfraRsL2InstPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsL2InstPolInput() {
    return this._relationInfraRsL2InstPol;
  }

  // relation_infra_rs_l2_port_auth_pol - computed: true, optional: true, required: false
  private _relationInfraRsL2PortAuthPol?: string; 
  public get relationInfraRsL2PortAuthPol() {
    return this.getStringAttribute('relation_infra_rs_l2_port_auth_pol');
  }
  public set relationInfraRsL2PortAuthPol(value: string) {
    this._relationInfraRsL2PortAuthPol = value;
  }
  public resetRelationInfraRsL2PortAuthPol() {
    this._relationInfraRsL2PortAuthPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsL2PortAuthPolInput() {
    return this._relationInfraRsL2PortAuthPol;
  }

  // relation_infra_rs_l2_port_security_pol - computed: true, optional: true, required: false
  private _relationInfraRsL2PortSecurityPol?: string; 
  public get relationInfraRsL2PortSecurityPol() {
    return this.getStringAttribute('relation_infra_rs_l2_port_security_pol');
  }
  public set relationInfraRsL2PortSecurityPol(value: string) {
    this._relationInfraRsL2PortSecurityPol = value;
  }
  public resetRelationInfraRsL2PortSecurityPol() {
    this._relationInfraRsL2PortSecurityPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsL2PortSecurityPolInput() {
    return this._relationInfraRsL2PortSecurityPol;
  }

  // relation_infra_rs_lacp_pol - computed: true, optional: true, required: false
  private _relationInfraRsLacpPol?: string; 
  public get relationInfraRsLacpPol() {
    return this.getStringAttribute('relation_infra_rs_lacp_pol');
  }
  public set relationInfraRsLacpPol(value: string) {
    this._relationInfraRsLacpPol = value;
  }
  public resetRelationInfraRsLacpPol() {
    this._relationInfraRsLacpPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsLacpPolInput() {
    return this._relationInfraRsLacpPol;
  }

  // relation_infra_rs_lldp_if_pol - computed: true, optional: true, required: false
  private _relationInfraRsLldpIfPol?: string; 
  public get relationInfraRsLldpIfPol() {
    return this.getStringAttribute('relation_infra_rs_lldp_if_pol');
  }
  public set relationInfraRsLldpIfPol(value: string) {
    this._relationInfraRsLldpIfPol = value;
  }
  public resetRelationInfraRsLldpIfPol() {
    this._relationInfraRsLldpIfPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsLldpIfPolInput() {
    return this._relationInfraRsLldpIfPol;
  }

  // relation_infra_rs_macsec_if_pol - computed: true, optional: true, required: false
  private _relationInfraRsMacsecIfPol?: string; 
  public get relationInfraRsMacsecIfPol() {
    return this.getStringAttribute('relation_infra_rs_macsec_if_pol');
  }
  public set relationInfraRsMacsecIfPol(value: string) {
    this._relationInfraRsMacsecIfPol = value;
  }
  public resetRelationInfraRsMacsecIfPol() {
    this._relationInfraRsMacsecIfPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsMacsecIfPolInput() {
    return this._relationInfraRsMacsecIfPol;
  }

  // relation_infra_rs_mcp_if_pol - computed: true, optional: true, required: false
  private _relationInfraRsMcpIfPol?: string; 
  public get relationInfraRsMcpIfPol() {
    return this.getStringAttribute('relation_infra_rs_mcp_if_pol');
  }
  public set relationInfraRsMcpIfPol(value: string) {
    this._relationInfraRsMcpIfPol = value;
  }
  public resetRelationInfraRsMcpIfPol() {
    this._relationInfraRsMcpIfPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsMcpIfPolInput() {
    return this._relationInfraRsMcpIfPol;
  }

  // relation_infra_rs_mon_if_infra_pol - computed: true, optional: true, required: false
  private _relationInfraRsMonIfInfraPol?: string; 
  public get relationInfraRsMonIfInfraPol() {
    return this.getStringAttribute('relation_infra_rs_mon_if_infra_pol');
  }
  public set relationInfraRsMonIfInfraPol(value: string) {
    this._relationInfraRsMonIfInfraPol = value;
  }
  public resetRelationInfraRsMonIfInfraPol() {
    this._relationInfraRsMonIfInfraPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsMonIfInfraPolInput() {
    return this._relationInfraRsMonIfInfraPol;
  }

  // relation_infra_rs_qos_dpp_if_pol - computed: true, optional: true, required: false
  private _relationInfraRsQosDppIfPol?: string; 
  public get relationInfraRsQosDppIfPol() {
    return this.getStringAttribute('relation_infra_rs_qos_dpp_if_pol');
  }
  public set relationInfraRsQosDppIfPol(value: string) {
    this._relationInfraRsQosDppIfPol = value;
  }
  public resetRelationInfraRsQosDppIfPol() {
    this._relationInfraRsQosDppIfPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsQosDppIfPolInput() {
    return this._relationInfraRsQosDppIfPol;
  }

  // relation_infra_rs_qos_egress_dpp_if_pol - computed: true, optional: true, required: false
  private _relationInfraRsQosEgressDppIfPol?: string; 
  public get relationInfraRsQosEgressDppIfPol() {
    return this.getStringAttribute('relation_infra_rs_qos_egress_dpp_if_pol');
  }
  public set relationInfraRsQosEgressDppIfPol(value: string) {
    this._relationInfraRsQosEgressDppIfPol = value;
  }
  public resetRelationInfraRsQosEgressDppIfPol() {
    this._relationInfraRsQosEgressDppIfPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsQosEgressDppIfPolInput() {
    return this._relationInfraRsQosEgressDppIfPol;
  }

  // relation_infra_rs_qos_ingress_dpp_if_pol - computed: true, optional: true, required: false
  private _relationInfraRsQosIngressDppIfPol?: string; 
  public get relationInfraRsQosIngressDppIfPol() {
    return this.getStringAttribute('relation_infra_rs_qos_ingress_dpp_if_pol');
  }
  public set relationInfraRsQosIngressDppIfPol(value: string) {
    this._relationInfraRsQosIngressDppIfPol = value;
  }
  public resetRelationInfraRsQosIngressDppIfPol() {
    this._relationInfraRsQosIngressDppIfPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsQosIngressDppIfPolInput() {
    return this._relationInfraRsQosIngressDppIfPol;
  }

  // relation_infra_rs_qos_pfc_if_pol - computed: true, optional: true, required: false
  private _relationInfraRsQosPfcIfPol?: string; 
  public get relationInfraRsQosPfcIfPol() {
    return this.getStringAttribute('relation_infra_rs_qos_pfc_if_pol');
  }
  public set relationInfraRsQosPfcIfPol(value: string) {
    this._relationInfraRsQosPfcIfPol = value;
  }
  public resetRelationInfraRsQosPfcIfPol() {
    this._relationInfraRsQosPfcIfPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsQosPfcIfPolInput() {
    return this._relationInfraRsQosPfcIfPol;
  }

  // relation_infra_rs_qos_sd_if_pol - computed: true, optional: true, required: false
  private _relationInfraRsQosSdIfPol?: string; 
  public get relationInfraRsQosSdIfPol() {
    return this.getStringAttribute('relation_infra_rs_qos_sd_if_pol');
  }
  public set relationInfraRsQosSdIfPol(value: string) {
    this._relationInfraRsQosSdIfPol = value;
  }
  public resetRelationInfraRsQosSdIfPol() {
    this._relationInfraRsQosSdIfPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsQosSdIfPolInput() {
    return this._relationInfraRsQosSdIfPol;
  }

  // relation_infra_rs_span_v_dest_grp - computed: false, optional: true, required: false
  private _relationInfraRsSpanVDestGrp?: string[]; 
  public get relationInfraRsSpanVDestGrp() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_infra_rs_span_v_dest_grp'));
  }
  public set relationInfraRsSpanVDestGrp(value: string[]) {
    this._relationInfraRsSpanVDestGrp = value;
  }
  public resetRelationInfraRsSpanVDestGrp() {
    this._relationInfraRsSpanVDestGrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsSpanVDestGrpInput() {
    return this._relationInfraRsSpanVDestGrp;
  }

  // relation_infra_rs_span_v_src_grp - computed: false, optional: true, required: false
  private _relationInfraRsSpanVSrcGrp?: string[]; 
  public get relationInfraRsSpanVSrcGrp() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_infra_rs_span_v_src_grp'));
  }
  public set relationInfraRsSpanVSrcGrp(value: string[]) {
    this._relationInfraRsSpanVSrcGrp = value;
  }
  public resetRelationInfraRsSpanVSrcGrp() {
    this._relationInfraRsSpanVSrcGrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsSpanVSrcGrpInput() {
    return this._relationInfraRsSpanVSrcGrp;
  }

  // relation_infra_rs_stormctrl_if_pol - computed: true, optional: true, required: false
  private _relationInfraRsStormctrlIfPol?: string; 
  public get relationInfraRsStormctrlIfPol() {
    return this.getStringAttribute('relation_infra_rs_stormctrl_if_pol');
  }
  public set relationInfraRsStormctrlIfPol(value: string) {
    this._relationInfraRsStormctrlIfPol = value;
  }
  public resetRelationInfraRsStormctrlIfPol() {
    this._relationInfraRsStormctrlIfPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsStormctrlIfPolInput() {
    return this._relationInfraRsStormctrlIfPol;
  }

  // relation_infra_rs_stp_if_pol - computed: true, optional: true, required: false
  private _relationInfraRsStpIfPol?: string; 
  public get relationInfraRsStpIfPol() {
    return this.getStringAttribute('relation_infra_rs_stp_if_pol');
  }
  public set relationInfraRsStpIfPol(value: string) {
    this._relationInfraRsStpIfPol = value;
  }
  public resetRelationInfraRsStpIfPol() {
    this._relationInfraRsStpIfPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsStpIfPolInput() {
    return this._relationInfraRsStpIfPol;
  }

  // relation_infra_rs_netflow_monitor_pol - computed: false, optional: true, required: false
  private _relationInfraRsNetflowMonitorPol = new LeafAccessBundlePolicyGroupRelationInfraRsNetflowMonitorPolList(this, "relation_infra_rs_netflow_monitor_pol", true);
  public get relationInfraRsNetflowMonitorPol() {
    return this._relationInfraRsNetflowMonitorPol;
  }
  public putRelationInfraRsNetflowMonitorPol(value: LeafAccessBundlePolicyGroupRelationInfraRsNetflowMonitorPol[] | cdktf.IResolvable) {
    this._relationInfraRsNetflowMonitorPol.internalValue = value;
  }
  public resetRelationInfraRsNetflowMonitorPol() {
    this._relationInfraRsNetflowMonitorPol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsNetflowMonitorPolInput() {
    return this._relationInfraRsNetflowMonitorPol.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      lag_t: cdktf.stringToTerraform(this._lagT),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      relation_infra_rs_att_ent_p: cdktf.stringToTerraform(this._relationInfraRsAttEntP),
      relation_infra_rs_cdp_if_pol: cdktf.stringToTerraform(this._relationInfraRsCdpIfPol),
      relation_infra_rs_copp_if_pol: cdktf.stringToTerraform(this._relationInfraRsCoppIfPol),
      relation_infra_rs_fc_if_pol: cdktf.stringToTerraform(this._relationInfraRsFcIfPol),
      relation_infra_rs_h_if_pol: cdktf.stringToTerraform(this._relationInfraRsHIfPol),
      relation_infra_rs_l2_if_pol: cdktf.stringToTerraform(this._relationInfraRsL2IfPol),
      relation_infra_rs_l2_inst_pol: cdktf.stringToTerraform(this._relationInfraRsL2InstPol),
      relation_infra_rs_l2_port_auth_pol: cdktf.stringToTerraform(this._relationInfraRsL2PortAuthPol),
      relation_infra_rs_l2_port_security_pol: cdktf.stringToTerraform(this._relationInfraRsL2PortSecurityPol),
      relation_infra_rs_lacp_pol: cdktf.stringToTerraform(this._relationInfraRsLacpPol),
      relation_infra_rs_lldp_if_pol: cdktf.stringToTerraform(this._relationInfraRsLldpIfPol),
      relation_infra_rs_macsec_if_pol: cdktf.stringToTerraform(this._relationInfraRsMacsecIfPol),
      relation_infra_rs_mcp_if_pol: cdktf.stringToTerraform(this._relationInfraRsMcpIfPol),
      relation_infra_rs_mon_if_infra_pol: cdktf.stringToTerraform(this._relationInfraRsMonIfInfraPol),
      relation_infra_rs_qos_dpp_if_pol: cdktf.stringToTerraform(this._relationInfraRsQosDppIfPol),
      relation_infra_rs_qos_egress_dpp_if_pol: cdktf.stringToTerraform(this._relationInfraRsQosEgressDppIfPol),
      relation_infra_rs_qos_ingress_dpp_if_pol: cdktf.stringToTerraform(this._relationInfraRsQosIngressDppIfPol),
      relation_infra_rs_qos_pfc_if_pol: cdktf.stringToTerraform(this._relationInfraRsQosPfcIfPol),
      relation_infra_rs_qos_sd_if_pol: cdktf.stringToTerraform(this._relationInfraRsQosSdIfPol),
      relation_infra_rs_span_v_dest_grp: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationInfraRsSpanVDestGrp),
      relation_infra_rs_span_v_src_grp: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationInfraRsSpanVSrcGrp),
      relation_infra_rs_stormctrl_if_pol: cdktf.stringToTerraform(this._relationInfraRsStormctrlIfPol),
      relation_infra_rs_stp_if_pol: cdktf.stringToTerraform(this._relationInfraRsStpIfPol),
      relation_infra_rs_netflow_monitor_pol: cdktf.listMapper(leafAccessBundlePolicyGroupRelationInfraRsNetflowMonitorPolToTerraform, true)(this._relationInfraRsNetflowMonitorPol.internalValue),
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
      lag_t: {
        value: cdktf.stringToHclTerraform(this._lagT),
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
      relation_infra_rs_att_ent_p: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsAttEntP),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_cdp_if_pol: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsCdpIfPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_copp_if_pol: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsCoppIfPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_fc_if_pol: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsFcIfPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_h_if_pol: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsHIfPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_l2_if_pol: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsL2IfPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_l2_inst_pol: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsL2InstPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_l2_port_auth_pol: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsL2PortAuthPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_l2_port_security_pol: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsL2PortSecurityPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_lacp_pol: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsLacpPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_lldp_if_pol: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsLldpIfPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_macsec_if_pol: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsMacsecIfPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_mcp_if_pol: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsMcpIfPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_mon_if_infra_pol: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsMonIfInfraPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_qos_dpp_if_pol: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsQosDppIfPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_qos_egress_dpp_if_pol: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsQosEgressDppIfPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_qos_ingress_dpp_if_pol: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsQosIngressDppIfPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_qos_pfc_if_pol: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsQosPfcIfPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_qos_sd_if_pol: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsQosSdIfPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_span_v_dest_grp: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._relationInfraRsSpanVDestGrp),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      relation_infra_rs_span_v_src_grp: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._relationInfraRsSpanVSrcGrp),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      relation_infra_rs_stormctrl_if_pol: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsStormctrlIfPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_stp_if_pol: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsStpIfPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_netflow_monitor_pol: {
        value: cdktf.listMapperHcl(leafAccessBundlePolicyGroupRelationInfraRsNetflowMonitorPolToHclTerraform, true)(this._relationInfraRsNetflowMonitorPol.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LeafAccessBundlePolicyGroupRelationInfraRsNetflowMonitorPolList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
