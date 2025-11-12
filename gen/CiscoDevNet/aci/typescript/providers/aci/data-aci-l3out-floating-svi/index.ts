// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_floating_svi
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciL3OutFloatingSviConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_floating_svi#annotation DataAciL3OutFloatingSvi#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_floating_svi#description DataAciL3OutFloatingSvi#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_floating_svi#encap DataAciL3OutFloatingSvi#encap}
  */
  readonly encap: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_floating_svi#id DataAciL3OutFloatingSvi#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_floating_svi#logical_interface_profile_dn DataAciL3OutFloatingSvi#logical_interface_profile_dn}
  */
  readonly logicalInterfaceProfileDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_floating_svi#node_dn DataAciL3OutFloatingSvi#node_dn}
  */
  readonly nodeDn: string;
}
export interface DataAciL3OutFloatingSviRelationL3ExtRsDynPathAtt {
}

export function dataAciL3OutFloatingSviRelationL3ExtRsDynPathAttToTerraform(struct?: DataAciL3OutFloatingSviRelationL3ExtRsDynPathAtt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciL3OutFloatingSviRelationL3ExtRsDynPathAttToHclTerraform(struct?: DataAciL3OutFloatingSviRelationL3ExtRsDynPathAtt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciL3OutFloatingSviRelationL3ExtRsDynPathAttOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciL3OutFloatingSviRelationL3ExtRsDynPathAtt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciL3OutFloatingSviRelationL3ExtRsDynPathAtt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encap - computed: true, optional: false, required: false
  public get encap() {
    return this.getStringAttribute('encap');
  }

  // enhanced_lag_policy_dn - computed: true, optional: false, required: false
  public get enhancedLagPolicyDn() {
    return this.getStringAttribute('enhanced_lag_policy_dn');
  }

  // floating_address - computed: true, optional: false, required: false
  public get floatingAddress() {
    return this.getStringAttribute('floating_address');
  }

  // forged_transmit - computed: true, optional: false, required: false
  public get forgedTransmit() {
    return this.getStringAttribute('forged_transmit');
  }

  // mac_change - computed: true, optional: false, required: false
  public get macChange() {
    return this.getStringAttribute('mac_change');
  }

  // promiscuous_mode - computed: true, optional: false, required: false
  public get promiscuousMode() {
    return this.getStringAttribute('promiscuous_mode');
  }

  // tdn - computed: true, optional: false, required: false
  public get tdn() {
    return this.getStringAttribute('tdn');
  }
}

export class DataAciL3OutFloatingSviRelationL3ExtRsDynPathAttList extends cdktf.ComplexList {

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
  public get(index: number): DataAciL3OutFloatingSviRelationL3ExtRsDynPathAttOutputReference {
    return new DataAciL3OutFloatingSviRelationL3ExtRsDynPathAttOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_floating_svi aci_l3out_floating_svi}
*/
export class DataAciL3OutFloatingSvi extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_l3out_floating_svi";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciL3OutFloatingSvi resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciL3OutFloatingSvi to import
  * @param importFromId The id of the existing DataAciL3OutFloatingSvi that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_floating_svi#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciL3OutFloatingSvi to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_l3out_floating_svi", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_floating_svi aci_l3out_floating_svi} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciL3OutFloatingSviConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciL3OutFloatingSviConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_l3out_floating_svi',
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
    this._encap = config.encap;
    this._id = config.id;
    this._logicalInterfaceProfileDn = config.logicalInterfaceProfileDn;
    this._nodeDn = config.nodeDn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addr - computed: true, optional: false, required: false
  public get addr() {
    return this.getStringAttribute('addr');
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

  // autostate - computed: true, optional: false, required: false
  public get autostate() {
    return this.getStringAttribute('autostate');
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

  // encap - computed: false, optional: false, required: true
  private _encap?: string; 
  public get encap() {
    return this.getStringAttribute('encap');
  }
  public set encap(value: string) {
    this._encap = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encapInput() {
    return this._encap;
  }

  // encap_scope - computed: true, optional: false, required: false
  public get encapScope() {
    return this.getStringAttribute('encap_scope');
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

  // if_inst_t - computed: true, optional: false, required: false
  public get ifInstT() {
    return this.getStringAttribute('if_inst_t');
  }

  // ipv6_dad - computed: true, optional: false, required: false
  public get ipv6Dad() {
    return this.getStringAttribute('ipv6_dad');
  }

  // ll_addr - computed: true, optional: false, required: false
  public get llAddr() {
    return this.getStringAttribute('ll_addr');
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

  // mac - computed: true, optional: false, required: false
  public get mac() {
    return this.getStringAttribute('mac');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getStringAttribute('mtu');
  }

  // node_dn - computed: false, optional: false, required: true
  private _nodeDn?: string; 
  public get nodeDn() {
    return this.getStringAttribute('node_dn');
  }
  public set nodeDn(value: string) {
    this._nodeDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeDnInput() {
    return this._nodeDn;
  }

  // relation_l3ext_rs_dyn_path_att - computed: true, optional: false, required: false
  private _relationL3ExtRsDynPathAtt = new DataAciL3OutFloatingSviRelationL3ExtRsDynPathAttList(this, "relation_l3ext_rs_dyn_path_att", true);
  public get relationL3ExtRsDynPathAtt() {
    return this._relationL3ExtRsDynPathAtt;
  }

  // target_dscp - computed: true, optional: false, required: false
  public get targetDscp() {
    return this.getStringAttribute('target_dscp');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      encap: cdktf.stringToTerraform(this._encap),
      id: cdktf.stringToTerraform(this._id),
      logical_interface_profile_dn: cdktf.stringToTerraform(this._logicalInterfaceProfileDn),
      node_dn: cdktf.stringToTerraform(this._nodeDn),
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
      encap: {
        value: cdktf.stringToHclTerraform(this._encap),
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
      logical_interface_profile_dn: {
        value: cdktf.stringToHclTerraform(this._logicalInterfaceProfileDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_dn: {
        value: cdktf.stringToHclTerraform(this._nodeDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
