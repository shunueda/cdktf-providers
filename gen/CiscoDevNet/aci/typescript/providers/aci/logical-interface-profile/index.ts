// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_interface_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogicalInterfaceProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_interface_profile#annotation LogicalInterfaceProfile#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_interface_profile#description LogicalInterfaceProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_interface_profile#id LogicalInterfaceProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_interface_profile#logical_node_profile_dn LogicalInterfaceProfile#logical_node_profile_dn}
  */
  readonly logicalNodeProfileDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_interface_profile#name LogicalInterfaceProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_interface_profile#name_alias LogicalInterfaceProfile#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_interface_profile#prio LogicalInterfaceProfile#prio}
  */
  readonly prio?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_interface_profile#relation_l3ext_rs_arp_if_pol LogicalInterfaceProfile#relation_l3ext_rs_arp_if_pol}
  */
  readonly relationL3ExtRsArpIfPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_interface_profile#relation_l3ext_rs_egress_qos_dpp_pol LogicalInterfaceProfile#relation_l3ext_rs_egress_qos_dpp_pol}
  */
  readonly relationL3ExtRsEgressQosDppPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_interface_profile#relation_l3ext_rs_igmp_if_pol LogicalInterfaceProfile#relation_l3ext_rs_igmp_if_pol}
  */
  readonly relationL3ExtRsIgmpIfPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_interface_profile#relation_l3ext_rs_ingress_qos_dpp_pol LogicalInterfaceProfile#relation_l3ext_rs_ingress_qos_dpp_pol}
  */
  readonly relationL3ExtRsIngressQosDppPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_interface_profile#relation_l3ext_rs_l_if_p_cust_qos_pol LogicalInterfaceProfile#relation_l3ext_rs_l_if_p_cust_qos_pol}
  */
  readonly relationL3ExtRsLIfPCustQosPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_interface_profile#relation_l3ext_rs_nd_if_pol LogicalInterfaceProfile#relation_l3ext_rs_nd_if_pol}
  */
  readonly relationL3ExtRsNdIfPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_interface_profile#relation_l3ext_rs_pim_ip_if_pol LogicalInterfaceProfile#relation_l3ext_rs_pim_ip_if_pol}
  */
  readonly relationL3ExtRsPimIpIfPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_interface_profile#relation_l3ext_rs_pim_ipv6_if_pol LogicalInterfaceProfile#relation_l3ext_rs_pim_ipv6_if_pol}
  */
  readonly relationL3ExtRsPimIpv6IfPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_interface_profile#tag LogicalInterfaceProfile#tag}
  */
  readonly tag?: string;
  /**
  * relation_l3ext_rs_l_if_p_to_netflow_monitor_pol block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_interface_profile#relation_l3ext_rs_l_if_p_to_netflow_monitor_pol LogicalInterfaceProfile#relation_l3ext_rs_l_if_p_to_netflow_monitor_pol}
  */
  readonly relationL3ExtRsLIfPToNetflowMonitorPol?: LogicalInterfaceProfileRelationL3ExtRsLIfPToNetflowMonitorPol[] | cdktf.IResolvable;
}
export interface LogicalInterfaceProfileRelationL3ExtRsLIfPToNetflowMonitorPol {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_interface_profile#flt_type LogicalInterfaceProfile#flt_type}
  */
  readonly fltType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_interface_profile#tn_netflow_monitor_pol_dn LogicalInterfaceProfile#tn_netflow_monitor_pol_dn}
  */
  readonly tnNetflowMonitorPolDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_interface_profile#tn_netflow_monitor_pol_name LogicalInterfaceProfile#tn_netflow_monitor_pol_name}
  */
  readonly tnNetflowMonitorPolName?: string;
}

export function logicalInterfaceProfileRelationL3ExtRsLIfPToNetflowMonitorPolToTerraform(struct?: LogicalInterfaceProfileRelationL3ExtRsLIfPToNetflowMonitorPol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flt_type: cdktf.stringToTerraform(struct!.fltType),
    tn_netflow_monitor_pol_dn: cdktf.stringToTerraform(struct!.tnNetflowMonitorPolDn),
    tn_netflow_monitor_pol_name: cdktf.stringToTerraform(struct!.tnNetflowMonitorPolName),
  }
}


