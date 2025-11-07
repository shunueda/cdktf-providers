// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AaaAuthenticationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#delete_mode AaaAuthentication#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#device AaaAuthentication#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#dot1x AaaAuthentication#dot1x}
  */
  readonly dot1X?: AaaAuthenticationDot1X[] | cdktf.IResolvable;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#dot1x_default_a1_group AaaAuthentication#dot1x_default_a1_group}
  */
  readonly dot1XDefaultA1Group?: string;
  /**
  * Use local username authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#dot1x_default_a1_local AaaAuthentication#dot1x_default_a1_local}
  */
  readonly dot1XDefaultA1Local?: boolean | cdktf.IResolvable;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#dot1x_default_a2_group AaaAuthentication#dot1x_default_a2_group}
  */
  readonly dot1XDefaultA2Group?: string;
  /**
  * Use local username authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#dot1x_default_a2_local AaaAuthentication#dot1x_default_a2_local}
  */
  readonly dot1XDefaultA2Local?: boolean | cdktf.IResolvable;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#dot1x_default_a3_group AaaAuthentication#dot1x_default_a3_group}
  */
  readonly dot1XDefaultA3Group?: string;
  /**
  * Use local username authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#dot1x_default_a3_local AaaAuthentication#dot1x_default_a3_local}
  */
  readonly dot1XDefaultA3Local?: boolean | cdktf.IResolvable;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#dot1x_default_a4_group AaaAuthentication#dot1x_default_a4_group}
  */
  readonly dot1XDefaultA4Group?: string;
  /**
  * Use local username authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#dot1x_default_a4_local AaaAuthentication#dot1x_default_a4_local}
  */
  readonly dot1XDefaultA4Local?: boolean | cdktf.IResolvable;
  /**
  * Privileged command level(enable) authentication using cached group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#enable_default_group1_cache AaaAuthentication#enable_default_group1_cache}
  */
  readonly enableDefaultGroup1Cache?: string;
  /**
  * Privileged command level(enable) authentication using enable password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#enable_default_group1_enable AaaAuthentication#enable_default_group1_enable}
  */
  readonly enableDefaultGroup1Enable?: boolean | cdktf.IResolvable;
  /**
  * Privileged command level(enable) authentication using radius/tacacs+/ldap server(s)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#enable_default_group1_group AaaAuthentication#enable_default_group1_group}
  */
  readonly enableDefaultGroup1Group?: string;
  /**
  * Privileged command level(enable) authentication using line password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#enable_default_group1_line AaaAuthentication#enable_default_group1_line}
  */
  readonly enableDefaultGroup1Line?: boolean | cdktf.IResolvable;
  /**
  * No authentication for Privileged command level(enable)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#enable_default_group1_none AaaAuthentication#enable_default_group1_none}
  */
  readonly enableDefaultGroup1None?: boolean | cdktf.IResolvable;
  /**
  * Privileged command level(enable) authentication using cached group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#enable_default_group2_cache AaaAuthentication#enable_default_group2_cache}
  */
  readonly enableDefaultGroup2Cache?: string;
  /**
  * Privileged command level(enable) authentication using enable password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#enable_default_group2_enable AaaAuthentication#enable_default_group2_enable}
  */
  readonly enableDefaultGroup2Enable?: boolean | cdktf.IResolvable;
  /**
  * Privileged command level(enable) authentication using radius/tacacs+/ldap server(s)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#enable_default_group2_group AaaAuthentication#enable_default_group2_group}
  */
  readonly enableDefaultGroup2Group?: string;
  /**
  * Privileged command level(enable) authentication using line password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#enable_default_group2_line AaaAuthentication#enable_default_group2_line}
  */
  readonly enableDefaultGroup2Line?: boolean | cdktf.IResolvable;
  /**
  * No authentication for Privileged command level(enable)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#enable_default_group2_none AaaAuthentication#enable_default_group2_none}
  */
  readonly enableDefaultGroup2None?: boolean | cdktf.IResolvable;
  /**
  * Privileged command level(enable) authentication using cached group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#enable_default_group3_cache AaaAuthentication#enable_default_group3_cache}
  */
  readonly enableDefaultGroup3Cache?: string;
  /**
  * Privileged command level(enable) authentication using enable password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#enable_default_group3_enable AaaAuthentication#enable_default_group3_enable}
  */
  readonly enableDefaultGroup3Enable?: boolean | cdktf.IResolvable;
  /**
  * Privileged command level(enable) authentication using radius/tacacs+/ldap server(s)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#enable_default_group3_group AaaAuthentication#enable_default_group3_group}
  */
  readonly enableDefaultGroup3Group?: string;
  /**
  * Privileged command level(enable) authentication using line password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#enable_default_group3_line AaaAuthentication#enable_default_group3_line}
  */
  readonly enableDefaultGroup3Line?: boolean | cdktf.IResolvable;
  /**
  * No authentication for Privileged command level(enable)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#enable_default_group3_none AaaAuthentication#enable_default_group3_none}
  */
  readonly enableDefaultGroup3None?: boolean | cdktf.IResolvable;
  /**
  * Privileged command level(enable) authentication using cached group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#enable_default_group4_cache AaaAuthentication#enable_default_group4_cache}
  */
  readonly enableDefaultGroup4Cache?: string;
  /**
  * Privileged command level(enable) authentication using enable password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#enable_default_group4_enable AaaAuthentication#enable_default_group4_enable}
  */
  readonly enableDefaultGroup4Enable?: boolean | cdktf.IResolvable;
  /**
  * Privileged command level(enable) authentication using radius/tacacs+/ldap server(s)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#enable_default_group4_group AaaAuthentication#enable_default_group4_group}
  */
  readonly enableDefaultGroup4Group?: string;
  /**
  * Privileged command level(enable) authentication using line password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#enable_default_group4_line AaaAuthentication#enable_default_group4_line}
  */
  readonly enableDefaultGroup4Line?: boolean | cdktf.IResolvable;
  /**
  * No authentication for Privileged command level(enable)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#enable_default_group4_none AaaAuthentication#enable_default_group4_none}
  */
  readonly enableDefaultGroup4None?: boolean | cdktf.IResolvable;
  /**
  * Set authentication lists for logins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#logins AaaAuthentication#logins}
  */
  readonly logins?: AaaAuthenticationLogins[] | cdktf.IResolvable;
}
export interface AaaAuthenticationDot1X {
  /**
  * Use Cached-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#a1_cache AaaAuthentication#a1_cache}
  */
  readonly a1Cache?: string;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#a1_group AaaAuthentication#a1_group}
  */
  readonly a1Group?: string;
  /**
  * Use local username authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#a1_local AaaAuthentication#a1_local}
  */
  readonly a1Local?: boolean | cdktf.IResolvable;
  /**
  * Use list of all Radius hosts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#a1_radius AaaAuthentication#a1_radius}
  */
  readonly a1Radius?: boolean | cdktf.IResolvable;
  /**
  * Use Cached-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#a2_cache AaaAuthentication#a2_cache}
  */
  readonly a2Cache?: string;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#a2_group AaaAuthentication#a2_group}
  */
  readonly a2Group?: string;
  /**
  * Use local username authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#a2_local AaaAuthentication#a2_local}
  */
  readonly a2Local?: boolean | cdktf.IResolvable;
  /**
  * Use list of all Radius hosts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#a2_radius AaaAuthentication#a2_radius}
  */
  readonly a2Radius?: boolean | cdktf.IResolvable;
  /**
  * Use Cached-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#a3_cache AaaAuthentication#a3_cache}
  */
  readonly a3Cache?: string;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#a3_group AaaAuthentication#a3_group}
  */
  readonly a3Group?: string;
  /**
  * Use local username authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#a3_local AaaAuthentication#a3_local}
  */
  readonly a3Local?: boolean | cdktf.IResolvable;
  /**
  * Use list of all Radius hosts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#a3_radius AaaAuthentication#a3_radius}
  */
  readonly a3Radius?: boolean | cdktf.IResolvable;
  /**
  * Use Cached-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#a4_cache AaaAuthentication#a4_cache}
  */
  readonly a4Cache?: string;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#a4_group AaaAuthentication#a4_group}
  */
  readonly a4Group?: string;
  /**
  * Use local username authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#a4_local AaaAuthentication#a4_local}
  */
  readonly a4Local?: boolean | cdktf.IResolvable;
  /**
  * Use list of all Radius hosts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#a4_radius AaaAuthentication#a4_radius}
  */
  readonly a4Radius?: boolean | cdktf.IResolvable;
  /**
  * Named authentication method list for dot1x service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#name AaaAuthentication#name}
  */
  readonly name: string;
}

