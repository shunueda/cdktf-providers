// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_service_epg
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudServiceEpgConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_service_epg#access_type CloudServiceEpg#access_type}
  */
  readonly accessType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_service_epg#annotation CloudServiceEpg#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_service_epg#azure_private_endpoint CloudServiceEpg#azure_private_endpoint}
  */
  readonly azurePrivateEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_service_epg#cloud_application_container_dn CloudServiceEpg#cloud_application_container_dn}
  */
  readonly cloudApplicationContainerDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_service_epg#cloud_service_epg_type CloudServiceEpg#cloud_service_epg_type}
  */
  readonly cloudServiceEpgType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_service_epg#custom_service_type CloudServiceEpg#custom_service_type}
  */
  readonly customServiceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_service_epg#deployment_type CloudServiceEpg#deployment_type}
  */
  readonly deploymentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_service_epg#description CloudServiceEpg#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_service_epg#flood_on_encap CloudServiceEpg#flood_on_encap}
  */
  readonly floodOnEncap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_service_epg#id CloudServiceEpg#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_service_epg#label_match_criteria CloudServiceEpg#label_match_criteria}
  */
  readonly labelMatchCriteria?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_service_epg#name CloudServiceEpg#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_service_epg#name_alias CloudServiceEpg#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_service_epg#preferred_group_member CloudServiceEpg#preferred_group_member}
  */
  readonly preferredGroupMember?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_service_epg#prio CloudServiceEpg#prio}
  */
  readonly prio?: string;
  /**
  * Create relation to fv:Ctx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_service_epg#relation_cloud_rs_cloud_epg_ctx CloudServiceEpg#relation_cloud_rs_cloud_epg_ctx}
  */
  readonly relationCloudRsCloudEpgCtx?: string;
  /**
  * Create relation to qos:CustomPol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_service_epg#relation_fv_rs_cust_qos_pol CloudServiceEpg#relation_fv_rs_cust_qos_pol}
  */
  readonly relationFvRsCustQosPol?: string;
  /**
  * Create relation to vz:GraphCont
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_service_epg#relation_fv_rs_graph_def CloudServiceEpg#relation_fv_rs_graph_def}
  */
  readonly relationFvRsGraphDef?: string[];
  /**
  * Create relation to vz:BrCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_service_epg#relation_fv_rs_intra_epg CloudServiceEpg#relation_fv_rs_intra_epg}
  */
  readonly relationFvRsIntraEpg?: string[];
  /**
  * Create relation to vz:Taboo
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_service_epg#relation_fv_rs_prot_by CloudServiceEpg#relation_fv_rs_prot_by}
  */
  readonly relationFvRsProtBy?: string[];
  /**
  * Create relation to vz:CtrctEPgCont
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_service_epg#relation_fv_rs_prov_def CloudServiceEpg#relation_fv_rs_prov_def}
  */
  readonly relationFvRsProvDef?: string[];
  /**
  * Create relation to fv:EPg
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_service_epg#relation_fv_rs_sec_inherited CloudServiceEpg#relation_fv_rs_sec_inherited}
  */
  readonly relationFvRsSecInherited?: string[];
  /**
  * relation_fv_rs_cons block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_service_epg#relation_fv_rs_cons CloudServiceEpg#relation_fv_rs_cons}
  */
  readonly relationFvRsCons?: CloudServiceEpgRelationFvRsCons[] | cdktf.IResolvable;
  /**
  * relation_fv_rs_cons_if block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_service_epg#relation_fv_rs_cons_if CloudServiceEpg#relation_fv_rs_cons_if}
  */
  readonly relationFvRsConsIf?: CloudServiceEpgRelationFvRsConsIf[] | cdktf.IResolvable;
  /**
  * relation_fv_rs_prov block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_service_epg#relation_fv_rs_prov CloudServiceEpg#relation_fv_rs_prov}
  */
  readonly relationFvRsProv?: CloudServiceEpgRelationFvRsProv[] | cdktf.IResolvable;
}
export interface CloudServiceEpgRelationFvRsCons {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_service_epg#prio CloudServiceEpg#prio}
  */
  readonly prio?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_service_epg#target_dn CloudServiceEpg#target_dn}
  */
  readonly targetDn: string;
}

