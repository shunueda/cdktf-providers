// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3_outside
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface L3OutsideConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3_outside#annotation L3Outside#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3_outside#description L3Outside#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3_outside#enforce_rtctrl L3Outside#enforce_rtctrl}
  */
  readonly enforceRtctrl?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3_outside#id L3Outside#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3_outside#mpls_enabled L3Outside#mpls_enabled}
  */
  readonly mplsEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3_outside#name L3Outside#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3_outside#name_alias L3Outside#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3_outside#pim L3Outside#pim}
  */
  readonly pim?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3_outside#relation_l3ext_rs_ectx L3Outside#relation_l3ext_rs_ectx}
  */
  readonly relationL3ExtRsEctx: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3_outside#relation_l3ext_rs_interleak_pol L3Outside#relation_l3ext_rs_interleak_pol}
  */
  readonly relationL3ExtRsInterleakPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3_outside#relation_l3ext_rs_l3_dom_att L3Outside#relation_l3ext_rs_l3_dom_att}
  */
  readonly relationL3ExtRsL3DomAtt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3_outside#target_dscp L3Outside#target_dscp}
  */
  readonly targetDscp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3_outside#tenant_dn L3Outside#tenant_dn}
  */
  readonly tenantDn: string;
  /**
  * default_route_leak_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3_outside#default_route_leak_policy L3Outside#default_route_leak_policy}
  */
  readonly defaultRouteLeakPolicy?: L3OutsideDefaultRouteLeakPolicy;
  /**
  * relation_l3ext_rs_dampening_pol block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3_outside#relation_l3ext_rs_dampening_pol L3Outside#relation_l3ext_rs_dampening_pol}
  */
  readonly relationL3ExtRsDampeningPol?: L3OutsideRelationL3ExtRsDampeningPol[] | cdktf.IResolvable;
  /**
  * relation_l3extrs_redistribute_pol block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3_outside#relation_l3extrs_redistribute_pol L3Outside#relation_l3extrs_redistribute_pol}
  */
  readonly relationL3ExtrsRedistributePol?: L3OutsideRelationL3ExtrsRedistributePol[] | cdktf.IResolvable;
}
export interface L3OutsideDefaultRouteLeakPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3_outside#always L3Outside#always}
  */
  readonly always?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3_outside#annotation L3Outside#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3_outside#criteria L3Outside#criteria}
  */
  readonly criteria?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3_outside#scope L3Outside#scope}
  */
  readonly scope?: string[];
}

export function l3OutsideDefaultRouteLeakPolicyToTerraform(struct?: L3OutsideDefaultRouteLeakPolicyOutputReference | L3OutsideDefaultRouteLeakPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always: cdktf.stringToTerraform(struct!.always),
    annotation: cdktf.stringToTerraform(struct!.annotation),
    criteria: cdktf.stringToTerraform(struct!.criteria),
    scope: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scope),
  }
}


