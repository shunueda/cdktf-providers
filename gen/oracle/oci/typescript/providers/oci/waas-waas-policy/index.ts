// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WaasWaasPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#additional_domains WaasWaasPolicy#additional_domains}
  */
  readonly additionalDomains?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#compartment_id WaasWaasPolicy#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#defined_tags WaasWaasPolicy#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#display_name WaasWaasPolicy#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#domain WaasWaasPolicy#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#freeform_tags WaasWaasPolicy#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#id WaasWaasPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * origin_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#origin_groups WaasWaasPolicy#origin_groups}
  */
  readonly originGroups?: WaasWaasPolicyOriginGroups[] | cdktf.IResolvable;
  /**
  * origins block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#origins WaasWaasPolicy#origins}
  */
  readonly origins?: WaasWaasPolicyOrigins[] | cdktf.IResolvable;
  /**
  * policy_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#policy_config WaasWaasPolicy#policy_config}
  */
  readonly policyConfig?: WaasWaasPolicyPolicyConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#timeouts WaasWaasPolicy#timeouts}
  */
  readonly timeouts?: WaasWaasPolicyTimeouts;
  /**
  * waf_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#waf_config WaasWaasPolicy#waf_config}
  */
  readonly wafConfig?: WaasWaasPolicyWafConfig;
}
export interface WaasWaasPolicyOriginGroupsOriginGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#origin WaasWaasPolicy#origin}
  */
  readonly origin: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#weight WaasWaasPolicy#weight}
  */
  readonly weight?: number;
}

