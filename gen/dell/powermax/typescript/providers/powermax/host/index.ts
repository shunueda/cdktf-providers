// https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HostConfig extends cdktf.TerraformMetaArguments {
  /**
  * It enables the rejection of any masking operation involving this host that would result in inconsistent LUN values. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/host#consistent_lun Host#consistent_lun}
  */
  readonly consistentLun?: boolean | cdktf.IResolvable;
  /**
  * Flags set for the host. When host_flags = {} then default flags will be considered. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/host#host_flags Host#host_flags}
  */
  readonly hostFlags?: HostHostFlags;
  /**
  * The initiators associated with the host. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/host#initiator Host#initiator}
  */
  readonly initiator: string[];
  /**
  * The name of the host. Only alphanumeric characters, underscores ( _ ), and hyphens (-) are allowed. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/host#name Host#name}
  */
  readonly name: string;
}
export interface HostHostFlagsAvoidResetBroadcast {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/host#enabled Host#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/host#override Host#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
}

export function hostHostFlagsAvoidResetBroadcastToTerraform(struct?: HostHostFlagsAvoidResetBroadcast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    override: cdktf.booleanToTerraform(struct!.override),
  }
}


export function hostHostFlagsAvoidResetBroadcastToHclTerraform(struct?: HostHostFlagsAvoidResetBroadcast | cdktf.IResolvable): any {
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

export class HostHostFlagsAvoidResetBroadcastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HostHostFlagsAvoidResetBroadcast | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HostHostFlagsAvoidResetBroadcast | cdktf.IResolvable | undefined) {
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
export interface HostHostFlagsDisableQResetOnUa {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/host#enabled Host#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/host#override Host#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
}

export function hostHostFlagsDisableQResetOnUaToTerraform(struct?: HostHostFlagsDisableQResetOnUa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    override: cdktf.booleanToTerraform(struct!.override),
  }
}


export function hostHostFlagsDisableQResetOnUaToHclTerraform(struct?: HostHostFlagsDisableQResetOnUa | cdktf.IResolvable): any {
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

export class HostHostFlagsDisableQResetOnUaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HostHostFlagsDisableQResetOnUa | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HostHostFlagsDisableQResetOnUa | cdktf.IResolvable | undefined) {
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
export interface HostHostFlagsEnvironSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/host#enabled Host#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/host#override Host#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
}

export function hostHostFlagsEnvironSetToTerraform(struct?: HostHostFlagsEnvironSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    override: cdktf.booleanToTerraform(struct!.override),
  }
}


export function hostHostFlagsEnvironSetToHclTerraform(struct?: HostHostFlagsEnvironSet | cdktf.IResolvable): any {
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

export class HostHostFlagsEnvironSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HostHostFlagsEnvironSet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HostHostFlagsEnvironSet | cdktf.IResolvable | undefined) {
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
export interface HostHostFlagsOpenvms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/host#enabled Host#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/host#override Host#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
}

export function hostHostFlagsOpenvmsToTerraform(struct?: HostHostFlagsOpenvms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    override: cdktf.booleanToTerraform(struct!.override),
  }
}


export function hostHostFlagsOpenvmsToHclTerraform(struct?: HostHostFlagsOpenvms | cdktf.IResolvable): any {
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

export class HostHostFlagsOpenvmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HostHostFlagsOpenvms | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HostHostFlagsOpenvms | cdktf.IResolvable | undefined) {
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
export interface HostHostFlagsScsi3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/host#enabled Host#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/host#override Host#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
}

export function hostHostFlagsScsi3ToTerraform(struct?: HostHostFlagsScsi3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    override: cdktf.booleanToTerraform(struct!.override),
  }
}


export function hostHostFlagsScsi3ToHclTerraform(struct?: HostHostFlagsScsi3 | cdktf.IResolvable): any {
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

export class HostHostFlagsScsi3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HostHostFlagsScsi3 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HostHostFlagsScsi3 | cdktf.IResolvable | undefined) {
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
export interface HostHostFlagsScsiSupport1 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/host#enabled Host#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/host#override Host#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
}