export function logicalInterfaceProfileRelationL3ExtRsLIfPToNetflowMonitorPolToHclTerraform(struct?: LogicalInterfaceProfileRelationL3ExtRsLIfPToNetflowMonitorPol | cdktf.IResolvable): any {
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
    tn_netflow_monitor_pol_dn: {
      value: cdktf.stringToHclTerraform(struct!.tnNetflowMonitorPolDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tn_netflow_monitor_pol_name: {
      value: cdktf.stringToHclTerraform(struct!.tnNetflowMonitorPolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalInterfaceProfileRelationL3ExtRsLIfPToNetflowMonitorPolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalInterfaceProfileRelationL3ExtRsLIfPToNetflowMonitorPol | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fltType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fltType = this._fltType;
    }
    if (this._tnNetflowMonitorPolDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.tnNetflowMonitorPolDn = this._tnNetflowMonitorPolDn;
    }
    if (this._tnNetflowMonitorPolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tnNetflowMonitorPolName = this._tnNetflowMonitorPolName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalInterfaceProfileRelationL3ExtRsLIfPToNetflowMonitorPol | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fltType = undefined;
      this._tnNetflowMonitorPolDn = undefined;
      this._tnNetflowMonitorPolName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fltType = value.fltType;
      this._tnNetflowMonitorPolDn = value.tnNetflowMonitorPolDn;
      this._tnNetflowMonitorPolName = value.tnNetflowMonitorPolName;
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

  // tn_netflow_monitor_pol_dn - computed: false, optional: true, required: false
  private _tnNetflowMonitorPolDn?: string; 
  public get tnNetflowMonitorPolDn() {
    return this.getStringAttribute('tn_netflow_monitor_pol_dn');
  }
  public set tnNetflowMonitorPolDn(value: string) {
    this._tnNetflowMonitorPolDn = value;
  }
  public resetTnNetflowMonitorPolDn() {
    this._tnNetflowMonitorPolDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tnNetflowMonitorPolDnInput() {
    return this._tnNetflowMonitorPolDn;
  }

  // tn_netflow_monitor_pol_name - computed: false, optional: true, required: false
  private _tnNetflowMonitorPolName?: string; 
  public get tnNetflowMonitorPolName() {
    return this.getStringAttribute('tn_netflow_monitor_pol_name');
  }
  public set tnNetflowMonitorPolName(value: string) {
    this._tnNetflowMonitorPolName = value;
  }
  public resetTnNetflowMonitorPolName() {
    this._tnNetflowMonitorPolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tnNetflowMonitorPolNameInput() {
    return this._tnNetflowMonitorPolName;
  }
}

export class LogicalInterfaceProfileRelationL3ExtRsLIfPToNetflowMonitorPolList extends cdktf.ComplexList {
  public internalValue? : LogicalInterfaceProfileRelationL3ExtRsLIfPToNetflowMonitorPol[] | cdktf.IResolvable

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
  public get(index: number): LogicalInterfaceProfileRelationL3ExtRsLIfPToNetflowMonitorPolOutputReference {
    return new LogicalInterfaceProfileRelationL3ExtRsLIfPToNetflowMonitorPolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_interface_profile aci_logical_interface_profile}
*/
export class LogicalInterfaceProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_logical_interface_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogicalInterfaceProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogicalInterfaceProfile to import
  * @param importFromId The id of the existing LogicalInterfaceProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_interface_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogicalInterfaceProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_logical_interface_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_interface_profile aci_logical_interface_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogicalInterfaceProfileConfig
  */
  public constructor(scope: Construct, id: string, config: LogicalInterfaceProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_logical_interface_profile',
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
    this._logicalNodeProfileDn = config.logicalNodeProfileDn;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._prio = config.prio;
    this._relationL3ExtRsArpIfPol = config.relationL3ExtRsArpIfPol;
    this._relationL3ExtRsEgressQosDppPol = config.relationL3ExtRsEgressQosDppPol;
    this._relationL3ExtRsIgmpIfPol = config.relationL3ExtRsIgmpIfPol;
    this._relationL3ExtRsIngressQosDppPol = config.relationL3ExtRsIngressQosDppPol;
    this._relationL3ExtRsLIfPCustQosPol = config.relationL3ExtRsLIfPCustQosPol;
    this._relationL3ExtRsNdIfPol = config.relationL3ExtRsNdIfPol;
    this._relationL3ExtRsPimIpIfPol = config.relationL3ExtRsPimIpIfPol;
    this._relationL3ExtRsPimIpv6IfPol = config.relationL3ExtRsPimIpv6IfPol;
    this._tag = config.tag;
    this._relationL3ExtRsLIfPToNetflowMonitorPol.internalValue = config.relationL3ExtRsLIfPToNetflowMonitorPol;
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

  // logical_node_profile_dn - computed: false, optional: false, required: true
  private _logicalNodeProfileDn?: string; 
  public get logicalNodeProfileDn() {
    return this.getStringAttribute('logical_node_profile_dn');
  }
  public set logicalNodeProfileDn(value: string) {
    this._logicalNodeProfileDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalNodeProfileDnInput() {
    return this._logicalNodeProfileDn;
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

  // prio - computed: true, optional: true, required: false
  private _prio?: string; 
  public get prio() {
    return this.getStringAttribute('prio');
  }
  public set prio(value: string) {
    this._prio = value;
  }
  public resetPrio() {
    this._prio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prioInput() {
    return this._prio;
  }

  // relation_l3ext_rs_arp_if_pol - computed: true, optional: true, required: false
  private _relationL3ExtRsArpIfPol?: string; 
  public get relationL3ExtRsArpIfPol() {
    return this.getStringAttribute('relation_l3ext_rs_arp_if_pol');
  }
  public set relationL3ExtRsArpIfPol(value: string) {
    this._relationL3ExtRsArpIfPol = value;
  }
  public resetRelationL3ExtRsArpIfPol() {
    this._relationL3ExtRsArpIfPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationL3ExtRsArpIfPolInput() {
    return this._relationL3ExtRsArpIfPol;
  }

  // relation_l3ext_rs_egress_qos_dpp_pol - computed: true, optional: true, required: false
  private _relationL3ExtRsEgressQosDppPol?: string; 
  public get relationL3ExtRsEgressQosDppPol() {
    return this.getStringAttribute('relation_l3ext_rs_egress_qos_dpp_pol');
  }
  public set relationL3ExtRsEgressQosDppPol(value: string) {
    this._relationL3ExtRsEgressQosDppPol = value;
  }
  public resetRelationL3ExtRsEgressQosDppPol() {
    this._relationL3ExtRsEgressQosDppPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationL3ExtRsEgressQosDppPolInput() {
    return this._relationL3ExtRsEgressQosDppPol;
  }

  // relation_l3ext_rs_igmp_if_pol - computed: true, optional: true, required: false
  private _relationL3ExtRsIgmpIfPol?: string; 
  public get relationL3ExtRsIgmpIfPol() {
    return this.getStringAttribute('relation_l3ext_rs_igmp_if_pol');
  }
  public set relationL3ExtRsIgmpIfPol(value: string) {
    this._relationL3ExtRsIgmpIfPol = value;
  }
  public resetRelationL3ExtRsIgmpIfPol() {
    this._relationL3ExtRsIgmpIfPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationL3ExtRsIgmpIfPolInput() {
    return this._relationL3ExtRsIgmpIfPol;
  }

  // relation_l3ext_rs_ingress_qos_dpp_pol - computed: true, optional: true, required: false
  private _relationL3ExtRsIngressQosDppPol?: string; 
  public get relationL3ExtRsIngressQosDppPol() {
    return this.getStringAttribute('relation_l3ext_rs_ingress_qos_dpp_pol');
  }
  public set relationL3ExtRsIngressQosDppPol(value: string) {
    this._relationL3ExtRsIngressQosDppPol = value;
  }
  public resetRelationL3ExtRsIngressQosDppPol() {
    this._relationL3ExtRsIngressQosDppPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationL3ExtRsIngressQosDppPolInput() {
    return this._relationL3ExtRsIngressQosDppPol;
  }

  // relation_l3ext_rs_l_if_p_cust_qos_pol - computed: true, optional: true, required: false
  private _relationL3ExtRsLIfPCustQosPol?: string; 
  public get relationL3ExtRsLIfPCustQosPol() {
    return this.getStringAttribute('relation_l3ext_rs_l_if_p_cust_qos_pol');
  }
  public set relationL3ExtRsLIfPCustQosPol(value: string) {
    this._relationL3ExtRsLIfPCustQosPol = value;
  }
  public resetRelationL3ExtRsLIfPCustQosPol() {
    this._relationL3ExtRsLIfPCustQosPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationL3ExtRsLIfPCustQosPolInput() {
    return this._relationL3ExtRsLIfPCustQosPol;
  }

  // relation_l3ext_rs_nd_if_pol - computed: true, optional: true, required: false
  private _relationL3ExtRsNdIfPol?: string; 
  public get relationL3ExtRsNdIfPol() {
    return this.getStringAttribute('relation_l3ext_rs_nd_if_pol');
  }
  public set relationL3ExtRsNdIfPol(value: string) {
    this._relationL3ExtRsNdIfPol = value;
  }
  public resetRelationL3ExtRsNdIfPol() {
    this._relationL3ExtRsNdIfPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationL3ExtRsNdIfPolInput() {
    return this._relationL3ExtRsNdIfPol;
  }

  // relation_l3ext_rs_pim_ip_if_pol - computed: true, optional: true, required: false
  private _relationL3ExtRsPimIpIfPol?: string; 
  public get relationL3ExtRsPimIpIfPol() {
    return this.getStringAttribute('relation_l3ext_rs_pim_ip_if_pol');
  }
  public set relationL3ExtRsPimIpIfPol(value: string) {
    this._relationL3ExtRsPimIpIfPol = value;
  }
  public resetRelationL3ExtRsPimIpIfPol() {
    this._relationL3ExtRsPimIpIfPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationL3ExtRsPimIpIfPolInput() {
    return this._relationL3ExtRsPimIpIfPol;
  }

  // relation_l3ext_rs_pim_ipv6_if_pol - computed: true, optional: true, required: false
  private _relationL3ExtRsPimIpv6IfPol?: string; 
  public get relationL3ExtRsPimIpv6IfPol() {
    return this.getStringAttribute('relation_l3ext_rs_pim_ipv6_if_pol');
  }
  public set relationL3ExtRsPimIpv6IfPol(value: string) {
    this._relationL3ExtRsPimIpv6IfPol = value;
  }
  public resetRelationL3ExtRsPimIpv6IfPol() {
    this._relationL3ExtRsPimIpv6IfPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationL3ExtRsPimIpv6IfPolInput() {
    return this._relationL3ExtRsPimIpv6IfPol;
  }

  // tag - computed: true, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // relation_l3ext_rs_l_if_p_to_netflow_monitor_pol - computed: false, optional: true, required: false
  private _relationL3ExtRsLIfPToNetflowMonitorPol = new LogicalInterfaceProfileRelationL3ExtRsLIfPToNetflowMonitorPolList(this, "relation_l3ext_rs_l_if_p_to_netflow_monitor_pol", true);
  public get relationL3ExtRsLIfPToNetflowMonitorPol() {
    return this._relationL3ExtRsLIfPToNetflowMonitorPol;
  }
  public putRelationL3ExtRsLIfPToNetflowMonitorPol(value: LogicalInterfaceProfileRelationL3ExtRsLIfPToNetflowMonitorPol[] | cdktf.IResolvable) {
    this._relationL3ExtRsLIfPToNetflowMonitorPol.internalValue = value;
  }
  public resetRelationL3ExtRsLIfPToNetflowMonitorPol() {
    this._relationL3ExtRsLIfPToNetflowMonitorPol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationL3ExtRsLIfPToNetflowMonitorPolInput() {
    return this._relationL3ExtRsLIfPToNetflowMonitorPol.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      logical_node_profile_dn: cdktf.stringToTerraform(this._logicalNodeProfileDn),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      prio: cdktf.stringToTerraform(this._prio),
      relation_l3ext_rs_arp_if_pol: cdktf.stringToTerraform(this._relationL3ExtRsArpIfPol),
      relation_l3ext_rs_egress_qos_dpp_pol: cdktf.stringToTerraform(this._relationL3ExtRsEgressQosDppPol),
      relation_l3ext_rs_igmp_if_pol: cdktf.stringToTerraform(this._relationL3ExtRsIgmpIfPol),
      relation_l3ext_rs_ingress_qos_dpp_pol: cdktf.stringToTerraform(this._relationL3ExtRsIngressQosDppPol),
      relation_l3ext_rs_l_if_p_cust_qos_pol: cdktf.stringToTerraform(this._relationL3ExtRsLIfPCustQosPol),
      relation_l3ext_rs_nd_if_pol: cdktf.stringToTerraform(this._relationL3ExtRsNdIfPol),
      relation_l3ext_rs_pim_ip_if_pol: cdktf.stringToTerraform(this._relationL3ExtRsPimIpIfPol),
      relation_l3ext_rs_pim_ipv6_if_pol: cdktf.stringToTerraform(this._relationL3ExtRsPimIpv6IfPol),
      tag: cdktf.stringToTerraform(this._tag),
      relation_l3ext_rs_l_if_p_to_netflow_monitor_pol: cdktf.listMapper(logicalInterfaceProfileRelationL3ExtRsLIfPToNetflowMonitorPolToTerraform, true)(this._relationL3ExtRsLIfPToNetflowMonitorPol.internalValue),
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
      logical_node_profile_dn: {
        value: cdktf.stringToHclTerraform(this._logicalNodeProfileDn),
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
      prio: {
        value: cdktf.stringToHclTerraform(this._prio),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_l3ext_rs_arp_if_pol: {
        value: cdktf.stringToHclTerraform(this._relationL3ExtRsArpIfPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_l3ext_rs_egress_qos_dpp_pol: {
        value: cdktf.stringToHclTerraform(this._relationL3ExtRsEgressQosDppPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_l3ext_rs_igmp_if_pol: {
        value: cdktf.stringToHclTerraform(this._relationL3ExtRsIgmpIfPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_l3ext_rs_ingress_qos_dpp_pol: {
        value: cdktf.stringToHclTerraform(this._relationL3ExtRsIngressQosDppPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_l3ext_rs_l_if_p_cust_qos_pol: {
        value: cdktf.stringToHclTerraform(this._relationL3ExtRsLIfPCustQosPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_l3ext_rs_nd_if_pol: {
        value: cdktf.stringToHclTerraform(this._relationL3ExtRsNdIfPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_l3ext_rs_pim_ip_if_pol: {
        value: cdktf.stringToHclTerraform(this._relationL3ExtRsPimIpIfPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_l3ext_rs_pim_ipv6_if_pol: {
        value: cdktf.stringToHclTerraform(this._relationL3ExtRsPimIpv6IfPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag: {
        value: cdktf.stringToHclTerraform(this._tag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_l3ext_rs_l_if_p_to_netflow_monitor_pol: {
        value: cdktf.listMapperHcl(logicalInterfaceProfileRelationL3ExtRsLIfPToNetflowMonitorPolToHclTerraform, true)(this._relationL3ExtRsLIfPToNetflowMonitorPol.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LogicalInterfaceProfileRelationL3ExtRsLIfPToNetflowMonitorPolList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