export function l3OutsideDefaultRouteLeakPolicyToHclTerraform(struct?: L3OutsideDefaultRouteLeakPolicyOutputReference | L3OutsideDefaultRouteLeakPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    always: {
      value: cdktf.stringToHclTerraform(struct!.always),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotation: {
      value: cdktf.stringToHclTerraform(struct!.annotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    criteria: {
      value: cdktf.stringToHclTerraform(struct!.criteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scope),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class L3OutsideDefaultRouteLeakPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): L3OutsideDefaultRouteLeakPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._always !== undefined) {
      hasAnyValues = true;
      internalValueResult.always = this._always;
    }
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._criteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: L3OutsideDefaultRouteLeakPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._always = undefined;
      this._annotation = undefined;
      this._criteria = undefined;
      this._scope = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._always = value.always;
      this._annotation = value.annotation;
      this._criteria = value.criteria;
      this._scope = value.scope;
    }
  }

  // always - computed: true, optional: true, required: false
  private _always?: string; 
  public get always() {
    return this.getStringAttribute('always');
  }
  public set always(value: string) {
    this._always = value;
  }
  public resetAlways() {
    this._always = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysInput() {
    return this._always;
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

  // criteria - computed: true, optional: true, required: false
  private _criteria?: string; 
  public get criteria() {
    return this.getStringAttribute('criteria');
  }
  public set criteria(value: string) {
    this._criteria = value;
  }
  public resetCriteria() {
    this._criteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string[]; 
  public get scope() {
    return cdktf.Fn.tolist(this.getListAttribute('scope'));
  }
  public set scope(value: string[]) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}
export interface L3OutsideRelationL3ExtRsDampeningPol {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3_outside#af L3Outside#af}
  */
  readonly af?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3_outside#tn_rtctrl_profile_dn L3Outside#tn_rtctrl_profile_dn}
  */
  readonly tnRtctrlProfileDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3_outside#tn_rtctrl_profile_name L3Outside#tn_rtctrl_profile_name}
  */
  readonly tnRtctrlProfileName?: string;
}

export function l3OutsideRelationL3ExtRsDampeningPolToTerraform(struct?: L3OutsideRelationL3ExtRsDampeningPol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    af: cdktf.stringToTerraform(struct!.af),
    tn_rtctrl_profile_dn: cdktf.stringToTerraform(struct!.tnRtctrlProfileDn),
    tn_rtctrl_profile_name: cdktf.stringToTerraform(struct!.tnRtctrlProfileName),
  }
}


export function l3OutsideRelationL3ExtRsDampeningPolToHclTerraform(struct?: L3OutsideRelationL3ExtRsDampeningPol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    af: {
      value: cdktf.stringToHclTerraform(struct!.af),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tn_rtctrl_profile_dn: {
      value: cdktf.stringToHclTerraform(struct!.tnRtctrlProfileDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tn_rtctrl_profile_name: {
      value: cdktf.stringToHclTerraform(struct!.tnRtctrlProfileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class L3OutsideRelationL3ExtRsDampeningPolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): L3OutsideRelationL3ExtRsDampeningPol | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._af !== undefined) {
      hasAnyValues = true;
      internalValueResult.af = this._af;
    }
    if (this._tnRtctrlProfileDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.tnRtctrlProfileDn = this._tnRtctrlProfileDn;
    }
    if (this._tnRtctrlProfileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tnRtctrlProfileName = this._tnRtctrlProfileName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: L3OutsideRelationL3ExtRsDampeningPol | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._af = undefined;
      this._tnRtctrlProfileDn = undefined;
      this._tnRtctrlProfileName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._af = value.af;
      this._tnRtctrlProfileDn = value.tnRtctrlProfileDn;
      this._tnRtctrlProfileName = value.tnRtctrlProfileName;
    }
  }

  // af - computed: false, optional: true, required: false
  private _af?: string; 
  public get af() {
    return this.getStringAttribute('af');
  }
  public set af(value: string) {
    this._af = value;
  }
  public resetAf() {
    this._af = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afInput() {
    return this._af;
  }

  // tn_rtctrl_profile_dn - computed: false, optional: true, required: false
  private _tnRtctrlProfileDn?: string; 
  public get tnRtctrlProfileDn() {
    return this.getStringAttribute('tn_rtctrl_profile_dn');
  }
  public set tnRtctrlProfileDn(value: string) {
    this._tnRtctrlProfileDn = value;
  }
  public resetTnRtctrlProfileDn() {
    this._tnRtctrlProfileDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tnRtctrlProfileDnInput() {
    return this._tnRtctrlProfileDn;
  }

  // tn_rtctrl_profile_name - computed: false, optional: true, required: false
  private _tnRtctrlProfileName?: string; 
  public get tnRtctrlProfileName() {
    return this.getStringAttribute('tn_rtctrl_profile_name');
  }
  public set tnRtctrlProfileName(value: string) {
    this._tnRtctrlProfileName = value;
  }
  public resetTnRtctrlProfileName() {
    this._tnRtctrlProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tnRtctrlProfileNameInput() {
    return this._tnRtctrlProfileName;
  }
}

export class L3OutsideRelationL3ExtRsDampeningPolList extends cdktf.ComplexList {
  public internalValue? : L3OutsideRelationL3ExtRsDampeningPol[] | cdktf.IResolvable

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
  public get(index: number): L3OutsideRelationL3ExtRsDampeningPolOutputReference {
    return new L3OutsideRelationL3ExtRsDampeningPolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface L3OutsideRelationL3ExtrsRedistributePol {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3_outside#source L3Outside#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3_outside#target_dn L3Outside#target_dn}
  */
  readonly targetDn: string;
}

export function l3OutsideRelationL3ExtrsRedistributePolToTerraform(struct?: L3OutsideRelationL3ExtrsRedistributePol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: cdktf.stringToTerraform(struct!.source),
    target_dn: cdktf.stringToTerraform(struct!.targetDn),
  }
}


export function l3OutsideRelationL3ExtrsRedistributePolToHclTerraform(struct?: L3OutsideRelationL3ExtrsRedistributePol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
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

export class L3OutsideRelationL3ExtrsRedistributePolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): L3OutsideRelationL3ExtrsRedistributePol | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._targetDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDn = this._targetDn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: L3OutsideRelationL3ExtrsRedistributePol | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source = undefined;
      this._targetDn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source = value.source;
      this._targetDn = value.targetDn;
    }
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
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

export class L3OutsideRelationL3ExtrsRedistributePolList extends cdktf.ComplexList {
  public internalValue? : L3OutsideRelationL3ExtrsRedistributePol[] | cdktf.IResolvable

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
  public get(index: number): L3OutsideRelationL3ExtrsRedistributePolOutputReference {
    return new L3OutsideRelationL3ExtrsRedistributePolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3_outside aci_l3_outside}
*/
export class L3Outside extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_l3_outside";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a L3Outside resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the L3Outside to import
  * @param importFromId The id of the existing L3Outside that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3_outside#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the L3Outside to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_l3_outside", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3_outside aci_l3_outside} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options L3OutsideConfig
  */
  public constructor(scope: Construct, id: string, config: L3OutsideConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_l3_outside',
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
    this._description = config.description;
    this._enforceRtctrl = config.enforceRtctrl;
    this._id = config.id;
    this._mplsEnabled = config.mplsEnabled;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._pim = config.pim;
    this._relationL3ExtRsEctx = config.relationL3ExtRsEctx;
    this._relationL3ExtRsInterleakPol = config.relationL3ExtRsInterleakPol;
    this._relationL3ExtRsL3DomAtt = config.relationL3ExtRsL3DomAtt;
    this._targetDscp = config.targetDscp;
    this._tenantDn = config.tenantDn;
    this._defaultRouteLeakPolicy.internalValue = config.defaultRouteLeakPolicy;
    this._relationL3ExtRsDampeningPol.internalValue = config.relationL3ExtRsDampeningPol;
    this._relationL3ExtrsRedistributePol.internalValue = config.relationL3ExtrsRedistributePol;
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

  // enforce_rtctrl - computed: true, optional: true, required: false
  private _enforceRtctrl?: string[]; 
  public get enforceRtctrl() {
    return this.getListAttribute('enforce_rtctrl');
  }
  public set enforceRtctrl(value: string[]) {
    this._enforceRtctrl = value;
  }
  public resetEnforceRtctrl() {
    this._enforceRtctrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceRtctrlInput() {
    return this._enforceRtctrl;
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

  // mpls_enabled - computed: true, optional: true, required: false
  private _mplsEnabled?: string; 
  public get mplsEnabled() {
    return this.getStringAttribute('mpls_enabled');
  }
  public set mplsEnabled(value: string) {
    this._mplsEnabled = value;
  }
  public resetMplsEnabled() {
    this._mplsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mplsEnabledInput() {
    return this._mplsEnabled;
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

  // pim - computed: true, optional: true, required: false
  private _pim?: string[]; 
  public get pim() {
    return this.getListAttribute('pim');
  }
  public set pim(value: string[]) {
    this._pim = value;
  }
  public resetPim() {
    this._pim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pimInput() {
    return this._pim;
  }

  // relation_l3ext_rs_ectx - computed: false, optional: false, required: true
  private _relationL3ExtRsEctx?: string; 
  public get relationL3ExtRsEctx() {
    return this.getStringAttribute('relation_l3ext_rs_ectx');
  }
  public set relationL3ExtRsEctx(value: string) {
    this._relationL3ExtRsEctx = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relationL3ExtRsEctxInput() {
    return this._relationL3ExtRsEctx;
  }

  // relation_l3ext_rs_interleak_pol - computed: false, optional: true, required: false
  private _relationL3ExtRsInterleakPol?: string; 
  public get relationL3ExtRsInterleakPol() {
    return this.getStringAttribute('relation_l3ext_rs_interleak_pol');
  }
  public set relationL3ExtRsInterleakPol(value: string) {
    this._relationL3ExtRsInterleakPol = value;
  }
  public resetRelationL3ExtRsInterleakPol() {
    this._relationL3ExtRsInterleakPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationL3ExtRsInterleakPolInput() {
    return this._relationL3ExtRsInterleakPol;
  }

  // relation_l3ext_rs_l3_dom_att - computed: false, optional: true, required: false
  private _relationL3ExtRsL3DomAtt?: string; 
  public get relationL3ExtRsL3DomAtt() {
    return this.getStringAttribute('relation_l3ext_rs_l3_dom_att');
  }
  public set relationL3ExtRsL3DomAtt(value: string) {
    this._relationL3ExtRsL3DomAtt = value;
  }
  public resetRelationL3ExtRsL3DomAtt() {
    this._relationL3ExtRsL3DomAtt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationL3ExtRsL3DomAttInput() {
    return this._relationL3ExtRsL3DomAtt;
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

  // tenant_dn - computed: false, optional: false, required: true
  private _tenantDn?: string; 
  public get tenantDn() {
    return this.getStringAttribute('tenant_dn');
  }
  public set tenantDn(value: string) {
    this._tenantDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantDnInput() {
    return this._tenantDn;
  }

  // default_route_leak_policy - computed: false, optional: true, required: false
  private _defaultRouteLeakPolicy = new L3OutsideDefaultRouteLeakPolicyOutputReference(this, "default_route_leak_policy");
  public get defaultRouteLeakPolicy() {
    return this._defaultRouteLeakPolicy;
  }
  public putDefaultRouteLeakPolicy(value: L3OutsideDefaultRouteLeakPolicy) {
    this._defaultRouteLeakPolicy.internalValue = value;
  }
  public resetDefaultRouteLeakPolicy() {
    this._defaultRouteLeakPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteLeakPolicyInput() {
    return this._defaultRouteLeakPolicy.internalValue;
  }

  // relation_l3ext_rs_dampening_pol - computed: false, optional: true, required: false
  private _relationL3ExtRsDampeningPol = new L3OutsideRelationL3ExtRsDampeningPolList(this, "relation_l3ext_rs_dampening_pol", true);
  public get relationL3ExtRsDampeningPol() {
    return this._relationL3ExtRsDampeningPol;
  }
  public putRelationL3ExtRsDampeningPol(value: L3OutsideRelationL3ExtRsDampeningPol[] | cdktf.IResolvable) {
    this._relationL3ExtRsDampeningPol.internalValue = value;
  }
  public resetRelationL3ExtRsDampeningPol() {
    this._relationL3ExtRsDampeningPol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationL3ExtRsDampeningPolInput() {
    return this._relationL3ExtRsDampeningPol.internalValue;
  }

  // relation_l3extrs_redistribute_pol - computed: false, optional: true, required: false
  private _relationL3ExtrsRedistributePol = new L3OutsideRelationL3ExtrsRedistributePolList(this, "relation_l3extrs_redistribute_pol", true);
  public get relationL3ExtrsRedistributePol() {
    return this._relationL3ExtrsRedistributePol;
  }
  public putRelationL3ExtrsRedistributePol(value: L3OutsideRelationL3ExtrsRedistributePol[] | cdktf.IResolvable) {
    this._relationL3ExtrsRedistributePol.internalValue = value;
  }
  public resetRelationL3ExtrsRedistributePol() {
    this._relationL3ExtrsRedistributePol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationL3ExtrsRedistributePolInput() {
    return this._relationL3ExtrsRedistributePol.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      enforce_rtctrl: cdktf.listMapper(cdktf.stringToTerraform, false)(this._enforceRtctrl),
      id: cdktf.stringToTerraform(this._id),
      mpls_enabled: cdktf.stringToTerraform(this._mplsEnabled),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      pim: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pim),
      relation_l3ext_rs_ectx: cdktf.stringToTerraform(this._relationL3ExtRsEctx),
      relation_l3ext_rs_interleak_pol: cdktf.stringToTerraform(this._relationL3ExtRsInterleakPol),
      relation_l3ext_rs_l3_dom_att: cdktf.stringToTerraform(this._relationL3ExtRsL3DomAtt),
      target_dscp: cdktf.stringToTerraform(this._targetDscp),
      tenant_dn: cdktf.stringToTerraform(this._tenantDn),
      default_route_leak_policy: l3OutsideDefaultRouteLeakPolicyToTerraform(this._defaultRouteLeakPolicy.internalValue),
      relation_l3ext_rs_dampening_pol: cdktf.listMapper(l3OutsideRelationL3ExtRsDampeningPolToTerraform, true)(this._relationL3ExtRsDampeningPol.internalValue),
      relation_l3extrs_redistribute_pol: cdktf.listMapper(l3OutsideRelationL3ExtrsRedistributePolToTerraform, true)(this._relationL3ExtrsRedistributePol.internalValue),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enforce_rtctrl: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._enforceRtctrl),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mpls_enabled: {
        value: cdktf.stringToHclTerraform(this._mplsEnabled),
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
      pim: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pim),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      relation_l3ext_rs_ectx: {
        value: cdktf.stringToHclTerraform(this._relationL3ExtRsEctx),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_l3ext_rs_interleak_pol: {
        value: cdktf.stringToHclTerraform(this._relationL3ExtRsInterleakPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_l3ext_rs_l3_dom_att: {
        value: cdktf.stringToHclTerraform(this._relationL3ExtRsL3DomAtt),
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
      tenant_dn: {
        value: cdktf.stringToHclTerraform(this._tenantDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_route_leak_policy: {
        value: l3OutsideDefaultRouteLeakPolicyToHclTerraform(this._defaultRouteLeakPolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "L3OutsideDefaultRouteLeakPolicyList",
      },
      relation_l3ext_rs_dampening_pol: {
        value: cdktf.listMapperHcl(l3OutsideRelationL3ExtRsDampeningPolToHclTerraform, true)(this._relationL3ExtRsDampeningPol.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "L3OutsideRelationL3ExtRsDampeningPolList",
      },
      relation_l3extrs_redistribute_pol: {
        value: cdktf.listMapperHcl(l3OutsideRelationL3ExtrsRedistributePolToHclTerraform, true)(this._relationL3ExtrsRedistributePol.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "L3OutsideRelationL3ExtrsRedistributePolList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
