// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_ip_sla_track_member
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RelationToIpSlaTrackMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * The annotation of the Relation To IP SLA Track Member object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_ip_sla_track_member#annotation RelationToIpSlaTrackMember#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_ip_sla_track_member#annotations RelationToIpSlaTrackMember#annotations}
  */
  readonly annotations?: RelationToIpSlaTrackMemberAnnotations[] | cdktf.IResolvable;
  /**
  * The distinguished name (DN) of the parent object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_ip_sla_track_member#parent_dn RelationToIpSlaTrackMember#parent_dn}
  */
  readonly parentDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_ip_sla_track_member#tags RelationToIpSlaTrackMember#tags}
  */
  readonly tags?: RelationToIpSlaTrackMemberTags[] | cdktf.IResolvable;
  /**
  * The distinguished name (DN) of the IP SLA Track Member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_ip_sla_track_member#target_dn RelationToIpSlaTrackMember#target_dn}
  */
  readonly targetDn: string;
  /**
  * The weight associated with the IP SLA Track Member that contributes to the total weight that is used to determines whether a route is considered available or unavailable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_ip_sla_track_member#weight RelationToIpSlaTrackMember#weight}
  */
  readonly weight?: string;
}
export interface RelationToIpSlaTrackMemberAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_ip_sla_track_member#key RelationToIpSlaTrackMember#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_ip_sla_track_member#value RelationToIpSlaTrackMember#value}
  */
  readonly value: string;
}

export function relationToIpSlaTrackMemberAnnotationsToTerraform(struct?: RelationToIpSlaTrackMemberAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function relationToIpSlaTrackMemberAnnotationsToHclTerraform(struct?: RelationToIpSlaTrackMemberAnnotations | cdktf.IResolvable): any {
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

export class RelationToIpSlaTrackMemberAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RelationToIpSlaTrackMemberAnnotations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RelationToIpSlaTrackMemberAnnotations | cdktf.IResolvable | undefined) {
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

export class RelationToIpSlaTrackMemberAnnotationsList extends cdktf.ComplexList {
  public internalValue? : RelationToIpSlaTrackMemberAnnotations[] | cdktf.IResolvable

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
  public get(index: number): RelationToIpSlaTrackMemberAnnotationsOutputReference {
    return new RelationToIpSlaTrackMemberAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RelationToIpSlaTrackMemberTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_ip_sla_track_member#key RelationToIpSlaTrackMember#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_ip_sla_track_member#value RelationToIpSlaTrackMember#value}
  */
  readonly value: string;
}

export function relationToIpSlaTrackMemberTagsToTerraform(struct?: RelationToIpSlaTrackMemberTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function relationToIpSlaTrackMemberTagsToHclTerraform(struct?: RelationToIpSlaTrackMemberTags | cdktf.IResolvable): any {
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

export class RelationToIpSlaTrackMemberTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RelationToIpSlaTrackMemberTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RelationToIpSlaTrackMemberTags | cdktf.IResolvable | undefined) {
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

export class RelationToIpSlaTrackMemberTagsList extends cdktf.ComplexList {
  public internalValue? : RelationToIpSlaTrackMemberTags[] | cdktf.IResolvable

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
  public get(index: number): RelationToIpSlaTrackMemberTagsOutputReference {
    return new RelationToIpSlaTrackMemberTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_ip_sla_track_member aci_relation_to_ip_sla_track_member}
*/
export class RelationToIpSlaTrackMember extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_relation_to_ip_sla_track_member";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RelationToIpSlaTrackMember resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RelationToIpSlaTrackMember to import
  * @param importFromId The id of the existing RelationToIpSlaTrackMember that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_ip_sla_track_member#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RelationToIpSlaTrackMember to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_relation_to_ip_sla_track_member", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_ip_sla_track_member aci_relation_to_ip_sla_track_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RelationToIpSlaTrackMemberConfig
  */
  public constructor(scope: Construct, id: string, config: RelationToIpSlaTrackMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_relation_to_ip_sla_track_member',
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
    this._annotation = config.annotation;
    this._annotations.internalValue = config.annotations;
    this._parentDn = config.parentDn;
    this._tags.internalValue = config.tags;
    this._targetDn = config.targetDn;
    this._weight = config.weight;
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

  // annotations - computed: true, optional: true, required: false
  private _annotations = new RelationToIpSlaTrackMemberAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: RelationToIpSlaTrackMemberAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
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
  private _tags = new RelationToIpSlaTrackMemberTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: RelationToIpSlaTrackMemberTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
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

  // weight - computed: true, optional: true, required: false
  private _weight?: string; 
  public get weight() {
    return this.getStringAttribute('weight');
  }
  public set weight(value: string) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      annotations: cdktf.listMapper(relationToIpSlaTrackMemberAnnotationsToTerraform, false)(this._annotations.internalValue),
      parent_dn: cdktf.stringToTerraform(this._parentDn),
      tags: cdktf.listMapper(relationToIpSlaTrackMemberTagsToTerraform, false)(this._tags.internalValue),
      target_dn: cdktf.stringToTerraform(this._targetDn),
      weight: cdktf.stringToTerraform(this._weight),
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
      annotations: {
        value: cdktf.listMapperHcl(relationToIpSlaTrackMemberAnnotationsToHclTerraform, false)(this._annotations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RelationToIpSlaTrackMemberAnnotationsList",
      },
      parent_dn: {
        value: cdktf.stringToHclTerraform(this._parentDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(relationToIpSlaTrackMemberTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RelationToIpSlaTrackMemberTagsList",
      },
      target_dn: {
        value: cdktf.stringToHclTerraform(this._targetDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weight: {
        value: cdktf.stringToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
