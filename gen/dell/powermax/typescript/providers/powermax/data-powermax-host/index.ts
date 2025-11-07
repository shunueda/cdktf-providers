// https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowermaxHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/host#timeouts DataPowermaxHost#timeouts}
  */
  readonly timeouts?: DataPowermaxHostTimeouts;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/host#filter DataPowermaxHost#filter}
  */
  readonly filter?: DataPowermaxHostFilter;
}
export interface DataPowermaxHostHostsHostFlagsAvoidResetBroadcast {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/host#enabled DataPowermaxHost#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/host#override DataPowermaxHost#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
}

export function dataPowermaxHostHostsHostFlagsAvoidResetBroadcastToTerraform(struct?: DataPowermaxHostHostsHostFlagsAvoidResetBroadcast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    override: cdktf.booleanToTerraform(struct!.override),
  }
}


export function dataPowermaxHostHostsHostFlagsAvoidResetBroadcastToHclTerraform(struct?: DataPowermaxHostHostsHostFlagsAvoidResetBroadcast | cdktf.IResolvable): any {
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

export class DataPowermaxHostHostsHostFlagsAvoidResetBroadcastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowermaxHostHostsHostFlagsAvoidResetBroadcast | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPowermaxHostHostsHostFlagsAvoidResetBroadcast | cdktf.IResolvable | undefined) {
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
export interface DataPowermaxHostHostsHostFlagsDisableQResetOnUa {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/host#enabled DataPowermaxHost#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/host#override DataPowermaxHost#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
}

export function dataPowermaxHostHostsHostFlagsDisableQResetOnUaToTerraform(struct?: DataPowermaxHostHostsHostFlagsDisableQResetOnUa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    override: cdktf.booleanToTerraform(struct!.override),
  }
}


export function dataPowermaxHostHostsHostFlagsDisableQResetOnUaToHclTerraform(struct?: DataPowermaxHostHostsHostFlagsDisableQResetOnUa | cdktf.IResolvable): any {
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

export class DataPowermaxHostHostsHostFlagsDisableQResetOnUaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowermaxHostHostsHostFlagsDisableQResetOnUa | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPowermaxHostHostsHostFlagsDisableQResetOnUa | cdktf.IResolvable | undefined) {
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
export interface DataPowermaxHostHostsHostFlagsEnvironSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/host#enabled DataPowermaxHost#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/host#override DataPowermaxHost#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
}

export function dataPowermaxHostHostsHostFlagsEnvironSetToTerraform(struct?: DataPowermaxHostHostsHostFlagsEnvironSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    override: cdktf.booleanToTerraform(struct!.override),
  }
}


export function dataPowermaxHostHostsHostFlagsEnvironSetToHclTerraform(struct?: DataPowermaxHostHostsHostFlagsEnvironSet | cdktf.IResolvable): any {
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

export class DataPowermaxHostHostsHostFlagsEnvironSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowermaxHostHostsHostFlagsEnvironSet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPowermaxHostHostsHostFlagsEnvironSet | cdktf.IResolvable | undefined) {
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
export interface DataPowermaxHostHostsHostFlagsOpenvms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/host#enabled DataPowermaxHost#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/host#override DataPowermaxHost#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
}

export function dataPowermaxHostHostsHostFlagsOpenvmsToTerraform(struct?: DataPowermaxHostHostsHostFlagsOpenvms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    override: cdktf.booleanToTerraform(struct!.override),
  }
}


export function dataPowermaxHostHostsHostFlagsOpenvmsToHclTerraform(struct?: DataPowermaxHostHostsHostFlagsOpenvms | cdktf.IResolvable): any {
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

export class DataPowermaxHostHostsHostFlagsOpenvmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowermaxHostHostsHostFlagsOpenvms | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPowermaxHostHostsHostFlagsOpenvms | cdktf.IResolvable | undefined) {
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
export interface DataPowermaxHostHostsHostFlagsScsi3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/host#enabled DataPowermaxHost#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/host#override DataPowermaxHost#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
}

