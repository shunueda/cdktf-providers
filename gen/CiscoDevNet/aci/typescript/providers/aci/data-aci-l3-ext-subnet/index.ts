// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3_ext_subnet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciL3ExtSubnetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3_ext_subnet#aggregate DataAciL3ExtSubnet#aggregate}
  */
  readonly aggregate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3_ext_subnet#annotation DataAciL3ExtSubnet#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3_ext_subnet#description DataAciL3ExtSubnet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3_ext_subnet#external_network_instance_profile_dn DataAciL3ExtSubnet#external_network_instance_profile_dn}
  */
  readonly externalNetworkInstanceProfileDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3_ext_subnet#id DataAciL3ExtSubnet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3_ext_subnet#ip DataAciL3ExtSubnet#ip}
  */
  readonly ip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3_ext_subnet#name_alias DataAciL3ExtSubnet#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3_ext_subnet#relation_l3ext_rs_subnet_to_rt_summ DataAciL3ExtSubnet#relation_l3ext_rs_subnet_to_rt_summ}
  */
  readonly relationL3ExtRsSubnetToRtSumm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3_ext_subnet#scope DataAciL3ExtSubnet#scope}
  */
  readonly scope?: string[];
  /**
  * relation_l3ext_rs_subnet_to_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3_ext_subnet#relation_l3ext_rs_subnet_to_profile DataAciL3ExtSubnet#relation_l3ext_rs_subnet_to_profile}
  */
  readonly relationL3ExtRsSubnetToProfile?: DataAciL3ExtSubnetRelationL3ExtRsSubnetToProfile[] | cdktf.IResolvable;
}
export interface DataAciL3ExtSubnetRelationL3ExtRsSubnetToProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3_ext_subnet#direction DataAciL3ExtSubnet#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3_ext_subnet#tn_rtctrl_profile_dn DataAciL3ExtSubnet#tn_rtctrl_profile_dn}
  */
  readonly tnRtctrlProfileDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3_ext_subnet#tn_rtctrl_profile_name DataAciL3ExtSubnet#tn_rtctrl_profile_name}
  */
  readonly tnRtctrlProfileName?: string;
}

export function dataAciL3ExtSubnetRelationL3ExtRsSubnetToProfileToTerraform(struct?: DataAciL3ExtSubnetRelationL3ExtRsSubnetToProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    tn_rtctrl_profile_dn: cdktf.stringToTerraform(struct!.tnRtctrlProfileDn),
    tn_rtctrl_profile_name: cdktf.stringToTerraform(struct!.tnRtctrlProfileName),
  }
}


