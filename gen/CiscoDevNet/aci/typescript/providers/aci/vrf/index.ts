// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VrfConfig extends cdktf.TerraformMetaArguments {
  /**
  * The annotation of the VRF object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#annotation Vrf#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#annotations Vrf#annotations}
  */
  readonly annotations?: VrfAnnotations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#bd_enforced_enable Vrf#bd_enforced_enable}
  */
  readonly bdEnforcedEnable?: string;
  /**
  * The Bridge Domain (BD) enforcement status of the VRF. BD enforcement will restrict a host from sending ping requests to subnets outside the Bridge Domain (BD). The feature blocks ICMP, TCP and UDP traffic between BDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#bd_enforcement Vrf#bd_enforcement}
  */
  readonly bdEnforcement?: string;
  /**
  * The description of the VRF object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#description Vrf#description}
  */
  readonly description?: string;
  /**
  * The IP data plane status of the VRF object. The process known as IP data plane learning involves acquiring the endpoint's IPv4 or IPv6 address through data plane routing of traffic from the endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#ip_data_plane_learning Vrf#ip_data_plane_learning}
  */
  readonly ipDataPlaneLearning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#knw_mcast_act Vrf#knw_mcast_act}
  */
  readonly knwMcastAct?: string;
  /**
  * The name of the VRF object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#name Vrf#name}
  */
  readonly name?: string;
  /**
  * The name alias of the VRF object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#name_alias Vrf#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * The key for enabling clients to own their data for entity correlation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#owner_key Vrf#owner_key}
  */
  readonly ownerKey?: string;
  /**
  * A tag for enabling clients to add their own data. For example, to indicate who created this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#owner_tag Vrf#owner_tag}
  */
  readonly ownerTag?: string;
  /**
  * The distinguished name (DN) of the parent object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#parent_dn Vrf#parent_dn}
  */
  readonly parentDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#pc_enf_dir Vrf#pc_enf_dir}
  */
  readonly pcEnfDir?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#pc_enf_pref Vrf#pc_enf_pref}
  */
  readonly pcEnfPref?: string;
  /**
  * The policy control enforcement direction of the VRF object. VRF ingress policy enforcement involves ACL filtering on the leaf switch where the endpoint is located, reducing the policy CAM usage on the border leaf switch by confining the filtering to 'compute' leaf switches. VRF egress policy enforcement extends ACL filtering to the border leaf switch, increasing its policy CAM usage. The border leaf switch handles filtering for traffic from L3Out to EPG after the endpoint is learned, unless the endpoint-to-destination class mapping is unknown, in which case the compute leaf switch handles the filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#policy_control_enforcement_direction Vrf#policy_control_enforcement_direction}
  */
  readonly policyControlEnforcementDirection?: string;
  /**
  * The policy control enforcement mode of the VRF object. VRFs in unenforced mode do not restrict traffic between EPGs that are member of the VRF. VRFs in enforced mode restrict traffic not allowed by contracts between EPGs that are member of the VRF. The policy control enforcement direction is used to determine the preferred enforcement method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#policy_control_enforcement_mode Vrf#policy_control_enforcement_mode}
  */
  readonly policyControlEnforcementMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#relation_fv_rs_bgp_ctx_pol Vrf#relation_fv_rs_bgp_ctx_pol}
  */
  readonly relationFvRsBgpCtxPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#relation_fv_rs_ctx_mcast_to Vrf#relation_fv_rs_ctx_mcast_to}
  */
  readonly relationFvRsCtxMcastTo?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#relation_fv_rs_ctx_mon_pol Vrf#relation_fv_rs_ctx_mon_pol}
  */
  readonly relationFvRsCtxMonPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#relation_fv_rs_ctx_to_ep_ret Vrf#relation_fv_rs_ctx_to_ep_ret}
  */
  readonly relationFvRsCtxToEpRet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#relation_fv_rs_ctx_to_ext_route_tag_pol Vrf#relation_fv_rs_ctx_to_ext_route_tag_pol}
  */
  readonly relationFvRsCtxToExtRouteTagPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#relation_fv_rs_ospf_ctx_pol Vrf#relation_fv_rs_ospf_ctx_pol}
  */
  readonly relationFvRsOspfCtxPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#relation_fv_rs_vrf_validation_pol Vrf#relation_fv_rs_vrf_validation_pol}
  */
  readonly relationFvRsVrfValidationPol?: string;
  /**
  * A source relation to the per-address family OSPF context policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#relation_to_address_family_ospf_timers Vrf#relation_to_address_family_ospf_timers}
  */
  readonly relationToAddressFamilyOspfTimers?: VrfRelationToAddressFamilyOspfTimers[] | cdktf.IResolvable;
  /**
  * A source relation to the BGP address family context policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#relation_to_bgp_address_family_contexts Vrf#relation_to_bgp_address_family_contexts}
  */
  readonly relationToBgpAddressFamilyContexts?: VrfRelationToBgpAddressFamilyContexts[] | cdktf.IResolvable;
  /**
  * A source relation to the BGP timer policy. This is an internal object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#relation_to_bgp_timers Vrf#relation_to_bgp_timers}
  */
  readonly relationToBgpTimers?: VrfRelationToBgpTimers;
  /**
  * A source relation to the per-address family EIGRP context policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#relation_to_eigrp_address_family_contexts Vrf#relation_to_eigrp_address_family_contexts}
  */
  readonly relationToEigrpAddressFamilyContexts?: VrfRelationToEigrpAddressFamilyContexts[] | cdktf.IResolvable;
  /**
  * Name of the endpoint retention policy associated with this context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#relation_to_end_point_retention_policy Vrf#relation_to_end_point_retention_policy}
  */
  readonly relationToEndPointRetentionPolicy?: VrfRelationToEndPointRetentionPolicy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#relation_to_l3out_route_tag_policy Vrf#relation_to_l3out_route_tag_policy}
  */
  readonly relationToL3OutRouteTagPolicy?: VrfRelationToL3OutRouteTagPolicy;
  /**
  * A source relation to the monitoring policy model for the endpoint group semantic scope. This is an internal object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#relation_to_monitoring_policy Vrf#relation_to_monitoring_policy}
  */
  readonly relationToMonitoringPolicy?: VrfRelationToMonitoringPolicy;
  /**
  * A source relation to the context-level OSPF timer policy. This is an internal object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#relation_to_ospf_timers Vrf#relation_to_ospf_timers}
  */
  readonly relationToOspfTimers?: VrfRelationToOspfTimers;
  /**
  * Relationship to WAN VPNs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#relation_to_wan_vpn Vrf#relation_to_wan_vpn}
  */
  readonly relationToWanVpn?: VrfRelationToWanVpn;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#tags Vrf#tags}
  */
  readonly tags?: VrfTags[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#tenant_dn Vrf#tenant_dn}
  */
  readonly tenantDn?: string;
  /**
  * relation_fv_rs_ctx_to_bgp_ctx_af_pol block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#relation_fv_rs_ctx_to_bgp_ctx_af_pol Vrf#relation_fv_rs_ctx_to_bgp_ctx_af_pol}
  */
  readonly relationFvRsCtxToBgpCtxAfPol?: VrfRelationFvRsCtxToBgpCtxAfPol[] | cdktf.IResolvable;
  /**
  * relation_fv_rs_ctx_to_eigrp_ctx_af_pol block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#relation_fv_rs_ctx_to_eigrp_ctx_af_pol Vrf#relation_fv_rs_ctx_to_eigrp_ctx_af_pol}
  */
  readonly relationFvRsCtxToEigrpCtxAfPol?: VrfRelationFvRsCtxToEigrpCtxAfPol[] | cdktf.IResolvable;
  /**
  * relation_fv_rs_ctx_to_ospf_ctx_pol block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#relation_fv_rs_ctx_to_ospf_ctx_pol Vrf#relation_fv_rs_ctx_to_ospf_ctx_pol}
  */
  readonly relationFvRsCtxToOspfCtxPol?: VrfRelationFvRsCtxToOspfCtxPol[] | cdktf.IResolvable;
}
export interface VrfAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#key Vrf#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#value Vrf#value}
  */
  readonly value?: string;
}

