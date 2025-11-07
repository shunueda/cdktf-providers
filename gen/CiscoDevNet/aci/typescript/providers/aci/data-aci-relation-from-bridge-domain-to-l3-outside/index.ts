// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/relation_from_bridge_domain_to_l3_outside
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciRelationFromBridgeDomainToL3OutsideConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the L3 Outside object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/relation_from_bridge_domain_to_l3_outside#l3_outside_name DataAciRelationFromBridgeDomainToL3Outside#l3_outside_name}
  */
  readonly l3OutsideName: string;
  /**
  * The distinguished name (DN) of the parent object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/relation_from_bridge_domain_to_l3_outside#parent_dn DataAciRelationFromBridgeDomainToL3Outside#parent_dn}
  */
  readonly parentDn: string;
}
export interface DataAciRelationFromBridgeDomainToL3OutsideAnnotations {
}

export function dataAciRelationFromBridgeDomainToL3OutsideAnnotationsToTerraform(struct?: DataAciRelationFromBridgeDomainToL3OutsideAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciRelationFromBridgeDomainToL3OutsideAnnotationsToHclTerraform(struct?: DataAciRelationFromBridgeDomainToL3OutsideAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciRelationFromBridgeDomainToL3OutsideAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciRelationFromBridgeDomainToL3OutsideAnnotations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciRelationFromBridgeDomainToL3OutsideAnnotations | undefined) {
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

export class DataAciRelationFromBridgeDomainToL3OutsideAnnotationsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciRelationFromBridgeDomainToL3OutsideAnnotationsOutputReference {
    return new DataAciRelationFromBridgeDomainToL3OutsideAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciRelationFromBridgeDomainToL3OutsideTags {
}

export function dataAciRelationFromBridgeDomainToL3OutsideTagsToTerraform(struct?: DataAciRelationFromBridgeDomainToL3OutsideTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciRelationFromBridgeDomainToL3OutsideTagsToHclTerraform(struct?: DataAciRelationFromBridgeDomainToL3OutsideTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciRelationFromBridgeDomainToL3OutsideTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciRelationFromBridgeDomainToL3OutsideTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciRelationFromBridgeDomainToL3OutsideTags | undefined) {
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

export class DataAciRelationFromBridgeDomainToL3OutsideTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciRelationFromBridgeDomainToL3OutsideTagsOutputReference {
    return new DataAciRelationFromBridgeDomainToL3OutsideTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/relation_from_bridge_domain_to_l3_outside aci_relation_from_bridge_domain_to_l3_outside}
*/
export class DataAciRelationFromBridgeDomainToL3Outside extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_relation_from_bridge_domain_to_l3_outside";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciRelationFromBridgeDomainToL3Outside resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciRelationFromBridgeDomainToL3Outside to import
  * @param importFromId The id of the existing DataAciRelationFromBridgeDomainToL3Outside that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/relation_from_bridge_domain_to_l3_outside#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciRelationFromBridgeDomainToL3Outside to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_relation_from_bridge_domain_to_l3_outside", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/relation_from_bridge_domain_to_l3_outside aci_relation_from_bridge_domain_to_l3_outside} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciRelationFromBridgeDomainToL3OutsideConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciRelationFromBridgeDomainToL3OutsideConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_relation_from_bridge_domain_to_l3_outside',
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
    this._l3OutsideName = config.l3OutsideName;
    this._parentDn = config.parentDn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotation - computed: true, optional: false, required: false
  public get annotation() {
    return this.getStringAttribute('annotation');
  }

  // annotations - computed: true, optional: false, required: false
  private _annotations = new DataAciRelationFromBridgeDomainToL3OutsideAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // l3_outside_name - computed: false, optional: false, required: true
  private _l3OutsideName?: string; 
  public get l3OutsideName() {
    return this.getStringAttribute('l3_outside_name');
  }
  public set l3OutsideName(value: string) {
    this._l3OutsideName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get l3OutsideNameInput() {
    return this._l3OutsideName;
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

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAciRelationFromBridgeDomainToL3OutsideTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      l3_outside_name: cdktf.stringToTerraform(this._l3OutsideName),
      parent_dn: cdktf.stringToTerraform(this._parentDn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      l3_outside_name: {
        value: cdktf.stringToHclTerraform(this._l3OutsideName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_dn: {
        value: cdktf.stringToHclTerraform(this._parentDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
