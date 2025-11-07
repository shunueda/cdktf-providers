// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AaaAuthorizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * For exec (shell) commands.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#commands AaaAuthorization#commands}
  */
  readonly commands?: AaaAuthorizationCommands[] | cdktf.IResolvable;
  /**
  * For configuration mode commands.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#config_commands AaaAuthorization#config_commands}
  */
  readonly configCommands?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#config_lists AaaAuthorization#config_lists}
  */
  readonly configLists?: AaaAuthorizationConfigLists[] | cdktf.IResolvable;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#delete_mode AaaAuthorization#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#device AaaAuthorization#device}
  */
  readonly device?: string;
  /**
  * For starting an exec (shell).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#execs AaaAuthorization#execs}
  */
  readonly execs?: AaaAuthorizationExecs[] | cdktf.IResolvable;
  /**
  * For network services. (PPP, SLIP, ARAP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#networks AaaAuthorization#networks}
  */
  readonly networks?: AaaAuthorizationNetworks[] | cdktf.IResolvable;
}
export interface AaaAuthorizationCommands {
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a1_group AaaAuthorization#a1_group}
  */
  readonly a1Group?: string;
  /**
  * Succeed if user has authenticated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a1_if_authenticated AaaAuthorization#a1_if_authenticated}
  */
  readonly a1IfAuthenticated?: boolean | cdktf.IResolvable;
  /**
  * Use local database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a1_local AaaAuthorization#a1_local}
  */
  readonly a1Local?: boolean | cdktf.IResolvable;
  /**
  * No authorization (always succeeds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a1_none AaaAuthorization#a1_none}
  */
  readonly a1None?: boolean | cdktf.IResolvable;
  /**
  * Use RADIUS data for authorization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a1_radius AaaAuthorization#a1_radius}
  */
  readonly a1Radius?: boolean | cdktf.IResolvable;
  /**
  * Use TACACS+
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a1_tacacs AaaAuthorization#a1_tacacs}
  */
  readonly a1Tacacs?: boolean | cdktf.IResolvable;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a2_group AaaAuthorization#a2_group}
  */
  readonly a2Group?: string;
  /**
  * Succeed if user has authenticated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a2_if_authenticated AaaAuthorization#a2_if_authenticated}
  */
  readonly a2IfAuthenticated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a2_local AaaAuthorization#a2_local}
  */
  readonly a2Local?: boolean | cdktf.IResolvable;
  /**
  * No authorization (always succeeds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a2_none AaaAuthorization#a2_none}
  */
  readonly a2None?: boolean | cdktf.IResolvable;
  /**
  * Use RADIUS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a2_radius AaaAuthorization#a2_radius}
  */
  readonly a2Radius?: boolean | cdktf.IResolvable;
  /**
  * Use TACACS+
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a2_tacacs AaaAuthorization#a2_tacacs}
  */
  readonly a2Tacacs?: boolean | cdktf.IResolvable;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a3_group AaaAuthorization#a3_group}
  */
  readonly a3Group?: string;
  /**
  * Succeed if user has authenticated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a3_if_authenticated AaaAuthorization#a3_if_authenticated}
  */
  readonly a3IfAuthenticated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a3_local AaaAuthorization#a3_local}
  */
  readonly a3Local?: boolean | cdktf.IResolvable;
  /**
  * No authorization (always succeeds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a3_none AaaAuthorization#a3_none}
  */
  readonly a3None?: boolean | cdktf.IResolvable;
  /**
  * Use RADIUS data for authorization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a3_radius AaaAuthorization#a3_radius}
  */
  readonly a3Radius?: boolean | cdktf.IResolvable;
  /**
  * Use TACACS+
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a3_tacacs AaaAuthorization#a3_tacacs}
  */
  readonly a3Tacacs?: boolean | cdktf.IResolvable;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a4_group AaaAuthorization#a4_group}
  */
  readonly a4Group?: string;
  /**
  * Succeed if user has authenticated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a4_if_authenticated AaaAuthorization#a4_if_authenticated}
  */
  readonly a4IfAuthenticated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a4_local AaaAuthorization#a4_local}
  */
  readonly a4Local?: boolean | cdktf.IResolvable;
  /**
  * No authorization (always succeeds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a4_none AaaAuthorization#a4_none}
  */
  readonly a4None?: boolean | cdktf.IResolvable;
  /**
  * Use RADIUS data for authorization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a4_radius AaaAuthorization#a4_radius}
  */
  readonly a4Radius?: boolean | cdktf.IResolvable;
  /**
  * Use TACACS+
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a4_tacacs AaaAuthorization#a4_tacacs}
  */
  readonly a4Tacacs?: boolean | cdktf.IResolvable;
  /**
  * Enable level
  *   - Range: `0`-`15`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#level AaaAuthorization#level}
  */
  readonly level: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#list_name AaaAuthorization#list_name}
  */
  readonly listName: string;
}