export function dataPowermaxHostHostsHostFlagsScsi3ToTerraform(struct?: DataPowermaxHostHostsHostFlagsScsi3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    override: cdktf.booleanToTerraform(struct!.override),
  }
}


export function dataPowermaxHostHostsHostFlagsScsi3ToHclTerraform(struct?: DataPowermaxHostHostsHostFlagsScsi3 | cdktf.IResolvable): any {
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

export class DataPowermaxHostHostsHostFlagsScsi3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowermaxHostHostsHostFlagsScsi3 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPowermaxHostHostsHostFlagsScsi3 | cdktf.IResolvable | undefined) {
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
export interface DataPowermaxHostHostsHostFlagsScsiSupport1 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/host#enabled DataPowermaxHost#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/host#override DataPowermaxHost#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
}

export function dataPowermaxHostHostsHostFlagsScsiSupport1ToTerraform(struct?: DataPowermaxHostHostsHostFlagsScsiSupport1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    override: cdktf.booleanToTerraform(struct!.override),
  }
}


export function dataPowermaxHostHostsHostFlagsScsiSupport1ToHclTerraform(struct?: DataPowermaxHostHostsHostFlagsScsiSupport1 | cdktf.IResolvable): any {
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

export class DataPowermaxHostHostsHostFlagsScsiSupport1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowermaxHostHostsHostFlagsScsiSupport1 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPowermaxHostHostsHostFlagsScsiSupport1 | cdktf.IResolvable | undefined) {
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
export interface DataPowermaxHostHostsHostFlagsSpc2ProtocolVersion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/host#enabled DataPowermaxHost#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/host#override DataPowermaxHost#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
}

export function dataPowermaxHostHostsHostFlagsSpc2ProtocolVersionToTerraform(struct?: DataPowermaxHostHostsHostFlagsSpc2ProtocolVersion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    override: cdktf.booleanToTerraform(struct!.override),
  }
}


export function dataPowermaxHostHostsHostFlagsSpc2ProtocolVersionToHclTerraform(struct?: DataPowermaxHostHostsHostFlagsSpc2ProtocolVersion | cdktf.IResolvable): any {
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

export class DataPowermaxHostHostsHostFlagsSpc2ProtocolVersionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowermaxHostHostsHostFlagsSpc2ProtocolVersion | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPowermaxHostHostsHostFlagsSpc2ProtocolVersion | cdktf.IResolvable | undefined) {
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
export interface DataPowermaxHostHostsHostFlagsVolumeSetAddressing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/host#enabled DataPowermaxHost#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/host#override DataPowermaxHost#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
}

export function dataPowermaxHostHostsHostFlagsVolumeSetAddressingToTerraform(struct?: DataPowermaxHostHostsHostFlagsVolumeSetAddressing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    override: cdktf.booleanToTerraform(struct!.override),
  }
}


