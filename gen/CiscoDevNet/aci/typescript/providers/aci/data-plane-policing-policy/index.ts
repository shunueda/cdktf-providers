// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/data_plane_policing_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPlanePolicingPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The administrative state of the Data Plane Policing Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/data_plane_policing_policy#admin_state DataPlanePolicingPolicy#admin_state}
  */
  readonly adminState?: string;
  /**
  * The annotation of the Data Plane Policing Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/data_plane_policing_policy#annotation DataPlanePolicingPolicy#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/data_plane_policing_policy#annotations DataPlanePolicingPolicy#annotations}
  */
  readonly annotations?: DataPlanePolicingPolicyAnnotations[] | cdktf.IResolvable;
  /**
  * The burst size of the Data Plane Policing Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/data_plane_policing_policy#burst DataPlanePolicingPolicy#burst}
  */
  readonly burst?: string;
  /**
  * The burst size unit of the Data Plane Policing Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/data_plane_policing_policy#burst_unit DataPlanePolicingPolicy#burst_unit}
  */
  readonly burstUnit?: string;
  /**
  * The conform action of the Data Plane Policing Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/data_plane_policing_policy#conform_action DataPlanePolicingPolicy#conform_action}
  */
  readonly conformAction?: string;
  /**
  * The conform mark class of service (CoS) of the Data Plane Policing Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/data_plane_policing_policy#conform_mark_cos DataPlanePolicingPolicy#conform_mark_cos}
  */
  readonly conformMarkCos?: string;
  /**
  * The conform mark differentiated services code point (DSCP) of the Data Plane Policing Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/data_plane_policing_policy#conform_mark_dscp DataPlanePolicingPolicy#conform_mark_dscp}
  */
  readonly conformMarkDscp?: string;
  /**
  * The description of the Data Plane Policing Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/data_plane_policing_policy#description DataPlanePolicingPolicy#description}
  */
  readonly description?: string;
  /**
  * The exceed action of the Data Plane Policing Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/data_plane_policing_policy#exceed_action DataPlanePolicingPolicy#exceed_action}
  */
  readonly exceedAction?: string;
  /**
  * The exceed mark class of service (CoS) of the Data Plane Policing Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/data_plane_policing_policy#exceed_mark_cos DataPlanePolicingPolicy#exceed_mark_cos}
  */
  readonly exceedMarkCos?: string;
  /**
  * The exceed mark differentiated services code point (DSCP) of the Data Plane Policing Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/data_plane_policing_policy#exceed_mark_dscp DataPlanePolicingPolicy#exceed_mark_dscp}
  */
  readonly exceedMarkDscp?: string;
  /**
  * The excessive burst size of the Data Plane Policing Policy object. Only applicable for 2R3C policer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/data_plane_policing_policy#excessive_burst DataPlanePolicingPolicy#excessive_burst}
  */
  readonly excessiveBurst?: string;
  /**
  * The excessive burst size unit of the Data Plane Policing Policy object. Only applicable for 2R3C policer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/data_plane_policing_policy#excessive_burst_unit DataPlanePolicingPolicy#excessive_burst_unit}
  */
  readonly excessiveBurstUnit?: string;
  /**
  * Policer mode - bytes or packet policer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/data_plane_policing_policy#mode DataPlanePolicingPolicy#mode}
  */
  readonly mode?: string;
  /**
  * The name of the Data Plane Policing Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/data_plane_policing_policy#name DataPlanePolicingPolicy#name}
  */
  readonly name: string;
  /**
  * The name alias of the Data Plane Policing Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/data_plane_policing_policy#name_alias DataPlanePolicingPolicy#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * The key for enabling clients to own their data for entity correlation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/data_plane_policing_policy#owner_key DataPlanePolicingPolicy#owner_key}
  */
  readonly ownerKey?: string;
  /**
  * A tag for enabling clients to add their own data. For example, to indicate who created this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/data_plane_policing_policy#owner_tag DataPlanePolicingPolicy#owner_tag}
  */
  readonly ownerTag?: string;
  /**
  * The distinguished name (DN) of the parent object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/data_plane_policing_policy#parent_dn DataPlanePolicingPolicy#parent_dn}
  */
  readonly parentDn?: string;
  /**
  * The peak information rate (PIR) of the Data Plane Policing Policy object. Only applicable for 2R3C policer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/data_plane_policing_policy#peak_rate DataPlanePolicingPolicy#peak_rate}
  */
  readonly peakRate?: string;
  /**
  * The peak information rate (PIR) unit of the Data Plane Policing Policy object. Only applicable for 2R3C policer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/data_plane_policing_policy#peak_rate_unit DataPlanePolicingPolicy#peak_rate_unit}
  */
  readonly peakRateUnit?: string;
  /**
  * The rate of the Data Plane Policing Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/data_plane_policing_policy#rate DataPlanePolicingPolicy#rate}
  */
  readonly rate?: string;
  /**
  * The rate unit of the Data Plane Policing Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/data_plane_policing_policy#rate_unit DataPlanePolicingPolicy#rate_unit}
  */
  readonly rateUnit?: string;
  /**
  * The sharing mode of the Data Plane Policing Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/data_plane_policing_policy#sharing_mode DataPlanePolicingPolicy#sharing_mode}
  */
  readonly sharingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/data_plane_policing_policy#tags DataPlanePolicingPolicy#tags}
  */
  readonly tags?: DataPlanePolicingPolicyTags[] | cdktf.IResolvable;
  /**
  * The type of the Data Plane Policing Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/data_plane_policing_policy#type DataPlanePolicingPolicy#type}
  */
  readonly type?: string;
  /**
  * The violate action of the Data Plane Policing Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/data_plane_policing_policy#violate_action DataPlanePolicingPolicy#violate_action}
  */
  readonly violateAction?: string;
  /**
  * The violate mark class of service (CoS) of the Data Plane Policing Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/data_plane_policing_policy#violate_mark_cos DataPlanePolicingPolicy#violate_mark_cos}
  */
  readonly violateMarkCos?: string;
  /**
  * The violate mark differentiated services code point (DSCP) of the Data Plane Policing Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/data_plane_policing_policy#violate_mark_dscp DataPlanePolicingPolicy#violate_mark_dscp}
  */
  readonly violateMarkDscp?: string;
}
export interface DataPlanePolicingPolicyAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/data_plane_policing_policy#key DataPlanePolicingPolicy#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/data_plane_policing_policy#value DataPlanePolicingPolicy#value}
  */
  readonly value: string;
}

