// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_service_epg
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciCloudServiceEpgConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_service_epg#annotation DataAciCloudServiceEpg#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_service_epg#cloud_application_container_dn DataAciCloudServiceEpg#cloud_application_container_dn}
  */
  readonly cloudApplicationContainerDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_service_epg#description DataAciCloudServiceEpg#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_service_epg#id DataAciCloudServiceEpg#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_service_epg#name DataAciCloudServiceEpg#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_service_epg#name_alias DataAciCloudServiceEpg#name_alias}
  */
  readonly nameAlias?: string;
}
export interface DataAciCloudServiceEpgRelationFvRsCons {
}

export function dataAciCloudServiceEpgRelationFvRsConsToTerraform(struct?: DataAciCloudServiceEpgRelationFvRsCons): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciCloudServiceEpgRelationFvRsConsToHclTerraform(struct?: DataAciCloudServiceEpgRelationFvRsCons): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciCloudServiceEpgRelationFvRsConsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciCloudServiceEpgRelationFvRsCons | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciCloudServiceEpgRelationFvRsCons | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prio - computed: true, optional: false, required: false
  public get prio() {
    return this.getStringAttribute('prio');
  }

  // target_dn - computed: true, optional: false, required: false
  public get targetDn() {
    return this.getStringAttribute('target_dn');
  }
}

