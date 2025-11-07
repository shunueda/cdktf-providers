// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/relation_from_external_epg_to_route_control_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciRelationFromExternalEpgToRouteControlProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The direction on which to apply the Route Map associated with the Route Control Profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/relation_from_external_epg_to_route_control_profile#direction DataAciRelationFromExternalEpgToRouteControlProfile#direction}
  */
  readonly direction: string;
  /**
  * The distinguished name (DN) of the parent object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/relation_from_external_epg_to_route_control_profile#parent_dn DataAciRelationFromExternalEpgToRouteControlProfile#parent_dn}
  */
  readonly parentDn: string;
  /**
  * The name of the Route Control Profile object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/relation_from_external_epg_to_route_control_profile#route_control_profile_name DataAciRelationFromExternalEpgToRouteControlProfile#route_control_profile_name}
  */
  readonly routeControlProfileName: string;
}
export interface DataAciRelationFromExternalEpgToRouteControlProfileAnnotations {
}

export function dataAciRelationFromExternalEpgToRouteControlProfileAnnotationsToTerraform(struct?: DataAciRelationFromExternalEpgToRouteControlProfileAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciRelationFromExternalEpgToRouteControlProfileAnnotationsToHclTerraform(struct?: DataAciRelationFromExternalEpgToRouteControlProfileAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciRelationFromExternalEpgToRouteControlProfileAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciRelationFromExternalEpgToRouteControlProfileAnnotations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciRelationFromExternalEpgToRouteControlProfileAnnotations | undefined) {
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

export class DataAciRelationFromExternalEpgToRouteControlProfileAnnotationsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciRelationFromExternalEpgToRouteControlProfileAnnotationsOutputReference {
    return new DataAciRelationFromExternalEpgToRouteControlProfileAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciRelationFromExternalEpgToRouteControlProfileTags {
}

export function dataAciRelationFromExternalEpgToRouteControlProfileTagsToTerraform(struct?: DataAciRelationFromExternalEpgToRouteControlProfileTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciRelationFromExternalEpgToRouteControlProfileTagsToHclTerraform(struct?: DataAciRelationFromExternalEpgToRouteControlProfileTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciRelationFromExternalEpgToRouteControlProfileTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciRelationFromExternalEpgToRouteControlProfileTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciRelationFromExternalEpgToRouteControlProfileTags | undefined) {
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

export class DataAciRelationFromExternalEpgToRouteControlProfileTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciRelationFromExternalEpgToRouteControlProfileTagsOutputReference {
    return new DataAciRelationFromExternalEpgToRouteControlProfileTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/relation_from_external_epg_to_route_control_profile aci_relation_from_external_epg_to_route_control_profile}
*/
export class DataAciRelationFromExternalEpgToRouteControlProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_relation_from_external_epg_to_route_control_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciRelationFromExternalEpgToRouteControlProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciRelationFromExternalEpgToRouteControlProfile to import
  * @param importFromId The id of the existing DataAciRelationFromExternalEpgToRouteControlProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/relation_from_external_epg_to_route_control_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciRelationFromExternalEpgToRouteControlProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_relation_from_external_epg_to_route_control_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/relation_from_external_epg_to_route_control_profile aci_relation_from_external_epg_to_route_control_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciRelationFromExternalEpgToRouteControlProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciRelationFromExternalEpgToRouteControlProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_relation_from_external_epg_to_route_control_profile',
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
    this._direction = config.direction;
    this._parentDn = config.parentDn;
    this._routeControlProfileName = config.routeControlProfileName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotation - computed: true, optional: false, required: false
  public get annotation() {
    return this.getStringAttribute('annotation');
  }

  // annotations - computed: true, optional: false, required: false
  private _annotations = new DataAciRelationFromExternalEpgToRouteControlProfileAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
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

  // route_control_profile_name - computed: false, optional: false, required: true
  private _routeControlProfileName?: string; 
  public get routeControlProfileName() {
    return this.getStringAttribute('route_control_profile_name');
  }
  public set routeControlProfileName(value: string) {
    this._routeControlProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeControlProfileNameInput() {
    return this._routeControlProfileName;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAciRelationFromExternalEpgToRouteControlProfileTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      direction: cdktf.stringToTerraform(this._direction),
      parent_dn: cdktf.stringToTerraform(this._parentDn),
      route_control_profile_name: cdktf.stringToTerraform(this._routeControlProfileName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
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
      route_control_profile_name: {
        value: cdktf.stringToHclTerraform(this._routeControlProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
