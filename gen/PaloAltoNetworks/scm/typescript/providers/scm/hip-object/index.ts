// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HipObjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Anti malware
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#anti_malware HipObject#anti_malware}
  */
  readonly antiMalware?: HipObjectAntiMalware;
  /**
  * Certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#certificate HipObject#certificate}
  */
  readonly certificate?: HipObjectCertificate;
  /**
  * Custom checks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#custom_checks HipObject#custom_checks}
  */
  readonly customChecks?: HipObjectCustomChecks;
  /**
  * Data loss prevention
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#data_loss_prevention HipObject#data_loss_prevention}
  */
  readonly dataLossPrevention?: HipObjectDataLossPrevention;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#description HipObject#description}
  */
  readonly description?: string;
  /**
  * The device in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#device HipObject#device}
  */
  readonly device?: string;
  /**
  * Disk backup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#disk_backup HipObject#disk_backup}
  */
  readonly diskBackup?: HipObjectDiskBackup;
  /**
  * Disk encryption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#disk_encryption HipObject#disk_encryption}
  */
  readonly diskEncryption?: HipObjectDiskEncryption;
  /**
  * Firewall
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#firewall HipObject#firewall}
  */
  readonly firewall?: HipObjectFirewall;
  /**
  * The folder in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#folder HipObject#folder}
  */
  readonly folder?: string;
  /**
  * Host info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#host_info HipObject#host_info}
  */
  readonly hostInfo?: HipObjectHostInfo;
  /**
  * Mobile device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#mobile_device HipObject#mobile_device}
  */
  readonly mobileDevice?: HipObjectMobileDevice;
  /**
  * The name of the HIP object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#name HipObject#name}
  */
  readonly name: string;
  /**
  * Network info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#network_info HipObject#network_info}
  */
  readonly networkInfo?: HipObjectNetworkInfo;
  /**
  * Patch management
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#patch_management HipObject#patch_management}
  */
  readonly patchManagement?: HipObjectPatchManagement;
  /**
  * The snippet in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#snippet HipObject#snippet}
  */
  readonly snippet?: string;
}
export interface HipObjectAntiMalwareCriteriaLastScanTimeNotAvailable {
}

export function hipObjectAntiMalwareCriteriaLastScanTimeNotAvailableToTerraform(struct?: HipObjectAntiMalwareCriteriaLastScanTimeNotAvailable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function hipObjectAntiMalwareCriteriaLastScanTimeNotAvailableToHclTerraform(struct?: HipObjectAntiMalwareCriteriaLastScanTimeNotAvailable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class HipObjectAntiMalwareCriteriaLastScanTimeNotAvailableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectAntiMalwareCriteriaLastScanTimeNotAvailable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectAntiMalwareCriteriaLastScanTimeNotAvailable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface HipObjectAntiMalwareCriteriaLastScanTimeNotWithin {
  /**
  * specify time in days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#days HipObject#days}
  */
  readonly days?: number;
  /**
  * specify time in hours
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#hours HipObject#hours}
  */
  readonly hours?: number;
}

export function hipObjectAntiMalwareCriteriaLastScanTimeNotWithinToTerraform(struct?: HipObjectAntiMalwareCriteriaLastScanTimeNotWithin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    hours: cdktf.numberToTerraform(struct!.hours),
  }
}


export function hipObjectAntiMalwareCriteriaLastScanTimeNotWithinToHclTerraform(struct?: HipObjectAntiMalwareCriteriaLastScanTimeNotWithin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectAntiMalwareCriteriaLastScanTimeNotWithinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectAntiMalwareCriteriaLastScanTimeNotWithin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectAntiMalwareCriteriaLastScanTimeNotWithin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._days = undefined;
      this._hours = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._days = value.days;
      this._hours = value.hours;
    }
  }

  // days - computed: true, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // hours - computed: true, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }
}
export interface HipObjectAntiMalwareCriteriaLastScanTimeWithin {
  /**
  * specify time in days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#days HipObject#days}
  */
  readonly days?: number;
  /**
  * specify time in hours
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#hours HipObject#hours}
  */
  readonly hours?: number;
}

export function hipObjectAntiMalwareCriteriaLastScanTimeWithinToTerraform(struct?: HipObjectAntiMalwareCriteriaLastScanTimeWithin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    hours: cdktf.numberToTerraform(struct!.hours),
  }
}


export function hipObjectAntiMalwareCriteriaLastScanTimeWithinToHclTerraform(struct?: HipObjectAntiMalwareCriteriaLastScanTimeWithin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectAntiMalwareCriteriaLastScanTimeWithinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectAntiMalwareCriteriaLastScanTimeWithin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectAntiMalwareCriteriaLastScanTimeWithin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._days = undefined;
      this._hours = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._days = value.days;
      this._hours = value.hours;
    }
  }

  // days - computed: true, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // hours - computed: true, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }
}
export interface HipObjectAntiMalwareCriteriaLastScanTime {
  /**
  * Not available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#not_available HipObject#not_available}
  */
  readonly notAvailable?: HipObjectAntiMalwareCriteriaLastScanTimeNotAvailable;
  /**
  * Not within
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#not_within HipObject#not_within}
  */
  readonly notWithin?: HipObjectAntiMalwareCriteriaLastScanTimeNotWithin;
  /**
  * Within
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#within HipObject#within}
  */
  readonly within?: HipObjectAntiMalwareCriteriaLastScanTimeWithin;
}

export function hipObjectAntiMalwareCriteriaLastScanTimeToTerraform(struct?: HipObjectAntiMalwareCriteriaLastScanTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    not_available: hipObjectAntiMalwareCriteriaLastScanTimeNotAvailableToTerraform(struct!.notAvailable),
    not_within: hipObjectAntiMalwareCriteriaLastScanTimeNotWithinToTerraform(struct!.notWithin),
    within: hipObjectAntiMalwareCriteriaLastScanTimeWithinToTerraform(struct!.within),
  }
}


