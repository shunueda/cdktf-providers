// https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/hostgroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HostgroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * It enables the rejection of any masking operation involving this hostgroup that would result in inconsistent LUN values. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/hostgroup#consistent_lun Hostgroup#consistent_lun}
  */
  readonly consistentLun?: boolean | cdktf.IResolvable;
  /**
  * Host Flags set for the hostgroup. When host_flags = {} or not set then default flags will be considered. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/hostgroup#host_flags Hostgroup#host_flags}
  */
  readonly hostFlags?: HostgroupHostFlags;
  /**
  * A list of host ids associated with the hostgroup. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/hostgroup#host_ids Hostgroup#host_ids}
  */
  readonly hostIds: string[];
  /**
  * The name of the hostgroup. Only alphanumeric characters, underscores ( _ ), and hyphens (-) are allowed. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/hostgroup#name Hostgroup#name}
  */
  readonly name: string;
}
export interface HostgroupHostFlagsAvoidResetBroadcast {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/hostgroup#enabled Hostgroup#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/hostgroup#override Hostgroup#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
}

export function hostgroupHostFlagsAvoidResetBroadcastToTerraform(struct?: HostgroupHostFlagsAvoidResetBroadcast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    override: cdktf.booleanToTerraform(struct!.override),
  }
}


export function hostgroupHostFlagsAvoidResetBroadcastToHclTerraform(struct?: HostgroupHostFlagsAvoidResetBroadcast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    override: {
      value: cdktf.booleanToHclTerraform(struct!.override),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostgroupHostFlagsAvoidResetBroadcastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HostgroupHostFlagsAvoidResetBroadcast | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostgroupHostFlagsAvoidResetBroadcast | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._override = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._override = value.override;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // override - computed: true, optional: true, required: false
  private _override?: boolean | cdktf.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktf.IResolvable) {
    this._override = value;
  }
  public resetOverride() {
    this._override = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }
}
export interface HostgroupHostFlagsDisableQResetOnUa {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/hostgroup#enabled Hostgroup#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/hostgroup#override Hostgroup#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
}

export function hostgroupHostFlagsDisableQResetOnUaToTerraform(struct?: HostgroupHostFlagsDisableQResetOnUa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    override: cdktf.booleanToTerraform(struct!.override),
  }
}


export function hostgroupHostFlagsDisableQResetOnUaToHclTerraform(struct?: HostgroupHostFlagsDisableQResetOnUa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    override: {
      value: cdktf.booleanToHclTerraform(struct!.override),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostgroupHostFlagsDisableQResetOnUaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HostgroupHostFlagsDisableQResetOnUa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostgroupHostFlagsDisableQResetOnUa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._override = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._override = value.override;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // override - computed: true, optional: true, required: false
  private _override?: boolean | cdktf.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktf.IResolvable) {
    this._override = value;
  }
  public resetOverride() {
    this._override = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }
}
export interface HostgroupHostFlagsEnvironSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/hostgroup#enabled Hostgroup#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/hostgroup#override Hostgroup#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
}

export function hostgroupHostFlagsEnvironSetToTerraform(struct?: HostgroupHostFlagsEnvironSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    override: cdktf.booleanToTerraform(struct!.override),
  }
}


export function hostgroupHostFlagsEnvironSetToHclTerraform(struct?: HostgroupHostFlagsEnvironSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    override: {
      value: cdktf.booleanToHclTerraform(struct!.override),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostgroupHostFlagsEnvironSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HostgroupHostFlagsEnvironSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostgroupHostFlagsEnvironSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._override = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._override = value.override;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // override - computed: true, optional: true, required: false
  private _override?: boolean | cdktf.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktf.IResolvable) {
    this._override = value;
  }
  public resetOverride() {
    this._override = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }
}
export interface HostgroupHostFlagsOpenvms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/hostgroup#enabled Hostgroup#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/hostgroup#override Hostgroup#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
}

export function hostgroupHostFlagsOpenvmsToTerraform(struct?: HostgroupHostFlagsOpenvms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    override: cdktf.booleanToTerraform(struct!.override),
  }
}


export function hostgroupHostFlagsOpenvmsToHclTerraform(struct?: HostgroupHostFlagsOpenvms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    override: {
      value: cdktf.booleanToHclTerraform(struct!.override),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostgroupHostFlagsOpenvmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HostgroupHostFlagsOpenvms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostgroupHostFlagsOpenvms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._override = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._override = value.override;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // override - computed: true, optional: true, required: false
  private _override?: boolean | cdktf.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktf.IResolvable) {
    this._override = value;
  }
  public resetOverride() {
    this._override = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }
}
export interface HostgroupHostFlagsScsi3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/hostgroup#enabled Hostgroup#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/hostgroup#override Hostgroup#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
}

