// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/first_hop_security_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirstHopSecurityPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The annotation of the First Hop Security Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/first_hop_security_policy#annotation FirstHopSecurityPolicy#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/first_hop_security_policy#annotations FirstHopSecurityPolicy#annotations}
  */
  readonly annotations?: FirstHopSecurityPolicyAnnotations[] | cdktf.IResolvable;
  /**
  * The description of the First Hop Security Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/first_hop_security_policy#description FirstHopSecurityPolicy#description}
  */
  readonly description?: string;
  /**
  * The Inspection Status for IPv4 and IPv6 traffic of the First Hop Security Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/first_hop_security_policy#ip_inspection FirstHopSecurityPolicy#ip_inspection}
  */
  readonly ipInspection?: string;
  /**
  * The name of the First Hop Security Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/first_hop_security_policy#name FirstHopSecurityPolicy#name}
  */
  readonly name: string;
  /**
  * The name alias of the First Hop Security Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/first_hop_security_policy#name_alias FirstHopSecurityPolicy#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * The key for enabling clients to own their data for entity correlation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/first_hop_security_policy#owner_key FirstHopSecurityPolicy#owner_key}
  */
  readonly ownerKey?: string;
  /**
  * A tag for enabling clients to add their own data. For example, to indicate who created this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/first_hop_security_policy#owner_tag FirstHopSecurityPolicy#owner_tag}
  */
  readonly ownerTag?: string;
  /**
  * The distinguished name (DN) of the parent object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/first_hop_security_policy#parent_dn FirstHopSecurityPolicy#parent_dn}
  */
  readonly parentDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/first_hop_security_policy#route_advertisement_guard_policy FirstHopSecurityPolicy#route_advertisement_guard_policy}
  */
  readonly routeAdvertisementGuardPolicy?: FirstHopSecurityPolicyRouteAdvertisementGuardPolicy;
  /**
  * Enable Router Advertisement Guard for the First Hop Security Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/first_hop_security_policy#router_advertisement FirstHopSecurityPolicy#router_advertisement}
  */
  readonly routerAdvertisement?: string;
  /**
  * The Source Guard Status for IPv4 and IPv6 traffic of the First Hop Security Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/first_hop_security_policy#source_guard FirstHopSecurityPolicy#source_guard}
  */
  readonly sourceGuard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/first_hop_security_policy#tags FirstHopSecurityPolicy#tags}
  */
  readonly tags?: FirstHopSecurityPolicyTags[] | cdktf.IResolvable;
}
export interface FirstHopSecurityPolicyAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/first_hop_security_policy#key FirstHopSecurityPolicy#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/first_hop_security_policy#value FirstHopSecurityPolicy#value}
  */
  readonly value: string;
}

