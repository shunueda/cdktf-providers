// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/epg_useg_ad_group_attribute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciEpgUsegAdGroupAttributeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The distinguished name (DN) of the parent object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/epg_useg_ad_group_attribute#parent_dn DataAciEpgUsegAdGroupAttribute#parent_dn}
  */
  readonly parentDn: string;
  /**
  * The selector of the EPG uSeg AD Group Attribute object. Represents the DN or expression to select an identity group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/epg_useg_ad_group_attribute#selector DataAciEpgUsegAdGroupAttribute#selector}
  */
  readonly selector: string;
}
export interface DataAciEpgUsegAdGroupAttributeAnnotations {
}

export function dataAciEpgUsegAdGroupAttributeAnnotationsToTerraform(struct?: DataAciEpgUsegAdGroupAttributeAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciEpgUsegAdGroupAttributeAnnotationsToHclTerraform(struct?: DataAciEpgUsegAdGroupAttributeAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciEpgUsegAdGroupAttributeAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciEpgUsegAdGroupAttributeAnnotations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciEpgUsegAdGroupAttributeAnnotations | undefined) {
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

export class DataAciEpgUsegAdGroupAttributeAnnotationsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciEpgUsegAdGroupAttributeAnnotationsOutputReference {
    return new DataAciEpgUsegAdGroupAttributeAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciEpgUsegAdGroupAttributeTags {
}

export function dataAciEpgUsegAdGroupAttributeTagsToTerraform(struct?: DataAciEpgUsegAdGroupAttributeTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciEpgUsegAdGroupAttributeTagsToHclTerraform(struct?: DataAciEpgUsegAdGroupAttributeTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciEpgUsegAdGroupAttributeTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciEpgUsegAdGroupAttributeTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciEpgUsegAdGroupAttributeTags | undefined) {
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

export class DataAciEpgUsegAdGroupAttributeTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciEpgUsegAdGroupAttributeTagsOutputReference {
    return new DataAciEpgUsegAdGroupAttributeTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/epg_useg_ad_group_attribute aci_epg_useg_ad_group_attribute}
*/
export class DataAciEpgUsegAdGroupAttribute extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_epg_useg_ad_group_attribute";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciEpgUsegAdGroupAttribute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciEpgUsegAdGroupAttribute to import
  * @param importFromId The id of the existing DataAciEpgUsegAdGroupAttribute that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/epg_useg_ad_group_attribute#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciEpgUsegAdGroupAttribute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_epg_useg_ad_group_attribute", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/epg_useg_ad_group_attribute aci_epg_useg_ad_group_attribute} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciEpgUsegAdGroupAttributeConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciEpgUsegAdGroupAttributeConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_epg_useg_ad_group_attribute',
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
    this._parentDn = config.parentDn;
    this._selector = config.selector;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotation - computed: true, optional: false, required: false
  public get annotation() {
    return this.getStringAttribute('annotation');
  }

  // annotations - computed: true, optional: false, required: false
  private _annotations = new DataAciEpgUsegAdGroupAttributeAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_alias - computed: true, optional: false, required: false
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }

  // owner_key - computed: true, optional: false, required: false
  public get ownerKey() {
    return this.getStringAttribute('owner_key');
  }

  // owner_tag - computed: true, optional: false, required: false
  public get ownerTag() {
    return this.getStringAttribute('owner_tag');
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

  // selector - computed: false, optional: false, required: true
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAciEpgUsegAdGroupAttributeTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      parent_dn: cdktf.stringToTerraform(this._parentDn),
      selector: cdktf.stringToTerraform(this._selector),
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
      selector: {
        value: cdktf.stringToHclTerraform(this._selector),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