export function dataAciL3ExtSubnetRelationL3ExtRsSubnetToProfileToHclTerraform(struct?: DataAciL3ExtSubnetRelationL3ExtRsSubnetToProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tn_rtctrl_profile_dn: {
      value: cdktf.stringToHclTerraform(struct!.tnRtctrlProfileDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tn_rtctrl_profile_name: {
      value: cdktf.stringToHclTerraform(struct!.tnRtctrlProfileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAciL3ExtSubnetRelationL3ExtRsSubnetToProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciL3ExtSubnetRelationL3ExtRsSubnetToProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._tnRtctrlProfileDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.tnRtctrlProfileDn = this._tnRtctrlProfileDn;
    }
    if (this._tnRtctrlProfileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tnRtctrlProfileName = this._tnRtctrlProfileName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciL3ExtSubnetRelationL3ExtRsSubnetToProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._tnRtctrlProfileDn = undefined;
      this._tnRtctrlProfileName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._tnRtctrlProfileDn = value.tnRtctrlProfileDn;
      this._tnRtctrlProfileName = value.tnRtctrlProfileName;
    }
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // tn_rtctrl_profile_dn - computed: false, optional: true, required: false
  private _tnRtctrlProfileDn?: string; 
  public get tnRtctrlProfileDn() {
    return this.getStringAttribute('tn_rtctrl_profile_dn');
  }
  public set tnRtctrlProfileDn(value: string) {
    this._tnRtctrlProfileDn = value;
  }
  public resetTnRtctrlProfileDn() {
    this._tnRtctrlProfileDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tnRtctrlProfileDnInput() {
    return this._tnRtctrlProfileDn;
  }

  // tn_rtctrl_profile_name - computed: false, optional: true, required: false
  private _tnRtctrlProfileName?: string; 
  public get tnRtctrlProfileName() {
    return this.getStringAttribute('tn_rtctrl_profile_name');
  }
  public set tnRtctrlProfileName(value: string) {
    this._tnRtctrlProfileName = value;
  }
  public resetTnRtctrlProfileName() {
    this._tnRtctrlProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tnRtctrlProfileNameInput() {
    return this._tnRtctrlProfileName;
  }
}

export class DataAciL3ExtSubnetRelationL3ExtRsSubnetToProfileList extends cdktf.ComplexList {
  public internalValue? : DataAciL3ExtSubnetRelationL3ExtRsSubnetToProfile[] | cdktf.IResolvable

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
  public get(index: number): DataAciL3ExtSubnetRelationL3ExtRsSubnetToProfileOutputReference {
    return new DataAciL3ExtSubnetRelationL3ExtRsSubnetToProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3_ext_subnet aci_l3_ext_subnet}
*/
export class DataAciL3ExtSubnet extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_l3_ext_subnet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciL3ExtSubnet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciL3ExtSubnet to import
  * @param importFromId The id of the existing DataAciL3ExtSubnet that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3_ext_subnet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciL3ExtSubnet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_l3_ext_subnet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3_ext_subnet aci_l3_ext_subnet} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciL3ExtSubnetConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciL3ExtSubnetConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_l3_ext_subnet',
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
    this._aggregate = config.aggregate;
    this._annotation = config.annotation;
    this._description = config.description;
    this._externalNetworkInstanceProfileDn = config.externalNetworkInstanceProfileDn;
    this._id = config.id;
    this._ip = config.ip;
    this._nameAlias = config.nameAlias;
    this._relationL3ExtRsSubnetToRtSumm = config.relationL3ExtRsSubnetToRtSumm;
    this._scope = config.scope;
    this._relationL3ExtRsSubnetToProfile.internalValue = config.relationL3ExtRsSubnetToProfile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregate - computed: true, optional: true, required: false
  private _aggregate?: string; 
  public get aggregate() {
    return this.getStringAttribute('aggregate');
  }
  public set aggregate(value: string) {
    this._aggregate = value;
  }
  public resetAggregate() {
    this._aggregate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateInput() {
    return this._aggregate;
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

  // external_network_instance_profile_dn - computed: false, optional: false, required: true
  private _externalNetworkInstanceProfileDn?: string; 
  public get externalNetworkInstanceProfileDn() {
    return this.getStringAttribute('external_network_instance_profile_dn');
  }
  public set externalNetworkInstanceProfileDn(value: string) {
    this._externalNetworkInstanceProfileDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalNetworkInstanceProfileDnInput() {
    return this._externalNetworkInstanceProfileDn;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // relation_l3ext_rs_subnet_to_rt_summ - computed: true, optional: true, required: false
  private _relationL3ExtRsSubnetToRtSumm?: string; 
  public get relationL3ExtRsSubnetToRtSumm() {
    return this.getStringAttribute('relation_l3ext_rs_subnet_to_rt_summ');
  }
  public set relationL3ExtRsSubnetToRtSumm(value: string) {
    this._relationL3ExtRsSubnetToRtSumm = value;
  }
  public resetRelationL3ExtRsSubnetToRtSumm() {
    this._relationL3ExtRsSubnetToRtSumm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationL3ExtRsSubnetToRtSummInput() {
    return this._relationL3ExtRsSubnetToRtSumm;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string[]; 
  public get scope() {
    return this.getListAttribute('scope');
  }
  public set scope(value: string[]) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // relation_l3ext_rs_subnet_to_profile - computed: false, optional: true, required: false
  private _relationL3ExtRsSubnetToProfile = new DataAciL3ExtSubnetRelationL3ExtRsSubnetToProfileList(this, "relation_l3ext_rs_subnet_to_profile", true);
  public get relationL3ExtRsSubnetToProfile() {
    return this._relationL3ExtRsSubnetToProfile;
  }
  public putRelationL3ExtRsSubnetToProfile(value: DataAciL3ExtSubnetRelationL3ExtRsSubnetToProfile[] | cdktf.IResolvable) {
    this._relationL3ExtRsSubnetToProfile.internalValue = value;
  }
  public resetRelationL3ExtRsSubnetToProfile() {
    this._relationL3ExtRsSubnetToProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationL3ExtRsSubnetToProfileInput() {
    return this._relationL3ExtRsSubnetToProfile.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aggregate: cdktf.stringToTerraform(this._aggregate),
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      external_network_instance_profile_dn: cdktf.stringToTerraform(this._externalNetworkInstanceProfileDn),
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      relation_l3ext_rs_subnet_to_rt_summ: cdktf.stringToTerraform(this._relationL3ExtRsSubnetToRtSumm),
      scope: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scope),
      relation_l3ext_rs_subnet_to_profile: cdktf.listMapper(dataAciL3ExtSubnetRelationL3ExtRsSubnetToProfileToTerraform, true)(this._relationL3ExtRsSubnetToProfile.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aggregate: {
        value: cdktf.stringToHclTerraform(this._aggregate),
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
      external_network_instance_profile_dn: {
        value: cdktf.stringToHclTerraform(this._externalNetworkInstanceProfileDn),
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
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_l3ext_rs_subnet_to_rt_summ: {
        value: cdktf.stringToHclTerraform(this._relationL3ExtRsSubnetToRtSumm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scope),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      relation_l3ext_rs_subnet_to_profile: {
        value: cdktf.listMapperHcl(dataAciL3ExtSubnetRelationL3ExtRsSubnetToProfileToHclTerraform, true)(this._relationL3ExtRsSubnetToProfile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataAciL3ExtSubnetRelationL3ExtRsSubnetToProfileList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
