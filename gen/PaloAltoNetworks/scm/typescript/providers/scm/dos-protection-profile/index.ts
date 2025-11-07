// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DosProtectionProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#description DosProtectionProfile#description}
  */
  readonly description?: string;
  /**
  * The device in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#device DosProtectionProfile#device}
  */
  readonly device?: string;
  /**
  * Flood
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#flood DosProtectionProfile#flood}
  */
  readonly flood?: DosProtectionProfileFlood;
  /**
  * The folder in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#folder DosProtectionProfile#folder}
  */
  readonly folder?: string;
  /**
  * Profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#name DosProtectionProfile#name}
  */
  readonly name: string;
  /**
  * Resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#resource DosProtectionProfile#resource}
  */
  readonly resource?: DosProtectionProfileResource;
  /**
  * The snippet in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#snippet DosProtectionProfile#snippet}
  */
  readonly snippet?: string;
  /**
  * Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#type DosProtectionProfile#type}
  */
  readonly type: string;
}
export interface DosProtectionProfileFloodIcmpRedBlock {
  /**
  * Duration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#duration DosProtectionProfile#duration}
  */
  readonly duration?: number;
}

export function dosProtectionProfileFloodIcmpRedBlockToTerraform(struct?: DosProtectionProfileFloodIcmpRedBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
  }
}


export function dosProtectionProfileFloodIcmpRedBlockToHclTerraform(struct?: DosProtectionProfileFloodIcmpRedBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DosProtectionProfileFloodIcmpRedBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DosProtectionProfileFloodIcmpRedBlock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DosProtectionProfileFloodIcmpRedBlock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
    }
  }

  // duration - computed: true, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }
}
export interface DosProtectionProfileFloodIcmpRed {
  /**
  * Activate rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#activate_rate DosProtectionProfile#activate_rate}
  */
  readonly activateRate?: number;
  /**
  * Alarm rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#alarm_rate DosProtectionProfile#alarm_rate}
  */
  readonly alarmRate?: number;
  /**
  * Block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#block DosProtectionProfile#block}
  */
  readonly block?: DosProtectionProfileFloodIcmpRedBlock;
  /**
  * Maximal rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#maximal_rate DosProtectionProfile#maximal_rate}
  */
  readonly maximalRate?: number;
}

export function dosProtectionProfileFloodIcmpRedToTerraform(struct?: DosProtectionProfileFloodIcmpRed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activate_rate: cdktf.numberToTerraform(struct!.activateRate),
    alarm_rate: cdktf.numberToTerraform(struct!.alarmRate),
    block: dosProtectionProfileFloodIcmpRedBlockToTerraform(struct!.block),
    maximal_rate: cdktf.numberToTerraform(struct!.maximalRate),
  }
}


