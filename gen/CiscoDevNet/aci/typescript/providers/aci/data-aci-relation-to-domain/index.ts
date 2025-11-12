// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/relation_to_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciRelationToDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * The distinguished name (DN) of the parent object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/relation_to_domain#parent_dn DataAciRelationToDomain#parent_dn}
  */
  readonly parentDn: string;
  /**
  * The distinguished name of the target Domain object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/relation_to_domain#target_dn DataAciRelationToDomain#target_dn}
  */
  readonly targetDn: string;
}
export interface DataAciRelationToDomainAnnotations {
}

export function dataAciRelationToDomainAnnotationsToTerraform(struct?: DataAciRelationToDomainAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciRelationToDomainAnnotationsToHclTerraform(struct?: DataAciRelationToDomainAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciRelationToDomainAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciRelationToDomainAnnotations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciRelationToDomainAnnotations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAciRelationToDomainAnnotationsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciRelationToDomainAnnotationsOutputReference {
    return new DataAciRelationToDomainAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciRelationToDomainTags {
}

export function dataAciRelationToDomainTagsToTerraform(struct?: DataAciRelationToDomainTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciRelationToDomainTagsToHclTerraform(struct?: DataAciRelationToDomainTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciRelationToDomainTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciRelationToDomainTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciRelationToDomainTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAciRelationToDomainTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciRelationToDomainTagsOutputReference {
    return new DataAciRelationToDomainTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/relation_to_domain aci_relation_to_domain}
*/
export class DataAciRelationToDomain extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_relation_to_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciRelationToDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciRelationToDomain to import
  * @param importFromId The id of the existing DataAciRelationToDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/relation_to_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciRelationToDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_relation_to_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/relation_to_domain aci_relation_to_domain} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciRelationToDomainConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciRelationToDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_relation_to_domain',
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
    this._parentDn = config.parentDn;
    this._targetDn = config.targetDn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotation - computed: true, optional: false, required: false
  public get annotation() {
    return this.getStringAttribute('annotation');
  }

  // annotations - computed: true, optional: false, required: false
  private _annotations = new DataAciRelationToDomainAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }

  // binding_type - computed: true, optional: false, required: false
  public get bindingType() {
    return this.getStringAttribute('binding_type');
  }

  // class_preference - computed: true, optional: false, required: false
  public get classPreference() {
    return this.getStringAttribute('class_preference');
  }

  // custom_epg_name - computed: true, optional: false, required: false
  public get customEpgName() {
    return this.getStringAttribute('custom_epg_name');
  }

  // delimiter - computed: true, optional: false, required: false
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }

  // deployment_immediacy - computed: true, optional: false, required: false
  public get deploymentImmediacy() {
    return this.getStringAttribute('deployment_immediacy');
  }

  // enable_netflow - computed: true, optional: false, required: false
  public get enableNetflow() {
    return this.getStringAttribute('enable_netflow');
  }

  // encapsulation - computed: true, optional: false, required: false
  public get encapsulation() {
    return this.getStringAttribute('encapsulation');
  }

  // encapsulation_mode - computed: true, optional: false, required: false
  public get encapsulationMode() {
    return this.getStringAttribute('encapsulation_mode');
  }

  // epg_cos - computed: true, optional: false, required: false
  public get epgCos() {
    return this.getStringAttribute('epg_cos');
  }

  // epg_cos_pref - computed: true, optional: false, required: false
  public get epgCosPref() {
    return this.getStringAttribute('epg_cos_pref');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipam_dhcp_override - computed: true, optional: false, required: false
  public get ipamDhcpOverride() {
    return this.getStringAttribute('ipam_dhcp_override');
  }

  // ipam_enabled - computed: true, optional: false, required: false
  public get ipamEnabled() {
    return this.getStringAttribute('ipam_enabled');
  }

  // ipam_gateway - computed: true, optional: false, required: false
  public get ipamGateway() {
    return this.getStringAttribute('ipam_gateway');
  }

  // lag_policy_name - computed: true, optional: false, required: false
  public get lagPolicyName() {
    return this.getStringAttribute('lag_policy_name');
  }

  // netflow_direction - computed: true, optional: false, required: false
  public get netflowDirection() {
    return this.getStringAttribute('netflow_direction');
  }

  // number_of_ports - computed: true, optional: false, required: false
  public get numberOfPorts() {
    return this.getStringAttribute('number_of_ports');
  }

  // parent_dn - computed: false, optional: false, required: true
  private _parentDn?: string; 
  public get parentDn() {
    return this.getStringAttribute('parent_dn');
  }
  public set parentDn(value: string) {
    this._parentDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentDnInput() {
    return this._parentDn;
  }

  // port_allocation - computed: true, optional: false, required: false
  public get portAllocation() {
    return this.getStringAttribute('port_allocation');
  }

  // primary_encapsulation - computed: true, optional: false, required: false
  public get primaryEncapsulation() {
    return this.getStringAttribute('primary_encapsulation');
  }

  // primary_encapsulation_inner - computed: true, optional: false, required: false
  public get primaryEncapsulationInner() {
    return this.getStringAttribute('primary_encapsulation_inner');
  }

  // resolution_immediacy - computed: true, optional: false, required: false
  public get resolutionImmediacy() {
    return this.getStringAttribute('resolution_immediacy');
  }

  // secondary_encapsulation_inner - computed: true, optional: false, required: false
  public get secondaryEncapsulationInner() {
    return this.getStringAttribute('secondary_encapsulation_inner');
  }

  // switching_mode - computed: true, optional: false, required: false
  public get switchingMode() {
    return this.getStringAttribute('switching_mode');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAciRelationToDomainTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
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

  // untagged - computed: true, optional: false, required: false
  public get untagged() {
    return this.getStringAttribute('untagged');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      parent_dn: cdktf.stringToTerraform(this._parentDn),
      target_dn: cdktf.stringToTerraform(this._targetDn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      parent_dn: {
        value: cdktf.stringToHclTerraform(this._parentDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_dn: {
        value: cdktf.stringToHclTerraform(this._targetDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