export function hostHostFlagsScsiSupport1ToTerraform(struct?: HostHostFlagsScsiSupport1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    override: cdktf.booleanToTerraform(struct!.override),
  }
}


export function hostHostFlagsScsiSupport1ToHclTerraform(struct?: HostHostFlagsScsiSupport1 | cdktf.IResolvable): any {
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

export class HostHostFlagsScsiSupport1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HostHostFlagsScsiSupport1 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HostHostFlagsScsiSupport1 | cdktf.IResolvable | undefined) {
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
export interface HostHostFlagsSpc2ProtocolVersion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/host#enabled Host#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/host#override Host#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
}

export function hostHostFlagsSpc2ProtocolVersionToTerraform(struct?: HostHostFlagsSpc2ProtocolVersion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    override: cdktf.booleanToTerraform(struct!.override),
  }
}


export function hostHostFlagsSpc2ProtocolVersionToHclTerraform(struct?: HostHostFlagsSpc2ProtocolVersion | cdktf.IResolvable): any {
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

export class HostHostFlagsSpc2ProtocolVersionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HostHostFlagsSpc2ProtocolVersion | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HostHostFlagsSpc2ProtocolVersion | cdktf.IResolvable | undefined) {
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
export interface HostHostFlagsVolumeSetAddressing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/host#enabled Host#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/host#override Host#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
}

export function hostHostFlagsVolumeSetAddressingToTerraform(struct?: HostHostFlagsVolumeSetAddressing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    override: cdktf.booleanToTerraform(struct!.override),
  }
}


export function hostHostFlagsVolumeSetAddressingToHclTerraform(struct?: HostHostFlagsVolumeSetAddressing | cdktf.IResolvable): any {
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

export class HostHostFlagsVolumeSetAddressingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HostHostFlagsVolumeSetAddressing | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HostHostFlagsVolumeSetAddressing | cdktf.IResolvable | undefined) {
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
export interface HostHostFlags {
  /**
  * It enables a SCSI bus reset to only occur to the port that received the reset. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/host#avoid_reset_broadcast Host#avoid_reset_broadcast}
  */
  readonly avoidResetBroadcast?: HostHostFlagsAvoidResetBroadcast;
  /**
  * It is used for hosts that do not expect the queue to be flushed on a 0629 sense. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/host#disable_q_reset_on_ua Host#disable_q_reset_on_ua}
  */
  readonly disableQResetOnUa?: HostHostFlagsDisableQResetOnUa;
  /**
  * It enables the environmental error reporting by the storage system to the host on the specific port. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/host#environ_set Host#environ_set}
  */
  readonly environSet?: HostHostFlagsEnvironSet;
  /**
  * This attribute enables an Open VMS fibre connection. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/host#openvms Host#openvms}
  */
  readonly openvms?: HostHostFlagsOpenvms;
  /**
  * Alters the inquiry data to report that the storage system supports the SCSI-3 protocol. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/host#scsi_3 Host#scsi_3}
  */
  readonly scsi3?: HostHostFlagsScsi3;
  /**
  * This attribute provides a stricter compliance with SCSI standards. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/host#scsi_support1 Host#scsi_support1}
  */
  readonly scsiSupport1?: HostHostFlagsScsiSupport1;
  /**
  * When setting this flag, the port must be offline. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/host#spc2_protocol_version Host#spc2_protocol_version}
  */
  readonly spc2ProtocolVersion?: HostHostFlagsSpc2ProtocolVersion;
  /**
  * It enables the volume set addressing mode. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/host#volume_set_addressing Host#volume_set_addressing}
  */
  readonly volumeSetAddressing?: HostHostFlagsVolumeSetAddressing;
}

export function hostHostFlagsToTerraform(struct?: HostHostFlags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    avoid_reset_broadcast: hostHostFlagsAvoidResetBroadcastToTerraform(struct!.avoidResetBroadcast),
    disable_q_reset_on_ua: hostHostFlagsDisableQResetOnUaToTerraform(struct!.disableQResetOnUa),
    environ_set: hostHostFlagsEnvironSetToTerraform(struct!.environSet),
    openvms: hostHostFlagsOpenvmsToTerraform(struct!.openvms),
    scsi_3: hostHostFlagsScsi3ToTerraform(struct!.scsi3),
    scsi_support1: hostHostFlagsScsiSupport1ToTerraform(struct!.scsiSupport1),
    spc2_protocol_version: hostHostFlagsSpc2ProtocolVersionToTerraform(struct!.spc2ProtocolVersion),
    volume_set_addressing: hostHostFlagsVolumeSetAddressingToTerraform(struct!.volumeSetAddressing),
  }
}