export function waasWaasPolicyOriginGroupsOriginGroupToTerraform(struct?: WaasWaasPolicyOriginGroupsOriginGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    origin: cdktf.stringToTerraform(struct!.origin),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function waasWaasPolicyOriginGroupsOriginGroupToHclTerraform(struct?: WaasWaasPolicyOriginGroupsOriginGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    origin: {
      value: cdktf.stringToHclTerraform(struct!.origin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaasWaasPolicyOriginGroupsOriginGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WaasWaasPolicyOriginGroupsOriginGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._origin !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaasWaasPolicyOriginGroupsOriginGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._origin = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._origin = value.origin;
      this._weight = value.weight;
    }
  }

  // origin - computed: false, optional: false, required: true
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class WaasWaasPolicyOriginGroupsOriginGroupList extends cdktf.ComplexList {
  public internalValue? : WaasWaasPolicyOriginGroupsOriginGroup[] | cdktf.IResolvable

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
  public get(index: number): WaasWaasPolicyOriginGroupsOriginGroupOutputReference {
    return new WaasWaasPolicyOriginGroupsOriginGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WaasWaasPolicyOriginGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#label WaasWaasPolicy#label}
  */
  readonly label: string;
  /**
  * origin_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#origin_group WaasWaasPolicy#origin_group}
  */
  readonly originGroup: WaasWaasPolicyOriginGroupsOriginGroup[] | cdktf.IResolvable;
}

export function waasWaasPolicyOriginGroupsToTerraform(struct?: WaasWaasPolicyOriginGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    origin_group: cdktf.listMapper(waasWaasPolicyOriginGroupsOriginGroupToTerraform, true)(struct!.originGroup),
  }
}


export function waasWaasPolicyOriginGroupsToHclTerraform(struct?: WaasWaasPolicyOriginGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_group: {
      value: cdktf.listMapperHcl(waasWaasPolicyOriginGroupsOriginGroupToHclTerraform, true)(struct!.originGroup),
      isBlock: true,
      type: "list",
      storageClassType: "WaasWaasPolicyOriginGroupsOriginGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaasWaasPolicyOriginGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WaasWaasPolicyOriginGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._originGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.originGroup = this._originGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaasWaasPolicyOriginGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label = undefined;
      this._originGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label = value.label;
      this._originGroup.internalValue = value.originGroup;
    }
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // origin_group - computed: false, optional: false, required: true
  private _originGroup = new WaasWaasPolicyOriginGroupsOriginGroupList(this, "origin_group", false);
  public get originGroup() {
    return this._originGroup;
  }
  public putOriginGroup(value: WaasWaasPolicyOriginGroupsOriginGroup[] | cdktf.IResolvable) {
    this._originGroup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originGroupInput() {
    return this._originGroup.internalValue;
  }
}

export class WaasWaasPolicyOriginGroupsList extends cdktf.ComplexList {
  public internalValue? : WaasWaasPolicyOriginGroups[] | cdktf.IResolvable

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
  public get(index: number): WaasWaasPolicyOriginGroupsOutputReference {
    return new WaasWaasPolicyOriginGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WaasWaasPolicyOriginsCustomHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#name WaasWaasPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#value WaasWaasPolicy#value}
  */
  readonly value: string;
}

export function waasWaasPolicyOriginsCustomHeadersToTerraform(struct?: WaasWaasPolicyOriginsCustomHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function waasWaasPolicyOriginsCustomHeadersToHclTerraform(struct?: WaasWaasPolicyOriginsCustomHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class WaasWaasPolicyOriginsCustomHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WaasWaasPolicyOriginsCustomHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaasWaasPolicyOriginsCustomHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
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

export class WaasWaasPolicyOriginsCustomHeadersList extends cdktf.ComplexList {
  public internalValue? : WaasWaasPolicyOriginsCustomHeaders[] | cdktf.IResolvable

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
  public get(index: number): WaasWaasPolicyOriginsCustomHeadersOutputReference {
    return new WaasWaasPolicyOriginsCustomHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WaasWaasPolicyOrigins {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#http_port WaasWaasPolicy#http_port}
  */
  readonly httpPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#https_port WaasWaasPolicy#https_port}
  */
  readonly httpsPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#label WaasWaasPolicy#label}
  */
  readonly label: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#uri WaasWaasPolicy#uri}
  */
  readonly uri: string;
  /**
  * custom_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#custom_headers WaasWaasPolicy#custom_headers}
  */
  readonly customHeaders?: WaasWaasPolicyOriginsCustomHeaders[] | cdktf.IResolvable;
}

export function waasWaasPolicyOriginsToTerraform(struct?: WaasWaasPolicyOrigins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_port: cdktf.numberToTerraform(struct!.httpPort),
    https_port: cdktf.numberToTerraform(struct!.httpsPort),
    label: cdktf.stringToTerraform(struct!.label),
    uri: cdktf.stringToTerraform(struct!.uri),
    custom_headers: cdktf.listMapper(waasWaasPolicyOriginsCustomHeadersToTerraform, true)(struct!.customHeaders),
  }
}


export function waasWaasPolicyOriginsToHclTerraform(struct?: WaasWaasPolicyOrigins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_port: {
      value: cdktf.numberToHclTerraform(struct!.httpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    https_port: {
      value: cdktf.numberToHclTerraform(struct!.httpsPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_headers: {
      value: cdktf.listMapperHcl(waasWaasPolicyOriginsCustomHeadersToHclTerraform, true)(struct!.customHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "WaasWaasPolicyOriginsCustomHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaasWaasPolicyOriginsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WaasWaasPolicyOrigins | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPort = this._httpPort;
    }
    if (this._httpsPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsPort = this._httpsPort;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    if (this._customHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHeaders = this._customHeaders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaasWaasPolicyOrigins | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpPort = undefined;
      this._httpsPort = undefined;
      this._label = undefined;
      this._uri = undefined;
      this._customHeaders.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpPort = value.httpPort;
      this._httpsPort = value.httpsPort;
      this._label = value.label;
      this._uri = value.uri;
      this._customHeaders.internalValue = value.customHeaders;
    }
  }

  // http_port - computed: false, optional: true, required: false
  private _httpPort?: number; 
  public get httpPort() {
    return this.getNumberAttribute('http_port');
  }
  public set httpPort(value: number) {
    this._httpPort = value;
  }
  public resetHttpPort() {
    this._httpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPortInput() {
    return this._httpPort;
  }

  // https_port - computed: false, optional: true, required: false
  private _httpsPort?: number; 
  public get httpsPort() {
    return this.getNumberAttribute('https_port');
  }
  public set httpsPort(value: number) {
    this._httpsPort = value;
  }
  public resetHttpsPort() {
    this._httpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPortInput() {
    return this._httpsPort;
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // custom_headers - computed: false, optional: true, required: false
  private _customHeaders = new WaasWaasPolicyOriginsCustomHeadersList(this, "custom_headers", false);
  public get customHeaders() {
    return this._customHeaders;
  }
  public putCustomHeaders(value: WaasWaasPolicyOriginsCustomHeaders[] | cdktf.IResolvable) {
    this._customHeaders.internalValue = value;
  }
  public resetCustomHeaders() {
    this._customHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeadersInput() {
    return this._customHeaders.internalValue;
  }
}

export class WaasWaasPolicyOriginsList extends cdktf.ComplexList {
  public internalValue? : WaasWaasPolicyOrigins[] | cdktf.IResolvable

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
  public get(index: number): WaasWaasPolicyOriginsOutputReference {
    return new WaasWaasPolicyOriginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WaasWaasPolicyPolicyConfigHealthChecks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#expected_response_code_group WaasWaasPolicy#expected_response_code_group}
  */
  readonly expectedResponseCodeGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#expected_response_text WaasWaasPolicy#expected_response_text}
  */
  readonly expectedResponseText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#headers WaasWaasPolicy#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#healthy_threshold WaasWaasPolicy#healthy_threshold}
  */
  readonly healthyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#interval_in_seconds WaasWaasPolicy#interval_in_seconds}
  */
  readonly intervalInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#is_enabled WaasWaasPolicy#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#is_response_text_check_enabled WaasWaasPolicy#is_response_text_check_enabled}
  */
  readonly isResponseTextCheckEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#method WaasWaasPolicy#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#path WaasWaasPolicy#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#timeout_in_seconds WaasWaasPolicy#timeout_in_seconds}
  */
  readonly timeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#unhealthy_threshold WaasWaasPolicy#unhealthy_threshold}
  */
  readonly unhealthyThreshold?: number;
}

export function waasWaasPolicyPolicyConfigHealthChecksToTerraform(struct?: WaasWaasPolicyPolicyConfigHealthChecksOutputReference | WaasWaasPolicyPolicyConfigHealthChecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expected_response_code_group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expectedResponseCodeGroup),
    expected_response_text: cdktf.stringToTerraform(struct!.expectedResponseText),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    healthy_threshold: cdktf.numberToTerraform(struct!.healthyThreshold),
    interval_in_seconds: cdktf.numberToTerraform(struct!.intervalInSeconds),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    is_response_text_check_enabled: cdktf.booleanToTerraform(struct!.isResponseTextCheckEnabled),
    method: cdktf.stringToTerraform(struct!.method),
    path: cdktf.stringToTerraform(struct!.path),
    timeout_in_seconds: cdktf.numberToTerraform(struct!.timeoutInSeconds),
    unhealthy_threshold: cdktf.numberToTerraform(struct!.unhealthyThreshold),
  }
}


export function waasWaasPolicyPolicyConfigHealthChecksToHclTerraform(struct?: WaasWaasPolicyPolicyConfigHealthChecksOutputReference | WaasWaasPolicyPolicyConfigHealthChecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expected_response_code_group: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.expectedResponseCodeGroup),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    expected_response_text: {
      value: cdktf.stringToHclTerraform(struct!.expectedResponseText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    healthy_threshold: {
      value: cdktf.numberToHclTerraform(struct!.healthyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.intervalInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_response_text_check_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isResponseTextCheckEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unhealthy_threshold: {
      value: cdktf.numberToHclTerraform(struct!.unhealthyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaasWaasPolicyPolicyConfigHealthChecksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WaasWaasPolicyPolicyConfigHealthChecks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expectedResponseCodeGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedResponseCodeGroup = this._expectedResponseCodeGroup;
    }
    if (this._expectedResponseText !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedResponseText = this._expectedResponseText;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._healthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthyThreshold = this._healthyThreshold;
    }
    if (this._intervalInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalInSeconds = this._intervalInSeconds;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._isResponseTextCheckEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isResponseTextCheckEnabled = this._isResponseTextCheckEnabled;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._timeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutInSeconds = this._timeoutInSeconds;
    }
    if (this._unhealthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyThreshold = this._unhealthyThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaasWaasPolicyPolicyConfigHealthChecks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expectedResponseCodeGroup = undefined;
      this._expectedResponseText = undefined;
      this._headers = undefined;
      this._healthyThreshold = undefined;
      this._intervalInSeconds = undefined;
      this._isEnabled = undefined;
      this._isResponseTextCheckEnabled = undefined;
      this._method = undefined;
      this._path = undefined;
      this._timeoutInSeconds = undefined;
      this._unhealthyThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expectedResponseCodeGroup = value.expectedResponseCodeGroup;
      this._expectedResponseText = value.expectedResponseText;
      this._headers = value.headers;
      this._healthyThreshold = value.healthyThreshold;
      this._intervalInSeconds = value.intervalInSeconds;
      this._isEnabled = value.isEnabled;
      this._isResponseTextCheckEnabled = value.isResponseTextCheckEnabled;
      this._method = value.method;
      this._path = value.path;
      this._timeoutInSeconds = value.timeoutInSeconds;
      this._unhealthyThreshold = value.unhealthyThreshold;
    }
  }

  // expected_response_code_group - computed: true, optional: true, required: false
  private _expectedResponseCodeGroup?: string[]; 
  public get expectedResponseCodeGroup() {
    return this.getListAttribute('expected_response_code_group');
  }
  public set expectedResponseCodeGroup(value: string[]) {
    this._expectedResponseCodeGroup = value;
  }
  public resetExpectedResponseCodeGroup() {
    this._expectedResponseCodeGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedResponseCodeGroupInput() {
    return this._expectedResponseCodeGroup;
  }

  // expected_response_text - computed: true, optional: true, required: false
  private _expectedResponseText?: string; 
  public get expectedResponseText() {
    return this.getStringAttribute('expected_response_text');
  }
  public set expectedResponseText(value: string) {
    this._expectedResponseText = value;
  }
  public resetExpectedResponseText() {
    this._expectedResponseText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedResponseTextInput() {
    return this._expectedResponseText;
  }

  // headers - computed: true, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // healthy_threshold - computed: true, optional: true, required: false
  private _healthyThreshold?: number; 
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }
  public set healthyThreshold(value: number) {
    this._healthyThreshold = value;
  }
  public resetHealthyThreshold() {
    this._healthyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyThresholdInput() {
    return this._healthyThreshold;
  }

  // interval_in_seconds - computed: true, optional: true, required: false
  private _intervalInSeconds?: number; 
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }
  public set intervalInSeconds(value: number) {
    this._intervalInSeconds = value;
  }
  public resetIntervalInSeconds() {
    this._intervalInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInSecondsInput() {
    return this._intervalInSeconds;
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // is_response_text_check_enabled - computed: true, optional: true, required: false
  private _isResponseTextCheckEnabled?: boolean | cdktf.IResolvable; 
  public get isResponseTextCheckEnabled() {
    return this.getBooleanAttribute('is_response_text_check_enabled');
  }
  public set isResponseTextCheckEnabled(value: boolean | cdktf.IResolvable) {
    this._isResponseTextCheckEnabled = value;
  }
  public resetIsResponseTextCheckEnabled() {
    this._isResponseTextCheckEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isResponseTextCheckEnabledInput() {
    return this._isResponseTextCheckEnabled;
  }

  // method - computed: true, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // timeout_in_seconds - computed: true, optional: true, required: false
  private _timeoutInSeconds?: number; 
  public get timeoutInSeconds() {
    return this.getNumberAttribute('timeout_in_seconds');
  }
  public set timeoutInSeconds(value: number) {
    this._timeoutInSeconds = value;
  }
  public resetTimeoutInSeconds() {
    this._timeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInSecondsInput() {
    return this._timeoutInSeconds;
  }

  // unhealthy_threshold - computed: true, optional: true, required: false
  private _unhealthyThreshold?: number; 
  public get unhealthyThreshold() {
    return this.getNumberAttribute('unhealthy_threshold');
  }
  public set unhealthyThreshold(value: number) {
    this._unhealthyThreshold = value;
  }
  public resetUnhealthyThreshold() {
    this._unhealthyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyThresholdInput() {
    return this._unhealthyThreshold;
  }
}
export interface WaasWaasPolicyPolicyConfigLoadBalancingMethod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#domain WaasWaasPolicy#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#expiration_time_in_seconds WaasWaasPolicy#expiration_time_in_seconds}
  */
  readonly expirationTimeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#method WaasWaasPolicy#method}
  */
  readonly method: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#name WaasWaasPolicy#name}
  */
  readonly name?: string;
}

export function waasWaasPolicyPolicyConfigLoadBalancingMethodToTerraform(struct?: WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference | WaasWaasPolicyPolicyConfigLoadBalancingMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    expiration_time_in_seconds: cdktf.numberToTerraform(struct!.expirationTimeInSeconds),
    method: cdktf.stringToTerraform(struct!.method),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function waasWaasPolicyPolicyConfigLoadBalancingMethodToHclTerraform(struct?: WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference | WaasWaasPolicyPolicyConfigLoadBalancingMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expiration_time_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.expirationTimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WaasWaasPolicyPolicyConfigLoadBalancingMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._expirationTimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationTimeInSeconds = this._expirationTimeInSeconds;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaasWaasPolicyPolicyConfigLoadBalancingMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domain = undefined;
      this._expirationTimeInSeconds = undefined;
      this._method = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domain = value.domain;
      this._expirationTimeInSeconds = value.expirationTimeInSeconds;
      this._method = value.method;
      this._name = value.name;
    }
  }

  // domain - computed: true, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // expiration_time_in_seconds - computed: true, optional: true, required: false
  private _expirationTimeInSeconds?: number; 
  public get expirationTimeInSeconds() {
    return this.getNumberAttribute('expiration_time_in_seconds');
  }
  public set expirationTimeInSeconds(value: number) {
    this._expirationTimeInSeconds = value;
  }
  public resetExpirationTimeInSeconds() {
    this._expirationTimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTimeInSecondsInput() {
    return this._expirationTimeInSeconds;
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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
}
export interface WaasWaasPolicyPolicyConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#certificate_id WaasWaasPolicy#certificate_id}
  */
  readonly certificateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#cipher_group WaasWaasPolicy#cipher_group}
  */
  readonly cipherGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#client_address_header WaasWaasPolicy#client_address_header}
  */
  readonly clientAddressHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#is_behind_cdn WaasWaasPolicy#is_behind_cdn}
  */
  readonly isBehindCdn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#is_cache_control_respected WaasWaasPolicy#is_cache_control_respected}
  */
  readonly isCacheControlRespected?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#is_https_enabled WaasWaasPolicy#is_https_enabled}
  */
  readonly isHttpsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#is_https_forced WaasWaasPolicy#is_https_forced}
  */
  readonly isHttpsForced?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#is_origin_compression_enabled WaasWaasPolicy#is_origin_compression_enabled}
  */
  readonly isOriginCompressionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#is_response_buffering_enabled WaasWaasPolicy#is_response_buffering_enabled}
  */
  readonly isResponseBufferingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#is_sni_enabled WaasWaasPolicy#is_sni_enabled}
  */
  readonly isSniEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#tls_protocols WaasWaasPolicy#tls_protocols}
  */
  readonly tlsProtocols?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#websocket_path_prefixes WaasWaasPolicy#websocket_path_prefixes}
  */
  readonly websocketPathPrefixes?: string[];
  /**
  * health_checks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#health_checks WaasWaasPolicy#health_checks}
  */
  readonly healthChecks?: WaasWaasPolicyPolicyConfigHealthChecks;
  /**
  * load_balancing_method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#load_balancing_method WaasWaasPolicy#load_balancing_method}
  */
  readonly loadBalancingMethod?: WaasWaasPolicyPolicyConfigLoadBalancingMethod;
}

export function waasWaasPolicyPolicyConfigToTerraform(struct?: WaasWaasPolicyPolicyConfigOutputReference | WaasWaasPolicyPolicyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_id: cdktf.stringToTerraform(struct!.certificateId),
    cipher_group: cdktf.stringToTerraform(struct!.cipherGroup),
    client_address_header: cdktf.stringToTerraform(struct!.clientAddressHeader),
    is_behind_cdn: cdktf.booleanToTerraform(struct!.isBehindCdn),
    is_cache_control_respected: cdktf.booleanToTerraform(struct!.isCacheControlRespected),
    is_https_enabled: cdktf.booleanToTerraform(struct!.isHttpsEnabled),
    is_https_forced: cdktf.booleanToTerraform(struct!.isHttpsForced),
    is_origin_compression_enabled: cdktf.booleanToTerraform(struct!.isOriginCompressionEnabled),
    is_response_buffering_enabled: cdktf.booleanToTerraform(struct!.isResponseBufferingEnabled),
    is_sni_enabled: cdktf.booleanToTerraform(struct!.isSniEnabled),
    tls_protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tlsProtocols),
    websocket_path_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.websocketPathPrefixes),
    health_checks: waasWaasPolicyPolicyConfigHealthChecksToTerraform(struct!.healthChecks),
    load_balancing_method: waasWaasPolicyPolicyConfigLoadBalancingMethodToTerraform(struct!.loadBalancingMethod),
  }
}


export function waasWaasPolicyPolicyConfigToHclTerraform(struct?: WaasWaasPolicyPolicyConfigOutputReference | WaasWaasPolicyPolicyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_id: {
      value: cdktf.stringToHclTerraform(struct!.certificateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cipher_group: {
      value: cdktf.stringToHclTerraform(struct!.cipherGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_address_header: {
      value: cdktf.stringToHclTerraform(struct!.clientAddressHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_behind_cdn: {
      value: cdktf.booleanToHclTerraform(struct!.isBehindCdn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_cache_control_respected: {
      value: cdktf.booleanToHclTerraform(struct!.isCacheControlRespected),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_https_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isHttpsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_https_forced: {
      value: cdktf.booleanToHclTerraform(struct!.isHttpsForced),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_origin_compression_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isOriginCompressionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_response_buffering_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isResponseBufferingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_sni_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isSniEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_protocols: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tlsProtocols),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    websocket_path_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.websocketPathPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    health_checks: {
      value: waasWaasPolicyPolicyConfigHealthChecksToHclTerraform(struct!.healthChecks),
      isBlock: true,
      type: "list",
      storageClassType: "WaasWaasPolicyPolicyConfigHealthChecksList",
    },
    load_balancing_method: {
      value: waasWaasPolicyPolicyConfigLoadBalancingMethodToHclTerraform(struct!.loadBalancingMethod),
      isBlock: true,
      type: "list",
      storageClassType: "WaasWaasPolicyPolicyConfigLoadBalancingMethodList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaasWaasPolicyPolicyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WaasWaasPolicyPolicyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateId = this._certificateId;
    }
    if (this._cipherGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherGroup = this._cipherGroup;
    }
    if (this._clientAddressHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAddressHeader = this._clientAddressHeader;
    }
    if (this._isBehindCdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.isBehindCdn = this._isBehindCdn;
    }
    if (this._isCacheControlRespected !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCacheControlRespected = this._isCacheControlRespected;
    }
    if (this._isHttpsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isHttpsEnabled = this._isHttpsEnabled;
    }
    if (this._isHttpsForced !== undefined) {
      hasAnyValues = true;
      internalValueResult.isHttpsForced = this._isHttpsForced;
    }
    if (this._isOriginCompressionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isOriginCompressionEnabled = this._isOriginCompressionEnabled;
    }
    if (this._isResponseBufferingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isResponseBufferingEnabled = this._isResponseBufferingEnabled;
    }
    if (this._isSniEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSniEnabled = this._isSniEnabled;
    }
    if (this._tlsProtocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsProtocols = this._tlsProtocols;
    }
    if (this._websocketPathPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.websocketPathPrefixes = this._websocketPathPrefixes;
    }
    if (this._healthChecks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthChecks = this._healthChecks?.internalValue;
    }
    if (this._loadBalancingMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancingMethod = this._loadBalancingMethod?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaasWaasPolicyPolicyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateId = undefined;
      this._cipherGroup = undefined;
      this._clientAddressHeader = undefined;
      this._isBehindCdn = undefined;
      this._isCacheControlRespected = undefined;
      this._isHttpsEnabled = undefined;
      this._isHttpsForced = undefined;
      this._isOriginCompressionEnabled = undefined;
      this._isResponseBufferingEnabled = undefined;
      this._isSniEnabled = undefined;
      this._tlsProtocols = undefined;
      this._websocketPathPrefixes = undefined;
      this._healthChecks.internalValue = undefined;
      this._loadBalancingMethod.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateId = value.certificateId;
      this._cipherGroup = value.cipherGroup;
      this._clientAddressHeader = value.clientAddressHeader;
      this._isBehindCdn = value.isBehindCdn;
      this._isCacheControlRespected = value.isCacheControlRespected;
      this._isHttpsEnabled = value.isHttpsEnabled;
      this._isHttpsForced = value.isHttpsForced;
      this._isOriginCompressionEnabled = value.isOriginCompressionEnabled;
      this._isResponseBufferingEnabled = value.isResponseBufferingEnabled;
      this._isSniEnabled = value.isSniEnabled;
      this._tlsProtocols = value.tlsProtocols;
      this._websocketPathPrefixes = value.websocketPathPrefixes;
      this._healthChecks.internalValue = value.healthChecks;
      this._loadBalancingMethod.internalValue = value.loadBalancingMethod;
    }
  }

  // certificate_id - computed: true, optional: true, required: false
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  public resetCertificateId() {
    this._certificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // cipher_group - computed: true, optional: true, required: false
  private _cipherGroup?: string; 
  public get cipherGroup() {
    return this.getStringAttribute('cipher_group');
  }
  public set cipherGroup(value: string) {
    this._cipherGroup = value;
  }
  public resetCipherGroup() {
    this._cipherGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherGroupInput() {
    return this._cipherGroup;
  }

  // client_address_header - computed: false, optional: true, required: false
  private _clientAddressHeader?: string; 
  public get clientAddressHeader() {
    return this.getStringAttribute('client_address_header');
  }
  public set clientAddressHeader(value: string) {
    this._clientAddressHeader = value;
  }
  public resetClientAddressHeader() {
    this._clientAddressHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAddressHeaderInput() {
    return this._clientAddressHeader;
  }

  // is_behind_cdn - computed: true, optional: true, required: false
  private _isBehindCdn?: boolean | cdktf.IResolvable; 
  public get isBehindCdn() {
    return this.getBooleanAttribute('is_behind_cdn');
  }
  public set isBehindCdn(value: boolean | cdktf.IResolvable) {
    this._isBehindCdn = value;
  }
  public resetIsBehindCdn() {
    this._isBehindCdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBehindCdnInput() {
    return this._isBehindCdn;
  }

  // is_cache_control_respected - computed: true, optional: true, required: false
  private _isCacheControlRespected?: boolean | cdktf.IResolvable; 
  public get isCacheControlRespected() {
    return this.getBooleanAttribute('is_cache_control_respected');
  }
  public set isCacheControlRespected(value: boolean | cdktf.IResolvable) {
    this._isCacheControlRespected = value;
  }
  public resetIsCacheControlRespected() {
    this._isCacheControlRespected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCacheControlRespectedInput() {
    return this._isCacheControlRespected;
  }

  // is_https_enabled - computed: true, optional: true, required: false
  private _isHttpsEnabled?: boolean | cdktf.IResolvable; 
  public get isHttpsEnabled() {
    return this.getBooleanAttribute('is_https_enabled');
  }
  public set isHttpsEnabled(value: boolean | cdktf.IResolvable) {
    this._isHttpsEnabled = value;
  }
  public resetIsHttpsEnabled() {
    this._isHttpsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHttpsEnabledInput() {
    return this._isHttpsEnabled;
  }

  // is_https_forced - computed: true, optional: true, required: false
  private _isHttpsForced?: boolean | cdktf.IResolvable; 
  public get isHttpsForced() {
    return this.getBooleanAttribute('is_https_forced');
  }
  public set isHttpsForced(value: boolean | cdktf.IResolvable) {
    this._isHttpsForced = value;
  }
  public resetIsHttpsForced() {
    this._isHttpsForced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHttpsForcedInput() {
    return this._isHttpsForced;
  }

  // is_origin_compression_enabled - computed: true, optional: true, required: false
  private _isOriginCompressionEnabled?: boolean | cdktf.IResolvable; 
  public get isOriginCompressionEnabled() {
    return this.getBooleanAttribute('is_origin_compression_enabled');
  }
  public set isOriginCompressionEnabled(value: boolean | cdktf.IResolvable) {
    this._isOriginCompressionEnabled = value;
  }
  public resetIsOriginCompressionEnabled() {
    this._isOriginCompressionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOriginCompressionEnabledInput() {
    return this._isOriginCompressionEnabled;
  }

  // is_response_buffering_enabled - computed: true, optional: true, required: false
  private _isResponseBufferingEnabled?: boolean | cdktf.IResolvable; 
  public get isResponseBufferingEnabled() {
    return this.getBooleanAttribute('is_response_buffering_enabled');
  }
  public set isResponseBufferingEnabled(value: boolean | cdktf.IResolvable) {
    this._isResponseBufferingEnabled = value;
  }
  public resetIsResponseBufferingEnabled() {
    this._isResponseBufferingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isResponseBufferingEnabledInput() {
    return this._isResponseBufferingEnabled;
  }

  // is_sni_enabled - computed: true, optional: true, required: false
  private _isSniEnabled?: boolean | cdktf.IResolvable; 
  public get isSniEnabled() {
    return this.getBooleanAttribute('is_sni_enabled');
  }
  public set isSniEnabled(value: boolean | cdktf.IResolvable) {
    this._isSniEnabled = value;
  }
  public resetIsSniEnabled() {
    this._isSniEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSniEnabledInput() {
    return this._isSniEnabled;
  }

  // tls_protocols - computed: true, optional: true, required: false
  private _tlsProtocols?: string[]; 
  public get tlsProtocols() {
    return this.getListAttribute('tls_protocols');
  }
  public set tlsProtocols(value: string[]) {
    this._tlsProtocols = value;
  }
  public resetTlsProtocols() {
    this._tlsProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsProtocolsInput() {
    return this._tlsProtocols;
  }

  // websocket_path_prefixes - computed: true, optional: true, required: false
  private _websocketPathPrefixes?: string[]; 
  public get websocketPathPrefixes() {
    return this.getListAttribute('websocket_path_prefixes');
  }
  public set websocketPathPrefixes(value: string[]) {
    this._websocketPathPrefixes = value;
  }
  public resetWebsocketPathPrefixes() {
    this._websocketPathPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websocketPathPrefixesInput() {
    return this._websocketPathPrefixes;
  }

  // health_checks - computed: false, optional: true, required: false
  private _healthChecks = new WaasWaasPolicyPolicyConfigHealthChecksOutputReference(this, "health_checks");
  public get healthChecks() {
    return this._healthChecks;
  }
  public putHealthChecks(value: WaasWaasPolicyPolicyConfigHealthChecks) {
    this._healthChecks.internalValue = value;
  }
  public resetHealthChecks() {
    this._healthChecks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthChecksInput() {
    return this._healthChecks.internalValue;
  }

  // load_balancing_method - computed: false, optional: true, required: false
  private _loadBalancingMethod = new WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference(this, "load_balancing_method");
  public get loadBalancingMethod() {
    return this._loadBalancingMethod;
  }
  public putLoadBalancingMethod(value: WaasWaasPolicyPolicyConfigLoadBalancingMethod) {
    this._loadBalancingMethod.internalValue = value;
  }
  public resetLoadBalancingMethod() {
    this._loadBalancingMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingMethodInput() {
    return this._loadBalancingMethod.internalValue;
  }
}
export interface WaasWaasPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#create WaasWaasPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#delete WaasWaasPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#update WaasWaasPolicy#update}
  */
  readonly update?: string;
}

export function waasWaasPolicyTimeoutsToTerraform(struct?: WaasWaasPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function waasWaasPolicyTimeoutsToHclTerraform(struct?: WaasWaasPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaasWaasPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WaasWaasPolicyTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaasWaasPolicyTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface WaasWaasPolicyWafConfigAccessRulesCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#condition WaasWaasPolicy#condition}
  */
  readonly condition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#is_case_sensitive WaasWaasPolicy#is_case_sensitive}
  */
  readonly isCaseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#value WaasWaasPolicy#value}
  */
  readonly value: string;
}

export function waasWaasPolicyWafConfigAccessRulesCriteriaToTerraform(struct?: WaasWaasPolicyWafConfigAccessRulesCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    is_case_sensitive: cdktf.booleanToTerraform(struct!.isCaseSensitive),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function waasWaasPolicyWafConfigAccessRulesCriteriaToHclTerraform(struct?: WaasWaasPolicyWafConfigAccessRulesCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.isCaseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WaasWaasPolicyWafConfigAccessRulesCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._isCaseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCaseSensitive = this._isCaseSensitive;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaasWaasPolicyWafConfigAccessRulesCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._isCaseSensitive = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._isCaseSensitive = value.isCaseSensitive;
      this._value = value.value;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // is_case_sensitive - computed: true, optional: true, required: false
  private _isCaseSensitive?: boolean | cdktf.IResolvable; 
  public get isCaseSensitive() {
    return this.getBooleanAttribute('is_case_sensitive');
  }
  public set isCaseSensitive(value: boolean | cdktf.IResolvable) {
    this._isCaseSensitive = value;
  }
  public resetIsCaseSensitive() {
    this._isCaseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCaseSensitiveInput() {
    return this._isCaseSensitive;
  }

  // value - computed: false, optional: false, required: true
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

export class WaasWaasPolicyWafConfigAccessRulesCriteriaList extends cdktf.ComplexList {
  public internalValue? : WaasWaasPolicyWafConfigAccessRulesCriteria[] | cdktf.IResolvable

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
  public get(index: number): WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference {
    return new WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#action WaasWaasPolicy#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#header WaasWaasPolicy#header}
  */
  readonly header: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#value WaasWaasPolicy#value}
  */
  readonly value?: string;
}

export function waasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationToTerraform(struct?: WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    header: cdktf.stringToTerraform(struct!.header),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function waasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationToHclTerraform(struct?: WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
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

export class WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._header = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._header = value.header;
      this._value = value.value;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // header - computed: false, optional: false, required: true
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
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

export class WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList extends cdktf.ComplexList {
  public internalValue? : WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation[] | cdktf.IResolvable

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
  public get(index: number): WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference {
    return new WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WaasWaasPolicyWafConfigAccessRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#action WaasWaasPolicy#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#block_action WaasWaasPolicy#block_action}
  */
  readonly blockAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#block_error_page_code WaasWaasPolicy#block_error_page_code}
  */
  readonly blockErrorPageCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#block_error_page_description WaasWaasPolicy#block_error_page_description}
  */
  readonly blockErrorPageDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#block_error_page_message WaasWaasPolicy#block_error_page_message}
  */
  readonly blockErrorPageMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#block_response_code WaasWaasPolicy#block_response_code}
  */
  readonly blockResponseCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#bypass_challenges WaasWaasPolicy#bypass_challenges}
  */
  readonly bypassChallenges?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#captcha_footer WaasWaasPolicy#captcha_footer}
  */
  readonly captchaFooter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#captcha_header WaasWaasPolicy#captcha_header}
  */
  readonly captchaHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#captcha_submit_label WaasWaasPolicy#captcha_submit_label}
  */
  readonly captchaSubmitLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#captcha_title WaasWaasPolicy#captcha_title}
  */
  readonly captchaTitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#name WaasWaasPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#redirect_response_code WaasWaasPolicy#redirect_response_code}
  */
  readonly redirectResponseCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#redirect_url WaasWaasPolicy#redirect_url}
  */
  readonly redirectUrl?: string;
  /**
  * criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#criteria WaasWaasPolicy#criteria}
  */
  readonly criteria: WaasWaasPolicyWafConfigAccessRulesCriteria[] | cdktf.IResolvable;
  /**
  * response_header_manipulation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#response_header_manipulation WaasWaasPolicy#response_header_manipulation}
  */
  readonly responseHeaderManipulation?: WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation[] | cdktf.IResolvable;
}

export function waasWaasPolicyWafConfigAccessRulesToTerraform(struct?: WaasWaasPolicyWafConfigAccessRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    block_action: cdktf.stringToTerraform(struct!.blockAction),
    block_error_page_code: cdktf.stringToTerraform(struct!.blockErrorPageCode),
    block_error_page_description: cdktf.stringToTerraform(struct!.blockErrorPageDescription),
    block_error_page_message: cdktf.stringToTerraform(struct!.blockErrorPageMessage),
    block_response_code: cdktf.numberToTerraform(struct!.blockResponseCode),
    bypass_challenges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bypassChallenges),
    captcha_footer: cdktf.stringToTerraform(struct!.captchaFooter),
    captcha_header: cdktf.stringToTerraform(struct!.captchaHeader),
    captcha_submit_label: cdktf.stringToTerraform(struct!.captchaSubmitLabel),
    captcha_title: cdktf.stringToTerraform(struct!.captchaTitle),
    name: cdktf.stringToTerraform(struct!.name),
    redirect_response_code: cdktf.stringToTerraform(struct!.redirectResponseCode),
    redirect_url: cdktf.stringToTerraform(struct!.redirectUrl),
    criteria: cdktf.listMapper(waasWaasPolicyWafConfigAccessRulesCriteriaToTerraform, true)(struct!.criteria),
    response_header_manipulation: cdktf.listMapper(waasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationToTerraform, true)(struct!.responseHeaderManipulation),
  }
}


export function waasWaasPolicyWafConfigAccessRulesToHclTerraform(struct?: WaasWaasPolicyWafConfigAccessRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_action: {
      value: cdktf.stringToHclTerraform(struct!.blockAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_error_page_code: {
      value: cdktf.stringToHclTerraform(struct!.blockErrorPageCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_error_page_description: {
      value: cdktf.stringToHclTerraform(struct!.blockErrorPageDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_error_page_message: {
      value: cdktf.stringToHclTerraform(struct!.blockErrorPageMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_response_code: {
      value: cdktf.numberToHclTerraform(struct!.blockResponseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bypass_challenges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bypassChallenges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    captcha_footer: {
      value: cdktf.stringToHclTerraform(struct!.captchaFooter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    captcha_header: {
      value: cdktf.stringToHclTerraform(struct!.captchaHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    captcha_submit_label: {
      value: cdktf.stringToHclTerraform(struct!.captchaSubmitLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    captcha_title: {
      value: cdktf.stringToHclTerraform(struct!.captchaTitle),
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
    redirect_response_code: {
      value: cdktf.stringToHclTerraform(struct!.redirectResponseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_url: {
      value: cdktf.stringToHclTerraform(struct!.redirectUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    criteria: {
      value: cdktf.listMapperHcl(waasWaasPolicyWafConfigAccessRulesCriteriaToHclTerraform, true)(struct!.criteria),
      isBlock: true,
      type: "list",
      storageClassType: "WaasWaasPolicyWafConfigAccessRulesCriteriaList",
    },
    response_header_manipulation: {
      value: cdktf.listMapperHcl(waasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationToHclTerraform, true)(struct!.responseHeaderManipulation),
      isBlock: true,
      type: "list",
      storageClassType: "WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaasWaasPolicyWafConfigAccessRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WaasWaasPolicyWafConfigAccessRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._blockAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockAction = this._blockAction;
    }
    if (this._blockErrorPageCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockErrorPageCode = this._blockErrorPageCode;
    }
    if (this._blockErrorPageDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockErrorPageDescription = this._blockErrorPageDescription;
    }
    if (this._blockErrorPageMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockErrorPageMessage = this._blockErrorPageMessage;
    }
    if (this._blockResponseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockResponseCode = this._blockResponseCode;
    }
    if (this._bypassChallenges !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassChallenges = this._bypassChallenges;
    }
    if (this._captchaFooter !== undefined) {
      hasAnyValues = true;
      internalValueResult.captchaFooter = this._captchaFooter;
    }
    if (this._captchaHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.captchaHeader = this._captchaHeader;
    }
    if (this._captchaSubmitLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.captchaSubmitLabel = this._captchaSubmitLabel;
    }
    if (this._captchaTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.captchaTitle = this._captchaTitle;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._redirectResponseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectResponseCode = this._redirectResponseCode;
    }
    if (this._redirectUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUrl = this._redirectUrl;
    }
    if (this._criteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria?.internalValue;
    }
    if (this._responseHeaderManipulation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeaderManipulation = this._responseHeaderManipulation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaasWaasPolicyWafConfigAccessRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._blockAction = undefined;
      this._blockErrorPageCode = undefined;
      this._blockErrorPageDescription = undefined;
      this._blockErrorPageMessage = undefined;
      this._blockResponseCode = undefined;
      this._bypassChallenges = undefined;
      this._captchaFooter = undefined;
      this._captchaHeader = undefined;
      this._captchaSubmitLabel = undefined;
      this._captchaTitle = undefined;
      this._name = undefined;
      this._redirectResponseCode = undefined;
      this._redirectUrl = undefined;
      this._criteria.internalValue = undefined;
      this._responseHeaderManipulation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._blockAction = value.blockAction;
      this._blockErrorPageCode = value.blockErrorPageCode;
      this._blockErrorPageDescription = value.blockErrorPageDescription;
      this._blockErrorPageMessage = value.blockErrorPageMessage;
      this._blockResponseCode = value.blockResponseCode;
      this._bypassChallenges = value.bypassChallenges;
      this._captchaFooter = value.captchaFooter;
      this._captchaHeader = value.captchaHeader;
      this._captchaSubmitLabel = value.captchaSubmitLabel;
      this._captchaTitle = value.captchaTitle;
      this._name = value.name;
      this._redirectResponseCode = value.redirectResponseCode;
      this._redirectUrl = value.redirectUrl;
      this._criteria.internalValue = value.criteria;
      this._responseHeaderManipulation.internalValue = value.responseHeaderManipulation;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // block_action - computed: true, optional: true, required: false
  private _blockAction?: string; 
  public get blockAction() {
    return this.getStringAttribute('block_action');
  }
  public set blockAction(value: string) {
    this._blockAction = value;
  }
  public resetBlockAction() {
    this._blockAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockActionInput() {
    return this._blockAction;
  }

  // block_error_page_code - computed: true, optional: true, required: false
  private _blockErrorPageCode?: string; 
  public get blockErrorPageCode() {
    return this.getStringAttribute('block_error_page_code');
  }
  public set blockErrorPageCode(value: string) {
    this._blockErrorPageCode = value;
  }
  public resetBlockErrorPageCode() {
    this._blockErrorPageCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockErrorPageCodeInput() {
    return this._blockErrorPageCode;
  }

  // block_error_page_description - computed: true, optional: true, required: false
  private _blockErrorPageDescription?: string; 
  public get blockErrorPageDescription() {
    return this.getStringAttribute('block_error_page_description');
  }
  public set blockErrorPageDescription(value: string) {
    this._blockErrorPageDescription = value;
  }
  public resetBlockErrorPageDescription() {
    this._blockErrorPageDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockErrorPageDescriptionInput() {
    return this._blockErrorPageDescription;
  }

  // block_error_page_message - computed: true, optional: true, required: false
  private _blockErrorPageMessage?: string; 
  public get blockErrorPageMessage() {
    return this.getStringAttribute('block_error_page_message');
  }
  public set blockErrorPageMessage(value: string) {
    this._blockErrorPageMessage = value;
  }
  public resetBlockErrorPageMessage() {
    this._blockErrorPageMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockErrorPageMessageInput() {
    return this._blockErrorPageMessage;
  }

  // block_response_code - computed: true, optional: true, required: false
  private _blockResponseCode?: number; 
  public get blockResponseCode() {
    return this.getNumberAttribute('block_response_code');
  }
  public set blockResponseCode(value: number) {
    this._blockResponseCode = value;
  }
  public resetBlockResponseCode() {
    this._blockResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockResponseCodeInput() {
    return this._blockResponseCode;
  }

  // bypass_challenges - computed: true, optional: true, required: false
  private _bypassChallenges?: string[]; 
  public get bypassChallenges() {
    return this.getListAttribute('bypass_challenges');
  }
  public set bypassChallenges(value: string[]) {
    this._bypassChallenges = value;
  }
  public resetBypassChallenges() {
    this._bypassChallenges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassChallengesInput() {
    return this._bypassChallenges;
  }

  // captcha_footer - computed: true, optional: true, required: false
  private _captchaFooter?: string; 
  public get captchaFooter() {
    return this.getStringAttribute('captcha_footer');
  }
  public set captchaFooter(value: string) {
    this._captchaFooter = value;
  }
  public resetCaptchaFooter() {
    this._captchaFooter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaFooterInput() {
    return this._captchaFooter;
  }

  // captcha_header - computed: true, optional: true, required: false
  private _captchaHeader?: string; 
  public get captchaHeader() {
    return this.getStringAttribute('captcha_header');
  }
  public set captchaHeader(value: string) {
    this._captchaHeader = value;
  }
  public resetCaptchaHeader() {
    this._captchaHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaHeaderInput() {
    return this._captchaHeader;
  }

  // captcha_submit_label - computed: true, optional: true, required: false
  private _captchaSubmitLabel?: string; 
  public get captchaSubmitLabel() {
    return this.getStringAttribute('captcha_submit_label');
  }
  public set captchaSubmitLabel(value: string) {
    this._captchaSubmitLabel = value;
  }
  public resetCaptchaSubmitLabel() {
    this._captchaSubmitLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaSubmitLabelInput() {
    return this._captchaSubmitLabel;
  }

  // captcha_title - computed: true, optional: true, required: false
  private _captchaTitle?: string; 
  public get captchaTitle() {
    return this.getStringAttribute('captcha_title');
  }
  public set captchaTitle(value: string) {
    this._captchaTitle = value;
  }
  public resetCaptchaTitle() {
    this._captchaTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaTitleInput() {
    return this._captchaTitle;
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

  // redirect_response_code - computed: true, optional: true, required: false
  private _redirectResponseCode?: string; 
  public get redirectResponseCode() {
    return this.getStringAttribute('redirect_response_code');
  }
  public set redirectResponseCode(value: string) {
    this._redirectResponseCode = value;
  }
  public resetRedirectResponseCode() {
    this._redirectResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectResponseCodeInput() {
    return this._redirectResponseCode;
  }

  // redirect_url - computed: true, optional: true, required: false
  private _redirectUrl?: string; 
  public get redirectUrl() {
    return this.getStringAttribute('redirect_url');
  }
  public set redirectUrl(value: string) {
    this._redirectUrl = value;
  }
  public resetRedirectUrl() {
    this._redirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrlInput() {
    return this._redirectUrl;
  }

  // criteria - computed: false, optional: false, required: true
  private _criteria = new WaasWaasPolicyWafConfigAccessRulesCriteriaList(this, "criteria", false);
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: WaasWaasPolicyWafConfigAccessRulesCriteria[] | cdktf.IResolvable) {
    this._criteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }

  // response_header_manipulation - computed: false, optional: true, required: false
  private _responseHeaderManipulation = new WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList(this, "response_header_manipulation", false);
  public get responseHeaderManipulation() {
    return this._responseHeaderManipulation;
  }
  public putResponseHeaderManipulation(value: WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation[] | cdktf.IResolvable) {
    this._responseHeaderManipulation.internalValue = value;
  }
  public resetResponseHeaderManipulation() {
    this._responseHeaderManipulation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeaderManipulationInput() {
    return this._responseHeaderManipulation.internalValue;
  }
}

export class WaasWaasPolicyWafConfigAccessRulesList extends cdktf.ComplexList {
  public internalValue? : WaasWaasPolicyWafConfigAccessRules[] | cdktf.IResolvable

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
  public get(index: number): WaasWaasPolicyWafConfigAccessRulesOutputReference {
    return new WaasWaasPolicyWafConfigAccessRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WaasWaasPolicyWafConfigAddressRateLimiting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#allowed_rate_per_address WaasWaasPolicy#allowed_rate_per_address}
  */
  readonly allowedRatePerAddress?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#block_response_code WaasWaasPolicy#block_response_code}
  */
  readonly blockResponseCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#is_enabled WaasWaasPolicy#is_enabled}
  */
  readonly isEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#max_delayed_count_per_address WaasWaasPolicy#max_delayed_count_per_address}
  */
  readonly maxDelayedCountPerAddress?: number;
}

export function waasWaasPolicyWafConfigAddressRateLimitingToTerraform(struct?: WaasWaasPolicyWafConfigAddressRateLimitingOutputReference | WaasWaasPolicyWafConfigAddressRateLimiting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_rate_per_address: cdktf.numberToTerraform(struct!.allowedRatePerAddress),
    block_response_code: cdktf.numberToTerraform(struct!.blockResponseCode),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    max_delayed_count_per_address: cdktf.numberToTerraform(struct!.maxDelayedCountPerAddress),
  }
}


export function waasWaasPolicyWafConfigAddressRateLimitingToHclTerraform(struct?: WaasWaasPolicyWafConfigAddressRateLimitingOutputReference | WaasWaasPolicyWafConfigAddressRateLimiting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_rate_per_address: {
      value: cdktf.numberToHclTerraform(struct!.allowedRatePerAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    block_response_code: {
      value: cdktf.numberToHclTerraform(struct!.blockResponseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_delayed_count_per_address: {
      value: cdktf.numberToHclTerraform(struct!.maxDelayedCountPerAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaasWaasPolicyWafConfigAddressRateLimitingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WaasWaasPolicyWafConfigAddressRateLimiting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedRatePerAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedRatePerAddress = this._allowedRatePerAddress;
    }
    if (this._blockResponseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockResponseCode = this._blockResponseCode;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._maxDelayedCountPerAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDelayedCountPerAddress = this._maxDelayedCountPerAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaasWaasPolicyWafConfigAddressRateLimiting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedRatePerAddress = undefined;
      this._blockResponseCode = undefined;
      this._isEnabled = undefined;
      this._maxDelayedCountPerAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedRatePerAddress = value.allowedRatePerAddress;
      this._blockResponseCode = value.blockResponseCode;
      this._isEnabled = value.isEnabled;
      this._maxDelayedCountPerAddress = value.maxDelayedCountPerAddress;
    }
  }

  // allowed_rate_per_address - computed: true, optional: true, required: false
  private _allowedRatePerAddress?: number; 
  public get allowedRatePerAddress() {
    return this.getNumberAttribute('allowed_rate_per_address');
  }
  public set allowedRatePerAddress(value: number) {
    this._allowedRatePerAddress = value;
  }
  public resetAllowedRatePerAddress() {
    this._allowedRatePerAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRatePerAddressInput() {
    return this._allowedRatePerAddress;
  }

  // block_response_code - computed: true, optional: true, required: false
  private _blockResponseCode?: number; 
  public get blockResponseCode() {
    return this.getNumberAttribute('block_response_code');
  }
  public set blockResponseCode(value: number) {
    this._blockResponseCode = value;
  }
  public resetBlockResponseCode() {
    this._blockResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockResponseCodeInput() {
    return this._blockResponseCode;
  }

  // is_enabled - computed: false, optional: false, required: true
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // max_delayed_count_per_address - computed: true, optional: true, required: false
  private _maxDelayedCountPerAddress?: number; 
  public get maxDelayedCountPerAddress() {
    return this.getNumberAttribute('max_delayed_count_per_address');
  }
  public set maxDelayedCountPerAddress(value: number) {
    this._maxDelayedCountPerAddress = value;
  }
  public resetMaxDelayedCountPerAddress() {
    this._maxDelayedCountPerAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDelayedCountPerAddressInput() {
    return this._maxDelayedCountPerAddress;
  }
}
export interface WaasWaasPolicyWafConfigCachingRulesCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#condition WaasWaasPolicy#condition}
  */
  readonly condition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#value WaasWaasPolicy#value}
  */
  readonly value: string;
}

export function waasWaasPolicyWafConfigCachingRulesCriteriaToTerraform(struct?: WaasWaasPolicyWafConfigCachingRulesCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function waasWaasPolicyWafConfigCachingRulesCriteriaToHclTerraform(struct?: WaasWaasPolicyWafConfigCachingRulesCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
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

export class WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WaasWaasPolicyWafConfigCachingRulesCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaasWaasPolicyWafConfigCachingRulesCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._value = value.value;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // value - computed: false, optional: false, required: true
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

export class WaasWaasPolicyWafConfigCachingRulesCriteriaList extends cdktf.ComplexList {
  public internalValue? : WaasWaasPolicyWafConfigCachingRulesCriteria[] | cdktf.IResolvable

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
  public get(index: number): WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference {
    return new WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WaasWaasPolicyWafConfigCachingRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#action WaasWaasPolicy#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#caching_duration WaasWaasPolicy#caching_duration}
  */
  readonly cachingDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#client_caching_duration WaasWaasPolicy#client_caching_duration}
  */
  readonly clientCachingDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#is_client_caching_enabled WaasWaasPolicy#is_client_caching_enabled}
  */
  readonly isClientCachingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#key WaasWaasPolicy#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#name WaasWaasPolicy#name}
  */
  readonly name: string;
  /**
  * criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#criteria WaasWaasPolicy#criteria}
  */
  readonly criteria: WaasWaasPolicyWafConfigCachingRulesCriteria[] | cdktf.IResolvable;
}

export function waasWaasPolicyWafConfigCachingRulesToTerraform(struct?: WaasWaasPolicyWafConfigCachingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    caching_duration: cdktf.stringToTerraform(struct!.cachingDuration),
    client_caching_duration: cdktf.stringToTerraform(struct!.clientCachingDuration),
    is_client_caching_enabled: cdktf.booleanToTerraform(struct!.isClientCachingEnabled),
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    criteria: cdktf.listMapper(waasWaasPolicyWafConfigCachingRulesCriteriaToTerraform, true)(struct!.criteria),
  }
}


export function waasWaasPolicyWafConfigCachingRulesToHclTerraform(struct?: WaasWaasPolicyWafConfigCachingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    caching_duration: {
      value: cdktf.stringToHclTerraform(struct!.cachingDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_caching_duration: {
      value: cdktf.stringToHclTerraform(struct!.clientCachingDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_client_caching_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isClientCachingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    criteria: {
      value: cdktf.listMapperHcl(waasWaasPolicyWafConfigCachingRulesCriteriaToHclTerraform, true)(struct!.criteria),
      isBlock: true,
      type: "list",
      storageClassType: "WaasWaasPolicyWafConfigCachingRulesCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaasWaasPolicyWafConfigCachingRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WaasWaasPolicyWafConfigCachingRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._cachingDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachingDuration = this._cachingDuration;
    }
    if (this._clientCachingDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCachingDuration = this._clientCachingDuration;
    }
    if (this._isClientCachingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isClientCachingEnabled = this._isClientCachingEnabled;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._criteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaasWaasPolicyWafConfigCachingRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._cachingDuration = undefined;
      this._clientCachingDuration = undefined;
      this._isClientCachingEnabled = undefined;
      this._key = undefined;
      this._name = undefined;
      this._criteria.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._cachingDuration = value.cachingDuration;
      this._clientCachingDuration = value.clientCachingDuration;
      this._isClientCachingEnabled = value.isClientCachingEnabled;
      this._key = value.key;
      this._name = value.name;
      this._criteria.internalValue = value.criteria;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // caching_duration - computed: false, optional: true, required: false
  private _cachingDuration?: string; 
  public get cachingDuration() {
    return this.getStringAttribute('caching_duration');
  }
  public set cachingDuration(value: string) {
    this._cachingDuration = value;
  }
  public resetCachingDuration() {
    this._cachingDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingDurationInput() {
    return this._cachingDuration;
  }

  // client_caching_duration - computed: false, optional: true, required: false
  private _clientCachingDuration?: string; 
  public get clientCachingDuration() {
    return this.getStringAttribute('client_caching_duration');
  }
  public set clientCachingDuration(value: string) {
    this._clientCachingDuration = value;
  }
  public resetClientCachingDuration() {
    this._clientCachingDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCachingDurationInput() {
    return this._clientCachingDuration;
  }

  // is_client_caching_enabled - computed: true, optional: true, required: false
  private _isClientCachingEnabled?: boolean | cdktf.IResolvable; 
  public get isClientCachingEnabled() {
    return this.getBooleanAttribute('is_client_caching_enabled');
  }
  public set isClientCachingEnabled(value: boolean | cdktf.IResolvable) {
    this._isClientCachingEnabled = value;
  }
  public resetIsClientCachingEnabled() {
    this._isClientCachingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isClientCachingEnabledInput() {
    return this._isClientCachingEnabled;
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

  // criteria - computed: false, optional: false, required: true
  private _criteria = new WaasWaasPolicyWafConfigCachingRulesCriteriaList(this, "criteria", false);
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: WaasWaasPolicyWafConfigCachingRulesCriteria[] | cdktf.IResolvable) {
    this._criteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }
}

export class WaasWaasPolicyWafConfigCachingRulesList extends cdktf.ComplexList {
  public internalValue? : WaasWaasPolicyWafConfigCachingRules[] | cdktf.IResolvable

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
  public get(index: number): WaasWaasPolicyWafConfigCachingRulesOutputReference {
    return new WaasWaasPolicyWafConfigCachingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WaasWaasPolicyWafConfigCaptchas {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#failure_message WaasWaasPolicy#failure_message}
  */
  readonly failureMessage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#footer_text WaasWaasPolicy#footer_text}
  */
  readonly footerText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#header_text WaasWaasPolicy#header_text}
  */
  readonly headerText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#session_expiration_in_seconds WaasWaasPolicy#session_expiration_in_seconds}
  */
  readonly sessionExpirationInSeconds: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#submit_label WaasWaasPolicy#submit_label}
  */
  readonly submitLabel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#title WaasWaasPolicy#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#url WaasWaasPolicy#url}
  */
  readonly url: string;
}

export function waasWaasPolicyWafConfigCaptchasToTerraform(struct?: WaasWaasPolicyWafConfigCaptchas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_message: cdktf.stringToTerraform(struct!.failureMessage),
    footer_text: cdktf.stringToTerraform(struct!.footerText),
    header_text: cdktf.stringToTerraform(struct!.headerText),
    session_expiration_in_seconds: cdktf.numberToTerraform(struct!.sessionExpirationInSeconds),
    submit_label: cdktf.stringToTerraform(struct!.submitLabel),
    title: cdktf.stringToTerraform(struct!.title),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function waasWaasPolicyWafConfigCaptchasToHclTerraform(struct?: WaasWaasPolicyWafConfigCaptchas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failure_message: {
      value: cdktf.stringToHclTerraform(struct!.failureMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    footer_text: {
      value: cdktf.stringToHclTerraform(struct!.footerText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_text: {
      value: cdktf.stringToHclTerraform(struct!.headerText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_expiration_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.sessionExpirationInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    submit_label: {
      value: cdktf.stringToHclTerraform(struct!.submitLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaasWaasPolicyWafConfigCaptchasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WaasWaasPolicyWafConfigCaptchas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureMessage = this._failureMessage;
    }
    if (this._footerText !== undefined) {
      hasAnyValues = true;
      internalValueResult.footerText = this._footerText;
    }
    if (this._headerText !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerText = this._headerText;
    }
    if (this._sessionExpirationInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionExpirationInSeconds = this._sessionExpirationInSeconds;
    }
    if (this._submitLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.submitLabel = this._submitLabel;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaasWaasPolicyWafConfigCaptchas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failureMessage = undefined;
      this._footerText = undefined;
      this._headerText = undefined;
      this._sessionExpirationInSeconds = undefined;
      this._submitLabel = undefined;
      this._title = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failureMessage = value.failureMessage;
      this._footerText = value.footerText;
      this._headerText = value.headerText;
      this._sessionExpirationInSeconds = value.sessionExpirationInSeconds;
      this._submitLabel = value.submitLabel;
      this._title = value.title;
      this._url = value.url;
    }
  }

  // failure_message - computed: false, optional: false, required: true
  private _failureMessage?: string; 
  public get failureMessage() {
    return this.getStringAttribute('failure_message');
  }
  public set failureMessage(value: string) {
    this._failureMessage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failureMessageInput() {
    return this._failureMessage;
  }

  // footer_text - computed: true, optional: true, required: false
  private _footerText?: string; 
  public get footerText() {
    return this.getStringAttribute('footer_text');
  }
  public set footerText(value: string) {
    this._footerText = value;
  }
  public resetFooterText() {
    this._footerText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get footerTextInput() {
    return this._footerText;
  }

  // header_text - computed: true, optional: true, required: false
  private _headerText?: string; 
  public get headerText() {
    return this.getStringAttribute('header_text');
  }
  public set headerText(value: string) {
    this._headerText = value;
  }
  public resetHeaderText() {
    this._headerText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerTextInput() {
    return this._headerText;
  }

  // session_expiration_in_seconds - computed: false, optional: false, required: true
  private _sessionExpirationInSeconds?: number; 
  public get sessionExpirationInSeconds() {
    return this.getNumberAttribute('session_expiration_in_seconds');
  }
  public set sessionExpirationInSeconds(value: number) {
    this._sessionExpirationInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionExpirationInSecondsInput() {
    return this._sessionExpirationInSeconds;
  }

  // submit_label - computed: false, optional: false, required: true
  private _submitLabel?: string; 
  public get submitLabel() {
    return this.getStringAttribute('submit_label');
  }
  public set submitLabel(value: string) {
    this._submitLabel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get submitLabelInput() {
    return this._submitLabel;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class WaasWaasPolicyWafConfigCaptchasList extends cdktf.ComplexList {
  public internalValue? : WaasWaasPolicyWafConfigCaptchas[] | cdktf.IResolvable

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
  public get(index: number): WaasWaasPolicyWafConfigCaptchasOutputReference {
    return new WaasWaasPolicyWafConfigCaptchasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WaasWaasPolicyWafConfigCustomProtectionRulesExclusions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#exclusions WaasWaasPolicy#exclusions}
  */
  readonly exclusions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#target WaasWaasPolicy#target}
  */
  readonly target?: string;
}

export function waasWaasPolicyWafConfigCustomProtectionRulesExclusionsToTerraform(struct?: WaasWaasPolicyWafConfigCustomProtectionRulesExclusions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclusions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclusions),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function waasWaasPolicyWafConfigCustomProtectionRulesExclusionsToHclTerraform(struct?: WaasWaasPolicyWafConfigCustomProtectionRulesExclusions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclusions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclusions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WaasWaasPolicyWafConfigCustomProtectionRulesExclusions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclusions !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusions = this._exclusions;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaasWaasPolicyWafConfigCustomProtectionRulesExclusions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclusions = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclusions = value.exclusions;
      this._target = value.target;
    }
  }

  // exclusions - computed: true, optional: true, required: false
  private _exclusions?: string[]; 
  public get exclusions() {
    return this.getListAttribute('exclusions');
  }
  public set exclusions(value: string[]) {
    this._exclusions = value;
  }
  public resetExclusions() {
    this._exclusions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionsInput() {
    return this._exclusions;
  }

  // target - computed: true, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}

export class WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList extends cdktf.ComplexList {
  public internalValue? : WaasWaasPolicyWafConfigCustomProtectionRulesExclusions[] | cdktf.IResolvable

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
  public get(index: number): WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference {
    return new WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WaasWaasPolicyWafConfigCustomProtectionRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#action WaasWaasPolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#id WaasWaasPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * exclusions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#exclusions WaasWaasPolicy#exclusions}
  */
  readonly exclusions?: WaasWaasPolicyWafConfigCustomProtectionRulesExclusions[] | cdktf.IResolvable;
}

export function waasWaasPolicyWafConfigCustomProtectionRulesToTerraform(struct?: WaasWaasPolicyWafConfigCustomProtectionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    id: cdktf.stringToTerraform(struct!.id),
    exclusions: cdktf.listMapper(waasWaasPolicyWafConfigCustomProtectionRulesExclusionsToTerraform, true)(struct!.exclusions),
  }
}


export function waasWaasPolicyWafConfigCustomProtectionRulesToHclTerraform(struct?: WaasWaasPolicyWafConfigCustomProtectionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclusions: {
      value: cdktf.listMapperHcl(waasWaasPolicyWafConfigCustomProtectionRulesExclusionsToHclTerraform, true)(struct!.exclusions),
      isBlock: true,
      type: "list",
      storageClassType: "WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WaasWaasPolicyWafConfigCustomProtectionRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._exclusions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusions = this._exclusions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaasWaasPolicyWafConfigCustomProtectionRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._id = undefined;
      this._exclusions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._id = value.id;
      this._exclusions.internalValue = value.exclusions;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // exclusions - computed: false, optional: true, required: false
  private _exclusions = new WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList(this, "exclusions", false);
  public get exclusions() {
    return this._exclusions;
  }
  public putExclusions(value: WaasWaasPolicyWafConfigCustomProtectionRulesExclusions[] | cdktf.IResolvable) {
    this._exclusions.internalValue = value;
  }
  public resetExclusions() {
    this._exclusions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionsInput() {
    return this._exclusions.internalValue;
  }
}

export class WaasWaasPolicyWafConfigCustomProtectionRulesList extends cdktf.ComplexList {
  public internalValue? : WaasWaasPolicyWafConfigCustomProtectionRules[] | cdktf.IResolvable

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
  public get(index: number): WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference {
    return new WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#block_action WaasWaasPolicy#block_action}
  */
  readonly blockAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#block_error_page_code WaasWaasPolicy#block_error_page_code}
  */
  readonly blockErrorPageCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#block_error_page_description WaasWaasPolicy#block_error_page_description}
  */
  readonly blockErrorPageDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#block_error_page_message WaasWaasPolicy#block_error_page_message}
  */
  readonly blockErrorPageMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#block_response_code WaasWaasPolicy#block_response_code}
  */
  readonly blockResponseCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#captcha_footer WaasWaasPolicy#captcha_footer}
  */
  readonly captchaFooter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#captcha_header WaasWaasPolicy#captcha_header}
  */
  readonly captchaHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#captcha_submit_label WaasWaasPolicy#captcha_submit_label}
  */
  readonly captchaSubmitLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#captcha_title WaasWaasPolicy#captcha_title}
  */
  readonly captchaTitle?: string;
}

export function waasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsToTerraform(struct?: WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference | WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_action: cdktf.stringToTerraform(struct!.blockAction),
    block_error_page_code: cdktf.stringToTerraform(struct!.blockErrorPageCode),
    block_error_page_description: cdktf.stringToTerraform(struct!.blockErrorPageDescription),
    block_error_page_message: cdktf.stringToTerraform(struct!.blockErrorPageMessage),
    block_response_code: cdktf.numberToTerraform(struct!.blockResponseCode),
    captcha_footer: cdktf.stringToTerraform(struct!.captchaFooter),
    captcha_header: cdktf.stringToTerraform(struct!.captchaHeader),
    captcha_submit_label: cdktf.stringToTerraform(struct!.captchaSubmitLabel),
    captcha_title: cdktf.stringToTerraform(struct!.captchaTitle),
  }
}


export function waasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsToHclTerraform(struct?: WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference | WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_action: {
      value: cdktf.stringToHclTerraform(struct!.blockAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_error_page_code: {
      value: cdktf.stringToHclTerraform(struct!.blockErrorPageCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_error_page_description: {
      value: cdktf.stringToHclTerraform(struct!.blockErrorPageDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_error_page_message: {
      value: cdktf.stringToHclTerraform(struct!.blockErrorPageMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_response_code: {
      value: cdktf.numberToHclTerraform(struct!.blockResponseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    captcha_footer: {
      value: cdktf.stringToHclTerraform(struct!.captchaFooter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    captcha_header: {
      value: cdktf.stringToHclTerraform(struct!.captchaHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    captcha_submit_label: {
      value: cdktf.stringToHclTerraform(struct!.captchaSubmitLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    captcha_title: {
      value: cdktf.stringToHclTerraform(struct!.captchaTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockAction = this._blockAction;
    }
    if (this._blockErrorPageCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockErrorPageCode = this._blockErrorPageCode;
    }
    if (this._blockErrorPageDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockErrorPageDescription = this._blockErrorPageDescription;
    }
    if (this._blockErrorPageMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockErrorPageMessage = this._blockErrorPageMessage;
    }
    if (this._blockResponseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockResponseCode = this._blockResponseCode;
    }
    if (this._captchaFooter !== undefined) {
      hasAnyValues = true;
      internalValueResult.captchaFooter = this._captchaFooter;
    }
    if (this._captchaHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.captchaHeader = this._captchaHeader;
    }
    if (this._captchaSubmitLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.captchaSubmitLabel = this._captchaSubmitLabel;
    }
    if (this._captchaTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.captchaTitle = this._captchaTitle;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockAction = undefined;
      this._blockErrorPageCode = undefined;
      this._blockErrorPageDescription = undefined;
      this._blockErrorPageMessage = undefined;
      this._blockResponseCode = undefined;
      this._captchaFooter = undefined;
      this._captchaHeader = undefined;
      this._captchaSubmitLabel = undefined;
      this._captchaTitle = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockAction = value.blockAction;
      this._blockErrorPageCode = value.blockErrorPageCode;
      this._blockErrorPageDescription = value.blockErrorPageDescription;
      this._blockErrorPageMessage = value.blockErrorPageMessage;
      this._blockResponseCode = value.blockResponseCode;
      this._captchaFooter = value.captchaFooter;
      this._captchaHeader = value.captchaHeader;
      this._captchaSubmitLabel = value.captchaSubmitLabel;
      this._captchaTitle = value.captchaTitle;
    }
  }

  // block_action - computed: true, optional: true, required: false
  private _blockAction?: string; 
  public get blockAction() {
    return this.getStringAttribute('block_action');
  }
  public set blockAction(value: string) {
    this._blockAction = value;
  }
  public resetBlockAction() {
    this._blockAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockActionInput() {
    return this._blockAction;
  }

  // block_error_page_code - computed: true, optional: true, required: false
  private _blockErrorPageCode?: string; 
  public get blockErrorPageCode() {
    return this.getStringAttribute('block_error_page_code');
  }
  public set blockErrorPageCode(value: string) {
    this._blockErrorPageCode = value;
  }
  public resetBlockErrorPageCode() {
    this._blockErrorPageCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockErrorPageCodeInput() {
    return this._blockErrorPageCode;
  }

  // block_error_page_description - computed: true, optional: true, required: false
  private _blockErrorPageDescription?: string; 
  public get blockErrorPageDescription() {
    return this.getStringAttribute('block_error_page_description');
  }
  public set blockErrorPageDescription(value: string) {
    this._blockErrorPageDescription = value;
  }
  public resetBlockErrorPageDescription() {
    this._blockErrorPageDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockErrorPageDescriptionInput() {
    return this._blockErrorPageDescription;
  }

  // block_error_page_message - computed: true, optional: true, required: false
  private _blockErrorPageMessage?: string; 
  public get blockErrorPageMessage() {
    return this.getStringAttribute('block_error_page_message');
  }
  public set blockErrorPageMessage(value: string) {
    this._blockErrorPageMessage = value;
  }
  public resetBlockErrorPageMessage() {
    this._blockErrorPageMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockErrorPageMessageInput() {
    return this._blockErrorPageMessage;
  }

  // block_response_code - computed: true, optional: true, required: false
  private _blockResponseCode?: number; 
  public get blockResponseCode() {
    return this.getNumberAttribute('block_response_code');
  }
  public set blockResponseCode(value: number) {
    this._blockResponseCode = value;
  }
  public resetBlockResponseCode() {
    this._blockResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockResponseCodeInput() {
    return this._blockResponseCode;
  }

  // captcha_footer - computed: true, optional: true, required: false
  private _captchaFooter?: string; 
  public get captchaFooter() {
    return this.getStringAttribute('captcha_footer');
  }
  public set captchaFooter(value: string) {
    this._captchaFooter = value;
  }
  public resetCaptchaFooter() {
    this._captchaFooter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaFooterInput() {
    return this._captchaFooter;
  }

  // captcha_header - computed: true, optional: true, required: false
  private _captchaHeader?: string; 
  public get captchaHeader() {
    return this.getStringAttribute('captcha_header');
  }
  public set captchaHeader(value: string) {
    this._captchaHeader = value;
  }
  public resetCaptchaHeader() {
    this._captchaHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaHeaderInput() {
    return this._captchaHeader;
  }

  // captcha_submit_label - computed: true, optional: true, required: false
  private _captchaSubmitLabel?: string; 
  public get captchaSubmitLabel() {
    return this.getStringAttribute('captcha_submit_label');
  }
  public set captchaSubmitLabel(value: string) {
    this._captchaSubmitLabel = value;
  }
  public resetCaptchaSubmitLabel() {
    this._captchaSubmitLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaSubmitLabelInput() {
    return this._captchaSubmitLabel;
  }

  // captcha_title - computed: true, optional: true, required: false
  private _captchaTitle?: string; 
  public get captchaTitle() {
    return this.getStringAttribute('captcha_title');
  }
  public set captchaTitle(value: string) {
    this._captchaTitle = value;
  }
  public resetCaptchaTitle() {
    this._captchaTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaTitleInput() {
    return this._captchaTitle;
  }
}
export interface WaasWaasPolicyWafConfigDeviceFingerprintChallenge {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#action WaasWaasPolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#action_expiration_in_seconds WaasWaasPolicy#action_expiration_in_seconds}
  */
  readonly actionExpirationInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#failure_threshold WaasWaasPolicy#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#failure_threshold_expiration_in_seconds WaasWaasPolicy#failure_threshold_expiration_in_seconds}
  */
  readonly failureThresholdExpirationInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#is_enabled WaasWaasPolicy#is_enabled}
  */
  readonly isEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#max_address_count WaasWaasPolicy#max_address_count}
  */
  readonly maxAddressCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#max_address_count_expiration_in_seconds WaasWaasPolicy#max_address_count_expiration_in_seconds}
  */
  readonly maxAddressCountExpirationInSeconds?: number;
  /**
  * challenge_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#challenge_settings WaasWaasPolicy#challenge_settings}
  */
  readonly challengeSettings?: WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings;
}

export function waasWaasPolicyWafConfigDeviceFingerprintChallengeToTerraform(struct?: WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference | WaasWaasPolicyWafConfigDeviceFingerprintChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    action_expiration_in_seconds: cdktf.numberToTerraform(struct!.actionExpirationInSeconds),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    failure_threshold_expiration_in_seconds: cdktf.numberToTerraform(struct!.failureThresholdExpirationInSeconds),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    max_address_count: cdktf.numberToTerraform(struct!.maxAddressCount),
    max_address_count_expiration_in_seconds: cdktf.numberToTerraform(struct!.maxAddressCountExpirationInSeconds),
    challenge_settings: waasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsToTerraform(struct!.challengeSettings),
  }
}


export function waasWaasPolicyWafConfigDeviceFingerprintChallengeToHclTerraform(struct?: WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference | WaasWaasPolicyWafConfigDeviceFingerprintChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_expiration_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.actionExpirationInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    failure_threshold_expiration_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.failureThresholdExpirationInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_address_count: {
      value: cdktf.numberToHclTerraform(struct!.maxAddressCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_address_count_expiration_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maxAddressCountExpirationInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    challenge_settings: {
      value: waasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsToHclTerraform(struct!.challengeSettings),
      isBlock: true,
      type: "list",
      storageClassType: "WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WaasWaasPolicyWafConfigDeviceFingerprintChallenge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._actionExpirationInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionExpirationInSeconds = this._actionExpirationInSeconds;
    }
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._failureThresholdExpirationInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThresholdExpirationInSeconds = this._failureThresholdExpirationInSeconds;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._maxAddressCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAddressCount = this._maxAddressCount;
    }
    if (this._maxAddressCountExpirationInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAddressCountExpirationInSeconds = this._maxAddressCountExpirationInSeconds;
    }
    if (this._challengeSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengeSettings = this._challengeSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaasWaasPolicyWafConfigDeviceFingerprintChallenge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._actionExpirationInSeconds = undefined;
      this._failureThreshold = undefined;
      this._failureThresholdExpirationInSeconds = undefined;
      this._isEnabled = undefined;
      this._maxAddressCount = undefined;
      this._maxAddressCountExpirationInSeconds = undefined;
      this._challengeSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._actionExpirationInSeconds = value.actionExpirationInSeconds;
      this._failureThreshold = value.failureThreshold;
      this._failureThresholdExpirationInSeconds = value.failureThresholdExpirationInSeconds;
      this._isEnabled = value.isEnabled;
      this._maxAddressCount = value.maxAddressCount;
      this._maxAddressCountExpirationInSeconds = value.maxAddressCountExpirationInSeconds;
      this._challengeSettings.internalValue = value.challengeSettings;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // action_expiration_in_seconds - computed: true, optional: true, required: false
  private _actionExpirationInSeconds?: number; 
  public get actionExpirationInSeconds() {
    return this.getNumberAttribute('action_expiration_in_seconds');
  }
  public set actionExpirationInSeconds(value: number) {
    this._actionExpirationInSeconds = value;
  }
  public resetActionExpirationInSeconds() {
    this._actionExpirationInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionExpirationInSecondsInput() {
    return this._actionExpirationInSeconds;
  }

  // failure_threshold - computed: true, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // failure_threshold_expiration_in_seconds - computed: true, optional: true, required: false
  private _failureThresholdExpirationInSeconds?: number; 
  public get failureThresholdExpirationInSeconds() {
    return this.getNumberAttribute('failure_threshold_expiration_in_seconds');
  }
  public set failureThresholdExpirationInSeconds(value: number) {
    this._failureThresholdExpirationInSeconds = value;
  }
  public resetFailureThresholdExpirationInSeconds() {
    this._failureThresholdExpirationInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdExpirationInSecondsInput() {
    return this._failureThresholdExpirationInSeconds;
  }

  // is_enabled - computed: false, optional: false, required: true
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // max_address_count - computed: true, optional: true, required: false
  private _maxAddressCount?: number; 
  public get maxAddressCount() {
    return this.getNumberAttribute('max_address_count');
  }
  public set maxAddressCount(value: number) {
    this._maxAddressCount = value;
  }
  public resetMaxAddressCount() {
    this._maxAddressCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAddressCountInput() {
    return this._maxAddressCount;
  }

  // max_address_count_expiration_in_seconds - computed: true, optional: true, required: false
  private _maxAddressCountExpirationInSeconds?: number; 
  public get maxAddressCountExpirationInSeconds() {
    return this.getNumberAttribute('max_address_count_expiration_in_seconds');
  }
  public set maxAddressCountExpirationInSeconds(value: number) {
    this._maxAddressCountExpirationInSeconds = value;
  }
  public resetMaxAddressCountExpirationInSeconds() {
    this._maxAddressCountExpirationInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAddressCountExpirationInSecondsInput() {
    return this._maxAddressCountExpirationInSeconds;
  }

  // challenge_settings - computed: false, optional: true, required: false
  private _challengeSettings = new WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference(this, "challenge_settings");
  public get challengeSettings() {
    return this._challengeSettings;
  }
  public putChallengeSettings(value: WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings) {
    this._challengeSettings.internalValue = value;
  }
  public resetChallengeSettings() {
    this._challengeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeSettingsInput() {
    return this._challengeSettings.internalValue;
  }
}
export interface WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#block_action WaasWaasPolicy#block_action}
  */
  readonly blockAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#block_error_page_code WaasWaasPolicy#block_error_page_code}
  */
  readonly blockErrorPageCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#block_error_page_description WaasWaasPolicy#block_error_page_description}
  */
  readonly blockErrorPageDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#block_error_page_message WaasWaasPolicy#block_error_page_message}
  */
  readonly blockErrorPageMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#block_response_code WaasWaasPolicy#block_response_code}
  */
  readonly blockResponseCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#captcha_footer WaasWaasPolicy#captcha_footer}
  */
  readonly captchaFooter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#captcha_header WaasWaasPolicy#captcha_header}
  */
  readonly captchaHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#captcha_submit_label WaasWaasPolicy#captcha_submit_label}
  */
  readonly captchaSubmitLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#captcha_title WaasWaasPolicy#captcha_title}
  */
  readonly captchaTitle?: string;
}

export function waasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsToTerraform(struct?: WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference | WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_action: cdktf.stringToTerraform(struct!.blockAction),
    block_error_page_code: cdktf.stringToTerraform(struct!.blockErrorPageCode),
    block_error_page_description: cdktf.stringToTerraform(struct!.blockErrorPageDescription),
    block_error_page_message: cdktf.stringToTerraform(struct!.blockErrorPageMessage),
    block_response_code: cdktf.numberToTerraform(struct!.blockResponseCode),
    captcha_footer: cdktf.stringToTerraform(struct!.captchaFooter),
    captcha_header: cdktf.stringToTerraform(struct!.captchaHeader),
    captcha_submit_label: cdktf.stringToTerraform(struct!.captchaSubmitLabel),
    captcha_title: cdktf.stringToTerraform(struct!.captchaTitle),
  }
}


export function waasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsToHclTerraform(struct?: WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference | WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_action: {
      value: cdktf.stringToHclTerraform(struct!.blockAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_error_page_code: {
      value: cdktf.stringToHclTerraform(struct!.blockErrorPageCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_error_page_description: {
      value: cdktf.stringToHclTerraform(struct!.blockErrorPageDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_error_page_message: {
      value: cdktf.stringToHclTerraform(struct!.blockErrorPageMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_response_code: {
      value: cdktf.numberToHclTerraform(struct!.blockResponseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    captcha_footer: {
      value: cdktf.stringToHclTerraform(struct!.captchaFooter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    captcha_header: {
      value: cdktf.stringToHclTerraform(struct!.captchaHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    captcha_submit_label: {
      value: cdktf.stringToHclTerraform(struct!.captchaSubmitLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    captcha_title: {
      value: cdktf.stringToHclTerraform(struct!.captchaTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockAction = this._blockAction;
    }
    if (this._blockErrorPageCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockErrorPageCode = this._blockErrorPageCode;
    }
    if (this._blockErrorPageDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockErrorPageDescription = this._blockErrorPageDescription;
    }
    if (this._blockErrorPageMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockErrorPageMessage = this._blockErrorPageMessage;
    }
    if (this._blockResponseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockResponseCode = this._blockResponseCode;
    }
    if (this._captchaFooter !== undefined) {
      hasAnyValues = true;
      internalValueResult.captchaFooter = this._captchaFooter;
    }
    if (this._captchaHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.captchaHeader = this._captchaHeader;
    }
    if (this._captchaSubmitLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.captchaSubmitLabel = this._captchaSubmitLabel;
    }
    if (this._captchaTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.captchaTitle = this._captchaTitle;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockAction = undefined;
      this._blockErrorPageCode = undefined;
      this._blockErrorPageDescription = undefined;
      this._blockErrorPageMessage = undefined;
      this._blockResponseCode = undefined;
      this._captchaFooter = undefined;
      this._captchaHeader = undefined;
      this._captchaSubmitLabel = undefined;
      this._captchaTitle = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockAction = value.blockAction;
      this._blockErrorPageCode = value.blockErrorPageCode;
      this._blockErrorPageDescription = value.blockErrorPageDescription;
      this._blockErrorPageMessage = value.blockErrorPageMessage;
      this._blockResponseCode = value.blockResponseCode;
      this._captchaFooter = value.captchaFooter;
      this._captchaHeader = value.captchaHeader;
      this._captchaSubmitLabel = value.captchaSubmitLabel;
      this._captchaTitle = value.captchaTitle;
    }
  }

  // block_action - computed: true, optional: true, required: false
  private _blockAction?: string; 
  public get blockAction() {
    return this.getStringAttribute('block_action');
  }
  public set blockAction(value: string) {
    this._blockAction = value;
  }
  public resetBlockAction() {
    this._blockAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockActionInput() {
    return this._blockAction;
  }

  // block_error_page_code - computed: true, optional: true, required: false
  private _blockErrorPageCode?: string; 
  public get blockErrorPageCode() {
    return this.getStringAttribute('block_error_page_code');
  }
  public set blockErrorPageCode(value: string) {
    this._blockErrorPageCode = value;
  }
  public resetBlockErrorPageCode() {
    this._blockErrorPageCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockErrorPageCodeInput() {
    return this._blockErrorPageCode;
  }

  // block_error_page_description - computed: true, optional: true, required: false
  private _blockErrorPageDescription?: string; 
  public get blockErrorPageDescription() {
    return this.getStringAttribute('block_error_page_description');
  }
  public set blockErrorPageDescription(value: string) {
    this._blockErrorPageDescription = value;
  }
  public resetBlockErrorPageDescription() {
    this._blockErrorPageDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockErrorPageDescriptionInput() {
    return this._blockErrorPageDescription;
  }

  // block_error_page_message - computed: true, optional: true, required: false
  private _blockErrorPageMessage?: string; 
  public get blockErrorPageMessage() {
    return this.getStringAttribute('block_error_page_message');
  }
  public set blockErrorPageMessage(value: string) {
    this._blockErrorPageMessage = value;
  }
  public resetBlockErrorPageMessage() {
    this._blockErrorPageMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockErrorPageMessageInput() {
    return this._blockErrorPageMessage;
  }

  // block_response_code - computed: true, optional: true, required: false
  private _blockResponseCode?: number; 
  public get blockResponseCode() {
    return this.getNumberAttribute('block_response_code');
  }
  public set blockResponseCode(value: number) {
    this._blockResponseCode = value;
  }
  public resetBlockResponseCode() {
    this._blockResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockResponseCodeInput() {
    return this._blockResponseCode;
  }

  // captcha_footer - computed: true, optional: true, required: false
  private _captchaFooter?: string; 
  public get captchaFooter() {
    return this.getStringAttribute('captcha_footer');
  }
  public set captchaFooter(value: string) {
    this._captchaFooter = value;
  }
  public resetCaptchaFooter() {
    this._captchaFooter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaFooterInput() {
    return this._captchaFooter;
  }

  // captcha_header - computed: true, optional: true, required: false
  private _captchaHeader?: string; 
  public get captchaHeader() {
    return this.getStringAttribute('captcha_header');
  }
  public set captchaHeader(value: string) {
    this._captchaHeader = value;
  }
  public resetCaptchaHeader() {
    this._captchaHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaHeaderInput() {
    return this._captchaHeader;
  }

  // captcha_submit_label - computed: true, optional: true, required: false
  private _captchaSubmitLabel?: string; 
  public get captchaSubmitLabel() {
    return this.getStringAttribute('captcha_submit_label');
  }
  public set captchaSubmitLabel(value: string) {
    this._captchaSubmitLabel = value;
  }
  public resetCaptchaSubmitLabel() {
    this._captchaSubmitLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaSubmitLabelInput() {
    return this._captchaSubmitLabel;
  }

  // captcha_title - computed: true, optional: true, required: false
  private _captchaTitle?: string; 
  public get captchaTitle() {
    return this.getStringAttribute('captcha_title');
  }
  public set captchaTitle(value: string) {
    this._captchaTitle = value;
  }
  public resetCaptchaTitle() {
    this._captchaTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaTitleInput() {
    return this._captchaTitle;
  }
}
export interface WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#name WaasWaasPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#value WaasWaasPolicy#value}
  */
  readonly value: string;
}

export function waasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderToTerraform(struct?: WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference | WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function waasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderToHclTerraform(struct?: WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference | WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
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
export interface WaasWaasPolicyWafConfigHumanInteractionChallenge {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#action WaasWaasPolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#action_expiration_in_seconds WaasWaasPolicy#action_expiration_in_seconds}
  */
  readonly actionExpirationInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#failure_threshold WaasWaasPolicy#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#failure_threshold_expiration_in_seconds WaasWaasPolicy#failure_threshold_expiration_in_seconds}
  */
  readonly failureThresholdExpirationInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#interaction_threshold WaasWaasPolicy#interaction_threshold}
  */
  readonly interactionThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#is_enabled WaasWaasPolicy#is_enabled}
  */
  readonly isEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#is_nat_enabled WaasWaasPolicy#is_nat_enabled}
  */
  readonly isNatEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#recording_period_in_seconds WaasWaasPolicy#recording_period_in_seconds}
  */
  readonly recordingPeriodInSeconds?: number;
  /**
  * challenge_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#challenge_settings WaasWaasPolicy#challenge_settings}
  */
  readonly challengeSettings?: WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings;
  /**
  * set_http_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#set_http_header WaasWaasPolicy#set_http_header}
  */
  readonly setHttpHeader?: WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader;
}

export function waasWaasPolicyWafConfigHumanInteractionChallengeToTerraform(struct?: WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference | WaasWaasPolicyWafConfigHumanInteractionChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    action_expiration_in_seconds: cdktf.numberToTerraform(struct!.actionExpirationInSeconds),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    failure_threshold_expiration_in_seconds: cdktf.numberToTerraform(struct!.failureThresholdExpirationInSeconds),
    interaction_threshold: cdktf.numberToTerraform(struct!.interactionThreshold),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    is_nat_enabled: cdktf.booleanToTerraform(struct!.isNatEnabled),
    recording_period_in_seconds: cdktf.numberToTerraform(struct!.recordingPeriodInSeconds),
    challenge_settings: waasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsToTerraform(struct!.challengeSettings),
    set_http_header: waasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderToTerraform(struct!.setHttpHeader),
  }
}


export function waasWaasPolicyWafConfigHumanInteractionChallengeToHclTerraform(struct?: WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference | WaasWaasPolicyWafConfigHumanInteractionChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_expiration_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.actionExpirationInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    failure_threshold_expiration_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.failureThresholdExpirationInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interaction_threshold: {
      value: cdktf.numberToHclTerraform(struct!.interactionThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_nat_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isNatEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recording_period_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.recordingPeriodInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    challenge_settings: {
      value: waasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsToHclTerraform(struct!.challengeSettings),
      isBlock: true,
      type: "list",
      storageClassType: "WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList",
    },
    set_http_header: {
      value: waasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderToHclTerraform(struct!.setHttpHeader),
      isBlock: true,
      type: "list",
      storageClassType: "WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WaasWaasPolicyWafConfigHumanInteractionChallenge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._actionExpirationInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionExpirationInSeconds = this._actionExpirationInSeconds;
    }
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._failureThresholdExpirationInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThresholdExpirationInSeconds = this._failureThresholdExpirationInSeconds;
    }
    if (this._interactionThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.interactionThreshold = this._interactionThreshold;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._isNatEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNatEnabled = this._isNatEnabled;
    }
    if (this._recordingPeriodInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordingPeriodInSeconds = this._recordingPeriodInSeconds;
    }
    if (this._challengeSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengeSettings = this._challengeSettings?.internalValue;
    }
    if (this._setHttpHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setHttpHeader = this._setHttpHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaasWaasPolicyWafConfigHumanInteractionChallenge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._actionExpirationInSeconds = undefined;
      this._failureThreshold = undefined;
      this._failureThresholdExpirationInSeconds = undefined;
      this._interactionThreshold = undefined;
      this._isEnabled = undefined;
      this._isNatEnabled = undefined;
      this._recordingPeriodInSeconds = undefined;
      this._challengeSettings.internalValue = undefined;
      this._setHttpHeader.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._actionExpirationInSeconds = value.actionExpirationInSeconds;
      this._failureThreshold = value.failureThreshold;
      this._failureThresholdExpirationInSeconds = value.failureThresholdExpirationInSeconds;
      this._interactionThreshold = value.interactionThreshold;
      this._isEnabled = value.isEnabled;
      this._isNatEnabled = value.isNatEnabled;
      this._recordingPeriodInSeconds = value.recordingPeriodInSeconds;
      this._challengeSettings.internalValue = value.challengeSettings;
      this._setHttpHeader.internalValue = value.setHttpHeader;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // action_expiration_in_seconds - computed: true, optional: true, required: false
  private _actionExpirationInSeconds?: number; 
  public get actionExpirationInSeconds() {
    return this.getNumberAttribute('action_expiration_in_seconds');
  }
  public set actionExpirationInSeconds(value: number) {
    this._actionExpirationInSeconds = value;
  }
  public resetActionExpirationInSeconds() {
    this._actionExpirationInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionExpirationInSecondsInput() {
    return this._actionExpirationInSeconds;
  }

  // failure_threshold - computed: true, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // failure_threshold_expiration_in_seconds - computed: true, optional: true, required: false
  private _failureThresholdExpirationInSeconds?: number; 
  public get failureThresholdExpirationInSeconds() {
    return this.getNumberAttribute('failure_threshold_expiration_in_seconds');
  }
  public set failureThresholdExpirationInSeconds(value: number) {
    this._failureThresholdExpirationInSeconds = value;
  }
  public resetFailureThresholdExpirationInSeconds() {
    this._failureThresholdExpirationInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdExpirationInSecondsInput() {
    return this._failureThresholdExpirationInSeconds;
  }

  // interaction_threshold - computed: true, optional: true, required: false
  private _interactionThreshold?: number; 
  public get interactionThreshold() {
    return this.getNumberAttribute('interaction_threshold');
  }
  public set interactionThreshold(value: number) {
    this._interactionThreshold = value;
  }
  public resetInteractionThreshold() {
    this._interactionThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interactionThresholdInput() {
    return this._interactionThreshold;
  }

  // is_enabled - computed: false, optional: false, required: true
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // is_nat_enabled - computed: true, optional: true, required: false
  private _isNatEnabled?: boolean | cdktf.IResolvable; 
  public get isNatEnabled() {
    return this.getBooleanAttribute('is_nat_enabled');
  }
  public set isNatEnabled(value: boolean | cdktf.IResolvable) {
    this._isNatEnabled = value;
  }
  public resetIsNatEnabled() {
    this._isNatEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNatEnabledInput() {
    return this._isNatEnabled;
  }

  // recording_period_in_seconds - computed: true, optional: true, required: false
  private _recordingPeriodInSeconds?: number; 
  public get recordingPeriodInSeconds() {
    return this.getNumberAttribute('recording_period_in_seconds');
  }
  public set recordingPeriodInSeconds(value: number) {
    this._recordingPeriodInSeconds = value;
  }
  public resetRecordingPeriodInSeconds() {
    this._recordingPeriodInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingPeriodInSecondsInput() {
    return this._recordingPeriodInSeconds;
  }

  // challenge_settings - computed: false, optional: true, required: false
  private _challengeSettings = new WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference(this, "challenge_settings");
  public get challengeSettings() {
    return this._challengeSettings;
  }
  public putChallengeSettings(value: WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings) {
    this._challengeSettings.internalValue = value;
  }
  public resetChallengeSettings() {
    this._challengeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeSettingsInput() {
    return this._challengeSettings.internalValue;
  }

  // set_http_header - computed: false, optional: true, required: false
  private _setHttpHeader = new WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference(this, "set_http_header");
  public get setHttpHeader() {
    return this._setHttpHeader;
  }
  public putSetHttpHeader(value: WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader) {
    this._setHttpHeader.internalValue = value;
  }
  public resetSetHttpHeader() {
    this._setHttpHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setHttpHeaderInput() {
    return this._setHttpHeader.internalValue;
  }
}
export interface WaasWaasPolicyWafConfigJsChallengeChallengeSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#block_action WaasWaasPolicy#block_action}
  */
  readonly blockAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#block_error_page_code WaasWaasPolicy#block_error_page_code}
  */
  readonly blockErrorPageCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#block_error_page_description WaasWaasPolicy#block_error_page_description}
  */
  readonly blockErrorPageDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#block_error_page_message WaasWaasPolicy#block_error_page_message}
  */
  readonly blockErrorPageMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#block_response_code WaasWaasPolicy#block_response_code}
  */
  readonly blockResponseCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#captcha_footer WaasWaasPolicy#captcha_footer}
  */
  readonly captchaFooter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#captcha_header WaasWaasPolicy#captcha_header}
  */
  readonly captchaHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#captcha_submit_label WaasWaasPolicy#captcha_submit_label}
  */
  readonly captchaSubmitLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#captcha_title WaasWaasPolicy#captcha_title}
  */
  readonly captchaTitle?: string;
}

export function waasWaasPolicyWafConfigJsChallengeChallengeSettingsToTerraform(struct?: WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference | WaasWaasPolicyWafConfigJsChallengeChallengeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_action: cdktf.stringToTerraform(struct!.blockAction),
    block_error_page_code: cdktf.stringToTerraform(struct!.blockErrorPageCode),
    block_error_page_description: cdktf.stringToTerraform(struct!.blockErrorPageDescription),
    block_error_page_message: cdktf.stringToTerraform(struct!.blockErrorPageMessage),
    block_response_code: cdktf.numberToTerraform(struct!.blockResponseCode),
    captcha_footer: cdktf.stringToTerraform(struct!.captchaFooter),
    captcha_header: cdktf.stringToTerraform(struct!.captchaHeader),
    captcha_submit_label: cdktf.stringToTerraform(struct!.captchaSubmitLabel),
    captcha_title: cdktf.stringToTerraform(struct!.captchaTitle),
  }
}


export function waasWaasPolicyWafConfigJsChallengeChallengeSettingsToHclTerraform(struct?: WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference | WaasWaasPolicyWafConfigJsChallengeChallengeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_action: {
      value: cdktf.stringToHclTerraform(struct!.blockAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_error_page_code: {
      value: cdktf.stringToHclTerraform(struct!.blockErrorPageCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_error_page_description: {
      value: cdktf.stringToHclTerraform(struct!.blockErrorPageDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_error_page_message: {
      value: cdktf.stringToHclTerraform(struct!.blockErrorPageMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_response_code: {
      value: cdktf.numberToHclTerraform(struct!.blockResponseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    captcha_footer: {
      value: cdktf.stringToHclTerraform(struct!.captchaFooter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    captcha_header: {
      value: cdktf.stringToHclTerraform(struct!.captchaHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    captcha_submit_label: {
      value: cdktf.stringToHclTerraform(struct!.captchaSubmitLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    captcha_title: {
      value: cdktf.stringToHclTerraform(struct!.captchaTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WaasWaasPolicyWafConfigJsChallengeChallengeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockAction = this._blockAction;
    }
    if (this._blockErrorPageCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockErrorPageCode = this._blockErrorPageCode;
    }
    if (this._blockErrorPageDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockErrorPageDescription = this._blockErrorPageDescription;
    }
    if (this._blockErrorPageMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockErrorPageMessage = this._blockErrorPageMessage;
    }
    if (this._blockResponseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockResponseCode = this._blockResponseCode;
    }
    if (this._captchaFooter !== undefined) {
      hasAnyValues = true;
      internalValueResult.captchaFooter = this._captchaFooter;
    }
    if (this._captchaHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.captchaHeader = this._captchaHeader;
    }
    if (this._captchaSubmitLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.captchaSubmitLabel = this._captchaSubmitLabel;
    }
    if (this._captchaTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.captchaTitle = this._captchaTitle;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaasWaasPolicyWafConfigJsChallengeChallengeSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockAction = undefined;
      this._blockErrorPageCode = undefined;
      this._blockErrorPageDescription = undefined;
      this._blockErrorPageMessage = undefined;
      this._blockResponseCode = undefined;
      this._captchaFooter = undefined;
      this._captchaHeader = undefined;
      this._captchaSubmitLabel = undefined;
      this._captchaTitle = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockAction = value.blockAction;
      this._blockErrorPageCode = value.blockErrorPageCode;
      this._blockErrorPageDescription = value.blockErrorPageDescription;
      this._blockErrorPageMessage = value.blockErrorPageMessage;
      this._blockResponseCode = value.blockResponseCode;
      this._captchaFooter = value.captchaFooter;
      this._captchaHeader = value.captchaHeader;
      this._captchaSubmitLabel = value.captchaSubmitLabel;
      this._captchaTitle = value.captchaTitle;
    }
  }

  // block_action - computed: true, optional: true, required: false
  private _blockAction?: string; 
  public get blockAction() {
    return this.getStringAttribute('block_action');
  }
  public set blockAction(value: string) {
    this._blockAction = value;
  }
  public resetBlockAction() {
    this._blockAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockActionInput() {
    return this._blockAction;
  }

  // block_error_page_code - computed: true, optional: true, required: false
  private _blockErrorPageCode?: string; 
  public get blockErrorPageCode() {
    return this.getStringAttribute('block_error_page_code');
  }
  public set blockErrorPageCode(value: string) {
    this._blockErrorPageCode = value;
  }
  public resetBlockErrorPageCode() {
    this._blockErrorPageCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockErrorPageCodeInput() {
    return this._blockErrorPageCode;
  }

  // block_error_page_description - computed: true, optional: true, required: false
  private _blockErrorPageDescription?: string; 
  public get blockErrorPageDescription() {
    return this.getStringAttribute('block_error_page_description');
  }
  public set blockErrorPageDescription(value: string) {
    this._blockErrorPageDescription = value;
  }
  public resetBlockErrorPageDescription() {
    this._blockErrorPageDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockErrorPageDescriptionInput() {
    return this._blockErrorPageDescription;
  }

  // block_error_page_message - computed: true, optional: true, required: false
  private _blockErrorPageMessage?: string; 
  public get blockErrorPageMessage() {
    return this.getStringAttribute('block_error_page_message');
  }
  public set blockErrorPageMessage(value: string) {
    this._blockErrorPageMessage = value;
  }
  public resetBlockErrorPageMessage() {
    this._blockErrorPageMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockErrorPageMessageInput() {
    return this._blockErrorPageMessage;
  }

  // block_response_code - computed: true, optional: true, required: false
  private _blockResponseCode?: number; 
  public get blockResponseCode() {
    return this.getNumberAttribute('block_response_code');
  }
  public set blockResponseCode(value: number) {
    this._blockResponseCode = value;
  }
  public resetBlockResponseCode() {
    this._blockResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockResponseCodeInput() {
    return this._blockResponseCode;
  }

  // captcha_footer - computed: true, optional: true, required: false
  private _captchaFooter?: string; 
  public get captchaFooter() {
    return this.getStringAttribute('captcha_footer');
  }
  public set captchaFooter(value: string) {
    this._captchaFooter = value;
  }
  public resetCaptchaFooter() {
    this._captchaFooter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaFooterInput() {
    return this._captchaFooter;
  }

  // captcha_header - computed: true, optional: true, required: false
  private _captchaHeader?: string; 
  public get captchaHeader() {
    return this.getStringAttribute('captcha_header');
  }
  public set captchaHeader(value: string) {
    this._captchaHeader = value;
  }
  public resetCaptchaHeader() {
    this._captchaHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaHeaderInput() {
    return this._captchaHeader;
  }

  // captcha_submit_label - computed: true, optional: true, required: false
  private _captchaSubmitLabel?: string; 
  public get captchaSubmitLabel() {
    return this.getStringAttribute('captcha_submit_label');
  }
  public set captchaSubmitLabel(value: string) {
    this._captchaSubmitLabel = value;
  }
  public resetCaptchaSubmitLabel() {
    this._captchaSubmitLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaSubmitLabelInput() {
    return this._captchaSubmitLabel;
  }

  // captcha_title - computed: true, optional: true, required: false
  private _captchaTitle?: string; 
  public get captchaTitle() {
    return this.getStringAttribute('captcha_title');
  }
  public set captchaTitle(value: string) {
    this._captchaTitle = value;
  }
  public resetCaptchaTitle() {
    this._captchaTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaTitleInput() {
    return this._captchaTitle;
  }
}
export interface WaasWaasPolicyWafConfigJsChallengeCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#condition WaasWaasPolicy#condition}
  */
  readonly condition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#is_case_sensitive WaasWaasPolicy#is_case_sensitive}
  */
  readonly isCaseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#value WaasWaasPolicy#value}
  */
  readonly value: string;
}

export function waasWaasPolicyWafConfigJsChallengeCriteriaToTerraform(struct?: WaasWaasPolicyWafConfigJsChallengeCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    is_case_sensitive: cdktf.booleanToTerraform(struct!.isCaseSensitive),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function waasWaasPolicyWafConfigJsChallengeCriteriaToHclTerraform(struct?: WaasWaasPolicyWafConfigJsChallengeCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.isCaseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WaasWaasPolicyWafConfigJsChallengeCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._isCaseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCaseSensitive = this._isCaseSensitive;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaasWaasPolicyWafConfigJsChallengeCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._isCaseSensitive = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._isCaseSensitive = value.isCaseSensitive;
      this._value = value.value;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // is_case_sensitive - computed: true, optional: true, required: false
  private _isCaseSensitive?: boolean | cdktf.IResolvable; 
  public get isCaseSensitive() {
    return this.getBooleanAttribute('is_case_sensitive');
  }
  public set isCaseSensitive(value: boolean | cdktf.IResolvable) {
    this._isCaseSensitive = value;
  }
  public resetIsCaseSensitive() {
    this._isCaseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCaseSensitiveInput() {
    return this._isCaseSensitive;
  }

  // value - computed: false, optional: false, required: true
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

export class WaasWaasPolicyWafConfigJsChallengeCriteriaList extends cdktf.ComplexList {
  public internalValue? : WaasWaasPolicyWafConfigJsChallengeCriteria[] | cdktf.IResolvable

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
  public get(index: number): WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference {
    return new WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WaasWaasPolicyWafConfigJsChallengeSetHttpHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#name WaasWaasPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#value WaasWaasPolicy#value}
  */
  readonly value: string;
}

export function waasWaasPolicyWafConfigJsChallengeSetHttpHeaderToTerraform(struct?: WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference | WaasWaasPolicyWafConfigJsChallengeSetHttpHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function waasWaasPolicyWafConfigJsChallengeSetHttpHeaderToHclTerraform(struct?: WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference | WaasWaasPolicyWafConfigJsChallengeSetHttpHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WaasWaasPolicyWafConfigJsChallengeSetHttpHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaasWaasPolicyWafConfigJsChallengeSetHttpHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
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
export interface WaasWaasPolicyWafConfigJsChallenge {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#action WaasWaasPolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#action_expiration_in_seconds WaasWaasPolicy#action_expiration_in_seconds}
  */
  readonly actionExpirationInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#are_redirects_challenged WaasWaasPolicy#are_redirects_challenged}
  */
  readonly areRedirectsChallenged?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#failure_threshold WaasWaasPolicy#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#is_enabled WaasWaasPolicy#is_enabled}
  */
  readonly isEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#is_nat_enabled WaasWaasPolicy#is_nat_enabled}
  */
  readonly isNatEnabled?: boolean | cdktf.IResolvable;
  /**
  * challenge_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#challenge_settings WaasWaasPolicy#challenge_settings}
  */
  readonly challengeSettings?: WaasWaasPolicyWafConfigJsChallengeChallengeSettings;
  /**
  * criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#criteria WaasWaasPolicy#criteria}
  */
  readonly criteria?: WaasWaasPolicyWafConfigJsChallengeCriteria[] | cdktf.IResolvable;
  /**
  * set_http_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#set_http_header WaasWaasPolicy#set_http_header}
  */
  readonly setHttpHeader?: WaasWaasPolicyWafConfigJsChallengeSetHttpHeader;
}

export function waasWaasPolicyWafConfigJsChallengeToTerraform(struct?: WaasWaasPolicyWafConfigJsChallengeOutputReference | WaasWaasPolicyWafConfigJsChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    action_expiration_in_seconds: cdktf.numberToTerraform(struct!.actionExpirationInSeconds),
    are_redirects_challenged: cdktf.booleanToTerraform(struct!.areRedirectsChallenged),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    is_nat_enabled: cdktf.booleanToTerraform(struct!.isNatEnabled),
    challenge_settings: waasWaasPolicyWafConfigJsChallengeChallengeSettingsToTerraform(struct!.challengeSettings),
    criteria: cdktf.listMapper(waasWaasPolicyWafConfigJsChallengeCriteriaToTerraform, true)(struct!.criteria),
    set_http_header: waasWaasPolicyWafConfigJsChallengeSetHttpHeaderToTerraform(struct!.setHttpHeader),
  }
}


export function waasWaasPolicyWafConfigJsChallengeToHclTerraform(struct?: WaasWaasPolicyWafConfigJsChallengeOutputReference | WaasWaasPolicyWafConfigJsChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_expiration_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.actionExpirationInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    are_redirects_challenged: {
      value: cdktf.booleanToHclTerraform(struct!.areRedirectsChallenged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_nat_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isNatEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    challenge_settings: {
      value: waasWaasPolicyWafConfigJsChallengeChallengeSettingsToHclTerraform(struct!.challengeSettings),
      isBlock: true,
      type: "list",
      storageClassType: "WaasWaasPolicyWafConfigJsChallengeChallengeSettingsList",
    },
    criteria: {
      value: cdktf.listMapperHcl(waasWaasPolicyWafConfigJsChallengeCriteriaToHclTerraform, true)(struct!.criteria),
      isBlock: true,
      type: "list",
      storageClassType: "WaasWaasPolicyWafConfigJsChallengeCriteriaList",
    },
    set_http_header: {
      value: waasWaasPolicyWafConfigJsChallengeSetHttpHeaderToHclTerraform(struct!.setHttpHeader),
      isBlock: true,
      type: "list",
      storageClassType: "WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaasWaasPolicyWafConfigJsChallengeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WaasWaasPolicyWafConfigJsChallenge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._actionExpirationInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionExpirationInSeconds = this._actionExpirationInSeconds;
    }
    if (this._areRedirectsChallenged !== undefined) {
      hasAnyValues = true;
      internalValueResult.areRedirectsChallenged = this._areRedirectsChallenged;
    }
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._isNatEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNatEnabled = this._isNatEnabled;
    }
    if (this._challengeSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengeSettings = this._challengeSettings?.internalValue;
    }
    if (this._criteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria?.internalValue;
    }
    if (this._setHttpHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setHttpHeader = this._setHttpHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaasWaasPolicyWafConfigJsChallenge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._actionExpirationInSeconds = undefined;
      this._areRedirectsChallenged = undefined;
      this._failureThreshold = undefined;
      this._isEnabled = undefined;
      this._isNatEnabled = undefined;
      this._challengeSettings.internalValue = undefined;
      this._criteria.internalValue = undefined;
      this._setHttpHeader.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._actionExpirationInSeconds = value.actionExpirationInSeconds;
      this._areRedirectsChallenged = value.areRedirectsChallenged;
      this._failureThreshold = value.failureThreshold;
      this._isEnabled = value.isEnabled;
      this._isNatEnabled = value.isNatEnabled;
      this._challengeSettings.internalValue = value.challengeSettings;
      this._criteria.internalValue = value.criteria;
      this._setHttpHeader.internalValue = value.setHttpHeader;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // action_expiration_in_seconds - computed: true, optional: true, required: false
  private _actionExpirationInSeconds?: number; 
  public get actionExpirationInSeconds() {
    return this.getNumberAttribute('action_expiration_in_seconds');
  }
  public set actionExpirationInSeconds(value: number) {
    this._actionExpirationInSeconds = value;
  }
  public resetActionExpirationInSeconds() {
    this._actionExpirationInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionExpirationInSecondsInput() {
    return this._actionExpirationInSeconds;
  }

  // are_redirects_challenged - computed: true, optional: true, required: false
  private _areRedirectsChallenged?: boolean | cdktf.IResolvable; 
  public get areRedirectsChallenged() {
    return this.getBooleanAttribute('are_redirects_challenged');
  }
  public set areRedirectsChallenged(value: boolean | cdktf.IResolvable) {
    this._areRedirectsChallenged = value;
  }
  public resetAreRedirectsChallenged() {
    this._areRedirectsChallenged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areRedirectsChallengedInput() {
    return this._areRedirectsChallenged;
  }

  // failure_threshold - computed: true, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // is_enabled - computed: false, optional: false, required: true
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // is_nat_enabled - computed: true, optional: true, required: false
  private _isNatEnabled?: boolean | cdktf.IResolvable; 
  public get isNatEnabled() {
    return this.getBooleanAttribute('is_nat_enabled');
  }
  public set isNatEnabled(value: boolean | cdktf.IResolvable) {
    this._isNatEnabled = value;
  }
  public resetIsNatEnabled() {
    this._isNatEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNatEnabledInput() {
    return this._isNatEnabled;
  }

  // challenge_settings - computed: false, optional: true, required: false
  private _challengeSettings = new WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference(this, "challenge_settings");
  public get challengeSettings() {
    return this._challengeSettings;
  }
  public putChallengeSettings(value: WaasWaasPolicyWafConfigJsChallengeChallengeSettings) {
    this._challengeSettings.internalValue = value;
  }
  public resetChallengeSettings() {
    this._challengeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeSettingsInput() {
    return this._challengeSettings.internalValue;
  }

  // criteria - computed: false, optional: true, required: false
  private _criteria = new WaasWaasPolicyWafConfigJsChallengeCriteriaList(this, "criteria", false);
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: WaasWaasPolicyWafConfigJsChallengeCriteria[] | cdktf.IResolvable) {
    this._criteria.internalValue = value;
  }
  public resetCriteria() {
    this._criteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }

  // set_http_header - computed: false, optional: true, required: false
  private _setHttpHeader = new WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference(this, "set_http_header");
  public get setHttpHeader() {
    return this._setHttpHeader;
  }
  public putSetHttpHeader(value: WaasWaasPolicyWafConfigJsChallengeSetHttpHeader) {
    this._setHttpHeader.internalValue = value;
  }
  public resetSetHttpHeader() {
    this._setHttpHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setHttpHeaderInput() {
    return this._setHttpHeader.internalValue;
  }
}
export interface WaasWaasPolicyWafConfigProtectionSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#allowed_http_methods WaasWaasPolicy#allowed_http_methods}
  */
  readonly allowedHttpMethods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#block_action WaasWaasPolicy#block_action}
  */
  readonly blockAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#block_error_page_code WaasWaasPolicy#block_error_page_code}
  */
  readonly blockErrorPageCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#block_error_page_description WaasWaasPolicy#block_error_page_description}
  */
  readonly blockErrorPageDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#block_error_page_message WaasWaasPolicy#block_error_page_message}
  */
  readonly blockErrorPageMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#block_response_code WaasWaasPolicy#block_response_code}
  */
  readonly blockResponseCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#is_response_inspected WaasWaasPolicy#is_response_inspected}
  */
  readonly isResponseInspected?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#max_argument_count WaasWaasPolicy#max_argument_count}
  */
  readonly maxArgumentCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#max_name_length_per_argument WaasWaasPolicy#max_name_length_per_argument}
  */
  readonly maxNameLengthPerArgument?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#max_response_size_in_ki_b WaasWaasPolicy#max_response_size_in_ki_b}
  */
  readonly maxResponseSizeInKiB?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#max_total_name_length_of_arguments WaasWaasPolicy#max_total_name_length_of_arguments}
  */
  readonly maxTotalNameLengthOfArguments?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#media_types WaasWaasPolicy#media_types}
  */
  readonly mediaTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#recommendations_period_in_days WaasWaasPolicy#recommendations_period_in_days}
  */
  readonly recommendationsPeriodInDays?: number;
}

export function waasWaasPolicyWafConfigProtectionSettingsToTerraform(struct?: WaasWaasPolicyWafConfigProtectionSettingsOutputReference | WaasWaasPolicyWafConfigProtectionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_http_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHttpMethods),
    block_action: cdktf.stringToTerraform(struct!.blockAction),
    block_error_page_code: cdktf.stringToTerraform(struct!.blockErrorPageCode),
    block_error_page_description: cdktf.stringToTerraform(struct!.blockErrorPageDescription),
    block_error_page_message: cdktf.stringToTerraform(struct!.blockErrorPageMessage),
    block_response_code: cdktf.numberToTerraform(struct!.blockResponseCode),
    is_response_inspected: cdktf.booleanToTerraform(struct!.isResponseInspected),
    max_argument_count: cdktf.numberToTerraform(struct!.maxArgumentCount),
    max_name_length_per_argument: cdktf.numberToTerraform(struct!.maxNameLengthPerArgument),
    max_response_size_in_ki_b: cdktf.numberToTerraform(struct!.maxResponseSizeInKiB),
    max_total_name_length_of_arguments: cdktf.numberToTerraform(struct!.maxTotalNameLengthOfArguments),
    media_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mediaTypes),
    recommendations_period_in_days: cdktf.numberToTerraform(struct!.recommendationsPeriodInDays),
  }
}


export function waasWaasPolicyWafConfigProtectionSettingsToHclTerraform(struct?: WaasWaasPolicyWafConfigProtectionSettingsOutputReference | WaasWaasPolicyWafConfigProtectionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_http_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHttpMethods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    block_action: {
      value: cdktf.stringToHclTerraform(struct!.blockAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_error_page_code: {
      value: cdktf.stringToHclTerraform(struct!.blockErrorPageCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_error_page_description: {
      value: cdktf.stringToHclTerraform(struct!.blockErrorPageDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_error_page_message: {
      value: cdktf.stringToHclTerraform(struct!.blockErrorPageMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_response_code: {
      value: cdktf.numberToHclTerraform(struct!.blockResponseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_response_inspected: {
      value: cdktf.booleanToHclTerraform(struct!.isResponseInspected),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_argument_count: {
      value: cdktf.numberToHclTerraform(struct!.maxArgumentCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_name_length_per_argument: {
      value: cdktf.numberToHclTerraform(struct!.maxNameLengthPerArgument),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_response_size_in_ki_b: {
      value: cdktf.numberToHclTerraform(struct!.maxResponseSizeInKiB),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_total_name_length_of_arguments: {
      value: cdktf.numberToHclTerraform(struct!.maxTotalNameLengthOfArguments),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    media_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mediaTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    recommendations_period_in_days: {
      value: cdktf.numberToHclTerraform(struct!.recommendationsPeriodInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaasWaasPolicyWafConfigProtectionSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WaasWaasPolicyWafConfigProtectionSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHttpMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHttpMethods = this._allowedHttpMethods;
    }
    if (this._blockAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockAction = this._blockAction;
    }
    if (this._blockErrorPageCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockErrorPageCode = this._blockErrorPageCode;
    }
    if (this._blockErrorPageDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockErrorPageDescription = this._blockErrorPageDescription;
    }
    if (this._blockErrorPageMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockErrorPageMessage = this._blockErrorPageMessage;
    }
    if (this._blockResponseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockResponseCode = this._blockResponseCode;
    }
    if (this._isResponseInspected !== undefined) {
      hasAnyValues = true;
      internalValueResult.isResponseInspected = this._isResponseInspected;
    }
    if (this._maxArgumentCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxArgumentCount = this._maxArgumentCount;
    }
    if (this._maxNameLengthPerArgument !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNameLengthPerArgument = this._maxNameLengthPerArgument;
    }
    if (this._maxResponseSizeInKiB !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxResponseSizeInKiB = this._maxResponseSizeInKiB;
    }
    if (this._maxTotalNameLengthOfArguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTotalNameLengthOfArguments = this._maxTotalNameLengthOfArguments;
    }
    if (this._mediaTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaTypes = this._mediaTypes;
    }
    if (this._recommendationsPeriodInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.recommendationsPeriodInDays = this._recommendationsPeriodInDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaasWaasPolicyWafConfigProtectionSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHttpMethods = undefined;
      this._blockAction = undefined;
      this._blockErrorPageCode = undefined;
      this._blockErrorPageDescription = undefined;
      this._blockErrorPageMessage = undefined;
      this._blockResponseCode = undefined;
      this._isResponseInspected = undefined;
      this._maxArgumentCount = undefined;
      this._maxNameLengthPerArgument = undefined;
      this._maxResponseSizeInKiB = undefined;
      this._maxTotalNameLengthOfArguments = undefined;
      this._mediaTypes = undefined;
      this._recommendationsPeriodInDays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHttpMethods = value.allowedHttpMethods;
      this._blockAction = value.blockAction;
      this._blockErrorPageCode = value.blockErrorPageCode;
      this._blockErrorPageDescription = value.blockErrorPageDescription;
      this._blockErrorPageMessage = value.blockErrorPageMessage;
      this._blockResponseCode = value.blockResponseCode;
      this._isResponseInspected = value.isResponseInspected;
      this._maxArgumentCount = value.maxArgumentCount;
      this._maxNameLengthPerArgument = value.maxNameLengthPerArgument;
      this._maxResponseSizeInKiB = value.maxResponseSizeInKiB;
      this._maxTotalNameLengthOfArguments = value.maxTotalNameLengthOfArguments;
      this._mediaTypes = value.mediaTypes;
      this._recommendationsPeriodInDays = value.recommendationsPeriodInDays;
    }
  }

  // allowed_http_methods - computed: true, optional: true, required: false
  private _allowedHttpMethods?: string[]; 
  public get allowedHttpMethods() {
    return this.getListAttribute('allowed_http_methods');
  }
  public set allowedHttpMethods(value: string[]) {
    this._allowedHttpMethods = value;
  }
  public resetAllowedHttpMethods() {
    this._allowedHttpMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHttpMethodsInput() {
    return this._allowedHttpMethods;
  }

  // block_action - computed: true, optional: true, required: false
  private _blockAction?: string; 
  public get blockAction() {
    return this.getStringAttribute('block_action');
  }
  public set blockAction(value: string) {
    this._blockAction = value;
  }
  public resetBlockAction() {
    this._blockAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockActionInput() {
    return this._blockAction;
  }

  // block_error_page_code - computed: true, optional: true, required: false
  private _blockErrorPageCode?: string; 
  public get blockErrorPageCode() {
    return this.getStringAttribute('block_error_page_code');
  }
  public set blockErrorPageCode(value: string) {
    this._blockErrorPageCode = value;
  }
  public resetBlockErrorPageCode() {
    this._blockErrorPageCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockErrorPageCodeInput() {
    return this._blockErrorPageCode;
  }

  // block_error_page_description - computed: true, optional: true, required: false
  private _blockErrorPageDescription?: string; 
  public get blockErrorPageDescription() {
    return this.getStringAttribute('block_error_page_description');
  }
  public set blockErrorPageDescription(value: string) {
    this._blockErrorPageDescription = value;
  }
  public resetBlockErrorPageDescription() {
    this._blockErrorPageDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockErrorPageDescriptionInput() {
    return this._blockErrorPageDescription;
  }

  // block_error_page_message - computed: true, optional: true, required: false
  private _blockErrorPageMessage?: string; 
  public get blockErrorPageMessage() {
    return this.getStringAttribute('block_error_page_message');
  }
  public set blockErrorPageMessage(value: string) {
    this._blockErrorPageMessage = value;
  }
  public resetBlockErrorPageMessage() {
    this._blockErrorPageMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockErrorPageMessageInput() {
    return this._blockErrorPageMessage;
  }

  // block_response_code - computed: true, optional: true, required: false
  private _blockResponseCode?: number; 
  public get blockResponseCode() {
    return this.getNumberAttribute('block_response_code');
  }
  public set blockResponseCode(value: number) {
    this._blockResponseCode = value;
  }
  public resetBlockResponseCode() {
    this._blockResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockResponseCodeInput() {
    return this._blockResponseCode;
  }

  // is_response_inspected - computed: true, optional: true, required: false
  private _isResponseInspected?: boolean | cdktf.IResolvable; 
  public get isResponseInspected() {
    return this.getBooleanAttribute('is_response_inspected');
  }
  public set isResponseInspected(value: boolean | cdktf.IResolvable) {
    this._isResponseInspected = value;
  }
  public resetIsResponseInspected() {
    this._isResponseInspected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isResponseInspectedInput() {
    return this._isResponseInspected;
  }

  // max_argument_count - computed: true, optional: true, required: false
  private _maxArgumentCount?: number; 
  public get maxArgumentCount() {
    return this.getNumberAttribute('max_argument_count');
  }
  public set maxArgumentCount(value: number) {
    this._maxArgumentCount = value;
  }
  public resetMaxArgumentCount() {
    this._maxArgumentCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxArgumentCountInput() {
    return this._maxArgumentCount;
  }

  // max_name_length_per_argument - computed: true, optional: true, required: false
  private _maxNameLengthPerArgument?: number; 
  public get maxNameLengthPerArgument() {
    return this.getNumberAttribute('max_name_length_per_argument');
  }
  public set maxNameLengthPerArgument(value: number) {
    this._maxNameLengthPerArgument = value;
  }
  public resetMaxNameLengthPerArgument() {
    this._maxNameLengthPerArgument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNameLengthPerArgumentInput() {
    return this._maxNameLengthPerArgument;
  }

  // max_response_size_in_ki_b - computed: true, optional: true, required: false
  private _maxResponseSizeInKiB?: number; 
  public get maxResponseSizeInKiB() {
    return this.getNumberAttribute('max_response_size_in_ki_b');
  }
  public set maxResponseSizeInKiB(value: number) {
    this._maxResponseSizeInKiB = value;
  }
  public resetMaxResponseSizeInKiB() {
    this._maxResponseSizeInKiB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResponseSizeInKiBInput() {
    return this._maxResponseSizeInKiB;
  }

  // max_total_name_length_of_arguments - computed: true, optional: true, required: false
  private _maxTotalNameLengthOfArguments?: number; 
  public get maxTotalNameLengthOfArguments() {
    return this.getNumberAttribute('max_total_name_length_of_arguments');
  }
  public set maxTotalNameLengthOfArguments(value: number) {
    this._maxTotalNameLengthOfArguments = value;
  }
  public resetMaxTotalNameLengthOfArguments() {
    this._maxTotalNameLengthOfArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTotalNameLengthOfArgumentsInput() {
    return this._maxTotalNameLengthOfArguments;
  }

  // media_types - computed: true, optional: true, required: false
  private _mediaTypes?: string[]; 
  public get mediaTypes() {
    return this.getListAttribute('media_types');
  }
  public set mediaTypes(value: string[]) {
    this._mediaTypes = value;
  }
  public resetMediaTypes() {
    this._mediaTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaTypesInput() {
    return this._mediaTypes;
  }

  // recommendations_period_in_days - computed: true, optional: true, required: false
  private _recommendationsPeriodInDays?: number; 
  public get recommendationsPeriodInDays() {
    return this.getNumberAttribute('recommendations_period_in_days');
  }
  public set recommendationsPeriodInDays(value: number) {
    this._recommendationsPeriodInDays = value;
  }
  public resetRecommendationsPeriodInDays() {
    this._recommendationsPeriodInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recommendationsPeriodInDaysInput() {
    return this._recommendationsPeriodInDays;
  }
}
export interface WaasWaasPolicyWafConfigWhitelists {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#address_lists WaasWaasPolicy#address_lists}
  */
  readonly addressLists?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#addresses WaasWaasPolicy#addresses}
  */
  readonly addresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#name WaasWaasPolicy#name}
  */
  readonly name: string;
}

export function waasWaasPolicyWafConfigWhitelistsToTerraform(struct?: WaasWaasPolicyWafConfigWhitelists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_lists: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addressLists),
    addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addresses),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function waasWaasPolicyWafConfigWhitelistsToHclTerraform(struct?: WaasWaasPolicyWafConfigWhitelists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_lists: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addressLists),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaasWaasPolicyWafConfigWhitelistsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WaasWaasPolicyWafConfigWhitelists | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressLists = this._addressLists;
    }
    if (this._addresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.addresses = this._addresses;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaasWaasPolicyWafConfigWhitelists | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressLists = undefined;
      this._addresses = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressLists = value.addressLists;
      this._addresses = value.addresses;
      this._name = value.name;
    }
  }

  // address_lists - computed: true, optional: true, required: false
  private _addressLists?: string[]; 
  public get addressLists() {
    return this.getListAttribute('address_lists');
  }
  public set addressLists(value: string[]) {
    this._addressLists = value;
  }
  public resetAddressLists() {
    this._addressLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressListsInput() {
    return this._addressLists;
  }

  // addresses - computed: true, optional: true, required: false
  private _addresses?: string[]; 
  public get addresses() {
    return this.getListAttribute('addresses');
  }
  public set addresses(value: string[]) {
    this._addresses = value;
  }
  public resetAddresses() {
    this._addresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses;
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
}

export class WaasWaasPolicyWafConfigWhitelistsList extends cdktf.ComplexList {
  public internalValue? : WaasWaasPolicyWafConfigWhitelists[] | cdktf.IResolvable

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
  public get(index: number): WaasWaasPolicyWafConfigWhitelistsOutputReference {
    return new WaasWaasPolicyWafConfigWhitelistsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WaasWaasPolicyWafConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#origin WaasWaasPolicy#origin}
  */
  readonly origin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#origin_groups WaasWaasPolicy#origin_groups}
  */
  readonly originGroups?: string[];
  /**
  * access_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#access_rules WaasWaasPolicy#access_rules}
  */
  readonly accessRules?: WaasWaasPolicyWafConfigAccessRules[] | cdktf.IResolvable;
  /**
  * address_rate_limiting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#address_rate_limiting WaasWaasPolicy#address_rate_limiting}
  */
  readonly addressRateLimiting?: WaasWaasPolicyWafConfigAddressRateLimiting;
  /**
  * caching_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#caching_rules WaasWaasPolicy#caching_rules}
  */
  readonly cachingRules?: WaasWaasPolicyWafConfigCachingRules[] | cdktf.IResolvable;
  /**
  * captchas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#captchas WaasWaasPolicy#captchas}
  */
  readonly captchas?: WaasWaasPolicyWafConfigCaptchas[] | cdktf.IResolvable;
  /**
  * custom_protection_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#custom_protection_rules WaasWaasPolicy#custom_protection_rules}
  */
  readonly customProtectionRules?: WaasWaasPolicyWafConfigCustomProtectionRules[] | cdktf.IResolvable;
  /**
  * device_fingerprint_challenge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#device_fingerprint_challenge WaasWaasPolicy#device_fingerprint_challenge}
  */
  readonly deviceFingerprintChallenge?: WaasWaasPolicyWafConfigDeviceFingerprintChallenge;
  /**
  * human_interaction_challenge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#human_interaction_challenge WaasWaasPolicy#human_interaction_challenge}
  */
  readonly humanInteractionChallenge?: WaasWaasPolicyWafConfigHumanInteractionChallenge;
  /**
  * js_challenge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#js_challenge WaasWaasPolicy#js_challenge}
  */
  readonly jsChallenge?: WaasWaasPolicyWafConfigJsChallenge;
  /**
  * protection_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#protection_settings WaasWaasPolicy#protection_settings}
  */
  readonly protectionSettings?: WaasWaasPolicyWafConfigProtectionSettings;
  /**
  * whitelists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#whitelists WaasWaasPolicy#whitelists}
  */
  readonly whitelists?: WaasWaasPolicyWafConfigWhitelists[] | cdktf.IResolvable;
}

export function waasWaasPolicyWafConfigToTerraform(struct?: WaasWaasPolicyWafConfigOutputReference | WaasWaasPolicyWafConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    origin: cdktf.stringToTerraform(struct!.origin),
    origin_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.originGroups),
    access_rules: cdktf.listMapper(waasWaasPolicyWafConfigAccessRulesToTerraform, true)(struct!.accessRules),
    address_rate_limiting: waasWaasPolicyWafConfigAddressRateLimitingToTerraform(struct!.addressRateLimiting),
    caching_rules: cdktf.listMapper(waasWaasPolicyWafConfigCachingRulesToTerraform, true)(struct!.cachingRules),
    captchas: cdktf.listMapper(waasWaasPolicyWafConfigCaptchasToTerraform, true)(struct!.captchas),
    custom_protection_rules: cdktf.listMapper(waasWaasPolicyWafConfigCustomProtectionRulesToTerraform, true)(struct!.customProtectionRules),
    device_fingerprint_challenge: waasWaasPolicyWafConfigDeviceFingerprintChallengeToTerraform(struct!.deviceFingerprintChallenge),
    human_interaction_challenge: waasWaasPolicyWafConfigHumanInteractionChallengeToTerraform(struct!.humanInteractionChallenge),
    js_challenge: waasWaasPolicyWafConfigJsChallengeToTerraform(struct!.jsChallenge),
    protection_settings: waasWaasPolicyWafConfigProtectionSettingsToTerraform(struct!.protectionSettings),
    whitelists: cdktf.listMapper(waasWaasPolicyWafConfigWhitelistsToTerraform, true)(struct!.whitelists),
  }
}


export function waasWaasPolicyWafConfigToHclTerraform(struct?: WaasWaasPolicyWafConfigOutputReference | WaasWaasPolicyWafConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    origin: {
      value: cdktf.stringToHclTerraform(struct!.origin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.originGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    access_rules: {
      value: cdktf.listMapperHcl(waasWaasPolicyWafConfigAccessRulesToHclTerraform, true)(struct!.accessRules),
      isBlock: true,
      type: "list",
      storageClassType: "WaasWaasPolicyWafConfigAccessRulesList",
    },
    address_rate_limiting: {
      value: waasWaasPolicyWafConfigAddressRateLimitingToHclTerraform(struct!.addressRateLimiting),
      isBlock: true,
      type: "list",
      storageClassType: "WaasWaasPolicyWafConfigAddressRateLimitingList",
    },
    caching_rules: {
      value: cdktf.listMapperHcl(waasWaasPolicyWafConfigCachingRulesToHclTerraform, true)(struct!.cachingRules),
      isBlock: true,
      type: "list",
      storageClassType: "WaasWaasPolicyWafConfigCachingRulesList",
    },
    captchas: {
      value: cdktf.listMapperHcl(waasWaasPolicyWafConfigCaptchasToHclTerraform, true)(struct!.captchas),
      isBlock: true,
      type: "list",
      storageClassType: "WaasWaasPolicyWafConfigCaptchasList",
    },
    custom_protection_rules: {
      value: cdktf.listMapperHcl(waasWaasPolicyWafConfigCustomProtectionRulesToHclTerraform, true)(struct!.customProtectionRules),
      isBlock: true,
      type: "list",
      storageClassType: "WaasWaasPolicyWafConfigCustomProtectionRulesList",
    },
    device_fingerprint_challenge: {
      value: waasWaasPolicyWafConfigDeviceFingerprintChallengeToHclTerraform(struct!.deviceFingerprintChallenge),
      isBlock: true,
      type: "list",
      storageClassType: "WaasWaasPolicyWafConfigDeviceFingerprintChallengeList",
    },
    human_interaction_challenge: {
      value: waasWaasPolicyWafConfigHumanInteractionChallengeToHclTerraform(struct!.humanInteractionChallenge),
      isBlock: true,
      type: "list",
      storageClassType: "WaasWaasPolicyWafConfigHumanInteractionChallengeList",
    },
    js_challenge: {
      value: waasWaasPolicyWafConfigJsChallengeToHclTerraform(struct!.jsChallenge),
      isBlock: true,
      type: "list",
      storageClassType: "WaasWaasPolicyWafConfigJsChallengeList",
    },
    protection_settings: {
      value: waasWaasPolicyWafConfigProtectionSettingsToHclTerraform(struct!.protectionSettings),
      isBlock: true,
      type: "list",
      storageClassType: "WaasWaasPolicyWafConfigProtectionSettingsList",
    },
    whitelists: {
      value: cdktf.listMapperHcl(waasWaasPolicyWafConfigWhitelistsToHclTerraform, true)(struct!.whitelists),
      isBlock: true,
      type: "list",
      storageClassType: "WaasWaasPolicyWafConfigWhitelistsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaasWaasPolicyWafConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WaasWaasPolicyWafConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._origin !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin;
    }
    if (this._originGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.originGroups = this._originGroups;
    }
    if (this._accessRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessRules = this._accessRules?.internalValue;
    }
    if (this._addressRateLimiting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressRateLimiting = this._addressRateLimiting?.internalValue;
    }
    if (this._cachingRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachingRules = this._cachingRules?.internalValue;
    }
    if (this._captchas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.captchas = this._captchas?.internalValue;
    }
    if (this._customProtectionRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProtectionRules = this._customProtectionRules?.internalValue;
    }
    if (this._deviceFingerprintChallenge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceFingerprintChallenge = this._deviceFingerprintChallenge?.internalValue;
    }
    if (this._humanInteractionChallenge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.humanInteractionChallenge = this._humanInteractionChallenge?.internalValue;
    }
    if (this._jsChallenge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsChallenge = this._jsChallenge?.internalValue;
    }
    if (this._protectionSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectionSettings = this._protectionSettings?.internalValue;
    }
    if (this._whitelists?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.whitelists = this._whitelists?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaasWaasPolicyWafConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._origin = undefined;
      this._originGroups = undefined;
      this._accessRules.internalValue = undefined;
      this._addressRateLimiting.internalValue = undefined;
      this._cachingRules.internalValue = undefined;
      this._captchas.internalValue = undefined;
      this._customProtectionRules.internalValue = undefined;
      this._deviceFingerprintChallenge.internalValue = undefined;
      this._humanInteractionChallenge.internalValue = undefined;
      this._jsChallenge.internalValue = undefined;
      this._protectionSettings.internalValue = undefined;
      this._whitelists.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._origin = value.origin;
      this._originGroups = value.originGroups;
      this._accessRules.internalValue = value.accessRules;
      this._addressRateLimiting.internalValue = value.addressRateLimiting;
      this._cachingRules.internalValue = value.cachingRules;
      this._captchas.internalValue = value.captchas;
      this._customProtectionRules.internalValue = value.customProtectionRules;
      this._deviceFingerprintChallenge.internalValue = value.deviceFingerprintChallenge;
      this._humanInteractionChallenge.internalValue = value.humanInteractionChallenge;
      this._jsChallenge.internalValue = value.jsChallenge;
      this._protectionSettings.internalValue = value.protectionSettings;
      this._whitelists.internalValue = value.whitelists;
    }
  }

  // origin - computed: true, optional: true, required: false
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  public resetOrigin() {
    this._origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }

  // origin_groups - computed: true, optional: true, required: false
  private _originGroups?: string[]; 
  public get originGroups() {
    return this.getListAttribute('origin_groups');
  }
  public set originGroups(value: string[]) {
    this._originGroups = value;
  }
  public resetOriginGroups() {
    this._originGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originGroupsInput() {
    return this._originGroups;
  }

  // access_rules - computed: false, optional: true, required: false
  private _accessRules = new WaasWaasPolicyWafConfigAccessRulesList(this, "access_rules", false);
  public get accessRules() {
    return this._accessRules;
  }
  public putAccessRules(value: WaasWaasPolicyWafConfigAccessRules[] | cdktf.IResolvable) {
    this._accessRules.internalValue = value;
  }
  public resetAccessRules() {
    this._accessRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessRulesInput() {
    return this._accessRules.internalValue;
  }

  // address_rate_limiting - computed: false, optional: true, required: false
  private _addressRateLimiting = new WaasWaasPolicyWafConfigAddressRateLimitingOutputReference(this, "address_rate_limiting");
  public get addressRateLimiting() {
    return this._addressRateLimiting;
  }
  public putAddressRateLimiting(value: WaasWaasPolicyWafConfigAddressRateLimiting) {
    this._addressRateLimiting.internalValue = value;
  }
  public resetAddressRateLimiting() {
    this._addressRateLimiting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressRateLimitingInput() {
    return this._addressRateLimiting.internalValue;
  }

  // caching_rules - computed: false, optional: true, required: false
  private _cachingRules = new WaasWaasPolicyWafConfigCachingRulesList(this, "caching_rules", false);
  public get cachingRules() {
    return this._cachingRules;
  }
  public putCachingRules(value: WaasWaasPolicyWafConfigCachingRules[] | cdktf.IResolvable) {
    this._cachingRules.internalValue = value;
  }
  public resetCachingRules() {
    this._cachingRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingRulesInput() {
    return this._cachingRules.internalValue;
  }

  // captchas - computed: false, optional: true, required: false
  private _captchas = new WaasWaasPolicyWafConfigCaptchasList(this, "captchas", false);
  public get captchas() {
    return this._captchas;
  }
  public putCaptchas(value: WaasWaasPolicyWafConfigCaptchas[] | cdktf.IResolvable) {
    this._captchas.internalValue = value;
  }
  public resetCaptchas() {
    this._captchas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchasInput() {
    return this._captchas.internalValue;
  }

  // custom_protection_rules - computed: false, optional: true, required: false
  private _customProtectionRules = new WaasWaasPolicyWafConfigCustomProtectionRulesList(this, "custom_protection_rules", false);
  public get customProtectionRules() {
    return this._customProtectionRules;
  }
  public putCustomProtectionRules(value: WaasWaasPolicyWafConfigCustomProtectionRules[] | cdktf.IResolvable) {
    this._customProtectionRules.internalValue = value;
  }
  public resetCustomProtectionRules() {
    this._customProtectionRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProtectionRulesInput() {
    return this._customProtectionRules.internalValue;
  }

  // device_fingerprint_challenge - computed: false, optional: true, required: false
  private _deviceFingerprintChallenge = new WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference(this, "device_fingerprint_challenge");
  public get deviceFingerprintChallenge() {
    return this._deviceFingerprintChallenge;
  }
  public putDeviceFingerprintChallenge(value: WaasWaasPolicyWafConfigDeviceFingerprintChallenge) {
    this._deviceFingerprintChallenge.internalValue = value;
  }
  public resetDeviceFingerprintChallenge() {
    this._deviceFingerprintChallenge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceFingerprintChallengeInput() {
    return this._deviceFingerprintChallenge.internalValue;
  }

  // human_interaction_challenge - computed: false, optional: true, required: false
  private _humanInteractionChallenge = new WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference(this, "human_interaction_challenge");
  public get humanInteractionChallenge() {
    return this._humanInteractionChallenge;
  }
  public putHumanInteractionChallenge(value: WaasWaasPolicyWafConfigHumanInteractionChallenge) {
    this._humanInteractionChallenge.internalValue = value;
  }
  public resetHumanInteractionChallenge() {
    this._humanInteractionChallenge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get humanInteractionChallengeInput() {
    return this._humanInteractionChallenge.internalValue;
  }

  // js_challenge - computed: false, optional: true, required: false
  private _jsChallenge = new WaasWaasPolicyWafConfigJsChallengeOutputReference(this, "js_challenge");
  public get jsChallenge() {
    return this._jsChallenge;
  }
  public putJsChallenge(value: WaasWaasPolicyWafConfigJsChallenge) {
    this._jsChallenge.internalValue = value;
  }
  public resetJsChallenge() {
    this._jsChallenge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsChallengeInput() {
    return this._jsChallenge.internalValue;
  }

  // protection_settings - computed: false, optional: true, required: false
  private _protectionSettings = new WaasWaasPolicyWafConfigProtectionSettingsOutputReference(this, "protection_settings");
  public get protectionSettings() {
    return this._protectionSettings;
  }
  public putProtectionSettings(value: WaasWaasPolicyWafConfigProtectionSettings) {
    this._protectionSettings.internalValue = value;
  }
  public resetProtectionSettings() {
    this._protectionSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionSettingsInput() {
    return this._protectionSettings.internalValue;
  }

  // whitelists - computed: false, optional: true, required: false
  private _whitelists = new WaasWaasPolicyWafConfigWhitelistsList(this, "whitelists", false);
  public get whitelists() {
    return this._whitelists;
  }
  public putWhitelists(value: WaasWaasPolicyWafConfigWhitelists[] | cdktf.IResolvable) {
    this._whitelists.internalValue = value;
  }
  public resetWhitelists() {
    this._whitelists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistsInput() {
    return this._whitelists.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy oci_waas_waas_policy}
*/
export class WaasWaasPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_waas_waas_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WaasWaasPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WaasWaasPolicy to import
  * @param importFromId The id of the existing WaasWaasPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WaasWaasPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_waas_waas_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/waas_waas_policy oci_waas_waas_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WaasWaasPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: WaasWaasPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_waas_waas_policy',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalDomains = config.additionalDomains;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._domain = config.domain;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._originGroups.internalValue = config.originGroups;
    this._origins.internalValue = config.origins;
    this._policyConfig.internalValue = config.policyConfig;
    this._timeouts.internalValue = config.timeouts;
    this._wafConfig.internalValue = config.wafConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_domains - computed: true, optional: true, required: false
  private _additionalDomains?: string[]; 
  public get additionalDomains() {
    return this.getListAttribute('additional_domains');
  }
  public set additionalDomains(value: string[]) {
    this._additionalDomains = value;
  }
  public resetAdditionalDomains() {
    this._additionalDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalDomainsInput() {
    return this._additionalDomains;
  }

  // cname - computed: true, optional: false, required: false
  public get cname() {
    return this.getStringAttribute('cname');
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // origin_groups - computed: false, optional: true, required: false
  private _originGroups = new WaasWaasPolicyOriginGroupsList(this, "origin_groups", true);
  public get originGroups() {
    return this._originGroups;
  }
  public putOriginGroups(value: WaasWaasPolicyOriginGroups[] | cdktf.IResolvable) {
    this._originGroups.internalValue = value;
  }
  public resetOriginGroups() {
    this._originGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originGroupsInput() {
    return this._originGroups.internalValue;
  }

  // origins - computed: false, optional: true, required: false
  private _origins = new WaasWaasPolicyOriginsList(this, "origins", true);
  public get origins() {
    return this._origins;
  }
  public putOrigins(value: WaasWaasPolicyOrigins[] | cdktf.IResolvable) {
    this._origins.internalValue = value;
  }
  public resetOrigins() {
    this._origins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originsInput() {
    return this._origins.internalValue;
  }

  // policy_config - computed: false, optional: true, required: false
  private _policyConfig = new WaasWaasPolicyPolicyConfigOutputReference(this, "policy_config");
  public get policyConfig() {
    return this._policyConfig;
  }
  public putPolicyConfig(value: WaasWaasPolicyPolicyConfig) {
    this._policyConfig.internalValue = value;
  }
  public resetPolicyConfig() {
    this._policyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyConfigInput() {
    return this._policyConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new WaasWaasPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: WaasWaasPolicyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // waf_config - computed: false, optional: true, required: false
  private _wafConfig = new WaasWaasPolicyWafConfigOutputReference(this, "waf_config");
  public get wafConfig() {
    return this._wafConfig;
  }
  public putWafConfig(value: WaasWaasPolicyWafConfig) {
    this._wafConfig.internalValue = value;
  }
  public resetWafConfig() {
    this._wafConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafConfigInput() {
    return this._wafConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additionalDomains),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      domain: cdktf.stringToTerraform(this._domain),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      origin_groups: cdktf.listMapper(waasWaasPolicyOriginGroupsToTerraform, true)(this._originGroups.internalValue),
      origins: cdktf.listMapper(waasWaasPolicyOriginsToTerraform, true)(this._origins.internalValue),
      policy_config: waasWaasPolicyPolicyConfigToTerraform(this._policyConfig.internalValue),
      timeouts: waasWaasPolicyTimeoutsToTerraform(this._timeouts.internalValue),
      waf_config: waasWaasPolicyWafConfigToTerraform(this._wafConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._additionalDomains),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origin_groups: {
        value: cdktf.listMapperHcl(waasWaasPolicyOriginGroupsToHclTerraform, true)(this._originGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WaasWaasPolicyOriginGroupsList",
      },
      origins: {
        value: cdktf.listMapperHcl(waasWaasPolicyOriginsToHclTerraform, true)(this._origins.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WaasWaasPolicyOriginsList",
      },
      policy_config: {
        value: waasWaasPolicyPolicyConfigToHclTerraform(this._policyConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WaasWaasPolicyPolicyConfigList",
      },
      timeouts: {
        value: waasWaasPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WaasWaasPolicyTimeouts",
      },
      waf_config: {
        value: waasWaasPolicyWafConfigToHclTerraform(this._wafConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WaasWaasPolicyWafConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
