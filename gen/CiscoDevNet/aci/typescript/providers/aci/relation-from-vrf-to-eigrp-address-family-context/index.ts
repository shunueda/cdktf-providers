// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_from_vrf_to_eigrp_address_family_context
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RelationFromVrfToEigrpAddressFamilyContextConfig extends cdktf.TerraformMetaArguments {
  /**
  * The type of address family for the Relation From VRF To EIGRP Address Family Context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_from_vrf_to_eigrp_address_family_context#address_family RelationFromVrfToEigrpAddressFamilyContext#address_family}
  */
  readonly addressFamily: string;
  /**
  * The annotation of the Relation From VRF To EIGRP Address Family Context object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_from_vrf_to_eigrp_address_family_context#annotation RelationFromVrfToEigrpAddressFamilyContext#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_from_vrf_to_eigrp_address_family_context#annotations RelationFromVrfToEigrpAddressFamilyContext#annotations}
  */
  readonly annotations?: RelationFromVrfToEigrpAddressFamilyContextAnnotations[] | cdktf.IResolvable;
  /**
  * The name of the EIGRP Address Family Context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_from_vrf_to_eigrp_address_family_context#eigrp_address_family_context_name RelationFromVrfToEigrpAddressFamilyContext#eigrp_address_family_context_name}
  */
  readonly eigrpAddressFamilyContextName: string;
  /**
  * The distinguished name (DN) of the parent object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_from_vrf_to_eigrp_address_family_context#parent_dn RelationFromVrfToEigrpAddressFamilyContext#parent_dn}
  */
  readonly parentDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_from_vrf_to_eigrp_address_family_context#tags RelationFromVrfToEigrpAddressFamilyContext#tags}
  */
  readonly tags?: RelationFromVrfToEigrpAddressFamilyContextTags[] | cdktf.IResolvable;
}
export interface RelationFromVrfToEigrpAddressFamilyContextAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_from_vrf_to_eigrp_address_family_context#key RelationFromVrfToEigrpAddressFamilyContext#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_from_vrf_to_eigrp_address_family_context#value RelationFromVrfToEigrpAddressFamilyContext#value}
  */
  readonly value: string;
}