export function aaaAuthorizationCommandsToTerraform(struct?: AaaAuthorizationCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    a1_group: cdktf.stringToTerraform(struct!.a1Group),
    a1_if_authenticated: cdktf.booleanToTerraform(struct!.a1IfAuthenticated),
    a1_local: cdktf.booleanToTerraform(struct!.a1Local),
    a1_none: cdktf.booleanToTerraform(struct!.a1None),
    a1_radius: cdktf.booleanToTerraform(struct!.a1Radius),
    a1_tacacs: cdktf.booleanToTerraform(struct!.a1Tacacs),
    a2_group: cdktf.stringToTerraform(struct!.a2Group),
    a2_if_authenticated: cdktf.booleanToTerraform(struct!.a2IfAuthenticated),
    a2_local: cdktf.booleanToTerraform(struct!.a2Local),
    a2_none: cdktf.booleanToTerraform(struct!.a2None),
    a2_radius: cdktf.booleanToTerraform(struct!.a2Radius),
    a2_tacacs: cdktf.booleanToTerraform(struct!.a2Tacacs),
    a3_group: cdktf.stringToTerraform(struct!.a3Group),
    a3_if_authenticated: cdktf.booleanToTerraform(struct!.a3IfAuthenticated),
    a3_local: cdktf.booleanToTerraform(struct!.a3Local),
    a3_none: cdktf.booleanToTerraform(struct!.a3None),
    a3_radius: cdktf.booleanToTerraform(struct!.a3Radius),
    a3_tacacs: cdktf.booleanToTerraform(struct!.a3Tacacs),
    a4_group: cdktf.stringToTerraform(struct!.a4Group),
    a4_if_authenticated: cdktf.booleanToTerraform(struct!.a4IfAuthenticated),
    a4_local: cdktf.booleanToTerraform(struct!.a4Local),
    a4_none: cdktf.booleanToTerraform(struct!.a4None),
    a4_radius: cdktf.booleanToTerraform(struct!.a4Radius),
    a4_tacacs: cdktf.booleanToTerraform(struct!.a4Tacacs),
    level: cdktf.numberToTerraform(struct!.level),
    list_name: cdktf.stringToTerraform(struct!.listName),
  }
}