export function dataPowermaxHostHostsHostFlagsVolumeSetAddressingToHclTerraform(struct?: DataPowermaxHostHostsHostFlagsVolumeSetAddressing | cdktf.IResolvable): any {
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

export class DataPowermaxHostHostsHostFlagsVolumeSetAddressingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowermaxHostHostsHostFlagsVolumeSetAddressing | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPowermaxHostHostsHostFlagsVolumeSetAddressing | cdktf.IResolvable | undefined) {
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
export interface DataPowermaxHostHostsHostFlags {
  /**
  * It enables a SCSI bus reset to only occur to the port that received the reset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/host#avoid_reset_broadcast DataPowermaxHost#avoid_reset_broadcast}
  */
  readonly avoidResetBroadcast?: DataPowermaxHostHostsHostFlagsAvoidResetBroadcast;
  /**
  * It is used for hosts that do not expect the queue to be flushed on a 0629 sense.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/host#disable_q_reset_on_ua DataPowermaxHost#disable_q_reset_on_ua}
  */
  readonly disableQResetOnUa?: DataPowermaxHostHostsHostFlagsDisableQResetOnUa;
  /**
  * It enables the environmental error reporting by the storage system to the host on the specific port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/host#environ_set DataPowermaxHost#environ_set}
  */
  readonly environSet?: DataPowermaxHostHostsHostFlagsEnvironSet;
  /**
  * This attribute enables an Open VMS fibre connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/host#openvms DataPowermaxHost#openvms}
  */
  readonly openvms?: DataPowermaxHostHostsHostFlagsOpenvms;
  /**
  * Alters the inquiry data to report that the storage system supports the SCSI-3 protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/host#scsi_3 DataPowermaxHost#scsi_3}
  */
  readonly scsi3?: DataPowermaxHostHostsHostFlagsScsi3;
  /**
  * This attribute provides a stricter compliance with SCSI standards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/host#scsi_support1 DataPowermaxHost#scsi_support1}
  */
  readonly scsiSupport1?: DataPowermaxHostHostsHostFlagsScsiSupport1;
  /**
  * When setting this flag, the port must be offline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/host#spc2_protocol_version DataPowermaxHost#spc2_protocol_version}
  */
  readonly spc2ProtocolVersion?: DataPowermaxHostHostsHostFlagsSpc2ProtocolVersion;
  /**
  * It enables the volume set addressing mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/host#volume_set_addressing DataPowermaxHost#volume_set_addressing}
  */
  readonly volumeSetAddressing?: DataPowermaxHostHostsHostFlagsVolumeSetAddressing;
}

export function dataPowermaxHostHostsHostFlagsToTerraform(struct?: DataPowermaxHostHostsHostFlags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    avoid_reset_broadcast: dataPowermaxHostHostsHostFlagsAvoidResetBroadcastToTerraform(struct!.avoidResetBroadcast),
    disable_q_reset_on_ua: dataPowermaxHostHostsHostFlagsDisableQResetOnUaToTerraform(struct!.disableQResetOnUa),
    environ_set: dataPowermaxHostHostsHostFlagsEnvironSetToTerraform(struct!.environSet),
    openvms: dataPowermaxHostHostsHostFlagsOpenvmsToTerraform(struct!.openvms),
    scsi_3: dataPowermaxHostHostsHostFlagsScsi3ToTerraform(struct!.scsi3),
    scsi_support1: dataPowermaxHostHostsHostFlagsScsiSupport1ToTerraform(struct!.scsiSupport1),
    spc2_protocol_version: dataPowermaxHostHostsHostFlagsSpc2ProtocolVersionToTerraform(struct!.spc2ProtocolVersion),
    volume_set_addressing: dataPowermaxHostHostsHostFlagsVolumeSetAddressingToTerraform(struct!.volumeSetAddressing),
  }
}