export function hostHostFlagsToHclTerraform(struct?: HostHostFlags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    avoid_reset_broadcast: {
      value: hostHostFlagsAvoidResetBroadcastToHclTerraform(struct!.avoidResetBroadcast),
      isBlock: true,
      type: "struct",
      storageClassType: "HostHostFlagsAvoidResetBroadcast",
    },
    disable_q_reset_on_ua: {
      value: hostHostFlagsDisableQResetOnUaToHclTerraform(struct!.disableQResetOnUa),
      isBlock: true,
      type: "struct",
      storageClassType: "HostHostFlagsDisableQResetOnUa",
    },
    environ_set: {
      value: hostHostFlagsEnvironSetToHclTerraform(struct!.environSet),
      isBlock: true,
      type: "struct",
      storageClassType: "HostHostFlagsEnvironSet",
    },
    openvms: {
      value: hostHostFlagsOpenvmsToHclTerraform(struct!.openvms),
      isBlock: true,
      type: "struct",
      storageClassType: "HostHostFlagsOpenvms",
    },
    scsi_3: {
      value: hostHostFlagsScsi3ToHclTerraform(struct!.scsi3),
      isBlock: true,
      type: "struct",
      storageClassType: "HostHostFlagsScsi3",
    },
    scsi_support1: {
      value: hostHostFlagsScsiSupport1ToHclTerraform(struct!.scsiSupport1),
      isBlock: true,
      type: "struct",
      storageClassType: "HostHostFlagsScsiSupport1",
    },
    spc2_protocol_version: {
      value: hostHostFlagsSpc2ProtocolVersionToHclTerraform(struct!.spc2ProtocolVersion),
      isBlock: true,
      type: "struct",
      storageClassType: "HostHostFlagsSpc2ProtocolVersion",
    },
    volume_set_addressing: {
      value: hostHostFlagsVolumeSetAddressingToHclTerraform(struct!.volumeSetAddressing),
      isBlock: true,
      type: "struct",
      storageClassType: "HostHostFlagsVolumeSetAddressing",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostHostFlagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HostHostFlags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HostHostFlags | cdktf.IResolvable | undefined) {
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
  private _avoidResetBroadcast = new HostHostFlagsAvoidResetBroadcastOutputReference(this, "avoid_reset_broadcast");
  public get avoidResetBroadcast() {
    return this._avoidResetBroadcast;
  }
  public putAvoidResetBroadcast(value: HostHostFlagsAvoidResetBroadcast) {
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
  private _disableQResetOnUa = new HostHostFlagsDisableQResetOnUaOutputReference(this, "disable_q_reset_on_ua");
  public get disableQResetOnUa() {
    return this._disableQResetOnUa;
  }
  public putDisableQResetOnUa(value: HostHostFlagsDisableQResetOnUa) {
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
  private _environSet = new HostHostFlagsEnvironSetOutputReference(this, "environ_set");
  public get environSet() {
    return this._environSet;
  }
  public putEnvironSet(value: HostHostFlagsEnvironSet) {
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
  private _openvms = new HostHostFlagsOpenvmsOutputReference(this, "openvms");
  public get openvms() {
    return this._openvms;
  }
  public putOpenvms(value: HostHostFlagsOpenvms) {
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
  private _scsi3 = new HostHostFlagsScsi3OutputReference(this, "scsi_3");
  public get scsi3() {
    return this._scsi3;
  }
  public putScsi3(value: HostHostFlagsScsi3) {
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
  private _scsiSupport1 = new HostHostFlagsScsiSupport1OutputReference(this, "scsi_support1");
  public get scsiSupport1() {
    return this._scsiSupport1;
  }
  public putScsiSupport1(value: HostHostFlagsScsiSupport1) {
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
  private _spc2ProtocolVersion = new HostHostFlagsSpc2ProtocolVersionOutputReference(this, "spc2_protocol_version");
  public get spc2ProtocolVersion() {
    return this._spc2ProtocolVersion;
  }
  public putSpc2ProtocolVersion(value: HostHostFlagsSpc2ProtocolVersion) {
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
  private _volumeSetAddressing = new HostHostFlagsVolumeSetAddressingOutputReference(this, "volume_set_addressing");
  public get volumeSetAddressing() {
    return this._volumeSetAddressing;
  }
  public putVolumeSetAddressing(value: HostHostFlagsVolumeSetAddressing) {
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
* Represents a {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/host powermax_host}
*/
export class Host extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powermax_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Host resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Host to import
  * @param importFromId The id of the existing Host that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Host to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powermax_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/host powermax_host} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HostConfig
  */
  public constructor(scope: Construct, id: string, config: HostConfig) {
    super(scope, id, {
      terraformResourceType: 'powermax_host',
      terraformGeneratorMetadata: {
        providerName: 'powermax',
        providerVersion: '1.0.3',
        providerVersionConstraint: '1.0.3'
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
    this._initiator = config.initiator;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bw_limit - computed: true, optional: false, required: false
  public get bwLimit() {
    return this.getNumberAttribute('bw_limit');
  }

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
  private _hostFlags = new HostHostFlagsOutputReference(this, "host_flags");
  public get hostFlags() {
    return this._hostFlags;
  }
  public putHostFlags(value: HostHostFlags) {
    this._hostFlags.internalValue = value;
  }
  public resetHostFlags() {
    this._hostFlags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostFlagsInput() {
    return this._hostFlags.internalValue;
  }

  // hostgroup - computed: true, optional: false, required: false
  public get hostgroup() {
    return this.getListAttribute('hostgroup');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // initiator - computed: false, optional: false, required: true
  private _initiator?: string[]; 
  public get initiator() {
    return this.getListAttribute('initiator');
  }
  public set initiator(value: string[]) {
    this._initiator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get initiatorInput() {
    return this._initiator;
  }

  // maskingview - computed: true, optional: false, required: false
  public get maskingview() {
    return this.getListAttribute('maskingview');
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

  // num_of_host_groups - computed: true, optional: false, required: false
  public get numOfHostGroups() {
    return this.getNumberAttribute('num_of_host_groups');
  }

  // num_of_initiators - computed: true, optional: false, required: false
  public get numOfInitiators() {
    return this.getNumberAttribute('num_of_initiators');
  }

  // num_of_masking_views - computed: true, optional: false, required: false
  public get numOfMaskingViews() {
    return this.getNumberAttribute('num_of_masking_views');
  }

  // numofpowerpathhosts - computed: true, optional: false, required: false
  public get numofpowerpathhosts() {
    return this.getNumberAttribute('numofpowerpathhosts');
  }

  // port_flags_override - computed: true, optional: false, required: false
  public get portFlagsOverride() {
    return this.getBooleanAttribute('port_flags_override');
  }

  // powerpathhosts - computed: true, optional: false, required: false
  public get powerpathhosts() {
    return this.getListAttribute('powerpathhosts');
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
      host_flags: hostHostFlagsToTerraform(this._hostFlags.internalValue),
      initiator: cdktf.listMapper(cdktf.stringToTerraform, false)(this._initiator),
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
        value: hostHostFlagsToHclTerraform(this._hostFlags.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HostHostFlags",
      },
      initiator: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._initiator),
        isBlock: false,
        type: "list",
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