export function hipObjectAntiMalwareCriteriaLastScanTimeToHclTerraform(struct?: HipObjectAntiMalwareCriteriaLastScanTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    not_available: {
      value: hipObjectAntiMalwareCriteriaLastScanTimeNotAvailableToHclTerraform(struct!.notAvailable),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectAntiMalwareCriteriaLastScanTimeNotAvailable",
    },
    not_within: {
      value: hipObjectAntiMalwareCriteriaLastScanTimeNotWithinToHclTerraform(struct!.notWithin),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectAntiMalwareCriteriaLastScanTimeNotWithin",
    },
    within: {
      value: hipObjectAntiMalwareCriteriaLastScanTimeWithinToHclTerraform(struct!.within),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectAntiMalwareCriteriaLastScanTimeWithin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectAntiMalwareCriteriaLastScanTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectAntiMalwareCriteriaLastScanTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notAvailable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notAvailable = this._notAvailable?.internalValue;
    }
    if (this._notWithin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notWithin = this._notWithin?.internalValue;
    }
    if (this._within?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.within = this._within?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectAntiMalwareCriteriaLastScanTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notAvailable.internalValue = undefined;
      this._notWithin.internalValue = undefined;
      this._within.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notAvailable.internalValue = value.notAvailable;
      this._notWithin.internalValue = value.notWithin;
      this._within.internalValue = value.within;
    }
  }

  // not_available - computed: true, optional: true, required: false
  private _notAvailable = new HipObjectAntiMalwareCriteriaLastScanTimeNotAvailableOutputReference(this, "not_available");
  public get notAvailable() {
    return this._notAvailable;
  }
  public putNotAvailable(value: HipObjectAntiMalwareCriteriaLastScanTimeNotAvailable) {
    this._notAvailable.internalValue = value;
  }
  public resetNotAvailable() {
    this._notAvailable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notAvailableInput() {
    return this._notAvailable.internalValue;
  }

  // not_within - computed: true, optional: true, required: false
  private _notWithin = new HipObjectAntiMalwareCriteriaLastScanTimeNotWithinOutputReference(this, "not_within");
  public get notWithin() {
    return this._notWithin;
  }
  public putNotWithin(value: HipObjectAntiMalwareCriteriaLastScanTimeNotWithin) {
    this._notWithin.internalValue = value;
  }
  public resetNotWithin() {
    this._notWithin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notWithinInput() {
    return this._notWithin.internalValue;
  }

  // within - computed: true, optional: true, required: false
  private _within = new HipObjectAntiMalwareCriteriaLastScanTimeWithinOutputReference(this, "within");
  public get within() {
    return this._within;
  }
  public putWithin(value: HipObjectAntiMalwareCriteriaLastScanTimeWithin) {
    this._within.internalValue = value;
  }
  public resetWithin() {
    this._within.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withinInput() {
    return this._within.internalValue;
  }
}
export interface HipObjectAntiMalwareCriteriaProductVersionNotWithin {
  /**
  * versions range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#versions HipObject#versions}
  */
  readonly versions: number;
}

export function hipObjectAntiMalwareCriteriaProductVersionNotWithinToTerraform(struct?: HipObjectAntiMalwareCriteriaProductVersionNotWithin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    versions: cdktf.numberToTerraform(struct!.versions),
  }
}


export function hipObjectAntiMalwareCriteriaProductVersionNotWithinToHclTerraform(struct?: HipObjectAntiMalwareCriteriaProductVersionNotWithin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    versions: {
      value: cdktf.numberToHclTerraform(struct!.versions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectAntiMalwareCriteriaProductVersionNotWithinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectAntiMalwareCriteriaProductVersionNotWithin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._versions !== undefined) {
      hasAnyValues = true;
      internalValueResult.versions = this._versions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectAntiMalwareCriteriaProductVersionNotWithin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._versions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._versions = value.versions;
    }
  }

  // versions - computed: true, optional: false, required: true
  private _versions?: number; 
  public get versions() {
    return this.getNumberAttribute('versions');
  }
  public set versions(value: number) {
    this._versions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionsInput() {
    return this._versions;
  }
}
export interface HipObjectAntiMalwareCriteriaProductVersionWithin {
  /**
  * versions range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#versions HipObject#versions}
  */
  readonly versions: number;
}

export function hipObjectAntiMalwareCriteriaProductVersionWithinToTerraform(struct?: HipObjectAntiMalwareCriteriaProductVersionWithin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    versions: cdktf.numberToTerraform(struct!.versions),
  }
}


export function hipObjectAntiMalwareCriteriaProductVersionWithinToHclTerraform(struct?: HipObjectAntiMalwareCriteriaProductVersionWithin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    versions: {
      value: cdktf.numberToHclTerraform(struct!.versions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectAntiMalwareCriteriaProductVersionWithinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectAntiMalwareCriteriaProductVersionWithin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._versions !== undefined) {
      hasAnyValues = true;
      internalValueResult.versions = this._versions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectAntiMalwareCriteriaProductVersionWithin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._versions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._versions = value.versions;
    }
  }

  // versions - computed: true, optional: false, required: true
  private _versions?: number; 
  public get versions() {
    return this.getNumberAttribute('versions');
  }
  public set versions(value: number) {
    this._versions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionsInput() {
    return this._versions;
  }
}
export interface HipObjectAntiMalwareCriteriaProductVersion {
  /**
  * Contains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#contains HipObject#contains}
  */
  readonly contains?: string;
  /**
  * Greater equal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#greater_equal HipObject#greater_equal}
  */
  readonly greaterEqual?: string;
  /**
  * Greater than
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#greater_than HipObject#greater_than}
  */
  readonly greaterThan?: string;
  /**
  * Is
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#is HipObject#is}
  */
  readonly is?: string;
  /**
  * Is not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#is_not HipObject#is_not}
  */
  readonly isNot?: string;
  /**
  * Less equal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#less_equal HipObject#less_equal}
  */
  readonly lessEqual?: string;
  /**
  * Less than
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#less_than HipObject#less_than}
  */
  readonly lessThan?: string;
  /**
  * Not within
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#not_within HipObject#not_within}
  */
  readonly notWithin?: HipObjectAntiMalwareCriteriaProductVersionNotWithin;
  /**
  * Within
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#within HipObject#within}
  */
  readonly within?: HipObjectAntiMalwareCriteriaProductVersionWithin;
}

export function hipObjectAntiMalwareCriteriaProductVersionToTerraform(struct?: HipObjectAntiMalwareCriteriaProductVersion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    greater_equal: cdktf.stringToTerraform(struct!.greaterEqual),
    greater_than: cdktf.stringToTerraform(struct!.greaterThan),
    is: cdktf.stringToTerraform(struct!.is),
    is_not: cdktf.stringToTerraform(struct!.isNot),
    less_equal: cdktf.stringToTerraform(struct!.lessEqual),
    less_than: cdktf.stringToTerraform(struct!.lessThan),
    not_within: hipObjectAntiMalwareCriteriaProductVersionNotWithinToTerraform(struct!.notWithin),
    within: hipObjectAntiMalwareCriteriaProductVersionWithinToTerraform(struct!.within),
  }
}


export function hipObjectAntiMalwareCriteriaProductVersionToHclTerraform(struct?: HipObjectAntiMalwareCriteriaProductVersion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    greater_equal: {
      value: cdktf.stringToHclTerraform(struct!.greaterEqual),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    greater_than: {
      value: cdktf.stringToHclTerraform(struct!.greaterThan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is: {
      value: cdktf.stringToHclTerraform(struct!.is),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_not: {
      value: cdktf.stringToHclTerraform(struct!.isNot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    less_equal: {
      value: cdktf.stringToHclTerraform(struct!.lessEqual),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    less_than: {
      value: cdktf.stringToHclTerraform(struct!.lessThan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_within: {
      value: hipObjectAntiMalwareCriteriaProductVersionNotWithinToHclTerraform(struct!.notWithin),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectAntiMalwareCriteriaProductVersionNotWithin",
    },
    within: {
      value: hipObjectAntiMalwareCriteriaProductVersionWithinToHclTerraform(struct!.within),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectAntiMalwareCriteriaProductVersionWithin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectAntiMalwareCriteriaProductVersionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectAntiMalwareCriteriaProductVersion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._greaterEqual !== undefined) {
      hasAnyValues = true;
      internalValueResult.greaterEqual = this._greaterEqual;
    }
    if (this._greaterThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.greaterThan = this._greaterThan;
    }
    if (this._is !== undefined) {
      hasAnyValues = true;
      internalValueResult.is = this._is;
    }
    if (this._isNot !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNot = this._isNot;
    }
    if (this._lessEqual !== undefined) {
      hasAnyValues = true;
      internalValueResult.lessEqual = this._lessEqual;
    }
    if (this._lessThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.lessThan = this._lessThan;
    }
    if (this._notWithin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notWithin = this._notWithin?.internalValue;
    }
    if (this._within?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.within = this._within?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectAntiMalwareCriteriaProductVersion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._greaterEqual = undefined;
      this._greaterThan = undefined;
      this._is = undefined;
      this._isNot = undefined;
      this._lessEqual = undefined;
      this._lessThan = undefined;
      this._notWithin.internalValue = undefined;
      this._within.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._greaterEqual = value.greaterEqual;
      this._greaterThan = value.greaterThan;
      this._is = value.is;
      this._isNot = value.isNot;
      this._lessEqual = value.lessEqual;
      this._lessThan = value.lessThan;
      this._notWithin.internalValue = value.notWithin;
      this._within.internalValue = value.within;
    }
  }

  // contains - computed: true, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // greater_equal - computed: true, optional: true, required: false
  private _greaterEqual?: string; 
  public get greaterEqual() {
    return this.getStringAttribute('greater_equal');
  }
  public set greaterEqual(value: string) {
    this._greaterEqual = value;
  }
  public resetGreaterEqual() {
    this._greaterEqual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greaterEqualInput() {
    return this._greaterEqual;
  }

  // greater_than - computed: true, optional: true, required: false
  private _greaterThan?: string; 
  public get greaterThan() {
    return this.getStringAttribute('greater_than');
  }
  public set greaterThan(value: string) {
    this._greaterThan = value;
  }
  public resetGreaterThan() {
    this._greaterThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greaterThanInput() {
    return this._greaterThan;
  }

  // is - computed: true, optional: true, required: false
  private _is?: string; 
  public get is() {
    return this.getStringAttribute('is');
  }
  public set is(value: string) {
    this._is = value;
  }
  public resetIs() {
    this._is = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInput() {
    return this._is;
  }

  // is_not - computed: true, optional: true, required: false
  private _isNot?: string; 
  public get isNot() {
    return this.getStringAttribute('is_not');
  }
  public set isNot(value: string) {
    this._isNot = value;
  }
  public resetIsNot() {
    this._isNot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNotInput() {
    return this._isNot;
  }

  // less_equal - computed: true, optional: true, required: false
  private _lessEqual?: string; 
  public get lessEqual() {
    return this.getStringAttribute('less_equal');
  }
  public set lessEqual(value: string) {
    this._lessEqual = value;
  }
  public resetLessEqual() {
    this._lessEqual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lessEqualInput() {
    return this._lessEqual;
  }

  // less_than - computed: true, optional: true, required: false
  private _lessThan?: string; 
  public get lessThan() {
    return this.getStringAttribute('less_than');
  }
  public set lessThan(value: string) {
    this._lessThan = value;
  }
  public resetLessThan() {
    this._lessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lessThanInput() {
    return this._lessThan;
  }

  // not_within - computed: true, optional: true, required: false
  private _notWithin = new HipObjectAntiMalwareCriteriaProductVersionNotWithinOutputReference(this, "not_within");
  public get notWithin() {
    return this._notWithin;
  }
  public putNotWithin(value: HipObjectAntiMalwareCriteriaProductVersionNotWithin) {
    this._notWithin.internalValue = value;
  }
  public resetNotWithin() {
    this._notWithin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notWithinInput() {
    return this._notWithin.internalValue;
  }

  // within - computed: true, optional: true, required: false
  private _within = new HipObjectAntiMalwareCriteriaProductVersionWithinOutputReference(this, "within");
  public get within() {
    return this._within;
  }
  public putWithin(value: HipObjectAntiMalwareCriteriaProductVersionWithin) {
    this._within.internalValue = value;
  }
  public resetWithin() {
    this._within.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withinInput() {
    return this._within.internalValue;
  }
}
export interface HipObjectAntiMalwareCriteriaVirdefVersionNotWithin {
  /**
  * specify time in days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#days HipObject#days}
  */
  readonly days?: number;
  /**
  * specify versions range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#versions HipObject#versions}
  */
  readonly versions?: number;
}

export function hipObjectAntiMalwareCriteriaVirdefVersionNotWithinToTerraform(struct?: HipObjectAntiMalwareCriteriaVirdefVersionNotWithin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    versions: cdktf.numberToTerraform(struct!.versions),
  }
}


export function hipObjectAntiMalwareCriteriaVirdefVersionNotWithinToHclTerraform(struct?: HipObjectAntiMalwareCriteriaVirdefVersionNotWithin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    versions: {
      value: cdktf.numberToHclTerraform(struct!.versions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectAntiMalwareCriteriaVirdefVersionNotWithinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectAntiMalwareCriteriaVirdefVersionNotWithin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._versions !== undefined) {
      hasAnyValues = true;
      internalValueResult.versions = this._versions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectAntiMalwareCriteriaVirdefVersionNotWithin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._days = undefined;
      this._versions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._days = value.days;
      this._versions = value.versions;
    }
  }

  // days - computed: true, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // versions - computed: true, optional: true, required: false
  private _versions?: number; 
  public get versions() {
    return this.getNumberAttribute('versions');
  }
  public set versions(value: number) {
    this._versions = value;
  }
  public resetVersions() {
    this._versions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionsInput() {
    return this._versions;
  }
}
export interface HipObjectAntiMalwareCriteriaVirdefVersionWithin {
  /**
  * specify time in days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#days HipObject#days}
  */
  readonly days?: number;
  /**
  * specify versions range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#versions HipObject#versions}
  */
  readonly versions?: number;
}

export function hipObjectAntiMalwareCriteriaVirdefVersionWithinToTerraform(struct?: HipObjectAntiMalwareCriteriaVirdefVersionWithin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    versions: cdktf.numberToTerraform(struct!.versions),
  }
}


export function hipObjectAntiMalwareCriteriaVirdefVersionWithinToHclTerraform(struct?: HipObjectAntiMalwareCriteriaVirdefVersionWithin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    versions: {
      value: cdktf.numberToHclTerraform(struct!.versions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectAntiMalwareCriteriaVirdefVersionWithinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectAntiMalwareCriteriaVirdefVersionWithin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._versions !== undefined) {
      hasAnyValues = true;
      internalValueResult.versions = this._versions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectAntiMalwareCriteriaVirdefVersionWithin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._days = undefined;
      this._versions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._days = value.days;
      this._versions = value.versions;
    }
  }

  // days - computed: true, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // versions - computed: true, optional: true, required: false
  private _versions?: number; 
  public get versions() {
    return this.getNumberAttribute('versions');
  }
  public set versions(value: number) {
    this._versions = value;
  }
  public resetVersions() {
    this._versions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionsInput() {
    return this._versions;
  }
}
export interface HipObjectAntiMalwareCriteriaVirdefVersion {
  /**
  * Not within
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#not_within HipObject#not_within}
  */
  readonly notWithin?: HipObjectAntiMalwareCriteriaVirdefVersionNotWithin;
  /**
  * Within
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#within HipObject#within}
  */
  readonly within?: HipObjectAntiMalwareCriteriaVirdefVersionWithin;
}

export function hipObjectAntiMalwareCriteriaVirdefVersionToTerraform(struct?: HipObjectAntiMalwareCriteriaVirdefVersion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    not_within: hipObjectAntiMalwareCriteriaVirdefVersionNotWithinToTerraform(struct!.notWithin),
    within: hipObjectAntiMalwareCriteriaVirdefVersionWithinToTerraform(struct!.within),
  }
}


export function hipObjectAntiMalwareCriteriaVirdefVersionToHclTerraform(struct?: HipObjectAntiMalwareCriteriaVirdefVersion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    not_within: {
      value: hipObjectAntiMalwareCriteriaVirdefVersionNotWithinToHclTerraform(struct!.notWithin),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectAntiMalwareCriteriaVirdefVersionNotWithin",
    },
    within: {
      value: hipObjectAntiMalwareCriteriaVirdefVersionWithinToHclTerraform(struct!.within),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectAntiMalwareCriteriaVirdefVersionWithin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectAntiMalwareCriteriaVirdefVersionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectAntiMalwareCriteriaVirdefVersion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notWithin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notWithin = this._notWithin?.internalValue;
    }
    if (this._within?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.within = this._within?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectAntiMalwareCriteriaVirdefVersion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notWithin.internalValue = undefined;
      this._within.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notWithin.internalValue = value.notWithin;
      this._within.internalValue = value.within;
    }
  }

  // not_within - computed: true, optional: true, required: false
  private _notWithin = new HipObjectAntiMalwareCriteriaVirdefVersionNotWithinOutputReference(this, "not_within");
  public get notWithin() {
    return this._notWithin;
  }
  public putNotWithin(value: HipObjectAntiMalwareCriteriaVirdefVersionNotWithin) {
    this._notWithin.internalValue = value;
  }
  public resetNotWithin() {
    this._notWithin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notWithinInput() {
    return this._notWithin.internalValue;
  }

  // within - computed: true, optional: true, required: false
  private _within = new HipObjectAntiMalwareCriteriaVirdefVersionWithinOutputReference(this, "within");
  public get within() {
    return this._within;
  }
  public putWithin(value: HipObjectAntiMalwareCriteriaVirdefVersionWithin) {
    this._within.internalValue = value;
  }
  public resetWithin() {
    this._within.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withinInput() {
    return this._within.internalValue;
  }
}
export interface HipObjectAntiMalwareCriteria {
  /**
  * Is Installed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#is_installed HipObject#is_installed}
  */
  readonly isInstalled?: boolean | cdktf.IResolvable;
  /**
  * Last scan time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#last_scan_time HipObject#last_scan_time}
  */
  readonly lastScanTime?: HipObjectAntiMalwareCriteriaLastScanTime;
  /**
  * Product version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#product_version HipObject#product_version}
  */
  readonly productVersion?: HipObjectAntiMalwareCriteriaProductVersion;
  /**
  * real time protection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#real_time_protection HipObject#real_time_protection}
  */
  readonly realTimeProtection?: string;
  /**
  * Virdef version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#virdef_version HipObject#virdef_version}
  */
  readonly virdefVersion?: HipObjectAntiMalwareCriteriaVirdefVersion;
}

export function hipObjectAntiMalwareCriteriaToTerraform(struct?: HipObjectAntiMalwareCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_installed: cdktf.booleanToTerraform(struct!.isInstalled),
    last_scan_time: hipObjectAntiMalwareCriteriaLastScanTimeToTerraform(struct!.lastScanTime),
    product_version: hipObjectAntiMalwareCriteriaProductVersionToTerraform(struct!.productVersion),
    real_time_protection: cdktf.stringToTerraform(struct!.realTimeProtection),
    virdef_version: hipObjectAntiMalwareCriteriaVirdefVersionToTerraform(struct!.virdefVersion),
  }
}


export function hipObjectAntiMalwareCriteriaToHclTerraform(struct?: HipObjectAntiMalwareCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_installed: {
      value: cdktf.booleanToHclTerraform(struct!.isInstalled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    last_scan_time: {
      value: hipObjectAntiMalwareCriteriaLastScanTimeToHclTerraform(struct!.lastScanTime),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectAntiMalwareCriteriaLastScanTime",
    },
    product_version: {
      value: hipObjectAntiMalwareCriteriaProductVersionToHclTerraform(struct!.productVersion),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectAntiMalwareCriteriaProductVersion",
    },
    real_time_protection: {
      value: cdktf.stringToHclTerraform(struct!.realTimeProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virdef_version: {
      value: hipObjectAntiMalwareCriteriaVirdefVersionToHclTerraform(struct!.virdefVersion),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectAntiMalwareCriteriaVirdefVersion",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectAntiMalwareCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectAntiMalwareCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isInstalled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isInstalled = this._isInstalled;
    }
    if (this._lastScanTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastScanTime = this._lastScanTime?.internalValue;
    }
    if (this._productVersion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.productVersion = this._productVersion?.internalValue;
    }
    if (this._realTimeProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.realTimeProtection = this._realTimeProtection;
    }
    if (this._virdefVersion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virdefVersion = this._virdefVersion?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectAntiMalwareCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isInstalled = undefined;
      this._lastScanTime.internalValue = undefined;
      this._productVersion.internalValue = undefined;
      this._realTimeProtection = undefined;
      this._virdefVersion.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isInstalled = value.isInstalled;
      this._lastScanTime.internalValue = value.lastScanTime;
      this._productVersion.internalValue = value.productVersion;
      this._realTimeProtection = value.realTimeProtection;
      this._virdefVersion.internalValue = value.virdefVersion;
    }
  }

  // is_installed - computed: true, optional: true, required: false
  private _isInstalled?: boolean | cdktf.IResolvable; 
  public get isInstalled() {
    return this.getBooleanAttribute('is_installed');
  }
  public set isInstalled(value: boolean | cdktf.IResolvable) {
    this._isInstalled = value;
  }
  public resetIsInstalled() {
    this._isInstalled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInstalledInput() {
    return this._isInstalled;
  }

  // last_scan_time - computed: true, optional: true, required: false
  private _lastScanTime = new HipObjectAntiMalwareCriteriaLastScanTimeOutputReference(this, "last_scan_time");
  public get lastScanTime() {
    return this._lastScanTime;
  }
  public putLastScanTime(value: HipObjectAntiMalwareCriteriaLastScanTime) {
    this._lastScanTime.internalValue = value;
  }
  public resetLastScanTime() {
    this._lastScanTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastScanTimeInput() {
    return this._lastScanTime.internalValue;
  }

  // product_version - computed: true, optional: true, required: false
  private _productVersion = new HipObjectAntiMalwareCriteriaProductVersionOutputReference(this, "product_version");
  public get productVersion() {
    return this._productVersion;
  }
  public putProductVersion(value: HipObjectAntiMalwareCriteriaProductVersion) {
    this._productVersion.internalValue = value;
  }
  public resetProductVersion() {
    this._productVersion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productVersionInput() {
    return this._productVersion.internalValue;
  }

  // real_time_protection - computed: true, optional: true, required: false
  private _realTimeProtection?: string; 
  public get realTimeProtection() {
    return this.getStringAttribute('real_time_protection');
  }
  public set realTimeProtection(value: string) {
    this._realTimeProtection = value;
  }
  public resetRealTimeProtection() {
    this._realTimeProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realTimeProtectionInput() {
    return this._realTimeProtection;
  }

  // virdef_version - computed: true, optional: true, required: false
  private _virdefVersion = new HipObjectAntiMalwareCriteriaVirdefVersionOutputReference(this, "virdef_version");
  public get virdefVersion() {
    return this._virdefVersion;
  }
  public putVirdefVersion(value: HipObjectAntiMalwareCriteriaVirdefVersion) {
    this._virdefVersion.internalValue = value;
  }
  public resetVirdefVersion() {
    this._virdefVersion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virdefVersionInput() {
    return this._virdefVersion.internalValue;
  }
}
export interface HipObjectAntiMalwareVendor {
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#name HipObject#name}
  */
  readonly name: string;
  /**
  * Product
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#product HipObject#product}
  */
  readonly product?: string[];
}

export function hipObjectAntiMalwareVendorToTerraform(struct?: HipObjectAntiMalwareVendor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    product: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.product),
  }
}


export function hipObjectAntiMalwareVendorToHclTerraform(struct?: HipObjectAntiMalwareVendor | cdktf.IResolvable): any {
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
    product: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.product),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectAntiMalwareVendorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HipObjectAntiMalwareVendor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._product !== undefined) {
      hasAnyValues = true;
      internalValueResult.product = this._product;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectAntiMalwareVendor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._product = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._product = value.product;
    }
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

  // product - computed: true, optional: true, required: false
  private _product?: string[]; 
  public get product() {
    return this.getListAttribute('product');
  }
  public set product(value: string[]) {
    this._product = value;
  }
  public resetProduct() {
    this._product = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }
}

export class HipObjectAntiMalwareVendorList extends cdktf.ComplexList {
  public internalValue? : HipObjectAntiMalwareVendor[] | cdktf.IResolvable

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
  public get(index: number): HipObjectAntiMalwareVendorOutputReference {
    return new HipObjectAntiMalwareVendorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HipObjectAntiMalware {
  /**
  * Criteria
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#criteria HipObject#criteria}
  */
  readonly criteria?: HipObjectAntiMalwareCriteria;
  /**
  * Exclude vendor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#exclude_vendor HipObject#exclude_vendor}
  */
  readonly excludeVendor?: boolean | cdktf.IResolvable;
  /**
  * Vendor name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#vendor HipObject#vendor}
  */
  readonly vendor?: HipObjectAntiMalwareVendor[] | cdktf.IResolvable;
}

export function hipObjectAntiMalwareToTerraform(struct?: HipObjectAntiMalware | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criteria: hipObjectAntiMalwareCriteriaToTerraform(struct!.criteria),
    exclude_vendor: cdktf.booleanToTerraform(struct!.excludeVendor),
    vendor: cdktf.listMapper(hipObjectAntiMalwareVendorToTerraform, false)(struct!.vendor),
  }
}


export function hipObjectAntiMalwareToHclTerraform(struct?: HipObjectAntiMalware | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    criteria: {
      value: hipObjectAntiMalwareCriteriaToHclTerraform(struct!.criteria),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectAntiMalwareCriteria",
    },
    exclude_vendor: {
      value: cdktf.booleanToHclTerraform(struct!.excludeVendor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vendor: {
      value: cdktf.listMapperHcl(hipObjectAntiMalwareVendorToHclTerraform, false)(struct!.vendor),
      isBlock: true,
      type: "list",
      storageClassType: "HipObjectAntiMalwareVendorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectAntiMalwareOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectAntiMalware | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria?.internalValue;
    }
    if (this._excludeVendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeVendor = this._excludeVendor;
    }
    if (this._vendor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendor = this._vendor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectAntiMalware | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._criteria.internalValue = undefined;
      this._excludeVendor = undefined;
      this._vendor.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._criteria.internalValue = value.criteria;
      this._excludeVendor = value.excludeVendor;
      this._vendor.internalValue = value.vendor;
    }
  }

  // criteria - computed: true, optional: true, required: false
  private _criteria = new HipObjectAntiMalwareCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: HipObjectAntiMalwareCriteria) {
    this._criteria.internalValue = value;
  }
  public resetCriteria() {
    this._criteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }

  // exclude_vendor - computed: true, optional: true, required: false
  private _excludeVendor?: boolean | cdktf.IResolvable; 
  public get excludeVendor() {
    return this.getBooleanAttribute('exclude_vendor');
  }
  public set excludeVendor(value: boolean | cdktf.IResolvable) {
    this._excludeVendor = value;
  }
  public resetExcludeVendor() {
    this._excludeVendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeVendorInput() {
    return this._excludeVendor;
  }

  // vendor - computed: true, optional: true, required: false
  private _vendor = new HipObjectAntiMalwareVendorList(this, "vendor", false);
  public get vendor() {
    return this._vendor;
  }
  public putVendor(value: HipObjectAntiMalwareVendor[] | cdktf.IResolvable) {
    this._vendor.internalValue = value;
  }
  public resetVendor() {
    this._vendor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor.internalValue;
  }
}
export interface HipObjectCertificateCriteriaCertificateAttributes {
  /**
  * Attribute Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#name HipObject#name}
  */
  readonly name: string;
  /**
  * Key value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#value HipObject#value}
  */
  readonly value?: string;
}

export function hipObjectCertificateCriteriaCertificateAttributesToTerraform(struct?: HipObjectCertificateCriteriaCertificateAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hipObjectCertificateCriteriaCertificateAttributesToHclTerraform(struct?: HipObjectCertificateCriteriaCertificateAttributes | cdktf.IResolvable): any {
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

export class HipObjectCertificateCriteriaCertificateAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HipObjectCertificateCriteriaCertificateAttributes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HipObjectCertificateCriteriaCertificateAttributes | cdktf.IResolvable | undefined) {
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

  // value - computed: false, optional: true, required: false
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

export class HipObjectCertificateCriteriaCertificateAttributesList extends cdktf.ComplexList {
  public internalValue? : HipObjectCertificateCriteriaCertificateAttributes[] | cdktf.IResolvable

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
  public get(index: number): HipObjectCertificateCriteriaCertificateAttributesOutputReference {
    return new HipObjectCertificateCriteriaCertificateAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HipObjectCertificateCriteria {
  /**
  * Certificate attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#certificate_attributes HipObject#certificate_attributes}
  */
  readonly certificateAttributes?: HipObjectCertificateCriteriaCertificateAttributes[] | cdktf.IResolvable;
  /**
  * Profile for authenticating client certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#certificate_profile HipObject#certificate_profile}
  */
  readonly certificateProfile?: string;
}

export function hipObjectCertificateCriteriaToTerraform(struct?: HipObjectCertificateCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_attributes: cdktf.listMapper(hipObjectCertificateCriteriaCertificateAttributesToTerraform, false)(struct!.certificateAttributes),
    certificate_profile: cdktf.stringToTerraform(struct!.certificateProfile),
  }
}


export function hipObjectCertificateCriteriaToHclTerraform(struct?: HipObjectCertificateCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_attributes: {
      value: cdktf.listMapperHcl(hipObjectCertificateCriteriaCertificateAttributesToHclTerraform, false)(struct!.certificateAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "HipObjectCertificateCriteriaCertificateAttributesList",
    },
    certificate_profile: {
      value: cdktf.stringToHclTerraform(struct!.certificateProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectCertificateCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectCertificateCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateAttributes = this._certificateAttributes?.internalValue;
    }
    if (this._certificateProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateProfile = this._certificateProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectCertificateCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateAttributes.internalValue = undefined;
      this._certificateProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateAttributes.internalValue = value.certificateAttributes;
      this._certificateProfile = value.certificateProfile;
    }
  }

  // certificate_attributes - computed: false, optional: true, required: false
  private _certificateAttributes = new HipObjectCertificateCriteriaCertificateAttributesList(this, "certificate_attributes", false);
  public get certificateAttributes() {
    return this._certificateAttributes;
  }
  public putCertificateAttributes(value: HipObjectCertificateCriteriaCertificateAttributes[] | cdktf.IResolvable) {
    this._certificateAttributes.internalValue = value;
  }
  public resetCertificateAttributes() {
    this._certificateAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAttributesInput() {
    return this._certificateAttributes.internalValue;
  }

  // certificate_profile - computed: false, optional: true, required: false
  private _certificateProfile?: string; 
  public get certificateProfile() {
    return this.getStringAttribute('certificate_profile');
  }
  public set certificateProfile(value: string) {
    this._certificateProfile = value;
  }
  public resetCertificateProfile() {
    this._certificateProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateProfileInput() {
    return this._certificateProfile;
  }
}
export interface HipObjectCertificate {
  /**
  * Criteria
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#criteria HipObject#criteria}
  */
  readonly criteria?: HipObjectCertificateCriteria;
}

export function hipObjectCertificateToTerraform(struct?: HipObjectCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criteria: hipObjectCertificateCriteriaToTerraform(struct!.criteria),
  }
}


export function hipObjectCertificateToHclTerraform(struct?: HipObjectCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    criteria: {
      value: hipObjectCertificateCriteriaToHclTerraform(struct!.criteria),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectCertificateCriteria",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._criteria.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._criteria.internalValue = value.criteria;
    }
  }

  // criteria - computed: false, optional: true, required: false
  private _criteria = new HipObjectCertificateCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: HipObjectCertificateCriteria) {
    this._criteria.internalValue = value;
  }
  public resetCriteria() {
    this._criteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }
}
export interface HipObjectCustomChecksCriteriaPlistKey {
  /**
  * Key name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#name HipObject#name}
  */
  readonly name: string;
  /**
  * Value does not exist or match specified value data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#negate HipObject#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Key value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#value HipObject#value}
  */
  readonly value?: string;
}

export function hipObjectCustomChecksCriteriaPlistKeyToTerraform(struct?: HipObjectCustomChecksCriteriaPlistKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    negate: cdktf.booleanToTerraform(struct!.negate),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hipObjectCustomChecksCriteriaPlistKeyToHclTerraform(struct?: HipObjectCustomChecksCriteriaPlistKey | cdktf.IResolvable): any {
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
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
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

export class HipObjectCustomChecksCriteriaPlistKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HipObjectCustomChecksCriteriaPlistKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectCustomChecksCriteriaPlistKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._negate = undefined;
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
      this._negate = value.negate;
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

  // negate - computed: true, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // value - computed: false, optional: true, required: false
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

export class HipObjectCustomChecksCriteriaPlistKeyList extends cdktf.ComplexList {
  public internalValue? : HipObjectCustomChecksCriteriaPlistKey[] | cdktf.IResolvable

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
  public get(index: number): HipObjectCustomChecksCriteriaPlistKeyOutputReference {
    return new HipObjectCustomChecksCriteriaPlistKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HipObjectCustomChecksCriteriaPlistStruct {
  /**
  * Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#key HipObject#key}
  */
  readonly key?: HipObjectCustomChecksCriteriaPlistKey[] | cdktf.IResolvable;
  /**
  * Preference list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#name HipObject#name}
  */
  readonly name: string;
  /**
  * Plist does not exist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#negate HipObject#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
}

export function hipObjectCustomChecksCriteriaPlistStructToTerraform(struct?: HipObjectCustomChecksCriteriaPlistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.listMapper(hipObjectCustomChecksCriteriaPlistKeyToTerraform, false)(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    negate: cdktf.booleanToTerraform(struct!.negate),
  }
}


export function hipObjectCustomChecksCriteriaPlistStructToHclTerraform(struct?: HipObjectCustomChecksCriteriaPlistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.listMapperHcl(hipObjectCustomChecksCriteriaPlistKeyToHclTerraform, false)(struct!.key),
      isBlock: true,
      type: "list",
      storageClassType: "HipObjectCustomChecksCriteriaPlistKeyList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectCustomChecksCriteriaPlistStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HipObjectCustomChecksCriteriaPlistStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectCustomChecksCriteriaPlistStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key.internalValue = undefined;
      this._name = undefined;
      this._negate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key.internalValue = value.key;
      this._name = value.name;
      this._negate = value.negate;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key = new HipObjectCustomChecksCriteriaPlistKeyList(this, "key", false);
  public get key() {
    return this._key;
  }
  public putKey(value: HipObjectCustomChecksCriteriaPlistKey[] | cdktf.IResolvable) {
    this._key.internalValue = value;
  }
  public resetKey() {
    this._key.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key.internalValue;
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

  // negate - computed: true, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }
}

export class HipObjectCustomChecksCriteriaPlistStructList extends cdktf.ComplexList {
  public internalValue? : HipObjectCustomChecksCriteriaPlistStruct[] | cdktf.IResolvable

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
  public get(index: number): HipObjectCustomChecksCriteriaPlistStructOutputReference {
    return new HipObjectCustomChecksCriteriaPlistStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HipObjectCustomChecksCriteriaProcessListStruct {
  /**
  * Process Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#name HipObject#name}
  */
  readonly name: string;
  /**
  * Running
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#running HipObject#running}
  */
  readonly running?: boolean | cdktf.IResolvable;
}

export function hipObjectCustomChecksCriteriaProcessListStructToTerraform(struct?: HipObjectCustomChecksCriteriaProcessListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    running: cdktf.booleanToTerraform(struct!.running),
  }
}


export function hipObjectCustomChecksCriteriaProcessListStructToHclTerraform(struct?: HipObjectCustomChecksCriteriaProcessListStruct | cdktf.IResolvable): any {
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
    running: {
      value: cdktf.booleanToHclTerraform(struct!.running),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectCustomChecksCriteriaProcessListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HipObjectCustomChecksCriteriaProcessListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._running !== undefined) {
      hasAnyValues = true;
      internalValueResult.running = this._running;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectCustomChecksCriteriaProcessListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._running = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._running = value.running;
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

  // running - computed: true, optional: true, required: false
  private _running?: boolean | cdktf.IResolvable; 
  public get running() {
    return this.getBooleanAttribute('running');
  }
  public set running(value: boolean | cdktf.IResolvable) {
    this._running = value;
  }
  public resetRunning() {
    this._running = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningInput() {
    return this._running;
  }
}

export class HipObjectCustomChecksCriteriaProcessListStructList extends cdktf.ComplexList {
  public internalValue? : HipObjectCustomChecksCriteriaProcessListStruct[] | cdktf.IResolvable

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
  public get(index: number): HipObjectCustomChecksCriteriaProcessListStructOutputReference {
    return new HipObjectCustomChecksCriteriaProcessListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HipObjectCustomChecksCriteriaRegistryKeyRegistryValue {
  /**
  * Registry value name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#name HipObject#name}
  */
  readonly name: string;
  /**
  * Value does not exist or match specified value data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#negate HipObject#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Registry value data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#value_data HipObject#value_data}
  */
  readonly valueData?: string;
}

export function hipObjectCustomChecksCriteriaRegistryKeyRegistryValueToTerraform(struct?: HipObjectCustomChecksCriteriaRegistryKeyRegistryValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    negate: cdktf.booleanToTerraform(struct!.negate),
    value_data: cdktf.stringToTerraform(struct!.valueData),
  }
}


export function hipObjectCustomChecksCriteriaRegistryKeyRegistryValueToHclTerraform(struct?: HipObjectCustomChecksCriteriaRegistryKeyRegistryValue | cdktf.IResolvable): any {
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
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value_data: {
      value: cdktf.stringToHclTerraform(struct!.valueData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectCustomChecksCriteriaRegistryKeyRegistryValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HipObjectCustomChecksCriteriaRegistryKeyRegistryValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._valueData !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueData = this._valueData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectCustomChecksCriteriaRegistryKeyRegistryValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._negate = undefined;
      this._valueData = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._negate = value.negate;
      this._valueData = value.valueData;
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

  // negate - computed: true, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // value_data - computed: false, optional: true, required: false
  private _valueData?: string; 
  public get valueData() {
    return this.getStringAttribute('value_data');
  }
  public set valueData(value: string) {
    this._valueData = value;
  }
  public resetValueData() {
    this._valueData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueDataInput() {
    return this._valueData;
  }
}

export class HipObjectCustomChecksCriteriaRegistryKeyRegistryValueList extends cdktf.ComplexList {
  public internalValue? : HipObjectCustomChecksCriteriaRegistryKeyRegistryValue[] | cdktf.IResolvable

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
  public get(index: number): HipObjectCustomChecksCriteriaRegistryKeyRegistryValueOutputReference {
    return new HipObjectCustomChecksCriteriaRegistryKeyRegistryValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HipObjectCustomChecksCriteriaRegistryKey {
  /**
  * Registry key default value data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#default_value_data HipObject#default_value_data}
  */
  readonly defaultValueData?: string;
  /**
  * Registry key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#name HipObject#name}
  */
  readonly name: string;
  /**
  * Key does not exist or match specified value data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#negate HipObject#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Registry value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#registry_value HipObject#registry_value}
  */
  readonly registryValue?: HipObjectCustomChecksCriteriaRegistryKeyRegistryValue[] | cdktf.IResolvable;
}

export function hipObjectCustomChecksCriteriaRegistryKeyToTerraform(struct?: HipObjectCustomChecksCriteriaRegistryKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value_data: cdktf.stringToTerraform(struct!.defaultValueData),
    name: cdktf.stringToTerraform(struct!.name),
    negate: cdktf.booleanToTerraform(struct!.negate),
    registry_value: cdktf.listMapper(hipObjectCustomChecksCriteriaRegistryKeyRegistryValueToTerraform, false)(struct!.registryValue),
  }
}


export function hipObjectCustomChecksCriteriaRegistryKeyToHclTerraform(struct?: HipObjectCustomChecksCriteriaRegistryKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value_data: {
      value: cdktf.stringToHclTerraform(struct!.defaultValueData),
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
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    registry_value: {
      value: cdktf.listMapperHcl(hipObjectCustomChecksCriteriaRegistryKeyRegistryValueToHclTerraform, false)(struct!.registryValue),
      isBlock: true,
      type: "list",
      storageClassType: "HipObjectCustomChecksCriteriaRegistryKeyRegistryValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectCustomChecksCriteriaRegistryKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HipObjectCustomChecksCriteriaRegistryKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValueData !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValueData = this._defaultValueData;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._registryValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryValue = this._registryValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectCustomChecksCriteriaRegistryKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValueData = undefined;
      this._name = undefined;
      this._negate = undefined;
      this._registryValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValueData = value.defaultValueData;
      this._name = value.name;
      this._negate = value.negate;
      this._registryValue.internalValue = value.registryValue;
    }
  }

  // default_value_data - computed: false, optional: true, required: false
  private _defaultValueData?: string; 
  public get defaultValueData() {
    return this.getStringAttribute('default_value_data');
  }
  public set defaultValueData(value: string) {
    this._defaultValueData = value;
  }
  public resetDefaultValueData() {
    this._defaultValueData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueDataInput() {
    return this._defaultValueData;
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

  // negate - computed: true, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // registry_value - computed: false, optional: true, required: false
  private _registryValue = new HipObjectCustomChecksCriteriaRegistryKeyRegistryValueList(this, "registry_value", false);
  public get registryValue() {
    return this._registryValue;
  }
  public putRegistryValue(value: HipObjectCustomChecksCriteriaRegistryKeyRegistryValue[] | cdktf.IResolvable) {
    this._registryValue.internalValue = value;
  }
  public resetRegistryValue() {
    this._registryValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryValueInput() {
    return this._registryValue.internalValue;
  }
}

export class HipObjectCustomChecksCriteriaRegistryKeyList extends cdktf.ComplexList {
  public internalValue? : HipObjectCustomChecksCriteriaRegistryKey[] | cdktf.IResolvable

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
  public get(index: number): HipObjectCustomChecksCriteriaRegistryKeyOutputReference {
    return new HipObjectCustomChecksCriteriaRegistryKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HipObjectCustomChecksCriteria {
  /**
  * Plist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#plist HipObject#plist}
  */
  readonly plist?: HipObjectCustomChecksCriteriaPlistStruct[] | cdktf.IResolvable;
  /**
  * Process list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#process_list HipObject#process_list}
  */
  readonly processList?: HipObjectCustomChecksCriteriaProcessListStruct[] | cdktf.IResolvable;
  /**
  * Registry key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#registry_key HipObject#registry_key}
  */
  readonly registryKey?: HipObjectCustomChecksCriteriaRegistryKey[] | cdktf.IResolvable;
}

export function hipObjectCustomChecksCriteriaToTerraform(struct?: HipObjectCustomChecksCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plist: cdktf.listMapper(hipObjectCustomChecksCriteriaPlistStructToTerraform, false)(struct!.plist),
    process_list: cdktf.listMapper(hipObjectCustomChecksCriteriaProcessListStructToTerraform, false)(struct!.processList),
    registry_key: cdktf.listMapper(hipObjectCustomChecksCriteriaRegistryKeyToTerraform, false)(struct!.registryKey),
  }
}


export function hipObjectCustomChecksCriteriaToHclTerraform(struct?: HipObjectCustomChecksCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    plist: {
      value: cdktf.listMapperHcl(hipObjectCustomChecksCriteriaPlistStructToHclTerraform, false)(struct!.plist),
      isBlock: true,
      type: "list",
      storageClassType: "HipObjectCustomChecksCriteriaPlistStructList",
    },
    process_list: {
      value: cdktf.listMapperHcl(hipObjectCustomChecksCriteriaProcessListStructToHclTerraform, false)(struct!.processList),
      isBlock: true,
      type: "list",
      storageClassType: "HipObjectCustomChecksCriteriaProcessListStructList",
    },
    registry_key: {
      value: cdktf.listMapperHcl(hipObjectCustomChecksCriteriaRegistryKeyToHclTerraform, false)(struct!.registryKey),
      isBlock: true,
      type: "list",
      storageClassType: "HipObjectCustomChecksCriteriaRegistryKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectCustomChecksCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectCustomChecksCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plist = this._plist?.internalValue;
    }
    if (this._processList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processList = this._processList?.internalValue;
    }
    if (this._registryKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryKey = this._registryKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectCustomChecksCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._plist.internalValue = undefined;
      this._processList.internalValue = undefined;
      this._registryKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._plist.internalValue = value.plist;
      this._processList.internalValue = value.processList;
      this._registryKey.internalValue = value.registryKey;
    }
  }

  // plist - computed: false, optional: true, required: false
  private _plist = new HipObjectCustomChecksCriteriaPlistStructList(this, "plist", false);
  public get plist() {
    return this._plist;
  }
  public putPlist(value: HipObjectCustomChecksCriteriaPlistStruct[] | cdktf.IResolvable) {
    this._plist.internalValue = value;
  }
  public resetPlist() {
    this._plist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plistInput() {
    return this._plist.internalValue;
  }

  // process_list - computed: false, optional: true, required: false
  private _processList = new HipObjectCustomChecksCriteriaProcessListStructList(this, "process_list", false);
  public get processList() {
    return this._processList;
  }
  public putProcessList(value: HipObjectCustomChecksCriteriaProcessListStruct[] | cdktf.IResolvable) {
    this._processList.internalValue = value;
  }
  public resetProcessList() {
    this._processList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processListInput() {
    return this._processList.internalValue;
  }

  // registry_key - computed: false, optional: true, required: false
  private _registryKey = new HipObjectCustomChecksCriteriaRegistryKeyList(this, "registry_key", false);
  public get registryKey() {
    return this._registryKey;
  }
  public putRegistryKey(value: HipObjectCustomChecksCriteriaRegistryKey[] | cdktf.IResolvable) {
    this._registryKey.internalValue = value;
  }
  public resetRegistryKey() {
    this._registryKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryKeyInput() {
    return this._registryKey.internalValue;
  }
}
export interface HipObjectCustomChecks {
  /**
  * Criteria
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#criteria HipObject#criteria}
  */
  readonly criteria: HipObjectCustomChecksCriteria;
}

export function hipObjectCustomChecksToTerraform(struct?: HipObjectCustomChecks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criteria: hipObjectCustomChecksCriteriaToTerraform(struct!.criteria),
  }
}


export function hipObjectCustomChecksToHclTerraform(struct?: HipObjectCustomChecks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    criteria: {
      value: hipObjectCustomChecksCriteriaToHclTerraform(struct!.criteria),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectCustomChecksCriteria",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectCustomChecksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectCustomChecks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectCustomChecks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._criteria.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._criteria.internalValue = value.criteria;
    }
  }

  // criteria - computed: false, optional: false, required: true
  private _criteria = new HipObjectCustomChecksCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: HipObjectCustomChecksCriteria) {
    this._criteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }
}
export interface HipObjectDataLossPreventionCriteria {
  /**
  * is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#is_enabled HipObject#is_enabled}
  */
  readonly isEnabled?: string;
  /**
  * Is Installed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#is_installed HipObject#is_installed}
  */
  readonly isInstalled?: boolean | cdktf.IResolvable;
}

export function hipObjectDataLossPreventionCriteriaToTerraform(struct?: HipObjectDataLossPreventionCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.stringToTerraform(struct!.isEnabled),
    is_installed: cdktf.booleanToTerraform(struct!.isInstalled),
  }
}


export function hipObjectDataLossPreventionCriteriaToHclTerraform(struct?: HipObjectDataLossPreventionCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.stringToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_installed: {
      value: cdktf.booleanToHclTerraform(struct!.isInstalled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectDataLossPreventionCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectDataLossPreventionCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._isInstalled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isInstalled = this._isInstalled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectDataLossPreventionCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isEnabled = undefined;
      this._isInstalled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isEnabled = value.isEnabled;
      this._isInstalled = value.isInstalled;
    }
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: string; 
  public get isEnabled() {
    return this.getStringAttribute('is_enabled');
  }
  public set isEnabled(value: string) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // is_installed - computed: true, optional: true, required: false
  private _isInstalled?: boolean | cdktf.IResolvable; 
  public get isInstalled() {
    return this.getBooleanAttribute('is_installed');
  }
  public set isInstalled(value: boolean | cdktf.IResolvable) {
    this._isInstalled = value;
  }
  public resetIsInstalled() {
    this._isInstalled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInstalledInput() {
    return this._isInstalled;
  }
}
export interface HipObjectDataLossPreventionVendor {
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#name HipObject#name}
  */
  readonly name: string;
  /**
  * Product name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#product HipObject#product}
  */
  readonly product?: string[];
}

export function hipObjectDataLossPreventionVendorToTerraform(struct?: HipObjectDataLossPreventionVendor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    product: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.product),
  }
}


export function hipObjectDataLossPreventionVendorToHclTerraform(struct?: HipObjectDataLossPreventionVendor | cdktf.IResolvable): any {
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
    product: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.product),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectDataLossPreventionVendorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HipObjectDataLossPreventionVendor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._product !== undefined) {
      hasAnyValues = true;
      internalValueResult.product = this._product;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectDataLossPreventionVendor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._product = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._product = value.product;
    }
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

  // product - computed: true, optional: true, required: false
  private _product?: string[]; 
  public get product() {
    return this.getListAttribute('product');
  }
  public set product(value: string[]) {
    this._product = value;
  }
  public resetProduct() {
    this._product = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }
}

export class HipObjectDataLossPreventionVendorList extends cdktf.ComplexList {
  public internalValue? : HipObjectDataLossPreventionVendor[] | cdktf.IResolvable

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
  public get(index: number): HipObjectDataLossPreventionVendorOutputReference {
    return new HipObjectDataLossPreventionVendorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HipObjectDataLossPrevention {
  /**
  * Criteria
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#criteria HipObject#criteria}
  */
  readonly criteria?: HipObjectDataLossPreventionCriteria;
  /**
  * Exclude vendor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#exclude_vendor HipObject#exclude_vendor}
  */
  readonly excludeVendor?: boolean | cdktf.IResolvable;
  /**
  * Vendor name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#vendor HipObject#vendor}
  */
  readonly vendor?: HipObjectDataLossPreventionVendor[] | cdktf.IResolvable;
}

export function hipObjectDataLossPreventionToTerraform(struct?: HipObjectDataLossPrevention | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criteria: hipObjectDataLossPreventionCriteriaToTerraform(struct!.criteria),
    exclude_vendor: cdktf.booleanToTerraform(struct!.excludeVendor),
    vendor: cdktf.listMapper(hipObjectDataLossPreventionVendorToTerraform, false)(struct!.vendor),
  }
}


export function hipObjectDataLossPreventionToHclTerraform(struct?: HipObjectDataLossPrevention | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    criteria: {
      value: hipObjectDataLossPreventionCriteriaToHclTerraform(struct!.criteria),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectDataLossPreventionCriteria",
    },
    exclude_vendor: {
      value: cdktf.booleanToHclTerraform(struct!.excludeVendor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vendor: {
      value: cdktf.listMapperHcl(hipObjectDataLossPreventionVendorToHclTerraform, false)(struct!.vendor),
      isBlock: true,
      type: "list",
      storageClassType: "HipObjectDataLossPreventionVendorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectDataLossPreventionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectDataLossPrevention | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria?.internalValue;
    }
    if (this._excludeVendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeVendor = this._excludeVendor;
    }
    if (this._vendor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendor = this._vendor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectDataLossPrevention | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._criteria.internalValue = undefined;
      this._excludeVendor = undefined;
      this._vendor.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._criteria.internalValue = value.criteria;
      this._excludeVendor = value.excludeVendor;
      this._vendor.internalValue = value.vendor;
    }
  }

  // criteria - computed: true, optional: true, required: false
  private _criteria = new HipObjectDataLossPreventionCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: HipObjectDataLossPreventionCriteria) {
    this._criteria.internalValue = value;
  }
  public resetCriteria() {
    this._criteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }

  // exclude_vendor - computed: true, optional: true, required: false
  private _excludeVendor?: boolean | cdktf.IResolvable; 
  public get excludeVendor() {
    return this.getBooleanAttribute('exclude_vendor');
  }
  public set excludeVendor(value: boolean | cdktf.IResolvable) {
    this._excludeVendor = value;
  }
  public resetExcludeVendor() {
    this._excludeVendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeVendorInput() {
    return this._excludeVendor;
  }

  // vendor - computed: true, optional: true, required: false
  private _vendor = new HipObjectDataLossPreventionVendorList(this, "vendor", false);
  public get vendor() {
    return this._vendor;
  }
  public putVendor(value: HipObjectDataLossPreventionVendor[] | cdktf.IResolvable) {
    this._vendor.internalValue = value;
  }
  public resetVendor() {
    this._vendor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor.internalValue;
  }
}
export interface HipObjectDiskBackupCriteriaLastBackupTimeNotAvailable {
}

export function hipObjectDiskBackupCriteriaLastBackupTimeNotAvailableToTerraform(struct?: HipObjectDiskBackupCriteriaLastBackupTimeNotAvailable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function hipObjectDiskBackupCriteriaLastBackupTimeNotAvailableToHclTerraform(struct?: HipObjectDiskBackupCriteriaLastBackupTimeNotAvailable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class HipObjectDiskBackupCriteriaLastBackupTimeNotAvailableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectDiskBackupCriteriaLastBackupTimeNotAvailable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectDiskBackupCriteriaLastBackupTimeNotAvailable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface HipObjectDiskBackupCriteriaLastBackupTimeNotWithin {
  /**
  * specify time in days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#days HipObject#days}
  */
  readonly days?: number;
  /**
  * specify time in hours
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#hours HipObject#hours}
  */
  readonly hours?: number;
}

export function hipObjectDiskBackupCriteriaLastBackupTimeNotWithinToTerraform(struct?: HipObjectDiskBackupCriteriaLastBackupTimeNotWithin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    hours: cdktf.numberToTerraform(struct!.hours),
  }
}


export function hipObjectDiskBackupCriteriaLastBackupTimeNotWithinToHclTerraform(struct?: HipObjectDiskBackupCriteriaLastBackupTimeNotWithin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectDiskBackupCriteriaLastBackupTimeNotWithinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectDiskBackupCriteriaLastBackupTimeNotWithin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectDiskBackupCriteriaLastBackupTimeNotWithin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._days = undefined;
      this._hours = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._days = value.days;
      this._hours = value.hours;
    }
  }

  // days - computed: true, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // hours - computed: true, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }
}
export interface HipObjectDiskBackupCriteriaLastBackupTimeWithin {
  /**
  * specify time in days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#days HipObject#days}
  */
  readonly days?: number;
  /**
  * specify time in hours
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#hours HipObject#hours}
  */
  readonly hours?: number;
}

export function hipObjectDiskBackupCriteriaLastBackupTimeWithinToTerraform(struct?: HipObjectDiskBackupCriteriaLastBackupTimeWithin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    hours: cdktf.numberToTerraform(struct!.hours),
  }
}


export function hipObjectDiskBackupCriteriaLastBackupTimeWithinToHclTerraform(struct?: HipObjectDiskBackupCriteriaLastBackupTimeWithin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectDiskBackupCriteriaLastBackupTimeWithinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectDiskBackupCriteriaLastBackupTimeWithin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectDiskBackupCriteriaLastBackupTimeWithin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._days = undefined;
      this._hours = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._days = value.days;
      this._hours = value.hours;
    }
  }

  // days - computed: true, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // hours - computed: true, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }
}
export interface HipObjectDiskBackupCriteriaLastBackupTime {
  /**
  * Not available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#not_available HipObject#not_available}
  */
  readonly notAvailable?: HipObjectDiskBackupCriteriaLastBackupTimeNotAvailable;
  /**
  * Not within
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#not_within HipObject#not_within}
  */
  readonly notWithin?: HipObjectDiskBackupCriteriaLastBackupTimeNotWithin;
  /**
  * Within
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#within HipObject#within}
  */
  readonly within?: HipObjectDiskBackupCriteriaLastBackupTimeWithin;
}

export function hipObjectDiskBackupCriteriaLastBackupTimeToTerraform(struct?: HipObjectDiskBackupCriteriaLastBackupTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    not_available: hipObjectDiskBackupCriteriaLastBackupTimeNotAvailableToTerraform(struct!.notAvailable),
    not_within: hipObjectDiskBackupCriteriaLastBackupTimeNotWithinToTerraform(struct!.notWithin),
    within: hipObjectDiskBackupCriteriaLastBackupTimeWithinToTerraform(struct!.within),
  }
}


export function hipObjectDiskBackupCriteriaLastBackupTimeToHclTerraform(struct?: HipObjectDiskBackupCriteriaLastBackupTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    not_available: {
      value: hipObjectDiskBackupCriteriaLastBackupTimeNotAvailableToHclTerraform(struct!.notAvailable),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectDiskBackupCriteriaLastBackupTimeNotAvailable",
    },
    not_within: {
      value: hipObjectDiskBackupCriteriaLastBackupTimeNotWithinToHclTerraform(struct!.notWithin),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectDiskBackupCriteriaLastBackupTimeNotWithin",
    },
    within: {
      value: hipObjectDiskBackupCriteriaLastBackupTimeWithinToHclTerraform(struct!.within),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectDiskBackupCriteriaLastBackupTimeWithin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectDiskBackupCriteriaLastBackupTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectDiskBackupCriteriaLastBackupTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notAvailable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notAvailable = this._notAvailable?.internalValue;
    }
    if (this._notWithin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notWithin = this._notWithin?.internalValue;
    }
    if (this._within?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.within = this._within?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectDiskBackupCriteriaLastBackupTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notAvailable.internalValue = undefined;
      this._notWithin.internalValue = undefined;
      this._within.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notAvailable.internalValue = value.notAvailable;
      this._notWithin.internalValue = value.notWithin;
      this._within.internalValue = value.within;
    }
  }

  // not_available - computed: true, optional: true, required: false
  private _notAvailable = new HipObjectDiskBackupCriteriaLastBackupTimeNotAvailableOutputReference(this, "not_available");
  public get notAvailable() {
    return this._notAvailable;
  }
  public putNotAvailable(value: HipObjectDiskBackupCriteriaLastBackupTimeNotAvailable) {
    this._notAvailable.internalValue = value;
  }
  public resetNotAvailable() {
    this._notAvailable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notAvailableInput() {
    return this._notAvailable.internalValue;
  }

  // not_within - computed: true, optional: true, required: false
  private _notWithin = new HipObjectDiskBackupCriteriaLastBackupTimeNotWithinOutputReference(this, "not_within");
  public get notWithin() {
    return this._notWithin;
  }
  public putNotWithin(value: HipObjectDiskBackupCriteriaLastBackupTimeNotWithin) {
    this._notWithin.internalValue = value;
  }
  public resetNotWithin() {
    this._notWithin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notWithinInput() {
    return this._notWithin.internalValue;
  }

  // within - computed: true, optional: true, required: false
  private _within = new HipObjectDiskBackupCriteriaLastBackupTimeWithinOutputReference(this, "within");
  public get within() {
    return this._within;
  }
  public putWithin(value: HipObjectDiskBackupCriteriaLastBackupTimeWithin) {
    this._within.internalValue = value;
  }
  public resetWithin() {
    this._within.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withinInput() {
    return this._within.internalValue;
  }
}
export interface HipObjectDiskBackupCriteria {
  /**
  * Is Installed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#is_installed HipObject#is_installed}
  */
  readonly isInstalled?: boolean | cdktf.IResolvable;
  /**
  * Last backup time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#last_backup_time HipObject#last_backup_time}
  */
  readonly lastBackupTime?: HipObjectDiskBackupCriteriaLastBackupTime;
}

export function hipObjectDiskBackupCriteriaToTerraform(struct?: HipObjectDiskBackupCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_installed: cdktf.booleanToTerraform(struct!.isInstalled),
    last_backup_time: hipObjectDiskBackupCriteriaLastBackupTimeToTerraform(struct!.lastBackupTime),
  }
}


export function hipObjectDiskBackupCriteriaToHclTerraform(struct?: HipObjectDiskBackupCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_installed: {
      value: cdktf.booleanToHclTerraform(struct!.isInstalled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    last_backup_time: {
      value: hipObjectDiskBackupCriteriaLastBackupTimeToHclTerraform(struct!.lastBackupTime),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectDiskBackupCriteriaLastBackupTime",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectDiskBackupCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectDiskBackupCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isInstalled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isInstalled = this._isInstalled;
    }
    if (this._lastBackupTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastBackupTime = this._lastBackupTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectDiskBackupCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isInstalled = undefined;
      this._lastBackupTime.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isInstalled = value.isInstalled;
      this._lastBackupTime.internalValue = value.lastBackupTime;
    }
  }

  // is_installed - computed: true, optional: true, required: false
  private _isInstalled?: boolean | cdktf.IResolvable; 
  public get isInstalled() {
    return this.getBooleanAttribute('is_installed');
  }
  public set isInstalled(value: boolean | cdktf.IResolvable) {
    this._isInstalled = value;
  }
  public resetIsInstalled() {
    this._isInstalled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInstalledInput() {
    return this._isInstalled;
  }

  // last_backup_time - computed: true, optional: true, required: false
  private _lastBackupTime = new HipObjectDiskBackupCriteriaLastBackupTimeOutputReference(this, "last_backup_time");
  public get lastBackupTime() {
    return this._lastBackupTime;
  }
  public putLastBackupTime(value: HipObjectDiskBackupCriteriaLastBackupTime) {
    this._lastBackupTime.internalValue = value;
  }
  public resetLastBackupTime() {
    this._lastBackupTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastBackupTimeInput() {
    return this._lastBackupTime.internalValue;
  }
}
export interface HipObjectDiskBackupVendor {
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#name HipObject#name}
  */
  readonly name: string;
  /**
  * Product
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#product HipObject#product}
  */
  readonly product?: string[];
}

export function hipObjectDiskBackupVendorToTerraform(struct?: HipObjectDiskBackupVendor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    product: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.product),
  }
}


export function hipObjectDiskBackupVendorToHclTerraform(struct?: HipObjectDiskBackupVendor | cdktf.IResolvable): any {
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
    product: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.product),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectDiskBackupVendorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HipObjectDiskBackupVendor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._product !== undefined) {
      hasAnyValues = true;
      internalValueResult.product = this._product;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectDiskBackupVendor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._product = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._product = value.product;
    }
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

  // product - computed: true, optional: true, required: false
  private _product?: string[]; 
  public get product() {
    return this.getListAttribute('product');
  }
  public set product(value: string[]) {
    this._product = value;
  }
  public resetProduct() {
    this._product = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }
}

export class HipObjectDiskBackupVendorList extends cdktf.ComplexList {
  public internalValue? : HipObjectDiskBackupVendor[] | cdktf.IResolvable

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
  public get(index: number): HipObjectDiskBackupVendorOutputReference {
    return new HipObjectDiskBackupVendorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HipObjectDiskBackup {
  /**
  * Criteria
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#criteria HipObject#criteria}
  */
  readonly criteria?: HipObjectDiskBackupCriteria;
  /**
  * Exclude vendor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#exclude_vendor HipObject#exclude_vendor}
  */
  readonly excludeVendor?: boolean | cdktf.IResolvable;
  /**
  * Vendor name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#vendor HipObject#vendor}
  */
  readonly vendor?: HipObjectDiskBackupVendor[] | cdktf.IResolvable;
}

export function hipObjectDiskBackupToTerraform(struct?: HipObjectDiskBackup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criteria: hipObjectDiskBackupCriteriaToTerraform(struct!.criteria),
    exclude_vendor: cdktf.booleanToTerraform(struct!.excludeVendor),
    vendor: cdktf.listMapper(hipObjectDiskBackupVendorToTerraform, false)(struct!.vendor),
  }
}


export function hipObjectDiskBackupToHclTerraform(struct?: HipObjectDiskBackup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    criteria: {
      value: hipObjectDiskBackupCriteriaToHclTerraform(struct!.criteria),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectDiskBackupCriteria",
    },
    exclude_vendor: {
      value: cdktf.booleanToHclTerraform(struct!.excludeVendor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vendor: {
      value: cdktf.listMapperHcl(hipObjectDiskBackupVendorToHclTerraform, false)(struct!.vendor),
      isBlock: true,
      type: "list",
      storageClassType: "HipObjectDiskBackupVendorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectDiskBackupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectDiskBackup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria?.internalValue;
    }
    if (this._excludeVendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeVendor = this._excludeVendor;
    }
    if (this._vendor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendor = this._vendor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectDiskBackup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._criteria.internalValue = undefined;
      this._excludeVendor = undefined;
      this._vendor.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._criteria.internalValue = value.criteria;
      this._excludeVendor = value.excludeVendor;
      this._vendor.internalValue = value.vendor;
    }
  }

  // criteria - computed: true, optional: true, required: false
  private _criteria = new HipObjectDiskBackupCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: HipObjectDiskBackupCriteria) {
    this._criteria.internalValue = value;
  }
  public resetCriteria() {
    this._criteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }

  // exclude_vendor - computed: true, optional: true, required: false
  private _excludeVendor?: boolean | cdktf.IResolvable; 
  public get excludeVendor() {
    return this.getBooleanAttribute('exclude_vendor');
  }
  public set excludeVendor(value: boolean | cdktf.IResolvable) {
    this._excludeVendor = value;
  }
  public resetExcludeVendor() {
    this._excludeVendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeVendorInput() {
    return this._excludeVendor;
  }

  // vendor - computed: true, optional: true, required: false
  private _vendor = new HipObjectDiskBackupVendorList(this, "vendor", false);
  public get vendor() {
    return this._vendor;
  }
  public putVendor(value: HipObjectDiskBackupVendor[] | cdktf.IResolvable) {
    this._vendor.internalValue = value;
  }
  public resetVendor() {
    this._vendor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor.internalValue;
  }
}
export interface HipObjectDiskEncryptionCriteriaEncryptedLocationsEncryptionState {
  /**
  * Is
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#is HipObject#is}
  */
  readonly is?: string;
  /**
  * Is not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#is_not HipObject#is_not}
  */
  readonly isNot?: string;
}

export function hipObjectDiskEncryptionCriteriaEncryptedLocationsEncryptionStateToTerraform(struct?: HipObjectDiskEncryptionCriteriaEncryptedLocationsEncryptionState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is: cdktf.stringToTerraform(struct!.is),
    is_not: cdktf.stringToTerraform(struct!.isNot),
  }
}


export function hipObjectDiskEncryptionCriteriaEncryptedLocationsEncryptionStateToHclTerraform(struct?: HipObjectDiskEncryptionCriteriaEncryptedLocationsEncryptionState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is: {
      value: cdktf.stringToHclTerraform(struct!.is),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_not: {
      value: cdktf.stringToHclTerraform(struct!.isNot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectDiskEncryptionCriteriaEncryptedLocationsEncryptionStateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectDiskEncryptionCriteriaEncryptedLocationsEncryptionState | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._is !== undefined) {
      hasAnyValues = true;
      internalValueResult.is = this._is;
    }
    if (this._isNot !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNot = this._isNot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectDiskEncryptionCriteriaEncryptedLocationsEncryptionState | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._is = undefined;
      this._isNot = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._is = value.is;
      this._isNot = value.isNot;
    }
  }

  // is - computed: true, optional: true, required: false
  private _is?: string; 
  public get is() {
    return this.getStringAttribute('is');
  }
  public set is(value: string) {
    this._is = value;
  }
  public resetIs() {
    this._is = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInput() {
    return this._is;
  }

  // is_not - computed: true, optional: true, required: false
  private _isNot?: string; 
  public get isNot() {
    return this.getStringAttribute('is_not');
  }
  public set isNot(value: string) {
    this._isNot = value;
  }
  public resetIsNot() {
    this._isNot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNotInput() {
    return this._isNot;
  }
}
export interface HipObjectDiskEncryptionCriteriaEncryptedLocations {
  /**
  * Encryption state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#encryption_state HipObject#encryption_state}
  */
  readonly encryptionState?: HipObjectDiskEncryptionCriteriaEncryptedLocationsEncryptionState;
  /**
  * Encryption location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#name HipObject#name}
  */
  readonly name: string;
}

export function hipObjectDiskEncryptionCriteriaEncryptedLocationsToTerraform(struct?: HipObjectDiskEncryptionCriteriaEncryptedLocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption_state: hipObjectDiskEncryptionCriteriaEncryptedLocationsEncryptionStateToTerraform(struct!.encryptionState),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function hipObjectDiskEncryptionCriteriaEncryptedLocationsToHclTerraform(struct?: HipObjectDiskEncryptionCriteriaEncryptedLocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encryption_state: {
      value: hipObjectDiskEncryptionCriteriaEncryptedLocationsEncryptionStateToHclTerraform(struct!.encryptionState),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectDiskEncryptionCriteriaEncryptedLocationsEncryptionState",
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

export class HipObjectDiskEncryptionCriteriaEncryptedLocationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HipObjectDiskEncryptionCriteriaEncryptedLocations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionState?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionState = this._encryptionState?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectDiskEncryptionCriteriaEncryptedLocations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionState.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionState.internalValue = value.encryptionState;
      this._name = value.name;
    }
  }

  // encryption_state - computed: true, optional: true, required: false
  private _encryptionState = new HipObjectDiskEncryptionCriteriaEncryptedLocationsEncryptionStateOutputReference(this, "encryption_state");
  public get encryptionState() {
    return this._encryptionState;
  }
  public putEncryptionState(value: HipObjectDiskEncryptionCriteriaEncryptedLocationsEncryptionState) {
    this._encryptionState.internalValue = value;
  }
  public resetEncryptionState() {
    this._encryptionState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionStateInput() {
    return this._encryptionState.internalValue;
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
}

export class HipObjectDiskEncryptionCriteriaEncryptedLocationsList extends cdktf.ComplexList {
  public internalValue? : HipObjectDiskEncryptionCriteriaEncryptedLocations[] | cdktf.IResolvable

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
  public get(index: number): HipObjectDiskEncryptionCriteriaEncryptedLocationsOutputReference {
    return new HipObjectDiskEncryptionCriteriaEncryptedLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HipObjectDiskEncryptionCriteria {
  /**
  * Encrypted locations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#encrypted_locations HipObject#encrypted_locations}
  */
  readonly encryptedLocations?: HipObjectDiskEncryptionCriteriaEncryptedLocations[] | cdktf.IResolvable;
  /**
  * Is Installed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#is_installed HipObject#is_installed}
  */
  readonly isInstalled?: boolean | cdktf.IResolvable;
}

export function hipObjectDiskEncryptionCriteriaToTerraform(struct?: HipObjectDiskEncryptionCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encrypted_locations: cdktf.listMapper(hipObjectDiskEncryptionCriteriaEncryptedLocationsToTerraform, false)(struct!.encryptedLocations),
    is_installed: cdktf.booleanToTerraform(struct!.isInstalled),
  }
}


export function hipObjectDiskEncryptionCriteriaToHclTerraform(struct?: HipObjectDiskEncryptionCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encrypted_locations: {
      value: cdktf.listMapperHcl(hipObjectDiskEncryptionCriteriaEncryptedLocationsToHclTerraform, false)(struct!.encryptedLocations),
      isBlock: true,
      type: "list",
      storageClassType: "HipObjectDiskEncryptionCriteriaEncryptedLocationsList",
    },
    is_installed: {
      value: cdktf.booleanToHclTerraform(struct!.isInstalled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectDiskEncryptionCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectDiskEncryptionCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptedLocations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptedLocations = this._encryptedLocations?.internalValue;
    }
    if (this._isInstalled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isInstalled = this._isInstalled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectDiskEncryptionCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptedLocations.internalValue = undefined;
      this._isInstalled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptedLocations.internalValue = value.encryptedLocations;
      this._isInstalled = value.isInstalled;
    }
  }

  // encrypted_locations - computed: true, optional: true, required: false
  private _encryptedLocations = new HipObjectDiskEncryptionCriteriaEncryptedLocationsList(this, "encrypted_locations", false);
  public get encryptedLocations() {
    return this._encryptedLocations;
  }
  public putEncryptedLocations(value: HipObjectDiskEncryptionCriteriaEncryptedLocations[] | cdktf.IResolvable) {
    this._encryptedLocations.internalValue = value;
  }
  public resetEncryptedLocations() {
    this._encryptedLocations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedLocationsInput() {
    return this._encryptedLocations.internalValue;
  }

  // is_installed - computed: true, optional: true, required: false
  private _isInstalled?: boolean | cdktf.IResolvable; 
  public get isInstalled() {
    return this.getBooleanAttribute('is_installed');
  }
  public set isInstalled(value: boolean | cdktf.IResolvable) {
    this._isInstalled = value;
  }
  public resetIsInstalled() {
    this._isInstalled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInstalledInput() {
    return this._isInstalled;
  }
}
export interface HipObjectDiskEncryptionVendor {
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#name HipObject#name}
  */
  readonly name: string;
  /**
  * Product
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#product HipObject#product}
  */
  readonly product?: string[];
}

export function hipObjectDiskEncryptionVendorToTerraform(struct?: HipObjectDiskEncryptionVendor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    product: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.product),
  }
}


export function hipObjectDiskEncryptionVendorToHclTerraform(struct?: HipObjectDiskEncryptionVendor | cdktf.IResolvable): any {
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
    product: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.product),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectDiskEncryptionVendorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HipObjectDiskEncryptionVendor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._product !== undefined) {
      hasAnyValues = true;
      internalValueResult.product = this._product;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectDiskEncryptionVendor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._product = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._product = value.product;
    }
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

  // product - computed: true, optional: true, required: false
  private _product?: string[]; 
  public get product() {
    return this.getListAttribute('product');
  }
  public set product(value: string[]) {
    this._product = value;
  }
  public resetProduct() {
    this._product = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }
}

export class HipObjectDiskEncryptionVendorList extends cdktf.ComplexList {
  public internalValue? : HipObjectDiskEncryptionVendor[] | cdktf.IResolvable

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
  public get(index: number): HipObjectDiskEncryptionVendorOutputReference {
    return new HipObjectDiskEncryptionVendorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HipObjectDiskEncryption {
  /**
  * Encryption locations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#criteria HipObject#criteria}
  */
  readonly criteria?: HipObjectDiskEncryptionCriteria;
  /**
  * Exclude vendor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#exclude_vendor HipObject#exclude_vendor}
  */
  readonly excludeVendor?: boolean | cdktf.IResolvable;
  /**
  * Vendor name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#vendor HipObject#vendor}
  */
  readonly vendor?: HipObjectDiskEncryptionVendor[] | cdktf.IResolvable;
}

export function hipObjectDiskEncryptionToTerraform(struct?: HipObjectDiskEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criteria: hipObjectDiskEncryptionCriteriaToTerraform(struct!.criteria),
    exclude_vendor: cdktf.booleanToTerraform(struct!.excludeVendor),
    vendor: cdktf.listMapper(hipObjectDiskEncryptionVendorToTerraform, false)(struct!.vendor),
  }
}


export function hipObjectDiskEncryptionToHclTerraform(struct?: HipObjectDiskEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    criteria: {
      value: hipObjectDiskEncryptionCriteriaToHclTerraform(struct!.criteria),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectDiskEncryptionCriteria",
    },
    exclude_vendor: {
      value: cdktf.booleanToHclTerraform(struct!.excludeVendor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vendor: {
      value: cdktf.listMapperHcl(hipObjectDiskEncryptionVendorToHclTerraform, false)(struct!.vendor),
      isBlock: true,
      type: "list",
      storageClassType: "HipObjectDiskEncryptionVendorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectDiskEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectDiskEncryption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria?.internalValue;
    }
    if (this._excludeVendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeVendor = this._excludeVendor;
    }
    if (this._vendor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendor = this._vendor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectDiskEncryption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._criteria.internalValue = undefined;
      this._excludeVendor = undefined;
      this._vendor.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._criteria.internalValue = value.criteria;
      this._excludeVendor = value.excludeVendor;
      this._vendor.internalValue = value.vendor;
    }
  }

  // criteria - computed: true, optional: true, required: false
  private _criteria = new HipObjectDiskEncryptionCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: HipObjectDiskEncryptionCriteria) {
    this._criteria.internalValue = value;
  }
  public resetCriteria() {
    this._criteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }

  // exclude_vendor - computed: true, optional: true, required: false
  private _excludeVendor?: boolean | cdktf.IResolvable; 
  public get excludeVendor() {
    return this.getBooleanAttribute('exclude_vendor');
  }
  public set excludeVendor(value: boolean | cdktf.IResolvable) {
    this._excludeVendor = value;
  }
  public resetExcludeVendor() {
    this._excludeVendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeVendorInput() {
    return this._excludeVendor;
  }

  // vendor - computed: true, optional: true, required: false
  private _vendor = new HipObjectDiskEncryptionVendorList(this, "vendor", false);
  public get vendor() {
    return this._vendor;
  }
  public putVendor(value: HipObjectDiskEncryptionVendor[] | cdktf.IResolvable) {
    this._vendor.internalValue = value;
  }
  public resetVendor() {
    this._vendor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor.internalValue;
  }
}
export interface HipObjectFirewallCriteria {
  /**
  * is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#is_enabled HipObject#is_enabled}
  */
  readonly isEnabled?: string;
  /**
  * Is Installed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#is_installed HipObject#is_installed}
  */
  readonly isInstalled?: boolean | cdktf.IResolvable;
}

export function hipObjectFirewallCriteriaToTerraform(struct?: HipObjectFirewallCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.stringToTerraform(struct!.isEnabled),
    is_installed: cdktf.booleanToTerraform(struct!.isInstalled),
  }
}


export function hipObjectFirewallCriteriaToHclTerraform(struct?: HipObjectFirewallCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.stringToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_installed: {
      value: cdktf.booleanToHclTerraform(struct!.isInstalled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectFirewallCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectFirewallCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._isInstalled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isInstalled = this._isInstalled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectFirewallCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isEnabled = undefined;
      this._isInstalled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isEnabled = value.isEnabled;
      this._isInstalled = value.isInstalled;
    }
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: string; 
  public get isEnabled() {
    return this.getStringAttribute('is_enabled');
  }
  public set isEnabled(value: string) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // is_installed - computed: true, optional: true, required: false
  private _isInstalled?: boolean | cdktf.IResolvable; 
  public get isInstalled() {
    return this.getBooleanAttribute('is_installed');
  }
  public set isInstalled(value: boolean | cdktf.IResolvable) {
    this._isInstalled = value;
  }
  public resetIsInstalled() {
    this._isInstalled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInstalledInput() {
    return this._isInstalled;
  }
}
export interface HipObjectFirewallVendor {
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#name HipObject#name}
  */
  readonly name: string;
  /**
  * Product
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#product HipObject#product}
  */
  readonly product?: string[];
}

export function hipObjectFirewallVendorToTerraform(struct?: HipObjectFirewallVendor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    product: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.product),
  }
}


export function hipObjectFirewallVendorToHclTerraform(struct?: HipObjectFirewallVendor | cdktf.IResolvable): any {
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
    product: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.product),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectFirewallVendorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HipObjectFirewallVendor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._product !== undefined) {
      hasAnyValues = true;
      internalValueResult.product = this._product;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectFirewallVendor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._product = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._product = value.product;
    }
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

  // product - computed: true, optional: true, required: false
  private _product?: string[]; 
  public get product() {
    return this.getListAttribute('product');
  }
  public set product(value: string[]) {
    this._product = value;
  }
  public resetProduct() {
    this._product = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }
}

export class HipObjectFirewallVendorList extends cdktf.ComplexList {
  public internalValue? : HipObjectFirewallVendor[] | cdktf.IResolvable

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
  public get(index: number): HipObjectFirewallVendorOutputReference {
    return new HipObjectFirewallVendorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HipObjectFirewall {
  /**
  * Criteria
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#criteria HipObject#criteria}
  */
  readonly criteria?: HipObjectFirewallCriteria;
  /**
  * Exclude vendor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#exclude_vendor HipObject#exclude_vendor}
  */
  readonly excludeVendor?: boolean | cdktf.IResolvable;
  /**
  * Vendor name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#vendor HipObject#vendor}
  */
  readonly vendor?: HipObjectFirewallVendor[] | cdktf.IResolvable;
}

export function hipObjectFirewallToTerraform(struct?: HipObjectFirewall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criteria: hipObjectFirewallCriteriaToTerraform(struct!.criteria),
    exclude_vendor: cdktf.booleanToTerraform(struct!.excludeVendor),
    vendor: cdktf.listMapper(hipObjectFirewallVendorToTerraform, false)(struct!.vendor),
  }
}


export function hipObjectFirewallToHclTerraform(struct?: HipObjectFirewall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    criteria: {
      value: hipObjectFirewallCriteriaToHclTerraform(struct!.criteria),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectFirewallCriteria",
    },
    exclude_vendor: {
      value: cdktf.booleanToHclTerraform(struct!.excludeVendor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vendor: {
      value: cdktf.listMapperHcl(hipObjectFirewallVendorToHclTerraform, false)(struct!.vendor),
      isBlock: true,
      type: "list",
      storageClassType: "HipObjectFirewallVendorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectFirewallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectFirewall | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria?.internalValue;
    }
    if (this._excludeVendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeVendor = this._excludeVendor;
    }
    if (this._vendor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendor = this._vendor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectFirewall | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._criteria.internalValue = undefined;
      this._excludeVendor = undefined;
      this._vendor.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._criteria.internalValue = value.criteria;
      this._excludeVendor = value.excludeVendor;
      this._vendor.internalValue = value.vendor;
    }
  }

  // criteria - computed: true, optional: true, required: false
  private _criteria = new HipObjectFirewallCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: HipObjectFirewallCriteria) {
    this._criteria.internalValue = value;
  }
  public resetCriteria() {
    this._criteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }

  // exclude_vendor - computed: true, optional: true, required: false
  private _excludeVendor?: boolean | cdktf.IResolvable; 
  public get excludeVendor() {
    return this.getBooleanAttribute('exclude_vendor');
  }
  public set excludeVendor(value: boolean | cdktf.IResolvable) {
    this._excludeVendor = value;
  }
  public resetExcludeVendor() {
    this._excludeVendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeVendorInput() {
    return this._excludeVendor;
  }

  // vendor - computed: true, optional: true, required: false
  private _vendor = new HipObjectFirewallVendorList(this, "vendor", false);
  public get vendor() {
    return this._vendor;
  }
  public putVendor(value: HipObjectFirewallVendor[] | cdktf.IResolvable) {
    this._vendor.internalValue = value;
  }
  public resetVendor() {
    this._vendor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor.internalValue;
  }
}
export interface HipObjectHostInfoCriteriaClientVersion {
  /**
  * Contains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#contains HipObject#contains}
  */
  readonly contains?: string;
  /**
  * Is
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#is HipObject#is}
  */
  readonly is?: string;
  /**
  * Is not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#is_not HipObject#is_not}
  */
  readonly isNot?: string;
}

export function hipObjectHostInfoCriteriaClientVersionToTerraform(struct?: HipObjectHostInfoCriteriaClientVersion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    is: cdktf.stringToTerraform(struct!.is),
    is_not: cdktf.stringToTerraform(struct!.isNot),
  }
}


export function hipObjectHostInfoCriteriaClientVersionToHclTerraform(struct?: HipObjectHostInfoCriteriaClientVersion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is: {
      value: cdktf.stringToHclTerraform(struct!.is),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_not: {
      value: cdktf.stringToHclTerraform(struct!.isNot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectHostInfoCriteriaClientVersionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectHostInfoCriteriaClientVersion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._is !== undefined) {
      hasAnyValues = true;
      internalValueResult.is = this._is;
    }
    if (this._isNot !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNot = this._isNot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectHostInfoCriteriaClientVersion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._is = undefined;
      this._isNot = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._is = value.is;
      this._isNot = value.isNot;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // is - computed: false, optional: true, required: false
  private _is?: string; 
  public get is() {
    return this.getStringAttribute('is');
  }
  public set is(value: string) {
    this._is = value;
  }
  public resetIs() {
    this._is = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInput() {
    return this._is;
  }

  // is_not - computed: false, optional: true, required: false
  private _isNot?: string; 
  public get isNot() {
    return this.getStringAttribute('is_not');
  }
  public set isNot(value: string) {
    this._isNot = value;
  }
  public resetIsNot() {
    this._isNot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNotInput() {
    return this._isNot;
  }
}
export interface HipObjectHostInfoCriteriaDomain {
  /**
  * Contains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#contains HipObject#contains}
  */
  readonly contains?: string;
  /**
  * Is
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#is HipObject#is}
  */
  readonly is?: string;
  /**
  * Is not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#is_not HipObject#is_not}
  */
  readonly isNot?: string;
}

export function hipObjectHostInfoCriteriaDomainToTerraform(struct?: HipObjectHostInfoCriteriaDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    is: cdktf.stringToTerraform(struct!.is),
    is_not: cdktf.stringToTerraform(struct!.isNot),
  }
}


export function hipObjectHostInfoCriteriaDomainToHclTerraform(struct?: HipObjectHostInfoCriteriaDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is: {
      value: cdktf.stringToHclTerraform(struct!.is),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_not: {
      value: cdktf.stringToHclTerraform(struct!.isNot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectHostInfoCriteriaDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectHostInfoCriteriaDomain | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._is !== undefined) {
      hasAnyValues = true;
      internalValueResult.is = this._is;
    }
    if (this._isNot !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNot = this._isNot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectHostInfoCriteriaDomain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._is = undefined;
      this._isNot = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._is = value.is;
      this._isNot = value.isNot;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // is - computed: false, optional: true, required: false
  private _is?: string; 
  public get is() {
    return this.getStringAttribute('is');
  }
  public set is(value: string) {
    this._is = value;
  }
  public resetIs() {
    this._is = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInput() {
    return this._is;
  }

  // is_not - computed: false, optional: true, required: false
  private _isNot?: string; 
  public get isNot() {
    return this.getStringAttribute('is_not');
  }
  public set isNot(value: string) {
    this._isNot = value;
  }
  public resetIsNot() {
    this._isNot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNotInput() {
    return this._isNot;
  }
}
export interface HipObjectHostInfoCriteriaHostId {
  /**
  * Contains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#contains HipObject#contains}
  */
  readonly contains?: string;
  /**
  * Is
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#is HipObject#is}
  */
  readonly is?: string;
  /**
  * Is not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#is_not HipObject#is_not}
  */
  readonly isNot?: string;
}

export function hipObjectHostInfoCriteriaHostIdToTerraform(struct?: HipObjectHostInfoCriteriaHostId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    is: cdktf.stringToTerraform(struct!.is),
    is_not: cdktf.stringToTerraform(struct!.isNot),
  }
}


export function hipObjectHostInfoCriteriaHostIdToHclTerraform(struct?: HipObjectHostInfoCriteriaHostId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is: {
      value: cdktf.stringToHclTerraform(struct!.is),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_not: {
      value: cdktf.stringToHclTerraform(struct!.isNot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectHostInfoCriteriaHostIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectHostInfoCriteriaHostId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._is !== undefined) {
      hasAnyValues = true;
      internalValueResult.is = this._is;
    }
    if (this._isNot !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNot = this._isNot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectHostInfoCriteriaHostId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._is = undefined;
      this._isNot = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._is = value.is;
      this._isNot = value.isNot;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // is - computed: false, optional: true, required: false
  private _is?: string; 
  public get is() {
    return this.getStringAttribute('is');
  }
  public set is(value: string) {
    this._is = value;
  }
  public resetIs() {
    this._is = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInput() {
    return this._is;
  }

  // is_not - computed: false, optional: true, required: false
  private _isNot?: string; 
  public get isNot() {
    return this.getStringAttribute('is_not');
  }
  public set isNot(value: string) {
    this._isNot = value;
  }
  public resetIsNot() {
    this._isNot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNotInput() {
    return this._isNot;
  }
}
export interface HipObjectHostInfoCriteriaHostName {
  /**
  * Contains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#contains HipObject#contains}
  */
  readonly contains?: string;
  /**
  * Is
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#is HipObject#is}
  */
  readonly is?: string;
  /**
  * Is not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#is_not HipObject#is_not}
  */
  readonly isNot?: string;
}

export function hipObjectHostInfoCriteriaHostNameToTerraform(struct?: HipObjectHostInfoCriteriaHostName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    is: cdktf.stringToTerraform(struct!.is),
    is_not: cdktf.stringToTerraform(struct!.isNot),
  }
}


export function hipObjectHostInfoCriteriaHostNameToHclTerraform(struct?: HipObjectHostInfoCriteriaHostName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is: {
      value: cdktf.stringToHclTerraform(struct!.is),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_not: {
      value: cdktf.stringToHclTerraform(struct!.isNot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectHostInfoCriteriaHostNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectHostInfoCriteriaHostName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._is !== undefined) {
      hasAnyValues = true;
      internalValueResult.is = this._is;
    }
    if (this._isNot !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNot = this._isNot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectHostInfoCriteriaHostName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._is = undefined;
      this._isNot = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._is = value.is;
      this._isNot = value.isNot;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // is - computed: false, optional: true, required: false
  private _is?: string; 
  public get is() {
    return this.getStringAttribute('is');
  }
  public set is(value: string) {
    this._is = value;
  }
  public resetIs() {
    this._is = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInput() {
    return this._is;
  }

  // is_not - computed: false, optional: true, required: false
  private _isNot?: string; 
  public get isNot() {
    return this.getStringAttribute('is_not');
  }
  public set isNot(value: string) {
    this._isNot = value;
  }
  public resetIsNot() {
    this._isNot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNotInput() {
    return this._isNot;
  }
}
export interface HipObjectHostInfoCriteriaOsContains {
  /**
  * Apple
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#apple HipObject#apple}
  */
  readonly apple?: string;
  /**
  * Google
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#google HipObject#google}
  */
  readonly google?: string;
  /**
  * Linux
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#linux HipObject#linux}
  */
  readonly linux?: string;
  /**
  * Microsoft
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#microsoft HipObject#microsoft}
  */
  readonly microsoft?: string;
  /**
  * Other
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#other HipObject#other}
  */
  readonly other?: string;
}

export function hipObjectHostInfoCriteriaOsContainsToTerraform(struct?: HipObjectHostInfoCriteriaOsContains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apple: cdktf.stringToTerraform(struct!.apple),
    google: cdktf.stringToTerraform(struct!.google),
    linux: cdktf.stringToTerraform(struct!.linux),
    microsoft: cdktf.stringToTerraform(struct!.microsoft),
    other: cdktf.stringToTerraform(struct!.other),
  }
}


export function hipObjectHostInfoCriteriaOsContainsToHclTerraform(struct?: HipObjectHostInfoCriteriaOsContains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apple: {
      value: cdktf.stringToHclTerraform(struct!.apple),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    google: {
      value: cdktf.stringToHclTerraform(struct!.google),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    linux: {
      value: cdktf.stringToHclTerraform(struct!.linux),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    microsoft: {
      value: cdktf.stringToHclTerraform(struct!.microsoft),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    other: {
      value: cdktf.stringToHclTerraform(struct!.other),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectHostInfoCriteriaOsContainsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectHostInfoCriteriaOsContains | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apple !== undefined) {
      hasAnyValues = true;
      internalValueResult.apple = this._apple;
    }
    if (this._google !== undefined) {
      hasAnyValues = true;
      internalValueResult.google = this._google;
    }
    if (this._linux !== undefined) {
      hasAnyValues = true;
      internalValueResult.linux = this._linux;
    }
    if (this._microsoft !== undefined) {
      hasAnyValues = true;
      internalValueResult.microsoft = this._microsoft;
    }
    if (this._other !== undefined) {
      hasAnyValues = true;
      internalValueResult.other = this._other;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectHostInfoCriteriaOsContains | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apple = undefined;
      this._google = undefined;
      this._linux = undefined;
      this._microsoft = undefined;
      this._other = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apple = value.apple;
      this._google = value.google;
      this._linux = value.linux;
      this._microsoft = value.microsoft;
      this._other = value.other;
    }
  }

  // apple - computed: false, optional: true, required: false
  private _apple?: string; 
  public get apple() {
    return this.getStringAttribute('apple');
  }
  public set apple(value: string) {
    this._apple = value;
  }
  public resetApple() {
    this._apple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appleInput() {
    return this._apple;
  }

  // google - computed: false, optional: true, required: false
  private _google?: string; 
  public get google() {
    return this.getStringAttribute('google');
  }
  public set google(value: string) {
    this._google = value;
  }
  public resetGoogle() {
    this._google = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleInput() {
    return this._google;
  }

  // linux - computed: false, optional: true, required: false
  private _linux?: string; 
  public get linux() {
    return this.getStringAttribute('linux');
  }
  public set linux(value: string) {
    this._linux = value;
  }
  public resetLinux() {
    this._linux = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxInput() {
    return this._linux;
  }

  // microsoft - computed: false, optional: true, required: false
  private _microsoft?: string; 
  public get microsoft() {
    return this.getStringAttribute('microsoft');
  }
  public set microsoft(value: string) {
    this._microsoft = value;
  }
  public resetMicrosoft() {
    this._microsoft = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftInput() {
    return this._microsoft;
  }

  // other - computed: false, optional: true, required: false
  private _other?: string; 
  public get other() {
    return this.getStringAttribute('other');
  }
  public set other(value: string) {
    this._other = value;
  }
  public resetOther() {
    this._other = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherInput() {
    return this._other;
  }
}
export interface HipObjectHostInfoCriteriaOs {
  /**
  * Contains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#contains HipObject#contains}
  */
  readonly contains?: HipObjectHostInfoCriteriaOsContains;
}

export function hipObjectHostInfoCriteriaOsToTerraform(struct?: HipObjectHostInfoCriteriaOs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: hipObjectHostInfoCriteriaOsContainsToTerraform(struct!.contains),
  }
}


export function hipObjectHostInfoCriteriaOsToHclTerraform(struct?: HipObjectHostInfoCriteriaOs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: hipObjectHostInfoCriteriaOsContainsToHclTerraform(struct!.contains),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectHostInfoCriteriaOsContains",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectHostInfoCriteriaOsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectHostInfoCriteriaOs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectHostInfoCriteriaOs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains.internalValue = value.contains;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains = new HipObjectHostInfoCriteriaOsContainsOutputReference(this, "contains");
  public get contains() {
    return this._contains;
  }
  public putContains(value: HipObjectHostInfoCriteriaOsContains) {
    this._contains.internalValue = value;
  }
  public resetContains() {
    this._contains.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains.internalValue;
  }
}
export interface HipObjectHostInfoCriteriaSerialNumber {
  /**
  * Contains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#contains HipObject#contains}
  */
  readonly contains?: string;
  /**
  * Is
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#is HipObject#is}
  */
  readonly is?: string;
  /**
  * Is not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#is_not HipObject#is_not}
  */
  readonly isNot?: string;
}

export function hipObjectHostInfoCriteriaSerialNumberToTerraform(struct?: HipObjectHostInfoCriteriaSerialNumber | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    is: cdktf.stringToTerraform(struct!.is),
    is_not: cdktf.stringToTerraform(struct!.isNot),
  }
}


export function hipObjectHostInfoCriteriaSerialNumberToHclTerraform(struct?: HipObjectHostInfoCriteriaSerialNumber | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is: {
      value: cdktf.stringToHclTerraform(struct!.is),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_not: {
      value: cdktf.stringToHclTerraform(struct!.isNot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectHostInfoCriteriaSerialNumberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectHostInfoCriteriaSerialNumber | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._is !== undefined) {
      hasAnyValues = true;
      internalValueResult.is = this._is;
    }
    if (this._isNot !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNot = this._isNot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectHostInfoCriteriaSerialNumber | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._is = undefined;
      this._isNot = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._is = value.is;
      this._isNot = value.isNot;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // is - computed: false, optional: true, required: false
  private _is?: string; 
  public get is() {
    return this.getStringAttribute('is');
  }
  public set is(value: string) {
    this._is = value;
  }
  public resetIs() {
    this._is = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInput() {
    return this._is;
  }

  // is_not - computed: false, optional: true, required: false
  private _isNot?: string; 
  public get isNot() {
    return this.getStringAttribute('is_not');
  }
  public set isNot(value: string) {
    this._isNot = value;
  }
  public resetIsNot() {
    this._isNot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNotInput() {
    return this._isNot;
  }
}
export interface HipObjectHostInfoCriteria {
  /**
  * Client version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#client_version HipObject#client_version}
  */
  readonly clientVersion?: HipObjectHostInfoCriteriaClientVersion;
  /**
  * Domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#domain HipObject#domain}
  */
  readonly domain?: HipObjectHostInfoCriteriaDomain;
  /**
  * Host id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#host_id HipObject#host_id}
  */
  readonly hostId?: HipObjectHostInfoCriteriaHostId;
  /**
  * Host name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#host_name HipObject#host_name}
  */
  readonly hostName?: HipObjectHostInfoCriteriaHostName;
  /**
  * If device is managed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#managed HipObject#managed}
  */
  readonly managed?: boolean | cdktf.IResolvable;
  /**
  * Os
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#os HipObject#os}
  */
  readonly os?: HipObjectHostInfoCriteriaOs;
  /**
  * Serial number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#serial_number HipObject#serial_number}
  */
  readonly serialNumber?: HipObjectHostInfoCriteriaSerialNumber;
}

export function hipObjectHostInfoCriteriaToTerraform(struct?: HipObjectHostInfoCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_version: hipObjectHostInfoCriteriaClientVersionToTerraform(struct!.clientVersion),
    domain: hipObjectHostInfoCriteriaDomainToTerraform(struct!.domain),
    host_id: hipObjectHostInfoCriteriaHostIdToTerraform(struct!.hostId),
    host_name: hipObjectHostInfoCriteriaHostNameToTerraform(struct!.hostName),
    managed: cdktf.booleanToTerraform(struct!.managed),
    os: hipObjectHostInfoCriteriaOsToTerraform(struct!.os),
    serial_number: hipObjectHostInfoCriteriaSerialNumberToTerraform(struct!.serialNumber),
  }
}


export function hipObjectHostInfoCriteriaToHclTerraform(struct?: HipObjectHostInfoCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_version: {
      value: hipObjectHostInfoCriteriaClientVersionToHclTerraform(struct!.clientVersion),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectHostInfoCriteriaClientVersion",
    },
    domain: {
      value: hipObjectHostInfoCriteriaDomainToHclTerraform(struct!.domain),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectHostInfoCriteriaDomain",
    },
    host_id: {
      value: hipObjectHostInfoCriteriaHostIdToHclTerraform(struct!.hostId),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectHostInfoCriteriaHostId",
    },
    host_name: {
      value: hipObjectHostInfoCriteriaHostNameToHclTerraform(struct!.hostName),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectHostInfoCriteriaHostName",
    },
    managed: {
      value: cdktf.booleanToHclTerraform(struct!.managed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    os: {
      value: hipObjectHostInfoCriteriaOsToHclTerraform(struct!.os),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectHostInfoCriteriaOs",
    },
    serial_number: {
      value: hipObjectHostInfoCriteriaSerialNumberToHclTerraform(struct!.serialNumber),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectHostInfoCriteriaSerialNumber",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectHostInfoCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectHostInfoCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientVersion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientVersion = this._clientVersion?.internalValue;
    }
    if (this._domain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain?.internalValue;
    }
    if (this._hostId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostId = this._hostId?.internalValue;
    }
    if (this._hostName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName?.internalValue;
    }
    if (this._managed !== undefined) {
      hasAnyValues = true;
      internalValueResult.managed = this._managed;
    }
    if (this._os?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.os = this._os?.internalValue;
    }
    if (this._serialNumber?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectHostInfoCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientVersion.internalValue = undefined;
      this._domain.internalValue = undefined;
      this._hostId.internalValue = undefined;
      this._hostName.internalValue = undefined;
      this._managed = undefined;
      this._os.internalValue = undefined;
      this._serialNumber.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientVersion.internalValue = value.clientVersion;
      this._domain.internalValue = value.domain;
      this._hostId.internalValue = value.hostId;
      this._hostName.internalValue = value.hostName;
      this._managed = value.managed;
      this._os.internalValue = value.os;
      this._serialNumber.internalValue = value.serialNumber;
    }
  }

  // client_version - computed: false, optional: true, required: false
  private _clientVersion = new HipObjectHostInfoCriteriaClientVersionOutputReference(this, "client_version");
  public get clientVersion() {
    return this._clientVersion;
  }
  public putClientVersion(value: HipObjectHostInfoCriteriaClientVersion) {
    this._clientVersion.internalValue = value;
  }
  public resetClientVersion() {
    this._clientVersion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientVersionInput() {
    return this._clientVersion.internalValue;
  }

  // domain - computed: false, optional: true, required: false
  private _domain = new HipObjectHostInfoCriteriaDomainOutputReference(this, "domain");
  public get domain() {
    return this._domain;
  }
  public putDomain(value: HipObjectHostInfoCriteriaDomain) {
    this._domain.internalValue = value;
  }
  public resetDomain() {
    this._domain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain.internalValue;
  }

  // host_id - computed: false, optional: true, required: false
  private _hostId = new HipObjectHostInfoCriteriaHostIdOutputReference(this, "host_id");
  public get hostId() {
    return this._hostId;
  }
  public putHostId(value: HipObjectHostInfoCriteriaHostId) {
    this._hostId.internalValue = value;
  }
  public resetHostId() {
    this._hostId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIdInput() {
    return this._hostId.internalValue;
  }

  // host_name - computed: false, optional: true, required: false
  private _hostName = new HipObjectHostInfoCriteriaHostNameOutputReference(this, "host_name");
  public get hostName() {
    return this._hostName;
  }
  public putHostName(value: HipObjectHostInfoCriteriaHostName) {
    this._hostName.internalValue = value;
  }
  public resetHostName() {
    this._hostName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName.internalValue;
  }

  // managed - computed: false, optional: true, required: false
  private _managed?: boolean | cdktf.IResolvable; 
  public get managed() {
    return this.getBooleanAttribute('managed');
  }
  public set managed(value: boolean | cdktf.IResolvable) {
    this._managed = value;
  }
  public resetManaged() {
    this._managed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInput() {
    return this._managed;
  }

  // os - computed: false, optional: true, required: false
  private _os = new HipObjectHostInfoCriteriaOsOutputReference(this, "os");
  public get os() {
    return this._os;
  }
  public putOs(value: HipObjectHostInfoCriteriaOs) {
    this._os.internalValue = value;
  }
  public resetOs() {
    this._os.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os.internalValue;
  }

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber = new HipObjectHostInfoCriteriaSerialNumberOutputReference(this, "serial_number");
  public get serialNumber() {
    return this._serialNumber;
  }
  public putSerialNumber(value: HipObjectHostInfoCriteriaSerialNumber) {
    this._serialNumber.internalValue = value;
  }
  public resetSerialNumber() {
    this._serialNumber.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber.internalValue;
  }
}
export interface HipObjectHostInfo {
  /**
  * Criteria
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#criteria HipObject#criteria}
  */
  readonly criteria: HipObjectHostInfoCriteria;
}

export function hipObjectHostInfoToTerraform(struct?: HipObjectHostInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criteria: hipObjectHostInfoCriteriaToTerraform(struct!.criteria),
  }
}


export function hipObjectHostInfoToHclTerraform(struct?: HipObjectHostInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    criteria: {
      value: hipObjectHostInfoCriteriaToHclTerraform(struct!.criteria),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectHostInfoCriteria",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectHostInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectHostInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectHostInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._criteria.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._criteria.internalValue = value.criteria;
    }
  }

  // criteria - computed: false, optional: false, required: true
  private _criteria = new HipObjectHostInfoCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: HipObjectHostInfoCriteria) {
    this._criteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }
}
export interface HipObjectMobileDeviceCriteriaApplicationsHasMalwareNo {
}

export function hipObjectMobileDeviceCriteriaApplicationsHasMalwareNoToTerraform(struct?: HipObjectMobileDeviceCriteriaApplicationsHasMalwareNo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function hipObjectMobileDeviceCriteriaApplicationsHasMalwareNoToHclTerraform(struct?: HipObjectMobileDeviceCriteriaApplicationsHasMalwareNo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class HipObjectMobileDeviceCriteriaApplicationsHasMalwareNoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectMobileDeviceCriteriaApplicationsHasMalwareNo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectMobileDeviceCriteriaApplicationsHasMalwareNo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface HipObjectMobileDeviceCriteriaApplicationsHasMalwareYesExcludes {
  /**
  * application hash
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#hash HipObject#hash}
  */
  readonly hash?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#name HipObject#name}
  */
  readonly name: string;
  /**
  * application package name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#package HipObject#package}
  */
  readonly package?: string;
}

export function hipObjectMobileDeviceCriteriaApplicationsHasMalwareYesExcludesToTerraform(struct?: HipObjectMobileDeviceCriteriaApplicationsHasMalwareYesExcludes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash: cdktf.stringToTerraform(struct!.hash),
    name: cdktf.stringToTerraform(struct!.name),
    package: cdktf.stringToTerraform(struct!.package),
  }
}


export function hipObjectMobileDeviceCriteriaApplicationsHasMalwareYesExcludesToHclTerraform(struct?: HipObjectMobileDeviceCriteriaApplicationsHasMalwareYesExcludes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hash: {
      value: cdktf.stringToHclTerraform(struct!.hash),
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
    package: {
      value: cdktf.stringToHclTerraform(struct!.package),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectMobileDeviceCriteriaApplicationsHasMalwareYesExcludesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HipObjectMobileDeviceCriteriaApplicationsHasMalwareYesExcludes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hash !== undefined) {
      hasAnyValues = true;
      internalValueResult.hash = this._hash;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._package !== undefined) {
      hasAnyValues = true;
      internalValueResult.package = this._package;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectMobileDeviceCriteriaApplicationsHasMalwareYesExcludes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hash = undefined;
      this._name = undefined;
      this._package = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hash = value.hash;
      this._name = value.name;
      this._package = value.package;
    }
  }

  // hash - computed: false, optional: true, required: false
  private _hash?: string; 
  public get hash() {
    return this.getStringAttribute('hash');
  }
  public set hash(value: string) {
    this._hash = value;
  }
  public resetHash() {
    this._hash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashInput() {
    return this._hash;
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

  // package - computed: false, optional: true, required: false
  private _package?: string; 
  public get package() {
    return this.getStringAttribute('package');
  }
  public set package(value: string) {
    this._package = value;
  }
  public resetPackage() {
    this._package = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageInput() {
    return this._package;
  }
}

export class HipObjectMobileDeviceCriteriaApplicationsHasMalwareYesExcludesList extends cdktf.ComplexList {
  public internalValue? : HipObjectMobileDeviceCriteriaApplicationsHasMalwareYesExcludes[] | cdktf.IResolvable

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
  public get(index: number): HipObjectMobileDeviceCriteriaApplicationsHasMalwareYesExcludesOutputReference {
    return new HipObjectMobileDeviceCriteriaApplicationsHasMalwareYesExcludesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HipObjectMobileDeviceCriteriaApplicationsHasMalwareYes {
  /**
  * Excludes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#excludes HipObject#excludes}
  */
  readonly excludes?: HipObjectMobileDeviceCriteriaApplicationsHasMalwareYesExcludes[] | cdktf.IResolvable;
}

export function hipObjectMobileDeviceCriteriaApplicationsHasMalwareYesToTerraform(struct?: HipObjectMobileDeviceCriteriaApplicationsHasMalwareYes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excludes: cdktf.listMapper(hipObjectMobileDeviceCriteriaApplicationsHasMalwareYesExcludesToTerraform, false)(struct!.excludes),
  }
}


export function hipObjectMobileDeviceCriteriaApplicationsHasMalwareYesToHclTerraform(struct?: HipObjectMobileDeviceCriteriaApplicationsHasMalwareYes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excludes: {
      value: cdktf.listMapperHcl(hipObjectMobileDeviceCriteriaApplicationsHasMalwareYesExcludesToHclTerraform, false)(struct!.excludes),
      isBlock: true,
      type: "list",
      storageClassType: "HipObjectMobileDeviceCriteriaApplicationsHasMalwareYesExcludesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectMobileDeviceCriteriaApplicationsHasMalwareYesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectMobileDeviceCriteriaApplicationsHasMalwareYes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludes = this._excludes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectMobileDeviceCriteriaApplicationsHasMalwareYes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludes.internalValue = value.excludes;
    }
  }

  // excludes - computed: false, optional: true, required: false
  private _excludes = new HipObjectMobileDeviceCriteriaApplicationsHasMalwareYesExcludesList(this, "excludes", false);
  public get excludes() {
    return this._excludes;
  }
  public putExcludes(value: HipObjectMobileDeviceCriteriaApplicationsHasMalwareYesExcludes[] | cdktf.IResolvable) {
    this._excludes.internalValue = value;
  }
  public resetExcludes() {
    this._excludes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesInput() {
    return this._excludes.internalValue;
  }
}
export interface HipObjectMobileDeviceCriteriaApplicationsHasMalware {
  /**
  * No
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#no HipObject#no}
  */
  readonly no?: HipObjectMobileDeviceCriteriaApplicationsHasMalwareNo;
  /**
  * Yes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#yes HipObject#yes}
  */
  readonly yes?: HipObjectMobileDeviceCriteriaApplicationsHasMalwareYes;
}

export function hipObjectMobileDeviceCriteriaApplicationsHasMalwareToTerraform(struct?: HipObjectMobileDeviceCriteriaApplicationsHasMalware | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no: hipObjectMobileDeviceCriteriaApplicationsHasMalwareNoToTerraform(struct!.no),
    yes: hipObjectMobileDeviceCriteriaApplicationsHasMalwareYesToTerraform(struct!.yes),
  }
}


export function hipObjectMobileDeviceCriteriaApplicationsHasMalwareToHclTerraform(struct?: HipObjectMobileDeviceCriteriaApplicationsHasMalware | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no: {
      value: hipObjectMobileDeviceCriteriaApplicationsHasMalwareNoToHclTerraform(struct!.no),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectMobileDeviceCriteriaApplicationsHasMalwareNo",
    },
    yes: {
      value: hipObjectMobileDeviceCriteriaApplicationsHasMalwareYesToHclTerraform(struct!.yes),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectMobileDeviceCriteriaApplicationsHasMalwareYes",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectMobileDeviceCriteriaApplicationsHasMalwareOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectMobileDeviceCriteriaApplicationsHasMalware | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._no?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.no = this._no?.internalValue;
    }
    if (this._yes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yes = this._yes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectMobileDeviceCriteriaApplicationsHasMalware | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._no.internalValue = undefined;
      this._yes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._no.internalValue = value.no;
      this._yes.internalValue = value.yes;
    }
  }

  // no - computed: false, optional: true, required: false
  private _no = new HipObjectMobileDeviceCriteriaApplicationsHasMalwareNoOutputReference(this, "no");
  public get no() {
    return this._no;
  }
  public putNo(value: HipObjectMobileDeviceCriteriaApplicationsHasMalwareNo) {
    this._no.internalValue = value;
  }
  public resetNo() {
    this._no.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noInput() {
    return this._no.internalValue;
  }

  // yes - computed: false, optional: true, required: false
  private _yes = new HipObjectMobileDeviceCriteriaApplicationsHasMalwareYesOutputReference(this, "yes");
  public get yes() {
    return this._yes;
  }
  public putYes(value: HipObjectMobileDeviceCriteriaApplicationsHasMalwareYes) {
    this._yes.internalValue = value;
  }
  public resetYes() {
    this._yes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yesInput() {
    return this._yes.internalValue;
  }
}
export interface HipObjectMobileDeviceCriteriaApplicationsIncludes {
  /**
  * application hash
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#hash HipObject#hash}
  */
  readonly hash?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#name HipObject#name}
  */
  readonly name: string;
  /**
  * application package name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#package HipObject#package}
  */
  readonly package?: string;
}

export function hipObjectMobileDeviceCriteriaApplicationsIncludesToTerraform(struct?: HipObjectMobileDeviceCriteriaApplicationsIncludes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash: cdktf.stringToTerraform(struct!.hash),
    name: cdktf.stringToTerraform(struct!.name),
    package: cdktf.stringToTerraform(struct!.package),
  }
}


export function hipObjectMobileDeviceCriteriaApplicationsIncludesToHclTerraform(struct?: HipObjectMobileDeviceCriteriaApplicationsIncludes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hash: {
      value: cdktf.stringToHclTerraform(struct!.hash),
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
    package: {
      value: cdktf.stringToHclTerraform(struct!.package),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectMobileDeviceCriteriaApplicationsIncludesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HipObjectMobileDeviceCriteriaApplicationsIncludes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hash !== undefined) {
      hasAnyValues = true;
      internalValueResult.hash = this._hash;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._package !== undefined) {
      hasAnyValues = true;
      internalValueResult.package = this._package;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectMobileDeviceCriteriaApplicationsIncludes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hash = undefined;
      this._name = undefined;
      this._package = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hash = value.hash;
      this._name = value.name;
      this._package = value.package;
    }
  }

  // hash - computed: false, optional: true, required: false
  private _hash?: string; 
  public get hash() {
    return this.getStringAttribute('hash');
  }
  public set hash(value: string) {
    this._hash = value;
  }
  public resetHash() {
    this._hash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashInput() {
    return this._hash;
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

  // package - computed: false, optional: true, required: false
  private _package?: string; 
  public get package() {
    return this.getStringAttribute('package');
  }
  public set package(value: string) {
    this._package = value;
  }
  public resetPackage() {
    this._package = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageInput() {
    return this._package;
  }
}

export class HipObjectMobileDeviceCriteriaApplicationsIncludesList extends cdktf.ComplexList {
  public internalValue? : HipObjectMobileDeviceCriteriaApplicationsIncludes[] | cdktf.IResolvable

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
  public get(index: number): HipObjectMobileDeviceCriteriaApplicationsIncludesOutputReference {
    return new HipObjectMobileDeviceCriteriaApplicationsIncludesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HipObjectMobileDeviceCriteriaApplications {
  /**
  * Has malware
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#has_malware HipObject#has_malware}
  */
  readonly hasMalware?: HipObjectMobileDeviceCriteriaApplicationsHasMalware;
  /**
  * Has apps that are not managed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#has_unmanaged_app HipObject#has_unmanaged_app}
  */
  readonly hasUnmanagedApp?: boolean | cdktf.IResolvable;
  /**
  * Includes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#includes HipObject#includes}
  */
  readonly includes?: HipObjectMobileDeviceCriteriaApplicationsIncludes[] | cdktf.IResolvable;
}

export function hipObjectMobileDeviceCriteriaApplicationsToTerraform(struct?: HipObjectMobileDeviceCriteriaApplications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    has_malware: hipObjectMobileDeviceCriteriaApplicationsHasMalwareToTerraform(struct!.hasMalware),
    has_unmanaged_app: cdktf.booleanToTerraform(struct!.hasUnmanagedApp),
    includes: cdktf.listMapper(hipObjectMobileDeviceCriteriaApplicationsIncludesToTerraform, false)(struct!.includes),
  }
}


export function hipObjectMobileDeviceCriteriaApplicationsToHclTerraform(struct?: HipObjectMobileDeviceCriteriaApplications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    has_malware: {
      value: hipObjectMobileDeviceCriteriaApplicationsHasMalwareToHclTerraform(struct!.hasMalware),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectMobileDeviceCriteriaApplicationsHasMalware",
    },
    has_unmanaged_app: {
      value: cdktf.booleanToHclTerraform(struct!.hasUnmanagedApp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    includes: {
      value: cdktf.listMapperHcl(hipObjectMobileDeviceCriteriaApplicationsIncludesToHclTerraform, false)(struct!.includes),
      isBlock: true,
      type: "list",
      storageClassType: "HipObjectMobileDeviceCriteriaApplicationsIncludesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectMobileDeviceCriteriaApplicationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectMobileDeviceCriteriaApplications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hasMalware?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasMalware = this._hasMalware?.internalValue;
    }
    if (this._hasUnmanagedApp !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasUnmanagedApp = this._hasUnmanagedApp;
    }
    if (this._includes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includes = this._includes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectMobileDeviceCriteriaApplications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hasMalware.internalValue = undefined;
      this._hasUnmanagedApp = undefined;
      this._includes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hasMalware.internalValue = value.hasMalware;
      this._hasUnmanagedApp = value.hasUnmanagedApp;
      this._includes.internalValue = value.includes;
    }
  }

  // has_malware - computed: false, optional: true, required: false
  private _hasMalware = new HipObjectMobileDeviceCriteriaApplicationsHasMalwareOutputReference(this, "has_malware");
  public get hasMalware() {
    return this._hasMalware;
  }
  public putHasMalware(value: HipObjectMobileDeviceCriteriaApplicationsHasMalware) {
    this._hasMalware.internalValue = value;
  }
  public resetHasMalware() {
    this._hasMalware.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasMalwareInput() {
    return this._hasMalware.internalValue;
  }

  // has_unmanaged_app - computed: false, optional: true, required: false
  private _hasUnmanagedApp?: boolean | cdktf.IResolvable; 
  public get hasUnmanagedApp() {
    return this.getBooleanAttribute('has_unmanaged_app');
  }
  public set hasUnmanagedApp(value: boolean | cdktf.IResolvable) {
    this._hasUnmanagedApp = value;
  }
  public resetHasUnmanagedApp() {
    this._hasUnmanagedApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasUnmanagedAppInput() {
    return this._hasUnmanagedApp;
  }

  // includes - computed: false, optional: true, required: false
  private _includes = new HipObjectMobileDeviceCriteriaApplicationsIncludesList(this, "includes", false);
  public get includes() {
    return this._includes;
  }
  public putIncludes(value: HipObjectMobileDeviceCriteriaApplicationsIncludes[] | cdktf.IResolvable) {
    this._includes.internalValue = value;
  }
  public resetIncludes() {
    this._includes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includesInput() {
    return this._includes.internalValue;
  }
}
export interface HipObjectMobileDeviceCriteriaImei {
  /**
  * Contains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#contains HipObject#contains}
  */
  readonly contains?: string;
  /**
  * Is
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#is HipObject#is}
  */
  readonly is?: string;
  /**
  * Is not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#is_not HipObject#is_not}
  */
  readonly isNot?: string;
}

export function hipObjectMobileDeviceCriteriaImeiToTerraform(struct?: HipObjectMobileDeviceCriteriaImei | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    is: cdktf.stringToTerraform(struct!.is),
    is_not: cdktf.stringToTerraform(struct!.isNot),
  }
}


export function hipObjectMobileDeviceCriteriaImeiToHclTerraform(struct?: HipObjectMobileDeviceCriteriaImei | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is: {
      value: cdktf.stringToHclTerraform(struct!.is),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_not: {
      value: cdktf.stringToHclTerraform(struct!.isNot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectMobileDeviceCriteriaImeiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectMobileDeviceCriteriaImei | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._is !== undefined) {
      hasAnyValues = true;
      internalValueResult.is = this._is;
    }
    if (this._isNot !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNot = this._isNot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectMobileDeviceCriteriaImei | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._is = undefined;
      this._isNot = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._is = value.is;
      this._isNot = value.isNot;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // is - computed: false, optional: true, required: false
  private _is?: string; 
  public get is() {
    return this.getStringAttribute('is');
  }
  public set is(value: string) {
    this._is = value;
  }
  public resetIs() {
    this._is = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInput() {
    return this._is;
  }

  // is_not - computed: false, optional: true, required: false
  private _isNot?: string; 
  public get isNot() {
    return this.getStringAttribute('is_not');
  }
  public set isNot(value: string) {
    this._isNot = value;
  }
  public resetIsNot() {
    this._isNot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNotInput() {
    return this._isNot;
  }
}
export interface HipObjectMobileDeviceCriteriaLastCheckinTimeNotWithin {
  /**
  * specify time in days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#days HipObject#days}
  */
  readonly days: number;
}

export function hipObjectMobileDeviceCriteriaLastCheckinTimeNotWithinToTerraform(struct?: HipObjectMobileDeviceCriteriaLastCheckinTimeNotWithin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
  }
}


export function hipObjectMobileDeviceCriteriaLastCheckinTimeNotWithinToHclTerraform(struct?: HipObjectMobileDeviceCriteriaLastCheckinTimeNotWithin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectMobileDeviceCriteriaLastCheckinTimeNotWithinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectMobileDeviceCriteriaLastCheckinTimeNotWithin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectMobileDeviceCriteriaLastCheckinTimeNotWithin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._days = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._days = value.days;
    }
  }

  // days - computed: false, optional: false, required: true
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }
}
export interface HipObjectMobileDeviceCriteriaLastCheckinTimeWithin {
  /**
  * specify time in days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#days HipObject#days}
  */
  readonly days: number;
}

export function hipObjectMobileDeviceCriteriaLastCheckinTimeWithinToTerraform(struct?: HipObjectMobileDeviceCriteriaLastCheckinTimeWithin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
  }
}


export function hipObjectMobileDeviceCriteriaLastCheckinTimeWithinToHclTerraform(struct?: HipObjectMobileDeviceCriteriaLastCheckinTimeWithin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectMobileDeviceCriteriaLastCheckinTimeWithinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectMobileDeviceCriteriaLastCheckinTimeWithin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectMobileDeviceCriteriaLastCheckinTimeWithin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._days = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._days = value.days;
    }
  }

  // days - computed: false, optional: false, required: true
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }
}
export interface HipObjectMobileDeviceCriteriaLastCheckinTime {
  /**
  * Not within
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#not_within HipObject#not_within}
  */
  readonly notWithin?: HipObjectMobileDeviceCriteriaLastCheckinTimeNotWithin;
  /**
  * Within
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#within HipObject#within}
  */
  readonly within?: HipObjectMobileDeviceCriteriaLastCheckinTimeWithin;
}

export function hipObjectMobileDeviceCriteriaLastCheckinTimeToTerraform(struct?: HipObjectMobileDeviceCriteriaLastCheckinTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    not_within: hipObjectMobileDeviceCriteriaLastCheckinTimeNotWithinToTerraform(struct!.notWithin),
    within: hipObjectMobileDeviceCriteriaLastCheckinTimeWithinToTerraform(struct!.within),
  }
}


export function hipObjectMobileDeviceCriteriaLastCheckinTimeToHclTerraform(struct?: HipObjectMobileDeviceCriteriaLastCheckinTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    not_within: {
      value: hipObjectMobileDeviceCriteriaLastCheckinTimeNotWithinToHclTerraform(struct!.notWithin),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectMobileDeviceCriteriaLastCheckinTimeNotWithin",
    },
    within: {
      value: hipObjectMobileDeviceCriteriaLastCheckinTimeWithinToHclTerraform(struct!.within),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectMobileDeviceCriteriaLastCheckinTimeWithin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectMobileDeviceCriteriaLastCheckinTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectMobileDeviceCriteriaLastCheckinTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notWithin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notWithin = this._notWithin?.internalValue;
    }
    if (this._within?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.within = this._within?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectMobileDeviceCriteriaLastCheckinTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notWithin.internalValue = undefined;
      this._within.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notWithin.internalValue = value.notWithin;
      this._within.internalValue = value.within;
    }
  }

  // not_within - computed: false, optional: true, required: false
  private _notWithin = new HipObjectMobileDeviceCriteriaLastCheckinTimeNotWithinOutputReference(this, "not_within");
  public get notWithin() {
    return this._notWithin;
  }
  public putNotWithin(value: HipObjectMobileDeviceCriteriaLastCheckinTimeNotWithin) {
    this._notWithin.internalValue = value;
  }
  public resetNotWithin() {
    this._notWithin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notWithinInput() {
    return this._notWithin.internalValue;
  }

  // within - computed: false, optional: true, required: false
  private _within = new HipObjectMobileDeviceCriteriaLastCheckinTimeWithinOutputReference(this, "within");
  public get within() {
    return this._within;
  }
  public putWithin(value: HipObjectMobileDeviceCriteriaLastCheckinTimeWithin) {
    this._within.internalValue = value;
  }
  public resetWithin() {
    this._within.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withinInput() {
    return this._within.internalValue;
  }
}
export interface HipObjectMobileDeviceCriteriaModel {
  /**
  * Contains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#contains HipObject#contains}
  */
  readonly contains?: string;
  /**
  * Is
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#is HipObject#is}
  */
  readonly is?: string;
  /**
  * Is not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#is_not HipObject#is_not}
  */
  readonly isNot?: string;
}

export function hipObjectMobileDeviceCriteriaModelToTerraform(struct?: HipObjectMobileDeviceCriteriaModel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    is: cdktf.stringToTerraform(struct!.is),
    is_not: cdktf.stringToTerraform(struct!.isNot),
  }
}


export function hipObjectMobileDeviceCriteriaModelToHclTerraform(struct?: HipObjectMobileDeviceCriteriaModel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is: {
      value: cdktf.stringToHclTerraform(struct!.is),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_not: {
      value: cdktf.stringToHclTerraform(struct!.isNot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectMobileDeviceCriteriaModelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectMobileDeviceCriteriaModel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._is !== undefined) {
      hasAnyValues = true;
      internalValueResult.is = this._is;
    }
    if (this._isNot !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNot = this._isNot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectMobileDeviceCriteriaModel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._is = undefined;
      this._isNot = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._is = value.is;
      this._isNot = value.isNot;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // is - computed: false, optional: true, required: false
  private _is?: string; 
  public get is() {
    return this.getStringAttribute('is');
  }
  public set is(value: string) {
    this._is = value;
  }
  public resetIs() {
    this._is = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInput() {
    return this._is;
  }

  // is_not - computed: false, optional: true, required: false
  private _isNot?: string; 
  public get isNot() {
    return this.getStringAttribute('is_not');
  }
  public set isNot(value: string) {
    this._isNot = value;
  }
  public resetIsNot() {
    this._isNot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNotInput() {
    return this._isNot;
  }
}
export interface HipObjectMobileDeviceCriteriaPhoneNumber {
  /**
  * Contains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#contains HipObject#contains}
  */
  readonly contains?: string;
  /**
  * Is
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#is HipObject#is}
  */
  readonly is?: string;
  /**
  * Is not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#is_not HipObject#is_not}
  */
  readonly isNot?: string;
}

export function hipObjectMobileDeviceCriteriaPhoneNumberToTerraform(struct?: HipObjectMobileDeviceCriteriaPhoneNumber | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    is: cdktf.stringToTerraform(struct!.is),
    is_not: cdktf.stringToTerraform(struct!.isNot),
  }
}


export function hipObjectMobileDeviceCriteriaPhoneNumberToHclTerraform(struct?: HipObjectMobileDeviceCriteriaPhoneNumber | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is: {
      value: cdktf.stringToHclTerraform(struct!.is),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_not: {
      value: cdktf.stringToHclTerraform(struct!.isNot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectMobileDeviceCriteriaPhoneNumberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectMobileDeviceCriteriaPhoneNumber | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._is !== undefined) {
      hasAnyValues = true;
      internalValueResult.is = this._is;
    }
    if (this._isNot !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNot = this._isNot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectMobileDeviceCriteriaPhoneNumber | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._is = undefined;
      this._isNot = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._is = value.is;
      this._isNot = value.isNot;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // is - computed: false, optional: true, required: false
  private _is?: string; 
  public get is() {
    return this.getStringAttribute('is');
  }
  public set is(value: string) {
    this._is = value;
  }
  public resetIs() {
    this._is = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInput() {
    return this._is;
  }

  // is_not - computed: false, optional: true, required: false
  private _isNot?: string; 
  public get isNot() {
    return this.getStringAttribute('is_not');
  }
  public set isNot(value: string) {
    this._isNot = value;
  }
  public resetIsNot() {
    this._isNot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNotInput() {
    return this._isNot;
  }
}
export interface HipObjectMobileDeviceCriteriaTag {
  /**
  * Contains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#contains HipObject#contains}
  */
  readonly contains?: string;
  /**
  * Is
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#is HipObject#is}
  */
  readonly is?: string;
  /**
  * Is not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#is_not HipObject#is_not}
  */
  readonly isNot?: string;
}

export function hipObjectMobileDeviceCriteriaTagToTerraform(struct?: HipObjectMobileDeviceCriteriaTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    is: cdktf.stringToTerraform(struct!.is),
    is_not: cdktf.stringToTerraform(struct!.isNot),
  }
}


export function hipObjectMobileDeviceCriteriaTagToHclTerraform(struct?: HipObjectMobileDeviceCriteriaTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is: {
      value: cdktf.stringToHclTerraform(struct!.is),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_not: {
      value: cdktf.stringToHclTerraform(struct!.isNot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectMobileDeviceCriteriaTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectMobileDeviceCriteriaTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._is !== undefined) {
      hasAnyValues = true;
      internalValueResult.is = this._is;
    }
    if (this._isNot !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNot = this._isNot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectMobileDeviceCriteriaTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._is = undefined;
      this._isNot = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._is = value.is;
      this._isNot = value.isNot;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // is - computed: false, optional: true, required: false
  private _is?: string; 
  public get is() {
    return this.getStringAttribute('is');
  }
  public set is(value: string) {
    this._is = value;
  }
  public resetIs() {
    this._is = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInput() {
    return this._is;
  }

  // is_not - computed: false, optional: true, required: false
  private _isNot?: string; 
  public get isNot() {
    return this.getStringAttribute('is_not');
  }
  public set isNot(value: string) {
    this._isNot = value;
  }
  public resetIsNot() {
    this._isNot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNotInput() {
    return this._isNot;
  }
}
export interface HipObjectMobileDeviceCriteria {
  /**
  * Applications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#applications HipObject#applications}
  */
  readonly applications?: HipObjectMobileDeviceCriteriaApplications;
  /**
  * If device's disk is encrypted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#disk_encrypted HipObject#disk_encrypted}
  */
  readonly diskEncrypted?: boolean | cdktf.IResolvable;
  /**
  * Imei
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#imei HipObject#imei}
  */
  readonly imei?: HipObjectMobileDeviceCriteriaImei;
  /**
  * If device is by rooted/jailbroken
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#jailbroken HipObject#jailbroken}
  */
  readonly jailbroken?: boolean | cdktf.IResolvable;
  /**
  * Last checkin time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#last_checkin_time HipObject#last_checkin_time}
  */
  readonly lastCheckinTime?: HipObjectMobileDeviceCriteriaLastCheckinTime;
  /**
  * Model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#model HipObject#model}
  */
  readonly model?: HipObjectMobileDeviceCriteriaModel;
  /**
  * If device's passcode is present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#passcode_set HipObject#passcode_set}
  */
  readonly passcodeSet?: boolean | cdktf.IResolvable;
  /**
  * Phone number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#phone_number HipObject#phone_number}
  */
  readonly phoneNumber?: HipObjectMobileDeviceCriteriaPhoneNumber;
  /**
  * Tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#tag HipObject#tag}
  */
  readonly tag?: HipObjectMobileDeviceCriteriaTag;
}

export function hipObjectMobileDeviceCriteriaToTerraform(struct?: HipObjectMobileDeviceCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    applications: hipObjectMobileDeviceCriteriaApplicationsToTerraform(struct!.applications),
    disk_encrypted: cdktf.booleanToTerraform(struct!.diskEncrypted),
    imei: hipObjectMobileDeviceCriteriaImeiToTerraform(struct!.imei),
    jailbroken: cdktf.booleanToTerraform(struct!.jailbroken),
    last_checkin_time: hipObjectMobileDeviceCriteriaLastCheckinTimeToTerraform(struct!.lastCheckinTime),
    model: hipObjectMobileDeviceCriteriaModelToTerraform(struct!.model),
    passcode_set: cdktf.booleanToTerraform(struct!.passcodeSet),
    phone_number: hipObjectMobileDeviceCriteriaPhoneNumberToTerraform(struct!.phoneNumber),
    tag: hipObjectMobileDeviceCriteriaTagToTerraform(struct!.tag),
  }
}


export function hipObjectMobileDeviceCriteriaToHclTerraform(struct?: HipObjectMobileDeviceCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    applications: {
      value: hipObjectMobileDeviceCriteriaApplicationsToHclTerraform(struct!.applications),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectMobileDeviceCriteriaApplications",
    },
    disk_encrypted: {
      value: cdktf.booleanToHclTerraform(struct!.diskEncrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    imei: {
      value: hipObjectMobileDeviceCriteriaImeiToHclTerraform(struct!.imei),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectMobileDeviceCriteriaImei",
    },
    jailbroken: {
      value: cdktf.booleanToHclTerraform(struct!.jailbroken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    last_checkin_time: {
      value: hipObjectMobileDeviceCriteriaLastCheckinTimeToHclTerraform(struct!.lastCheckinTime),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectMobileDeviceCriteriaLastCheckinTime",
    },
    model: {
      value: hipObjectMobileDeviceCriteriaModelToHclTerraform(struct!.model),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectMobileDeviceCriteriaModel",
    },
    passcode_set: {
      value: cdktf.booleanToHclTerraform(struct!.passcodeSet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    phone_number: {
      value: hipObjectMobileDeviceCriteriaPhoneNumberToHclTerraform(struct!.phoneNumber),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectMobileDeviceCriteriaPhoneNumber",
    },
    tag: {
      value: hipObjectMobileDeviceCriteriaTagToHclTerraform(struct!.tag),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectMobileDeviceCriteriaTag",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectMobileDeviceCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectMobileDeviceCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applications = this._applications?.internalValue;
    }
    if (this._diskEncrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskEncrypted = this._diskEncrypted;
    }
    if (this._imei?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imei = this._imei?.internalValue;
    }
    if (this._jailbroken !== undefined) {
      hasAnyValues = true;
      internalValueResult.jailbroken = this._jailbroken;
    }
    if (this._lastCheckinTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastCheckinTime = this._lastCheckinTime?.internalValue;
    }
    if (this._model?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model?.internalValue;
    }
    if (this._passcodeSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.passcodeSet = this._passcodeSet;
    }
    if (this._phoneNumber?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber?.internalValue;
    }
    if (this._tag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectMobileDeviceCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applications.internalValue = undefined;
      this._diskEncrypted = undefined;
      this._imei.internalValue = undefined;
      this._jailbroken = undefined;
      this._lastCheckinTime.internalValue = undefined;
      this._model.internalValue = undefined;
      this._passcodeSet = undefined;
      this._phoneNumber.internalValue = undefined;
      this._tag.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applications.internalValue = value.applications;
      this._diskEncrypted = value.diskEncrypted;
      this._imei.internalValue = value.imei;
      this._jailbroken = value.jailbroken;
      this._lastCheckinTime.internalValue = value.lastCheckinTime;
      this._model.internalValue = value.model;
      this._passcodeSet = value.passcodeSet;
      this._phoneNumber.internalValue = value.phoneNumber;
      this._tag.internalValue = value.tag;
    }
  }

  // applications - computed: false, optional: true, required: false
  private _applications = new HipObjectMobileDeviceCriteriaApplicationsOutputReference(this, "applications");
  public get applications() {
    return this._applications;
  }
  public putApplications(value: HipObjectMobileDeviceCriteriaApplications) {
    this._applications.internalValue = value;
  }
  public resetApplications() {
    this._applications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications.internalValue;
  }

  // disk_encrypted - computed: false, optional: true, required: false
  private _diskEncrypted?: boolean | cdktf.IResolvable; 
  public get diskEncrypted() {
    return this.getBooleanAttribute('disk_encrypted');
  }
  public set diskEncrypted(value: boolean | cdktf.IResolvable) {
    this._diskEncrypted = value;
  }
  public resetDiskEncrypted() {
    this._diskEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptedInput() {
    return this._diskEncrypted;
  }

  // imei - computed: false, optional: true, required: false
  private _imei = new HipObjectMobileDeviceCriteriaImeiOutputReference(this, "imei");
  public get imei() {
    return this._imei;
  }
  public putImei(value: HipObjectMobileDeviceCriteriaImei) {
    this._imei.internalValue = value;
  }
  public resetImei() {
    this._imei.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imeiInput() {
    return this._imei.internalValue;
  }

  // jailbroken - computed: false, optional: true, required: false
  private _jailbroken?: boolean | cdktf.IResolvable; 
  public get jailbroken() {
    return this.getBooleanAttribute('jailbroken');
  }
  public set jailbroken(value: boolean | cdktf.IResolvable) {
    this._jailbroken = value;
  }
  public resetJailbroken() {
    this._jailbroken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jailbrokenInput() {
    return this._jailbroken;
  }

  // last_checkin_time - computed: false, optional: true, required: false
  private _lastCheckinTime = new HipObjectMobileDeviceCriteriaLastCheckinTimeOutputReference(this, "last_checkin_time");
  public get lastCheckinTime() {
    return this._lastCheckinTime;
  }
  public putLastCheckinTime(value: HipObjectMobileDeviceCriteriaLastCheckinTime) {
    this._lastCheckinTime.internalValue = value;
  }
  public resetLastCheckinTime() {
    this._lastCheckinTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastCheckinTimeInput() {
    return this._lastCheckinTime.internalValue;
  }

  // model - computed: false, optional: true, required: false
  private _model = new HipObjectMobileDeviceCriteriaModelOutputReference(this, "model");
  public get model() {
    return this._model;
  }
  public putModel(value: HipObjectMobileDeviceCriteriaModel) {
    this._model.internalValue = value;
  }
  public resetModel() {
    this._model.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model.internalValue;
  }

  // passcode_set - computed: false, optional: true, required: false
  private _passcodeSet?: boolean | cdktf.IResolvable; 
  public get passcodeSet() {
    return this.getBooleanAttribute('passcode_set');
  }
  public set passcodeSet(value: boolean | cdktf.IResolvable) {
    this._passcodeSet = value;
  }
  public resetPasscodeSet() {
    this._passcodeSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passcodeSetInput() {
    return this._passcodeSet;
  }

  // phone_number - computed: false, optional: true, required: false
  private _phoneNumber = new HipObjectMobileDeviceCriteriaPhoneNumberOutputReference(this, "phone_number");
  public get phoneNumber() {
    return this._phoneNumber;
  }
  public putPhoneNumber(value: HipObjectMobileDeviceCriteriaPhoneNumber) {
    this._phoneNumber.internalValue = value;
  }
  public resetPhoneNumber() {
    this._phoneNumber.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new HipObjectMobileDeviceCriteriaTagOutputReference(this, "tag");
  public get tag() {
    return this._tag;
  }
  public putTag(value: HipObjectMobileDeviceCriteriaTag) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }
}
export interface HipObjectMobileDevice {
  /**
  * Criteria
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#criteria HipObject#criteria}
  */
  readonly criteria?: HipObjectMobileDeviceCriteria;
}

export function hipObjectMobileDeviceToTerraform(struct?: HipObjectMobileDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criteria: hipObjectMobileDeviceCriteriaToTerraform(struct!.criteria),
  }
}


export function hipObjectMobileDeviceToHclTerraform(struct?: HipObjectMobileDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    criteria: {
      value: hipObjectMobileDeviceCriteriaToHclTerraform(struct!.criteria),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectMobileDeviceCriteria",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectMobileDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectMobileDevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectMobileDevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._criteria.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._criteria.internalValue = value.criteria;
    }
  }

  // criteria - computed: false, optional: true, required: false
  private _criteria = new HipObjectMobileDeviceCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: HipObjectMobileDeviceCriteria) {
    this._criteria.internalValue = value;
  }
  public resetCriteria() {
    this._criteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }
}
export interface HipObjectNetworkInfoCriteriaNetworkIsMobile {
  /**
  * Carrier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#carrier HipObject#carrier}
  */
  readonly carrier?: string;
}

export function hipObjectNetworkInfoCriteriaNetworkIsMobileToTerraform(struct?: HipObjectNetworkInfoCriteriaNetworkIsMobile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    carrier: cdktf.stringToTerraform(struct!.carrier),
  }
}


export function hipObjectNetworkInfoCriteriaNetworkIsMobileToHclTerraform(struct?: HipObjectNetworkInfoCriteriaNetworkIsMobile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    carrier: {
      value: cdktf.stringToHclTerraform(struct!.carrier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectNetworkInfoCriteriaNetworkIsMobileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectNetworkInfoCriteriaNetworkIsMobile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._carrier !== undefined) {
      hasAnyValues = true;
      internalValueResult.carrier = this._carrier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectNetworkInfoCriteriaNetworkIsMobile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._carrier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._carrier = value.carrier;
    }
  }

  // carrier - computed: false, optional: true, required: false
  private _carrier?: string; 
  public get carrier() {
    return this.getStringAttribute('carrier');
  }
  public set carrier(value: string) {
    this._carrier = value;
  }
  public resetCarrier() {
    this._carrier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get carrierInput() {
    return this._carrier;
  }
}
export interface HipObjectNetworkInfoCriteriaNetworkIsUnknown {
}

export function hipObjectNetworkInfoCriteriaNetworkIsUnknownToTerraform(struct?: HipObjectNetworkInfoCriteriaNetworkIsUnknown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function hipObjectNetworkInfoCriteriaNetworkIsUnknownToHclTerraform(struct?: HipObjectNetworkInfoCriteriaNetworkIsUnknown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class HipObjectNetworkInfoCriteriaNetworkIsUnknownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectNetworkInfoCriteriaNetworkIsUnknown | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectNetworkInfoCriteriaNetworkIsUnknown | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface HipObjectNetworkInfoCriteriaNetworkIsWifi {
  /**
  * SSID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#ssid HipObject#ssid}
  */
  readonly ssid?: string;
}

export function hipObjectNetworkInfoCriteriaNetworkIsWifiToTerraform(struct?: HipObjectNetworkInfoCriteriaNetworkIsWifi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssid: cdktf.stringToTerraform(struct!.ssid),
  }
}


export function hipObjectNetworkInfoCriteriaNetworkIsWifiToHclTerraform(struct?: HipObjectNetworkInfoCriteriaNetworkIsWifi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ssid: {
      value: cdktf.stringToHclTerraform(struct!.ssid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectNetworkInfoCriteriaNetworkIsWifiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectNetworkInfoCriteriaNetworkIsWifi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ssid !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssid = this._ssid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectNetworkInfoCriteriaNetworkIsWifi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ssid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ssid = value.ssid;
    }
  }

  // ssid - computed: false, optional: true, required: false
  private _ssid?: string; 
  public get ssid() {
    return this.getStringAttribute('ssid');
  }
  public set ssid(value: string) {
    this._ssid = value;
  }
  public resetSsid() {
    this._ssid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssidInput() {
    return this._ssid;
  }
}
export interface HipObjectNetworkInfoCriteriaNetworkIs {
  /**
  * Mobile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#mobile HipObject#mobile}
  */
  readonly mobile?: HipObjectNetworkInfoCriteriaNetworkIsMobile;
  /**
  * Unknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#unknown HipObject#unknown}
  */
  readonly unknown?: HipObjectNetworkInfoCriteriaNetworkIsUnknown;
  /**
  * Wifi
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#wifi HipObject#wifi}
  */
  readonly wifi?: HipObjectNetworkInfoCriteriaNetworkIsWifi;
}

export function hipObjectNetworkInfoCriteriaNetworkIsToTerraform(struct?: HipObjectNetworkInfoCriteriaNetworkIs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mobile: hipObjectNetworkInfoCriteriaNetworkIsMobileToTerraform(struct!.mobile),
    unknown: hipObjectNetworkInfoCriteriaNetworkIsUnknownToTerraform(struct!.unknown),
    wifi: hipObjectNetworkInfoCriteriaNetworkIsWifiToTerraform(struct!.wifi),
  }
}


export function hipObjectNetworkInfoCriteriaNetworkIsToHclTerraform(struct?: HipObjectNetworkInfoCriteriaNetworkIs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mobile: {
      value: hipObjectNetworkInfoCriteriaNetworkIsMobileToHclTerraform(struct!.mobile),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectNetworkInfoCriteriaNetworkIsMobile",
    },
    unknown: {
      value: hipObjectNetworkInfoCriteriaNetworkIsUnknownToHclTerraform(struct!.unknown),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectNetworkInfoCriteriaNetworkIsUnknown",
    },
    wifi: {
      value: hipObjectNetworkInfoCriteriaNetworkIsWifiToHclTerraform(struct!.wifi),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectNetworkInfoCriteriaNetworkIsWifi",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectNetworkInfoCriteriaNetworkIsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectNetworkInfoCriteriaNetworkIs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mobile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobile = this._mobile?.internalValue;
    }
    if (this._unknown?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknown = this._unknown?.internalValue;
    }
    if (this._wifi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wifi = this._wifi?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectNetworkInfoCriteriaNetworkIs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mobile.internalValue = undefined;
      this._unknown.internalValue = undefined;
      this._wifi.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mobile.internalValue = value.mobile;
      this._unknown.internalValue = value.unknown;
      this._wifi.internalValue = value.wifi;
    }
  }

  // mobile - computed: false, optional: true, required: false
  private _mobile = new HipObjectNetworkInfoCriteriaNetworkIsMobileOutputReference(this, "mobile");
  public get mobile() {
    return this._mobile;
  }
  public putMobile(value: HipObjectNetworkInfoCriteriaNetworkIsMobile) {
    this._mobile.internalValue = value;
  }
  public resetMobile() {
    this._mobile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileInput() {
    return this._mobile.internalValue;
  }

  // unknown - computed: false, optional: true, required: false
  private _unknown = new HipObjectNetworkInfoCriteriaNetworkIsUnknownOutputReference(this, "unknown");
  public get unknown() {
    return this._unknown;
  }
  public putUnknown(value: HipObjectNetworkInfoCriteriaNetworkIsUnknown) {
    this._unknown.internalValue = value;
  }
  public resetUnknown() {
    this._unknown.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownInput() {
    return this._unknown.internalValue;
  }

  // wifi - computed: false, optional: true, required: false
  private _wifi = new HipObjectNetworkInfoCriteriaNetworkIsWifiOutputReference(this, "wifi");
  public get wifi() {
    return this._wifi;
  }
  public putWifi(value: HipObjectNetworkInfoCriteriaNetworkIsWifi) {
    this._wifi.internalValue = value;
  }
  public resetWifi() {
    this._wifi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiInput() {
    return this._wifi.internalValue;
  }
}
export interface HipObjectNetworkInfoCriteriaNetworkIsNotEthernet {
}

export function hipObjectNetworkInfoCriteriaNetworkIsNotEthernetToTerraform(struct?: HipObjectNetworkInfoCriteriaNetworkIsNotEthernet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function hipObjectNetworkInfoCriteriaNetworkIsNotEthernetToHclTerraform(struct?: HipObjectNetworkInfoCriteriaNetworkIsNotEthernet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class HipObjectNetworkInfoCriteriaNetworkIsNotEthernetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectNetworkInfoCriteriaNetworkIsNotEthernet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectNetworkInfoCriteriaNetworkIsNotEthernet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface HipObjectNetworkInfoCriteriaNetworkIsNotMobile {
  /**
  * Carrier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#carrier HipObject#carrier}
  */
  readonly carrier?: string;
}

export function hipObjectNetworkInfoCriteriaNetworkIsNotMobileToTerraform(struct?: HipObjectNetworkInfoCriteriaNetworkIsNotMobile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    carrier: cdktf.stringToTerraform(struct!.carrier),
  }
}


export function hipObjectNetworkInfoCriteriaNetworkIsNotMobileToHclTerraform(struct?: HipObjectNetworkInfoCriteriaNetworkIsNotMobile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    carrier: {
      value: cdktf.stringToHclTerraform(struct!.carrier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectNetworkInfoCriteriaNetworkIsNotMobileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectNetworkInfoCriteriaNetworkIsNotMobile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._carrier !== undefined) {
      hasAnyValues = true;
      internalValueResult.carrier = this._carrier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectNetworkInfoCriteriaNetworkIsNotMobile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._carrier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._carrier = value.carrier;
    }
  }

  // carrier - computed: false, optional: true, required: false
  private _carrier?: string; 
  public get carrier() {
    return this.getStringAttribute('carrier');
  }
  public set carrier(value: string) {
    this._carrier = value;
  }
  public resetCarrier() {
    this._carrier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get carrierInput() {
    return this._carrier;
  }
}
export interface HipObjectNetworkInfoCriteriaNetworkIsNotUnknown {
}

export function hipObjectNetworkInfoCriteriaNetworkIsNotUnknownToTerraform(struct?: HipObjectNetworkInfoCriteriaNetworkIsNotUnknown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function hipObjectNetworkInfoCriteriaNetworkIsNotUnknownToHclTerraform(struct?: HipObjectNetworkInfoCriteriaNetworkIsNotUnknown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class HipObjectNetworkInfoCriteriaNetworkIsNotUnknownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectNetworkInfoCriteriaNetworkIsNotUnknown | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectNetworkInfoCriteriaNetworkIsNotUnknown | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface HipObjectNetworkInfoCriteriaNetworkIsNotWifi {
  /**
  * SSID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#ssid HipObject#ssid}
  */
  readonly ssid?: string;
}

export function hipObjectNetworkInfoCriteriaNetworkIsNotWifiToTerraform(struct?: HipObjectNetworkInfoCriteriaNetworkIsNotWifi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssid: cdktf.stringToTerraform(struct!.ssid),
  }
}


export function hipObjectNetworkInfoCriteriaNetworkIsNotWifiToHclTerraform(struct?: HipObjectNetworkInfoCriteriaNetworkIsNotWifi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ssid: {
      value: cdktf.stringToHclTerraform(struct!.ssid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectNetworkInfoCriteriaNetworkIsNotWifiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectNetworkInfoCriteriaNetworkIsNotWifi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ssid !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssid = this._ssid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectNetworkInfoCriteriaNetworkIsNotWifi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ssid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ssid = value.ssid;
    }
  }

  // ssid - computed: false, optional: true, required: false
  private _ssid?: string; 
  public get ssid() {
    return this.getStringAttribute('ssid');
  }
  public set ssid(value: string) {
    this._ssid = value;
  }
  public resetSsid() {
    this._ssid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssidInput() {
    return this._ssid;
  }
}
export interface HipObjectNetworkInfoCriteriaNetworkIsNot {
  /**
  * Ethernet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#ethernet HipObject#ethernet}
  */
  readonly ethernet?: HipObjectNetworkInfoCriteriaNetworkIsNotEthernet;
  /**
  * Mobile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#mobile HipObject#mobile}
  */
  readonly mobile?: HipObjectNetworkInfoCriteriaNetworkIsNotMobile;
  /**
  * Unknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#unknown HipObject#unknown}
  */
  readonly unknown?: HipObjectNetworkInfoCriteriaNetworkIsNotUnknown;
  /**
  * Wifi
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#wifi HipObject#wifi}
  */
  readonly wifi?: HipObjectNetworkInfoCriteriaNetworkIsNotWifi;
}

export function hipObjectNetworkInfoCriteriaNetworkIsNotToTerraform(struct?: HipObjectNetworkInfoCriteriaNetworkIsNot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet: hipObjectNetworkInfoCriteriaNetworkIsNotEthernetToTerraform(struct!.ethernet),
    mobile: hipObjectNetworkInfoCriteriaNetworkIsNotMobileToTerraform(struct!.mobile),
    unknown: hipObjectNetworkInfoCriteriaNetworkIsNotUnknownToTerraform(struct!.unknown),
    wifi: hipObjectNetworkInfoCriteriaNetworkIsNotWifiToTerraform(struct!.wifi),
  }
}


export function hipObjectNetworkInfoCriteriaNetworkIsNotToHclTerraform(struct?: HipObjectNetworkInfoCriteriaNetworkIsNot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ethernet: {
      value: hipObjectNetworkInfoCriteriaNetworkIsNotEthernetToHclTerraform(struct!.ethernet),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectNetworkInfoCriteriaNetworkIsNotEthernet",
    },
    mobile: {
      value: hipObjectNetworkInfoCriteriaNetworkIsNotMobileToHclTerraform(struct!.mobile),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectNetworkInfoCriteriaNetworkIsNotMobile",
    },
    unknown: {
      value: hipObjectNetworkInfoCriteriaNetworkIsNotUnknownToHclTerraform(struct!.unknown),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectNetworkInfoCriteriaNetworkIsNotUnknown",
    },
    wifi: {
      value: hipObjectNetworkInfoCriteriaNetworkIsNotWifiToHclTerraform(struct!.wifi),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectNetworkInfoCriteriaNetworkIsNotWifi",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectNetworkInfoCriteriaNetworkIsNotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectNetworkInfoCriteriaNetworkIsNot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ethernet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernet = this._ethernet?.internalValue;
    }
    if (this._mobile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobile = this._mobile?.internalValue;
    }
    if (this._unknown?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknown = this._unknown?.internalValue;
    }
    if (this._wifi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wifi = this._wifi?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectNetworkInfoCriteriaNetworkIsNot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ethernet.internalValue = undefined;
      this._mobile.internalValue = undefined;
      this._unknown.internalValue = undefined;
      this._wifi.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ethernet.internalValue = value.ethernet;
      this._mobile.internalValue = value.mobile;
      this._unknown.internalValue = value.unknown;
      this._wifi.internalValue = value.wifi;
    }
  }

  // ethernet - computed: false, optional: true, required: false
  private _ethernet = new HipObjectNetworkInfoCriteriaNetworkIsNotEthernetOutputReference(this, "ethernet");
  public get ethernet() {
    return this._ethernet;
  }
  public putEthernet(value: HipObjectNetworkInfoCriteriaNetworkIsNotEthernet) {
    this._ethernet.internalValue = value;
  }
  public resetEthernet() {
    this._ethernet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetInput() {
    return this._ethernet.internalValue;
  }

  // mobile - computed: false, optional: true, required: false
  private _mobile = new HipObjectNetworkInfoCriteriaNetworkIsNotMobileOutputReference(this, "mobile");
  public get mobile() {
    return this._mobile;
  }
  public putMobile(value: HipObjectNetworkInfoCriteriaNetworkIsNotMobile) {
    this._mobile.internalValue = value;
  }
  public resetMobile() {
    this._mobile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileInput() {
    return this._mobile.internalValue;
  }

  // unknown - computed: false, optional: true, required: false
  private _unknown = new HipObjectNetworkInfoCriteriaNetworkIsNotUnknownOutputReference(this, "unknown");
  public get unknown() {
    return this._unknown;
  }
  public putUnknown(value: HipObjectNetworkInfoCriteriaNetworkIsNotUnknown) {
    this._unknown.internalValue = value;
  }
  public resetUnknown() {
    this._unknown.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownInput() {
    return this._unknown.internalValue;
  }

  // wifi - computed: false, optional: true, required: false
  private _wifi = new HipObjectNetworkInfoCriteriaNetworkIsNotWifiOutputReference(this, "wifi");
  public get wifi() {
    return this._wifi;
  }
  public putWifi(value: HipObjectNetworkInfoCriteriaNetworkIsNotWifi) {
    this._wifi.internalValue = value;
  }
  public resetWifi() {
    this._wifi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiInput() {
    return this._wifi.internalValue;
  }
}
export interface HipObjectNetworkInfoCriteriaNetwork {
  /**
  * Is
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#is HipObject#is}
  */
  readonly is?: HipObjectNetworkInfoCriteriaNetworkIs;
  /**
  * Is not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#is_not HipObject#is_not}
  */
  readonly isNot?: HipObjectNetworkInfoCriteriaNetworkIsNot;
}

export function hipObjectNetworkInfoCriteriaNetworkToTerraform(struct?: HipObjectNetworkInfoCriteriaNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is: hipObjectNetworkInfoCriteriaNetworkIsToTerraform(struct!.is),
    is_not: hipObjectNetworkInfoCriteriaNetworkIsNotToTerraform(struct!.isNot),
  }
}


export function hipObjectNetworkInfoCriteriaNetworkToHclTerraform(struct?: HipObjectNetworkInfoCriteriaNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is: {
      value: hipObjectNetworkInfoCriteriaNetworkIsToHclTerraform(struct!.is),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectNetworkInfoCriteriaNetworkIs",
    },
    is_not: {
      value: hipObjectNetworkInfoCriteriaNetworkIsNotToHclTerraform(struct!.isNot),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectNetworkInfoCriteriaNetworkIsNot",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectNetworkInfoCriteriaNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectNetworkInfoCriteriaNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._is?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.is = this._is?.internalValue;
    }
    if (this._isNot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNot = this._isNot?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectNetworkInfoCriteriaNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._is.internalValue = undefined;
      this._isNot.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._is.internalValue = value.is;
      this._isNot.internalValue = value.isNot;
    }
  }

  // is - computed: false, optional: true, required: false
  private _is = new HipObjectNetworkInfoCriteriaNetworkIsOutputReference(this, "is");
  public get is() {
    return this._is;
  }
  public putIs(value: HipObjectNetworkInfoCriteriaNetworkIs) {
    this._is.internalValue = value;
  }
  public resetIs() {
    this._is.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInput() {
    return this._is.internalValue;
  }

  // is_not - computed: false, optional: true, required: false
  private _isNot = new HipObjectNetworkInfoCriteriaNetworkIsNotOutputReference(this, "is_not");
  public get isNot() {
    return this._isNot;
  }
  public putIsNot(value: HipObjectNetworkInfoCriteriaNetworkIsNot) {
    this._isNot.internalValue = value;
  }
  public resetIsNot() {
    this._isNot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNotInput() {
    return this._isNot.internalValue;
  }
}
export interface HipObjectNetworkInfoCriteria {
  /**
  * Network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#network HipObject#network}
  */
  readonly network?: HipObjectNetworkInfoCriteriaNetwork;
}

export function hipObjectNetworkInfoCriteriaToTerraform(struct?: HipObjectNetworkInfoCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: hipObjectNetworkInfoCriteriaNetworkToTerraform(struct!.network),
  }
}


export function hipObjectNetworkInfoCriteriaToHclTerraform(struct?: HipObjectNetworkInfoCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network: {
      value: hipObjectNetworkInfoCriteriaNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectNetworkInfoCriteriaNetwork",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectNetworkInfoCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectNetworkInfoCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectNetworkInfoCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._network.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._network.internalValue = value.network;
    }
  }

  // network - computed: false, optional: true, required: false
  private _network = new HipObjectNetworkInfoCriteriaNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: HipObjectNetworkInfoCriteriaNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }
}
export interface HipObjectNetworkInfo {
  /**
  * Criteria
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#criteria HipObject#criteria}
  */
  readonly criteria?: HipObjectNetworkInfoCriteria;
}

export function hipObjectNetworkInfoToTerraform(struct?: HipObjectNetworkInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criteria: hipObjectNetworkInfoCriteriaToTerraform(struct!.criteria),
  }
}


export function hipObjectNetworkInfoToHclTerraform(struct?: HipObjectNetworkInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    criteria: {
      value: hipObjectNetworkInfoCriteriaToHclTerraform(struct!.criteria),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectNetworkInfoCriteria",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectNetworkInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectNetworkInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectNetworkInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._criteria.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._criteria.internalValue = value.criteria;
    }
  }

  // criteria - computed: false, optional: true, required: false
  private _criteria = new HipObjectNetworkInfoCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: HipObjectNetworkInfoCriteria) {
    this._criteria.internalValue = value;
  }
  public resetCriteria() {
    this._criteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }
}
export interface HipObjectPatchManagementCriteriaMissingPatchesSeverity {
  /**
  * Greater equal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#greater_equal HipObject#greater_equal}
  */
  readonly greaterEqual?: number;
  /**
  * Greater than
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#greater_than HipObject#greater_than}
  */
  readonly greaterThan?: number;
  /**
  * Is
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#is HipObject#is}
  */
  readonly is?: number;
  /**
  * Is not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#is_not HipObject#is_not}
  */
  readonly isNot?: number;
  /**
  * Less equal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#less_equal HipObject#less_equal}
  */
  readonly lessEqual?: number;
  /**
  * Less than
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#less_than HipObject#less_than}
  */
  readonly lessThan?: number;
}

export function hipObjectPatchManagementCriteriaMissingPatchesSeverityToTerraform(struct?: HipObjectPatchManagementCriteriaMissingPatchesSeverity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    greater_equal: cdktf.numberToTerraform(struct!.greaterEqual),
    greater_than: cdktf.numberToTerraform(struct!.greaterThan),
    is: cdktf.numberToTerraform(struct!.is),
    is_not: cdktf.numberToTerraform(struct!.isNot),
    less_equal: cdktf.numberToTerraform(struct!.lessEqual),
    less_than: cdktf.numberToTerraform(struct!.lessThan),
  }
}


export function hipObjectPatchManagementCriteriaMissingPatchesSeverityToHclTerraform(struct?: HipObjectPatchManagementCriteriaMissingPatchesSeverity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    greater_equal: {
      value: cdktf.numberToHclTerraform(struct!.greaterEqual),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    greater_than: {
      value: cdktf.numberToHclTerraform(struct!.greaterThan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is: {
      value: cdktf.numberToHclTerraform(struct!.is),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_not: {
      value: cdktf.numberToHclTerraform(struct!.isNot),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    less_equal: {
      value: cdktf.numberToHclTerraform(struct!.lessEqual),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    less_than: {
      value: cdktf.numberToHclTerraform(struct!.lessThan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectPatchManagementCriteriaMissingPatchesSeverityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectPatchManagementCriteriaMissingPatchesSeverity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._greaterEqual !== undefined) {
      hasAnyValues = true;
      internalValueResult.greaterEqual = this._greaterEqual;
    }
    if (this._greaterThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.greaterThan = this._greaterThan;
    }
    if (this._is !== undefined) {
      hasAnyValues = true;
      internalValueResult.is = this._is;
    }
    if (this._isNot !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNot = this._isNot;
    }
    if (this._lessEqual !== undefined) {
      hasAnyValues = true;
      internalValueResult.lessEqual = this._lessEqual;
    }
    if (this._lessThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.lessThan = this._lessThan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectPatchManagementCriteriaMissingPatchesSeverity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._greaterEqual = undefined;
      this._greaterThan = undefined;
      this._is = undefined;
      this._isNot = undefined;
      this._lessEqual = undefined;
      this._lessThan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._greaterEqual = value.greaterEqual;
      this._greaterThan = value.greaterThan;
      this._is = value.is;
      this._isNot = value.isNot;
      this._lessEqual = value.lessEqual;
      this._lessThan = value.lessThan;
    }
  }

  // greater_equal - computed: true, optional: true, required: false
  private _greaterEqual?: number; 
  public get greaterEqual() {
    return this.getNumberAttribute('greater_equal');
  }
  public set greaterEqual(value: number) {
    this._greaterEqual = value;
  }
  public resetGreaterEqual() {
    this._greaterEqual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greaterEqualInput() {
    return this._greaterEqual;
  }

  // greater_than - computed: true, optional: true, required: false
  private _greaterThan?: number; 
  public get greaterThan() {
    return this.getNumberAttribute('greater_than');
  }
  public set greaterThan(value: number) {
    this._greaterThan = value;
  }
  public resetGreaterThan() {
    this._greaterThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greaterThanInput() {
    return this._greaterThan;
  }

  // is - computed: true, optional: true, required: false
  private _is?: number; 
  public get is() {
    return this.getNumberAttribute('is');
  }
  public set is(value: number) {
    this._is = value;
  }
  public resetIs() {
    this._is = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInput() {
    return this._is;
  }

  // is_not - computed: true, optional: true, required: false
  private _isNot?: number; 
  public get isNot() {
    return this.getNumberAttribute('is_not');
  }
  public set isNot(value: number) {
    this._isNot = value;
  }
  public resetIsNot() {
    this._isNot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNotInput() {
    return this._isNot;
  }

  // less_equal - computed: true, optional: true, required: false
  private _lessEqual?: number; 
  public get lessEqual() {
    return this.getNumberAttribute('less_equal');
  }
  public set lessEqual(value: number) {
    this._lessEqual = value;
  }
  public resetLessEqual() {
    this._lessEqual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lessEqualInput() {
    return this._lessEqual;
  }

  // less_than - computed: true, optional: true, required: false
  private _lessThan?: number; 
  public get lessThan() {
    return this.getNumberAttribute('less_than');
  }
  public set lessThan(value: number) {
    this._lessThan = value;
  }
  public resetLessThan() {
    this._lessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lessThanInput() {
    return this._lessThan;
  }
}
export interface HipObjectPatchManagementCriteriaMissingPatches {
  /**
  * Check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#check HipObject#check}
  */
  readonly check: string;
  /**
  * Patches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#patches HipObject#patches}
  */
  readonly patches?: string[];
  /**
  * Severity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#severity HipObject#severity}
  */
  readonly severity?: HipObjectPatchManagementCriteriaMissingPatchesSeverity;
}

export function hipObjectPatchManagementCriteriaMissingPatchesToTerraform(struct?: HipObjectPatchManagementCriteriaMissingPatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check: cdktf.stringToTerraform(struct!.check),
    patches: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.patches),
    severity: hipObjectPatchManagementCriteriaMissingPatchesSeverityToTerraform(struct!.severity),
  }
}


export function hipObjectPatchManagementCriteriaMissingPatchesToHclTerraform(struct?: HipObjectPatchManagementCriteriaMissingPatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check: {
      value: cdktf.stringToHclTerraform(struct!.check),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    patches: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.patches),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    severity: {
      value: hipObjectPatchManagementCriteriaMissingPatchesSeverityToHclTerraform(struct!.severity),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectPatchManagementCriteriaMissingPatchesSeverity",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectPatchManagementCriteriaMissingPatchesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectPatchManagementCriteriaMissingPatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._check !== undefined) {
      hasAnyValues = true;
      internalValueResult.check = this._check;
    }
    if (this._patches !== undefined) {
      hasAnyValues = true;
      internalValueResult.patches = this._patches;
    }
    if (this._severity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectPatchManagementCriteriaMissingPatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._check = undefined;
      this._patches = undefined;
      this._severity.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._check = value.check;
      this._patches = value.patches;
      this._severity.internalValue = value.severity;
    }
  }

  // check - computed: true, optional: false, required: true
  private _check?: string; 
  public get check() {
    return this.getStringAttribute('check');
  }
  public set check(value: string) {
    this._check = value;
  }
  // Temporarily expose input value. Use with caution.
  public get checkInput() {
    return this._check;
  }

  // patches - computed: true, optional: true, required: false
  private _patches?: string[]; 
  public get patches() {
    return this.getListAttribute('patches');
  }
  public set patches(value: string[]) {
    this._patches = value;
  }
  public resetPatches() {
    this._patches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchesInput() {
    return this._patches;
  }

  // severity - computed: true, optional: true, required: false
  private _severity = new HipObjectPatchManagementCriteriaMissingPatchesSeverityOutputReference(this, "severity");
  public get severity() {
    return this._severity;
  }
  public putSeverity(value: HipObjectPatchManagementCriteriaMissingPatchesSeverity) {
    this._severity.internalValue = value;
  }
  public resetSeverity() {
    this._severity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity.internalValue;
  }
}
export interface HipObjectPatchManagementCriteria {
  /**
  * is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#is_enabled HipObject#is_enabled}
  */
  readonly isEnabled?: string;
  /**
  * Is Installed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#is_installed HipObject#is_installed}
  */
  readonly isInstalled?: boolean | cdktf.IResolvable;
  /**
  * Missing patches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#missing_patches HipObject#missing_patches}
  */
  readonly missingPatches?: HipObjectPatchManagementCriteriaMissingPatches;
}

export function hipObjectPatchManagementCriteriaToTerraform(struct?: HipObjectPatchManagementCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.stringToTerraform(struct!.isEnabled),
    is_installed: cdktf.booleanToTerraform(struct!.isInstalled),
    missing_patches: hipObjectPatchManagementCriteriaMissingPatchesToTerraform(struct!.missingPatches),
  }
}


export function hipObjectPatchManagementCriteriaToHclTerraform(struct?: HipObjectPatchManagementCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.stringToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_installed: {
      value: cdktf.booleanToHclTerraform(struct!.isInstalled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    missing_patches: {
      value: hipObjectPatchManagementCriteriaMissingPatchesToHclTerraform(struct!.missingPatches),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectPatchManagementCriteriaMissingPatches",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectPatchManagementCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectPatchManagementCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._isInstalled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isInstalled = this._isInstalled;
    }
    if (this._missingPatches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.missingPatches = this._missingPatches?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectPatchManagementCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isEnabled = undefined;
      this._isInstalled = undefined;
      this._missingPatches.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isEnabled = value.isEnabled;
      this._isInstalled = value.isInstalled;
      this._missingPatches.internalValue = value.missingPatches;
    }
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: string; 
  public get isEnabled() {
    return this.getStringAttribute('is_enabled');
  }
  public set isEnabled(value: string) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // is_installed - computed: true, optional: true, required: false
  private _isInstalled?: boolean | cdktf.IResolvable; 
  public get isInstalled() {
    return this.getBooleanAttribute('is_installed');
  }
  public set isInstalled(value: boolean | cdktf.IResolvable) {
    this._isInstalled = value;
  }
  public resetIsInstalled() {
    this._isInstalled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInstalledInput() {
    return this._isInstalled;
  }

  // missing_patches - computed: true, optional: true, required: false
  private _missingPatches = new HipObjectPatchManagementCriteriaMissingPatchesOutputReference(this, "missing_patches");
  public get missingPatches() {
    return this._missingPatches;
  }
  public putMissingPatches(value: HipObjectPatchManagementCriteriaMissingPatches) {
    this._missingPatches.internalValue = value;
  }
  public resetMissingPatches() {
    this._missingPatches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingPatchesInput() {
    return this._missingPatches.internalValue;
  }
}
export interface HipObjectPatchManagementVendor {
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#name HipObject#name}
  */
  readonly name: string;
  /**
  * Product name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#product HipObject#product}
  */
  readonly product?: string[];
}

export function hipObjectPatchManagementVendorToTerraform(struct?: HipObjectPatchManagementVendor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    product: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.product),
  }
}


export function hipObjectPatchManagementVendorToHclTerraform(struct?: HipObjectPatchManagementVendor | cdktf.IResolvable): any {
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
    product: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.product),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectPatchManagementVendorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HipObjectPatchManagementVendor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._product !== undefined) {
      hasAnyValues = true;
      internalValueResult.product = this._product;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectPatchManagementVendor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._product = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._product = value.product;
    }
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

  // product - computed: true, optional: true, required: false
  private _product?: string[]; 
  public get product() {
    return this.getListAttribute('product');
  }
  public set product(value: string[]) {
    this._product = value;
  }
  public resetProduct() {
    this._product = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }
}

export class HipObjectPatchManagementVendorList extends cdktf.ComplexList {
  public internalValue? : HipObjectPatchManagementVendor[] | cdktf.IResolvable

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
  public get(index: number): HipObjectPatchManagementVendorOutputReference {
    return new HipObjectPatchManagementVendorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HipObjectPatchManagement {
  /**
  * Criteria
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#criteria HipObject#criteria}
  */
  readonly criteria?: HipObjectPatchManagementCriteria;
  /**
  * Exclude vendor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#exclude_vendor HipObject#exclude_vendor}
  */
  readonly excludeVendor?: boolean | cdktf.IResolvable;
  /**
  * Vendor name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#vendor HipObject#vendor}
  */
  readonly vendor?: HipObjectPatchManagementVendor[] | cdktf.IResolvable;
}

export function hipObjectPatchManagementToTerraform(struct?: HipObjectPatchManagement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criteria: hipObjectPatchManagementCriteriaToTerraform(struct!.criteria),
    exclude_vendor: cdktf.booleanToTerraform(struct!.excludeVendor),
    vendor: cdktf.listMapper(hipObjectPatchManagementVendorToTerraform, false)(struct!.vendor),
  }
}


export function hipObjectPatchManagementToHclTerraform(struct?: HipObjectPatchManagement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    criteria: {
      value: hipObjectPatchManagementCriteriaToHclTerraform(struct!.criteria),
      isBlock: true,
      type: "struct",
      storageClassType: "HipObjectPatchManagementCriteria",
    },
    exclude_vendor: {
      value: cdktf.booleanToHclTerraform(struct!.excludeVendor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vendor: {
      value: cdktf.listMapperHcl(hipObjectPatchManagementVendorToHclTerraform, false)(struct!.vendor),
      isBlock: true,
      type: "list",
      storageClassType: "HipObjectPatchManagementVendorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HipObjectPatchManagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HipObjectPatchManagement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria?.internalValue;
    }
    if (this._excludeVendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeVendor = this._excludeVendor;
    }
    if (this._vendor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendor = this._vendor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HipObjectPatchManagement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._criteria.internalValue = undefined;
      this._excludeVendor = undefined;
      this._vendor.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._criteria.internalValue = value.criteria;
      this._excludeVendor = value.excludeVendor;
      this._vendor.internalValue = value.vendor;
    }
  }

  // criteria - computed: true, optional: true, required: false
  private _criteria = new HipObjectPatchManagementCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: HipObjectPatchManagementCriteria) {
    this._criteria.internalValue = value;
  }
  public resetCriteria() {
    this._criteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }

  // exclude_vendor - computed: true, optional: true, required: false
  private _excludeVendor?: boolean | cdktf.IResolvable; 
  public get excludeVendor() {
    return this.getBooleanAttribute('exclude_vendor');
  }
  public set excludeVendor(value: boolean | cdktf.IResolvable) {
    this._excludeVendor = value;
  }
  public resetExcludeVendor() {
    this._excludeVendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeVendorInput() {
    return this._excludeVendor;
  }

  // vendor - computed: true, optional: true, required: false
  private _vendor = new HipObjectPatchManagementVendorList(this, "vendor", false);
  public get vendor() {
    return this._vendor;
  }
  public putVendor(value: HipObjectPatchManagementVendor[] | cdktf.IResolvable) {
    this._vendor.internalValue = value;
  }
  public resetVendor() {
    this._vendor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object scm_hip_object}
*/
export class HipObject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_hip_object";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HipObject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HipObject to import
  * @param importFromId The id of the existing HipObject that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HipObject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_hip_object", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/hip_object scm_hip_object} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HipObjectConfig
  */
  public constructor(scope: Construct, id: string, config: HipObjectConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_hip_object',
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
    this._antiMalware.internalValue = config.antiMalware;
    this._certificate.internalValue = config.certificate;
    this._customChecks.internalValue = config.customChecks;
    this._dataLossPrevention.internalValue = config.dataLossPrevention;
    this._description = config.description;
    this._device = config.device;
    this._diskBackup.internalValue = config.diskBackup;
    this._diskEncryption.internalValue = config.diskEncryption;
    this._firewall.internalValue = config.firewall;
    this._folder = config.folder;
    this._hostInfo.internalValue = config.hostInfo;
    this._mobileDevice.internalValue = config.mobileDevice;
    this._name = config.name;
    this._networkInfo.internalValue = config.networkInfo;
    this._patchManagement.internalValue = config.patchManagement;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anti_malware - computed: true, optional: true, required: false
  private _antiMalware = new HipObjectAntiMalwareOutputReference(this, "anti_malware");
  public get antiMalware() {
    return this._antiMalware;
  }
  public putAntiMalware(value: HipObjectAntiMalware) {
    this._antiMalware.internalValue = value;
  }
  public resetAntiMalware() {
    this._antiMalware.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiMalwareInput() {
    return this._antiMalware.internalValue;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate = new HipObjectCertificateOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: HipObjectCertificate) {
    this._certificate.internalValue = value;
  }
  public resetCertificate() {
    this._certificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }

  // custom_checks - computed: false, optional: true, required: false
  private _customChecks = new HipObjectCustomChecksOutputReference(this, "custom_checks");
  public get customChecks() {
    return this._customChecks;
  }
  public putCustomChecks(value: HipObjectCustomChecks) {
    this._customChecks.internalValue = value;
  }
  public resetCustomChecks() {
    this._customChecks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customChecksInput() {
    return this._customChecks.internalValue;
  }

  // data_loss_prevention - computed: true, optional: true, required: false
  private _dataLossPrevention = new HipObjectDataLossPreventionOutputReference(this, "data_loss_prevention");
  public get dataLossPrevention() {
    return this._dataLossPrevention;
  }
  public putDataLossPrevention(value: HipObjectDataLossPrevention) {
    this._dataLossPrevention.internalValue = value;
  }
  public resetDataLossPrevention() {
    this._dataLossPrevention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLossPreventionInput() {
    return this._dataLossPrevention.internalValue;
  }

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

  // disk_backup - computed: true, optional: true, required: false
  private _diskBackup = new HipObjectDiskBackupOutputReference(this, "disk_backup");
  public get diskBackup() {
    return this._diskBackup;
  }
  public putDiskBackup(value: HipObjectDiskBackup) {
    this._diskBackup.internalValue = value;
  }
  public resetDiskBackup() {
    this._diskBackup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskBackupInput() {
    return this._diskBackup.internalValue;
  }

  // disk_encryption - computed: true, optional: true, required: false
  private _diskEncryption = new HipObjectDiskEncryptionOutputReference(this, "disk_encryption");
  public get diskEncryption() {
    return this._diskEncryption;
  }
  public putDiskEncryption(value: HipObjectDiskEncryption) {
    this._diskEncryption.internalValue = value;
  }
  public resetDiskEncryption() {
    this._diskEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionInput() {
    return this._diskEncryption.internalValue;
  }

  // firewall - computed: true, optional: true, required: false
  private _firewall = new HipObjectFirewallOutputReference(this, "firewall");
  public get firewall() {
    return this._firewall;
  }
  public putFirewall(value: HipObjectFirewall) {
    this._firewall.internalValue = value;
  }
  public resetFirewall() {
    this._firewall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallInput() {
    return this._firewall.internalValue;
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

  // host_info - computed: false, optional: true, required: false
  private _hostInfo = new HipObjectHostInfoOutputReference(this, "host_info");
  public get hostInfo() {
    return this._hostInfo;
  }
  public putHostInfo(value: HipObjectHostInfo) {
    this._hostInfo.internalValue = value;
  }
  public resetHostInfo() {
    this._hostInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInfoInput() {
    return this._hostInfo.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mobile_device - computed: false, optional: true, required: false
  private _mobileDevice = new HipObjectMobileDeviceOutputReference(this, "mobile_device");
  public get mobileDevice() {
    return this._mobileDevice;
  }
  public putMobileDevice(value: HipObjectMobileDevice) {
    this._mobileDevice.internalValue = value;
  }
  public resetMobileDevice() {
    this._mobileDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileDeviceInput() {
    return this._mobileDevice.internalValue;
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

  // network_info - computed: false, optional: true, required: false
  private _networkInfo = new HipObjectNetworkInfoOutputReference(this, "network_info");
  public get networkInfo() {
    return this._networkInfo;
  }
  public putNetworkInfo(value: HipObjectNetworkInfo) {
    this._networkInfo.internalValue = value;
  }
  public resetNetworkInfo() {
    this._networkInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInfoInput() {
    return this._networkInfo.internalValue;
  }

  // patch_management - computed: true, optional: true, required: false
  private _patchManagement = new HipObjectPatchManagementOutputReference(this, "patch_management");
  public get patchManagement() {
    return this._patchManagement;
  }
  public putPatchManagement(value: HipObjectPatchManagement) {
    this._patchManagement.internalValue = value;
  }
  public resetPatchManagement() {
    this._patchManagement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchManagementInput() {
    return this._patchManagement.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anti_malware: hipObjectAntiMalwareToTerraform(this._antiMalware.internalValue),
      certificate: hipObjectCertificateToTerraform(this._certificate.internalValue),
      custom_checks: hipObjectCustomChecksToTerraform(this._customChecks.internalValue),
      data_loss_prevention: hipObjectDataLossPreventionToTerraform(this._dataLossPrevention.internalValue),
      description: cdktf.stringToTerraform(this._description),
      device: cdktf.stringToTerraform(this._device),
      disk_backup: hipObjectDiskBackupToTerraform(this._diskBackup.internalValue),
      disk_encryption: hipObjectDiskEncryptionToTerraform(this._diskEncryption.internalValue),
      firewall: hipObjectFirewallToTerraform(this._firewall.internalValue),
      folder: cdktf.stringToTerraform(this._folder),
      host_info: hipObjectHostInfoToTerraform(this._hostInfo.internalValue),
      mobile_device: hipObjectMobileDeviceToTerraform(this._mobileDevice.internalValue),
      name: cdktf.stringToTerraform(this._name),
      network_info: hipObjectNetworkInfoToTerraform(this._networkInfo.internalValue),
      patch_management: hipObjectPatchManagementToTerraform(this._patchManagement.internalValue),
      snippet: cdktf.stringToTerraform(this._snippet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anti_malware: {
        value: hipObjectAntiMalwareToHclTerraform(this._antiMalware.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HipObjectAntiMalware",
      },
      certificate: {
        value: hipObjectCertificateToHclTerraform(this._certificate.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HipObjectCertificate",
      },
      custom_checks: {
        value: hipObjectCustomChecksToHclTerraform(this._customChecks.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HipObjectCustomChecks",
      },
      data_loss_prevention: {
        value: hipObjectDataLossPreventionToHclTerraform(this._dataLossPrevention.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HipObjectDataLossPrevention",
      },
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
      disk_backup: {
        value: hipObjectDiskBackupToHclTerraform(this._diskBackup.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HipObjectDiskBackup",
      },
      disk_encryption: {
        value: hipObjectDiskEncryptionToHclTerraform(this._diskEncryption.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HipObjectDiskEncryption",
      },
      firewall: {
        value: hipObjectFirewallToHclTerraform(this._firewall.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HipObjectFirewall",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_info: {
        value: hipObjectHostInfoToHclTerraform(this._hostInfo.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HipObjectHostInfo",
      },
      mobile_device: {
        value: hipObjectMobileDeviceToHclTerraform(this._mobileDevice.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HipObjectMobileDevice",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_info: {
        value: hipObjectNetworkInfoToHclTerraform(this._networkInfo.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HipObjectNetworkInfo",
      },
      patch_management: {
        value: hipObjectPatchManagementToHclTerraform(this._patchManagement.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HipObjectPatchManagement",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