export function relationFromVrfToEigrpAddressFamilyContextAnnotationsToTerraform(struct?: RelationFromVrfToEigrpAddressFamilyContextAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function relationFromVrfToEigrpAddressFamilyContextAnnotationsToHclTerraform(struct?: RelationFromVrfToEigrpAddressFamilyContextAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RelationFromVrfToEigrpAddressFamilyContextAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RelationFromVrfToEigrpAddressFamilyContextAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RelationFromVrfToEigrpAddressFamilyContextAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class RelationFromVrfToEigrpAddressFamilyContextAnnotationsList extends cdktf.ComplexList {
  public internalValue? : RelationFromVrfToEigrpAddressFamilyContextAnnotations[] | cdktf.IResolvable

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
  public get(index: number): RelationFromVrfToEigrpAddressFamilyContextAnnotationsOutputReference {
    return new RelationFromVrfToEigrpAddressFamilyContextAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RelationFromVrfToEigrpAddressFamilyContextTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_from_vrf_to_eigrp_address_family_context#key RelationFromVrfToEigrpAddressFamilyContext#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_from_vrf_to_eigrp_address_family_context#value RelationFromVrfToEigrpAddressFamilyContext#value}
  */
  readonly value: string;
}

export function relationFromVrfToEigrpAddressFamilyContextTagsToTerraform(struct?: RelationFromVrfToEigrpAddressFamilyContextTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function relationFromVrfToEigrpAddressFamilyContextTagsToHclTerraform(struct?: RelationFromVrfToEigrpAddressFamilyContextTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RelationFromVrfToEigrpAddressFamilyContextTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RelationFromVrfToEigrpAddressFamilyContextTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RelationFromVrfToEigrpAddressFamilyContextTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class RelationFromVrfToEigrpAddressFamilyContextTagsList extends cdktf.ComplexList {
  public internalValue? : RelationFromVrfToEigrpAddressFamilyContextTags[] | cdktf.IResolvable

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
  public get(index: number): RelationFromVrfToEigrpAddressFamilyContextTagsOutputReference {
    return new RelationFromVrfToEigrpAddressFamilyContextTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_from_vrf_to_eigrp_address_family_context aci_relation_from_vrf_to_eigrp_address_family_context}
*/
export class RelationFromVrfToEigrpAddressFamilyContext extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_relation_from_vrf_to_eigrp_address_family_context";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RelationFromVrfToEigrpAddressFamilyContext resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RelationFromVrfToEigrpAddressFamilyContext to import
  * @param importFromId The id of the existing RelationFromVrfToEigrpAddressFamilyContext that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_from_vrf_to_eigrp_address_family_context#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RelationFromVrfToEigrpAddressFamilyContext to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_relation_from_vrf_to_eigrp_address_family_context", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_from_vrf_to_eigrp_address_family_context aci_relation_from_vrf_to_eigrp_address_family_context} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RelationFromVrfToEigrpAddressFamilyContextConfig
  */
  public constructor(scope: Construct, id: string, config: RelationFromVrfToEigrpAddressFamilyContextConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_relation_from_vrf_to_eigrp_address_family_context',
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
    this._addressFamily = config.addressFamily;
    this._annotation = config.annotation;
    this._annotations.internalValue = config.annotations;
    this._eigrpAddressFamilyContextName = config.eigrpAddressFamilyContextName;
    this._parentDn = config.parentDn;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_family - computed: false, optional: false, required: true
  private _addressFamily?: string; 
  public get addressFamily() {
    return this.getStringAttribute('address_family');
  }
  public set addressFamily(value: string) {
    this._addressFamily = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFamilyInput() {
    return this._addressFamily;
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

  // annotations - computed: true, optional: true, required: false
  private _annotations = new RelationFromVrfToEigrpAddressFamilyContextAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: RelationFromVrfToEigrpAddressFamilyContextAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // eigrp_address_family_context_name - computed: false, optional: false, required: true
  private _eigrpAddressFamilyContextName?: string; 
  public get eigrpAddressFamilyContextName() {
    return this.getStringAttribute('eigrp_address_family_context_name');
  }
  public set eigrpAddressFamilyContextName(value: string) {
    this._eigrpAddressFamilyContextName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eigrpAddressFamilyContextNameInput() {
    return this._eigrpAddressFamilyContextName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // tags - computed: true, optional: true, required: false
  private _tags = new RelationFromVrfToEigrpAddressFamilyContextTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: RelationFromVrfToEigrpAddressFamilyContextTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_family: cdktf.stringToTerraform(this._addressFamily),
      annotation: cdktf.stringToTerraform(this._annotation),
      annotations: cdktf.listMapper(relationFromVrfToEigrpAddressFamilyContextAnnotationsToTerraform, false)(this._annotations.internalValue),
      eigrp_address_family_context_name: cdktf.stringToTerraform(this._eigrpAddressFamilyContextName),
      parent_dn: cdktf.stringToTerraform(this._parentDn),
      tags: cdktf.listMapper(relationFromVrfToEigrpAddressFamilyContextTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_family: {
        value: cdktf.stringToHclTerraform(this._addressFamily),
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
      annotations: {
        value: cdktf.listMapperHcl(relationFromVrfToEigrpAddressFamilyContextAnnotationsToHclTerraform, false)(this._annotations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RelationFromVrfToEigrpAddressFamilyContextAnnotationsList",
      },
      eigrp_address_family_context_name: {
        value: cdktf.stringToHclTerraform(this._eigrpAddressFamilyContextName),
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
      tags: {
        value: cdktf.listMapperHcl(relationFromVrfToEigrpAddressFamilyContextTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RelationFromVrfToEigrpAddressFamilyContextTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