export function dataPlanePolicingPolicyAnnotationsToTerraform(struct?: DataPlanePolicingPolicyAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataPlanePolicingPolicyAnnotationsToHclTerraform(struct?: DataPlanePolicingPolicyAnnotations | cdktf.IResolvable): any {
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

export class DataPlanePolicingPolicyAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPlanePolicingPolicyAnnotations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPlanePolicingPolicyAnnotations | cdktf.IResolvable | undefined) {
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

export class DataPlanePolicingPolicyAnnotationsList extends cdktf.ComplexList {
  public internalValue? : DataPlanePolicingPolicyAnnotations[] | cdktf.IResolvable

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
  public get(index: number): DataPlanePolicingPolicyAnnotationsOutputReference {
    return new DataPlanePolicingPolicyAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPlanePolicingPolicyTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/data_plane_policing_policy#key DataPlanePolicingPolicy#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/data_plane_policing_policy#value DataPlanePolicingPolicy#value}
  */
  readonly value: string;
}

export function dataPlanePolicingPolicyTagsToTerraform(struct?: DataPlanePolicingPolicyTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataPlanePolicingPolicyTagsToHclTerraform(struct?: DataPlanePolicingPolicyTags | cdktf.IResolvable): any {
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

export class DataPlanePolicingPolicyTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPlanePolicingPolicyTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPlanePolicingPolicyTags | cdktf.IResolvable | undefined) {
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

export class DataPlanePolicingPolicyTagsList extends cdktf.ComplexList {
  public internalValue? : DataPlanePolicingPolicyTags[] | cdktf.IResolvable

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
  public get(index: number): DataPlanePolicingPolicyTagsOutputReference {
    return new DataPlanePolicingPolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/data_plane_policing_policy aci_data_plane_policing_policy}
*/
export class DataPlanePolicingPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_data_plane_policing_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPlanePolicingPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPlanePolicingPolicy to import
  * @param importFromId The id of the existing DataPlanePolicingPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/data_plane_policing_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPlanePolicingPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_data_plane_policing_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/data_plane_policing_policy aci_data_plane_policing_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPlanePolicingPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataPlanePolicingPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_data_plane_policing_policy',
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
    this._adminState = config.adminState;
    this._annotation = config.annotation;
    this._annotations.internalValue = config.annotations;
    this._burst = config.burst;
    this._burstUnit = config.burstUnit;
    this._conformAction = config.conformAction;
    this._conformMarkCos = config.conformMarkCos;
    this._conformMarkDscp = config.conformMarkDscp;
    this._description = config.description;
    this._exceedAction = config.exceedAction;
    this._exceedMarkCos = config.exceedMarkCos;
    this._exceedMarkDscp = config.exceedMarkDscp;
    this._excessiveBurst = config.excessiveBurst;
    this._excessiveBurstUnit = config.excessiveBurstUnit;
    this._mode = config.mode;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._ownerKey = config.ownerKey;
    this._ownerTag = config.ownerTag;
    this._parentDn = config.parentDn;
    this._peakRate = config.peakRate;
    this._peakRateUnit = config.peakRateUnit;
    this._rate = config.rate;
    this._rateUnit = config.rateUnit;
    this._sharingMode = config.sharingMode;
    this._tags.internalValue = config.tags;
    this._type = config.type;
    this._violateAction = config.violateAction;
    this._violateMarkCos = config.violateMarkCos;
    this._violateMarkDscp = config.violateMarkDscp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_state - computed: true, optional: true, required: false
  private _adminState?: string; 
  public get adminState() {
    return this.getStringAttribute('admin_state');
  }
  public set adminState(value: string) {
    this._adminState = value;
  }
  public resetAdminState() {
    this._adminState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStateInput() {
    return this._adminState;
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
  private _annotations = new DataPlanePolicingPolicyAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: DataPlanePolicingPolicyAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // burst - computed: true, optional: true, required: false
  private _burst?: string; 
  public get burst() {
    return this.getStringAttribute('burst');
  }
  public set burst(value: string) {
    this._burst = value;
  }
  public resetBurst() {
    this._burst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstInput() {
    return this._burst;
  }

  // burst_unit - computed: true, optional: true, required: false
  private _burstUnit?: string; 
  public get burstUnit() {
    return this.getStringAttribute('burst_unit');
  }
  public set burstUnit(value: string) {
    this._burstUnit = value;
  }
  public resetBurstUnit() {
    this._burstUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstUnitInput() {
    return this._burstUnit;
  }

  // conform_action - computed: true, optional: true, required: false
  private _conformAction?: string; 
  public get conformAction() {
    return this.getStringAttribute('conform_action');
  }
  public set conformAction(value: string) {
    this._conformAction = value;
  }
  public resetConformAction() {
    this._conformAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conformActionInput() {
    return this._conformAction;
  }

  // conform_mark_cos - computed: true, optional: true, required: false
  private _conformMarkCos?: string; 
  public get conformMarkCos() {
    return this.getStringAttribute('conform_mark_cos');
  }
  public set conformMarkCos(value: string) {
    this._conformMarkCos = value;
  }
  public resetConformMarkCos() {
    this._conformMarkCos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conformMarkCosInput() {
    return this._conformMarkCos;
  }

  // conform_mark_dscp - computed: true, optional: true, required: false
  private _conformMarkDscp?: string; 
  public get conformMarkDscp() {
    return this.getStringAttribute('conform_mark_dscp');
  }
  public set conformMarkDscp(value: string) {
    this._conformMarkDscp = value;
  }
  public resetConformMarkDscp() {
    this._conformMarkDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conformMarkDscpInput() {
    return this._conformMarkDscp;
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

  // exceed_action - computed: true, optional: true, required: false
  private _exceedAction?: string; 
  public get exceedAction() {
    return this.getStringAttribute('exceed_action');
  }
  public set exceedAction(value: string) {
    this._exceedAction = value;
  }
  public resetExceedAction() {
    this._exceedAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedActionInput() {
    return this._exceedAction;
  }

  // exceed_mark_cos - computed: true, optional: true, required: false
  private _exceedMarkCos?: string; 
  public get exceedMarkCos() {
    return this.getStringAttribute('exceed_mark_cos');
  }
  public set exceedMarkCos(value: string) {
    this._exceedMarkCos = value;
  }
  public resetExceedMarkCos() {
    this._exceedMarkCos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedMarkCosInput() {
    return this._exceedMarkCos;
  }

  // exceed_mark_dscp - computed: true, optional: true, required: false
  private _exceedMarkDscp?: string; 
  public get exceedMarkDscp() {
    return this.getStringAttribute('exceed_mark_dscp');
  }
  public set exceedMarkDscp(value: string) {
    this._exceedMarkDscp = value;
  }
  public resetExceedMarkDscp() {
    this._exceedMarkDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedMarkDscpInput() {
    return this._exceedMarkDscp;
  }

  // excessive_burst - computed: true, optional: true, required: false
  private _excessiveBurst?: string; 
  public get excessiveBurst() {
    return this.getStringAttribute('excessive_burst');
  }
  public set excessiveBurst(value: string) {
    this._excessiveBurst = value;
  }
  public resetExcessiveBurst() {
    this._excessiveBurst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excessiveBurstInput() {
    return this._excessiveBurst;
  }

  // excessive_burst_unit - computed: true, optional: true, required: false
  private _excessiveBurstUnit?: string; 
  public get excessiveBurstUnit() {
    return this.getStringAttribute('excessive_burst_unit');
  }
  public set excessiveBurstUnit(value: string) {
    this._excessiveBurstUnit = value;
  }
  public resetExcessiveBurstUnit() {
    this._excessiveBurstUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excessiveBurstUnitInput() {
    return this._excessiveBurstUnit;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // owner_key - computed: true, optional: true, required: false
  private _ownerKey?: string; 
  public get ownerKey() {
    return this.getStringAttribute('owner_key');
  }
  public set ownerKey(value: string) {
    this._ownerKey = value;
  }
  public resetOwnerKey() {
    this._ownerKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerKeyInput() {
    return this._ownerKey;
  }

  // owner_tag - computed: true, optional: true, required: false
  private _ownerTag?: string; 
  public get ownerTag() {
    return this.getStringAttribute('owner_tag');
  }
  public set ownerTag(value: string) {
    this._ownerTag = value;
  }
  public resetOwnerTag() {
    this._ownerTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerTagInput() {
    return this._ownerTag;
  }

  // parent_dn - computed: true, optional: true, required: false
  private _parentDn?: string; 
  public get parentDn() {
    return this.getStringAttribute('parent_dn');
  }
  public set parentDn(value: string) {
    this._parentDn = value;
  }
  public resetParentDn() {
    this._parentDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentDnInput() {
    return this._parentDn;
  }

  // peak_rate - computed: true, optional: true, required: false
  private _peakRate?: string; 
  public get peakRate() {
    return this.getStringAttribute('peak_rate');
  }
  public set peakRate(value: string) {
    this._peakRate = value;
  }
  public resetPeakRate() {
    this._peakRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peakRateInput() {
    return this._peakRate;
  }

  // peak_rate_unit - computed: true, optional: true, required: false
  private _peakRateUnit?: string; 
  public get peakRateUnit() {
    return this.getStringAttribute('peak_rate_unit');
  }
  public set peakRateUnit(value: string) {
    this._peakRateUnit = value;
  }
  public resetPeakRateUnit() {
    this._peakRateUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peakRateUnitInput() {
    return this._peakRateUnit;
  }

  // rate - computed: true, optional: true, required: false
  private _rate?: string; 
  public get rate() {
    return this.getStringAttribute('rate');
  }
  public set rate(value: string) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }

  // rate_unit - computed: true, optional: true, required: false
  private _rateUnit?: string; 
  public get rateUnit() {
    return this.getStringAttribute('rate_unit');
  }
  public set rateUnit(value: string) {
    this._rateUnit = value;
  }
  public resetRateUnit() {
    this._rateUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateUnitInput() {
    return this._rateUnit;
  }

  // sharing_mode - computed: true, optional: true, required: false
  private _sharingMode?: string; 
  public get sharingMode() {
    return this.getStringAttribute('sharing_mode');
  }
  public set sharingMode(value: string) {
    this._sharingMode = value;
  }
  public resetSharingMode() {
    this._sharingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharingModeInput() {
    return this._sharingMode;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new DataPlanePolicingPolicyTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataPlanePolicingPolicyTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // violate_action - computed: true, optional: true, required: false
  private _violateAction?: string; 
  public get violateAction() {
    return this.getStringAttribute('violate_action');
  }
  public set violateAction(value: string) {
    this._violateAction = value;
  }
  public resetViolateAction() {
    this._violateAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get violateActionInput() {
    return this._violateAction;
  }

  // violate_mark_cos - computed: true, optional: true, required: false
  private _violateMarkCos?: string; 
  public get violateMarkCos() {
    return this.getStringAttribute('violate_mark_cos');
  }
  public set violateMarkCos(value: string) {
    this._violateMarkCos = value;
  }
  public resetViolateMarkCos() {
    this._violateMarkCos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get violateMarkCosInput() {
    return this._violateMarkCos;
  }

  // violate_mark_dscp - computed: true, optional: true, required: false
  private _violateMarkDscp?: string; 
  public get violateMarkDscp() {
    return this.getStringAttribute('violate_mark_dscp');
  }
  public set violateMarkDscp(value: string) {
    this._violateMarkDscp = value;
  }
  public resetViolateMarkDscp() {
    this._violateMarkDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get violateMarkDscpInput() {
    return this._violateMarkDscp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_state: cdktf.stringToTerraform(this._adminState),
      annotation: cdktf.stringToTerraform(this._annotation),
      annotations: cdktf.listMapper(dataPlanePolicingPolicyAnnotationsToTerraform, false)(this._annotations.internalValue),
      burst: cdktf.stringToTerraform(this._burst),
      burst_unit: cdktf.stringToTerraform(this._burstUnit),
      conform_action: cdktf.stringToTerraform(this._conformAction),
      conform_mark_cos: cdktf.stringToTerraform(this._conformMarkCos),
      conform_mark_dscp: cdktf.stringToTerraform(this._conformMarkDscp),
      description: cdktf.stringToTerraform(this._description),
      exceed_action: cdktf.stringToTerraform(this._exceedAction),
      exceed_mark_cos: cdktf.stringToTerraform(this._exceedMarkCos),
      exceed_mark_dscp: cdktf.stringToTerraform(this._exceedMarkDscp),
      excessive_burst: cdktf.stringToTerraform(this._excessiveBurst),
      excessive_burst_unit: cdktf.stringToTerraform(this._excessiveBurstUnit),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      owner_key: cdktf.stringToTerraform(this._ownerKey),
      owner_tag: cdktf.stringToTerraform(this._ownerTag),
      parent_dn: cdktf.stringToTerraform(this._parentDn),
      peak_rate: cdktf.stringToTerraform(this._peakRate),
      peak_rate_unit: cdktf.stringToTerraform(this._peakRateUnit),
      rate: cdktf.stringToTerraform(this._rate),
      rate_unit: cdktf.stringToTerraform(this._rateUnit),
      sharing_mode: cdktf.stringToTerraform(this._sharingMode),
      tags: cdktf.listMapper(dataPlanePolicingPolicyTagsToTerraform, false)(this._tags.internalValue),
      type: cdktf.stringToTerraform(this._type),
      violate_action: cdktf.stringToTerraform(this._violateAction),
      violate_mark_cos: cdktf.stringToTerraform(this._violateMarkCos),
      violate_mark_dscp: cdktf.stringToTerraform(this._violateMarkDscp),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_state: {
        value: cdktf.stringToHclTerraform(this._adminState),
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
        value: cdktf.listMapperHcl(dataPlanePolicingPolicyAnnotationsToHclTerraform, false)(this._annotations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataPlanePolicingPolicyAnnotationsList",
      },
      burst: {
        value: cdktf.stringToHclTerraform(this._burst),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      burst_unit: {
        value: cdktf.stringToHclTerraform(this._burstUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conform_action: {
        value: cdktf.stringToHclTerraform(this._conformAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conform_mark_cos: {
        value: cdktf.stringToHclTerraform(this._conformMarkCos),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conform_mark_dscp: {
        value: cdktf.stringToHclTerraform(this._conformMarkDscp),
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
      exceed_action: {
        value: cdktf.stringToHclTerraform(this._exceedAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exceed_mark_cos: {
        value: cdktf.stringToHclTerraform(this._exceedMarkCos),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exceed_mark_dscp: {
        value: cdktf.stringToHclTerraform(this._exceedMarkDscp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      excessive_burst: {
        value: cdktf.stringToHclTerraform(this._excessiveBurst),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      excessive_burst_unit: {
        value: cdktf.stringToHclTerraform(this._excessiveBurstUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      owner_key: {
        value: cdktf.stringToHclTerraform(this._ownerKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_tag: {
        value: cdktf.stringToHclTerraform(this._ownerTag),
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
      peak_rate: {
        value: cdktf.stringToHclTerraform(this._peakRate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peak_rate_unit: {
        value: cdktf.stringToHclTerraform(this._peakRateUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate: {
        value: cdktf.stringToHclTerraform(this._rate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate_unit: {
        value: cdktf.stringToHclTerraform(this._rateUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sharing_mode: {
        value: cdktf.stringToHclTerraform(this._sharingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(dataPlanePolicingPolicyTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataPlanePolicingPolicyTagsList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      violate_action: {
        value: cdktf.stringToHclTerraform(this._violateAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      violate_mark_cos: {
        value: cdktf.stringToHclTerraform(this._violateMarkCos),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      violate_mark_dscp: {
        value: cdktf.stringToHclTerraform(this._violateMarkDscp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
