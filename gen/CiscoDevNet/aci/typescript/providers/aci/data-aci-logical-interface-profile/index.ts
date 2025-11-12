// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/logical_interface_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciLogicalInterfaceProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/logical_interface_profile#annotation DataAciLogicalInterfaceProfile#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/logical_interface_profile#description DataAciLogicalInterfaceProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/logical_interface_profile#id DataAciLogicalInterfaceProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/logical_interface_profile#logical_node_profile_dn DataAciLogicalInterfaceProfile#logical_node_profile_dn}
  */
  readonly logicalNodeProfileDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/logical_interface_profile#name DataAciLogicalInterfaceProfile#name}
  */
  readonly name: string;
}
export interface DataAciLogicalInterfaceProfileRelationL3ExtRsLIfPToNetflowMonitorPol {
}

export function dataAciLogicalInterfaceProfileRelationL3ExtRsLIfPToNetflowMonitorPolToTerraform(struct?: DataAciLogicalInterfaceProfileRelationL3ExtRsLIfPToNetflowMonitorPol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciLogicalInterfaceProfileRelationL3ExtRsLIfPToNetflowMonitorPolToHclTerraform(struct?: DataAciLogicalInterfaceProfileRelationL3ExtRsLIfPToNetflowMonitorPol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciLogicalInterfaceProfileRelationL3ExtRsLIfPToNetflowMonitorPolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAciLogicalInterfaceProfileRelationL3ExtRsLIfPToNetflowMonitorPol | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciLogicalInterfaceProfileRelationL3ExtRsLIfPToNetflowMonitorPol | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // flt_type - computed: true, optional: false, required: false
  public get fltType() {
    return this.getStringAttribute('flt_type');
  }

  // tn_netflow_monitor_pol_dn - computed: true, optional: false, required: false
  public get tnNetflowMonitorPolDn() {
    return this.getStringAttribute('tn_netflow_monitor_pol_dn');
  }

  // tn_netflow_monitor_pol_name - computed: true, optional: false, required: false
  public get tnNetflowMonitorPolName() {
    return this.getStringAttribute('tn_netflow_monitor_pol_name');
  }
}

export class DataAciLogicalInterfaceProfileRelationL3ExtRsLIfPToNetflowMonitorPolList extends cdktf.ComplexList {

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
  public get(index: number): DataAciLogicalInterfaceProfileRelationL3ExtRsLIfPToNetflowMonitorPolOutputReference {
    return new DataAciLogicalInterfaceProfileRelationL3ExtRsLIfPToNetflowMonitorPolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/logical_interface_profile aci_logical_interface_profile}
*/
export class DataAciLogicalInterfaceProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_logical_interface_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciLogicalInterfaceProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciLogicalInterfaceProfile to import
  * @param importFromId The id of the existing DataAciLogicalInterfaceProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/logical_interface_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciLogicalInterfaceProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_logical_interface_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/logical_interface_profile aci_logical_interface_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciLogicalInterfaceProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciLogicalInterfaceProfileConfig) {
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

  // name_alias - computed: true, optional: false, required: false
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }

  // prio - computed: true, optional: false, required: false
  public get prio() {
    return this.getStringAttribute('prio');
  }

  // relation_l3ext_rs_arp_if_pol - computed: true, optional: false, required: false
  public get relationL3ExtRsArpIfPol() {
    return this.getStringAttribute('relation_l3ext_rs_arp_if_pol');
  }

  // relation_l3ext_rs_egress_qos_dpp_pol - computed: true, optional: false, required: false
  public get relationL3ExtRsEgressQosDppPol() {
    return this.getStringAttribute('relation_l3ext_rs_egress_qos_dpp_pol');
  }

  // relation_l3ext_rs_igmp_if_pol - computed: true, optional: false, required: false
  public get relationL3ExtRsIgmpIfPol() {
    return this.getStringAttribute('relation_l3ext_rs_igmp_if_pol');
  }

  // relation_l3ext_rs_ingress_qos_dpp_pol - computed: true, optional: false, required: false
  public get relationL3ExtRsIngressQosDppPol() {
    return this.getStringAttribute('relation_l3ext_rs_ingress_qos_dpp_pol');
  }

  // relation_l3ext_rs_l_if_p_cust_qos_pol - computed: true, optional: false, required: false
  public get relationL3ExtRsLIfPCustQosPol() {
    return this.getStringAttribute('relation_l3ext_rs_l_if_p_cust_qos_pol');
  }

  // relation_l3ext_rs_l_if_p_to_netflow_monitor_pol - computed: true, optional: false, required: false
  private _relationL3ExtRsLIfPToNetflowMonitorPol = new DataAciLogicalInterfaceProfileRelationL3ExtRsLIfPToNetflowMonitorPolList(this, "relation_l3ext_rs_l_if_p_to_netflow_monitor_pol", true);
  public get relationL3ExtRsLIfPToNetflowMonitorPol() {
    return this._relationL3ExtRsLIfPToNetflowMonitorPol;
  }

  // relation_l3ext_rs_nd_if_pol - computed: true, optional: false, required: false
  public get relationL3ExtRsNdIfPol() {
    return this.getStringAttribute('relation_l3ext_rs_nd_if_pol');
  }

  // relation_l3ext_rs_pim_ip_if_pol - computed: true, optional: false, required: false
  public get relationL3ExtRsPimIpIfPol() {
    return this.getStringAttribute('relation_l3ext_rs_pim_ip_if_pol');
  }

  // relation_l3ext_rs_pim_ipv6_if_pol - computed: true, optional: false, required: false
  public get relationL3ExtRsPimIpv6IfPol() {
    return this.getStringAttribute('relation_l3ext_rs_pim_ipv6_if_pol');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getStringAttribute('tag');
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