export function hostgroupHostFlagsScsi3ToTerraform(struct?: HostgroupHostFlagsScsi3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    override: cdktf.booleanToTerraform(struct!.override),
  }
}


export function hostgroupHostFlagsScsi3ToHclTerraform(struct?: HostgroupHostFlagsScsi3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    override: {
      value: cdktf.booleanToHclTerraform(struct!.override),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostgroupHostFlagsScsi3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HostgroupHostFlagsScsi3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostgroupHostFlagsScsi3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._override = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._override = value.override;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // override - computed: true, optional: true, required: false
  private _override?: boolean | cdktf.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktf.IResolvable) {
    this._override = value;
  }
  public resetOverride() {
    this._override = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }
}
export interface HostgroupHostFlagsScsiSupport1 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/hostgroup#enabled Hostgroup#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/hostgroup#override Hostgroup#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
}

export function hostgroupHostFlagsScsiSupport1ToTerraform(struct?: HostgroupHostFlagsScsiSupport1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    override: cdktf.booleanToTerraform(struct!.override),
  }
}


export function hostgroupHostFlagsScsiSupport1ToHclTerraform(struct?: HostgroupHostFlagsScsiSupport1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    override: {
      value: cdktf.booleanToHclTerraform(struct!.override),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostgroupHostFlagsScsiSupport1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HostgroupHostFlagsScsiSupport1 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostgroupHostFlagsScsiSupport1 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._override = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._override = value.override;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // override - computed: true, optional: true, required: false
  private _override?: boolean | cdktf.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktf.IResolvable) {
    this._override = value;
  }
  public resetOverride() {
    this._override = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }
}
export interface HostgroupHostFlagsSpc2ProtocolVersion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/hostgroup#enabled Hostgroup#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/hostgroup#override Hostgroup#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
}

export function hostgroupHostFlagsSpc2ProtocolVersionToTerraform(struct?: HostgroupHostFlagsSpc2ProtocolVersion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    override: cdktf.booleanToTerraform(struct!.override),
  }
}


export function hostgroupHostFlagsSpc2ProtocolVersionToHclTerraform(struct?: HostgroupHostFlagsSpc2ProtocolVersion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    override: {
      value: cdktf.booleanToHclTerraform(struct!.override),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostgroupHostFlagsSpc2ProtocolVersionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HostgroupHostFlagsSpc2ProtocolVersion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostgroupHostFlagsSpc2ProtocolVersion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._override = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._override = value.override;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // override - computed: true, optional: true, required: false
  private _override?: boolean | cdktf.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktf.IResolvable) {
    this._override = value;
  }
  public resetOverride() {
    this._override = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }
}
export interface HostgroupHostFlagsVolumeSetAddressing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/hostgroup#enabled Hostgroup#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/hostgroup#override Hostgroup#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
}

export function hostgroupHostFlagsVolumeSetAddressingToTerraform(struct?: HostgroupHostFlagsVolumeSetAddressing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    override: cdktf.booleanToTerraform(struct!.override),
  }
}


export function hostgroupHostFlagsVolumeSetAddressingToHclTerraform(struct?: HostgroupHostFlagsVolumeSetAddressing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    override: {
      value: cdktf.booleanToHclTerraform(struct!.override),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostgroupHostFlagsVolumeSetAddressingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HostgroupHostFlagsVolumeSetAddressing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostgroupHostFlagsVolumeSetAddressing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._override = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._override = value.override;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // override - computed: true, optional: true, required: false
  private _override?: boolean | cdktf.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktf.IResolvable) {
    this._override = value;
  }
  public resetOverride() {
    this._override = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }
}
export interface HostgroupHostFlags {
  /**
  * It enables a SCSI bus reset to only occur to the port that received the reset. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/hostgroup#avoid_reset_broadcast Hostgroup#avoid_reset_broadcast}
  */
  readonly avoidResetBroadcast?: HostgroupHostFlagsAvoidResetBroadcast;
  /**
  * It is used for hosts that do not expect the queue to be flushed on a 0629 sense. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/hostgroup#disable_q_reset_on_ua Hostgroup#disable_q_reset_on_ua}
  */
  readonly disableQResetOnUa?: HostgroupHostFlagsDisableQResetOnUa;
  /**
  * It enables the environmental error reporting by the storage system to the host on the specific port. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/hostgroup#environ_set Hostgroup#environ_set}
  */
  readonly environSet?: HostgroupHostFlagsEnvironSet;
  /**
  * This attribute enables an Open VMS fibre connection. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/hostgroup#openvms Hostgroup#openvms}
  */
  readonly openvms?: HostgroupHostFlagsOpenvms;
  /**
  * Alters the inquiry data to report that the storage system supports the SCSI-3 protocol. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/hostgroup#scsi_3 Hostgroup#scsi_3}
  */
  readonly scsi3?: HostgroupHostFlagsScsi3;
  /**
  * This attribute provides a stricter compliance with SCSI standards. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/hostgroup#scsi_support1 Hostgroup#scsi_support1}
  */
  readonly scsiSupport1?: HostgroupHostFlagsScsiSupport1;
  /**
  * When setting this flag, the port must be offline. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/hostgroup#spc2_protocol_version Hostgroup#spc2_protocol_version}
  */
  readonly spc2ProtocolVersion?: HostgroupHostFlagsSpc2ProtocolVersion;
  /**
  * It enables the volume set addressing mode. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/hostgroup#volume_set_addressing Hostgroup#volume_set_addressing}
  */
  readonly volumeSetAddressing?: HostgroupHostFlagsVolumeSetAddressing;
}