export class DataAciCloudServiceEpgRelationFvRsConsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciCloudServiceEpgRelationFvRsConsOutputReference {
    return new DataAciCloudServiceEpgRelationFvRsConsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciCloudServiceEpgRelationFvRsConsIf {
}

export function dataAciCloudServiceEpgRelationFvRsConsIfToTerraform(struct?: DataAciCloudServiceEpgRelationFvRsConsIf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciCloudServiceEpgRelationFvRsConsIfToHclTerraform(struct?: DataAciCloudServiceEpgRelationFvRsConsIf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciCloudServiceEpgRelationFvRsConsIfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciCloudServiceEpgRelationFvRsConsIf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciCloudServiceEpgRelationFvRsConsIf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prio - computed: true, optional: false, required: false
  public get prio() {
    return this.getStringAttribute('prio');
  }

  // target_dn - computed: true, optional: false, required: false
  public get targetDn() {
    return this.getStringAttribute('target_dn');
  }
}

export class DataAciCloudServiceEpgRelationFvRsConsIfList extends cdktf.ComplexList {

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
  public get(index: number): DataAciCloudServiceEpgRelationFvRsConsIfOutputReference {
    return new DataAciCloudServiceEpgRelationFvRsConsIfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciCloudServiceEpgRelationFvRsProv {
}

export function dataAciCloudServiceEpgRelationFvRsProvToTerraform(struct?: DataAciCloudServiceEpgRelationFvRsProv): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciCloudServiceEpgRelationFvRsProvToHclTerraform(struct?: DataAciCloudServiceEpgRelationFvRsProv): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciCloudServiceEpgRelationFvRsProvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciCloudServiceEpgRelationFvRsProv | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciCloudServiceEpgRelationFvRsProv | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label_match_criteria - computed: true, optional: false, required: false
  public get labelMatchCriteria() {
    return this.getStringAttribute('label_match_criteria');
  }

  // prio - computed: true, optional: false, required: false
  public get prio() {
    return this.getStringAttribute('prio');
  }

  // target_dn - computed: true, optional: false, required: false
  public get targetDn() {
    return this.getStringAttribute('target_dn');
  }
}

export class DataAciCloudServiceEpgRelationFvRsProvList extends cdktf.ComplexList {

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
  public get(index: number): DataAciCloudServiceEpgRelationFvRsProvOutputReference {
    return new DataAciCloudServiceEpgRelationFvRsProvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_service_epg aci_cloud_service_epg}
*/
export class DataAciCloudServiceEpg extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_cloud_service_epg";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciCloudServiceEpg resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciCloudServiceEpg to import
  * @param importFromId The id of the existing DataAciCloudServiceEpg that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_service_epg#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciCloudServiceEpg to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_cloud_service_epg", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_service_epg aci_cloud_service_epg} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciCloudServiceEpgConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciCloudServiceEpgConfig) {
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
    this._annotation = config.annotation;
    this._cloudApplicationContainerDn = config.cloudApplicationContainerDn;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_type - computed: true, optional: false, required: false
  public get accessType() {
    return this.getStringAttribute('access_type');
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

  // azure_private_endpoint - computed: true, optional: false, required: false
  public get azurePrivateEndpoint() {
    return this.getStringAttribute('azure_private_endpoint');
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

  // cloud_service_epg_type - computed: true, optional: false, required: false
  public get cloudServiceEpgType() {
    return this.getStringAttribute('cloud_service_epg_type');
  }

  // custom_service_type - computed: true, optional: false, required: false
  public get customServiceType() {
    return this.getStringAttribute('custom_service_type');
  }

  // deployment_type - computed: true, optional: false, required: false
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
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

  // flood_on_encap - computed: true, optional: false, required: false
  public get floodOnEncap() {
    return this.getStringAttribute('flood_on_encap');
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

  // label_match_criteria - computed: true, optional: false, required: false
  public get labelMatchCriteria() {
    return this.getStringAttribute('label_match_criteria');
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

  // preferred_group_member - computed: true, optional: false, required: false
  public get preferredGroupMember() {
    return this.getStringAttribute('preferred_group_member');
  }

  // prio - computed: true, optional: false, required: false
  public get prio() {
    return this.getStringAttribute('prio');
  }

  // relation_cloud_rs_cloud_epg_ctx - computed: true, optional: false, required: false
  public get relationCloudRsCloudEpgCtx() {
    return this.getStringAttribute('relation_cloud_rs_cloud_epg_ctx');
  }

  // relation_fv_rs_cons - computed: true, optional: false, required: false
  private _relationFvRsCons = new DataAciCloudServiceEpgRelationFvRsConsList(this, "relation_fv_rs_cons", true);
  public get relationFvRsCons() {
    return this._relationFvRsCons;
  }

  // relation_fv_rs_cons_if - computed: true, optional: false, required: false
  private _relationFvRsConsIf = new DataAciCloudServiceEpgRelationFvRsConsIfList(this, "relation_fv_rs_cons_if", true);
  public get relationFvRsConsIf() {
    return this._relationFvRsConsIf;
  }

  // relation_fv_rs_cust_qos_pol - computed: true, optional: false, required: false
  public get relationFvRsCustQosPol() {
    return this.getStringAttribute('relation_fv_rs_cust_qos_pol');
  }

  // relation_fv_rs_graph_def - computed: true, optional: false, required: false
  public get relationFvRsGraphDef() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_fv_rs_graph_def'));
  }

  // relation_fv_rs_intra_epg - computed: true, optional: false, required: false
  public get relationFvRsIntraEpg() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_fv_rs_intra_epg'));
  }

  // relation_fv_rs_prot_by - computed: true, optional: false, required: false
  public get relationFvRsProtBy() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_fv_rs_prot_by'));
  }

  // relation_fv_rs_prov - computed: true, optional: false, required: false
  private _relationFvRsProv = new DataAciCloudServiceEpgRelationFvRsProvList(this, "relation_fv_rs_prov", true);
  public get relationFvRsProv() {
    return this._relationFvRsProv;
  }

  // relation_fv_rs_prov_def - computed: true, optional: false, required: false
  public get relationFvRsProvDef() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_fv_rs_prov_def'));
  }

  // relation_fv_rs_sec_inherited - computed: true, optional: false, required: false
  public get relationFvRsSecInherited() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_fv_rs_sec_inherited'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      cloud_application_container_dn: cdktf.stringToTerraform(this._cloudApplicationContainerDn),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
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
      cloud_application_container_dn: {
        value: cdktf.stringToHclTerraform(this._cloudApplicationContainerDn),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