export function vrfAnnotationsToTerraform(struct?: VrfAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vrfAnnotationsToHclTerraform(struct?: VrfAnnotations | cdktf.IResolvable): any {
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

export class VrfAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfAnnotations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VrfAnnotations | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VrfAnnotationsList extends cdktf.ComplexList {
  public internalValue? : VrfAnnotations[] | cdktf.IResolvable

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
  public get(index: number): VrfAnnotationsOutputReference {
    return new VrfAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfRelationToAddressFamilyOspfTimersAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#key Vrf#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#value Vrf#value}
  */
  readonly value?: string;
}

export function vrfRelationToAddressFamilyOspfTimersAnnotationsToTerraform(struct?: VrfRelationToAddressFamilyOspfTimersAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vrfRelationToAddressFamilyOspfTimersAnnotationsToHclTerraform(struct?: VrfRelationToAddressFamilyOspfTimersAnnotations | cdktf.IResolvable): any {
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

export class VrfRelationToAddressFamilyOspfTimersAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfRelationToAddressFamilyOspfTimersAnnotations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VrfRelationToAddressFamilyOspfTimersAnnotations | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VrfRelationToAddressFamilyOspfTimersAnnotationsList extends cdktf.ComplexList {
  public internalValue? : VrfRelationToAddressFamilyOspfTimersAnnotations[] | cdktf.IResolvable

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
  public get(index: number): VrfRelationToAddressFamilyOspfTimersAnnotationsOutputReference {
    return new VrfRelationToAddressFamilyOspfTimersAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfRelationToAddressFamilyOspfTimersTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#key Vrf#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#value Vrf#value}
  */
  readonly value?: string;
}

export function vrfRelationToAddressFamilyOspfTimersTagsToTerraform(struct?: VrfRelationToAddressFamilyOspfTimersTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vrfRelationToAddressFamilyOspfTimersTagsToHclTerraform(struct?: VrfRelationToAddressFamilyOspfTimersTags | cdktf.IResolvable): any {
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

export class VrfRelationToAddressFamilyOspfTimersTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfRelationToAddressFamilyOspfTimersTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VrfRelationToAddressFamilyOspfTimersTags | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VrfRelationToAddressFamilyOspfTimersTagsList extends cdktf.ComplexList {
  public internalValue? : VrfRelationToAddressFamilyOspfTimersTags[] | cdktf.IResolvable

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
  public get(index: number): VrfRelationToAddressFamilyOspfTimersTagsOutputReference {
    return new VrfRelationToAddressFamilyOspfTimersTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfRelationToAddressFamilyOspfTimers {
  /**
  * The type of address family for the Relation From VRF To Address Family OSPF Timers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#address_family Vrf#address_family}
  */
  readonly addressFamily?: string;
  /**
  * The annotation of the Relation From VRF To Address Family OSPF Timers object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#annotation Vrf#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#annotations Vrf#annotations}
  */
  readonly annotations?: VrfRelationToAddressFamilyOspfTimersAnnotations[] | cdktf.IResolvable;
  /**
  * The name of the OSPF timers policy associated with this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#ospf_timers_name Vrf#ospf_timers_name}
  */
  readonly ospfTimersName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#tags Vrf#tags}
  */
  readonly tags?: VrfRelationToAddressFamilyOspfTimersTags[] | cdktf.IResolvable;
}

export function vrfRelationToAddressFamilyOspfTimersToTerraform(struct?: VrfRelationToAddressFamilyOspfTimers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_family: cdktf.stringToTerraform(struct!.addressFamily),
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(vrfRelationToAddressFamilyOspfTimersAnnotationsToTerraform, false)(struct!.annotations),
    ospf_timers_name: cdktf.stringToTerraform(struct!.ospfTimersName),
    tags: cdktf.listMapper(vrfRelationToAddressFamilyOspfTimersTagsToTerraform, false)(struct!.tags),
  }
}


export function vrfRelationToAddressFamilyOspfTimersToHclTerraform(struct?: VrfRelationToAddressFamilyOspfTimers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_family: {
      value: cdktf.stringToHclTerraform(struct!.addressFamily),
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
    annotations: {
      value: cdktf.listMapperHcl(vrfRelationToAddressFamilyOspfTimersAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "VrfRelationToAddressFamilyOspfTimersAnnotationsList",
    },
    ospf_timers_name: {
      value: cdktf.stringToHclTerraform(struct!.ospfTimersName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(vrfRelationToAddressFamilyOspfTimersTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "VrfRelationToAddressFamilyOspfTimersTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfRelationToAddressFamilyOspfTimersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfRelationToAddressFamilyOspfTimers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressFamily = this._addressFamily;
    }
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._ospfTimersName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfTimersName = this._ospfTimersName;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfRelationToAddressFamilyOspfTimers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressFamily = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._ospfTimersName = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressFamily = value.addressFamily;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._ospfTimersName = value.ospfTimersName;
      this._tags.internalValue = value.tags;
    }
  }

  // address_family - computed: true, optional: true, required: false
  private _addressFamily?: string; 
  public get addressFamily() {
    return this.getStringAttribute('address_family');
  }
  public set addressFamily(value: string) {
    this._addressFamily = value;
  }
  public resetAddressFamily() {
    this._addressFamily = undefined;
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
  private _annotations = new VrfRelationToAddressFamilyOspfTimersAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: VrfRelationToAddressFamilyOspfTimersAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // ospf_timers_name - computed: true, optional: true, required: false
  private _ospfTimersName?: string; 
  public get ospfTimersName() {
    return this.getStringAttribute('ospf_timers_name');
  }
  public set ospfTimersName(value: string) {
    this._ospfTimersName = value;
  }
  public resetOspfTimersName() {
    this._ospfTimersName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfTimersNameInput() {
    return this._ospfTimersName;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new VrfRelationToAddressFamilyOspfTimersTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: VrfRelationToAddressFamilyOspfTimersTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class VrfRelationToAddressFamilyOspfTimersList extends cdktf.ComplexList {
  public internalValue? : VrfRelationToAddressFamilyOspfTimers[] | cdktf.IResolvable

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
  public get(index: number): VrfRelationToAddressFamilyOspfTimersOutputReference {
    return new VrfRelationToAddressFamilyOspfTimersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfRelationToBgpAddressFamilyContextsAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#key Vrf#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#value Vrf#value}
  */
  readonly value?: string;
}

export function vrfRelationToBgpAddressFamilyContextsAnnotationsToTerraform(struct?: VrfRelationToBgpAddressFamilyContextsAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vrfRelationToBgpAddressFamilyContextsAnnotationsToHclTerraform(struct?: VrfRelationToBgpAddressFamilyContextsAnnotations | cdktf.IResolvable): any {
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

export class VrfRelationToBgpAddressFamilyContextsAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfRelationToBgpAddressFamilyContextsAnnotations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VrfRelationToBgpAddressFamilyContextsAnnotations | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VrfRelationToBgpAddressFamilyContextsAnnotationsList extends cdktf.ComplexList {
  public internalValue? : VrfRelationToBgpAddressFamilyContextsAnnotations[] | cdktf.IResolvable

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
  public get(index: number): VrfRelationToBgpAddressFamilyContextsAnnotationsOutputReference {
    return new VrfRelationToBgpAddressFamilyContextsAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfRelationToBgpAddressFamilyContextsTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#key Vrf#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#value Vrf#value}
  */
  readonly value?: string;
}

export function vrfRelationToBgpAddressFamilyContextsTagsToTerraform(struct?: VrfRelationToBgpAddressFamilyContextsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vrfRelationToBgpAddressFamilyContextsTagsToHclTerraform(struct?: VrfRelationToBgpAddressFamilyContextsTags | cdktf.IResolvable): any {
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

export class VrfRelationToBgpAddressFamilyContextsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfRelationToBgpAddressFamilyContextsTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VrfRelationToBgpAddressFamilyContextsTags | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VrfRelationToBgpAddressFamilyContextsTagsList extends cdktf.ComplexList {
  public internalValue? : VrfRelationToBgpAddressFamilyContextsTags[] | cdktf.IResolvable

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
  public get(index: number): VrfRelationToBgpAddressFamilyContextsTagsOutputReference {
    return new VrfRelationToBgpAddressFamilyContextsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfRelationToBgpAddressFamilyContexts {
  /**
  * The type of address family for the Relation From VRF To BGP Address Family Context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#address_family Vrf#address_family}
  */
  readonly addressFamily?: string;
  /**
  * The annotation of the Relation From VRF To BGP Address Family Context object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#annotation Vrf#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#annotations Vrf#annotations}
  */
  readonly annotations?: VrfRelationToBgpAddressFamilyContextsAnnotations[] | cdktf.IResolvable;
  /**
  * The name of the BGP Address Family Context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#bgp_address_family_context_name Vrf#bgp_address_family_context_name}
  */
  readonly bgpAddressFamilyContextName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#tags Vrf#tags}
  */
  readonly tags?: VrfRelationToBgpAddressFamilyContextsTags[] | cdktf.IResolvable;
}

export function vrfRelationToBgpAddressFamilyContextsToTerraform(struct?: VrfRelationToBgpAddressFamilyContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_family: cdktf.stringToTerraform(struct!.addressFamily),
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(vrfRelationToBgpAddressFamilyContextsAnnotationsToTerraform, false)(struct!.annotations),
    bgp_address_family_context_name: cdktf.stringToTerraform(struct!.bgpAddressFamilyContextName),
    tags: cdktf.listMapper(vrfRelationToBgpAddressFamilyContextsTagsToTerraform, false)(struct!.tags),
  }
}


export function vrfRelationToBgpAddressFamilyContextsToHclTerraform(struct?: VrfRelationToBgpAddressFamilyContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_family: {
      value: cdktf.stringToHclTerraform(struct!.addressFamily),
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
    annotations: {
      value: cdktf.listMapperHcl(vrfRelationToBgpAddressFamilyContextsAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "VrfRelationToBgpAddressFamilyContextsAnnotationsList",
    },
    bgp_address_family_context_name: {
      value: cdktf.stringToHclTerraform(struct!.bgpAddressFamilyContextName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(vrfRelationToBgpAddressFamilyContextsTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "VrfRelationToBgpAddressFamilyContextsTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfRelationToBgpAddressFamilyContextsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfRelationToBgpAddressFamilyContexts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressFamily = this._addressFamily;
    }
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._bgpAddressFamilyContextName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpAddressFamilyContextName = this._bgpAddressFamilyContextName;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfRelationToBgpAddressFamilyContexts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressFamily = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._bgpAddressFamilyContextName = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressFamily = value.addressFamily;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._bgpAddressFamilyContextName = value.bgpAddressFamilyContextName;
      this._tags.internalValue = value.tags;
    }
  }

  // address_family - computed: true, optional: true, required: false
  private _addressFamily?: string; 
  public get addressFamily() {
    return this.getStringAttribute('address_family');
  }
  public set addressFamily(value: string) {
    this._addressFamily = value;
  }
  public resetAddressFamily() {
    this._addressFamily = undefined;
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
  private _annotations = new VrfRelationToBgpAddressFamilyContextsAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: VrfRelationToBgpAddressFamilyContextsAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // bgp_address_family_context_name - computed: true, optional: true, required: false
  private _bgpAddressFamilyContextName?: string; 
  public get bgpAddressFamilyContextName() {
    return this.getStringAttribute('bgp_address_family_context_name');
  }
  public set bgpAddressFamilyContextName(value: string) {
    this._bgpAddressFamilyContextName = value;
  }
  public resetBgpAddressFamilyContextName() {
    this._bgpAddressFamilyContextName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpAddressFamilyContextNameInput() {
    return this._bgpAddressFamilyContextName;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new VrfRelationToBgpAddressFamilyContextsTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: VrfRelationToBgpAddressFamilyContextsTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class VrfRelationToBgpAddressFamilyContextsList extends cdktf.ComplexList {
  public internalValue? : VrfRelationToBgpAddressFamilyContexts[] | cdktf.IResolvable

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
  public get(index: number): VrfRelationToBgpAddressFamilyContextsOutputReference {
    return new VrfRelationToBgpAddressFamilyContextsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfRelationToBgpTimersAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#key Vrf#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#value Vrf#value}
  */
  readonly value?: string;
}

export function vrfRelationToBgpTimersAnnotationsToTerraform(struct?: VrfRelationToBgpTimersAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vrfRelationToBgpTimersAnnotationsToHclTerraform(struct?: VrfRelationToBgpTimersAnnotations | cdktf.IResolvable): any {
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

export class VrfRelationToBgpTimersAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfRelationToBgpTimersAnnotations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VrfRelationToBgpTimersAnnotations | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VrfRelationToBgpTimersAnnotationsList extends cdktf.ComplexList {
  public internalValue? : VrfRelationToBgpTimersAnnotations[] | cdktf.IResolvable

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
  public get(index: number): VrfRelationToBgpTimersAnnotationsOutputReference {
    return new VrfRelationToBgpTimersAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfRelationToBgpTimersTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#key Vrf#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#value Vrf#value}
  */
  readonly value?: string;
}

export function vrfRelationToBgpTimersTagsToTerraform(struct?: VrfRelationToBgpTimersTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vrfRelationToBgpTimersTagsToHclTerraform(struct?: VrfRelationToBgpTimersTags | cdktf.IResolvable): any {
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

export class VrfRelationToBgpTimersTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfRelationToBgpTimersTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VrfRelationToBgpTimersTags | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VrfRelationToBgpTimersTagsList extends cdktf.ComplexList {
  public internalValue? : VrfRelationToBgpTimersTags[] | cdktf.IResolvable

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
  public get(index: number): VrfRelationToBgpTimersTagsOutputReference {
    return new VrfRelationToBgpTimersTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfRelationToBgpTimers {
  /**
  * The annotation of the Relation To BGP Timers object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#annotation Vrf#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#annotations Vrf#annotations}
  */
  readonly annotations?: VrfRelationToBgpTimersAnnotations[] | cdktf.IResolvable;
  /**
  * The name of the BGP timers policy associated with this context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#bgp_timers_name Vrf#bgp_timers_name}
  */
  readonly bgpTimersName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#tags Vrf#tags}
  */
  readonly tags?: VrfRelationToBgpTimersTags[] | cdktf.IResolvable;
}

export function vrfRelationToBgpTimersToTerraform(struct?: VrfRelationToBgpTimers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(vrfRelationToBgpTimersAnnotationsToTerraform, false)(struct!.annotations),
    bgp_timers_name: cdktf.stringToTerraform(struct!.bgpTimersName),
    tags: cdktf.listMapper(vrfRelationToBgpTimersTagsToTerraform, false)(struct!.tags),
  }
}


export function vrfRelationToBgpTimersToHclTerraform(struct?: VrfRelationToBgpTimers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation: {
      value: cdktf.stringToHclTerraform(struct!.annotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotations: {
      value: cdktf.listMapperHcl(vrfRelationToBgpTimersAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "VrfRelationToBgpTimersAnnotationsList",
    },
    bgp_timers_name: {
      value: cdktf.stringToHclTerraform(struct!.bgpTimersName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(vrfRelationToBgpTimersTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "VrfRelationToBgpTimersTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfRelationToBgpTimersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VrfRelationToBgpTimers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._bgpTimersName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpTimersName = this._bgpTimersName;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfRelationToBgpTimers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._bgpTimersName = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._bgpTimersName = value.bgpTimersName;
      this._tags.internalValue = value.tags;
    }
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
  private _annotations = new VrfRelationToBgpTimersAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: VrfRelationToBgpTimersAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // bgp_timers_name - computed: true, optional: true, required: false
  private _bgpTimersName?: string; 
  public get bgpTimersName() {
    return this.getStringAttribute('bgp_timers_name');
  }
  public set bgpTimersName(value: string) {
    this._bgpTimersName = value;
  }
  public resetBgpTimersName() {
    this._bgpTimersName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpTimersNameInput() {
    return this._bgpTimersName;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new VrfRelationToBgpTimersTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: VrfRelationToBgpTimersTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface VrfRelationToEigrpAddressFamilyContextsAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#key Vrf#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#value Vrf#value}
  */
  readonly value?: string;
}

export function vrfRelationToEigrpAddressFamilyContextsAnnotationsToTerraform(struct?: VrfRelationToEigrpAddressFamilyContextsAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vrfRelationToEigrpAddressFamilyContextsAnnotationsToHclTerraform(struct?: VrfRelationToEigrpAddressFamilyContextsAnnotations | cdktf.IResolvable): any {
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

export class VrfRelationToEigrpAddressFamilyContextsAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfRelationToEigrpAddressFamilyContextsAnnotations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VrfRelationToEigrpAddressFamilyContextsAnnotations | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VrfRelationToEigrpAddressFamilyContextsAnnotationsList extends cdktf.ComplexList {
  public internalValue? : VrfRelationToEigrpAddressFamilyContextsAnnotations[] | cdktf.IResolvable

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
  public get(index: number): VrfRelationToEigrpAddressFamilyContextsAnnotationsOutputReference {
    return new VrfRelationToEigrpAddressFamilyContextsAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfRelationToEigrpAddressFamilyContextsTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#key Vrf#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#value Vrf#value}
  */
  readonly value?: string;
}

export function vrfRelationToEigrpAddressFamilyContextsTagsToTerraform(struct?: VrfRelationToEigrpAddressFamilyContextsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vrfRelationToEigrpAddressFamilyContextsTagsToHclTerraform(struct?: VrfRelationToEigrpAddressFamilyContextsTags | cdktf.IResolvable): any {
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

export class VrfRelationToEigrpAddressFamilyContextsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfRelationToEigrpAddressFamilyContextsTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VrfRelationToEigrpAddressFamilyContextsTags | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VrfRelationToEigrpAddressFamilyContextsTagsList extends cdktf.ComplexList {
  public internalValue? : VrfRelationToEigrpAddressFamilyContextsTags[] | cdktf.IResolvable

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
  public get(index: number): VrfRelationToEigrpAddressFamilyContextsTagsOutputReference {
    return new VrfRelationToEigrpAddressFamilyContextsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfRelationToEigrpAddressFamilyContexts {
  /**
  * The type of address family for the Relation From VRF To EIGRP Address Family Context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#address_family Vrf#address_family}
  */
  readonly addressFamily?: string;
  /**
  * The annotation of the Relation From VRF To EIGRP Address Family Context object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#annotation Vrf#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#annotations Vrf#annotations}
  */
  readonly annotations?: VrfRelationToEigrpAddressFamilyContextsAnnotations[] | cdktf.IResolvable;
  /**
  * The name of the EIGRP Address Family Context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#eigrp_address_family_context_name Vrf#eigrp_address_family_context_name}
  */
  readonly eigrpAddressFamilyContextName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#tags Vrf#tags}
  */
  readonly tags?: VrfRelationToEigrpAddressFamilyContextsTags[] | cdktf.IResolvable;
}

export function vrfRelationToEigrpAddressFamilyContextsToTerraform(struct?: VrfRelationToEigrpAddressFamilyContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_family: cdktf.stringToTerraform(struct!.addressFamily),
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(vrfRelationToEigrpAddressFamilyContextsAnnotationsToTerraform, false)(struct!.annotations),
    eigrp_address_family_context_name: cdktf.stringToTerraform(struct!.eigrpAddressFamilyContextName),
    tags: cdktf.listMapper(vrfRelationToEigrpAddressFamilyContextsTagsToTerraform, false)(struct!.tags),
  }
}


export function vrfRelationToEigrpAddressFamilyContextsToHclTerraform(struct?: VrfRelationToEigrpAddressFamilyContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_family: {
      value: cdktf.stringToHclTerraform(struct!.addressFamily),
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
    annotations: {
      value: cdktf.listMapperHcl(vrfRelationToEigrpAddressFamilyContextsAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "VrfRelationToEigrpAddressFamilyContextsAnnotationsList",
    },
    eigrp_address_family_context_name: {
      value: cdktf.stringToHclTerraform(struct!.eigrpAddressFamilyContextName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(vrfRelationToEigrpAddressFamilyContextsTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "VrfRelationToEigrpAddressFamilyContextsTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfRelationToEigrpAddressFamilyContextsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfRelationToEigrpAddressFamilyContexts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressFamily = this._addressFamily;
    }
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._eigrpAddressFamilyContextName !== undefined) {
      hasAnyValues = true;
      internalValueResult.eigrpAddressFamilyContextName = this._eigrpAddressFamilyContextName;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfRelationToEigrpAddressFamilyContexts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressFamily = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._eigrpAddressFamilyContextName = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressFamily = value.addressFamily;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._eigrpAddressFamilyContextName = value.eigrpAddressFamilyContextName;
      this._tags.internalValue = value.tags;
    }
  }

  // address_family - computed: true, optional: true, required: false
  private _addressFamily?: string; 
  public get addressFamily() {
    return this.getStringAttribute('address_family');
  }
  public set addressFamily(value: string) {
    this._addressFamily = value;
  }
  public resetAddressFamily() {
    this._addressFamily = undefined;
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
  private _annotations = new VrfRelationToEigrpAddressFamilyContextsAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: VrfRelationToEigrpAddressFamilyContextsAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // eigrp_address_family_context_name - computed: true, optional: true, required: false
  private _eigrpAddressFamilyContextName?: string; 
  public get eigrpAddressFamilyContextName() {
    return this.getStringAttribute('eigrp_address_family_context_name');
  }
  public set eigrpAddressFamilyContextName(value: string) {
    this._eigrpAddressFamilyContextName = value;
  }
  public resetEigrpAddressFamilyContextName() {
    this._eigrpAddressFamilyContextName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eigrpAddressFamilyContextNameInput() {
    return this._eigrpAddressFamilyContextName;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new VrfRelationToEigrpAddressFamilyContextsTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: VrfRelationToEigrpAddressFamilyContextsTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class VrfRelationToEigrpAddressFamilyContextsList extends cdktf.ComplexList {
  public internalValue? : VrfRelationToEigrpAddressFamilyContexts[] | cdktf.IResolvable

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
  public get(index: number): VrfRelationToEigrpAddressFamilyContextsOutputReference {
    return new VrfRelationToEigrpAddressFamilyContextsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfRelationToEndPointRetentionPolicyAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#key Vrf#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#value Vrf#value}
  */
  readonly value?: string;
}

export function vrfRelationToEndPointRetentionPolicyAnnotationsToTerraform(struct?: VrfRelationToEndPointRetentionPolicyAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vrfRelationToEndPointRetentionPolicyAnnotationsToHclTerraform(struct?: VrfRelationToEndPointRetentionPolicyAnnotations | cdktf.IResolvable): any {
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

export class VrfRelationToEndPointRetentionPolicyAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfRelationToEndPointRetentionPolicyAnnotations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VrfRelationToEndPointRetentionPolicyAnnotations | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VrfRelationToEndPointRetentionPolicyAnnotationsList extends cdktf.ComplexList {
  public internalValue? : VrfRelationToEndPointRetentionPolicyAnnotations[] | cdktf.IResolvable

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
  public get(index: number): VrfRelationToEndPointRetentionPolicyAnnotationsOutputReference {
    return new VrfRelationToEndPointRetentionPolicyAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfRelationToEndPointRetentionPolicyTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#key Vrf#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#value Vrf#value}
  */
  readonly value?: string;
}

export function vrfRelationToEndPointRetentionPolicyTagsToTerraform(struct?: VrfRelationToEndPointRetentionPolicyTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vrfRelationToEndPointRetentionPolicyTagsToHclTerraform(struct?: VrfRelationToEndPointRetentionPolicyTags | cdktf.IResolvable): any {
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

export class VrfRelationToEndPointRetentionPolicyTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfRelationToEndPointRetentionPolicyTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VrfRelationToEndPointRetentionPolicyTags | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VrfRelationToEndPointRetentionPolicyTagsList extends cdktf.ComplexList {
  public internalValue? : VrfRelationToEndPointRetentionPolicyTags[] | cdktf.IResolvable

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
  public get(index: number): VrfRelationToEndPointRetentionPolicyTagsOutputReference {
    return new VrfRelationToEndPointRetentionPolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfRelationToEndPointRetentionPolicy {
  /**
  * The annotation of the Relation From VRF To End Point Retention Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#annotation Vrf#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#annotations Vrf#annotations}
  */
  readonly annotations?: VrfRelationToEndPointRetentionPolicyAnnotations[] | cdktf.IResolvable;
  /**
  * The end point retention policy name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#end_point_retention_policy_name Vrf#end_point_retention_policy_name}
  */
  readonly endPointRetentionPolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#tags Vrf#tags}
  */
  readonly tags?: VrfRelationToEndPointRetentionPolicyTags[] | cdktf.IResolvable;
}

export function vrfRelationToEndPointRetentionPolicyToTerraform(struct?: VrfRelationToEndPointRetentionPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(vrfRelationToEndPointRetentionPolicyAnnotationsToTerraform, false)(struct!.annotations),
    end_point_retention_policy_name: cdktf.stringToTerraform(struct!.endPointRetentionPolicyName),
    tags: cdktf.listMapper(vrfRelationToEndPointRetentionPolicyTagsToTerraform, false)(struct!.tags),
  }
}


export function vrfRelationToEndPointRetentionPolicyToHclTerraform(struct?: VrfRelationToEndPointRetentionPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation: {
      value: cdktf.stringToHclTerraform(struct!.annotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotations: {
      value: cdktf.listMapperHcl(vrfRelationToEndPointRetentionPolicyAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "VrfRelationToEndPointRetentionPolicyAnnotationsList",
    },
    end_point_retention_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.endPointRetentionPolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(vrfRelationToEndPointRetentionPolicyTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "VrfRelationToEndPointRetentionPolicyTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfRelationToEndPointRetentionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VrfRelationToEndPointRetentionPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._endPointRetentionPolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPointRetentionPolicyName = this._endPointRetentionPolicyName;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfRelationToEndPointRetentionPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._endPointRetentionPolicyName = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._endPointRetentionPolicyName = value.endPointRetentionPolicyName;
      this._tags.internalValue = value.tags;
    }
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
  private _annotations = new VrfRelationToEndPointRetentionPolicyAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: VrfRelationToEndPointRetentionPolicyAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // end_point_retention_policy_name - computed: true, optional: true, required: false
  private _endPointRetentionPolicyName?: string; 
  public get endPointRetentionPolicyName() {
    return this.getStringAttribute('end_point_retention_policy_name');
  }
  public set endPointRetentionPolicyName(value: string) {
    this._endPointRetentionPolicyName = value;
  }
  public resetEndPointRetentionPolicyName() {
    this._endPointRetentionPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPointRetentionPolicyNameInput() {
    return this._endPointRetentionPolicyName;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new VrfRelationToEndPointRetentionPolicyTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: VrfRelationToEndPointRetentionPolicyTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface VrfRelationToL3OutRouteTagPolicyAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#key Vrf#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#value Vrf#value}
  */
  readonly value?: string;
}

export function vrfRelationToL3OutRouteTagPolicyAnnotationsToTerraform(struct?: VrfRelationToL3OutRouteTagPolicyAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vrfRelationToL3OutRouteTagPolicyAnnotationsToHclTerraform(struct?: VrfRelationToL3OutRouteTagPolicyAnnotations | cdktf.IResolvable): any {
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

export class VrfRelationToL3OutRouteTagPolicyAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfRelationToL3OutRouteTagPolicyAnnotations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VrfRelationToL3OutRouteTagPolicyAnnotations | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VrfRelationToL3OutRouteTagPolicyAnnotationsList extends cdktf.ComplexList {
  public internalValue? : VrfRelationToL3OutRouteTagPolicyAnnotations[] | cdktf.IResolvable

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
  public get(index: number): VrfRelationToL3OutRouteTagPolicyAnnotationsOutputReference {
    return new VrfRelationToL3OutRouteTagPolicyAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfRelationToL3OutRouteTagPolicyTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#key Vrf#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#value Vrf#value}
  */
  readonly value?: string;
}

export function vrfRelationToL3OutRouteTagPolicyTagsToTerraform(struct?: VrfRelationToL3OutRouteTagPolicyTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vrfRelationToL3OutRouteTagPolicyTagsToHclTerraform(struct?: VrfRelationToL3OutRouteTagPolicyTags | cdktf.IResolvable): any {
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

export class VrfRelationToL3OutRouteTagPolicyTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfRelationToL3OutRouteTagPolicyTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VrfRelationToL3OutRouteTagPolicyTags | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VrfRelationToL3OutRouteTagPolicyTagsList extends cdktf.ComplexList {
  public internalValue? : VrfRelationToL3OutRouteTagPolicyTags[] | cdktf.IResolvable

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
  public get(index: number): VrfRelationToL3OutRouteTagPolicyTagsOutputReference {
    return new VrfRelationToL3OutRouteTagPolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfRelationToL3OutRouteTagPolicy {
  /**
  * The annotation of the Relation From VRF To L3Out Route Tag Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#annotation Vrf#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#annotations Vrf#annotations}
  */
  readonly annotations?: VrfRelationToL3OutRouteTagPolicyAnnotations[] | cdktf.IResolvable;
  /**
  * The name of the External Route Tag policy associated with this context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#l3out_route_tag_policy_name Vrf#l3out_route_tag_policy_name}
  */
  readonly l3OutRouteTagPolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#tags Vrf#tags}
  */
  readonly tags?: VrfRelationToL3OutRouteTagPolicyTags[] | cdktf.IResolvable;
}

export function vrfRelationToL3OutRouteTagPolicyToTerraform(struct?: VrfRelationToL3OutRouteTagPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(vrfRelationToL3OutRouteTagPolicyAnnotationsToTerraform, false)(struct!.annotations),
    l3out_route_tag_policy_name: cdktf.stringToTerraform(struct!.l3OutRouteTagPolicyName),
    tags: cdktf.listMapper(vrfRelationToL3OutRouteTagPolicyTagsToTerraform, false)(struct!.tags),
  }
}


export function vrfRelationToL3OutRouteTagPolicyToHclTerraform(struct?: VrfRelationToL3OutRouteTagPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation: {
      value: cdktf.stringToHclTerraform(struct!.annotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotations: {
      value: cdktf.listMapperHcl(vrfRelationToL3OutRouteTagPolicyAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "VrfRelationToL3OutRouteTagPolicyAnnotationsList",
    },
    l3out_route_tag_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.l3OutRouteTagPolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(vrfRelationToL3OutRouteTagPolicyTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "VrfRelationToL3OutRouteTagPolicyTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfRelationToL3OutRouteTagPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VrfRelationToL3OutRouteTagPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._l3OutRouteTagPolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3OutRouteTagPolicyName = this._l3OutRouteTagPolicyName;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfRelationToL3OutRouteTagPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._l3OutRouteTagPolicyName = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._l3OutRouteTagPolicyName = value.l3OutRouteTagPolicyName;
      this._tags.internalValue = value.tags;
    }
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
  private _annotations = new VrfRelationToL3OutRouteTagPolicyAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: VrfRelationToL3OutRouteTagPolicyAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // l3out_route_tag_policy_name - computed: true, optional: true, required: false
  private _l3OutRouteTagPolicyName?: string; 
  public get l3OutRouteTagPolicyName() {
    return this.getStringAttribute('l3out_route_tag_policy_name');
  }
  public set l3OutRouteTagPolicyName(value: string) {
    this._l3OutRouteTagPolicyName = value;
  }
  public resetL3OutRouteTagPolicyName() {
    this._l3OutRouteTagPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3OutRouteTagPolicyNameInput() {
    return this._l3OutRouteTagPolicyName;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new VrfRelationToL3OutRouteTagPolicyTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: VrfRelationToL3OutRouteTagPolicyTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface VrfRelationToMonitoringPolicyAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#key Vrf#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#value Vrf#value}
  */
  readonly value?: string;
}

export function vrfRelationToMonitoringPolicyAnnotationsToTerraform(struct?: VrfRelationToMonitoringPolicyAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vrfRelationToMonitoringPolicyAnnotationsToHclTerraform(struct?: VrfRelationToMonitoringPolicyAnnotations | cdktf.IResolvable): any {
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

export class VrfRelationToMonitoringPolicyAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfRelationToMonitoringPolicyAnnotations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VrfRelationToMonitoringPolicyAnnotations | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VrfRelationToMonitoringPolicyAnnotationsList extends cdktf.ComplexList {
  public internalValue? : VrfRelationToMonitoringPolicyAnnotations[] | cdktf.IResolvable

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
  public get(index: number): VrfRelationToMonitoringPolicyAnnotationsOutputReference {
    return new VrfRelationToMonitoringPolicyAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfRelationToMonitoringPolicyTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#key Vrf#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#value Vrf#value}
  */
  readonly value?: string;
}

export function vrfRelationToMonitoringPolicyTagsToTerraform(struct?: VrfRelationToMonitoringPolicyTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vrfRelationToMonitoringPolicyTagsToHclTerraform(struct?: VrfRelationToMonitoringPolicyTags | cdktf.IResolvable): any {
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

export class VrfRelationToMonitoringPolicyTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfRelationToMonitoringPolicyTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VrfRelationToMonitoringPolicyTags | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VrfRelationToMonitoringPolicyTagsList extends cdktf.ComplexList {
  public internalValue? : VrfRelationToMonitoringPolicyTags[] | cdktf.IResolvable

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
  public get(index: number): VrfRelationToMonitoringPolicyTagsOutputReference {
    return new VrfRelationToMonitoringPolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfRelationToMonitoringPolicy {
  /**
  * The annotation of the Relation From VRF To Monitoring Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#annotation Vrf#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#annotations Vrf#annotations}
  */
  readonly annotations?: VrfRelationToMonitoringPolicyAnnotations[] | cdktf.IResolvable;
  /**
  * The name of the monitoring policy associated with this context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#monitoring_policy_name Vrf#monitoring_policy_name}
  */
  readonly monitoringPolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#tags Vrf#tags}
  */
  readonly tags?: VrfRelationToMonitoringPolicyTags[] | cdktf.IResolvable;
}

export function vrfRelationToMonitoringPolicyToTerraform(struct?: VrfRelationToMonitoringPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(vrfRelationToMonitoringPolicyAnnotationsToTerraform, false)(struct!.annotations),
    monitoring_policy_name: cdktf.stringToTerraform(struct!.monitoringPolicyName),
    tags: cdktf.listMapper(vrfRelationToMonitoringPolicyTagsToTerraform, false)(struct!.tags),
  }
}


export function vrfRelationToMonitoringPolicyToHclTerraform(struct?: VrfRelationToMonitoringPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation: {
      value: cdktf.stringToHclTerraform(struct!.annotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotations: {
      value: cdktf.listMapperHcl(vrfRelationToMonitoringPolicyAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "VrfRelationToMonitoringPolicyAnnotationsList",
    },
    monitoring_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.monitoringPolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(vrfRelationToMonitoringPolicyTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "VrfRelationToMonitoringPolicyTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfRelationToMonitoringPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VrfRelationToMonitoringPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._monitoringPolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringPolicyName = this._monitoringPolicyName;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfRelationToMonitoringPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._monitoringPolicyName = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._monitoringPolicyName = value.monitoringPolicyName;
      this._tags.internalValue = value.tags;
    }
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
  private _annotations = new VrfRelationToMonitoringPolicyAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: VrfRelationToMonitoringPolicyAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // monitoring_policy_name - computed: true, optional: true, required: false
  private _monitoringPolicyName?: string; 
  public get monitoringPolicyName() {
    return this.getStringAttribute('monitoring_policy_name');
  }
  public set monitoringPolicyName(value: string) {
    this._monitoringPolicyName = value;
  }
  public resetMonitoringPolicyName() {
    this._monitoringPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringPolicyNameInput() {
    return this._monitoringPolicyName;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new VrfRelationToMonitoringPolicyTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: VrfRelationToMonitoringPolicyTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface VrfRelationToOspfTimersAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#key Vrf#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#value Vrf#value}
  */
  readonly value?: string;
}

export function vrfRelationToOspfTimersAnnotationsToTerraform(struct?: VrfRelationToOspfTimersAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vrfRelationToOspfTimersAnnotationsToHclTerraform(struct?: VrfRelationToOspfTimersAnnotations | cdktf.IResolvable): any {
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

export class VrfRelationToOspfTimersAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfRelationToOspfTimersAnnotations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VrfRelationToOspfTimersAnnotations | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VrfRelationToOspfTimersAnnotationsList extends cdktf.ComplexList {
  public internalValue? : VrfRelationToOspfTimersAnnotations[] | cdktf.IResolvable

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
  public get(index: number): VrfRelationToOspfTimersAnnotationsOutputReference {
    return new VrfRelationToOspfTimersAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfRelationToOspfTimersTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#key Vrf#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#value Vrf#value}
  */
  readonly value?: string;
}

export function vrfRelationToOspfTimersTagsToTerraform(struct?: VrfRelationToOspfTimersTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vrfRelationToOspfTimersTagsToHclTerraform(struct?: VrfRelationToOspfTimersTags | cdktf.IResolvable): any {
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

export class VrfRelationToOspfTimersTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfRelationToOspfTimersTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VrfRelationToOspfTimersTags | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VrfRelationToOspfTimersTagsList extends cdktf.ComplexList {
  public internalValue? : VrfRelationToOspfTimersTags[] | cdktf.IResolvable

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
  public get(index: number): VrfRelationToOspfTimersTagsOutputReference {
    return new VrfRelationToOspfTimersTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfRelationToOspfTimers {
  /**
  * The annotation of the Relation To OSPF Timers object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#annotation Vrf#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#annotations Vrf#annotations}
  */
  readonly annotations?: VrfRelationToOspfTimersAnnotations[] | cdktf.IResolvable;
  /**
  * The name of the OSPF timers policy associated with this context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#ospf_timers_name Vrf#ospf_timers_name}
  */
  readonly ospfTimersName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#tags Vrf#tags}
  */
  readonly tags?: VrfRelationToOspfTimersTags[] | cdktf.IResolvable;
}

export function vrfRelationToOspfTimersToTerraform(struct?: VrfRelationToOspfTimers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(vrfRelationToOspfTimersAnnotationsToTerraform, false)(struct!.annotations),
    ospf_timers_name: cdktf.stringToTerraform(struct!.ospfTimersName),
    tags: cdktf.listMapper(vrfRelationToOspfTimersTagsToTerraform, false)(struct!.tags),
  }
}


export function vrfRelationToOspfTimersToHclTerraform(struct?: VrfRelationToOspfTimers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation: {
      value: cdktf.stringToHclTerraform(struct!.annotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotations: {
      value: cdktf.listMapperHcl(vrfRelationToOspfTimersAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "VrfRelationToOspfTimersAnnotationsList",
    },
    ospf_timers_name: {
      value: cdktf.stringToHclTerraform(struct!.ospfTimersName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(vrfRelationToOspfTimersTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "VrfRelationToOspfTimersTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfRelationToOspfTimersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VrfRelationToOspfTimers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._ospfTimersName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfTimersName = this._ospfTimersName;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfRelationToOspfTimers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._ospfTimersName = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._ospfTimersName = value.ospfTimersName;
      this._tags.internalValue = value.tags;
    }
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
  private _annotations = new VrfRelationToOspfTimersAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: VrfRelationToOspfTimersAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // ospf_timers_name - computed: true, optional: true, required: false
  private _ospfTimersName?: string; 
  public get ospfTimersName() {
    return this.getStringAttribute('ospf_timers_name');
  }
  public set ospfTimersName(value: string) {
    this._ospfTimersName = value;
  }
  public resetOspfTimersName() {
    this._ospfTimersName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfTimersNameInput() {
    return this._ospfTimersName;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new VrfRelationToOspfTimersTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: VrfRelationToOspfTimersTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface VrfRelationToWanVpnAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#key Vrf#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#value Vrf#value}
  */
  readonly value?: string;
}

export function vrfRelationToWanVpnAnnotationsToTerraform(struct?: VrfRelationToWanVpnAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vrfRelationToWanVpnAnnotationsToHclTerraform(struct?: VrfRelationToWanVpnAnnotations | cdktf.IResolvable): any {
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

export class VrfRelationToWanVpnAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfRelationToWanVpnAnnotations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VrfRelationToWanVpnAnnotations | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VrfRelationToWanVpnAnnotationsList extends cdktf.ComplexList {
  public internalValue? : VrfRelationToWanVpnAnnotations[] | cdktf.IResolvable

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
  public get(index: number): VrfRelationToWanVpnAnnotationsOutputReference {
    return new VrfRelationToWanVpnAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfRelationToWanVpnTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#key Vrf#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#value Vrf#value}
  */
  readonly value?: string;
}

export function vrfRelationToWanVpnTagsToTerraform(struct?: VrfRelationToWanVpnTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vrfRelationToWanVpnTagsToHclTerraform(struct?: VrfRelationToWanVpnTags | cdktf.IResolvable): any {
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

export class VrfRelationToWanVpnTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfRelationToWanVpnTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VrfRelationToWanVpnTags | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VrfRelationToWanVpnTagsList extends cdktf.ComplexList {
  public internalValue? : VrfRelationToWanVpnTags[] | cdktf.IResolvable

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
  public get(index: number): VrfRelationToWanVpnTagsOutputReference {
    return new VrfRelationToWanVpnTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfRelationToWanVpn {
  /**
  * The annotation of the Relation From VRF To WAN VPN object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#annotation Vrf#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#annotations Vrf#annotations}
  */
  readonly annotations?: VrfRelationToWanVpnAnnotations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#tags Vrf#tags}
  */
  readonly tags?: VrfRelationToWanVpnTags[] | cdktf.IResolvable;
  /**
  * The distinguished name of the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#target_dn Vrf#target_dn}
  */
  readonly targetDn?: string;
}

export function vrfRelationToWanVpnToTerraform(struct?: VrfRelationToWanVpn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(vrfRelationToWanVpnAnnotationsToTerraform, false)(struct!.annotations),
    tags: cdktf.listMapper(vrfRelationToWanVpnTagsToTerraform, false)(struct!.tags),
    target_dn: cdktf.stringToTerraform(struct!.targetDn),
  }
}


export function vrfRelationToWanVpnToHclTerraform(struct?: VrfRelationToWanVpn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation: {
      value: cdktf.stringToHclTerraform(struct!.annotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotations: {
      value: cdktf.listMapperHcl(vrfRelationToWanVpnAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "VrfRelationToWanVpnAnnotationsList",
    },
    tags: {
      value: cdktf.listMapperHcl(vrfRelationToWanVpnTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "VrfRelationToWanVpnTagsList",
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

export class VrfRelationToWanVpnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VrfRelationToWanVpn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._targetDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDn = this._targetDn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfRelationToWanVpn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._tags.internalValue = undefined;
      this._targetDn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._tags.internalValue = value.tags;
      this._targetDn = value.targetDn;
    }
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
  private _annotations = new VrfRelationToWanVpnAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: VrfRelationToWanVpnAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new VrfRelationToWanVpnTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: VrfRelationToWanVpnTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // target_dn - computed: true, optional: true, required: false
  private _targetDn?: string; 
  public get targetDn() {
    return this.getStringAttribute('target_dn');
  }
  public set targetDn(value: string) {
    this._targetDn = value;
  }
  public resetTargetDn() {
    this._targetDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDnInput() {
    return this._targetDn;
  }
}
export interface VrfTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#key Vrf#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#value Vrf#value}
  */
  readonly value?: string;
}

export function vrfTagsToTerraform(struct?: VrfTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vrfTagsToHclTerraform(struct?: VrfTags | cdktf.IResolvable): any {
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

export class VrfTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VrfTags | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VrfTagsList extends cdktf.ComplexList {
  public internalValue? : VrfTags[] | cdktf.IResolvable

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
  public get(index: number): VrfTagsOutputReference {
    return new VrfTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfRelationFvRsCtxToBgpCtxAfPol {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#af Vrf#af}
  */
  readonly af?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#tn_bgp_ctx_af_pol_name Vrf#tn_bgp_ctx_af_pol_name}
  */
  readonly tnBgpCtxAfPolName?: string;
}

export function vrfRelationFvRsCtxToBgpCtxAfPolToTerraform(struct?: VrfRelationFvRsCtxToBgpCtxAfPol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    af: cdktf.stringToTerraform(struct!.af),
    tn_bgp_ctx_af_pol_name: cdktf.stringToTerraform(struct!.tnBgpCtxAfPolName),
  }
}


export function vrfRelationFvRsCtxToBgpCtxAfPolToHclTerraform(struct?: VrfRelationFvRsCtxToBgpCtxAfPol | cdktf.IResolvable): any {
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
    tn_bgp_ctx_af_pol_name: {
      value: cdktf.stringToHclTerraform(struct!.tnBgpCtxAfPolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfRelationFvRsCtxToBgpCtxAfPolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfRelationFvRsCtxToBgpCtxAfPol | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._af !== undefined) {
      hasAnyValues = true;
      internalValueResult.af = this._af;
    }
    if (this._tnBgpCtxAfPolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tnBgpCtxAfPolName = this._tnBgpCtxAfPolName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfRelationFvRsCtxToBgpCtxAfPol | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._af = undefined;
      this._tnBgpCtxAfPolName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._af = value.af;
      this._tnBgpCtxAfPolName = value.tnBgpCtxAfPolName;
    }
  }

  // af - computed: true, optional: true, required: false
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

  // tn_bgp_ctx_af_pol_name - computed: true, optional: true, required: false
  private _tnBgpCtxAfPolName?: string; 
  public get tnBgpCtxAfPolName() {
    return this.getStringAttribute('tn_bgp_ctx_af_pol_name');
  }
  public set tnBgpCtxAfPolName(value: string) {
    this._tnBgpCtxAfPolName = value;
  }
  public resetTnBgpCtxAfPolName() {
    this._tnBgpCtxAfPolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tnBgpCtxAfPolNameInput() {
    return this._tnBgpCtxAfPolName;
  }
}

export class VrfRelationFvRsCtxToBgpCtxAfPolList extends cdktf.ComplexList {
  public internalValue? : VrfRelationFvRsCtxToBgpCtxAfPol[] | cdktf.IResolvable

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
  public get(index: number): VrfRelationFvRsCtxToBgpCtxAfPolOutputReference {
    return new VrfRelationFvRsCtxToBgpCtxAfPolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfRelationFvRsCtxToEigrpCtxAfPol {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#af Vrf#af}
  */
  readonly af?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#tn_eigrp_ctx_af_pol_name Vrf#tn_eigrp_ctx_af_pol_name}
  */
  readonly tnEigrpCtxAfPolName?: string;
}

export function vrfRelationFvRsCtxToEigrpCtxAfPolToTerraform(struct?: VrfRelationFvRsCtxToEigrpCtxAfPol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    af: cdktf.stringToTerraform(struct!.af),
    tn_eigrp_ctx_af_pol_name: cdktf.stringToTerraform(struct!.tnEigrpCtxAfPolName),
  }
}


export function vrfRelationFvRsCtxToEigrpCtxAfPolToHclTerraform(struct?: VrfRelationFvRsCtxToEigrpCtxAfPol | cdktf.IResolvable): any {
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
    tn_eigrp_ctx_af_pol_name: {
      value: cdktf.stringToHclTerraform(struct!.tnEigrpCtxAfPolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfRelationFvRsCtxToEigrpCtxAfPolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfRelationFvRsCtxToEigrpCtxAfPol | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._af !== undefined) {
      hasAnyValues = true;
      internalValueResult.af = this._af;
    }
    if (this._tnEigrpCtxAfPolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tnEigrpCtxAfPolName = this._tnEigrpCtxAfPolName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfRelationFvRsCtxToEigrpCtxAfPol | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._af = undefined;
      this._tnEigrpCtxAfPolName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._af = value.af;
      this._tnEigrpCtxAfPolName = value.tnEigrpCtxAfPolName;
    }
  }

  // af - computed: true, optional: true, required: false
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

  // tn_eigrp_ctx_af_pol_name - computed: true, optional: true, required: false
  private _tnEigrpCtxAfPolName?: string; 
  public get tnEigrpCtxAfPolName() {
    return this.getStringAttribute('tn_eigrp_ctx_af_pol_name');
  }
  public set tnEigrpCtxAfPolName(value: string) {
    this._tnEigrpCtxAfPolName = value;
  }
  public resetTnEigrpCtxAfPolName() {
    this._tnEigrpCtxAfPolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tnEigrpCtxAfPolNameInput() {
    return this._tnEigrpCtxAfPolName;
  }
}

export class VrfRelationFvRsCtxToEigrpCtxAfPolList extends cdktf.ComplexList {
  public internalValue? : VrfRelationFvRsCtxToEigrpCtxAfPol[] | cdktf.IResolvable

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
  public get(index: number): VrfRelationFvRsCtxToEigrpCtxAfPolOutputReference {
    return new VrfRelationFvRsCtxToEigrpCtxAfPolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfRelationFvRsCtxToOspfCtxPol {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#af Vrf#af}
  */
  readonly af?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#tn_ospf_ctx_pol_name Vrf#tn_ospf_ctx_pol_name}
  */
  readonly tnOspfCtxPolName?: string;
}

export function vrfRelationFvRsCtxToOspfCtxPolToTerraform(struct?: VrfRelationFvRsCtxToOspfCtxPol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    af: cdktf.stringToTerraform(struct!.af),
    tn_ospf_ctx_pol_name: cdktf.stringToTerraform(struct!.tnOspfCtxPolName),
  }
}


export function vrfRelationFvRsCtxToOspfCtxPolToHclTerraform(struct?: VrfRelationFvRsCtxToOspfCtxPol | cdktf.IResolvable): any {
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
    tn_ospf_ctx_pol_name: {
      value: cdktf.stringToHclTerraform(struct!.tnOspfCtxPolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfRelationFvRsCtxToOspfCtxPolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfRelationFvRsCtxToOspfCtxPol | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._af !== undefined) {
      hasAnyValues = true;
      internalValueResult.af = this._af;
    }
    if (this._tnOspfCtxPolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tnOspfCtxPolName = this._tnOspfCtxPolName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfRelationFvRsCtxToOspfCtxPol | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._af = undefined;
      this._tnOspfCtxPolName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._af = value.af;
      this._tnOspfCtxPolName = value.tnOspfCtxPolName;
    }
  }

  // af - computed: true, optional: true, required: false
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

  // tn_ospf_ctx_pol_name - computed: true, optional: true, required: false
  private _tnOspfCtxPolName?: string; 
  public get tnOspfCtxPolName() {
    return this.getStringAttribute('tn_ospf_ctx_pol_name');
  }
  public set tnOspfCtxPolName(value: string) {
    this._tnOspfCtxPolName = value;
  }
  public resetTnOspfCtxPolName() {
    this._tnOspfCtxPolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tnOspfCtxPolNameInput() {
    return this._tnOspfCtxPolName;
  }
}

export class VrfRelationFvRsCtxToOspfCtxPolList extends cdktf.ComplexList {
  public internalValue? : VrfRelationFvRsCtxToOspfCtxPol[] | cdktf.IResolvable

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
  public get(index: number): VrfRelationFvRsCtxToOspfCtxPolOutputReference {
    return new VrfRelationFvRsCtxToOspfCtxPolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf aci_vrf}
*/
export class Vrf extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_vrf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vrf resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vrf to import
  * @param importFromId The id of the existing Vrf that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vrf to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_vrf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vrf aci_vrf} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VrfConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VrfConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aci_vrf',
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
    this._annotations.internalValue = config.annotations;
    this._bdEnforcedEnable = config.bdEnforcedEnable;
    this._bdEnforcement = config.bdEnforcement;
    this._description = config.description;
    this._ipDataPlaneLearning = config.ipDataPlaneLearning;
    this._knwMcastAct = config.knwMcastAct;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._ownerKey = config.ownerKey;
    this._ownerTag = config.ownerTag;
    this._parentDn = config.parentDn;
    this._pcEnfDir = config.pcEnfDir;
    this._pcEnfPref = config.pcEnfPref;
    this._policyControlEnforcementDirection = config.policyControlEnforcementDirection;
    this._policyControlEnforcementMode = config.policyControlEnforcementMode;
    this._relationFvRsBgpCtxPol = config.relationFvRsBgpCtxPol;
    this._relationFvRsCtxMcastTo = config.relationFvRsCtxMcastTo;
    this._relationFvRsCtxMonPol = config.relationFvRsCtxMonPol;
    this._relationFvRsCtxToEpRet = config.relationFvRsCtxToEpRet;
    this._relationFvRsCtxToExtRouteTagPol = config.relationFvRsCtxToExtRouteTagPol;
    this._relationFvRsOspfCtxPol = config.relationFvRsOspfCtxPol;
    this._relationFvRsVrfValidationPol = config.relationFvRsVrfValidationPol;
    this._relationToAddressFamilyOspfTimers.internalValue = config.relationToAddressFamilyOspfTimers;
    this._relationToBgpAddressFamilyContexts.internalValue = config.relationToBgpAddressFamilyContexts;
    this._relationToBgpTimers.internalValue = config.relationToBgpTimers;
    this._relationToEigrpAddressFamilyContexts.internalValue = config.relationToEigrpAddressFamilyContexts;
    this._relationToEndPointRetentionPolicy.internalValue = config.relationToEndPointRetentionPolicy;
    this._relationToL3OutRouteTagPolicy.internalValue = config.relationToL3OutRouteTagPolicy;
    this._relationToMonitoringPolicy.internalValue = config.relationToMonitoringPolicy;
    this._relationToOspfTimers.internalValue = config.relationToOspfTimers;
    this._relationToWanVpn.internalValue = config.relationToWanVpn;
    this._tags.internalValue = config.tags;
    this._tenantDn = config.tenantDn;
    this._relationFvRsCtxToBgpCtxAfPol.internalValue = config.relationFvRsCtxToBgpCtxAfPol;
    this._relationFvRsCtxToEigrpCtxAfPol.internalValue = config.relationFvRsCtxToEigrpCtxAfPol;
    this._relationFvRsCtxToOspfCtxPol.internalValue = config.relationFvRsCtxToOspfCtxPol;
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
  private _annotations = new VrfAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: VrfAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // bd_enforced_enable - computed: true, optional: true, required: false
  private _bdEnforcedEnable?: string; 
  public get bdEnforcedEnable() {
    return this.getStringAttribute('bd_enforced_enable');
  }
  public set bdEnforcedEnable(value: string) {
    this._bdEnforcedEnable = value;
  }
  public resetBdEnforcedEnable() {
    this._bdEnforcedEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bdEnforcedEnableInput() {
    return this._bdEnforcedEnable;
  }

  // bd_enforcement - computed: true, optional: true, required: false
  private _bdEnforcement?: string; 
  public get bdEnforcement() {
    return this.getStringAttribute('bd_enforcement');
  }
  public set bdEnforcement(value: string) {
    this._bdEnforcement = value;
  }
  public resetBdEnforcement() {
    this._bdEnforcement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bdEnforcementInput() {
    return this._bdEnforcement;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_data_plane_learning - computed: true, optional: true, required: false
  private _ipDataPlaneLearning?: string; 
  public get ipDataPlaneLearning() {
    return this.getStringAttribute('ip_data_plane_learning');
  }
  public set ipDataPlaneLearning(value: string) {
    this._ipDataPlaneLearning = value;
  }
  public resetIpDataPlaneLearning() {
    this._ipDataPlaneLearning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDataPlaneLearningInput() {
    return this._ipDataPlaneLearning;
  }

  // knw_mcast_act - computed: true, optional: true, required: false
  private _knwMcastAct?: string; 
  public get knwMcastAct() {
    return this.getStringAttribute('knw_mcast_act');
  }
  public set knwMcastAct(value: string) {
    this._knwMcastAct = value;
  }
  public resetKnwMcastAct() {
    this._knwMcastAct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knwMcastActInput() {
    return this._knwMcastAct;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
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

  // pc_enf_dir - computed: true, optional: true, required: false
  private _pcEnfDir?: string; 
  public get pcEnfDir() {
    return this.getStringAttribute('pc_enf_dir');
  }
  public set pcEnfDir(value: string) {
    this._pcEnfDir = value;
  }
  public resetPcEnfDir() {
    this._pcEnfDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcEnfDirInput() {
    return this._pcEnfDir;
  }

  // pc_enf_pref - computed: true, optional: true, required: false
  private _pcEnfPref?: string; 
  public get pcEnfPref() {
    return this.getStringAttribute('pc_enf_pref');
  }
  public set pcEnfPref(value: string) {
    this._pcEnfPref = value;
  }
  public resetPcEnfPref() {
    this._pcEnfPref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcEnfPrefInput() {
    return this._pcEnfPref;
  }

  // pc_tag - computed: true, optional: false, required: false
  public get pcTag() {
    return this.getStringAttribute('pc_tag');
  }

  // policy_control_enforcement_direction - computed: true, optional: true, required: false
  private _policyControlEnforcementDirection?: string; 
  public get policyControlEnforcementDirection() {
    return this.getStringAttribute('policy_control_enforcement_direction');
  }
  public set policyControlEnforcementDirection(value: string) {
    this._policyControlEnforcementDirection = value;
  }
  public resetPolicyControlEnforcementDirection() {
    this._policyControlEnforcementDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyControlEnforcementDirectionInput() {
    return this._policyControlEnforcementDirection;
  }

  // policy_control_enforcement_mode - computed: true, optional: true, required: false
  private _policyControlEnforcementMode?: string; 
  public get policyControlEnforcementMode() {
    return this.getStringAttribute('policy_control_enforcement_mode');
  }
  public set policyControlEnforcementMode(value: string) {
    this._policyControlEnforcementMode = value;
  }
  public resetPolicyControlEnforcementMode() {
    this._policyControlEnforcementMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyControlEnforcementModeInput() {
    return this._policyControlEnforcementMode;
  }

  // relation_fv_rs_bgp_ctx_pol - computed: true, optional: true, required: false
  private _relationFvRsBgpCtxPol?: string; 
  public get relationFvRsBgpCtxPol() {
    return this.getStringAttribute('relation_fv_rs_bgp_ctx_pol');
  }
  public set relationFvRsBgpCtxPol(value: string) {
    this._relationFvRsBgpCtxPol = value;
  }
  public resetRelationFvRsBgpCtxPol() {
    this._relationFvRsBgpCtxPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsBgpCtxPolInput() {
    return this._relationFvRsBgpCtxPol;
  }

  // relation_fv_rs_ctx_mcast_to - computed: true, optional: true, required: false
  private _relationFvRsCtxMcastTo?: string[]; 
  public get relationFvRsCtxMcastTo() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_fv_rs_ctx_mcast_to'));
  }
  public set relationFvRsCtxMcastTo(value: string[]) {
    this._relationFvRsCtxMcastTo = value;
  }
  public resetRelationFvRsCtxMcastTo() {
    this._relationFvRsCtxMcastTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsCtxMcastToInput() {
    return this._relationFvRsCtxMcastTo;
  }

  // relation_fv_rs_ctx_mon_pol - computed: true, optional: true, required: false
  private _relationFvRsCtxMonPol?: string; 
  public get relationFvRsCtxMonPol() {
    return this.getStringAttribute('relation_fv_rs_ctx_mon_pol');
  }
  public set relationFvRsCtxMonPol(value: string) {
    this._relationFvRsCtxMonPol = value;
  }
  public resetRelationFvRsCtxMonPol() {
    this._relationFvRsCtxMonPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsCtxMonPolInput() {
    return this._relationFvRsCtxMonPol;
  }

  // relation_fv_rs_ctx_to_ep_ret - computed: true, optional: true, required: false
  private _relationFvRsCtxToEpRet?: string; 
  public get relationFvRsCtxToEpRet() {
    return this.getStringAttribute('relation_fv_rs_ctx_to_ep_ret');
  }
  public set relationFvRsCtxToEpRet(value: string) {
    this._relationFvRsCtxToEpRet = value;
  }
  public resetRelationFvRsCtxToEpRet() {
    this._relationFvRsCtxToEpRet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsCtxToEpRetInput() {
    return this._relationFvRsCtxToEpRet;
  }

  // relation_fv_rs_ctx_to_ext_route_tag_pol - computed: true, optional: true, required: false
  private _relationFvRsCtxToExtRouteTagPol?: string; 
  public get relationFvRsCtxToExtRouteTagPol() {
    return this.getStringAttribute('relation_fv_rs_ctx_to_ext_route_tag_pol');
  }
  public set relationFvRsCtxToExtRouteTagPol(value: string) {
    this._relationFvRsCtxToExtRouteTagPol = value;
  }
  public resetRelationFvRsCtxToExtRouteTagPol() {
    this._relationFvRsCtxToExtRouteTagPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsCtxToExtRouteTagPolInput() {
    return this._relationFvRsCtxToExtRouteTagPol;
  }

  // relation_fv_rs_ospf_ctx_pol - computed: true, optional: true, required: false
  private _relationFvRsOspfCtxPol?: string; 
  public get relationFvRsOspfCtxPol() {
    return this.getStringAttribute('relation_fv_rs_ospf_ctx_pol');
  }
  public set relationFvRsOspfCtxPol(value: string) {
    this._relationFvRsOspfCtxPol = value;
  }
  public resetRelationFvRsOspfCtxPol() {
    this._relationFvRsOspfCtxPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsOspfCtxPolInput() {
    return this._relationFvRsOspfCtxPol;
  }

  // relation_fv_rs_vrf_validation_pol - computed: true, optional: true, required: false
  private _relationFvRsVrfValidationPol?: string; 
  public get relationFvRsVrfValidationPol() {
    return this.getStringAttribute('relation_fv_rs_vrf_validation_pol');
  }
  public set relationFvRsVrfValidationPol(value: string) {
    this._relationFvRsVrfValidationPol = value;
  }
  public resetRelationFvRsVrfValidationPol() {
    this._relationFvRsVrfValidationPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsVrfValidationPolInput() {
    return this._relationFvRsVrfValidationPol;
  }

  // relation_to_address_family_ospf_timers - computed: true, optional: true, required: false
  private _relationToAddressFamilyOspfTimers = new VrfRelationToAddressFamilyOspfTimersList(this, "relation_to_address_family_ospf_timers", true);
  public get relationToAddressFamilyOspfTimers() {
    return this._relationToAddressFamilyOspfTimers;
  }
  public putRelationToAddressFamilyOspfTimers(value: VrfRelationToAddressFamilyOspfTimers[] | cdktf.IResolvable) {
    this._relationToAddressFamilyOspfTimers.internalValue = value;
  }
  public resetRelationToAddressFamilyOspfTimers() {
    this._relationToAddressFamilyOspfTimers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationToAddressFamilyOspfTimersInput() {
    return this._relationToAddressFamilyOspfTimers.internalValue;
  }

  // relation_to_bgp_address_family_contexts - computed: true, optional: true, required: false
  private _relationToBgpAddressFamilyContexts = new VrfRelationToBgpAddressFamilyContextsList(this, "relation_to_bgp_address_family_contexts", true);
  public get relationToBgpAddressFamilyContexts() {
    return this._relationToBgpAddressFamilyContexts;
  }
  public putRelationToBgpAddressFamilyContexts(value: VrfRelationToBgpAddressFamilyContexts[] | cdktf.IResolvable) {
    this._relationToBgpAddressFamilyContexts.internalValue = value;
  }
  public resetRelationToBgpAddressFamilyContexts() {
    this._relationToBgpAddressFamilyContexts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationToBgpAddressFamilyContextsInput() {
    return this._relationToBgpAddressFamilyContexts.internalValue;
  }

  // relation_to_bgp_timers - computed: true, optional: true, required: false
  private _relationToBgpTimers = new VrfRelationToBgpTimersOutputReference(this, "relation_to_bgp_timers");
  public get relationToBgpTimers() {
    return this._relationToBgpTimers;
  }
  public putRelationToBgpTimers(value: VrfRelationToBgpTimers) {
    this._relationToBgpTimers.internalValue = value;
  }
  public resetRelationToBgpTimers() {
    this._relationToBgpTimers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationToBgpTimersInput() {
    return this._relationToBgpTimers.internalValue;
  }

  // relation_to_eigrp_address_family_contexts - computed: true, optional: true, required: false
  private _relationToEigrpAddressFamilyContexts = new VrfRelationToEigrpAddressFamilyContextsList(this, "relation_to_eigrp_address_family_contexts", true);
  public get relationToEigrpAddressFamilyContexts() {
    return this._relationToEigrpAddressFamilyContexts;
  }
  public putRelationToEigrpAddressFamilyContexts(value: VrfRelationToEigrpAddressFamilyContexts[] | cdktf.IResolvable) {
    this._relationToEigrpAddressFamilyContexts.internalValue = value;
  }
  public resetRelationToEigrpAddressFamilyContexts() {
    this._relationToEigrpAddressFamilyContexts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationToEigrpAddressFamilyContextsInput() {
    return this._relationToEigrpAddressFamilyContexts.internalValue;
  }

  // relation_to_end_point_retention_policy - computed: true, optional: true, required: false
  private _relationToEndPointRetentionPolicy = new VrfRelationToEndPointRetentionPolicyOutputReference(this, "relation_to_end_point_retention_policy");
  public get relationToEndPointRetentionPolicy() {
    return this._relationToEndPointRetentionPolicy;
  }
  public putRelationToEndPointRetentionPolicy(value: VrfRelationToEndPointRetentionPolicy) {
    this._relationToEndPointRetentionPolicy.internalValue = value;
  }
  public resetRelationToEndPointRetentionPolicy() {
    this._relationToEndPointRetentionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationToEndPointRetentionPolicyInput() {
    return this._relationToEndPointRetentionPolicy.internalValue;
  }

  // relation_to_l3out_route_tag_policy - computed: true, optional: true, required: false
  private _relationToL3OutRouteTagPolicy = new VrfRelationToL3OutRouteTagPolicyOutputReference(this, "relation_to_l3out_route_tag_policy");
  public get relationToL3OutRouteTagPolicy() {
    return this._relationToL3OutRouteTagPolicy;
  }
  public putRelationToL3OutRouteTagPolicy(value: VrfRelationToL3OutRouteTagPolicy) {
    this._relationToL3OutRouteTagPolicy.internalValue = value;
  }
  public resetRelationToL3OutRouteTagPolicy() {
    this._relationToL3OutRouteTagPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationToL3OutRouteTagPolicyInput() {
    return this._relationToL3OutRouteTagPolicy.internalValue;
  }

  // relation_to_monitoring_policy - computed: true, optional: true, required: false
  private _relationToMonitoringPolicy = new VrfRelationToMonitoringPolicyOutputReference(this, "relation_to_monitoring_policy");
  public get relationToMonitoringPolicy() {
    return this._relationToMonitoringPolicy;
  }
  public putRelationToMonitoringPolicy(value: VrfRelationToMonitoringPolicy) {
    this._relationToMonitoringPolicy.internalValue = value;
  }
  public resetRelationToMonitoringPolicy() {
    this._relationToMonitoringPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationToMonitoringPolicyInput() {
    return this._relationToMonitoringPolicy.internalValue;
  }

  // relation_to_ospf_timers - computed: true, optional: true, required: false
  private _relationToOspfTimers = new VrfRelationToOspfTimersOutputReference(this, "relation_to_ospf_timers");
  public get relationToOspfTimers() {
    return this._relationToOspfTimers;
  }
  public putRelationToOspfTimers(value: VrfRelationToOspfTimers) {
    this._relationToOspfTimers.internalValue = value;
  }
  public resetRelationToOspfTimers() {
    this._relationToOspfTimers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationToOspfTimersInput() {
    return this._relationToOspfTimers.internalValue;
  }

  // relation_to_wan_vpn - computed: true, optional: true, required: false
  private _relationToWanVpn = new VrfRelationToWanVpnOutputReference(this, "relation_to_wan_vpn");
  public get relationToWanVpn() {
    return this._relationToWanVpn;
  }
  public putRelationToWanVpn(value: VrfRelationToWanVpn) {
    this._relationToWanVpn.internalValue = value;
  }
  public resetRelationToWanVpn() {
    this._relationToWanVpn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationToWanVpnInput() {
    return this._relationToWanVpn.internalValue;
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new VrfTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: VrfTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // tenant_dn - computed: true, optional: true, required: false
  private _tenantDn?: string; 
  public get tenantDn() {
    return this.getStringAttribute('tenant_dn');
  }
  public set tenantDn(value: string) {
    this._tenantDn = value;
  }
  public resetTenantDn() {
    this._tenantDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantDnInput() {
    return this._tenantDn;
  }

  // relation_fv_rs_ctx_to_bgp_ctx_af_pol - computed: false, optional: true, required: false
  private _relationFvRsCtxToBgpCtxAfPol = new VrfRelationFvRsCtxToBgpCtxAfPolList(this, "relation_fv_rs_ctx_to_bgp_ctx_af_pol", true);
  public get relationFvRsCtxToBgpCtxAfPol() {
    return this._relationFvRsCtxToBgpCtxAfPol;
  }
  public putRelationFvRsCtxToBgpCtxAfPol(value: VrfRelationFvRsCtxToBgpCtxAfPol[] | cdktf.IResolvable) {
    this._relationFvRsCtxToBgpCtxAfPol.internalValue = value;
  }
  public resetRelationFvRsCtxToBgpCtxAfPol() {
    this._relationFvRsCtxToBgpCtxAfPol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsCtxToBgpCtxAfPolInput() {
    return this._relationFvRsCtxToBgpCtxAfPol.internalValue;
  }

  // relation_fv_rs_ctx_to_eigrp_ctx_af_pol - computed: false, optional: true, required: false
  private _relationFvRsCtxToEigrpCtxAfPol = new VrfRelationFvRsCtxToEigrpCtxAfPolList(this, "relation_fv_rs_ctx_to_eigrp_ctx_af_pol", true);
  public get relationFvRsCtxToEigrpCtxAfPol() {
    return this._relationFvRsCtxToEigrpCtxAfPol;
  }
  public putRelationFvRsCtxToEigrpCtxAfPol(value: VrfRelationFvRsCtxToEigrpCtxAfPol[] | cdktf.IResolvable) {
    this._relationFvRsCtxToEigrpCtxAfPol.internalValue = value;
  }
  public resetRelationFvRsCtxToEigrpCtxAfPol() {
    this._relationFvRsCtxToEigrpCtxAfPol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsCtxToEigrpCtxAfPolInput() {
    return this._relationFvRsCtxToEigrpCtxAfPol.internalValue;
  }

  // relation_fv_rs_ctx_to_ospf_ctx_pol - computed: false, optional: true, required: false
  private _relationFvRsCtxToOspfCtxPol = new VrfRelationFvRsCtxToOspfCtxPolList(this, "relation_fv_rs_ctx_to_ospf_ctx_pol", true);
  public get relationFvRsCtxToOspfCtxPol() {
    return this._relationFvRsCtxToOspfCtxPol;
  }
  public putRelationFvRsCtxToOspfCtxPol(value: VrfRelationFvRsCtxToOspfCtxPol[] | cdktf.IResolvable) {
    this._relationFvRsCtxToOspfCtxPol.internalValue = value;
  }
  public resetRelationFvRsCtxToOspfCtxPol() {
    this._relationFvRsCtxToOspfCtxPol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsCtxToOspfCtxPolInput() {
    return this._relationFvRsCtxToOspfCtxPol.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      annotations: cdktf.listMapper(vrfAnnotationsToTerraform, false)(this._annotations.internalValue),
      bd_enforced_enable: cdktf.stringToTerraform(this._bdEnforcedEnable),
      bd_enforcement: cdktf.stringToTerraform(this._bdEnforcement),
      description: cdktf.stringToTerraform(this._description),
      ip_data_plane_learning: cdktf.stringToTerraform(this._ipDataPlaneLearning),
      knw_mcast_act: cdktf.stringToTerraform(this._knwMcastAct),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      owner_key: cdktf.stringToTerraform(this._ownerKey),
      owner_tag: cdktf.stringToTerraform(this._ownerTag),
      parent_dn: cdktf.stringToTerraform(this._parentDn),
      pc_enf_dir: cdktf.stringToTerraform(this._pcEnfDir),
      pc_enf_pref: cdktf.stringToTerraform(this._pcEnfPref),
      policy_control_enforcement_direction: cdktf.stringToTerraform(this._policyControlEnforcementDirection),
      policy_control_enforcement_mode: cdktf.stringToTerraform(this._policyControlEnforcementMode),
      relation_fv_rs_bgp_ctx_pol: cdktf.stringToTerraform(this._relationFvRsBgpCtxPol),
      relation_fv_rs_ctx_mcast_to: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationFvRsCtxMcastTo),
      relation_fv_rs_ctx_mon_pol: cdktf.stringToTerraform(this._relationFvRsCtxMonPol),
      relation_fv_rs_ctx_to_ep_ret: cdktf.stringToTerraform(this._relationFvRsCtxToEpRet),
      relation_fv_rs_ctx_to_ext_route_tag_pol: cdktf.stringToTerraform(this._relationFvRsCtxToExtRouteTagPol),
      relation_fv_rs_ospf_ctx_pol: cdktf.stringToTerraform(this._relationFvRsOspfCtxPol),
      relation_fv_rs_vrf_validation_pol: cdktf.stringToTerraform(this._relationFvRsVrfValidationPol),
      relation_to_address_family_ospf_timers: cdktf.listMapper(vrfRelationToAddressFamilyOspfTimersToTerraform, false)(this._relationToAddressFamilyOspfTimers.internalValue),
      relation_to_bgp_address_family_contexts: cdktf.listMapper(vrfRelationToBgpAddressFamilyContextsToTerraform, false)(this._relationToBgpAddressFamilyContexts.internalValue),
      relation_to_bgp_timers: vrfRelationToBgpTimersToTerraform(this._relationToBgpTimers.internalValue),
      relation_to_eigrp_address_family_contexts: cdktf.listMapper(vrfRelationToEigrpAddressFamilyContextsToTerraform, false)(this._relationToEigrpAddressFamilyContexts.internalValue),
      relation_to_end_point_retention_policy: vrfRelationToEndPointRetentionPolicyToTerraform(this._relationToEndPointRetentionPolicy.internalValue),
      relation_to_l3out_route_tag_policy: vrfRelationToL3OutRouteTagPolicyToTerraform(this._relationToL3OutRouteTagPolicy.internalValue),
      relation_to_monitoring_policy: vrfRelationToMonitoringPolicyToTerraform(this._relationToMonitoringPolicy.internalValue),
      relation_to_ospf_timers: vrfRelationToOspfTimersToTerraform(this._relationToOspfTimers.internalValue),
      relation_to_wan_vpn: vrfRelationToWanVpnToTerraform(this._relationToWanVpn.internalValue),
      tags: cdktf.listMapper(vrfTagsToTerraform, false)(this._tags.internalValue),
      tenant_dn: cdktf.stringToTerraform(this._tenantDn),
      relation_fv_rs_ctx_to_bgp_ctx_af_pol: cdktf.listMapper(vrfRelationFvRsCtxToBgpCtxAfPolToTerraform, true)(this._relationFvRsCtxToBgpCtxAfPol.internalValue),
      relation_fv_rs_ctx_to_eigrp_ctx_af_pol: cdktf.listMapper(vrfRelationFvRsCtxToEigrpCtxAfPolToTerraform, true)(this._relationFvRsCtxToEigrpCtxAfPol.internalValue),
      relation_fv_rs_ctx_to_ospf_ctx_pol: cdktf.listMapper(vrfRelationFvRsCtxToOspfCtxPolToTerraform, true)(this._relationFvRsCtxToOspfCtxPol.internalValue),
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
        value: cdktf.listMapperHcl(vrfAnnotationsToHclTerraform, false)(this._annotations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VrfAnnotationsList",
      },
      bd_enforced_enable: {
        value: cdktf.stringToHclTerraform(this._bdEnforcedEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bd_enforcement: {
        value: cdktf.stringToHclTerraform(this._bdEnforcement),
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
      ip_data_plane_learning: {
        value: cdktf.stringToHclTerraform(this._ipDataPlaneLearning),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      knw_mcast_act: {
        value: cdktf.stringToHclTerraform(this._knwMcastAct),
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
      pc_enf_dir: {
        value: cdktf.stringToHclTerraform(this._pcEnfDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pc_enf_pref: {
        value: cdktf.stringToHclTerraform(this._pcEnfPref),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_control_enforcement_direction: {
        value: cdktf.stringToHclTerraform(this._policyControlEnforcementDirection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_control_enforcement_mode: {
        value: cdktf.stringToHclTerraform(this._policyControlEnforcementMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_fv_rs_bgp_ctx_pol: {
        value: cdktf.stringToHclTerraform(this._relationFvRsBgpCtxPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_fv_rs_ctx_mcast_to: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._relationFvRsCtxMcastTo),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      relation_fv_rs_ctx_mon_pol: {
        value: cdktf.stringToHclTerraform(this._relationFvRsCtxMonPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_fv_rs_ctx_to_ep_ret: {
        value: cdktf.stringToHclTerraform(this._relationFvRsCtxToEpRet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_fv_rs_ctx_to_ext_route_tag_pol: {
        value: cdktf.stringToHclTerraform(this._relationFvRsCtxToExtRouteTagPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_fv_rs_ospf_ctx_pol: {
        value: cdktf.stringToHclTerraform(this._relationFvRsOspfCtxPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_fv_rs_vrf_validation_pol: {
        value: cdktf.stringToHclTerraform(this._relationFvRsVrfValidationPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_to_address_family_ospf_timers: {
        value: cdktf.listMapperHcl(vrfRelationToAddressFamilyOspfTimersToHclTerraform, false)(this._relationToAddressFamilyOspfTimers.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VrfRelationToAddressFamilyOspfTimersList",
      },
      relation_to_bgp_address_family_contexts: {
        value: cdktf.listMapperHcl(vrfRelationToBgpAddressFamilyContextsToHclTerraform, false)(this._relationToBgpAddressFamilyContexts.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VrfRelationToBgpAddressFamilyContextsList",
      },
      relation_to_bgp_timers: {
        value: vrfRelationToBgpTimersToHclTerraform(this._relationToBgpTimers.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VrfRelationToBgpTimers",
      },
      relation_to_eigrp_address_family_contexts: {
        value: cdktf.listMapperHcl(vrfRelationToEigrpAddressFamilyContextsToHclTerraform, false)(this._relationToEigrpAddressFamilyContexts.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VrfRelationToEigrpAddressFamilyContextsList",
      },
      relation_to_end_point_retention_policy: {
        value: vrfRelationToEndPointRetentionPolicyToHclTerraform(this._relationToEndPointRetentionPolicy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VrfRelationToEndPointRetentionPolicy",
      },
      relation_to_l3out_route_tag_policy: {
        value: vrfRelationToL3OutRouteTagPolicyToHclTerraform(this._relationToL3OutRouteTagPolicy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VrfRelationToL3OutRouteTagPolicy",
      },
      relation_to_monitoring_policy: {
        value: vrfRelationToMonitoringPolicyToHclTerraform(this._relationToMonitoringPolicy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VrfRelationToMonitoringPolicy",
      },
      relation_to_ospf_timers: {
        value: vrfRelationToOspfTimersToHclTerraform(this._relationToOspfTimers.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VrfRelationToOspfTimers",
      },
      relation_to_wan_vpn: {
        value: vrfRelationToWanVpnToHclTerraform(this._relationToWanVpn.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VrfRelationToWanVpn",
      },
      tags: {
        value: cdktf.listMapperHcl(vrfTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VrfTagsList",
      },
      tenant_dn: {
        value: cdktf.stringToHclTerraform(this._tenantDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_fv_rs_ctx_to_bgp_ctx_af_pol: {
        value: cdktf.listMapperHcl(vrfRelationFvRsCtxToBgpCtxAfPolToHclTerraform, true)(this._relationFvRsCtxToBgpCtxAfPol.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VrfRelationFvRsCtxToBgpCtxAfPolList",
      },
      relation_fv_rs_ctx_to_eigrp_ctx_af_pol: {
        value: cdktf.listMapperHcl(vrfRelationFvRsCtxToEigrpCtxAfPolToHclTerraform, true)(this._relationFvRsCtxToEigrpCtxAfPol.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VrfRelationFvRsCtxToEigrpCtxAfPolList",
      },
      relation_fv_rs_ctx_to_ospf_ctx_pol: {
        value: cdktf.listMapperHcl(vrfRelationFvRsCtxToOspfCtxPolToHclTerraform, true)(this._relationFvRsCtxToOspfCtxPol.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VrfRelationFvRsCtxToOspfCtxPolList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