export function dataPowermaxHostHostsHostFlagsToHclTerraform(struct?: DataPowermaxHostHostsHostFlags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    avoid_reset_broadcast: {
      value: dataPowermaxHostHostsHostFlagsAvoidResetBroadcastToHclTerraform(struct!.avoidResetBroadcast),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPowermaxHostHostsHostFlagsAvoidResetBroadcast",
    },
    disable_q_reset_on_ua: {
      value: dataPowermaxHostHostsHostFlagsDisableQResetOnUaToHclTerraform(struct!.disableQResetOnUa),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPowermaxHostHostsHostFlagsDisableQResetOnUa",
    },
    environ_set: {
      value: dataPowermaxHostHostsHostFlagsEnvironSetToHclTerraform(struct!.environSet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPowermaxHostHostsHostFlagsEnvironSet",
    },
    openvms: {
      value: dataPowermaxHostHostsHostFlagsOpenvmsToHclTerraform(struct!.openvms),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPowermaxHostHostsHostFlagsOpenvms",
    },
    scsi_3: {
      value: dataPowermaxHostHostsHostFlagsScsi3ToHclTerraform(struct!.scsi3),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPowermaxHostHostsHostFlagsScsi3",
    },
    scsi_support1: {
      value: dataPowermaxHostHostsHostFlagsScsiSupport1ToHclTerraform(struct!.scsiSupport1),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPowermaxHostHostsHostFlagsScsiSupport1",
    },
    spc2_protocol_version: {
      value: dataPowermaxHostHostsHostFlagsSpc2ProtocolVersionToHclTerraform(struct!.spc2ProtocolVersion),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPowermaxHostHostsHostFlagsSpc2ProtocolVersion",
    },
    volume_set_addressing: {
      value: dataPowermaxHostHostsHostFlagsVolumeSetAddressingToHclTerraform(struct!.volumeSetAddressing),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPowermaxHostHostsHostFlagsVolumeSetAddressing",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowermaxHostHostsHostFlagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowermaxHostHostsHostFlags | undefined {
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

  public set internalValue(value: DataPowermaxHostHostsHostFlags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._avoidResetBroadcast.internalValue = undefined;
      this._disableQResetOnUa.internalValue = undefined;
      this._environSet.internalValue = undefined;
      this._openvms.internalValue = undefined;
      this._scsi3.internalValue = undefined;
      this._scsiSupport1.internalValue = undefined;
      this._spc2ProtocolVersion.internalValue = undefined;
      this._volumeSetAddressing.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
  private _avoidResetBroadcast = new DataPowermaxHostHostsHostFlagsAvoidResetBroadcastOutputReference(this, "avoid_reset_broadcast");
  public get avoidResetBroadcast() {
    return this._avoidResetBroadcast;
  }
  public putAvoidResetBroadcast(value: DataPowermaxHostHostsHostFlagsAvoidResetBroadcast) {
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
  private _disableQResetOnUa = new DataPowermaxHostHostsHostFlagsDisableQResetOnUaOutputReference(this, "disable_q_reset_on_ua");
  public get disableQResetOnUa() {
    return this._disableQResetOnUa;
  }
  public putDisableQResetOnUa(value: DataPowermaxHostHostsHostFlagsDisableQResetOnUa) {
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
  private _environSet = new DataPowermaxHostHostsHostFlagsEnvironSetOutputReference(this, "environ_set");
  public get environSet() {
    return this._environSet;
  }
  public putEnvironSet(value: DataPowermaxHostHostsHostFlagsEnvironSet) {
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
  private _openvms = new DataPowermaxHostHostsHostFlagsOpenvmsOutputReference(this, "openvms");
  public get openvms() {
    return this._openvms;
  }
  public putOpenvms(value: DataPowermaxHostHostsHostFlagsOpenvms) {
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
  private _scsi3 = new DataPowermaxHostHostsHostFlagsScsi3OutputReference(this, "scsi_3");
  public get scsi3() {
    return this._scsi3;
  }
  public putScsi3(value: DataPowermaxHostHostsHostFlagsScsi3) {
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
  private _scsiSupport1 = new DataPowermaxHostHostsHostFlagsScsiSupport1OutputReference(this, "scsi_support1");
  public get scsiSupport1() {
    return this._scsiSupport1;
  }
  public putScsiSupport1(value: DataPowermaxHostHostsHostFlagsScsiSupport1) {
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
  private _spc2ProtocolVersion = new DataPowermaxHostHostsHostFlagsSpc2ProtocolVersionOutputReference(this, "spc2_protocol_version");
  public get spc2ProtocolVersion() {
    return this._spc2ProtocolVersion;
  }
  public putSpc2ProtocolVersion(value: DataPowermaxHostHostsHostFlagsSpc2ProtocolVersion) {
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
  private _volumeSetAddressing = new DataPowermaxHostHostsHostFlagsVolumeSetAddressingOutputReference(this, "volume_set_addressing");
  public get volumeSetAddressing() {
    return this._volumeSetAddressing;
  }
  public putVolumeSetAddressing(value: DataPowermaxHostHostsHostFlagsVolumeSetAddressing) {
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
export interface DataPowermaxHostHosts {
  /**
  * It enables the rejection of any masking operation involving this host that would result in inconsistent LUN values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/host#consistent_lun DataPowermaxHost#consistent_lun}
  */
  readonly consistentLun?: boolean | cdktf.IResolvable;
  /**
  * Flags set for the host. When host_flags = {} then default flags will be considered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/host#host_flags DataPowermaxHost#host_flags}
  */
  readonly hostFlags: DataPowermaxHostHostsHostFlags;
  /**
  * The initiators associated with the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/host#initiator DataPowermaxHost#initiator}
  */
  readonly initiator: string[];
  /**
  * The name of the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/host#name DataPowermaxHost#name}
  */
  readonly name: string;
}

export function dataPowermaxHostHostsToTerraform(struct?: DataPowermaxHostHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consistent_lun: cdktf.booleanToTerraform(struct!.consistentLun),
    host_flags: dataPowermaxHostHostsHostFlagsToTerraform(struct!.hostFlags),
    initiator: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.initiator),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPowermaxHostHostsToHclTerraform(struct?: DataPowermaxHostHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consistent_lun: {
      value: cdktf.booleanToHclTerraform(struct!.consistentLun),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host_flags: {
      value: dataPowermaxHostHostsHostFlagsToHclTerraform(struct!.hostFlags),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPowermaxHostHostsHostFlags",
    },
    initiator: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.initiator),
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

export class DataPowermaxHostHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowermaxHostHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consistentLun !== undefined) {
      hasAnyValues = true;
      internalValueResult.consistentLun = this._consistentLun;
    }
    if (this._hostFlags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostFlags = this._hostFlags?.internalValue;
    }
    if (this._initiator !== undefined) {
      hasAnyValues = true;
      internalValueResult.initiator = this._initiator;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowermaxHostHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._consistentLun = undefined;
      this._hostFlags.internalValue = undefined;
      this._initiator = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._consistentLun = value.consistentLun;
      this._hostFlags.internalValue = value.hostFlags;
      this._initiator = value.initiator;
      this._name = value.name;
    }
  }

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

  // host_flags - computed: true, optional: false, required: true
  private _hostFlags = new DataPowermaxHostHostsHostFlagsOutputReference(this, "host_flags");
  public get hostFlags() {
    return this._hostFlags;
  }
  public putHostFlags(value: DataPowermaxHostHostsHostFlags) {
    this._hostFlags.internalValue = value;
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

  // initiator - computed: true, optional: false, required: true
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

  // name - computed: true, optional: false, required: true
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
}

export class DataPowermaxHostHostsList extends cdktf.ComplexList {
  public internalValue? : DataPowermaxHostHosts[] | cdktf.IResolvable

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
  public get(index: number): DataPowermaxHostHostsOutputReference {
    return new DataPowermaxHostHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowermaxHostTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/host#read DataPowermaxHost#read}
  */
  readonly read?: string;
}

export function dataPowermaxHostTimeoutsToTerraform(struct?: DataPowermaxHostTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataPowermaxHostTimeoutsToHclTerraform(struct?: DataPowermaxHostTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowermaxHostTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowermaxHostTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowermaxHostTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}
export interface DataPowermaxHostFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/host#names DataPowermaxHost#names}
  */
  readonly names?: string[];
}

export function dataPowermaxHostFilterToTerraform(struct?: DataPowermaxHostFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
  }
}


export function dataPowermaxHostFilterToHclTerraform(struct?: DataPowermaxHostFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowermaxHostFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowermaxHostFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowermaxHostFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._names = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._names = value.names;
    }
  }

  // names - computed: false, optional: true, required: false
  private _names?: string[]; 
  public get names() {
    return cdktf.Fn.tolist(this.getListAttribute('names'));
  }
  public set names(value: string[]) {
    this._names = value;
  }
  public resetNames() {
    this._names = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/host powermax_host}
*/
export class DataPowermaxHost extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powermax_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowermaxHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowermaxHost to import
  * @param importFromId The id of the existing DataPowermaxHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowermaxHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powermax_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/host powermax_host} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowermaxHostConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowermaxHostConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powermax_host',
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
    this._timeouts.internalValue = config.timeouts;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hosts - computed: true, optional: false, required: false
  private _hosts = new DataPowermaxHostHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataPowermaxHostTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataPowermaxHostTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataPowermaxHostFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataPowermaxHostFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      timeouts: dataPowermaxHostTimeoutsToTerraform(this._timeouts.internalValue),
      filter: dataPowermaxHostFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      timeouts: {
        value: dataPowermaxHostTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowermaxHostTimeouts",
      },
      filter: {
        value: dataPowermaxHostFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowermaxHostFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