export function dosProtectionProfileFloodIcmpRedToHclTerraform(struct?: DosProtectionProfileFloodIcmpRed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activate_rate: {
      value: cdktf.numberToHclTerraform(struct!.activateRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alarm_rate: {
      value: cdktf.numberToHclTerraform(struct!.alarmRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    block: {
      value: dosProtectionProfileFloodIcmpRedBlockToHclTerraform(struct!.block),
      isBlock: true,
      type: "struct",
      storageClassType: "DosProtectionProfileFloodIcmpRedBlock",
    },
    maximal_rate: {
      value: cdktf.numberToHclTerraform(struct!.maximalRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DosProtectionProfileFloodIcmpRedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DosProtectionProfileFloodIcmpRed | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activateRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.activateRate = this._activateRate;
    }
    if (this._alarmRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmRate = this._alarmRate;
    }
    if (this._block?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.block = this._block?.internalValue;
    }
    if (this._maximalRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximalRate = this._maximalRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DosProtectionProfileFloodIcmpRed | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activateRate = undefined;
      this._alarmRate = undefined;
      this._block.internalValue = undefined;
      this._maximalRate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activateRate = value.activateRate;
      this._alarmRate = value.alarmRate;
      this._block.internalValue = value.block;
      this._maximalRate = value.maximalRate;
    }
  }

  // activate_rate - computed: true, optional: true, required: false
  private _activateRate?: number; 
  public get activateRate() {
    return this.getNumberAttribute('activate_rate');
  }
  public set activateRate(value: number) {
    this._activateRate = value;
  }
  public resetActivateRate() {
    this._activateRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activateRateInput() {
    return this._activateRate;
  }

  // alarm_rate - computed: true, optional: true, required: false
  private _alarmRate?: number; 
  public get alarmRate() {
    return this.getNumberAttribute('alarm_rate');
  }
  public set alarmRate(value: number) {
    this._alarmRate = value;
  }
  public resetAlarmRate() {
    this._alarmRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmRateInput() {
    return this._alarmRate;
  }

  // block - computed: true, optional: true, required: false
  private _block = new DosProtectionProfileFloodIcmpRedBlockOutputReference(this, "block");
  public get block() {
    return this._block;
  }
  public putBlock(value: DosProtectionProfileFloodIcmpRedBlock) {
    this._block.internalValue = value;
  }
  public resetBlock() {
    this._block.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block.internalValue;
  }

  // maximal_rate - computed: true, optional: true, required: false
  private _maximalRate?: number; 
  public get maximalRate() {
    return this.getNumberAttribute('maximal_rate');
  }
  public set maximalRate(value: number) {
    this._maximalRate = value;
  }
  public resetMaximalRate() {
    this._maximalRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximalRateInput() {
    return this._maximalRate;
  }
}
export interface DosProtectionProfileFloodIcmp {
  /**
  * Enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#enable DosProtectionProfile#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Red
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#red DosProtectionProfile#red}
  */
  readonly red?: DosProtectionProfileFloodIcmpRed;
}

export function dosProtectionProfileFloodIcmpToTerraform(struct?: DosProtectionProfileFloodIcmp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    red: dosProtectionProfileFloodIcmpRedToTerraform(struct!.red),
  }
}


export function dosProtectionProfileFloodIcmpToHclTerraform(struct?: DosProtectionProfileFloodIcmp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    red: {
      value: dosProtectionProfileFloodIcmpRedToHclTerraform(struct!.red),
      isBlock: true,
      type: "struct",
      storageClassType: "DosProtectionProfileFloodIcmpRed",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DosProtectionProfileFloodIcmpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DosProtectionProfileFloodIcmp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._red?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.red = this._red?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DosProtectionProfileFloodIcmp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._red.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._red.internalValue = value.red;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // red - computed: true, optional: true, required: false
  private _red = new DosProtectionProfileFloodIcmpRedOutputReference(this, "red");
  public get red() {
    return this._red;
  }
  public putRed(value: DosProtectionProfileFloodIcmpRed) {
    this._red.internalValue = value;
  }
  public resetRed() {
    this._red.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redInput() {
    return this._red.internalValue;
  }
}
export interface DosProtectionProfileFloodIcmpv6RedBlock {
  /**
  * Duration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#duration DosProtectionProfile#duration}
  */
  readonly duration?: number;
}

export function dosProtectionProfileFloodIcmpv6RedBlockToTerraform(struct?: DosProtectionProfileFloodIcmpv6RedBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
  }
}


export function dosProtectionProfileFloodIcmpv6RedBlockToHclTerraform(struct?: DosProtectionProfileFloodIcmpv6RedBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DosProtectionProfileFloodIcmpv6RedBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DosProtectionProfileFloodIcmpv6RedBlock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DosProtectionProfileFloodIcmpv6RedBlock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
    }
  }

  // duration - computed: true, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }
}
export interface DosProtectionProfileFloodIcmpv6Red {
  /**
  * Activate rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#activate_rate DosProtectionProfile#activate_rate}
  */
  readonly activateRate?: number;
  /**
  * Alarm rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#alarm_rate DosProtectionProfile#alarm_rate}
  */
  readonly alarmRate?: number;
  /**
  * Block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#block DosProtectionProfile#block}
  */
  readonly block?: DosProtectionProfileFloodIcmpv6RedBlock;
  /**
  * Maximal rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#maximal_rate DosProtectionProfile#maximal_rate}
  */
  readonly maximalRate?: number;
}

export function dosProtectionProfileFloodIcmpv6RedToTerraform(struct?: DosProtectionProfileFloodIcmpv6Red | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activate_rate: cdktf.numberToTerraform(struct!.activateRate),
    alarm_rate: cdktf.numberToTerraform(struct!.alarmRate),
    block: dosProtectionProfileFloodIcmpv6RedBlockToTerraform(struct!.block),
    maximal_rate: cdktf.numberToTerraform(struct!.maximalRate),
  }
}


export function dosProtectionProfileFloodIcmpv6RedToHclTerraform(struct?: DosProtectionProfileFloodIcmpv6Red | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activate_rate: {
      value: cdktf.numberToHclTerraform(struct!.activateRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alarm_rate: {
      value: cdktf.numberToHclTerraform(struct!.alarmRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    block: {
      value: dosProtectionProfileFloodIcmpv6RedBlockToHclTerraform(struct!.block),
      isBlock: true,
      type: "struct",
      storageClassType: "DosProtectionProfileFloodIcmpv6RedBlock",
    },
    maximal_rate: {
      value: cdktf.numberToHclTerraform(struct!.maximalRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DosProtectionProfileFloodIcmpv6RedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DosProtectionProfileFloodIcmpv6Red | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activateRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.activateRate = this._activateRate;
    }
    if (this._alarmRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmRate = this._alarmRate;
    }
    if (this._block?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.block = this._block?.internalValue;
    }
    if (this._maximalRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximalRate = this._maximalRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DosProtectionProfileFloodIcmpv6Red | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activateRate = undefined;
      this._alarmRate = undefined;
      this._block.internalValue = undefined;
      this._maximalRate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activateRate = value.activateRate;
      this._alarmRate = value.alarmRate;
      this._block.internalValue = value.block;
      this._maximalRate = value.maximalRate;
    }
  }

  // activate_rate - computed: true, optional: true, required: false
  private _activateRate?: number; 
  public get activateRate() {
    return this.getNumberAttribute('activate_rate');
  }
  public set activateRate(value: number) {
    this._activateRate = value;
  }
  public resetActivateRate() {
    this._activateRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activateRateInput() {
    return this._activateRate;
  }

  // alarm_rate - computed: true, optional: true, required: false
  private _alarmRate?: number; 
  public get alarmRate() {
    return this.getNumberAttribute('alarm_rate');
  }
  public set alarmRate(value: number) {
    this._alarmRate = value;
  }
  public resetAlarmRate() {
    this._alarmRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmRateInput() {
    return this._alarmRate;
  }

  // block - computed: true, optional: true, required: false
  private _block = new DosProtectionProfileFloodIcmpv6RedBlockOutputReference(this, "block");
  public get block() {
    return this._block;
  }
  public putBlock(value: DosProtectionProfileFloodIcmpv6RedBlock) {
    this._block.internalValue = value;
  }
  public resetBlock() {
    this._block.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block.internalValue;
  }

  // maximal_rate - computed: true, optional: true, required: false
  private _maximalRate?: number; 
  public get maximalRate() {
    return this.getNumberAttribute('maximal_rate');
  }
  public set maximalRate(value: number) {
    this._maximalRate = value;
  }
  public resetMaximalRate() {
    this._maximalRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximalRateInput() {
    return this._maximalRate;
  }
}
export interface DosProtectionProfileFloodIcmpv6 {
  /**
  * Enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#enable DosProtectionProfile#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Red
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#red DosProtectionProfile#red}
  */
  readonly red?: DosProtectionProfileFloodIcmpv6Red;
}

export function dosProtectionProfileFloodIcmpv6ToTerraform(struct?: DosProtectionProfileFloodIcmpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    red: dosProtectionProfileFloodIcmpv6RedToTerraform(struct!.red),
  }
}


export function dosProtectionProfileFloodIcmpv6ToHclTerraform(struct?: DosProtectionProfileFloodIcmpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    red: {
      value: dosProtectionProfileFloodIcmpv6RedToHclTerraform(struct!.red),
      isBlock: true,
      type: "struct",
      storageClassType: "DosProtectionProfileFloodIcmpv6Red",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DosProtectionProfileFloodIcmpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DosProtectionProfileFloodIcmpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._red?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.red = this._red?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DosProtectionProfileFloodIcmpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._red.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._red.internalValue = value.red;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // red - computed: true, optional: true, required: false
  private _red = new DosProtectionProfileFloodIcmpv6RedOutputReference(this, "red");
  public get red() {
    return this._red;
  }
  public putRed(value: DosProtectionProfileFloodIcmpv6Red) {
    this._red.internalValue = value;
  }
  public resetRed() {
    this._red.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redInput() {
    return this._red.internalValue;
  }
}
export interface DosProtectionProfileFloodOtherIpRedBlock {
  /**
  * Duration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#duration DosProtectionProfile#duration}
  */
  readonly duration?: number;
}

export function dosProtectionProfileFloodOtherIpRedBlockToTerraform(struct?: DosProtectionProfileFloodOtherIpRedBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
  }
}


export function dosProtectionProfileFloodOtherIpRedBlockToHclTerraform(struct?: DosProtectionProfileFloodOtherIpRedBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DosProtectionProfileFloodOtherIpRedBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DosProtectionProfileFloodOtherIpRedBlock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DosProtectionProfileFloodOtherIpRedBlock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
    }
  }

  // duration - computed: true, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }
}
export interface DosProtectionProfileFloodOtherIpRed {
  /**
  * Activate rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#activate_rate DosProtectionProfile#activate_rate}
  */
  readonly activateRate?: number;
  /**
  * Alarm rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#alarm_rate DosProtectionProfile#alarm_rate}
  */
  readonly alarmRate?: number;
  /**
  * Block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#block DosProtectionProfile#block}
  */
  readonly block?: DosProtectionProfileFloodOtherIpRedBlock;
  /**
  * Maximal rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#maximal_rate DosProtectionProfile#maximal_rate}
  */
  readonly maximalRate?: number;
}

export function dosProtectionProfileFloodOtherIpRedToTerraform(struct?: DosProtectionProfileFloodOtherIpRed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activate_rate: cdktf.numberToTerraform(struct!.activateRate),
    alarm_rate: cdktf.numberToTerraform(struct!.alarmRate),
    block: dosProtectionProfileFloodOtherIpRedBlockToTerraform(struct!.block),
    maximal_rate: cdktf.numberToTerraform(struct!.maximalRate),
  }
}


export function dosProtectionProfileFloodOtherIpRedToHclTerraform(struct?: DosProtectionProfileFloodOtherIpRed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activate_rate: {
      value: cdktf.numberToHclTerraform(struct!.activateRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alarm_rate: {
      value: cdktf.numberToHclTerraform(struct!.alarmRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    block: {
      value: dosProtectionProfileFloodOtherIpRedBlockToHclTerraform(struct!.block),
      isBlock: true,
      type: "struct",
      storageClassType: "DosProtectionProfileFloodOtherIpRedBlock",
    },
    maximal_rate: {
      value: cdktf.numberToHclTerraform(struct!.maximalRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DosProtectionProfileFloodOtherIpRedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DosProtectionProfileFloodOtherIpRed | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activateRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.activateRate = this._activateRate;
    }
    if (this._alarmRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmRate = this._alarmRate;
    }
    if (this._block?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.block = this._block?.internalValue;
    }
    if (this._maximalRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximalRate = this._maximalRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DosProtectionProfileFloodOtherIpRed | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activateRate = undefined;
      this._alarmRate = undefined;
      this._block.internalValue = undefined;
      this._maximalRate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activateRate = value.activateRate;
      this._alarmRate = value.alarmRate;
      this._block.internalValue = value.block;
      this._maximalRate = value.maximalRate;
    }
  }

  // activate_rate - computed: true, optional: true, required: false
  private _activateRate?: number; 
  public get activateRate() {
    return this.getNumberAttribute('activate_rate');
  }
  public set activateRate(value: number) {
    this._activateRate = value;
  }
  public resetActivateRate() {
    this._activateRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activateRateInput() {
    return this._activateRate;
  }

  // alarm_rate - computed: true, optional: true, required: false
  private _alarmRate?: number; 
  public get alarmRate() {
    return this.getNumberAttribute('alarm_rate');
  }
  public set alarmRate(value: number) {
    this._alarmRate = value;
  }
  public resetAlarmRate() {
    this._alarmRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmRateInput() {
    return this._alarmRate;
  }

  // block - computed: true, optional: true, required: false
  private _block = new DosProtectionProfileFloodOtherIpRedBlockOutputReference(this, "block");
  public get block() {
    return this._block;
  }
  public putBlock(value: DosProtectionProfileFloodOtherIpRedBlock) {
    this._block.internalValue = value;
  }
  public resetBlock() {
    this._block.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block.internalValue;
  }

  // maximal_rate - computed: true, optional: true, required: false
  private _maximalRate?: number; 
  public get maximalRate() {
    return this.getNumberAttribute('maximal_rate');
  }
  public set maximalRate(value: number) {
    this._maximalRate = value;
  }
  public resetMaximalRate() {
    this._maximalRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximalRateInput() {
    return this._maximalRate;
  }
}
export interface DosProtectionProfileFloodOtherIp {
  /**
  * Enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#enable DosProtectionProfile#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Red
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#red DosProtectionProfile#red}
  */
  readonly red?: DosProtectionProfileFloodOtherIpRed;
}

export function dosProtectionProfileFloodOtherIpToTerraform(struct?: DosProtectionProfileFloodOtherIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    red: dosProtectionProfileFloodOtherIpRedToTerraform(struct!.red),
  }
}


export function dosProtectionProfileFloodOtherIpToHclTerraform(struct?: DosProtectionProfileFloodOtherIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    red: {
      value: dosProtectionProfileFloodOtherIpRedToHclTerraform(struct!.red),
      isBlock: true,
      type: "struct",
      storageClassType: "DosProtectionProfileFloodOtherIpRed",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DosProtectionProfileFloodOtherIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DosProtectionProfileFloodOtherIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._red?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.red = this._red?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DosProtectionProfileFloodOtherIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._red.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._red.internalValue = value.red;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // red - computed: true, optional: true, required: false
  private _red = new DosProtectionProfileFloodOtherIpRedOutputReference(this, "red");
  public get red() {
    return this._red;
  }
  public putRed(value: DosProtectionProfileFloodOtherIpRed) {
    this._red.internalValue = value;
  }
  public resetRed() {
    this._red.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redInput() {
    return this._red.internalValue;
  }
}
export interface DosProtectionProfileFloodTcpSynRedBlock {
  /**
  * Duration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#duration DosProtectionProfile#duration}
  */
  readonly duration?: number;
}

export function dosProtectionProfileFloodTcpSynRedBlockToTerraform(struct?: DosProtectionProfileFloodTcpSynRedBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
  }
}


export function dosProtectionProfileFloodTcpSynRedBlockToHclTerraform(struct?: DosProtectionProfileFloodTcpSynRedBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DosProtectionProfileFloodTcpSynRedBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DosProtectionProfileFloodTcpSynRedBlock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DosProtectionProfileFloodTcpSynRedBlock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
    }
  }

  // duration - computed: true, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }
}
export interface DosProtectionProfileFloodTcpSynRed {
  /**
  * Activate rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#activate_rate DosProtectionProfile#activate_rate}
  */
  readonly activateRate?: number;
  /**
  * Alarm rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#alarm_rate DosProtectionProfile#alarm_rate}
  */
  readonly alarmRate?: number;
  /**
  * Block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#block DosProtectionProfile#block}
  */
  readonly block?: DosProtectionProfileFloodTcpSynRedBlock;
  /**
  * Maximal rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#maximal_rate DosProtectionProfile#maximal_rate}
  */
  readonly maximalRate?: number;
}

export function dosProtectionProfileFloodTcpSynRedToTerraform(struct?: DosProtectionProfileFloodTcpSynRed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activate_rate: cdktf.numberToTerraform(struct!.activateRate),
    alarm_rate: cdktf.numberToTerraform(struct!.alarmRate),
    block: dosProtectionProfileFloodTcpSynRedBlockToTerraform(struct!.block),
    maximal_rate: cdktf.numberToTerraform(struct!.maximalRate),
  }
}


export function dosProtectionProfileFloodTcpSynRedToHclTerraform(struct?: DosProtectionProfileFloodTcpSynRed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activate_rate: {
      value: cdktf.numberToHclTerraform(struct!.activateRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alarm_rate: {
      value: cdktf.numberToHclTerraform(struct!.alarmRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    block: {
      value: dosProtectionProfileFloodTcpSynRedBlockToHclTerraform(struct!.block),
      isBlock: true,
      type: "struct",
      storageClassType: "DosProtectionProfileFloodTcpSynRedBlock",
    },
    maximal_rate: {
      value: cdktf.numberToHclTerraform(struct!.maximalRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DosProtectionProfileFloodTcpSynRedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DosProtectionProfileFloodTcpSynRed | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activateRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.activateRate = this._activateRate;
    }
    if (this._alarmRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmRate = this._alarmRate;
    }
    if (this._block?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.block = this._block?.internalValue;
    }
    if (this._maximalRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximalRate = this._maximalRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DosProtectionProfileFloodTcpSynRed | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activateRate = undefined;
      this._alarmRate = undefined;
      this._block.internalValue = undefined;
      this._maximalRate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activateRate = value.activateRate;
      this._alarmRate = value.alarmRate;
      this._block.internalValue = value.block;
      this._maximalRate = value.maximalRate;
    }
  }

  // activate_rate - computed: true, optional: true, required: false
  private _activateRate?: number; 
  public get activateRate() {
    return this.getNumberAttribute('activate_rate');
  }
  public set activateRate(value: number) {
    this._activateRate = value;
  }
  public resetActivateRate() {
    this._activateRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activateRateInput() {
    return this._activateRate;
  }

  // alarm_rate - computed: true, optional: true, required: false
  private _alarmRate?: number; 
  public get alarmRate() {
    return this.getNumberAttribute('alarm_rate');
  }
  public set alarmRate(value: number) {
    this._alarmRate = value;
  }
  public resetAlarmRate() {
    this._alarmRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmRateInput() {
    return this._alarmRate;
  }

  // block - computed: true, optional: true, required: false
  private _block = new DosProtectionProfileFloodTcpSynRedBlockOutputReference(this, "block");
  public get block() {
    return this._block;
  }
  public putBlock(value: DosProtectionProfileFloodTcpSynRedBlock) {
    this._block.internalValue = value;
  }
  public resetBlock() {
    this._block.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block.internalValue;
  }

  // maximal_rate - computed: true, optional: true, required: false
  private _maximalRate?: number; 
  public get maximalRate() {
    return this.getNumberAttribute('maximal_rate');
  }
  public set maximalRate(value: number) {
    this._maximalRate = value;
  }
  public resetMaximalRate() {
    this._maximalRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximalRateInput() {
    return this._maximalRate;
  }
}
export interface DosProtectionProfileFloodTcpSynSynCookiesBlock {
  /**
  * Duration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#duration DosProtectionProfile#duration}
  */
  readonly duration?: number;
}

export function dosProtectionProfileFloodTcpSynSynCookiesBlockToTerraform(struct?: DosProtectionProfileFloodTcpSynSynCookiesBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
  }
}


export function dosProtectionProfileFloodTcpSynSynCookiesBlockToHclTerraform(struct?: DosProtectionProfileFloodTcpSynSynCookiesBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DosProtectionProfileFloodTcpSynSynCookiesBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DosProtectionProfileFloodTcpSynSynCookiesBlock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DosProtectionProfileFloodTcpSynSynCookiesBlock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
    }
  }

  // duration - computed: true, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }
}
export interface DosProtectionProfileFloodTcpSynSynCookies {
  /**
  * Activate rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#activate_rate DosProtectionProfile#activate_rate}
  */
  readonly activateRate?: number;
  /**
  * Alarm rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#alarm_rate DosProtectionProfile#alarm_rate}
  */
  readonly alarmRate?: number;
  /**
  * Block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#block DosProtectionProfile#block}
  */
  readonly block?: DosProtectionProfileFloodTcpSynSynCookiesBlock;
  /**
  * Maximal rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#maximal_rate DosProtectionProfile#maximal_rate}
  */
  readonly maximalRate?: number;
}

export function dosProtectionProfileFloodTcpSynSynCookiesToTerraform(struct?: DosProtectionProfileFloodTcpSynSynCookies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activate_rate: cdktf.numberToTerraform(struct!.activateRate),
    alarm_rate: cdktf.numberToTerraform(struct!.alarmRate),
    block: dosProtectionProfileFloodTcpSynSynCookiesBlockToTerraform(struct!.block),
    maximal_rate: cdktf.numberToTerraform(struct!.maximalRate),
  }
}


export function dosProtectionProfileFloodTcpSynSynCookiesToHclTerraform(struct?: DosProtectionProfileFloodTcpSynSynCookies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activate_rate: {
      value: cdktf.numberToHclTerraform(struct!.activateRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alarm_rate: {
      value: cdktf.numberToHclTerraform(struct!.alarmRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    block: {
      value: dosProtectionProfileFloodTcpSynSynCookiesBlockToHclTerraform(struct!.block),
      isBlock: true,
      type: "struct",
      storageClassType: "DosProtectionProfileFloodTcpSynSynCookiesBlock",
    },
    maximal_rate: {
      value: cdktf.numberToHclTerraform(struct!.maximalRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DosProtectionProfileFloodTcpSynSynCookiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DosProtectionProfileFloodTcpSynSynCookies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activateRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.activateRate = this._activateRate;
    }
    if (this._alarmRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmRate = this._alarmRate;
    }
    if (this._block?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.block = this._block?.internalValue;
    }
    if (this._maximalRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximalRate = this._maximalRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DosProtectionProfileFloodTcpSynSynCookies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activateRate = undefined;
      this._alarmRate = undefined;
      this._block.internalValue = undefined;
      this._maximalRate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activateRate = value.activateRate;
      this._alarmRate = value.alarmRate;
      this._block.internalValue = value.block;
      this._maximalRate = value.maximalRate;
    }
  }

  // activate_rate - computed: true, optional: true, required: false
  private _activateRate?: number; 
  public get activateRate() {
    return this.getNumberAttribute('activate_rate');
  }
  public set activateRate(value: number) {
    this._activateRate = value;
  }
  public resetActivateRate() {
    this._activateRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activateRateInput() {
    return this._activateRate;
  }

  // alarm_rate - computed: true, optional: true, required: false
  private _alarmRate?: number; 
  public get alarmRate() {
    return this.getNumberAttribute('alarm_rate');
  }
  public set alarmRate(value: number) {
    this._alarmRate = value;
  }
  public resetAlarmRate() {
    this._alarmRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmRateInput() {
    return this._alarmRate;
  }

  // block - computed: true, optional: true, required: false
  private _block = new DosProtectionProfileFloodTcpSynSynCookiesBlockOutputReference(this, "block");
  public get block() {
    return this._block;
  }
  public putBlock(value: DosProtectionProfileFloodTcpSynSynCookiesBlock) {
    this._block.internalValue = value;
  }
  public resetBlock() {
    this._block.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block.internalValue;
  }

  // maximal_rate - computed: true, optional: true, required: false
  private _maximalRate?: number; 
  public get maximalRate() {
    return this.getNumberAttribute('maximal_rate');
  }
  public set maximalRate(value: number) {
    this._maximalRate = value;
  }
  public resetMaximalRate() {
    this._maximalRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximalRateInput() {
    return this._maximalRate;
  }
}
export interface DosProtectionProfileFloodTcpSyn {
  /**
  * Enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#enable DosProtectionProfile#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Red
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#red DosProtectionProfile#red}
  */
  readonly red?: DosProtectionProfileFloodTcpSynRed;
  /**
  * Syn cookies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#syn_cookies DosProtectionProfile#syn_cookies}
  */
  readonly synCookies?: DosProtectionProfileFloodTcpSynSynCookies;
}

export function dosProtectionProfileFloodTcpSynToTerraform(struct?: DosProtectionProfileFloodTcpSyn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    red: dosProtectionProfileFloodTcpSynRedToTerraform(struct!.red),
    syn_cookies: dosProtectionProfileFloodTcpSynSynCookiesToTerraform(struct!.synCookies),
  }
}


export function dosProtectionProfileFloodTcpSynToHclTerraform(struct?: DosProtectionProfileFloodTcpSyn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    red: {
      value: dosProtectionProfileFloodTcpSynRedToHclTerraform(struct!.red),
      isBlock: true,
      type: "struct",
      storageClassType: "DosProtectionProfileFloodTcpSynRed",
    },
    syn_cookies: {
      value: dosProtectionProfileFloodTcpSynSynCookiesToHclTerraform(struct!.synCookies),
      isBlock: true,
      type: "struct",
      storageClassType: "DosProtectionProfileFloodTcpSynSynCookies",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DosProtectionProfileFloodTcpSynOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DosProtectionProfileFloodTcpSyn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._red?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.red = this._red?.internalValue;
    }
    if (this._synCookies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.synCookies = this._synCookies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DosProtectionProfileFloodTcpSyn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._red.internalValue = undefined;
      this._synCookies.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._red.internalValue = value.red;
      this._synCookies.internalValue = value.synCookies;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // red - computed: true, optional: true, required: false
  private _red = new DosProtectionProfileFloodTcpSynRedOutputReference(this, "red");
  public get red() {
    return this._red;
  }
  public putRed(value: DosProtectionProfileFloodTcpSynRed) {
    this._red.internalValue = value;
  }
  public resetRed() {
    this._red.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redInput() {
    return this._red.internalValue;
  }

  // syn_cookies - computed: true, optional: true, required: false
  private _synCookies = new DosProtectionProfileFloodTcpSynSynCookiesOutputReference(this, "syn_cookies");
  public get synCookies() {
    return this._synCookies;
  }
  public putSynCookies(value: DosProtectionProfileFloodTcpSynSynCookies) {
    this._synCookies.internalValue = value;
  }
  public resetSynCookies() {
    this._synCookies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synCookiesInput() {
    return this._synCookies.internalValue;
  }
}
export interface DosProtectionProfileFloodUdpRedBlock {
  /**
  * Duration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#duration DosProtectionProfile#duration}
  */
  readonly duration?: number;
}

export function dosProtectionProfileFloodUdpRedBlockToTerraform(struct?: DosProtectionProfileFloodUdpRedBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
  }
}


export function dosProtectionProfileFloodUdpRedBlockToHclTerraform(struct?: DosProtectionProfileFloodUdpRedBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DosProtectionProfileFloodUdpRedBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DosProtectionProfileFloodUdpRedBlock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DosProtectionProfileFloodUdpRedBlock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
    }
  }

  // duration - computed: true, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }
}
export interface DosProtectionProfileFloodUdpRed {
  /**
  * Activate rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#activate_rate DosProtectionProfile#activate_rate}
  */
  readonly activateRate?: number;
  /**
  * Alarm rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#alarm_rate DosProtectionProfile#alarm_rate}
  */
  readonly alarmRate?: number;
  /**
  * Block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#block DosProtectionProfile#block}
  */
  readonly block?: DosProtectionProfileFloodUdpRedBlock;
  /**
  * Maximal rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#maximal_rate DosProtectionProfile#maximal_rate}
  */
  readonly maximalRate?: number;
}

export function dosProtectionProfileFloodUdpRedToTerraform(struct?: DosProtectionProfileFloodUdpRed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activate_rate: cdktf.numberToTerraform(struct!.activateRate),
    alarm_rate: cdktf.numberToTerraform(struct!.alarmRate),
    block: dosProtectionProfileFloodUdpRedBlockToTerraform(struct!.block),
    maximal_rate: cdktf.numberToTerraform(struct!.maximalRate),
  }
}


export function dosProtectionProfileFloodUdpRedToHclTerraform(struct?: DosProtectionProfileFloodUdpRed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activate_rate: {
      value: cdktf.numberToHclTerraform(struct!.activateRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alarm_rate: {
      value: cdktf.numberToHclTerraform(struct!.alarmRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    block: {
      value: dosProtectionProfileFloodUdpRedBlockToHclTerraform(struct!.block),
      isBlock: true,
      type: "struct",
      storageClassType: "DosProtectionProfileFloodUdpRedBlock",
    },
    maximal_rate: {
      value: cdktf.numberToHclTerraform(struct!.maximalRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DosProtectionProfileFloodUdpRedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DosProtectionProfileFloodUdpRed | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activateRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.activateRate = this._activateRate;
    }
    if (this._alarmRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmRate = this._alarmRate;
    }
    if (this._block?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.block = this._block?.internalValue;
    }
    if (this._maximalRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximalRate = this._maximalRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DosProtectionProfileFloodUdpRed | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activateRate = undefined;
      this._alarmRate = undefined;
      this._block.internalValue = undefined;
      this._maximalRate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activateRate = value.activateRate;
      this._alarmRate = value.alarmRate;
      this._block.internalValue = value.block;
      this._maximalRate = value.maximalRate;
    }
  }

  // activate_rate - computed: true, optional: true, required: false
  private _activateRate?: number; 
  public get activateRate() {
    return this.getNumberAttribute('activate_rate');
  }
  public set activateRate(value: number) {
    this._activateRate = value;
  }
  public resetActivateRate() {
    this._activateRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activateRateInput() {
    return this._activateRate;
  }

  // alarm_rate - computed: true, optional: true, required: false
  private _alarmRate?: number; 
  public get alarmRate() {
    return this.getNumberAttribute('alarm_rate');
  }
  public set alarmRate(value: number) {
    this._alarmRate = value;
  }
  public resetAlarmRate() {
    this._alarmRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmRateInput() {
    return this._alarmRate;
  }

  // block - computed: true, optional: true, required: false
  private _block = new DosProtectionProfileFloodUdpRedBlockOutputReference(this, "block");
  public get block() {
    return this._block;
  }
  public putBlock(value: DosProtectionProfileFloodUdpRedBlock) {
    this._block.internalValue = value;
  }
  public resetBlock() {
    this._block.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block.internalValue;
  }

  // maximal_rate - computed: true, optional: true, required: false
  private _maximalRate?: number; 
  public get maximalRate() {
    return this.getNumberAttribute('maximal_rate');
  }
  public set maximalRate(value: number) {
    this._maximalRate = value;
  }
  public resetMaximalRate() {
    this._maximalRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximalRateInput() {
    return this._maximalRate;
  }
}
export interface DosProtectionProfileFloodUdp {
  /**
  * Enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#enable DosProtectionProfile#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Red
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#red DosProtectionProfile#red}
  */
  readonly red?: DosProtectionProfileFloodUdpRed;
}

export function dosProtectionProfileFloodUdpToTerraform(struct?: DosProtectionProfileFloodUdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    red: dosProtectionProfileFloodUdpRedToTerraform(struct!.red),
  }
}


export function dosProtectionProfileFloodUdpToHclTerraform(struct?: DosProtectionProfileFloodUdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    red: {
      value: dosProtectionProfileFloodUdpRedToHclTerraform(struct!.red),
      isBlock: true,
      type: "struct",
      storageClassType: "DosProtectionProfileFloodUdpRed",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DosProtectionProfileFloodUdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DosProtectionProfileFloodUdp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._red?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.red = this._red?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DosProtectionProfileFloodUdp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._red.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._red.internalValue = value.red;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // red - computed: true, optional: true, required: false
  private _red = new DosProtectionProfileFloodUdpRedOutputReference(this, "red");
  public get red() {
    return this._red;
  }
  public putRed(value: DosProtectionProfileFloodUdpRed) {
    this._red.internalValue = value;
  }
  public resetRed() {
    this._red.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redInput() {
    return this._red.internalValue;
  }
}
export interface DosProtectionProfileFlood {
  /**
  * Icmp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#icmp DosProtectionProfile#icmp}
  */
  readonly icmp?: DosProtectionProfileFloodIcmp;
  /**
  * Icmpv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#icmpv6 DosProtectionProfile#icmpv6}
  */
  readonly icmpv6?: DosProtectionProfileFloodIcmpv6;
  /**
  * Other ip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#other_ip DosProtectionProfile#other_ip}
  */
  readonly otherIp?: DosProtectionProfileFloodOtherIp;
  /**
  * Tcp syn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#tcp_syn DosProtectionProfile#tcp_syn}
  */
  readonly tcpSyn?: DosProtectionProfileFloodTcpSyn;
  /**
  * Udp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#udp DosProtectionProfile#udp}
  */
  readonly udp?: DosProtectionProfileFloodUdp;
}

export function dosProtectionProfileFloodToTerraform(struct?: DosProtectionProfileFlood | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmp: dosProtectionProfileFloodIcmpToTerraform(struct!.icmp),
    icmpv6: dosProtectionProfileFloodIcmpv6ToTerraform(struct!.icmpv6),
    other_ip: dosProtectionProfileFloodOtherIpToTerraform(struct!.otherIp),
    tcp_syn: dosProtectionProfileFloodTcpSynToTerraform(struct!.tcpSyn),
    udp: dosProtectionProfileFloodUdpToTerraform(struct!.udp),
  }
}


export function dosProtectionProfileFloodToHclTerraform(struct?: DosProtectionProfileFlood | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icmp: {
      value: dosProtectionProfileFloodIcmpToHclTerraform(struct!.icmp),
      isBlock: true,
      type: "struct",
      storageClassType: "DosProtectionProfileFloodIcmp",
    },
    icmpv6: {
      value: dosProtectionProfileFloodIcmpv6ToHclTerraform(struct!.icmpv6),
      isBlock: true,
      type: "struct",
      storageClassType: "DosProtectionProfileFloodIcmpv6",
    },
    other_ip: {
      value: dosProtectionProfileFloodOtherIpToHclTerraform(struct!.otherIp),
      isBlock: true,
      type: "struct",
      storageClassType: "DosProtectionProfileFloodOtherIp",
    },
    tcp_syn: {
      value: dosProtectionProfileFloodTcpSynToHclTerraform(struct!.tcpSyn),
      isBlock: true,
      type: "struct",
      storageClassType: "DosProtectionProfileFloodTcpSyn",
    },
    udp: {
      value: dosProtectionProfileFloodUdpToHclTerraform(struct!.udp),
      isBlock: true,
      type: "struct",
      storageClassType: "DosProtectionProfileFloodUdp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DosProtectionProfileFloodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DosProtectionProfileFlood | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmp = this._icmp?.internalValue;
    }
    if (this._icmpv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv6 = this._icmpv6?.internalValue;
    }
    if (this._otherIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherIp = this._otherIp?.internalValue;
    }
    if (this._tcpSyn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSyn = this._tcpSyn?.internalValue;
    }
    if (this._udp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udp = this._udp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DosProtectionProfileFlood | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icmp.internalValue = undefined;
      this._icmpv6.internalValue = undefined;
      this._otherIp.internalValue = undefined;
      this._tcpSyn.internalValue = undefined;
      this._udp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icmp.internalValue = value.icmp;
      this._icmpv6.internalValue = value.icmpv6;
      this._otherIp.internalValue = value.otherIp;
      this._tcpSyn.internalValue = value.tcpSyn;
      this._udp.internalValue = value.udp;
    }
  }

  // icmp - computed: true, optional: true, required: false
  private _icmp = new DosProtectionProfileFloodIcmpOutputReference(this, "icmp");
  public get icmp() {
    return this._icmp;
  }
  public putIcmp(value: DosProtectionProfileFloodIcmp) {
    this._icmp.internalValue = value;
  }
  public resetIcmp() {
    this._icmp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpInput() {
    return this._icmp.internalValue;
  }

  // icmpv6 - computed: true, optional: true, required: false
  private _icmpv6 = new DosProtectionProfileFloodIcmpv6OutputReference(this, "icmpv6");
  public get icmpv6() {
    return this._icmpv6;
  }
  public putIcmpv6(value: DosProtectionProfileFloodIcmpv6) {
    this._icmpv6.internalValue = value;
  }
  public resetIcmpv6() {
    this._icmpv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6Input() {
    return this._icmpv6.internalValue;
  }

  // other_ip - computed: true, optional: true, required: false
  private _otherIp = new DosProtectionProfileFloodOtherIpOutputReference(this, "other_ip");
  public get otherIp() {
    return this._otherIp;
  }
  public putOtherIp(value: DosProtectionProfileFloodOtherIp) {
    this._otherIp.internalValue = value;
  }
  public resetOtherIp() {
    this._otherIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherIpInput() {
    return this._otherIp.internalValue;
  }

  // tcp_syn - computed: true, optional: true, required: false
  private _tcpSyn = new DosProtectionProfileFloodTcpSynOutputReference(this, "tcp_syn");
  public get tcpSyn() {
    return this._tcpSyn;
  }
  public putTcpSyn(value: DosProtectionProfileFloodTcpSyn) {
    this._tcpSyn.internalValue = value;
  }
  public resetTcpSyn() {
    this._tcpSyn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynInput() {
    return this._tcpSyn.internalValue;
  }

  // udp - computed: true, optional: true, required: false
  private _udp = new DosProtectionProfileFloodUdpOutputReference(this, "udp");
  public get udp() {
    return this._udp;
  }
  public putUdp(value: DosProtectionProfileFloodUdp) {
    this._udp.internalValue = value;
  }
  public resetUdp() {
    this._udp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpInput() {
    return this._udp.internalValue;
  }
}
export interface DosProtectionProfileResourceSessions {
  /**
  * Enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#enabled DosProtectionProfile#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Max concurrent limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#max_concurrent_limit DosProtectionProfile#max_concurrent_limit}
  */
  readonly maxConcurrentLimit?: number;
}

export function dosProtectionProfileResourceSessionsToTerraform(struct?: DosProtectionProfileResourceSessions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_concurrent_limit: cdktf.numberToTerraform(struct!.maxConcurrentLimit),
  }
}


export function dosProtectionProfileResourceSessionsToHclTerraform(struct?: DosProtectionProfileResourceSessions | cdktf.IResolvable): any {
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
    max_concurrent_limit: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrentLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DosProtectionProfileResourceSessionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DosProtectionProfileResourceSessions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxConcurrentLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentLimit = this._maxConcurrentLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DosProtectionProfileResourceSessions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._maxConcurrentLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._maxConcurrentLimit = value.maxConcurrentLimit;
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

  // max_concurrent_limit - computed: true, optional: true, required: false
  private _maxConcurrentLimit?: number; 
  public get maxConcurrentLimit() {
    return this.getNumberAttribute('max_concurrent_limit');
  }
  public set maxConcurrentLimit(value: number) {
    this._maxConcurrentLimit = value;
  }
  public resetMaxConcurrentLimit() {
    this._maxConcurrentLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentLimitInput() {
    return this._maxConcurrentLimit;
  }
}
export interface DosProtectionProfileResource {
  /**
  * Sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#sessions DosProtectionProfile#sessions}
  */
  readonly sessions?: DosProtectionProfileResourceSessions;
}

export function dosProtectionProfileResourceToTerraform(struct?: DosProtectionProfileResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sessions: dosProtectionProfileResourceSessionsToTerraform(struct!.sessions),
  }
}


export function dosProtectionProfileResourceToHclTerraform(struct?: DosProtectionProfileResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sessions: {
      value: dosProtectionProfileResourceSessionsToHclTerraform(struct!.sessions),
      isBlock: true,
      type: "struct",
      storageClassType: "DosProtectionProfileResourceSessions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DosProtectionProfileResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DosProtectionProfileResource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sessions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessions = this._sessions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DosProtectionProfileResource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sessions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sessions.internalValue = value.sessions;
    }
  }

  // sessions - computed: true, optional: true, required: false
  private _sessions = new DosProtectionProfileResourceSessionsOutputReference(this, "sessions");
  public get sessions() {
    return this._sessions;
  }
  public putSessions(value: DosProtectionProfileResourceSessions) {
    this._sessions.internalValue = value;
  }
  public resetSessions() {
    this._sessions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionsInput() {
    return this._sessions.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile scm_dos_protection_profile}
*/
export class DosProtectionProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_dos_protection_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DosProtectionProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DosProtectionProfile to import
  * @param importFromId The id of the existing DosProtectionProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DosProtectionProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_dos_protection_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dos_protection_profile scm_dos_protection_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DosProtectionProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DosProtectionProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_dos_protection_profile',
      terraformGeneratorMetadata: {
        providerName: 'scm',
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
    this._description = config.description;
    this._device = config.device;
    this._flood.internalValue = config.flood;
    this._folder = config.folder;
    this._name = config.name;
    this._resource.internalValue = config.resource;
    this._snippet = config.snippet;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
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

  // flood - computed: true, optional: true, required: false
  private _flood = new DosProtectionProfileFloodOutputReference(this, "flood");
  public get flood() {
    return this._flood;
  }
  public putFlood(value: DosProtectionProfileFlood) {
    this._flood.internalValue = value;
  }
  public resetFlood() {
    this._flood.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floodInput() {
    return this._flood.internalValue;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // resource - computed: true, optional: true, required: false
  private _resource = new DosProtectionProfileResourceOutputReference(this, "resource");
  public get resource() {
    return this._resource;
  }
  public putResource(value: DosProtectionProfileResource) {
    this._resource.internalValue = value;
  }
  public resetResource() {
    this._resource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource.internalValue;
  }

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      device: cdktf.stringToTerraform(this._device),
      flood: dosProtectionProfileFloodToTerraform(this._flood.internalValue),
      folder: cdktf.stringToTerraform(this._folder),
      name: cdktf.stringToTerraform(this._name),
      resource: dosProtectionProfileResourceToTerraform(this._resource.internalValue),
      snippet: cdktf.stringToTerraform(this._snippet),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      flood: {
        value: dosProtectionProfileFloodToHclTerraform(this._flood.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DosProtectionProfileFlood",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
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
      resource: {
        value: dosProtectionProfileResourceToHclTerraform(this._resource.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DosProtectionProfileResource",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