export function aaaAuthenticationDot1XToTerraform(struct?: AaaAuthenticationDot1X | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    a1_cache: cdktf.stringToTerraform(struct!.a1Cache),
    a1_group: cdktf.stringToTerraform(struct!.a1Group),
    a1_local: cdktf.booleanToTerraform(struct!.a1Local),
    a1_radius: cdktf.booleanToTerraform(struct!.a1Radius),
    a2_cache: cdktf.stringToTerraform(struct!.a2Cache),
    a2_group: cdktf.stringToTerraform(struct!.a2Group),
    a2_local: cdktf.booleanToTerraform(struct!.a2Local),
    a2_radius: cdktf.booleanToTerraform(struct!.a2Radius),
    a3_cache: cdktf.stringToTerraform(struct!.a3Cache),
    a3_group: cdktf.stringToTerraform(struct!.a3Group),
    a3_local: cdktf.booleanToTerraform(struct!.a3Local),
    a3_radius: cdktf.booleanToTerraform(struct!.a3Radius),
    a4_cache: cdktf.stringToTerraform(struct!.a4Cache),
    a4_group: cdktf.stringToTerraform(struct!.a4Group),
    a4_local: cdktf.booleanToTerraform(struct!.a4Local),
    a4_radius: cdktf.booleanToTerraform(struct!.a4Radius),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function aaaAuthenticationDot1XToHclTerraform(struct?: AaaAuthenticationDot1X | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    a1_cache: {
      value: cdktf.stringToHclTerraform(struct!.a1Cache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    a1_group: {
      value: cdktf.stringToHclTerraform(struct!.a1Group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    a1_local: {
      value: cdktf.booleanToHclTerraform(struct!.a1Local),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    a1_radius: {
      value: cdktf.booleanToHclTerraform(struct!.a1Radius),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    a2_cache: {
      value: cdktf.stringToHclTerraform(struct!.a2Cache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    a2_group: {
      value: cdktf.stringToHclTerraform(struct!.a2Group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    a2_local: {
      value: cdktf.booleanToHclTerraform(struct!.a2Local),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    a2_radius: {
      value: cdktf.booleanToHclTerraform(struct!.a2Radius),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    a3_cache: {
      value: cdktf.stringToHclTerraform(struct!.a3Cache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    a3_group: {
      value: cdktf.stringToHclTerraform(struct!.a3Group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    a3_local: {
      value: cdktf.booleanToHclTerraform(struct!.a3Local),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    a3_radius: {
      value: cdktf.booleanToHclTerraform(struct!.a3Radius),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    a4_cache: {
      value: cdktf.stringToHclTerraform(struct!.a4Cache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    a4_group: {
      value: cdktf.stringToHclTerraform(struct!.a4Group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    a4_local: {
      value: cdktf.booleanToHclTerraform(struct!.a4Local),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    a4_radius: {
      value: cdktf.booleanToHclTerraform(struct!.a4Radius),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class AaaAuthenticationDot1XOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AaaAuthenticationDot1X | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._a1Cache !== undefined) {
      hasAnyValues = true;
      internalValueResult.a1Cache = this._a1Cache;
    }
    if (this._a1Group !== undefined) {
      hasAnyValues = true;
      internalValueResult.a1Group = this._a1Group;
    }
    if (this._a1Local !== undefined) {
      hasAnyValues = true;
      internalValueResult.a1Local = this._a1Local;
    }
    if (this._a1Radius !== undefined) {
      hasAnyValues = true;
      internalValueResult.a1Radius = this._a1Radius;
    }
    if (this._a2Cache !== undefined) {
      hasAnyValues = true;
      internalValueResult.a2Cache = this._a2Cache;
    }
    if (this._a2Group !== undefined) {
      hasAnyValues = true;
      internalValueResult.a2Group = this._a2Group;
    }
    if (this._a2Local !== undefined) {
      hasAnyValues = true;
      internalValueResult.a2Local = this._a2Local;
    }
    if (this._a2Radius !== undefined) {
      hasAnyValues = true;
      internalValueResult.a2Radius = this._a2Radius;
    }
    if (this._a3Cache !== undefined) {
      hasAnyValues = true;
      internalValueResult.a3Cache = this._a3Cache;
    }
    if (this._a3Group !== undefined) {
      hasAnyValues = true;
      internalValueResult.a3Group = this._a3Group;
    }
    if (this._a3Local !== undefined) {
      hasAnyValues = true;
      internalValueResult.a3Local = this._a3Local;
    }
    if (this._a3Radius !== undefined) {
      hasAnyValues = true;
      internalValueResult.a3Radius = this._a3Radius;
    }
    if (this._a4Cache !== undefined) {
      hasAnyValues = true;
      internalValueResult.a4Cache = this._a4Cache;
    }
    if (this._a4Group !== undefined) {
      hasAnyValues = true;
      internalValueResult.a4Group = this._a4Group;
    }
    if (this._a4Local !== undefined) {
      hasAnyValues = true;
      internalValueResult.a4Local = this._a4Local;
    }
    if (this._a4Radius !== undefined) {
      hasAnyValues = true;
      internalValueResult.a4Radius = this._a4Radius;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AaaAuthenticationDot1X | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._a1Cache = undefined;
      this._a1Group = undefined;
      this._a1Local = undefined;
      this._a1Radius = undefined;
      this._a2Cache = undefined;
      this._a2Group = undefined;
      this._a2Local = undefined;
      this._a2Radius = undefined;
      this._a3Cache = undefined;
      this._a3Group = undefined;
      this._a3Local = undefined;
      this._a3Radius = undefined;
      this._a4Cache = undefined;
      this._a4Group = undefined;
      this._a4Local = undefined;
      this._a4Radius = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._a1Cache = value.a1Cache;
      this._a1Group = value.a1Group;
      this._a1Local = value.a1Local;
      this._a1Radius = value.a1Radius;
      this._a2Cache = value.a2Cache;
      this._a2Group = value.a2Group;
      this._a2Local = value.a2Local;
      this._a2Radius = value.a2Radius;
      this._a3Cache = value.a3Cache;
      this._a3Group = value.a3Group;
      this._a3Local = value.a3Local;
      this._a3Radius = value.a3Radius;
      this._a4Cache = value.a4Cache;
      this._a4Group = value.a4Group;
      this._a4Local = value.a4Local;
      this._a4Radius = value.a4Radius;
      this._name = value.name;
    }
  }

  // a1_cache - computed: false, optional: true, required: false
  private _a1Cache?: string; 
  public get a1Cache() {
    return this.getStringAttribute('a1_cache');
  }
  public set a1Cache(value: string) {
    this._a1Cache = value;
  }
  public resetA1Cache() {
    this._a1Cache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a1CacheInput() {
    return this._a1Cache;
  }

  // a1_group - computed: false, optional: true, required: false
  private _a1Group?: string; 
  public get a1Group() {
    return this.getStringAttribute('a1_group');
  }
  public set a1Group(value: string) {
    this._a1Group = value;
  }
  public resetA1Group() {
    this._a1Group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a1GroupInput() {
    return this._a1Group;
  }

  // a1_local - computed: false, optional: true, required: false
  private _a1Local?: boolean | cdktf.IResolvable; 
  public get a1Local() {
    return this.getBooleanAttribute('a1_local');
  }
  public set a1Local(value: boolean | cdktf.IResolvable) {
    this._a1Local = value;
  }
  public resetA1Local() {
    this._a1Local = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a1LocalInput() {
    return this._a1Local;
  }

  // a1_radius - computed: false, optional: true, required: false
  private _a1Radius?: boolean | cdktf.IResolvable; 
  public get a1Radius() {
    return this.getBooleanAttribute('a1_radius');
  }
  public set a1Radius(value: boolean | cdktf.IResolvable) {
    this._a1Radius = value;
  }
  public resetA1Radius() {
    this._a1Radius = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a1RadiusInput() {
    return this._a1Radius;
  }

  // a2_cache - computed: false, optional: true, required: false
  private _a2Cache?: string; 
  public get a2Cache() {
    return this.getStringAttribute('a2_cache');
  }
  public set a2Cache(value: string) {
    this._a2Cache = value;
  }
  public resetA2Cache() {
    this._a2Cache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a2CacheInput() {
    return this._a2Cache;
  }

  // a2_group - computed: false, optional: true, required: false
  private _a2Group?: string; 
  public get a2Group() {
    return this.getStringAttribute('a2_group');
  }
  public set a2Group(value: string) {
    this._a2Group = value;
  }
  public resetA2Group() {
    this._a2Group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a2GroupInput() {
    return this._a2Group;
  }

  // a2_local - computed: false, optional: true, required: false
  private _a2Local?: boolean | cdktf.IResolvable; 
  public get a2Local() {
    return this.getBooleanAttribute('a2_local');
  }
  public set a2Local(value: boolean | cdktf.IResolvable) {
    this._a2Local = value;
  }
  public resetA2Local() {
    this._a2Local = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a2LocalInput() {
    return this._a2Local;
  }

  // a2_radius - computed: false, optional: true, required: false
  private _a2Radius?: boolean | cdktf.IResolvable; 
  public get a2Radius() {
    return this.getBooleanAttribute('a2_radius');
  }
  public set a2Radius(value: boolean | cdktf.IResolvable) {
    this._a2Radius = value;
  }
  public resetA2Radius() {
    this._a2Radius = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a2RadiusInput() {
    return this._a2Radius;
  }

  // a3_cache - computed: false, optional: true, required: false
  private _a3Cache?: string; 
  public get a3Cache() {
    return this.getStringAttribute('a3_cache');
  }
  public set a3Cache(value: string) {
    this._a3Cache = value;
  }
  public resetA3Cache() {
    this._a3Cache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a3CacheInput() {
    return this._a3Cache;
  }

  // a3_group - computed: false, optional: true, required: false
  private _a3Group?: string; 
  public get a3Group() {
    return this.getStringAttribute('a3_group');
  }
  public set a3Group(value: string) {
    this._a3Group = value;
  }
  public resetA3Group() {
    this._a3Group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a3GroupInput() {
    return this._a3Group;
  }

  // a3_local - computed: false, optional: true, required: false
  private _a3Local?: boolean | cdktf.IResolvable; 
  public get a3Local() {
    return this.getBooleanAttribute('a3_local');
  }
  public set a3Local(value: boolean | cdktf.IResolvable) {
    this._a3Local = value;
  }
  public resetA3Local() {
    this._a3Local = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a3LocalInput() {
    return this._a3Local;
  }

  // a3_radius - computed: false, optional: true, required: false
  private _a3Radius?: boolean | cdktf.IResolvable; 
  public get a3Radius() {
    return this.getBooleanAttribute('a3_radius');
  }
  public set a3Radius(value: boolean | cdktf.IResolvable) {
    this._a3Radius = value;
  }
  public resetA3Radius() {
    this._a3Radius = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a3RadiusInput() {
    return this._a3Radius;
  }

  // a4_cache - computed: false, optional: true, required: false
  private _a4Cache?: string; 
  public get a4Cache() {
    return this.getStringAttribute('a4_cache');
  }
  public set a4Cache(value: string) {
    this._a4Cache = value;
  }
  public resetA4Cache() {
    this._a4Cache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a4CacheInput() {
    return this._a4Cache;
  }

  // a4_group - computed: false, optional: true, required: false
  private _a4Group?: string; 
  public get a4Group() {
    return this.getStringAttribute('a4_group');
  }
  public set a4Group(value: string) {
    this._a4Group = value;
  }
  public resetA4Group() {
    this._a4Group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a4GroupInput() {
    return this._a4Group;
  }

  // a4_local - computed: false, optional: true, required: false
  private _a4Local?: boolean | cdktf.IResolvable; 
  public get a4Local() {
    return this.getBooleanAttribute('a4_local');
  }
  public set a4Local(value: boolean | cdktf.IResolvable) {
    this._a4Local = value;
  }
  public resetA4Local() {
    this._a4Local = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a4LocalInput() {
    return this._a4Local;
  }

  // a4_radius - computed: false, optional: true, required: false
  private _a4Radius?: boolean | cdktf.IResolvable; 
  public get a4Radius() {
    return this.getBooleanAttribute('a4_radius');
  }
  public set a4Radius(value: boolean | cdktf.IResolvable) {
    this._a4Radius = value;
  }
  public resetA4Radius() {
    this._a4Radius = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a4RadiusInput() {
    return this._a4Radius;
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

export class AaaAuthenticationDot1XList extends cdktf.ComplexList {
  public internalValue? : AaaAuthenticationDot1X[] | cdktf.IResolvable

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
  public get(index: number): AaaAuthenticationDot1XOutputReference {
    return new AaaAuthenticationDot1XOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AaaAuthenticationLogins {
  /**
  * Use enable password for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#a1_enable AaaAuthentication#a1_enable}
  */
  readonly a1Enable?: boolean | cdktf.IResolvable;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#a1_group AaaAuthentication#a1_group}
  */
  readonly a1Group?: string;
  /**
  * Use line password for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#a1_line AaaAuthentication#a1_line}
  */
  readonly a1Line?: boolean | cdktf.IResolvable;
  /**
  * Use local username authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#a1_local AaaAuthentication#a1_local}
  */
  readonly a1Local?: boolean | cdktf.IResolvable;
  /**
  * NO authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#a1_none AaaAuthentication#a1_none}
  */
  readonly a1None?: boolean | cdktf.IResolvable;
  /**
  * Use enable password for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#a2_enable AaaAuthentication#a2_enable}
  */
  readonly a2Enable?: boolean | cdktf.IResolvable;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#a2_group AaaAuthentication#a2_group}
  */
  readonly a2Group?: string;
  /**
  * Use line password for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#a2_line AaaAuthentication#a2_line}
  */
  readonly a2Line?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#a2_local AaaAuthentication#a2_local}
  */
  readonly a2Local?: boolean | cdktf.IResolvable;
  /**
  * NO authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#a2_none AaaAuthentication#a2_none}
  */
  readonly a2None?: boolean | cdktf.IResolvable;
  /**
  * Use enable password for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#a3_enable AaaAuthentication#a3_enable}
  */
  readonly a3Enable?: boolean | cdktf.IResolvable;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#a3_group AaaAuthentication#a3_group}
  */
  readonly a3Group?: string;
  /**
  * Use line password for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#a3_line AaaAuthentication#a3_line}
  */
  readonly a3Line?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#a3_local AaaAuthentication#a3_local}
  */
  readonly a3Local?: boolean | cdktf.IResolvable;
  /**
  * NO authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#a3_none AaaAuthentication#a3_none}
  */
  readonly a3None?: boolean | cdktf.IResolvable;
  /**
  * Use enable password for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#a4_enable AaaAuthentication#a4_enable}
  */
  readonly a4Enable?: boolean | cdktf.IResolvable;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#a4_group AaaAuthentication#a4_group}
  */
  readonly a4Group?: string;
  /**
  * Use line password for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#a4_line AaaAuthentication#a4_line}
  */
  readonly a4Line?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#a4_local AaaAuthentication#a4_local}
  */
  readonly a4Local?: boolean | cdktf.IResolvable;
  /**
  * NO authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#a4_none AaaAuthentication#a4_none}
  */
  readonly a4None?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#name AaaAuthentication#name}
  */
  readonly name: string;
}

export function aaaAuthenticationLoginsToTerraform(struct?: AaaAuthenticationLogins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    a1_enable: cdktf.booleanToTerraform(struct!.a1Enable),
    a1_group: cdktf.stringToTerraform(struct!.a1Group),
    a1_line: cdktf.booleanToTerraform(struct!.a1Line),
    a1_local: cdktf.booleanToTerraform(struct!.a1Local),
    a1_none: cdktf.booleanToTerraform(struct!.a1None),
    a2_enable: cdktf.booleanToTerraform(struct!.a2Enable),
    a2_group: cdktf.stringToTerraform(struct!.a2Group),
    a2_line: cdktf.booleanToTerraform(struct!.a2Line),
    a2_local: cdktf.booleanToTerraform(struct!.a2Local),
    a2_none: cdktf.booleanToTerraform(struct!.a2None),
    a3_enable: cdktf.booleanToTerraform(struct!.a3Enable),
    a3_group: cdktf.stringToTerraform(struct!.a3Group),
    a3_line: cdktf.booleanToTerraform(struct!.a3Line),
    a3_local: cdktf.booleanToTerraform(struct!.a3Local),
    a3_none: cdktf.booleanToTerraform(struct!.a3None),
    a4_enable: cdktf.booleanToTerraform(struct!.a4Enable),
    a4_group: cdktf.stringToTerraform(struct!.a4Group),
    a4_line: cdktf.booleanToTerraform(struct!.a4Line),
    a4_local: cdktf.booleanToTerraform(struct!.a4Local),
    a4_none: cdktf.booleanToTerraform(struct!.a4None),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function aaaAuthenticationLoginsToHclTerraform(struct?: AaaAuthenticationLogins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    a1_enable: {
      value: cdktf.booleanToHclTerraform(struct!.a1Enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    a1_group: {
      value: cdktf.stringToHclTerraform(struct!.a1Group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    a1_line: {
      value: cdktf.booleanToHclTerraform(struct!.a1Line),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    a1_local: {
      value: cdktf.booleanToHclTerraform(struct!.a1Local),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    a1_none: {
      value: cdktf.booleanToHclTerraform(struct!.a1None),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    a2_enable: {
      value: cdktf.booleanToHclTerraform(struct!.a2Enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    a2_group: {
      value: cdktf.stringToHclTerraform(struct!.a2Group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    a2_line: {
      value: cdktf.booleanToHclTerraform(struct!.a2Line),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    a2_local: {
      value: cdktf.booleanToHclTerraform(struct!.a2Local),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    a2_none: {
      value: cdktf.booleanToHclTerraform(struct!.a2None),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    a3_enable: {
      value: cdktf.booleanToHclTerraform(struct!.a3Enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    a3_group: {
      value: cdktf.stringToHclTerraform(struct!.a3Group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    a3_line: {
      value: cdktf.booleanToHclTerraform(struct!.a3Line),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    a3_local: {
      value: cdktf.booleanToHclTerraform(struct!.a3Local),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    a3_none: {
      value: cdktf.booleanToHclTerraform(struct!.a3None),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    a4_enable: {
      value: cdktf.booleanToHclTerraform(struct!.a4Enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    a4_group: {
      value: cdktf.stringToHclTerraform(struct!.a4Group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    a4_line: {
      value: cdktf.booleanToHclTerraform(struct!.a4Line),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    a4_local: {
      value: cdktf.booleanToHclTerraform(struct!.a4Local),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    a4_none: {
      value: cdktf.booleanToHclTerraform(struct!.a4None),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class AaaAuthenticationLoginsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AaaAuthenticationLogins | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._a1Enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.a1Enable = this._a1Enable;
    }
    if (this._a1Group !== undefined) {
      hasAnyValues = true;
      internalValueResult.a1Group = this._a1Group;
    }
    if (this._a1Line !== undefined) {
      hasAnyValues = true;
      internalValueResult.a1Line = this._a1Line;
    }
    if (this._a1Local !== undefined) {
      hasAnyValues = true;
      internalValueResult.a1Local = this._a1Local;
    }
    if (this._a1None !== undefined) {
      hasAnyValues = true;
      internalValueResult.a1None = this._a1None;
    }
    if (this._a2Enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.a2Enable = this._a2Enable;
    }
    if (this._a2Group !== undefined) {
      hasAnyValues = true;
      internalValueResult.a2Group = this._a2Group;
    }
    if (this._a2Line !== undefined) {
      hasAnyValues = true;
      internalValueResult.a2Line = this._a2Line;
    }
    if (this._a2Local !== undefined) {
      hasAnyValues = true;
      internalValueResult.a2Local = this._a2Local;
    }
    if (this._a2None !== undefined) {
      hasAnyValues = true;
      internalValueResult.a2None = this._a2None;
    }
    if (this._a3Enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.a3Enable = this._a3Enable;
    }
    if (this._a3Group !== undefined) {
      hasAnyValues = true;
      internalValueResult.a3Group = this._a3Group;
    }
    if (this._a3Line !== undefined) {
      hasAnyValues = true;
      internalValueResult.a3Line = this._a3Line;
    }
    if (this._a3Local !== undefined) {
      hasAnyValues = true;
      internalValueResult.a3Local = this._a3Local;
    }
    if (this._a3None !== undefined) {
      hasAnyValues = true;
      internalValueResult.a3None = this._a3None;
    }
    if (this._a4Enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.a4Enable = this._a4Enable;
    }
    if (this._a4Group !== undefined) {
      hasAnyValues = true;
      internalValueResult.a4Group = this._a4Group;
    }
    if (this._a4Line !== undefined) {
      hasAnyValues = true;
      internalValueResult.a4Line = this._a4Line;
    }
    if (this._a4Local !== undefined) {
      hasAnyValues = true;
      internalValueResult.a4Local = this._a4Local;
    }
    if (this._a4None !== undefined) {
      hasAnyValues = true;
      internalValueResult.a4None = this._a4None;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AaaAuthenticationLogins | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._a1Enable = undefined;
      this._a1Group = undefined;
      this._a1Line = undefined;
      this._a1Local = undefined;
      this._a1None = undefined;
      this._a2Enable = undefined;
      this._a2Group = undefined;
      this._a2Line = undefined;
      this._a2Local = undefined;
      this._a2None = undefined;
      this._a3Enable = undefined;
      this._a3Group = undefined;
      this._a3Line = undefined;
      this._a3Local = undefined;
      this._a3None = undefined;
      this._a4Enable = undefined;
      this._a4Group = undefined;
      this._a4Line = undefined;
      this._a4Local = undefined;
      this._a4None = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._a1Enable = value.a1Enable;
      this._a1Group = value.a1Group;
      this._a1Line = value.a1Line;
      this._a1Local = value.a1Local;
      this._a1None = value.a1None;
      this._a2Enable = value.a2Enable;
      this._a2Group = value.a2Group;
      this._a2Line = value.a2Line;
      this._a2Local = value.a2Local;
      this._a2None = value.a2None;
      this._a3Enable = value.a3Enable;
      this._a3Group = value.a3Group;
      this._a3Line = value.a3Line;
      this._a3Local = value.a3Local;
      this._a3None = value.a3None;
      this._a4Enable = value.a4Enable;
      this._a4Group = value.a4Group;
      this._a4Line = value.a4Line;
      this._a4Local = value.a4Local;
      this._a4None = value.a4None;
      this._name = value.name;
    }
  }

  // a1_enable - computed: false, optional: true, required: false
  private _a1Enable?: boolean | cdktf.IResolvable; 
  public get a1Enable() {
    return this.getBooleanAttribute('a1_enable');
  }
  public set a1Enable(value: boolean | cdktf.IResolvable) {
    this._a1Enable = value;
  }
  public resetA1Enable() {
    this._a1Enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a1EnableInput() {
    return this._a1Enable;
  }

  // a1_group - computed: false, optional: true, required: false
  private _a1Group?: string; 
  public get a1Group() {
    return this.getStringAttribute('a1_group');
  }
  public set a1Group(value: string) {
    this._a1Group = value;
  }
  public resetA1Group() {
    this._a1Group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a1GroupInput() {
    return this._a1Group;
  }

  // a1_line - computed: false, optional: true, required: false
  private _a1Line?: boolean | cdktf.IResolvable; 
  public get a1Line() {
    return this.getBooleanAttribute('a1_line');
  }
  public set a1Line(value: boolean | cdktf.IResolvable) {
    this._a1Line = value;
  }
  public resetA1Line() {
    this._a1Line = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a1LineInput() {
    return this._a1Line;
  }

  // a1_local - computed: false, optional: true, required: false
  private _a1Local?: boolean | cdktf.IResolvable; 
  public get a1Local() {
    return this.getBooleanAttribute('a1_local');
  }
  public set a1Local(value: boolean | cdktf.IResolvable) {
    this._a1Local = value;
  }
  public resetA1Local() {
    this._a1Local = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a1LocalInput() {
    return this._a1Local;
  }

  // a1_none - computed: false, optional: true, required: false
  private _a1None?: boolean | cdktf.IResolvable; 
  public get a1None() {
    return this.getBooleanAttribute('a1_none');
  }
  public set a1None(value: boolean | cdktf.IResolvable) {
    this._a1None = value;
  }
  public resetA1None() {
    this._a1None = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a1NoneInput() {
    return this._a1None;
  }

  // a2_enable - computed: false, optional: true, required: false
  private _a2Enable?: boolean | cdktf.IResolvable; 
  public get a2Enable() {
    return this.getBooleanAttribute('a2_enable');
  }
  public set a2Enable(value: boolean | cdktf.IResolvable) {
    this._a2Enable = value;
  }
  public resetA2Enable() {
    this._a2Enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a2EnableInput() {
    return this._a2Enable;
  }

  // a2_group - computed: false, optional: true, required: false
  private _a2Group?: string; 
  public get a2Group() {
    return this.getStringAttribute('a2_group');
  }
  public set a2Group(value: string) {
    this._a2Group = value;
  }
  public resetA2Group() {
    this._a2Group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a2GroupInput() {
    return this._a2Group;
  }

  // a2_line - computed: false, optional: true, required: false
  private _a2Line?: boolean | cdktf.IResolvable; 
  public get a2Line() {
    return this.getBooleanAttribute('a2_line');
  }
  public set a2Line(value: boolean | cdktf.IResolvable) {
    this._a2Line = value;
  }
  public resetA2Line() {
    this._a2Line = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a2LineInput() {
    return this._a2Line;
  }

  // a2_local - computed: false, optional: true, required: false
  private _a2Local?: boolean | cdktf.IResolvable; 
  public get a2Local() {
    return this.getBooleanAttribute('a2_local');
  }
  public set a2Local(value: boolean | cdktf.IResolvable) {
    this._a2Local = value;
  }
  public resetA2Local() {
    this._a2Local = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a2LocalInput() {
    return this._a2Local;
  }

  // a2_none - computed: false, optional: true, required: false
  private _a2None?: boolean | cdktf.IResolvable; 
  public get a2None() {
    return this.getBooleanAttribute('a2_none');
  }
  public set a2None(value: boolean | cdktf.IResolvable) {
    this._a2None = value;
  }
  public resetA2None() {
    this._a2None = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a2NoneInput() {
    return this._a2None;
  }

  // a3_enable - computed: false, optional: true, required: false
  private _a3Enable?: boolean | cdktf.IResolvable; 
  public get a3Enable() {
    return this.getBooleanAttribute('a3_enable');
  }
  public set a3Enable(value: boolean | cdktf.IResolvable) {
    this._a3Enable = value;
  }
  public resetA3Enable() {
    this._a3Enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a3EnableInput() {
    return this._a3Enable;
  }

  // a3_group - computed: false, optional: true, required: false
  private _a3Group?: string; 
  public get a3Group() {
    return this.getStringAttribute('a3_group');
  }
  public set a3Group(value: string) {
    this._a3Group = value;
  }
  public resetA3Group() {
    this._a3Group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a3GroupInput() {
    return this._a3Group;
  }

  // a3_line - computed: false, optional: true, required: false
  private _a3Line?: boolean | cdktf.IResolvable; 
  public get a3Line() {
    return this.getBooleanAttribute('a3_line');
  }
  public set a3Line(value: boolean | cdktf.IResolvable) {
    this._a3Line = value;
  }
  public resetA3Line() {
    this._a3Line = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a3LineInput() {
    return this._a3Line;
  }

  // a3_local - computed: false, optional: true, required: false
  private _a3Local?: boolean | cdktf.IResolvable; 
  public get a3Local() {
    return this.getBooleanAttribute('a3_local');
  }
  public set a3Local(value: boolean | cdktf.IResolvable) {
    this._a3Local = value;
  }
  public resetA3Local() {
    this._a3Local = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a3LocalInput() {
    return this._a3Local;
  }

  // a3_none - computed: false, optional: true, required: false
  private _a3None?: boolean | cdktf.IResolvable; 
  public get a3None() {
    return this.getBooleanAttribute('a3_none');
  }
  public set a3None(value: boolean | cdktf.IResolvable) {
    this._a3None = value;
  }
  public resetA3None() {
    this._a3None = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a3NoneInput() {
    return this._a3None;
  }

  // a4_enable - computed: false, optional: true, required: false
  private _a4Enable?: boolean | cdktf.IResolvable; 
  public get a4Enable() {
    return this.getBooleanAttribute('a4_enable');
  }
  public set a4Enable(value: boolean | cdktf.IResolvable) {
    this._a4Enable = value;
  }
  public resetA4Enable() {
    this._a4Enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a4EnableInput() {
    return this._a4Enable;
  }

  // a4_group - computed: false, optional: true, required: false
  private _a4Group?: string; 
  public get a4Group() {
    return this.getStringAttribute('a4_group');
  }
  public set a4Group(value: string) {
    this._a4Group = value;
  }
  public resetA4Group() {
    this._a4Group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a4GroupInput() {
    return this._a4Group;
  }

  // a4_line - computed: false, optional: true, required: false
  private _a4Line?: boolean | cdktf.IResolvable; 
  public get a4Line() {
    return this.getBooleanAttribute('a4_line');
  }
  public set a4Line(value: boolean | cdktf.IResolvable) {
    this._a4Line = value;
  }
  public resetA4Line() {
    this._a4Line = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a4LineInput() {
    return this._a4Line;
  }

  // a4_local - computed: false, optional: true, required: false
  private _a4Local?: boolean | cdktf.IResolvable; 
  public get a4Local() {
    return this.getBooleanAttribute('a4_local');
  }
  public set a4Local(value: boolean | cdktf.IResolvable) {
    this._a4Local = value;
  }
  public resetA4Local() {
    this._a4Local = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a4LocalInput() {
    return this._a4Local;
  }

  // a4_none - computed: false, optional: true, required: false
  private _a4None?: boolean | cdktf.IResolvable; 
  public get a4None() {
    return this.getBooleanAttribute('a4_none');
  }
  public set a4None(value: boolean | cdktf.IResolvable) {
    this._a4None = value;
  }
  public resetA4None() {
    this._a4None = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a4NoneInput() {
    return this._a4None;
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

export class AaaAuthenticationLoginsList extends cdktf.ComplexList {
  public internalValue? : AaaAuthenticationLogins[] | cdktf.IResolvable

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
  public get(index: number): AaaAuthenticationLoginsOutputReference {
    return new AaaAuthenticationLoginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication iosxe_aaa_authentication}
*/
export class AaaAuthentication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_aaa_authentication";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AaaAuthentication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AaaAuthentication to import
  * @param importFromId The id of the existing AaaAuthentication that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AaaAuthentication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_aaa_authentication", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authentication iosxe_aaa_authentication} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AaaAuthenticationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AaaAuthenticationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_aaa_authentication',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.9.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._dot1X.internalValue = config.dot1X;
    this._dot1XDefaultA1Group = config.dot1XDefaultA1Group;
    this._dot1XDefaultA1Local = config.dot1XDefaultA1Local;
    this._dot1XDefaultA2Group = config.dot1XDefaultA2Group;
    this._dot1XDefaultA2Local = config.dot1XDefaultA2Local;
    this._dot1XDefaultA3Group = config.dot1XDefaultA3Group;
    this._dot1XDefaultA3Local = config.dot1XDefaultA3Local;
    this._dot1XDefaultA4Group = config.dot1XDefaultA4Group;
    this._dot1XDefaultA4Local = config.dot1XDefaultA4Local;
    this._enableDefaultGroup1Cache = config.enableDefaultGroup1Cache;
    this._enableDefaultGroup1Enable = config.enableDefaultGroup1Enable;
    this._enableDefaultGroup1Group = config.enableDefaultGroup1Group;
    this._enableDefaultGroup1Line = config.enableDefaultGroup1Line;
    this._enableDefaultGroup1None = config.enableDefaultGroup1None;
    this._enableDefaultGroup2Cache = config.enableDefaultGroup2Cache;
    this._enableDefaultGroup2Enable = config.enableDefaultGroup2Enable;
    this._enableDefaultGroup2Group = config.enableDefaultGroup2Group;
    this._enableDefaultGroup2Line = config.enableDefaultGroup2Line;
    this._enableDefaultGroup2None = config.enableDefaultGroup2None;
    this._enableDefaultGroup3Cache = config.enableDefaultGroup3Cache;
    this._enableDefaultGroup3Enable = config.enableDefaultGroup3Enable;
    this._enableDefaultGroup3Group = config.enableDefaultGroup3Group;
    this._enableDefaultGroup3Line = config.enableDefaultGroup3Line;
    this._enableDefaultGroup3None = config.enableDefaultGroup3None;
    this._enableDefaultGroup4Cache = config.enableDefaultGroup4Cache;
    this._enableDefaultGroup4Enable = config.enableDefaultGroup4Enable;
    this._enableDefaultGroup4Group = config.enableDefaultGroup4Group;
    this._enableDefaultGroup4Line = config.enableDefaultGroup4Line;
    this._enableDefaultGroup4None = config.enableDefaultGroup4None;
    this._logins.internalValue = config.logins;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // dot1x - computed: false, optional: true, required: false
  private _dot1X = new AaaAuthenticationDot1XList(this, "dot1x", false);
  public get dot1X() {
    return this._dot1X;
  }
  public putDot1X(value: AaaAuthenticationDot1X[] | cdktf.IResolvable) {
    this._dot1X.internalValue = value;
  }
  public resetDot1X() {
    this._dot1X.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XInput() {
    return this._dot1X.internalValue;
  }

  // dot1x_default_a1_group - computed: false, optional: true, required: false
  private _dot1XDefaultA1Group?: string; 
  public get dot1XDefaultA1Group() {
    return this.getStringAttribute('dot1x_default_a1_group');
  }
  public set dot1XDefaultA1Group(value: string) {
    this._dot1XDefaultA1Group = value;
  }
  public resetDot1XDefaultA1Group() {
    this._dot1XDefaultA1Group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XDefaultA1GroupInput() {
    return this._dot1XDefaultA1Group;
  }

  // dot1x_default_a1_local - computed: false, optional: true, required: false
  private _dot1XDefaultA1Local?: boolean | cdktf.IResolvable; 
  public get dot1XDefaultA1Local() {
    return this.getBooleanAttribute('dot1x_default_a1_local');
  }
  public set dot1XDefaultA1Local(value: boolean | cdktf.IResolvable) {
    this._dot1XDefaultA1Local = value;
  }
  public resetDot1XDefaultA1Local() {
    this._dot1XDefaultA1Local = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XDefaultA1LocalInput() {
    return this._dot1XDefaultA1Local;
  }

  // dot1x_default_a2_group - computed: false, optional: true, required: false
  private _dot1XDefaultA2Group?: string; 
  public get dot1XDefaultA2Group() {
    return this.getStringAttribute('dot1x_default_a2_group');
  }
  public set dot1XDefaultA2Group(value: string) {
    this._dot1XDefaultA2Group = value;
  }
  public resetDot1XDefaultA2Group() {
    this._dot1XDefaultA2Group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XDefaultA2GroupInput() {
    return this._dot1XDefaultA2Group;
  }

  // dot1x_default_a2_local - computed: false, optional: true, required: false
  private _dot1XDefaultA2Local?: boolean | cdktf.IResolvable; 
  public get dot1XDefaultA2Local() {
    return this.getBooleanAttribute('dot1x_default_a2_local');
  }
  public set dot1XDefaultA2Local(value: boolean | cdktf.IResolvable) {
    this._dot1XDefaultA2Local = value;
  }
  public resetDot1XDefaultA2Local() {
    this._dot1XDefaultA2Local = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XDefaultA2LocalInput() {
    return this._dot1XDefaultA2Local;
  }

  // dot1x_default_a3_group - computed: false, optional: true, required: false
  private _dot1XDefaultA3Group?: string; 
  public get dot1XDefaultA3Group() {
    return this.getStringAttribute('dot1x_default_a3_group');
  }
  public set dot1XDefaultA3Group(value: string) {
    this._dot1XDefaultA3Group = value;
  }
  public resetDot1XDefaultA3Group() {
    this._dot1XDefaultA3Group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XDefaultA3GroupInput() {
    return this._dot1XDefaultA3Group;
  }

  // dot1x_default_a3_local - computed: false, optional: true, required: false
  private _dot1XDefaultA3Local?: boolean | cdktf.IResolvable; 
  public get dot1XDefaultA3Local() {
    return this.getBooleanAttribute('dot1x_default_a3_local');
  }
  public set dot1XDefaultA3Local(value: boolean | cdktf.IResolvable) {
    this._dot1XDefaultA3Local = value;
  }
  public resetDot1XDefaultA3Local() {
    this._dot1XDefaultA3Local = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XDefaultA3LocalInput() {
    return this._dot1XDefaultA3Local;
  }

  // dot1x_default_a4_group - computed: false, optional: true, required: false
  private _dot1XDefaultA4Group?: string; 
  public get dot1XDefaultA4Group() {
    return this.getStringAttribute('dot1x_default_a4_group');
  }
  public set dot1XDefaultA4Group(value: string) {
    this._dot1XDefaultA4Group = value;
  }
  public resetDot1XDefaultA4Group() {
    this._dot1XDefaultA4Group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XDefaultA4GroupInput() {
    return this._dot1XDefaultA4Group;
  }

  // dot1x_default_a4_local - computed: false, optional: true, required: false
  private _dot1XDefaultA4Local?: boolean | cdktf.IResolvable; 
  public get dot1XDefaultA4Local() {
    return this.getBooleanAttribute('dot1x_default_a4_local');
  }
  public set dot1XDefaultA4Local(value: boolean | cdktf.IResolvable) {
    this._dot1XDefaultA4Local = value;
  }
  public resetDot1XDefaultA4Local() {
    this._dot1XDefaultA4Local = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XDefaultA4LocalInput() {
    return this._dot1XDefaultA4Local;
  }

  // enable_default_group1_cache - computed: false, optional: true, required: false
  private _enableDefaultGroup1Cache?: string; 
  public get enableDefaultGroup1Cache() {
    return this.getStringAttribute('enable_default_group1_cache');
  }
  public set enableDefaultGroup1Cache(value: string) {
    this._enableDefaultGroup1Cache = value;
  }
  public resetEnableDefaultGroup1Cache() {
    this._enableDefaultGroup1Cache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDefaultGroup1CacheInput() {
    return this._enableDefaultGroup1Cache;
  }

  // enable_default_group1_enable - computed: false, optional: true, required: false
  private _enableDefaultGroup1Enable?: boolean | cdktf.IResolvable; 
  public get enableDefaultGroup1Enable() {
    return this.getBooleanAttribute('enable_default_group1_enable');
  }
  public set enableDefaultGroup1Enable(value: boolean | cdktf.IResolvable) {
    this._enableDefaultGroup1Enable = value;
  }
  public resetEnableDefaultGroup1Enable() {
    this._enableDefaultGroup1Enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDefaultGroup1EnableInput() {
    return this._enableDefaultGroup1Enable;
  }

  // enable_default_group1_group - computed: false, optional: true, required: false
  private _enableDefaultGroup1Group?: string; 
  public get enableDefaultGroup1Group() {
    return this.getStringAttribute('enable_default_group1_group');
  }
  public set enableDefaultGroup1Group(value: string) {
    this._enableDefaultGroup1Group = value;
  }
  public resetEnableDefaultGroup1Group() {
    this._enableDefaultGroup1Group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDefaultGroup1GroupInput() {
    return this._enableDefaultGroup1Group;
  }

  // enable_default_group1_line - computed: false, optional: true, required: false
  private _enableDefaultGroup1Line?: boolean | cdktf.IResolvable; 
  public get enableDefaultGroup1Line() {
    return this.getBooleanAttribute('enable_default_group1_line');
  }
  public set enableDefaultGroup1Line(value: boolean | cdktf.IResolvable) {
    this._enableDefaultGroup1Line = value;
  }
  public resetEnableDefaultGroup1Line() {
    this._enableDefaultGroup1Line = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDefaultGroup1LineInput() {
    return this._enableDefaultGroup1Line;
  }

  // enable_default_group1_none - computed: false, optional: true, required: false
  private _enableDefaultGroup1None?: boolean | cdktf.IResolvable; 
  public get enableDefaultGroup1None() {
    return this.getBooleanAttribute('enable_default_group1_none');
  }
  public set enableDefaultGroup1None(value: boolean | cdktf.IResolvable) {
    this._enableDefaultGroup1None = value;
  }
  public resetEnableDefaultGroup1None() {
    this._enableDefaultGroup1None = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDefaultGroup1NoneInput() {
    return this._enableDefaultGroup1None;
  }

  // enable_default_group2_cache - computed: false, optional: true, required: false
  private _enableDefaultGroup2Cache?: string; 
  public get enableDefaultGroup2Cache() {
    return this.getStringAttribute('enable_default_group2_cache');
  }
  public set enableDefaultGroup2Cache(value: string) {
    this._enableDefaultGroup2Cache = value;
  }
  public resetEnableDefaultGroup2Cache() {
    this._enableDefaultGroup2Cache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDefaultGroup2CacheInput() {
    return this._enableDefaultGroup2Cache;
  }

  // enable_default_group2_enable - computed: false, optional: true, required: false
  private _enableDefaultGroup2Enable?: boolean | cdktf.IResolvable; 
  public get enableDefaultGroup2Enable() {
    return this.getBooleanAttribute('enable_default_group2_enable');
  }
  public set enableDefaultGroup2Enable(value: boolean | cdktf.IResolvable) {
    this._enableDefaultGroup2Enable = value;
  }
  public resetEnableDefaultGroup2Enable() {
    this._enableDefaultGroup2Enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDefaultGroup2EnableInput() {
    return this._enableDefaultGroup2Enable;
  }

  // enable_default_group2_group - computed: false, optional: true, required: false
  private _enableDefaultGroup2Group?: string; 
  public get enableDefaultGroup2Group() {
    return this.getStringAttribute('enable_default_group2_group');
  }
  public set enableDefaultGroup2Group(value: string) {
    this._enableDefaultGroup2Group = value;
  }
  public resetEnableDefaultGroup2Group() {
    this._enableDefaultGroup2Group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDefaultGroup2GroupInput() {
    return this._enableDefaultGroup2Group;
  }

  // enable_default_group2_line - computed: false, optional: true, required: false
  private _enableDefaultGroup2Line?: boolean | cdktf.IResolvable; 
  public get enableDefaultGroup2Line() {
    return this.getBooleanAttribute('enable_default_group2_line');
  }
  public set enableDefaultGroup2Line(value: boolean | cdktf.IResolvable) {
    this._enableDefaultGroup2Line = value;
  }
  public resetEnableDefaultGroup2Line() {
    this._enableDefaultGroup2Line = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDefaultGroup2LineInput() {
    return this._enableDefaultGroup2Line;
  }

  // enable_default_group2_none - computed: false, optional: true, required: false
  private _enableDefaultGroup2None?: boolean | cdktf.IResolvable; 
  public get enableDefaultGroup2None() {
    return this.getBooleanAttribute('enable_default_group2_none');
  }
  public set enableDefaultGroup2None(value: boolean | cdktf.IResolvable) {
    this._enableDefaultGroup2None = value;
  }
  public resetEnableDefaultGroup2None() {
    this._enableDefaultGroup2None = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDefaultGroup2NoneInput() {
    return this._enableDefaultGroup2None;
  }

  // enable_default_group3_cache - computed: false, optional: true, required: false
  private _enableDefaultGroup3Cache?: string; 
  public get enableDefaultGroup3Cache() {
    return this.getStringAttribute('enable_default_group3_cache');
  }
  public set enableDefaultGroup3Cache(value: string) {
    this._enableDefaultGroup3Cache = value;
  }
  public resetEnableDefaultGroup3Cache() {
    this._enableDefaultGroup3Cache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDefaultGroup3CacheInput() {
    return this._enableDefaultGroup3Cache;
  }

  // enable_default_group3_enable - computed: false, optional: true, required: false
  private _enableDefaultGroup3Enable?: boolean | cdktf.IResolvable; 
  public get enableDefaultGroup3Enable() {
    return this.getBooleanAttribute('enable_default_group3_enable');
  }
  public set enableDefaultGroup3Enable(value: boolean | cdktf.IResolvable) {
    this._enableDefaultGroup3Enable = value;
  }
  public resetEnableDefaultGroup3Enable() {
    this._enableDefaultGroup3Enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDefaultGroup3EnableInput() {
    return this._enableDefaultGroup3Enable;
  }

  // enable_default_group3_group - computed: false, optional: true, required: false
  private _enableDefaultGroup3Group?: string; 
  public get enableDefaultGroup3Group() {
    return this.getStringAttribute('enable_default_group3_group');
  }
  public set enableDefaultGroup3Group(value: string) {
    this._enableDefaultGroup3Group = value;
  }
  public resetEnableDefaultGroup3Group() {
    this._enableDefaultGroup3Group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDefaultGroup3GroupInput() {
    return this._enableDefaultGroup3Group;
  }

  // enable_default_group3_line - computed: false, optional: true, required: false
  private _enableDefaultGroup3Line?: boolean | cdktf.IResolvable; 
  public get enableDefaultGroup3Line() {
    return this.getBooleanAttribute('enable_default_group3_line');
  }
  public set enableDefaultGroup3Line(value: boolean | cdktf.IResolvable) {
    this._enableDefaultGroup3Line = value;
  }
  public resetEnableDefaultGroup3Line() {
    this._enableDefaultGroup3Line = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDefaultGroup3LineInput() {
    return this._enableDefaultGroup3Line;
  }

  // enable_default_group3_none - computed: false, optional: true, required: false
  private _enableDefaultGroup3None?: boolean | cdktf.IResolvable; 
  public get enableDefaultGroup3None() {
    return this.getBooleanAttribute('enable_default_group3_none');
  }
  public set enableDefaultGroup3None(value: boolean | cdktf.IResolvable) {
    this._enableDefaultGroup3None = value;
  }
  public resetEnableDefaultGroup3None() {
    this._enableDefaultGroup3None = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDefaultGroup3NoneInput() {
    return this._enableDefaultGroup3None;
  }

  // enable_default_group4_cache - computed: false, optional: true, required: false
  private _enableDefaultGroup4Cache?: string; 
  public get enableDefaultGroup4Cache() {
    return this.getStringAttribute('enable_default_group4_cache');
  }
  public set enableDefaultGroup4Cache(value: string) {
    this._enableDefaultGroup4Cache = value;
  }
  public resetEnableDefaultGroup4Cache() {
    this._enableDefaultGroup4Cache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDefaultGroup4CacheInput() {
    return this._enableDefaultGroup4Cache;
  }

  // enable_default_group4_enable - computed: false, optional: true, required: false
  private _enableDefaultGroup4Enable?: boolean | cdktf.IResolvable; 
  public get enableDefaultGroup4Enable() {
    return this.getBooleanAttribute('enable_default_group4_enable');
  }
  public set enableDefaultGroup4Enable(value: boolean | cdktf.IResolvable) {
    this._enableDefaultGroup4Enable = value;
  }
  public resetEnableDefaultGroup4Enable() {
    this._enableDefaultGroup4Enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDefaultGroup4EnableInput() {
    return this._enableDefaultGroup4Enable;
  }

  // enable_default_group4_group - computed: false, optional: true, required: false
  private _enableDefaultGroup4Group?: string; 
  public get enableDefaultGroup4Group() {
    return this.getStringAttribute('enable_default_group4_group');
  }
  public set enableDefaultGroup4Group(value: string) {
    this._enableDefaultGroup4Group = value;
  }
  public resetEnableDefaultGroup4Group() {
    this._enableDefaultGroup4Group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDefaultGroup4GroupInput() {
    return this._enableDefaultGroup4Group;
  }

  // enable_default_group4_line - computed: false, optional: true, required: false
  private _enableDefaultGroup4Line?: boolean | cdktf.IResolvable; 
  public get enableDefaultGroup4Line() {
    return this.getBooleanAttribute('enable_default_group4_line');
  }
  public set enableDefaultGroup4Line(value: boolean | cdktf.IResolvable) {
    this._enableDefaultGroup4Line = value;
  }
  public resetEnableDefaultGroup4Line() {
    this._enableDefaultGroup4Line = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDefaultGroup4LineInput() {
    return this._enableDefaultGroup4Line;
  }

  // enable_default_group4_none - computed: false, optional: true, required: false
  private _enableDefaultGroup4None?: boolean | cdktf.IResolvable; 
  public get enableDefaultGroup4None() {
    return this.getBooleanAttribute('enable_default_group4_none');
  }
  public set enableDefaultGroup4None(value: boolean | cdktf.IResolvable) {
    this._enableDefaultGroup4None = value;
  }
  public resetEnableDefaultGroup4None() {
    this._enableDefaultGroup4None = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDefaultGroup4NoneInput() {
    return this._enableDefaultGroup4None;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // logins - computed: false, optional: true, required: false
  private _logins = new AaaAuthenticationLoginsList(this, "logins", false);
  public get logins() {
    return this._logins;
  }
  public putLogins(value: AaaAuthenticationLogins[] | cdktf.IResolvable) {
    this._logins.internalValue = value;
  }
  public resetLogins() {
    this._logins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginsInput() {
    return this._logins.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      dot1x: cdktf.listMapper(aaaAuthenticationDot1XToTerraform, false)(this._dot1X.internalValue),
      dot1x_default_a1_group: cdktf.stringToTerraform(this._dot1XDefaultA1Group),
      dot1x_default_a1_local: cdktf.booleanToTerraform(this._dot1XDefaultA1Local),
      dot1x_default_a2_group: cdktf.stringToTerraform(this._dot1XDefaultA2Group),
      dot1x_default_a2_local: cdktf.booleanToTerraform(this._dot1XDefaultA2Local),
      dot1x_default_a3_group: cdktf.stringToTerraform(this._dot1XDefaultA3Group),
      dot1x_default_a3_local: cdktf.booleanToTerraform(this._dot1XDefaultA3Local),
      dot1x_default_a4_group: cdktf.stringToTerraform(this._dot1XDefaultA4Group),
      dot1x_default_a4_local: cdktf.booleanToTerraform(this._dot1XDefaultA4Local),
      enable_default_group1_cache: cdktf.stringToTerraform(this._enableDefaultGroup1Cache),
      enable_default_group1_enable: cdktf.booleanToTerraform(this._enableDefaultGroup1Enable),
      enable_default_group1_group: cdktf.stringToTerraform(this._enableDefaultGroup1Group),
      enable_default_group1_line: cdktf.booleanToTerraform(this._enableDefaultGroup1Line),
      enable_default_group1_none: cdktf.booleanToTerraform(this._enableDefaultGroup1None),
      enable_default_group2_cache: cdktf.stringToTerraform(this._enableDefaultGroup2Cache),
      enable_default_group2_enable: cdktf.booleanToTerraform(this._enableDefaultGroup2Enable),
      enable_default_group2_group: cdktf.stringToTerraform(this._enableDefaultGroup2Group),
      enable_default_group2_line: cdktf.booleanToTerraform(this._enableDefaultGroup2Line),
      enable_default_group2_none: cdktf.booleanToTerraform(this._enableDefaultGroup2None),
      enable_default_group3_cache: cdktf.stringToTerraform(this._enableDefaultGroup3Cache),
      enable_default_group3_enable: cdktf.booleanToTerraform(this._enableDefaultGroup3Enable),
      enable_default_group3_group: cdktf.stringToTerraform(this._enableDefaultGroup3Group),
      enable_default_group3_line: cdktf.booleanToTerraform(this._enableDefaultGroup3Line),
      enable_default_group3_none: cdktf.booleanToTerraform(this._enableDefaultGroup3None),
      enable_default_group4_cache: cdktf.stringToTerraform(this._enableDefaultGroup4Cache),
      enable_default_group4_enable: cdktf.booleanToTerraform(this._enableDefaultGroup4Enable),
      enable_default_group4_group: cdktf.stringToTerraform(this._enableDefaultGroup4Group),
      enable_default_group4_line: cdktf.booleanToTerraform(this._enableDefaultGroup4Line),
      enable_default_group4_none: cdktf.booleanToTerraform(this._enableDefaultGroup4None),
      logins: cdktf.listMapper(aaaAuthenticationLoginsToTerraform, false)(this._logins.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dot1x: {
        value: cdktf.listMapperHcl(aaaAuthenticationDot1XToHclTerraform, false)(this._dot1X.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AaaAuthenticationDot1XList",
      },
      dot1x_default_a1_group: {
        value: cdktf.stringToHclTerraform(this._dot1XDefaultA1Group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dot1x_default_a1_local: {
        value: cdktf.booleanToHclTerraform(this._dot1XDefaultA1Local),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dot1x_default_a2_group: {
        value: cdktf.stringToHclTerraform(this._dot1XDefaultA2Group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dot1x_default_a2_local: {
        value: cdktf.booleanToHclTerraform(this._dot1XDefaultA2Local),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dot1x_default_a3_group: {
        value: cdktf.stringToHclTerraform(this._dot1XDefaultA3Group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dot1x_default_a3_local: {
        value: cdktf.booleanToHclTerraform(this._dot1XDefaultA3Local),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dot1x_default_a4_group: {
        value: cdktf.stringToHclTerraform(this._dot1XDefaultA4Group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dot1x_default_a4_local: {
        value: cdktf.booleanToHclTerraform(this._dot1XDefaultA4Local),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_default_group1_cache: {
        value: cdktf.stringToHclTerraform(this._enableDefaultGroup1Cache),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_default_group1_enable: {
        value: cdktf.booleanToHclTerraform(this._enableDefaultGroup1Enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_default_group1_group: {
        value: cdktf.stringToHclTerraform(this._enableDefaultGroup1Group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_default_group1_line: {
        value: cdktf.booleanToHclTerraform(this._enableDefaultGroup1Line),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_default_group1_none: {
        value: cdktf.booleanToHclTerraform(this._enableDefaultGroup1None),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_default_group2_cache: {
        value: cdktf.stringToHclTerraform(this._enableDefaultGroup2Cache),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_default_group2_enable: {
        value: cdktf.booleanToHclTerraform(this._enableDefaultGroup2Enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_default_group2_group: {
        value: cdktf.stringToHclTerraform(this._enableDefaultGroup2Group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_default_group2_line: {
        value: cdktf.booleanToHclTerraform(this._enableDefaultGroup2Line),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_default_group2_none: {
        value: cdktf.booleanToHclTerraform(this._enableDefaultGroup2None),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_default_group3_cache: {
        value: cdktf.stringToHclTerraform(this._enableDefaultGroup3Cache),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_default_group3_enable: {
        value: cdktf.booleanToHclTerraform(this._enableDefaultGroup3Enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_default_group3_group: {
        value: cdktf.stringToHclTerraform(this._enableDefaultGroup3Group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_default_group3_line: {
        value: cdktf.booleanToHclTerraform(this._enableDefaultGroup3Line),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_default_group3_none: {
        value: cdktf.booleanToHclTerraform(this._enableDefaultGroup3None),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_default_group4_cache: {
        value: cdktf.stringToHclTerraform(this._enableDefaultGroup4Cache),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_default_group4_enable: {
        value: cdktf.booleanToHclTerraform(this._enableDefaultGroup4Enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_default_group4_group: {
        value: cdktf.stringToHclTerraform(this._enableDefaultGroup4Group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_default_group4_line: {
        value: cdktf.booleanToHclTerraform(this._enableDefaultGroup4Line),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_default_group4_none: {
        value: cdktf.booleanToHclTerraform(this._enableDefaultGroup4None),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      logins: {
        value: cdktf.listMapperHcl(aaaAuthenticationLoginsToHclTerraform, false)(this._logins.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AaaAuthenticationLoginsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