export function aaaAuthorizationCommandsToHclTerraform(struct?: AaaAuthorizationCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    a1_group: {
      value: cdktf.stringToHclTerraform(struct!.a1Group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    a1_if_authenticated: {
      value: cdktf.booleanToHclTerraform(struct!.a1IfAuthenticated),
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
    a1_radius: {
      value: cdktf.booleanToHclTerraform(struct!.a1Radius),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    a1_tacacs: {
      value: cdktf.booleanToHclTerraform(struct!.a1Tacacs),
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
    a2_if_authenticated: {
      value: cdktf.booleanToHclTerraform(struct!.a2IfAuthenticated),
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
    a2_radius: {
      value: cdktf.booleanToHclTerraform(struct!.a2Radius),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    a2_tacacs: {
      value: cdktf.booleanToHclTerraform(struct!.a2Tacacs),
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
    a3_if_authenticated: {
      value: cdktf.booleanToHclTerraform(struct!.a3IfAuthenticated),
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
    a3_radius: {
      value: cdktf.booleanToHclTerraform(struct!.a3Radius),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    a3_tacacs: {
      value: cdktf.booleanToHclTerraform(struct!.a3Tacacs),
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
    a4_if_authenticated: {
      value: cdktf.booleanToHclTerraform(struct!.a4IfAuthenticated),
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
    a4_radius: {
      value: cdktf.booleanToHclTerraform(struct!.a4Radius),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    a4_tacacs: {
      value: cdktf.booleanToHclTerraform(struct!.a4Tacacs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    level: {
      value: cdktf.numberToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    list_name: {
      value: cdktf.stringToHclTerraform(struct!.listName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AaaAuthorizationCommandsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AaaAuthorizationCommands | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._a1Group !== undefined) {
      hasAnyValues = true;
      internalValueResult.a1Group = this._a1Group;
    }
    if (this._a1IfAuthenticated !== undefined) {
      hasAnyValues = true;
      internalValueResult.a1IfAuthenticated = this._a1IfAuthenticated;
    }
    if (this._a1Local !== undefined) {
      hasAnyValues = true;
      internalValueResult.a1Local = this._a1Local;
    }
    if (this._a1None !== undefined) {
      hasAnyValues = true;
      internalValueResult.a1None = this._a1None;
    }
    if (this._a1Radius !== undefined) {
      hasAnyValues = true;
      internalValueResult.a1Radius = this._a1Radius;
    }
    if (this._a1Tacacs !== undefined) {
      hasAnyValues = true;
      internalValueResult.a1Tacacs = this._a1Tacacs;
    }
    if (this._a2Group !== undefined) {
      hasAnyValues = true;
      internalValueResult.a2Group = this._a2Group;
    }
    if (this._a2IfAuthenticated !== undefined) {
      hasAnyValues = true;
      internalValueResult.a2IfAuthenticated = this._a2IfAuthenticated;
    }
    if (this._a2Local !== undefined) {
      hasAnyValues = true;
      internalValueResult.a2Local = this._a2Local;
    }
    if (this._a2None !== undefined) {
      hasAnyValues = true;
      internalValueResult.a2None = this._a2None;
    }
    if (this._a2Radius !== undefined) {
      hasAnyValues = true;
      internalValueResult.a2Radius = this._a2Radius;
    }
    if (this._a2Tacacs !== undefined) {
      hasAnyValues = true;
      internalValueResult.a2Tacacs = this._a2Tacacs;
    }
    if (this._a3Group !== undefined) {
      hasAnyValues = true;
      internalValueResult.a3Group = this._a3Group;
    }
    if (this._a3IfAuthenticated !== undefined) {
      hasAnyValues = true;
      internalValueResult.a3IfAuthenticated = this._a3IfAuthenticated;
    }
    if (this._a3Local !== undefined) {
      hasAnyValues = true;
      internalValueResult.a3Local = this._a3Local;
    }
    if (this._a3None !== undefined) {
      hasAnyValues = true;
      internalValueResult.a3None = this._a3None;
    }
    if (this._a3Radius !== undefined) {
      hasAnyValues = true;
      internalValueResult.a3Radius = this._a3Radius;
    }
    if (this._a3Tacacs !== undefined) {
      hasAnyValues = true;
      internalValueResult.a3Tacacs = this._a3Tacacs;
    }
    if (this._a4Group !== undefined) {
      hasAnyValues = true;
      internalValueResult.a4Group = this._a4Group;
    }
    if (this._a4IfAuthenticated !== undefined) {
      hasAnyValues = true;
      internalValueResult.a4IfAuthenticated = this._a4IfAuthenticated;
    }
    if (this._a4Local !== undefined) {
      hasAnyValues = true;
      internalValueResult.a4Local = this._a4Local;
    }
    if (this._a4None !== undefined) {
      hasAnyValues = true;
      internalValueResult.a4None = this._a4None;
    }
    if (this._a4Radius !== undefined) {
      hasAnyValues = true;
      internalValueResult.a4Radius = this._a4Radius;
    }
    if (this._a4Tacacs !== undefined) {
      hasAnyValues = true;
      internalValueResult.a4Tacacs = this._a4Tacacs;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._listName !== undefined) {
      hasAnyValues = true;
      internalValueResult.listName = this._listName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AaaAuthorizationCommands | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._a1Group = undefined;
      this._a1IfAuthenticated = undefined;
      this._a1Local = undefined;
      this._a1None = undefined;
      this._a1Radius = undefined;
      this._a1Tacacs = undefined;
      this._a2Group = undefined;
      this._a2IfAuthenticated = undefined;
      this._a2Local = undefined;
      this._a2None = undefined;
      this._a2Radius = undefined;
      this._a2Tacacs = undefined;
      this._a3Group = undefined;
      this._a3IfAuthenticated = undefined;
      this._a3Local = undefined;
      this._a3None = undefined;
      this._a3Radius = undefined;
      this._a3Tacacs = undefined;
      this._a4Group = undefined;
      this._a4IfAuthenticated = undefined;
      this._a4Local = undefined;
      this._a4None = undefined;
      this._a4Radius = undefined;
      this._a4Tacacs = undefined;
      this._level = undefined;
      this._listName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._a1Group = value.a1Group;
      this._a1IfAuthenticated = value.a1IfAuthenticated;
      this._a1Local = value.a1Local;
      this._a1None = value.a1None;
      this._a1Radius = value.a1Radius;
      this._a1Tacacs = value.a1Tacacs;
      this._a2Group = value.a2Group;
      this._a2IfAuthenticated = value.a2IfAuthenticated;
      this._a2Local = value.a2Local;
      this._a2None = value.a2None;
      this._a2Radius = value.a2Radius;
      this._a2Tacacs = value.a2Tacacs;
      this._a3Group = value.a3Group;
      this._a3IfAuthenticated = value.a3IfAuthenticated;
      this._a3Local = value.a3Local;
      this._a3None = value.a3None;
      this._a3Radius = value.a3Radius;
      this._a3Tacacs = value.a3Tacacs;
      this._a4Group = value.a4Group;
      this._a4IfAuthenticated = value.a4IfAuthenticated;
      this._a4Local = value.a4Local;
      this._a4None = value.a4None;
      this._a4Radius = value.a4Radius;
      this._a4Tacacs = value.a4Tacacs;
      this._level = value.level;
      this._listName = value.listName;
    }
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

  // a1_if_authenticated - computed: false, optional: true, required: false
  private _a1IfAuthenticated?: boolean | cdktf.IResolvable; 
  public get a1IfAuthenticated() {
    return this.getBooleanAttribute('a1_if_authenticated');
  }
  public set a1IfAuthenticated(value: boolean | cdktf.IResolvable) {
    this._a1IfAuthenticated = value;
  }
  public resetA1IfAuthenticated() {
    this._a1IfAuthenticated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a1IfAuthenticatedInput() {
    return this._a1IfAuthenticated;
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

  // a1_tacacs - computed: false, optional: true, required: false
  private _a1Tacacs?: boolean | cdktf.IResolvable; 
  public get a1Tacacs() {
    return this.getBooleanAttribute('a1_tacacs');
  }
  public set a1Tacacs(value: boolean | cdktf.IResolvable) {
    this._a1Tacacs = value;
  }
  public resetA1Tacacs() {
    this._a1Tacacs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a1TacacsInput() {
    return this._a1Tacacs;
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

  // a2_if_authenticated - computed: false, optional: true, required: false
  private _a2IfAuthenticated?: boolean | cdktf.IResolvable; 
  public get a2IfAuthenticated() {
    return this.getBooleanAttribute('a2_if_authenticated');
  }
  public set a2IfAuthenticated(value: boolean | cdktf.IResolvable) {
    this._a2IfAuthenticated = value;
  }
  public resetA2IfAuthenticated() {
    this._a2IfAuthenticated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a2IfAuthenticatedInput() {
    return this._a2IfAuthenticated;
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

  // a2_tacacs - computed: false, optional: true, required: false
  private _a2Tacacs?: boolean | cdktf.IResolvable; 
  public get a2Tacacs() {
    return this.getBooleanAttribute('a2_tacacs');
  }
  public set a2Tacacs(value: boolean | cdktf.IResolvable) {
    this._a2Tacacs = value;
  }
  public resetA2Tacacs() {
    this._a2Tacacs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a2TacacsInput() {
    return this._a2Tacacs;
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

  // a3_if_authenticated - computed: false, optional: true, required: false
  private _a3IfAuthenticated?: boolean | cdktf.IResolvable; 
  public get a3IfAuthenticated() {
    return this.getBooleanAttribute('a3_if_authenticated');
  }
  public set a3IfAuthenticated(value: boolean | cdktf.IResolvable) {
    this._a3IfAuthenticated = value;
  }
  public resetA3IfAuthenticated() {
    this._a3IfAuthenticated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a3IfAuthenticatedInput() {
    return this._a3IfAuthenticated;
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

  // a3_tacacs - computed: false, optional: true, required: false
  private _a3Tacacs?: boolean | cdktf.IResolvable; 
  public get a3Tacacs() {
    return this.getBooleanAttribute('a3_tacacs');
  }
  public set a3Tacacs(value: boolean | cdktf.IResolvable) {
    this._a3Tacacs = value;
  }
  public resetA3Tacacs() {
    this._a3Tacacs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a3TacacsInput() {
    return this._a3Tacacs;
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

  // a4_if_authenticated - computed: false, optional: true, required: false
  private _a4IfAuthenticated?: boolean | cdktf.IResolvable; 
  public get a4IfAuthenticated() {
    return this.getBooleanAttribute('a4_if_authenticated');
  }
  public set a4IfAuthenticated(value: boolean | cdktf.IResolvable) {
    this._a4IfAuthenticated = value;
  }
  public resetA4IfAuthenticated() {
    this._a4IfAuthenticated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a4IfAuthenticatedInput() {
    return this._a4IfAuthenticated;
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

  // a4_tacacs - computed: false, optional: true, required: false
  private _a4Tacacs?: boolean | cdktf.IResolvable; 
  public get a4Tacacs() {
    return this.getBooleanAttribute('a4_tacacs');
  }
  public set a4Tacacs(value: boolean | cdktf.IResolvable) {
    this._a4Tacacs = value;
  }
  public resetA4Tacacs() {
    this._a4Tacacs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a4TacacsInput() {
    return this._a4Tacacs;
  }

  // level - computed: false, optional: false, required: true
  private _level?: number; 
  public get level() {
    return this.getNumberAttribute('level');
  }
  public set level(value: number) {
    this._level = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // list_name - computed: false, optional: false, required: true
  private _listName?: string; 
  public get listName() {
    return this.getStringAttribute('list_name');
  }
  public set listName(value: string) {
    this._listName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listNameInput() {
    return this._listName;
  }
}

export class AaaAuthorizationCommandsList extends cdktf.ComplexList {
  public internalValue? : AaaAuthorizationCommands[] | cdktf.IResolvable

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
  public get(index: number): AaaAuthorizationCommandsOutputReference {
    return new AaaAuthorizationCommandsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AaaAuthorizationConfigLists {
  /**
  * Use Cached-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#group1_cache AaaAuthorization#group1_cache}
  */
  readonly group1Cache?: string;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#group1_group AaaAuthorization#group1_group}
  */
  readonly group1Group?: string;
  /**
  * Use list of all Radius hosts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#group1_radius AaaAuthorization#group1_radius}
  */
  readonly group1Radius?: boolean | cdktf.IResolvable;
  /**
  * Use TACACS+
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#group1_tacacs AaaAuthorization#group1_tacacs}
  */
  readonly group1Tacacs?: boolean | cdktf.IResolvable;
  /**
  * Named authorization method list for configuration service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#name AaaAuthorization#name}
  */
  readonly name: string;
}

export function aaaAuthorizationConfigListsToTerraform(struct?: AaaAuthorizationConfigLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group1_cache: cdktf.stringToTerraform(struct!.group1Cache),
    group1_group: cdktf.stringToTerraform(struct!.group1Group),
    group1_radius: cdktf.booleanToTerraform(struct!.group1Radius),
    group1_tacacs: cdktf.booleanToTerraform(struct!.group1Tacacs),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function aaaAuthorizationConfigListsToHclTerraform(struct?: AaaAuthorizationConfigLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group1_cache: {
      value: cdktf.stringToHclTerraform(struct!.group1Cache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group1_group: {
      value: cdktf.stringToHclTerraform(struct!.group1Group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group1_radius: {
      value: cdktf.booleanToHclTerraform(struct!.group1Radius),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group1_tacacs: {
      value: cdktf.booleanToHclTerraform(struct!.group1Tacacs),
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

export class AaaAuthorizationConfigListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AaaAuthorizationConfigLists | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group1Cache !== undefined) {
      hasAnyValues = true;
      internalValueResult.group1Cache = this._group1Cache;
    }
    if (this._group1Group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group1Group = this._group1Group;
    }
    if (this._group1Radius !== undefined) {
      hasAnyValues = true;
      internalValueResult.group1Radius = this._group1Radius;
    }
    if (this._group1Tacacs !== undefined) {
      hasAnyValues = true;
      internalValueResult.group1Tacacs = this._group1Tacacs;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AaaAuthorizationConfigLists | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group1Cache = undefined;
      this._group1Group = undefined;
      this._group1Radius = undefined;
      this._group1Tacacs = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group1Cache = value.group1Cache;
      this._group1Group = value.group1Group;
      this._group1Radius = value.group1Radius;
      this._group1Tacacs = value.group1Tacacs;
      this._name = value.name;
    }
  }

  // group1_cache - computed: false, optional: true, required: false
  private _group1Cache?: string; 
  public get group1Cache() {
    return this.getStringAttribute('group1_cache');
  }
  public set group1Cache(value: string) {
    this._group1Cache = value;
  }
  public resetGroup1Cache() {
    this._group1Cache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get group1CacheInput() {
    return this._group1Cache;
  }

  // group1_group - computed: false, optional: true, required: false
  private _group1Group?: string; 
  public get group1Group() {
    return this.getStringAttribute('group1_group');
  }
  public set group1Group(value: string) {
    this._group1Group = value;
  }
  public resetGroup1Group() {
    this._group1Group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get group1GroupInput() {
    return this._group1Group;
  }

  // group1_radius - computed: false, optional: true, required: false
  private _group1Radius?: boolean | cdktf.IResolvable; 
  public get group1Radius() {
    return this.getBooleanAttribute('group1_radius');
  }
  public set group1Radius(value: boolean | cdktf.IResolvable) {
    this._group1Radius = value;
  }
  public resetGroup1Radius() {
    this._group1Radius = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get group1RadiusInput() {
    return this._group1Radius;
  }

  // group1_tacacs - computed: false, optional: true, required: false
  private _group1Tacacs?: boolean | cdktf.IResolvable; 
  public get group1Tacacs() {
    return this.getBooleanAttribute('group1_tacacs');
  }
  public set group1Tacacs(value: boolean | cdktf.IResolvable) {
    this._group1Tacacs = value;
  }
  public resetGroup1Tacacs() {
    this._group1Tacacs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get group1TacacsInput() {
    return this._group1Tacacs;
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

export class AaaAuthorizationConfigListsList extends cdktf.ComplexList {
  public internalValue? : AaaAuthorizationConfigLists[] | cdktf.IResolvable

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
  public get(index: number): AaaAuthorizationConfigListsOutputReference {
    return new AaaAuthorizationConfigListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AaaAuthorizationExecs {
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a1_group AaaAuthorization#a1_group}
  */
  readonly a1Group?: string;
  /**
  * Succeed if user has authenticated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a1_if_authenticated AaaAuthorization#a1_if_authenticated}
  */
  readonly a1IfAuthenticated?: boolean | cdktf.IResolvable;
  /**
  * Use local database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a1_local AaaAuthorization#a1_local}
  */
  readonly a1Local?: boolean | cdktf.IResolvable;
  /**
  * Use radius
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a1_radius AaaAuthorization#a1_radius}
  */
  readonly a1Radius?: boolean | cdktf.IResolvable;
  /**
  * Use TACACS+
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a1_tacacs AaaAuthorization#a1_tacacs}
  */
  readonly a1Tacacs?: boolean | cdktf.IResolvable;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a2_group AaaAuthorization#a2_group}
  */
  readonly a2Group?: string;
  /**
  * Succeed if user has authenticated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a2_if_authenticated AaaAuthorization#a2_if_authenticated}
  */
  readonly a2IfAuthenticated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a2_local AaaAuthorization#a2_local}
  */
  readonly a2Local?: boolean | cdktf.IResolvable;
  /**
  * Use Radius
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a2_radius AaaAuthorization#a2_radius}
  */
  readonly a2Radius?: boolean | cdktf.IResolvable;
  /**
  * Use TACACS+
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a2_tacacs AaaAuthorization#a2_tacacs}
  */
  readonly a2Tacacs?: boolean | cdktf.IResolvable;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a3_group AaaAuthorization#a3_group}
  */
  readonly a3Group?: string;
  /**
  * Succeed if user has authenticated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a3_if_authenticated AaaAuthorization#a3_if_authenticated}
  */
  readonly a3IfAuthenticated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a3_local AaaAuthorization#a3_local}
  */
  readonly a3Local?: boolean | cdktf.IResolvable;
  /**
  * Use Radius
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a3_radius AaaAuthorization#a3_radius}
  */
  readonly a3Radius?: boolean | cdktf.IResolvable;
  /**
  * Use TACACS+
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a3_tacacs AaaAuthorization#a3_tacacs}
  */
  readonly a3Tacacs?: boolean | cdktf.IResolvable;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a4_group AaaAuthorization#a4_group}
  */
  readonly a4Group?: string;
  /**
  * Succeed if user has authenticated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a4_if_authenticated AaaAuthorization#a4_if_authenticated}
  */
  readonly a4IfAuthenticated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a4_local AaaAuthorization#a4_local}
  */
  readonly a4Local?: boolean | cdktf.IResolvable;
  /**
  * Use radius
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a4_radius AaaAuthorization#a4_radius}
  */
  readonly a4Radius?: boolean | cdktf.IResolvable;
  /**
  * Use TACACS+
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a4_tacacs AaaAuthorization#a4_tacacs}
  */
  readonly a4Tacacs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#name AaaAuthorization#name}
  */
  readonly name: string;
}

export function aaaAuthorizationExecsToTerraform(struct?: AaaAuthorizationExecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    a1_group: cdktf.stringToTerraform(struct!.a1Group),
    a1_if_authenticated: cdktf.booleanToTerraform(struct!.a1IfAuthenticated),
    a1_local: cdktf.booleanToTerraform(struct!.a1Local),
    a1_radius: cdktf.booleanToTerraform(struct!.a1Radius),
    a1_tacacs: cdktf.booleanToTerraform(struct!.a1Tacacs),
    a2_group: cdktf.stringToTerraform(struct!.a2Group),
    a2_if_authenticated: cdktf.booleanToTerraform(struct!.a2IfAuthenticated),
    a2_local: cdktf.booleanToTerraform(struct!.a2Local),
    a2_radius: cdktf.booleanToTerraform(struct!.a2Radius),
    a2_tacacs: cdktf.booleanToTerraform(struct!.a2Tacacs),
    a3_group: cdktf.stringToTerraform(struct!.a3Group),
    a3_if_authenticated: cdktf.booleanToTerraform(struct!.a3IfAuthenticated),
    a3_local: cdktf.booleanToTerraform(struct!.a3Local),
    a3_radius: cdktf.booleanToTerraform(struct!.a3Radius),
    a3_tacacs: cdktf.booleanToTerraform(struct!.a3Tacacs),
    a4_group: cdktf.stringToTerraform(struct!.a4Group),
    a4_if_authenticated: cdktf.booleanToTerraform(struct!.a4IfAuthenticated),
    a4_local: cdktf.booleanToTerraform(struct!.a4Local),
    a4_radius: cdktf.booleanToTerraform(struct!.a4Radius),
    a4_tacacs: cdktf.booleanToTerraform(struct!.a4Tacacs),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function aaaAuthorizationExecsToHclTerraform(struct?: AaaAuthorizationExecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    a1_group: {
      value: cdktf.stringToHclTerraform(struct!.a1Group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    a1_if_authenticated: {
      value: cdktf.booleanToHclTerraform(struct!.a1IfAuthenticated),
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
    a1_radius: {
      value: cdktf.booleanToHclTerraform(struct!.a1Radius),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    a1_tacacs: {
      value: cdktf.booleanToHclTerraform(struct!.a1Tacacs),
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
    a2_if_authenticated: {
      value: cdktf.booleanToHclTerraform(struct!.a2IfAuthenticated),
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
    a2_radius: {
      value: cdktf.booleanToHclTerraform(struct!.a2Radius),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    a2_tacacs: {
      value: cdktf.booleanToHclTerraform(struct!.a2Tacacs),
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
    a3_if_authenticated: {
      value: cdktf.booleanToHclTerraform(struct!.a3IfAuthenticated),
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
    a3_radius: {
      value: cdktf.booleanToHclTerraform(struct!.a3Radius),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    a3_tacacs: {
      value: cdktf.booleanToHclTerraform(struct!.a3Tacacs),
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
    a4_if_authenticated: {
      value: cdktf.booleanToHclTerraform(struct!.a4IfAuthenticated),
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
    a4_radius: {
      value: cdktf.booleanToHclTerraform(struct!.a4Radius),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    a4_tacacs: {
      value: cdktf.booleanToHclTerraform(struct!.a4Tacacs),
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

export class AaaAuthorizationExecsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AaaAuthorizationExecs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._a1Group !== undefined) {
      hasAnyValues = true;
      internalValueResult.a1Group = this._a1Group;
    }
    if (this._a1IfAuthenticated !== undefined) {
      hasAnyValues = true;
      internalValueResult.a1IfAuthenticated = this._a1IfAuthenticated;
    }
    if (this._a1Local !== undefined) {
      hasAnyValues = true;
      internalValueResult.a1Local = this._a1Local;
    }
    if (this._a1Radius !== undefined) {
      hasAnyValues = true;
      internalValueResult.a1Radius = this._a1Radius;
    }
    if (this._a1Tacacs !== undefined) {
      hasAnyValues = true;
      internalValueResult.a1Tacacs = this._a1Tacacs;
    }
    if (this._a2Group !== undefined) {
      hasAnyValues = true;
      internalValueResult.a2Group = this._a2Group;
    }
    if (this._a2IfAuthenticated !== undefined) {
      hasAnyValues = true;
      internalValueResult.a2IfAuthenticated = this._a2IfAuthenticated;
    }
    if (this._a2Local !== undefined) {
      hasAnyValues = true;
      internalValueResult.a2Local = this._a2Local;
    }
    if (this._a2Radius !== undefined) {
      hasAnyValues = true;
      internalValueResult.a2Radius = this._a2Radius;
    }
    if (this._a2Tacacs !== undefined) {
      hasAnyValues = true;
      internalValueResult.a2Tacacs = this._a2Tacacs;
    }
    if (this._a3Group !== undefined) {
      hasAnyValues = true;
      internalValueResult.a3Group = this._a3Group;
    }
    if (this._a3IfAuthenticated !== undefined) {
      hasAnyValues = true;
      internalValueResult.a3IfAuthenticated = this._a3IfAuthenticated;
    }
    if (this._a3Local !== undefined) {
      hasAnyValues = true;
      internalValueResult.a3Local = this._a3Local;
    }
    if (this._a3Radius !== undefined) {
      hasAnyValues = true;
      internalValueResult.a3Radius = this._a3Radius;
    }
    if (this._a3Tacacs !== undefined) {
      hasAnyValues = true;
      internalValueResult.a3Tacacs = this._a3Tacacs;
    }
    if (this._a4Group !== undefined) {
      hasAnyValues = true;
      internalValueResult.a4Group = this._a4Group;
    }
    if (this._a4IfAuthenticated !== undefined) {
      hasAnyValues = true;
      internalValueResult.a4IfAuthenticated = this._a4IfAuthenticated;
    }
    if (this._a4Local !== undefined) {
      hasAnyValues = true;
      internalValueResult.a4Local = this._a4Local;
    }
    if (this._a4Radius !== undefined) {
      hasAnyValues = true;
      internalValueResult.a4Radius = this._a4Radius;
    }
    if (this._a4Tacacs !== undefined) {
      hasAnyValues = true;
      internalValueResult.a4Tacacs = this._a4Tacacs;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AaaAuthorizationExecs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._a1Group = undefined;
      this._a1IfAuthenticated = undefined;
      this._a1Local = undefined;
      this._a1Radius = undefined;
      this._a1Tacacs = undefined;
      this._a2Group = undefined;
      this._a2IfAuthenticated = undefined;
      this._a2Local = undefined;
      this._a2Radius = undefined;
      this._a2Tacacs = undefined;
      this._a3Group = undefined;
      this._a3IfAuthenticated = undefined;
      this._a3Local = undefined;
      this._a3Radius = undefined;
      this._a3Tacacs = undefined;
      this._a4Group = undefined;
      this._a4IfAuthenticated = undefined;
      this._a4Local = undefined;
      this._a4Radius = undefined;
      this._a4Tacacs = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._a1Group = value.a1Group;
      this._a1IfAuthenticated = value.a1IfAuthenticated;
      this._a1Local = value.a1Local;
      this._a1Radius = value.a1Radius;
      this._a1Tacacs = value.a1Tacacs;
      this._a2Group = value.a2Group;
      this._a2IfAuthenticated = value.a2IfAuthenticated;
      this._a2Local = value.a2Local;
      this._a2Radius = value.a2Radius;
      this._a2Tacacs = value.a2Tacacs;
      this._a3Group = value.a3Group;
      this._a3IfAuthenticated = value.a3IfAuthenticated;
      this._a3Local = value.a3Local;
      this._a3Radius = value.a3Radius;
      this._a3Tacacs = value.a3Tacacs;
      this._a4Group = value.a4Group;
      this._a4IfAuthenticated = value.a4IfAuthenticated;
      this._a4Local = value.a4Local;
      this._a4Radius = value.a4Radius;
      this._a4Tacacs = value.a4Tacacs;
      this._name = value.name;
    }
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

  // a1_if_authenticated - computed: false, optional: true, required: false
  private _a1IfAuthenticated?: boolean | cdktf.IResolvable; 
  public get a1IfAuthenticated() {
    return this.getBooleanAttribute('a1_if_authenticated');
  }
  public set a1IfAuthenticated(value: boolean | cdktf.IResolvable) {
    this._a1IfAuthenticated = value;
  }
  public resetA1IfAuthenticated() {
    this._a1IfAuthenticated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a1IfAuthenticatedInput() {
    return this._a1IfAuthenticated;
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

  // a1_tacacs - computed: false, optional: true, required: false
  private _a1Tacacs?: boolean | cdktf.IResolvable; 
  public get a1Tacacs() {
    return this.getBooleanAttribute('a1_tacacs');
  }
  public set a1Tacacs(value: boolean | cdktf.IResolvable) {
    this._a1Tacacs = value;
  }
  public resetA1Tacacs() {
    this._a1Tacacs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a1TacacsInput() {
    return this._a1Tacacs;
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

  // a2_if_authenticated - computed: false, optional: true, required: false
  private _a2IfAuthenticated?: boolean | cdktf.IResolvable; 
  public get a2IfAuthenticated() {
    return this.getBooleanAttribute('a2_if_authenticated');
  }
  public set a2IfAuthenticated(value: boolean | cdktf.IResolvable) {
    this._a2IfAuthenticated = value;
  }
  public resetA2IfAuthenticated() {
    this._a2IfAuthenticated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a2IfAuthenticatedInput() {
    return this._a2IfAuthenticated;
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

  // a2_tacacs - computed: false, optional: true, required: false
  private _a2Tacacs?: boolean | cdktf.IResolvable; 
  public get a2Tacacs() {
    return this.getBooleanAttribute('a2_tacacs');
  }
  public set a2Tacacs(value: boolean | cdktf.IResolvable) {
    this._a2Tacacs = value;
  }
  public resetA2Tacacs() {
    this._a2Tacacs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a2TacacsInput() {
    return this._a2Tacacs;
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

  // a3_if_authenticated - computed: false, optional: true, required: false
  private _a3IfAuthenticated?: boolean | cdktf.IResolvable; 
  public get a3IfAuthenticated() {
    return this.getBooleanAttribute('a3_if_authenticated');
  }
  public set a3IfAuthenticated(value: boolean | cdktf.IResolvable) {
    this._a3IfAuthenticated = value;
  }
  public resetA3IfAuthenticated() {
    this._a3IfAuthenticated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a3IfAuthenticatedInput() {
    return this._a3IfAuthenticated;
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

  // a3_tacacs - computed: false, optional: true, required: false
  private _a3Tacacs?: boolean | cdktf.IResolvable; 
  public get a3Tacacs() {
    return this.getBooleanAttribute('a3_tacacs');
  }
  public set a3Tacacs(value: boolean | cdktf.IResolvable) {
    this._a3Tacacs = value;
  }
  public resetA3Tacacs() {
    this._a3Tacacs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a3TacacsInput() {
    return this._a3Tacacs;
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

  // a4_if_authenticated - computed: false, optional: true, required: false
  private _a4IfAuthenticated?: boolean | cdktf.IResolvable; 
  public get a4IfAuthenticated() {
    return this.getBooleanAttribute('a4_if_authenticated');
  }
  public set a4IfAuthenticated(value: boolean | cdktf.IResolvable) {
    this._a4IfAuthenticated = value;
  }
  public resetA4IfAuthenticated() {
    this._a4IfAuthenticated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a4IfAuthenticatedInput() {
    return this._a4IfAuthenticated;
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

  // a4_tacacs - computed: false, optional: true, required: false
  private _a4Tacacs?: boolean | cdktf.IResolvable; 
  public get a4Tacacs() {
    return this.getBooleanAttribute('a4_tacacs');
  }
  public set a4Tacacs(value: boolean | cdktf.IResolvable) {
    this._a4Tacacs = value;
  }
  public resetA4Tacacs() {
    this._a4Tacacs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a4TacacsInput() {
    return this._a4Tacacs;
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

export class AaaAuthorizationExecsList extends cdktf.ComplexList {
  public internalValue? : AaaAuthorizationExecs[] | cdktf.IResolvable

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
  public get(index: number): AaaAuthorizationExecsOutputReference {
    return new AaaAuthorizationExecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AaaAuthorizationNetworks {
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a1_group AaaAuthorization#a1_group}
  */
  readonly a1Group?: string;
  /**
  * Use local username authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a1_local AaaAuthorization#a1_local}
  */
  readonly a1Local?: boolean | cdktf.IResolvable;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a2_group AaaAuthorization#a2_group}
  */
  readonly a2Group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a2_local AaaAuthorization#a2_local}
  */
  readonly a2Local?: boolean | cdktf.IResolvable;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a3_group AaaAuthorization#a3_group}
  */
  readonly a3Group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a3_local AaaAuthorization#a3_local}
  */
  readonly a3Local?: boolean | cdktf.IResolvable;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a4_group AaaAuthorization#a4_group}
  */
  readonly a4Group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#a4_local AaaAuthorization#a4_local}
  */
  readonly a4Local?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#id AaaAuthorization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function aaaAuthorizationNetworksToTerraform(struct?: AaaAuthorizationNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    a1_group: cdktf.stringToTerraform(struct!.a1Group),
    a1_local: cdktf.booleanToTerraform(struct!.a1Local),
    a2_group: cdktf.stringToTerraform(struct!.a2Group),
    a2_local: cdktf.booleanToTerraform(struct!.a2Local),
    a3_group: cdktf.stringToTerraform(struct!.a3Group),
    a3_local: cdktf.booleanToTerraform(struct!.a3Local),
    a4_group: cdktf.stringToTerraform(struct!.a4Group),
    a4_local: cdktf.booleanToTerraform(struct!.a4Local),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function aaaAuthorizationNetworksToHclTerraform(struct?: AaaAuthorizationNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AaaAuthorizationNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AaaAuthorizationNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._a1Group !== undefined) {
      hasAnyValues = true;
      internalValueResult.a1Group = this._a1Group;
    }
    if (this._a1Local !== undefined) {
      hasAnyValues = true;
      internalValueResult.a1Local = this._a1Local;
    }
    if (this._a2Group !== undefined) {
      hasAnyValues = true;
      internalValueResult.a2Group = this._a2Group;
    }
    if (this._a2Local !== undefined) {
      hasAnyValues = true;
      internalValueResult.a2Local = this._a2Local;
    }
    if (this._a3Group !== undefined) {
      hasAnyValues = true;
      internalValueResult.a3Group = this._a3Group;
    }
    if (this._a3Local !== undefined) {
      hasAnyValues = true;
      internalValueResult.a3Local = this._a3Local;
    }
    if (this._a4Group !== undefined) {
      hasAnyValues = true;
      internalValueResult.a4Group = this._a4Group;
    }
    if (this._a4Local !== undefined) {
      hasAnyValues = true;
      internalValueResult.a4Local = this._a4Local;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AaaAuthorizationNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._a1Group = undefined;
      this._a1Local = undefined;
      this._a2Group = undefined;
      this._a2Local = undefined;
      this._a3Group = undefined;
      this._a3Local = undefined;
      this._a4Group = undefined;
      this._a4Local = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._a1Group = value.a1Group;
      this._a1Local = value.a1Local;
      this._a2Group = value.a2Group;
      this._a2Local = value.a2Local;
      this._a3Group = value.a3Group;
      this._a3Local = value.a3Local;
      this._a4Group = value.a4Group;
      this._a4Local = value.a4Local;
      this._id = value.id;
    }
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class AaaAuthorizationNetworksList extends cdktf.ComplexList {
  public internalValue? : AaaAuthorizationNetworks[] | cdktf.IResolvable

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
  public get(index: number): AaaAuthorizationNetworksOutputReference {
    return new AaaAuthorizationNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization iosxe_aaa_authorization}
*/
export class AaaAuthorization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_aaa_authorization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AaaAuthorization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AaaAuthorization to import
  * @param importFromId The id of the existing AaaAuthorization that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AaaAuthorization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_aaa_authorization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/aaa_authorization iosxe_aaa_authorization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AaaAuthorizationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AaaAuthorizationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_aaa_authorization',
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
    this._commands.internalValue = config.commands;
    this._configCommands = config.configCommands;
    this._configLists.internalValue = config.configLists;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._execs.internalValue = config.execs;
    this._networks.internalValue = config.networks;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // commands - computed: false, optional: true, required: false
  private _commands = new AaaAuthorizationCommandsList(this, "commands", false);
  public get commands() {
    return this._commands;
  }
  public putCommands(value: AaaAuthorizationCommands[] | cdktf.IResolvable) {
    this._commands.internalValue = value;
  }
  public resetCommands() {
    this._commands.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandsInput() {
    return this._commands.internalValue;
  }

  // config_commands - computed: false, optional: true, required: false
  private _configCommands?: boolean | cdktf.IResolvable; 
  public get configCommands() {
    return this.getBooleanAttribute('config_commands');
  }
  public set configCommands(value: boolean | cdktf.IResolvable) {
    this._configCommands = value;
  }
  public resetConfigCommands() {
    this._configCommands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configCommandsInput() {
    return this._configCommands;
  }

  // config_lists - computed: false, optional: true, required: false
  private _configLists = new AaaAuthorizationConfigListsList(this, "config_lists", false);
  public get configLists() {
    return this._configLists;
  }
  public putConfigLists(value: AaaAuthorizationConfigLists[] | cdktf.IResolvable) {
    this._configLists.internalValue = value;
  }
  public resetConfigLists() {
    this._configLists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configListsInput() {
    return this._configLists.internalValue;
  }

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

  // execs - computed: false, optional: true, required: false
  private _execs = new AaaAuthorizationExecsList(this, "execs", false);
  public get execs() {
    return this._execs;
  }
  public putExecs(value: AaaAuthorizationExecs[] | cdktf.IResolvable) {
    this._execs.internalValue = value;
  }
  public resetExecs() {
    this._execs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execsInput() {
    return this._execs.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // networks - computed: false, optional: true, required: false
  private _networks = new AaaAuthorizationNetworksList(this, "networks", false);
  public get networks() {
    return this._networks;
  }
  public putNetworks(value: AaaAuthorizationNetworks[] | cdktf.IResolvable) {
    this._networks.internalValue = value;
  }
  public resetNetworks() {
    this._networks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      commands: cdktf.listMapper(aaaAuthorizationCommandsToTerraform, false)(this._commands.internalValue),
      config_commands: cdktf.booleanToTerraform(this._configCommands),
      config_lists: cdktf.listMapper(aaaAuthorizationConfigListsToTerraform, false)(this._configLists.internalValue),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      execs: cdktf.listMapper(aaaAuthorizationExecsToTerraform, false)(this._execs.internalValue),
      networks: cdktf.listMapper(aaaAuthorizationNetworksToTerraform, false)(this._networks.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      commands: {
        value: cdktf.listMapperHcl(aaaAuthorizationCommandsToHclTerraform, false)(this._commands.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AaaAuthorizationCommandsList",
      },
      config_commands: {
        value: cdktf.booleanToHclTerraform(this._configCommands),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      config_lists: {
        value: cdktf.listMapperHcl(aaaAuthorizationConfigListsToHclTerraform, false)(this._configLists.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AaaAuthorizationConfigListsList",
      },
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
      execs: {
        value: cdktf.listMapperHcl(aaaAuthorizationExecsToHclTerraform, false)(this._execs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AaaAuthorizationExecsList",
      },
      networks: {
        value: cdktf.listMapperHcl(aaaAuthorizationNetworksToHclTerraform, false)(this._networks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AaaAuthorizationNetworksList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