export function cloudServiceEpgRelationFvRsConsToTerraform(struct?: CloudServiceEpgRelationFvRsCons | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prio: cdktf.stringToTerraform(struct!.prio),
    target_dn: cdktf.stringToTerraform(struct!.targetDn),
  }
}


export function cloudServiceEpgRelationFvRsConsToHclTerraform(struct?: CloudServiceEpgRelationFvRsCons | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prio: {
      value: cdktf.stringToHclTerraform(struct!.prio),
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

export class CloudServiceEpgRelationFvRsConsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudServiceEpgRelationFvRsCons | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prio !== undefined) {
      hasAnyValues = true;
      internalValueResult.prio = this._prio;
    }
    if (this._targetDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDn = this._targetDn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudServiceEpgRelationFvRsCons | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prio = undefined;
      this._targetDn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prio = value.prio;
      this._targetDn = value.targetDn;
    }
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

export class CloudServiceEpgRelationFvRsConsList extends cdktf.ComplexList {
  public internalValue? : CloudServiceEpgRelationFvRsCons[] | cdktf.IResolvable

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
  public get(index: number): CloudServiceEpgRelationFvRsConsOutputReference {
    return new CloudServiceEpgRelationFvRsConsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudServiceEpgRelationFvRsConsIf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_service_epg#prio CloudServiceEpg#prio}
  */
  readonly prio?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_service_epg#target_dn CloudServiceEpg#target_dn}
  */
  readonly targetDn: string;
}

export function cloudServiceEpgRelationFvRsConsIfToTerraform(struct?: CloudServiceEpgRelationFvRsConsIf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prio: cdktf.stringToTerraform(struct!.prio),
    target_dn: cdktf.stringToTerraform(struct!.targetDn),
  }
}


export function cloudServiceEpgRelationFvRsConsIfToHclTerraform(struct?: CloudServiceEpgRelationFvRsConsIf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prio: {
      value: cdktf.stringToHclTerraform(struct!.prio),
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

export class CloudServiceEpgRelationFvRsConsIfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudServiceEpgRelationFvRsConsIf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prio !== undefined) {
      hasAnyValues = true;
      internalValueResult.prio = this._prio;
    }
    if (this._targetDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDn = this._targetDn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudServiceEpgRelationFvRsConsIf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prio = undefined;
      this._targetDn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prio = value.prio;
      this._targetDn = value.targetDn;
    }
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

export class CloudServiceEpgRelationFvRsConsIfList extends cdktf.ComplexList {
  public internalValue? : CloudServiceEpgRelationFvRsConsIf[] | cdktf.IResolvable

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
  public get(index: number): CloudServiceEpgRelationFvRsConsIfOutputReference {
    return new CloudServiceEpgRelationFvRsConsIfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudServiceEpgRelationFvRsProv {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_service_epg#label_match_criteria CloudServiceEpg#label_match_criteria}
  */
  readonly labelMatchCriteria?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_service_epg#prio CloudServiceEpg#prio}
  */
  readonly prio?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_service_epg#target_dn CloudServiceEpg#target_dn}
  */
  readonly targetDn: string;
}

export function cloudServiceEpgRelationFvRsProvToTerraform(struct?: CloudServiceEpgRelationFvRsProv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_match_criteria: cdktf.stringToTerraform(struct!.labelMatchCriteria),
    prio: cdktf.stringToTerraform(struct!.prio),
    target_dn: cdktf.stringToTerraform(struct!.targetDn),
  }
}


export function cloudServiceEpgRelationFvRsProvToHclTerraform(struct?: CloudServiceEpgRelationFvRsProv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.labelMatchCriteria),
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

export class CloudServiceEpgRelationFvRsProvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudServiceEpgRelationFvRsProv | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelMatchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelMatchCriteria = this._labelMatchCriteria;
    }
    if (this._prio !== undefined) {
      hasAnyValues = true;
      internalValueResult.prio = this._prio;
    }
    if (this._targetDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDn = this._targetDn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudServiceEpgRelationFvRsProv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelMatchCriteria = undefined;
      this._prio = undefined;
      this._targetDn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelMatchCriteria = value.labelMatchCriteria;
      this._prio = value.prio;
      this._targetDn = value.targetDn;
    }
  }

  // label_match_criteria - computed: true, optional: true, required: false
  private _labelMatchCriteria?: string; 
  public get labelMatchCriteria() {
    return this.getStringAttribute('label_match_criteria');
  }
  public set labelMatchCriteria(value: string) {
    this._labelMatchCriteria = value;
  }
  public resetLabelMatchCriteria() {
    this._labelMatchCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelMatchCriteriaInput() {
    return this._labelMatchCriteria;
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

export class CloudServiceEpgRelationFvRsProvList extends cdktf.ComplexList {
  public internalValue? : CloudServiceEpgRelationFvRsProv[] | cdktf.IResolvable

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
  public get(index: number): CloudServiceEpgRelationFvRsProvOutputReference {
    return new CloudServiceEpgRelationFvRsProvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_service_epg aci_cloud_service_epg}
*/
export class CloudServiceEpg extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_cloud_service_epg";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudServiceEpg resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudServiceEpg to import
  * @param importFromId The id of the existing CloudServiceEpg that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_service_epg#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudServiceEpg to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_cloud_service_epg", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_service_epg aci_cloud_service_epg} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudServiceEpgConfig
  */
  public constructor(scope: Construct, id: string, config: CloudServiceEpgConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_cloud_service_epg',
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
    this._accessType = config.accessType;
    this._annotation = config.annotation;
    this._azurePrivateEndpoint = config.azurePrivateEndpoint;
    this._cloudApplicationContainerDn = config.cloudApplicationContainerDn;
    this._cloudServiceEpgType = config.cloudServiceEpgType;
    this._customServiceType = config.customServiceType;
    this._deploymentType = config.deploymentType;
    this._description = config.description;
    this._floodOnEncap = config.floodOnEncap;
    this._id = config.id;
    this._labelMatchCriteria = config.labelMatchCriteria;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._preferredGroupMember = config.preferredGroupMember;
    this._prio = config.prio;
    this._relationCloudRsCloudEpgCtx = config.relationCloudRsCloudEpgCtx;
    this._relationFvRsCustQosPol = config.relationFvRsCustQosPol;
    this._relationFvRsGraphDef = config.relationFvRsGraphDef;
    this._relationFvRsIntraEpg = config.relationFvRsIntraEpg;
    this._relationFvRsProtBy = config.relationFvRsProtBy;
    this._relationFvRsProvDef = config.relationFvRsProvDef;
    this._relationFvRsSecInherited = config.relationFvRsSecInherited;
    this._relationFvRsCons.internalValue = config.relationFvRsCons;
    this._relationFvRsConsIf.internalValue = config.relationFvRsConsIf;
    this._relationFvRsProv.internalValue = config.relationFvRsProv;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_type - computed: true, optional: true, required: false
  private _accessType?: string; 
  public get accessType() {
    return this.getStringAttribute('access_type');
  }
  public set accessType(value: string) {
    this._accessType = value;
  }
  public resetAccessType() {
    this._accessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTypeInput() {
    return this._accessType;
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

  // azure_private_endpoint - computed: true, optional: true, required: false
  private _azurePrivateEndpoint?: string; 
  public get azurePrivateEndpoint() {
    return this.getStringAttribute('azure_private_endpoint');
  }
  public set azurePrivateEndpoint(value: string) {
    this._azurePrivateEndpoint = value;
  }
  public resetAzurePrivateEndpoint() {
    this._azurePrivateEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azurePrivateEndpointInput() {
    return this._azurePrivateEndpoint;
  }

  // cloud_application_container_dn - computed: false, optional: false, required: true
  private _cloudApplicationContainerDn?: string; 
  public get cloudApplicationContainerDn() {
    return this.getStringAttribute('cloud_application_container_dn');
  }
  public set cloudApplicationContainerDn(value: string) {
    this._cloudApplicationContainerDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudApplicationContainerDnInput() {
    return this._cloudApplicationContainerDn;
  }

  // cloud_service_epg_type - computed: true, optional: true, required: false
  private _cloudServiceEpgType?: string; 
  public get cloudServiceEpgType() {
    return this.getStringAttribute('cloud_service_epg_type');
  }
  public set cloudServiceEpgType(value: string) {
    this._cloudServiceEpgType = value;
  }
  public resetCloudServiceEpgType() {
    this._cloudServiceEpgType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudServiceEpgTypeInput() {
    return this._cloudServiceEpgType;
  }

  // custom_service_type - computed: true, optional: true, required: false
  private _customServiceType?: string; 
  public get customServiceType() {
    return this.getStringAttribute('custom_service_type');
  }
  public set customServiceType(value: string) {
    this._customServiceType = value;
  }
  public resetCustomServiceType() {
    this._customServiceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customServiceTypeInput() {
    return this._customServiceType;
  }

  // deployment_type - computed: true, optional: true, required: false
  private _deploymentType?: string; 
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
  public set deploymentType(value: string) {
    this._deploymentType = value;
  }
  public resetDeploymentType() {
    this._deploymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeInput() {
    return this._deploymentType;
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

  // flood_on_encap - computed: true, optional: true, required: false
  private _floodOnEncap?: string; 
  public get floodOnEncap() {
    return this.getStringAttribute('flood_on_encap');
  }
  public set floodOnEncap(value: string) {
    this._floodOnEncap = value;
  }
  public resetFloodOnEncap() {
    this._floodOnEncap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floodOnEncapInput() {
    return this._floodOnEncap;
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

  // label_match_criteria - computed: true, optional: true, required: false
  private _labelMatchCriteria?: string; 
  public get labelMatchCriteria() {
    return this.getStringAttribute('label_match_criteria');
  }
  public set labelMatchCriteria(value: string) {
    this._labelMatchCriteria = value;
  }
  public resetLabelMatchCriteria() {
    this._labelMatchCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelMatchCriteriaInput() {
    return this._labelMatchCriteria;
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

  // preferred_group_member - computed: true, optional: true, required: false
  private _preferredGroupMember?: string; 
  public get preferredGroupMember() {
    return this.getStringAttribute('preferred_group_member');
  }
  public set preferredGroupMember(value: string) {
    this._preferredGroupMember = value;
  }
  public resetPreferredGroupMember() {
    this._preferredGroupMember = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredGroupMemberInput() {
    return this._preferredGroupMember;
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

  // relation_cloud_rs_cloud_epg_ctx - computed: true, optional: true, required: false
  private _relationCloudRsCloudEpgCtx?: string; 
  public get relationCloudRsCloudEpgCtx() {
    return this.getStringAttribute('relation_cloud_rs_cloud_epg_ctx');
  }
  public set relationCloudRsCloudEpgCtx(value: string) {
    this._relationCloudRsCloudEpgCtx = value;
  }
  public resetRelationCloudRsCloudEpgCtx() {
    this._relationCloudRsCloudEpgCtx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationCloudRsCloudEpgCtxInput() {
    return this._relationCloudRsCloudEpgCtx;
  }

  // relation_fv_rs_cust_qos_pol - computed: true, optional: true, required: false
  private _relationFvRsCustQosPol?: string; 
  public get relationFvRsCustQosPol() {
    return this.getStringAttribute('relation_fv_rs_cust_qos_pol');
  }
  public set relationFvRsCustQosPol(value: string) {
    this._relationFvRsCustQosPol = value;
  }
  public resetRelationFvRsCustQosPol() {
    this._relationFvRsCustQosPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsCustQosPolInput() {
    return this._relationFvRsCustQosPol;
  }

  // relation_fv_rs_graph_def - computed: true, optional: true, required: false
  private _relationFvRsGraphDef?: string[]; 
  public get relationFvRsGraphDef() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_fv_rs_graph_def'));
  }
  public set relationFvRsGraphDef(value: string[]) {
    this._relationFvRsGraphDef = value;
  }
  public resetRelationFvRsGraphDef() {
    this._relationFvRsGraphDef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsGraphDefInput() {
    return this._relationFvRsGraphDef;
  }

  // relation_fv_rs_intra_epg - computed: true, optional: true, required: false
  private _relationFvRsIntraEpg?: string[]; 
  public get relationFvRsIntraEpg() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_fv_rs_intra_epg'));
  }
  public set relationFvRsIntraEpg(value: string[]) {
    this._relationFvRsIntraEpg = value;
  }
  public resetRelationFvRsIntraEpg() {
    this._relationFvRsIntraEpg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsIntraEpgInput() {
    return this._relationFvRsIntraEpg;
  }

  // relation_fv_rs_prot_by - computed: true, optional: true, required: false
  private _relationFvRsProtBy?: string[]; 
  public get relationFvRsProtBy() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_fv_rs_prot_by'));
  }
  public set relationFvRsProtBy(value: string[]) {
    this._relationFvRsProtBy = value;
  }
  public resetRelationFvRsProtBy() {
    this._relationFvRsProtBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsProtByInput() {
    return this._relationFvRsProtBy;
  }

  // relation_fv_rs_prov_def - computed: true, optional: true, required: false
  private _relationFvRsProvDef?: string[]; 
  public get relationFvRsProvDef() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_fv_rs_prov_def'));
  }
  public set relationFvRsProvDef(value: string[]) {
    this._relationFvRsProvDef = value;
  }
  public resetRelationFvRsProvDef() {
    this._relationFvRsProvDef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsProvDefInput() {
    return this._relationFvRsProvDef;
  }

  // relation_fv_rs_sec_inherited - computed: true, optional: true, required: false
  private _relationFvRsSecInherited?: string[]; 
  public get relationFvRsSecInherited() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_fv_rs_sec_inherited'));
  }
  public set relationFvRsSecInherited(value: string[]) {
    this._relationFvRsSecInherited = value;
  }
  public resetRelationFvRsSecInherited() {
    this._relationFvRsSecInherited = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsSecInheritedInput() {
    return this._relationFvRsSecInherited;
  }

  // relation_fv_rs_cons - computed: false, optional: true, required: false
  private _relationFvRsCons = new CloudServiceEpgRelationFvRsConsList(this, "relation_fv_rs_cons", true);
  public get relationFvRsCons() {
    return this._relationFvRsCons;
  }
  public putRelationFvRsCons(value: CloudServiceEpgRelationFvRsCons[] | cdktf.IResolvable) {
    this._relationFvRsCons.internalValue = value;
  }
  public resetRelationFvRsCons() {
    this._relationFvRsCons.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsConsInput() {
    return this._relationFvRsCons.internalValue;
  }

  // relation_fv_rs_cons_if - computed: false, optional: true, required: false
  private _relationFvRsConsIf = new CloudServiceEpgRelationFvRsConsIfList(this, "relation_fv_rs_cons_if", true);
  public get relationFvRsConsIf() {
    return this._relationFvRsConsIf;
  }
  public putRelationFvRsConsIf(value: CloudServiceEpgRelationFvRsConsIf[] | cdktf.IResolvable) {
    this._relationFvRsConsIf.internalValue = value;
  }
  public resetRelationFvRsConsIf() {
    this._relationFvRsConsIf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsConsIfInput() {
    return this._relationFvRsConsIf.internalValue;
  }

  // relation_fv_rs_prov - computed: false, optional: true, required: false
  private _relationFvRsProv = new CloudServiceEpgRelationFvRsProvList(this, "relation_fv_rs_prov", true);
  public get relationFvRsProv() {
    return this._relationFvRsProv;
  }
  public putRelationFvRsProv(value: CloudServiceEpgRelationFvRsProv[] | cdktf.IResolvable) {
    this._relationFvRsProv.internalValue = value;
  }
  public resetRelationFvRsProv() {
    this._relationFvRsProv.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsProvInput() {
    return this._relationFvRsProv.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_type: cdktf.stringToTerraform(this._accessType),
      annotation: cdktf.stringToTerraform(this._annotation),
      azure_private_endpoint: cdktf.stringToTerraform(this._azurePrivateEndpoint),
      cloud_application_container_dn: cdktf.stringToTerraform(this._cloudApplicationContainerDn),
      cloud_service_epg_type: cdktf.stringToTerraform(this._cloudServiceEpgType),
      custom_service_type: cdktf.stringToTerraform(this._customServiceType),
      deployment_type: cdktf.stringToTerraform(this._deploymentType),
      description: cdktf.stringToTerraform(this._description),
      flood_on_encap: cdktf.stringToTerraform(this._floodOnEncap),
      id: cdktf.stringToTerraform(this._id),
      label_match_criteria: cdktf.stringToTerraform(this._labelMatchCriteria),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      preferred_group_member: cdktf.stringToTerraform(this._preferredGroupMember),
      prio: cdktf.stringToTerraform(this._prio),
      relation_cloud_rs_cloud_epg_ctx: cdktf.stringToTerraform(this._relationCloudRsCloudEpgCtx),
      relation_fv_rs_cust_qos_pol: cdktf.stringToTerraform(this._relationFvRsCustQosPol),
      relation_fv_rs_graph_def: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationFvRsGraphDef),
      relation_fv_rs_intra_epg: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationFvRsIntraEpg),
      relation_fv_rs_prot_by: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationFvRsProtBy),
      relation_fv_rs_prov_def: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationFvRsProvDef),
      relation_fv_rs_sec_inherited: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationFvRsSecInherited),
      relation_fv_rs_cons: cdktf.listMapper(cloudServiceEpgRelationFvRsConsToTerraform, true)(this._relationFvRsCons.internalValue),
      relation_fv_rs_cons_if: cdktf.listMapper(cloudServiceEpgRelationFvRsConsIfToTerraform, true)(this._relationFvRsConsIf.internalValue),
      relation_fv_rs_prov: cdktf.listMapper(cloudServiceEpgRelationFvRsProvToTerraform, true)(this._relationFvRsProv.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_type: {
        value: cdktf.stringToHclTerraform(this._accessType),
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
      azure_private_endpoint: {
        value: cdktf.stringToHclTerraform(this._azurePrivateEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_application_container_dn: {
        value: cdktf.stringToHclTerraform(this._cloudApplicationContainerDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_service_epg_type: {
        value: cdktf.stringToHclTerraform(this._cloudServiceEpgType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_service_type: {
        value: cdktf.stringToHclTerraform(this._customServiceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_type: {
        value: cdktf.stringToHclTerraform(this._deploymentType),
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
      flood_on_encap: {
        value: cdktf.stringToHclTerraform(this._floodOnEncap),
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
      label_match_criteria: {
        value: cdktf.stringToHclTerraform(this._labelMatchCriteria),
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
      preferred_group_member: {
        value: cdktf.stringToHclTerraform(this._preferredGroupMember),
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
      relation_cloud_rs_cloud_epg_ctx: {
        value: cdktf.stringToHclTerraform(this._relationCloudRsCloudEpgCtx),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_fv_rs_cust_qos_pol: {
        value: cdktf.stringToHclTerraform(this._relationFvRsCustQosPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_fv_rs_graph_def: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._relationFvRsGraphDef),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      relation_fv_rs_intra_epg: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._relationFvRsIntraEpg),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      relation_fv_rs_prot_by: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._relationFvRsProtBy),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      relation_fv_rs_prov_def: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._relationFvRsProvDef),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      relation_fv_rs_sec_inherited: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._relationFvRsSecInherited),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      relation_fv_rs_cons: {
        value: cdktf.listMapperHcl(cloudServiceEpgRelationFvRsConsToHclTerraform, true)(this._relationFvRsCons.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudServiceEpgRelationFvRsConsList",
      },
      relation_fv_rs_cons_if: {
        value: cdktf.listMapperHcl(cloudServiceEpgRelationFvRsConsIfToHclTerraform, true)(this._relationFvRsConsIf.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudServiceEpgRelationFvRsConsIfList",
      },
      relation_fv_rs_prov: {
        value: cdktf.listMapperHcl(cloudServiceEpgRelationFvRsProvToHclTerraform, true)(this._relationFvRsProv.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudServiceEpgRelationFvRsProvList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
