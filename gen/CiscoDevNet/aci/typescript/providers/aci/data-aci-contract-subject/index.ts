// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/contract_subject
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciContractSubjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/contract_subject#annotation DataAciContractSubject#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/contract_subject#apply_both_directions DataAciContractSubject#apply_both_directions}
  */
  readonly applyBothDirections?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/contract_subject#cons_match_t DataAciContractSubject#cons_match_t}
  */
  readonly consMatchT?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/contract_subject#contract_dn DataAciContractSubject#contract_dn}
  */
  readonly contractDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/contract_subject#description DataAciContractSubject#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/contract_subject#id DataAciContractSubject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/contract_subject#name DataAciContractSubject#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/contract_subject#name_alias DataAciContractSubject#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/contract_subject#prio DataAciContractSubject#prio}
  */
  readonly prio?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/contract_subject#prov_match_t DataAciContractSubject#prov_match_t}
  */
  readonly provMatchT?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/contract_subject#rev_flt_ports DataAciContractSubject#rev_flt_ports}
  */
  readonly revFltPorts?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/contract_subject#target_dscp DataAciContractSubject#target_dscp}
  */
  readonly targetDscp?: string;
  /**
  * consumer_to_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/contract_subject#consumer_to_provider DataAciContractSubject#consumer_to_provider}
  */
  readonly consumerToProvider?: DataAciContractSubjectConsumerToProvider[] | cdktf.IResolvable;
  /**
  * provider_to_consumer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/contract_subject#provider_to_consumer DataAciContractSubject#provider_to_consumer}
  */
  readonly providerToConsumer?: DataAciContractSubjectProviderToConsumer[] | cdktf.IResolvable;
}
export interface DataAciContractSubjectConsumerToProviderRelationVzRsFiltAtt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/contract_subject#action DataAciContractSubject#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/contract_subject#directives DataAciContractSubject#directives}
  */
  readonly directives?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/contract_subject#filter_dn DataAciContractSubject#filter_dn}
  */
  readonly filterDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/contract_subject#priority_override DataAciContractSubject#priority_override}
  */
  readonly priorityOverride?: string;
}

export function dataAciContractSubjectConsumerToProviderRelationVzRsFiltAttToTerraform(struct?: DataAciContractSubjectConsumerToProviderRelationVzRsFiltAtt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    directives: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.directives),
    filter_dn: cdktf.stringToTerraform(struct!.filterDn),
    priority_override: cdktf.stringToTerraform(struct!.priorityOverride),
  }
}