export function hostgroupHostFlagsToTerraform(struct?: HostgroupHostFlags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    avoid_reset_broadcast: hostgroupHostFlagsAvoidResetBroadcastToTerraform(struct!.avoidResetBroadcast),
    disable_q_reset_on_ua: hostgroupHostFlagsDisableQResetOnUaToTerraform(struct!.disableQResetOnUa),
    environ_set: hostgroupHostFlagsEnvironSetToTerraform(struct!.environSet),
    openvms: hostgroupHostFlagsOpenvmsToTerraform(struct!.openvms),
    scsi_3: hostgroupHostFlagsScsi3ToTerraform(struct!.scsi3),
    scsi_support1: hostgroupHostFlagsScsiSupport1ToTerraform(struct!.scsiSupport1),
    spc2_protocol_version: hostgroupHostFlagsSpc2ProtocolVersionToTerraform(struct!.spc2ProtocolVersion),
    volume_set_addressing: hostgroupHostFlagsVolumeSetAddressingToTerraform(struct!.volumeSetAddressing),
  }
}


export function hostgroupHostFlagsToHclTerraform(struct?: HostgroupHostFlags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    avoid_reset_broadcast: {
      value: hostgroupHostFlagsAvoidResetBroadcastToHclTerraform(struct!.avoidResetBroadcast),
      isBlock: true,
      type: "struct",
      storageClassType: "HostgroupHostFlagsAvoidResetBroadcast",
    },
    disable_q_reset_on_ua: {
      value: hostgroupHostFlagsDisableQResetOnUaToHclTerraform(struct!.disableQResetOnUa),
      isBlock: true,
      type: "struct",
      storageClassType: "HostgroupHostFlagsDisableQResetOnUa",
    },
    environ_set: {
      value: hostgroupHostFlagsEnvironSetToHclTerraform(struct!.environSet),
      isBlock: true,
      type: "struct",
      storageClassType: "HostgroupHostFlagsEnvironSet",
    },
    openvms: {
      value: hostgroupHostFlagsOpenvmsToHclTerraform(struct!.openvms),
      isBlock: true,
      type: "struct",
      storageClassType: "HostgroupHostFlagsOpenvms",
    },
    scsi_3: {
      value: hostgroupHostFlagsScsi3ToHclTerraform(struct!.scsi3),
      isBlock: true,
      type: "struct",
      storageClassType: "HostgroupHostFlagsScsi3",
    },
    scsi_support1: {
      value: hostgroupHostFlagsScsiSupport1ToHclTerraform(struct!.scsiSupport1),
      isBlock: true,
      type: "struct",
      storageClassType: "HostgroupHostFlagsScsiSupport1",
    },
    spc2_protocol_version: {
      value: hostgroupHostFlagsSpc2ProtocolVersionToHclTerraform(struct!.spc2ProtocolVersion),
      isBlock: true,
      type: "struct",
      storageClassType: "HostgroupHostFlagsSpc2ProtocolVersion",
    },
    volume_set_addressing: {
      value: hostgroupHostFlagsVolumeSetAddressingToHclTerraform(struct!.volumeSetAddressing),
      isBlock: true,
      type: "struct",
      storageClassType: "HostgroupHostFlagsVolumeSetAddressing",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostgroupHostFlagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HostgroupHostFlags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._avoidResetBroadcast?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.avoidResetBroadcast = this._avoidResetBroadcast?.internalValue;
    }
    if (this._disableQResetOnUa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableQResetOnUa = this._disableQResetOnUa?.internalValue;
    }
    if (this._environSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environSet = this._environSet?.internalValue;
    }
    if (this._openvms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openvms = this._openvms?.internalValue;
    }
    if (this._scsi3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scsi3 = this._scsi3?.internalValue;
    }
    if (this._scsiSupport1?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scsiSupport1 = this._scsiSupport1?.internalValue;
    }
    if (this._spc2ProtocolVersion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spc2ProtocolVersion = this._spc2ProtocolVersion?.internalValue;
    }
    if (this._volumeSetAddressing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSetAddressing = this._volumeSetAddressing?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostgroupHostFlags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._avoidResetBroadcast.internalValue = undefined;
      this._disableQResetOnUa.internalValue = undefined;
      this._environSet.internalValue = undefined;
      this._openvms.internalValue = undefined;
      this._scsi3.internalValue = undefined;
      this._scsiSupport1.internalValue = undefined;
      this._spc2ProtocolVersion.internalValue = undefined;
      this._volumeSetAddressing.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._avoidResetBroadcast.internalValue = value.avoidResetBroadcast;
      this._disableQResetOnUa.internalValue = value.disableQResetOnUa;
      this._environSet.internalValue = value.environSet;
      this._openvms.internalValue = value.openvms;
      this._scsi3.internalValue = value.scsi3;
      this._scsiSupport1.internalValue = value.scsiSupport1;
      this._spc2ProtocolVersion.internalValue = value.spc2ProtocolVersion;
      this._volumeSetAddressing.internalValue = value.volumeSetAddressing;
    }
  }

  // avoid_reset_broadcast - computed: true, optional: true, required: false
  private _avoidResetBroadcast = new HostgroupHostFlagsAvoidResetBroadcastOutputReference(this, "avoid_reset_broadcast");
  public get avoidResetBroadcast() {
    return this._avoidResetBroadcast;
  }
  public putAvoidResetBroadcast(value: HostgroupHostFlagsAvoidResetBroadcast) {
    this._avoidResetBroadcast.internalValue = value;
  }
  public resetAvoidResetBroadcast() {
    this._avoidResetBroadcast.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avoidResetBroadcastInput() {
    return this._avoidResetBroadcast.internalValue;
  }

  // disable_q_reset_on_ua - computed: true, optional: true, required: false
  private _disableQResetOnUa = new HostgroupHostFlagsDisableQResetOnUaOutputReference(this, "disable_q_reset_on_ua");
  public get disableQResetOnUa() {
    return this._disableQResetOnUa;
  }
  public putDisableQResetOnUa(value: HostgroupHostFlagsDisableQResetOnUa) {
    this._disableQResetOnUa.internalValue = value;
  }
  public resetDisableQResetOnUa() {
    this._disableQResetOnUa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableQResetOnUaInput() {
    return this._disableQResetOnUa.internalValue;
  }

  // environ_set - computed: true, optional: true, required: false
  private _environSet = new HostgroupHostFlagsEnvironSetOutputReference(this, "environ_set");
  public get environSet() {
    return this._environSet;
  }
  public putEnvironSet(value: HostgroupHostFlagsEnvironSet) {
    this._environSet.internalValue = value;
  }
  public resetEnvironSet() {
    this._environSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environSetInput() {
    return this._environSet.internalValue;
  }

  // openvms - computed: true, optional: true, required: false
  private _openvms = new HostgroupHostFlagsOpenvmsOutputReference(this, "openvms");
  public get openvms() {
    return this._openvms;
  }
  public putOpenvms(value: HostgroupHostFlagsOpenvms) {
    this._openvms.internalValue = value;
  }
  public resetOpenvms() {
    this._openvms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openvmsInput() {
    return this._openvms.internalValue;
  }

  // scsi_3 - computed: true, optional: true, required: false
  private _scsi3 = new HostgroupHostFlagsScsi3OutputReference(this, "scsi_3");
  public get scsi3() {
    return this._scsi3;
  }
  public putScsi3(value: HostgroupHostFlagsScsi3) {
    this._scsi3.internalValue = value;
  }
  public resetScsi3() {
    this._scsi3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scsi3Input() {
    return this._scsi3.internalValue;
  }

  // scsi_support1 - computed: true, optional: true, required: false
  private _scsiSupport1 = new HostgroupHostFlagsScsiSupport1OutputReference(this, "scsi_support1");
  public get scsiSupport1() {
    return this._scsiSupport1;
  }
  public putScsiSupport1(value: HostgroupHostFlagsScsiSupport1) {
    this._scsiSupport1.internalValue = value;
  }
  public resetScsiSupport1() {
    this._scsiSupport1.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scsiSupport1Input() {
    return this._scsiSupport1.internalValue;
  }

  // spc2_protocol_version - computed: true, optional: true, required: false
  private _spc2ProtocolVersion = new HostgroupHostFlagsSpc2ProtocolVersionOutputReference(this, "spc2_protocol_version");
  public get spc2ProtocolVersion() {
    return this._spc2ProtocolVersion;
  }
  public putSpc2ProtocolVersion(value: HostgroupHostFlagsSpc2ProtocolVersion) {
    this._spc2ProtocolVersion.internalValue = value;
  }
  public resetSpc2ProtocolVersion() {
    this._spc2ProtocolVersion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spc2ProtocolVersionInput() {
    return this._spc2ProtocolVersion.internalValue;
  }

  // volume_set_addressing - computed: true, optional: true, required: false
  private _volumeSetAddressing = new HostgroupHostFlagsVolumeSetAddressingOutputReference(this, "volume_set_addressing");
  public get volumeSetAddressing() {
    return this._volumeSetAddressing;
  }
  public putVolumeSetAddressing(value: HostgroupHostFlagsVolumeSetAddressing) {
    this._volumeSetAddressing.internalValue = value;
  }
  public resetVolumeSetAddressing() {
    this._volumeSetAddressing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSetAddressingInput() {
    return this._volumeSetAddressing.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/hostgroup powermax_hostgroup}
*/
export class Hostgroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powermax_hostgroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Hostgroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Hostgroup to import
  * @param importFromId The id of the existing Hostgroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/hostgroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Hostgroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powermax_hostgroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/hostgroup powermax_hostgroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HostgroupConfig
  */
  public constructor(scope: Construct, id: string, config: HostgroupConfig) {
    super(scope, id, {
      terraformResourceType: 'powermax_hostgroup',
      terraformGeneratorMetadata: {
        providerName: 'powermax',
        providerVersion: '1.0.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._consistentLun = config.consistentLun;
    this._hostFlags.internalValue = config.hostFlags;
    this._hostIds = config.hostIds;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // consistent_lun - computed: true, optional: true, required: false
  private _consistentLun?: boolean | cdktf.IResolvable; 
  public get consistentLun() {
    return this.getBooleanAttribute('consistent_lun');
  }
  public set consistentLun(value: boolean | cdktf.IResolvable) {
    this._consistentLun = value;
  }
  public resetConsistentLun() {
    this._consistentLun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consistentLunInput() {
    return this._consistentLun;
  }

  // host_flags - computed: true, optional: true, required: false
  private _hostFlags = new HostgroupHostFlagsOutputReference(this, "host_flags");
  public get hostFlags() {
    return this._hostFlags;
  }
  public putHostFlags(value: HostgroupHostFlags) {
    this._hostFlags.internalValue = value;
  }
  public resetHostFlags() {
    this._hostFlags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostFlagsInput() {
    return this._hostFlags.internalValue;
  }

  // host_ids - computed: false, optional: false, required: true
  private _hostIds?: string[]; 
  public get hostIds() {
    return cdktf.Fn.tolist(this.getListAttribute('host_ids'));
  }
  public set hostIds(value: string[]) {
    this._hostIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIdsInput() {
    return this._hostIds;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // maskingviews - computed: true, optional: false, required: false
  public get maskingviews() {
    return this.getListAttribute('maskingviews');
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

  // numofhosts - computed: true, optional: false, required: false
  public get numofhosts() {
    return this.getNumberAttribute('numofhosts');
  }

  // numofinitiators - computed: true, optional: false, required: false
  public get numofinitiators() {
    return this.getNumberAttribute('numofinitiators');
  }

  // numofmaskingviews - computed: true, optional: false, required: false
  public get numofmaskingviews() {
    return this.getNumberAttribute('numofmaskingviews');
  }

  // port_flags_override - computed: true, optional: false, required: false
  public get portFlagsOverride() {
    return this.getBooleanAttribute('port_flags_override');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      consistent_lun: cdktf.booleanToTerraform(this._consistentLun),
      host_flags: hostgroupHostFlagsToTerraform(this._hostFlags.internalValue),
      host_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostIds),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      consistent_lun: {
        value: cdktf.booleanToHclTerraform(this._consistentLun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host_flags: {
        value: hostgroupHostFlagsToHclTerraform(this._hostFlags.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HostgroupHostFlags",
      },
      host_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hostIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