export function firstHopSecurityPolicyAnnotationsToTerraform(struct?: FirstHopSecurityPolicyAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function firstHopSecurityPolicyAnnotationsToHclTerraform(struct?: FirstHopSecurityPolicyAnnotations | cdktf.IResolvable): any {
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

export class FirstHopSecurityPolicyAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirstHopSecurityPolicyAnnotations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirstHopSecurityPolicyAnnotations | cdktf.IResolvable | undefined) {
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

export class FirstHopSecurityPolicyAnnotationsList extends cdktf.ComplexList {
  public internalValue? : FirstHopSecurityPolicyAnnotations[] | cdktf.IResolvable

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
  public get(index: number): FirstHopSecurityPolicyAnnotationsOutputReference {
    return new FirstHopSecurityPolicyAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirstHopSecurityPolicyRouteAdvertisementGuardPolicyAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/first_hop_security_policy#key FirstHopSecurityPolicy#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/first_hop_security_policy#value FirstHopSecurityPolicy#value}
  */
  readonly value: string;
}

export function firstHopSecurityPolicyRouteAdvertisementGuardPolicyAnnotationsToTerraform(struct?: FirstHopSecurityPolicyRouteAdvertisementGuardPolicyAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function firstHopSecurityPolicyRouteAdvertisementGuardPolicyAnnotationsToHclTerraform(struct?: FirstHopSecurityPolicyRouteAdvertisementGuardPolicyAnnotations | cdktf.IResolvable): any {
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

export class FirstHopSecurityPolicyRouteAdvertisementGuardPolicyAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirstHopSecurityPolicyRouteAdvertisementGuardPolicyAnnotations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirstHopSecurityPolicyRouteAdvertisementGuardPolicyAnnotations | cdktf.IResolvable | undefined) {
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

export class FirstHopSecurityPolicyRouteAdvertisementGuardPolicyAnnotationsList extends cdktf.ComplexList {
  public internalValue? : FirstHopSecurityPolicyRouteAdvertisementGuardPolicyAnnotations[] | cdktf.IResolvable

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
  public get(index: number): FirstHopSecurityPolicyRouteAdvertisementGuardPolicyAnnotationsOutputReference {
    return new FirstHopSecurityPolicyRouteAdvertisementGuardPolicyAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirstHopSecurityPolicyRouteAdvertisementGuardPolicyTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/first_hop_security_policy#key FirstHopSecurityPolicy#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/first_hop_security_policy#value FirstHopSecurityPolicy#value}
  */
  readonly value: string;
}

export function firstHopSecurityPolicyRouteAdvertisementGuardPolicyTagsToTerraform(struct?: FirstHopSecurityPolicyRouteAdvertisementGuardPolicyTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function firstHopSecurityPolicyRouteAdvertisementGuardPolicyTagsToHclTerraform(struct?: FirstHopSecurityPolicyRouteAdvertisementGuardPolicyTags | cdktf.IResolvable): any {
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

export class FirstHopSecurityPolicyRouteAdvertisementGuardPolicyTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirstHopSecurityPolicyRouteAdvertisementGuardPolicyTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirstHopSecurityPolicyRouteAdvertisementGuardPolicyTags | cdktf.IResolvable | undefined) {
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

export class FirstHopSecurityPolicyRouteAdvertisementGuardPolicyTagsList extends cdktf.ComplexList {
  public internalValue? : FirstHopSecurityPolicyRouteAdvertisementGuardPolicyTags[] | cdktf.IResolvable

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
  public get(index: number): FirstHopSecurityPolicyRouteAdvertisementGuardPolicyTagsOutputReference {
    return new FirstHopSecurityPolicyRouteAdvertisementGuardPolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirstHopSecurityPolicyRouteAdvertisementGuardPolicy {
  /**
  * The annotation of the Route Advertisement Guard Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/first_hop_security_policy#annotation FirstHopSecurityPolicy#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/first_hop_security_policy#annotations FirstHopSecurityPolicy#annotations}
  */
  readonly annotations?: FirstHopSecurityPolicyRouteAdvertisementGuardPolicyAnnotations[] | cdktf.IResolvable;
  /**
  * The description of the Route Advertisement Guard Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/first_hop_security_policy#description FirstHopSecurityPolicy#description}
  */
  readonly description?: string;
  /**
  * Perform a managed configuration check for the Route Advertisement Guard Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/first_hop_security_policy#managed_config_check FirstHopSecurityPolicy#managed_config_check}
  */
  readonly managedConfigCheck?: string;
  /**
  * The managed configuration flag setting for the Route Advertisement Guard Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/first_hop_security_policy#managed_config_flag FirstHopSecurityPolicy#managed_config_flag}
  */
  readonly managedConfigFlag?: string;
  /**
  * The maximum hop limit for the Route Advertisement Guard Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/first_hop_security_policy#max_hop_limit FirstHopSecurityPolicy#max_hop_limit}
  */
  readonly maxHopLimit?: string;
  /**
  * The allowed maximum router preference for the Route Advertisement Guard Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/first_hop_security_policy#max_router_preference FirstHopSecurityPolicy#max_router_preference}
  */
  readonly maxRouterPreference?: string;
  /**
  * The minimum hop limit for the Route Advertisement Guard Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/first_hop_security_policy#min_hop_limit FirstHopSecurityPolicy#min_hop_limit}
  */
  readonly minHopLimit?: string;
  /**
  * The name of the Route Advertisement Guard Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/first_hop_security_policy#name FirstHopSecurityPolicy#name}
  */
  readonly name?: string;
  /**
  * The name alias of the Route Advertisement Guard Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/first_hop_security_policy#name_alias FirstHopSecurityPolicy#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Perform other configuration checks for the Route Advertisement Guard Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/first_hop_security_policy#other_config_check FirstHopSecurityPolicy#other_config_check}
  */
  readonly otherConfigCheck?: string;
  /**
  * The other configuration flag setting for the Route Advertisement Guard Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/first_hop_security_policy#other_config_flag FirstHopSecurityPolicy#other_config_flag}
  */
  readonly otherConfigFlag?: string;
  /**
  * The key for enabling clients to own their data for entity correlation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/first_hop_security_policy#owner_key FirstHopSecurityPolicy#owner_key}
  */
  readonly ownerKey?: string;
  /**
  * A tag for enabling clients to add their own data. For example, to indicate who created this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/first_hop_security_policy#owner_tag FirstHopSecurityPolicy#owner_tag}
  */
  readonly ownerTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/first_hop_security_policy#tags FirstHopSecurityPolicy#tags}
  */
  readonly tags?: FirstHopSecurityPolicyRouteAdvertisementGuardPolicyTags[] | cdktf.IResolvable;
}

export function firstHopSecurityPolicyRouteAdvertisementGuardPolicyToTerraform(struct?: FirstHopSecurityPolicyRouteAdvertisementGuardPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(firstHopSecurityPolicyRouteAdvertisementGuardPolicyAnnotationsToTerraform, false)(struct!.annotations),
    description: cdktf.stringToTerraform(struct!.description),
    managed_config_check: cdktf.stringToTerraform(struct!.managedConfigCheck),
    managed_config_flag: cdktf.stringToTerraform(struct!.managedConfigFlag),
    max_hop_limit: cdktf.stringToTerraform(struct!.maxHopLimit),
    max_router_preference: cdktf.stringToTerraform(struct!.maxRouterPreference),
    min_hop_limit: cdktf.stringToTerraform(struct!.minHopLimit),
    name: cdktf.stringToTerraform(struct!.name),
    name_alias: cdktf.stringToTerraform(struct!.nameAlias),
    other_config_check: cdktf.stringToTerraform(struct!.otherConfigCheck),
    other_config_flag: cdktf.stringToTerraform(struct!.otherConfigFlag),
    owner_key: cdktf.stringToTerraform(struct!.ownerKey),
    owner_tag: cdktf.stringToTerraform(struct!.ownerTag),
    tags: cdktf.listMapper(firstHopSecurityPolicyRouteAdvertisementGuardPolicyTagsToTerraform, false)(struct!.tags),
  }
}


export function firstHopSecurityPolicyRouteAdvertisementGuardPolicyToHclTerraform(struct?: FirstHopSecurityPolicyRouteAdvertisementGuardPolicy | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(firstHopSecurityPolicyRouteAdvertisementGuardPolicyAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "FirstHopSecurityPolicyRouteAdvertisementGuardPolicyAnnotationsList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_config_check: {
      value: cdktf.stringToHclTerraform(struct!.managedConfigCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_config_flag: {
      value: cdktf.stringToHclTerraform(struct!.managedConfigFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_hop_limit: {
      value: cdktf.stringToHclTerraform(struct!.maxHopLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_router_preference: {
      value: cdktf.stringToHclTerraform(struct!.maxRouterPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_hop_limit: {
      value: cdktf.stringToHclTerraform(struct!.minHopLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_alias: {
      value: cdktf.stringToHclTerraform(struct!.nameAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    other_config_check: {
      value: cdktf.stringToHclTerraform(struct!.otherConfigCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    other_config_flag: {
      value: cdktf.stringToHclTerraform(struct!.otherConfigFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner_key: {
      value: cdktf.stringToHclTerraform(struct!.ownerKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner_tag: {
      value: cdktf.stringToHclTerraform(struct!.ownerTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(firstHopSecurityPolicyRouteAdvertisementGuardPolicyTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "FirstHopSecurityPolicyRouteAdvertisementGuardPolicyTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirstHopSecurityPolicyRouteAdvertisementGuardPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirstHopSecurityPolicyRouteAdvertisementGuardPolicy | cdktf.IResolvable | undefined {
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
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._managedConfigCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedConfigCheck = this._managedConfigCheck;
    }
    if (this._managedConfigFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedConfigFlag = this._managedConfigFlag;
    }
    if (this._maxHopLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHopLimit = this._maxHopLimit;
    }
    if (this._maxRouterPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRouterPreference = this._maxRouterPreference;
    }
    if (this._minHopLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.minHopLimit = this._minHopLimit;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nameAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameAlias = this._nameAlias;
    }
    if (this._otherConfigCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherConfigCheck = this._otherConfigCheck;
    }
    if (this._otherConfigFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherConfigFlag = this._otherConfigFlag;
    }
    if (this._ownerKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerKey = this._ownerKey;
    }
    if (this._ownerTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerTag = this._ownerTag;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirstHopSecurityPolicyRouteAdvertisementGuardPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._description = undefined;
      this._managedConfigCheck = undefined;
      this._managedConfigFlag = undefined;
      this._maxHopLimit = undefined;
      this._maxRouterPreference = undefined;
      this._minHopLimit = undefined;
      this._name = undefined;
      this._nameAlias = undefined;
      this._otherConfigCheck = undefined;
      this._otherConfigFlag = undefined;
      this._ownerKey = undefined;
      this._ownerTag = undefined;
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
      this._description = value.description;
      this._managedConfigCheck = value.managedConfigCheck;
      this._managedConfigFlag = value.managedConfigFlag;
      this._maxHopLimit = value.maxHopLimit;
      this._maxRouterPreference = value.maxRouterPreference;
      this._minHopLimit = value.minHopLimit;
      this._name = value.name;
      this._nameAlias = value.nameAlias;
      this._otherConfigCheck = value.otherConfigCheck;
      this._otherConfigFlag = value.otherConfigFlag;
      this._ownerKey = value.ownerKey;
      this._ownerTag = value.ownerTag;
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
  private _annotations = new FirstHopSecurityPolicyRouteAdvertisementGuardPolicyAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: FirstHopSecurityPolicyRouteAdvertisementGuardPolicyAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
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

  // managed_config_check - computed: true, optional: true, required: false
  private _managedConfigCheck?: string; 
  public get managedConfigCheck() {
    return this.getStringAttribute('managed_config_check');
  }
  public set managedConfigCheck(value: string) {
    this._managedConfigCheck = value;
  }
  public resetManagedConfigCheck() {
    this._managedConfigCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedConfigCheckInput() {
    return this._managedConfigCheck;
  }

  // managed_config_flag - computed: true, optional: true, required: false
  private _managedConfigFlag?: string; 
  public get managedConfigFlag() {
    return this.getStringAttribute('managed_config_flag');
  }
  public set managedConfigFlag(value: string) {
    this._managedConfigFlag = value;
  }
  public resetManagedConfigFlag() {
    this._managedConfigFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedConfigFlagInput() {
    return this._managedConfigFlag;
  }

  // max_hop_limit - computed: true, optional: true, required: false
  private _maxHopLimit?: string; 
  public get maxHopLimit() {
    return this.getStringAttribute('max_hop_limit');
  }
  public set maxHopLimit(value: string) {
    this._maxHopLimit = value;
  }
  public resetMaxHopLimit() {
    this._maxHopLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHopLimitInput() {
    return this._maxHopLimit;
  }

  // max_router_preference - computed: true, optional: true, required: false
  private _maxRouterPreference?: string; 
  public get maxRouterPreference() {
    return this.getStringAttribute('max_router_preference');
  }
  public set maxRouterPreference(value: string) {
    this._maxRouterPreference = value;
  }
  public resetMaxRouterPreference() {
    this._maxRouterPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRouterPreferenceInput() {
    return this._maxRouterPreference;
  }

  // min_hop_limit - computed: true, optional: true, required: false
  private _minHopLimit?: string; 
  public get minHopLimit() {
    return this.getStringAttribute('min_hop_limit');
  }
  public set minHopLimit(value: string) {
    this._minHopLimit = value;
  }
  public resetMinHopLimit() {
    this._minHopLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minHopLimitInput() {
    return this._minHopLimit;
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

  // other_config_check - computed: true, optional: true, required: false
  private _otherConfigCheck?: string; 
  public get otherConfigCheck() {
    return this.getStringAttribute('other_config_check');
  }
  public set otherConfigCheck(value: string) {
    this._otherConfigCheck = value;
  }
  public resetOtherConfigCheck() {
    this._otherConfigCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherConfigCheckInput() {
    return this._otherConfigCheck;
  }

  // other_config_flag - computed: true, optional: true, required: false
  private _otherConfigFlag?: string; 
  public get otherConfigFlag() {
    return this.getStringAttribute('other_config_flag');
  }
  public set otherConfigFlag(value: string) {
    this._otherConfigFlag = value;
  }
  public resetOtherConfigFlag() {
    this._otherConfigFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherConfigFlagInput() {
    return this._otherConfigFlag;
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

  // tags - computed: true, optional: true, required: false
  private _tags = new FirstHopSecurityPolicyRouteAdvertisementGuardPolicyTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: FirstHopSecurityPolicyRouteAdvertisementGuardPolicyTags[] | cdktf.IResolvable) {
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
export interface FirstHopSecurityPolicyTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/first_hop_security_policy#key FirstHopSecurityPolicy#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/first_hop_security_policy#value FirstHopSecurityPolicy#value}
  */
  readonly value: string;
}

export function firstHopSecurityPolicyTagsToTerraform(struct?: FirstHopSecurityPolicyTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function firstHopSecurityPolicyTagsToHclTerraform(struct?: FirstHopSecurityPolicyTags | cdktf.IResolvable): any {
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

export class FirstHopSecurityPolicyTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirstHopSecurityPolicyTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirstHopSecurityPolicyTags | cdktf.IResolvable | undefined) {
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

export class FirstHopSecurityPolicyTagsList extends cdktf.ComplexList {
  public internalValue? : FirstHopSecurityPolicyTags[] | cdktf.IResolvable

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
  public get(index: number): FirstHopSecurityPolicyTagsOutputReference {
    return new FirstHopSecurityPolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/first_hop_security_policy aci_first_hop_security_policy}
*/
export class FirstHopSecurityPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_first_hop_security_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirstHopSecurityPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirstHopSecurityPolicy to import
  * @param importFromId The id of the existing FirstHopSecurityPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/first_hop_security_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirstHopSecurityPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_first_hop_security_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/first_hop_security_policy aci_first_hop_security_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirstHopSecurityPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: FirstHopSecurityPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_first_hop_security_policy',
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
    this._description = config.description;
    this._ipInspection = config.ipInspection;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._ownerKey = config.ownerKey;
    this._ownerTag = config.ownerTag;
    this._parentDn = config.parentDn;
    this._routeAdvertisementGuardPolicy.internalValue = config.routeAdvertisementGuardPolicy;
    this._routerAdvertisement = config.routerAdvertisement;
    this._sourceGuard = config.sourceGuard;
    this._tags.internalValue = config.tags;
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
  private _annotations = new FirstHopSecurityPolicyAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: FirstHopSecurityPolicyAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
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

  // ip_inspection - computed: true, optional: true, required: false
  private _ipInspection?: string; 
  public get ipInspection() {
    return this.getStringAttribute('ip_inspection');
  }
  public set ipInspection(value: string) {
    this._ipInspection = value;
  }
  public resetIpInspection() {
    this._ipInspection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInspectionInput() {
    return this._ipInspection;
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

  // route_advertisement_guard_policy - computed: true, optional: true, required: false
  private _routeAdvertisementGuardPolicy = new FirstHopSecurityPolicyRouteAdvertisementGuardPolicyOutputReference(this, "route_advertisement_guard_policy");
  public get routeAdvertisementGuardPolicy() {
    return this._routeAdvertisementGuardPolicy;
  }
  public putRouteAdvertisementGuardPolicy(value: FirstHopSecurityPolicyRouteAdvertisementGuardPolicy) {
    this._routeAdvertisementGuardPolicy.internalValue = value;
  }
  public resetRouteAdvertisementGuardPolicy() {
    this._routeAdvertisementGuardPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeAdvertisementGuardPolicyInput() {
    return this._routeAdvertisementGuardPolicy.internalValue;
  }

  // router_advertisement - computed: true, optional: true, required: false
  private _routerAdvertisement?: string; 
  public get routerAdvertisement() {
    return this.getStringAttribute('router_advertisement');
  }
  public set routerAdvertisement(value: string) {
    this._routerAdvertisement = value;
  }
  public resetRouterAdvertisement() {
    this._routerAdvertisement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerAdvertisementInput() {
    return this._routerAdvertisement;
  }

  // source_guard - computed: true, optional: true, required: false
  private _sourceGuard?: string; 
  public get sourceGuard() {
    return this.getStringAttribute('source_guard');
  }
  public set sourceGuard(value: string) {
    this._sourceGuard = value;
  }
  public resetSourceGuard() {
    this._sourceGuard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceGuardInput() {
    return this._sourceGuard;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new FirstHopSecurityPolicyTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: FirstHopSecurityPolicyTags[] | cdktf.IResolvable) {
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
      annotation: cdktf.stringToTerraform(this._annotation),
      annotations: cdktf.listMapper(firstHopSecurityPolicyAnnotationsToTerraform, false)(this._annotations.internalValue),
      description: cdktf.stringToTerraform(this._description),
      ip_inspection: cdktf.stringToTerraform(this._ipInspection),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      owner_key: cdktf.stringToTerraform(this._ownerKey),
      owner_tag: cdktf.stringToTerraform(this._ownerTag),
      parent_dn: cdktf.stringToTerraform(this._parentDn),
      route_advertisement_guard_policy: firstHopSecurityPolicyRouteAdvertisementGuardPolicyToTerraform(this._routeAdvertisementGuardPolicy.internalValue),
      router_advertisement: cdktf.stringToTerraform(this._routerAdvertisement),
      source_guard: cdktf.stringToTerraform(this._sourceGuard),
      tags: cdktf.listMapper(firstHopSecurityPolicyTagsToTerraform, false)(this._tags.internalValue),
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
        value: cdktf.listMapperHcl(firstHopSecurityPolicyAnnotationsToHclTerraform, false)(this._annotations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirstHopSecurityPolicyAnnotationsList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_inspection: {
        value: cdktf.stringToHclTerraform(this._ipInspection),
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
      route_advertisement_guard_policy: {
        value: firstHopSecurityPolicyRouteAdvertisementGuardPolicyToHclTerraform(this._routeAdvertisementGuardPolicy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FirstHopSecurityPolicyRouteAdvertisementGuardPolicy",
      },
      router_advertisement: {
        value: cdktf.stringToHclTerraform(this._routerAdvertisement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_guard: {
        value: cdktf.stringToHclTerraform(this._sourceGuard),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(firstHopSecurityPolicyTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirstHopSecurityPolicyTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