export function dataAciContractSubjectConsumerToProviderRelationVzRsFiltAttToHclTerraform(struct?: DataAciContractSubjectConsumerToProviderRelationVzRsFiltAtt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    directives: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.directives),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filter_dn: {
      value: cdktf.stringToHclTerraform(struct!.filterDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority_override: {
      value: cdktf.stringToHclTerraform(struct!.priorityOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAciContractSubjectConsumerToProviderRelationVzRsFiltAttOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciContractSubjectConsumerToProviderRelationVzRsFiltAtt | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._directives !== undefined) {
      hasAnyValues = true;
      internalValueResult.directives = this._directives;
    }
    if (this._filterDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterDn = this._filterDn;
    }
    if (this._priorityOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityOverride = this._priorityOverride;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciContractSubjectConsumerToProviderRelationVzRsFiltAtt | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._directives = undefined;
      this._filterDn = undefined;
      this._priorityOverride = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._directives = value.directives;
      this._filterDn = value.filterDn;
      this._priorityOverride = value.priorityOverride;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // directives - computed: true, optional: true, required: false
  private _directives?: string[]; 
  public get directives() {
    return this.getListAttribute('directives');
  }
  public set directives(value: string[]) {
    this._directives = value;
  }
  public resetDirectives() {
    this._directives = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directivesInput() {
    return this._directives;
  }

  // filter_dn - computed: true, optional: true, required: false
  private _filterDn?: string; 
  public get filterDn() {
    return this.getStringAttribute('filter_dn');
  }
  public set filterDn(value: string) {
    this._filterDn = value;
  }
  public resetFilterDn() {
    this._filterDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterDnInput() {
    return this._filterDn;
  }

  // priority_override - computed: true, optional: true, required: false
  private _priorityOverride?: string; 
  public get priorityOverride() {
    return this.getStringAttribute('priority_override');
  }
  public set priorityOverride(value: string) {
    this._priorityOverride = value;
  }
  public resetPriorityOverride() {
    this._priorityOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityOverrideInput() {
    return this._priorityOverride;
  }
}

export class DataAciContractSubjectConsumerToProviderRelationVzRsFiltAttList extends cdktf.ComplexList {
  public internalValue? : DataAciContractSubjectConsumerToProviderRelationVzRsFiltAtt[] | cdktf.IResolvable

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
  public get(index: number): DataAciContractSubjectConsumerToProviderRelationVzRsFiltAttOutputReference {
    return new DataAciContractSubjectConsumerToProviderRelationVzRsFiltAttOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciContractSubjectConsumerToProvider {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/contract_subject#id DataAciContractSubject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/contract_subject#prio DataAciContractSubject#prio}
  */
  readonly prio?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/contract_subject#relation_vz_rs_in_term_graph_att DataAciContractSubject#relation_vz_rs_in_term_graph_att}
  */
  readonly relationVzRsInTermGraphAtt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/contract_subject#target_dscp DataAciContractSubject#target_dscp}
  */
  readonly targetDscp?: string;
  /**
  * relation_vz_rs_filt_att block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/contract_subject#relation_vz_rs_filt_att DataAciContractSubject#relation_vz_rs_filt_att}
  */
  readonly relationVzRsFiltAtt?: DataAciContractSubjectConsumerToProviderRelationVzRsFiltAtt[] | cdktf.IResolvable;
}

export function dataAciContractSubjectConsumerToProviderToTerraform(struct?: DataAciContractSubjectConsumerToProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    prio: cdktf.stringToTerraform(struct!.prio),
    relation_vz_rs_in_term_graph_att: cdktf.stringToTerraform(struct!.relationVzRsInTermGraphAtt),
    target_dscp: cdktf.stringToTerraform(struct!.targetDscp),
    relation_vz_rs_filt_att: cdktf.listMapper(dataAciContractSubjectConsumerToProviderRelationVzRsFiltAttToTerraform, true)(struct!.relationVzRsFiltAtt),
  }
}


export function dataAciContractSubjectConsumerToProviderToHclTerraform(struct?: DataAciContractSubjectConsumerToProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prio: {
      value: cdktf.stringToHclTerraform(struct!.prio),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relation_vz_rs_in_term_graph_att: {
      value: cdktf.stringToHclTerraform(struct!.relationVzRsInTermGraphAtt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_dscp: {
      value: cdktf.stringToHclTerraform(struct!.targetDscp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relation_vz_rs_filt_att: {
      value: cdktf.listMapperHcl(dataAciContractSubjectConsumerToProviderRelationVzRsFiltAttToHclTerraform, true)(struct!.relationVzRsFiltAtt),
      isBlock: true,
      type: "set",
      storageClassType: "DataAciContractSubjectConsumerToProviderRelationVzRsFiltAttList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAciContractSubjectConsumerToProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciContractSubjectConsumerToProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._prio !== undefined) {
      hasAnyValues = true;
      internalValueResult.prio = this._prio;
    }
    if (this._relationVzRsInTermGraphAtt !== undefined) {
      hasAnyValues = true;
      internalValueResult.relationVzRsInTermGraphAtt = this._relationVzRsInTermGraphAtt;
    }
    if (this._targetDscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDscp = this._targetDscp;
    }
    if (this._relationVzRsFiltAtt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relationVzRsFiltAtt = this._relationVzRsFiltAtt?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciContractSubjectConsumerToProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._prio = undefined;
      this._relationVzRsInTermGraphAtt = undefined;
      this._targetDscp = undefined;
      this._relationVzRsFiltAtt.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._prio = value.prio;
      this._relationVzRsInTermGraphAtt = value.relationVzRsInTermGraphAtt;
      this._targetDscp = value.targetDscp;
      this._relationVzRsFiltAtt.internalValue = value.relationVzRsFiltAtt;
    }
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

  // relation_vz_rs_in_term_graph_att - computed: true, optional: true, required: false
  private _relationVzRsInTermGraphAtt?: string; 
  public get relationVzRsInTermGraphAtt() {
    return this.getStringAttribute('relation_vz_rs_in_term_graph_att');
  }
  public set relationVzRsInTermGraphAtt(value: string) {
    this._relationVzRsInTermGraphAtt = value;
  }
  public resetRelationVzRsInTermGraphAtt() {
    this._relationVzRsInTermGraphAtt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVzRsInTermGraphAttInput() {
    return this._relationVzRsInTermGraphAtt;
  }

  // target_dscp - computed: true, optional: true, required: false
  private _targetDscp?: string; 
  public get targetDscp() {
    return this.getStringAttribute('target_dscp');
  }
  public set targetDscp(value: string) {
    this._targetDscp = value;
  }
  public resetTargetDscp() {
    this._targetDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDscpInput() {
    return this._targetDscp;
  }

  // relation_vz_rs_filt_att - computed: false, optional: true, required: false
  private _relationVzRsFiltAtt = new DataAciContractSubjectConsumerToProviderRelationVzRsFiltAttList(this, "relation_vz_rs_filt_att", true);
  public get relationVzRsFiltAtt() {
    return this._relationVzRsFiltAtt;
  }
  public putRelationVzRsFiltAtt(value: DataAciContractSubjectConsumerToProviderRelationVzRsFiltAtt[] | cdktf.IResolvable) {
    this._relationVzRsFiltAtt.internalValue = value;
  }
  public resetRelationVzRsFiltAtt() {
    this._relationVzRsFiltAtt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVzRsFiltAttInput() {
    return this._relationVzRsFiltAtt.internalValue;
  }
}

export class DataAciContractSubjectConsumerToProviderList extends cdktf.ComplexList {
  public internalValue? : DataAciContractSubjectConsumerToProvider[] | cdktf.IResolvable

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
  public get(index: number): DataAciContractSubjectConsumerToProviderOutputReference {
    return new DataAciContractSubjectConsumerToProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciContractSubjectProviderToConsumerRelationVzRsFiltAtt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/contract_subject#action DataAciContractSubject#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/contract_subject#directives DataAciContractSubject#directives}
  */
  readonly directives?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/contract_subject#filter_dn DataAciContractSubject#filter_dn}
  */
  readonly filterDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/contract_subject#priority_override DataAciContractSubject#priority_override}
  */
  readonly priorityOverride?: string;
}

export function dataAciContractSubjectProviderToConsumerRelationVzRsFiltAttToTerraform(struct?: DataAciContractSubjectProviderToConsumerRelationVzRsFiltAtt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    directives: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.directives),
    filter_dn: cdktf.stringToTerraform(struct!.filterDn),
    priority_override: cdktf.stringToTerraform(struct!.priorityOverride),
  }
}


export function dataAciContractSubjectProviderToConsumerRelationVzRsFiltAttToHclTerraform(struct?: DataAciContractSubjectProviderToConsumerRelationVzRsFiltAtt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    directives: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.directives),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filter_dn: {
      value: cdktf.stringToHclTerraform(struct!.filterDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority_override: {
      value: cdktf.stringToHclTerraform(struct!.priorityOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAciContractSubjectProviderToConsumerRelationVzRsFiltAttOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciContractSubjectProviderToConsumerRelationVzRsFiltAtt | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._directives !== undefined) {
      hasAnyValues = true;
      internalValueResult.directives = this._directives;
    }
    if (this._filterDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterDn = this._filterDn;
    }
    if (this._priorityOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityOverride = this._priorityOverride;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciContractSubjectProviderToConsumerRelationVzRsFiltAtt | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._directives = undefined;
      this._filterDn = undefined;
      this._priorityOverride = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._directives = value.directives;
      this._filterDn = value.filterDn;
      this._priorityOverride = value.priorityOverride;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // directives - computed: true, optional: true, required: false
  private _directives?: string[]; 
  public get directives() {
    return this.getListAttribute('directives');
  }
  public set directives(value: string[]) {
    this._directives = value;
  }
  public resetDirectives() {
    this._directives = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directivesInput() {
    return this._directives;
  }

  // filter_dn - computed: true, optional: true, required: false
  private _filterDn?: string; 
  public get filterDn() {
    return this.getStringAttribute('filter_dn');
  }
  public set filterDn(value: string) {
    this._filterDn = value;
  }
  public resetFilterDn() {
    this._filterDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterDnInput() {
    return this._filterDn;
  }

  // priority_override - computed: true, optional: true, required: false
  private _priorityOverride?: string; 
  public get priorityOverride() {
    return this.getStringAttribute('priority_override');
  }
  public set priorityOverride(value: string) {
    this._priorityOverride = value;
  }
  public resetPriorityOverride() {
    this._priorityOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityOverrideInput() {
    return this._priorityOverride;
  }
}

export class DataAciContractSubjectProviderToConsumerRelationVzRsFiltAttList extends cdktf.ComplexList {
  public internalValue? : DataAciContractSubjectProviderToConsumerRelationVzRsFiltAtt[] | cdktf.IResolvable

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
  public get(index: number): DataAciContractSubjectProviderToConsumerRelationVzRsFiltAttOutputReference {
    return new DataAciContractSubjectProviderToConsumerRelationVzRsFiltAttOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciContractSubjectProviderToConsumer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/contract_subject#id DataAciContractSubject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/contract_subject#prio DataAciContractSubject#prio}
  */
  readonly prio?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/contract_subject#relation_vz_rs_out_term_graph_att DataAciContractSubject#relation_vz_rs_out_term_graph_att}
  */
  readonly relationVzRsOutTermGraphAtt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/contract_subject#target_dscp DataAciContractSubject#target_dscp}
  */
  readonly targetDscp?: string;
  /**
  * relation_vz_rs_filt_att block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/contract_subject#relation_vz_rs_filt_att DataAciContractSubject#relation_vz_rs_filt_att}
  */
  readonly relationVzRsFiltAtt?: DataAciContractSubjectProviderToConsumerRelationVzRsFiltAtt[] | cdktf.IResolvable;
}

export function dataAciContractSubjectProviderToConsumerToTerraform(struct?: DataAciContractSubjectProviderToConsumer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    prio: cdktf.stringToTerraform(struct!.prio),
    relation_vz_rs_out_term_graph_att: cdktf.stringToTerraform(struct!.relationVzRsOutTermGraphAtt),
    target_dscp: cdktf.stringToTerraform(struct!.targetDscp),
    relation_vz_rs_filt_att: cdktf.listMapper(dataAciContractSubjectProviderToConsumerRelationVzRsFiltAttToTerraform, true)(struct!.relationVzRsFiltAtt),
  }
}


export function dataAciContractSubjectProviderToConsumerToHclTerraform(struct?: DataAciContractSubjectProviderToConsumer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prio: {
      value: cdktf.stringToHclTerraform(struct!.prio),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relation_vz_rs_out_term_graph_att: {
      value: cdktf.stringToHclTerraform(struct!.relationVzRsOutTermGraphAtt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_dscp: {
      value: cdktf.stringToHclTerraform(struct!.targetDscp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relation_vz_rs_filt_att: {
      value: cdktf.listMapperHcl(dataAciContractSubjectProviderToConsumerRelationVzRsFiltAttToHclTerraform, true)(struct!.relationVzRsFiltAtt),
      isBlock: true,
      type: "set",
      storageClassType: "DataAciContractSubjectProviderToConsumerRelationVzRsFiltAttList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAciContractSubjectProviderToConsumerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciContractSubjectProviderToConsumer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._prio !== undefined) {
      hasAnyValues = true;
      internalValueResult.prio = this._prio;
    }
    if (this._relationVzRsOutTermGraphAtt !== undefined) {
      hasAnyValues = true;
      internalValueResult.relationVzRsOutTermGraphAtt = this._relationVzRsOutTermGraphAtt;
    }
    if (this._targetDscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDscp = this._targetDscp;
    }
    if (this._relationVzRsFiltAtt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relationVzRsFiltAtt = this._relationVzRsFiltAtt?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciContractSubjectProviderToConsumer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._prio = undefined;
      this._relationVzRsOutTermGraphAtt = undefined;
      this._targetDscp = undefined;
      this._relationVzRsFiltAtt.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._prio = value.prio;
      this._relationVzRsOutTermGraphAtt = value.relationVzRsOutTermGraphAtt;
      this._targetDscp = value.targetDscp;
      this._relationVzRsFiltAtt.internalValue = value.relationVzRsFiltAtt;
    }
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

  // relation_vz_rs_out_term_graph_att - computed: true, optional: true, required: false
  private _relationVzRsOutTermGraphAtt?: string; 
  public get relationVzRsOutTermGraphAtt() {
    return this.getStringAttribute('relation_vz_rs_out_term_graph_att');
  }
  public set relationVzRsOutTermGraphAtt(value: string) {
    this._relationVzRsOutTermGraphAtt = value;
  }
  public resetRelationVzRsOutTermGraphAtt() {
    this._relationVzRsOutTermGraphAtt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVzRsOutTermGraphAttInput() {
    return this._relationVzRsOutTermGraphAtt;
  }

  // target_dscp - computed: true, optional: true, required: false
  private _targetDscp?: string; 
  public get targetDscp() {
    return this.getStringAttribute('target_dscp');
  }
  public set targetDscp(value: string) {
    this._targetDscp = value;
  }
  public resetTargetDscp() {
    this._targetDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDscpInput() {
    return this._targetDscp;
  }

  // relation_vz_rs_filt_att - computed: false, optional: true, required: false
  private _relationVzRsFiltAtt = new DataAciContractSubjectProviderToConsumerRelationVzRsFiltAttList(this, "relation_vz_rs_filt_att", true);
  public get relationVzRsFiltAtt() {
    return this._relationVzRsFiltAtt;
  }
  public putRelationVzRsFiltAtt(value: DataAciContractSubjectProviderToConsumerRelationVzRsFiltAtt[] | cdktf.IResolvable) {
    this._relationVzRsFiltAtt.internalValue = value;
  }
  public resetRelationVzRsFiltAtt() {
    this._relationVzRsFiltAtt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVzRsFiltAttInput() {
    return this._relationVzRsFiltAtt.internalValue;
  }
}

export class DataAciContractSubjectProviderToConsumerList extends cdktf.ComplexList {
  public internalValue? : DataAciContractSubjectProviderToConsumer[] | cdktf.IResolvable

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
  public get(index: number): DataAciContractSubjectProviderToConsumerOutputReference {
    return new DataAciContractSubjectProviderToConsumerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/contract_subject aci_contract_subject}
*/
export class DataAciContractSubject extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_contract_subject";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciContractSubject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciContractSubject to import
  * @param importFromId The id of the existing DataAciContractSubject that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/contract_subject#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciContractSubject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_contract_subject", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/contract_subject aci_contract_subject} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciContractSubjectConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciContractSubjectConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_contract_subject',
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
    this._applyBothDirections = config.applyBothDirections;
    this._consMatchT = config.consMatchT;
    this._contractDn = config.contractDn;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._prio = config.prio;
    this._provMatchT = config.provMatchT;
    this._revFltPorts = config.revFltPorts;
    this._targetDscp = config.targetDscp;
    this._consumerToProvider.internalValue = config.consumerToProvider;
    this._providerToConsumer.internalValue = config.providerToConsumer;
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

  // apply_both_directions - computed: false, optional: true, required: false
  private _applyBothDirections?: string; 
  public get applyBothDirections() {
    return this.getStringAttribute('apply_both_directions');
  }
  public set applyBothDirections(value: string) {
    this._applyBothDirections = value;
  }
  public resetApplyBothDirections() {
    this._applyBothDirections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyBothDirectionsInput() {
    return this._applyBothDirections;
  }

  // cons_match_t - computed: true, optional: true, required: false
  private _consMatchT?: string; 
  public get consMatchT() {
    return this.getStringAttribute('cons_match_t');
  }
  public set consMatchT(value: string) {
    this._consMatchT = value;
  }
  public resetConsMatchT() {
    this._consMatchT = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consMatchTInput() {
    return this._consMatchT;
  }

  // contract_dn - computed: false, optional: false, required: true
  private _contractDn?: string; 
  public get contractDn() {
    return this.getStringAttribute('contract_dn');
  }
  public set contractDn(value: string) {
    this._contractDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contractDnInput() {
    return this._contractDn;
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

  // prov_match_t - computed: true, optional: true, required: false
  private _provMatchT?: string; 
  public get provMatchT() {
    return this.getStringAttribute('prov_match_t');
  }
  public set provMatchT(value: string) {
    this._provMatchT = value;
  }
  public resetProvMatchT() {
    this._provMatchT = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provMatchTInput() {
    return this._provMatchT;
  }

  // rev_flt_ports - computed: true, optional: true, required: false
  private _revFltPorts?: string; 
  public get revFltPorts() {
    return this.getStringAttribute('rev_flt_ports');
  }
  public set revFltPorts(value: string) {
    this._revFltPorts = value;
  }
  public resetRevFltPorts() {
    this._revFltPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revFltPortsInput() {
    return this._revFltPorts;
  }

  // target_dscp - computed: true, optional: true, required: false
  private _targetDscp?: string; 
  public get targetDscp() {
    return this.getStringAttribute('target_dscp');
  }
  public set targetDscp(value: string) {
    this._targetDscp = value;
  }
  public resetTargetDscp() {
    this._targetDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDscpInput() {
    return this._targetDscp;
  }

  // consumer_to_provider - computed: false, optional: true, required: false
  private _consumerToProvider = new DataAciContractSubjectConsumerToProviderList(this, "consumer_to_provider", true);
  public get consumerToProvider() {
    return this._consumerToProvider;
  }
  public putConsumerToProvider(value: DataAciContractSubjectConsumerToProvider[] | cdktf.IResolvable) {
    this._consumerToProvider.internalValue = value;
  }
  public resetConsumerToProvider() {
    this._consumerToProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerToProviderInput() {
    return this._consumerToProvider.internalValue;
  }

  // provider_to_consumer - computed: false, optional: true, required: false
  private _providerToConsumer = new DataAciContractSubjectProviderToConsumerList(this, "provider_to_consumer", true);
  public get providerToConsumer() {
    return this._providerToConsumer;
  }
  public putProviderToConsumer(value: DataAciContractSubjectProviderToConsumer[] | cdktf.IResolvable) {
    this._providerToConsumer.internalValue = value;
  }
  public resetProviderToConsumer() {
    this._providerToConsumer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerToConsumerInput() {
    return this._providerToConsumer.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      apply_both_directions: cdktf.stringToTerraform(this._applyBothDirections),
      cons_match_t: cdktf.stringToTerraform(this._consMatchT),
      contract_dn: cdktf.stringToTerraform(this._contractDn),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      prio: cdktf.stringToTerraform(this._prio),
      prov_match_t: cdktf.stringToTerraform(this._provMatchT),
      rev_flt_ports: cdktf.stringToTerraform(this._revFltPorts),
      target_dscp: cdktf.stringToTerraform(this._targetDscp),
      consumer_to_provider: cdktf.listMapper(dataAciContractSubjectConsumerToProviderToTerraform, true)(this._consumerToProvider.internalValue),
      provider_to_consumer: cdktf.listMapper(dataAciContractSubjectProviderToConsumerToTerraform, true)(this._providerToConsumer.internalValue),
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
      apply_both_directions: {
        value: cdktf.stringToHclTerraform(this._applyBothDirections),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cons_match_t: {
        value: cdktf.stringToHclTerraform(this._consMatchT),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contract_dn: {
        value: cdktf.stringToHclTerraform(this._contractDn),
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
      prio: {
        value: cdktf.stringToHclTerraform(this._prio),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prov_match_t: {
        value: cdktf.stringToHclTerraform(this._provMatchT),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rev_flt_ports: {
        value: cdktf.stringToHclTerraform(this._revFltPorts),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_dscp: {
        value: cdktf.stringToHclTerraform(this._targetDscp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consumer_to_provider: {
        value: cdktf.listMapperHcl(dataAciContractSubjectConsumerToProviderToHclTerraform, true)(this._consumerToProvider.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataAciContractSubjectConsumerToProviderList",
      },
      provider_to_consumer: {
        value: cdktf.listMapperHcl(dataAciContractSubjectProviderToConsumerToHclTerraform, true)(this._providerToConsumer.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataAciContractSubjectProviderToConsumerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
